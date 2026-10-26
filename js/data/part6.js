/* PART SIX — DEALING WITH THE WORLD : People, Thinking, Deal */

HQ.register({
  id: 'people', title: 'People', part: 'The World', icon: '◎',
  color: '#2E6F8E', tag: 'Conversation, friendship, showing up',
  blurb: 'How to talk to people, keep them, and be someone worth keeping.',
  lessons: [
    {
      id: 'l1', title: 'Be Interested, Not Interesting', time: 2,
      teach: [
        'People are not evaluating how impressive you are. They are deciding whether they felt listened to.',
        '<b>The follow-up question is the whole skill.</b> Most people answer and move on to their own thing. Asking a second question about what they just said is what makes someone feel heard — and almost nobody does it.',
        'Ask open questions. "How did you get into that?" opens a conversation. "Do you like it?" closes one.'
      ],
      key: 'One good follow-up question beats any story you could tell.',
      questions: [
        { q: 'Someone tells you they just started rock climbing. What is the strongest response?',
          a: ['"How did you get into that?"', '"Cool, I tried that once."', '"Is it fun?"', '"That sounds dangerous."'],
          correct: 0, why: 'Open questions invite a real answer. Closed questions ("is it fun?") end the thread, and jumping to your own experience makes it about you.' },
        { q: 'What does the handbook say people are actually judging in a conversation?',
          a: ['Whether they felt listened to', 'How interesting you were', 'How much you had in common', 'Whether you were funny'],
          correct: 0, why: 'Being interested beats being interesting, every time.' },
        { q: 'Why skip "so what do you do?" when you can?',
          a: ['It ranks people by job and gets a worse answer than other openers', 'It is too personal', 'It is outdated', 'People find it rude'],
          correct: 0, why: '"What have you been working on?" or "how do you know everyone here?" gets you somewhere more interesting.' }
      ]
    },
    {
      id: 'l2', title: 'Making Friends After School', time: 3,
      teach: [
        'Friendship needs three things: <b>repeated contact</b>, <b>shared activity</b>, and <b>unstructured time</b>. School supplied all three automatically — same building, same people, every day.',
        'That machinery disappears at eighteen, and most adults do not notice until they are lonely and cannot explain why.',
        'The fix is not charisma. It is deliberately rebuilding repetition into your week: a gym class, a league, a small group, a volunteer shift. Same people, same time, every week.'
      ],
      key: 'Proximity plus repetition makes friends. You now have to build both on purpose.',
      questions: [
        { q: 'Which single move does the most to build adult friendships?',
          a: ['Join something that meets weekly with the same people', 'Go to more parties and events', 'Be more outgoing', 'Use a friendship app'],
          correct: 0, why: 'Repetition is the ingredient school supplied for free. Random one-off events do not produce it.' },
        { q: 'Which is an actual invitation?',
          a: ['"Are you free Thursday?"', '"We should hang out sometime."', '"Let me know if you ever want to do something."', '"I\'m around most weekends."'],
          correct: 0, why: 'Vagueness feels safer and produces nothing. Specific day, specific thing.' },
        { q: 'You invite someone twice and both times it falls through. What should you conclude?',
          a: ['Almost nothing — expect about half to fall through and ask again', 'They are not interested', 'You came on too strong', 'You should wait for them to invite you'],
          correct: 0, why: 'One decline is noise. Three is a signal. People are busy and bad at calendars.' }
      ]
    },
    {
      id: 'l3', title: 'Asking For Help', time: 2,
      teach: [
        'The fear is that asking makes you look incapable. In practice the opposite happens — being asked is flattering, it signals trust, and people who help you tend to like you <i>more</i> afterward.',
        '<b>Be specific.</b> "Can you look at my resume?" beats "any advice on job hunting?" A bounded request is easy to say yes to; a vague one is work for them.',
        '<b>Show you tried first.</b> "I read the manual and tried X — am I missing something?" That is the difference between being helped and being resented.'
      ],
      key: 'Make it easy to say yes and easy to decline.',
      questions: [
        { q: 'Which request is most likely to get a yes?',
          a: ['"Could you look at my resume this week? No pressure if you\'re slammed."', '"Can you help me with my career?"', '"Do you have any job hunting advice?"', '"I need help, are you free sometime?"'],
          correct: 0, why: 'Specific, bounded, and with a clean exit. Giving people an easy out makes them more likely to say yes, not less.' },
        { q: 'Who is usually the best person to ask?',
          a: ['Someone one or two steps ahead of you', 'The most senior person you know', 'A close friend, regardless of expertise', 'Several people at once'],
          correct: 0, why: 'They remember what the beginning was like, and the ask is smaller for them.' },
        { q: 'After someone helps you, what matters most?',
          a: ['Reporting back that you used it and what happened', 'Sending a gift', 'Never asking that person again', 'Posting about it publicly'],
          correct: 0, why: '"I used what you said and it worked" makes someone glad they helped and willing to do it again.' }
      ]
    },
    {
      id: 'l4', title: 'Saying No', time: 2,
      teach: [
        'People-pleasing is not kindness. It is a debt you pay later with resentment.',
        '<b>Decline fast.</b> A quick no is a gift. Three days of silence while you work up the nerve is worse for both of you.',
        '<b>Do not over-explain.</b> Long excuses invite negotiation. "I can\'t make that work, but thanks for thinking of me" is a finished sentence.',
        'If someone keeps pushing after a no, repeat the same words unchanged. Do not supply new reasons for them to argue with.'
      ],
      key: 'Resentment is the bill for boundaries you never said out loud.',
      questions: [
        { q: 'Someone keeps pushing after you already said no. Best response?',
          a: ['Repeat your answer in the same words, without new reasons', 'Give a different reason that might land better', 'Explain in more detail why you can\'t', 'Give in to end the conversation'],
          correct: 0, why: 'New reasons are new things to argue with. "I\'ve already given you my answer" is complete.' },
        { q: 'Why is a long detailed excuse a weaker no than a short one?',
          a: ['It invites negotiation on each reason you gave', 'It sounds dishonest', 'It takes more time', 'It is less polite'],
          correct: 0, why: 'You do not owe a full justification for how you spend your time.' },
        { q: 'You keep feeling angry at a friend for always asking you for rides. What is the actual problem?',
          a: ['You have never said no, so they have no idea there is an issue', 'They are inconsiderate', 'You are too nice a person', 'They are taking advantage of you'],
          correct: 0, why: 'Resentment is almost always the bill for an unspoken boundary. Say it once, plainly.' }
      ]
    },
    {
      id: 'l5', title: 'Showing Up When Something Hard Happens', time: 3,
      teach: [
        'People stay away because they do not know what to say, and assume wrong words are worse than nothing. <b>It is the reverse.</b> Absence is what people remember.',
        'Replace "let me know if you need anything" with something specific you will actually do: "I\'m bringing dinner Tuesday, I\'ll leave it on the porch." The open offer puts the work of asking on the person least able to do it.',
        'Never say "at least." Every sentence that starts that way minimizes what they are going through.',
        'And show up in the ordinary weeks. Attention floods in at the start and vanishes by week three — which is usually when it gets hardest.'
      ],
      key: 'Something clumsy and present beats something perfect and absent.',
      questions: [
        { q: 'A friend\'s parent just died. Which is the better thing to say?',
          a: ['"I\'m bringing dinner Tuesday, I\'ll leave it on the porch."', '"Let me know if you need anything."', '"Everything happens for a reason."', '"I know exactly how you feel."'],
          correct: 0, why: 'The open offer puts the work of asking on the person least able to do it. Be specific and just do the thing.' },
        { q: 'When does support usually matter most?',
          a: ['Weeks and months later, when everyone else has moved on', 'In the first 48 hours', 'At the funeral itself', 'Once they seem better'],
          correct: 0, why: 'Attention floods in at the start and vanishes by week three. Put check-ins in your calendar.' },
        { q: 'You are standing there and genuinely do not know what to say. What should you do?',
          a: ['Say "I don\'t know what to say" and stay anyway', 'Leave and send a text later', 'Find something comforting to say', 'Change the subject to something lighter'],
          correct: 0, why: 'That is the whole skill. Nobody has ever thought less of a friend for an awkward sentence; plenty remember who disappeared.' }
      ]
    },
    {
      id: 'l6', title: 'Reputation', time: 2,
      teach: [
        'You are judged on <b>reliability</b> far more than on talent. Showing up when you said, on time, having done the thing, is rarer than it should be and noticed every time.',
        'How you treat people who can do nothing for you is the clearest signal of character — servers, the new person, the one everyone finds annoying. Everyone is watching it.',
        'Give credit loudly and take blame quietly. Never repeat something told to you in confidence; one breach ends a reputation permanently, and nobody will ever tell you why they stopped confiding in you.'
      ],
      key: 'Apologize fast, with nothing attached. It buys enormous goodwill and almost nobody does it.',
      questions: [
        { q: 'What are people mostly judging you on?',
          a: ['Whether you do what you said you would', 'How talented you are', 'How likeable you are', 'How hard you work'],
          correct: 0, why: 'Reliability is rarer than talent and worth more, in every field.' },
        { q: 'What does the handbook call the clearest signal of character?',
          a: ['How you treat people who can do nothing for you', 'How you handle success', 'How generous you are', 'How you perform under pressure'],
          correct: 0, why: 'And everyone around you is quietly registering it.' },
        { q: 'Why does repeating a confidence end a reputation permanently?',
          a: ['People stop telling you things and never explain why', 'It is usually illegal', 'It gets back to the person immediately', 'It damages your credibility at work'],
          correct: 0, why: 'You lose access to honesty without ever being told you lost it.' }
      ]
    }
  ]
});

