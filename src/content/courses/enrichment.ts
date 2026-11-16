import type { Course } from '../../types';
import { ELEMENTARY_WEIGHTS, MIDDLE_WEIGHTS } from '../weights';
import { CREATIVE_PROJECT, INQUIRY_PROJECT } from '../rubrics';
import { exam, lesson, mc, num, project, quiz, section, teks, unit } from '../builders';

/**
 * Multi-grade enrichment courses.
 *
 * Texas requires fine arts, health, physical education, technology
 * applications, and (to the extent possible) languages other than English in
 * every elementary and middle grade (19 TAC §§74.2-74.3). Rather than duplicate
 * near-identical courses 13 times, these are banded courses a family can repeat
 * with increasing independence; the tag records the band.
 */

const K5 = ['band:K-5'];
const M68 = ['band:6-8'];

export const elementaryFineArts: Course = {
  id: 'elem-fine-arts',
  title: 'Elementary Fine Arts (K–5)',
  subject: 'fine-arts',
  // Banded K–5 course: measured at grade 5 so the depth band is the top of its range.
  grade: 5,
  credits: 0,
  semesters: 2,
  description:
    'A banded elementary fine arts course covering the elements of visual art and music, creating, performing, and responding. Families repeat it across grades with increasing independence.',
  essentialQuestions: ['What makes a work of art or music effective?', 'How do I describe what I notice?'],
  teks: [teks('19 TAC ch. 117, elementary art and music', 'Perception; creative expression; historical and cultural relevance; critical evaluation and response.')],
  weights: ELEMENTARY_WEIGHTS,
  tags: K5,
  units: [
    unit('u1', 'Elements of art and music', 'Line, color, rhythm, and pitch are the building blocks.', [
      lesson({
        id: 'efa-u1-l1',
        title: 'Looking and listening',
        minutes: 25,
        objectives: ['Name the elements of art.', 'Identify fast/slow and high/low in music.'],
        sections: [
          section('What to notice', [
            'In visual art, look for line, shape, color, texture, and space. In music, listen for rhythm (the pattern of beats), tempo (fast or slow), pitch (high or low), and dynamics (loud or soft).',
            'Artists and composers choose these elements to create a feeling. A slow tempo and low pitch often sound serious; bright colors and thick lines often feel energetic.',
          ]),
        ],
        example: {
          prompt: 'Describe a painting using two elements and one feeling.',
          steps: ['Choose elements: color and line.', 'Describe: warm reds, thick curving lines.', 'Name the feeling: energetic and warm.'],
          answer: 'A description that connects element to effect.',
        },
        practice: [
          mc('Tempo describes', ['high or low', 'fast or slow', 'loud or soft', 'color'], 1, 'Tempo is speed.'),
          mc('Which is an element of art?', ['rhythm', 'texture', 'tempo', 'pitch'], 1, 'Texture is an element of art.'),
        ],
      }),
    ], quiz('Elements check', [
      mc('Pitch describes', ['fast or slow', 'high or low', 'loud or soft', 'length'], 1, 'Pitch is high or low.'),
      mc('A thick, curving line often feels', ['still', 'energetic', 'silent', 'cold'], 1, 'Line quality suggests energy.'),
    ]), project({
      title: 'See and hear',
      prompt: 'Choose a artwork and a piece of music. Describe two elements of each and one feeling they create.',
      deliverable: 'A drawing or short written comparison.',
      guidance: ['Use element vocabulary.', 'Connect choice to feeling.'],
      rubric: CREATIVE_PROJECT,
    })),
    unit('u2', 'Creating and responding', 'Making and reflecting are both part of art.', [
      lesson({
        id: 'efa-u2-l1',
        title: 'Make, then reflect',
        minutes: 25,
        objectives: ['Create a simple work using two elements.', 'Describe your choices.'],
        sections: [
          section('Process', [
            'Choose one element to emphasize, sketch two ideas, pick one, and finish it. Then answer: what did you choose, why, and what would you change? Reflection is part of the work, not an afterthought.',
          ]),
        ],
        example: {
          prompt: 'You choose texture. What might you make?',
          steps: ['Pick a subject, such as a tree.', 'Choose materials with contrasting texture.', 'Explain how texture supports the subject.'],
          answer: 'A textured tree drawing with an explanation of material choice.',
        },
        practice: [
          mc('Reflection on artwork should', ['copy the teacher', 'explain your choices', 'be skipped', 'only say “good”'], 1, 'It explains decisions.'),
          mc('A sketch before a final work helps you', ['avoid thinking', 'try ideas cheaply', 'copy exactly', 'waste time'], 1, 'Sketches test ideas.'),
        ],
      }),
    ], quiz('Creating check', [
      mc('Emphasizing one element means', ['using all equally', 'making one element stand out', 'avoiding color', 'copying'], 1, 'Emphasis creates focus.'),
      mc('A reflection should name', ['only the title', 'choices and reasons', 'the price', 'the size'], 1, 'Reasons matter.'),
    ]), project({
      title: 'Portfolio page',
      prompt: 'Complete one artwork and a short artist statement: what you made, which elements you used, and what you would change.',
      deliverable: 'Artwork plus a 100-word statement.',
      guidance: ['Use element vocabulary.', 'Be specific about changes.'],
      rubric: CREATIVE_PROJECT,
    })),
  ],
  finalExam: exam('Elementary fine arts check', [
    mc('Tempo means', ['high or low', 'fast or slow', 'loud or soft', 'color'], 1, 'Tempo is speed.'),
    mc('Texture is', ['how something feels or looks like it feels', 'a type of beat', 'a pitch', 'a color'], 0, 'Texture relates to surface.'),
    mc('A reflection should explain', ['the price', 'your choices', 'the title only', 'the size'], 1, 'Choices and reasons.'),
    mc('Dynamics describe', ['fast or slow', 'loud or soft', 'high or low', 'length'], 1, 'Dynamics are volume.'),
  ], 20),
};

