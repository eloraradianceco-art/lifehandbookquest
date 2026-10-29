<p align="center">
  <img src="assets/icon-rounded-512.png" width="132" alt="Handbook Quest">
</p>

<h1 align="center">Handbook Quest</h1>

A micro-learning game built from *The Handbook Series* — sixteen handbooks for starting an adult life, broken into short lessons with questions, XP, levels, streaks and badges.

**16 handbooks · 94 lessons · 282 questions · ~2–3 minutes each**

No build step. No dependencies. No accounts. Pure HTML, CSS and JavaScript — push it to GitHub and it runs.

---

## Deploying to GitHub Pages

1. Create a new repository on GitHub (public), e.g. `handbook-quest`.
2. Upload every file in this folder, keeping the structure intact.
   - Web UI: **Add file → Upload files**, drag the whole folder in, commit.
   - Or from a terminal:
     ```bash
     git init
     git add .
     git commit -m "Handbook Quest"
     git branch -M main
     git remote add origin https://github.com/YOUR-USERNAME/handbook-quest.git
     git push -u origin main
     ```
3. In the repo: **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**. Branch: `main`, folder: `/ (root)`. Save.
5. Wait about a minute. Your link will be:

   `https://YOUR-USERNAME.github.io/handbook-quest/`

That link works on any phone. On iPhone, open it in Safari → Share → **Add to Home Screen** and it behaves like an app.

> The `.nojekyll` file is required — it stops GitHub from trying to process the site as a blog. Do not delete it.

---

## How the game works

| Element | Detail |
|---|---|
| **Lessons** | A few short teaching cards, then 3 questions. 60% clears it. |
| **XP** | 10 per correct answer, +25 for a perfect lesson, +15 with a 3-day streak. Replays earn half. |
| **Levels** | 12 ranks, Rookie → Grown. |
| **Streak** | Counts consecutive days with any activity. Resets if a day is missed. |
| **Daily Challenge** | 5 questions pulled from completed lessons. Double XP. Once per day. |
| **Badges** | 15 to unlock — progress, streaks, accuracy, and finishing specific handbooks. |
| **Profiles** | Two players, separate progress, switch in the **You** tab. |

Progress saves to the browser's local storage. The **You** tab has a backup code to move progress to another device.

---

## Contents

**Part One — Yourself**
`Strengths` · `Morning` · `Body`

**Part Two — The Home**
`House` · `Kitchen`

**Part Three — The Machinery of a Life**
`Auto` · `Money` · `Work`

**Part Four — Together**
`Day Off` · `Us`

**Part Five — The World**
`People` · `Thinking` · `The Deal`

**Part Six — Protection**
`Papers` · `Digital` · `Emergency`

---

## Editing the content

All lesson content lives in `js/data/part1.js` through `part6.js`. Each handbook is one `HQ.register({...})` call:

```js
HQ.register({
  id: 'money', title: 'Money', part: 'Machinery', icon: '◉',
  color: '#A85245', tag: 'Short subtitle',
  blurb: 'One sentence shown on the handbook page.',
  lessons: [
    {
      id: 'l1', title: 'Lesson Title', time: 2,
      teach: [ 'Paragraph one. <b>Bold</b> works.', 'Paragraph two.' ],
      key: 'The one-line takeaway shown in the highlighted box.',
      questions: [
        {
          q: 'The question?',
          a: ['Correct answer', 'Wrong', 'Wrong', 'Wrong'],
          correct: 0,
          why: 'Explanation shown after they answer.'
        }
      ]
    }
  ]
});
```

Notes:
- `correct` is the index into `a` **before** shuffling. Answer order is randomised at runtime, so it is fine to always write the correct answer first.
- Keep 4 options per question and at least 3 questions per lesson.
- `teach` entries accept basic HTML (`<b>`, `<br>`, `<i>`).

To add a whole new handbook, add another `HQ.register({...})` in any data file. It appears on the map automatically — no other code changes needed.

---

## File structure

```
index.html            app shell
.nojekyll             required by GitHub Pages
css/style.css         all styling
js/core.js            namespace, content registry, helpers
js/state.js           XP, levels, streaks, badges, save/load
js/app.js             screens, routing, quiz engine
js/data/part1-6.js    all handbook content
```

---

## Source

Built from *The Handbook Series* (16 handbooks). The PDFs remain the reference version — this is the drilling tool.
