/* PART FOUR — TOGETHER : Day Off, Us */

HQ.register({
  id: 'dayoff', title: 'Day Off', part: 'Together', icon: '✧',
  color: '#4F7C5E', tag: 'Restore, maintain, build',
  blurb: 'How to rest without wasting the day, and the reset that kills Sunday night dread.',
  lessons: [
    {
      id: 'l1', title: 'Why Days Off Go Wrong', time: 2,
      teach: [
        'A workday has structure imposed on it. A day off does not, so it defaults to whatever requires the least effort — which is almost always a screen.',
        'Six hours disappear, nothing got done, and you did not actually rest either, because passive consumption is not recovery. Then the chores pile onto Sunday night.',
        'The fix is not more discipline. It is <b>a light structure</b> so the day cannot dissolve.',
        '<b>The honest test:</b> at the end of a day off, do you feel more ready for tomorrow than you did yesterday? That is the only metric that matters.'
      ],
      key: 'Unstructured does not mean unplanned.',
      questions: [
        { q: 'What is the only real test of whether a day off worked?',
          a: ['Do you feel more ready for tomorrow than you did yesterday?', 'Did you relax?', 'Did you get your chores done?', 'Did you sleep in?'],
          correct: 0, why: 'A day can feel relaxing while it was happening and still leave you worse off Monday.' },
        { q: 'Why do unplanned days off dissolve?',
          a: ['With no structure, the day defaults to whatever takes the least effort', 'People are lazy', 'There is too much to do', 'Weekends are too short'],
          correct: 0, why: 'The default is almost always a screen, and passive consumption is not recovery.' },
        { q: 'What are the three jobs every day off carries?',
          a: ['Restore, Maintain, Build', 'Rest, Clean, Socialize', 'Sleep, Eat, Exercise', 'Plan, Execute, Review'],
          correct: 0, why: 'Skip Maintain and next week collapses. Skip Restore and you burn out. Skip Build and years pass with nothing to show.' }
      ]
    },
    {
      id: 'l2', title: 'Real Rest vs Fake Rest', time: 3,
      teach: [
        'Rest is not one thing. Match the type of rest to the type of tired.',
        '<b>Physically tired</b> → sleep, a nap, a slow walk, a hot shower. Not lying in bed for twelve hours, which makes you feel worse.<br><b>Mentally fried</b> → silence, a single-focus task, something with your hands. <b>Not more screens.</b><br><b>Sensory overloaded</b> → no noise, no notifications, phone in another room.<br><b>Emotionally drained</b> → being honest with someone safe; not being the person everyone leans on for one day.',
        'Scrolling, binge-watching and staying in bed all day feel like rest and are not.'
      ],
      key: 'If you are mentally fried, more screens is the opposite of what you need.',
      questions: [
        { q: 'You are mentally fried after a brutal week. Which actually restores you?',
          a: ['Silence, or a single-focus task with your hands', 'Six hours of video', 'Scrolling in bed', 'A loud night out'],
          correct: 0, why: 'A tired mind needs less input, not more. Giving it more stimulation is not rest.' },
        { q: 'Why is staying in bed until 1 p.m. not actual rest?',
          a: ['It makes you feel worse and wrecks that night\'s sleep', 'It is lazy', 'It wastes the morning', 'It is fine, actually'],
          correct: 0, why: 'Physical tiredness responds to sleep, a nap, a walk — not twelve hours horizontal.' },
        { q: 'Which is real rest rather than fake rest?',
          a: ['Cooking a real meal slowly', 'Binge-watching a season', 'Checking work email quickly', 'Running errands you call relaxing'],
          correct: 0, why: 'Real rest usually involves moving, being outside, being with people, or making something.' }
      ]
    },
    {
      id: 'l3', title: 'The Four Anchors', time: 3,
      teach: [
        'Do not build an hour-by-hour schedule — that is just work with different tasks. Set four fixed points and let the rest breathe.',
        '<b>1. Morning anchor</b> — get up within an hour of normal. This decides whether the day starts at 8 a.m. or 2 p.m.<br><b>2. Maintenance block</b> — all chores in one box, 2–3 hours max, with a <b>hard stop timer</b>. When it ends, it ends, finished or not.<br><b>3. The one thing</b> — the single meaningful item, chosen the night before.<br><b>4. Evening reset</b> — 30 minutes setting up the week.',
        'Every day off gets exactly <b>one</b> meaningful thing. Not ten. One.'
      ],
      key: 'Errands expand to fill whatever you give them. Put a timer on them.',
      questions: [
        { q: 'Why put a hard stop timer on the maintenance block?',
          a: ['Chores expand to fill whatever time they are given', 'To make it feel like a game', 'Because chores are unimportant', 'To fit more chores in'],
          correct: 0, why: 'Two to three hours, then done, finished or not. It will still be there next week.' },
        { q: 'How many meaningful things should one day off have?',
          a: ['Exactly one', 'Three to five', 'As many as fit', 'None — it is a day off'],
          correct: 0, why: 'If the one thing gets done, the day was a success even if nothing else was.' },
        { q: 'When should you choose "the one thing"?',
          a: ['The night before, while you still have judgment', 'In the morning when you see how you feel', 'After the chores are done', 'Whenever inspiration strikes'],
          correct: 0, why: 'Deciding in the morning from the couch is how nothing gets chosen.' }
      ]
    },
    {
      id: 'l4', title: 'The Weekly Reset', time: 3,
      teach: [
        'Ninety minutes on your last day off. This is the single highest-return block in the entire week.',
        '<b>House reset (60 min):</b> laundry done and put away, full house clean, fridge cleared, groceries bought against an actual meal plan, meals prepped, work clothes ready, gym bag packed.',
        '<b>Planning reset (30 min, together):</b> look at the week out loud, identify the three most important things, note conflicts and late shifts, confirm who handles what, fifteen-minute money check-in, decide one thing to look forward to.',
        'Sunday night dread almost never comes from the job. It comes from walking into Monday with dirty laundry, no groceries, an unread calendar and unresolved money questions.'
      ],
      key: 'The dread is a preparation problem, not a job problem.',
      questions: [
        { q: 'Where does Sunday night dread actually come from?',
          a: ['Being unprepared — no groceries, laundry undone, calendar unread', 'Hating your job', 'Not sleeping enough on weekends', 'Working too many hours'],
          correct: 0, why: 'Ninety minutes of resetting removes nearly all of it, because there is nothing left to be anxious about.' },
        { q: 'How long is the full weekly reset?',
          a: ['About 90 minutes — 60 on the house, 30 on planning together', 'A full day', '30 minutes total', 'Three hours'],
          correct: 0, why: 'It is the highest-return ninety minutes in your week.' },
        { q: 'What is included in the planning half?',
          a: ['Calendar, top three, conflicts, who-does-what, money check-in', 'Only the calendar', 'Goal setting for the year', 'Reviewing last week\'s failures'],
          correct: 0, why: 'Done out loud, together. A plan one person made alone is not a shared plan.' }
      ]
    },
    {
      id: 'l5', title: 'Screens, Money, and Each Other', time: 3,
      teach: [
        'Short-form feeds deliver unpredictable small rewards — the same mechanism that makes slot machines work. You can enjoy individual moments for four hours and finish feeling restless and worse about your life.',
        '<b>Decide when you will use it, rather than deciding when to stop.</b> Stopping is hard by design. Starting is a decision you control.',
        'Days off are when nearly all discretionary money gets spent, usually without a decision being made. Boredom plus a phone plus a card on file is expensive. Set the number before the day starts and keep a list of free options ready.',
        'Being in the same room on separate phones is not time together.'
      ],
      key: 'Replace, do not just remove. Boredom drives you back to the phone unless something else is already set up.',
      questions: [
        { q: 'Why is "I\'ll stop after a few minutes" an unreliable plan?',
          a: ['Feeds are engineered so stopping is hard; deciding when to start is the controllable part', 'People have no self-control', 'Timers do not work', 'A few minutes is too short'],
          correct: 0, why: 'Decide the window in advance rather than relying on an exit decision mid-scroll.' },
        { q: 'You cut screens from a day off and end up bored and back on your phone by noon. What was missing?',
          a: ['A replacement — the book out, shoes by the door, the project on the table', 'More willpower', 'A screen time app', 'A longer list of chores'],
          correct: 0, why: 'Removal without replacement fails. Set the alternative up in advance.' },
        { q: 'Why decide a spending number before the day starts?',
          a: ['Days off are when discretionary money leaks without any decision being made', 'To track expenses for taxes', 'Because weekends have higher prices', 'To avoid using credit'],
          correct: 0, why: 'Boredom plus a phone plus a saved card is an expensive combination. Have free options ready.' }
      ]
    }
  ]
});