export const elementaryHealthPe: Course = {
  id: 'elem-health-pe',
  title: 'Elementary Health and Physical Education (K–5)',
  subject: 'pe',
  // Banded K–5 course: measured at grade 5 so the depth band is the top of its range.
  grade: 5,
  credits: 0,
  semesters: 2,
  description:
    'Banded elementary health and PE: movement skills, fitness, nutrition, sleep, hygiene, and safety. Activity is logged with an adult.',
  essentialQuestions: ['How do I move safely and stay active?', 'What habits keep my body healthy?'],
  teks: [teks('19 TAC ch. 116, elementary PE', 'Movement patterns; physical activity; fitness; safety and personal responsibility.'), teks('19 TAC ch. 115, elementary health', 'Health behaviors; nutrition; safety; personal health.')],
  weights: { ...ELEMENTARY_WEIGHTS, participation: 30, practice: 20, quiz: 20, exam: 15, project: 15 },
  tags: K5,
  units: [
    unit('u1', 'Move and play', 'Movement skills improve with practice.', [
      lesson({
        id: 'ehp-u1-l1',
        title: 'Locomotor skills and safe play',
        minutes: 25,
        objectives: ['Name locomotor skills.', 'Explain how to warm up and play safely.'],
        sections: [
          section('Moving', [
            'Locomotor skills move the body from place to place: walking, running, jumping, hopping, skipping, galloping, and sliding. Non-locomotor skills move the body in place: bending, twisting, stretching, and balancing.',
            'Warm up with easy movement before harder play. Drink water, wear shoes that fit, and check the play area for hazards. Stop and tell an adult if something hurts.',
          ]),
        ],
        example: {
          prompt: 'Plan a five-minute warm-up.',
          steps: ['One minute of walking.', 'One minute of arm circles and stretching.', 'Two minutes of skipping and hopping.', 'One minute of easy jogging.'],
          answer: 'A graduated warm-up that raises heart rate gently.',
        },
        practice: [
          mc('Skipping is a', ['non-locomotor skill', 'locomotor skill', 'stretch', 'rest'], 1, 'It moves the body.'),
          mc('Before hard play you should', ['warm up', 'eat a large meal', 'stretch cold muscles only', 'skip water'], 0, 'Warm-up prepares the body.'),
        ],
      }),
    ], quiz('Movement check', [
      mc('Balancing in place is a', ['locomotor skill', 'non-locomotor skill', 'sprint', 'jump'], 1, 'It does not travel.'),
      mc('Water is important because', ['it replaces activity', 'the body needs hydration', 'it is a warm-up', 'it prevents all injuries'], 1, 'Hydration supports performance.'),
    ]), project({
      title: 'Activity log',
      prompt: 'Log ten days of play and movement with an adult’s initials. Include one new skill you practiced.',
      deliverable: 'A ten-day log with reflections.',
      guidance: ['Log honestly.', 'Note one skill that improved.'],
      rubric: INQUIRY_PROJECT,
    })),
    unit('u2', 'Healthy habits', 'Small daily habits matter.', [
      lesson({
        id: 'ehp-u2-l1',
        title: 'Food, sleep, hygiene, and safety',
        minutes: 25,
        objectives: ['Name a balanced meal.', 'Explain why sleep and handwashing matter.'],
        sections: [
          section('Habits', [
            'A balanced plate includes vegetables and fruit, whole grains, protein, and water. Sleep helps memory and mood; most elementary children need about 9–12 hours. Handwashing with soap for about 20 seconds reduces the spread of germs.',
            'Safety habits: wear a helmet when biking, use sunscreen, never swim alone, and know how to call for help. Practice saying your address and a guardian’s phone number.',
          ]),
        ],
        example: {
          prompt: 'Build a balanced lunch.',
          steps: ['Choose a vegetable or fruit.', 'Add a whole grain.', 'Add a protein.', 'Add water.'],
          answer: 'Example: beans, tortilla, apple, carrots, water.',
        },
        practice: [
          mc('How long should you wash your hands?', ['2 seconds', 'about 20 seconds', '5 minutes', 'not at all'], 1, 'About 20 seconds.'),
          mc('A balanced meal includes', ['only protein', 'vegetables, grains, protein, and water', 'only fruit', 'only dessert'], 1, 'Variety matters.'),
        ],
      }),
    ], quiz('Habits check', [
      mc('Most elementary children need about', ['4 hours of sleep', '6 hours', '9–12 hours', '14 hours'], 2, 'That is the typical range.'),
      mc('A helmet protects', ['your hands', 'your head', 'your feet', 'your teeth'], 1, 'It protects the head.'),
    ]), project({
      title: 'Healthy week plan',
      prompt: 'Plan one week of balanced meals and bedtime. Track how well you followed it.',
      deliverable: 'A weekly plan and a short reflection.',
      guidance: ['Include real foods your family eats.', 'Set a realistic bedtime.'],
      rubric: CREATIVE_PROJECT,
    })),
  ],
  finalExam: exam('Elementary health and PE check', [
    mc('Skipping is a', ['non-locomotor skill', 'locomotor skill', 'rest', 'stretch'], 1, 'It travels.'),
    mc('Handwashing should last about', ['2 seconds', '20 seconds', '5 minutes', '1 hour'], 1, 'About 20 seconds.'),
    mc('A balanced plate includes', ['only protein', 'vegetables, grains, protein, and water', 'only fruit', 'only grains'], 1, 'Variety is key.'),
    mc('A helmet should be worn when', ['sleeping', 'biking', 'reading', 'eating'], 1, 'It protects the head during biking.'),
  ], 20),
};

