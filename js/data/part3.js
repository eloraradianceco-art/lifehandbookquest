/* PART THREE — THE MACHINERY OF A LIFE : Auto, Money, Work */

HQ.register({
  id: 'auto', title: 'Auto', part: 'Machinery', icon: '⚙',
  color: '#3A6EA5', tag: 'Maintain it, read it, do not get taken',
  blurb: 'Tires, fluids, warning lights, emergencies, and buying used without getting burned.',
  lessons: [
    {
      id: 'l1', title: 'The Car Is Always Talking', time: 2,
      teach: [
        'A new noise, a new smell, a new vibration, or a light on the dash is information. Cars almost never fail without warning — they fail after several warnings that got normalized.',
        'Maintenance is cheap. Repair is not. A $60 oil change protects a $6,000 engine. $400 of brake pads prevents $1,200 of pads plus rotors plus calipers.',
        '<b>The five-minute monthly habit:</b> walk around the car. Tire pressure, tread, oil level, all lights, look underneath for drips, washer fluid. That catches most problems while they are still cheap.'
      ],
      key: 'Five minutes a month is the whole strategy.',
      questions: [
        { q: 'Your brakes started making a high-pitched squeal. What is happening?',
          a: ['Brake pad wear indicators doing their job — schedule it now', 'The rotors are warped', 'Normal for humid weather', 'The calipers are seized'],
          correct: 0, why: 'You have some time. If it becomes grinding or growling, stop driving — that is metal on rotor and every mile adds rotor cost.' },
        { q: 'Why does the handbook say cars "almost never fail without warning"?',
          a: ['They give several signals that get normalized before the failure', 'Modern cars have predictive sensors', 'Failures only happen at high mileage', 'Warranties catch problems early'],
          correct: 0, why: 'The noise becomes background. That is the actual failure mode — the human one.' },
        { q: 'Which two items are safety, not maintenance?',
          a: ['Tires and brakes', 'Oil and coolant', 'Battery and alternator', 'Wipers and lights'],
          correct: 0, why: 'Everything else can be negotiated or delayed. Never cheap out and never wait on these two.' }
      ]
    },
    {
      id: 'l2', title: 'Tires', time: 3,
      teach: [
        'Use the pressure on the <b>driver\'s door jamb sticker</b>, not the number on the tire sidewall. The sidewall number is the tire\'s maximum, not your target. People get this wrong constantly.',
        'Check monthly when tires are <b>cold</b> — driving heats the air and raises the reading.',
        '<b>Penny test:</b> insert a penny with Lincoln upside down. If you can see the top of his head, the tread is worn out. Replace now.',
        'Wear on both outer edges = underinflation. Center-only wear = overinflation. One edge only = alignment problem.',
        'Rubber ages even without miles. Six years is a common guideline; ten is a hard limit regardless of tread.'
      ],
      key: 'Door jamb sticker, not the sidewall. Check cold.',
      questions: [
        { q: 'Where do you find the correct tire pressure for your car?',
          a: ['The sticker in the driver\'s door jamb', 'Molded into the tire sidewall', 'The owner\'s manual only', 'Whatever the gas station gauge suggests'],
          correct: 0, why: 'The sidewall number is the tire\'s maximum, not your target. This is one of the most common mistakes people make.' },
        { q: 'Your tires are worn on both outer edges but fine in the middle. What does that mean?',
          a: ['Chronic underinflation', 'Overinflation', 'Bad alignment', 'Worn shocks'],
          correct: 0, why: 'Center-only wear means overinflation. One edge only means alignment.' },
        { q: 'A vibration appears only between 55 and 70 mph and you feel it in the steering wheel. Most likely?',
          a: ['Tire balance', 'Warped rotors', 'Bad alignment', 'Low tire pressure'],
          correct: 0, why: 'Vibration only when braking is warped rotors. A speed-specific vibration is almost always balance.' }
      ]
    },
    {
      id: 'l3', title: 'Warning Lights', time: 3,
      teach: [
        'Color is urgency. Red means stop. Yellow means address it soon.',
        '<b>Oil pressure (oil can):</b> PULL OVER AND SHUT OFF NOW. An engine without oil pressure destroys itself in minutes. Do not drive to a shop.',
        '<b>Temperature:</b> pull over and shut off. Do not open the radiator cap. Overheating warps heads and blows gaskets.',
        '<b>Battery/charging:</b> you are running on battery alone, often under 30 minutes. Turn off accessories and get somewhere.',
        '<b>Check engine, steady:</b> not an emergency. Tighten the gas cap first, get the code read within a few days.',
        '<b>Check engine, FLASHING:</b> active misfire. Stop driving as soon as safe or you destroy the catalytic converter.'
      ],
      key: 'Steady check engine = this week. Flashing = right now.',
      questions: [
        { q: 'Your check engine light starts flashing while driving. What does that mean?',
          a: ['Active misfire — stop as soon as safely possible or you destroy the catalytic converter', 'Same as steady, just a bulb issue', 'The gas cap is loose', 'Low oil'],
          correct: 0, why: 'Flashing is urgent. Steady is "get it read this week."' },
        { q: 'The oil pressure light comes on. You are two miles from a shop. What do you do?',
          a: ['Pull over and shut the engine off immediately', 'Drive slowly to the shop', 'Add oil while driving to the shop', 'Keep going if the engine sounds fine'],
          correct: 0, why: 'An engine without oil pressure destroys itself in minutes. Check the level, and if it is full, tow it.' },
        { q: 'The battery/charging light comes on. How much time do you likely have?',
          a: ['Often under 30 minutes, running on battery alone', 'Several hours', 'Until the next fill-up', 'It is only a warning, no time limit'],
          correct: 0, why: 'Usually the alternator. Turn off AC, radio and anything unnecessary and get to a shop or home.' }
      ]
    },
    {
      id: 'l4', title: 'Changing a Flat', time: 3,
      teach: [
        'Get fully off the road onto flat, hard ground. A ruined rim costs far less than being hit.',
        '<b>Break the lug nuts loose FIRST</b>, while the tire is still on the ground. If you jack first, the wheel just spins.',
        'Jack only at the reinforced jack points — marked with a notch or arrow. Jacking anywhere else bends the floor pan.',
        'Lower, then tighten fully in a <b>star pattern</b>, not around the circle. A compact spare is rated for about 50 mph and 50 miles.',
        '<b>If the shoulder is narrow or it is dark, do not change it.</b> Stay belted inside with hazards on and call for help. Standing beside a vehicle on a highway shoulder is one of the most dangerous things people do.'
      ],
      key: 'Lugs loose first, jack second. Star pattern to tighten.',
      questions: [
        { q: 'What is the correct order when changing a flat?',
          a: ['Break the lug nuts loose, then jack the car up', 'Jack the car up, then loosen the lugs', 'Remove the hubcap, jack, then loosen', 'Loosen and remove lugs completely, then jack'],
          correct: 0, why: 'If the wheel is off the ground it just spins when you try to loosen them.' },
        { q: 'It is dark, raining, and you have a flat on a narrow interstate shoulder. Best move?',
          a: ['Stay belted inside with hazards on and call for roadside assistance', 'Change it quickly before traffic builds', 'Walk to the next exit', 'Change it from the traffic side to see better'],
          correct: 0, why: 'A tow is cheaper than the alternative. Highway shoulders are genuinely one of the most dangerous places people stand.' },
        { q: 'How fast and how far can you drive on a compact spare?',
          a: ['About 50 mph and 50 miles', 'Normal speed, indefinitely', '70 mph for up to 200 miles', 'Only to the end of the street'],
          correct: 0, why: 'It is a limp-home device, not a tire. Also check its pressure — compact spares often need around 60 psi.' }
      ]
    },
    {
      id: 'l5', title: 'Fluids and Oil', time: 3,
      teach: [
        'Follow the <b>manual\'s interval</b>, not the sticker on your windshield. Many modern cars on full synthetic run 7,500–10,000 miles. The 3,000-mile rule is largely a leftover and a sales tool.',
        'Check the oil level monthly on level ground. Low oil is an <b>emergency</b>, not a maintenance item — top it off and find out where it is going.',
        'Dark oil is not automatically bad oil. It darkens quickly by design because it is carrying contaminants. Gritty, milky or burnt-smelling is what matters.',
        '<b>Never open a hot radiator cap</b> — the system is pressurized and will spray scalding coolant.',
        'Find out today whether your engine has a timing <b>belt</b> or <b>chain</b>. A snapped belt on an interference engine destroys the engine instantly.'
      ],
      key: 'The manual overrides the quick-lube sticker every time.',
      questions: [
        { q: 'The shop sticker says 3,000 miles, your manual says 7,500. Which do you follow?',
          a: ['The manual', 'The sticker, to be safe', 'Split the difference', 'Whichever comes first'],
          correct: 0, why: 'The 3,000-mile rule is largely a leftover from older oils and a sales tool.' },
        { q: 'Why does it matter whether your engine has a timing belt or a chain?',
          a: ['A belt is a wear item, and a snapped belt can destroy the engine instantly', 'A chain needs more frequent oil changes', 'Belts are quieter', 'Chains require a special filter'],
          correct: 0, why: 'A chain generally lasts the life of the engine. A belt is usually replaced between 60,000 and 105,000 miles.' },
        { q: 'You notice a sweet, syrupy smell after driving. Most likely?',
          a: ['A coolant leak', 'Burning oil', 'A failing catalytic converter', 'Brake fluid'],
          correct: 0, why: 'Check for puddles and watch the temperature gauge. Burning rubber is a slipping belt; burnt toast smell is electrical.' }
      ]
    },
    {
      id: 'l6', title: 'Jump Starting', time: 3,
      teach: [
        'Order matters. Batteries vent hydrogen gas, and doing this wrong causes sparks right at the battery.',
        '<b>1.</b> RED to POSITIVE of the DEAD battery.<br><b>2.</b> RED to POSITIVE of the GOOD battery.<br><b>3.</b> BLACK to NEGATIVE of the GOOD battery.<br><b>4.</b> BLACK to <b>UNPAINTED METAL on the dead car\'s engine block or frame</b> — NOT the dead battery\'s negative terminal.',
        'That last step is the one people skip, and it is the one that keeps the spark away from the gas the battery is venting.',
        'Remove in exact reverse order. Then drive 20–30 minutes — idling in a driveway will not recharge it.'
      ],
      key: 'Final black clamp goes on bare metal, never the dead battery terminal.',
      questions: [
        { q: 'Where does the final black clamp go?',
          a: ['Unpainted metal on the dead car\'s engine block or frame', 'The dead battery\'s negative terminal', 'The dead battery\'s positive terminal', 'The good car\'s frame'],
          correct: 0, why: 'This keeps the spark away from the hydrogen gas the battery is venting. It is the most commonly skipped step.' },
        { q: 'After a successful jump, what do you need to do?',
          a: ['Drive 20–30 minutes to put charge back in', 'Idle in the driveway for ten minutes', 'Turn it off immediately to preserve charge', 'Nothing — the jump is enough'],
          correct: 0, why: 'Idling will not do it.' },
        { q: 'Your battery has died three times this month. What is the real issue?',
          a: ['Something else is wrong — a parasitic draw, failing alternator, or a battery that will not hold charge', 'You need to jump it longer', 'Cold weather', 'You need a bigger battery'],
          correct: 0, why: 'Get it load tested free at most parts stores. Typical battery life is 3–5 years, shorter in extreme heat.' }
      ]
    },
    {
      id: 'l7', title: 'Buying Used and Dealing With Mechanics', time: 3,
      teach: [
        '<b>Get pre-approved at a credit union first.</b> Now dealer financing has to beat a real rate rather than define it.',
        'Total transportation cost — payment, insurance, fuel, maintenance, registration — under <b>15% of take-home</b>. Get an insurance quote on the specific model before buying.',
        '<b>Independent pre-purchase inspection</b> at a mechanic of your choosing, $100–200. If a seller refuses, walk away immediately and without discussion.',
        'Negotiate the <b>total price</b>, never the monthly payment. A dealer can hit any payment you name by stretching the term.',
        'The one question to always ask a mechanic: <i>"Is this a safety issue, something that will cause damage if I wait, or a recommendation?"</i>'
      ],
      key: 'Never negotiate the monthly payment. Negotiate the total price.',
      questions: [
        { q: 'A used car seller refuses to let you take it to your own mechanic. What do you do?',
          a: ['Walk away immediately', 'Ask them to explain why', 'Lower your offer to compensate', 'Have them pick the inspector instead'],
          correct: 0, why: 'There is no good reason to refuse. There is always another car.' },
        { q: 'Why negotiate total price rather than monthly payment?',
          a: ['A dealer can hit any payment you name by stretching the loan term', 'Monthly payments are calculated after tax', 'Total price includes the warranty', 'It is faster'],
          correct: 0, why: 'The payment hides the real cost. 72 and 84-month loans exist precisely to make unaffordable cars look affordable.' },
        { q: 'What is the one question that sorts every proposed repair?',
          a: ['Is this a safety issue, will it cause damage if I wait, or is it a recommendation?', 'How much is labor?', 'Can you do it cheaper?', 'Is the part OEM?'],
          correct: 0, why: 'It sorts everything into do-it-now, schedule-it, or think-about-it. Someone who will not answer directly has told you something too.' }
      ]
    }
  ]
});

