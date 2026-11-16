import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Geometry and Algebra II (grade 10) depth pass. */
export const DEPTH_G10B: Record<string, LessonDepth> = {
  'geom-u1-l1': {
    topics: ['two-column proof'],
    objectives: [
      'Use postulates and definitions to justify each step of a proof.',
      'Write two-column and paragraph proofs of angle and segment relationships.',
    ],
    sections: [
      {
        heading: 'Postulates, definitions, and proof structure',
        paragraphs: [
          'A proof is a chain of statements each justified by a definition, postulate, or previously proved theorem. The segment addition postulate states that if B lies between A and C, then AB + BC = AC, and the angle addition postulate says the same for adjacent angles. A midpoint divides a segment into two congruent parts, and an angle bisector does the same to an angle. Writing the definition next to the statement is what separates a proof from an assertion.',
          'A two-column proof puts statements on the left and reasons on the right, which forces the writer to name the justification for every claim. Start from the given information, work toward the goal, and never assume what you are proving. A paragraph proof contains the same logic in prose, with transitions such as “because” and “therefore” doing the work that column headings do.',
          'Common errors are worth naming: using the conclusion as a reason, skipping a step that feels obvious, and citing a theorem that requires conditions the figure does not meet. In a diagram, markings such as tick marks and arcs are given information, while lengths and measures that look equal but carry no marking are not.',
        ],
      },
      {
        heading: 'Worked reasoning: vertical angles and bisectors',
        paragraphs: [
          'The vertical angles theorem states that vertical angles are congruent. Its proof uses the linear pair postulate twice: angle 1 and angle 2 are supplementary, and angle 2 and angle 3 are supplementary, so m∠1 + m∠2 = 180 and m∠2 + m∠3 = 180. Subtracting the second equation from the first gives m∠1 = m∠3, and the subtraction property of equality justifies that step.',
          'Bisector problems combine definitions with algebra. If BD bisects ∠ABC, then m∠ABD = m∠DBC, and if those measures are given as 3x + 5 and 5x − 15, then 3x + 5 = 5x − 15, so x = 10 and each half measures 35°, making the whole angle 70°. Checking by substitution is part of the proof, not an optional extra. Students should also learn to read a proof backward: begin at the conclusion and ask what would have to be true for it to follow. That strategy exposes missing links faster than reading forward, because each backward step names the theorem the proof actually needs. Keeping a short list of the theorems used in each unit, with their conditions, prevents citing a criterion whose hypotheses the figure does not satisfy, and it turns proof writing into a checklist rather than a guess.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Prove that if M is the midpoint of AB and AB = 14, then AM = 7.',
        steps: [
          'Given: M is the midpoint of AB and AB = 14.',
          'Definition of midpoint: AM = MB.',
          'Segment addition: AM + MB = AB, so 2AM = 14 by substitution.',
          'Division property: AM = 7.',
        ],
        answer: 'AM = 7 by the definition of midpoint, segment addition, substitution, and division.',
      },
    ],
    terms: [
      ['postulate', 'a statement accepted as true without proof'],
      ['theorem', 'a statement proved from definitions and postulates'],
      ['segment addition postulate', 'AB + BC = AC when B is between A and C'],
      ['midpoint', 'the point that divides a segment into two congruent parts'],
      ['angle bisector', 'a ray that divides an angle into two congruent angles'],
      ['vertical angles', 'the nonadjacent angles formed by two intersecting lines'],
    ],
    practice: [
      num('If AB = 14 and M is the midpoint, what is AM?', 7, 'Half of 14.'),
      mc('Vertical angles are', ['supplementary', 'complementary', 'congruent', 'always right'], 2, 'They are congruent.'),
      mc('A two-column proof places reasons', ['in the left column', 'in the right column', 'below the diagram', 'in the conclusion'], 1, 'Statements left, reasons right.'),
    ],
    review: [
      {
        prompt: 'Why must every statement in a proof carry a reason?',
        answer: 'Because a proof is valid only when each claim follows from a definition, postulate, or proved theorem rather than from appearance or assumption.',
      },
      {
        prompt: 'How do you prove vertical angles congruent?',
        answer: 'Use the linear pair postulate to show each angle is supplementary to the same angle, then apply the subtraction property of equality.',
      },
    ],
    exercises: [
      'Write a two-column proof of the midpoint theorem for a segment of length 20.',
      'Prove two angles congruent using an angle bisector and the substitution property.',
    ],
  },
  'geom-u2-l1': {
    topics: ['congruence criteria'],
    objectives: [
      'Determine whether triangles are congruent using SSS, SAS, ASA, AAS, or HL.',
      'Use similarity and scale factor to find missing lengths and areas.',
    ],
    sections: [
      {
        heading: 'Congruence criteria and what they rule out',
        paragraphs: [
          'Two triangles are congruent when all corresponding sides and angles match, but three pairs of parts are enough if they are the right three. SSS uses three sides, SAS uses two sides and the included angle, ASA uses two angles and the included side, AAS uses two angles and a non-included side, and HL applies only to right triangles with congruent hypotenuses and one leg.',
          'AAA and SSA do not guarantee congruence. Three matching angles fix shape but not size, and two sides with a non-included angle can produce two different triangles, the ambiguous case. Knowing why these fail prevents the most common proof error, which is citing a criterion that does not exist.',
          'Corresponding parts of congruent triangles are congruent, usually abbreviated CPCTC, and that phrase belongs at the end of a proof, after congruence is established. Using CPCTC before proving the triangles congruent is circular reasoning.',
        ],
      },
      {
        heading: 'Similarity, scale factor, and area',
        paragraphs: [
          'Similar triangles have congruent angles and proportional sides. AA similarity needs only two pairs of congruent angles because the third pair follows from the angle sum, and SSS and SAS similarity use proportional sides. The scale factor is the ratio of corresponding lengths, so a factor of 3 means every length triples.',
          'Perimeter scales by the factor and area scales by its square. Two similar rectangles with scale factor 3 have perimeters in ratio 3:1 and areas in ratio 9:1, which is why doubling a photograph’s dimensions quadruples the paper needed. Volume, for similar solids, scales by the cube.',
          'Similarity solves indirect measurement. A 1.6-meter person casting a 2-meter shadow beside a tree casting a 12-meter shadow gives 1.6/2 = h/12, so the tree is 9.6 meters tall. The proportion works because the sun’s rays are parallel, which makes the triangles similar by AA. Scale drawings on graph paper let students verify the ratio directly, and measuring the same figure at two scales shows that angles stay fixed while lengths change. Similarity also explains map scales: a 1:24,000 topographic map means one inch on paper represents 24,000 inches, or about 2,000 feet, on the ground, which is why the same map distance covers more land as the scale ratio grows. Students can check similarity claims numerically by dividing corresponding lengths and confirming that every ratio is equal, which is faster and more reliable than judging by eye. Similarity proofs should also state which correspondence is being used, since a mismatched vertex order invalidates a correct-looking proportion.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Triangles have sides 3, 4, 5 and 6, 8, 10. Are they congruent or similar? Then find the area ratio.',
        steps: [
          'Check ratios: 6/3 = 8/4 = 10/5 = 2, so sides are proportional.',
          'Proportional sides give similarity by SSS similarity, not congruence, since sizes differ.',
          'Area ratio is the square of the scale factor: 4:1.',
        ],
        answer: 'Similar with scale factor 2, and areas in ratio 4:1.',
      },
    ],
    terms: [
      ['congruent', 'having exactly the same size and shape'],
      ['included angle', 'the angle between two given sides'],
      ['CPCTC', 'corresponding parts of congruent triangles are congruent'],
      ['similar', 'having congruent angles and proportional sides'],
      ['scale factor', 'the ratio of corresponding lengths in similar figures'],
      ['ambiguous case', 'two possible triangles from SSA information'],
    ],
    practice: [
      mc('Which does not guarantee congruence?', ['SSS', 'SAS', 'AAA', 'ASA'], 2, 'AAA fixes shape only.'),
      mc('HL applies only to', ['acute triangles', 'right triangles', 'obtuse triangles', 'equilateral triangles'], 1, 'HL needs a right angle.'),
      num('If the scale factor is 3, by what factor does area grow?', 9, 'Area scales by the square.'),
    ],
    review: [
      {
        prompt: 'Why can AAA not prove triangles congruent?',
        answer: 'Matching angles fix the shape but allow any size, so the triangles are similar rather than necessarily congruent.',
      },
      {
        prompt: 'How does a scale factor affect perimeter, area, and volume?',
        answer: 'Perimeter scales by the factor, area by its square, and volume by its cube.',
      },
    ],
    exercises: [
      'Determine congruence for four triangle pairs and name the criterion or explain why none applies.',
      'Measure a shadow and calculate an inaccessible height using similar triangles.',
    ],
  },
  'geom-u3-l1': {
    topics: ['sine ratio'],
    objectives: [
      'Apply sine, cosine, and tangent ratios to find sides and angles in right triangles.',
      'Solve right-triangle problems involving angles of elevation and depression.',
    ],
    sections: [
      {
        heading: 'The three primary ratios',
        paragraphs: [
          'In a right triangle, the sine of an acute angle is the ratio of the opposite leg to the hypotenuse, the cosine is adjacent over hypotenuse, and the tangent is opposite over adjacent, remembered as SOH-CAH-TOA. For a 3-4-5 triangle with the 3 opposite angle A, sin A = 3/5, cos A = 4/5, and tan A = 3/4.',
          'Because the ratios depend only on the angle, they let you solve for unknown parts. To find a side, choose the ratio that includes the known side and the unknown, then solve the equation. To find an angle, use the inverse function: if tan A = 0.75, then A = tan⁻¹(0.75) ≈ 36.9°.',
          'The complementary angle relationship follows directly: sin A = cos(90° − A). This is why sine and cosine tables mirror each other and why a 30-60-90 triangle has sine 30° = 0.5 and cosine 60° = 0.5. Recognizing the symmetry reduces memorization.',
        ],
      },
      {
        heading: 'Angles of elevation and depression',
        paragraphs: [
          'An angle of elevation is measured upward from the horizontal to an object above, while an angle of depression is measured downward to an object below. Both are angles inside the right triangle formed with the horizontal, and the angle of depression from a tower equals the angle of elevation from the ground because they are alternate interior angles.',
          'Real problems require a diagram before a calculation. A drone 60 meters above ground sees a landing pad at a 25° angle of depression, so tan 25° = 60/d, giving d ≈ 128.7 meters. Labeling the known and unknown parts prevents choosing the wrong ratio, which is the most common error.',
          'Rounding should wait until the final step. Using 0.4663 for tan 25° throughout and rounding at the end keeps accuracy; rounding intermediate values can shift a result by several meters. Answers should include units, and angles should be reported to a sensible precision such as the nearest degree. Students should also recognize the special ratios: sin 30° = 0.5, sin 45° ≈ 0.707, and tan 45° = 1, values that appear constantly in physics and engineering problems. A quick estimate before computing catches gross errors, such as a ladder height exceeding its own length. Setting up the diagram, naming the ratio, solving, and checking reasonableness is the full method, and skipping the diagram is where most mistakes begin. Teachers should also insist on labeling the angle in the diagram before choosing a ratio, since the same side is opposite one acute angle and adjacent to the other. A labeled sketch is worth more than a memorized mnemonic when the diagram is rotated.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A ladder 5 meters long leans against a wall at 70° to the ground. How high does it reach, and how far is its base from the wall?',
        steps: [
          'Height is opposite the angle and the ladder is the hypotenuse: sin 70° = h/5.',
          'h = 5 sin 70° ≈ 4.70 m.',
          'Base is adjacent: cos 70° = b/5, so b ≈ 1.71 m.',
        ],
        answer: 'About 4.70 m high with the base about 1.71 m from the wall.',
      },
    ],
    terms: [
      ['sine', 'the ratio of the opposite leg to the hypotenuse'],
      ['cosine', 'the ratio of the adjacent leg to the hypotenuse'],
      ['tangent', 'the ratio of the opposite leg to the adjacent leg'],
      ['angle of elevation', 'the angle measured upward from the horizontal'],
      ['angle of depression', 'the angle measured downward from the horizontal'],
      ['inverse tangent', 'the function that returns an angle from a tangent ratio'],
    ],
    practice: [
      mc('Which ratio uses the side opposite and the hypotenuse?', ['sine', 'cosine', 'tangent', 'secant'], 0, 'Sine is opposite over hypotenuse.'),
      num('In a 3-4-5 triangle, what is sin A if 3 is opposite A?', 0.6, '3/5 = 0.6.'),
      mc('The angle of depression from a tower equals the angle of elevation from the ground because they are', ['vertical angles', 'alternate interior angles', 'complementary', 'supplementary'], 1, 'Parallel horizontal lines make them alternate interior.'),
    ],
    review: [
      {
        prompt: 'How do you decide which trigonometric ratio to use?',
        answer: 'Identify which sides are known and unknown relative to the angle, then choose the ratio that relates exactly those parts.',
      },
      {
        prompt: 'Why should rounding wait until the final step?',
        answer: 'Rounding intermediate values compounds error, so carrying more digits and rounding once gives a more accurate result.',
      },
    ],
    exercises: [
      'Solve four right triangles for missing sides and angles, showing the ratio used.',
      'Measure an angle of elevation outdoors and calculate an inaccessible height.',
    ],
  },
  'geom-u4-l1': {
    topics: ['inscribed angle'],
    objectives: [
      'Apply circle theorems about chords, arcs, and inscribed angles.',
      'Use coordinate geometry for distance, midpoint, slope, and transformations.',
    ],
    sections: [
      {
        heading: 'Circles: arcs, chords, and inscribed angles',
        paragraphs: [
          'A central angle has its vertex at the center and its measure equals its intercepted arc. An inscribed angle has its vertex on the circle and measures half its intercepted arc, so an angle inscribed in a semicircle is 90°. Inscribed angles that intercept the same arc are congruent, which is the basis of many circle proofs.',
          'A tangent line touches the circle at exactly one point and is perpendicular to the radius at that point. A chord is a segment whose endpoints lie on the circle, and a diameter is the longest chord. The perpendicular from the center to a chord bisects it, a relationship that turns circle problems into right-triangle problems.',
          'Arc length and sector area use proportions of the whole circle. Arc length equals (θ/360)(2πr) and sector area equals (θ/360)(πr²), so a 60° sector of a circle with radius 6 has arc length 2π and area 6π. Keeping the fraction visible prevents the common error of using the angle in place of the ratio.',
        ],
      },
      {
        heading: 'Coordinate geometry and transformations',
        paragraphs: [
          'The distance formula comes from the Pythagorean theorem: d = √((x₂ − x₁)² + (y₂ − y₁)²). The midpoint formula averages the coordinates, so the midpoint of (2, 3) and (8, 11) is (5, 7). Slope m = (y₂ − y₁)/(x₂ − x₁) identifies parallel lines as equal slopes and perpendicular lines as negative reciprocals.',
          'Coordinate geometry proves geometric facts algebraically. Showing that a quadrilateral has both pairs of opposite sides equal, or that its diagonals bisect each other, identifies a parallelogram. Showing that adjacent sides have negative reciprocal slopes identifies a rectangle, which is a parallelogram with right angles.',
          'Transformations have coordinate rules: a translation adds to coordinates, a reflection across the x-axis negates y, a 90° counterclockwise rotation about the origin maps (x, y) to (−y, x), and a dilation multiplies by the scale factor. Composing transformations requires applying them in order, since order can change the result. A circle’s equation in standard form, (x − h)² + (y − k)² = r², displays center and radius directly, and completing the square converts general form into standard form. Combining circle equations with coordinate distance lets a student prove that a triangle inscribed in a semicircle is right, which links three units of the course into one argument. Transformation rules then extend the same reasoning, because a rotation or reflection maps a figure onto a congruent one and preserves every distance the formulas compute, and the same coordinates that classify a figure also locate its center, so one diagram can support several conclusions.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'An inscribed angle intercepts a 130° arc. Find the angle, then find the distance between (1, 2) and (4, 6).',
        steps: [
          'Inscribed angle = half the arc: 130 ÷ 2 = 65°.',
          'Distance = √((4 − 1)² + (6 − 2)²) = √(9 + 16) = 5.',
        ],
        answer: 'The angle is 65° and the distance is 5 units.',
      },
    ],
    terms: [
      ['inscribed angle', 'an angle whose vertex lies on a circle'],
      ['central angle', 'an angle whose vertex is the center of a circle'],
      ['chord', 'a segment with endpoints on a circle'],
      ['tangent line', 'a line touching a circle at exactly one point'],
      ['arc length', 'the distance along a portion of a circle'],
      ['sector', 'the region bounded by two radii and an arc'],
    ],
    practice: [
      num('An inscribed angle intercepts a 130° arc. What is the angle?', 65, 'Half of 130.'),
      mc('A tangent line is perpendicular to', ['a chord', 'the radius at the point of tangency', 'the diameter', 'an arc'], 1, 'Radius and tangent are perpendicular.'),
      num('What is the x-coordinate of the midpoint of (2, 3) and (8, 11)?', 5, 'Average the x-values: (2 + 8) / 2 = 5. The midpoint is (5, 7).'),
    ],
    review: [
      {
        prompt: 'How is an inscribed angle related to its intercepted arc?',
        answer: 'Its measure is half the measure of the intercepted arc, so an angle inscribed in a semicircle measures 90°.',
      },
      {
        prompt: 'How can coordinate geometry prove a quadrilateral is a rectangle?',
        answer: 'Show it is a parallelogram with equal opposite sides and that adjacent sides have slopes that are negative reciprocals.',
      },
    ],
    exercises: [
      'Find arc length and sector area for three central angles.',
      'Classify a quadrilateral from its coordinates using distance and slope.',
    ],
  },
  'alg2-u1-l1': {
    topics: ['function transformations'],
    objectives: [
      'Identify function families and describe transformations of their graphs.',
      'Solve quadratic equations and interpret the discriminant.',
    ],
    sections: [
      {
        heading: 'Families and transformations',
        paragraphs: [
          'Function families include linear, quadratic, absolute value, square root, exponential, logarithmic, and rational functions. Each has a parent graph, and transformations shift, stretch, or reflect it. In y = a·f(x − h) + k, h shifts horizontally in the opposite direction of its sign, k shifts vertically, and a stretches or compresses vertically while a negative a reflects across the x-axis.',
          'For f(x) = x², the graph of y = 2(x − 3)² + 1 is a parabola stretched by 2, shifted 3 right and 1 up, with vertex (3, 1). Domain and range change with the transformation: the range is y ≥ 1 because the vertex is a minimum. Naming vertex, axis of symmetry, and intercepts from the equation is faster than graphing point by point.',
          'Composition and inverses extend the idea. f(g(x)) applies g first, and an inverse undoes a function, existing only when the original is one-to-one. The graph of an inverse reflects across y = x, and swapping x and y in the equation then solving recovers the inverse algebraically.',
        ],
      },
      {
        heading: 'Quadratics and the discriminant',
        paragraphs: [
          'The quadratic formula x = (−b ± √(b² − 4ac))/(2a) solves any quadratic, and the discriminant b² − 4ac reports the number of real solutions: positive gives two, zero gives one repeated root, negative gives none. For 2x² − 4x + 5 = 0, the discriminant is 16 − 40 = −24, so the parabola never crosses the x-axis.',
          'Vertex form y = a(x − h)² + k displays the vertex directly, while standard form is better for the discriminant and y-intercept. Completing the square converts one to the other: x² + 6x + 5 becomes (x + 3)² − 4, so the vertex is (−3, −4) and the roots are −1 and −5.',
          'Applications include projectile motion and optimization. A ball’s height h = −16t² + 48t + 4 reaches its maximum at t = −b/(2a) = 1.5 seconds, with height 40 feet, and lands when h = 0. Reporting both the maximum and the roots answers the practical questions a context actually asks. Graphing by hand from the vertex and one or two points is faster than a table of ten values, and it makes the symmetry visible. Students should be able to move between standard, vertex, and factored forms, since each answers a different question about the same parabola, and fluency between them is the clearest sign that the algebra has been understood, and it makes graphing a matter of reading parameters rather than plotting points.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Describe the transformations of y = −(x + 2)² + 4, then find its vertex and roots.',
        steps: [
          'The negative sign reflects across the x-axis; x + 2 shifts 2 left; +4 shifts up 4.',
          'Vertex form gives vertex (−2, 4).',
          'Set 0 = −(x + 2)² + 4, so (x + 2)² = 4 and x = 0 or x = −4.',
        ],
        answer: 'Reflected, shifted left 2 and up 4, with vertex (−2, 4) and roots 0 and −4.',
      },
    ],
    terms: [
      ['parent function', 'the simplest form of a function family'],
      ['transformation', 'a shift, stretch, compression, or reflection of a graph'],
      ['vertex form', 'y = a(x − h)² + k, showing the vertex'],
      ['discriminant', 'b² − 4ac, which reports the number of real roots'],
      ['inverse function', 'a function that reverses another’s effect'],
      ['composition', 'applying one function to the result of another'],
    ],
    practice: [
      mc('In y = (x − 3)² + 1, the vertex is', ['(3, 1)', '(−3, 1)', '(3, −1)', '(1, 3)'], 0, 'Vertex form gives (3, 1).'),
      num('What is the discriminant of 2x² − 4x + 5?', -24, '16 − 40 = −24.'),
      mc('A negative discriminant means', ['two real roots', 'one real root', 'no real roots', 'a linear graph'], 2, 'No real square root exists.'),
    ],
    review: [
      {
        prompt: 'How does each parameter in y = a(x − h)² + k affect the graph?',
        answer: 'a stretches or reflects vertically, h shifts horizontally in the opposite direction of its sign, and k shifts vertically.',
      },
      {
        prompt: 'What does the discriminant tell you before solving?',
        answer: 'Its sign shows whether there are two real roots, one repeated root, or no real roots.',
      },
    ],
    exercises: [
      'Graph three transformed functions and state domain and range for each.',
      'Solve a projectile problem for maximum height and landing time.',
    ],
  },
  'alg2-u2-l1': {
    topics: ['Rational Root Theorem'],
    objectives: [
      'Perform polynomial arithmetic, including division and factoring.',
      'Use the Rational Root Theorem and remainder theorem to find zeros.',
    ],
    sections: [
      {
        heading: 'Polynomial operations and factoring',
        paragraphs: [
          'Polynomials combine terms by degree, and operations follow the distributive property. Multiplying (x + 2)(x² − 3x + 1) gives x³ − x² − 5x + 2, and every term of one factor must multiply every term of the other. The degree of a product is the sum of the degrees, which is a useful check on the result.',
          'Factoring uses patterns: greatest common factor first, then difference of squares, sum and difference of cubes, and grouping for four-term expressions. x³ − 8 factors as (x − 2)(x² + 2x + 4) by the difference of cubes, and x³ + 27 as (x + 3)(x² − 3x + 9).',
          'Synthetic division divides by a linear factor quickly. Dividing x³ − 4x² + x + 6 by (x − 2) uses coefficients 1, −4, 1, 6 and produces quotient x² − 2x − 3 with remainder 0, so x = 2 is a zero and x² − 2x − 3 factors into (x − 3)(x + 1).',
        ],
      },
      {
        heading: 'Theorems that locate zeros',
        paragraphs: [
          'The Rational Root Theorem says any rational zero of a polynomial with integer coefficients must be a factor of the constant term divided by a factor of the leading coefficient. For 2x³ + 3x² − 8x + 3, candidates come from ±1, ±3 over 1, 2, giving ±1, ±3, ±1/2, ±3/2, which narrows guesswork to eight possibilities instead of infinite ones.',
          'The remainder theorem states that dividing p(x) by (x − a) leaves remainder p(a), so substituting is faster than dividing when you only need the remainder. The factor theorem follows: (x − a) is a factor exactly when p(a) = 0. Together they let a student test candidates quickly.',
          'The fundamental theorem of algebra guarantees a degree-n polynomial has n complex roots counted with multiplicity. A cubic therefore has three roots, which may include repeated or nonreal values, and the graph shows only the real ones. Knowing the count prevents stopping too early after finding two. A graph confirms the count, since the number of x-intercepts equals the number of real roots and a repeated root appears as a touch rather than a crossing. Checking a candidate zero with synthetic division and then confirming the remaining quadratic with the quadratic formula gives a complete and verifiable solution, and the number of roots should always match the degree counted with multiplicity, so a cubic reported with two roots still has one more to find.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Find all zeros of p(x) = x³ − 4x² + x + 6.',
        steps: [
          'Rational candidates are ±1, ±2, ±3, ±6.',
          'Test x = 2: 8 − 16 + 2 + 6 = 0, so (x − 2) is a factor.',
          'Divide to get x² − 2x − 3 = (x − 3)(x + 1).',
        ],
        answer: 'The zeros are 2, 3, and −1.',
      },
    ],
    terms: [
      ['degree', 'the highest exponent in a polynomial'],
      ['synthetic division', 'a shortcut for dividing by a linear factor'],
      ['Rational Root Theorem', 'rational zeros must divide the constant over the leading coefficient'],
      ['remainder theorem', 'dividing by (x − a) leaves remainder p(a)'],
      ['factor theorem', '(x − a) is a factor exactly when p(a) = 0'],
      ['multiplicity', 'the number of times a root repeats'],
    ],
    practice: [
      mc('What does the remainder theorem let you compute quickly?', ['the degree', 'p(a)', 'the leading term', 'the discriminant'], 1, 'The remainder equals p(a).'),
      num('How many complex roots does a cubic have, counted with multiplicity?', 3, 'A degree-3 polynomial has three.'),
      mc('A rational zero must divide the', ['leading coefficient only', 'constant term over leading coefficient', 'middle term', 'degree'], 1, 'Both ends matter.'),
    ],
    review: [
      {
        prompt: 'What does the remainder theorem let you compute quickly?',
        answer: 'It lets you find the remainder of division by (x − a) simply by evaluating the polynomial at a.',
      },
      {
        prompt: 'How does the factor theorem connect zeros and factors?',
        answer: 'A value a is a zero exactly when p(a) = 0, which means (x − a) divides the polynomial with no remainder.',
      },
    ],
    exercises: [
      'Divide three polynomials using synthetic division and state quotient and remainder.',
      'List all rational candidates for two polynomials and find every real zero.',
    ],
  },
  'alg2-u3-l1': {
    topics: ['change of base'],
    objectives: [
      'Simplify rational expressions and solve rational equations, noting excluded values.',
      'Convert between exponential and logarithmic forms and apply logarithm properties.',
    ],
    sections: [
      {
        heading: 'Rational expressions and equations',
        paragraphs: [
          'A rational expression is a quotient of polynomials, and it is undefined where its denominator is zero. Simplifying (x² − 9)/(x² − x − 6) factors to (x − 3)(x + 3)/((x − 3)(x + 2)), giving (x + 3)/(x + 2) with x ≠ 3 and x ≠ −2. Cancelling without recording excluded values changes the function’s domain and is a real error.',
          'Operations follow fraction rules: multiply by multiplying numerators and denominators, divide by multiplying by the reciprocal, and add by finding a common denominator. Solving a rational equation usually means multiplying through by the least common denominator, which can introduce extraneous solutions, so every answer must be checked against the original denominators.',
          'Rational functions graph with asymptotes. A vertical asymptote appears where the denominator is zero and does not cancel, while a horizontal asymptote depends on the degrees: equal degrees give the ratio of leading coefficients, a larger denominator degree gives y = 0, and a larger numerator degree gives no horizontal asymptote.',
        ],
      },
      {
        heading: 'Exponents, logarithms, and change of base',
        paragraphs: [
          'Logarithms are exponents: log₂ 8 = 3 because 2³ = 8. The properties log(xy) = log x + log y, log(x/y) = log x − log y, and log(xⁿ) = n log x turn multiplication into addition, which is why logarithms solved long multiplication before calculators.',
          'Solving exponential equations often requires logarithms. For 3^x = 20, take logs of both sides to get x log 3 = log 20, so x = log 20 / log 3 ≈ 2.727. That division is the change-of-base formula, log_b a = log a / log b, which lets any base be evaluated with common or natural logs.',
          'Exponential growth and decay models use y = a·e^(kt), where k is positive for growth and negative for decay. Doubling time satisfies e^(kt) = 2, so t = ln 2 / k. Half-life uses ln(1/2)/k, and these formulas turn compound-interest and radioactive-decay questions into single substitutions. Continuous compounding uses A = Pe^(rt), so $1,000 at 5% for ten years becomes 1000e^(0.5) ≈ $1,648.72, and carbon-14 dating with a half-life of about 5,730 years uses the same equation solved for t. Checking a logarithm answer by substituting it back into the original exponential equation is the habit that catches sign errors. Students should also recognize when a logarithm is undefined, since log of zero or a negative number has no real value and signals an error in the equation rather than extra work, which is why domain checking belongs in every logarithmic problem, along with checking that the base is positive and not equal to one.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Solve 3^x = 20 and simplify (x² − 9)/(x² − x − 6).',
        steps: [
          'Take logarithms: x log 3 = log 20.',
          'Divide: x = log 20 / log 3 ≈ 1.301/0.477 ≈ 2.727.',
          'Factor and cancel: (x − 3)(x + 3)/((x − 3)(x + 2)) = (x + 3)/(x + 2), x ≠ 3, −2.',
        ],
        answer: 'x ≈ 2.727, and the simplified expression is (x + 3)/(x + 2) with x ≠ 3 and x ≠ −2.',
      },
    ],
    terms: [
      ['rational expression', 'a quotient of two polynomials'],
      ['extraneous solution', 'a solution introduced by an operation that does not satisfy the original equation'],
      ['asymptote', 'a line a graph approaches but does not reach'],
      ['logarithm', 'the exponent to which a base must be raised to produce a number'],
      ['change of base', 'log_b a = log a / log b'],
      ['half-life', 'the time for a decaying quantity to fall to half its value'],
    ],
    practice: [
      num('What is log₂ 8?', 3, '2³ = 8.'),
      mc('A vertical asymptote occurs where the denominator is zero and', ['cancels', 'does not cancel', 'equals the numerator', 'is positive'], 1, 'A non-cancelling zero gives an asymptote.'),
      mc('Change of base is used to', ['factor polynomials', 'evaluate logs in any base', 'solve quadratics', 'find asymptotes'], 1, 'It converts between bases.'),
    ],
    review: [
      {
        prompt: 'Why must excluded values be recorded when simplifying a rational expression?',
        answer: 'Because the original expression is undefined where its denominator is zero, even if the factor cancels in the simplified form.',
      },
      {
        prompt: 'How do you solve an exponential equation like 3^x = 20?',
        answer: 'Take the logarithm of both sides and divide, giving x = log 20 / log 3, which is the change-of-base formula.',
      },
    ],
    exercises: [
      'Simplify four rational expressions and list every excluded value.',
      'Solve three exponential equations using logarithms and check each answer.',
    ],
  },
};