export const elementaryTechnology: Course = {
  id: 'elem-tech',
  title: 'Elementary Technology Applications (K–5)',
  subject: 'technology',
  // Banded K–5 course: measured at grade 5 so the depth band is the top of its range.
  grade: 5,
  credits: 0,
  semesters: 2,
  description:
    'Banded elementary technology: keyboarding, file organization, digital citizenship, sequencing and algorithms, and safe searching.',
  essentialQuestions: ['How do I use a computer safely and efficiently?', 'What is an algorithm?'],
  teks: [teks('19 TAC ch. 126, Technology Applications K–5', 'Creativity and innovation; communication; research; critical thinking; digital citizenship; technology operations.')],
  weights: ELEMENTARY_WEIGHTS,
  tags: K5,
  units: [
    unit('u1', 'Tools and keyboarding', 'Tools have purposes; skills improve with practice.', [
      lesson({
        id: 'etech-u1-l1',
        title: 'Keyboarding and organizing files',
        minutes: 25,
        objectives: ['Use home-row keys.', 'Save and find a file.'],
        sections: [
          section('Using a computer', [
            'Place fingers on the home row: A, S, D, F for the left hand and J, K, L, ; for the right. Keep wrists straight and sit with feet flat. Accuracy first; speed comes later.',
            'Save work with a clear name and in a folder you can find: “science-notes-2026” is better than “untitled.” Back up important files.',
          ]),
        ],
        example: {
          prompt: 'Type “cat” using home-row guidance.',
          steps: ['C is typed with the left middle finger.', 'A with the left pinky.', 'T with the left index finger reaching up.'],
          answer: 'c-a-t, returning fingers to the home row.',
        },
        practice: [
          mc('The home-row keys include', ['A, S, D, F', 'Q, W, E, R', 'Z, X, C, V', '1, 2, 3, 4'], 0, 'Those are home-row keys.'),
          mc('A good file name is', ['untitled', 'asdf', 'book-report-2026', 'file1'], 2, 'It is descriptive.'),
        ],
      }),
    ], quiz('Technology check', [
      mc('Accuracy in typing matters because', ['it is faster to fix later', 'errors slow you down', 'it looks nice', 'it is required'], 1, 'Errors cost time.'),
      mc('Saving work in a named folder helps you', ['lose it', 'find it later', 'delete it', 'hide it'], 1, 'Organization aids retrieval.'),
    ]), project({
      title: 'Typing practice log',
      prompt: 'Practice ten minutes a day for two weeks. Record accuracy and speed, then write two sentences about improvement.',
      deliverable: 'A log with dates and a short reflection.',
      guidance: ['Prioritize accuracy over speed.', 'Sit with feet flat.'],
      rubric: INQUIRY_PROJECT,
    })),
    unit('u2', 'Digital citizenship and algorithms', 'Online choices have consequences; computers follow steps.', [
      lesson({
        id: 'etech-u2-l1',
        title: 'Safe searching and sequencing',
        minutes: 25,
        objectives: ['Identify personal information to keep private.', 'Write a simple sequence of steps.'],
        sections: [
          section('Safety and steps', [
            'Keep private: your full address, phone number, school name, passwords, and photos that reveal location. Tell a trusted adult if a message makes you uncomfortable. Never meet someone you met online.',
            'An algorithm is a sequence of steps to complete a task. A recipe is an algorithm. Computers need exact steps in the right order — a missing step or wrong order produces the wrong result.',
          ]),
        ],
        example: {
          prompt: 'Write steps to make a sandwich.',
          steps: ['Get two slices of bread.', 'Spread a filling on one slice.', 'Place the other slice on top.', 'Cut in half.'],
          answer: 'Four ordered steps; changing the order changes the result.',
        },
        practice: [
          mc('Which should stay private?', ['your favorite color', 'your home address', 'a book title', 'the weather'], 1, 'Addresses are private.'),
          mc('An algorithm is', ['a type of computer', 'a sequence of steps', 'a website', 'a password'], 1, 'It is a procedure.'),
        ],
      }),
    ], quiz('Digital citizenship check', [
      mc('If a stranger online asks to meet, you should', ['meet them', 'tell a trusted adult', 'share your address', 'ignore all adults'], 1, 'Tell a trusted adult.'),
      mc('Steps in an algorithm must be', ['random', 'in order', 'secret', 'optional'], 1, 'Order matters.'),
    ]), project({
      title: 'Algorithm comic',
      prompt: 'Draw a four-panel comic showing an everyday algorithm. Label each step and show what happens if one step is out of order.',
      deliverable: 'A labeled comic with a wrong-order panel.',
      guidance: ['Use precise verbs.', 'Test the steps with an adult.'],
      rubric: CREATIVE_PROJECT,
    })),
  ],
  finalExam: exam('Elementary technology check', [
    mc('Home-row keys include', ['A, S, D, F', 'Q, W, E, R', 'Z, X, C, V', '1, 2, 3'], 0, 'Those are home row.'),
    mc('An algorithm is', ['a computer', 'a sequence of steps', 'a password', 'a website'], 1, 'It is a procedure.'),
    mc('Personal information to keep private includes', ['your favorite book', 'your home address', 'the weather', 'a color'], 1, 'Addresses are private.'),
    mc('A descriptive file name helps you', ['lose files', 'find files', 'delete files', 'hide files'], 1, 'It aids retrieval.'),
  ], 20),
};

