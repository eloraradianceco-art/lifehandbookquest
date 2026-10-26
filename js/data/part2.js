/* PART TWO — THE HOME : House, Kitchen */

HQ.register({
  id: 'house', title: 'House', part: 'The Home', icon: '⌂',
  color: '#B87333', tag: 'Maintenance and keeping it standing',
  blurb: 'Water, drains, pests, HVAC, appliances, and the habits that make a house last.',
  lessons: [
    {
      id: 'l1', title: 'Know Your Shutoffs', time: 2,
      teach: [
        'Three things both of you must be able to find in the dark: the <b>main water shutoff valve</b>, the <b>electrical breaker panel</b>, and the <b>gas shutoff</b>.',
        'If a pipe bursts at 2 a.m. you have minutes, not hours. Knowing the water main is the difference between a mop and a $30,000 insurance claim.',
        'Go turn the valve now. Many seize from years of never being moved — you do not want to discover that while the house floods. Exercise it once a year.'
      ],
      key: 'Find all three today. Photograph them. Write down where they are.',
      questions: [
        { q: 'A pipe bursts at 2 a.m. and water is pouring out. First action?',
          a: ['Shut off the water main', 'Call a plumber', 'Start moving furniture', 'Turn off the breaker to the water heater'],
          correct: 0, why: 'Stop the water first. Everything else can happen after the flow stops.' },
        { q: 'Why exercise the main shutoff valve once a year?',
          a: ['Valves seize from never being moved, and you need it to turn when it matters', 'It keeps the water pressure correct', 'Code requires annual testing', 'It flushes sediment from the line'],
          correct: 0, why: 'Discovering a seized valve mid-flood is the worst possible time.' },
        { q: 'Which three shutoffs should both people be able to find in the dark?',
          a: ['Water main, breaker panel, gas shutoff', 'Water main, water heater, dishwasher', 'Breaker panel, thermostat, gas shutoff', 'Gas, cable, and water'],
          correct: 0, why: 'Those three cover the emergencies that escalate fastest.' }
      ]
    },
    {
      id: 'l2', title: 'Water Is the Number One Enemy', time: 3,
      teach: [
        'Water causes more home damage than fire and theft combined — and it rarely announces itself.',
        'Check under every sink monthly. Run bathroom fans during the shower and 20 minutes after. Re-caulk the moment caulk cracks — water gets behind the wall and rots the framing.',
        '<b>Warning signs:</b> musty smell (hidden moisture), ceiling stain (active leak above), buckled flooring (water underneath), water bill jumping with no change in usage (hidden leak), a toilet that rocks when you sit on it (failing wax seal leaking onto the subfloor).'
      ],
      key: 'Mold grows in 48–72 hours. Deal with moisture the same week.',
      questions: [
        { q: 'Your toilet rocks slightly when you sit on it. What does that mean?',
          a: ['The wax seal underneath is failing and leaking onto the subfloor', 'The floor is uneven, which is cosmetic', 'The bolts need tightening and nothing else', 'The tank is overfilled'],
          correct: 0, why: 'Do not wait on this one. It is leaking into the floor every time it is used.' },
        { q: 'Your water bill jumps 40% with no change in usage. Most likely?',
          a: ['A hidden leak — often a running toilet or an underground supply line', 'A billing error', 'Seasonal rate change', 'Your neighbor is on your meter'],
          correct: 0, why: 'A sudden unexplained jump is the house telling you something before it fails completely.' },
        { q: 'How fast can mold grow after moisture sits?',
          a: ['48–72 hours', 'Two to three weeks', 'About a month', 'Only in summer'],
          correct: 0, why: 'This is why you squeegee the shower, run the fan, and never leave wet towels piled up.' }
      ]
    },
    {
      id: 'l3', title: 'Drains and Toilets', time: 3,
      teach: [
        'Clogs are almost never sudden. They are months of small deposits.',
        '<b>Never down a drain:</b> grease and cooking oil (hardens in the pipe), coffee grounds, eggshells, rice, pasta, potato peels, hair, paint, cat litter.',
        '<b>Never down a toilet:</b> wipes — including "flushable" ones, the single leading cause of residential sewer backups — paper towels, feminine hygiene products, cotton balls, dental floss, medication.',
        'Only three things go in a toilet: urine, feces, toilet paper.',
        '<b>Wash the dog outside.</b> One dog bath sheds more hair into a drain than a person does in a month, plus dirt and undercoat.'
      ],
      key: 'A $3 drain screen prevents a $200 plumber visit.',
      questions: [
        { q: 'Why is bacon grease down the sink a problem even with hot water?',
          a: ['It goes down liquid and hardens inside the pipe', 'It damages the garbage disposal blades', 'It kills the septic bacteria', 'It makes the water smell'],
          correct: 0, why: 'Hot water melts it so it travels further, then it re-hardens deeper in the line. Pour it into a jar and bin it.' },
        { q: 'Are "flushable" wipes actually safe to flush?',
          a: ['No — they do not break down and are a leading cause of sewer backups', 'Yes, if the package says flushable', 'Only one at a time', 'Only in newer homes'],
          correct: 0, why: 'Regardless of the label. Only urine, feces, and toilet paper.' },
        { q: 'Garbage disposal: cold water or hot?',
          a: ['Cold — it keeps grease solid so it flushes through', 'Hot — it dissolves food faster', 'Either works', 'No water at all'],
          correct: 0, why: 'Run cold before, during, and 15 seconds after. Hot water melts grease so it re-hardens deeper in the line.' }
      ]
    },
    {
      id: 'l4', title: 'Pests Are Invited', time: 3,
      teach: [
        'Roaches need water more than food. A single soda can under a bed is a complete life support system. Spray treats the symptom; sanitation and sealing treat the cause.',
        '<b>No food, drinks, or dishes in bedrooms. Ever.</b> This is the highest-impact rule — bedrooms are where infestations start and where they are hardest to eliminate.',
        'Seal gaps around pipes under sinks — the single most common roach highway in any house. Break down cardboard immediately; it is nesting material and the most common way an infestation enters a clean home.',
        'On the Gulf Coast: annual termite inspection is not optional. Watch for mud tubes on the foundation or discarded wings near windowsills in spring.'
      ],
      key: 'Remove food, water, and shelter and you rarely need an exterminator.',
      questions: [
        { q: 'What is the single highest-impact pest rule in the house?',
          a: ['No food, drinks, or dishes in bedrooms', 'Spray the baseboards monthly', 'Keep the AC running', 'Vacuum every day'],
          correct: 0, why: 'Bedrooms are where infestations start and where they are hardest to eliminate, because they get into soft furniture and mattresses.' },
        { q: 'Where is the most common roach entry point in a house?',
          a: ['Gaps around pipes under sinks', 'The front door', 'Window screens', 'The attic'],
          correct: 0, why: 'Caulk or foam those gaps. It is a cheap afternoon that closes the main highway.' },
        { q: 'You see small piles of discarded wings near a windowsill in spring. That suggests:',
          a: ['Termites — call for an inspection', 'Normal seasonal insects', 'Moths in the pantry', 'Nothing of concern'],
          correct: 0, why: 'Mud tubes on the foundation and discarded wings are the two classic signs. Termite damage is structural and rarely covered by insurance.' }
      ]
    },
    {
      id: 'l5', title: 'HVAC and Humidity', time: 3,
      teach: [
        '<b>Change the air filter every 1–3 months.</b> Write the date on the cardboard edge. A $15 part protects a $6,000 machine.',
        'Target indoor humidity <b>30–50%</b>. Above 60% you are growing mold inside walls whether you can see it or not. Buy a cheap hygrometer.',
        'Once a year, pour a cup of white vinegar down the AC condensate drain line. A clogged line backs up and floods ceilings — one of the most common and most preventable water damage claims in humid climates.',
        'Keep two feet of clearance around the outdoor unit. Do not close vents in unused rooms — it unbalances the system and creates damp, mold-prone pockets.'
      ],
      key: 'Filter date written on the filter. No debate about when it was last changed.',
      questions: [
        { q: 'Why pour vinegar down the AC condensate line annually?',
          a: ['A clogged line backs up and floods ceilings', 'It improves cooling efficiency', 'It kills mold in the ductwork', 'It prevents the compressor from overheating'],
          correct: 0, why: 'One of the most common and most preventable water damage claims in humid climates.' },
        { q: 'What is the target indoor humidity range?',
          a: ['30–50%', '10–25%', '55–70%', 'It does not matter with AC running'],
          correct: 0, why: 'Above 60% you grow mold inside walls, closets and furniture. A hygrometer costs about twelve dollars.' },
        { q: 'Closing vents in unused rooms to save money:',
          a: ['Unbalances the system and creates damp, mold-prone pockets', 'Is an effective way to cut costs', 'Only works with newer systems', 'Helps the filter last longer'],
          correct: 0, why: 'It does not save money and it causes problems. Leave them open.' }
      ]
    },
    {
      id: 'l6', title: 'Appliances', time: 3,
      teach: [
        'Nearly every appliance has <b>one filter, trap, coil or gasket</b> that determines its lifespan. Find it, learn where it is, put it on a schedule.',
        '<b>Dryer:</b> lint trap every single load — lint is a leading cause of house fires. Clean the full vent duct yearly.<br><b>Washer:</b> leave the door cracked between loads or the gasket grows black mold. Replace rubber supply hoses with braided steel.<br><b>Dishwasher:</b> clean the filter at the bottom monthly — most people never learn it exists.<br><b>Refrigerator:</b> vacuum the coils twice a year.'
      ],
      key: 'Find the one part that decides the lifespan. Schedule it.',
      questions: [
        { q: 'Your dishwasher stopped getting dishes clean and smells. First thing to check?',
          a: ['The filter at the bottom of the tub', 'The water temperature', 'The detergent brand', 'The spray arm motor'],
          correct: 0, why: 'Most people never learn it exists. Clean it monthly.' },
        { q: 'Clothes take two cycles to dry. What does that indicate?',
          a: ['A clogged dryer vent duct', 'A failing heating element', 'Overloading only', 'Hard water'],
          correct: 0, why: 'It is also a fire risk. Clean the full run out to the exterior vent, and check that the exterior flap opens freely.' },
        { q: 'Why leave a front-loading washer door cracked open between loads?',
          a: ['The rubber gasket grows black mold when sealed wet', 'It helps the drum dry evenly', 'It prevents the door latch wearing out', 'It saves electricity'],
          correct: 0, why: 'Wipe the gasket dry weekly too.' }
      ]
    },
    {
      id: 'l7', title: 'Exterior, Gutters, and Electrical', time: 3,
      teach: [
        '<b>Clean gutters twice a year.</b> Clogged gutters overflow, dump water at the foundation, and cause the two most expensive problems in home ownership: foundation movement and interior water intrusion. Downspouts should discharge 4–6 feet from the house.',
        '<b>A breaker that trips repeatedly is a warning, not an inconvenience.</b> Reset once. If it trips again, find out why.',
        '<b>Test GFCI outlets monthly</b> — press TEST, power should cut, then RESET. If it does not trip, it is not protecting you.',
        'Never daisy-chain power strips. Warm outlets, buzzing switches, or a burning smell mean stop using the circuit and call an electrician the same day.'
      ],
      key: 'Clogged gutters cause foundation damage. That is the expensive chain.',
      questions: [
        { q: 'What is the real consequence of clogged gutters?',
          a: ['Water dumps at the foundation, causing foundation movement and interior intrusion', 'The gutters sag and look bad', 'Ice forms in winter', 'Mosquitoes breed in them'],
          correct: 0, why: 'Two of the most expensive problems in home ownership, both traceable to an afternoon of not cleaning gutters.' },
        { q: 'A breaker trips, you reset it, and it trips again an hour later. What now?',
          a: ['Find out why or call an electrician — it is doing its job warning you', 'Keep resetting it', 'Replace it with a higher-amp breaker', 'Unplug one thing and ignore it'],
          correct: 0, why: 'Repeated tripping means an overloaded or faulted circuit. Never upsize a breaker to stop it tripping.' },
        { q: 'You press TEST on a GFCI outlet and nothing happens. What does that mean?',
          a: ['It is not protecting you and needs replacement', 'The outlet is working correctly', 'The breaker is off', 'You need to press it harder'],
          correct: 0, why: 'Test monthly in bathrooms, kitchens, garages and outdoors.' }
      ]
    },
    {
      id: 'l8', title: 'The Rhythm That Keeps It Up', time: 2,
      teach: [
        '<b>Daily:</b> dishes done, counters wiped, no food in bedrooms, lint trap cleaned, ten-minute nightly reset together.',
        '<b>Monthly:</b> check under sinks, test smoke and CO detectors, test GFCIs, boiling water down drains, check the HVAC filter.',
        '<b>Twice a year:</b> gutters, detector batteries, fridge coils, dryer vent, HVAC service.',
        '<b>Yearly:</b> flush the water heater, vinegar down the condensate line, termite inspection, exercise the water main.',
        'Ten minutes nightly replaces four hours on a Saturday and prevents nearly every pest and odor problem.'
      ],
      key: 'A house fails one ignored drip and one skipped filter at a time.',
      questions: [
        { q: 'How often should smoke and CO detectors be tested?',
          a: ['Monthly, with batteries replaced twice a year', 'Once a year', 'Only when they chirp', 'Every five years'],
          correct: 0, why: 'Use the daylight saving changes as the battery reminder. Replace the whole unit every 10 years.' },
        { q: 'What does the ten-minute nightly reset replace?',
          a: ['About four hours of work on a Saturday', 'A weekly deep clean service', 'The need for a cleaning schedule', 'Monthly maintenance'],
          correct: 0, why: 'It also prevents nearly every pest and odor problem in the handbook.' },
        { q: 'Which is a yearly task, not a monthly one?',
          a: ['Flushing the water heater', 'Testing GFCI outlets', 'Checking under sinks for leaks', 'Checking the HVAC filter'],
          correct: 0, why: 'Sediment insulates the heating element and eventually cracks the tank lining.' }
      ]
    }
  ]
});