HQ.register({
  id: 'thinking', title: 'Thinking', part: 'The World', icon: '◇',
  color: '#6563AD', tag: 'Evaluating claims, not getting played',
  blurb: 'How to tell what is true, and notice when you are being sold to.',
  lessons: [
    {
      id: 'l1', title: 'Who Benefits?', time: 2,
      teach: [
        'Before anything else, ask: <b>who gains if I believe this?</b>',
        'Someone selling the solution. Someone who needs your attention. Someone whose career depends on the answer. Interest does not make a claim false — but it tells you how hard to look.',
        'This one question filters most of what will ever be aimed at you.'
      ],
      key: 'Who benefits if I believe this?',
      questions: [
        { q: 'A supplement company funds a study showing their supplement works. What does that mean?',
          a: ['Not that it is false, but that you should look harder at the methods', 'That the study is fake', 'That it can be ignored', 'Nothing — funding is irrelevant'],
          correct: 0, why: 'Interest is a context check, not an accusation. It tells you how much scrutiny is warranted.' },
        { q: 'What are the two questions that handle most small claims?',
          a: ['Who benefits, and how would they know?', 'Is it popular, and is it recent?', 'Who said it, and do I trust them?', 'Does it make sense, and does it feel right?'],
          correct: 0, why: 'Those two alone stop most of what is wrong before it gets to you.' },
        { q: 'The handbook argues that believing nothing is:',
          a: ['As lazy as believing everything, and just as easily exploited', 'The safest default', 'A sign of critical thinking', 'Appropriate online'],
          correct: 0, why: 'People who trust nothing end up trusting whoever is loudest. The goal is calibration, not cynicism.' }
      ]
    },
    {
      id: 'l2', title: 'Numbers That Mislead', time: 3,
      teach: [
        'Most misleading claims are not lies. They are true numbers arranged to produce a false impression.',
        '<b>Relative vs absolute risk:</b> "cuts your risk by 50%" sounds enormous. If it went from 2 in 10,000 to 1 in 10,000, it is a rounding error in your life.',
        '<b>Correlation sold as cause:</b> ice cream sales and drownings both rise in summer. Neither causes the other.',
        '<b>Averages hiding the spread:</b> "average income $95,000" in a room where one person earns $4 million. Ask for the median.'
      ],
      key: 'Every percentage hides a starting point. Ask: compared to what?',
      questions: [
        { q: 'A headline says a food "doubles your risk" of a disease. What do you need to know?',
          a: ['The absolute numbers — doubling 2 in a million is still nothing', 'Which food it was', 'How many people were studied', 'Who funded it'],
          correct: 0, why: 'Relative risk without the baseline is the most common way true numbers mislead.' },
        { q: '"Average income here is $95,000" — why might that be misleading?',
          a: ['One very high earner can drag the mean far above what is typical', 'Averages are always wrong', 'Income is private', 'It does not account for taxes'],
          correct: 0, why: 'Ask for the median and the range. The mean is easily distorted by outliers.' },
        { q: 'Every successful founder you read about dropped out of college. What is wrong with concluding dropping out works?',
          a: ['Survivorship bias — the thousands who dropped out and failed are invisible', 'The sample is too recent', 'Correlation is not causation', 'Founders exaggerate'],
          correct: 0, why: 'Always ask who is missing from the sample.' }
      ]
    },
    {
      id: 'l3', title: 'How You Fool Yourself', time: 3,
      teach: [
        'The outside errors are easier to catch than the inside ones.',
        '<b>Confirmation bias</b> — you notice what fits what you already believe and skip what does not, automatically, below awareness.',
        '<b>Motivated reasoning</b> — when you want something to be true, your standard of evidence quietly drops.',
        '<b>Sunk cost</b> — continuing because of what you already spent. The money is gone either way.',
        'The counter for all three: ask <b>what would change my mind</b>, and name it specifically, in advance.'
      ],
      key: 'If nothing could change your mind, you are defending an identity, not holding a belief.',
      questions: [
        { q: 'You are three years into a degree you now hate. Which question actually helps?',
          a: ['If I were starting fresh today, would I choose this?', 'How much have I already spent?', 'What would people think if I quit?', 'How much longer is left?'],
          correct: 0, why: 'That is the sunk cost counter. What you already spent is gone whichever way you choose.' },
        { q: 'You read a claim and immediately feel pleased by it. What should that trigger?',
          a: ['Checking harder, because wanting it to be true lowers your standards', 'Sharing it while it is fresh', 'Trusting your instinct', 'Looking for more like it'],
          correct: 0, why: 'Your judgment is weakest exactly where you have a stake.' },
        { q: 'What is the clearest sign you are thinking rather than rooting for a side?',
          a: ['You can name specifically what would change your mind', 'You feel strongly about it', 'You have read a lot on it', 'You can argue it well'],
          correct: 0, why: 'If nothing could, it is an identity, not a belief.' }
      ]
    },
    {
      id: 'l4', title: 'Being Sold To', time: 3,
      teach: [
        '<b>Manufactured urgency</b> — countdowns, "only 3 left". Scarcity is usually created. A real deal is still a deal tomorrow.',
        '<b>Manufactured inadequacy</b> — most advertising first makes you feel a problem you had not noticed, then sells the fix. Notice when a feeling of lack arrived in the last thirty seconds.',
        '<b>Anchored pricing</b> — the crossed-out price often never existed as a real price.',
        'The algorithmic feed is not a window on the world. It is a ranked list optimized to hold you, and outrage holds better than accuracy.'
      ],
      key: 'For any unplanned purchase over $100, wait 24 hours.',
      questions: [
        { q: 'Why does the 24-hour rule work so well on unplanned purchases?',
          a: ['Nearly every persuasion technique is built to work inside a short window', 'It gives you time to find a better price', 'It lets you check your bank balance', 'It is required for returns'],
          correct: 0, why: 'A day later, most of what felt urgent is simply gone. What you still want is probably worth buying.' },
        { q: 'An ad makes you suddenly aware of a flaw you never thought about. What just happened?',
          a: ['Manufactured inadequacy — the problem was created, then the fix sold', 'You learned something useful', 'The product is well targeted', 'Nothing unusual'],
          correct: 0, why: 'Notice when a feeling of lack arrived in the last thirty seconds.' },
        { q: 'Why does your feed show so much outrageous content?',
          a: ['It is ranked to hold your attention, and outrage holds better than accuracy', 'The world is getting worse', 'Your friends post that way', 'It is random'],
          correct: 0, why: 'What you see says more about what keeps people scrolling than about what is happening.' }
      ]
    },
    {
      id: 'l5', title: 'Judging a Source', time: 3,
      teach: [
        'Not all information is equal, and the ranking is learnable.',
        '<b>Primary and verifiable</b> (the actual study, the filing, the full video) → <b>reputable secondary</b> → <b>expert opinion</b> → <b>aggregators and summaries</b> → <b>anecdote</b> → <b>anonymous and unsourced</b>.',
        'Headlines routinely overstate what the underlying study found, often written by someone who did not write the article.',
        'Be most skeptical of the things that make you angriest. Content engineered to spread is engineered to enrage.'
      ],
      key: 'Trace the claim to its source before sharing it. Most viral misinformation dies at that step.',
      questions: [
        { q: 'Which is the most reliable kind of source?',
          a: ['The original study or filing itself', 'A news article about the study', 'A well-known expert\'s opinion', 'A popular explainer video'],
          correct: 0, why: 'Still not automatically right — check methods and sample size — but it is the top of the ladder.' },
        { q: 'A post makes you furious. What should you do first?',
          a: ['Slow down — anger is where your judgment is worst and spread is engineered', 'Share it before it gets taken down', 'Comment your reaction', 'Check who posted it'],
          correct: 0, why: 'Content built to spread is built to enrage. Check the date and the source first.' },
        { q: 'Why does expertise deserve caution even when it is real?',
          a: ['It does not transfer between fields, and individuals disagree', 'Experts are often wrong', 'Credentials can be faked', 'Experts are usually paid'],
          correct: 0, why: 'Consensus across a field beats any single expert, and a specialist outside their field is just a person with an opinion.' }
      ]
    },
    {
      id: 'l6', title: 'Arguments That Are Not Arguments', time: 2,
      teach: [
        '<b>Straw man</b> — restating someone\'s position as a weaker version, then defeating that.<br><b>False dilemma</b> — presenting two options as the only options.<br><b>Whataboutism</b> — answering a criticism by naming someone else\'s fault.<br><b>Burden shifting</b> — "prove it isn\'t true."',
        'To disagree well: state their position back well enough that they agree it is fair, argue against the strongest version, and separate facts from values.',
        '"I don\'t know" and "you might be right" are enormously underused and cost you nothing.'
      ],
      key: 'Nobody changes their mind while being humiliated. Leave people a path to update.',
      questions: [
        { q: 'You say a policy has problems and they reply "so you think we should do nothing?" That is:',
          a: ['A straw man — a weaker version of your position, easier to defeat', 'A fair question', 'A false dilemma', 'Whataboutism'],
          correct: 0, why: 'Restate your actual position and ask them to address that.' },
        { q: 'What is the first move in disagreeing well?',
          a: ['State their position back until they agree it is fair', 'Lay out your evidence', 'Find the flaw in their argument', 'Ask what they would accept as proof'],
          correct: 0, why: 'You will often find the disagreement is smaller than it looked.' },
        { q: '"Prove it isn\'t true" is a problem because:',
          a: ['The person making the claim owes the evidence', 'It is impossible to disprove anything', 'It is rude', 'It changes the subject'],
          correct: 0, why: 'Absence of disproof is not support for anything.' }
      ]
    }
  ]
});