export const middleArt: Course = {
  id: 'ms-art',
  title: 'Middle School Art (6–8)',
  subject: 'fine-arts',
  grade: 6,
  credits: 0,
  semesters: 2,
  description:
    'Banded middle school art: drawing from observation, color theory, composition, and critique. Builds a portfolio with written reflection.',
  essentialQuestions: ['How does composition guide attention?', 'How do I improve through critique?'],
  teks: [teks('19 TAC ch. 117, middle school art', 'Perception; creative expression; historical and cultural relevance; critical evaluation.')],
  weights: { participation: 10, practice: 20, quiz: 15, exam: 15, project: 40 },
  tags: M68,
  units: [
    unit('u1', 'Composition and color', 'Composition is the arrangement of attention.', [
      lesson({
        id: 'msart-u1-l1',
        title: 'Composition and color relationships',
        minutes: 45,
        objectives: ['Apply the rule of thirds.', 'Use complementary and analogous color schemes.'],
        sections: [
          section('Arrangement', [
            'The rule of thirds divides the frame into a grid; placing a focal point near an intersection often feels more dynamic than centering it. Leading lines and contrast direct the eye.',
            'Complementary colors sit opposite each other on the color wheel and create strong contrast. Analogous colors sit next to each other and create harmony. Value — light and dark — matters more than hue for readability.',
          ]),
        ],
        example: {
          prompt: 'Plan a poster with a strong focal point.',
          steps: ['Place the subject near a thirds intersection.', 'Use a complementary accent for the key word.', 'Keep the background low-contrast.'],
          answer: 'Placement, contrast, and restraint create focus.',
        },
        practice: [
          mc('Complementary colors are', ['next to each other', 'opposite each other', 'always black and white', 'the same hue'], 1, 'They are opposite.'),
          mc('The rule of thirds helps with', ['color mixing', 'placement and balance', 'framing a canvas', 'drying paint'], 1, 'It guides placement.'),
        ],
      }),
    ], quiz('Composition check', [
      mc('Analogous colors are', ['opposite', 'next to each other', 'always warm', 'always cool'], 1, 'They are adjacent.'),
      mc('Value refers to', ['hue', 'lightness and darkness', 'texture', 'shape'], 1, 'It is tone.'),
    ]), project({
      title: 'Composition study',
      prompt: 'Create three thumbnail compositions of the same subject. Choose one, enlarge it, and explain your choice.',
      deliverable: 'Three thumbnails, one final, and a 150-word explanation.',
      guidance: ['Vary placement, not just color.', 'Explain using composition terms.'],
      rubric: CREATIVE_PROJECT,
    })),
    unit('u2', 'Observation and critique', 'Technique improves through specific feedback.', [
      lesson({
        id: 'msart-u2-l1',
        title: 'Observational drawing and useful critique',
        minutes: 45,
        objectives: ['Use sighting and negative space.', 'Give specific, actionable feedback.'],
        sections: [
          section('Drawing and responding', [
            'Sighting compares proportions with a pencil at arm’s length. Negative space checks contours by drawing the shapes around the object. Block in large shapes before detail.',
            'Critique sequence: describe, analyze, interpret, evaluate. Feedback should name a specific element and a concrete next step.',
          ]),
        ],
        example: {
          prompt: 'Critique a portrait with flat values.',
          steps: ['Describe: one mid-tone across the face.', 'Analyze: no highlight or core shadow.', 'Interpret: the face reads flat.', 'Evaluate: add three values and a light source.'],
          answer: 'Specific observation plus a next step.',
        },
        practice: [
          mc('Negative space helps you check', ['color', 'contour and proportion', 'the price', 'the frame'], 1, 'It checks shape.'),
          mc('Useful critique includes', ['“I like it”', 'a specific element and next step', 'a grade only', 'silence'], 1, 'Specificity helps.'),
        ],
      }),
    ], quiz('Critique check', [
      mc('The first step of critique is', ['evaluate', 'describe', 'interpret', 'grade'], 1, 'Describe first.'),
      mc('Blocking in large shapes helps because', ['detail comes first', 'proportion is easier to correct early', 'it saves paint', 'it hides errors'], 1, 'Large shapes set proportion.'),
    ]), project({
      title: 'Portfolio and artist statement',
      prompt: 'Assemble four works with a 250-word artist statement describing your choices, influences, and one area for growth.',
      deliverable: 'Four works plus a statement.',
      guidance: ['Choose works that show range.', 'Be specific about growth.'],
      rubric: CREATIVE_PROJECT,
    })),
  ],
  finalExam: exam('Middle school art check', [
    mc('Complementary colors are', ['adjacent', 'opposite', 'identical', 'always neutral'], 1, 'They are opposite.'),
    mc('Value is', ['hue', 'lightness and darkness', 'texture', 'shape'], 1, 'It is tone.'),
    mc('Critique begins with', ['evaluation', 'description', 'grading', 'revision'], 1, 'Describe first.'),
    mc('The rule of thirds guides', ['color mixing', 'placement', 'framing', 'drying'], 1, 'It guides placement.'),
  ], 40),
};

