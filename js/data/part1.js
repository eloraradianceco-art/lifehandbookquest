/* PART ONE — YOURSELF : Strengths, Morning, Body */

HQ.register({
  id: 'strengths', title: 'Strengths', part: 'Yourself', icon: '◈',
  color: '#8E4370', tag: 'Evidence over introspection',
  blurb: 'Find what you are actually good at — using evidence, other people, and experiments.',
  lessons: [
    {
      id: 'l1', title: 'Strengths Are Built', time: 2,
      teach: [
        'At eighteen you do not have strengths yet. You have <b>inclinations</b>. A strength is an inclination plus a few thousand hours of deliberate work.',
        'Treating self-knowledge as an excavation project — digging around inside yourself for a hidden talent — keeps people searching for years instead of building anything.',
        'The good news: you are not hunting for something you might fail to find. You are choosing something and becoming good at it.'
      ],
      key: 'Strengths get built, not discovered.',
      questions: [
        { q: 'You are 18 and have no idea what you are good at. What does this handbook say that means?',
          a: ['You have not built any strengths yet, which is normal', 'You have hidden talents you need to find', 'You are behind your peers', 'You should take more personality tests'],
          correct: 0, why: 'At 18 you have inclinations, not strengths. Strengths come from hours of work, which you have not put in yet. That is expected, not a problem.' },
        { q: 'What is the real risk of treating self-knowledge as a "discovery" project?',
          a: ['You spend years searching instead of building', 'You discover the wrong talent', 'You become overconfident', 'You waste money on assessments'],
          correct: 0, why: 'The excavation framing keeps people looking inward indefinitely. Building produces the answer; searching does not.' },
        { q: 'Inclination + what = strength?',
          a: ['Thousands of hours of deliberate work', 'A personality test result', 'Encouragement from family', 'Natural confidence'],
          correct: 0, why: 'Talent shortens the road. It does not replace the road.' }
      ]
    },
    {
      id: 'l2', title: 'The Four Things People Confuse', time: 3,
      teach: [
        '<b>Talent</b> — you pick it up faster than others, with less instruction.<br><b>Skill</b> — a trained capability you can show on demand, under pressure.<br><b>Interest</b> — what you enjoy. Says nothing about ability.<br><b>Value</b> — what you believe matters.',
        'Talent without skill is potential nobody can use. Skill without interest burns out. Interest without either is a hobby — which is fine, unless you build an income on it.',
        'The good zone is the overlap of all four.'
      ],
      key: 'Enjoying it and being good at it are different questions.',
      questions: [
        { q: 'You love music, have played guitar for six years, and are honestly mediocre. Which category is this?',
          a: ['Interest, without matching talent or skill', 'A strength you have not noticed', 'Talent that is undeveloped', 'A value'],
          correct: 0, why: 'Plenty of people love things they are not good at. Nothing wrong with that — the mistake is building an income on it without evidence.' },
        { q: 'What is "talent without skill"?',
          a: ['Potential nobody can use', 'The strongest possible position', 'A guarantee of success', 'The same as a strength'],
          correct: 0, why: 'It is the most common form of wasted ability, and it usually gets called laziness.' },
        { q: 'The handbook says passion usually...',
          a: ['Follows competence rather than preceding it', 'Comes before any skill develops', 'Is fixed from childhood', 'Cannot be trusted'],
          correct: 0, why: 'People rarely love things they are bad at. Get decent, become useful, get real feedback — enjoyment grows out of that. Waiting to feel passionate first means waiting a long time.' }
      ]
    },
    {
      id: 'l3', title: 'The Evidence Method', time: 3,
      teach: [
        'You have more data about yourself than you think, and you have never actually looked at it.',
        'The single best signal, and the one nobody counts: <b>what do people repeatedly ask you for help with?</b> People do not ask twice for something you did badly.',
        'Also: what did you do without being made to? When have you lost track of time? What have you actually finished? Where have you failed repeatedly despite trying?'
      ],
      key: 'What you have done beats how you feel about your abilities.',
      questions: [
        { q: 'Which is the strongest signal of a real strength?',
          a: ['What people repeatedly ask you for help with', 'What you feel most confident about', 'What your personality type suggests', 'What you enjoyed as a child'],
          correct: 0, why: 'Repeat requests are unfiltered evidence. Nobody asks twice for something you did badly.' },
        { q: 'In the two-week energy audit, what do you write down each day?',
          a: ['One task that gave energy and one that drained it', 'Everything you did that day', 'Your mood score out of ten', 'What you want to be good at'],
          correct: 0, why: 'Be specific — not "work" but "explaining the process to the new guy." After 14 days, patterns appear that reflection alone never produces.' },
        { q: 'Why does the handbook favor energy over enjoyment as a signal?',
          a: ['Energy shows up in the body and cannot be talked into existence', 'Enjoyment is always a lie', 'Energy is easier to measure with a device', 'Enjoyment only applies to hobbies'],
          correct: 0, why: 'You can convince yourself you enjoy something. You cannot convince your body it has energy afterward.' }
      ]
    },
    {
      id: 'l4', title: 'Asking Other People', time: 3,
      teach: [
        'The highest-yield hour in the whole handbook, and the one people avoid. You have no access to how you come across.',
        'Ask five to seven people who have watched you work. <b>Include at least one person who will not spare your feelings.</b> A room of encouragement produces no information.',
        'Ask in writing — people are more honest with time to think and no face to read. Then respond with thank you and one clarifying question. Nothing else.'
      ],
      key: 'The moment you defend yourself, that person stops telling you things — permanently.',
      questions: [
        { q: 'Someone tells you something about yourself that stings. What is the correct response?',
          a: ['Say thank you and ask one clarifying question', 'Explain the context they are missing', 'Point out when they do the same thing', 'Agree quickly and change the subject'],
          correct: 0, why: 'Defending yourself ends the flow of honest information forever. Sit with it a week before deciding they misunderstood.' },
        { q: 'Why ask for feedback in writing rather than face to face?',
          a: ['People are more honest with time to think and no face to read', 'It creates a legal record', 'It is faster for them', 'It avoids awkward silences'],
          correct: 0, why: 'In person, people soften things in real time by reading your reaction. Writing removes that pressure.' },
        { q: 'Two different people, independently, tell you the same thing about yourself. What does that mean?',
          a: ['It is true, regardless of how it feels', 'They talked to each other first', 'It is a coincidence worth ignoring', 'You should ask a third person to break the tie'],
          correct: 0, why: 'Independent agreement is strong evidence. You have just been handed something most people never get.' }
      ]
    },
    {
      id: 'l5', title: 'Assessments, Honestly', time: 3,
      teach: [
        '<b>Big Five (OCEAN)</b> — the one with genuine scientific standing. Measures traits on a continuum and predicts real outcomes reasonably well.',
        '<b>MBTI</b> — hugely popular, weakly supported. A substantial share of people get a different type on retest. Fine as shared vocabulary, not for career decisions.',
        '<b>Enneagram</b> — compelling, spiritually framed, essentially no empirical support. Hold it loosely.',
        'An assessment is a <b>hypothesis, never a verdict</b>. If a result describes something you can point to evidence for, keep it. If not, discard it.'
      ],
      key: 'The moment a label becomes a reason you cannot do something, it has stopped helping you.',
      questions: [
        { q: 'Which assessment has the strongest scientific backing?',
          a: ['Big Five (OCEAN)', 'Myers-Briggs (MBTI)', 'Enneagram', 'Zodiac compatibility'],
          correct: 0, why: 'Big Five measures continuous traits with good reliability. The others are weaker or unsupported.' },
        { q: 'What is the main technical problem with MBTI?',
          a: ['Many people get a different type on retest, and it forces traits into false either-or boxes', 'It takes too long to complete', 'It is too expensive', 'It has too many categories'],
          correct: 0, why: 'Poor test-retest reliability plus artificial binaries. Useful as conversational language, not as measurement.' },
        { q: '"I am an introvert so I cannot work in sales." What is wrong with this?',
          a: ['A label is being used as a ceiling instead of a description of a tendency', 'Introverts actually do prefer sales', 'The person took the wrong test', 'Nothing — it is self-awareness'],
          correct: 0, why: 'Traits are tendencies, not walls. The label was meant to explain a preference, not license an exemption.' }
      ]
    },
    {
      id: 'l6', title: 'What To Do With a Weakness', time: 3,
      teach: [
        'Four options, and choosing correctly is most of the skill:',
        '<b>Fix it</b> — it blocks something you care about and is genuinely trainable.<br><b>Build a floor</b> — get to adequate and stop.<br><b>Manage around it</b> — build structure so it matters less.<br><b>Hand it off</b> — someone else is better and available.',
        'Two categories have no manage-around option: <b>character weaknesses</b> (dishonesty, cruelty, unreliability) and <b>anything that endangers people</b>.'
      ],
      key: 'Trying to fix every weakness is how people spend a decade becoming mediocre at things that never mattered.',
      questions: [
        { q: 'You forget details constantly. It is not going away. Best option?',
          a: ['Manage around it with checklists and reminders', 'Fix it by training your memory for years', 'Hand off every task involving details', 'Accept that you will fail at detailed work'],
          correct: 0, why: 'Not trainable enough to be worth the cost, but structure makes it matter far less. That is what manage-around means.' },
        { q: 'Which weakness category never gets delegated or structured around?',
          a: ['Character weaknesses like dishonesty or unreliability', 'Public speaking', 'Organization', 'Math'],
          correct: 0, why: 'Character weaknesses get worked on directly, for as long as it takes. So does anything that endangers people.' },
        { q: 'You are decisive. What is the shadow side of that strength?',
          a: ['Recklessness — deciding before there is enough information', 'Indecision under pressure', 'Being too agreeable', 'Overthinking'],
          correct: 0, why: 'Every strength has a shadow. Most real weaknesses are strengths running without a governor.' }
      ]
    },
    {
      id: 'l7', title: 'Testing, Not Deciding', time: 2,
      teach: [
        'You cannot think your way to knowing whether you would be good at something. You can only try it small, on purpose, and watch what happens.',
        'A good experiment is <b>small and reversible</b> (a weekend, a shift, one class), <b>real not theoretical</b>, has a <b>stated end date</b>, and gets written down within 48 hours.',
        'Reading about a field teaches you almost nothing about whether you are suited to it.'
      ],
      key: 'Separate "hard" from "wrong." Everything new is uncomfortable. Three months of dread is different.',
      questions: [
        { q: 'You want to know if you would like being an electrician. Best first move?',
          a: ['Shadow one for a day, or take the first module of a certification', 'Read about the trade for a month', 'Take a career aptitude quiz', 'Enroll in the full apprenticeship'],
          correct: 0, why: 'Small, real, reversible. Reading is theoretical and the full apprenticeship is not reversible.' },
        { q: 'Three weeks into something new it feels hard and awkward. What does that tell you?',
          a: ['Almost nothing — everything new feels that way at first', 'You are not suited to it', 'You should quit immediately', 'You picked the wrong teacher'],
          correct: 0, why: 'Difficulty is not evidence of poor fit. Watch the learning curve and whether you think about it voluntarily, not the starting discomfort.' },
        { q: 'Why write the result down within 48 hours?',
          a: ['Memory reshapes itself to match whatever you decided afterward', 'To show it to an employer', 'To track hours for certification', 'It is required for the worksheet'],
          correct: 0, why: 'Capture it while it is still accurate. Your later conclusion will quietly rewrite the memory.' }
      ]
    }
  ]
});

