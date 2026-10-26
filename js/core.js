/* ==========================================================
   HANDBOOK QUEST — core namespace + content registry
   ========================================================== */
window.HQ = window.HQ || {};

HQ.books = [];
HQ.bookById = {};

HQ.register = function (book) {
  book.lessons.forEach(function (l, i) {
    l.bookId = book.id;
    l.index = i;
    l.uid = book.id + ':' + l.id;
    l.questions.forEach(function (q, qi) { q.uid = l.uid + ':' + qi; });
  });
  HQ.books.push(book);
  HQ.bookById[book.id] = book;
};

HQ.allLessons = function () {
  return HQ.books.reduce(function (acc, b) { return acc.concat(b.lessons); }, []);
};

HQ.lessonByUid = function (uid) {
  return HQ.allLessons().filter(function (l) { return l.uid === uid; })[0];
};

/* ---------- small helpers ---------- */
HQ.el = function (tag, cls, html) {
  var e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
};

HQ.shuffle = function (arr, seed) {
  var a = arr.slice();
  var s = seed === undefined ? Math.random() * 100000 : seed;
  function rnd() { s = (s * 9301 + 49297) % 233280; return s / 233280; }
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(rnd() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
};

HQ.todayKey = function () {
  var d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') +
         '-' + String(d.getDate()).padStart(2, '0');
};

HQ.daysBetween = function (a, b) {
  var pa = a.split('-').map(Number), pb = b.split('-').map(Number);
  var da = Date.UTC(pa[0], pa[1] - 1, pa[2]);
  var db = Date.UTC(pb[0], pb[1] - 1, pb[2]);
  return Math.round((db - da) / 86400000);
};

HQ.esc = function (s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
};