export const middlePe: Course = {
  id: 'ms-pe',
  title: 'Middle School Physical Education (6–8)',
  subject: 'pe',
  grade: 6,
  credits: 0,
  semesters: 2,
  description:
    'Banded middle school PE: fitness components, training principles, sport skills, and safety, with a verified activity log.',
  essentialQuestions: ['How do I train safely and consistently?', 'Which activities will I keep for life?'],
  teks: [teks('19 TAC ch. 116, middle school PE', 'Movement competence; fitness; lifetime activity; safety; personal responsibility.')],
  weights: { participation: 50, practice: 15, quiz: 15, exam: 20 },
  tags: M68,
  units: [
    unit('u1', 'Fitness and training', 'Progress comes from gradual, consistent overload.', [
      lesson({
        id: 'mspe-u1-l1',
        title: 'FITT and recovery',
        minutes: 40,
        objectives: ['Apply FITT to a weekly plan.', 'Explain rest and recovery.'],
        sections: [
          section('Training', [
            'Frequency, intensity, time, and type describe a plan. Cardiorespiratory work should be regular and moderate to vigorous; strength work should target major muscle groups two or more days a week with rest between sessions for the same muscles.',
            'Adaptation happens during recovery. Sleep, hydration, and nutrition matter as much as the workout. Persistent fatigue or pain is a signal to reduce load and consult an adult or clinician.',
          ]),
        ],
        example: {
          prompt: 'Plan a balanced week for a beginner.',
          steps: ['Three days of 30-minute brisk activity.', 'Two days of body-weight strength.', 'Daily stretching.', 'One full rest day.'],
          answer: 'A weekly plan with variety and recovery.',
        },
        practice: [
          mc('The I in FITT is', ['interval', 'intensity', 'injury', 'impact'], 1, 'Intensity is effort.'),
          mc('Adaptation occurs', ['during training only', 'during recovery', 'without sleep', 'only with supplements'], 1, 'Recovery produces adaptation.'),
        ],
      }),
    ], quiz('Fitness check', [
      mc('Progressive overload means', ['max effort daily', 'gradually increasing demand', 'never resting', 'changing sports weekly'], 1, 'Demand rises gradually.'),
      mc('Strength training should include', ['rest between sessions for the same muscles', 'no rest', 'only one muscle', 'daily max lifts'], 0, 'Recovery is required.'),
    ]), project({
      title: 'Eight-week plan',
      prompt: 'Write an eight-week plan with progression and a fallback for busy weeks. Log two weeks of actual activity.',
      deliverable: 'Plan, log, and reflection.',
      guidance: ['Be specific about days and minutes.', 'Include warm-up and cool-down.'],
      rubric: INQUIRY_PROJECT,
    })),
    unit('u2', 'Safety and lifetime activity', 'Safety is part of performance.', [
      lesson({
        id: 'mspe-u2-l1',
        title: 'Heat, hydration, and injury prevention',
        minutes: 40,
        objectives: ['Recognize heat illness.', 'Describe concussion protocol basics.'],
        sections: [
          section('Safety', [
            'Heat exhaustion signs include heavy sweating, weakness, dizziness, and nausea; move to a cool place and hydrate. Heat stroke involves confusion or loss of consciousness and is an emergency.',
            'A suspected concussion requires removal from play and evaluation by a health professional. Return to play should be gradual and medically cleared.',
          ]),
        ],
        example: {
          prompt: 'A player has a headache and dizziness after a collision. What now?',
          steps: ['Remove from play immediately.', 'Do not let them return the same day.', 'Seek medical evaluation.', 'Follow a gradual return protocol.'],
          answer: 'Remove, evaluate, and return only with clearance.',
        },
        practice: [
          mc('Heat stroke is an emergency because', ['it causes thirst', 'it can involve confusion and loss of consciousness', 'it is common', 'it is mild'], 1, 'Neurological signs are dangerous.'),
          mc('A suspected concussion requires', ['return to play', 'removal and evaluation', 'stretching', 'more water only'], 1, 'Remove and evaluate.'),
        ],
      }),
    ], quiz('Safety check', [
      mc('Hydration should happen', ['only after activity', 'before, during, and after activity', 'never', 'only in winter'], 1, 'Hydrate throughout.'),
      mc('Return to play after a concussion requires', ['the player’s choice', 'medical clearance and gradual return', 'a coach’s approval only', 'no evaluation'], 1, 'Medical clearance is required.'),
    ]), project({
      title: 'Safety poster',
      prompt: 'Create a poster on heat safety or concussion awareness with three accurate facts and one action step.',
      deliverable: 'A poster with cited facts.',
      guidance: ['Use a credible health source.', 'Make the action step specific.'],
      rubric: CREATIVE_PROJECT,
    })),
  ],
  finalExam: exam('Middle school PE check', [
    mc('FITT stands for', ['Frequency, Intensity, Time, Type', 'Fitness, Intensity, Training, Time', 'Flex, Injury, Treatment, Type', 'Force, Impact, Tempo, Training'], 0, 'It describes training variables.'),
    mc('Adaptation happens during', ['training only', 'recovery', 'sleep only', 'competition'], 1, 'Recovery produces adaptation.'),
    mc('Heat stroke is an emergency because', ['it causes thirst', 'it can involve confusion and loss of consciousness', 'it is mild', 'it is common'], 1, 'Neurological signs are dangerous.'),
    mc('A concussion requires', ['immediate return', 'removal and medical evaluation', 'stretching', 'extra water'], 1, 'Remove and evaluate.'),
  ], 40),
};

