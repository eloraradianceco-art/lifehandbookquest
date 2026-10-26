/* ==========================================================
   HANDBOOK QUEST — player state, XP, streaks, badges
   Stored per-profile in localStorage. Two players supported.
   ========================================================== */
(function () {
  var KEY = 'handbook-quest-v1';

  var DEFAULT = {
    activeProfile: 0,
    profiles: [
      { name: 'Player 1', avatar: '🦊', data: null },
      { name: 'Player 2', avatar: '🐺', data: null }
    ]
  };

  function blankData() {
    return {
      xp: 0,
      lessons: {},        // uid -> { best: 0-100, plays: n, done: true }
      streak: 0,
      bestStreak: 0,
      lastDay: null,
      days: [],           // list of YYYY-MM-DD with activity
      badges: {},         // id -> YYYY-MM-DD earned
      dailyDone: null,    // YYYY-MM-DD of last completed daily
      answered: 0,
      correct: 0
    };
  }

  var root;
  try { root = JSON.parse(localStorage.getItem(KEY)) || null; } catch (e) { root = null; }
  if (!root || !root.profiles) root = JSON.parse(JSON.stringify(DEFAULT));
  root.profiles.forEach(function (p) { if (!p.data) p.data = blankData(); });

  var S = {};
  HQ.S = S;

  // Does this browser actually let us persist? (private windows refuse)
  S.storageOk = (function () {
    try {
      localStorage.setItem('__hq_probe', '1');
      localStorage.removeItem('__hq_probe');
      return true;
    } catch (e) { return false; }
  })();

  S.save = function () {
    try { localStorage.setItem(KEY, JSON.stringify(root)); }
    catch (e) { S.storageOk = false; }
  };
  S.root = function () { return root; };
  S.profiles = function () { return root.profiles; };
  S.activeIndex = function () { return root.activeProfile; };
  S.profile = function () { return root.profiles[root.activeProfile]; };
  S.d = function () { return S.profile().data; };

  S.setProfile = function (i) { root.activeProfile = i; S.save(); };
  S.rename = function (i, name, avatar) {
    root.profiles[i].name = name || root.profiles[i].name;
    if (avatar) root.profiles[i].avatar = avatar;
    S.save();
  };
  S.resetProfile = function (i) { root.profiles[i].data = blankData(); S.save(); };

  /* ---------- levels ---------- */
  // Rank thresholds: each level needs a bit more than the last.
  S.LEVELS = [
    { n: 1,  xp: 0,    title: 'Rookie' },
    { n: 2,  xp: 150,  title: 'Apprentice' },
    { n: 3,  xp: 400,  title: 'Handy' },
    { n: 4,  xp: 750,  title: 'Capable' },
    { n: 5,  xp: 1200, title: 'Squared Away' },
    { n: 6,  xp: 1800, title: 'Dependable' },
    { n: 7,  xp: 2550, title: 'Sharp' },
    { n: 8,  xp: 3450, title: 'Seasoned' },
    { n: 9,  xp: 4500, title: 'Steady Hand' },
    { n: 10, xp: 5700, title: 'Operator' },
    { n: 11, xp: 7100, title: 'Anchored' },
    { n: 12, xp: 8700, title: 'Grown' }
  ];

  S.level = function () {
    var xp = S.d().xp, cur = S.LEVELS[0];
    for (var i = 0; i < S.LEVELS.length; i++) if (xp >= S.LEVELS[i].xp) cur = S.LEVELS[i];
    var next = S.LEVELS[cur.n] || null;
    return {
      n: cur.n,
      title: cur.title,
      xp: xp,
      floor: cur.xp,
      ceil: next ? next.xp : cur.xp,
      next: next,
      pct: next ? Math.round(((xp - cur.xp) / (next.xp - cur.xp)) * 100) : 100
    };
  };

  /* ---------- daily streak ---------- */
  S.touchDay = function () {
    var d = S.d(), today = HQ.todayKey();
    if (d.lastDay === today) return;
    if (d.lastDay === null) d.streak = 1;
    else {
      var gap = HQ.daysBetween(d.lastDay, today);
      d.streak = gap === 1 ? d.streak + 1 : 1;
    }
    d.lastDay = today;
    if (d.days.indexOf(today) === -1) d.days.push(today);
    if (d.streak > d.bestStreak) d.bestStreak = d.streak;
    S.save();
  };

  // Streak shown as 0 if they've already missed a day.
  S.liveStreak = function () {
    var d = S.d();
    if (!d.lastDay) return 0;
    var gap = HQ.daysBetween(d.lastDay, HQ.todayKey());
    return gap <= 1 ? d.streak : 0;
  };

  /* ---------- progress ---------- */
  S.lesson = function (uid) { return S.d().lessons[uid] || null; };
  S.lessonDone = function (uid) { var r = S.lesson(uid); return !!(r && r.done); };

  S.bookProgress = function (bookId) {
    var b = HQ.bookById[bookId];
    var done = b.lessons.filter(function (l) { return S.lessonDone(l.uid); }).length;
    return { done: done, total: b.lessons.length, pct: Math.round((done / b.lessons.length) * 100) };
  };

  S.totalProgress = function () {
    var all = HQ.allLessons();
    var done = all.filter(function (l) { return S.lessonDone(l.uid); }).length;
    return { done: done, total: all.length, pct: Math.round((done / all.length) * 100) };
  };

  S.accuracy = function () {
    var d = S.d();
    return d.answered ? Math.round((d.correct / d.answered) * 100) : 0;
  };

  /* ---------- recording a finished lesson ---------- */
  S.recordLesson = function (uid, correct, total) {
    var d = S.d();
    var pct = Math.round((correct / total) * 100);
    var rec = d.lessons[uid] || { best: 0, plays: 0, done: false };
    var firstClear = !rec.done && pct >= 60;

    rec.plays++;
    if (pct > rec.best) rec.best = pct;
    if (pct >= 60) rec.done = true;
    d.lessons[uid] = rec;

    d.answered += total;
    d.correct += correct;

    // XP: 10 per correct answer, halved on a repeat run, +25 perfect bonus
    var base = correct * 10;
    if (!firstClear && rec.plays > 1) base = Math.round(base / 2);
    var perfect = correct === total ? 25 : 0;
    var streakBonus = S.liveStreak() >= 3 ? 15 : 0;
    var gained = base + perfect + streakBonus;

    var before = S.level().n;
    d.xp += gained;
    var after = S.level().n;

    S.touchDay();
    var newBadges = S.checkBadges();
    S.save();

    return {
      pct: pct, gained: gained, perfect: !!perfect, streakBonus: streakBonus,
      firstClear: firstClear, levelUp: after > before ? after : 0, badges: newBadges
    };
  };

  S.recordDaily = function (correct, total) {
    var d = S.d();
    d.answered += total; d.correct += correct;
    var gained = correct * 15 + (correct === total ? 50 : 0);
    var before = S.level().n;
    d.xp += gained;
    var after = S.level().n;
    d.dailyDone = HQ.todayKey();
    S.touchDay();
    var nb = S.checkBadges();
    S.save();
    return { gained: gained, levelUp: after > before ? after : 0, badges: nb };
  };

  S.dailyAvailable = function () { return S.d().dailyDone !== HQ.todayKey(); };

  /* ---------- badges ---------- */
  S.BADGES = [
    { id: 'first',    icon: '🌱', name: 'First Step',      desc: 'Finish your first lesson.',
      test: function (d) { return S.totalProgress().done >= 1; } },
    { id: 'five',     icon: '📘', name: 'Getting Going',   desc: 'Finish 5 lessons.',
      test: function (d) { return S.totalProgress().done >= 5; } },
    { id: 'twenty',   icon: '📚', name: 'Committed',       desc: 'Finish 20 lessons.',
      test: function (d) { return S.totalProgress().done >= 20; } },
    { id: 'fifty',    icon: '🏛️', name: 'Deep In',         desc: 'Finish 50 lessons.',
      test: function (d) { return S.totalProgress().done >= 50; } },
    { id: 'allbooks', icon: '👑', name: 'Fully Equipped',  desc: 'Finish every handbook.',
      test: function (d) { return S.totalProgress().pct === 100; } },
    { id: 'streak3',  icon: '🔥', name: 'Three Days',      desc: 'Hit a 3-day streak.',
      test: function (d) { return d.bestStreak >= 3; } },
    { id: 'streak7',  icon: '⚡', name: 'One Week',        desc: 'Hit a 7-day streak.',
      test: function (d) { return d.bestStreak >= 7; } },
    { id: 'streak30', icon: '💎', name: 'Thirty Days',     desc: 'Hit a 30-day streak.',
      test: function (d) { return d.bestStreak >= 30; } },
    { id: 'perfect5', icon: '🎯', name: 'Dead On',         desc: '5 perfect lessons.',
      test: function (d) {
        var n = 0; for (var k in d.lessons) if (d.lessons[k].best === 100) n++;
        return n >= 5; } },
    { id: 'safety',   icon: '🛟', name: 'Safety First',    desc: 'Finish the Emergency handbook.',
      test: function (d) { return S.bookProgress('emergency').pct === 100; } },
    { id: 'money',    icon: '💰', name: 'Money Smart',     desc: 'Finish the Money handbook.',
      test: function (d) { return S.bookProgress('money').pct === 100; } },
    { id: 'home',     icon: '🏠', name: 'House Proud',     desc: 'Finish the House handbook.',
      test: function (d) { return S.bookProgress('house').pct === 100; } },
    { id: 'level5',   icon: '🥈', name: 'Squared Away',    desc: 'Reach level 5.',
      test: function (d) { return S.level().n >= 5; } },
    { id: 'level10',  icon: '🥇', name: 'Operator',        desc: 'Reach level 10.',
      test: function (d) { return S.level().n >= 10; } },
    { id: 'sharp',    icon: '🧠', name: 'Sharp Shooter',   desc: '90% accuracy over 50+ answers.',
      test: function (d) { return d.answered >= 50 && S.accuracy() >= 90; } }
  ];

  S.checkBadges = function () {
    var d = S.d(), gained = [];
    S.BADGES.forEach(function (b) {
      if (!d.badges[b.id] && b.test(d)) { d.badges[b.id] = HQ.todayKey(); gained.push(b); }
    });
    return gained;
  };

  S.hasBadge = function (id) { return !!S.d().badges[id]; };

  /* ---------- next up ---------- */
  S.nextLesson = function () {
    var all = HQ.allLessons();
    for (var i = 0; i < all.length; i++) if (!S.lessonDone(all[i].uid)) return all[i];
    return null;
  };

  /* ---------- export / import ---------- */
  S.exportData = function () { return btoa(unescape(encodeURIComponent(JSON.stringify(root)))); };
  S.importData = function (str) {
    try {
      var parsed = JSON.parse(decodeURIComponent(escape(atob(str.trim()))));
      if (!parsed.profiles) return false;
      root = parsed;
      root.profiles.forEach(function (p) { if (!p.data) p.data = blankData(); });
      S.save(); return true;
    } catch (e) { return false; }
  };
})();