HQ.register({
  id: 'deal', title: 'The Deal', part: 'The World', icon: '§',
  color: '#1F6F5C', tag: 'Contracts, negotiation, disputes',
  blurb: 'Reading what you sign, fixing what goes wrong, and standing your ground politely.',
  lessons: [
    {
      id: 'l1', title: 'If It Is Not In Writing', time: 2,
      teach: [
        'Whatever a salesperson said out loud does not survive a dispute. <b>The signed document is the deal.</b>',
        'Ask for every verbal promise to be written into it, and watch how often that request is quietly refused.',
        'Never sign a document with blank spaces. Get a complete copy, signed by both parties, before you leave — "we\'ll mail it" frequently means you never see it. Photograph every page on your phone.'
      ],
      key: '"I\'d like to take this home and read it before I sign."',
      questions: [
        { q: 'A salesperson promises something that is not in the contract. What should you do?',
          a: ['Ask for it to be written into the document and initialed', 'Get it in an email instead', 'Trust them if they seem honest', 'Note the date and their name'],
          correct: 0, why: 'A side email is much weaker than the document. If they will not add it, that has told you something.' },
        { q: 'They say the offer is only good today. What does that tell you?',
          a: ['It is a reason to walk away, not a reason to hurry', 'You should decide quickly', 'It is a genuine limited offer', 'You should ask for more time politely'],
          correct: 0, why: 'A legitimate business will shrug at you reading it overnight. Manufactured urgency is the tell.' },
        { q: 'Why never sign a document with blank spaces?',
          a: ['Anything can be filled in afterward', 'It looks unprofessional', 'It invalidates the contract', 'It delays processing'],
          correct: 0, why: 'Cross them out or have them filled in before you sign.' }
      ]
    },
    {
      id: 'l2', title: 'What To Look For In a Contract', time: 3,
      teach: [
        'You do not need to understand every clause. You need to find eight things:',
        '<b>The total cost</b> over the full term — not the monthly payment. <b>The term</b> and whether it auto-renews. <b>How to get out</b>, and what that costs. <b>What happens if you are late.</b>',
        'Plus: what they are actually promising, who pays when something breaks, whether you are waiving your right to sue, and anything handwritten — changes to a standard form are the parts most likely to be unusual.'
      ],
      key: 'Find how to cancel before you sign. You cannot negotiate it after.',
      questions: [
        { q: 'A dealer offers to get your payment down to $320/month. What should you be looking at instead?',
          a: ['The total cost over the full term', 'The interest rate alone', 'The down payment', 'The trade-in value'],
          correct: 0, why: 'Any payment can be hit by stretching the term. The term is where the real cost hides.' },
        { q: 'Where does a large share of wasted money quietly live?',
          a: ['Automatic renewal clauses', 'Late fees', 'Shipping charges', 'Sales tax'],
          correct: 0, why: 'Know the term and whether it renews itself. Then set a calendar reminder.' },
        { q: 'In a standard form contract, which part deserves the most attention?',
          a: ['Anything handwritten or added', 'The first page', 'The signature block', 'The boilerplate'],
          correct: 0, why: 'Changes to a standard form are the parts most likely to be unusual. Read those twice.' }
      ]
    },
    {
      id: 'l3', title: 'Negotiating Anything', time: 3,
      teach: [
        '<b>Decide your walk-away number in advance</b>, in writing, before the conversation starts. This is the whole defense against being talked upward.',
        '<b>Make one clear ask, then stop talking.</b> Silence after a request is uncomfortable and extremely effective — most people negotiate against themselves by filling it.',
        'If the price is fixed, negotiate everything else: delivery, timing, included extras, warranty length, deposit waived, a later start date.',
        'Stay warm. People give better deals to people they like. Pleasant and immovable beats aggressive.'
      ],
      key: 'Your leverage is having somewhere else to go — and they can sense whether you do.',
      questions: [
        { q: 'You ask "is that the best you can do?" What is the correct next move?',
          a: ['Say nothing and wait', 'Explain why you need a lower price', 'Name a counter-offer immediately', 'Mention a competitor'],
          correct: 0, why: 'Silence after a request is uncomfortable and extremely effective. Most people fill it and negotiate against themselves.' },
        { q: 'When should you decide your walk-away number?',
          a: ['In writing, before any conversation starts', 'After hearing their first offer', 'When you feel the pressure building', 'After comparing two sellers'],
          correct: 0, why: 'Otherwise the first number you hear anchors you, which is exactly what it is there to do.' },
        { q: 'The seller will not move on price at all. What now?',
          a: ['Negotiate the other terms — delivery, extras, warranty, deposit', 'Walk away immediately', 'Accept the price', 'Ask again more firmly'],
          correct: 0, why: 'Price is often fixed while everything around it is not.' }
      ]
    },
    {
      id: 'l4', title: 'When Something Goes Wrong', time: 3,
      teach: [
        'The escalation ladder — each rung is cheap, and most disputes end on the first two.',
        '<b>1.</b> Front line, calmly and specifically. Get a name, a reference number, and write down the date.<br><b>2.</b> Supervisor. "I understand this is outside what you can authorize — could I speak with a supervisor?"<br><b>3.</b> Written complaint with facts, dates, and exactly what resolution you want.<br><b>4.</b> The regulator — your state attorney general, the CFPB for banks and lenders.<br><b>5.</b> Chargeback.<br><b>6.</b> Small claims court.',
        'The person with documentation wins almost every dispute, and it costs nothing to be that person.'
      ],
      key: 'Be polite and immovable. Anger gets you nothing; calm, specific, repeated requests get you most of what is available.',
      questions: [
        { q: 'What should you do the very first time you call about a problem?',
          a: ['Get a name and reference number, and write down the date and time', 'Demand a supervisor', 'Threaten to leave a review', 'Ask for a refund immediately'],
          correct: 0, why: 'That note is the foundation of everything after it. The person with documentation wins.' },
        { q: 'Where do you go for a dispute with a bank, lender or credit card company?',
          a: ['The Consumer Financial Protection Bureau', 'The FTC', 'Small claims court first', 'Your state insurance commissioner'],
          correct: 0, why: 'CFPB complaints get routed to the company with a response deadline. For general consumer disputes, your state attorney general.' },
        { q: 'What makes a written complaint effective?',
          a: ['Facts and dates with no adjectives, and a specific requested remedy', 'Describing how upset you are', 'Length and detail', 'Copying several executives'],
          correct: 0, why: 'Calm and specific reads as credible. A complaint with no requested remedy gets an apology and nothing else.' }
      ]
    },
    {
      id: 'l5', title: 'Renting and Your Deposit', time: 3,
      teach: [
        'Most deposit disputes are decided by evidence, and the tenant usually has none.',
        '<b>On move-in day, before a single box goes in:</b> photograph and video every room, every existing scratch, stain and dent, with the timestamp on. Send a dated written list to the landlord and keep the sent copy. Do the identical thing on move-out day.',
        'That one hour of work is what gets deposits returned. Normal wear and tear — faded paint, worn carpet in walkways, small nail holes — is generally the landlord\'s cost, not yours.'
      ],
      key: 'Never pay a deposit on a place you have not physically seen.',
      questions: [
        { q: 'When do you document existing damage in a rental?',
          a: ['Move-in day, before anything goes in, and again on move-out day', 'Within the first week', 'Only if you notice something major', 'When you give notice'],
          correct: 0, why: 'Timestamped photos plus a dated written list sent to the landlord. This is what gets deposits back.' },
        { q: 'Which is generally the landlord\'s cost rather than yours?',
          a: ['Faded paint and worn carpet in walkways', 'A hole in the drywall', 'A broken window', 'Pet stains on carpet'],
          correct: 0, why: 'Normal wear and tear is not damage. Know your state\'s deadline for returning deposits too.' },
        { q: 'Your landlord has ignored a serious repair for weeks. What should you NOT do?',
          a: ['Simply stop paying rent', 'Put every request in writing', 'Keep a dated log', 'Contact legal aid or a tenant union'],
          correct: 0, why: 'You can be evicted even when you were right. Remedies exist but the procedures are strict and vary by state.' }
      ]
    },
    {
      id: 'l6', title: 'Refunds, Warranties, Subscriptions', time: 2,
      teach: [
        'Use a <b>credit card</b> for anything significant — stronger dispute rights, and the money is not out of your account while you fight.',
        '<b>Skip most extended warranties.</b> High margin, and they usually duplicate a manufacturer warranty you already have, sometimes one your credit card already extends.',
        'Assume every free trial is designed to convert and every cancellation designed to be difficult. The moment you sign up, set a calendar reminder three days before it ends — and screenshot the confirmation when you do cancel.'
      ],
      key: '"We have no record of your cancellation" is a common and expensive sentence.',
      questions: [
        { q: 'You start a 30-day free trial. What should you do immediately?',
          a: ['Set a calendar reminder three days before it ends', 'Note it in your budget', 'Nothing — cancel when you remember', 'Read the terms fully'],
          correct: 0, why: 'And screenshot the confirmation when you cancel. Proof is what settles the dispute later.' },
        { q: 'Why use a credit card rather than debit for a large purchase?',
          a: ['Stronger dispute rights, and your money is not gone during the fight', 'Better rewards', 'Higher limits', 'Easier to track'],
          correct: 0, why: 'With debit, the money leaves your account immediately and you are fighting to get it back.' },
        { q: 'A store refuses your return even though their policy allows it. Best next step?',
          a: ['Look up their own written policy and quote it back, politely, to a manager', 'Leave a bad review', 'File a chargeback immediately', 'Call the attorney general'],
          correct: 0, why: 'Front-line staff sometimes state policy wrong. Refund authority is usually one level up.' }
      ]
    }
  ]
});
