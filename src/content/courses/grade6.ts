import type { Course } from '../../types';
import { MIDDLE_WEIGHTS } from '../weights';
import { CREATIVE_PROJECT, INQUIRY_PROJECT, MATH_PROJECT, WRITING_PROJECT } from '../rubrics';
import { exam, lesson, mc, num, project, quiz, section, teks, unit } from '../builders';

/** Grade 6. Alignment: 19 TAC chapters 110-113. */

export const grade6Ela: Course = {
  id: 'g6-ela',
  title: 'Grade 6 English Language Arts',
  subject: 'ela',
  grade: 6,
  credits: 0,
  semesters: 2,
  description:
    'Plot and conflict in fiction, central idea and author’s purpose in informational text, and argumentative writing with research.',
  essentialQuestions: ['How does conflict drive a story?', 'How do I tell what an author wants me to believe?'],
  teks: [teks('19 TAC ch. 110, Grade 6', 'Fiction and literary analysis; informational text; argumentative and expository composition; research; speaking and listening.')],
  weights: MIDDLE_WEIGHTS,
  units: [
    unit('u1', 'Fiction and conflict', 'Conflict is the engine of plot.', [
      lesson({
        id: 'g6-ela-u1-l1',
        title: 'Types of conflict and plot structure',
        minutes: 45,
        objectives: ['Identify internal and external conflict.', 'Explain how a turning point resolves the central conflict.'],
        sections: [
          section('Conflict', [
            'External conflict pits a character against another person, society, nature, or technology. Internal conflict happens inside a character, often a choice between competing values. Most stories combine both: a character struggles with a decision while facing an outside obstacle.',
            'A turning point is the moment the conflict can no longer be avoided. After it, the outcome is decided, even if consequences unfold later. Naming the turning point helps you explain theme rather than summarize plot.',
          ]),
        ],
        example: {
          prompt: 'A student must choose between reporting a teammate’s cheating and protecting the team. What conflict is this?',
          steps: ['Two competing values: honesty and loyalty.', 'The choice is internal.', 'External stakes exist: team consequences.'],
          answer: 'Primarily internal conflict with external consequences.',
        },
        practice: [
          mc('A character against a hurricane is', ['internal conflict', 'external conflict', 'not a conflict', 'a theme'], 1, 'It is person against nature.'),
          mc('The turning point is where', ['the story begins', 'the conflict can no longer be avoided', 'the setting changes', 'the author speaks'], 1, 'It decides the outcome.'),
        ],
      }),
    ], quiz('Conflict check', [
      mc('Internal conflict occurs', ['between two characters', 'within a character', 'between nations', 'in the setting'], 1, 'It is internal.'),
      mc('Resolution means', ['the conflict is introduced', 'the outcome is settled', 'a new conflict begins', 'the setting changes'], 1, 'The conflict is settled.'),
    ]), project({
      title: 'Conflict analysis',
      prompt: 'Analyze a short story: identify the central conflict, the turning point, and the theme, with three quotations.',
      deliverable: 'A 500-word analysis with citations.',
      guidance: ['Distinguish internal from external.', 'Explain the link from conflict to theme.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u2', 'Informational text', 'Authors choose structure and evidence to persuade.', [
      lesson({
        id: 'g6-ela-u2-l1',
        title: 'Central idea, purpose, and bias',
        minutes: 45,
        objectives: ['State the central idea and supporting details.', 'Identify an author’s purpose and one sign of bias.'],
        sections: [
          section('Purpose and bias', [
            'Authors write to inform, explain, persuade, or entertain. Purpose shapes what is included and omitted. A product review and a Consumer Reports analysis may describe the same device differently.',
            'Bias appears in loaded word choice, selective evidence, and omitted counterarguments. Bias is not automatically a flaw; an argument is supposed to take a side. The question is whether evidence is fairly represented.',
          ]),
        ],
        example: {
          prompt: 'A headline reads “City wastes millions on bike lanes.” What signals bias?',
          steps: ['“Wastes” is a loaded verb.', '“Millions” lacks context.', 'No benefits or comparisons are mentioned.'],
          answer: 'Loaded language and selective framing.',
        },
        practice: [
          mc('An author’s purpose is', ['always to entertain', 'the reason for writing', 'the title', 'the length'], 1, 'Purpose is the reason for writing.'),
          mc('Loaded language is a sign of', ['neutral reporting', 'bias', 'primary sources', 'citation'], 1, 'It frames the issue.'),
        ],
      }),
    ], quiz('Informational check', [
      mc('The central idea is', ['a detail', 'what the text is mostly about', 'the author’s name', 'the first word'], 1, 'It is the main point.'),
      mc('Omitting counterarguments can indicate', ['balance', 'bias', 'objectivity', 'citation'], 1, 'Selective evidence skews the argument.'),
    ]), project({
      title: 'Two-source comparison',
      prompt: 'Compare two articles on the same event. Identify each author’s purpose, central idea, and one sign of bias.',
      deliverable: 'A comparison chart and a 300-word analysis.',
      guidance: ['Quote specific language.', 'Do not assume bias equals falsehood.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u3', 'Argument and research', 'A claim needs reasons, evidence, and a fair objection.', [
      lesson({
        id: 'g6-ela-u3-l1',
        title: 'Building an argumentative essay',
        minutes: 45,
        objectives: ['Write a claim with two reasons.', 'Integrate evidence and answer a counterclaim.'],
        sections: [
          section('Structure', [
            'An argumentative essay introduces the claim, develops two or three reasons with evidence, acknowledges the strongest counterclaim, and concludes by weighing the evidence.',
            'Integrate evidence with context and explanation: introduce the source, quote only what matters, and explain how it supports the reason. A quotation without commentary is not analysis.',
          ]),
        ],
        example: {
          prompt: 'Claim: schools should teach financial literacy. Give a reason and evidence plan.',
          steps: ['Reason: students face credit and tax decisions soon after graduation.', 'Evidence: survey data on financial knowledge gaps.', 'Counterclaim: curriculum is already crowded.', 'Response: integrate into existing math courses.'],
          answer: 'A complete argument plan with a fair counterclaim.',
        },
        practice: [
          mc('A counterclaim should be', ['a weak version of the other side', 'the strongest opposing view', 'ignored', 'a personal attack'], 1, 'Engage the strongest version.'),
          mc('Quotations require', ['no explanation', 'explanation connecting them to the claim', 'a title only', 'length'], 1, 'Commentary connects evidence to claim.'),
        ],
      }),
    ], quiz('Argument check', [
      mc('A claim is', ['a fact', 'a debatable position', 'a citation', 'a summary'], 1, 'Claims are arguable.'),
      mc('Evidence should be', ['relevant and credible', 'emotional only', 'invented', 'omitted'], 0, 'Relevance and credibility matter.'),
    ]), project({
      title: 'Argumentative essay',
      prompt: 'Write a 700-word argument on a school issue with three cited sources and a fair counterclaim.',
      deliverable: 'Essay plus works-cited page.',
      guidance: ['State the claim in the introduction.', 'Concede what is true in the counterclaim.'],
      rubric: WRITING_PROJECT,
    })),
  ],
  finalExam: exam('Grade 6 ELA final check', [
    mc('A character against society is', ['internal conflict', 'external conflict', 'theme', 'setting'], 1, 'It is external.'),
    mc('The central idea is', ['a detail', 'what the text is mostly about', 'the title', 'a citation'], 1, 'It is the main point.'),
    mc('Loaded language suggests', ['neutrality', 'bias', 'citation', 'objectivity'], 1, 'It frames the issue.'),
    mc('A counterclaim should be', ['the strongest opposing view', 'a straw man', 'ignored', 'a personal attack'], 0, 'Engage the strongest version.'),
  ], 50),
};

export const grade6Math: Course = {
  id: 'g6-math',
  title: 'Grade 6 Mathematics',
  subject: 'math',
  grade: 6,
  credits: 0,
  semesters: 2,
  description:
    'Ratios and rates, rational numbers and integers, expressions and equations, and area and volume.',
  essentialQuestions: ['How do ratios compare quantities?', 'How do negative numbers extend the number line?'],
  teks: [teks('19 TAC ch. 111, Grade 6', 'Ratios and rates; rational numbers; expressions, equations, and inequalities; geometry and measurement; data.')],
  weights: MIDDLE_WEIGHTS,
  units: [
    unit('u1', 'Ratios and rates', 'A ratio compares; a rate compares different units.', [
      lesson({
        id: 'g6-math-u1-l1',
        title: 'Unit rates and proportions',
        minutes: 45,
        objectives: ['Compute a unit rate.', 'Solve a proportion by reasoning about equivalent ratios.'],
        sections: [
          section('Rates', [
            'A ratio compares two quantities: 3 boys to 4 girls. A rate compares quantities with different units: 12 miles in 3 hours. A unit rate has a denominator of 1: 12 ÷ 3 = 4 miles per hour.',
            'Proportions set two ratios equal. If 3 notebooks cost $6, then 5 notebooks cost x: 3/6 = 5/x, so 3x = 30 and x = 10. Check that units match on each side.',
          ]),
        ],
        example: {
          prompt: 'A car travels 150 miles in 3 hours. Find the unit rate.',
          steps: ['Divide distance by time.', '150 ÷ 3 = 50.'],
          answer: '50 miles per hour.',
        },
        practice: [
          num('A car travels 150 miles in 3 hours. What is its speed in miles per hour?', 50, '150 ÷ 3 = 50.'),
          num('If 3 notebooks cost $6, how much do 5 cost?', 10, 'Each is $2, so 5 cost $10.'),
        ],
      }),
    ], quiz('Ratios check', [
      num('12 miles in 3 hours is how many miles per hour?', 4, '12 ÷ 3 = 4.'),
      mc('A unit rate has a denominator of', ['0', '1', '2', '10'], 1, 'It is per one unit.'),
    ]), project({
      title: 'Best buy analysis',
      prompt: 'Compare three package sizes of the same product. Compute unit prices, graph the relationship, and recommend the best value.',
      deliverable: 'A table, graph, and recommendation.',
      guidance: ['Use the same units.', 'Round money appropriately.'],
      rubric: MATH_PROJECT,
    })),
    unit('u2', 'Rational numbers', 'The number line extends below zero.', [
      lesson({
        id: 'g6-math-u2-l1',
        title: 'Integers, absolute value, and operations',
        minutes: 45,
        objectives: ['Order integers and find absolute value.', 'Add, subtract, and multiply integers.'],
        sections: [
          section('Signed numbers', [
            'Integers include negative numbers, zero, and positive numbers. On a number line, −7 is left of −3, so −7 < −3. Absolute value is distance from zero: |−7| = 7 and |7| = 7.',
            'Adding: same signs add and keep the sign; different signs subtract and take the sign of the larger absolute value. −5 + 8 = 3. Subtracting is adding the opposite: 4 − (−3) = 4 + 3 = 7. Multiplying: negative times negative is positive, so −3 × −4 = 12.',
          ]),
        ],
        example: {
          prompt: 'Compute −5 + 8 and −3 × −4.',
          steps: ['−5 + 8: different signs, 8 − 5 = 3, sign of 8 is positive.', '−3 × −4: two negatives make a positive, 12.'],
          answer: '3 and 12.',
        },
        practice: [
          num('−5 + 8 = ?', 3, 'Different signs: 3.'),
          num('−3 × −4 = ?', 12, 'Two negatives give a positive.'),
        ],
      }),
    ], quiz('Integers check', [
      num('|−7| = ?', 7, 'Absolute value is distance from zero.'),
      num('4 − (−3) = ?', 7, 'Subtracting a negative adds.'),
    ]), project({
      title: 'Elevation profile',
      prompt: 'Model a hike with positive and negative elevations. Compute total change, absolute descent, and explain each with a number line.',
      deliverable: 'A number line diagram and calculations.',
      guidance: ['Define zero as sea level.', 'Distinguish change from distance.'],
      rubric: MATH_PROJECT,
    })),
    unit('u3', 'Expressions, equations, and geometry', 'Letters stand for numbers.', [
      lesson({
        id: 'g6-math-u3-l1',
        title: 'One-step equations and area',
        minutes: 45,
        objectives: ['Solve one-step equations.', 'Compute area of triangles and rectangles.'],
        sections: [
          section('Equations and area', [
            'An equation states two expressions are equal. To solve 2x + 5 = 17, subtract 5 from both sides (2x = 12), then divide by 2 (x = 6). Check by substitution.',
            'Area of a rectangle is length × width. Area of a triangle is ½ × base × height. A triangle with base 6 and height 4 has area 12 square units.',
          ]),
        ],
        example: {
          prompt: 'Solve 2x + 5 = 17 and find the area of a triangle with base 6 and height 4.',
          steps: ['2x = 12, so x = 6.', 'Area = ½ × 6 × 4 = 12.'],
          answer: 'x = 6; area 12 square units.',
        },
        practice: [
          num('Solve 3x = 21.', 7, 'Divide both sides by 3.'),
          num('What is the area of a triangle with base 6 and height 4?', 12, '½ × 6 × 4 = 12.'),
        ],
      }),
    ], quiz('Equations check', [
      num('Solve x + 9 = 14.', 5, 'Subtract 9.'),
      num('What is the area of a rectangle 7 by 3?', 21, '7 × 3 = 21.'),
    ]), project({
      title: 'Equation story problems',
      prompt: 'Write and solve three one-step equations from real situations (savings, distance, area). Explain what the variable represents.',
      deliverable: 'Three problems with equations, solutions, and checks.',
      guidance: ['Define the variable.', 'Check by substitution.'],
      rubric: MATH_PROJECT,
    })),
  ],
  finalExam: exam('Grade 6 math final check', [
    num('If 4 notebooks cost $10, what is the unit price in dollars?', 2.5, '10 ÷ 4 = 2.50.'),
    num('−7 + 12 = ?', 5, 'Different signs: 5.'),
    num('Solve 4x = 32.', 8, 'Divide by 4.'),
    num('What is the area of a triangle with base 8 and height 5?', 20, '½ × 8 × 5 = 20.'),
  ], 50),
};

export const grade6Science: Course = {
  id: 'g6-sci',
  title: 'Grade 6 Science',
  subject: 'science',
  grade: 6,
  credits: 0,
  semesters: 2,
  description:
    'Properties of matter, forces and motion, and Earth and space systems including plate tectonics and the solar system.',
  essentialQuestions: ['What makes a substance identifiable?', 'How do Earth’s plates change its surface?'],
  teks: [teks('19 TAC ch. 112, Grade 6', 'Matter and energy; force, motion, and energy; Earth and space; organisms and environments; investigation and reasoning.')],
  weights: MIDDLE_WEIGHTS,
  units: [
    unit('u1', 'Matter and properties', 'Density identifies a substance regardless of sample size.', [
      lesson({
        id: 'g6-sci-u1-l1',
        title: 'Density, conductivity, and states',
        minutes: 40,
        objectives: ['Compute density.', 'Use properties to identify a substance.'],
        sections: [
          section('Characteristic properties', [
            'Density = mass / volume. A 20 g sample with volume 4 cm³ has density 5 g/cm³. Density is intensive: it does not depend on sample size, so it can help identify a substance.',
            'Other characteristic properties include melting point, boiling point, conductivity, and solubility. A substance’s properties do not change with sample size, although its mass and volume do.',
          ]),
        ],
        example: {
          prompt: 'A metal sample has mass 54 g and volume 20 cm³. Find its density.',
          steps: ['d = m/V.', '54 / 20 = 2.7.'],
          answer: '2.7 g/cm³, consistent with aluminum.',
        },
        practice: [
          num('A sample has mass 15 g and volume 5 cm³. What is its density?', 3, '15 / 5 = 3 g/cm³.'),
          mc('Density is a', ['size-dependent property', 'characteristic property', 'type of energy', 'state of matter'], 1, 'It does not depend on size.'),
        ],
      }),
    ], quiz('Matter check', [
      mc('Which property helps identify a substance?', ['mass', 'volume', 'density', 'shape'], 2, 'Density is characteristic.'),
      num('A 40 g sample occupies 8 cm³. What is its density?', 5, '40 / 8 = 5 g/cm³.'),
    ]), project({
      title: 'Density column',
      prompt: 'Layer liquids of different densities (safely) and predict where small objects will settle. Explain using density.',
      deliverable: 'A labeled diagram and explanation.',
      guidance: ['Use safe household liquids.', 'Measure or look up densities and cite sources.'],
      rubric: INQUIRY_PROJECT,
    })),
    unit('u2', 'Forces and motion', 'Net force determines acceleration.', [
      lesson({
        id: 'g6-sci-u2-l1',
        title: 'Balanced and unbalanced forces',
        minutes: 40,
        objectives: ['Compute net force.', 'Predict motion from net force.'],
        sections: [
          section('Net force', [
            'Forces combine as vectors. Two people pushing a box in the same direction add forces; opposite directions subtract. A 20 N push against 5 N of friction gives a net force of 15 N in the push direction.',
            'Balanced forces produce no change in motion — the object stays at rest or keeps constant velocity. Unbalanced forces accelerate the object. Speed, direction, or both can change.',
          ]),
        ],
        example: {
          prompt: 'A 20 N push and 8 N friction act on a box. What is the net force?',
          steps: ['Forces oppose each other.', '20 − 8 = 12.'],
          answer: '12 N in the direction of the push.',
        },
        practice: [
          num('A 30 N force and 10 N friction act in opposite directions. What is the net force in newtons?', 20, '30 − 10 = 20.'),
          mc('Balanced forces produce', ['acceleration', 'no change in motion', 'a change in mass', 'friction'], 1, 'Net force is zero.'),
        ],
      }),
    ], quiz('Forces check', [
      mc('An object at rest with balanced forces will', ['accelerate', 'stay at rest', 'move backward', 'lose mass'], 1, 'Balanced forces mean no acceleration.'),
      num('Two forces of 12 N and 4 N act in the same direction. What is the net force?', 16, '12 + 4 = 16 N.'),
    ]), project({
      title: 'Friction test',
      prompt: 'Measure the force needed to move a block on three surfaces. Explain differences using friction and net force.',
      deliverable: 'A data table, graph, and explanation.',
      guidance: ['Keep the block the same.', 'Repeat each trial.'],
      rubric: INQUIRY_PROJECT,
    })),
    unit('u3', 'Earth and space', 'Plates move, and the solar system has structure.', [
      lesson({
        id: 'g6-sci-u3-l1',
        title: 'Plate tectonics and the solar system',
        minutes: 40,
        objectives: ['Relate plate boundaries to landforms.', 'Describe the order of planets from the Sun.'],
        sections: [
          section('Earth and space', [
            'Earth’s lithospheric plates move over the asthenosphere. Divergent boundaries create ridges and rift valleys; convergent boundaries create trenches, volcanoes, and mountains; transform boundaries create faults and earthquakes.',
            'The planets in order from the Sun are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Inner planets are rocky and small; outer planets are large gas and ice giants. The Sun contains most of the mass of the solar system.',
          ]),
        ],
        example: {
          prompt: 'Why are there volcanoes along the Pacific Ring of Fire?',
          steps: ['Many convergent boundaries surround the Pacific.', 'Subducting plates melt and feed magma chambers.', 'Magma rises to form volcanoes.'],
          answer: 'Subduction at convergent boundaries produces volcanoes.',
        },
        practice: [
          mc('A trench forms at a', ['divergent boundary', 'convergent boundary', 'transform boundary', 'mid-ocean ridge'], 1, 'Subduction creates trenches.'),
          mc('The planet closest to the Sun is', ['Venus', 'Mercury', 'Earth', 'Mars'], 1, 'Mercury is closest.'),
        ],
      }),
    ], quiz('Earth and space check', [
      mc('Earthquakes are common at', ['transform boundaries', 'only divergent boundaries', 'the equator', 'the poles'], 0, 'Transform faults produce earthquakes.'),
      mc('Outer planets are mostly', ['rocky and small', 'gas and ice giants', 'covered in oceans', 'without moons'], 1, 'They are gas and ice giants.'),
    ]), project({
      title: 'Solar system scale model',
      prompt: 'Build a scale model of planet sizes or distances. Explain the scale factor and one limitation of the model.',
      deliverable: 'A labeled model with scale calculations.',
      guidance: ['State the scale explicitly.', 'Explain why sizes and distances cannot share one scale easily.'],
      rubric: INQUIRY_PROJECT,
    })),
  ],
  finalExam: exam('Grade 6 science final check', [
    num('A 60 g sample has volume 12 cm³. What is its density?', 5, '60 / 12 = 5 g/cm³.'),
    num('A 25 N force and 10 N friction oppose each other. What is the net force?', 15, '25 − 10 = 15 N.'),
    mc('A trench forms at a', ['divergent boundary', 'convergent boundary', 'transform boundary', 'hot spot'], 1, 'Subduction creates trenches.'),
    mc('The planet closest to the Sun is', ['Venus', 'Mercury', 'Mars', 'Earth'], 1, 'Mercury is closest.'),
  ], 50),
};

export const grade6SocialStudies: Course = {
  id: 'g6-ss',
  title: 'Grade 6 World Cultures and Geography',
  subject: 'social-studies',
  grade: 6,
  credits: 0,
  semesters: 2,
  description:
    'Geography and early human societies, classical and medieval civilizations, and the age of exploration and global exchange.',
  essentialQuestions: ['How does geography shape culture?', 'What moves between civilizations besides goods?'],
  teks: [teks('19 TAC ch. 113, Grade 6', 'World geography; early civilizations; classical and medieval societies; exploration and exchange; culture and institutions.')],
  weights: MIDDLE_WEIGHTS,
  units: [
    unit('u1', 'Geography and early civilizations', 'Farming changed everything.', [
      lesson({
        id: 'g6-ss-u1-l1',
        title: 'River valleys and the first cities',
        minutes: 40,
        objectives: ['Explain why early cities formed near rivers.', 'Identify features of a civilization.'],
        sections: [
          section('From farming to cities', [
            'The agricultural revolution allowed people to settle and produce surplus food. Surplus supported specialists — potters, priests, scribes, soldiers — and encouraged trade. River valleys such as Mesopotamia’s Tigris-Euphrates, Egypt’s Nile, the Indus, and China’s Yellow River supported early cities.',
            'Civilizations developed complex institutions: governments, written records, social hierarchies, and organized religion. Writing began as accounting for grain and trade, which shows how material needs shape culture.',
          ]),
        ],
        example: {
          prompt: 'Why did writing develop early in river civilizations?',
          steps: ['Surplus grain needed tracking.', 'Trade required records.', 'Record-keeping evolved into writing systems.'],
          answer: 'Economic administration drove early writing.',
        },
        practice: [
          mc('Mesopotamia developed between the', ['Nile and Congo', 'Tigris and Euphrates', 'Indus and Ganges', 'Yellow and Yangtze'], 1, 'Those rivers define Mesopotamia.'),
          mc('A surplus of food allowed', ['fewer people', 'specialized occupations', 'the end of trade', 'nomadic life'], 1, 'Surplus supports specialists.'),
        ],
      }),
    ], quiz('Early civilizations check', [
      mc('Civilization requires', ['only farming', 'complex institutions and records', 'no government', 'isolation'], 1, 'Institutions and records define it.'),
      mc('Writing first served', ['poetry', 'record-keeping', 'law only', 'maps'], 1, 'It began with accounting.'),
    ]), project({
      title: 'River civilization comparison',
      prompt: 'Compare two early river civilizations on geography, government, and writing, with at least two sources.',
      deliverable: 'A comparison table and 400-word analysis.',
      guidance: ['Cite sources.', 'Explain how geography shaped institutions.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u2', 'Classical and medieval worlds', 'Empires connect and divide.', [
      lesson({
        id: 'g6-ss-u2-l1',
        title: 'Classical empires and the spread of belief',
        minutes: 40,
        objectives: ['Explain how one empire unified its territory.', 'Trace the spread of a religion or technology.'],
        sections: [
          section('Empire and exchange', [
            'Classical empires — Han China, Gupta India, Persia, Greece, and Rome — built roads, standardized currency and law, and promoted trade. Rome’s roads and law outlasted its empire, and Han China’s bureaucracy shaped later states.',
            'Religions and philosophies spread along trade routes: Buddhism from India to Central and East Asia, Christianity across the Roman world, and Islam from Arabia across North Africa and into Spain. Trade routes carried ideas, technologies, and diseases as well as goods.',
          ]),
        ],
        example: {
          prompt: 'How did Rome help trade?',
          steps: ['Roads reduced travel time.', 'Common currency simplified exchange.', 'Law reduced risk.'],
          answer: 'Infrastructure, currency, and law lowered trade costs.',
        },
        practice: [
          mc('Buddhism spread from', ['Rome to India', 'India to East Asia', 'Africa to Europe', 'the Americas'], 1, 'It spread eastward along trade routes.'),
          mc('A common currency helps trade by', ['raising prices', 'simplifying exchange', 'banning imports', 'eliminating laws'], 1, 'It reduces transaction costs.'),
        ],
      }),
    ], quiz('Classical world check', [
      mc('Islam spread from', ['Arabia', 'Rome', 'China', 'India'], 0, 'It began in Arabia.'),
      mc('Trade routes spread', ['only goods', 'goods, ideas, and diseases', 'only diseases', 'nothing'], 1, 'Ideas and diseases moved too.'),
    ]), project({
      title: 'Trade route map',
      prompt: 'Map one trade route and annotate three goods, one technology, and one belief that traveled it.',
      deliverable: 'A labeled map with annotations.',
      guidance: ['Use a historical atlas.', 'Distinguish origin from destination.'],
      rubric: CREATIVE_PROJECT,
    })),
    unit('u3', 'Exploration and global exchange', 'Contact across oceans remade the world.', [
      lesson({
        id: 'g6-ss-u3-l1',
        title: 'The age of exploration and the Columbian Exchange',
        minutes: 40,
        objectives: ['Explain a motive for European exploration.', 'Assess two consequences of global exchange.'],
        sections: [
          section('Contact and consequence', [
            'European exploration after the 1400s was driven by trade, competition, religion, and technology such as better ships and navigation instruments. Portuguese, Spanish, Dutch, French, and English voyages connected continents.',
            'The Columbian Exchange moved crops, animals, people, and diseases across the Atlantic. Maize and potatoes increased food supplies in Eurasia, while smallpox devastated Indigenous populations. The exchange also drove the transatlantic slave trade.',
          ]),
        ],
        example: {
          prompt: 'Was the Columbian Exchange good for everyone?',
          steps: ['Name gains: new crops, food variety.', 'Name costs: disease, enslavement, dispossession.', 'Note that costs and benefits fell on different groups.'],
          answer: 'No; gains and harms were distributed very unequally.',
        },
        practice: [
          mc('A motive for European exploration was', ['ending trade', 'finding new trade routes', 'reducing population', 'abolishing ships'], 1, 'Trade routes were a motive.'),
          mc('Smallpox affected the Americas because', ['it originated there', 'Indigenous populations lacked prior exposure', 'it was a food crop', 'it spread only by sea'], 1, 'Lack of prior exposure made it devastating.'),
        ],
      }),
    ], quiz('Exploration check', [
      mc('The Columbian Exchange moved', ['only people', 'crops, animals, people, and diseases', 'only ships', 'only ideas'], 1, 'It moved many things.'),
      mc('A consequence of the exchange was', ['the transatlantic slave trade', 'the end of farming', 'the end of trade', 'no population change'], 0, 'It drove the slave trade.'),
    ]), project({
      title: 'Commodity exchange report',
      prompt: 'Trace one crop from the Americas to another continent. Explain the effects on diet, labor, and trade.',
      deliverable: 'A 500-word report with a map and sources.',
      guidance: ['Use dates and regions.', 'Include labor systems where relevant.'],
      rubric: WRITING_PROJECT,
    })),
  ],
  finalExam: exam('Grade 6 social studies final check', [
    mc('Mesopotamia developed between the', ['Nile and Congo', 'Tigris and Euphrates', 'Indus and Ganges', 'Yellow and Yangtze'], 1, 'Those are its rivers.'),
    mc('Buddhism spread from India to', ['the Americas', 'East Asia', 'Australia', 'Antarctica'], 1, 'It spread along trade routes to East Asia.'),
    mc('The Columbian Exchange moved', ['only goods', 'crops, animals, people, and diseases', 'only ships', 'only money'], 1, 'It moved many things.'),
    mc('A motive for European exploration was', ['finding trade routes', 'ending farming', 'reducing ships', 'abolishing trade'], 0, 'Trade routes motivated voyages.'),
  ], 50),
};
