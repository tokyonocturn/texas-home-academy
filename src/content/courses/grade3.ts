import type { Course } from '../../types';
import { ELEMENTARY_WEIGHTS } from '../weights';
import { CREATIVE_PROJECT, INQUIRY_PROJECT, MATH_PROJECT, WRITING_PROJECT } from '../rubrics';
import { exam, lesson, mc, num, project, quiz, section, teks, unit } from '../builders';

/** Grade 3. Alignment: 19 TAC chapters 110-117. */

export const grade3Ela: Course = {
  id: 'g3-ela',
  title: 'Grade 3 English Language Arts',
  subject: 'ela',
  grade: 3,
  credits: 0,
  semesters: 2,
  description:
    'Multisyllable decoding and context clues, paragraph writing, and the features of fiction and informational text.',
  essentialQuestions: ['How do I figure out a word I do not know?', 'How does a paragraph hold together?'],
  teks: [teks('19 TAC ch. 110, Grade 3', 'Word analysis and fluency; vocabulary; comprehension across genres; composition; conventions; research.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Word solving', 'Readers use word parts and context together.', [
      lesson({
        id: 'g3-ela-u1-l1',
        title: 'Context clues and word parts',
        minutes: 30,
        objectives: ['Use sentence context to infer a word’s meaning.', 'Use prefixes and suffixes as a second check.'],
        sections: [
          section('Two sources of evidence', [
            'Context clues are the words around an unknown word. In “The trail was treacherous, so we moved slowly and held the rope,” treacherous likely means dangerous because the sentence explains the caution.',
            'Word parts give another clue: trans- means across, port means carry, so transport means carry across. Use both context and word parts, then check that your meaning fits the sentence.',
          ]),
        ],
        example: {
          prompt: 'Infer “reluctant” from: “She was reluctant to speak, pausing before each word.”',
          steps: ['Context: pausing, not eager.', 'Inference: unwilling or hesitant.', 'Check: “hesitant to speak” fits.'],
          answer: 'Hesitant or unwilling.',
        },
        practice: [
          mc('In “The fragile vase shattered when dropped,” fragile means', ['strong', 'breakable', 'heavy', 'colorful'], 1, 'The result shows it breaks easily.'),
          mc('The prefix “pre-” means', ['after', 'before', 'not', 'again'], 1, 'Pre- means before.'),
        ],
      }),
    ], quiz('Word solving check', [
      mc('Context clues are', ['the words around an unknown word', 'the title', 'the page number', 'the cover'], 0, 'Surrounding words provide clues.'),
      mc('“Bicycle” contains the root meaning', ['two', 'wheel', 'fast', 'road'], 1, 'Cycl relates to wheel/circle.'),
    ]), project({
      title: 'Vocabulary notebook',
      prompt: 'Collect ten unknown words from your reading. For each, write the sentence, your inferred meaning, the clue you used, and the dictionary meaning.',
      deliverable: 'A ten-entry notebook.',
      guidance: ['Infer before checking the dictionary.', 'Note which clue type helped.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u2', 'Paragraph writing', 'A paragraph makes one point and supports it.', [
      lesson({
        id: 'g3-ela-u2-l1',
        title: 'Topic sentence, details, and conclusion',
        minutes: 30,
        objectives: ['Write a topic sentence that states one idea.', 'Support it with relevant details.'],
        sections: [
          section('The shape of a paragraph', [
            'A topic sentence names the point: “Our class garden taught us how plants need care.” Supporting details give examples and evidence. A concluding sentence restates the point without repeating it word for word.',
            'Relevant details stay on the topic. “We watered the beans every morning” supports the topic; “My cousin lives in Dallas” does not.',
          ]),
        ],
        example: {
          prompt: 'Write a topic sentence for a paragraph about a school field trip.',
          steps: ['Choose the point: the trip changed what you understood.', 'Name the trip.', 'Make it specific.'],
          answer: 'The trip to the water treatment plant showed me where our water actually comes from.',
        },
        practice: [
          mc('A topic sentence should', ['list every detail', 'state the paragraph’s main point', 'be a question', 'be very long'], 1, 'It states the point.'),
          mc('Which detail is relevant to a paragraph about bike safety?', ['Helmets reduce head injuries.', 'My bike is blue and red.', 'I like pizza.', 'My friend moved away.'], 0, 'It supports the safety topic.'),
        ],
      }),
    ], quiz('Paragraph check', [
      mc('A concluding sentence should', ['introduce a new topic', 'restate the point', 'list sources', 'be a question'], 1, 'It closes the paragraph.'),
      mc('Relevant details', ['support the topic sentence', 'change the subject', 'are always numbers', 'are optional'], 0, 'They support the main point.'),
    ]), project({
      title: 'Five-paragraph essay',
      prompt: 'Write a five-paragraph essay on a person who taught you something. Include an introduction, three body paragraphs, and a conclusion.',
      deliverable: 'An edited essay of 300–500 words.',
      guidance: ['One idea per paragraph.', 'Include a specific example in each body paragraph.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u3', 'Genres and text features', 'Text structure signals how to read.', [
      lesson({
        id: 'g3-ela-u3-l1',
        title: 'Fiction, nonfiction, and text features',
        minutes: 30,
        objectives: ['Distinguish fiction from informational text.', 'Use headings, captions, and diagrams to locate information.'],
        sections: [
          section('Two purposes', [
            'Fiction tells a story with characters and events; its purpose is often to entertain or explore an idea. Informational text explains, describes, or argues, and its purpose is to inform.',
            'Text features help readers navigate: headings group ideas, captions explain images, bold words mark key terms, diagrams show how something works, and an index locates topics.',
          ]),
        ],
        example: {
          prompt: 'You need to find the causes of erosion in an article. Where do you look first?',
          steps: ['Scan headings for “causes.”', 'Read the section under that heading.', 'Check the diagram and caption for examples.'],
          answer: 'Start with the heading that names causes.',
        },
        practice: [
          mc('The main purpose of a caption is to', ['tell a story', 'explain an image', 'list sources', 'give an opinion'], 1, 'Captions explain images.'),
          mc('Fiction is usually organized by', ['chronological plot events', 'headings', 'an index', 'captions'], 0, 'Stories follow plot order.'),
        ],
      }),
    ], quiz('Genres check', [
      mc('An index helps a reader', ['find topics and pages', 'learn the author', 'see the cover', 'count pages'], 0, 'It locates topics.'),
      mc('Informational text primarily', ['tells a fictional story', 'explains or informs', 'lists jokes', 'uses only dialogue'], 1, 'Its purpose is to inform.'),
    ]), project({
      title: 'Text feature scavenger hunt',
      prompt: 'Find five text features in a magazine or textbook. Label each and explain how it helped you find or understand information.',
      deliverable: 'Five labeled examples with explanations.',
      guidance: ['Use real pages, not invented examples.', 'Name the feature precisely.'],
      rubric: CREATIVE_PROJECT,
    })),
  ],
  finalExam: exam('Grade 3 ELA final check', [
    mc('In “The arid desert had no rain for months,” arid means', ['wet', 'dry', 'cold', 'crowded'], 1, 'No rain signals dryness.'),
    mc('A topic sentence', ['lists details', 'states the main point', 'asks a question', 'is the title'], 1, 'It states the paragraph’s point.'),
    mc('A caption explains', ['the author', 'an image', 'the index', 'the glossary'], 1, 'Captions explain images.'),
    mc('The prefix “trans-” means', ['not', 'across', 'before', 'again'], 1, 'Trans- means across.'),
  ], 35),
};

export const grade3Math: Course = {
  id: 'g3-math',
  title: 'Grade 3 Mathematics',
  subject: 'math',
  grade: 3,
  credits: 0,
  semesters: 2,
  description:
    'Place value to 100,000, multiplication and division facts, fractions on a number line, and area and perimeter.',
  essentialQuestions: ['How are multiplication and division related?', 'How do fractions name parts of a whole?'],
  teks: [teks('19 TAC ch. 111, Grade 3', 'Place value; addition and subtraction; multiplication and division; fractions; geometry and measurement; data.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Place value and rounding', 'Each place is ten times the one to its right.', [
      lesson({
        id: 'g3-math-u1-l1',
        title: 'Numbers to 100,000 and rounding',
        minutes: 35,
        objectives: ['Read and write numbers to 100,000.', 'Round to the nearest ten, hundred, or thousand.'],
        sections: [
          section('Place value', [
            'In 47,382 the digits mean 4 ten-thousands, 7 thousands, 3 hundreds, 8 tens, and 2 ones. Expanded form: 40,000 + 7,000 + 300 + 80 + 2.',
            'To round, find the target place and look at the digit to its right. If it is 5 or more, round up; if less than 5, keep the digit. 4,672 to the nearest hundred: the tens digit is 7, so round up to 4,700.',
          ]),
        ],
        example: {
          prompt: 'Round 38,451 to the nearest thousand.',
          steps: ['Target place: thousands (8).', 'Look right: hundreds digit is 4.', '4 is less than 5, so keep 8.', 'Result: 38,000.'],
          answer: '38,000.',
        },
        practice: [
          num('Round 4,672 to the nearest hundred.', 4700, 'The tens digit 7 rounds up.'),
          mc('In 47,382, the 7 means', ['7', '70', '700', '7,000'], 3, 'It is in the thousands place.'),
        ],
      }),
    ], quiz('Place value check', [
      num('Round 6,849 to the nearest thousand.', 7000, 'The hundreds digit 8 rounds up.'),
      num('What is the value of the 3 in 53,201?', 3000, 'It is in the thousands place.'),
    ]), project({
      title: 'Place value poster',
      prompt: 'Choose a five-digit number. Show it in expanded form, words, base-ten blocks, and rounded to the nearest thousand.',
      deliverable: 'A four-part poster.',
      guidance: ['Check each place value.', 'Explain the rounding rule used.'],
      rubric: MATH_PROJECT,
    })),
    unit('u2', 'Multiplication and division', 'Multiplication combines equal groups; division separates them.', [
      lesson({
        id: 'g3-math-u2-l1',
        title: 'Arrays, facts, and fact families',
        minutes: 35,
        objectives: ['Use arrays to model multiplication.', 'Relate multiplication and division facts.'],
        sections: [
          section('Equal groups', [
            '4 rows of 6 chairs is 4 × 6 = 24 chairs. An array shows equal rows and columns, which is why multiplication gives the total without counting one by one.',
            'Every multiplication fact has a related division fact: 4 × 6 = 24 means 24 ÷ 6 = 4 and 24 ÷ 4 = 6. This fact family helps you check division.',
          ]),
        ],
        example: {
          prompt: 'Use a fact family for 7, 8, and 56.',
          steps: ['7 × 8 = 56.', '8 × 7 = 56.', '56 ÷ 7 = 8.', '56 ÷ 8 = 7.'],
          answer: 'Four related facts.',
        },
        practice: [
          num('6 × 7 = ?', 42, 'Six groups of seven.'),
          num('56 ÷ 8 = ?', 7, 'Eight times seven is 56.'),
        ],
      }),
    ], quiz('Multiplication check', [
      num('8 × 9 = ?', 72, 'Eight groups of nine.'),
      num('45 ÷ 5 = ?', 9, 'Five times nine is 45.'),
    ]), project({
      title: 'Array city',
      prompt: 'Design a building using arrays of windows. Write the multiplication sentence and two division sentences for each building.',
      deliverable: 'A drawing with three labeled fact families.',
      guidance: ['Count rows and columns accurately.', 'Check the related facts.'],
      rubric: MATH_PROJECT,
    })),
    unit('u3', 'Fractions, area, and perimeter', 'A fraction is a number on the number line.', [
      lesson({
        id: 'g3-math-u3-l1',
        title: 'Unit fractions, area, and perimeter',
        minutes: 35,
        objectives: ['Place fractions on a number line.', 'Compute area and perimeter of rectangles.'],
        sections: [
          section('Fractions as numbers', [
            'A unit fraction is 1 divided into equal parts: 1/2, 1/3, 1/4. On a number line from 0 to 1, 3/4 is three jumps of 1/4. The denominator names the size of the parts; the numerator counts them.',
            'Area is the space inside a rectangle: length × width. Perimeter is the distance around: 2(length + width). A 4-by-6 rectangle has area 24 square units and perimeter 20 units.',
          ]),
        ],
        example: {
          prompt: 'Find the area and perimeter of a 5-by-3 rectangle.',
          steps: ['Area = 5 × 3 = 15 square units.', 'Perimeter = 2(5 + 3) = 16 units.'],
          answer: 'Area 15 square units; perimeter 16 units.',
        },
        practice: [
          num('What is the area of a 4-by-6 rectangle?', 24, '4 × 6 = 24 square units.'),
          num('What is the perimeter of a 4-by-6 rectangle?', 20, '2(4 + 6) = 20 units.'),
        ],
      }),
    ], quiz('Fractions and measurement check', [
      mc('On a number line, 3/4 is', ['less than 1/2', 'three jumps of 1/4', 'equal to 1', 'greater than 1'], 1, 'It is three unit fractions of 1/4.'),
      num('A square has side length 5. What is its area?', 25, '5 × 5 = 25 square units.'),
    ]), project({
      title: 'Dream room design',
      prompt: 'Design a rectangular room on grid paper. Label dimensions, compute area and perimeter, and place furniture using fractional widths.',
      deliverable: 'A scaled drawing with calculations.',
      guidance: ['Use a consistent scale.', 'Show area and perimeter work.'],
      rubric: MATH_PROJECT,
    })),
  ],
  finalExam: exam('Grade 3 math final check', [
    num('Round 6,849 to the nearest hundred.', 6800, 'The tens digit is 4, so keep the hundreds digit.'),
    num('7 × 8 = ?', 56, 'Seven groups of eight.'),
    num('63 ÷ 9 = ?', 7, 'Nine times seven is 63.'),
    num('What is the area of a 6-by-7 rectangle?', 42, '6 × 7 = 42 square units.'),
  ], 35),
};

export const grade3Science: Course = {
  id: 'g3-sci',
  title: 'Grade 3 Science',
  subject: 'science',
  grade: 3,
  credits: 0,
  semesters: 2,
  description:
    'Matter and mixtures, forms of energy and simple machines, and Earth’s rocks, soil, water cycle, and rapid changes.',
  essentialQuestions: ['What is the difference between a mixture and a solution?', 'How does water move through the environment?'],
  teks: [teks('19 TAC ch. 112, Grade 3', 'Matter and energy; force and motion; Earth and space; organisms and environments; investigation and reasoning.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Matter and mixtures', 'Materials can be combined and separated.', [
      lesson({
        id: 'g3-sci-u1-l1',
        title: 'Mixtures and solutions',
        minutes: 30,
        objectives: ['Distinguish a mixture from a solution.', 'Separate a mixture using physical properties.'],
        sections: [
          section('Combining materials', [
            'A mixture combines materials that keep their own properties, such as trail mix or sand and iron filings. A solution is a mixture in which one substance dissolves evenly in another, such as salt water.',
            'Physical properties allow separation: a magnet removes iron filings, a filter catches sand, and evaporation recovers salt from salt water. These are physical changes, not chemical reactions.',
          ]),
        ],
        example: {
          prompt: 'How would you separate a mixture of sand, salt, and iron filings?',
          steps: ['Use a magnet to remove iron.', 'Add water to dissolve salt.', 'Filter to remove sand.', 'Evaporate the water to recover salt.'],
          answer: 'Magnet, dissolve, filter, evaporate.',
        },
        practice: [
          mc('Salt water is a', ['mixture that is not mixed evenly', 'solution', 'compound', 'solid'], 1, 'Salt dissolves evenly in water.'),
          mc('A magnet is useful for separating', ['salt', 'iron filings', 'sand', 'sugar'], 1, 'Iron is magnetic.'),
        ],
      }),
    ], quiz('Matter check', [
      mc('Trail mix is a', ['solution', 'mixture', 'compound', 'gas'], 1, 'The parts keep their properties.'),
      mc('Evaporation can recover', ['sand from water', 'salt from salt water', 'iron from sand', 'oil from water'], 1, 'Water leaves, salt remains.'),
    ]), project({
      title: 'Separation challenge',
      prompt: 'Design a procedure to separate a mixture of rice, paper clips, and salt. Test it and record what worked.',
      deliverable: 'A procedure, results table, and conclusion.',
      guidance: ['Use tools safely.', 'Explain which property each step uses.'],
      rubric: INQUIRY_PROJECT,
    })),
    unit('u2', 'Energy and simple machines', 'Energy changes form but is not used up.', [
      lesson({
        id: 'g3-sci-u2-l1',
        title: 'Forms of energy and simple machines',
        minutes: 30,
        objectives: ['Identify forms of energy.', 'Explain how a simple machine changes force or direction.'],
        sections: [
          section('Energy', [
            'Energy forms include mechanical (motion), light, sound, thermal (heat), electrical, and chemical. A flashlight converts electrical energy to light and heat; a moving bicycle has mechanical energy.',
            'Simple machines make work easier by changing the size or direction of a force: lever, pulley, inclined plane, wheel and axle, screw, and wedge. A ramp (inclined plane) lets you push a load with less force over a longer distance.',
          ]),
        ],
        example: {
          prompt: 'Why is a ramp easier than lifting a box straight up?',
          steps: ['The ramp spreads the lift over a longer distance.', 'Less force is needed, though the distance is greater.', 'Energy used is similar; force is reduced.'],
          answer: 'An inclined plane trades distance for force.',
        },
        practice: [
          mc('A ramp is an example of a', ['lever', 'inclined plane', 'pulley', 'screw'], 1, 'A ramp is an inclined plane.'),
          mc('A flashlight converts electrical energy into', ['sound only', 'light and heat', 'chemical energy', 'motion only'], 1, 'It produces light and some heat.'),
        ],
      }),
    ], quiz('Energy check', [
      mc('A pulley helps by', ['increasing weight', 'changing the direction of force', 'removing friction', 'creating energy'], 1, 'It can redirect force.'),
      mc('Thermal energy is', ['heat', 'light', 'sound', 'motion'], 0, 'Thermal energy is heat.'),
    ]), project({
      title: 'Simple machine hunt',
      prompt: 'Find five simple machines at home, identify the type, and explain what job each makes easier.',
      deliverable: 'A labeled list with explanations.',
      guidance: ['Name the machine type precisely.', 'Explain the force change.'],
      rubric: INQUIRY_PROJECT,
    })),
    unit('u3', 'Earth and water', 'Earth’s surface changes slowly and quickly.', [
      lesson({
        id: 'g3-sci-u3-l1',
        title: 'Rocks, soil, the water cycle, and rapid changes',
        minutes: 35,
        objectives: ['Classify rocks by how they form.', 'Describe the water cycle.', 'Name rapid Earth changes.'],
        sections: [
          section('Earth materials', [
            'Igneous rock forms from cooled magma or lava; sedimentary rock forms from compressed layers of sediment; metamorphic rock forms when heat and pressure change existing rock. Soil is a mixture of weathered rock, organic matter, water, and air.',
            'The water cycle: evaporation, condensation, precipitation, and collection. Energy from the sun drives it.',
            'Rapid changes include earthquakes, volcanic eruptions, landslides, and floods. Slow changes include weathering and erosion, which break rock and move sediment.',
          ]),
        ],
        example: {
          prompt: 'Why is a river delta mostly sedimentary material?',
          steps: ['Rivers carry sediment downstream.', 'The sediment settles where the river slows.', 'Layers compress over time.'],
          answer: 'Deposited sediment compacts into sedimentary rock over time.',
        },
        practice: [
          mc('Sedimentary rock forms from', ['cooled lava', 'compressed sediment layers', 'melted rock', 'plant roots'], 1, 'Layers compact into rock.'),
          mc('The water cycle is driven by', ['the moon', 'energy from the sun', 'wind only', 'gravity only'], 1, 'Solar energy drives evaporation.'),
        ],
      }),
    ], quiz('Earth check', [
      mc('Igneous rock forms from', ['compressed sand', 'cooled magma or lava', 'plant material', 'fossils'], 1, 'It cools from molten rock.'),
      mc('An earthquake is a', ['slow change', 'rapid change', 'water cycle stage', 'rock type'], 1, 'It happens suddenly.'),
    ]), project({
      title: 'Water cycle model',
      prompt: 'Build or draw a water cycle model. Label evaporation, condensation, precipitation, and collection, and explain the sun’s role.',
      deliverable: 'A labeled model with a paragraph.',
      guidance: ['Use accurate terms.', 'Explain energy flow.'],
      rubric: INQUIRY_PROJECT,
    })),
  ],
  finalExam: exam('Grade 3 science final check', [
    mc('Salt water is a', ['mixture', 'solution', 'compound', 'gas'], 1, 'Salt dissolves evenly.'),
    mc('A ramp is a', ['lever', 'inclined plane', 'pulley', 'wedge'], 1, 'It is an inclined plane.'),
    mc('Sedimentary rock forms from', ['cooled lava', 'compressed sediment', 'melted rock', 'magma'], 1, 'Layers compact.'),
    mc('Precipitation is part of the', ['rock cycle', 'water cycle', 'food chain', 'solar system'], 1, 'It is a water cycle stage.'),
  ], 35),
};

export const grade3SocialStudies: Course = {
  id: 'g3-ss',
  title: 'Grade 3 Social Studies',
  subject: 'social-studies',
  grade: 3,
  credits: 0,
  semesters: 2,
  description:
    'Communities and levels of government, Texas geography and early peoples, and the basics of economics and citizenship.',
  essentialQuestions: ['How do communities differ?', 'How do people and places shape each other?'],
  teks: [teks('19 TAC ch. 113, Grade 3', 'Communities; government; geography; economics; historical figures; citizenship.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Communities and government', 'Communities differ in size, work, and government.', [
      lesson({
        id: 'g3-ss-u1-l1',
        title: 'Rural, urban, suburban, and three levels of government',
        minutes: 30,
        objectives: ['Compare rural, urban, and suburban communities.', 'Distinguish local, state, and national government.'],
        sections: [
          section('Kinds of communities', [
            'Rural communities have fewer people and more open land, often with farming or ranching. Urban communities are cities with dense housing and many services. Suburban communities sit between, often with housing and commutes to cities.',
            'Local government handles streets, police, parks, and schools; state government handles most criminal law, highways, and public universities; the national government handles defense, immigration, and currency.',
          ]),
        ],
        example: {
          prompt: 'Which level of government issues driver licenses?',
          steps: ['Driver licensing is set by state law.', 'The Texas Department of Public Safety issues them.', 'So it is a state function.'],
          answer: 'State government.',
        },
        practice: [
          mc('Which community type has the most open land?', ['urban', 'suburban', 'rural', 'none'], 2, 'Rural areas have more open land.'),
          mc('Currency is controlled by', ['cities', 'counties', 'the national government', 'school boards'], 2, 'The federal government controls currency.'),
        ],
      }),
    ], quiz('Communities check', [
      mc('A suburban community is typically', ['dense and industrial', 'between rural and urban', 'uninhabited', 'only farmland'], 1, 'It sits between rural and urban.'),
      mc('Public schools are primarily a responsibility of', ['the national government', 'state and local government', 'the United Nations', 'cities only'], 1, 'States and local districts run schools.'),
    ]), project({
      title: 'Community comparison',
      prompt: 'Compare your community with one other type (rural, urban, or suburban) on housing, jobs, and services.',
      deliverable: 'A comparison chart with three categories.',
      guidance: ['Use specific examples.', 'Cite a source for population or services.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u2', 'Texas geography and early peoples', 'People adapt to the land they live on.', [
      lesson({
        id: 'g3-ss-u2-l1',
        title: 'Regions and Native peoples of Texas',
        minutes: 30,
        objectives: ['Locate Texas regions.', 'Describe how two Native peoples lived.'],
        sections: [
          section('Land and peoples', [
            'Texas has coastal plains, the piney woods, the Hill Country, the Panhandle plains, and western mountains and desert. Rainfall decreases from east to west, shaping farming and settlement.',
            'Before European contact, many peoples lived in Texas. The Caddo farmed in East Texas and built permanent villages. The Comanche were skilled riders who followed bison on the plains. The Karankawa lived along the Gulf Coast and fished. Each adapted to its environment.',
          ]),
        ],
        example: {
          prompt: 'Why did the Comanche depend on bison?',
          steps: ['Bison provided food, hides, and tools.', 'Following herds required mobility.', 'Horses, acquired later, made that mobility easier.'],
          answer: 'Bison supplied food and materials, so the Comanche followed the herds.',
        },
        practice: [
          mc('The Caddo lived mainly in', ['West Texas', 'East Texas', 'the Gulf Coast', 'the Panhandle'], 1, 'The Caddo farmed in East Texas.'),
          mc('Rainfall in Texas generally', ['increases from east to west', 'decreases from east to west', 'is uniform', 'is highest in the west'], 1, 'The east is wetter.'),
        ],
      }),
    ], quiz('Texas geography check', [
      mc('The Karankawa lived along the', ['plains', 'Gulf Coast', 'mountains', 'Panhandle'], 1, 'They were coastal people.'),
      mc('The Comanche were known for', ['farming villages', 'horseback hunting', 'fishing only', 'building missions'], 1, 'They were skilled riders.'),
    ]), project({
      title: 'Region travel brochure',
      prompt: 'Create a brochure for one Texas region: land, climate, one resource, and one group who lived there.',
      deliverable: 'A two-page brochure with labeled sections.',
      guidance: ['Use a map.', 'Distinguish climate from weather.'],
      rubric: CREATIVE_PROJECT,
    })),
    unit('u3', 'Economics and citizenship', 'Scarcity forces choices.', [
      lesson({
        id: 'g3-ss-u3-l1',
        title: 'Scarcity, specialization, and good citizenship',
        minutes: 30,
        objectives: ['Explain scarcity and opportunity cost.', 'Give examples of specialization and citizenship.'],
        sections: [
          section('Choices', [
            'Scarcity means resources are limited relative to wants. Because of scarcity, every choice has an opportunity cost: the thing you give up. A town that builds a park may give up a parking lot.',
            'Specialization means focusing on what you do best and trading for the rest. A dentist specializes in teeth and trades services with others. Good citizens follow laws, vote, serve on juries, and contribute to their communities.',
          ]),
        ],
        example: {
          prompt: 'You have $20 for either a book or a game. What is the opportunity cost of buying the book?',
          steps: ['The choice is the book.', 'The forgone alternative is the game.', 'Opportunity cost is the game.'],
          answer: 'The game you did not buy.',
        },
        practice: [
          mc('Scarcity means', ['resources are unlimited', 'resources are limited relative to wants', 'nothing is available', 'money is useless'], 1, 'Limited resources create choices.'),
          mc('Specialization means', ['doing everything yourself', 'focusing on what you do best and trading', 'avoiding trade', 'ignoring skills'], 1, 'It involves trade.'),
        ],
      }),
    ], quiz('Economics check', [
      mc('Opportunity cost is', ['the money spent', 'the next-best thing given up', 'a tax', 'a price'], 1, 'It is the forgone alternative.'),
      mc('A responsibility of citizens is', ['ignoring laws', 'serving on juries when called', 'avoiding voting', 'refusing taxes'], 1, 'Jury service is a civic duty.'),
    ]), project({
      title: 'Class store',
      prompt: 'Design a simple class store: three goods or services, prices, and a plan for what to do with the earnings.',
      deliverable: 'A price list and a one-paragraph plan.',
      guidance: ['Use realistic prices.', 'Explain the trade-offs.'],
      rubric: MATH_PROJECT,
    })),
  ],
  finalExam: exam('Grade 3 social studies final check', [
    mc('A rural community typically has', ['dense housing', 'more open land', 'no schools', 'only offices'], 1, 'Rural areas are less dense.'),
    mc('Driver licenses are issued by', ['cities', 'the state', 'counties', 'the federal government'], 1, 'States license drivers.'),
    mc('The Caddo lived mainly in', ['East Texas', 'West Texas', 'the Gulf', 'the Panhandle'], 0, 'They farmed in East Texas.'),
    mc('Opportunity cost is', ['money spent', 'the next-best alternative given up', 'a tax', 'a price'], 1, 'It is the forgone choice.'),
  ], 35),
};