HQ.register({
  id: 'us', title: 'Us', part: 'Together', icon: '❖',
  color: '#A34A6E', tag: 'Communication and conflict',
  blurb: 'How two people share a life without slowly becoming roommates.',
  lessons: [
    {
      id: 'l1', title: 'Listening and Speaking', time: 3,
      teach: [
        'Most people were never taught how to listen. They were taught how to wait.',
        '<b>Reflect it back before you answer.</b> "So what I\'m hearing is that you felt dismissed when I did that." Half of all arguments end right there, because the person feels heard.',
        '<b>Ask what they need before you fix it:</b> "Do you want help solving this or do you want me to listen?" This one question prevents an enormous amount of unnecessary conflict.',
        'Speaking: lead with the feeling and the specific behavior, not the character judgment. "I felt ignored when you were on your phone at dinner" works. "You never pay attention to me" starts a war.'
      ],
      key: 'Hinting, sighing and going quiet are not communication. They are tests, and the other person will fail them.',
      questions: [
        { q: 'Your partner is venting about work. What is the best first move?',
          a: ['Ask whether they want help solving it or want you to listen', 'Offer solutions immediately', 'Tell them about a similar situation of yours', 'Say it is not a big deal'],
          correct: 0, why: 'That single question prevents an enormous amount of unnecessary conflict.' },
        { q: 'Which phrasing actually works?',
          a: ['"I felt ignored when you were on your phone at dinner"', '"You never pay attention to me"', '"You always do this"', '"Most people would be upset by that"'],
          correct: 0, why: 'Specific behavior plus your feeling. Absolutes invite an argument about the exception instead of the issue.' },
        { q: 'Saying "it\'s not a big deal" to your partner is a statement about:',
          a: ['You, not them — if it is a big deal to them, it is a big deal', 'The objective facts', 'Their maturity', 'The situation itself'],
          correct: 0, why: 'Minimizing is one of the fastest ways to stop someone from bringing things to you.' }
      ]
    },
    {
      id: 'l2', title: 'The Four Patterns', time: 3,
      teach: [
        'Research has identified four communication habits that reliably predict a relationship ending. All four are fixable once you can name them.',
        '<b>Criticism</b> — attacking the person, not the behavior. <i>Antidote:</i> complain about the specific action and name your need.',
        '<b>Contempt</b> — mockery, sarcasm, eye-rolling, talking down. The strongest single predictor of a relationship ending. <i>Antidote:</i> speak gratitude out loud, regularly.',
        '<b>Defensiveness</b> — refusing any responsibility, counter-attacking. <i>Antidote:</i> own your part, even if it is only 10%.',
        '<b>Stonewalling</b> — shutting down, walking out. Usually overwhelm, not indifference. <i>Antidote:</i> call a timeout out loud and name a return time.'
      ],
      key: 'Contempt is the strongest predictor of failure. Gratitude spoken aloud is its direct antidote.',
      questions: [
        { q: 'Which pattern most strongly predicts a relationship ending?',
          a: ['Contempt — mockery, sarcasm, eye-rolling', 'Criticism', 'Defensiveness', 'Stonewalling'],
          correct: 0, why: 'It communicates that you look down on them. The antidote is a habit of stating what you appreciate out loud.' },
        { q: 'Your partner raises something and you immediately say "well what about when YOU..." That is:',
          a: ['Defensiveness — and the antidote is owning your 10%', 'Fair, if it is true', 'Stonewalling', 'Healthy boundary setting'],
          correct: 0, why: 'Taking responsibility for your part, even a small part, almost always lowers the temperature.' },
        { q: 'You are too overwhelmed to keep talking. What is the right version of stopping?',
          a: ['Say out loud that you are overwhelmed, name a return time, and come back', 'Walk out and cool off', 'Go quiet until it passes', 'Agree to whatever ends it'],
          correct: 0, why: 'Silence without a return is abandonment. A stated pause is not. Flooding takes about twenty minutes to clear.' }
      ]
    },
    {
      id: 'l3', title: 'Fighting Fair and Repairing', time: 3,
      teach: [
        'You will fight. The question is only whether you fight in a way you can come back from.',
        '<b>Off limits, always:</b> name-calling and mockery; bringing up old resolved issues as ammunition; threatening to leave to win an argument; using something told to you in confidence as a weapon; the silent treatment with no stated return; anything physical, including blocking a door or throwing things.',
        '<b>The repair, five steps:</b> name what you did → name the impact → apologize without the "but" → state what you will do differently → ask what they need.',
        'Everything after "but" erases everything before it.'
      ],
      key: 'How you repair matters more than how often you fight.',
      questions: [
        { q: '"I\'m sorry I yelled, but you were being unreasonable." What is wrong with this?',
          a: ['Everything after "but" erases everything before it — it is a defense, not an apology', 'It is too short', 'It should include a solution', 'Nothing, it is honest'],
          correct: 0, why: 'If you need to explain your side, do it in a separate sentence, later.' },
        { q: 'Which is explicitly off limits during a fight?',
          a: ['Threatening to leave in order to win the argument', 'Raising your concern directly', 'Asking for a timeout', 'Admitting your part first'],
          correct: 0, why: 'Also: old resolved issues as ammunition, confidences used as weapons, and anything physical including blocking a door.' },
        { q: 'What are the five steps of a real repair, in order?',
          a: ['Name what you did → name the impact → apologize → state what changes → ask what they need', 'Apologize → explain → promise → move on → forget it', 'Wait → cool down → apologize → make it up to them → never mention it', 'Explain → apologize → ask forgiveness → change the subject'],
          correct: 0, why: 'Specific, impact-aware, no "but," and small enough that you will actually do the new thing.' }
      ]
    },
    {
      id: 'l4', title: 'The Practical Machinery', time: 3,
      teach: [
        'Most day-to-day conflict is not about love. It is about logistics that were never agreed on.',
        '<b>Write the division of labor down.</b> Unassigned work becomes contested work. Account for the <b>invisible labor</b> — remembering appointments, tracking what is running low, planning meals, managing the calendar. It is real work and it is usually carried by one person without ever being named.',
        '<b>Money:</b> full transparency about the numbers, always. Agree on a threshold above which you check with each other. You probably grew up with different money scripts — neither is a character flaw and both need naming.',
        '<b>Family:</b> present a united front externally, disagree privately. Do not vent about your partner to people who will remember it after you have forgiven them.'
      ],
      key: 'If it belongs to everyone, it belongs to no one.',
      questions: [
        { q: 'What is "invisible labor"?',
          a: ['Remembering appointments, tracking supplies, planning meals, managing the calendar', 'Work done while the other person is out', 'Unpaid overtime', 'Chores nobody notices are finished'],
          correct: 0, why: 'It is real work, usually carried disproportionately by one person, and almost never named in a chore list.' },
        { q: 'Why not vent about your partner to your family?',
          a: ['You move on after you forgive them; your family does not', 'It is disloyal', 'They will take sides', 'It creates legal risk'],
          correct: 0, why: 'Present a united front externally and disagree privately.' },
        { q: 'One of you is a saver from scarcity, the other a spender from stability. What does the handbook say?',
          a: ['Neither is a character flaw, and both need naming out loud', 'The saver is right', 'The spender needs to change', 'Keep finances separate permanently'],
          correct: 0, why: 'Different money scripts are normal. Unnamed ones become recurring fights about something else.' }
      ]
    },
    {
      id: 'l5', title: 'Staying Connected', time: 3,
      teach: [
        'All day, people make small attempts to connect — a comment, a hand on your shoulder, showing you a photo. Each one is a small request for attention.',
        'Couples who stay together respond to most of these. Couples who separate mostly ignore them. Not the big conversations — <b>the tiny ones</b>. That is the actual mechanism.',
        '<b>Rhythms:</b> 15 minutes daily with phones away. One real date a week — it does not need to cost money, it does need to be intentional. Something new monthly. A bigger conversation quarterly.',
        'Say what you appreciate out loud, specifically, most days. Not "you\'re great" — "thank you for handling the car thing, I know you didn\'t have time."'
      ],
      key: 'Keep dating each other. The behaviors that made someone want to be with you are not a phase you graduate from.',
      questions: [
        { q: 'What is the actual mechanism that predicts couples staying together?',
          a: ['Responding to small bids for attention throughout the day', 'Having deep conversations weekly', 'Never fighting', 'Shared hobbies'],
          correct: 0, why: 'Not the big conversations — the tiny ones, dozens of times a day.' },
        { q: 'Which is a better expression of appreciation?',
          a: ['"Thank you for handling the car thing, I know you didn\'t have time"', '"You\'re great"', '"I appreciate everything you do"', '"You\'re the best"'],
          correct: 0, why: 'Specific gratitude spoken out loud is the direct antidote to contempt. Generic praise does little.' },
        { q: 'Why does novelty matter in a long relationship?',
          a: ['It keeps the relationship from flattening into a roommate arrangement', 'It keeps you physically fit', 'It impresses other people', 'It fills time on days off'],
          correct: 0, why: 'It does not have to cost money. A new trail, a new part of town, a recipe neither of you has made.' }
      ]
    },
    {
      id: 'l6', title: 'When Something Is Actually Wrong', time: 3,
      teach: [
        'Everything else in this handbook assumes two people who both want it to work. Sometimes that is not the situation.',
        '<b>Not normal conflict:</b> any physical violence, destruction of property, or blocking someone from leaving a room. Threats of any kind, including threats of self-harm if you leave. Controlling money, transportation, phone, or who you can see. Being gradually cut off from family and friends. Constant monitoring. Being made to doubt your own memory repeatedly. Pressure or coercion around physical boundaries. Feeling afraid of how they will react.',
        'That is not a communication problem and no amount of better listening fixes it. Talk to someone outside the relationship.',
        '<b>National Domestic Violence Hotline: 1-800-799-7233</b>, also available by text.'
      ],
      key: 'Walking on eggshells is information. You are allowed to ask someone whether what is happening is normal.',
      questions: [
        { q: 'Which is a sign of something beyond normal conflict?',
          a: ['Being gradually cut off from family and friends', 'Arguing about chores', 'Having different money habits', 'Going quiet when overwhelmed'],
          correct: 0, why: 'It happens gradually and with reasons that sounded good each time. That is what makes it hard to see from inside.' },
        { q: 'Someone threatens to hurt themselves if you leave. What is that?',
          a: ['A threat and a control tactic — talk to someone outside the relationship', 'A genuine cry for help you must stay for', 'Normal emotional intensity', 'A reason to try harder'],
          correct: 0, why: 'Threats of any kind, including this one, are in the not-normal list. Reaching out is not disloyalty.' },
        { q: 'When is couples counseling appropriate?',
          a: ['Any time you are stuck — it is maintenance, not a last resort', 'Only when separation is being considered', 'Only after infidelity', 'Only if a pastor recommends it'],
          correct: 0, why: 'Going while things are good is like servicing the car before it breaks down.' }
      ]
    }
  ]
});