export const middleHealth: Course = {
  id: 'ms-health',
  title: 'Middle School Health (6–8)',
  subject: 'health',
  grade: 6,
  credits: 0,
  semesters: 2,
  description:
    'Banded middle school health: nutrition, sleep and mental health, substance use prevention, relationships and consent, and first aid.',
  essentialQuestions: ['Which habits protect long-term health?', 'How do I get help for myself or a friend?'],
  teks: [teks('19 TAC ch. 115, grades 6–8 health', 'Health behaviors; nutrition; mental and emotional health; substance use prevention; injury and disease prevention; communication.')],
  weights: { practice: 25, quiz: 25, exam: 30, project: 20 },
  tags: M68,
  units: [
    unit('u1', 'Body and mind', 'Health behaviors interact.', [
      lesson({
        id: 'mshealth-u1-l1',
        title: 'Nutrition, sleep, and stress',
        minutes: 40,
        objectives: ['Interpret a nutrition label.', 'Explain the effects of chronic stress and poor sleep.'],
        sections: [
          section('Habits', [
            'Serving size determines every number on a label. Added sugars and sodium are the values most often worth limiting. A balanced pattern includes vegetables, fruit, whole grains, protein, and water.',
            'Most teenagers need about 8–10 hours of sleep. Chronic stress affects sleep, mood, digestion, and immune function. Evidence-based coping includes activity, routines, social connection, and limiting late caffeine and screens.',
          ]),
        ],
        example: {
          prompt: 'A snack has 3 servings and 10 g added sugar per serving. How much if you eat it all?',
          steps: ['Read servings per container: 3.', 'Multiply: 10 × 3 = 30.'],
          answer: '30 g of added sugar.',
        },
        practice: [
          num('A label lists 9 g added sugar per serving and 2 servings. How many grams total?', 18, '9 × 2 = 18.'),
          mc('Most teenagers need about', ['5 hours of sleep', '8–10 hours', '12–14 hours', '4 hours'], 1, '8–10 hours is typical guidance.'),
        ],
      }),
    ], quiz('Health habits check', [
      mc('Added sugars are listed separately because', ['they are natural', 'guidance recommends limiting them', 'they have no calories', 'they are vitamins'], 1, 'They should be limited.'),
      mc('Chronic stress can affect', ['only mood', 'sleep, mood, and immune function', 'nothing physical', 'only appetite'], 1, 'It affects multiple systems.'),
    ]), project({
      title: 'Health habit plan',
      prompt: 'Choose one sleep, nutrition, or activity habit. Set a two-week goal, track it, and evaluate with a credible source.',
      deliverable: 'A goal, a log, and a 300-word evaluation.',
      guidance: ['Make the goal specific and measurable.', 'Cite a government or academic source.'],
      rubric: INQUIRY_PROJECT,
    })),
    unit('u2', 'Safety, substances, and relationships', 'Refusal and help-seeking are skills.', [
      lesson({
        id: 'mshealth-u2-l1',
        title: 'Refusal skills, consent, and first aid',
        minutes: 40,
        objectives: ['Use a refusal strategy.', 'Explain consent and basic first aid.'],
        sections: [
          section('Skills', [
            'A refusal strategy names the choice, gives a reason, and offers an alternative: “No, I’m not drinking; I have practice tomorrow — want to grab food instead?” Leaving is a valid strategy.',
            'Consent must be clear, voluntary, and ongoing; silence or pressure is not consent. For first aid: call for help, check responsiveness, and do not move someone with a suspected spinal injury. Learn CPR and bleeding control from a certified instructor.',
          ]),
        ],
        example: {
          prompt: 'A friend pressures you to vape. What do you say?',
          steps: ['Name the choice: no.', 'Give a brief reason.', 'Offer an alternative.', 'Leave if pressure continues.'],
          answer: 'A clear refusal with an alternative and an exit.',
        },
        practice: [
          mc('Consent requires', ['silence', 'clear, voluntary agreement', 'pressure', 'a relationship'], 1, 'It must be voluntary.'),
          mc('For a suspected spinal injury, you should', ['move the person', 'call for help and keep them still', 'give water', 'have them walk'], 1, 'Avoid movement and get help.'),
        ],
      }),
    ], quiz('Safety check', [
      mc('A refusal strategy includes', ['only “no”', 'a reason and an alternative', 'ignoring the person', 'giving in'], 1, 'Alternatives help.'),
      mc('CPR should be learned from', ['a video only', 'a certified instructor', 'a friend', 'a book only'], 1, 'Certification matters.'),
    ]), project({
      title: 'Safety scenario response',
      prompt: 'Write a scenario involving substance pressure or a medical emergency. Describe your response step by step and name real resources.',
      deliverable: 'A 400-word scenario and response plan.',
      guidance: ['Use direct language.', 'Name accurate resources.'],
      rubric: INQUIRY_PROJECT,
    })),
  ],
  finalExam: exam('Middle school health check', [
    num('A label lists 8 g added sugar per serving and 3 servings. Total grams?', 24, '8 × 3 = 24.'),
    mc('Most teenagers need about', ['5 hours of sleep', '8–10 hours', '12 hours', '4 hours'], 1, '8–10 hours.'),
    mc('Consent requires', ['silence', 'clear, voluntary agreement', 'pressure', 'a relationship'], 1, 'It is voluntary.'),
    mc('For a suspected spinal injury', ['move the person', 'call for help and keep them still', 'give water', 'make them walk'], 1, 'Keep them still and get help.'),
  ], 40),
};

