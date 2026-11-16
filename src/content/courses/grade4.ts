import type { Course } from '../../types';
import { ELEMENTARY_WEIGHTS } from '../weights';
import { CREATIVE_PROJECT, INQUIRY_PROJECT, MATH_PROJECT, WRITING_PROJECT } from '../rubrics';
import { exam, lesson, mc, num, project, quiz, section, teks, unit } from '../builders';

/** Grade 4. Alignment: 19 TAC chapters 110-117. Texas history is the social studies focus. */

export const grade4Ela: Course = {
  id: 'g4-ela',
  title: 'Grade 4 English Language Arts',
  subject: 'ela',
  grade: 4,
  credits: 0,
  semesters: 2,
  description:
    'Inference and theme, informational text structure and summarizing, and research-based persuasive writing.',
  essentialQuestions: ['How do I support an inference with evidence?', 'How does an author organize information?'],
  teks: [teks('19 TAC ch. 110, Grade 4', 'Comprehension across genres; inference and theme; informational text; composition; conventions; research.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Inference and theme', 'An inference is a conclusion you can defend.', [
      lesson({
        id: 'g4-ela-u1-l1',
        title: 'Evidence-based inference and theme',
        minutes: 35,
        objectives: ['Make an inference and cite textual evidence.', 'State a theme as a claim about the text.'],
        sections: [
          section('Inference', [
            'An inference combines what the text says with what you know. If a character “pulled her coat tight and hurried past the shuttered shops,” you can infer that the street feels cold and unwelcoming. The evidence is the coat and the shuttered shops; the inference is the feeling.',
            'A theme is a message about life that a story develops, not a one-word topic. “Perseverance” is a topic; “perseverance without support can become stubbornness” is a theme.',
          ]),
        ],
        example: {
          prompt: 'Infer a character’s feeling: “He checked the clock three times and reread the same line.”',
          steps: ['Notice repeated actions.', 'Connect to prior knowledge: waiting, anxiety.', 'State inference with evidence.'],
          answer: 'He is anxious or impatient; evidence is the repeated clock-checking and rereading.',
        },
        practice: [
          mc('An inference should be supported by', ['personal opinion only', 'textual evidence', 'the cover', 'the title'], 1, 'Evidence grounds inference.'),
          mc('A theme is', ['a one-word topic', 'a claim about life the text develops', 'the setting', 'the author’s name'], 1, 'A theme is a developed claim.'),
        ],
      }),
    ], quiz('Inference check', [
      mc('“She clutched the letter and did not open it” suggests', ['excitement to read it', 'reluctance or fear', 'boredom', 'anger at the mail carrier'], 1, 'Hesitation suggests reluctance.'),
      mc('The strongest evidence for a theme is', ['a single word', 'a pattern of events and details', 'the title', 'the page count'], 1, 'Patterns support thematic claims.'),
    ]), project({
      title: 'Theme essay',
      prompt: 'Write a four-paragraph essay on a theme in a book you read. Support it with three pieces of evidence and explain each.',
      deliverable: 'An edited essay with a works-cited entry.',
      guidance: ['State the theme as a claim.', 'Explain evidence rather than quoting it alone.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u2', 'Informational text', 'Structure reveals the author’s plan.', [
      lesson({
        id: 'g4-ela-u2-l1',
        title: 'Text structures and summarizing',
        minutes: 35,
        objectives: ['Identify comparison, cause-effect, and problem-solution structures.', 'Summarize without copying.'],
        sections: [
          section('Patterns of organization', [
            'Authors organize information in recognizable patterns: chronological (time order), comparison (similarities and differences), cause and effect, and problem and solution. Signal words such as “because,” “however,” and “first” point to the pattern.',
            'A summary states the main idea and the most important supporting points in your own words. It leaves out examples that only illustrate and details that do not affect the main point.',
          ]),
        ],
        example: {
          prompt: 'A text explains why a city added shade trees. What structure is it using?',
          steps: ['The text names a problem: heat.', 'It names a solution: trees.', 'Signal words: because, as a result.'],
          answer: 'Problem and solution, with cause and effect.',
        },
        practice: [
          mc('“Because the bridge was closed, traffic shifted” uses', ['chronological order', 'cause and effect', 'comparison', 'description'], 1, 'It shows a cause and result.'),
          mc('A good summary', ['copies sentences', 'states the main idea in your own words', 'includes every detail', 'is longer than the text'], 1, 'Summaries are selective and paraphrased.'),
        ],
      }),
    ], quiz('Informational text check', [
      mc('“Both cities face drought; however, one recycles wastewater” uses', ['comparison', 'chronological order', 'problem and solution only', 'description'], 0, 'It compares two cases.'),
      mc('Signal words help readers', ['ignore the text', 'recognize structure', 'count paragraphs', 'find the author'], 1, 'They signal relationships.'),
    ]), project({
      title: 'Structure sort',
      prompt: 'Find three short articles with different structures. Identify each structure and list the signal words that revealed it.',
      deliverable: 'A three-row chart with evidence.',
      guidance: ['Quote the signal words.', 'Explain how structure supports the purpose.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u3', 'Research and persuasive writing', 'A persuasive essay answers the strongest objection.', [
      lesson({
        id: 'g4-ela-u3-l1',
        title: 'Facts, opinions, and counterarguments',
        minutes: 35,
        objectives: ['Distinguish fact from opinion.', 'Address a counterargument in a persuasive piece.'],
        sections: [
          section('Persuasion', [
            'A fact can be verified; an opinion expresses a judgment. “The library closes at 6 p.m.” is a fact; “the library should stay open later” is an opinion supported by reasons.',
            'A strong persuasive essay states a clear position, gives reasons with evidence, and answers the best objection. Conceding a valid point makes the argument more credible.',
          ]),
        ],
        example: {
          prompt: 'Position: the school should start later. Give one reason, one piece of evidence, and one objection.',
          steps: ['Reason: later starts may improve attendance.', 'Evidence: cite a specific study or district report.', 'Objection: bus schedules and athletics.', 'Response: phase in changes or adjust routes.'],
          answer: 'A complete persuasive paragraph includes all four moves.',
        },
        practice: [
          mc('Which is a fact?', ['The library is the best place to study.', 'The library closes at 6 p.m.', 'Everyone should read more.', 'Libraries are boring.'], 1, 'It can be verified.'),
          mc('Addressing a counterargument', ['weakens an essay', 'strengthens credibility', 'changes the topic', 'is unnecessary'], 1, 'It shows fair reasoning.'),
        ],
      }),
    ], quiz('Persuasion check', [
      mc('An opinion is', ['always false', 'a judgment that needs support', 'a measurement', 'a citation'], 1, 'Opinions require reasons.'),
      mc('Evidence in a persuasive essay should be', ['invented', 'relevant and credible', 'emotional only', 'omitted'], 1, 'Evidence must be credible and relevant.'),
    ]), project({
      title: 'Persuasive letter',
      prompt: 'Write a letter to a principal or city official about a real issue. Include a claim, two reasons with evidence, and one answered objection.',
      deliverable: 'A one-page letter with a source list.',
      guidance: ['Use a respectful tone.', 'Cite at least one source.'],
      rubric: WRITING_PROJECT,
    })),
  ],
  finalExam: exam('Grade 4 ELA final check', [
    mc('An inference must be supported by', ['opinion', 'textual evidence', 'the cover', 'length'], 1, 'Evidence supports inference.'),
    mc('A theme is', ['a topic word', 'a claim about life developed in the text', 'the setting', 'the title'], 1, 'Themes are developed claims.'),
    mc('“Because the road flooded, the bus detoured” uses', ['comparison', 'cause and effect', 'chronological order', 'description'], 1, 'It states a cause and result.'),
    mc('A counterargument should be', ['ignored', 'answered fairly', 'mocked', 'hidden'], 1, 'Fairly answering it strengthens the argument.'),
  ], 40),
};

export const grade4Math: Course = {
  id: 'g4-math',
  title: 'Grade 4 Mathematics',
  subject: 'math',
  grade: 4,
  credits: 0,
  semesters: 2,
  description:
    'Multi-digit multiplication and division, fractions and decimals, geometry, and measurement conversions.',
  essentialQuestions: ['How do fractions and decimals both name parts?', 'How do units change a measurement?'],
  teks: [teks('19 TAC ch. 111, Grade 4', 'Place value; multiplication and division; fractions and decimals; geometry; measurement; data.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Multiplication and place value', 'Place value strategies make large products manageable.', [
      lesson({
        id: 'g4-math-u1-l1',
        title: 'Multi-digit multiplication',
        minutes: 40,
        objectives: ['Multiply a four-digit number by a one-digit number.', 'Use partial products to explain the algorithm.'],
        sections: [
          section('Partial products', [
            '3,456 × 4: multiply each place separately — 4 × 6 = 24 ones, 4 × 50 = 200, 4 × 400 = 1,600, 4 × 3,000 = 12,000 — then add: 24 + 200 + 1,600 + 12,000 = 13,824.',
            'The standard algorithm records the same work with carrying. Understanding partial products explains why carrying works, which makes errors easier to find.',
          ]),
        ],
        example: {
          prompt: 'Compute 2,568 × 3.',
          steps: ['3 × 8 = 24; write 4, carry 2.', '3 × 6 = 18, plus 2 = 20; write 0, carry 2.', '3 × 5 = 15, plus 2 = 17; write 7, carry 1.', '3 × 2 = 6, plus 1 = 7.'],
          answer: '7,704.',
        },
        practice: [
          num('2,568 × 3 = ?', 7704, 'Use partial products or the standard algorithm.'),
          num('1,234 × 4 = ?', 4936, '4,000 + 800 + 120 + 16.'),
        ],
      }),
    ], quiz('Multiplication check', [
      num('3,456 × 4 = ?', 13824, 'Partial products sum to 13,824.'),
      num('2,000 × 7 = ?', 14000, 'Seven groups of two thousand.'),
    ]), project({
      title: 'Multiplication error analysis',
      prompt: 'Solve three multi-digit problems, then find and correct a deliberate error in a worked example.',
      deliverable: 'Three solutions plus a written explanation of the error.',
      guidance: ['Explain where the error occurred.', 'Check with estimation.'],
      rubric: MATH_PROJECT,
    })),
    unit('u2', 'Division, fractions, and decimals', 'Division and fractions describe sharing.', [
      lesson({
        id: 'g4-math-u2-l1',
        title: 'Long division, equivalent fractions, and decimals',
        minutes: 40,
        objectives: ['Divide a three-digit number by a one-digit number.', 'Recognize equivalent fractions and relate decimals to fractions.'],
        sections: [
          section('Division and equivalence', [
            '2,568 ÷ 6: 6 goes into 25 four times (24), remainder 1; bring down 6 to make 16; 6 goes in twice (12), remainder 4; bring down 8 to make 48; 6 goes in 8 times. The quotient is 428. Check: 428 × 6 = 2,568.',
            'Equivalent fractions name the same amount: 1/2 = 2/4 = 5/10. Decimals are fractions with denominators of 10, 100, or 1,000: 0.5 = 5/10 = 1/2, 0.25 = 25/100 = 1/4.',
          ]),
        ],
        example: {
          prompt: 'Write 0.75 as a fraction in simplest form.',
          steps: ['0.75 = 75/100.', 'Divide numerator and denominator by 25.', '75 ÷ 25 = 3, 100 ÷ 25 = 4.'],
          answer: '3/4.',
        },
        practice: [
          num('2,568 ÷ 6 = ?', 428, '428 × 6 = 2,568.'),
          mc('0.25 is equivalent to', ['1/2', '1/4', '1/5', '4/1'], 1, '25/100 simplifies to 1/4.'),
        ],
      }),
    ], quiz('Division check', [
      num('3,684 ÷ 4 = ?', 921, '900 × 4 = 3,600; 21 × 4 = 84.'),
      mc('Which fraction equals 0.5?', ['1/5', '1/2', '2/5', '5/1'], 1, '0.5 = 5/10 = 1/2.'),
    ]), project({
      title: 'Fraction and decimal match',
      prompt: 'Create ten cards: five fractions and five equivalent decimals. Shuffle, match, and record the pairs with an explanation.',
      deliverable: 'Ten cards and a matching record.',
      guidance: ['Include at least two simplified fractions.', 'Check each pair.'],
      rubric: MATH_PROJECT,
    })),
    unit('u3', 'Geometry and measurement', 'Units convert by multiplying by a ratio equal to one.', [
      lesson({
        id: 'g4-math-u3-l1',
        title: 'Angles, area, and unit conversion',
        minutes: 40,
        objectives: ['Measure and classify angles.', 'Convert among metric units.'],
        sections: [
          section('Angles and units', [
            'Angles are measured in degrees. A right angle is 90°, acute is less than 90°, obtuse is between 90° and 180°, and a straight angle is 180°.',
            'Metric conversions use powers of ten: 1 km = 1,000 m, 1 m = 100 cm, 1 L = 1,000 mL, 1 kg = 1,000 g. Multiply to convert to smaller units; divide to convert to larger ones. 3.5 km = 3,500 m.',
          ]),
        ],
        example: {
          prompt: 'Convert 2.4 liters to milliliters.',
          steps: ['1 L = 1,000 mL.', 'Multiply by 1,000.', '2.4 × 1,000 = 2,400 mL.'],
          answer: '2,400 mL.',
        },
        practice: [
          num('How many meters are in 3.5 kilometers?', 3500, 'Multiply by 1,000.'),
          mc('An angle of 120° is', ['acute', 'right', 'obtuse', 'straight'], 2, 'It is between 90° and 180°.'),
        ],
      }),
    ], quiz('Measurement check', [
      num('How many milliliters are in 1.75 liters?', 1750, 'Multiply by 1,000.'),
      mc('A 180° angle is', ['acute', 'right', 'obtuse', 'straight'], 3, 'A straight angle is 180°.'),
    ]), project({
      title: 'Room remodel',
      prompt: 'Measure a room, compute area and perimeter, and price flooring using a real or realistic unit price.',
      deliverable: 'A measured sketch, calculations, and a cost estimate.',
      guidance: ['Measure twice.', 'Include units throughout.'],
      rubric: MATH_PROJECT,
    })),
  ],
  finalExam: exam('Grade 4 math final check', [
    num('3,456 × 4 = ?', 13824, 'Partial products.'),
    num('2,568 ÷ 6 = ?', 428, 'Check 428 × 6.'),
    mc('0.75 equals', ['1/2', '3/4', '3/5', '7/5'], 1, '75/100 simplifies to 3/4.'),
    num('How many meters are in 2.5 kilometers?', 2500, 'Multiply by 1,000.'),
  ], 40),
};

export const grade4Science: Course = {
  id: 'g4-sci',
  title: 'Grade 4 Science',
  subject: 'science',
  grade: 4,
  credits: 0,
  semesters: 2,
  description:
    'Matter and energy, Earth’s changing surface, and organisms and ecosystems, including adaptations and food webs.',
  essentialQuestions: ['How does energy move through a circuit?', 'How do organisms survive in their environments?'],
  teks: [teks('19 TAC ch. 112, Grade 4', 'Matter and energy; force and motion; Earth and space; organisms and environments; investigation and reasoning.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Matter and energy', 'Energy can be transferred and transformed.', [
      lesson({
        id: 'g4-sci-u1-l1',
        title: 'Circuits and conductors',
        minutes: 35,
        objectives: ['Explain a simple closed circuit.', 'Classify materials as conductors or insulators.'],
        sections: [
          section('Electricity', [
            'A closed circuit provides a complete path for electric current from a source, through wires and a device, and back. An open circuit stops the flow. A switch opens or closes the path.',
            'Conductors allow current to pass easily (copper, aluminum, salt water). Insulators resist it (rubber, glass, dry wood, plastic). Wire is copper covered in plastic for that reason. Never experiment with household outlets; use batteries only.',
          ]),
        ],
        example: {
          prompt: 'Why does a bulb go out when the switch is open?',
          steps: ['The switch breaks the path.', 'Current cannot complete the circuit.', 'No current flows through the bulb.'],
          answer: 'The circuit is open, so current stops.',
        },
        practice: [
          mc('Which is a conductor?', ['rubber', 'copper', 'glass', 'dry wood'], 1, 'Copper conducts electricity.'),
          mc('A closed circuit', ['stops current', 'provides a complete path', 'has no source', 'must be broken'], 1, 'It provides a complete path.'),
        ],
      }),
    ], quiz('Energy check', [
      mc('An insulator', ['allows current easily', 'resists current', 'creates current', 'stores current'], 1, 'It resists flow.'),
      mc('A switch works by', ['creating energy', 'opening or closing a circuit', 'increasing voltage', 'cooling wires'], 1, 'It opens or closes the path.'),
    ]), project({
      title: 'Circuit design',
      prompt: 'Draw and build (with batteries) a circuit with a switch and two bulbs. Predict what happens when one bulb is removed and test it.',
      deliverable: 'A labeled diagram, prediction, and result.',
      guidance: ['Use low-voltage batteries only.', 'Compare series and parallel if possible.'],
      rubric: INQUIRY_PROJECT,
    })),
    unit('u2', 'Earth’s changing surface', 'Weathering breaks rock; erosion moves it.', [
      lesson({
        id: 'g4-sci-u2-l1',
        title: 'Weathering, erosion, and deposition',
        minutes: 35,
        objectives: ['Distinguish weathering, erosion, and deposition.', 'Explain how fossils form in sedimentary rock.'],
        sections: [
          section('Slow changes', [
            'Weathering breaks rock into smaller pieces through water, ice, wind, and plant roots. Erosion moves the pieces. Deposition drops them somewhere new, building deltas, dunes, and layers.',
            'Fossils usually form in sedimentary rock: an organism is buried quickly, soft parts decay, and minerals replace or preserve the hard parts. Fossils in layers help scientists understand past life and environments.',
          ]),
        ],
        example: {
          prompt: 'A river carries sand to a lake and it settles. Which process is that?',
          steps: ['The sand was eroded upstream.', 'It settles where the water slows.', 'Settling is deposition.'],
          answer: 'Deposition.',
        },
        practice: [
          mc('Weathering is', ['moving rock', 'breaking rock', 'melting rock', 'compacting rock'], 1, 'It breaks rock down.'),
          mc('Fossils are most common in', ['igneous rock', 'sedimentary rock', 'metamorphic rock', 'lava'], 1, 'Layers preserve remains.'),
        ],
      }),
    ], quiz('Earth check', [
      mc('Erosion is', ['breaking rock', 'moving weathered material', 'forming magma', 'cooling lava'], 1, 'It transports material.'),
      mc('A delta forms by', ['erosion only', 'deposition of sediment', 'volcanic eruption', 'glacier melting only'], 1, 'Sediment settles at the mouth.'),
    ]), project({
      title: 'Erosion in a tray',
      prompt: 'Build a soil model in a tray, pour water, and record where soil moves. Propose one way to reduce erosion.',
      deliverable: 'Before-and-after drawings, data, and a recommendation.',
      guidance: ['Use the same water volume each trial.', 'Photograph results.'],
      rubric: INQUIRY_PROJECT,
    })),
    unit('u3', 'Organisms and ecosystems', 'Adaptations help organisms survive in a habitat.', [
      lesson({
        id: 'g4-sci-u3-l1',
        title: 'Adaptations and food webs',
        minutes: 35,
        objectives: ['Give examples of structural and behavioral adaptations.', 'Build a food web with producers, consumers, and decomposers.'],
        sections: [
          section('Survival', [
            'A structural adaptation is a body feature, such as a cactus’s waxy skin or a bird’s beak shape. A behavioral adaptation is an action, such as migration or nocturnal feeding. Adaptations arise over generations through natural selection; individuals do not choose them.',
            'A food web connects multiple food chains. Producers make food, consumers eat other organisms, and decomposers break down dead material and return nutrients to the soil.',
          ]),
        ],
        example: {
          prompt: 'Why does a cactus have spines instead of broad leaves?',
          steps: ['Broad leaves lose water.', 'Spines reduce water loss and deter herbivores.', 'This is a structural adaptation to dry habitats.'],
          answer: 'Spines conserve water and protect the plant.',
        },
        practice: [
          mc('Migration is a', ['structural adaptation', 'behavioral adaptation', 'food chain', 'decomposer'], 1, 'It is an action.'),
          mc('Decomposers', ['make food from sunlight', 'break down dead organisms', 'only eat plants', 'are always predators'], 1, 'They recycle nutrients.'),
        ],
      }),
    ], quiz('Ecosystems check', [
      mc('A cactus’s waxy skin is a', ['behavioral adaptation', 'structural adaptation', 'food web', 'habitat'], 1, 'It is a body feature.'),
      mc('In a food web, arrows show', ['size', 'energy flow', 'age', 'color'], 1, 'Arrows show energy transfer.'),
    ]), project({
      title: 'Food web poster',
      prompt: 'Choose a Texas ecosystem and build a food web with at least eight organisms. Remove one organism and predict two effects.',
      deliverable: 'A labeled food web plus a prediction paragraph.',
      guidance: ['Include producers and decomposers.', 'Justify each arrow.'],
      rubric: INQUIRY_PROJECT,
    })),
  ],
  finalExam: exam('Grade 4 science final check', [
    mc('Which is an insulator?', ['copper', 'rubber', 'aluminum', 'salt water'], 1, 'Rubber resists current.'),
    mc('Weathering is', ['moving rock', 'breaking rock down', 'melting rock', 'compacting sediment'], 1, 'It breaks rock.'),
    mc('Fossils commonly form in', ['igneous rock', 'sedimentary rock', 'lava', 'magma'], 1, 'Layers preserve remains.'),
    mc('Decomposers', ['produce sunlight', 'recycle nutrients from dead organisms', 'only eat meat', 'make fossils'], 1, 'They return nutrients to the ecosystem.'),
  ], 40),
};

export const grade4SocialStudies: Course = {
  id: 'g4-ss',
  title: 'Grade 4 Texas History',
  subject: 'social-studies',
  grade: 4,
  credits: 0,
  semesters: 2,
  description:
    'Texas from Native peoples and Spanish missions through the Revolution, the Republic, statehood, the Civil War, and the modern state.',
  essentialQuestions: ['Why did Texans seek independence?', 'How have migration and industry changed Texas?'],
  teks: [teks('19 TAC ch. 113, Grade 4', 'Texas history from early peoples through the present; geography; government; economics; citizenship.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Missions, colonies, and revolution', 'Texas changed hands and changed again.', [
      lesson({
        id: 'g4-ss-u1-l1',
        title: 'Missions, Mexican Texas, and the Revolution',
        minutes: 35,
        objectives: ['Explain the purpose of Spanish missions.', 'Sequence events of the Texas Revolution.'],
        sections: [
          section('From missions to independence', [
            'Spain established missions in Texas in the 1700s to convert Native peoples and secure territory; San Antonio’s missions are examples. After Mexico won independence from Spain in 1821, it encouraged settlement, and Stephen F. Austin brought Anglo colonists beginning in 1821.',
            'Tensions over slavery, central rule, and representation led to the Texas Revolution (1835–1836). The Alamo fell in March 1836; delegates declared independence on March 2, 1836; Sam Houston’s army won at San Jacinto on April 21, 1836. The Republic of Texas existed from 1836 to 1845.',
          ]),
        ],
        example: {
          prompt: 'Why is April 21, 1836 significant?',
          steps: ['Identify the battle: San Jacinto.', 'Identify the outcome: Texian victory.', 'Identify the consequence: independence secured.'],
          answer: 'The victory at San Jacinto secured Texas independence.',
        },
        practice: [
          mc('The Texas Declaration of Independence was signed in', ['1821', '1836', '1845', '1861'], 1, 'It was signed in March 1836.'),
          mc('The Republic of Texas lasted from', ['1821 to 1836', '1836 to 1845', '1845 to 1861', '1861 to 1865'], 1, 'It existed from 1836 to 1845.'),
        ],
      }),
    ], quiz('Revolution check', [
      mc('The battle at San Jacinto took place in', ['1835', '1836', '1845', '1861'], 1, 'It was April 21, 1836.'),
      mc('Spanish missions in Texas were built mainly to', ['mine gold', 'convert Native peoples and secure territory', 'build railroads', 'grow cotton'], 1, 'They served religious and territorial goals.'),
    ]), project({
      title: 'Texas Revolution timeline',
      prompt: 'Create a timeline of eight events from 1821 to 1845 with dates and one sentence each.',
      deliverable: 'A labeled timeline with accurate dates.',
      guidance: ['Verify dates with a Texas history source.', 'Include causes as well as battles.'],
      rubric: CREATIVE_PROJECT,
    })),
    unit('u2', 'Statehood, war, and Reconstruction', 'Statehood brought new conflicts and new rights.', [
      lesson({
        id: 'g4-ss-u2-l1',
        title: 'Annexation, the Civil War, and Juneteenth',
        minutes: 35,
        objectives: ['Explain Texas annexation.', 'Describe the significance of Juneteenth.'],
        sections: [
          section('A changing state', [
            'Texas joined the United States in 1845, which led to war with Mexico (1846–1848). Texas seceded in 1861 and joined the Confederacy; the Civil War ended in 1865. Reconstruction brought constitutional changes, including the Thirteenth, Fourteenth, and Fifteenth Amendments.',
            'On June 19, 1865, Union General Gordon Granger announced in Galveston that enslaved people were free — more than two years after the Emancipation Proclamation. Juneteenth commemorates that day and is now a federal holiday.',
          ]),
        ],
        example: {
          prompt: 'Why did Juneteenth come after the Emancipation Proclamation?',
          steps: ['The Proclamation took effect in 1863 in Confederate states.', 'Texas was remote and Confederate control limited enforcement.', 'Freedom was not enforced in Texas until June 1865.'],
          answer: 'Enforcement reached Texas only after the Confederacy collapsed.',
        },
        practice: [
          mc('Texas became a state in', ['1836', '1845', '1861', '1876'], 1, 'Annexation was in 1845.'),
          mc('Juneteenth commemorates', ['the Alamo', 'the announcement of freedom in Galveston', 'statehood', 'the oil boom'], 1, 'It marks June 19, 1865.'),
        ],
      }),
    ], quiz('Statehood check', [
      mc('The Civil War ended in', ['1861', '1863', '1865', '1876'], 2, 'It ended in 1865.'),
      mc('The Thirteenth Amendment', ['abolished slavery', 'granted women the vote', 'created the income tax', 'established the Senate'], 0, 'It abolished slavery.'),
    ]), project({
      title: 'Primary source letter',
      prompt: 'Imagine you are a Texan in 1865. Write a letter describing what changed and what stayed the same, using three accurate historical details.',
      deliverable: 'A one-page letter with a note identifying the historical details.',
      guidance: ['Keep the voice of the period but do not invent false facts.', 'Label the three details.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u3', 'Modern Texas', 'Oil, technology, and migration reshaped the state.', [
      lesson({
        id: 'g4-ss-u3-l1',
        title: 'Oil, cities, and the modern economy',
        minutes: 35,
        objectives: ['Explain the impact of the 1901 Spindletop discovery.', 'Identify major modern Texas industries.'],
        sections: [
          section('Boom and bust', [
            'The Spindletop gusher near Beaumont in 1901 launched the Texas oil boom. Oil brought jobs, railroads, and ports, and made Houston a center of energy and shipping. Boom-and-bust cycles meant prices and jobs rose and fell with oil.',
            'Modern Texas also relies on technology, aerospace, agriculture, health care, and international trade. The state’s population has grown rapidly, raising questions about water, housing, and transportation.',
          ]),
        ],
        example: {
          prompt: 'How did oil change Houston?',
          steps: ['Oil companies needed offices, ports, and workers.', 'Population and infrastructure grew.', 'The city became an energy and shipping center.'],
          answer: 'Oil drove population and infrastructure growth.',
        },
        practice: [
          mc('Spindletop is associated with', ['cotton', 'oil', 'cattle', 'wind power'], 1, 'It was an oil discovery.'),
          mc('A boom-and-bust cycle means', ['steady growth', 'rapid growth followed by decline', 'no change', 'only decline'], 1, 'It alternates growth and contraction.'),
        ],
      }),
    ], quiz('Modern Texas check', [
      mc('Spindletop was discovered in', ['1865', '1901', '1929', '1945'], 1, 'It was 1901.'),
      mc('A modern Texas industry is', ['aerospace', 'whaling', 'glacier mining', 'tea plantations'], 0, 'Aerospace is significant in Texas.'),
    ]), project({
      title: 'Texas industry report',
      prompt: 'Research one Texas industry. Report its history, where it operates, and one challenge it faces, with two sources.',
      deliverable: 'A one-page report with citations.',
      guidance: ['Use a government or academic source.', 'Include dates and locations.'],
      rubric: WRITING_PROJECT,
    })),
  ],
  finalExam: exam('Grade 4 Texas history final check', [
    mc('The Texas Declaration of Independence was signed in', ['1821', '1836', '1845', '1861'], 1, 'March 1836.'),
    mc('Texas became a state in', ['1836', '1845', '1861', '1876'], 1, 'Annexation was 1845.'),
    mc('Juneteenth marks', ['the Alamo', 'freedom announced in Galveston', 'statehood', 'the oil boom'], 1, 'June 19, 1865.'),
    mc('Spindletop was', ['a cotton farm', 'an oil discovery', 'a mission', 'a railroad'], 1, 'It was a 1901 oil gusher.'),
  ], 40),
};
