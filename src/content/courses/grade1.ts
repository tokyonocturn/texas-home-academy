import type { Course } from '../../types';
import { ELEMENTARY_WEIGHTS } from '../weights';
import { CREATIVE_PROJECT, INQUIRY_PROJECT, MATH_PROJECT, WRITING_PROJECT } from '../rubrics';
import { exam, lesson, mc, num, project, quiz, section, teks, unit } from '../builders';

/** Grade 1. Alignment: 19 TAC chapters 110-117. */

export const grade1Ela: Course = {
  id: 'g1-ela',
  title: 'Grade 1 English Language Arts',
  subject: 'ela',
  grade: 1,
  credits: 0,
  semesters: 2,
  description:
    'Digraphs and blends, complete sentences, and story elements. Students decode more words, write clear sentences, and retell stories with detail.',
  essentialQuestions: ['How do letter patterns help me read new words?', 'What makes a sentence complete?'],
  teks: [teks('19 TAC ch. 110, Grade 1', 'Phonological and phonemic awareness; phonics; fluency; vocabulary; comprehension; composition; conventions.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Sounds and spelling', 'Two letters can make one sound.', [
      lesson({
        id: 'g1-ela-u1-l1',
        title: 'Digraphs and blends',
        minutes: 25,
        objectives: ['Read words with sh, ch, th, and wh.', 'Read words with consonant blends such as st and gr.'],
        sections: [
          section('Two kinds of letter teams', [
            'A digraph is two letters that make one sound: sh in ship, ch in chair, th in thumb, wh in wheel. You do not say each letter separately. A blend is two or three consonants you can still hear individually: st in stop, gr in grass, spl in splash.',
            'When you meet a new word, look for the letter team first, say its sound, then read the rest: sh-i-p. Reread the whole sentence to check that the word makes sense.',
          ]),
        ],
        example: {
          prompt: 'Read “champ” by parts.',
          steps: ['Find the digraph: ch.', 'Say /ch/.', 'Add the rest: -amp.', 'Blend: champ.', 'Check the sentence for meaning.'],
          answer: 'ch + amp = champ.',
        },
        keyTerms: [
          { term: 'Digraph', definition: 'Two letters that make one sound, such as sh.' },
          { term: 'Blend', definition: 'Two or more consonants whose sounds are still heard, such as st.' },
        ],
        practice: [
          mc('Which word begins with a digraph?', ['stop', 'ship', 'grass', 'plan'], 1, 'Ship begins with sh.'),
          mc('Which word begins with a blend?', ['chair', 'thumb', 'stop', 'when'], 2, 'Stop begins with st.'),
        ],
      }),
    ], quiz('Sounds check', [
      mc('The letters “th” in “thumb” make', ['two sounds', 'one sound', 'no sound', 'three sounds'], 1, 'Th is a digraph.'),
      mc('Which word has a blend?', ['fish', 'grab', 'this', 'when'], 1, 'Grab begins with gr.'),
    ]), project({
      title: 'Word sort',
      prompt: 'Sort ten words into two groups: digraphs and blends. Read each word aloud and explain your sort.',
      deliverable: 'A two-column sort with an adult’s initials.',
      guidance: ['Ask the child to say each sound.', 'Discuss any word that could fit both patterns.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u2', 'Sentences', 'A sentence tells a complete thought.', [
      lesson({
        id: 'g1-ela-u2-l1',
        title: 'Capital letters, end marks, and complete thoughts',
        minutes: 25,
        objectives: ['Begin sentences with a capital letter.', 'End sentences with a period, question mark, or exclamation point.'],
        sections: [
          section('Three questions to test a sentence', [
            'Does it have a who or what? Does it tell something about that? Does it sound complete? “The dog barked” passes. “Barked loudly” does not, because we do not know who barked.',
            'Every sentence starts with a capital letter. A statement ends with a period, a question with a question mark, and an exclamation with an exclamation point. Names of people and places also begin with capital letters.',
          ]),
        ],
        example: {
          prompt: 'Fix: “the cat sat on the mat”',
          steps: ['Capitalize the first word: The.', 'Check the ending: it is a statement, so add a period.'],
          answer: 'The cat sat on the mat.',
        },
        practice: [
          mc('Which is a complete sentence?', ['Ran fast.', 'The boy ran fast.', 'Fast the.', 'Running.'], 1, 'It has a subject and a predicate.'),
          mc('Which end mark fits “Where is my coat”', ['.', '?', '!', ','], 1, 'It is a question.'),
        ],
      }),
    ], quiz('Sentence check', [
      mc('Every sentence begins with', ['a number', 'a capital letter', 'a comma', 'a question mark'], 1, 'Sentences begin with capitals.'),
      mc('Which sentence is correct?', ['i like dogs.', 'I like dogs.', 'I like dogs', 'i Like Dogs'], 1, 'Capital I and a period are correct.'),
    ]), project({
      title: 'Five-sentence story',
      prompt: 'Write five sentences about something you did. Check capitals and end marks, then read it aloud.',
      deliverable: 'Five sentences with corrected conventions.',
      guidance: ['Ask the child to find capitals and end marks.', 'Praise specific details.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u3', 'Story elements', 'Stories have characters, a setting, and events in order.', [
      lesson({
        id: 'g1-ela-u3-l1',
        title: 'Character, setting, and retelling',
        minutes: 25,
        objectives: ['Identify characters and setting.', 'Retell events in order with a beginning, middle, and end.'],
        sections: [
          section('What to notice', [
            'Characters are who the story is about. The setting is where and when it happens. The plot is what happens, in order. A problem and a solution often hold the plot together.',
            'A strong retell names the characters, the setting, the problem, and how it was solved — in your own words, not copied from the book.',
          ]),
        ],
        example: {
          prompt: 'Retell a story about a lost dog.',
          steps: ['Characters: Mia and her dog, Pepper.', 'Setting: a park.', 'Problem: Pepper runs off.', 'Solution: Mia calls and Pepper returns.'],
          answer: 'A four-part retell in order.',
        },
        practice: [
          mc('The setting of a story is', ['who is in it', 'where and when it happens', 'the problem', 'the title'], 1, 'Setting is place and time.'),
          mc('A retell should be', ['copied word for word', 'in your own words and in order', 'only the ending', 'a list of words'], 1, 'A retell uses your own words.'),
        ],
      }),
    ], quiz('Story check', [
      mc('The problem in a story is part of the', ['setting', 'plot', 'title', 'cover'], 1, 'The plot includes the problem.'),
      mc('Which is a character?', ['a park', 'Mia', 'a sunny day', 'a book'], 1, 'Mia is a person in the story.'),
    ]), project({
      title: 'Story map',
      prompt: 'Draw and label a story map: characters, setting, problem, and solution. Then retell the story aloud.',
      deliverable: 'A labeled story map with an adult’s notes.',
      guidance: ['Prompt for details from the text.', 'Ask “what happened first?”'],
      rubric: CREATIVE_PROJECT,
    })),
  ],
  finalExam: exam('Grade 1 ELA final check', [
    mc('Which word begins with the digraph “sh”?', ['sun', 'shoe', 'star', 'tree'], 1, 'Shoe begins with sh.'),
    mc('Which sentence is complete?', ['Jumped high.', 'The frog jumped high.', 'High the.', 'Jumping.'], 1, 'It has a subject and a predicate.'),
    mc('The setting of a story is', ['who is in it', 'where and when it happens', 'the problem', 'the ending'], 1, 'Setting is place and time.'),
    mc('A question ends with', ['.', '?', '!', ','], 1, 'Questions end with question marks.'),
  ], 25),
};

export const grade1Math: Course = {
  id: 'g1-math',
  title: 'Grade 1 Mathematics',
  subject: 'math',
  grade: 1,
  credits: 0,
  semesters: 2,
  description:
    'Place value to 120, addition and subtraction within 20, and measurement and time. Students use models and explain their thinking.',
  essentialQuestions: ['How does place value help me add and subtract?', 'How do I measure and tell time?'],
  teks: [teks('19 TAC ch. 111, Grade 1', 'Number and place value to 120; addition and subtraction within 20; measurement; time; geometry; data.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Place value to 120', 'Ten ones make one ten.', [
      lesson({
        id: 'g1-math-u1-l1',
        title: 'Tens and ones',
        minutes: 25,
        objectives: ['Break a two-digit number into tens and ones.', 'Find 10 more or 10 less than a number.'],
        sections: [
          section('Bundles of ten', [
            'In 47, the 4 means 4 tens (40) and the 7 means 7 ones. Bundling ten ones into a ten makes counting faster and explains why the digits have different values.',
            'Adding 10 changes the tens digit, not the ones digit: 34 + 10 = 44. Subtracting 10 does the reverse: 44 − 10 = 34.',
          ]),
        ],
        example: {
          prompt: 'What is 10 more than 86? What is 10 less?',
          steps: ['Tens digit of 86 is 8.', 'Add one ten: 96.', 'For 10 less, subtract one ten: 76.'],
          answer: '96 and 76.',
        },
        practice: [
          mc('In 63, the 6 means', ['6 ones', '6 tens', '6 hundreds', '60 tens'], 1, 'The 6 is in the tens place.'),
          num('What is 10 more than 45?', 55, 'Add one ten: 55.'),
        ],
      }),
    ], quiz('Place value check', [
      mc('In 29, the 9 is in the', ['tens place', 'ones place', 'hundreds place', 'thousands place'], 1, 'The 9 is the ones digit.'),
      num('What is 10 less than 72?', 62, 'Subtract one ten.'),
    ]), project({
      title: 'Tens and ones with objects',
      prompt: 'Build three numbers with straws or blocks, bundled in tens and ones. Draw each and write the number.',
      deliverable: 'Three labeled drawings.',
      guidance: ['Bundle groups of ten physically.', 'Ask “how many tens? how many ones?”'],
      rubric: MATH_PROJECT,
    })),
    unit('u2', 'Addition and subtraction within 20', 'Making ten makes adding easier.', [
      lesson({
        id: 'g1-math-u2-l1',
        title: 'Make ten and use doubles',
        minutes: 25,
        objectives: ['Use make-ten to add within 20.', 'Use doubles facts to find near doubles.'],
        sections: [
          section('Make ten', [
            'To add 8 + 5, make a ten from the 8: 8 + 2 = 10. Take the 2 from the 5, leaving 3. Then 10 + 3 = 13.',
            'Doubles are easy to remember: 6 + 6 = 12. A near double is one more or one less: 6 + 7 is 6 + 6 + 1 = 13. These strategies build fluency with understanding, not just memorization.',
          ]),
        ],
        example: {
          prompt: 'Use make-ten for 9 + 7.',
          steps: ['9 + 1 = 10.', 'Take 1 from 7, leaving 6.', '10 + 6 = 16.'],
          answer: '16.',
        },
        practice: [
          num('8 + 5 = ?', 13, 'Make ten: 8 + 2 + 3 = 13.'),
          num('15 − 7 = ?', 8, '15 − 5 − 2 = 8, or count up from 7 to 15.'),
        ],
      }),
    ], quiz('Add and subtract check', [
      num('9 + 6 = ?', 15, '9 + 1 + 5 = 15.'),
      num('13 − 6 = ?', 7, '13 − 3 − 3 = 7.'),
    ]), project({
      title: 'Fact family house',
      prompt: 'Choose a fact family (for example, 4, 5, 9) and write four number sentences that use those three numbers. Draw a house with the numbers on the roof.',
      deliverable: 'A fact-family house with four sentences.',
      guidance: ['Check that all three numbers are used.', 'Ask how the sentences relate.'],
      rubric: MATH_PROJECT,
    })),
    unit('u3', 'Measurement and time', 'We compare and measure with units.', [
      lesson({
        id: 'g1-math-u3-l1',
        title: 'Measuring length and telling time',
        minutes: 25,
        objectives: ['Measure with nonstandard and standard units.', 'Tell time to the hour and half hour.'],
        sections: [
          section('Length and time', [
            'Measure from end to end with no gaps or overlaps. A pencil might be 7 paper clips long or 12 centimeters long. Standard units let different people compare results.',
            'On a clock, the short hand shows the hour and the long hand shows the minutes. At half past three, the short hand is between 3 and 4 and the long hand points to 6: 3:30.',
          ]),
        ],
        example: {
          prompt: 'The long hand points to 6 and the short hand is between 2 and 3. What time is it?',
          steps: ['Long hand at 6 means 30 minutes.', 'Short hand past 2 means the hour is 2.', 'Time: 2:30.'],
          answer: '2:30.',
        },
        practice: [
          num('How many minutes are in half an hour?', 30, 'Half of 60 is 30.'),
          mc('The short hand on a clock shows the', ['minutes', 'hour', 'seconds', 'day'], 1, 'The short hand is the hour hand.'),
        ],
      }),
    ], quiz('Measurement check', [
      mc('When measuring, you should', ['leave gaps', 'overlap', 'start at one end and go to the other', 'guess'], 2, 'Measure end to end with no gaps.'),
      num('What time is it when the long hand points to 12 and the short hand points to 4? Write the hour only.', 4, 'The time is 4:00.'),
    ]), project({
      title: 'Measure my desk',
      prompt: 'Measure your desk with two different units (for example, paper clips and centimeters). Record both and explain why the numbers differ.',
      deliverable: 'A measurement table and two sentences.',
      guidance: ['Use consistent units.', 'Discuss why a smaller unit gives a larger number.'],
      rubric: MATH_PROJECT,
    })),
  ],
  finalExam: exam('Grade 1 math final check', [
    num('What is 10 more than 34?', 44, 'Add one ten.'),
    num('8 + 7 = ?', 15, '8 + 2 + 5 = 15.'),
    num('14 − 9 = ?', 5, 'Count up from 9 to 14.'),
    mc('In 58, the 5 means', ['5 ones', '5 tens', '5 hundreds', '58 tens'], 1, 'It is the tens digit.'),
  ], 25),
};

export const grade1Science: Course = {
  id: 'g1-sci',
  title: 'Grade 1 Science',
  subject: 'science',
  grade: 1,
  credits: 0,
  semesters: 2,
  description:
    'Solids, liquids, and gases; the needs and life cycles of plants and animals; and patterns in weather and the sky.',
  essentialQuestions: ['How can matter change?', 'What patterns can we observe in living things and the sky?'],
  teks: [teks('19 TAC ch. 112, Grade 1', 'Matter and energy; force and motion; Earth and space; organisms and environments; scientific investigation.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Matter', 'Matter takes up space and can be described.', [
      lesson({
        id: 'g1-sci-u1-l1',
        title: 'Solids, liquids, and gases',
        minutes: 25,
        objectives: ['Classify matter as solid, liquid, or gas.', 'Describe properties of each state.'],
        sections: [
          section('Three states', [
            'A solid keeps its shape (a block). A liquid takes the shape of its container but keeps its volume (water). A gas fills its container and can spread out (air).',
            'Matter can change state with heating or cooling. Ice (solid water) melts to liquid water when warmed; water freezes to ice when cooled. The amount of matter stays the same even when the state changes.',
          ]),
        ],
        example: {
          prompt: 'Is steam a solid, liquid, or gas?',
          steps: ['Observe that it spreads and fills space.', 'It is water vapor.', 'Water vapor is a gas.'],
          answer: 'A gas.',
        },
        practice: [
          mc('Which keeps its own shape?', ['water', 'air', 'a block', 'milk'], 2, 'A solid keeps its shape.'),
          mc('Ice melting is a change of', ['shape only', 'state', 'color', 'weight'], 1, 'It changes from solid to liquid.'),
        ],
      }),
    ], quiz('Matter check', [
      mc('A liquid', ['keeps its shape', 'takes the shape of its container', 'has no volume', 'is always invisible'], 1, 'Liquids take the container’s shape.'),
      mc('Water vapor is a', ['solid', 'liquid', 'gas', 'mixture'], 2, 'Vapor is a gas.'),
    ]), project({
      title: 'States of matter hunt',
      prompt: 'Find two solids, two liquids, and one gas at home. Draw and label each, and explain how you know.',
      deliverable: 'Five labeled examples with explanations.',
      guidance: ['Discuss how to observe a gas safely.', 'Ask for evidence, not guesses.'],
      rubric: INQUIRY_PROJECT,
    })),
    unit('u2', 'Plants and animals', 'Living things grow and change in a cycle.', [
      lesson({
        id: 'g1-sci-u2-l1',
        title: 'Needs and life cycles',
        minutes: 25,
        objectives: ['Name the basic needs of plants and animals.', 'Sequence the stages of a plant life cycle.'],
        sections: [
          section('Needs and stages', [
            'Plants need light, water, air, and nutrients. Animals need food, water, air, and shelter. Young living things depend on adults for a time.',
            'A plant life cycle: seed, sprout, young plant, mature plant with flowers, then new seeds. A butterfly life cycle: egg, larva (caterpillar), pupa, adult. The stages repeat.',
          ]),
        ],
        example: {
          prompt: 'Put these in order: adult plant, seed, sprout, young plant.',
          steps: ['Start with the seed.', 'Then the sprout.', 'Then the young plant.', 'Then the adult plant.'],
          answer: 'Seed → sprout → young plant → adult plant.',
        },
        practice: [
          mc('Which is a need of plants?', ['toys', 'light', 'music', 'paint'], 1, 'Plants need light.'),
          mc('The first stage of a butterfly life cycle is the', ['adult', 'egg', 'pupa', 'larva'], 1, 'It begins with an egg.'),
        ],
      }),
    ], quiz('Living things check', [
      mc('Animals need', ['only water', 'food, water, air, and shelter', 'only shelter', 'nothing'], 1, 'Those are basic needs.'),
      mc('The caterpillar stage is the', ['egg', 'larva', 'pupa', 'adult'], 1, 'A caterpillar is a larva.'),
    ]), project({
      title: 'Life cycle diagram',
      prompt: 'Draw the life cycle of a plant or butterfly with four labeled stages and arrows.',
      deliverable: 'A labeled cycle diagram.',
      guidance: ['Check the order of stages.', 'Ask what changes at each stage.'],
      rubric: INQUIRY_PROJECT,
    })),
    unit('u3', 'Weather and sky', 'Patterns in the sky repeat.', [
      lesson({
        id: 'g1-sci-u3-l1',
        title: 'Weather patterns and the sun and moon',
        minutes: 25,
        objectives: ['Describe weather patterns over days.', 'Explain that the sun gives light and heat and the moon reflects light.'],
        sections: [
          section('Patterns', [
            'Weather changes day to day, but seasons follow a yearly pattern. In Texas, summer is usually hotter and winter cooler. Measuring temperature and rainfall each day reveals patterns.',
            'The sun gives Earth light and heat. The moon does not make its own light; it reflects sunlight. The moon’s shape appears to change over about a month because we see different parts of its sunlit side.',
          ]),
        ],
        example: {
          prompt: 'Why does the moon seem to change shape?',
          steps: ['The moon is always a sphere.', 'Sunlight lights one half.', 'As the moon orbits Earth, we see different amounts of the lit side.'],
          answer: 'We see different portions of its sunlit half.',
        },
        practice: [
          mc('The sun gives Earth', ['light and heat', 'only light', 'only water', 'nothing'], 0, 'It provides light and heat.'),
          mc('The moon shines because it', ['makes light', 'reflects sunlight', 'burns', 'is painted'], 1, 'It reflects sunlight.'),
        ],
      }),
    ], quiz('Sky check', [
      mc('Seasons are a', ['daily change', 'yearly pattern', 'one-time event', 'kind of cloud'], 1, 'They repeat yearly.'),
      mc('The moon’s apparent shape changes over about', ['a day', 'a week', 'a month', 'a year'], 2, 'The cycle is about a month.'),
    ]), project({
      title: 'Moon and weather log',
      prompt: 'Record the moon’s shape and the weather for ten nights. Draw what you see and note one pattern.',
      deliverable: 'A ten-day log with drawings and a pattern statement.',
      guidance: ['Observe at about the same time.', 'Note clouds when the moon is hidden.'],
      rubric: INQUIRY_PROJECT,
    })),
  ],
  finalExam: exam('Grade 1 science final check', [
    mc('Which is a gas?', ['ice', 'water', 'air', 'rock'], 2, 'Air is a gas.'),
    mc('Plants need', ['light and water', 'only soil', 'only air', 'nothing'], 0, 'Light and water are needs.'),
    mc('The caterpillar is the', ['egg', 'larva', 'pupa', 'adult'], 1, 'It is the larval stage.'),
    mc('The moon shines because it', ['makes light', 'reflects sunlight', 'burns', 'is hot'], 1, 'It reflects sunlight.'),
  ], 25),
};

export const grade1SocialStudies: Course = {
  id: 'g1-ss',
  title: 'Grade 1 Social Studies',
  subject: 'social-studies',
  grade: 1,
  credits: 0,
  semesters: 2,
  description:
    'Families and communities, Texas symbols and leaders, and maps, goods, and services. Builds the vocabulary of citizenship and economics.',
  essentialQuestions: ['What holds a community together?', 'How do people meet their needs?'],
  teks: [teks('19 TAC ch. 113, Grade 1', 'Family and community; rules and government; Texas symbols and figures; maps and environment; goods and services.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Families and communities', 'Communities are made of people with different roles.', [
      lesson({
        id: 'g1-ss-u1-l1',
        title: 'Families, traditions, and community roles',
        minutes: 25,
        objectives: ['Describe how families differ and share traditions.', 'Explain how community members depend on one another.'],
        sections: [
          section('Many kinds of families', [
            'Families can be large or small, and they can include parents, grandparents, siblings, foster families, or guardians. Traditions — such as a holiday meal, a bedtime story, or a weekly call — help families remember who they are.',
            'Communities depend on cooperation. A grocery store needs farmers, truck drivers, and clerks. When one part of the chain stops, everyone notices.',
          ]),
        ],
        example: {
          prompt: 'How does a grocery store depend on a farm?',
          steps: ['The farm grows food.', 'Trucks move it.', 'The store sells it.', 'Without the farm, the store has nothing to sell.'],
          answer: 'The store’s supply begins with the farm.',
        },
        practice: [
          mc('A tradition is', ['a law', 'something a group repeats and values', 'a kind of map', 'a tax'], 1, 'Traditions are repeated practices.'),
          mc('People in a community', ['never need each other', 'depend on one another', 'all do the same job', 'live alone'], 1, 'Communities involve interdependence.'),
        ],
      }),
    ], quiz('Community check', [
      mc('Families can be', ['only one size', 'different sizes and kinds', 'only two people', 'the same everywhere'], 1, 'Families vary.'),
      mc('Cooperation means', ['working against each other', 'working together', 'ignoring others', 'competing always'], 1, 'It means working together.'),
    ]), project({
      title: 'Family and community interview',
      prompt: 'Interview an adult about one family tradition and one community job. Write or dictate three sentences about what you learned.',
      deliverable: 'Three sentences with the interviewee’s name and date.',
      guidance: ['Prepare two questions in advance.', 'Record answers in the interviewee’s words where possible.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u2', 'Texas symbols and leaders', 'Symbols and leaders represent a state.', [
      lesson({
        id: 'g1-ss-u2-l1',
        title: 'Texas symbols and important figures',
        minutes: 25,
        objectives: ['Identify Texas symbols.', 'Name one historical figure and one contribution.'],
        sections: [
          section('Symbols of Texas', [
            'Texas symbols include the Lone Star flag, the mockingbird (state bird), the bluebonnet (state flower), and the pecan tree (state tree). A symbol stands for the state and its history.',
            'Historical figures include Sam Houston, who was president of the Republic of Texas and later governor, and Barbara Jordan, a Texan who served in Congress and was known for her speeches on the Constitution.',
          ]),
        ],
        example: {
          prompt: 'Match a symbol to its meaning.',
          steps: ['Lone Star flag → Texas.', 'Bluebonnet → state flower.', 'Mockingbird → state bird.'],
          answer: 'Each symbol represents Texas in a specific way.',
        },
        practice: [
          mc('The Texas state flower is the', ['rose', 'bluebonnet', 'sunflower', 'daisy'], 1, 'The bluebonnet is the state flower.'),
          mc('Sam Houston was', ['a president of the Republic of Texas', 'a king', 'an inventor of the telephone', 'a French general'], 0, 'He led the Republic of Texas.'),
        ],
      }),
    ], quiz('Texas check', [
      mc('The Texas state tree is the', ['oak', 'pecan', 'pine', 'maple'], 1, 'The pecan is the state tree.'),
      mc('A symbol is something that', ['has no meaning', 'stands for something else', 'is always a flag', 'is a law'], 1, 'Symbols represent something.'),
    ]), project({
      title: 'Texas symbol poster',
      prompt: 'Choose three Texas symbols and make a poster with a drawing and one fact about each.',
      deliverable: 'A poster with three labeled symbols and facts.',
      guidance: ['Verify facts with an official Texas source.', 'Label each symbol.'],
      rubric: CREATIVE_PROJECT,
    })),
    unit('u3', 'Maps, goods, and services', 'People use maps and trade to meet needs.', [
      lesson({
        id: 'g1-ss-u3-l1',
        title: 'Maps and the difference between goods and services',
        minutes: 25,
        objectives: ['Use a map key and compass directions.', 'Classify goods and services.'],
        sections: [
          section('Maps and trade', [
            'A map shows places from above and uses a key for symbols. North, south, east, and west help you describe location and movement.',
            'A good is something you can touch, such as bread or shoes. A service is work someone does for you, such as a haircut or a bus ride. People earn money by providing goods and services and spend it on needs and wants.',
          ]),
        ],
        example: {
          prompt: 'Is a dentist visit a good or a service?',
          steps: ['Can you hold it? No.', 'Is it work done for you? Yes.', 'It is a service.'],
          answer: 'A service.',
        },
        practice: [
          mc('Which is a good?', ['a haircut', 'a loaf of bread', 'a bus ride', 'a doctor visit'], 1, 'Bread is a physical item.'),
          mc('A map key explains', ['the weather', 'symbols', 'prices', 'the time'], 1, 'Keys explain symbols.'),
        ],
      }),
    ], quiz('Goods and services check', [
      mc('Which is a service?', ['shoes', 'bread', 'a car wash', 'a book'], 2, 'A car wash is work done for you.'),
      mc('North, south, east, and west are', ['colors', 'directions', 'shapes', 'numbers'], 1, 'They are compass directions.'),
    ]), project({
      title: 'Neighborhood map',
      prompt: 'Draw a map of your neighborhood with a key, a compass rose, and three labeled places.',
      deliverable: 'A labeled map with key and compass rose.',
      guidance: ['Walk or recall the route.', 'Use symbols consistently.'],
      rubric: CREATIVE_PROJECT,
    })),
  ],
  finalExam: exam('Grade 1 social studies final check', [
    mc('A good is something you', ['do for others', 'can touch', 'cannot buy', 'only borrow'], 1, 'Goods are physical items.'),
    mc('The Texas state flower is the', ['rose', 'bluebonnet', 'lily', 'tulip'], 1, 'The bluebonnet is the state flower.'),
    mc('A map key explains', ['the weather', 'symbols on the map', 'the time', 'the price'], 1, 'Keys explain symbols.'),
    mc('A community depends on', ['no one', 'cooperation', 'isolation', 'luck'], 1, 'Interdependence and cooperation sustain communities.'),
  ], 25),
};
