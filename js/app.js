/* ==========================================================
   HANDBOOK QUEST — screens, routing, quiz engine
   ========================================================== */
(function () {
  var S = HQ.S;
  var app = document.getElementById('app');
  var nav = document.getElementById('nav');
  var view = { name: 'home' };

  /* ---------------- helpers ---------------- */
  function ring(pct, color, size, stroke) {
    size = size || 46; stroke = stroke || 4;
    var r = (size - stroke) / 2, c = 2 * Math.PI * r;
    var off = c - (pct / 100) * c;
    return '<svg class="ring" width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '">' +
      '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="' + stroke + '"/>' +
      '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke="' + color + '" stroke-width="' + stroke +
      '" stroke-dasharray="' + c + '" stroke-dashoffset="' + off + '" stroke-linecap="round" transform="rotate(-90 ' + size / 2 + ' ' + size / 2 + ')"/>' +
      '</svg>';
  }

  function go(name, params) {
    view = Object.assign({ name: name }, params || {});
    window.scrollTo(0, 0);
    render();
  }
  HQ.go = go;

  /* ---------------- header ---------------- */
  function header() {
    var lv = S.level(), p = S.profile(), st = S.liveStreak();
    return '' +
      '<header class="hdr"><div class="hdr-in">' +
        '<button class="avatar" data-act="profile">' + p.avatar + '</button>' +
        '<div class="hdr-mid">' +
          '<div class="hdr-top">' +
            '<span class="lvl">LV ' + lv.n + '</span>' +
            '<span class="rank">' + HQ.esc(lv.title) + '</span>' +
            '<span class="spark" title="Day streak">' + (st > 0 ? '🔥 ' + st : '🔥 0') + '</span>' +
          '</div>' +
          '<div class="xpbar"><div class="xpfill" style="width:' + lv.pct + '%"></div></div>' +
          '<div class="hdr-sub">' + lv.xp + ' XP' + (lv.next ? ' · ' + (lv.ceil - lv.xp) + ' to LV ' + lv.next.n : ' · MAX') + '</div>' +
        '</div>' +
      '</div></header>';
  }

  /* ---------------- bottom nav ---------------- */
  function renderNav() {
    var items = [
      { k: 'home', i: '🗺️', l: 'Map' },
      { k: 'daily', i: '⚡', l: 'Daily' },
      { k: 'badges', i: '🏅', l: 'Badges' },
      { k: 'profile', i: '👤', l: 'You' }
    ];
    nav.innerHTML = items.map(function (it) {
      var on = (view.name === it.k) || (it.k === 'home' && (view.name === 'book' || view.name === 'lesson'));
      return '<button class="navb' + (on ? ' on' : '') + '" data-nav="' + it.k + '">' +
        '<span class="ni">' + it.i + '</span><span class="nl">' + it.l + '</span>' +
        (it.k === 'daily' && S.dailyAvailable() ? '<span class="dot"></span>' : '') +
        '</button>';
    }).join('');
  }

  /* ---------------- HOME / MAP ---------------- */
  function screenHome() {
    var tp = S.totalProgress();
    var next = S.nextLesson();
    var parts = [];
    HQ.books.forEach(function (b) {
      if (parts.indexOf(b.part) === -1) parts.push(b.part);
    });

    var h = header();
    h += '<div class="wrap">';

    // continue card
    if (next) {
      var nb = HQ.bookById[next.bookId];
      h += '<button class="cont" data-lesson="' + next.uid + '" style="--c:' + nb.color + '">' +
        '<div class="cont-l">CONTINUE</div>' +
        '<div class="cont-t">' + HQ.esc(next.title) + '</div>' +
        '<div class="cont-s">' + HQ.esc(nb.title) + ' Handbook · ' + next.time + ' min</div>' +
        '<div class="cont-go">▶</div></button>';
    } else {
      h += '<div class="cont done"><div class="cont-l">COMPLETE</div>' +
        '<div class="cont-t">Every lesson finished</div>' +
        '<div class="cont-s">Replay any lesson, or run the Daily to stay sharp.</div></div>';
    }

    h += '<div class="prog-row"><div class="prog-txt"><b>' + tp.done + '</b> of ' + tp.total + ' lessons</div>' +
      '<div class="prog-bar"><div style="width:' + tp.pct + '%"></div></div>' +
      '<div class="prog-pct">' + tp.pct + '%</div></div>';

    parts.forEach(function (part) {
      h += '<h2 class="part">' + HQ.esc(part) + '</h2><div class="grid">';
      HQ.books.filter(function (b) { return b.part === part; }).forEach(function (b) {
        var pr = S.bookProgress(b.id);
        h += '<button class="card" data-book="' + b.id + '" style="--c:' + b.color + '">' +
          '<div class="card-ring">' + ring(pr.pct, b.color, 52, 4) +
            '<span class="card-icon">' + b.icon + '</span></div>' +
          '<div class="card-body"><div class="card-t">' + HQ.esc(b.title) + '</div>' +
          '<div class="card-s">' + HQ.esc(b.tag) + '</div>' +
          '<div class="card-p">' + pr.done + '/' + pr.total + ' lessons</div></div>' +
          (pr.pct === 100 ? '<span class="chk">✓</span>' : '') +
          '</button>';
      });
      h += '</div>';
    });

    h += '</div>';
    app.innerHTML = h;
  }

  /* ---------------- BOOK ---------------- */
  function screenBook() {
    var b = HQ.bookById[view.book];
    var pr = S.bookProgress(b.id);
    var h = '<div class="bhead" style="--c:' + b.color + '">' +
      '<div class="bh-mark" aria-hidden="true">' + b.icon + '</div>' +
      '<div class="bh-in">' +
        '<button class="back" data-act="home" aria-label="Back to map">‹</button>' +
        '<div class="bh-icon">' + b.icon + '</div>' +
        '<h1>' + HQ.esc(b.title) + '</h1>' +
        '<p>' + HQ.esc(b.blurb) + '</p>' +
        '<div class="bh-meta">' +
          '<div class="bh-bar"><div style="width:' + pr.pct + '%"></div></div>' +
          '<div class="bh-sub">' + pr.done + ' / ' + pr.total + '</div>' +
        '</div>' +
      '</div></div><div class="wrap"><div class="llist" style="--c:' + b.color + '">';

    b.lessons.forEach(function (l, i) {
      var rec = S.lesson(l.uid);
      var done = rec && rec.done;
      h += '<button class="lrow' + (done ? ' done' : '') + '" data-lesson="' + l.uid + '" style="--c:' + b.color + '">' +
        '<span class="lnum">' + (done ? '✓' : i + 1) + '</span>' +
        '<span class="lbody"><span class="lt">' + HQ.esc(l.title) + '</span>' +
        '<span class="ls">' + l.time + ' min · ' + l.questions.length + ' questions' +
        (rec ? ' · best ' + rec.best + '%' : '') + '</span></span>' +
        '<span class="larr">›</span></button>';
    });
    h += '</div></div>';
    app.innerHTML = h;
  }

  /* ---------------- LESSON ---------------- */
  var run = null;

  function startLesson(uid) {
    var l = HQ.lessonByUid(uid);
    run = { lesson: l, book: HQ.bookById[l.bookId], stage: 'teach', card: 0, qi: 0, correct: 0, answered: false, picks: [] };
    go('lesson');
  }

  function screenLesson() {
    var l = run.lesson, b = run.book;
    var total = l.teach.length + l.questions.length;
    var at = run.stage === 'teach' ? run.card : l.teach.length + run.qi;
    var pct = Math.round((at / total) * 100);

    var h = '<div class="lhead" style="--c:' + b.color + '"><div class="lhead-in">' +
      '<button class="x" data-act="quit" aria-label="Close lesson">✕</button>' +
      '<div class="lbar"><div style="width:' + pct + '%"></div></div>' +
      '<span class="lcount">' + (at + 1) + '/' + total + '</span></div></div>';

    h += '<div class="wrap lwrap" style="--c:' + b.color + '">';

    if (run.stage === 'teach') {
      var isLast = run.card === l.teach.length - 1;
      h += '<div class="tcard" key="t' + run.card + '">' +
        '<div class="tkick">' + b.icon + ' ' + HQ.esc(b.title).toUpperCase() + '</div>' +
        '<h2>' + HQ.esc(l.title) + '</h2>' +
        '<div class="tbody">' + l.teach[run.card] + '</div>' +
        (isLast ? '<div class="keybox"><span>KEY IDEA</span><p>' + HQ.esc(l.key) + '</p></div>' : '') +
        '</div>';
      h += '<button class="prim" data-act="tnext">' + (isLast ? 'Start the questions' : 'Next') + '</button>';
      if (run.card > 0) h += '<button class="ghost" data-act="tback">Back</button>';
    } else {
      var q = l.questions[run.qi];
      var order = run.order[run.qi];
      h += '<div class="qcard"><div class="qkick">QUESTION ' + (run.qi + 1) + ' OF ' + l.questions.length + '</div>' +
        '<h2>' + HQ.esc(q.q) + '</h2><div class="opts">';
      order.forEach(function (origIdx, pos) {
        var cls = 'opt';
        if (run.answered) {
          if (origIdx === q.correct) cls += ' right';
          else if (pos === run.pick) cls += ' wrong';
          else cls += ' dim';
        }
        h += '<button class="' + cls + '" data-opt="' + pos + '"' + (run.answered ? ' disabled' : '') + '>' +
          '<span class="obullet">' + String.fromCharCode(65 + pos) + '</span>' +
          '<span class="otext">' + HQ.esc(q.a[origIdx]) + '</span></button>';
      });
      h += '</div>';
      if (run.answered) {
        var wasRight = order[run.pick] === q.correct;
        h += '<div class="why ' + (wasRight ? 'ok' : 'no') + '">' +
          '<b>' + (wasRight ? '✓ Correct' : '✕ Not quite') + '</b><p>' + HQ.esc(q.why) + '</p></div>';
        h += '<button class="prim" data-act="qnext">' +
          (run.qi === l.questions.length - 1 ? 'See results' : 'Next question') + '</button>';
      }
      h += '</div>';
    }
    h += '</div>';
    app.innerHTML = h;
  }

  function beginQuestions() {
    var l = run.lesson;
    run.stage = 'quiz';
    run.order = l.questions.map(function (q, i) {
      return HQ.shuffle(q.a.map(function (_, j) { return j; }), (Date.now() % 9999) + i * 37);
    });
    render();
  }

  function answer(pos) {
    if (run.answered) return;
    var q = run.lesson.questions[run.qi];
    run.pick = pos; run.answered = true;
    if (run.order[run.qi][pos] === q.correct) run.correct++;
    render();
  }

  function nextQuestion() {
    if (run.qi === run.lesson.questions.length - 1) {
      var res = S.recordLesson(run.lesson.uid, run.correct, run.lesson.questions.length);
      go('results', { res: res, correct: run.correct, total: run.lesson.questions.length, mode: 'lesson' });
    } else {
      run.qi++; run.answered = false; run.pick = null; render();
    }
  }

  /* ---------------- DAILY ---------------- */
  function startDaily() {
    var pool = [];
    HQ.allLessons().forEach(function (l) {
      if (S.lessonDone(l.uid)) l.questions.forEach(function (q) { pool.push({ q: q, l: l }); });
    });
    if (pool.length < 5) {
      HQ.allLessons().forEach(function (l) {
        if (!S.lessonDone(l.uid)) l.questions.forEach(function (q) { pool.push({ q: q, l: l }); });
      });
    }
    var seedDay = HQ.todayKey().split('-').join('');
    var picks = HQ.shuffle(pool, Number(seedDay) % 99991).slice(0, 5);
    run = {
      daily: true, items: picks, qi: 0, correct: 0, answered: false,
      order: picks.map(function (p, i) {
        return HQ.shuffle(p.q.a.map(function (_, j) { return j; }), Number(seedDay) + i * 53);
      })
    };
    go('dailyrun');
  }

  function screenDaily() {
    var avail = S.dailyAvailable();
    var d = S.d();
    var h = header() + '<div class="wrap">';
    h += '<div class="daily-hero' + (avail ? '' : ' spent') + '">' +
      '<div class="dh-ic">⚡</div><h1>Daily Challenge</h1>' +
      '<p>Five questions pulled from everything you have learned. Double XP.</p>' +
      (avail
        ? '<button class="prim" data-act="daily-start">Start today\'s five</button>'
        : '<div class="dh-done">✓ Done for today — come back tomorrow</div>') +
      '</div>';
    h += '<div class="stats">' +
      stat('🔥', S.liveStreak(), 'Day streak') +
      stat('🏆', d.bestStreak, 'Best streak') +
      stat('🎯', S.accuracy() + '%', 'Accuracy') +
      stat('💬', d.answered, 'Answered') +
      '</div>';

    // 14 day grid
    h += '<h2 class="part">Last 14 days</h2><div class="cal">';
    for (var i = 13; i >= 0; i--) {
      var dt = new Date(); dt.setDate(dt.getDate() - i);
      var key = dt.getFullYear() + '-' + String(dt.getMonth() + 1).padStart(2, '0') + '-' + String(dt.getDate()).padStart(2, '0');
      var on = d.days.indexOf(key) !== -1;
      h += '<div class="cday' + (on ? ' on' : '') + '" title="' + key + '">' + dt.getDate() + '</div>';
    }
    h += '</div></div>';
    app.innerHTML = h;
  }

  function stat(ic, val, lab) {
    return '<div class="stat"><div class="sv">' + ic + ' ' + val + '</div><div class="sl">' + lab + '</div></div>';
  }

  function screenDailyRun() {
    var it = run.items[run.qi], q = it.q, order = run.order[run.qi];
    var pct = Math.round((run.qi / run.items.length) * 100);
    var b = HQ.bookById[it.l.bookId];
    var h = '<div class="lhead" style="--c:' + b.color + '"><div class="lhead-in">' +
      '<button class="x" data-act="quit" aria-label="Close">✕</button>' +
      '<div class="lbar"><div style="width:' + pct + '%"></div></div>' +
      '<span class="lcount">' + (run.qi + 1) + '/' + run.items.length + '</span></div></div>';
    h += '<div class="wrap lwrap" style="--c:' + b.color + '"><div class="qcard">' +
      '<div class="qkick">' + b.icon + ' ' + HQ.esc(b.title).toUpperCase() + '</div>' +
      '<h2>' + HQ.esc(q.q) + '</h2><div class="opts">';
    order.forEach(function (origIdx, pos) {
      var cls = 'opt';
      if (run.answered) {
        if (origIdx === q.correct) cls += ' right';
        else if (pos === run.pick) cls += ' wrong';
        else cls += ' dim';
      }
      h += '<button class="' + cls + '" data-dopt="' + pos + '"' + (run.answered ? ' disabled' : '') + '>' +
        '<span class="obullet">' + String.fromCharCode(65 + pos) + '</span>' +
        '<span class="otext">' + HQ.esc(q.a[origIdx]) + '</span></button>';
    });
    h += '</div>';
    if (run.answered) {
      var ok = order[run.pick] === q.correct;
      h += '<div class="why ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? '✓ Correct' : '✕ Not quite') +
        '</b><p>' + HQ.esc(q.why) + '</p></div>';
      h += '<button class="prim" data-act="dnext">' +
        (run.qi === run.items.length - 1 ? 'See results' : 'Next') + '</button>';
    }
    h += '</div></div>';
    app.innerHTML = h;
  }

  /* ---------------- RESULTS ---------------- */
  function screenResults() {
    var r = view.res, pct = Math.round((view.correct / view.total) * 100);
    var tone = pct === 100 ? 'perfect' : pct >= 60 ? 'pass' : 'fail';
    var title = pct === 100 ? 'Perfect' : pct >= 60 ? 'Nice work' : 'Not yet';
    var h = '<div class="wrap res ' + tone + '">';
    h += '<div class="res-ring">' + ring(pct, pct >= 60 ? '#49B47A' : '#D4703A', 128, 9) +
      '<span class="res-pct">' + pct + '<i>%</i></span></div>';
    h += '<h1>' + title + '</h1>';
    h += '<p class="res-sub">' + view.correct + ' of ' + view.total + ' correct</p>';
    h += '<div class="xpgain">+' + r.gained + ' XP</div>';
    h += '<div class="bonuses">';
    if (r.perfect) h += '<span class="bon">🎯 Perfect +25</span>';
    if (r.streakBonus) h += '<span class="bon">🔥 Streak +' + r.streakBonus + '</span>';
    if (r.firstClear) h += '<span class="bon">🌟 First clear</span>';
    h += '</div>';
    if (r.levelUp) h += '<div class="levelup">⬆ LEVEL ' + r.levelUp + ' — ' + HQ.esc(S.level().title) + '</div>';
    if (r.badges && r.badges.length) {
      h += '<div class="newbadges"><div class="nb-l">BADGE UNLOCKED</div>';
      r.badges.forEach(function (b) {
        h += '<div class="nb"><span class="nbi">' + b.icon + '</span><span><b>' + HQ.esc(b.name) + '</b><br>' + HQ.esc(b.desc) + '</span></div>';
      });
      h += '</div>';
    }
    if (pct < 60) h += '<p class="res-note">You need 60% to clear a lesson. Run it again — the explanations stick the second time.</p>';
    h += '<div class="res-btns">';
    if (view.mode === 'lesson') {
      h += '<button class="prim" data-act="again">Try again</button>';
      var l = run && run.lesson;
      if (l) {
        var b2 = HQ.bookById[l.bookId];
        var nx = b2.lessons[l.index + 1];
        if (nx && pct >= 60) h += '<button class="prim alt" data-lesson="' + nx.uid + '">Next lesson ›</button>';
      }
    }
    h += '<button class="ghost" data-act="home">Back to map</button></div></div>';
    app.innerHTML = h;
  }

  /* ---------------- BADGES ---------------- */
  function screenBadges() {
    var h = header() + '<div class="wrap"><h2 class="part">Badges</h2><div class="bgrid">';
    S.BADGES.forEach(function (b) {
      var got = S.hasBadge(b.id);
      h += '<div class="badge' + (got ? ' got' : '') + '">' +
        '<div class="bi">' + (got ? b.icon : '🔒') + '</div>' +
        '<div class="bn">' + HQ.esc(b.name) + '</div>' +
        '<div class="bd">' + HQ.esc(b.desc) + '</div>' +
        (got ? '<div class="bw">' + S.d().badges[b.id] + '</div>' : '') +
        '</div>';
    });
    h += '</div>';

    h += '<h2 class="part">Handbook progress</h2><div class="bookprog">';
    HQ.books.forEach(function (b) {
      var pr = S.bookProgress(b.id);
      h += '<div class="bp"><span class="bpi" style="color:' + b.color + '">' + b.icon + '</span>' +
        '<span class="bpn">' + HQ.esc(b.title) + '</span>' +
        '<span class="bpbar"><i style="width:' + pr.pct + '%;background:' + b.color + '"></i></span>' +
        '<span class="bpp">' + pr.pct + '%</span></div>';
    });
    h += '</div></div>';
    app.innerHTML = h;
  }

  /* ---------------- PROFILE ---------------- */
  var AVATARS = ['🦊', '🐺', '🦉', '🐢', '🦅', '🐻', '🦌', '🐨', '🦁', '🐙'];

  function screenProfile() {
    var d = S.d(), lv = S.level(), tp = S.totalProgress();
    var h = header() + '<div class="wrap">';

    h += '<h2 class="part">Who is playing</h2><div class="pswitch">';
    S.profiles().forEach(function (p, i) {
      var pd = p.data;
      h += '<button class="pcard' + (i === S.activeIndex() ? ' on' : '') + '" data-prof="' + i + '">' +
        '<span class="pav">' + p.avatar + '</span>' +
        '<span class="pn">' + HQ.esc(p.name) + '</span>' +
        '<span class="pxp">' + pd.xp + ' XP</span></button>';
    });
    h += '</div>';

    h += '<div class="pedit"><label>Name</label>' +
      '<input id="pname" value="' + HQ.esc(S.profile().name) + '" maxlength="18">' +
      '<label>Avatar</label><div class="avrow">' +
      AVATARS.map(function (a) {
        return '<button class="avb' + (a === S.profile().avatar ? ' on' : '') + '" data-av="' + a + '">' + a + '</button>';
      }).join('') + '</div>' +
      '<button class="prim" data-act="save-prof">Save</button></div>';

    h += '<h2 class="part">Your numbers</h2><div class="stats">' +
      stat('⭐', d.xp, 'Total XP') +
      stat('📘', tp.done + '/' + tp.total, 'Lessons') +
      stat('🎯', S.accuracy() + '%', 'Accuracy') +
      stat('🏅', Object.keys(d.badges).length, 'Badges') +
      stat('🔥', S.liveStreak(), 'Streak') +
      stat('📅', d.days.length, 'Active days') +
      '</div>';

    h += '<h2 class="part">Rank</h2><div class="ranks">';
    S.LEVELS.forEach(function (L) {
      h += '<div class="rk' + (L.n <= lv.n ? ' on' : '') + '"><span class="rkn">' + L.n + '</span>' +
        '<span class="rkt">' + HQ.esc(L.title) + '</span><span class="rkx">' + L.xp + ' XP</span></div>';
    });
    h += '</div>';

    h += '<h2 class="part">Data</h2><div class="danger">';
    if (!S.storageOk) {
      h += '<div class="warnbox"><b>Progress is not being saved</b>' +
        '<p>This browser is blocking local storage — most likely a private window. ' +
        'Everything works, but it resets when you close the tab.</p></div>';
    }
    h += '' +
      '<button class="ghost" data-act="export">Copy backup code</button>' +
      '<button class="ghost" data-act="import">Restore from code</button>' +
      '<button class="ghost red" data-act="reset">Reset this player</button>' +
      '<p class="fine">Progress is stored in this browser only. Use the backup code to move it to another device.</p>' +
      '</div></div>';
    app.innerHTML = h;
  }


  /* ---------------- in-page dialog ---------------- */
  function closeModal() {
    var m = document.getElementById('modal');
    if (m) m.remove();
  }
  HQ.closeModal = closeModal;

  function modal(title, bodyHtml, buttons) {
    closeModal();
    var m = HQ.el('div', 'modal');
    m.id = 'modal';
    m.innerHTML =
      '<div class="modal-card" role="dialog" aria-modal="true" aria-label="' + HQ.esc(title) + '">' +
        '<h2>' + HQ.esc(title) + '</h2>' +
        '<div class="modal-body">' + bodyHtml + '</div>' +
        '<div class="modal-btns">' + buttons + '</div>' +
      '</div>';
    m.addEventListener('click', function (e) { if (e.target === m) closeModal(); });
    document.body.appendChild(m);
    var f = m.querySelector('textarea,button');
    if (f) f.focus();
  }

  function toast(msg, bad) {
    var t = HQ.el('div', 'toast' + (bad ? ' bad' : ''), HQ.esc(msg));
    document.body.appendChild(t);
    setTimeout(function () { t.classList.add('out'); }, 2200);
    setTimeout(function () { t.remove(); }, 2700);
  }

  /* ---------------- render ---------------- */
  function render() {
    if (view.name === 'home') screenHome();
    else if (view.name === 'book') screenBook();
    else if (view.name === 'lesson') screenLesson();
    else if (view.name === 'results') screenResults();
    else if (view.name === 'badges') screenBadges();
    else if (view.name === 'profile') screenProfile();
    else if (view.name === 'daily') screenDaily();
    else if (view.name === 'dailyrun') screenDailyRun();
    renderNav();
    document.body.className = (view.name === 'lesson' || view.name === 'dailyrun') ? 'focus' : '';
  }

  /* ---------------- events ---------------- */
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-act],[data-book],[data-lesson],[data-opt],[data-dopt],[data-nav],[data-prof],[data-av]');
    if (!t) return;

    if (t.dataset.nav) { go(t.dataset.nav); return; }
    if (t.dataset.book) { go('book', { book: t.dataset.book }); return; }
    if (t.dataset.lesson) { startLesson(t.dataset.lesson); return; }
    if (t.dataset.opt !== undefined) { answer(Number(t.dataset.opt)); return; }
    if (t.dataset.dopt !== undefined) {
      if (run.answered) return;
      var it = run.items[run.qi];
      run.pick = Number(t.dataset.dopt); run.answered = true;
      if (run.order[run.qi][run.pick] === it.q.correct) run.correct++;
      render(); return;
    }
    if (t.dataset.prof) { S.setProfile(Number(t.dataset.prof)); render(); return; }
    if (t.dataset.av) { S.rename(S.activeIndex(), null, t.dataset.av); render(); return; }

    var a = t.dataset.act;
    if (a === 'home') go('home');
    else if (a === 'profile') go('profile');
    else if (a === 'tnext') {
      if (run.card === run.lesson.teach.length - 1) beginQuestions();
      else { run.card++; render(); }
    }
    else if (a === 'tback') { run.card--; render(); }
    else if (a === 'qnext') nextQuestion();
    else if (a === 'dnext') {
      if (run.qi === run.items.length - 1) {
        var res = S.recordDaily(run.correct, run.items.length);
        res.perfect = run.correct === run.items.length;
        res.streakBonus = 0; res.firstClear = false;
        go('results', { res: res, correct: run.correct, total: run.items.length, mode: 'daily' });
      } else { run.qi++; run.answered = false; run.pick = null; render(); }
    }
    else if (a === 'daily-start') startDaily();
    else if (a === 'quit') {
      if (run && run.daily) go('daily');
      else if (run && run.lesson) go('book', { book: run.lesson.bookId });
      else go('home');
    }
    else if (a === 'again') { startLesson(run.lesson.uid); }
    else if (a === 'save-prof') {
      var v = document.getElementById('pname').value.trim();
      S.rename(S.activeIndex(), v || 'Player', null);
      render();
    }
    else if (a === 'export') {
      modal('Backup code',
        '<p>This code holds the progress for both players. Copy it somewhere safe, ' +
        'then paste it into Restore on the other device.</p>' +
        '<textarea id="codeout" readonly rows="4">' + HQ.esc(S.exportData()) + '</textarea>',
        '<button class="prim" data-act="copy-code">Copy code</button>' +
        '<button class="ghost" data-act="close-modal">Done</button>');
    }
    else if (a === 'copy-code') {
      var ta = document.getElementById('codeout');
      ta.select(); ta.setSelectionRange(0, 99999);
      var done = function () { toast('Code copied'); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(ta.value).then(done, function () {
          toast('Selected — use Copy', true);
        });
      } else { toast('Selected — use Copy', true); }
    }
    else if (a === 'import') {
      modal('Restore from a code',
        '<p>Paste a backup code below. This replaces all progress on this device ' +
        'for both players.</p>' +
        '<textarea id="codein" rows="4" placeholder="Paste the code here"></textarea>',
        '<button class="prim" data-act="do-import">Restore</button>' +
        '<button class="ghost" data-act="close-modal">Cancel</button>');
    }
    else if (a === 'do-import') {
      var val = document.getElementById('codein').value;
      if (!val.trim()) { toast('Paste a code first', true); return; }
      if (S.importData(val)) { closeModal(); render(); toast('Progress restored'); }
      else { toast('That code did not work', true); }
    }
    else if (a === 'reset') {
      modal('Reset ' + S.profile().name + '?',
        '<p>This erases every lesson, badge, streak and XP for this player. ' +
        'It cannot be undone. The other player is not affected.</p>' +
        '<p class="warn">Grab a backup code first if you are not sure.</p>',
        '<button class="prim danger-btn" data-act="do-reset">Yes, reset</button>' +
        '<button class="ghost" data-act="close-modal">Cancel</button>');
    }
    else if (a === 'do-reset') {
      S.resetProfile(S.activeIndex()); closeModal(); render(); toast('Progress reset');
    }
    else if (a === 'close-modal') closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  /* ---------------- boot ---------------- */
  HQ.books.sort(function (a, b) {
    var order = ['Yourself', 'The Home', 'Machinery', 'Together', 'Protection'];
    return order.indexOf(a.part) - order.indexOf(b.part);
  });
  render();
})();