export const middleTechnology: Course = {
  id: 'ms-tech',
  title: 'Middle School Technology Applications (6–8)',
  subject: 'technology',
  grade: 6,
  credits: 0,
  semesters: 2,
  description:
    'Banded middle school technology: digital documents, spreadsheets, networks, binary data, and cybersecurity habits.',
  essentialQuestions: ['How do digital tools store and transform information?', 'How do I protect my accounts and data?'],
  teks: [teks('19 TAC ch. 126, Technology Applications grades 6–8', 'Technology operations; word processing; spreadsheets; digital citizenship; computational thinking; cybersecurity.')],
  weights: { practice: 30, quiz: 25, exam: 25, project: 20 },
  tags: M68,
  units: [
    unit('u1', 'Documents and data', 'Structure makes information usable.', [
      lesson({
        id: 'mstech-u1-l1',
        title: 'Documents, spreadsheets, and binary',
        minutes: 40,
        objectives: ['Use headings and styles in a document.', 'Write a spreadsheet formula.', 'Convert small binary numbers.'],
        sections: [
          section('Tools', [
            'Headings and styles make documents navigable and accessible. A spreadsheet stores values in cells; formulas begin with = and reference cells, so =SUM(B2:B6) adds a range and updates when data changes.',
            'Computers store data as bits. 1011 = 8 + 0 + 2 + 1 = 11. Eight bits make a byte. Text uses encodings such as ASCII and UTF-8; images store pixel values.',
          ]),
        ],
        example: {
          prompt: 'What does =AVERAGE(B2:B5) do?',
          steps: ['Read the range: B2 through B5.', 'The function computes the mean.', 'The result updates when values change.'],
          answer: 'It returns the average of four cells.',
        },
        practice: [
          num('Convert binary 1101 to decimal.', 13, '8 + 4 + 1 = 13.'),
          mc('A spreadsheet formula begins with', ['#', '=', '@', '$'], 1, 'Formulas start with =.'),
        ],
      }),
    ], quiz('Digital tools check', [
      num('Convert binary 1010 to decimal.', 10, '8 + 2 = 10.'),
      mc('A cell reference identifies', ['a font', 'a location in the spreadsheet', 'a password', 'a network'], 1, 'It identifies a cell.'),
    ]), project({
      title: 'Budget spreadsheet',
      prompt: 'Build a spreadsheet with income, five expenses, a total, and a savings percentage. Format it clearly and explain one formula.',
      deliverable: 'The spreadsheet plus a short explanation.',
      guidance: ['Use formulas, not typed totals.', 'Label every column.'],
      rubric: INQUIRY_PROJECT,
    })),
    unit('u2', 'Networks and security', 'Security depends on habits, not just software.', [
      lesson({
        id: 'mstech-u2-l1',
        title: 'How the internet works and how accounts get stolen',
        minutes: 40,
        objectives: ['Explain DNS and HTTPS.', 'Recognize phishing and enable multi-factor authentication.'],
        sections: [
          section('Networks', [
            'Data is broken into packets that travel across networks. IP addresses identify devices; DNS translates names into addresses; HTTPS encrypts traffic between browser and server.',
            'Phishing impersonates a trusted sender to steal credentials. Defenses: verify through a separate channel, use unique passwords in a password manager, and enable multi-factor authentication. Never approve an unexpected MFA prompt.',
          ]),
        ],
        example: {
          prompt: 'An email says your account will close unless you log in through a link. What do you do?',
          steps: ['Do not click the link.', 'Open the site directly in a browser.', 'Verify the sender through another channel.', 'Report the message.'],
          answer: 'Verify independently; do not use the link.',
        },
        practice: [
          mc('DNS translates', ['passwords to hashes', 'domain names to IP addresses', 'files to bytes', 'bits to bytes'], 1, 'It resolves names.'),
          mc('MFA helps because', ['it replaces passwords', 'a stolen password alone is insufficient', 'it encrypts files', 'it speeds login'], 1, 'A second factor blocks password-only attacks.'),
        ],
      }),
    ], quiz('Security check', [
      mc('HTTPS provides', ['encryption in transit', 'password storage', 'malware removal', 'phishing detection'], 0, 'It encrypts traffic.'),
      mc('A phishing message often', ['comes from a verified colleague', 'creates urgency and asks you to click', 'has no sender', 'is always obvious'], 1, 'Urgency is a common tactic.'),
    ]), project({
      title: 'Account security audit',
      prompt: 'Audit one account for password uniqueness, MFA, recovery options, and connected apps. Write a remediation checklist without revealing secrets.',
      deliverable: 'A report with no passwords included.',
      guidance: ['Never write actual passwords.', 'Prioritize the highest risk.'],
      rubric: INQUIRY_PROJECT,
    })),
  ],
  finalExam: exam('Middle school technology check', [
    num('Convert binary 1110 to decimal.', 14, '8 + 4 + 2 = 14.'),
    mc('A spreadsheet formula begins with', ['#', '=', '@', '$'], 1, 'Formulas start with =.'),
    mc('DNS translates', ['passwords', 'domain names to IP addresses', 'files', 'images'], 1, 'It resolves names.'),
    mc('MFA helps because', ['it replaces passwords', 'a stolen password alone is insufficient', 'it encrypts files', 'it is faster'], 1, 'A second factor blocks password-only attacks.'),
  ], 40),
};