HQ.register({
  id: 'money', title: 'Money', part: 'Machinery', icon: '◉',
  color: '#A85245', tag: 'Budget, credit, debt, build from zero',
  blurb: 'The financial system for the first ten years of adult life.',
  lessons: [
    {
      id: 'l1', title: 'The One Number That Matters', time: 2,
      teach: [
        'Your <b>savings rate</b> — the percentage of take-home you do not spend. If you are saving 20%, you are doing well. If you are at zero, your income is irrelevant, because you are one bad month from a crisis regardless of what you make.',
        'Someone earning $45,000 and saving 20% is building wealth. Someone earning $120,000 and saving nothing is not.',
        '<b>Pay yourself first.</b> Money is saved before it is spent, automatically, on payday. If you save what is left at the end of the month, nothing will ever be left. That is an ordering problem, not a discipline problem.'
      ],
      key: 'Savings rate matters more than income.',
      questions: [
        { q: 'Who is in better financial shape?',
          a: ['Someone earning $45k saving 20%', 'Someone earning $120k saving nothing', 'They are equivalent', 'Depends on their credit score'],
          correct: 0, why: 'Income without a system just means more expensive problems.' },
        { q: 'Why does "save whatever is left at the end of the month" fail?',
          a: ['Nothing is ever left — it is an ordering problem', 'People forget to transfer it', 'Banks charge fees', 'Interest rates are too low'],
          correct: 0, why: 'Automate it on payday, before you ever see the money as spendable.' },
        { q: 'What does the handbook say money\'s real purpose is?',
          a: ['Options — the ability to quit a bad job, handle an emergency, help someone', 'Security in retirement', 'Status and comfort', 'Beating inflation'],
          correct: 0, why: 'Every purchase either buys options or spends them.' }
      ]
    },
    {
      id: 'l2', title: 'Account Architecture', time: 3,
      teach: [
        'Five accounts: <b>bills checking</b> (all autopay pulls from here), <b>spending checking</b> (the debit card account — when it is empty you are done), <b>emergency fund</b> (high-yield savings at a different bank), <b>sinking funds</b>, and <b>investing</b>.',
        'One account holding rent money, grocery money and savings means you never actually know what is available. It always looks like there is enough, right up until there is not.',
        'Keep the emergency fund at a <b>different bank</b>. Friction is a feature — if it takes two days to transfer, you will not raid it for a concert ticket.',
        'Use a high-yield savings account. Standard savings at big banks pay almost nothing.'
      ],
      key: 'Separation means the spending balance is a real answer to a real question.',
      questions: [
        { q: 'Why keep the emergency fund at a different bank from your checking?',
          a: ['Friction is a feature — it stops impulse raids', 'Better FDIC coverage', 'Higher interest is only available elsewhere', 'To hide it from a partner'],
          correct: 0, why: 'If it takes two days to transfer, you will not use it for a concert ticket.' },
        { q: 'What is the problem with running everything from one checking account?',
          a: ['You never know what is actually available until it is too late', 'Banks charge more for it', 'It hurts your credit score', 'It makes taxes harder'],
          correct: 0, why: 'It always looks like there is enough. Separation makes the balance meaningful.' },
        { q: 'For a couple, what does the handbook say is the actual wrong answer?',
          a: ['Never talking about it', 'Keeping finances fully separate', 'Combining everything', 'Splitting bills 50/50'],
          correct: 0, why: 'There is no universally right structure, but both people should know all the numbers. Financial secrecy is corrosive long before it becomes a crisis.' }
      ]
    },
    {
      id: 'l3', title: 'Sinking Funds', time: 3,
      teach: [
        'A sinking fund is money saved monthly for a known expense that does not happen monthly. Car insurance every six months. Tires every three years. Christmas every December. The vet.',
        '<b>None of these are emergencies.</b> They are appointments you refuse to schedule.',
        'This is why people on a decent income still feel broke. Roughly every six weeks something "unexpected" shows up — registration, a dentist bill, brakes, a wedding. None of it is unexpected and none of it was budgeted, so every one becomes a crisis or a credit card balance.',
        'Divide the annual cost by twelve. Save that monthly. The bill arrives already paid for.'
      ],
      key: 'Sinking funds turn a decade of financial chaos into a boring monthly transfer.',
      questions: [
        { q: 'Your car registration comes due every year for $200. What is that?',
          a: ['A sinking fund item — save about $17/month', 'An emergency fund expense', 'An unavoidable surprise', 'A reason to use a credit card'],
          correct: 0, why: 'Known cost, predictable timing. Divide by twelve and it stops being an event.' },
        { q: 'Why do people on decent incomes still feel broke?',
          a: ['Predictable irregular expenses arrive unbudgeted and become crises', 'Wages have not kept up', 'They spend too much on coffee', 'Taxes are too high'],
          correct: 0, why: 'Something shows up roughly every six weeks. All of it is predictable and none of it was planned for.' },
        { q: 'Which of these is actually an emergency fund expense, not a sinking fund?',
          a: ['Job loss', 'Christmas gifts', 'Car insurance paid every six months', 'New tires'],
          correct: 0, why: 'Emergencies are unexpected, necessary and urgent. The other three are all on a calendar you could have read.' }
      ]
    },
    {
      id: 'l4', title: 'The Order of Operations', time: 3,
      teach: [
        'When you do not know what to do with the next dollar, work down this list:',
        '<b>1.</b> Cover essentials and minimum debt payments.<br><b>2.</b> Build a $1,000–2,000 starter emergency fund.<br><b>3.</b> Capture the full employer 401(k) match.<br><b>4.</b> Attack high-interest debt above ~7–8%.<br><b>5.</b> Finish the full 3–6 month emergency fund.<br><b>6.</b> Fund a Roth IRA.<br><b>7.</b> Increase retirement contributions.<br><b>8.</b> Save for other goals.',
        'The match is step 3 because it is an immediate 50–100% return. Nothing else on the list comes close.'
      ],
      key: 'Not taking the employer match is turning down free money.',
      questions: [
        { q: 'You have $200 extra. Starter emergency fund is done, employer offers a 401(k) match you are not taking, and you have a 24% credit card. What comes first?',
          a: ['Capture the full employer match', 'Pay the credit card', 'Open a Roth IRA', 'Finish the full emergency fund'],
          correct: 0, why: 'The match is an immediate 50–100% return. Even a 24% card cannot beat that. Then attack the card.' },
        { q: 'Why does paying off a 24% credit card count as a great "investment"?',
          a: ['It is a guaranteed 24% return, which no investment can promise', 'Credit card debt is tax-deductible', 'It raises your credit score the most', 'It frees up the credit limit'],
          correct: 0, why: 'Guaranteed and risk-free. That is why high-interest debt outranks investing on the list.' },
        { q: 'Why not skip the emergency fund and invest instead?',
          a: ['Without a cushion the first real problem goes on a card at 25%, erasing years of gains', 'Investments are too risky at a young age', 'You cannot invest without savings', 'Emergency funds earn more'],
          correct: 0, why: 'The cushion is what makes you hard to knock over.' }
      ]
    },
    {
      id: 'l5', title: 'Credit, Honestly', time: 3,
      teach: [
        '<b>Payment history</b> is ~35% of your score. Never miss a payment. One 30-day late mark drops a score significantly and stays for years.',
        '<b>Utilization</b> is ~30%. Keep balances under 30% of your limit, ideally under 10%.',
        '<b>Length of history</b> ~15% — keep your oldest card open forever.',
        'The myth that costs people the most money: <b>you do not need to carry a balance to build credit.</b> Carrying a balance does nothing for your score and everything for the bank\'s revenue. Use the card, pay the statement balance in full, pay zero interest, build excellent credit.',
        'Freeze your credit at all three bureaus when not applying for anything. Free, and the best protection against identity theft.'
      ],
      key: 'Pay the statement balance in full. Carrying a balance builds nothing but interest.',
      questions: [
        { q: 'Does carrying a small balance each month help your credit score?',
          a: ['No — it does nothing for your score and costs you interest', 'Yes, it shows active use', 'Only if it is under 10% of the limit', 'Yes, but only for the first year'],
          correct: 0, why: 'Use the card, pay the statement balance in full, pay zero interest. Anyone saying otherwise is repeating something they never checked.' },
        { q: 'Which factor is the largest share of a credit score?',
          a: ['Payment history (~35%)', 'Utilization (~30%)', 'Length of history (~15%)', 'Credit mix (~10%)'],
          correct: 0, why: 'Set autopay for at least the minimum on everything. One late mark is expensive and long-lived.' },
        { q: 'You have a $1,000 limit. What balance should you aim to stay under?',
          a: ['$100–300', '$500', '$800', 'It does not matter if you pay in full'],
          correct: 0, why: 'Under 30%, ideally under 10%. The reported balance affects utilization even if you pay in full.' }
      ]
    },
    {
      id: 'l6', title: 'Debt and the Car Trap', time: 3,
      teach: [
        '<b>Avalanche:</b> minimums everywhere, extra at the highest interest rate. Mathematically optimal.<br><b>Snowball:</b> extra at the smallest balance. Costs slightly more, but more people finish it.',
        'Either way: <b>stop adding to the balance first.</b> You cannot outrun a card you are still using.',
        'Minimum payments are engineered to keep you in debt. $5,000 at 24% paid at minimum takes well over a decade. The same debt at a fixed $250/month clears in about two years.',
        '<b>The car is the number one wealth killer for people in their twenties.</b> Keep total transportation under 15% of take-home. Never finance longer than 48–60 months — if you need 72 or 84, you cannot afford it.'
      ],
      key: 'If you need an 84-month loan to afford it, you cannot afford it.',
      questions: [
        { q: 'You are offered an 84-month car loan to make the payment fit. What does that tell you?',
          a: ['You cannot afford that car', 'It is a good way to keep payments low', 'It is standard for new cars', 'Only the interest rate matters'],
          correct: 0, why: 'Long terms exist to make unaffordable cars look affordable, and they trap you in negative equity.' },
        { q: 'What is the first step in any debt payoff plan?',
          a: ['Stop adding to the balance', 'Choose avalanche or snowball', 'Call a consolidation company', 'Open a balance transfer card'],
          correct: 0, why: 'You cannot outrun a card you are still using. Freeze it and remove it from saved-card fields online.' },
        { q: 'Snowball costs slightly more in interest than avalanche. Why might it still be the better choice?',
          a: ['Early wins create momentum and more people actually finish it', 'It is faster mathematically', 'It protects your credit score better', 'Lenders prefer it'],
          correct: 0, why: 'Momentum is a real variable. The best plan is the one you complete.' }
      ]
    },
    {
      id: 'l7', title: 'Lifestyle Creep and Traps', time: 3,
      teach: [
        'Lifestyle creep is why someone can double their income over ten years and still feel exactly as broke. Every raise gets absorbed and the savings rate never moves.',
        '<b>The raise rule:</b> save at least half of every raise, bonus and tax refund automatically, before you ever see it in spending.',
        '<b>Traps:</b> payday and title loans (triple-digit effective rates), rent-to-own (two to three times retail), overdraft fees (turn the protection off so the card declines), subscription bleed (audit twice a year — most households find $40–100/month they forgot about).',
        '<b>Co-signing</b> is not vouching for someone. You are legally taking on the entire debt if they stop paying. Only do it if you can afford to pay it in full yourself.'
      ],
      key: 'Save half of every raise before it reaches your spending account.',
      questions: [
        { q: 'You get a $400/month raise. What does the raise rule say?',
          a: ['Automate at least $200 of it into savings before you see it', 'Enjoy it — you earned it', 'Put all of it toward a nicer apartment', 'Wait six months then decide'],
          correct: 0, why: 'You still get to improve your life with the other half. You just do not get to spend all of it unconsciously.' },
        { q: 'A friend asks you to co-sign a car loan. What are you actually agreeing to?',
          a: ['Taking on the entire debt legally if they stop paying, plus the credit impact', 'Vouching for their character', 'Being a backup contact', 'Guaranteeing only the down payment'],
          correct: 0, why: 'Only do this if you can afford to pay the whole thing yourself.' },
        { q: 'Why turn off overdraft protection?',
          a: ['So the card simply declines instead of generating a $35 fee on a $4 purchase', 'It lowers your credit score', 'Banks charge for the feature', 'It slows down transactions'],
          correct: 0, why: 'A declined card is embarrassing for ten seconds. The fee is real money.' }
      ]
    }
  ]
});

