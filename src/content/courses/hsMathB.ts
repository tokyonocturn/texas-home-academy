import type { Course } from '../../types';
import { HIGH_WEIGHTS } from '../weights';
import { exam, lesson, mc, num, project, quiz, rubricRow, section, short, teks, unit } from '../builders';

export const algebra2: Course = {
  id: 'hs-alg2',
  title: 'Algebra II',
  subject: 'math',
  grade: 10,
  credits: 1,
  semesters: 2,
  description:
    'Functions and their transformations, polynomials and complex numbers, rational and radical equations, and exponential and logarithmic models. Algebra II is the fourth math course required for the Distinguished Level of Achievement when paired with Algebra I and Geometry plus one more credit (19 TAC §74.11(f)).',
  essentialQuestions: [
    'How do transformations of a parent function change its equation and graph?',
    'When does an algebraic step introduce a solution that is not valid?',
  ],
  teks: [
    teks('19 TAC ch. 111, Algebra II', 'Functions and transformations; polynomials; complex numbers; rational and radical functions; exponential and logarithmic functions; sequences and series.'),
  ],
  weights: HIGH_WEIGHTS,
  units: [
    unit('u1', 'Functions and transformations', 'Every function family has a parent shape.', [
      lesson({
        id: 'alg2-u1-l1',
        title: 'Parent functions and vertex form',
        minutes: 50,
        objectives: ['Identify domain and range of common functions.', 'Describe horizontal and vertical transformations.'],
        sections: [
          section('The parent shapes', [
            'Know the shapes of y = x (line), y = x² (parabola), y = |x| (V), y = √x (half parabola), y = 1/x (hyperbola), and y = bˣ (exponential). Transformations follow a pattern: y = a·f(x − h) + k stretches by a, shifts right by h, and up by k.',
            'For f(x) = (x − 2)² + 3 the vertex is (2, 3). Inside the parentheses changes the input, so the shift is the opposite of the sign you see: x − 2 shifts right.',
          ]),
          section('Domain and range', [
            'Domain is the set of allowed inputs; range is the set of possible outputs. For y = √x the domain is x ≥ 0 and the range is y ≥ 0. For y = 1/x, x ≠ 0. State restrictions before simplifying or graphing.',
          ]),
        ],
        example: {
          prompt: 'Describe the transformation of y = −2(x + 1)² + 4 from y = x².',
          steps: ['Reflected across the x-axis (negative a).', 'Vertically stretched by 2.', 'Shifted left 1.', 'Shifted up 4; vertex (−1, 4).'],
          answer: 'Reflected, stretched by 2, left 1, up 4; vertex (−1, 4).',
        },
        practice: [
          mc('The vertex of y = (x − 2)² + 3 is', ['(2, 3)', '(−2, 3)', '(2, −3)', '(3, 2)'], 0, 'Vertex form y = (x − h)² + k gives (h, k).'),
          mc('The domain of y = 1/x is', ['all real numbers', 'x ≠ 0', 'x ≥ 0', 'x > 1'], 1, 'Division by zero is undefined.'),
        ],
      }),
    ], quiz('Unit 1 quiz: functions', [
      mc('y = |x − 4| is the V-shape shifted', ['left 4', 'right 4', 'up 4', 'down 4'], 1, 'x − 4 moves the graph right by 4.'),
      mc('The range of y = x² + 1 is', ['all real numbers', 'y ≥ 0', 'y ≥ 1', 'y ≤ 1'], 2, 'The minimum value is 1 at x = 0.'),
      num('If f(x) = 2x + 1, what is f(3)?', 7, '2(3) + 1 = 7.'),
    ]), project({
      title: 'Transformation gallery',
      prompt: 'Graph six functions from three families with different transformations. For each, state the equation, vertex or key point, domain, and range.',
      deliverable: 'Six labeled graphs with a table of properties.',
      guidance: ['Use a consistent scale.', 'Show the parent function faintly for comparison.'],
      rubric: [
        rubricRow('Accuracy of graphs', 45, [['Excellent', 'All six correct.', 45], ['Proficient', 'Minor errors.', 36], ['Developing', 'Several errors.', 22], ['Beginning', 'Mostly incorrect.', 9]]),
        rubricRow('Property table', 35, [['Excellent', 'Domain, range, key points all correct.', 35], ['Proficient', 'Minor gaps.', 28], ['Developing', 'Incomplete.', 18], ['Beginning', 'Missing.', 7]]),
        rubricRow('Presentation', 20, [['Excellent', 'Clear and labeled.', 20], ['Proficient', 'Readable.', 16], ['Developing', 'Disorganized.', 10], ['Beginning', 'Unclear.', 4]]),
      ],
    })),
    unit('u2', 'Polynomials and complex numbers', 'Some equations need numbers beyond the real line.', [
      lesson({
        id: 'alg2-u2-l1',
        title: 'Factoring, remainders, and i',
        minutes: 55,
        objectives: ['Factor polynomials using common factors and grouping.', 'Add, multiply, and simplify complex numbers.'],
        sections: [
          section('Factoring strategies', [
            'Always try the greatest common factor first: x³ − 4x = x(x² − 4) = x(x − 2)(x + 2). For four-term polynomials, grouping often works. The Remainder Theorem says the remainder when p(x) is divided by (x − c) is p(c); for p(x) = x³ − 2x + 4 at x = 1, p(1) = 3.',
            'The degree of a polynomial tells you the maximum number of real roots. A cubic can have one, two, or three real roots, counting multiplicity.',
          ]),
          section('Complex numbers', [
            'The imaginary unit is defined by i² = −1, so x² + 9 = 0 gives x = ±3i. Add complex numbers by combining like parts: (3 + 2i) + (1 − 5i) = 4 − 3i. Multiply as binomials and replace i² with −1: (3 + 2i)(1 − 5i) = 3 − 15i + 2i − 10i² = 13 − 13i.',
          ]),
        ],
        example: {
          prompt: 'Simplify (3 + 2i)(1 − 5i).',
          steps: ['Distribute: 3 − 15i + 2i − 10i².', 'Replace i² with −1: −10(−1) = +10.', 'Combine: 13 − 13i.'],
          answer: '13 − 13i.',
        },
        practice: [
          mc('x² + 9 = 0 has solutions', ['±3', '±3i', '±9i', 'no solutions'], 1, 'x² = −9, so x = ±3i.'),
          num('What is the remainder when p(x) = x³ − 2x + 4 is divided by x − 1?', 3, 'p(1) = 1 − 2 + 4 = 3.'),
        ],
      }),
    ], quiz('Unit 2 quiz: polynomials', [
      mc('Factor x³ − 4x completely.', ['x(x² − 4)', 'x(x − 2)(x + 2)', '(x − 2)³', 'x²(x − 4)'], 1, 'Factor the difference of squares after removing x.'),
      mc('i² equals', ['1', '−1', 'i', '0'], 1, 'By definition the imaginary unit squares to −1.'),
      mc('(2 + 3i) + (4 − i) equals', ['6 + 2i', '6 + 4i', '−2 + 2i', '8 + 2i'], 0, 'Combine real and imaginary parts: 6 + 2i.'),
    ]), project({
      title: 'Polynomial investigation',
      prompt: 'Choose a cubic polynomial. Find its factored form, all real and complex roots, and its end behavior. Graph it and explain how the graph matches the algebra.',
      deliverable: 'One-page investigation with graph and explanations.',
      guidance: ['Show the factoring steps.', 'State the degree and end behavior.', 'Connect roots to x-intercepts.'],
      rubric: [
        rubricRow('Factoring and roots', 40, [['Excellent', 'Complete and correct.', 40], ['Proficient', 'Minor error.', 32], ['Developing', 'Partial.', 20], ['Beginning', 'Incorrect.', 8]]),
        rubricRow('Graph and end behavior', 30, [['Excellent', 'Accurate with explanation.', 30], ['Proficient', 'Accurate graph, thin explanation.', 24], ['Developing', 'Errors.', 15], ['Beginning', 'Missing.', 6]]),
        rubricRow('Connections', 20, [['Excellent', 'Links roots, factors, and intercepts.', 20], ['Proficient', 'Some links.', 16], ['Developing', 'Lists facts.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Presentation', 10, [['Excellent', 'Clear.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
    unit('u3', 'Exponential and logarithmic models', 'Logarithms reverse exponentials.', [
      lesson({
        id: 'alg2-u3-l1',
        title: 'Log rules and solving equations',
        minutes: 55,
        objectives: ['Convert between exponential and logarithmic form.', 'Solve exponential equations using logarithms.'],
        sections: [
          section('Two directions', [
            'log_b(x) = y means b^y = x. So log₂ 8 = 3 because 2³ = 8, and log₃(1/9) = −2 because 3⁻² = 1/9.',
            'Product rule: log(xy) = log x + log y. Quotient rule: log(x/y) = log x − log y. Power rule: log(xⁿ) = n log x. These rules only apply when the arguments are positive.',
          ]),
          section('Solving', [
            'For 2^x = 32, rewrite as 2^5, so x = 5. For 3^(x+1) = 27, 27 = 3³, so x + 1 = 3 and x = 2. When bases cannot be matched, take the logarithm of both sides.',
            'Radical equations can introduce extraneous solutions. Solve √(x + 3) = 4 by squaring: x + 3 = 16, so x = 13. Always check in the original equation.',
          ]),
        ],
        example: {
          prompt: 'Solve log₂(x) + log₂(x − 2) = 3.',
          steps: ['Combine: log₂(x(x − 2)) = 3.', 'Rewrite: x(x − 2) = 8.', 'x² − 2x − 8 = 0 → (x − 4)(x + 2) = 0.', 'x = 4 or x = −2; reject −2 because logarithms need positive arguments.'],
          answer: 'x = 4.',
        },
        practice: [
          num('log₂ 32 = ?', 5, '2⁵ = 32.'),
          num('√(x + 3) = 4. Solve for x.', 13, 'Square both sides: x + 3 = 16, so x = 13.'),
        ],
      }),
    ], quiz('Unit 3 quiz: logarithms', [
      num('log₃ 81 = ?', 4, '3⁴ = 81.'),
      mc('log₃(1/9) equals', ['2', '−2', '1/2', '−1/2'], 1, '3⁻² = 1/9.'),
      num('Solve 3^(x+1) = 27.', 2, '27 = 3³, so x + 1 = 3.'),
    ]), project({
      title: 'Half-life and doubling',
      prompt: 'Model a quantity that doubles every 6 hours and one that halves every 8 days. Predict values at three future times and explain the meaning of each parameter.',
      deliverable: 'Two models, a table, a graph, and an explanation.',
      guidance: ['Use y = a·2^(t/6) and y = a·(1/2)^(t/8).', 'State the units of t.', 'Interpret the base and the exponent.'],
      rubric: [
        rubricRow('Models', 40, [['Excellent', 'Both correct with units.', 40], ['Proficient', 'Minor error.', 32], ['Developing', 'One correct.', 20], ['Beginning', 'Neither.', 8]]),
        rubricRow('Predictions', 30, [['Excellent', 'Accurate with work.', 30], ['Proficient', 'Minor error.', 24], ['Developing', 'Method unclear.', 15], ['Beginning', 'Incorrect.', 6]]),
        rubricRow('Interpretation', 20, [['Excellent', 'Explains parameters in context.', 20], ['Proficient', 'Basic.', 16], ['Developing', 'Vague.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Graph', 10, [['Excellent', 'Labeled.', 10], ['Proficient', 'Mostly.', 8], ['Developing', 'Unlabeled.', 5], ['Beginning', 'Missing.', 2]]),
      ],
    })),
  ],
  finalExam: exam('Algebra II final examination', [
    mc('The vertex of y = (x − 2)² + 3 is', ['(2, 3)', '(−2, 3)', '(2, −3)', '(3, 2)'], 0, 'Vertex form gives (h, k).'),
    mc('x² + 9 = 0 has solutions', ['±3', '±3i', '±9', 'none'], 1, 'x² = −9, so x = ±3i.'),
    num('log₂ 64 = ?', 6, '2⁶ = 64.'),
    num('Solve √(x + 3) = 4.', 13, 'x + 3 = 16, so x = 13.'),
    mc('(3 + 2i)(1 − 5i) equals', ['13 − 13i', '3 − 10i', '13 + 13i', '−7 − 13i'], 0, 'Expand and use i² = −1.'),
    short('Explain why squaring both sides of a radical equation can produce an extraneous solution.', 'Model: Squaring removes the radical but also makes any expression with the opposite sign square to the same value, so a negative value can satisfy the squared equation while failing the original. Checking each candidate in the original equation removes those.', ['Explains the sign ambiguity.', 'States the checking procedure.', 'Gives a clear conclusion.'], 10),
  ]),
};

export const precalculus: Course = {
  id: 'hs-precalc',
  title: 'Precalculus',
  subject: 'math',
  grade: 11,
  credits: 1,
  semesters: 2,
  advanced: true,
  description:
    'Trigonometric functions and identities, vectors, polar coordinates, conic sections, sequences and series, and an introduction to limits. This is an advanced fourth mathematics credit.',
  essentialQuestions: [
    'How does the unit circle unify trigonometry?',
    'What does a limit let you describe that a function value cannot?',
  ],
  teks: [
    teks('19 TAC ch. 111, Precalculus', 'Trigonometric functions and identities; vectors; polar coordinates; conic sections; sequences and series; limits.'),
  ],
  weights: HIGH_WEIGHTS,
  units: [
    unit('u1', 'Trigonometry and the unit circle', 'The unit circle is a coordinate model of periodic motion.', [
      lesson({
        id: 'precalc-u1-l1',
        title: 'Radians, reference angles, and exact values',
        minutes: 55,
        objectives: ['Convert between degrees and radians.', 'Evaluate sine, cosine, and tangent at key angles.'],
        sections: [
          section('Radians', [
            'A full turn is 2π radians, so degrees convert by multiplying by π/180. 120° × π/180 = 2π/3. Arc length on a circle of radius r is s = rθ when θ is in radians.',
            'On the unit circle, a point at angle θ has coordinates (cos θ, sin θ). So cos(π/3) = 1/2 and sin(π/6) = 1/2. Tangent is sin/cos, which is why tan(π/4) = 1.',
          ]),
          section('Reference angles and signs', [
            'A reference angle is the acute angle to the x-axis. It gives the magnitude of the trig value; the quadrant gives the sign. In quadrant II sine is positive; in quadrant III tangent is positive; in quadrant IV cosine is positive (ASTC).',
            'If sin θ = 0.6 and θ is in quadrant I, then cos θ = 0.8 because sin²θ + cos²θ = 1, and tan θ = 0.75.',
          ]),
        ],
        example: {
          prompt: 'Find sin, cos, and tan of 2π/3.',
          steps: ['2π/3 is 120°, in quadrant II.', 'Reference angle is π/3 (60°).', 'sin(π/3) = √3/2, cos(π/3) = 1/2.', 'In quadrant II sine is positive and cosine negative: sin = √3/2, cos = −1/2, tan = −√3.'],
          answer: 'sin = √3/2, cos = −1/2, tan = −√3.',
        },
        practice: [
          num('Convert 120° to radians. Give the coefficient of π.', 0.6667, '120 × π/180 = 2π/3, so the coefficient is 2/3 ≈ 0.6667.'),
          num('If sin θ = 0.6 and θ is in quadrant I, what is tan θ?', 0.75, 'cos θ = 0.8, so tan θ = 0.6/0.8 = 0.75.'),
        ],
      }),
    ], quiz('Unit 1 quiz: trigonometry', [
      num('What is sin(π/6)? Give a decimal.', 0.5, 'sin 30° = 0.5.'),
      mc('cos(2π/3) equals', ['1/2', '−1/2', '√3/2', '−√3/2'], 1, '120° is in quadrant II, where cosine is negative and the reference cosine is 1/2.'),
      num('How many radians are in a full circle? Give the coefficient of π.', 2, 'A full turn is 2π.'),
    ]), project({
      title: 'Periodic model',
      prompt: 'Model a real periodic quantity (tides, daylight, temperature) with a sine or cosine function. Estimate amplitude, period, and midline from data, then predict two future values.',
      deliverable: 'Data table, fitted function, graph, and predictions.',
      guidance: ['State how you estimated each parameter.', 'Keep units consistent.', 'Compare prediction with actual data if available.'],
      rubric: [
        rubricRow('Parameter estimation', 40, [['Excellent', 'Amplitude, period, midline justified.', 40], ['Proficient', 'Mostly correct.', 32], ['Developing', 'Guessed without justification.', 20], ['Beginning', 'Incorrect.', 8]]),
        rubricRow('Model and graph', 30, [['Excellent', 'Function matches data closely.', 30], ['Proficient', 'Reasonable fit.', 24], ['Developing', 'Poor fit.', 15], ['Beginning', 'No model.', 6]]),
        rubricRow('Predictions', 20, [['Excellent', 'Accurate with interpretation.', 20], ['Proficient', 'Computed.', 16], ['Developing', 'Errors.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Clarity', 10, [['Excellent', 'Well organized.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
    unit('u2', 'Identities, equations, and vectors', 'Identities transform; vectors carry direction.', [
      lesson({
        id: 'precalc-u2-l1',
        title: 'Solving trig equations and computing with vectors',
        minutes: 55,
        objectives: ['Solve basic trigonometric equations on an interval.', 'Compute magnitude, direction, and dot product.'],
        sections: [
          section('Trigonometric equations', [
            'Solve 2 sin x = 1 on [0, 2π): sin x = 1/2. The solutions are x = π/6 and x = 5π/6, because sine is positive in quadrants I and II. Always use the interval to decide how many solutions to report.',
            'The Pythagorean identity sin²x + cos²x = 1 lets you convert between sine and cosine, and the double-angle identities rewrite expressions in a single angle.',
          ]),
          section('Vectors', [
            'A vector (a, b) has magnitude √(a² + b²) and direction tan⁻¹(b/a) adjusted for the quadrant. For (3, 4), the magnitude is 5 and the unit vector is (0.6, 0.8).',
            'The dot product (a, b)·(c, d) = ac + bd. For (1, 2) and (3, 4), it is 3 + 8 = 11. A dot product of zero means the vectors are perpendicular.',
          ]),
        ],
        example: {
          prompt: 'Find the magnitude and unit vector of (3, 4), and the dot product with (1, 2).',
          steps: ['Magnitude: √(9 + 16) = 5.', 'Unit vector: (3/5, 4/5) = (0.6, 0.8).', 'Dot product: 3(1) + 4(2) = 11.'],
          answer: 'Magnitude 5; unit vector (0.6, 0.8); dot product 11.',
        },
        practice: [
          num('What is the magnitude of (6, 8)?', 10, '√(36 + 64) = 10.'),
          num('What is the dot product of (2, 3) and (4, 1)?', 11, '2(4) + 3(1) = 11.'),
        ],
      }),
    ], quiz('Unit 2 quiz: identities and vectors', [
      mc('The solutions of 2 sin x = 1 on [0, 2π) are', ['π/6 only', 'π/6 and 5π/6', 'π/3 and 2π/3', '5π/6 only'], 1, 'Sine is positive in quadrants I and II.'),
      num('What is the magnitude of (3, 4)?', 5, '√(9 + 16) = 5.'),
      mc('Two vectors are perpendicular when their dot product is', ['1', '0', 'their sum', 'undefined'], 1, 'A zero dot product indicates perpendicularity.'),
    ]), project({
      title: 'Vector journey',
      prompt: 'Plan a two-leg trip using vectors. Compute the resultant displacement, its magnitude, and its direction, then compare with the path actually traveled.',
      deliverable: 'Vector diagram, calculations, and comparison.',
      guidance: ['Use a consistent coordinate system.', 'Report direction as an angle from east.', 'Check units.'],
      rubric: [
        rubricRow('Vector setup', 35, [['Excellent', 'Components correct with diagram.', 35], ['Proficient', 'Minor error.', 28], ['Developing', 'Components confused.', 18], ['Beginning', 'No setup.', 7]]),
        rubricRow('Computation', 35, [['Excellent', 'Resultant and direction correct.', 35], ['Proficient', 'Minor error.', 28], ['Developing', 'Errors.', 18], ['Beginning', 'Incorrect.', 7]]),
        rubricRow('Interpretation', 20, [['Excellent', 'Compares path and displacement clearly.', 20], ['Proficient', 'Basic.', 16], ['Developing', 'Vague.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Presentation', 10, [['Excellent', 'Clear diagram.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Unlabeled.', 5], ['Beginning', 'Missing.', 2]]),
      ],
    })),
    unit('u3', 'Conics, series, and limits', 'Structure appears again at every scale.', [
      lesson({
        id: 'precalc-u3-l1',
        title: 'Conic sections and an introduction to limits',
        minutes: 55,
        objectives: ['Identify a conic from its equation.', 'Evaluate a limit by factoring.'],
        sections: [
          section('Conics', [
            'A circle has x² + y² = r². An ellipse x²/a² + y²/b² = 1 has semi-axes a and b; if a > b, the foci are at (±c, 0) with c² = a² − b². For x²/25 + y²/9 = 1, c² = 16, so the foci are (±4, 0).',
            'A parabola y² = 4px has focus (p, 0). For y² = 8x, 4p = 8, so p = 2 and the focus is (2, 0). A hyperbola has a minus sign between the squared terms.',
          ]),
          section('Limits', [
            'A limit describes the value a function approaches, which may differ from its value at the point. For (x² − 1)/(x − 1) as x → 1, the expression is undefined at 1, but factoring gives (x − 1)(x + 1)/(x − 1) = x + 1 for x ≠ 1, so the limit is 2.',
            'An infinite geometric series converges when |r| < 1, with sum a/(1 − r). For 1 + 1/2 + 1/4 + …, a = 1 and r = 1/2, so the sum is 2.',
          ]),
        ],
        example: {
          prompt: 'Evaluate lim(x→1) (x² − 1)/(x − 1) and find the foci of x²/25 + y²/9 = 1.',
          steps: ['Factor: (x − 1)(x + 1)/(x − 1) = x + 1.', 'Substitute x = 1: limit is 2.', 'For the ellipse, c² = 25 − 9 = 16, so c = 4.', 'Foci: (±4, 0).'],
          answer: 'Limit 2; foci (±4, 0).',
        },
        practice: [
          num('Evaluate lim(x→2) (x² − 4)/(x − 2).', 4, 'Factor to x + 2; at x = 2 the limit is 4.'),
          num('What is the sum of the infinite series 1 + 1/2 + 1/4 + …?', 2, 'a/(1 − r) = 1/(1 − 1/2) = 2.'),
        ],
      }),
    ], quiz('Unit 3 quiz: conics and limits', [
      num('For x²/25 + y²/9 = 1, what is c?', 4, 'c² = 25 − 9 = 16, so c = 4.'),
      num('Evaluate lim(x→3) (x² − 9)/(x − 3).', 6, 'Factor to x + 3; at x = 3 the limit is 6.'),
      mc('An infinite geometric series converges when', ['|r| > 1', '|r| < 1', 'r = 1', 'r = −1'], 1, 'The terms must shrink toward zero.'),
    ]), project({
      title: 'Conic design',
      prompt: 'Design a reflecting telescope or satellite dish cross-section using a parabola. Choose a focus distance, write the equation, and explain why signals parallel to the axis reflect to the focus.',
      deliverable: 'Equation, diagram, and explanation.',
      guidance: ['Use y² = 4px with a chosen p.', 'Label the focus and directrix.', 'Explain the reflection property in your own words.'],
      rubric: [
        rubricRow('Equation and geometry', 40, [['Excellent', 'Correct equation and labeled diagram.', 40], ['Proficient', 'Minor error.', 32], ['Developing', 'Confused parameters.', 20], ['Beginning', 'Incorrect.', 8]]),
        rubricRow('Explanation', 35, [['Excellent', 'Clear, accurate reflection property.', 35], ['Proficient', 'Basic explanation.', 28], ['Developing', 'Vague.', 18], ['Beginning', 'None.', 7]]),
        rubricRow('Design reasoning', 15, [['Excellent', 'Trade-offs discussed.', 15], ['Proficient', 'Some reasoning.', 12], ['Developing', 'Asserted.', 8], ['Beginning', 'None.', 3]]),
        rubricRow('Presentation', 10, [['Excellent', 'Clear.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
  ],
  finalExam: exam('Precalculus final examination', [
    num('Convert 90° to radians. Give the coefficient of π.', 0.5, '90 × π/180 = π/2.'),
    num('What is the magnitude of (6, 8)?', 10, '√(36 + 64) = 10.'),
    mc('The period of y = sin(2x) is', ['2π', 'π', 'π/2', '4π'], 1, 'The period is 2π/|b| = 2π/2 = π.'),
    num('Evaluate lim(x→2) (x² − 4)/(x − 2).', 4, 'Factor to x + 2, giving 4.'),
    mc('The foci of x²/25 + y²/9 = 1 are', ['(±4, 0)', '(±5, 0)', '(0, ±3)', '(±3, 0)'], 0, 'c² = 25 − 9 = 16.'),
    short('Explain the difference between a function value and a limit at a point.', 'Model: A function value is what the function equals at the point, if defined. A limit is the value the outputs approach from both sides. They can differ when there is a hole or removable discontinuity, as with (x² − 1)/(x − 1) at x = 1, where the limit is 2 but the function is undefined.', ['Defines both concepts.', 'Gives an example where they differ.', 'Uses precise language.'], 10),
  ]),
};
