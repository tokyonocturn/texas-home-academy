import type { Course } from '../../types';
import { ELEMENTARY_WEIGHTS } from '../weights';
import { CREATIVE_PROJECT, INQUIRY_PROJECT, MATH_PROJECT, WRITING_PROJECT } from '../rubrics';
import { exam, lesson, mc, num, project, quiz, section, teks, unit } from '../builders';

/** Grade 5. Alignment: 19 TAC chapters 110-117. */

export const grade5Ela: Course = {
  id: 'g5-ela',
  title: 'Grade 5 English Language Arts',
  subject: 'ela',
  grade: 5,
  credits: 0,
  semesters: 2,
  description:
    'Theme and character development, argument and evidence in informational text, and a researched presentation.',
  essentialQuestions: ['How does a character change, and what does the change mean?', 'How do I judge whether evidence is strong?'],
  teks: [teks('19 TAC ch. 110, Grade 5', 'Comprehension of fiction and informational text; theme and character; argument; composition; research; speaking and listening.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Theme and character', 'Characters change because of what they face.', [
      lesson({
        id: 'g5-ela-u1-l1',
        title: 'Character development and thematic claims',
        minutes: 40,
        objectives: ['Trace how a character changes across a text.', 'Support a thematic claim with evidence from across the text.'],
        sections: [
          section('Change is evidence', [
            'A character’s development is shown by what they do, say, and decide at different points. Compare the character at the beginning and end: what do they now understand or value that they did not before?',
            'A thematic claim should be arguable and supported by a pattern. “The narrator learns that loyalty sometimes requires speaking up” is stronger than “the story is about loyalty,” and it can be tested against three moments.',
          ]),
        ],
        example: {
          prompt: 'A character who avoids conflict begins defending a younger sibling. What theme might this support?',
          steps: ['Identify the change: avoidance to advocacy.', 'Find the turning point.', 'State a claim: courage can grow from responsibility for someone else.'],
          answer: 'A claim about courage emerging from responsibility, supported by the change.',
        },
        practice: [
          mc('Character development is best shown by', ['a description of appearance', 'changes in choices across the text', 'the title', 'the setting'], 1, 'Choices reveal development.'),
          mc('A thematic claim should be', ['a single word', 'arguable and supported by a pattern', 'a summary', 'the author’s name'], 1, 'It must be arguable.'),
        ],
      }),
    ], quiz('Theme check', [
      mc('The strongest evidence for character change is', ['one quotation', 'a comparison of choices at two points', 'the cover', 'the page count'], 1, 'Comparison across the text shows change.'),
      mc('A theme differs from a topic because a theme is', ['shorter', 'a claim the text develops', 'always stated by the author', 'a setting'], 1, 'Themes are developed claims.'),
    ]), project({
      title: 'Character arc essay',
      prompt: 'Write a five-paragraph essay tracing a character’s change and arguing what the change suggests about a theme.',
      deliverable: 'An edited essay with at least three quotations.',
      guidance: ['Compare beginning and end explicitly.', 'Explain each quotation.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u2', 'Argument and evidence', 'Not all evidence is equal.', [
      lesson({
        id: 'g5-ela-u2-l1',
        title: 'Evaluating evidence and reasoning',
        minutes: 40,
        objectives: ['Distinguish relevant from irrelevant evidence.', 'Identify an author’s claim and supporting reasons.'],
        sections: [
          section('Claim, reason, evidence', [
            'An argument states a claim, gives reasons, and supports them with evidence. A claim without reasons is an assertion; a reason without evidence is an opinion.',
            'Judge evidence by relevance (does it address the claim?), sufficiency (is there enough?), and credibility (who produced it and how?). A single anecdote can illustrate but rarely proves a general claim.',
          ]),
        ],
        example: {
          prompt: 'Claim: the school should add a second water fountain. Which evidence is strongest?',
          steps: ['Count students per fountain at peak times.', 'Compare with recommended ratios if available.', 'Note repair records.', 'Anecdotes about thirst are weakest.'],
          answer: 'Measured crowding and usage data are strongest.',
        },
        practice: [
          mc('The strongest evidence for a general claim is', ['one story', 'systematic data', 'a rumor', 'an advertisement'], 1, 'Systematic data supports generalization.'),
          mc('A reason differs from evidence because a reason', ['is a statistic', 'explains why the claim is true', 'is always cited', 'is emotional'], 1, 'Reasons link claims to evidence.'),
        ],
      }),
    ], quiz('Argument check', [
      mc('Relevant evidence', ['addresses the claim', 'is always numerical', 'is short', 'is emotional'], 0, 'Relevance is about the claim.'),
      mc('An anecdote is best used to', ['prove a trend', 'illustrate a point', 'replace data', 'confuse readers'], 1, 'Anecdotes illustrate rather than prove.'),
    ]), project({
      title: 'Evidence audit',
      prompt: 'Find an editorial and audit its evidence: list claims, reasons, and evidence, then rate the evidence and explain one weakness.',
      deliverable: 'A chart plus a 250-word evaluation.',
      guidance: ['Quote claims accurately.', 'Distinguish evidence from assertion.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u3', 'Research and presentation', 'Research answers a question you can state.', [
      lesson({
        id: 'g5-ela-u3-l1',
        title: 'Research questions, sources, and speaking',
        minutes: 40,
        objectives: ['Write a focused research question.', 'Cite two credible sources.', 'Present findings clearly.'],
        sections: [
          section('From curiosity to question', [
            '“Animals” is a topic. “How do urban coyotes find food in Austin?” is a research question: it names a place, a population, and a behavior. A good question is narrow enough to answer and open enough that sources add something.',
            'Use credible sources — government agencies, universities, museums, established news organizations — and record author, title, publisher, date, and URL. Present by signposting: question, finding, evidence, why it matters.',
          ]),
        ],
        example: {
          prompt: 'Narrow “space” into a research question.',
          steps: ['Choose an aspect: Mars rovers.', 'Choose a focus: how they are powered.', 'Ask: how do solar-powered rovers survive Martian dust storms?'],
          answer: 'A specific, answerable question about rover power.',
        },
        practice: [
          mc('A research question should be', ['very broad', 'focused and answerable', 'a single word', 'a statement of opinion'], 1, 'Focus makes it answerable.'),
          mc('A credible source is one that', ['agrees with you', 'has identifiable expertise and evidence', 'is popular', 'is short'], 1, 'Expertise and evidence establish credibility.'),
        ],
      }),
    ], quiz('Research check', [
      mc('Citing a source requires', ['only the title', 'author, title, publisher, date, and URL when available', 'the page count', 'a summary'], 1, 'Complete citations are verifiable.'),
      mc('A presentation should begin with', ['a long quotation', 'the question and why it matters', 'the bibliography', 'an apology'], 1, 'Framing the question orients the audience.'),
    ]), project({
      title: 'Research presentation',
      prompt: 'Research a Texas environmental question. Present for four minutes with two cited sources and one visual.',
      deliverable: 'Presentation notes, a visual, and a source list.',
      guidance: ['Rehearse with a timer.', 'Explain the evidence, not just the conclusion.'],
      rubric: WRITING_PROJECT,
    })),
  ],
  finalExam: exam('Grade 5 ELA final check', [
    mc('Character development is shown by', ['appearance', 'changes in choices', 'the title', 'the setting'], 1, 'Choices reveal change.'),
    mc('A thematic claim must be', ['a topic word', 'arguable and supported', 'a summary', 'a citation'], 1, 'Themes are arguable claims.'),
    mc('The strongest evidence for a general claim is', ['an anecdote', 'systematic data', 'an opinion', 'a rumor'], 1, 'Systematic data supports generalization.'),
    mc('A focused research question is', ['broad', 'narrow and answerable', 'a single word', 'an opinion'], 1, 'Focus makes it answerable.'),
  ], 45),
};

export const grade5Math: Course = {
  id: 'g5-math',
  title: 'Grade 5 Mathematics',
  subject: 'math',
  grade: 5,
  credits: 0,
  semesters: 2,
  description:
    'Decimal place value and operations, multi-digit arithmetic and fractions, and volume, the coordinate plane, and patterns.',
  essentialQuestions: ['How does decimal place value extend whole-number place value?', 'How does volume measure space?'],
  teks: [teks('19 TAC ch. 111, Grade 5', 'Place value and decimals; multiplication and division; fractions; geometry and volume; coordinate plane; data.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Decimals', 'Decimals are fractions written in place value.', [
      lesson({
        id: 'g5-math-u1-l1',
        title: 'Decimal place value and operations',
        minutes: 40,
        objectives: ['Read and compare decimals to thousandths.', 'Add, subtract, and multiply decimals.'],
        sections: [
          section('Place value to the right of the point', [
            'In 3.472, the 4 is tenths, the 7 is hundredths, and the 2 is thousandths. 3.472 = 3 + 4/10 + 7/100 + 2/1000. Comparing decimals: 0.5 > 0.45 because 0.50 > 0.45.',
            'To add or subtract, line up the decimal points. 3.45 + 1.6 = 3.45 + 1.60 = 5.05. To multiply, multiply as whole numbers and count decimal places: 0.4 × 0.3 has two decimal places, so 12 becomes 0.12.',
          ]),
        ],
        example: {
          prompt: 'Compute 4.5 ÷ 0.9.',
          steps: ['Multiply both numbers by 10 to remove the decimal in the divisor.', '45 ÷ 9 = 5.'],
          answer: '5.',
        },
        practice: [
          num('3.45 + 1.6 = ?', 5.05, 'Line up decimals: 3.45 + 1.60.'),
          num('0.4 × 0.3 = ?', 0.12, 'Two decimal places in the product.'),
        ],
      }),
    ], quiz('Decimals check', [
      num('4.5 ÷ 0.9 = ?', 5, 'Multiply both by 10: 45 ÷ 9.'),
      mc('Which is greater?', ['0.45', '0.5', 'equal', 'cannot tell'], 1, '0.50 is greater than 0.45.'),
    ]), project({
      title: 'Decimal budget',
      prompt: 'Plan a small purchase with five items priced with decimals. Compute the total, tax at 8.25%, and change from $50.',
      deliverable: 'A receipt with all calculations.',
      guidance: ['Round money to the nearest cent.', 'Check by estimating.'],
      rubric: MATH_PROJECT,
    })),
    unit('u2', 'Multi-digit operations and fractions', 'Fraction operations follow consistent rules.', [
      lesson({
        id: 'g5-math-u2-l1',
        title: 'Multiplying fractions and order of operations',
        minutes: 40,
        objectives: ['Multiply fractions and simplify.', 'Apply order of operations.'],
        sections: [
          section('Fraction multiplication', [
            'Multiply numerators and denominators: 2/3 × 3/4 = 6/12 = 1/2. Simplify by dividing common factors before or after multiplying.',
            'Order of operations: parentheses, exponents, multiplication and division left to right, then addition and subtraction left to right. 3 + 4 × 2 = 3 + 8 = 11, not 14.',
          ]),
        ],
        example: {
          prompt: 'Compute 3 + 4 × 2 and (3 + 4) × 2.',
          steps: ['First expression: multiply first, 4 × 2 = 8, then add 3 = 11.', 'Second: parentheses first, 3 + 4 = 7, then × 2 = 14.'],
          answer: '11 and 14.',
        },
        practice: [
          mc('2/3 × 3/4 = ?', ['1/2', '5/7', '6/7', '2/4'], 0, '6/12 simplifies to 1/2.'),
          num('3 + 4 × 2 = ?', 11, 'Multiplication before addition.'),
        ],
      }),
    ], quiz('Operations check', [
      num('5 + 2 × 3 = ?', 11, 'Multiply first: 6, then add 5.'),
      mc('1/2 × 2/5 = ?', ['1/5', '2/7', '1/10', '4/5'], 0, '2/10 simplifies to 1/5.'),
    ]), project({
      title: 'Recipe scaling',
      prompt: 'Take a recipe for 8 servings. Scale it to 12 and to 6, showing fraction calculations and converted measurements.',
      deliverable: 'Two scaled recipes with work shown.',
      guidance: ['Use fractions, not decimals only.', 'Check that totals match.'],
      rubric: MATH_PROJECT,
    })),
    unit('u3', 'Volume, coordinates, and patterns', 'Volume counts unit cubes.', [
      lesson({
        id: 'g5-math-u3-l1',
        title: 'Volume and the coordinate plane',
        minutes: 40,
        objectives: ['Compute the volume of a rectangular prism.', 'Plot and interpret points in the first quadrant.'],
        sections: [
          section('Volume and coordinates', [
            'Volume of a rectangular prism is length × width × height. A 3 × 4 × 5 prism has 60 cubic units. Volume is measured in cubic units because it counts unit cubes.',
            'On a coordinate plane, the first number is the x-coordinate (horizontal) and the second is the y-coordinate (vertical). The point (3, 2) is 3 right and 2 up from the origin. The origin is (0, 0).',
          ]),
        ],
        example: {
          prompt: 'Find the volume of a 2 × 3 × 4 prism and plot (3, 2).',
          steps: ['Volume = 2 × 3 × 4 = 24 cubic units.', 'Start at the origin, move 3 right, 2 up.'],
          answer: '24 cubic units; point at (3, 2).',
        },
        practice: [
          num('What is the volume of a 3 × 4 × 5 prism?', 60, '3 × 4 × 5 = 60 cubic units.'),
          mc('The point (0, 4) lies on the', ['x-axis', 'y-axis', 'origin', 'line y = x'], 1, 'x = 0 means it is on the y-axis.'),
        ],
      }),
    ], quiz('Volume check', [
      num('What is the volume of a 2 × 3 × 4 prism?', 24, '2 × 3 × 4 = 24.'),
      mc('In (5, 1), the 5 is the', ['y-coordinate', 'x-coordinate', 'origin', 'slope'], 1, 'The first number is x.'),
    ]), project({
      title: 'Box design',
      prompt: 'Design a box that holds 24 unit cubes in three different dimensions. Compute volume and surface area for each and recommend one.',
      deliverable: 'Three designs with calculations and a recommendation.',
      guidance: ['Use whole-number dimensions.', 'Explain the trade-off between shape and material.'],
      rubric: MATH_PROJECT,
    })),
  ],
  finalExam: exam('Grade 5 math final check', [
    num('3.45 + 1.6 = ?', 5.05, '3.45 + 1.60.'),
    num('0.4 × 0.3 = ?', 0.12, 'Two decimal places.'),
    mc('3 + 4 × 2 = ?', ['14', '11', '24', '9'], 1, 'Multiplication first.'),
    num('What is the volume of a 3 × 4 × 5 prism?', 60, '3 × 4 × 5 = 60.'),
  ], 45),
};

export const grade5Science: Course = {
  id: 'g5-sci',
  title: 'Grade 5 Science',
  subject: 'science',
  grade: 5,
  credits: 0,
  semesters: 2,
  description:
    'Mixtures and solutions, ecosystems and energy flow, and Earth and space systems including the water cycle and Earth’s movements.',
  essentialQuestions: ['How does energy move through an ecosystem?', 'How do Earth’s movements create patterns we observe?'],
  teks: [teks('19 TAC ch. 112, Grade 5', 'Matter and energy; force and motion; Earth and space; organisms and environments; investigation and reasoning.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Matter and solutions', 'Solutions can be separated by physical means.', [
      lesson({
        id: 'g5-sci-u1-l1',
        title: 'Solutions, boiling points, and conservation of matter',
        minutes: 35,
        objectives: ['Distinguish a solution from a mixture.', 'Explain that mass is conserved in a solution.'],
        sections: [
          section('Dissolving', [
            'In a solution, particles of one substance spread evenly through another. Salt water is a solution; sand and water is a mixture that settles. Dissolving is a physical change because the salt can be recovered by evaporation.',
            'Mass is conserved: 10 g of salt added to 90 g of water makes 100 g of salt water, even though the salt seems to disappear. Boiling point and freezing point can shift when a solute is added, which is why salt is used on icy roads.',
          ]),
        ],
        example: {
          prompt: 'You mix 5 g of sugar into 45 g of water. What is the mass of the solution?',
          steps: ['Mass is conserved.', '5 + 45 = 50 g.'],
          answer: '50 g.',
        },
        practice: [
          mc('Salt water is a', ['mixture that settles', 'solution', 'compound', 'suspension'], 1, 'Salt dissolves evenly.'),
          num('10 g of salt is added to 90 g of water. What is the total mass in grams?', 100, 'Mass is conserved.'),
        ],
      }),
    ], quiz('Solutions check', [
      mc('Dissolving salt in water is a', ['chemical change', 'physical change', 'combustion', 'new element'], 1, 'It can be reversed by evaporation.'),
      mc('Adding salt to water', ['raises the boiling point', 'lowers the boiling point', 'has no effect', 'removes water'], 0, 'Solutes raise boiling point.'),
    ]), project({
      title: 'Solubility investigation',
      prompt: 'Test how much sugar dissolves in 100 mL of water at two temperatures. Record and graph results.',
      deliverable: 'A data table, graph, and conclusion.',
      guidance: ['Stir the same way each trial.', 'Define saturation.'],
      rubric: INQUIRY_PROJECT,
    })),
    unit('u2', 'Ecosystems', 'Energy flows and matter cycles.', [
      lesson({
        id: 'g5-sci-u2-l1',
        title: 'Food webs and energy pyramids',
        minutes: 35,
        objectives: ['Trace energy through a food web.', 'Explain why food chains are short.'],
        sections: [
          section('Energy flow', [
            'Producers capture sunlight and store energy in food. Consumers transfer some of that energy when they eat. Decomposers break down dead matter and recycle nutrients.',
            'Only a fraction of energy — often approximated as about 10% — passes to the next trophic level; the rest is used in metabolism or lost as heat. That is why food chains rarely have more than four or five links and why top predators are fewer.',
          ]),
        ],
        example: {
          prompt: 'Producers store 20,000 kJ. About how much reaches the second-level consumer at 10% transfer?',
          steps: ['Primary consumer: 10% of 20,000 = 2,000.', 'Secondary consumer: 10% of 2,000 = 200.'],
          answer: 'About 200 kJ.',
        },
        practice: [
          mc('Decomposers', ['make sunlight', 'recycle nutrients', 'are producers', 'only eat plants'], 1, 'They break down dead matter.'),
          num('If producers store 10,000 kJ, about how many kJ reach primary consumers at 10% transfer?', 1000, '10% of 10,000.'),
        ],
      }),
    ], quiz('Ecosystems check', [
      mc('Energy pyramids are widest at the', ['top', 'bottom', 'middle', 'edges'], 1, 'Producers hold the most energy.'),
      mc('Matter in an ecosystem', ['disappears', 'cycles', 'only moves upward', 'is created by consumers'], 1, 'Matter cycles; energy flows.'),
    ]), project({
      title: 'Ecosystem energy model',
      prompt: 'Build an energy pyramid for a Texas ecosystem with four levels and estimated energy at each. Explain the losses.',
      deliverable: 'A labeled pyramid with calculations.',
      guidance: ['Start with a stated producer energy.', 'Use the 10% approximation and label it as an estimate.'],
      rubric: INQUIRY_PROJECT,
    })),
    unit('u3', 'Earth and space', 'Earth’s rotation and revolution create daily and yearly patterns.', [
      lesson({
        id: 'g5-sci-u3-l1',
        title: 'Rotation, revolution, and the water cycle',
        minutes: 35,
        objectives: ['Distinguish rotation from revolution.', 'Explain how the water cycle moves water.'],
        sections: [
          section('Earth’s movements', [
            'Earth rotates on its axis once about every 24 hours, causing day and night. It revolves around the Sun once about every 365.25 days, causing the seasons together with the tilt of its axis. The Moon orbits Earth roughly every 27.3 days, and its phases repeat about every 29.5 days.',
            'The water cycle moves water among oceans, atmosphere, and land through evaporation, condensation, precipitation, and collection. The Sun supplies the energy; gravity pulls precipitation down.',
          ]),
        ],
        example: {
          prompt: 'Why do we have seasons?',
          steps: ['Earth’s axis is tilted.', 'As Earth revolves, different hemispheres receive more direct sunlight.', 'More direct sunlight means more energy and warmer seasons.'],
          answer: 'Axial tilt plus revolution changes the angle and duration of sunlight.',
        },
        practice: [
          mc('Day and night are caused by', ['revolution', 'rotation', 'the Moon', 'tides'], 1, 'Rotation on the axis.'),
          mc('Condensation is the change from', ['liquid to gas', 'gas to liquid', 'solid to liquid', 'liquid to solid'], 1, 'Gas to liquid forms clouds.'),
        ],
      }),
    ], quiz('Earth and space check', [
      mc('One revolution of Earth around the Sun takes about', ['24 hours', '27 days', '365 days', '10 years'], 2, 'About 365.25 days.'),
      mc('The Sun’s energy drives', ['the water cycle', 'the Moon’s phases', 'Earth’s rotation', 'tides only'], 0, 'It powers evaporation.'),
    ]), project({
      title: 'Sky journal',
      prompt: 'Record sunrise, sunset, and moon shape for two weeks. Graph daylight minutes and describe the pattern.',
      deliverable: 'A data table, graph, and pattern description.',
      guidance: ['Use a reliable source for times.', 'Note the trend, not just the numbers.'],
      rubric: INQUIRY_PROJECT,
    })),
  ],
  finalExam: exam('Grade 5 science final check', [
    mc('Salt water is a', ['mixture that settles', 'solution', 'element', 'compound'], 1, 'Salt dissolves evenly.'),
    num('10 g of salt in 90 g of water has a total mass of how many grams?', 100, 'Mass is conserved.'),
    mc('Day and night are caused by', ['revolution', 'rotation', 'the Moon', 'tilt only'], 1, 'Rotation causes day and night.'),
    mc('About what fraction of energy transfers between trophic levels?', ['1%', '10%', '50%', '100%'], 1, 'About 10% is a common approximation.'),
  ], 45),
};

export const grade5SocialStudies: Course = {
  id: 'g5-ss',
  title: 'Grade 5 United States History',
  subject: 'social-studies',
  grade: 5,
  credits: 0,
  semesters: 2,
  description:
    'Colonial America and the Revolution, the Constitution and early republic, and westward expansion, the Civil War, and modern America.',
  essentialQuestions: ['Why did colonists separate from Britain?', 'How has the Constitution changed to include more people?'],
  teks: [teks('19 TAC ch. 113, Grade 5', 'Colonial America; American Revolution; Constitution; westward expansion; Civil War and Reconstruction; twentieth-century United States; citizenship.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Colonies and revolution', 'Colonists argued about rights before they argued for independence.', [
      lesson({
        id: 'g5-ss-u1-l1',
        title: 'Colonial settlement and the Revolution',
        minutes: 35,
        objectives: ['Compare Jamestown and Plymouth.', 'Explain a cause of the American Revolution.'],
        sections: [
          section('Settlement and conflict', [
            'Jamestown (1607) was founded for profit and struggled until tobacco exports succeeded. Plymouth (1620) was founded by religious separatists seeking to practice their faith. Both depended on Indigenous knowledge and land, and both produced conflict.',
            'After the French and Indian War (1754–1763), Britain taxed the colonies to pay war debt. Colonists objected that they were taxed without representation in Parliament. Fighting began in 1775; the Declaration of Independence was adopted July 4, 1776; the war ended with the Treaty of Paris in 1783.',
          ]),
        ],
        example: {
          prompt: 'Why did “no taxation without representation” matter?',
          steps: ['Colonists were taxed by Parliament.', 'They elected no members of Parliament.', 'They argued consent of the governed was missing.'],
          answer: 'It challenged taxation without colonial consent.',
        },
        practice: [
          mc('Jamestown was founded in', ['1607', '1620', '1776', '1783'], 0, 'It was founded in 1607.'),
          mc('The Declaration of Independence was adopted in', ['1775', '1776', '1783', '1787'], 1, 'July 4, 1776.'),
        ],
      }),
    ], quiz('Revolution check', [
      mc('The Treaty of Paris ended the Revolutionary War in', ['1776', '1781', '1783', '1787'], 2, 'It was signed in 1783.'),
      mc('Plymouth was founded by', ['profit-seeking merchants', 'religious separatists', 'the Spanish', 'the French'], 1, 'They sought religious freedom.'),
    ]), project({
      title: 'Revolution timeline',
      prompt: 'Make a timeline of eight events from 1754 to 1783 with one sentence explaining each.',
      deliverable: 'A labeled timeline.',
      guidance: ['Verify dates.', 'Include both causes and outcomes.'],
      rubric: CREATIVE_PROJECT,
    })),
    unit('u2', 'Constitution and early republic', 'The Constitution divides and limits power.', [
      lesson({
        id: 'g5-ss-u2-l1',
        title: 'The Constitution, Bill of Rights, and early growth',
        minutes: 35,
        objectives: ['Explain three principles of the Constitution.', 'Identify the first ten amendments.'],
        sections: [
          section('A new framework', [
            'The Constitution (1787) created a federal system with three branches: legislative (Congress), executive (president), and judicial (courts). Separation of powers and checks and balances limit each branch. Federalism divides authority between national and state governments.',
            'The Bill of Rights (1791) added ten amendments protecting speech, religion, assembly, press, petition, due process, and other rights. The Louisiana Purchase (1803) nearly doubled U.S. territory, and the Lewis and Clark expedition explored it.',
          ]),
        ],
        example: {
          prompt: 'How does the president check Congress?',
          steps: ['Congress passes a bill.', 'The president may veto it.', 'Congress can override with two-thirds.'],
          answer: 'The veto, subject to a two-thirds override.',
        },
        practice: [
          mc('The Constitution was written in', ['1776', '1783', '1787', '1791'], 2, 'It was written in 1787.'),
          mc('The Bill of Rights is', ['the first ten amendments', 'the preamble', 'Article I', 'the Declaration'], 0, 'It is the first ten amendments.'),
        ],
      }),
    ], quiz('Constitution check', [
      mc('The three branches are', ['local, state, national', 'legislative, executive, judicial', 'House, Senate, courts', 'army, navy, courts'], 1, 'Those are the branches.'),
      mc('The Louisiana Purchase occurred in', ['1776', '1787', '1803', '1861'], 2, 'It was 1803.'),
    ]), project({
      title: 'Bill of Rights poster',
      prompt: 'Choose three amendments and illustrate each with a real-life example of the right it protects.',
      deliverable: 'A poster with three labeled examples.',
      guidance: ['Read the amendment text.', 'Use accurate examples.'],
      rubric: CREATIVE_PROJECT,
    })),
    unit('u3', 'Expansion, war, and modern America', 'The nation grew, divided, and rebuilt.', [
      lesson({
        id: 'g5-ss-u3-l1',
        title: 'Westward expansion, Civil War, and civil rights',
        minutes: 35,
        objectives: ['Explain a consequence of westward expansion.', 'Sequence the Civil War and Reconstruction.'],
        sections: [
          section('Expansion and division', [
            'Westward expansion brought settlement, railroads, and conflict over slavery and land. The Indian Removal Act (1830) forced many Native peoples west, including the Trail of Tears. The Mexican-American War (1846–1848) added vast territory.',
            'The Civil War (1861–1865) followed decades of conflict over slavery. The Thirteenth Amendment (1865) abolished slavery, the Fourteenth (1868) guaranteed citizenship and equal protection, and the Fifteenth (1870) protected voting rights by race. Reconstruction ended in 1877, followed by segregation laws that persisted into the twentieth century.',
          ]),
        ],
        example: {
          prompt: 'Why did the Civil War amendments matter if discrimination continued?',
          steps: ['They changed the constitutional rules.', 'They created legal tools for later challenges.', 'Enforcement required movements, courts, and legislation.'],
          answer: 'They established rights that later generations enforced.',
        },
        practice: [
          mc('The Thirteenth Amendment', ['abolished slavery', 'gave women the vote', 'created the income tax', 'established Congress'], 0, 'It abolished slavery.'),
          mc('The Civil War ended in', ['1861', '1863', '1865', '1877'], 2, 'It ended in 1865.'),
        ],
      }),
    ], quiz('Modern America check', [
      mc('The Fourteenth Amendment guarantees', ['free speech', 'equal protection', 'the right to bear arms', 'no taxes'], 1, 'It guarantees equal protection.'),
      mc('Reconstruction ended in', ['1865', '1870', '1877', '1901'], 2, 'It ended in 1877.'),
    ]), project({
      title: 'Amendment analysis',
      prompt: 'Explain how one Civil War amendment changed the country and one way its promise was later enforced.',
      deliverable: 'A 400-word explanation with two dates.',
      guidance: ['Use the amendment text.', 'Name a specific later law or case.'],
      rubric: WRITING_PROJECT,
    })),
  ],
  finalExam: exam('Grade 5 U.S. history final check', [
    mc('The Declaration of Independence was adopted in', ['1775', '1776', '1783', '1787'], 1, 'July 4, 1776.'),
    mc('The Constitution was written in', ['1776', '1783', '1787', '1791'], 2, 'It was written in 1787.'),
    mc('The Bill of Rights is', ['the first ten amendments', 'the preamble', 'Article II', 'a treaty'], 0, 'It is the first ten amendments.'),
    mc('The Thirteenth Amendment', ['abolished slavery', 'gave women the vote', 'created the income tax', 'established the Senate'], 0, 'It abolished slavery.'),
  ], 45),
};
