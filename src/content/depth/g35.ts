import type { LessonDepth } from './types';

/** Authored depth for grades 3–5. Each entry teaches its own lesson's topic. */
export const DEPTH_G35: Record<string, LessonDepth> = {
  'g3-ela-u1-l1': {
    topics: ['context clues', 'word parts'],
    applicationTitle: 'Figuring out a word you do not know',
    application:
      'When you meet an unfamiliar word in a science article or on a form, you have two tools that do not require a dictionary: the sentence around it and the parts inside it. Context clues are the words nearby that suggest meaning; word parts are prefixes, suffixes, and roots. Using both and then checking is how strong readers handle technical vocabulary.',
    example: {
      prompt: 'Use context and word parts to define “inexpensive” in “The used bike was inexpensive, so she could afford it.”',
      steps: [
        'Context: she could afford it, so the price must be low.',
        'Word parts: in- means not, and expensive means costly.',
      ],
      answer: 'Inexpensive means not costly, or cheap; the sentence and the prefix agree.',
    },
    terms: [
      ['context clue', 'a nearby word or phrase that hints at a word’s meaning'],
      ['root', 'the base part of a word that carries its main meaning'],
    ],
    review: [
      {
        prompt: 'What should you do if context and word parts disagree?',
        answer: 'Check a dictionary or glossary, because one clue may be misleading.',
      },
      {
        prompt: 'What does the prefix pre- mean, as in preview?',
        answer: 'Before, so a preview is a viewing that happens before something else.',
      },
    ],
    exercises: [
      'Find two unknown words in a news article and infer each from context.',
      'List five words with the prefix un- and define each.',
    ],
  },
  'g3-ela-u2-l1': {
    topics: ['topic sentence', 'paragraph structure'],
    applicationTitle: 'Writing a paragraph someone can follow',
    application:
      'A paragraph is a group of sentences that develops one idea. The topic sentence states that idea; the middle sentences support it with reasons, facts, or examples; the conclusion wraps it up or points forward. This structure appears everywhere adults write, from emails to reports, because a reader should be able to find the point in the first sentence.',
    example: {
      prompt: 'Write a topic sentence for a paragraph about why walking to school is healthy.',
      steps: [
        'Name the one idea: walking is healthy.',
        'Make it specific enough to need support: it builds fitness and wakes you up.',
      ],
      answer: '“Walking to school is a simple way to build fitness and start the day alert.”',
    },
    terms: [
      ['topic sentence', 'the sentence that states a paragraph’s main idea'],
      ['supporting detail', 'a fact or example that explains the main idea'],
    ],
    review: [
      {
        prompt: 'What job does the concluding sentence do?',
        answer: 'It closes the idea, often by restating the point or drawing a conclusion.',
      },
      {
        prompt: 'How do you know a detail does not belong?',
        answer: 'It does not support the topic sentence, even if it is interesting.',
      },
    ],
    exercises: [
      'Write a six-sentence paragraph with a topic sentence and two details.',
      'Take a paragraph from a book and underline its topic sentence.',
    ],
  },
  'g3-ela-u3-l1': {
    topics: ['fiction and nonfiction', 'text features'],
    applicationTitle: 'Reading for information and for story',
    application:
      'Fiction is invented and organized around characters and events; nonfiction is about real things and organized around ideas. Nonfiction adds text features such as headings, captions, diagrams, and bold words to help you find information quickly. Knowing which kind of text you hold tells you how to read it: a story in order, an article by scanning its headings first.',
    example: {
      prompt: 'A page has a diagram of a volcano and a caption under it. Fiction or nonfiction, and what does the caption do?',
      steps: [
        'The diagram and caption present real information, so the text is nonfiction.',
        'The caption explains what the diagram shows, adding facts the picture alone cannot.',
      ],
      answer: 'Nonfiction; the caption explains the diagram and adds information.',
    },
    terms: [
      ['fiction', 'writing about invented events and characters'],
      ['caption', 'text that explains a picture, diagram, or photograph'],
    ],
    review: [
      {
        prompt: 'Name three text features that help you find information.',
        answer: 'Headings, a table of contents, and an index, plus captions and bold words.',
      },
      {
        prompt: 'How does the purpose of fiction differ from nonfiction?',
        answer: 'Fiction explores human experience through story; nonfiction informs or explains real things.',
      },
    ],
    exercises: [
      'Find a diagram in a book and write a sentence explaining it.',
      'Choose one fiction and one nonfiction book and list two differences.',
    ],
  },
  'g3-math-u1-l1': {
    topics: ['place value', 'rounding'],
    applicationTitle: 'Reading and rounding large numbers',
    application:
      'Place value lets you read numbers like 47,382 without confusion: each position is ten times the one to its right. Rounding replaces a number with a nearby, simpler one, which is why news reports say “about 47,000 people” instead of an exact count. To round, find the target place and look only at the digit to its right: five or more rounds up.',
    example: {
      prompt: 'Round 47,382 to the nearest thousand.',
      steps: [
        'Find the thousands digit: 7, in 47,382.',
        'Look at the hundreds digit: 3, which is less than 5, so keep the 7.',
      ],
      answer: '47,000, because the hundreds digit is below 5.',
    },
    terms: [
      ['place value', 'the value of a digit based on its position'],
      ['rounding', 'replacing a number with a nearby number of a chosen place value'],
    ],
    review: [
      {
        prompt: 'How do you round 8,672 to the nearest hundred?',
        answer: 'Look at the tens digit, 7; it is 5 or more, so round up to 8,700.',
      },
      {
        prompt: 'Why is the 4 in 47,382 worth 40,000?',
        answer: 'It sits in the ten-thousands place, so its value is 4 × 10,000.',
      },
    ],
    exercises: [
      'Write 308,472 in expanded form and read it aloud.',
      'Round 6,489 to the nearest ten, hundred, and thousand.',
    ],
  },
  'g3-math-u2-l1': {
    topics: ['arrays', 'fact families'],
    applicationTitle: 'Multiplication as equal groups',
    application:
      'Multiplication counts equal groups quickly. An array with 4 rows and 6 columns shows 4 × 6 = 24, and rotating it shows 6 × 4 = 24, which is why the order does not change the product. A fact family links multiplication and division: from 4, 6, and 24 you can write 4 × 6 = 24, 6 × 4 = 24, 24 ÷ 4 = 6, and 24 ÷ 6 = 4.',
    example: {
      prompt: 'Use an array to explain why 7 × 8 = 56 and 56 ÷ 8 = 7.',
      steps: [
        'Arrange 56 counters in 8 rows of 7.',
        'The same array shows the total (7 × 8) and one row when the total is shared into 8 groups (56 ÷ 8).',
      ],
      answer: 'The array is both a multiplication picture and a division picture of the same 56.',
    },
    terms: [
      ['array', 'objects arranged in equal rows and columns'],
      ['fact family', 'multiplication and division facts that use the same three numbers'],
    ],
    review: [
      {
        prompt: 'Why does 3 × 9 equal 9 × 3?',
        answer: 'Turning the array sideways changes the view, not the number of objects.',
      },
      {
        prompt: 'Write the four facts in the 5, 6, 30 family.',
        answer: '5 × 6 = 30, 6 × 5 = 30, 30 ÷ 5 = 6, and 30 ÷ 6 = 5.',
      },
    ],
    exercises: [
      'Draw an array for 6 × 7 and write its fact family.',
      'Find five arrays in your home, such as an egg carton, and write the facts.',
    ],
  },
  'g3-math-u3-l1': {
    topics: ['unit fractions', 'area and perimeter'],
    applicationTitle: 'Fractions on a line and space inside a shape',
    application:
      'A unit fraction is one equal part of a whole: 1/2, 1/3, 1/4. Placing fractions on a number line shows that 3/4 sits between 0 and 1, three jumps of 1/4. Area measures the space inside a rectangle (length × width), while perimeter measures the distance around it (2 × length + 2 × width). Carpet is bought by area; fence by perimeter.',
    example: {
      prompt: 'A rectangle is 5 cm by 3 cm. Find its area and perimeter.',
      steps: ['Area = 5 × 3 = 15 square centimeters.', 'Perimeter = 5 + 3 + 5 + 3 = 16 centimeters.'],
      answer: 'Area 15 cm², perimeter 16 cm. They measure different things.',
    },
    terms: [
      ['unit fraction', 'a fraction with 1 in the numerator, such as 1/4'],
      ['area', 'the number of square units that cover a shape'],
    ],
    review: [
      {
        prompt: 'Where does 5/4 sit on a number line?',
        answer: 'One whole jump past 1, halfway to 2 if the line is marked in fourths.',
      },
      {
        prompt: 'How can two rectangles have the same area but different perimeters?',
        answer: 'A 1 × 12 and a 3 × 4 rectangle both have area 12, but perimeters 26 and 14.',
      },
    ],
    exercises: [
      'Measure a table and compute its area and perimeter.',
      'Draw number lines showing halves, thirds, and fourths.',
    ],
  },
  'g3-sci-u1-l1': {
    topics: ['mixtures', 'solutions'],
    applicationTitle: 'Mixtures you can take apart',
    application:
      'A mixture combines materials that keep their own properties, like trail mix or sand and iron filings. A solution is a mixture so evenly combined that you cannot see the parts, like salt water. Physical properties let you separate them: filtering catches sand, evaporating removes water, and a magnet pulls out iron. Water treatment plants use these same steps.',
    example: {
      prompt: 'How would you separate a mixture of sand and salt?',
      steps: [
        'Add water and stir: the salt dissolves, the sand does not.',
        'Pour through a filter to catch the sand, then evaporate the water to recover the salt.',
      ],
      answer: 'Filter the sand, then evaporate the salt water to leave salt crystals.',
    },
    terms: [
      ['mixture', 'two or more materials combined without making a new substance'],
      ['solution', 'a mixture in which one material dissolves evenly in another'],
    ],
    review: [
      {
        prompt: 'How can you tell a solution from a mixture you can see?',
        answer: 'A solution looks uniform and does not settle; visible mixtures show separate parts.',
      },
      {
        prompt: 'What property makes it possible to separate iron from sand?',
        answer: 'Iron is magnetic and sand is not, so a magnet attracts only the iron.',
      },
    ],
    exercises: [
      'Mix salt in water and describe what happens to the salt.',
      'Design a way to separate a mixture of coins, paper clips, and sand.',
    ],
  },
  'g3-sci-u2-l1': {
    topics: ['forms of energy', 'simple machines'],
    applicationTitle: 'Energy and the machines that redirect it',
    application:
      'Energy comes in forms: light, heat, sound, motion, and stored chemical energy in food and batteries. A simple machine does not create energy; it redirects or multiplies force. A lever lets a small push lift a heavy load, a pulley changes the direction of a pull, and an inclined plane spreads lifting over a longer distance. Tools from a bottle opener to a ramp use these ideas.',
    example: {
      prompt: 'Why is a ramp easier than lifting a box straight up?',
      steps: [
        'The same work is done, but the ramp spreads it over a longer distance.',
        'Less force is needed at each moment, though you push for more distance.',
      ],
      answer: 'A ramp trades a longer distance for a smaller force; the work done is the same.',
    },
    terms: [
      ['energy', 'the ability to cause change or do work'],
      ['inclined plane', 'a slanted surface that reduces the force needed to move a load'],
    ],
    review: [
      {
        prompt: 'Name three forms of energy and one example of each.',
        answer: 'Light from a lamp, heat from a stove, and motion from a rolling ball.',
      },
      {
        prompt: 'Does a machine create energy?',
        answer: 'No; it changes the direction or size of a force, and some energy becomes heat.',
      },
    ],
    exercises: [
      'Find three simple machines at home and name the type.',
      'Test how a ramp changes the force needed to move a toy car.',
    ],
  },
  'g3-sci-u3-l1': {
    topics: ['rocks', 'water cycle'],
    applicationTitle: 'Earth’s materials and the water that moves them',
    application:
      'Rocks are classified by how they form: igneous from cooled magma, sedimentary from pressed layers, and metamorphic from heat and pressure. The water cycle moves water by evaporation, condensation, precipitation, and collection. Rapid changes such as earthquakes, volcanoes, and landslides reshape land in minutes, while weathering and erosion work over years.',
    example: {
      prompt: 'Trace a drop of water from the ocean to rain on land and back.',
      steps: [
        'Evaporation turns ocean water into vapor; condensation forms clouds.',
        'Precipitation falls, collects in streams, and flows back to the ocean.',
      ],
      answer: 'Evaporation → condensation → precipitation → collection → runoff to the ocean.',
    },
    terms: [
      ['sedimentary rock', 'rock formed from layers of sand, mud, or shells pressed together'],
      ['evaporation', 'the change of liquid water into water vapor'],
    ],
    review: [
      {
        prompt: 'Where are fossils most often found, and why?',
        answer: 'In sedimentary rock, because layers bury and preserve remains.',
      },
      {
        prompt: 'How does a volcano change land quickly?',
        answer: 'Lava flows and ash build new rock and can bury or crack existing land.',
      },
    ],
    exercises: [
      'Collect three rocks and describe how each might have formed.',
      'Draw and label the four stages of the water cycle.',
    ],
  },
  'g3-ss-u1-l1': {
    topics: ['communities', 'levels of government'],
    applicationTitle: 'Where you live and who decides',
    application:
      'Communities differ by density and land use: rural areas have farms and few people, urban areas are dense cities, and suburban areas sit between them. Government has three levels: local (city and county), state (Austin), and national (Washington, D.C.). Each level handles different jobs, which is why a pothole is a city issue and a treaty is a national one.',
    example: {
      prompt: 'Which level of government runs public schools, and which runs the postal service?',
      steps: [
        'Public schools are established by state law and run by local districts.',
        'The postal service is national, created by federal law.',
      ],
      answer: 'Schools: state and local. Postal service: national.',
    },
    terms: [
      ['urban', 'a densely populated city area'],
      ['levels of government', 'local, state, and national layers of authority'],
    ],
    review: [
      {
        prompt: 'Give one job of local government and one of state government.',
        answer: 'Local: fire and police protection. State: highways and public universities.',
      },
      {
        prompt: 'How does a suburb differ from a rural area?',
        answer: 'A suburb is a residential area near a city; rural areas are open land with few residents.',
      },
    ],
    exercises: [
      'List three services in your community and name the level that provides each.',
      'Draw a diagram of the three levels of government with one job each.',
    ],
  },
  'g3-ss-u2-l1': {
    topics: ['Texas regions', 'Native peoples'],
    applicationTitle: 'Land shapes how people live',
    application:
      'Texas has four regions: the Gulf Coastal Plain, North Central Plains, Great Plains, and Mountains and Basins. Native peoples adapted to each: the Caddo farmed and built villages in the pine forests of East Texas, while the Comanche hunted bison on the plains and used horses after Europeans introduced them. Geography explains food, shelter, and trade.',
    example: {
      prompt: 'Why did the Comanche rely on bison while the Caddo farmed?',
      steps: [
        'The plains supported huge bison herds but little farming without irrigation.',
        'East Texas forests and rainfall supported crops and permanent villages.',
      ],
      answer: 'Each group used the resources its region provided: grass and bison versus soil and rain.',
    },
    terms: [
      ['region', 'an area defined by shared physical or cultural features'],
      ['adapt', 'to change how you live in order to fit your environment'],
    ],
    review: [
      {
        prompt: 'Name the four Texas regions.',
        answer: 'Gulf Coastal Plain, North Central Plains, Great Plains, and Mountains and Basins.',
      },
      {
        prompt: 'How did the horse change Plains life?',
        answer: 'It made hunting and moving across long distances far easier.',
      },
    ],
    exercises: [
      'Label the four regions on a Texas map you draw.',
      'Compare the homes of two Texas Native peoples.',
    ],
  },
  'g3-ss-u3-l1': {
    topics: ['scarcity', 'opportunity cost'],
    applicationTitle: 'Choosing when you cannot have everything',
    application:
      'Scarcity means resources are limited, so every choice has a cost. The opportunity cost is the best thing you give up. If a town spends its budget on a new park, it may give up road repairs. Specialization means people focus on what they do best and trade for the rest, which is why a dentist does not grow her own food.',
    example: {
      prompt: 'You have $20 and choose a concert ticket over a new book. What is the opportunity cost?',
      steps: [
        'Identify what you gave up: the book.',
        'Check it was the best alternative; if so, the book is the opportunity cost.',
      ],
      answer: 'The book, because it is the best alternative you gave up.',
    },
    terms: [
      ['scarcity', 'the condition of having limited resources and unlimited wants'],
      ['specialization', 'focusing on producing what you do best'],
    ],
    review: [
      {
        prompt: 'Why can scarcity never be eliminated?',
        answer: 'Because wants are unlimited while time, money, and materials are limited.',
      },
      {
        prompt: 'Give an example of specialization in your town.',
        answer: 'A bakery specializes in bread, so it trades for the services it does not provide.',
      },
    ],
    exercises: [
      'List a recent choice and its opportunity cost.',
      'Name three jobs in your town that show specialization.',
    ],
  },

  'g4-ela-u1-l1': {
    topics: ['inference', 'theme'],
    applicationTitle: 'Reading between the lines',
    application:
      'An inference is a conclusion you draw from evidence plus what you already know. If a character’s hands shake before a speech, you infer nervousness even if the word never appears. A theme is a claim about life that the whole story supports, such as “courage grows through practice.” Evidence makes both defensible, which is why you cite the detail that led you there.',
    example: {
      prompt: 'A story says a boy practices free throws every morning before school. What can you infer, and what theme might it support?',
      steps: [
        'Evidence: daily practice before school; inference: he cares about improving.',
        'Theme: persistence matters more than talent.',
      ],
      answer: 'He is determined; the story supports a theme about practice and persistence.',
    },
    terms: [
      ['inference', 'a conclusion drawn from evidence and background knowledge'],
      ['theme', 'a message about life that a text develops across its parts'],
    ],
    review: [
      {
        prompt: 'How is a theme different from a topic?',
        answer: 'A topic is one word such as friendship; a theme is a claim about it, such as trust must be earned.',
      },
      {
        prompt: 'What makes an inference strong?',
        answer: 'It is supported by specific evidence and consistent with the whole text.',
      },
    ],
    exercises: [
      'Read a short story and write one inference with the evidence for it.',
      'State a theme in one sentence and list two supporting details.',
    ],
  },
  'g4-ela-u2-l1': {
    topics: ['text structures', 'summarizing'],
    applicationTitle: 'Seeing how a text is built',
    application:
      'Writers organize information in patterns: comparison, cause and effect, problem and solution, sequence, and description. Recognizing the pattern helps you predict what comes next and take better notes. A summary restates the main idea and key details in your own words, shorter than the original and without your opinion, which proves you understood rather than copied.',
    example: {
      prompt: 'Summarize: “The town’s well ran dry. Officials drilled a second well, and the water shortage ended.”',
      steps: [
        'Identify the structure: problem and solution.',
        'Name the problem, the solution, and the result in one sentence.',
      ],
      answer: 'When the town’s well ran dry, officials drilled a new well, ending the shortage.',
    },
    terms: [
      ['text structure', 'the way a writer organizes information'],
      ['summary', 'a brief restatement of the main idea and key details'],
    ],
    review: [
      {
        prompt: 'What signal words suggest cause and effect?',
        answer: 'Because, therefore, as a result, and since.',
      },
      {
        prompt: 'What should a summary leave out?',
        answer: 'Minor details and your own opinions.',
      },
    ],
    exercises: [
      'Find an article and label its text structure.',
      'Summarize a chapter in three sentences without copying its wording.',
    ],
  },
  'g4-ela-u3-l1': {
    topics: ['fact and opinion', 'counterarguments'],
    applicationTitle: 'Arguing fairly',
    application:
      'A fact can be checked; an opinion expresses a judgment. Persuasive writing mixes both, so a reader must separate them. A strong argument also answers the best objection, called a counterargument, instead of ignoring it. Conceding a fair point and then explaining why your claim still holds is what makes an argument credible to someone who disagrees.',
    example: {
      prompt: 'Argue for a later school start and answer one objection.',
      steps: [
        'Claim: a later start improves attendance and attention, citing sleep research.',
        'Counterargument: buses and jobs would need to change; answer: districts have staggered schedules before.',
      ],
      answer: 'State the claim with evidence, then concede the scheduling cost and show it is manageable.',
    },
    terms: [
      ['fact', 'a statement that can be proven true or false'],
      ['counterargument', 'the strongest objection to your claim, and your answer to it'],
    ],
    review: [
      {
        prompt: 'How can you test whether a statement is a fact?',
        answer: 'Ask whether evidence could prove it true or false.',
      },
      {
        prompt: 'Why include a counterargument you cannot fully defeat?',
        answer: 'It shows honesty and makes the rest of your argument more credible.',
      },
    ],
    exercises: [
      'Sort five statements from an editorial into fact and opinion.',
      'Write a paragraph with a claim, evidence, and one counterargument.',
    ],
  },
  'g4-math-u1-l1': {
    topics: ['multi-digit multiplication', 'partial products'],
    applicationTitle: 'Multiplying bigger numbers',
    application:
      'Partial products make multi-digit multiplication understandable instead of mysterious. To multiply 243 × 6, break 243 into 200 + 40 + 3, multiply each part by 6, and add: 1,200 + 240 + 18 = 1,458. The standard algorithm does the same work with carrying, which is why the digits line up by place value.',
    example: {
      prompt: 'Multiply 243 × 6 using partial products.',
      steps: ['200 × 6 = 1,200; 40 × 6 = 240; 3 × 6 = 18.', 'Add: 1,200 + 240 + 18 = 1,458.'],
      answer: '1,458. Each partial product is one place value times the factor, added in order.',
    },
    terms: [
      ['partial product', 'the result of multiplying one place value by a factor'],
      ['product', 'the answer to a multiplication problem'],
    ],
    review: [
      {
        prompt: 'Why do partial products line up by place value?',
        answer: 'Because 40 × 6 is 24 tens, which belongs in the tens and hundreds columns.',
      },
      {
        prompt: 'Estimate 412 × 5, then compute it.',
        answer: 'About 2,000 by estimation; exactly 2,060 when computed.',
      },
    ],
    exercises: [
      'Solve 327 × 4 with partial products and check with estimation.',
      'Explain to a family member why carrying works.',
    ],
  },
  'g4-math-u2-l1': {
    topics: ['long division', 'equivalent fractions'],
    applicationTitle: 'Sharing and renaming',
    application:
      'Division answers “how many in each group?” or “how many groups?” Long division records that sharing one place value at a time, with remainders carried to the next place. Equivalent fractions rename the same amount, like 1/2 = 2/4, and decimals are another way to write fractions whose denominators are powers of ten: 0.5 = 5/10 = 1/2.',
    example: {
      prompt: 'Divide 372 ÷ 4 and check the answer.',
      steps: ['4 goes into 37 nine times (36), remainder 1.', 'Bring down 2 to make 12; 4 goes in 3 times.'],
      answer: '93, because 93 × 4 = 372, which checks the quotient.',
    },
    terms: [
      ['quotient', 'the result of a division problem'],
      ['equivalent fraction', 'fractions that name the same amount, such as 1/2 and 2/4'],
    ],
    review: [
      {
        prompt: 'How do you check a division answer?',
        answer: 'Multiply the quotient by the divisor and add any remainder.',
      },
      {
        prompt: 'Write 0.75 as a fraction in simplest form.',
        answer: '75/100, which simplifies to 3/4 by dividing both parts by 25.',
      },
    ],
    exercises: [
      'Solve 486 ÷ 6 and verify by multiplying.',
      'Find three fractions equivalent to 2/3.',
    ],
  },
  'g4-math-u3-l1': {
    topics: ['angles', 'unit conversion'],
    applicationTitle: 'Measuring angles and changing units',
    application:
      'Angles measure turn: a right angle is 90°, acute is less, obtuse is more, and a straight line is 180°. Unit conversion changes the label without changing the amount: 1 kilometer is 1,000 meters and 1 meter is 100 centimeters. Builders, cooks, and travelers convert constantly, and a wrong unit can ruin a project or a recipe. Writing the unit next to every number, and canceling units as you convert, catches most errors before they reach the saw or the oven.',
    example: {
      prompt: 'Convert 3.5 meters to centimeters.',
      steps: ['1 meter = 100 centimeters.', '3.5 × 100 = 350.'],
      answer: '350 centimeters, because each meter holds 100 centimeters.',
    },
    terms: [
      ['acute angle', 'an angle smaller than 90 degrees'],
      ['conversion', 'changing a measurement to a different unit without changing the amount'],
    ],
    review: [
      {
        prompt: 'How many degrees are in a straight angle?',
        answer: '180 degrees, which is two right angles.',
      },
      {
        prompt: 'Which is longer, 2.5 meters or 240 centimeters?',
        answer: '2.5 meters, because it equals 250 centimeters.',
      },
    ],
    exercises: [
      'Measure three angles in your home with a protractor or angle finder.',
      'Convert 4,500 meters to kilometers and 2.4 kilograms to grams.',
    ],
  },
  'g4-sci-u1-l1': {
    topics: ['circuits', 'conductors'],
    applicationTitle: 'Electricity needs a loop',
    application:
      'A simple circuit is a closed loop from one battery terminal, through a device, and back to the other terminal. Break the loop and the current stops, which is what a switch does. Conductors such as copper let charge flow; insulators such as rubber and plastic block it. That is why wires are copper inside and plastic outside.',
    example: {
      prompt: 'A bulb does not light. List two likely causes in the circuit.',
      steps: [
        'Check the loop: a loose wire or open switch breaks it.',
        'Check the parts: a dead battery or burned-out bulb stops the flow.',
      ],
      answer: 'An open loop or a failed component, such as a dead battery or broken bulb.',
    },
    terms: [
      ['circuit', 'a closed path that electric current can flow through'],
      ['insulator', 'a material that does not let electric current flow easily'],
    ],
    review: [
      {
        prompt: 'Why is copper used inside wires?',
        answer: 'It is a good conductor, so current flows through it with little resistance.',
      },
      {
        prompt: 'What does a switch do in a circuit?',
        answer: 'It opens or closes the loop to stop or start the current.',
      },
    ],
    exercises: [
      'Test five materials with a battery and bulb and sort them into conductors and insulators.',
      'Draw a circuit with a switch and label the open and closed positions.',
    ],
  },
  'g4-sci-u2-l1': {
    topics: ['weathering', 'erosion'],
    applicationTitle: 'Slow changes that build and wear down land',
    application:
      'Weathering breaks rock into smaller pieces; erosion moves those pieces; deposition drops them somewhere new. Water, wind, ice, and plant roots do all three. A canyon shows erosion by a river; a delta shows deposition where the river slows. Fossils form when organisms are buried in sediment that becomes sedimentary rock. Because each layer is older than the one above it, sedimentary rock also gives scientists a relative timeline of events.',
    example: {
      prompt: 'A river cuts a canyon upstream and builds a delta downstream. Explain both.',
      steps: [
        'Flowing water wears away rock and carries sediment: erosion.',
        'Where the current slows at the coast, sediment settles: deposition.',
      ],
      answer: 'Erosion carves the canyon; deposition builds the delta.',
    },
    terms: [
      ['weathering', 'the breaking down of rock by water, wind, ice, or living things'],
      ['deposition', 'the dropping of eroded material in a new place'],
    ],
    review: [
      {
        prompt: 'How is weathering different from erosion?',
        answer: 'Weathering breaks rock apart; erosion moves the pieces away.',
      },
      {
        prompt: 'Why do fossils form in sedimentary rock?',
        answer: 'Layers of sediment bury remains and harden around them over time.',
      },
    ],
    exercises: [
      'Find a crack in a sidewalk or rock and explain what weathering did.',
      'Build a small tray model of erosion with soil and poured water.',
    ],
  },
  'g4-sci-u3-l1': {
    topics: ['adaptations', 'food webs'],
    applicationTitle: 'Survival and the web of eaters',
    application:
      'An adaptation is a structure or behavior that helps an organism survive: a cactus’s waxy skin, a bird’s migration, a turtle’s shell. Food webs connect several chains and show that most animals eat and are eaten by more than one species. Removing one species can ripple through the web, which is why ecosystems are managed as systems rather than single species.',
    example: {
      prompt: 'Classify a beaver’s dam as structural or behavioral, and explain its benefit.',
      steps: [
        'A dam is something the beaver builds and does, so it is behavior.',
        'It creates a pond that provides safety and access to food.',
      ],
      answer: 'Behavioral: dam building creates a pond that protects the beaver and its food supply.',
    },
    terms: [
      ['adaptation', 'a trait or behavior that improves an organism’s chance to survive'],
      ['decomposer', 'an organism that breaks down dead material and returns nutrients'],
    ],
    review: [
      {
        prompt: 'Why are decomposers necessary in a food web?',
        answer: 'They recycle nutrients from dead organisms back into the soil and water.',
      },
      {
        prompt: 'Give one structural and one behavioral adaptation.',
        answer: 'Structural: thick fur. Behavioral: hibernating through winter.',
      },
    ],
    exercises: [
      'Draw a food web with at least five organisms and one decomposer.',
      'Choose an animal and list two adaptations with the problem each solves.',
    ],
  },
  'g4-ss-u1-l1': {
    topics: ['missions', 'Texas Revolution'],
    applicationTitle: 'From missions to independence',
    application:
      'Spanish missions were settlements built to convert Native peoples and secure Spanish claims, and they brought farming, ranching, and stone construction to Texas. Mexico won independence from Spain in 1821 and encouraged Anglo settlement, then tightened control. Centralist policies, slavery disputes, and the desire for self-government led to the Texas Revolution of 1835–36.',
    example: {
      prompt: 'Sequence three events from mission life to the Texas Revolution.',
      steps: [
        'Spanish missions establish settlements and presidios in the 1700s.',
        'Mexico becomes independent in 1821 and permits Anglo colonization.',
        'Tensions over laws and representation lead to revolution in 1835.',
      ],
      answer: 'Missions → Mexican independence and colonization → revolution.',
    },
    terms: [
      ['mission', 'a Spanish settlement built to convert Native peoples and claim land'],
      ['revolution', 'an organized effort to replace a government by force'],
    ],
    review: [
      {
        prompt: 'Why did Spain build missions in Texas?',
        answer: 'To convert Native peoples, secure land claims, and create settlements.',
      },
      {
        prompt: 'What battle secured Texas independence in 1836?',
        answer: 'San Jacinto, on April 21, 1836, where Santa Anna was captured.',
      },
    ],
    exercises: [
      'Draw a timeline of the Texas Revolution with four dates.',
      'Write a paragraph explaining one cause of the revolution.',
    ],
  },
  'g4-ss-u2-l1': {
    topics: ['annexation', 'Juneteenth'],
    applicationTitle: 'Becoming a state and ending slavery',
    application:
      'Texas was an independent republic from 1836 to 1845, when the United States annexed it as the 28th state. Annexation intensified the national dispute over slavery. Texas seceded in 1861 and fought for the Confederacy; after the war, Union General Gordon Granger announced emancipation in Galveston on June 19, 1865, the date now celebrated as Juneteenth.',
    example: {
      prompt: 'Why is Juneteenth dated June 19, 1865, rather than 1863?',
      steps: [
        'The Emancipation Proclamation took effect in 1863 but was not enforced in Texas.',
        'Granger’s General Order No. 3 announced freedom in Galveston in 1865.',
      ],
      answer: 'Because that is when emancipation was actually announced and enforced in Texas.',
    },
    terms: [
      ['annexation', 'the formal addition of territory to a country'],
      ['Juneteenth', 'June 19, the date emancipation was announced in Galveston in 1865'],
    ],
    review: [
      {
        prompt: 'When did Texas become a state, and what number was it?',
        answer: 'In 1845, as the 28th state.',
      },
      {
        prompt: 'What did General Order No. 3 announce?',
        answer: 'That all enslaved people in Texas were free, ending slavery in the state.',
      },
    ],
    exercises: [
      'Create a timeline from 1836 to 1870 with five key events.',
      'Explain in three sentences why Juneteenth matters.',
    ],
  },
  'g4-ss-u3-l1': {
    topics: ['oil industry', 'modern Texas economy'],
    applicationTitle: 'Oil, cities, and the modern economy',
    application:
      'The Spindletop gusher near Beaumont in 1901 launched the Texas oil industry. Oil brought jobs, railroads, ports, and refineries, and it funded universities and roads. It also tied Texas to boom-and-bust cycles, because prices fall when supply rises. Modern Texas has diversified into technology, health care, aerospace, agriculture, and tourism, but energy still shapes its politics and landscape.',
    example: {
      prompt: 'Explain one benefit and one risk of an oil-based economy.',
      steps: [
        'Benefit: high-wage jobs and tax revenue fund public services.',
        'Risk: prices fall and jobs disappear when supply rises or demand drops.',
      ],
      answer: 'Oil funds services but exposes the state to boom-and-bust cycles.',
    },
    terms: [
      ['boom and bust', 'a cycle of rapid growth followed by sharp decline'],
      ['refinery', 'a plant that turns crude oil into fuels and other products'],
    ],
    review: [
      {
        prompt: 'What happened at Spindletop in 1901?',
        answer: 'A huge oil gusher near Beaumont started the modern Texas oil industry.',
      },
      {
        prompt: 'Name two industries that now employ many Texans.',
        answer: 'Health care and technology, along with energy, aerospace, and tourism.',
      },
    ],
    exercises: [
      'Make a list of five products made from petroleum.',
      'Interview an adult about how oil prices affect prices at the store.',
    ],
  },

  'g5-ela-u1-l1': {
    topics: ['character development', 'theme'],
    applicationTitle: 'Tracking change across a whole text',
    application:
      'Characters change because events force decisions. To trace development, compare what a character wants, believes, and does at the start with what they want, believe, and do at the end. A thematic claim then explains the change: not “she was brave,” but “courage is built by acting despite fear.” Evidence from across the text is what separates a claim from a guess.',
    example: {
      prompt: 'A boy refuses to speak in class, then defends a classmate in front of the class. What thematic claim fits?',
      steps: [
        'Compare the start (silence, fear of judgment) with the end (speaking for someone else).',
        'Name the idea the change illustrates: purpose can outweigh fear.',
      ],
      answer: 'A claim such as “people find their voice when they speak for someone else.”',
    },
    terms: [
      ['character development', 'the way a character changes across a text'],
      ['thematic claim', 'a statement about the text’s idea that can be supported with evidence'],
    ],
    review: [
      {
        prompt: 'What evidence proves character development?',
        answer: 'A stated or shown change in what the character wants, believes, or does.',
      },
      {
        prompt: 'Why is a one-word topic not a theme?',
        answer: 'A topic cannot be argued; a theme makes a claim that evidence can support.',
      },
    ],
    exercises: [
      'Chart a character’s choices at the beginning, middle, and end of a novel.',
      'Write a thematic claim and three pieces of supporting evidence.',
    ],
  },
  'g5-ela-u2-l1': {
    topics: ['evidence', 'author’s claim'],
    applicationTitle: 'Judging whether evidence proves the point',
    application:
      'A claim is what an author wants you to believe; reasons explain why; evidence supports the reasons. Relevant evidence actually bears on the claim, while irrelevant evidence may be true but beside the point. Advertisers and politicians often stack true but irrelevant facts, so the test is always: does this evidence make the claim more likely to be true?',
    example: {
      prompt: 'Claim: “Our school needs a later start.” Which evidence is relevant: sleep research or the principal’s favorite color?',
      steps: [
        'Ask whether each fact bears on start times and student outcomes.',
        'Sleep research does; the principal’s color preference does not.',
      ],
      answer: 'The sleep research is relevant; the color preference is irrelevant.',
    },
    terms: [
      ['claim', 'the statement an author wants you to accept'],
      ['relevant evidence', 'information that actually supports or challenges the claim'],
    ],
    review: [
      {
        prompt: 'What is the difference between a reason and evidence?',
        answer: 'A reason explains why the claim is true; evidence is the fact that supports the reason.',
      },
      {
        prompt: 'Why can a true fact still be bad evidence?',
        answer: 'Because it may not relate to the claim being made.',
      },
    ],
    exercises: [
      'Find an advertisement and label its claim, reason, and evidence.',
      'Write one relevant and one irrelevant fact for a claim you believe.',
    ],
  },
  'g5-ela-u3-l1': {
    topics: ['research question', 'citing sources'],
    applicationTitle: 'Turning curiosity into a research plan',
    application:
      'A research question is narrow enough to answer and open enough to require evidence. “Why do monarch butterflies migrate?” is workable; “butterflies” is not. Credible sources are authoritative, current, and checkable, and citing them lets a reader verify you. A short presentation then needs one clear claim, two or three pieces of evidence, and a source list.',
    example: {
      prompt: 'Narrow “recycling” into a research question and name two source types.',
      steps: [
        'Add a place, a group, and a measurable outcome: “How much does curbside recycling reduce landfill waste in our city?”',
        'Choose sources: the city’s public works report and a state environmental agency page.',
      ],
      answer: 'A specific question plus government and agency sources that can be checked.',
    },
    terms: [
      ['research question', 'a focused question that can be answered with evidence'],
      ['credible source', 'a source whose author, evidence, and purpose can be verified'],
    ],
    review: [
      {
        prompt: 'What makes a source credible?',
        answer: 'A named author or agency, cited evidence, a clear purpose, and recent information.',
      },
      {
        prompt: 'Why cite a source instead of just stating a fact?',
        answer: 'So the reader can check the claim and see where it came from.',
      },
    ],
    exercises: [
      'Write a research question about your community and list three sources.',
      'Prepare a two-minute presentation with one claim and two facts.',
    ],
  },
  'g5-math-u1-l1': {
    topics: ['decimals', 'decimal operations'],
    applicationTitle: 'Decimals in prices and measurements',
    application:
      'Decimals extend place value to the right of the decimal point: tenths, hundredths, thousandths. Money uses hundredths, so $4.75 means 4 dollars and 75 cents. When adding or subtracting decimals, line up the decimal points so like places combine; when multiplying, count the total decimal places in the factors to place the point in the product. Estimating first, as in 3.6 × 12 ≈ 4 × 12 = 48, tells you roughly where the answer should land.',
    example: {
      prompt: 'Add 3.6 and 12.45.',
      steps: ['Line up the points: 3.60 and 12.45.', 'Add hundredths, tenths, ones: 16.05.'],
      answer: '16.05. The points stay aligned so each place value is added to its match.',
    },
    terms: [
      ['decimal point', 'the mark separating whole numbers from parts of a whole'],
      ['hundredth', 'one of one hundred equal parts, written 0.01'],
    ],
    review: [
      {
        prompt: 'Why line up decimal points when adding?',
        answer: 'So tenths add to tenths and hundredths to hundredths.',
      },
      {
        prompt: 'Which is larger, 0.7 or 0.65?',
        answer: '0.7, because it equals 0.70, which is greater than 0.65.',
      },
    ],
    exercises: [
      'Add two prices from a receipt and check the total.',
      'Order 0.4, 0.04, 0.44, and 0.404 from least to greatest.',
    ],
  },
  'g5-math-u2-l1': {
    topics: ['multiplying fractions', 'order of operations'],
    applicationTitle: 'Parts of parts and the order of steps',
    application:
      'Multiplying fractions finds a part of a part: 2/3 of 3/4 is 6/12, or 1/2. Multiply numerators and denominators, then simplify. Order of operations tells you which calculation comes first: parentheses, exponents, multiplication and division left to right, then addition and subtraction. Without an agreed order, the same expression would produce different answers. Writing each step on its own line makes the order visible and catches mistakes before they multiply.',
    example: {
      prompt: 'Compute 2/3 × 3/4 and simplify.',
      steps: ['Multiply across: 2 × 3 = 6 and 3 × 4 = 12.', 'Simplify 6/12 by dividing both by 6.'],
      answer: '1/2. The result is half of the original amount.',
    },
    terms: [
      ['numerator', 'the top number of a fraction, showing how many parts'],
      ['order of operations', 'the agreed sequence for evaluating an expression'],
    ],
    review: [
      {
        prompt: 'Evaluate 8 + 2 × 5.',
        answer: '18, because multiplication happens before addition: 2 × 5 = 10, then 8 + 10.',
      },
      {
        prompt: 'Why does multiplying by a fraction smaller than 1 make a number smaller?',
        answer: 'Because you are taking a part of it, not adding groups of it.',
      },
    ],
    exercises: [
      'Solve 3/5 × 5/6 and simplify.',
      'Evaluate 12 − 3 × 2 + 4 and explain the order you used.',
    ],
  },
  'g5-math-u3-l1': {
    topics: ['volume', 'coordinate plane'],
    applicationTitle: 'Filling space and plotting position',
    application:
      'Volume measures cubic units inside a solid: a 4 × 3 × 2 box holds 24 unit cubes. The formula is length × width × height. A coordinate plane locates points with an ordered pair: the first number is horizontal (x) and the second is vertical (y). Maps, games, and graphs all use the same system, which is why reading (3, 5) correctly matters.',
    example: {
      prompt: 'A box is 5 cm long, 4 cm wide, and 2 cm tall. Find its volume.',
      steps: ['Multiply the three dimensions: 5 × 4 = 20.', '20 × 2 = 40.'],
      answer: '40 cubic centimeters, because volume counts unit cubes that fill the box.',
    },
    terms: [
      ['volume', 'the amount of space a solid figure occupies, in cubic units'],
      ['ordered pair', 'two numbers that give a point’s horizontal and vertical position'],
    ],
    review: [
      {
        prompt: 'How do you plot (2, 6) in the first quadrant?',
        answer: 'Move 2 right along the x-axis, then 6 up.',
      },
      {
        prompt: 'Why is volume measured in cubic units?',
        answer: 'Because it counts unit cubes, which have length, width, and height.',
      },
    ],
    exercises: [
      'Find the volume of a shoebox using a ruler.',
      'Plot five points and describe the shape they make.',
    ],
  },
  'g5-sci-u1-l1': {
    topics: ['solutions', 'conservation of matter'],
    applicationTitle: 'Dissolving without disappearing',
    application:
      'When salt dissolves in water, it spreads out as particles too small to see, but it does not vanish. The mass of the solution equals the mass of the water plus the salt, which is conservation of matter. Boiling point can identify a solution: salt water boils above 100°C because dissolved particles interfere with evaporation.',
    example: {
      prompt: 'You dissolve 10 g of salt in 90 g of water. What is the mass, and what happens when it evaporates?',
      steps: ['Mass is conserved: 10 + 90 = 100 g.', 'Evaporation removes water and leaves the salt behind.'],
      answer: '100 g of solution; evaporating the water recovers the 10 g of salt.',
    },
    terms: [
      ['solution', 'a uniform mixture in which a solute dissolves in a solvent'],
      ['conservation of matter', 'the principle that matter is neither created nor destroyed'],
    ],
    review: [
      {
        prompt: 'Does dissolved salt disappear?',
        answer: 'No; it spreads out in particles too small to see but is still there.',
      },
      {
        prompt: 'How can you recover salt from salt water?',
        answer: 'Evaporate the water and the salt crystals remain.',
      },
    ],
    exercises: [
      'Weigh water and salt before and after dissolving and compare.',
      'Test how salt affects the time water takes to boil.',
    ],
  },
  'g5-sci-u2-l1': {
    topics: ['food webs', 'energy pyramid'],
    applicationTitle: 'Energy flows, matter cycles',
    application:
      'Energy enters a food web from the Sun and passes from producers to consumers; at each step most energy is used or lost as heat. That is why food chains are short: only about a tenth of the energy moves to the next level. Matter, unlike energy, cycles: decomposers return nutrients to soil and water so producers can use them again.',
    example: {
      prompt: 'Why can an ecosystem support fewer foxes than rabbits?',
      steps: [
        'Energy is lost at each level, so higher levels have less available.',
        'A fox needs many rabbits, but rabbits need far more plants.',
      ],
      answer: 'Because only a fraction of the rabbits’ energy becomes fox biomass.',
    },
    terms: [
      ['energy pyramid', 'a diagram showing energy decreasing at each feeding level'],
      ['producer', 'an organism that makes its own food from sunlight'],
    ],
    review: [
      {
        prompt: 'Why are most food chains only four or five links long?',
        answer: 'Too little energy remains after several transfers to support another level.',
      },
      {
        prompt: 'What role do decomposers play in matter cycling?',
        answer: 'They break down dead material and release nutrients back to the environment.',
      },
    ],
    exercises: [
      'Draw an energy pyramid for a pond and label four levels.',
      'Explain what would happen if the producers in a web disappeared.',
    ],
  },
  'g5-sci-u3-l1': {
    topics: ['rotation and revolution', 'water cycle'],
    applicationTitle: 'Earth’s movements and moving water',
    application:
      'Rotation is Earth spinning on its axis once about every 24 hours, causing day and night. Revolution is Earth orbiting the Sun once in about 365.25 days, causing the seasons along with the tilt of the axis. The water cycle moves water between ocean, air, and land through evaporation, condensation, precipitation, and collection.',
    example: {
      prompt: 'Why does Texas have summer in June and winter in December?',
      steps: [
        'Earth’s axis is tilted, so one hemisphere receives sunlight more directly.',
        'Revolution carries the Northern Hemisphere toward that direct sunlight in June.',
      ],
      answer: 'The tilt plus revolution changes how directly sunlight strikes each hemisphere.',
    },
    terms: [
      ['rotation', 'spinning on an axis, producing day and night'],
      ['revolution', 'orbiting another body, producing the year'],
    ],
    review: [
      {
        prompt: 'How long is one rotation and one revolution of Earth?',
        answer: 'About 24 hours for a rotation and about 365.25 days for a revolution.',
      },
      {
        prompt: 'What drives evaporation in the water cycle?',
        answer: 'Heat from the Sun turns liquid water into vapor.',
      },
    ],
    exercises: [
      'Model day and night with a ball and a lamp.',
      'Draw the water cycle and label each stage with an arrow.',
    ],
  },
  'g5-ss-u1-l1': {
    topics: ['colonial settlement', 'American Revolution'],
    applicationTitle: 'Two colonies and the road to revolution',
    application:
      'Jamestown (1607) was founded for profit and survived through tobacco; Plymouth (1620) was founded by religious separatists seeking self-government. Both developed representative assemblies. After 1763, Britain taxed the colonies to pay war debts and limited westward settlement, and colonists argued that taxation without representation violated their rights as English subjects.',
    example: {
      prompt: 'Compare the motives behind Jamestown and Plymouth.',
      steps: [
        'Jamestown: a joint-stock company seeking wealth and trade.',
        'Plymouth: a religious community seeking freedom to worship and govern itself.',
      ],
      answer: 'Profit versus religious freedom, though both needed survival and self-rule.',
    },
    terms: [
      ['representative government', 'a system where people elect others to make decisions'],
      ['taxation without representation', 'taxing people who have no voice in the government'],
    ],
    review: [
      {
        prompt: 'What crop saved Jamestown?',
        answer: 'Tobacco, which became a profitable export.',
      },
      {
        prompt: 'Name two acts that angered the colonies.',
        answer: 'The Stamp Act and the Townshend Acts, which taxed goods without colonial consent.',
      },
    ],
    exercises: [
      'Make a two-column comparison of Jamestown and Plymouth.',
      'Write a paragraph explaining one cause of the Revolution.',
    ],
  },
  'g5-ss-u2-l1': {
    topics: ['Constitution', 'Bill of Rights'],
    applicationTitle: 'A framework with limits',
    application:
      'The Constitution creates three branches: legislative, executive, and judicial. Separation of powers keeps any one branch from dominating, checks and balances let each branch limit the others, and federalism divides authority between national and state governments. The Bill of Rights, the first ten amendments, protects individual freedoms such as speech, religion, and a fair trial.',
    example: {
      prompt: 'Explain how checks and balances limit the president.',
      steps: [
        'The president can veto bills, but Congress can override a veto with two-thirds.',
        'The Senate must confirm appointments, and courts can rule actions unconstitutional.',
      ],
      answer: 'Other branches can block, confirm, or review presidential actions.',
    },
    terms: [
      ['separation of powers', 'dividing government authority among three branches'],
      ['amendment', 'a formal change to the Constitution'],
    ],
    review: [
      {
        prompt: 'What does the First Amendment protect?',
        answer: 'Speech, religion, press, assembly, and the right to petition.',
      },
      {
        prompt: 'Why did the Bill of Rights need to be added?',
        answer: 'To protect individual liberties and secure support for ratification.',
      },
    ],
    exercises: [
      'Match five rights to their amendments.',
      'Draw a diagram of three branches with one check each.',
    ],
  },
  'g5-ss-u3-l1': {
    topics: ['westward expansion', 'civil rights'],
    applicationTitle: 'Expansion, war, and rights',
    application:
      'Westward expansion began with the Louisiana Purchase in 1803 and continued through treaties, purchases, and war, including the Mexican Cession in 1848. It doubled the country and intensified the slavery dispute. The Civil War (1861–65) preserved the Union and ended slavery; the Thirteenth, Fourteenth, and Fifteenth Amendments abolished slavery, defined citizenship, and protected voting rights.',
    example: {
      prompt: 'How did expansion intensify the conflict over slavery?',
      steps: [
        'New territories raised the question of whether slavery would expand with them.',
        'Compromises failed, and secession followed Lincoln’s election in 1860.',
      ],
      answer: 'Each new territory reopened the balance-of-power question, making compromise impossible.',
    },
    terms: [
      ['annexation', 'adding territory to a country'],
      ['Reconstruction', 'the period after the Civil War rebuilding the South and its laws'],
    ],
    review: [
      {
        prompt: 'What did the Thirteenth Amendment do?',
        answer: 'It abolished slavery in the United States.',
      },
      {
        prompt: 'Name one limit of Reconstruction.',
        answer: 'Black codes, poll taxes, and violence restricted the rights the amendments promised.',
      },
    ],
    exercises: [
      'Create a timeline of expansion from 1803 to 1850.',
      'Write a paragraph on one achievement and one failure of Reconstruction.',
    ],
  },
};
