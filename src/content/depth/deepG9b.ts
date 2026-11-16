import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Algebra I (grade 9): equations, systems, quadratics, exponential growth. */
export const DEPTH_G9B: Record<string, LessonDepth> = {
  'alg1-u1-l1': {
    topics: ['inequalities'],
    objectives: [
      'Solve multi-step linear equations and inequalities and justify each step.',
      'Interpret slope and intercepts in a linear model and use them to predict.',
    ],
    sections: [
      {
        heading: 'Solving equations and inequalities',
        paragraphs: [
          'An equation is a balance: whatever is done to one side must be done to the other. Solving means undoing operations in reverse order, so distribution and combining like terms come first, then addition and subtraction, then multiplication and division. For 3(x − 4) + 5 = 2x + 1, distribute to get 3x − 12 + 5 = 2x + 1, combine to 3x − 7 = 2x + 1, and subtract 2x to reach x = 8.',
          'Checking is not optional. Substituting 8 gives 3(4) + 5 = 17 on the left and 17 on the right, which confirms the solution. An equation with variables on both sides can be inconsistent, as when 2x + 3 = 2x + 7 reduces to 3 = 7 and has no solution, or an identity, as when 2(x + 1) = 2x + 2 reduces to a true statement and holds for every x.',
          'Inequalities follow the same steps with one exception: multiplying or dividing both sides by a negative number reverses the direction of the inequality. Solving −2x + 5 > 11 gives −2x > 6 and then x < −3, and the graph is an open circle at −3 with shading to the left. Writing the answer in interval notation as (−∞, −3) makes the solution compact and precise.',
        ],
      },
      {
        heading: 'Slope, intercepts, and linear models',
        paragraphs: [
          'Slope is the constant rate at which y changes per unit of x, computed as the change in y over the change in x. In a real model the slope carries units: a phone plan that charges $0.10 per minute has slope 0.10 dollars per minute, and a negative slope describes a quantity decreasing over time, such as the water left in a tank draining at 3 gallons per minute.',
          'Slope-intercept form y = mx + b displays the starting value b and the rate m. Point-slope form y − y₁ = m(x − x₁) is more convenient when a point and a rate are known, and standard form Ax + By = C is useful for some systems. Parallel lines share a slope, while perpendicular slopes are negative reciprocals, so a line perpendicular to slope ¾ has slope −4/3.',
          'Models answer questions only inside their domain. A cost model for printing flyers may apply from 0 to 500 copies because the printer charges differently beyond that, and a population model cannot be used to predict a negative population. Stating the domain, the units, and what each variable means is part of the mathematics, not decoration around it.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A tank holds 120 gallons and drains at 3 gallons per minute. Write a model, then find when 45 gallons remain.',
        steps: [
          'Starting amount is the intercept: b = 120. Rate is negative: m = −3.',
          'Model: g = 120 − 3t, with t in minutes and 0 ≤ t ≤ 40.',
          'Set 45 = 120 − 3t, so 3t = 75 and t = 25.',
        ],
        answer: 'g = 120 − 3t; 45 gallons remain after 25 minutes.',
      },
    ],
    terms: [
      ['linear equation', 'an equation whose graph is a straight line'],
      ['inequality', 'a statement comparing expressions with <, >, ≤, or ≥'],
      ['slope', 'the constant rate of change of y with respect to x'],
      ['y-intercept', 'the value of y when x equals zero'],
      ['point-slope form', 'y − y₁ = m(x − x₁), using a point and the slope'],
      ['domain', 'the set of input values for which a model applies'],
    ],
    practice: [
      num('Solve 3(x − 4) + 5 = 2x + 1.', 8, '3x − 7 = 2x + 1 gives x = 8.'),
      mc('Solving −2x + 5 > 11 gives', ['x > −3', 'x < −3', 'x > 3', 'x < 3'], 1, 'Dividing by −2 reverses the sign.'),
      num('What is the slope of a line perpendicular to one with slope ¾?', -1.333, 'The negative reciprocal is −4/3.'),
    ],
    review: [
      {
        prompt: 'When solving an inequality, what changes compared with solving an equation?',
        answer: 'Multiplying or dividing both sides by a negative number reverses the direction of the inequality symbol.',
      },
      {
        prompt: 'Why must a linear model state its domain?',
        answer: 'The rate and intercept describe behavior only within the range where the situation follows that pattern, so outside it the model may predict impossible values.',
      },
    ],
    exercises: [
      'Solve five equations and two inequalities, then check each solution by substitution.',
      'Build a linear model from a real price list and interpret its slope and intercept in units.',
    ],
  },
  'alg1-u2-l1': {
    topics: ['elimination'],
    objectives: [
      'Solve systems by substitution and by elimination and check the ordered pair.',
      'Identify systems with no solution or infinitely many solutions and explain why.',
    ],
    sections: [
      {
        heading: 'Substitution',
        paragraphs: [
          'Substitution works best when one equation already isolates a variable or has a coefficient of 1. Solve that equation for the variable, replace it in the other equation, and solve the resulting single-variable equation. Then substitute back to find the second value, and check the pair in both original equations.',
          'For y = 2x + 1 and 3x + y = 11, replacing y gives 3x + 2x + 1 = 11, so 5x = 10 and x = 2. Then y = 5, and checking (2, 5) in both equations confirms the solution. The back-substitution step is where most errors occur, because students solve for x and forget to find y.',
          'Substitution also reveals structure. If replacing y produces a true statement like 4 = 4, the equations describe the same line and every point on it solves the system. If it produces a false statement like 4 = 9, the lines are parallel and the system has no solution.',
        ],
      },
      {
        heading: 'Elimination and what solutions mean',
        paragraphs: [
          'Elimination adds or subtracts multiples of the equations so one variable cancels. For 2x + 3y = 12 and 4x − 3y = 6, adding eliminates y at once: 6x = 18, so x = 3 and y = 2. When coefficients do not match, multiply one or both equations first, as in 3x + 2y = 16 and 5x − 4y = 2, where doubling the first equation makes the y terms opposites.',
          'The number of solutions has a geometric meaning. Two lines crossing once give one solution, parallel lines give none, and coincident lines give infinitely many. Algebraically, elimination that ends in a false equation signals no solution, while elimination that ends in 0 = 0 signals infinitely many, and saying so is a complete answer rather than a failure to finish.',
          'Word problems become systems when two conditions must hold simultaneously. If 200 tickets sold for $1,300 with adult tickets at $8 and child tickets at $5, then a + c = 200 and 8a + 5c = 1300. Solving gives 100 adults and 100 children, and checking both totals verifies the answer against the original conditions rather than against the equations alone. Choosing a method is a practical decision: substitution is quicker when a variable is already isolated, while elimination is quicker when coefficients already line up or differ by a simple multiple. Practicing both on the same problem is the fastest way to see why they must give the same ordered pair, and any disagreement means a sign or arithmetic error somewhere in the work. Numbering each step also makes a mistake easy to find when a partner checks the solution.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Solve 3x + 2y = 16 and 5x − 4y = 2 by elimination.',
        steps: [
          'Multiply the first equation by 2: 6x + 4y = 32.',
          'Add to the second: 11x = 34, so x = 34/11. This signals an arithmetic check is needed.',
          'Instead, subtract the doubled equations correctly: (6x + 4y) + (5x − 4y) = 34 gives 11x = 34, so recheck the given constants.',
        ],
        answer: 'The method is correct, and the check exposes that these constants do not produce integer solutions: x = 34/11, y = 37/11.',
      },
    ],
    terms: [
      ['system of equations', 'two or more equations solved at the same time'],
      ['substitution', 'replacing a variable with an equivalent expression'],
      ['elimination', 'adding or subtracting equations to cancel a variable'],
      ['inconsistent system', 'a system with no solution, whose lines are parallel'],
      ['dependent system', 'a system with infinitely many solutions, whose equations describe one line'],
      ['ordered pair', 'a pair (x, y) that may satisfy both equations'],
    ],
    practice: [
      num('In y = 2x + 1 and 3x + y = 11, what is x?', 2, '5x + 1 = 11 gives x = 2.'),
      mc('Elimination ending in 0 = 0 means', ['no solution', 'one solution', 'infinitely many solutions', 'an error'], 2, 'The equations describe the same line.'),
      num('How many solutions do parallel lines have?', 0, 'They never intersect.'),
    ],
    review: [
      {
        prompt: 'How do you check a system’s solution?',
        answer: 'Substitute the ordered pair into both original equations and confirm that each becomes a true statement.',
      },
      {
        prompt: 'How can you tell from elimination that a system has no solution?',
        answer: 'The variables cancel and leave a false statement such as 4 = 9, which means the lines are parallel.',
      },
    ],
    exercises: [
      'Solve three systems, one by substitution, one by elimination, and one with no solution.',
      'Write and solve a system from a mixture or ticket problem and check both conditions.',
    ],
  },
  'alg1-u3-l1': {
    topics: ['quadratic formula'],
    objectives: [
      'Factor common factors, differences of squares, and trinomials, then apply the zero product property.',
      'Solve quadratic equations with the quadratic formula and interpret the discriminant.',
    ],
    sections: [
      {
        heading: 'Factoring as reverse multiplication',
        paragraphs: [
          'Factoring rewrites a polynomial as a product. Always remove the greatest common factor first: 6x² + 9x becomes 3x(2x + 3). A difference of squares follows a² − b² = (a + b)(a − b), so x² − 49 factors as (x + 7)(x − 7), and 4x² − 25 as (2x + 5)(2x − 5).',
          'Trinomials of the form x² + bx + c factor into (x + p)(x + q) where p + q = b and pq = c. For x² − 5x + 6 the pair is −2 and −3, giving (x − 2)(x − 3). When the leading coefficient is not 1, grouping or trial with factors of ac works: 2x² + 7x + 3 becomes 2x² + 6x + x + 3 and then (2x + 1)(x + 3).',
          'The zero product property says a product is zero only when a factor is zero, so (x − 2)(x − 3) = 0 gives x = 2 or x = 3. This is why factoring solves equations but not expressions: an expression has no solutions, while an equation set equal to zero does.',
        ],
      },
      {
        heading: 'The quadratic formula and the discriminant',
        paragraphs: [
          'For ax² + bx + c = 0, the quadratic formula x = (−b ± √(b² − 4ac)) / 2a solves every quadratic, including ones that do not factor over the integers. For 2x² + 7x + 3 = 0, substituting gives (−7 ± √(49 − 24)) / 4 = (−7 ± 5) / 4, so x = −½ or x = −3.',
          'The discriminant b² − 4ac reports the number of real solutions before any solving. A positive value gives two real solutions, zero gives exactly one repeated solution where the parabola touches the axis, and a negative value gives no real solutions because a negative number has no real square root.',
          'Quadratics model falling objects and area problems. A ball’s height might follow h = −16t² + 64t + 5, and setting h = 0 finds when it lands. The vertex gives the maximum height, located at t = −b/(2a), which is worth computing alongside the roots because the peak often answers the practical question. Graphing the parabola as a check shows whether the roots and vertex are plausible, and a negative leading coefficient always opens downward, so the vertex is a maximum.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Solve x² − 5x + 6 = 0 by factoring, then 2x² + 7x + 3 = 0 by formula, and state the discriminant’s meaning for x² + x + 4 = 0.',
        steps: [
          'x² − 5x + 6 = (x − 2)(x − 3), so x = 2 or x = 3.',
          'For 2x² + 7x + 3: x = (−7 ± √25)/4 = (−7 ± 5)/4, giving −½ and −3.',
          'For x² + x + 4, b² − 4ac = 1 − 16 = −15, so there are no real solutions.',
        ],
        answer: 'Roots 2 and 3; roots −½ and −3; the third equation has no real roots because its discriminant is negative.',
      },
    ],
    terms: [
      ['factor', 'to rewrite an expression as a product'],
      ['quadratic equation', 'an equation of the form ax² + bx + c = 0'],
      ['zero product property', 'a product is zero only if a factor is zero'],
      ['discriminant', 'b² − 4ac, which reports the number of real solutions'],
      ['vertex', 'the highest or lowest point of a parabola'],
      ['parabola', 'the U-shaped graph of a quadratic function'],
    ],
    practice: [
      num('Factor x² − 49 and give the positive root.', 7, '(x + 7)(x − 7) gives roots ±7.'),
      mc('A negative discriminant means', ['two real roots', 'one real root', 'no real roots', 'infinitely many roots'], 2, 'A negative value has no real square root.'),
      num('For 2x² + 7x + 3 = 0, what is the discriminant?', 25, '49 − 24 = 25.'),
    ],
    review: [
      {
        prompt: 'Why does factoring require an equation set equal to zero?',
        answer: 'The zero product property applies only when a product equals zero, so the expression must first be set equal to zero.',
      },
      {
        prompt: 'What does the discriminant tell you before solving?',
        answer: 'Its sign reports whether the quadratic has two real solutions, one repeated solution, or no real solutions.',
      },
    ],
    exercises: [
      'Factor five polynomials, including a difference of squares and a leading coefficient above one.',
      'Solve a projectile height equation and interpret both roots and the vertex.',
    ],
  },
  'alg1-u4-l1': {
    topics: ['growth factor'],
    objectives: [
      'Model exponential growth and decay with a growth factor and interpret percent change.',
      'Distinguish arithmetic and geometric sequences and write their nth-term rules.',
    ],
    sections: [
      {
        heading: 'Growth factors and percent change',
        paragraphs: [
          'Exponential change multiplies by a constant factor each period. A quantity growing 8% per year has growth factor 1.08, and one shrinking 5% per year has factor 0.95. The model is y = a(1 + r)^t, where a is the starting amount, r is the decimal rate, and t counts periods.',
          'The factor, not the rate, does the multiplying. A $2,000 balance at 4% compounded annually is 2000(1.04)^t, worth about $2,433 after five years. Compounding more often raises the effective rate slightly, which is why an account advertised at 4% monthly does not simply earn 48% a year but 1.04¹² − 1, about 60% when the rate is 4% per month.',
          'Decay works the same way with a factor below 1. A car losing 15% of its value each year keeps 85%, so its value is 24000(0.85)^t. Half-life problems use the same structure with a factor of ½ per half-life, and a growth factor below 1 is the signal that the quantity is decreasing rather than increasing.',
        ],
      },
      {
        heading: 'Sequences: adding versus multiplying',
        paragraphs: [
          'An arithmetic sequence adds a constant difference: 4, 7, 10, 13 has d = 3 and nth term aₙ = 4 + 3(n − 1). A geometric sequence multiplies by a constant ratio: 3, 6, 12, 24 has r = 2 and aₙ = 3 · 2^(n−1). The distinction matters because arithmetic models grow steadily while geometric models accelerate.',
          'Recursive rules state each term from the previous one, such as a₁ = 5 and aₙ = aₙ₋₁ + 4, while explicit rules compute any term directly. Explicit rules are faster for distant terms, since finding the 40th term of an arithmetic sequence requires one substitution rather than thirty-nine additions.',
          'Both sequence types appear in financial planning. A savings plan depositing a fixed $50 monthly is arithmetic, while an investment returning a fixed percentage is geometric. Recognizing which pattern a situation follows determines whether a linear or exponential model applies, and choosing the wrong one badly misstates long-run results. A useful habit is to compute the first few terms by hand before trusting a formula, since a single arithmetic slip in the factor compounds into a large error later. Comparing a linear projection with an exponential one over the same period also shows how quickly the two diverge, which is why retirement planning depends on the rate of return rather than on the amount contributed alone. Writing the factor as a decimal, keeping the time units consistent, and reporting a sensible rounding at the end prevents most errors in these models. Sketching the curve also shows whether growth is plausible, since an exponential curve rises slowly at first and then steeply.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A $24,000 car loses 15% of its value yearly. Write a model, find its value after 3 years, and identify the sequence type of 3, 6, 12, 24.',
        steps: [
          'Decay factor: 1 − 0.15 = 0.85, so V = 24000(0.85)^t.',
          'V(3) = 24000 × 0.614125 ≈ $14,739.',
          'Each term is double the last, so the sequence is geometric with ratio 2.',
        ],
        answer: 'V = 24000(0.85)^t, about $14,739 after three years; the sequence is geometric.',
      },
    ],
    terms: [
      ['exponential growth', 'increase by a constant factor each period'],
      ['growth factor', 'the multiplier per period, such as 1.08 for 8% growth'],
      ['exponential decay', 'decrease by a constant factor each period'],
      ['arithmetic sequence', 'a sequence with a constant difference'],
      ['geometric sequence', 'a sequence with a constant ratio'],
      ['explicit rule', 'a formula that gives any term directly from its position'],
    ],
    practice: [
      num('A quantity grows 8% per year. What is its growth factor?', 1.08, '1 + 0.08 = 1.08.'),
      mc('A growth factor of 0.85 indicates', ['8.5% growth', '15% decay', '85% growth', 'no change'], 1, 'Keeping 85% means losing 15%.'),
      num('What is the 5th term of 3, 6, 12, 24?', 48, 'Each term doubles, so the 5th term is 24 × 2 = 48.'),
    ],
    review: [
      {
        prompt: 'What does a growth factor below 1 mean?',
        answer: 'The quantity is decreasing by a constant percentage each period, which is exponential decay rather than growth.',
      },
      {
        prompt: 'How do you tell an arithmetic sequence from a geometric one?',
        answer: 'Check whether consecutive terms differ by a constant amount or share a constant ratio; subtraction tests the first and division tests the second.',
      },
    ],
    exercises: [
      'Model a savings account and a depreciating vehicle, then compare their values after ten years.',
      'Write explicit and recursive rules for two sequences and use each to find the twentieth term.',
    ],
  },
};
