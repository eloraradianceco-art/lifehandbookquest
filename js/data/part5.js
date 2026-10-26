/* PART FIVE — PROTECTION : Papers, Digital, Emergency */

HQ.register({
  id: 'papers', title: 'Papers', part: 'Protection', icon: '▤',
  color: '#4A5BA0', tag: 'Documents, records, what happens if',
  blurb: 'Where everything lives, how long to keep it, and the paperwork nobody does at eighteen.',
  lessons: [
    {
      id: 'l1', title: 'The Three-Tier System', time: 3,
      teach: [
        '<b>Tier 1 — the safe.</b> Fireproof, waterproof. Originals that are slow to replace: birth certificates, Social Security cards, passports, vehicle titles, deeds, wills.',
        '<b>Tier 2 — encrypted cloud.</b> A scan of everything in Tier 1, plus insurance policies, tax returns, leases, medical records, home inventory photos. This is what survives a fire or a flood.',
        '<b>Tier 3 — active file.</b> The current year. Purge every January.',
        '<b>Tier 4 — the shredder.</b> Anything with an account number, SSN, signature or medical info past its retention date. Do not bin these whole.',
        'Keep your Social Security card in the safe, not your wallet. You rarely need the physical card.'
      ],
      key: 'Originals in one place, copies everywhere.',
      questions: [
        { q: 'Where should your Social Security card live?',
          a: ['In the fireproof safe — you rarely need the physical card', 'In your wallet for ID purposes', 'At your parents\' house', 'Scanned only, then shredded'],
          correct: 0, why: 'Carrying it is a theft risk for a document you almost never need in person.' },
        { q: 'What is the point of Tier 2, the encrypted cloud copy?',
          a: ['It survives a fire or flood that destroys the originals', 'It is faster to access', 'It replaces the need for originals', 'Insurance requires it'],
          correct: 0, why: 'A document bag protects against most things. A cloud copy protects against the rest.' },
        { q: 'How long should you keep tax returns?',
          a: ['Seven years minimum; many keep the returns permanently', 'One year', 'Three years', 'Until the refund arrives'],
          correct: 0, why: 'Keep the supporting receipts seven years and the returns themselves indefinitely.' }
      ]
    },
    {
      id: 'l2', title: 'The Eighteenth Birthday Gap', time: 3,
      teach: [
        'The day you turn eighteen your parents lose automatic access to your medical and financial information.',
        'If you are in an accident and unconscious, a hospital may not be able to discuss your condition with your own mother without documentation. Most families never learn this until they are standing in a hallway being told no.',
        'Four documents close the gap, and none are expensive:',
        '<b>HIPAA authorization</b> — names who providers may share information with.<br><b>Medical power of attorney</b> — names who makes medical decisions if you cannot.<br><b>Advance directive</b> — states your wishes about life-sustaining treatment.<br><b>Durable financial POA</b> — lets someone handle bills and insurance if you are incapacitated.'
      ],
      key: 'At eighteen you are legally on your own. That is a real gap with a cheap fix.',
      questions: [
        { q: 'You turn 18 and end up unconscious in a hospital. Without paperwork, can staff talk to your mother?',
          a: ['Not necessarily — you are a legal adult and privacy rules apply', 'Yes, parents always have access', 'Yes, if she is on your insurance', 'Only if you live at home'],
          correct: 0, why: 'A HIPAA authorization names exactly who they may talk to. Most families discover this gap at the worst moment.' },
        { q: 'Which document names a person to make medical decisions for you?',
          a: ['Medical power of attorney', 'Advance directive', 'HIPAA authorization', 'Living trust'],
          correct: 0, why: 'The advance directive states your wishes; the medical POA names the decision-maker. Name a backup too.' },
        { q: 'Why does the financial POA matter for a young adult?',
          a: ['Otherwise rent goes unpaid while you are in a hospital bed', 'It is required to open a bank account', 'It protects your credit score', 'It is needed for taxes'],
          correct: 0, why: 'Someone you trust needs to be able to handle bills and insurance if you cannot.' }
      ]
    },
    {
      id: 'l3', title: 'Beneficiaries and Renewals', time: 3,
      teach: [
        'Retirement accounts, life insurance and many bank accounts pass by <b>beneficiary designation</b> — and that designation <b>overrides a will</b>. Naming the wrong person or nobody at all is a real and common problem.',
        'Name a primary and a contingent on every account. It takes minutes in the account settings. Review after every major life change.',
        '<b>Renewals:</b> IDs, registrations, inspections, insurance, certifications. Put every expiration on a calendar the day you receive the document, not the month it lapses.',
        'Set up emergency access in your password manager — most offer a trusted contact who can request access after a waiting period. Almost nobody turns it on.'
      ],
      key: 'A beneficiary designation beats a will. Check them.',
      questions: [
        { q: 'Your will says everything goes to your sister, but your 401(k) beneficiary still lists an ex. Who gets the 401(k)?',
          a: ['The ex — beneficiary designations override a will', 'Your sister, because the will is newer', 'It is split between them', 'A court decides'],
          correct: 0, why: 'This is exactly why reviewing beneficiaries after every major life change matters.' },
        { q: 'When should you put a renewal date on the calendar?',
          a: ['The day you receive the document', 'The month before it expires', 'When you get a reminder notice', 'At the start of each year'],
          correct: 0, why: 'Reminder notices get lost or never sent. Capture it while the document is in your hand.' },
        { q: 'What is password manager "emergency access"?',
          a: ['A trusted contact who can request access after a waiting period', 'A backup master password', 'A printed recovery sheet', 'Customer support recovery'],
          correct: 0, why: 'The single most useful digital-estate feature, and almost nobody turns it on.' }
      ]
    }
  ]
});