HQ.register({
  id: 'morning', title: 'Morning', part: 'Yourself', icon: '☀',
  color: '#C9942A', tag: 'Own the first hour',
  blurb: 'Sleep, light, movement and the habits that decide everything after.',
  lessons: [
    {
      id: 'l1', title: 'The Morning Is Won the Night Before', time: 2,
      teach: [
        'Almost every bad morning is a night-before problem. Clothes out, bag packed, dishes done, phone charging across the room, tomorrow\'s top three written down.',
        'A good morning is mostly a <b>setup job</b>, not an act of willpower at 6 a.m. when your willpower is at its lowest.',
        'Remove decisions. Do not add discipline.'
      ],
      key: 'Set it up at 10 p.m. so 6 a.m. requires no decisions.',
      questions: [
        { q: 'Why does the handbook say to set out clothes the night before?',
          a: ['It removes the first decision of the day, when willpower is lowest', 'It saves laundry', 'It looks more professional', 'It helps you sleep better'],
          correct: 0, why: 'Willpower is at its lowest right after waking. The routine should require almost no choices.' },
        { q: 'What are the "top three"?',
          a: ['Three things written on paper the night before that would make tomorrow a success', 'Your three biggest goals for the year', 'Three people to contact', 'Three exercises in the morning flow'],
          correct: 0, why: 'Not a twenty-item list. Three things, on paper, decided while you still have judgment.' },
        { q: 'The core principle behind the whole night-before routine is:',
          a: ['Remove decisions rather than adding discipline', 'Wake up earlier than everyone else', 'Build mental toughness', 'Reduce screen time'],
          correct: 0, why: 'Systems beat willpower, especially at the hour when willpower is lowest.' }
      ]
    },
    {
      id: 'l2', title: 'Sleep Is the Foundation', time: 3,
      teach: [
        'You cannot out-routine bad sleep. Target 7–9 hours.',
        'Your body clock is set by <b>when you wake and see light</b>, not when you fall asleep. Hold the wake time steady — including weekends — and the bedtime eventually fixes itself.',
        'Caffeine has a half-life of roughly 5–6 hours, so a 4 p.m. energy drink is still working at midnight. Cut it 8–10 hours before bed.',
        'Alcohol makes you fall asleep faster and sleep much worse — it suppresses REM and fragments the second half of the night.'
      ],
      key: 'Hold the wake time. Everything else follows from it.',
      questions: [
        { q: 'You had a terrible night of sleep. Tomorrow morning you should:',
          a: ['Hold your normal wake time, be tired for one day, and let the rhythm repair', 'Sleep in three hours to catch up', 'Take a long afternoon nap', 'Go to bed at 7 p.m.'],
          correct: 0, why: 'Chasing a bad night with a sleep-in shifts the body clock and costs you the next several days.' },
        { q: 'Why is a 4 p.m. energy drink a problem even if you fall asleep fine?',
          a: ['Caffeine has a 5–6 hour half-life and degrades deep sleep quality without you noticing', 'It causes dehydration overnight', 'It raises your heart rate permanently', 'It only matters if you drink two'],
          correct: 0, why: 'Falling asleep is not the same as sleeping well. The damage is invisible from the inside.' },
        { q: 'Alcohol before bed:',
          a: ['Speeds up falling asleep but suppresses REM and fragments the night', 'Improves deep sleep', 'Has no effect in small amounts', 'Only matters for people over 30'],
          correct: 0, why: 'It is a sedative, not a sleep aid. The second half of the night falls apart.' }
      ]
    },
    {
      id: 'l3', title: 'The First Ten Minutes', time: 3,
      teach: [
        '<b>1.</b> Feet on the floor immediately. The decision was made last night.<br><b>2.</b> No phone for the first 20–30 minutes.<br><b>3.</b> Make the bed — a finished task before anything else.<br><b>4.</b> Water, 16–20 oz.<br><b>5.</b> Light — outside within the first hour.<br><b>6.</b> Move, five to ten minutes.',
        'Snoozing does not give you rest. It drops you back toward a sleep stage you cannot complete in nine minutes, then rips you out of it again. You wake up groggier than if the first alarm had gotten you up.'
      ],
      key: 'If the first thing you touch is a phone, the first hour belongs to whoever posted last night.',
      questions: [
        { q: 'What does hitting snooze actually do?',
          a: ['Drops you toward a sleep stage you cannot finish, leaving you groggier', 'Gives you useful extra rest', 'Resets your circadian rhythm', 'Nothing measurable'],
          correct: 0, why: 'It also teaches you that your own commitments are negotiable before you are even conscious.' },
        { q: 'Why does the phone get charged in another room?',
          a: ['It forces you to stand up and stops the first hour being spent reacting', 'Radiation from the charger', 'It charges faster', 'To avoid waking your partner'],
          correct: 0, why: 'Two problems, one fix, ten dollars. Buy a cheap alarm clock.' },
        { q: 'If getting up is genuinely brutal every single day, the real problem is usually:',
          a: ['Not enough total sleep', 'Weak willpower', 'The wrong alarm sound', 'A bad mattress'],
          correct: 0, why: 'That is a sleep quantity problem, not a discipline problem. Go fix the bedtime.' }
      ]
    },
    {
      id: 'l4', title: 'Light, Water, Caffeine', time: 3,
      teach: [
        'Outdoor light — even on an overcast day — is dramatically brighter than indoor lighting. Getting outside within the first hour raises morning cortisol at the right time and starts the timer on melatonin that evening.',
        'Caffeine blocks adenosine, the chemical that makes you sleepy. It does not remove it — it hides it. Drinking coffee the instant you wake sets up the mid-morning crash when the caffeine clears and all that blocked adenosine arrives at once.',
        'Waiting 60–90 minutes after waking largely removes that crash.'
      ],
      key: 'Up, water, light, movement — then coffee.',
      questions: [
        { q: 'Why wait 60–90 minutes after waking before coffee?',
          a: ['It avoids blunting your natural cortisol rise and prevents the mid-morning crash', 'Coffee is harmful on an empty stomach', 'It helps you drink less overall', 'Caffeine does not absorb before then'],
          correct: 0, why: 'Caffeine hides adenosine rather than clearing it. Drink it too early and it all lands at once later.' },
        { q: 'How much morning light, and why?',
          a: ['5–20 minutes outside, to anchor the body clock and set that night\'s melatonin', 'Two hours of direct sun', 'None — light disrupts cortisol', 'Only on sunny days'],
          correct: 0, why: 'Five to ten minutes on a bright day, fifteen to twenty on a gray one. No sunglasses, never look at the sun.' },
        { q: 'You need caffeine just to function at a baseline. That means:',
          a: ['You have a sleep debt, not a caffeine deficiency', 'You need a stronger brand', 'Your tolerance is healthy', 'You should switch to energy drinks'],
          correct: 0, why: 'Caffeine is covering for something. Fix the sleep and the dependence drops.' }
      ]
    },
    {
      id: 'l5', title: 'Three Routine Levels', time: 2,
      teach: [
        '<b>Level 1 — The Floor (20 min).</b> Feet down, bed made, water, bathroom, 5 min outside, coffee and top three, out the door. This is the version you run on your worst day.',
        '<b>Level 2 — The Standard (45 min).</b> Adds the 10-minute movement flow and 10 minutes of quiet time.',
        '<b>Level 3 — Full (90 min).</b> Adds a real training session and a proper breakfast.',
        'Do not install all of it at once. Week one: fix the wake time and move the phone. That is the whole assignment.'
      ],
      key: 'Start at the floor. Do not start at the ceiling and quit in nine days.',
      questions: [
        { q: 'You are brand new to this. Which level should you start with?',
          a: ['Level 1 — the 20-minute floor', 'Level 3 — build the habit properly from day one', 'Level 2 — a reasonable middle', 'Alternate between all three'],
          correct: 0, why: 'A simple routine you do every day beats a perfect routine you run twice. Build the floor first.' },
        { q: 'What is the week-one assignment?',
          a: ['Fix the wake time and move the phone out of the bedroom', 'Complete all three levels once', 'Start the 10-minute mobility flow', 'Cut caffeine entirely'],
          correct: 0, why: 'One habit at a time, stacked onto an already-solid one. That is the only method that survives a month.' },
        { q: 'Level 1 exists so that:',
          a: ['You still have a routine on your worst, most chaotic day', 'Beginners feel good about themselves', 'You can skip the hard parts', 'It fits before an early shift'],
          correct: 0, why: 'Protect the floor above everything else. Consistency beats intensity.' }
      ]
    },
    {
      id: 'l6', title: 'Weekends and Failure Modes', time: 2,
      teach: [
        'Sleeping until noon on Saturday shifts your body clock like a flight across time zones. Monday feels like jet lag because it <b>is</b> jet lag.',
        'Hold weekend wake time within about an hour of normal. If you are short on sleep, take a 20-minute early-afternoon nap instead.',
        'Great for six days then collapsing on day seven almost always means the routine was too ambitious. Drop to the floor and hold it for a month.'
      ],
      key: 'Sleeping in is not recovery. It is a self-inflicted time zone change.',
      questions: [
        { q: 'You sleep until 1 p.m. on Saturday. What happens Monday?',
          a: ['You feel jet-lagged, because you effectively changed time zones', 'Nothing, you caught up on sleep', 'You will be more rested all week', 'Only your mood is affected'],
          correct: 0, why: 'Hold weekend wake time within about an hour. Nap in the early afternoon if you are short.' },
        { q: 'Your routine works for six days then collapses every week. The fix is:',
          a: ['Drop to Level 1 and hold it for a month before adding anything', 'Add accountability pressure', 'Push through with more discipline', 'Switch to a different routine entirely'],
          correct: 0, why: 'Repeated day-seven collapse means the routine is too ambitious, not that you are weak.' },
        { q: 'You crash hard at 10 a.m. most days. Most likely causes?',
          a: ['Caffeine too early, a sugar breakfast, or not enough water', 'Too much sleep', 'Exercising in the morning', 'Waking up too early'],
          correct: 0, why: 'Delay the coffee 60–90 minutes, add protein, drink water first.' }
      ]
    }
  ]
});