export const middleSpanish: Course = {
  id: 'ms-span',
  title: 'Middle School Spanish Exploratory (6–8)',
  subject: 'lote',
  grade: 6,
  credits: 0,
  semesters: 2,
  description:
    'Banded exploratory Spanish: greetings, numbers, family, school, and present-tense verbs, with cultural comparison. Prepares students for Spanish I.',
  essentialQuestions: ['How do I introduce myself in Spanish?', 'How does language reflect culture?'],
  teks: [teks('19 TAC ch. 114, middle school LOTE', 'Interpretive, interpersonal, and presentational communication at the novice level; cultural comparisons.')],
  weights: MIDDLE_WEIGHTS,
  tags: M68,
  units: [
    unit('u1', 'Introductions and the present tense', 'Verb endings carry the subject.', [
      lesson({
        id: 'msspan-u1-l1',
        title: 'Greetings and regular -ar verbs',
        minutes: 40,
        objectives: ['Introduce yourself and ask a question.', 'Conjugate regular -ar verbs.'],
        sections: [
          section('Language basics', [
            'Hola, me llamo Ana. ¿Cómo te llamas? Soy de Texas. ¿Cómo estás? Bien, gracias. Use usted for formal address.',
            'Hablar: yo hablo, tú hablas, él/ella/usted habla, nosotros hablamos, vosotros habláis, ellos/ellas/ustedes hablan. The ending identifies the subject, so pronouns are often omitted.',
          ]),
        ],
        example: {
          prompt: 'Say “I study Spanish and my friend works.”',
          steps: ['Estudiar → yo estudio.', 'Amigo → mi amigo.', 'Trabajar → trabaja.'],
          answer: 'Estudio español y mi amigo trabaja.',
        },
        practice: [
          mc('The “nosotros” form of hablar is', ['hablo', 'hablamos', 'hablan', 'hablas'], 1, 'It ends in -amos.'),
          mc('“¿Cómo te llamas?” asks', ['your age', 'your name', 'your address', 'the time'], 1, 'It asks your name.'),
        ],
      }),
    ], quiz('Spanish check', [
      mc('The formal “you” is', ['tú', 'usted', 'vosotros', 'ellos'], 1, 'Usted is formal.'),
      mc('“Ellos ____ español” uses', ['hablan', 'habla', 'hablo', 'hablas'], 0, 'Third-person plural.'),
    ]), project({
      title: 'Introducción',
      prompt: 'Write and record a 45-second introduction in Spanish: name, origin, one activity, one question.',
      deliverable: 'A script and a recording.',
      guidance: ['Use complete sentences.', 'Practice pronunciation.'],
      rubric: CREATIVE_PROJECT,
    })),
    unit('u2', 'School, numbers, and culture', 'Language carries culture.', [
      lesson({
        id: 'msspan-u2-l1',
        title: 'Numbers, school vocabulary, and cultural comparison',
        minutes: 40,
        objectives: ['Count to 100 by tens.', 'Name three school supplies.', 'Compare a school practice.'],
        sections: [
          section('Vocabulary and culture', [
            'Numbers: diez, veinte, treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa, cien. School: el libro, el cuaderno, el lápiz, la mochila, la clase.',
            'Spanish-speaking countries differ in schedules and meals; for example, a midday meal is often the largest in some countries. Comparing practices without ranking them is the beginning of cultural competence.',
          ]),
        ],
        example: {
          prompt: 'Say “I need a notebook and a pencil.”',
          steps: ['Necesitar → yo necesito.', 'Cuaderno and lápiz.', 'Use y for “and.”'],
          answer: 'Necesito un cuaderno y un lápiz.',
        },
        practice: [
          mc('“Cien” means', ['10', '50', '100', '1,000'], 2, 'It means one hundred.'),
          mc('“El lápiz” means', ['the notebook', 'the pencil', 'the backpack', 'the class'], 1, 'It means pencil.'),
        ],
      }),
    ], quiz('Vocabulary check', [
      mc('“La mochila” means', ['the book', 'the backpack', 'the desk', 'the class'], 1, 'It means backpack.'),
      mc('Cultural comparison should', ['rank cultures', 'describe differences without ranking', 'ignore context', 'assume sameness'], 1, 'Describe without ranking.'),
    ]), project({
      title: 'School comparison',
      prompt: 'Compare your school day with a school day in a Spanish-speaking country using three accurate details and two sources.',
      deliverable: 'A comparison chart and a paragraph.',
      guidance: ['Cite sources.', 'Avoid stereotypes.'],
      rubric: INQUIRY_PROJECT,
    })),
  ],
  finalExam: exam('Middle school Spanish check', [
    mc('The “yo” form of estudiar is', ['estudio', 'estudias', 'estudia', 'estudian'], 0, 'First-person singular.'),
    mc('“Cien” means', ['10', '50', '100', '1,000'], 2, 'One hundred.'),
    mc('“El cuaderno” means', ['the pencil', 'the notebook', 'the class', 'the book'], 1, 'It means notebook.'),
    mc('The formal “you” is', ['tú', 'usted', 'vosotros', 'ellos'], 1, 'Usted is formal.'),
  ], 40),
};
