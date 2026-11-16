import type { Course } from '../../types';
import { HIGH_WEIGHTS } from '../weights';
import { exam, lesson, mc, num, project, quiz, rubricRow, section, short, teks, unit } from '../builders';

/**
 * High-school mathematics: Algebra I, Geometry, Algebra II, Precalculus.
 * Alignment: 19 TAC Chapter 111.
 */

export const algebra1: Course = {
  id: 'hs-alg1',
  title: 'Algebra I',
  subject: 'math',
  grade: 9,
  credits: 1,
  semesters: 2,
  description:
    'Linear functions, systems, quadratic functions, and exponential growth. Students model real situations, solve equations and inequalities, and explain what a solution means in context.',
  essentialQuestions: [
    'How can a relationship be described by an equation, a table, and a graph at the same time?',
    'When is a linear model appropriate, and when does it fail?',
  ],
  teks: [
    teks('19 TAC ch. 111, Algebra I', 'Linear functions, equations, and inequalities; systems; quadratic and exponential functions; data and modeling.'),
  ],
  weights: HIGH_WEIGHTS,
  units: [
    unit('u1', 'Linear equations and functions', 'A line is a constant rate of change.', [
      lesson({
        id: 'alg1-u1-l1',
        title: 'Solving equations and reading slope',
        minutes: 50,
        objectives: ['Solve multi-step linear equations and inequalities.', 'Compute and interpret slope.'],
        sections: [
          section('Keep the balance', [
            'An equation is a balance. Whatever you do to one side, do to the other. For 3x + 7 = 22: subtract 7 to get 3x = 15, then divide by 3 to get x = 5. Check by substitution: 3(5) + 7 = 22.',
            'An inequality behaves the same way except when you multiply or divide by a negative number, which reverses the direction. From −2x > 8, divide by −2 and flip: x < −4.',
          ]),
          section('Slope is a rate with units', [
            'Slope m = (y₂ − y₁)/(x₂ − x₁). Through (2, 1) and (6, 9): m = (9 − 1)/(6 − 2) = 8/4 = 2. If x is hours worked and y is dollars earned, the slope is $2 per hour, and the units are the meaning.',
            'Slope-intercept form y = mx + b names the rate m and the starting value b. In context, b is often a fee or an initial amount, not a mathematical necessity.',
          ]),
        ],
        example: {
          prompt: 'A gym charges $25 to join and $15 per month. Write and use a model for 8 months.',
          steps: ['Rate: 15 dollars per month → m = 15.', 'Start: 25 → b = 25.', 'Model: y = 15x + 25.', 'Substitute x = 8: y = 120 + 25 = 145.'],
          answer: 'y = 15x + 25; eight months cost $145.',
        },
        keyTerms: [
          { term: 'Slope', definition: 'Change in output per unit change in input.' },
          { term: 'y-intercept', definition: 'The output when the input is zero; often an initial value.' },
        ],
        practice: [
          num('Solve 5x − 4 = 21.', 5, 'Add 4: 5x = 25, so x = 5.'),
          num('Find the slope of the line through (1, 3) and (4, 9).', 2, '(9 − 3)/(4 − 1) = 6/3 = 2.'),
        ],
      }),
    ], quiz('Unit 1 quiz: linear equations', [
      num('Solve 2(x − 3) = 14.', 10, 'Divide by 2: x − 3 = 7, so x = 10.'),
      mc('Solve −2x > 8.', ['x > −4', 'x < −4', 'x > 4', 'x < 4'], 1, 'Dividing by a negative reverses the inequality: x < −4.'),
      num('A taxi charges $3 plus $2 per mile. What is the cost of a 7-mile ride, in dollars?', 17, '3 + 2(7) = 17.'),
      short(
        'Explain why dividing both sides of an inequality by a negative number reverses the inequality sign.',
        'Model: Multiplying or dividing by a negative number reverses the order of two numbers: if a < b, then −a > −b. Applying that operation to both sides keeps the statement true only if the direction is reversed. For example, −2x > 8 becomes x < −4 because dividing by −2 flips the inequality.',
        ['States the reversal rule.', 'Gives a numerical example.', 'Explains why the order flips.'],
        6,
      ),
    ]), project({
      title: 'Two plans, one decision',
      prompt: 'Compare two real phone or streaming plans with different fixed fees and rates. Model each with a linear function, graph both, and find the break-even point. Recommend a plan for two different usage levels.',
      deliverable: 'Equations, a labeled graph, the break-even calculation, and a one-paragraph recommendation.',
      guidance: ['Define the variables and units.', 'Show the algebra for the intersection.', 'Explain when each plan is cheaper.'],
      rubric: [
        rubricRow('Models', 30, [['Excellent', 'Both models correct with units defined.', 30], ['Proficient', 'Models correct, units unclear.', 24], ['Developing', 'One model correct.', 15], ['Beginning', 'No valid model.', 6]]),
        rubricRow('Graph and intersection', 30, [['Excellent', 'Accurate graph, intersection solved and interpreted.', 30], ['Proficient', 'Minor errors.', 24], ['Developing', 'Graph only.', 15], ['Beginning', 'Missing.', 6]]),
        rubricRow('Recommendation', 30, [['Excellent', 'Tied to specific usage with reasoning.', 30], ['Proficient', 'Reasonable but general.', 24], ['Developing', 'Unsupported.', 15], ['Beginning', 'None.', 6]]),
        rubricRow('Presentation', 10, [['Excellent', 'Clear and organized.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
    unit('u2', 'Systems of equations', 'Two conditions can pin down two unknowns.', [
      lesson({
        id: 'alg1-u2-l1',
        title: 'Substitution and elimination',
        minutes: 50,
        objectives: ['Solve a system by substitution and by elimination.', 'Interpret a system with no solution or infinitely many.'],
        sections: [
          section('Two honest methods', [
            'Substitution: solve one equation for a variable and put it into the other. Elimination: add or subtract equations to cancel a variable. For x + y = 10 and x − y = 2, adding gives 2x = 12, so x = 6 and y = 4.',
            'If the variables cancel and you get a true statement such as 0 = 0, the lines coincide and there are infinitely many solutions. A false statement such as 0 = 5 means parallel lines and no solution.',
          ]),
          section('What the solution means', [
            'The solution is the pair that satisfies both conditions at once. In a cost problem, it is the quantity at which two plans cost the same. Always state the answer as an ordered pair and check it in both equations.',
          ]),
        ],
        example: {
          prompt: 'Solve 2x + y = 11 and x − y = 1.',
          steps: ['Add the equations: 3x = 12.', 'x = 4.', 'Substitute: 4 − y = 1, so y = 3.', 'Check in the first: 2(4) + 3 = 11.'],
          answer: '(4, 3).',
        },
        practice: [
          mc('Solve x + y = 10 and x − y = 2.', ['(6, 4)', '(4, 6)', '(5, 5)', '(8, 2)'], 0, 'Adding gives 2x = 12, so x = 6 and y = 4.'),
          mc('A system that reduces to 0 = 5 has', ['one solution', 'no solution', 'infinitely many solutions', 'two solutions'], 1, 'A false statement means the lines are parallel.'),
        ],
      }),
    ], quiz('Unit 2 quiz: systems', [
      mc('Solve 2x + y = 11 and x − y = 1.', ['(4, 3)', '(3, 4)', '(5, 1)', '(2, 7)'], 0, 'Adding gives 3x = 12, so x = 4 and y = 3.'),
      mc('If elimination gives 0 = 0, the system has', ['no solution', 'one solution', 'infinitely many solutions', 'an error'], 2, 'A true identity means the equations describe the same line.'),
      num('A system has solution (2, 5). If one equation is y = 3x − 1, what is y when x = 2?', 5, '3(2) − 1 = 5, consistent with the solution.'),
    ]), project({
      title: 'Break-even analysis',
      prompt: 'Model a small business with a cost equation and a revenue equation, solve the system, and explain the break-even point and the profit region.',
      deliverable: 'Equations, solution, graph, and a paragraph interpreting the result.',
      guidance: ['Define cost and revenue clearly.', 'State the break-even quantity in units.', 'Explain what happens above and below that quantity.'],
      rubric: [
        rubricRow('Equations', 30, [['Excellent', 'Correct cost and revenue models with defined variables.', 30], ['Proficient', 'Models correct with minor issues.', 24], ['Developing', 'One model wrong.', 15], ['Beginning', 'No models.', 6]]),
        rubricRow('Solution', 30, [['Excellent', 'Correct solution with verification.', 30], ['Proficient', 'Correct with little work shown.', 24], ['Developing', 'Algebra error.', 15], ['Beginning', 'Incorrect.', 6]]),
        rubricRow('Interpretation', 30, [['Excellent', 'Profit region explained in context.', 30], ['Proficient', 'Basic explanation.', 24], ['Developing', 'Numbers without meaning.', 15], ['Beginning', 'None.', 6]]),
        rubricRow('Graph', 10, [['Excellent', 'Labeled, accurate.', 10], ['Proficient', 'Mostly accurate.', 8], ['Developing', 'Unlabeled.', 5], ['Beginning', 'Missing.', 2]]),
      ],
    })),
    unit('u3', 'Quadratic functions', 'Curves model acceleration, area, and optimization.', [
      lesson({
        id: 'alg1-u3-l1',
        title: 'Factoring and the quadratic formula',
        minutes: 55,
        objectives: ['Solve quadratic equations by factoring.', 'Use the quadratic formula and the discriminant.'],
        sections: [
          section('Factoring first, formula always', [
            'For x² − 5x + 6 = 0, find two numbers that multiply to 6 and add to −5: −2 and −3. So (x − 2)(x − 3) = 0, giving x = 2 or x = 3.',
            'When factoring is not obvious, use x = (−b ± √(b² − 4ac))/(2a). For 2x² + 3x − 2 = 0: a = 2, b = 3, c = −2. The discriminant is 9 + 16 = 25, so x = (−3 ± 5)/4, giving x = 0.5 or x = −2.',
          ]),
          section('The discriminant tells you what to expect', [
            'b² − 4ac > 0 gives two real solutions; = 0 gives one repeated solution; < 0 gives no real solutions (the graph never crosses the x-axis).',
            'The vertex of y = ax² + bx + c is at x = −b/(2a). For y = x² − 6x + 5: x = 3, y = 9 − 18 + 5 = −4, so the vertex is (3, −4) and it is a minimum because a > 0.',
          ]),
        ],
        example: {
          prompt: 'Solve x² − 5x + 6 = 0 and find the vertex of y = x² − 6x + 5.',
          steps: ['Factor: (x − 2)(x − 3) = 0.', 'Solutions: x = 2 and x = 3.', 'Vertex x-coordinate: −(−6)/(2·1) = 3.', 'Substitute: 9 − 18 + 5 = −4.', 'Vertex: (3, −4).'],
          answer: 'x = 2 or 3; vertex (3, −4).',
        },
        practice: [
          mc('The solutions of x² − 5x + 6 = 0 are', ['2 and 3', '−2 and −3', '1 and 6', '−1 and −6'], 0, 'The factors are (x − 2)(x − 3).'),
          num('What is the discriminant of 2x² + 3x − 2 = 0?', 25, 'b² − 4ac = 9 − 4(2)(−2) = 9 + 16 = 25.'),
        ],
      }),
    ], quiz('Unit 3 quiz: quadratics', [
      num('What is the positive solution of x² = 49?', 7, 'Taking the square root gives x = ±7; the positive solution is 7.'),
      mc('If the discriminant is negative, the equation has', ['two real solutions', 'one real solution', 'no real solutions', 'infinitely many'], 2, 'A negative discriminant means the parabola does not meet the x-axis.'),
      num('For y = x² − 6x + 5, what is the x-coordinate of the vertex?', 3, 'x = −b/(2a) = 6/2 = 3.'),
    ]), project({
      title: 'Maximize the garden',
      prompt: 'A homeowner has 40 meters of fencing for a rectangular garden against an existing wall (so only three sides need fencing). Write the area as a quadratic function, find the maximum area, and justify it.',
      deliverable: 'Function, vertex calculation, maximum area, and a sketch.',
      guidance: ['Let x be the two equal sides; the third side is 40 − 2x.', 'Area A = x(40 − 2x).', 'The vertex gives the maximum.'],
      rubric: [
        rubricRow('Model', 35, [['Excellent', 'Correct quadratic with defined variable.', 35], ['Proficient', 'Correct with unclear definition.', 28], ['Developing', 'Set-up error.', 18], ['Beginning', 'No model.', 7]]),
        rubricRow('Solution', 35, [['Excellent', 'Vertex found correctly with maximum area stated in square meters.', 35], ['Proficient', 'Minor arithmetic error.', 28], ['Developing', 'Method unclear.', 18], ['Beginning', 'Incorrect.', 7]]),
        rubricRow('Justification', 20, [['Excellent', 'Explains why the vertex is a maximum.', 20], ['Proficient', 'Basic reasoning.', 16], ['Developing', 'Asserted only.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Sketch and units', 10, [['Excellent', 'Accurate and labeled.', 10], ['Proficient', 'Labeled.', 8], ['Developing', 'Unlabeled.', 5], ['Beginning', 'Missing.', 2]]),
      ],
    })),
    unit('u4', 'Exponential functions and sequences', 'Exponential change multiplies; linear change adds.', [
      lesson({
        id: 'alg1-u4-l1',
        title: 'Growth factors and sequences',
        minutes: 50,
        objectives: ['Distinguish linear from exponential growth.', 'Write and evaluate an exponential model.'],
        sections: [
          section('Adding versus multiplying', [
            'A linear pattern adds the same amount each step: 5, 8, 11, 14. An exponential pattern multiplies by the same factor: 3, 6, 12, 24. In y = a·bˣ, a is the starting value and b is the growth factor. If b > 1 the quantity grows; if 0 < b < 1 it decays.',
            'Growth of 4% per year means b = 1.04, not 0.04. After three years, 500(1.04)³ ≈ 562.43. Compound interest, populations with unlimited resources, and doubling times are exponential models.',
          ]),
          section('Sequences', [
            'An arithmetic sequence has a common difference: 3, 7, 11, … with aₙ = 3 + 4(n − 1), so a₁₀ = 39. A geometric sequence has a common ratio: 2, 6, 18, … with aₙ = 2·3^(n−1), so a₅ = 162.',
          ]),
        ],
        example: {
          prompt: 'A population of 500 grows 4% per year. Predict the population after 3 years.',
          steps: ['Starting value a = 500.', 'Growth factor b = 1 + 0.04 = 1.04.', 'Model: P(t) = 500(1.04)^t.', 'P(3) = 500(1.124864) ≈ 562.43.'],
          answer: 'About 562 (people must be whole, so 562).',
        },
        practice: [
          mc('Which sequence is exponential?', ['2, 4, 6, 8', '2, 4, 8, 16', '5, 5, 5, 5', '10, 7, 4, 1'], 1, 'Each term is multiplied by 2.'),
          num('Evaluate 3·2⁴.', 48, '2⁴ = 16, and 3 × 16 = 48.'),
        ],
      }),
    ], quiz('Unit 4 quiz: exponential models', [
      num('A quantity starts at 200 and grows 10% per year. What is the growth factor?', 1.1, '100% + 10% = 110%, written as 1.1.'),
      mc('The 10th term of 3, 7, 11, … is', ['39', '40', '43', '36'], 0, 'aₙ = 3 + 4(n − 1); a₁₀ = 3 + 36 = 39.'),
      num('What is the 5th term of the geometric sequence 2, 6, 18, …?', 162, 'The ratio is 3; 2·3⁴ = 162.'),
    ]), project({
      title: 'Savings versus simple growth',
      prompt: 'Compare $1,000 earning simple interest of $50 per year with $1,000 growing 5% compounded annually for 20 years. Graph both and explain the difference.',
      deliverable: 'Two models, a table for years 0, 5, 10, 20, a graph, and a paragraph.',
      guidance: ['Simple growth is linear; compound growth is exponential.', 'Round to the nearest dollar at each year.'],
      rubric: [
        rubricRow('Models', 35, [['Excellent', 'Both models correct.', 35], ['Proficient', 'Minor error.', 28], ['Developing', 'One model correct.', 18], ['Beginning', 'Neither.', 7]]),
        rubricRow('Table and graph', 30, [['Excellent', 'Accurate and labeled.', 30], ['Proficient', 'Mostly accurate.', 24], ['Developing', 'Unlabeled.', 15], ['Beginning', 'Missing.', 6]]),
        rubricRow('Explanation', 25, [['Excellent', 'Explains linear vs exponential with evidence.', 25], ['Proficient', 'Basic explanation.', 20], ['Developing', 'Vague.', 12], ['Beginning', 'None.', 5]]),
        rubricRow('Presentation', 10, [['Excellent', 'Clear.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
  ],
  finalExam: exam('Algebra I final examination', [
    num('Solve 3x + 7 = 22.', 5, 'Subtract 7, then divide by 3.'),
    num('Find the slope through (2, 1) and (6, 9).', 2, '(9 − 1)/(6 − 2) = 2.'),
    mc('The solution of the system x + y = 10, x − y = 2 is', ['(6, 4)', '(4, 6)', '(5, 5)', '(2, 8)'], 0, 'Add to get 2x = 12.'),
    num('What is the vertex x-coordinate of y = x² − 6x + 5?', 3, 'x = −b/(2a) = 3.'),
    num('Evaluate 500(1.04)³ to the nearest whole number.', 562, '1.04³ ≈ 1.124864; 500 × that ≈ 562.43.'),
    short('Explain how you can tell from a table whether a relationship is linear or exponential.', 'Model: Check first differences; if they are constant, the relationship is linear. Check ratios of successive outputs; if they are constant, it is exponential.', ['Names first differences.', 'Names constant ratios.', 'Gives a clear test.'], 10),
  ]),
};

export const geometry: Course = {
  id: 'hs-geom',
  title: 'Geometry',
  subject: 'math',
  grade: 10,
  credits: 1,
  semesters: 2,
  description:
    'Reasoning and proof, triangle congruence and similarity, right-triangle trigonometry, circles, and measurement of two- and three-dimensional figures.',
  essentialQuestions: [
    'Why does a proof need reasons and not just a correct picture?',
    'How do similarity and trigonometry let you measure what you cannot reach?',
  ],
  teks: [
    teks('19 TAC ch. 111, Geometry', 'Logical argument and constructions; congruence; similarity and trigonometry; circles; area and volume.'),
  ],
  weights: HIGH_WEIGHTS,
  units: [
    unit('u1', 'Reasoning and proof', 'A proof is a chain of justified statements.', [
      lesson({
        id: 'geom-u1-l1',
        title: 'Conditionals, converses, and angle pairs',
        minutes: 50,
        objectives: ['Write the converse of a conditional and judge its truth.', 'Use angle-pair relationships to justify a conclusion.'],
        sections: [
          section('Conditionals', [
            'A conditional has the form “if p, then q.” Its converse is “if q, then p.” A conditional and its converse are not equivalent: “if it is a square, then it has four sides” is true, but its converse is false. A statement and its contrapositive (“if not q, then not p”) are always equivalent.',
            'In geometry, definitions are biconditional when both directions hold. A midpoint is a point that divides a segment into two equal parts, and any point that does so is a midpoint.',
          ]),
          section('Angle pairs', [
            'Vertical angles are congruent. A linear pair is supplementary (sums to 180°). When two parallel lines are cut by a transversal, corresponding angles are congruent and alternate interior angles are congruent. Each of these is a reason you may cite in a proof, not a guess from the diagram.',
          ]),
        ],
        example: {
          prompt: 'Two parallel lines are cut by a transversal. One angle measures 65°. Find the alternate interior angle.',
          steps: ['Alternate interior angles are congruent when lines are parallel.', 'So the alternate interior angle measures 65°.', 'Cite the parallel-lines theorem as the reason.'],
          answer: '65°, justified by the alternate interior angles theorem.',
        },
        practice: [
          mc('The converse of “If a figure is a square, then it has four sides” is', ['true', 'false', 'equivalent to the original', 'not a statement'], 1, 'A four-sided figure need not be a square.'),
          num('Two angles form a linear pair. One is 115°. What is the other, in degrees?', 65, 'A linear pair sums to 180°.'),
        ],
      }),
    ], quiz('Unit 1 quiz: reasoning', [
      mc('Vertical angles are', ['supplementary', 'complementary', 'congruent', 'always right angles'], 2, 'Vertical angles are congruent.'),
      mc('A statement and its contrapositive are', ['unrelated', 'logically equivalent', 'always false', 'the same sentence'], 1, 'They are logically equivalent.'),
      num('A triangle has angles 40° and 65°. What is the third angle?', 75, '180 − 40 − 65 = 75.'),
    ]), project({
      title: 'Proof portfolio',
      prompt: 'Write three two-column proofs: one using parallel lines, one using triangle congruence, and one using segment or angle addition.',
      deliverable: 'Three proofs with numbered statements and a reason for every statement.',
      guidance: ['Every statement needs a reason.', 'Do not cite “the diagram” as a reason.'],
      rubric: [
        rubricRow('Logical validity', 40, [['Excellent', 'Every step justified and valid.', 40], ['Proficient', 'Minor gap.', 32], ['Developing', 'Several unjustified steps.', 20], ['Beginning', 'Not a proof.', 8]]),
        rubricRow('Use of theorems', 30, [['Excellent', 'Appropriate theorems cited.', 30], ['Proficient', 'Mostly appropriate.', 24], ['Developing', 'Vague reasons.', 15], ['Beginning', 'None.', 6]]),
        rubricRow('Notation', 20, [['Excellent', 'Correct geometric notation.', 20], ['Proficient', 'Minor errors.', 16], ['Developing', 'Inconsistent.', 10], ['Beginning', 'Incorrect.', 4]]),
        rubricRow('Presentation', 10, [['Excellent', 'Clear two-column format.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
    unit('u2', 'Triangles and congruence', 'Congruence is established by sufficient information, not by looks.', [
      lesson({
        id: 'geom-u2-l1',
        title: 'Congruence criteria and the Pythagorean theorem',
        minutes: 55,
        objectives: ['Identify SSS, SAS, ASA, AAS, and HL as congruence criteria.', 'Apply the Pythagorean theorem and its converse.'],
        sections: [
          section('Enough information', [
            'Two triangles are congruent if SSS, SAS, ASA, AAS, or (for right triangles) HL holds. AAA and SSA are not valid criteria: they can produce different shapes or ambiguous cases.',
            'Corresponding parts of congruent triangles are congruent (CPCTC), which is how a congruence proof transfers information about sides and angles.',
          ]),
          section('Right triangles', [
            'The Pythagorean theorem states a² + b² = c² for legs a and b and hypotenuse c. Legs 6 and 8 give c² = 100, so c = 10. Its converse lets you test for a right angle: if the squares fit, the triangle is right.',
            'Special right triangles: in a 45-45-90 triangle the legs are equal and the hypotenuse is leg·√2. In a 30-60-90 triangle the sides are in ratio 1 : √3 : 2. With hypotenuse 10, the short leg is 5 and the long leg is 5√3.',
          ]),
        ],
        example: {
          prompt: 'A right triangle has legs 6 and 8. Find the hypotenuse, then test whether a triangle with sides 5, 12, 14 is right.',
          steps: ['6² + 8² = 36 + 64 = 100, so c = 10.', 'For 5, 12, 14: 25 + 144 = 169, but 14² = 196.', 'Since 169 ≠ 196, it is not a right triangle.'],
          answer: 'Hypotenuse 10; 5-12-14 is not right (5-12-13 is).',
        },
        practice: [
          num('A right triangle has legs 6 and 8. What is the hypotenuse?', 10, '√(36 + 64) = 10.'),
          mc('Which is NOT a congruence criterion?', ['SSS', 'SAS', 'AAA', 'HL'], 2, 'AAA fixes shape but not size.'),
        ],
      }),
    ], quiz('Unit 2 quiz: triangles', [
      num('In a 30-60-90 triangle the hypotenuse is 10. What is the short leg?', 5, 'The ratio is 1 : √3 : 2, so the short leg is half the hypotenuse.'),
      mc('CPCTC is used to', ['prove triangles similar', 'transfer congruence from triangles to their parts', 'find area', 'construct a bisector'], 1, 'It states corresponding parts are congruent after congruence is established.'),
      mc('A triangle with sides 9, 12, 15 is', ['acute', 'right', 'obtuse', 'impossible'], 1, '81 + 144 = 225 = 15², so it is right.'),
    ]), project({
      title: 'Indirect measurement',
      prompt: 'Measure an inaccessible height (a tree, a building, or a pole) using shadows or a mirror and similar triangles. Show the proportion and the result.',
      deliverable: 'A diagram, measurements, proportion, calculation, and an error discussion.',
      guidance: ['Measure carefully and record units.', 'Explain why the triangles are similar.', 'Discuss at least one source of error.'],
      rubric: [
        rubricRow('Model and reasoning', 35, [['Excellent', 'Similarity clearly justified.', 35], ['Proficient', 'Reasoning present.', 28], ['Developing', 'Assumed similarity.', 18], ['Beginning', 'No reasoning.', 7]]),
        rubricRow('Measurement and calculation', 35, [['Excellent', 'Accurate with correct proportion.', 35], ['Proficient', 'Minor error.', 28], ['Developing', 'Set-up error.', 18], ['Beginning', 'Incorrect.', 7]]),
        rubricRow('Error discussion', 20, [['Excellent', 'Thoughtful sources of error.', 20], ['Proficient', 'Basic.', 16], ['Developing', 'Vague.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Diagram', 10, [['Excellent', 'Clear and labeled.', 10], ['Proficient', 'Labeled.', 8], ['Developing', 'Unlabeled.', 5], ['Beginning', 'Missing.', 2]]),
      ],
    })),
    unit('u3', 'Similarity and trigonometry', 'Ratios turn inaccessible lengths into arithmetic.', [
      lesson({
        id: 'geom-u3-l1',
        title: 'Similar triangles and the sine, cosine, and tangent ratios',
        minutes: 55,
        objectives: ['Use AA similarity to set up proportions.', 'Choose the correct trigonometric ratio for a right triangle.'],
        sections: [
          section('Similarity', [
            'Two triangles are similar if two pairs of corresponding angles are congruent (AA). Corresponding sides are then proportional: if a 3-4-5 triangle is scaled by 3, the sides are 9-12-15.',
            'A proportion such as 3/4 = x/12 is solved by cross-multiplying: 4x = 36, so x = 9.',
          ]),
          section('Right-triangle trigonometry', [
            'For an acute angle θ: sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent. In a 3-4-5 triangle with θ opposite the side of length 3, sin θ = 3/5 = 0.6, cos θ = 4/5 = 0.8, and tan θ = 3/4 = 0.75.',
            'Use inverse functions to find an angle: if tan θ = 0.75, then θ = tan⁻¹(0.75) ≈ 36.9°. Keep your calculator in degree mode unless the problem uses radians.',
          ]),
        ],
        example: {
          prompt: 'A ramp rises 3 feet over a horizontal run of 12 feet. Find the angle of elevation.',
          steps: ['The rise is opposite the angle; the run is adjacent.', 'tan θ = 3/12 = 0.25.', 'θ = tan⁻¹(0.25) ≈ 14.0°.'],
          answer: 'About 14.0°.',
        },
        practice: [
          num('In a right triangle, the side opposite θ is 3 and the hypotenuse is 5. What is sin θ?', 0.6, 'sin θ = opposite/hypotenuse = 3/5.'),
          num('Solve the proportion 3/4 = x/12.', 9, '4x = 36, so x = 9.'),
        ],
      }),
    ], quiz('Unit 3 quiz: similarity and trig', [
      mc('AA similarity requires', ['two pairs of congruent angles', 'three equal sides', 'a right angle', 'equal areas'], 0, 'Two congruent angle pairs force the third, so the triangles are similar.'),
      num('If tan θ = 1, what is θ in degrees?', 45, 'tan 45° = 1.'),
      num('A tree casts a 20-foot shadow while a 6-foot person casts a 4-foot shadow. How tall is the tree, in feet?', 30, '6/4 = h/20, so h = 30.'),
    ]), project({
      title: 'Trigonometry field lab',
      prompt: 'Pick two objects of different heights. Use a clinometer or measured triangle to estimate each height, then compare with a direct measurement where possible.',
      deliverable: 'Field notes, diagrams, calculations, and a percent-error comparison.',
      guidance: ['Record the angle and distance for each object.', 'Show which ratio you used and why.', 'Compute percent error where a direct measurement exists.'],
      rubric: [
        rubricRow('Method', 35, [['Excellent', 'Appropriate ratio with correct setup.', 35], ['Proficient', 'Minor setup issue.', 28], ['Developing', 'Wrong ratio.', 18], ['Beginning', 'No method.', 7]]),
        rubricRow('Calculations', 30, [['Excellent', 'Accurate with units.', 30], ['Proficient', 'Minor error.', 24], ['Developing', 'Errors.', 15], ['Beginning', 'Incorrect.', 6]]),
        rubricRow('Comparison and error', 25, [['Excellent', 'Percent error computed and interpreted.', 25], ['Proficient', 'Comparison present.', 20], ['Developing', 'Vague.', 12], ['Beginning', 'None.', 5]]),
        rubricRow('Field notes', 10, [['Excellent', 'Complete and organized.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Sparse.', 5], ['Beginning', 'Missing.', 2]]),
      ],
    })),
    unit('u4', 'Circles and measurement', 'Area and volume formulas are consequences of structure.', [
      lesson({
        id: 'geom-u4-l1',
        title: 'Circles, sectors, and solids',
        minutes: 50,
        objectives: ['Compute circumference, arc length, and sector area.', 'Compute the volume of prisms, cylinders, cones, and spheres.'],
        sections: [
          section('Parts of a circle', [
            'Circumference is C = 2πr and area is A = πr². A sector is a fraction of the circle equal to (central angle/360). For a 90° sector of radius 6: area = (90/360)π(36) = 9π ≈ 28.27, and arc length = (90/360)(2π·6) = 3π ≈ 9.42.',
            'A central angle intercepts an arc with the same measure. An inscribed angle intercepts an arc with twice its measure.',
          ]),
          section('Volume', [
            'Prism or cylinder: V = Bh, where B is the base area. Cylinder with r = 3 and h = 5: V = π(9)(5) = 45π ≈ 141.37. Cone: V = (1/3)Bh. Sphere: V = (4/3)πr³; for r = 3, V = 36π ≈ 113.10.',
            'Surface area adds the areas of all faces. Units matter: area is square units, volume is cubic units.',
          ]),
        ],
        example: {
          prompt: 'Find the volume of a cylinder with radius 3 and height 5, and the area of a 90° sector of radius 6.',
          steps: ['V = πr²h = π(9)(5) = 45π ≈ 141.37.', 'Sector area = (90/360)π(6²) = 9π ≈ 28.27.'],
          answer: 'V ≈ 141.37 cubic units; sector area ≈ 28.27 square units.',
        },
        practice: [
          num('What is the area of a circle with radius 7? Use π ≈ 3.14159 and round to two decimals.', 153.94, 'π × 49 ≈ 153.94.'),
          num('What is the volume of a cylinder with radius 3 and height 5? Round to two decimals.', 141.37, '45π ≈ 141.37.'),
        ],
      }),
    ], quiz('Unit 4 quiz: measurement', [
      num('What is the circumference of a circle with radius 5? Round to two decimals.', 31.42, '2π(5) ≈ 31.42.'),
      num('What is the volume of a sphere with radius 3? Round to two decimals.', 113.1, '(4/3)π(27) = 36π ≈ 113.10.'),
      mc('A sector’s area is proportional to', ['its chord', 'its central angle', 'the diameter', 'the tangent'], 1, 'The sector is the fraction central angle/360 of the circle.'),
    ]), project({
      title: 'Container design',
      prompt: 'Design a cylindrical container that holds 500 mL. Choose a radius, compute the height, then compute the surface area. Compare two designs and recommend one.',
      deliverable: 'Calculations for two designs and a short recommendation.',
      guidance: ['1 mL = 1 cm³.', 'Solve h from V = πr²h.', 'Surface area includes the top and bottom.'],
      rubric: [
        rubricRow('Correct volume algebra', 35, [['Excellent', 'Correct height for each radius.', 35], ['Proficient', 'Minor error.', 28], ['Developing', 'Formula error.', 18], ['Beginning', 'None.', 7]]),
        rubricRow('Surface area', 35, [['Excellent', 'Correct with both ends.', 35], ['Proficient', 'Forgot one end.', 28], ['Developing', 'Formula error.', 18], ['Beginning', 'None.', 7]]),
        rubricRow('Recommendation', 20, [['Excellent', 'Trade-off between material and shape explained.', 20], ['Proficient', 'Reasonable.', 16], ['Developing', 'Unsupported.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Units and clarity', 10, [['Excellent', 'Consistent units.', 10], ['Proficient', 'Minor issues.', 8], ['Developing', 'Mixed units.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
  ],
  finalExam: exam('Geometry final examination', [
    num('A triangle has angles 50° and 60°. What is the third angle?', 70, '180 − 110 = 70.'),
    num('A right triangle has legs 9 and 12. What is the hypotenuse?', 15, '81 + 144 = 225; √225 = 15.'),
    mc('Which criterion does NOT prove triangle congruence?', ['SSS', 'SAS', 'SSA', 'ASA'], 2, 'SSA does not guarantee congruence.'),
    num('If sin θ = 0.5 in a right triangle, what is θ in degrees?', 30, 'sin 30° = 0.5.'),
    num('What is the area of a circle with radius 4? Round to two decimals.', 50.27, '16π ≈ 50.27.'),
    short('Explain why AAA is enough for similarity but not for congruence.', 'Model: AAA fixes all three angles, so the shape is determined and corresponding sides are proportional, which is similarity. But the scale can be any positive number, so side lengths are not fixed, and congruence requires equal corresponding sides.', ['Distinguishes shape from size.', 'Connects to proportional sides.', 'Concludes correctly.'], 10),
  ]),
};