HQ.register({
  id: 'digital', title: 'Digital', part: 'Protection', icon: '◫',
  color: '#2F7D7D', tag: 'Security, scams, privacy',
  blurb: 'Protecting your accounts, your money, and your name online.',
  lessons: [
    {
      id: 'l1', title: 'Passwords and 2FA', time: 3,
      teach: [
        '<b>Your email is the master key.</b> Whoever controls it can reset the password on everything else. It gets the strongest password and the strongest second factor you have.',
        'Use a <b>password manager</b>. It generates and remembers a unique long password for every account so you only memorize one. Free options exist and are good.',
        'Password <b>reuse</b> is the actual vulnerability. When one site is breached, attackers try that email and password everywhere else.',
        '<b>App-based 2FA beats text-message 2FA</b> — SMS can be intercepted by transferring your phone number to another device. Save the backup codes somewhere physical.',
        'Lie on security questions. Your mother\'s maiden name and first pet are findable. Store fake answers in the manager.'
      ],
      key: 'Length beats complexity. A long passphrase beats a short symbol soup.',
      questions: [
        { q: 'Which account should get your strongest protection?',
          a: ['Email — it can reset the password on everything else', 'Your bank', 'Your investment account', 'Social media'],
          correct: 0, why: 'Whoever controls the email controls everything downstream of it.' },
        { q: 'Why is app-based 2FA better than SMS codes?',
          a: ['SMS can be intercepted by transferring your phone number to another device', 'Apps are faster', 'SMS codes expire too quickly', 'Carriers charge for SMS'],
          correct: 0, why: 'SIM-swap attacks are real. An authenticator app is significantly harder to defeat.' },
        { q: 'What is the actual danger of reusing one password across sites?',
          a: ['One breach lets attackers into every other account using it', 'It is harder to remember', 'Sites penalize it', 'It slows down logins'],
          correct: 0, why: 'This is called credential stuffing and it is one of the most common ways accounts fall.' }
      ]
    },
    {
      id: 'l2', title: 'The Universal Scam Pattern', time: 3,
      teach: [
        'Every scam has the same structure: <b>contact you did not initiate + manufactured urgency + a reason not to check with anyone + an unusual payment method.</b> If you see three of the four, stop.',
        'Modern scams do not target stupidity. They target urgency, fear, loneliness, and the need for a job.',
        '<b>Nobody legitimate asks for a verification code.</b> Not your bank, not the IRS, not support, not a recruiter. That code exists to keep people out — reading it aloud lets them in.',
        '<b>No government agency or company on earth accepts gift cards as payment.</b> That one is 100% a scam, with no exceptions.',
        '<b>The sentence that ends every scam:</b> "I\'m going to hang up and call the company back at the number on my card."'
      ],
      key: 'Urgency is the tell. Verify through a channel you chose.',
      questions: [
        { q: 'A caller says you owe back taxes and must pay today in gift cards to avoid arrest. What is this?',
          a: ['100% a scam — no agency accepts gift cards, ever', 'Possibly legitimate if they have your SSN', 'A collections agency using an unusual method', 'Worth calling the number they gave to verify'],
          correct: 0, why: 'Gift cards are the single clearest tell there is. Never call the number in the message.' },
        { q: 'Someone from "your bank" asks you to read back the code they just texted you. What do you do?',
          a: ['Refuse — nobody legitimate ever asks for a verification code', 'Read it, since they called you', 'Read only the first three digits', 'Ask them to verify your account number first'],
          correct: 0, why: 'That code exists specifically to keep people out of your account.' },
        { q: 'What are the four elements of nearly every scam?',
          a: ['Unsolicited contact, urgency, secrecy, unusual payment method', 'Bad grammar, foreign number, long call, cash request', 'Email, link, login page, password', 'Threat, deadline, lawyer, court'],
          correct: 0, why: 'If you see three of the four, stop and verify through a channel you chose yourself.' }
      ]
    },
    {
      id: 'l3', title: 'Money Online and Fake Jobs', time: 3,
      teach: [
        'Use a <b>credit card</b> for online purchases, not a debit card. Fraud protections are far stronger and the money is not gone from your account while it is disputed.',
        '<b>Payment apps are cash.</b> Venmo, Cash App and Zelle to a stranger are effectively irreversible. Never use the friends-and-family option to pay a stranger — it strips buyer protection, which is exactly why they asked.',
        '<b>The fake job scam:</b> great remote pay, hired with no real interview, then they send a check to buy "equipment" and ask you to wire back the difference. The check is fake and bounces after you send real money. <b>No legitimate employer sends you money to forward on.</b>',
        '<b>Overpayment scam:</b> a buyer sends more than asking price and wants the difference back. The original payment reverses later.'
      ],
      key: 'Never refund an overpayment. Never move money for an employer.',
      questions: [
        { q: 'A new remote employer sends you a $3,200 check to buy equipment and wire $1,800 to their vendor. What is happening?',
          a: ['A scam — the check will bounce after you send real money', 'Normal for remote onboarding', 'Legitimate if the check clears first', 'Risky but probably fine with a reputable bank'],
          correct: 0, why: 'Checks can appear to clear and reverse days later. No legitimate employer sends you money to forward on.' },
        { q: 'Why use a credit card rather than a debit card online?',
          a: ['Stronger fraud protection and your money is not gone during the dispute', 'It earns more rewards', 'Debit cards have lower limits', 'Credit cards are accepted more widely'],
          correct: 0, why: 'With debit, the money leaves your account immediately and you are fighting to get it back.' },
        { q: 'Why would a seller ask you to pay via "friends and family"?',
          a: ['It strips your buyer protection', 'It avoids their taxes', 'It is faster to process', 'It is the standard for private sales'],
          correct: 0, why: 'That is exactly why they asked. Use the goods-and-services option with strangers.' }
      ]
    },
    {
      id: 'l4', title: 'Footprint and Getting Compromised', time: 3,
      teach: [
        'Search your own name in a private browser window. Whatever comes up is your resume before your resume. Assume every employer looks.',
        'Do not post images of documents — boarding passes, IDs, checks, prescription labels, a new debit card. Be careful with "get to know me" quizzes: your first car, first pet and childhood street are security question answers.',
        '<b>If an account is hacked:</b> change the password from a different, known-clean device → enable 2FA → sign out all sessions → <b>check for changed recovery email and auto-forwarding rules</b>, which attackers commonly add → then change the password anywhere else that shared it.',
        '<b>Freeze your credit at all three bureaus.</b> Free, fifteen minutes, and the strongest protection against someone opening accounts in your name.'
      ],
      key: 'Shame is what keeps people from acting, and acting fast is the only thing that helps.',
      questions: [
        { q: 'Your email was hacked. You changed the password. What is the commonly missed step?',
          a: ['Checking for auto-forwarding rules and a changed recovery address', 'Clearing your browser cache', 'Changing your username', 'Deleting old emails'],
          correct: 0, why: 'Attackers add forwarding rules so they keep receiving your mail after you lock them out.' },
        { q: 'Why are "get to know me" social quizzes a security risk?',
          a: ['First car, first pet and childhood street are security question answers', 'They install tracking cookies', 'They sell your email address', 'They are usually phishing links'],
          correct: 0, why: 'You are publishing your account recovery answers.' },
        { q: 'You sent money to a scammer. What is the biggest mistake now?',
          a: ['Staying quiet out of embarrassment instead of acting immediately', 'Calling your bank too quickly', 'Filing a police report', 'Telling your family'],
          correct: 0, why: 'Recovery is unlikely but not impossible in the first hours. Delay is what makes it permanent.' }
      ]
    }
  ]
});

