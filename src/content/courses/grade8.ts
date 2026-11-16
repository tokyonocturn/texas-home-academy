import type { Course } from '../../types';
import { MIDDLE_WEIGHTS } from '../weights';
import { CREATIVE_PROJECT, INQUIRY_PROJECT, MATH_PROJECT, WRITING_PROJECT } from '../rubrics';
import { exam, lesson, mc, num, project, quiz, section, teks, unit } from '../builders';

/** Grade 8. Alignment: 19 TAC chapters 110-113. Social studies is U.S. history to 1877. */

export const grade8Ela: Course = {
  id: 'g8-ela',
  title: 'Grade 8 English Language Arts',
  subject: 'ela',
  grade: 8,
  credits: 0,
  semesters: 2,
  description:
    'Theme and author’s craft, rhetorical analysis of informational text, and a researched paper with a works-cited page.',
  essentialQuestions: ['How does an author control what a reader notices?', 'How do I make a researched argument my own?'],
  teks: [teks('19 TAC ch. 110, Grade 8', 'Literary analysis; rhetorical and informational text; composition; research and citation; speaking and listening.')],
  weights: MIDDLE_WEIGHTS,
  units: [
    unit('u1', 'Theme and craft', 'Small choices produce large effects.', [
      lesson({
        id: 'g8-ela-u1-l1',
        title: 'Symbol, motif, and theme',
        minutes: 45,
        objectives: ['Distinguish a symbol from a motif.', 'Build a thematic argument from recurring details.'],
        sections: [
          section('Patterns and meaning', [
            'A symbol is an object or image that carries meaning beyond itself; a motif is a recurring element that develops a theme. A river that appears at every turning point may be a motif whose meaning shifts from obstacle to renewal.',
            'A thematic argument names the pattern, shows how it changes, and explains what the change suggests. Avoid reducing a complex text to a single lesson.',
          ]),
        ],
        example: {
          prompt: 'A novel repeats images of locked doors. What might that suggest?',
          steps: ['Identify the pattern: doors that will not open.', 'Track variation: one door opens at the end.', 'State a claim about secrecy and access.'],
          answer: 'The motif suggests restricted access to truth or intimacy, until the final opening.',
        },
        practice: [
          mc('A motif is', ['a single symbol', 'a recurring element', 'the setting', 'the narrator'], 1, 'It recurs.'),
          mc('The strongest thematic argument is', ['a one-word topic', 'a claim supported by a pattern', 'a plot summary', 'a quotation'], 1, 'It requires pattern and claim.'),
        ],
      }),
    ], quiz('Craft check', [
      mc('A symbol differs from a motif because a symbol', ['recurs', 'is a single element carrying meaning', 'is the theme', 'is the setting'], 1, 'A motif recurs; a symbol may appear once.'),
      mc('A thematic argument should explain', ['what happens', 'how a pattern creates meaning', 'the author’s biography', 'the page count'], 1, 'Meaning comes from pattern.'),
    ]), project({
      title: 'Motif essay',
      prompt: 'Write a 700-word essay tracing a motif in a novel and arguing what it reveals about a theme.',
      deliverable: 'Essay with at least four quotations and a works-cited entry.',
      guidance: ['Track how the motif changes.', 'Explain each quotation.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u2', 'Rhetoric and argument', 'Persuasion works through trust, emotion, and reasoning.', [
      lesson({
        id: 'g8-ela-u2-l1',
        title: 'Ethos, pathos, logos, and logical fallacies',
        minutes: 45,
        objectives: ['Identify appeals in a speech.', 'Recognize two common logical fallacies.'],
        sections: [
          section('Appeals and fallacies', [
            'Ethos is credibility, pathos is emotion, and logos is reasoning. A persuasive text usually combines them; the question is whether the combination is honest.',
            'Fallacies include ad hominem (attacking the person), straw man (misrepresenting an opponent), false dilemma (only two options), and appeal to authority when the authority is not relevant. Naming the fallacy is the beginning of refutation; explaining why it fails is the argument.',
          ]),
        ],
        example: {
          prompt: '“Either we ban all cars downtown or the air will never improve.” What is the fallacy?',
          steps: ['Two extreme options are presented.', 'Intermediate options are excluded.', 'This is a false dilemma.'],
          answer: 'False dilemma.',
        },
        practice: [
          mc('Attacking a person instead of the argument is', ['straw man', 'ad hominem', 'false dilemma', 'logos'], 1, 'It is ad hominem.'),
          mc('Ethos refers to', ['emotion', 'credibility', 'logic', 'timing'], 1, 'Ethos is credibility.'),
        ],
      }),
    ], quiz('Rhetoric check', [
      mc('A straw man misrepresents', ['the evidence', 'the opponent’s position', 'the audience', 'the speaker'], 1, 'It distorts the opposing view.'),
      mc('Logos refers to', ['emotion', 'credibility', 'reasoning', 'delivery'], 2, 'Logos is reasoning.'),
    ]), project({
      title: 'Speech analysis',
      prompt: 'Analyze a published speech for ethos, pathos, logos, and one fallacy or weakness. Support with quotations.',
      deliverable: 'A 600-word analysis.',
      guidance: ['Identify the audience and occasion.', 'Judge whether appeals are honest.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u3', 'Research and citation', 'Citation is part of the argument.', [
      lesson({
        id: 'g8-ela-u3-l1',
        title: 'Synthesis and academic honesty',
        minutes: 45,
        objectives: ['Synthesize sources by idea.', 'Cite paraphrases and quotations correctly.'],
        sections: [
          section('Using sources honestly', [
            'Synthesis organizes sources by idea, not by source. Show where they agree, extend one another, or conflict. A paper that summarizes one source per paragraph has not synthesized.',
            'Cite both quotations and paraphrased ideas. Keep a working bibliography with author, title, publisher, date, and URL as you take notes. Patchwriting — changing a few words while keeping sentence structure — is still plagiarism.',
          ]),
        ],
        example: {
          prompt: 'Two studies disagree about homework’s effect. How do you present them?',
          steps: ['State the disagreement plainly.', 'Compare methods and populations.', 'Draw a proportionate conclusion.'],
          answer: 'Present the conflict and explain what might account for it.',
        },
        practice: [
          mc('Synthesis is organized by', ['source', 'idea', 'date', 'author'], 1, 'Ideas organize synthesis.'),
          mc('Paraphrased ideas', ['need no citation', 'must be cited', 'are quotations', 'are summaries only'], 1, 'Ideas require credit.'),
        ],
      }),
    ], quiz('Research check', [
      mc('Patchwriting is', ['proper citation', 'a form of plagiarism', 'a summary', 'a quotation'], 1, 'It closely follows the original.'),
      mc('A working bibliography should be built', ['at the end', 'as you take notes', 'after drafting', 'never'], 1, 'Recording sources early prevents errors.'),
    ]), project({
      title: 'Researched argument',
      prompt: 'Write a 900-word researched argument with four sources, a counterargument, and a works-cited page.',
      deliverable: 'Essay plus works cited.',
      guidance: ['Organize by idea.', 'Include one source that complicates your claim.'],
      rubric: WRITING_PROJECT,
    })),
  ],
  finalExam: exam('Grade 8 ELA final check', [
    mc('A motif is', ['a single symbol', 'a recurring element', 'the setting', 'the narrator'], 1, 'It recurs.'),
    mc('Ethos refers to', ['emotion', 'credibility', 'logic', 'timing'], 1, 'It is credibility.'),
    mc('A false dilemma', ['offers only two options', 'attacks a person', 'cites evidence', 'summarizes'], 0, 'It excludes middle options.'),
    mc('Paraphrased ideas', ['need no citation', 'must be cited', 'are quotations', 'are optional'], 1, 'Ideas require credit.'),
  ], 55),
};

export const grade8Math: Course = {
  id: 'g8-math',
  title: 'Grade 8 Mathematics',
  subject: 'math',
  grade: 8,
  credits: 0,
  semesters: 2,
  description:
    'Linear equations and functions, systems, transformations, the Pythagorean theorem, volume, and bivariate data.',
  essentialQuestions: ['How does a linear function describe a constant rate?', 'How do transformations preserve shape?'],
  teks: [teks('19 TAC ch. 111, Grade 8', 'Proportional and non-proportional relationships; linear functions; systems; geometry and transformations; Pythagorean theorem; data.')],
  weights: MIDDLE_WEIGHTS,
  units: [
    unit('u1', 'Linear functions', 'A constant rate produces a line.', [
      lesson({
        id: 'g8-math-u1-l1',
        title: 'Slope, intercepts, and equations',
        minutes: 50,
        objectives: ['Compute slope from two points.', 'Write a linear equation from a table or graph.'],
        sections: [
          section('Slope and form', [
            'Slope m = (y₂ − y₁)/(x₂ − x₁). Through (2, 3) and (6, 11): m = 8/4 = 2. The slope is the rate of change, with units of y per x.',
            'Slope-intercept form y = mx + b. If m = 2 and the line passes (2, 3), then 3 = 4 + b, so b = −1 and y = 2x − 1. Check with the other point: 2(6) − 1 = 11.',
          ]),
        ],
        example: {
          prompt: 'Find the equation of the line through (2, 3) and (6, 11).',
          steps: ['m = (11 − 3)/(6 − 2) = 2.', 'Use y = mx + b: 3 = 2(2) + b, so b = −1.', 'Equation: y = 2x − 1.'],
          answer: 'y = 2x − 1.',
        },
        practice: [
          num('Find the slope through (1, 2) and (4, 11).', 3, '(11 − 2)/(4 − 1) = 3.'),
          mc('In y = 3x + 5, the y-intercept is', ['3', '5', '−5', '8'], 1, 'b = 5.'),
        ],
      }),
    ], quiz('Linear functions check', [
      num('Find the slope through (2, 4) and (6, 12).', 2, '8/4 = 2.'),
      mc('A horizontal line has slope', ['0', '1', 'undefined', 'infinite'], 0, 'No vertical change.'),
    ]), project({
      title: 'Linear model from data',
      prompt: 'Collect or find bivariate data, graph it, estimate a line of best fit, and interpret the slope in context.',
      deliverable: 'A table, graph, equation, and interpretation.',
      guidance: ['Label axes with units.', 'Explain what the slope means.'],
      rubric: MATH_PROJECT,
    })),
    unit('u2', 'Systems and transformations', 'Multiple constraints can be solved together.', [
      lesson({
        id: 'g8-math-u2-l1',
        title: 'Solving systems and transforming figures',
        minutes: 50,
        objectives: ['Solve a system by substitution.', 'Describe translations, reflections, rotations, and dilations.'],
        sections: [
          section('Systems', [
            'A system asks for values satisfying two equations. For y = 2x + 1 and y = −x + 7, set them equal: 2x + 1 = −x + 7, so 3x = 6, x = 2, and y = 5. The lines intersect at (2, 5).',
            'Parallel lines have equal slopes and no intersection (no solution); identical lines have infinitely many solutions.',
          ]),
          section('Transformations', [
            'Translations slide, reflections flip, rotations turn, and dilations resize. Translations, reflections, and rotations preserve size and shape (congruence); dilations preserve shape but change size (similarity).',
          ]),
        ],
        example: {
          prompt: 'Solve y = 2x + 1 and y = −x + 7.',
          steps: ['2x + 1 = −x + 7.', '3x = 6, x = 2.', 'y = 2(2) + 1 = 5.'],
          answer: '(2, 5).',
        },
        practice: [
          mc('Solve y = x + 2 and y = 2x − 1.', ['(3, 5)', '(1, 3)', '(2, 4)', '(0, 2)'], 0, 'x + 2 = 2x − 1 gives x = 3 and y = 5.'),
          mc('A dilation changes', ['shape only', 'size, preserving shape', 'orientation only', 'nothing'], 1, 'It preserves shape and changes size.'),
        ],
      }),
    ], quiz('Systems check', [
      mc('Parallel lines have', ['one solution', 'no solution', 'infinitely many', 'two solutions'], 1, 'They never intersect.'),
      mc('A reflection preserves', ['size and shape', 'only size', 'only shape', 'neither'], 0, 'It is a rigid motion.'),
    ]), project({
      title: 'Transformation design',
      prompt: 'Create a design using at least three transformations. Describe each transformation with coordinates and explain which properties were preserved.',
      deliverable: 'A labeled design with coordinate descriptions.',
      guidance: ['Use a coordinate grid.', 'Name each transformation precisely.'],
      rubric: MATH_PROJECT,
    })),
    unit('u3', 'Pythagoras, volume, and data', 'Geometry and data answer different questions.', [
      lesson({
        id: 'g8-math-u3-l1',
        title: 'The Pythagorean theorem and volume',
        minutes: 50,
        objectives: ['Apply the Pythagorean theorem.', 'Compute the volume of cylinders, cones, and spheres.'],
        sections: [
          section('Right triangles and solids', [
            'a² + b² = c² for legs a and b and hypotenuse c. Legs 9 and 12 give c² = 225, so c = 15. The converse tests for a right angle.',
            'Cylinder V = πr²h; cone V = (1/3)πr²h; sphere V = (4/3)πr³. A cylinder with r = 2 and h = 5 has V = 20π ≈ 62.83.',
          ]),
        ],
        example: {
          prompt: 'A right triangle has legs 9 and 12. Find the hypotenuse.',
          steps: ['9² + 12² = 81 + 144 = 225.', 'c = 15.'],
          answer: '15.',
        },
        practice: [
          num('A right triangle has legs 6 and 8. What is the hypotenuse?', 10, '36 + 64 = 100.'),
          num('What is the volume of a cylinder with radius 2 and height 5? Round to two decimals.', 62.83, '20π ≈ 62.83.'),
        ],
      }),
    ], quiz('Geometry check', [
      num('A right triangle has legs 5 and 12. What is the hypotenuse?', 13, '25 + 144 = 169.'),
      mc('The converse of the Pythagorean theorem tests for', ['a right angle', 'a circle', 'volume', 'parallel lines'], 0, 'It tests right triangles.'),
    ]), project({
      title: 'Three-dimensional comparison',
      prompt: 'Compare a cylinder, cone, and sphere with the same radius. Compute volumes, graph them, and explain the ratios.',
      deliverable: 'Calculations, a graph, and an explanation.',
      guidance: ['Use the same radius for all three.', 'Explain the 3:1 cone-to-cylinder ratio.'],
      rubric: MATH_PROJECT,
    })),
  ],
  finalExam: exam('Grade 8 math final check', [
    num('Find the slope through (2, 4) and (6, 12).', 2, '8/4 = 2.'),
    mc('Solve y = x + 2 and y = 2x − 1.', ['(3, 5)', '(1, 3)', '(2, 4)', '(0, 2)'], 0, 'x = 3, y = 5.'),
    num('A right triangle has legs 6 and 8. What is the hypotenuse?', 10, '36 + 64 = 100.'),
    mc('A dilation preserves', ['shape but not size', 'size but not shape', 'neither', 'both always'], 0, 'Similar figures preserve shape.'),
  ], 55),
};

export const grade8Science: Course = {
  id: 'g8-sci',
  title: 'Grade 8 Science',
  subject: 'science',
  grade: 8,
  credits: 0,
  semesters: 2,
  description:
    'Atomic structure and the periodic table, forces and motion, Earth and space systems, and interdependence in ecosystems.',
  essentialQuestions: ['How does atomic structure explain the periodic table?', 'How do forces change motion?'],
  teks: [teks('19 TAC ch. 112, Grade 8', 'Matter and energy; force, motion, and energy; Earth and space; organisms and environments; investigation and reasoning.')],
  weights: MIDDLE_WEIGHTS,
  units: [
    unit('u1', 'Atoms and the periodic table', 'Elements are organized by structure.', [
      lesson({
        id: 'g8-sci-u1-l1',
        title: 'Atomic structure and periodic trends',
        minutes: 45,
        objectives: ['Identify protons, neutrons, and electrons.', 'Relate group and period to properties.'],
        sections: [
          section('Structure', [
            'An atom has protons and neutrons in the nucleus and electrons in shells. Atomic number is the number of protons, which determines the element. Mass number is protons plus neutrons; isotopes differ in neutrons.',
            'Elements in the same group have the same number of valence electrons and similar chemical behavior. Across a period, atomic radius decreases and electronegativity increases because the nucleus pulls electrons more strongly.',
          ]),
        ],
        example: {
          prompt: 'An atom has 11 protons, 12 neutrons, and 11 electrons. Identify it.',
          steps: ['Atomic number 11 = sodium.', 'Mass number = 23.', 'Neutral because protons equal electrons.'],
          answer: 'Sodium-23.',
        },
        practice: [
          mc('Atomic number equals the number of', ['neutrons', 'protons', 'shells', 'isotopes'], 1, 'It is the proton count.'),
          mc('Elements in the same group have similar', ['mass numbers', 'valence electrons', 'neutron counts', 'colors'], 1, 'Valence electrons determine behavior.'),
        ],
      }),
    ], quiz('Atoms check', [
      mc('Isotopes differ in', ['protons', 'neutrons', 'electrons', 'charge'], 1, 'They differ in neutrons.'),
      mc('Across a period, atomic radius generally', ['increases', 'decreases', 'stays constant', 'doubles'], 1, 'It decreases.'),
    ]), project({
      title: 'Periodic table investigation',
      prompt: 'Choose three elements in one group and compare their properties and uses. Explain the pattern.',
      deliverable: 'A comparison table and explanation with sources.',
      guidance: ['Use a periodic table and a reliable source.', 'Explain, do not just list.'],
      rubric: INQUIRY_PROJECT,
    })),
    unit('u2', 'Forces and motion', 'Motion changes only with a net force.', [
      lesson({
        id: 'g8-sci-u2-l1',
        title: 'Newton’s laws and speed',
        minutes: 45,
        objectives: ['Apply F = ma.', 'Distinguish speed, velocity, and acceleration.'],
        sections: [
          section('Motion', [
            'Speed is distance/time; velocity includes direction; acceleration is the change in velocity per time. A car from 0 to 24 m/s in 6 s accelerates at 4 m/s².',
            'Newton’s second law: net force equals mass times acceleration. A 12 kg cart accelerating at 2 m/s² needs 24 N net force. Friction opposes motion and must be overcome for an object to accelerate.',
          ]),
        ],
        example: {
          prompt: 'A 12 kg cart accelerates at 2 m/s². Find the net force.',
          steps: ['F = ma.', 'F = 12 × 2 = 24 N.'],
          answer: '24 N.',
        },
        practice: [
          num('A 5 kg object accelerates at 4 m/s². What is the net force in newtons?', 20, 'F = 20 N.'),
          num('A car goes from 0 to 24 m/s in 6 s. What is its acceleration?', 4, '24/6 = 4 m/s².'),
        ],
      }),
    ], quiz('Forces check', [
      num('A 10 kg object accelerates at 3 m/s². What is the net force?', 30, 'F = 30 N.'),
      mc('Velocity differs from speed because velocity includes', ['mass', 'direction', 'time', 'force'], 1, 'Velocity is a vector.'),
    ]), project({
      title: 'Newton’s laws demonstration',
      prompt: 'Design three demonstrations, one for each law, and explain the physics with measurements where possible.',
      deliverable: 'A written plan, observations, and explanations.',
      guidance: ['Use safe materials.', 'Identify the forces in each demonstration.'],
      rubric: INQUIRY_PROJECT,
    })),
    unit('u3', 'Earth, space, and ecosystems', 'Systems interact across scales.', [
      lesson({
        id: 'g8-sci-u3-l1',
        title: 'Climate, plate motion, and interdependence',
        minutes: 45,
        objectives: ['Distinguish weather from climate.', 'Explain one effect of removing a species from a food web.'],
        sections: [
          section('Systems', [
            'Weather is short-term atmospheric conditions; climate is long-term patterns. Climate is shaped by latitude, oceans, winds, elevation, and greenhouse gases. Volcanic eruptions and solar variation affect short-term climate, while greenhouse gas concentrations affect long-term temperature.',
            'In an ecosystem, species depend on one another. Removing a keystone predator can allow herbivores to overgraze producers, reducing biodiversity. Matter cycles; energy flows and is lost as heat.',
          ]),
        ],
        example: {
          prompt: 'Why can removing a predator change a whole ecosystem?',
          steps: ['Predators limit herbivore numbers.', 'Without them, herbivores increase.', 'Producers decline, affecting other species.'],
          answer: 'A trophic cascade changes the whole food web.',
        },
        practice: [
          mc('Climate differs from weather because climate is', ['short-term', 'long-term patterns', 'only temperature', 'only rain'], 1, 'Climate is long-term.'),
          mc('A keystone predator helps maintain', ['biodiversity', 'pollution', 'drought', 'earthquakes'], 0, 'It structures the food web.'),
        ],
      }),
    ], quiz('Earth and ecosystems check', [
      mc('Greenhouse gases affect', ['short-term weather only', 'long-term temperature', 'plate motion', 'the Moon'], 1, 'They affect long-term climate.'),
      mc('Energy in an ecosystem', ['cycles', 'flows and is lost as heat', 'is created', 'is destroyed'], 1, 'Energy flows; matter cycles.'),
    ]), project({
      title: 'Climate data analysis',
      prompt: 'Graph 30 years of temperature or precipitation data for one location. Describe the trend and distinguish it from yearly variation.',
      deliverable: 'A graph, trend description, and source citation.',
      guidance: ['Use an official dataset.', 'Do not confuse weather with climate.'],
      rubric: INQUIRY_PROJECT,
    })),
  ],
  finalExam: exam('Grade 8 science final check', [
    mc('Atomic number equals the number of', ['neutrons', 'protons', 'shells', 'isotopes'], 1, 'It is protons.'),
    num('A 5 kg object accelerates at 4 m/s². What is the net force?', 20, 'F = 20 N.'),
    mc('Velocity includes', ['mass', 'direction', 'volume', 'density'], 1, 'It is a vector.'),
    mc('Climate is', ['short-term weather', 'long-term atmospheric patterns', 'only temperature', 'only rainfall'], 1, 'It is long-term.'),
  ], 55),
};

export const grade8SocialStudies: Course = {
  id: 'g8-ss',
  title: 'Grade 8 U.S. History to 1877',
  subject: 'social-studies',
  grade: 8,
  credits: 0,
  semesters: 2,
  description:
    'Colonial America, the Revolution and Constitution, westward expansion, the Civil War, and Reconstruction, with primary-source analysis.',
  essentialQuestions: ['How did the Constitution balance power?', 'How did slavery shape American expansion and politics?'],
  teks: [teks('19 TAC ch. 113, Grade 8', 'Colonial era; American Revolution; Constitution and early republic; expansion; Civil War; Reconstruction; historical thinking.')],
  weights: MIDDLE_WEIGHTS,
  units: [
    unit('u1', 'Founding and Constitution', 'Compromise built the Constitution, including compromises over slavery.', [
      lesson({
        id: 'g8-ss-u1-l1',
        title: 'The Constitutional Convention and ratification',
        minutes: 45,
        objectives: ['Explain the Great Compromise.', 'Identify the Federalist and Anti-Federalist positions.'],
        sections: [
          section('Compromise and debate', [
            'The Constitutional Convention (1787) resolved representation through the Great Compromise: a House apportioned by population and a Senate with equal state representation. The Three-Fifths Compromise counted three-fifths of enslaved people for representation and taxation without granting them rights.',
            'Federalists supported a stronger national government and argued in The Federalist Papers; Anti-Federalists feared centralized power and demanded a bill of rights, which was added in 1791.',
          ]),
        ],
        example: {
          prompt: 'How did the Great Compromise resolve a conflict?',
          steps: ['Large states wanted representation by population.', 'Small states wanted equal representation.', 'The House used population; the Senate used equality.'],
          answer: 'A bicameral legislature combined both principles.',
        },
        practice: [
          mc('The Senate gives each state', ['representation by population', 'equal representation', 'no representation', 'representation by wealth'], 1, 'Two senators per state.'),
          mc('Anti-Federalists demanded', ['a bill of rights', 'a monarchy', 'an end to states', 'a standing army'], 0, 'They feared centralized power.'),
        ],
      }),
    ], quiz('Constitution check', [
      mc('The Three-Fifths Compromise', ['granted enslaved people citizenship', 'counted three-fifths of enslaved people for representation', 'abolished slavery', 'gave women the vote'], 1, 'It counted them for representation without rights.'),
      mc('The Bill of Rights was added in', ['1776', '1787', '1791', '1803'], 2, 'It was ratified in 1791.'),
    ]), project({
      title: 'Federalist vs. Anti-Federalist debate',
      prompt: 'Write two short speeches, one Federalist and one Anti-Federalist, using at least two arguments each from the period.',
      deliverable: 'Two speeches with cited sources.',
      guidance: ['Represent both positions fairly.', 'Use period arguments, not modern ones.'],
      rubric: WRITING_PROJECT,
    })),
    unit('u2', 'Expansion and division', 'Territory raised the question of slavery repeatedly.', [
      lesson({
        id: 'g8-ss-u2-l1',
        title: 'Westward expansion and the road to war',
        minutes: 45,
        objectives: ['Explain how expansion intensified conflict over slavery.', 'Sequence events from 1820 to 1861.'],
        sections: [
          section('Expansion', [
            'The Louisiana Purchase (1803) doubled U.S. territory. The Missouri Compromise (1820) admitted Missouri as a slave state and Maine as free, drawing a line across the Louisiana territory. The Mexican-American War (1846–1848) added territory and renewed the slavery question.',
            'The Compromise of 1850, the Fugitive Slave Act, the Kansas-Nebraska Act (1854), and the Dred Scott decision (1857) each intensified conflict. Lincoln’s election in 1860 led Southern states to secede; the Civil War began in 1861.',
          ]),
        ],
        example: {
          prompt: 'Why did the Missouri Compromise fail to settle the issue?',
          steps: ['It drew a geographic line.', 'New territory reopened the question.', 'Later laws and court decisions overturned or undermined it.'],
          answer: 'Expansion repeatedly reopened the question the compromise tried to close.',
        },
        practice: [
          mc('The Louisiana Purchase occurred in', ['1776', '1787', '1803', '1820'], 2, 'It was 1803.'),
          mc('The Missouri Compromise was in', ['1803', '1820', '1850', '1861'], 1, 'It was 1820.'),
        ],
      }),
    ], quiz('Expansion check', [
      mc('The Civil War began in', ['1857', '1860', '1861', '1865'], 2, 'It began in 1861.'),
      mc('The Dred Scott decision', ['ended slavery', 'denied citizenship to enslaved people and limited Congress’s power', 'admitted California', 'created the Senate'], 1, 'It denied citizenship and restricted Congress.'),
    ]), project({
      title: 'Road to war timeline',
      prompt: 'Create an annotated timeline from 1820 to 1861 with eight events and one sentence explaining each.',
      deliverable: 'A timeline with accurate dates and explanations.',
      guidance: ['Include legislative and judicial events.', 'Explain causation, not just sequence.'],
      rubric: CREATIVE_PROJECT,
    })),
    unit('u3', 'Civil War and Reconstruction', 'The war settled secession but not equality.', [
      lesson({
        id: 'g8-ss-u3-l1',
        title: 'War, emancipation, and Reconstruction',
        minutes: 45,
        objectives: ['Explain the significance of the Emancipation Proclamation.', 'Evaluate the achievements and limits of Reconstruction.'],
        sections: [
          section('War and aftermath', [
            'The Emancipation Proclamation (effective January 1, 1863) declared enslaved people in Confederate states free. It did not apply to border states, but it changed the war’s purpose and allowed Black men to serve in the Union Army. The Thirteenth Amendment (1865) abolished slavery nationwide.',
            'Reconstruction added the Fourteenth (1868) and Fifteenth (1870) Amendments, created public schools, and expanded Black political participation. It was undermined by violence, Black Codes, and the withdrawal of federal troops in 1877, followed by Jim Crow segregation.',
          ]),
        ],
        example: {
          prompt: 'Why did the Emancipation Proclamation not immediately free everyone?',
          steps: ['It applied to Confederate states in rebellion.', 'Enforcement required Union victory.', 'Border states were excluded.', 'The Thirteenth Amendment later abolished slavery nationally.'],
          answer: 'Its scope and enforcement were limited until amendment and victory.',
        },
        practice: [
          mc('The Emancipation Proclamation took effect', ['January 1, 1863', 'April 1865', 'July 1865', '1870'], 0, 'It took effect in 1863.'),
          mc('The Fifteenth Amendment protected voting rights by', ['sex', 'race', 'property', 'age'], 1, 'It addressed race.'),
        ],
      }),
    ], quiz('Reconstruction check', [
      mc('The Thirteenth Amendment', ['abolished slavery', 'gave women the vote', 'created the income tax', 'established the Senate'], 0, 'It abolished slavery.'),
      mc('Reconstruction ended in', ['1865', '1870', '1877', '1901'], 2, 'It ended in 1877.'),
    ]), project({
      title: 'Reconstruction evaluation',
      prompt: 'Write a 700-word evaluation of Reconstruction: two achievements, two failures, and a judgment with evidence.',
      deliverable: 'Essay with at least three cited sources.',
      guidance: ['Define your criteria for success.', 'Acknowledge counterevidence.'],
      rubric: WRITING_PROJECT,
    })),
  ],
  finalExam: exam('Grade 8 U.S. history final check', [
    mc('The Great Compromise created', ['a unicameral legislature', 'a bicameral legislature', 'a monarchy', 'a direct democracy'], 1, 'It created two chambers.'),
    mc('The Louisiana Purchase occurred in', ['1776', '1787', '1803', '1820'], 2, 'It was 1803.'),
    mc('The Emancipation Proclamation took effect in', ['1861', '1863', '1865', '1870'], 1, 'January 1, 1863.'),
    mc('The Fifteenth Amendment protected voting rights by', ['sex', 'race', 'property', 'age'], 1, 'It addressed race.'),
  ], 55),
};
