import type { Course } from '../../types';
import { ELEMENTARY_WEIGHTS } from '../weights';
import { CREATIVE_PROJECT, INQUIRY_PROJECT, MATH_PROJECT, WRITING_PROJECT } from '../rubrics';
import { exam, lesson, mc, num, project, quiz, section, teks, unit } from '../builders';

/** Grade 2. Alignment: 19 TAC chapters 110-117. */

export const grade2Ela: Course = {
  id: 'g2-ela',
  title: 'Grade 2 English Language Arts',
  subject: 'ela',
  grade: 2,
  credits: 0,
  semesters: 2,
  description:
    'Decoding longer words, grammar and sentence variety, and finding the main idea. Students read more complex texts and write organized paragraphs.',
  essentialQuestions: ['How do word parts help me read and spell?', 'How do I find what a text is mostly about?'],
  teks: [teks('19 TAC ch. 110, Grade 2', 'Phonics and word analysis; fluency; vocabulary; comprehension; composition; conventions; research.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Decoding longer words', 'Word parts carry meaning.', [
      lesson({
        id: 'g2-ela-u1-l1',
        title: 'Syllables, prefixes, and suffixes',
        minutes: 25,
        objectives: ['Divide words into syllables.', 'Use common prefixes and suffixes to read unfamiliar words.'],
        sections: [
          section('Word parts', [
            'Every syllable has one vowel sound. Clap the syllables in “butterfly”: but-ter-fly. Dividing a long word into syllables makes it readable.',
            'A prefix goes before a base word and changes its meaning: un- (not), re- (again), pre- (before), dis- (not). A suffix goes after: -ful (full of), -less (without), -ly (in a way), -ing (ongoing). “Unhelpful” = un- + help + -ful.',
          ]),
        ],
        example: {
          prompt: 'Break “disagreement” into parts and explain the meaning.',
          steps: ['Prefix dis- means not.', 'Base word agree.', 'Suffix -ment makes it a noun meaning a state or result.', 'Disagreement = not agreeing.'],
          answer: 'dis + agree + ment.',
        },
        practice: [
          mc('The prefix “re-” means', ['not', 'again', 'before', 'without'], 1, 'Re- means again.'),
          mc('“Careless” means', ['full of care', 'without care', 'care again', 'before care'], 1, '-less means without.'),
        ],
      }),
    ], quiz('Word parts check', [
      mc('How many syllables are in “elephant”?', ['1', '2', '3', '4'], 2, 'El-e-phant has three.'),
      mc('“Preview” means to view', ['again', 'before', 'without', 'loudly'], 1, 'Pre- means before.'),
    ]), project({
      title: 'Word part sort',
      prompt: 'Collect eight words with prefixes or suffixes. Sort by word part, read each aloud, and write the meaning of each part.',
      deliverable: 'A sort with eight words and meanings.',
      guidance: ['Check that the base word is a real word.', 'Discuss words with more than one part.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u2', 'Grammar and sentences', 'Words have jobs in a sentence.', [
      lesson({
        id: 'g2-ela-u2-l1',
        title: 'Nouns, verbs, adjectives, and compound sentences',
        minutes: 25,
        objectives: ['Identify nouns, verbs, and adjectives.', 'Combine two sentences with a conjunction.'],
        sections: [
          section('Parts of a sentence', [
            'A noun names a person, place, thing, or idea. A verb shows action or a state of being. An adjective describes a noun. In “The small dog barked,” dog is the noun, barked is the verb, and small is the adjective.',
            'Two related sentences can be joined with and, but, or so to make a compound sentence: “I wanted to play, but it rained.” Use a comma before the conjunction.',
          ]),
        ],
        example: {
          prompt: 'Combine: “I finished my work. I went outside.”',
          steps: ['Choose a relationship: sequence.', 'Use so or and.', 'Add a comma.'],
          answer: 'I finished my work, so I went outside.',
        },
        practice: [
          mc('In “The tall tree swayed,” the adjective is', ['tree', 'swayed', 'tall', 'the'], 2, 'Tall describes the tree.'),
          mc('Which sentence is compound?', ['I ran.', 'I ran, and she walked.', 'Running fast.', 'The dog.'], 1, 'It joins two independent clauses.'),
        ],
      }),
    ], quiz('Grammar check', [
      mc('A verb shows', ['a person', 'an action or state of being', 'a color', 'a place'], 1, 'Verbs express action or being.'),
      mc('Which word is a noun?', ['quickly', 'happy', 'bicycle', 'jump'], 2, 'Bicycle is a thing.'),
    ]), project({
      title: 'Sentence repair',
      prompt: 'Fix five sentences with missing capitals, punctuation, or agreement. Explain each fix in one sentence.',
      deliverable: 'Five corrected sentences with explanations.',
      guidance: ['Ask the child to read aloud to catch errors.', 'Discuss subject-verb agreement simply.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u3', 'Main idea and retelling', 'A paragraph has one main idea.', [
      lesson({
        id: 'g2-ela-u3-l1',
        title: 'Main idea and supporting details',
        minutes: 25,
        objectives: ['State the main idea of a short text.', 'Identify two details that support it.'],
        sections: [
          section('Finding the main idea', [
            'The main idea is what a text is mostly about. It is often stated in a topic sentence but can be implied. Supporting details explain, prove, or illustrate the main idea.',
            'Ask: “What is this mostly about?” and “Which sentence tells me that?” A good summary includes the main idea and one or two key details, not every fact.',
          ]),
        ],
        example: {
          prompt: 'Text: “Bees do more than sting. They carry pollen from flower to flower, which helps plants make fruit. Without bees, many crops would fail.” What is the main idea?',
          steps: ['Topic: bees.', 'What about them? They help plants reproduce.', 'The main idea: bees are important pollinators.'],
          answer: 'Bees are essential pollinators for many plants and crops.',
        },
        practice: [
          mc('The main idea is', ['the first sentence always', 'what a text is mostly about', 'a small detail', 'the title only'], 1, 'It is the central point.'),
          mc('A supporting detail', ['contradicts the main idea', 'explains or proves the main idea', 'is unrelated', 'replaces the main idea'], 1, 'Details support the main point.'),
        ],
      }),
    ], quiz('Main idea check', [
      mc('A summary should include', ['every detail', 'the main idea and key details', 'only the last sentence', 'the page number'], 1, 'Summaries are selective.'),
      mc('If a text is mostly about how plants grow, the main idea is about', ['animals', 'plant growth', 'weather only', 'soil prices'], 1, 'The main idea matches the topic.'),
    ]), project({
      title: 'Main idea paragraph',
      prompt: 'Read a short article. Write the main idea in one sentence and two supporting details in complete sentences.',
      deliverable: 'Three sentences: main idea plus two details.',
      guidance: ['Ask “how do you know?” for each detail.', 'Check that details are from the text.'],
      rubric: WRITING_PROJECT,
    })),
  ],
  finalExam: exam('Grade 2 ELA final check', [
    mc('The prefix “un-” means', ['again', 'not', 'before', 'full of'], 1, 'Un- means not.'),
    mc('An adjective describes a', ['verb', 'noun', 'sentence', 'comma'], 1, 'Adjectives modify nouns.'),
    mc('The main idea is', ['a small detail', 'what a text is mostly about', 'the author’s name', 'the first word'], 1, 'It is the central point.'),
    mc('Which is a compound sentence?', ['I ran.', 'I ran, and she walked.', 'Running.', 'The dog barked loudly.'], 1, 'It joins two independent clauses.'),
  ], 30),
};

export const grade2Math: Course = {
  id: 'g2-math',
  title: 'Grade 2 Mathematics',
  subject: 'math',
  grade: 2,
  credits: 0,
  semesters: 2,
  description:
    'Place value to 1,200, addition and subtraction within 100 with regrouping, and money, time, and fractions.',
  essentialQuestions: ['How does regrouping work?', 'How do fractions describe equal parts?'],
  teks: [teks('19 TAC ch. 111, Grade 2', 'Place value to 1,200; addition and subtraction within 100; money and time; fractions; geometry; data.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Place value to 1,200', 'Each place is ten times the place to its right.', [
      lesson({
        id: 'g2-math-u1-l1',
        title: 'Hundreds, tens, and ones',
        minutes: 30,
        objectives: ['Write numbers in expanded form.', 'Compare numbers using place value.'],
        sections: [
          section('Expanded form', [
            'In 347, the 3 means 300, the 4 means 40, and the 7 means 7. Expanded form: 300 + 40 + 7. The same number in words: three hundred forty-seven.',
            'To compare, start at the highest place. 512 and 498: the hundreds digits are 5 and 4, so 512 is greater without comparing tens or ones.',
          ]),
        ],
        example: {
          prompt: 'Write 806 in expanded form and compare it with 860.',
          steps: ['806 = 800 + 0 + 6.', 'Compare hundreds: both 8.', 'Compare tens: 0 vs 6.', '860 is greater.'],
          answer: '800 + 6; 860 > 806.',
        },
        practice: [
          mc('347 in expanded form is', ['3 + 4 + 7', '300 + 40 + 7', '30 + 40 + 70', '300 + 47'], 1, 'Each digit keeps its place value.'),
          num('What is 10 more than 395?', 405, 'Add one ten, regrouping the hundred.'),
        ],
      }),
    ], quiz('Place value check', [
      mc('In 512, the 5 means', ['5', '50', '500', '5,000'], 2, 'It is in the hundreds place.'),
      mc('Which is greater, 709 or 790?', ['709', '790', 'equal', 'cannot tell'], 1, '790 has more tens.'),
    ]), project({
      title: 'Number of the day',
      prompt: 'Choose a three-digit number. Show it in base-ten blocks, expanded form, words, and a comparison with another number.',
      deliverable: 'A four-part representation.',
      guidance: ['Check regrouping with blocks.', 'Ask for the comparison reasoning.'],
      rubric: MATH_PROJECT,
    })),
    unit('u2', 'Addition and subtraction within 100', 'Regroup when a place has too many or too few.', [
      lesson({
        id: 'g2-math-u2-l1',
        title: 'Regrouping in addition and subtraction',
        minutes: 30,
        objectives: ['Add two-digit numbers with regrouping.', 'Subtract two-digit numbers with regrouping.'],
        sections: [
          section('Carrying and borrowing', [
            'For 47 + 25: add ones (7 + 5 = 12), write 2 and carry 1 ten; add tens (4 + 2 + 1 = 7). The sum is 72.',
            'For 83 − 46: you cannot take 6 from 3, so regroup one ten as ten ones (83 becomes 7 tens and 13 ones). 13 − 6 = 7; 7 − 4 = 3. The difference is 37. Check by adding: 37 + 46 = 83.',
          ]),
        ],
        example: {
          prompt: 'Solve 58 + 36.',
          steps: ['8 + 6 = 14; write 4, carry 1.', '5 + 3 + 1 = 9.', 'Sum: 94.'],
          answer: '94.',
        },
        practice: [
          num('47 + 25 = ?', 72, 'Ones: 12, carry 1; tens: 7.'),
          num('83 − 46 = ?', 37, 'Regroup and subtract; check 37 + 46 = 83.'),
        ],
      }),
    ], quiz('Regrouping check', [
      num('56 + 38 = ?', 94, 'Ones: 14, carry 1; tens: 9.'),
      num('72 − 48 = ?', 24, 'Regroup: 12 − 8 = 4; 6 − 4 = 2.'),
    ]), project({
      title: 'Grocery receipt math',
      prompt: 'Create a shopping list with five prices under $20 total. Add the prices, then find the change from $20.',
      deliverable: 'A receipt with the total and change shown.',
      guidance: ['Use real prices or reasonable ones.', 'Check addition by adding in a different order.'],
      rubric: MATH_PROJECT,
    })),
    unit('u3', 'Money, time, and fractions', 'Fractions name equal parts of a whole.', [
      lesson({
        id: 'g2-math-u3-l1',
        title: 'Coins, time to five minutes, and equal parts',
        minutes: 30,
        objectives: ['Count coins to $1.00.', 'Tell time to five minutes.', 'Name halves, thirds, and fourths.'],
        sections: [
          section('Money and time', [
            'Coin values: penny 1¢, nickel 5¢, dime 10¢, quarter 25¢. Count the largest coins first: two quarters, one dime, one nickel = 65¢.',
            'The minute hand moves 5 minutes per number. When it points to 9, 45 minutes have passed. The hour hand’s position tells which hour is current.',
          ]),
          section('Fractions', [
            'A fraction describes equal parts of a whole. Half of a shape cut into two equal parts, one third of three equal parts, one fourth of four equal parts. Unequal parts are not fractions of the whole.',
          ]),
        ],
        example: {
          prompt: 'What is 1/4 of 12?',
          steps: ['Divide 12 into 4 equal groups.', 'Each group has 3.'],
          answer: '3.',
        },
        practice: [
          num('How many cents are two quarters and one dime?', 60, '25 + 25 + 10 = 60.'),
          num('What is 1/2 of 8?', 4, 'Eight split into two equal groups is four each.'),
        ],
      }),
    ], quiz('Money and fractions check', [
      num('How many cents are three dimes and one nickel?', 35, '30 + 5 = 35.'),
      mc('A shape cut into four equal parts has parts called', ['halves', 'thirds', 'fourths', 'fifths'], 2, 'Four equal parts are fourths.'),
    ]), project({
      title: 'Pizza fractions',
      prompt: 'Draw a pizza divided into eight equal slices. Color 3/8 one color and 2/8 another. Write how many slices are uncolored.',
      deliverable: 'A labeled drawing with fractions and a sentence.',
      guidance: ['Check that slices are equal.', 'Ask what the denominator means.'],
      rubric: MATH_PROJECT,
    })),
  ],
  finalExam: exam('Grade 2 math final check', [
    num('347 + 25 = ?', 372, 'Add ones, then tens, then hundreds.'),
    num('90 − 47 = ?', 43, 'Regroup and subtract.'),
    num('How many cents are two quarters, one dime, and one nickel?', 65, '50 + 10 + 5 = 65.'),
    num('What is 1/3 of 9?', 3, 'Nine split into three equal groups.'),
  ], 30),
};

export const grade2Science: Course = {
  id: 'g2-sci',
  title: 'Grade 2 Science',
  subject: 'science',
  grade: 2,
  credits: 0,
  semesters: 2,
  description:
    'Changes in matter, forces and motion, and environments and food chains. Students plan simple investigations and record observations.',
  essentialQuestions: ['How does matter change?', 'How does energy move through a food chain?'],
  teks: [teks('19 TAC ch. 112, Grade 2', 'Matter and energy; force, motion, and energy; Earth and space; organisms and environments; investigation and reasoning.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Matter changes', 'Heating and cooling change matter without making it disappear.', [
      lesson({
        id: 'g2-sci-u1-l1',
        title: 'Physical changes and properties',
        minutes: 30,
        objectives: ['Describe physical changes such as melting, freezing, and tearing.', 'Measure mass and volume.'],
        sections: [
          section('Physical changes', [
            'A physical change alters form, shape, or state without creating a new substance. Ice melting, paper tearing, and sugar dissolving are physical changes. The matter is still water, paper, or sugar.',
            'Mass is the amount of matter, measured with a balance. Volume is the space something takes up, measured with a graduated cylinder for liquids. A change in shape does not change mass.',
          ]),
        ],
        example: {
          prompt: 'An ice cube melts in a cup. Did its mass change?',
          steps: ['The ice becomes liquid water.', 'No water leaves the sealed cup.', 'Mass stays the same.'],
          answer: 'No; the state changed but the mass did not.',
        },
        practice: [
          mc('Which is a physical change?', ['burning paper', 'melting ice', 'rusting iron', 'baking bread'], 1, 'Melting changes state only.'),
          mc('Mass is measured with a', ['ruler', 'balance', 'thermometer', 'clock'], 1, 'A balance compares mass.'),
        ],
      }),
    ], quiz('Matter check', [
      mc('Dissolving sugar in water is a', ['chemical change', 'physical change', 'new substance', 'gas'], 1, 'The sugar is still sugar.'),
      mc('Volume measures', ['mass', 'space taken up', 'temperature', 'time'], 1, 'Volume is space occupied.'),
    ]), project({
      title: 'Change detective',
      prompt: 'Test three safe changes (melting, tearing, dissolving). Record what changed and whether a new substance formed.',
      deliverable: 'A three-row table with observations.',
      guidance: ['Use safe materials.', 'Ask for evidence of a new substance.'],
      rubric: INQUIRY_PROJECT,
    })),
    unit('u2', 'Forces and motion', 'A force can start, stop, or change motion.', [
      lesson({
        id: 'g2-sci-u2-l1',
        title: 'Pushes, pulls, and patterns of motion',
        minutes: 30,
        objectives: ['Identify pushes and pulls.', 'Describe how force changes speed or direction.'],
        sections: [
          section('Force', [
            'A push moves an object away; a pull moves it closer. A stronger force changes motion more. Friction is a force that opposes sliding and can slow an object down.',
            'Objects move in patterns: straight lines, circles, back and forth, or zigzag. A ball rolling on a flat floor slows because of friction, not because it “runs out of force.”',
          ]),
        ],
        example: {
          prompt: 'Why does a rolling ball stop on carpet sooner than on tile?',
          steps: ['Carpet has more friction.', 'Friction opposes motion.', 'More friction means it slows faster.'],
          answer: 'Greater friction on carpet slows the ball sooner.',
        },
        practice: [
          mc('Friction', ['speeds objects up', 'opposes motion', 'creates gravity', 'has no effect'], 1, 'Friction resists sliding.'),
          mc('A pull moves an object', ['away from you', 'toward you', 'in a circle only', 'up only'], 1, 'A pull brings it closer.'),
        ],
      }),
    ], quiz('Forces check', [
      mc('A stronger push usually causes', ['less change in motion', 'more change in motion', 'no motion', 'more friction only'], 1, 'Force affects acceleration.'),
      mc('A ball rolling in a circle is moving', ['in a straight line', 'in a pattern', 'not at all', 'backward'], 1, 'Circular motion is a pattern.'),
    ]), project({
      title: 'Ramp investigation',
      prompt: 'Roll a toy car down ramps of two heights. Measure distance traveled three times for each and compare.',
      deliverable: 'A data table and a claim about height and distance.',
      guidance: ['Keep the car and surface the same.', 'Measure from the ramp’s end.'],
      rubric: INQUIRY_PROJECT,
    })),
    unit('u3', 'Environments and food chains', 'Living things depend on one another.', [
      lesson({
        id: 'g2-sci-u3-l1',
        title: 'Habitats and food chains',
        minutes: 30,
        objectives: ['Match organisms to habitats.', 'Trace a simple food chain.'],
        sections: [
          section('Habitats', [
            'A habitat provides food, water, shelter, and space. A pond, a forest, a desert, and a grassland are different habitats with different organisms adapted to them.',
            'A food chain shows energy flow: sun → grass → grasshopper → bird → hawk. The arrow means “is eaten by” or “energy moves to.” Removing one link affects the others.',
          ]),
        ],
        example: {
          prompt: 'Build a food chain with grass, rabbit, and fox.',
          steps: ['Start with the producer: grass.', 'Add the consumer: rabbit.', 'Add the predator: fox.', 'Arrows show energy flow.'],
          answer: 'grass → rabbit → fox.',
        },
        practice: [
          mc('A producer makes its own food using', ['sunlight', 'other animals', 'soil only', 'water only'], 0, 'Producers use sunlight.'),
          mc('In a food chain, the arrow means', ['eats', 'energy moves to', 'lives with', 'is bigger than'], 1, 'Arrows show energy flow.'),
        ],
      }),
    ], quiz('Ecosystems check', [
      mc('A habitat provides', ['only water', 'food, water, shelter, and space', 'only shelter', 'nothing'], 1, 'Habitats supply basic needs.'),
      mc('A consumer is an organism that', ['makes its own food', 'eats other organisms', 'is not alive', 'is always a plant'], 1, 'Consumers eat other organisms.'),
    ]), project({
      title: 'Habitat diorama or drawing',
      prompt: 'Choose a Texas habitat and show three organisms, their food sources, and one food chain.',
      deliverable: 'A labeled model or drawing with a food chain.',
      guidance: ['Use organisms that actually live there.', 'Label producers and consumers.'],
      rubric: INQUIRY_PROJECT,
    })),
  ],
  finalExam: exam('Grade 2 science final check', [
    mc('Melting ice is a', ['chemical change', 'physical change', 'new substance', 'gas only'], 1, 'It changes state only.'),
    mc('Friction', ['helps motion', 'opposes motion', 'creates energy', 'has no effect'], 1, 'It resists sliding.'),
    mc('A producer', ['eats animals', 'makes its own food', 'is not alive', 'is always a fungus'], 1, 'Producers make food from sunlight.'),
    mc('A habitat provides', ['only food', 'food, water, shelter, and space', 'only shelter', 'nothing'], 1, 'It supplies basic needs.'),
  ], 30),
};

export const grade2SocialStudies: Course = {
  id: 'g2-ss',
  title: 'Grade 2 Social Studies',
  subject: 'social-studies',
  grade: 2,
  credits: 0,
  semesters: 2,
  description:
    'Community government, Texas past and present, and geography and resources. Students connect local decisions to larger systems.',
  essentialQuestions: ['How do people make decisions together?', 'How has Texas changed over time?'],
  teks: [teks('19 TAC ch. 113, Grade 2', 'Community and government; historical figures and events; geography; economics; citizenship.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Government and community', 'Communities create governments to make rules and provide services.', [
      lesson({
        id: 'g2-ss-u1-l1',
        title: 'Local government and public services',
        minutes: 30,
        objectives: ['Name local government services.', 'Explain why people pay taxes.'],
        sections: [
          section('Who provides what', [
            'Local governments provide police and fire protection, roads, parks, water, and trash collection. School districts provide public schools. These services are paid for mainly by taxes, including property and sales taxes.',
            'People influence local decisions by voting, attending meetings, speaking during public comment, and contacting elected officials. Local elections often have low turnout, so individual voices carry weight.',
          ]),
        ],
        example: {
          prompt: 'A pothole damages cars on your street. Who should you contact?',
          steps: ['Street maintenance is usually a city service.', 'Report the location to the city.', 'Follow up in writing if it is not repaired.'],
          answer: 'The city public works or streets department.',
        },
        practice: [
          mc('Public schools are provided by', ['school districts', 'the federal army', 'private clubs', 'the state Supreme Court'], 0, 'School districts operate public schools.'),
          mc('Taxes pay for', ['only private goods', 'public services', 'nothing', 'only salaries'], 1, 'Taxes fund public services.'),
        ],
      }),
    ], quiz('Government check', [
      mc('Which is a local government service?', ['trash collection', 'printing money', 'declaring war', 'immigration'], 0, 'Trash collection is local.'),
      mc('Speaking at a city council meeting is a way to', ['ignore government', 'participate in local decisions', 'avoid taxes', 'vote twice'], 1, 'Public comment is participation.'),
    ]), project({
      title: 'Community services map',
      prompt: 'Map five public services in your community and label who provides each.',
      deliverable: 'A labeled map with a provider for each service.',
      guidance: ['Distinguish city, county, and school district services.', 'Verify with a local government website.'],
      rubric: CREATIVE_PROJECT,
    })),
    unit('u2', 'Texas past and present', 'Texas has changed through migration, industry, and technology.', [
      lesson({
        id: 'g2-ss-u2-l1',
        title: 'Texas then and now',
        minutes: 30,
        objectives: ['Compare life in early Texas with life today.', 'Identify one cause of change.'],
        sections: [
          section('Change over time', [
            'Early Texas communities depended on farming, ranching, and trade. Travel was slow, and many goods were made at home. Today Texas has large cities, technology companies, energy production, and international trade.',
            'Changes have causes: railroads moved goods faster, air conditioning made hot cities more livable, and new industries drew migrants. Growth also brings challenges such as traffic, housing costs, and water supply.',
          ]),
        ],
        example: {
          prompt: 'How did railroads change Texas?',
          steps: ['They moved people and goods faster.', 'Towns grew along rail lines.', 'Markets expanded beyond local areas.'],
          answer: 'Railroads connected Texas to national markets and sped growth.',
        },
        practice: [
          mc('Early Texas communities depended heavily on', ['farming and ranching', 'space travel', 'software', 'film'], 0, 'Agriculture dominated early settlement.'),
          mc('Growth brings challenges such as', ['traffic and water supply', 'fewer people', 'less trade', 'no change'], 0, 'Growth strains infrastructure.'),
        ],
      }),
    ], quiz('Texas history check', [
      mc('Railroads helped Texas by', ['slowing trade', 'moving goods and people faster', 'ending farming', 'reducing towns'], 1, 'They accelerated transport.'),
      mc('A cause of Texas city growth was', ['air conditioning and new industries', 'fewer jobs', 'closed ports', 'declining trade'], 0, 'Comfort and jobs attracted residents.'),
    ]), project({
      title: 'Then and now interview',
      prompt: 'Interview an older adult about how daily life has changed. Write four comparisons (school, work, travel, communication).',
      deliverable: 'Four labeled comparisons with the interviewee’s name and date.',
      guidance: ['Ask for specific examples.', 'Separate memory from fact where possible.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u3', 'Geography and resources', 'Resources shape what people can produce.', [
      lesson({
        id: 'g2-ss-u3-l1',
        title: 'Texas regions and resources',
        minutes: 30,
        objectives: ['Name Texas regions and one resource in each.', 'Explain how resources affect jobs.'],
        sections: [
          section('Regions and resources', [
            'Texas has diverse regions: the Gulf Coast, East Texas piney woods, the Hill Country, the Panhandle plains, and the western mountains and desert. Climate and land shape what can be grown and built.',
            'Resources include oil and natural gas, wind, cotton, cattle, and timber. Regions with oil and gas have related jobs; coastal regions support shipping and fishing; the Panhandle supports agriculture and wind energy.',
          ]),
        ],
        example: {
          prompt: 'Why is wind energy common in West Texas?',
          steps: ['The region has strong, steady winds.', 'Turbines convert wind to electricity.', 'The resource creates construction and maintenance jobs.'],
          answer: 'Abundant wind makes electricity generation practical and creates jobs.',
        },
        practice: [
          mc('Which is a Texas natural resource?', ['oil', 'plastic toys', 'computers', 'textbooks'], 0, 'Oil is a natural resource.'),
          mc('The Gulf Coast region supports', ['shipping and fishing', 'skiing', 'glaciers', 'rainforests'], 0, 'Its location supports maritime work.'),
        ],
      }),
    ], quiz('Geography check', [
      mc('Resources affect', ['only weather', 'what people can produce', 'nothing', 'only taxes'], 1, 'Resources shape production.'),
      mc('The Panhandle is known for', ['agriculture and wind', 'deep ocean', 'tropical reefs', 'glaciers'], 0, 'It supports farming and wind energy.'),
    ]), project({
      title: 'Texas regions booklet',
      prompt: 'Make a four-page booklet, one page per region, with a drawing, one resource, and one job connected to it.',
      deliverable: 'A four-page labeled booklet.',
      guidance: ['Use a Texas map for reference.', 'Connect resource to job explicitly.'],
      rubric: CREATIVE_PROJECT,
    })),
  ],
  finalExam: exam('Grade 2 social studies final check', [
    mc('A local government service is', ['fire protection', 'printing money', 'declaring war', 'immigration'], 0, 'Fire protection is local.'),
    mc('Taxes pay for', ['private toys', 'public services', 'nothing', 'only profits'], 1, 'Taxes fund public services.'),
    mc('A Texas natural resource is', ['oil', 'plastic', 'glass', 'paper'], 0, 'Oil occurs naturally.'),
    mc('Growth in Texas cities has been caused partly by', ['air conditioning and new industries', 'fewer jobs', 'closed ports', 'declining trade'], 0, 'Comfort and opportunity attracted residents.'),
  ], 30),
};