HQ.register({
  id: 'emergency', title: 'Emergency', part: 'Protection', icon: '✚',
  color: '#B02E2E', tag: 'The first five minutes',
  blurb: 'Medical, household and crisis response for moments you will not have time to look anything up.',
  lessons: [
    {
      id: 'l1', title: 'The First Five Minutes', time: 3,
      teach: [
        '<b>Scene safety first, always.</b> Do not become the second victim. Fire, traffic, live electricity, gas, unstable structure — you help from a distance by calling and directing.',
        '<b>Call early. You can always cancel.</b> Dispatchers would far rather cancel a response than arrive late. Uncertainty is a reason to call, not a reason to wait.',
        '<b>One person leads.</b> In a group nobody acts because everyone assumes someone else will. Point at a specific person: "You, in the blue shirt, call 911 and come back and tell me you did."',
        '<b>Address what kills fastest:</b> unsafe scene → no breathing or pulse → severe bleeding → everything else. The dramatic injury is not always the dangerous one.',
        'When you call: <b>give the address first</b>, before anything else.'
      ],
      key: 'Point at one person and give one job. "Someone call 911" means nobody calls.',
      questions: [
        { q: 'A crowd is standing around an unconscious person. What is the right way to get 911 called?',
          a: ['Point at one specific person and assign them that exact job', 'Shout "someone call 911"', 'Call it yourself while starting care', 'Ask if anyone is a nurse first'],
          correct: 0, why: 'Diffusion of responsibility is real. Name a person, give one job, have them report back.' },
        { q: 'What is the first thing to tell a 911 dispatcher?',
          a: ['The address', 'What happened', 'How many people are hurt', 'Your name'],
          correct: 0, why: 'If they get only one piece of information, that is the one that matters. Cell location is approximate and sometimes badly wrong.' },
        { q: 'You are not sure whether a situation is "bad enough" for 911. What do you do?',
          a: ['Call — uncertainty is a reason to call, not to wait', 'Wait ten minutes and reassess', 'Drive them yourself', 'Call a nurse line first'],
          correct: 0, why: 'Dispatchers would far rather cancel a response than arrive late.' }
      ]
    },
    {
      id: 'l2', title: 'CPR and Choking', time: 3,
      teach: [
        '<b>Hands-only CPR, adult:</b> check scene, tap and shout. No response and not breathing normally — <b>occasional gasping is not breathing</b>. Call 911, get an AED.',
        'Heel of one hand on the center of the chest, other on top, shoulders over hands, arms straight. Push <b>at least two inches deep, 100–120 per minute</b>. Full recoil between compressions. The tempo of "Stayin\' Alive."',
        '<b>You will probably break ribs. Continue anyway.</b> Broken ribs heal. This is the most common reason bystanders stop, and it is the wrong reason.',
        '<b>Choking:</b> if they are coughing forcefully, do not intervene — coughing is more effective than anything you can do. If they cannot speak or breathe: back blows then abdominal thrusts, alternating.',
        '<b>Never abdominal thrusts on an infant</b> — back blows and chest thrusts only.'
      ],
      key: 'Imperfect CPR is far better than no CPR. Gasping is not breathing.',
      questions: [
        { q: 'Someone collapsed and is making occasional gasping sounds. What do you do?',
          a: ['Treat it as not breathing and start CPR', 'Wait — they are still breathing', 'Put them in the recovery position', 'Give rescue breaths only'],
          correct: 0, why: 'Agonal gasping is not breathing. It is one of the most commonly misread signs there is.' },
        { q: 'You feel ribs crack during CPR. What now?',
          a: ['Keep going — broken ribs heal', 'Stop immediately', 'Reduce depth by half', 'Switch to rescue breaths only'],
          correct: 0, why: 'This is the most common reason bystanders stop, and it is the wrong reason.' },
        { q: 'Someone is choking but coughing forcefully. Correct response?',
          a: ['Do not intervene — encourage them to keep coughing', 'Start back blows immediately', 'Give abdominal thrusts', 'Have them drink water'],
          correct: 0, why: 'Coughing moves more air than anything you can do. Act only when they cannot speak, cough or breathe.' }
      ]
    },
    {
      id: 'l3', title: 'Bleeding, Burns, and Breaks', time: 3,
      teach: [
        '<b>Severe bleeding:</b> gloves if available, then <b>firm direct pressure</b> on the wound. Do not keep lifting the dressing to check — it disrupts clotting. Add layers on top instead.',
        'If it will not stop on a limb, a <b>tourniquet</b> is appropriate: several inches above the wound, not on a joint, tighten until bleeding stops, note the time. It will hurt. Do not loosen it.',
        '<b>Embedded object:</b> do not pull it out. It may be the only thing preventing worse bleeding. Stabilize it in place.',
        '<b>Burns:</b> cool running water 10–20 minutes. <b>Not ice</b> — it causes further tissue damage. No butter, oil or toothpaste. Do not remove clothing stuck to a burn.',
        '<b>Suspected break:</b> do not try to straighten it. Immobilize as found.'
      ],
      key: 'Add layers on top. Lifting the dressing to check restarts the bleeding.',
      questions: [
        { q: 'A dressing soaks through on a bleeding wound. What do you do?',
          a: ['Add more layers on top and keep pressing', 'Remove it and apply a fresh one', 'Lift it to check the wound', 'Rinse the wound and re-dress it'],
          correct: 0, why: 'Removing it tears away the clot that was forming.' },
        { q: 'Correct first aid for a burn?',
          a: ['Cool running water for 10–20 minutes', 'Ice packs', 'Butter or oil', 'Leave it dry and uncovered'],
          correct: 0, why: 'Ice causes further tissue damage. Cover loosely with a clean non-stick dressing afterward.' },
        { q: 'There is a piece of metal embedded in someone\'s leg and bleeding around it. What do you do?',
          a: ['Leave it in and stabilize it with padding around it', 'Pull it out and apply pressure', 'Pull it out only if it is small', 'Push it in further to slow bleeding'],
          correct: 0, why: 'It may be the only thing preventing much worse bleeding.' }
      ]
    },
    {
      id: 'l4', title: 'Recognizing the Big Ones', time: 3,
      teach: [
        '<b>Stroke — FAST:</b> Face drooping, Arm weakness, Speech difficulty, Time to call 911. <b>Note the exact time symptoms began</b> — it determines which treatments are still possible.',
        '<b>Heart attack:</b> chest pressure, pain to arm/jaw/back, shortness of breath, cold sweat. Women and diabetics more often get subtle symptoms: unusual fatigue, jaw or back pain, indigestion. <b>Do not drive them.</b>',
        '<b>Anaphylaxis:</b> swelling of lips/tongue/throat, difficulty breathing, hives, dizziness. Epinephrine into the outer thigh immediately, <b>then call 911 even if they improve</b> — symptoms can return.',
        '<b>Opioid overdose:</b> unresponsive, very slow or stopped breathing, blue or gray lips, pinpoint pupils. Give naloxone if available — <b>it is harmless if you are wrong.</b> Stay with them; naloxone wears off.',
        '<b>Seizure:</b> clear the area, cushion the head, turn them on their side, time it. <b>Never put anything in their mouth.</b>'
      ],
      key: 'For a stroke, the time symptoms started is the most important single fact.',
      questions: [
        { q: 'Someone\'s face is drooping on one side and their speech is slurred. What is the most important thing to establish?',
          a: ['The exact time symptoms began', 'Their medical history', 'Whether they have eaten', 'Their blood pressure'],
          correct: 0, why: 'It determines which treatments are still available. Call 911, nothing to eat or drink.' },
        { q: 'You suspect an opioid overdose but are not certain. Naloxone is available. What do you do?',
          a: ['Give it — it is harmless if you are wrong', 'Wait until you are sure', 'Only give it if you see drugs nearby', 'Give half a dose'],
          correct: 0, why: 'Also stay with them. Naloxone wears off and breathing can stop again.' },
        { q: 'Someone is having a seizure. What should you never do?',
          a: ['Put anything in their mouth or restrain them', 'Cushion their head', 'Time the seizure', 'Turn them on their side'],
          correct: 0, why: 'Call 911 if it lasts over five minutes, repeats, is a first seizure, or happens in water or pregnancy.' }
      ]
    },
    {
      id: 'l5', title: 'Household Emergencies', time: 3,
      teach: [
        '<b>House fire:</b> get everyone out first — do not gather belongings. Close doors behind you to slow the spread. Stay low. Feel doors with the back of your hand. Once out, stay out.',
        '<b>Smell of gas:</b> do not touch any switch, do not use a phone inside, do not light anything. Get out, then call from outside.',
        '<b>CO alarm:</b> everyone outside into fresh air immediately, then call 911. Do not go back in to investigate. Headache, dizziness and nausea in several people at once is CO until proven otherwise.',
        '<b>Electrical fire:</b> never water. If someone is being shocked, do not touch them until the power is off.',
        '<b>Flooding:</b> never walk or drive into moving water. Six inches can knock you off your feet and twelve inches will float most vehicles. Turn around.'
      ],
      key: 'Gas: no switches, no phones, no flames. Get out first.',
      questions: [
        { q: 'You walk in and smell gas. What is the correct sequence?',
          a: ['Get everyone out without touching any switch, then call from outside', 'Open windows then call the gas company', 'Turn off the gas at the stove and ventilate', 'Call 911 from inside while evacuating'],
          correct: 0, why: 'Any switch — including a light switch or a phone — can create the spark. Shut off at the meter only if safe on your way out.' },
        { q: 'A CO alarm goes off. Three people have headaches. What do you do?',
          a: ['Everyone outside immediately, then call 911 — do not go back in', 'Open all the windows and investigate', 'Check the furnace first', 'Reset the alarm and monitor'],
          correct: 0, why: 'Multiple people with headache, dizziness and nausea at once is CO until proven otherwise.' },
        { q: 'A road ahead has standing water of unknown depth. What do you do?',
          a: ['Turn around — twelve inches floats most vehicles', 'Drive through slowly', 'Follow another car through', 'Speed up to create a wake'],
          correct: 0, why: 'Water also hides a road that may no longer be there. Six inches can knock an adult off their feet.' }
      ]
    },
    {
      id: 'l6', title: 'Crisis and the Numbers to Know', time: 3,
      teach: [
        '<b>988</b> — Suicide and Crisis Lifeline, call or text, 24 hours. Put it in your phone now, before you need it.',
        'If someone is in crisis: <b>ask directly.</b> "Are you thinking about hurting yourself?" Asking does not plant the idea — it is one of the few things that reliably helps, and it gives permission to be honest.',
        'Listen without arguing, fixing or minimizing. Do not say "you have so much to live for." Say "I\'m here, tell me what\'s going on." Do not leave them alone if risk seems immediate.',
        '<b>Follow up the next day and the week after.</b> The period right after a crisis is when support matters most and when everyone assumes it is over.',
        'Poison Control <b>1-800-222-1222</b>. Domestic Violence <b>1-800-799-7233</b>. Any immediate danger: <b>911</b>.'
      ],
      key: 'Asking directly does not plant the idea. It gives permission to be honest.',
      questions: [
        { q: 'You are worried a friend might be suicidal. Should you ask directly?',
          a: ['Yes — asking does not plant the idea and gives permission to be honest', 'No, it could suggest the idea', 'Only if a professional is present', 'Only hint at it indirectly'],
          correct: 0, why: 'It is one of the few things that reliably helps.' },
        { q: 'What is 988?',
          a: ['The Suicide and Crisis Lifeline, by call or text, 24 hours', 'The poison control number', 'A non-emergency police line', 'The domestic violence hotline'],
          correct: 0, why: 'Put it in your phone before you need it. Poison Control is 1-800-222-1222.' },
        { q: 'When does support matter most for someone who has been in crisis?',
          a: ['The days and weeks right after, when everyone assumes it is over', 'Only during the crisis itself', 'Once they are in treatment', 'After they say they feel better'],
          correct: 0, why: 'Follow up the next day and the week after. That gap is where people fall through.' }
      ]
    }
  ]
});