HQ.register({
  id: 'body', title: 'Body', part: 'Yourself', icon: '✦',
  color: '#7B55A3', tag: 'Training, food, recovery, healthcare',
  blurb: 'How to take care of the only body you are ever going to get.',
  lessons: [
    {
      id: 'l1', title: 'The Honest Hierarchy', time: 2,
      teach: [
        'Sleep 7–9 hours. Hit protein and vegetables most days. Walk 7,000–10,000 steps. Lift something heavy three times a week. Drink water.',
        'That is roughly <b>90% of the available result</b>. Everything past it is refinement, and refinement without the base is decoration.',
        'Almost everything sold to you about health is noise. The small number of things that work have not changed in fifty years and none of them are for sale.'
      ],
      key: 'Build the base before the extras.',
      questions: [
        { q: 'Which belongs in the base five, not the "extras" pile?',
          a: ['Sleeping 7–9 hours a night', 'Cold plunges', 'A greens powder', 'Tracking HRV daily'],
          correct: 0, why: 'Sleep, protein, water, walking, strength training. If those five are not in place, nothing else will matter.' },
        { q: 'Consistency vs optimization — what does the handbook say?',
          a: ['Three workouts a week for ten years beats a perfect program run for six weeks', 'The optimal program is worth waiting for', 'Both matter equally', 'Optimization matters more after year one'],
          correct: 0, why: 'Nobody has ever been ruined by choosing the second-best exercise. People are ruined by quitting.' },
        { q: 'Where does recovery fit?',
          a: ['It is where results actually happen — training is only the stimulus', 'It is optional for young people', 'It only matters for athletes', 'It replaces training on busy weeks'],
          correct: 0, why: 'Training hard while under-recovering is how people get injured and stall for years.' }
      ]
    },
    {
      id: 'l2', title: 'Food Without the Noise', time: 3,
      teach: [
        '<b>Protein at every meal</b> — roughly a palm-sized portion. It builds muscle, keeps you full, and is the nutrient most people under-eat.',
        '<b>Plants at most meals</b> — fiber feeds gut bacteria and regulates blood sugar.',
        '<b>Mostly whole foods</b> — food that resembles what it was.',
        'There are no good foods and bad foods, only useful patterns. Any approach that requires you to feel guilty is a failed approach and will not last.'
      ],
      key: 'Food is fuel, not morality.',
      questions: [
        { q: 'What is wrong with labelling foods "good" and "bad"?',
          a: ['It makes eating a moral test you fail weekly, and the guilt drives the pattern you are trying to change', 'Some foods really are bad', 'It is too simplistic for athletes', 'Nothing — it builds discipline'],
          correct: 0, why: 'Guilt is not a strategy. Any approach requiring it will not survive the year.' },
        { q: 'Which nutrient do most people under-eat?',
          a: ['Protein', 'Carbohydrate', 'Fat', 'Sodium'],
          correct: 0, why: 'A palm-sized portion at each meal is the practical target.' },
        { q: 'Which supplements actually have reasonable evidence behind them?',
          a: ['Creatine monohydrate, vitamin D if deficient, and protein powder as a convenience', 'Fat burners and pre-workouts', 'Detox teas and greens powders', 'Testosterone boosters'],
          correct: 0, why: 'Short list. Most of the rest is unnecessary, especially before the basics are in place.' }
      ]
    },
    {
      id: 'l3', title: 'The Four Pillars of Training', time: 3,
      teach: [
        '<b>Strength</b> — 2–4 sessions a week. The strongest predictor of how well you function at 60 and 80.<br><b>Conditioning</b> — 2–3 sessions plus daily walking.<br><b>Mobility</b> — 10 minutes most days.<br><b>Recovery</b> — continuous, not optional.',
        '<b>Progressive overload</b> is the whole principle: over time, add weight, add reps, or improve control. If nothing gets harder over months, nothing changes.',
        'Run a program for at least 8–12 weeks before changing it. Program hopping is how people train for years without progressing.'
      ],
      key: 'Form before load, always. Leave 1–3 reps in reserve on most sets.',
      questions: [
        { q: 'You have been lifting the same weights for six months. What is missing?',
          a: ['Progressive overload — nothing is getting harder', 'More protein', 'A gym membership upgrade', 'More training days'],
          correct: 0, why: 'Add weight, add reps, or improve control over time. Write down what you did so you can tell.' },
        { q: 'How long should you run a program before changing it?',
          a: ['At least 8–12 weeks', 'Two weeks', 'Until you get bored', 'One week per body part'],
          correct: 0, why: 'Program hopping is how people train for years without progressing.' },
        { q: 'Which pillar most predicts how well you function at 60 and 80?',
          a: ['Strength training', 'Stretching', 'Steady-state cardio', 'Sports-specific drills'],
          correct: 0, why: 'It preserves muscle and bone density and protects joints over decades.' }
      ]
    },
    {
      id: 'l4', title: 'Release, Lengthen, Activate, Integrate', time: 3,
      teach: [
        'A muscle that feels tight is often not short. It is frequently overworking because something else is not doing its job. That is why stretching the same spot for months changes nothing.',
        '<b>1. Release</b> — reduce tone in the overactive tissue (foam roll or ball, 30–60 sec).<br><b>2. Lengthen</b> — restore range once tone is down.<br><b>3. Activate</b> — wake up the underactive muscle that should have been working.<br><b>4. Integrate</b> — load the new range in a compound pattern.',
        'Common patterns: rounded shoulders from phones (chest overactive, mid-back underactive); tight hip flexors from sitting with glutes underactive; restricted ankles driving knee and hip compensation.'
      ],
      key: 'Tightness is usually a symptom, not the cause.',
      questions: [
        { q: 'You have stretched your hip flexors daily for three months and they still feel tight. Most likely reason?',
          a: ['Your glutes are underactive, so the hip flexors keep overworking', 'You are not stretching long enough', 'You need a deeper stretch', 'Your hips are structurally short'],
          correct: 0, why: 'Stretching alone rarely fixes anything, because tightness is usually compensation. Activate what is not working.' },
        { q: 'What is the correct order?',
          a: ['Release → Lengthen → Activate → Integrate', 'Activate → Release → Integrate → Lengthen', 'Lengthen → Release → Integrate → Activate', 'Integrate → Activate → Lengthen → Release'],
          correct: 0, why: 'Reduce tone, restore range, wake up the under-worker, then teach the system to use it under load.' },
        { q: 'Which is a frequently ignored root cause of knee pain?',
          a: ['Restricted ankle mobility driving compensation up the chain', 'Weak biceps', 'Low sodium', 'Sleeping on your side'],
          correct: 0, why: 'Ankles and feet are commonly overlooked and commonly the actual source.' }
      ]
    },
    {
      id: 'l5', title: 'Pain vs Soreness', time: 3,
      teach: [
        'Diffuse muscle ache 24–72 hours after training is normal adaptation. Keep moving, hydrate, sleep.',
        '<b>Stop</b> for: sharp pain during a movement, pain located in a joint rather than a muscle belly, pain on one side only, pain worse the next morning.',
        '<b>See a professional</b> for: numbness, tingling, radiating pain, swelling, locking, giving way, or inability to bear weight.',
        'Gentle movement usually beats complete rest for minor injuries. Modify rather than stop entirely.'
      ],
      key: 'Soreness is diffuse and fades. Pain is sharp, specific, and one-sided.',
      questions: [
        { q: 'Two days after a new workout your legs ache all over. This is:',
          a: ['Normal adaptation — keep moving, hydrate, sleep', 'An injury requiring rest', 'A sign of overtraining', 'A reason to see a doctor'],
          correct: 0, why: 'Diffuse delayed muscle ache is just adaptation, especially after new movements.' },
        { q: 'You feel numbness and tingling running down one arm. What now?',
          a: ['See a professional — that suggests nerve involvement', 'Stretch it out and continue', 'Ice it and train lighter', 'Take an anti-inflammatory and wait a month'],
          correct: 0, why: 'Nerve symptoms are not something to self-treat.' },
        { q: 'Which pattern suggests something structural rather than normal soreness?',
          a: ['Pain in a joint, on one side only, worse the next morning', 'Aching in both quads after squats', 'General stiffness on waking', 'Fatigue after a hard session'],
          correct: 0, why: 'Joint-centered, one-sided, and worsening are the flags worth investigating.' }
      ]
    },
    {
      id: 'l6', title: 'Healthcare: The Adult Part', time: 3,
      teach: [
        'Establish with a primary care physician while you are healthy. Dentist every six months. Eye doctor every one to two years.',
        '<b>Urgent care</b>: cuts needing stitches, sprains, fever, infections, minor burns, UTIs, most things at 8 p.m. on a Tuesday.',
        '<b>ER or 911</b>: chest pain, difficulty breathing, stroke signs, uncontrolled bleeding, head injury with confusion, seizure, severe allergic reaction, thoughts of self-harm.',
        'Know your family history and write it down. It changes what you should be screened for and when.'
      ],
      key: 'Establishing care while healthy is far easier than finding help in a crisis.',
      questions: [
        { q: 'You slice your hand cooking. Deep, bleeding slowed with pressure, probably needs stitches. Where do you go?',
          a: ['Urgent care', 'Emergency room', 'Primary care next week', 'Handle it at home'],
          correct: 0, why: 'Urgent care handles stitches. Go within a few hours — wounds get harder to close as time passes.' },
        { q: 'Which of these is an ER or 911 situation?',
          a: ['Sudden face drooping and slurred speech', 'A sore throat and fever', 'A sprained ankle', 'A urinary tract infection'],
          correct: 0, why: 'Those are stroke signs. Note the time symptoms started — it determines which treatments are still possible.' },
        { q: 'Why write down your family medical history?',
          a: ['It changes what you should be screened for and when', 'Insurance requires it', 'It predicts your lifespan', 'To qualify for gym discounts'],
          correct: 0, why: 'Ask your parents and record it. Most people never do and it is genuinely useful information.' }
      ]
    }
  ]
});
