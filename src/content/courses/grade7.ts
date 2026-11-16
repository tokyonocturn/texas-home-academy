import type { Course } from '../../types';
import { MIDDLE_WEIGHTS } from '../weights';
import { CREATIVE_PROJECT, INQUIRY_PROJECT, MATH_PROJECT, WRITING_PROJECT } from '../rubrics';
import { exam, lesson, mc, num, project, quiz, section, teks, unit } from '../builders';

/** Grade 7. Alignment: 19 TAC chapters 110-113. Social studies is Texas history. */

export const grade7Ela: Course = {
  id: 'g7-ela',
  title: 'Grade 7 English Language Arts',
  subject: 'ela',
  grade: 7,
  credits: 0,
  semesters: 2,
  description:
    'Literary analysis of character and theme, text structure and argument in informational text, and researched writing with revision.',
  essentialQuestions: ['How does an author’s craft shape meaning?', 'How do I revise an argument to make it stronger?'],
  teks: [teks('19 TAC ch. 110, Grade 7', 'Literary and informational comprehension; author’s craft; argumentative and expository composition; research; revision.')],
  weights: MIDDLE_WEIGHTS,
  units: [
    unit('u1', 'Literary analysis', 'Craft choices produce effects you can name.', [
      lesson({
        id: 'g7-ela-u1-l1',
        title: 'Point of view, pacing, and tone',
        minutes: 45,
        objectives: ['Explain how point of view shapes information.', 'Analyze how pacing creates tension.'],
        sections: [
          section('Who tells it, and how fast', [
            'First-person narration gives access to one mind and limits what the reader can know. Third-person limited follows one character; omniscient narration can move among minds. An unreliable narrator forces the reader to weigh claims against evidence.',
            'Pacing is controlled by sentence length, scene versus summary, and chapter breaks. Short sentences and rapid scene changes accelerate; long reflective passages slow the reader down. Authors use pacing to build tension or to let a moment land.',
          ]),
        ],
        example: {
          prompt: 'A narrator says “I am not angry” while describing slammed doors. What is happening?',
          steps: ['The statement contradicts the actions.', 'The contradiction signals unreliability or denial.', 'The reader infers anger from evidence.'],
          answer: 'The narrator is unreliable or self-deceiving; actions reveal the truth.',
        },
        practice: [
          mc('Third-person limited narration', ['knows all minds', 'follows one character’s perspective', 'is always unreliable', 'uses “I”'], 1, 'It stays with one perspective.'),
          mc('Short sentences and rapid scenes usually', ['slow the pace', 'increase tension', 'stop the plot', 'change the setting'], 1, 'They accelerate pacing.'),
        ],
      }),
    ], quiz('Craft check', [
      mc('An unreliable narrator', ['knows everything', 'gives information the reader must question', 'is always lying', 'never speaks'], 1, 'Readers must weigh the account.'),
      mc('Pacing can be controlled by', ['sentence length and scene breaks', 'the cover', 'the title', 'chapter numbering only'], 0, 'Craft controls pace.'),
    ]), project({
      title: 'Craft analysis essay',
      prompt: 'Analyze how one craft choice (point of view, pacing, or tone) shapes meaning in a short story, with three quotations.',
      deliverable: 'A 600-word essay with a works-cited entry.',
      guidance: ['Name the technique precisely.', 'Explain effect, not just presence.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u2', 'Informational text and argument', 'Structure and evidence carry an argument.', [
      lesson({
        id: 'g7-ela-u2-l1',
        title: 'Tracing an argument and judging evidence',
        minutes: 45,
        objectives: ['Map an argument’s claim, reasons, and evidence.', 'Evaluate the credibility of two sources.'],
        sections: [
          section('Mapping an argument', [
            'Read with a pencil: underline the claim, number the reasons, and bracket the evidence. Then ask what is missing — a definition, a comparison, a counterargument.',
            'Credibility depends on expertise, method, and independence. A industry-funded study is not automatically wrong, but its funding is relevant context. A single study is weaker than a body of research.',
          ]),
        ],
        example: {
          prompt: 'An article claims a new schedule raised test scores, citing one school’s results.',
          steps: ['Claim: schedule caused score gains.', 'Evidence: one school.', 'Weakness: no comparison group; other changes possible.'],
          answer: 'The evidence is insufficient for a causal claim.',
        },
        practice: [
          mc('A causal claim requires', ['one anecdote', 'evidence that rules out alternatives', 'a slogan', 'a citation'], 1, 'Causal claims need comparison and controls.'),
          mc('Funding is relevant because it can', ['prove bias automatically', 'signal potential conflicts of interest', 'replace methods', 'determine truth'], 1, 'It is context, not proof.'),
        ],
      }),
    ], quiz('Argument check', [
      mc('A claim without evidence is', ['an assertion', 'a proof', 'a citation', 'a summary'], 0, 'It is unsupported.'),
      mc('A comparison group helps because it', ['shows change without treatment', 'proves funding', 'replaces data', 'adds length'], 0, 'It controls for other causes.'),
    ]), project({
      title: 'Argument map',
      prompt: 'Map an op-ed: claim, reasons, evidence, and one missing piece. Then write a 300-word evaluation.',
      deliverable: 'A map plus evaluation.',
      guidance: ['Quote the claim exactly.', 'Identify the strongest and weakest evidence.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u3', 'Research and revision', 'Revision is where writing improves.', [
      lesson({
        id: 'g7-ela-u3-l1',
        title: 'Research questions and meaningful revision',
        minutes: 45,
        objectives: ['Refine a research question.', 'Revise for organization and evidence.'],
        sections: [
          section('Revise at the level of ideas', [
            'Revision is not proofreading. Read your draft and ask: is the claim clear, is each paragraph doing one job, does every quotation have commentary, and does the conclusion follow from the evidence?',
            'A useful revision technique is reverse outlining: write each paragraph’s main idea in the margin, then check whether the sequence makes an argument. If two paragraphs make the same point, combine them or cut one.',
          ]),
        ],
        example: {
          prompt: 'Reverse outline reveals two paragraphs both arguing cost. What do you do?',
          steps: ['Keep the stronger evidence.', 'Move any unique point into the surviving paragraph.', 'Cut the duplicate.'],
          answer: 'Consolidate into one paragraph with the best evidence.',
        },
        practice: [
          mc('Revision primarily concerns', ['spelling', 'ideas and organization', 'font', 'length'], 1, 'Ideas and structure come first.'),
          mc('A reverse outline helps you see', ['each paragraph’s main idea', 'the font size', 'citation style', 'word count'], 0, 'It exposes structure.'),
        ],
      }),
    ], quiz('Revision check', [
      mc('Proofreading differs from revision because proofreading', ['changes ideas', 'fixes surface errors', 'adds sources', 'rewrites structure'], 1, 'It addresses surface errors.'),
      mc('Every quotation should have', ['a page number only', 'commentary connecting it to the claim', 'a title', 'a summary'], 1, 'Commentary is required.'),
    ]), project({
      title: 'Researched essay with revision memo',
      prompt: 'Write an 800-word researched essay, then submit a one-page memo describing three revisions and why you made them.',
      deliverable: 'Final essay, works cited, and revision memo.',
      guidance: ['Keep the earlier draft for comparison.', 'Be specific about changes.'],
      rubric: WRITING_PROJECT,
    })),
  ],
  finalExam: exam('Grade 7 ELA final check', [
    mc('Third-person limited narration', ['knows all minds', 'follows one perspective', 'is always unreliable', 'uses “I”'], 1, 'It stays with one character.'),
    mc('Pacing can be controlled by', ['sentence length and scene breaks', 'the cover', 'the title', 'page numbers'], 0, 'Craft controls pace.'),
    mc('A causal claim requires', ['an anecdote', 'evidence ruling out alternatives', 'a slogan', 'length'], 1, 'Causation needs comparison.'),
    mc('Revision focuses first on', ['surface errors', 'ideas and organization', 'font', 'margins'], 1, 'Ideas come first.'),
  ], 50),
};

export const grade7Math: Course = {
  id: 'g7-math',
  title: 'Grade 7 Mathematics',
  subject: 'math',
  grade: 7,
  credits: 0,
  semesters: 2,
  description:
    'Proportional reasoning, operations with rational numbers, expressions and equations, circles and probability.',
  essentialQuestions: ['How do proportions solve everyday problems?', 'How do I reason about uncertainty?'],
  teks: [teks('19 TAC ch. 111, Grade 7', 'Proportionality; rational number operations; expressions, equations, and inequalities; geometry; probability and statistics.')],
  weights: MIDDLE_WEIGHTS,
  units: [
    unit('u1', 'Proportional relationships', 'A constant ratio defines a proportional relationship.', [
      lesson({
        id: 'g7-math-u1-l1',
        title: 'Proportions, percents, and scale',
        minutes: 45,
        objectives: ['Solve proportions.', 'Compute percent increase and decrease.'],
        sections: [
          section('Proportional reasoning', [
            'Two quantities are proportional if their ratio is constant. A recipe using 2 cups of flour for 12 cookies has a unit rate of 1/6 cup per cookie; scaling multiplies both quantities by the same factor.',
            'Percent change = (new − old) / old × 100%. From $40 to $50 is (10/40) × 100% = 25% increase. Percent of a number: 15% of 80 = 0.15 × 80 = 12.',
          ]),
        ],
        example: {
          prompt: 'A $60 item is discounted 20%. What is the sale price?',
          steps: ['Discount = 0.20 × 60 = 12.', 'Sale price = 60 − 12 = 48.'],
          answer: '$48.',
        },
        practice: [
          num('What is 15% of 80?', 12, '0.15 × 80 = 12.'),
          num('A $60 item is 20% off. What is the sale price in dollars?', 48, '60 − 12 = 48.'),
        ],
      }),
    ], quiz('Proportions check', [
      num('A price rises from $40 to $50. What is the percent increase?', 25, '10/40 = 25%.'),
      mc('A proportional relationship has', ['a constant sum', 'a constant ratio', 'no pattern', 'a constant difference only'], 1, 'The ratio is constant.'),
    ]), project({
      title: 'Discount and tax project',
      prompt: 'Choose three items, apply a 25% discount and 8.25% sales tax, and compute final prices. Show each step.',
      deliverable: 'A table with all calculations.',
      guidance: ['Apply tax after the discount.', 'Round to cents.'],
      rubric: MATH_PROJECT,
    })),
    unit('u2', 'Rational numbers and equations', 'Operations with signed numbers follow consistent rules.', [
      lesson({
        id: 'g7-math-u2-l1',
        title: 'Two-step equations and rational operations',
        minutes: 45,
        objectives: ['Solve two-step equations.', 'Multiply and divide negative fractions and decimals.'],
        sections: [
          section('Solving', [
            'Undo operations in reverse order. For 3x − 7 = 14: add 7 (3x = 21), then divide by 3 (x = 7). For x/4 + 2 = 5: subtract 2 (x/4 = 3), then multiply by 4 (x = 12).',
            'Signed fraction and decimal operations follow integer rules: (−2/3) × (3/4) = −6/12 = −1/2. Division by a fraction is multiplication by its reciprocal: 3/4 ÷ 2/3 = 3/4 × 3/2 = 9/8.',
          ]),
        ],
        example: {
          prompt: 'Solve 5x + 3 = 23.',
          steps: ['Subtract 3: 5x = 20.', 'Divide by 5: x = 4.', 'Check: 5(4) + 3 = 23.'],
          answer: 'x = 4.',
        },
        practice: [
          num('Solve 3x − 7 = 14.', 7, '3x = 21, so x = 7.'),
          num('Solve x/4 + 2 = 5.', 12, 'x/4 = 3, so x = 12.'),
        ],
      }),
    ], quiz('Equations check', [
      num('Solve 5x + 3 = 23.', 4, '5x = 20.'),
      mc('3/4 ÷ 2/3 = ?', ['9/8', '6/12', '1/2', '2/3'], 0, 'Multiply by the reciprocal: 9/8.'),
    ]), project({
      title: 'Equation modeling',
      prompt: 'Write three two-step equations from real situations and solve them, explaining each step.',
      deliverable: 'Three problems with solutions and checks.',
      guidance: ['Define variables.', 'Check each solution.'],
      rubric: MATH_PROJECT,
    })),
    unit('u3', 'Geometry and probability', 'Area and chance can both be calculated.', [
      lesson({
        id: 'g7-math-u3-l1',
        title: 'Circle area and simple probability',
        minutes: 45,
        objectives: ['Compute circumference and area of circles.', 'Compute simple and compound probability.'],
        sections: [
          section('Circles and chance', [
            'Circumference C = 2πr; area A = πr². A circle with radius 5 has C = 10π ≈ 31.42 and A = 25π ≈ 78.54.',
            'Probability of an event = favorable outcomes / total equally likely outcomes. A bag with 3 red and 7 blue marbles gives P(red) = 3/10 = 0.3. Independent events multiply: P(two reds with replacement) = 0.3 × 0.3 = 0.09.',
          ]),
        ],
        example: {
          prompt: 'Find the area of a circle with radius 5, and the probability of drawing two reds with replacement from 3 red and 7 blue.',
          steps: ['A = π(25) ≈ 78.54.', 'P(red) = 3/10.', 'With replacement, independent: 0.3 × 0.3 = 0.09.'],
          answer: 'Area ≈ 78.54 square units; probability 0.09 (9%).',
        },
        practice: [
          num('What is the area of a circle with radius 3? Use π ≈ 3.14159 and round to two decimals.', 28.27, '9π ≈ 28.27.'),
          num('A bag has 3 red and 7 blue marbles. What is P(red) as a decimal?', 0.3, '3/10 = 0.3.'),
        ],
      }),
    ], quiz('Geometry and probability check', [
      num('What is the circumference of a circle with radius 4? Round to two decimals.', 25.13, '8π ≈ 25.13.'),
      mc('Independent events are combined by', ['adding probabilities', 'multiplying probabilities', 'subtracting', 'dividing by two'], 1, 'Multiply for independent events.'),
    ]), project({
      title: 'Probability experiment',
      prompt: 'Predict and test 50 trials of a simple random event. Compare experimental and theoretical probability.',
      deliverable: 'A prediction, data table, graph, and comparison.',
      guidance: ['Define the sample space.', 'Explain why results differ from theory.'],
      rubric: MATH_PROJECT,
    })),
  ],
  finalExam: exam('Grade 7 math final check', [
    num('What is 15% of 80?', 12, '0.15 × 80.'),
    num('Solve 3x − 7 = 14.', 7, '3x = 21.'),
    num('What is the area of a circle with radius 5? Round to two decimals.', 78.54, '25π ≈ 78.54.'),
    mc('P(red) with 3 red and 7 blue is', ['0.3', '0.7', '0.3%', '3'], 0, '3/10 = 0.3.'),
  ], 50),
};

export const grade7Science: Course = {
  id: 'g7-sci',
  title: 'Grade 7 Science',
  subject: 'science',
  grade: 7,
  credits: 0,
  semesters: 2,
  description:
    'Chemical and physical changes, forces and work, Earth systems, and Texas organisms and environments.',
  essentialQuestions: ['How do we know a chemical reaction occurred?', 'How does energy move through Texas ecosystems?'],
  teks: [teks('19 TAC ch. 112, Grade 7', 'Matter and energy; force, motion, and energy; Earth and space; organisms and environments; investigation and reasoning.')],
  weights: MIDDLE_WEIGHTS,
  units: [
    unit('u1', 'Matter and chemical change', 'Chemical changes produce new substances.', [
      lesson({
        id: 'g7-sci-u1-l1',
        title: 'Evidence of chemical reactions',
        minutes: 40,
        objectives: ['Distinguish physical from chemical change.', 'Apply conservation of mass to a reaction.'],
        sections: [
          section('New substances', [
            'A chemical change produces a new substance with different properties. Evidence includes gas production, precipitate, color change, temperature change, or light. Rusting, burning, and baking are chemical; melting and dissolving are usually physical.',
            'Mass is conserved in a closed system. In 2H₂ + O₂ → 2H₂O, four hydrogen atoms and two oxygen atoms appear on each side. If a gas escapes, measured mass drops even though total mass is conserved.',
          ]),
        ],
        example: {
          prompt: 'Baking soda and vinegar fizz in an open cup and the mass falls. Explain.',
          steps: ['CO₂ gas is produced.', 'It escapes the open cup.', 'In a sealed bag, mass would be unchanged.'],
          answer: 'Mass is conserved; the gas left the system boundary.',
        },
        practice: [
          mc('Which is evidence of a chemical change?', ['melting', 'gas production', 'breaking', 'dissolving sugar'], 1, 'Gas production can signal a reaction.'),
          mc('Conservation of mass applies to', ['open systems only', 'closed systems', 'only solids', 'only gases'], 1, 'Closed systems conserve mass.'),
        ],
      }),
    ], quiz('Chemical change check', [
      mc('Rusting is a', ['physical change', 'chemical change', 'change of state', 'mixture'], 1, 'It forms a new substance.'),
      mc('If a gas escapes an open container, measured mass', ['increases', 'decreases', 'stays identical', 'doubles'], 1, 'The gas leaves the measured system.'),
    ]), project({
      title: 'Reaction evidence lab',
      prompt: 'Perform three safe reactions and record evidence of chemical change. Balance one equation.',
      deliverable: 'A data table, observations, and a balanced equation.',
      guidance: ['Wear eye protection.', 'Distinguish observation from inference.'],
      rubric: INQUIRY_PROJECT,
    })),
    unit('u2', 'Forces and work', 'Work is force applied over a distance.', [
      lesson({
        id: 'g7-sci-u2-l1',
        title: 'Work, power, and simple machines',
        minutes: 40,
        objectives: ['Compute work and power.', 'Explain mechanical advantage.'],
        sections: [
          section('Work', [
            'Work = force × distance in the direction of the force. Lifting a 20 N box 2 m does 40 J of work. Power = work / time; doing 40 J in 4 s is 10 W.',
            'Simple machines provide mechanical advantage by trading force for distance. A ramp lets you push with less force over a longer distance. No machine creates energy; friction reduces efficiency.',
          ]),
        ],
        example: {
          prompt: 'Lift a 30 N box 3 m in 6 s. Find work and power.',
          steps: ['W = 30 × 3 = 90 J.', 'P = 90 / 6 = 15 W.'],
          answer: '90 J and 15 W.',
        },
        practice: [
          num('How much work is done lifting a 20 N box 2 m?', 40, '20 × 2 = 40 J.'),
          num('40 J of work in 4 s is how many watts?', 10, '40 / 4 = 10 W.'),
        ],
      }),
    ], quiz('Work check', [
      num('How much work is done pushing a 50 N crate 3 m?', 150, '50 × 3 = 150 J.'),
      mc('A machine cannot', ['change force', 'change direction', 'create energy', 'trade distance for force'], 2, 'Energy is conserved.'),
    ]), project({
      title: 'Machine efficiency',
      prompt: 'Compare lifting a load directly with using a ramp. Measure force and distance, compute work, and explain the difference.',
      deliverable: 'Measurements, calculations, and an efficiency discussion.',
      guidance: ['Measure along the ramp, not vertically.', 'Discuss friction losses.'],
      rubric: INQUIRY_PROJECT,
    })),
    unit('u3', 'Earth systems and Texas ecosystems', 'Water, rock, and life cycle through systems.', [
      lesson({
        id: 'g7-sci-u3-l1',
        title: 'Groundwater, watersheds, and Texas biomes',
        minutes: 40,
        objectives: ['Explain how water moves through a watershed.', 'Describe one Texas biome and an adaptation.'],
        sections: [
          section('Systems', [
            'A watershed is the land area that drains into a particular body of water. Rain flows over land, enters streams, and may infiltrate to recharge groundwater. Pollution anywhere in a watershed can reach the water body.',
            'Texas biomes include the piney woods, coastal prairies, Hill Country, and Chihuahuan Desert. Adaptations match conditions: deep roots and waxy leaves in dry regions; dense canopy and shade tolerance in forests.',
          ]),
        ],
        example: {
          prompt: 'Why does fertilizer applied far from a river still matter?',
          steps: ['Rain moves it across the land.', 'It enters streams within the watershed.', 'Nutrients can cause algal growth downstream.'],
          answer: 'Watersheds connect land use to water quality.',
        },
        practice: [
          mc('A watershed is', ['a lake only', 'land that drains to a body of water', 'a type of soil', 'a weather pattern'], 1, 'It is a drainage area.'),
          mc('A desert plant adaptation is', ['broad thin leaves', 'waxy leaves and deep roots', 'growing in water', 'no roots'], 1, 'Those conserve water.'),
        ],
      }),
    ], quiz('Earth systems check', [
      mc('Groundwater recharge happens when', ['water evaporates', 'water infiltrates the soil', 'rivers flood', 'rain stops'], 1, 'Infiltrated water recharges aquifers.'),
      mc('Fertilizer runoff can cause', ['algal blooms', 'drought', 'earthquakes', 'volcanoes'], 0, 'Excess nutrients feed algae.'),
    ]), project({
      title: 'Watershed map',
      prompt: 'Map your local watershed, mark three pollution risks, and propose one realistic reduction.',
      deliverable: 'A labeled map and a one-paragraph proposal.',
      guidance: ['Use a local water authority source.', 'Distinguish point and nonpoint sources.'],
      rubric: INQUIRY_PROJECT,
    })),
  ],
  finalExam: exam('Grade 7 science final check', [
    mc('Rusting is a', ['physical change', 'chemical change', 'change of state', 'mixture'], 1, 'It forms a new substance.'),
    num('How much work is done lifting a 30 N box 3 m?', 90, '30 × 3 = 90 J.'),
    num('40 J in 4 s is how many watts?', 10, '40 / 4 = 10 W.'),
    mc('A watershed is', ['a lake', 'land draining to a body of water', 'a soil type', 'a storm'], 1, 'It is a drainage area.'),
  ], 50),
};

export const grade7SocialStudies: Course = {
  id: 'g7-ss',
  title: 'Grade 7 Texas History',
  subject: 'social-studies',
  grade: 7,
  credits: 0,
  semesters: 2,
  description:
    'Texas from its earliest peoples through Spanish and Mexican rule, revolution and republic, statehood, Reconstruction, and the modern state.',
  essentialQuestions: ['What conflicts shaped Texas?', 'How did Texas become a modern industrial state?'],
  teks: [teks('19 TAC ch. 113, Grade 7', 'Texas history: early peoples; Spanish and Mexican Texas; revolution and republic; statehood; Civil War and Reconstruction; twentieth-century Texas; government and economy.')],
  weights: MIDDLE_WEIGHTS,
  units: [
    unit('u1', 'Early Texas through revolution', 'Texas was contested ground long before 1836.', [
      lesson({
        id: 'g7-ss-u1-l1',
        title: 'Missions, colonization, and independence',
        minutes: 45,
        objectives: ['Explain Spanish and Mexican policies in Texas.', 'Analyze causes of the Texas Revolution.'],
        sections: [
          section('Layers of settlement', [
            'Spain built missions and presidios in the 1700s to secure Texas and convert Native peoples. After Mexican independence in 1821, Mexico opened Texas to colonization through empresarios such as Stephen F. Austin. Settlers from the United States soon outnumbered Tejanos in some areas.',
            'Causes of the Texas Revolution included Mexico’s centralization under Santa Anna, restrictions on slavery, and demands for separate statehood. The Alamo fell in March 1836, independence was declared on March 2, 1836, and the victory at San Jacinto on April 21, 1836 secured it.',
          ]),
        ],
        example: {
          prompt: 'Why was slavery a source of tension in Mexican Texas?',
          steps: ['Mexico restricted slavery.', 'Many Anglo colonists brought enslaved people.', 'The conflict fed into revolutionary grievances.'],
          answer: 'Mexican restrictions conflicted with colonists’ economic system.',
        },
        practice: [
          mc('Mexico won independence from Spain in', ['1810', '1821', '1836', '1845'], 1, 'It was 1821.'),
          mc('The victory that secured Texas independence was at', ['the Alamo', 'Gonzales', 'San Jacinto', 'Goliad'], 2, 'San Jacinto, April 21, 1836.'),
        ],
      }),
    ], quiz('Revolution check', [
      mc('Mexican independence from Spain came in', ['1810', '1821', '1836', '1845'], 1, 'It was 1821.'),
      mc('An empresario was', ['a soldier', 'a land agent who brought settlers', 'a missionary', 'a governor'], 1, 'Empresarios brought colonists.'),
    ]), project({
      title: 'Causes of revolution essay',
      prompt: 'Write a 600-word essay analyzing two causes of the Texas Revolution, with evidence and one counterargument.',
      deliverable: 'Essay with citations.',
      guidance: ['Distinguish long-term and immediate causes.', 'Use primary sources where possible.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u2', 'Statehood, war, and Reconstruction', 'Statehood brought growth and conflict.', [
      lesson({
        id: 'g7-ss-u2-l1',
        title: 'Annexation, the Civil War, and Juneteenth',
        minutes: 45,
        objectives: ['Explain the annexation debate.', 'Describe Reconstruction in Texas.'],
        sections: [
          section('A state divided', [
            'Texas annexed in 1845, which contributed to war with Mexico (1846–1848). The state seceded in 1861 and joined the Confederacy. The Civil War damaged the economy and ended slavery, but white supremacy persisted through violence and later Jim Crow laws.',
            'On June 19, 1865, General Gordon Granger announced in Galveston that enslaved people were free. Reconstruction (1865–1877) brought the Thirteenth, Fourteenth, and Fifteenth Amendments, new state constitutions, and expanded rights, then ended with federal withdrawal and disenfranchisement.',
          ]),
        ],
        example: {
          prompt: 'Why is Juneteenth a Texas holiday with national significance?',
          steps: ['It marks the enforcement of emancipation in Texas.', 'It became a federal holiday in 2021.', 'It commemorates freedom and its delayed enforcement.'],
          answer: 'It commemorates June 19, 1865 and the end of slavery in Texas.',
        },
        practice: [
          mc('Texas seceded in', ['1845', '1861', '1865', '1877'], 1, 'It seceded in 1861.'),
          mc('Juneteenth commemorates', ['annexation', 'the announcement of freedom in Galveston', 'the Alamo', 'statehood'], 1, 'June 19, 1865.'),
        ],
      }),
    ], quiz('Statehood check', [
      mc('Reconstruction ended in', ['1865', '1870', '1877', '1901'], 2, 'It ended in 1877.'),
      mc('The Fourteenth Amendment guarantees', ['free speech', 'equal protection', 'the right to bear arms', 'no taxes'], 1, 'It guarantees equal protection.'),
    ]), project({
      title: 'Reconstruction document analysis',
      prompt: 'Analyze two documents from Reconstruction Texas with opposing perspectives. Explain purpose, audience, and evidence.',
      deliverable: 'A two-page analysis.',
      guidance: ['Identify each author’s position.', 'Avoid treating either as neutral.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u3', 'Modern Texas', 'Oil and technology transformed the state.', [
      lesson({
        id: 'g7-ss-u3-l1',
        title: 'Oil, urbanization, and the modern economy',
        minutes: 45,
        objectives: ['Explain the effects of the oil industry.', 'Describe a modern Texas economic sector.'],
        sections: [
          section('Boom and bust', [
            'Spindletop (1901) launched the oil industry in Texas. Oil financed railroads, ports, and universities, and Houston became a center for energy and shipping. Dependence on oil also exposed the state to boom-and-bust cycles.',
            'Modern Texas has large technology, aerospace, health care, agriculture, and trade sectors. Rapid population growth creates pressure on water, housing, and transportation, and the state’s water planning relies on groundwater and surface water management.',
          ]),
        ],
        example: {
          prompt: 'How did the oil industry shape Houston?',
          steps: ['Companies needed offices, ports, and workers.', 'Population and infrastructure grew.', 'The city became an energy hub.'],
          answer: 'Oil drove population, infrastructure, and a diversified service economy.',
        },
        practice: [
          mc('Spindletop was discovered in', ['1865', '1901', '1929', '1945'], 1, 'It was 1901.'),
          mc('A boom-and-bust cycle means', ['steady growth', 'rapid growth then decline', 'no change', 'constant decline'], 1, 'It alternates.'),
        ],
      }),
    ], quiz('Modern Texas check', [
      mc('Houston became a center for', ['whaling', 'energy and shipping', 'glacier mining', 'tea'], 1, 'Energy and shipping dominate.'),
      mc('Population growth creates pressure on', ['water and housing', 'nothing', 'only taxes', 'only schools'], 0, 'Infrastructure and resources are strained.'),
    ]), project({
      title: 'Texas water policy brief',
      prompt: 'Research a Texas water issue and write a one-page brief: problem, stakeholders, and two policy options with trade-offs.',
      deliverable: 'A brief with at least two sources.',
      guidance: ['Cite a state water plan or agency source.', 'Present options fairly.'],
      rubric: WRITING_PROJECT,
    })),
  ],
  finalExam: exam('Grade 7 Texas history final check', [
    mc('Mexico won independence from Spain in', ['1810', '1821', '1836', '1845'], 1, 'It was 1821.'),
    mc('The victory at San Jacinto occurred in', ['1835', '1836', '1845', '1861'], 1, 'April 21, 1836.'),
    mc('Juneteenth marks', ['annexation', 'the announcement of freedom in Galveston', 'the Alamo', 'the oil boom'], 1, 'June 19, 1865.'),
    mc('Spindletop was', ['a mission', 'an oil discovery', 'a railroad', 'a battle'], 1, 'It was a 1901 oil gusher.'),
  ], 50),
};