HQ.register({
  id: 'work', title: 'Work', part: 'Machinery', icon: '▲',
  color: '#5F7A33', tag: 'Hired, paid, better',
  blurb: 'Resumes, interviews, the first ninety days, and how income actually grows.',
  lessons: [
    {
      id: 'l1', title: 'Reliability Beats Talent', time: 2,
      teach: [
        'Be the person who does what they said. Reliability is rarer than talent and worth more — someone competent and consistent outcompetes someone brilliant and unpredictable in every field.',
        'Your reputation is your real resume. In most industries, especially locally, people hire people they have heard about.',
        '<b>Solve problems, do not just report them.</b> Anyone can identify what is broken. Bringing a problem plus a proposed solution is the fastest way to be treated as more senior than your title.',
        'Your first several jobs will probably not be meaningful, and that is fine. Their purpose is teaching you to show up, work with people you did not choose, and be trusted.'
      ],
      key: 'How you leave matters more than how you arrive.',
      questions: [
        { q: 'You notice a process at work is broken. Best move?',
          a: ['Bring it to your manager along with a proposed fix', 'Report it so they know', 'Fix it quietly without telling anyone', 'Wait to see if someone else raises it'],
          correct: 0, why: 'Problem plus proposed solution is the fastest way to be treated as more senior than your title.' },
        { q: 'What does the handbook say is rarer than talent and worth more?',
          a: ['Reliability — doing what you said you would', 'Creativity', 'Technical skill', 'Networking ability'],
          correct: 0, why: 'Competent and consistent beats brilliant and unpredictable, every time, in every field.' },
        { q: 'Why does quitting badly matter so much?',
          a: ['The industry is smaller than you think and your manager is someone else\'s reference', 'It affects unemployment eligibility', 'It shows on your credit', 'It is illegal in some states'],
          correct: 0, why: 'Never burn a bridge for a moment of satisfaction.' }
      ]
    },
    {
      id: 'l2', title: 'Getting Hired', time: 3,
      teach: [
        'Most jobs are filled through people, not portals. Applying online is the lowest-yield method and the one everyone defaults to.',
        '<b>Tell people you are looking, specifically.</b> Not "looking for anything" — "looking for a warehouse or logistics role, day shift, within 30 minutes of here." Specific requests get referred. Vague ones get forgotten.',
        'Resume: one page, no photo, no objective statement. <b>Lead every bullet with a verb and end it with a result.</b> Not "responsible for inventory" but "managed inventory for a 400-item stockroom and reduced monthly shortages by tracking reorder points."',
        'Apply anyway if you meet most requirements. Job postings are wish lists, not minimums.'
      ],
      key: 'Numbers are what make a resume bullet credible.',
      questions: [
        { q: 'Which resume bullet is stronger?',
          a: ['"Managed inventory for a 400-item stockroom, cutting monthly shortages"', '"Responsible for inventory management"', '"Hard worker with inventory experience"', '"Inventory duties as assigned"'],
          correct: 0, why: 'Verb first, result last, numbers wherever they exist.' },
        { q: 'What is the problem with telling people "I\'m looking for anything"?',
          a: ['Vague requests get forgotten; specific ones get referred', 'It sounds desperate', 'It is not true', 'It limits your options'],
          correct: 0, why: 'Give them something concrete enough to match against someone they know.' },
        { q: 'You meet 6 of 9 listed requirements. Should you apply?',
          a: ['Yes — postings are wish lists, not minimums', 'No, you will waste their time', 'Only if you explain the gaps upfront', 'Only for small companies'],
          correct: 0, why: 'Most people filter themselves out before anyone else gets the chance to.' }
      ]
    },
    {
      id: 'l3', title: 'The Interview', time: 3,
      teach: [
        'They are answering three questions: can you do the job, will you actually show up, and will people want to work with you.',
        'Prepare five stories: a problem you solved, conflict you handled, a failure, something you learned fast, and a time you went beyond what was asked. Use <b>STAR</b> — Situation, Task, Action, Result — and keep each to about 90 seconds. Most people ramble and never reach the result.',
        'Have questions ready. Having none reads as no interest. "What does success look like in the first ninety days?" and "What happened to the last person in this role?" are both good.',
        '<b>Never speak badly about a previous employer.</b> Ever.'
      ],
      key: 'Answer the question actually asked, then stop talking.',
      questions: [
        { q: 'What does STAR stand for?',
          a: ['Situation, Task, Action, Result', 'Story, Timing, Attitude, Response', 'Specific, Tangible, Accurate, Relevant', 'Setup, Trigger, Answer, Review'],
          correct: 0, why: 'Keep each to about 90 seconds. Most people never get to the Result, which is the part that matters.' },
        { q: 'They ask about a skill you do not have. Best answer?',
          a: ['Be honest about not knowing it, then say how you would learn it', 'Say you have some exposure to it', 'Change the subject to a related strength', 'Claim you can pick it up easily'],
          correct: 0, why: 'Lying about skills gets found out. Honesty plus a learning plan is a strong answer.' },
        { q: 'The interviewer asks if you have questions. You say no. What does that signal?',
          a: ['No interest in the role', 'Confidence and efficiency', 'That you did your research already', 'Nothing — it is a formality'],
          correct: 0, why: 'Have two or three ready. It is one of the easiest ways to stand out.' }
      ]
    },
    {
      id: 'l4', title: 'The First Ninety Days', time: 2,
      teach: [
        'You are being evaluated on habits, not output. Output comes later.',
        'Be early, consistently — this alone puts you in the top quarter of most workforces. Learn names fast, including the people nobody else bothers with. Take notes; being told the same thing four times becomes a reputation.',
        '<b>Do not criticize how things are done for the first few months.</b> Understand why it is that way first. Some of it is stupid and some of it is a scar from something you have not seen yet.',
        'Volunteer once for something nobody wants to do. It buys enormous goodwill for very little cost.'
      ],
      key: 'Find out what your manager actually cares about and make that easier.',
      questions: [
        { q: 'Two weeks in, you spot several inefficient processes. What should you do?',
          a: ['Wait a few months and understand why they exist first', 'Raise them all at once to show initiative', 'Fix them quietly on your own', 'Mention them to coworkers to gauge reaction'],
          correct: 0, why: 'Some of it is stupid, and some of it is a scar from something you have not seen yet.' },
        { q: 'What is a "good question" during onboarding?',
          a: ['"I checked the manual and tried X. Should I do Y or Z?"', '"How do I do this?"', '"Why is it set up this way?"', 'Not asking and figuring it out alone'],
          correct: 0, why: 'Specific, shows you tried first. Being told the same thing twice is forgivable; four times becomes a reputation.' },
        { q: 'Which single habit puts you in the top quarter of most workforces?',
          a: ['Being early, consistently', 'Working late', 'Answering emails fast', 'Volunteering for overtime'],
          correct: 0, why: 'It is noticed and it is remembered, even when nobody mentions it.' }
      ]
    },
    {
      id: 'l5', title: 'Getting Paid More', time: 3,
      teach: [
        '<b>Keep a brag file starting today.</b> Every month write down what you accomplished, problems solved, money saved, and any praise received. Nobody remembers this at review time, including you.',
        'Lead with value, not need. Your rent going up is not an argument. What you delivered is.',
        'Have a number. "I\'d like to discuss moving to X" is a conversation. "I think I deserve more" is not.',
        'If the answer is no, <b>ask what it would take</b> — specific criteria and a timeline, in writing.',
        'Early-career raises compound: a few thousand more at twenty-two raises the base every future percentage is calculated from, at every job after.'
      ],
      key: 'One uncomfortable ten-minute conversation is frequently worth six figures across a career.',
      questions: [
        { q: 'What is the strongest argument in a raise conversation?',
          a: ['Documented results you delivered', 'Your cost of living has increased', 'How long you have been there', 'What coworkers earn'],
          correct: 0, why: 'Nobody pays more because your costs rose. Lead with value, not need.' },
        { q: 'Your manager says no to a raise. Best follow-up?',
          a: ['Ask what specific criteria and timeline would make it a yes, in writing', 'Accept it and ask again in a year', 'Start job hunting immediately', 'Ask what your coworkers earn'],
          correct: 0, why: 'Either you hit them and return, or the answer tells you whether to stay.' },
        { q: 'Why does negotiating your first offer matter so much?',
          a: ['It sets the base every future percentage raise is calculated from', 'First offers are always lowball', 'It shows confidence to the employer', 'It affects your credit score'],
          correct: 0, why: 'Not negotiating leaves money on the table permanently, at this job and every one after.' }
      ]
    },
    {
      id: 'l6', title: 'Benefits and Red Flags', time: 3,
      teach: [
        'Compensation is not just the hourly rate. The <b>retirement match</b> is the most valuable item in most packages. Check the vesting schedule.',
        'Compare health plans on <b>premium, deductible and out-of-pocket maximum together</b> — a low premium with a huge deductible can be worse.',
        '<b>Tuition or certification reimbursement</b> is massively underused. If they will pay for a certification that raises your income, take it.',
        '<b>Employer red flags:</b> constant turnover in the same role; "we\'re like a family here" used to justify unpaid hours; pay that requires buying inventory or paying to start; refusal to put the offer in writing; pressure to accept immediately; anything requiring you to recruit friends and family.'
      ],
      key: 'If you must buy inventory or pay to join, it is not a business.',
      questions: [
        { q: 'Plan A: low premium, $7,000 deductible. Plan B: higher premium, $1,500 deductible. How do you choose?',
          a: ['Compare premium, deductible and out-of-pocket max together against your expected use', 'Always take the lower premium', 'Always take the lower deductible', 'Pick whichever your coworkers chose'],
          correct: 0, why: 'A low premium with a huge deductible can easily be the worse deal. Also check whether your doctors are in network.' },
        { q: 'A "job" requires you to buy starter inventory and recruit others. What is it?',
          a: ['Not a real business — money comes from recruiting, not customers', 'A commission-only sales role', 'A franchise opportunity', 'Standard for startups'],
          correct: 0, why: 'If you must pay to join or buy inventory, and income depends on recruiting rather than selling to real customers, walk.' },
        { q: 'What is the most valuable single item in most benefits packages?',
          a: ['The retirement match', 'Paid time off', 'Dental coverage', 'The gym stipend'],
          correct: 0, why: 'It is an immediate guaranteed return. Check the vesting schedule to know when it is fully yours.' }
      ]
    }
  ]
});