HQ.register({
  id: 'kitchen', title: 'Kitchen', part: 'The Home', icon: '🍳',
  color: '#C25B3A', tag: 'Six meals, one system',
  blurb: 'Cooking, shopping, and eating well for a fraction of what eating out costs.',
  lessons: [
    {
      id: 'l1', title: 'Decide Before You Are Hungry', time: 2,
      teach: [
        'Almost all bad food decisions are made at 6 p.m. by two tired people with nothing thawed. Deciding on Sunday removes the decision entirely.',
        'Two people eating out twice a weekend plus a few weekday lunches can easily spend several hundred dollars a month more than the same food cooked at home. That is a car payment.',
        'You do not need twenty recipes. You need <b>six meals</b> you can cook without thinking and a system for getting the food home.'
      ],
      key: 'Two hours on Sunday is the highest-return block in your week.',
      questions: [
        { q: 'When are most bad food decisions actually made?',
          a: ['At 6 p.m. by tired people with nothing thawed', 'At the grocery store', 'On the weekend', 'When ordering delivery apps'],
          correct: 0, why: 'Which is why the decision gets moved to Sunday, when you still have judgment.' },
        { q: 'How many meals does the handbook say you actually need to learn?',
          a: ['Six, each with a few variations', 'Twenty', 'One per day of the week', 'As many as possible'],
          correct: 0, why: 'Six meals with three or four variations each quietly gives you about twenty.' },
        { q: 'Why learn methods rather than recipes?',
          a: ['Sear, roast, sauté and simmer let you cook thousands of things', 'Recipes are usually wrong', 'Methods are faster', 'Recipes require more equipment'],
          correct: 0, why: 'Recipe-following without method understanding means you can only make exactly what is written down.' }
      ]
    },
    {
      id: 'l2', title: 'Why Restaurant Food Tastes Better', time: 3,
      teach: [
        'It is almost never a secret ingredient. Home cooks under-salt, under-brown, and skip the acid.',
        '<b>Salt</b> — more than you think, added in layers as you cook. Under-salting is the single most common home cooking failure.',
        '<b>Browning</b> — pale food tastes flat. Dry the surface, get the pan hot, do not crowd it.',
        '<b>Acid at the end</b> — a squeeze of lemon or splash of vinegar right before serving makes almost any dish taste finished. This is the trick nobody mentions.',
        '<b>Fat</b> carries flavor. <b>Aromatics first</b> — onion, garlic and spices bloomed in fat build a base you cannot add later.'
      ],
      key: 'Salt in layers, brown properly, finish with acid.',
      questions: [
        { q: 'Your food tastes flat even though you followed the recipe. Most likely missing?',
          a: ['Salt and a splash of acid at the end', 'An expensive ingredient', 'A longer cook time', 'Fresh herbs'],
          correct: 0, why: 'Under-salting is the most common home cooking failure, and acid at the end is the restaurant trick nobody mentions.' },
        { q: 'Why should you not crowd the pan when searing?',
          a: ['Crowding steams the food instead of browning it', 'It cooks unevenly in the center', 'It damages non-stick coating', 'It uses more oil'],
          correct: 0, why: 'Browning is flavor, and it will not happen in a crowded or wet pan. Dry the surface first.' },
        { q: 'When do aromatics like onion and garlic go in?',
          a: ['At the start, bloomed in fat, to build a base', 'At the end, for freshness', 'Halfway through', 'It does not matter'],
          correct: 0, why: 'That base cannot be added later.' }
      ]
    },
    {
      id: 'l3', title: 'The Four Methods', time: 3,
      teach: [
        '<b>Sear / pan-fry</b> — high heat, hot pan, dry food surface, do not move it until it releases. Steaks, chops, chicken thighs, burgers, fish.',
        '<b>Roast</b> — dry oven heat, 400–425°F, single layer with space between pieces. Vegetables, whole chicken, sheet-pan dinners.',
        '<b>Sauté</b> — medium-high, small pieces, kept moving. Onions, peppers, mushrooms, shrimp, greens.',
        '<b>Braise / simmer</b> — brown first, then low and slow in liquid, covered. Turns cheap tough cuts into the best meals you will make: chuck roast, pork shoulder, chili, stews.'
      ],
      key: 'Four methods cover nearly everything you will ever cook.',
      questions: [
        { q: 'You bought a cheap tough cut of beef. Which method?',
          a: ['Braise — brown it, then low and slow in liquid, covered', 'Sear it hot and fast', 'Roast at high heat', 'Sauté in small pieces'],
          correct: 0, why: 'Braising turns the cheapest tough cuts into the best meals you will make.' },
        { q: 'When roasting vegetables, why spread them in a single layer with space?',
          a: ['Crowding steams them instead of roasting', 'It cooks them faster', 'It uses less oil', 'It keeps them from burning'],
          correct: 0, why: 'Same principle as searing — moisture needs somewhere to go.' },
        { q: 'You put a steak in a hot pan and it sticks when you try to flip it. What should you do?',
          a: ['Leave it — it releases when the crust forms', 'Add more oil and pry it up', 'Turn the heat down', 'Flip it with more force'],
          correct: 0, why: 'Do not move it until it releases. That is the crust forming.' }
      ]
    },
    {
      id: 'l4', title: 'The Meal Prep System', time: 3,
      teach: [
        'Prep <b>components, not full meals</b>. Five identical containers of the same meal works for about three days and then nobody wants to eat it.',
        'Instead: cook a large batch of a grain, roast two trays of vegetables, cook two proteins, wash and cut produce, make one sauce.',
        'Monday is chicken with rice and broccoli. Tuesday the same chicken becomes tacos. Wednesday it goes into a soup. Same labor, no food fatigue, far less waste.',
        'Label everything with the date. Unlabeled containers get thrown out.'
      ],
      key: 'Two hours on your day off buys back five weeknights.',
      questions: [
        { q: 'Why prep components instead of five identical meals?',
          a: ['Identical meals cause food fatigue by day three; components stay flexible', 'Components are faster to cook', 'It uses fewer containers', 'Components freeze better'],
          correct: 0, why: 'Same labor, no fatigue, and far less waste.' },
        { q: 'You have leftover vegetables, rice and a bit of chicken. Three dishes save almost anything — which are they?',
          a: ['Fried rice, soup, or a frittata', 'Casserole, salad, or sandwich', 'Stir fry, smoothie, or stew', 'Pasta, pizza, or tacos'],
          correct: 0, why: 'Those three are how you stop throwing food away.' },
        { q: 'What is the most common form of grocery money waste?',
          a: ['Buying fresh produce with no specific plan for it', 'Buying store brands', 'Buying in bulk', 'Buying frozen vegetables'],
          correct: 0, why: 'Aspirational vegetables rot in the drawer. Track what you throw away for two weeks and it tells you exactly what to stop buying.' }
      ]
    },
    {
      id: 'l5', title: 'Food Safety', time: 3,
      teach: [
        'Fridge at or below <b>40°F</b>, freezer at <b>0°F</b>. Buy a $5 thermometer rather than trusting the dial.',
        'Raw meat on the <b>bottom shelf</b>, in a container, so it cannot drip. Separate cutting boards for raw meat and produce.',
        '<b>The two hour rule:</b> perishable food left at room temperature more than two hours goes in the trash. One hour above 90°F.',
        'Cook to temperature, not appearance: poultry 165°F, ground meat 160°F, whole cuts of beef and pork 145°F with a rest, fish 145°F.',
        'Thaw in the fridge, in cold water, or in the microwave. Never on the counter.'
      ],
      key: 'Never put water on a grease fire. Smother it with a lid.',
      questions: [
        { q: 'A pan of oil catches fire on the stove. What do you do?',
          a: ['Smother it with a metal lid and turn off the heat', 'Throw water on it', 'Carry it outside', 'Blow on it'],
          correct: 0, why: 'Water on a grease fire causes an explosive flare. Never carry a burning pan.' },
        { q: 'You left cooked chicken on the counter for three hours. What now?',
          a: ['Throw it out', 'Refrigerate it immediately and eat tomorrow', 'Reheat it thoroughly and eat it', 'Smell it to decide'],
          correct: 0, why: 'The two hour rule, and one hour if it is above 90°F. Food poisoning costs more than groceries.' },
        { q: 'Where does raw meat go in the fridge?',
          a: ['Bottom shelf, in a container', 'Top shelf where it is coldest', 'In the door', 'The crisper drawer'],
          correct: 0, why: 'So it cannot drip onto anything else. Cross-contamination is the most common home food safety failure.' }
      ]
    }
  ]
});
