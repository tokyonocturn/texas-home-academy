import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** English III and Precalculus (grade 11) depth pass. */
export const DEPTH_G11A: Record<string, LessonDepth> = {
  'eng3-u1-l1': {
    topics: ['close reading'],
    objectives: [
      'Close-read American texts across the Puritan, Romantic, and Realist periods.',
      'Explain how historical context shapes an author’s argument and imagery.',
    ],
    sections: [
      {
        heading: 'Reading American literature in context',
        paragraphs: [
          'American literature began with Puritan writing that read daily life as evidence of divine will. Anne Bradstreet’s poems, published in 1650, turn a house fire into a meditation on attachment, while Jonathan Edwards’s 1741 sermon “Sinners in the Hands of an Angry God” uses the image of a spider over a fire to make theological terror physical. Reading the imagery literally first, then theologically, is the basic method.',
          'Romanticism shifted authority from doctrine to individual perception. Emerson’s 1836 essay “Nature” asks readers to see with fresh eyes, Thoreau’s Walden (1854) tests that claim by living it, and Hawthorne’s The Scarlet Letter (1850) questions it by showing how a community punishes a private conscience. Whitman’s Leaves of Grass (1855) and Dickinson’s compact lyrics offer two opposite answers about how much the self can hold.',
          'Realism and modernism responded to industrial and global change. Twain’s Huckleberry Finn (1884) uses a child’s voice to expose adult hypocrisy, Fitzgerald’s The Great Gatsby (1925) turns a party into an indictment, and Hughes’s “Harlem” (1951) compresses deferred dreams into a series of similes. Noticing what each period trusts — God, the self, or evidence — gives a reader a way into any unfamiliar text.',
        ],
      },
      {
        heading: 'Close reading with evidence',
        paragraphs: [
          'Close reading begins with the sentence. In Gatsby’s final page, “boats against the current” makes progress feel both real and futile, and the metaphor carries the novel’s argument about the American dream. A reader should be able to point to the words that produce that effect, because an interpretation without textual evidence is only a reaction.',
          'Context is evidence too, but it must be used carefully. Knowing that The Great Gatsby appeared in 1925, four years before the crash, sharpens its critique of prosperity, yet the novel is not a prediction. Biographical detail should support a reading of the text rather than replace it.',
          'Comparison across periods produces stronger claims than summary. Pairing Bradstreet’s burned house with Gatsby’s green light shows two centuries of American writing returning to the same question: what may a person keep? The answer each text gives is the thesis a student can argue with quotations, and the argument is what earns credit. Students should also track how a period’s assumptions about authorship change the reading: Bradstreet wrote as a Puritan woman publishing against expectations, while Whitman self-published and revised Leaves of Grass across his lifetime. Noting who could publish, and under what constraints, turns literary history into evidence about voice rather than a list of dates. A paragraph that names the constraint and then shows how the text answers it is stronger than one that merely summarizes a plot.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Analyze Hughes’s question “What happens to a dream deferred?” for figure and effect.',
        steps: [
          'The question personifies a dream as something that can be postponed.',
          'The following similes offer possible outcomes: drying up, festering, stinking, sagging.',
          'The final line’s alternative, “Or does it explode?”, turns delay into danger.',
        ],
        answer: 'A personified dream plus escalating similes argue that postponement converts hope into pressure, ending in the threat of explosion.',
      },
    ],
    terms: [
      ['Puritanism', 'a religious movement reading life as evidence of divine will'],
      ['Romanticism', 'a movement valuing individual perception and nature over doctrine'],
      ['Realism', 'writing that depicts ordinary life with attention to social detail'],
      ['modernism', 'twentieth-century writing that experiments with form and perspective'],
      ['close reading', 'analysis of a passage’s specific language and structure'],
      ['thesis', 'an arguable claim that organizes an interpretation'],
    ],
    practice: [
      mc('“Sinners in the Hands of an Angry God” was preached in', ['1640', '1741', '1836', '1925'], 1, 'Edwards preached in 1741.'),
      mc('The Great Gatsby was published in', ['1884', '1925', '1951', '1855'], 1, '1925.'),
      num('In what year was The Scarlet Letter published?', 1850, '1850.'),
    ],
    review: [
      {
        prompt: 'How does historical context strengthen a close reading?',
        answer: 'Context explains what assumptions a text addresses, so an interpretation can show why a choice mattered to its first readers without replacing textual evidence.',
      },
      {
        prompt: 'Why is a comparison across periods a strong basis for a thesis?',
        answer: 'It reveals a shared question answered differently, which produces an arguable claim rather than a summary of one text.',
      },
    ],
    exercises: [
      'Annotate one page of a period text and write a paragraph on two word choices.',
      'Compare two texts from different periods on one theme, quoting each twice.',
    ],
  },
  'eng3-u2-l1': {
    topics: ['rhetorical analysis'],
    objectives: [
      'Analyze American speeches and essays for claim, evidence, and appeal.',
      'Evaluate how syntax and figuration serve an argument’s purpose.',
    ],
    sections: [
      {
        heading: 'Argument in American public writing',
        paragraphs: [
          'Frederick Douglass’s 1852 speech “What to the Slave Is the Fourth of July?” begins by praising the founders and then turns: “This Fourth of July is yours, not mine.” The concession earns credibility before the indictment, which is why the speech remains a model of controlled anger rather than mere denunciation.',
          'Lincoln’s Gettysburg Address, delivered in 1863, uses 272 words to redefine the war’s purpose. Its opening “Four score and seven years ago” places the nation’s birth in 1776 rather than 1787, and the closing “government of the people, by the people, for the people” turns a burial ground into a claim about legitimacy. Length is a rhetorical choice, not a measure of seriousness.',
          'Sojourner Truth’s 1851 speech in Akron, remembered as “Ain’t I a Woman?”, answers claims about women’s weakness with her own body and labor. The repeated question works as a refrain that forces listeners to reconcile abstract argument with visible evidence, which is why repetition is analyzed as structure rather than decoration.',
        ],
      },
      {
        heading: 'Syntax, style, and evidence',
        paragraphs: [
          'Syntax is the arrangement of clauses, and it creates emphasis. A short sentence after a long periodic one lands like a verdict, while parallel structure makes unequal things sound equivalent. Analyzing syntax means naming the pattern, quoting it, and explaining what the arrangement makes a reader feel or believe.',
          'Style includes diction, sentence length, and figurative density. Douglass moves between formal abstraction and concrete brutality, and that movement is the argument: the audience cannot keep the nation’s ideals and its practices in separate compartments. Naming the shift is stronger than calling the speech “powerful.”',
          'Evaluation asks whether evidence supports the claim and whether the appeal fits the occasion. A speech that relies on emotion at a commemoration and on statistics in a legislative hearing is making an appropriate choice; the same techniques in the wrong setting would fail. Judging fitness for occasion is the highest level of rhetorical analysis and the one most often skipped. Comparison sharpens evaluation: Truth’s repeated question and Douglass’s controlled concession both address hostile audiences, but one works through embodiment and the other through argumentative structure. Setting two speeches side by side makes the writer’s choices visible, because each could have made the other’s choice and did not. That counterfactual reasoning is what turns rhetorical analysis into an argument rather than a catalogue of devices. Students should also examine the speaker’s assumed audience: an abolitionist audience in 1852 was already sympathetic, while a women’s rights convention in 1851 included hostile clergy, and the difference explains the tactics each speaker chose. Naming the audience also explains what each text refuses to do, since a speaker who needs to hold a hostile crowd rarely leads with abstraction or long qualification.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain how Douglass’s concession to the founders functions rhetorically.',
        steps: [
          'He praises the founders’ principles, establishing shared ground.',
          'He then distinguishes their principles from the audience’s practice.',
          'The concession makes the critique harder to dismiss as disloyalty.',
        ],
        answer: 'Praising the founders earns ethos, so the following indictment reads as fidelity to principle rather than rejection of the nation.',
      },
    ],
    terms: [
      ['concession', 'acknowledging a valid point to strengthen an argument'],
      ['parallelism', 'repeating a grammatical pattern for emphasis'],
      ['periodic sentence', 'a sentence withholding its main clause until the end'],
      ['refrain', 'a repeated phrase or question in a speech'],
      ['diction', 'a writer’s choice of words'],
      ['occasion', 'the setting and purpose for which a text is produced'],
    ],
    practice: [
      num('In what year did Douglass deliver his Fourth of July speech?', 1852, '1852.'),
      num('How many words is the Gettysburg Address commonly cited as?', 272, 'About 272.'),
      mc('A periodic sentence withholds', ['its subject', 'its main clause', 'punctuation', 'evidence'], 1, 'The main clause arrives at the end.'),
    ],
    review: [
      {
        prompt: 'Why does a concession strengthen an argument?',
        answer: 'It shows fairness and understanding of the opposition, which earns trust and makes the following criticism harder to dismiss.',
      },
      {
        prompt: 'What does it mean to judge an appeal’s fitness for occasion?',
        answer: 'It means asking whether the emotional or evidentiary register suits the setting, audience, and purpose of the speech.',
      },
    ],
    exercises: [
      'Annotate a speech for concession, parallelism, and refrain, then write a thesis.',
      'Rewrite a paragraph of argument for a different occasion and justify the changes.',
    ],
  },
  'eng3-u3-l1': {
    topics: ['revision'],
    objectives: [
      'Revise an essay for claim, evidence, and organization using a reverse outline.',
      'Cite sources accurately and integrate quotations with commentary.',
    ],
    sections: [
      {
        heading: 'Revision as re-argument',
        paragraphs: [
          'Revision means reconsidering the argument, not correcting commas. A reverse outline, in which each paragraph is summarized in one sentence, reveals whether the essay actually argues its thesis or merely circles it. Paragraphs with identical summaries are redundant, and paragraphs with none are usually summarizing plot.',
          'Evidence should be integrated rather than dropped in. A quotation needs a lead-in that establishes who is speaking and when, the quotation itself, and commentary explaining which words carry the claim. The common failure is a paragraph of quotation followed by one sentence of comment, which leaves the reader to do the analysis.',
          'Organization follows the argument’s logic. Chronological order suits development, comparison suits evaluation, and problem-solution suits a proposal. A reader should be able to predict each paragraph’s job from the previous one, and transitions should state the relationship rather than announce a new topic.',
        ],
      },
      {
        heading: 'Research, citation, and style',
        paragraphs: [
          'Research begins with a question specific enough to be answered by evidence. A claim about American literature should rest on the primary text first, with secondary sources used to situate the reading rather than to supply it. Recording page numbers at the moment of reading prevents the last-minute scramble that produces citation errors.',
          'MLA style gives author and page in text and a works-cited entry listing author, title, container, publisher, date, and location. Consistency matters more than edge cases, and every borrowed idea needs a citation whether quoted or paraphrased. A bibliography alone does not mark which sentences are borrowed.',
          'Style at this level means control: vary sentence length, avoid nominalizations, and prefer active verbs where the actor matters. Reading the draft aloud exposes sentences that carry two ideas or none. Final proofreading catches the errors that distract a reader from an argument that is otherwise sound. Students should also learn to distinguish revision from editing by working in passes: one pass for the claim and evidence, one for paragraph order, one for sentence variety, and only then one for mechanics. Mixing passes produces local polish on a structurally weak essay, which is the most common reason a draft improves little between versions. Keeping each draft, with a note on what changed, shows progress and gives a student evidence for a portfolio or a writing conference. Naming what changed between drafts, in one sentence each, is also the clearest evidence a teacher can use to assess revision rather than final polish alone, and it gives the next draft a target instead of a vague sense of dissatisfaction, and it makes a conference with a teacher far more productive because both reader and writer can name the same problem in exactly the same words, which is the whole point of a writing conference with a teacher.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A paragraph quotes Hughes and then says “this shows the theme.” Revise it.',
        steps: [
          'Name the specific words that carry the claim: “dry up like a raisin in the sun.”',
          'Explain the effect: the simile makes delay a process of shriveling rather than simple waiting.',
          'Connect to the thesis about pressure and postponed hope.',
        ],
        answer: 'Quote the simile, explain how shriveling figures delay, and tie that reading to the essay’s claim about deferred hope.',
      },
    ],
    terms: [
      ['reverse outline', 'summarizing each paragraph to test an essay’s structure'],
      ['integration', 'introducing and explaining a quotation within a sentence'],
      ['commentary', 'analysis explaining how evidence supports a claim'],
      ['works cited', 'the formatted source list in MLA style'],
      ['nominalization', 'turning a verb into an abstract noun, often weakening a sentence'],
      ['transition', 'a phrase showing the relationship between ideas'],
    ],
    practice: [
      mc('A reverse outline reveals', ['spelling errors', 'structural redundancy', 'citation format', 'page length'], 1, 'It exposes repeated or empty paragraphs.'),
      mc('A quotation should be followed by', ['another quotation', 'commentary explaining it', 'a page number only', 'a conclusion'], 1, 'Analysis completes the evidence.'),
      num('How many elements does an MLA works-cited entry need at minimum here?', 5, 'Author, title, container, publisher, date, location.'),
    ],
    review: [
      {
        prompt: 'How does a reverse outline improve an essay?',
        answer: 'It shows whether each paragraph advances the thesis, exposes redundancy, and identifies paragraphs that only summarize.',
      },
      {
        prompt: 'What makes a quotation integrated rather than dropped in?',
        answer: 'A lead-in establishes its context, and commentary explains which words support the claim, so the quotation becomes evidence rather than illustration.',
      },
    ],
    exercises: [
      'Reverse-outline a draft essay and revise the weakest paragraph.',
      'Take one quotation and write three different commentary sentences for it.',
    ],
  },
  'precalc-u1-l1': {
    topics: ['inverse functions'],
    objectives: [
      'Determine domain, range, and inverses of functions algebraically and graphically.',
      'Analyze polynomial and rational functions using zeros, asymptotes, and end behavior.',
    ],
    sections: [
      {
        heading: 'Functions, composition, and inverses',
        paragraphs: [
          'A function assigns exactly one output to each input. Its domain is the set of allowed inputs and its range the set of outputs; for f(x) = √(x − 3), the domain is x ≥ 3 because the radicand cannot be negative. Composition f(g(x)) applies g first, and the order matters: for f(x) = x² and g(x) = x + 1, f(g(2)) = 9 while g(f(2)) = 5.',
          'An inverse undoes a function and exists as a function only when the original is one-to-one. To find it, swap x and y and solve: y = 2x + 5 becomes x = 2y + 5, so f⁻¹(x) = (x − 5)/2. The graphs are reflections across y = x, and composing f with its inverse returns x wherever both are defined.',
          'Restricting the domain makes some inverses possible. Squaring is not one-to-one on all reals, but on x ≥ 0 it has the inverse √x. Trigonometric inverses follow the same logic, which is why sin⁻¹ returns values only between −π/2 and π/2.',
        ],
      },
      {
        heading: 'Polynomial and rational behavior',
        paragraphs: [
          'Polynomial end behavior is set by the leading term: even degree with positive leading coefficient rises on both ends, odd degree falls on one side, and the sign of the leading coefficient flips the pattern. Zeros come from factoring, and multiplicity determines whether the graph crosses or touches the axis — odd multiplicity crosses, even touches.',
          'Rational functions add asymptotes. A vertical asymptote occurs where the denominator is zero and does not cancel; a removable discontinuity, or hole, occurs where a factor cancels. Horizontal asymptotes compare degrees: equal degrees give the ratio of leading coefficients, a larger denominator degree gives y = 0, and a larger numerator degree gives none unless a slant asymptote appears.',
          'Sketching requires assembling the evidence: intercepts, asymptotes, end behavior, and a test point in each interval. For f(x) = (x² − 1)/(x² − 4), the vertical asymptotes are x = ±2, the horizontal asymptote is y = 1, and the zeros are x = ±1. The sketch is then a check on the algebra rather than a guess. Students should also fluently convert between forms: factored form reveals zeros, vertex form reveals the extremum, and standard form reveals end behavior, so choosing a form is a strategic decision. For rational functions, testing a point in each interval between asymptotes confirms sign behavior that a sketch alone can misrepresent, and graphing technology is best used to verify a prediction rather than to replace it, since a student who predicts and then checks learns far more than one who copies a curve.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Find the inverse of f(x) = (x + 3)/(x − 2) and state its domain restriction.',
        steps: [
          'Write y = (x + 3)/(x − 2) and swap: x = (y + 3)/(y − 2).',
          'Multiply: x(y − 2) = y + 3, so xy − 2x = y + 3.',
          'Collect y: y(x − 1) = 2x + 3, giving y = (2x + 3)/(x − 1), x ≠ 1.',
        ],
        answer: 'f⁻¹(x) = (2x + 3)/(x − 1) with x ≠ 1, and the original function has x ≠ 2.',
      },
    ],
    terms: [
      ['domain', 'the set of valid inputs to a function'],
      ['inverse function', 'a function that reverses another’s effect'],
      ['one-to-one', 'a function whose outputs are never repeated'],
      ['asymptote', 'a line a graph approaches without reaching'],
      ['multiplicity', 'the number of times a zero repeats'],
      ['removable discontinuity', 'a hole where a factor cancels'],
    ],
    practice: [
      mc('The domain of √(x − 3) is', ['x ≥ 0', 'x ≥ 3', 'x ≤ 3', 'all reals'], 1, 'The radicand must be nonnegative.'),
      mc('A zero of even multiplicity', ['crosses the axis', 'touches the axis', 'is an asymptote', 'is undefined'], 1, 'Even multiplicity touches.'),
      num('How many vertical asymptotes does (x² − 1)/(x² − 4) have?', 2, 'At x = 2 and x = −2.'),
    ],
    review: [
      {
        prompt: 'How do you find an inverse function algebraically?',
        answer: 'Swap x and y in the equation and solve for y, then state any domain restrictions that keep the result a function.',
      },
      {
        prompt: 'How do multiplicities affect a polynomial graph at its zeros?',
        answer: 'Odd multiplicity crosses the axis and even multiplicity touches it, with higher multiplicities flattening the curve near the zero.',
      },
    ],
    exercises: [
      'Find inverses for three functions and verify each by composition.',
      'Sketch a rational function from intercepts and asymptotes, then check with a graphing tool.',
    ],
  },
  'precalc-u2-l1': {
    topics: ['vector magnitude'],
    objectives: [
      'Represent vectors in component and magnitude-direction form and add them.',
      'Apply trigonometric functions and identities to solve triangles and simplify expressions.',
    ],
    sections: [
      {
        heading: 'Vectors and their operations',
        paragraphs: [
          'A vector has magnitude and direction. In components, v = ⟨3, 4⟩ has magnitude √(9 + 16) = 5 and direction θ = tan⁻¹(4/3) ≈ 53.1° above the horizontal. The magnitude formula is the Pythagorean theorem, which is why a 3-4-5 vector is the standard example.',
          'Vector addition combines components: ⟨3, 4⟩ + ⟨1, −2⟩ = ⟨4, 2⟩. Geometrically, this is the parallelogram rule, and the resultant’s magnitude is not the sum of the magnitudes except when the vectors point the same way. Scalar multiplication scales magnitude without changing direction unless the scalar is negative, which reverses it.',
          'Resolution reverses the process. A 20-newton force at 30° above the horizontal has components 20cos30° ≈ 17.3 N horizontal and 20sin30° = 10 N vertical. Resolving forces into components is how physics problems become algebra, and it depends on choosing axes that simplify the geometry.',
        ],
      },
      {
        heading: 'Trigonometric functions and identities',
        paragraphs: [
          'The unit circle defines sine and cosine for all angles: a point at angle θ has coordinates (cos θ, sin θ), so sin²θ + cos²θ = 1 follows from the circle’s equation. Reference angles give exact values, which is why sin 150° = ½ and cos 240° = −½.',
          'Identities are equations true for every angle. The Pythagorean identity, the sum formulas such as sin(A + B) = sin A cos B + cos A sin B, and the double-angle formulas sin 2A = 2 sin A cos A let a student simplify expressions and solve equations. Verifying an identity means transforming one side into the other, not cross-multiplying.',
          'Solving trigonometric equations requires accounting for periodicity. sin x = ½ has solutions x = π/6 + 2πk and x = 5π/6 + 2πk for integer k, because sine repeats every 2π. Restricting to an interval, such as 0 ≤ x < 2π, gives the finite answer a problem usually expects. Students should memorize the exact values for 0°, 30°, 45°, 60°, and 90°, since they recur in physics and calculus, and should practice converting between degrees and radians until it is automatic. Verifying an identity by transforming one side only is a discipline worth enforcing, because cross-multiplying can introduce solutions that do not satisfy the original equation, and it disguises the logic the problem is testing, which is why teachers ask for both sides transformed in separate steps until the two expressions visibly match line by line, with every identity used cited on the right-hand side as the justification for that particular step of the simplification shown on that line.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Find the magnitude and direction of ⟨−3, 4⟩, then resolve a 10 N force at 60°.',
        steps: [
          'Magnitude = √(9 + 16) = 5.',
          'Direction: tan θ = 4/(−3) in quadrant II, so θ ≈ 126.9°.',
          'Components: 10cos60° = 5 N horizontal, 10sin60° ≈ 8.66 N vertical.',
        ],
        answer: 'Magnitude 5 at about 126.9°; components 5 N and 8.66 N.',
      },
    ],
    terms: [
      ['vector', 'a quantity with magnitude and direction'],
      ['component form', 'a vector written as ordered horizontal and vertical parts'],
      ['resultant', 'the vector sum of two or more vectors'],
      ['unit circle', 'a circle of radius one used to define sine and cosine'],
      ['identity', 'an equation true for all values in its domain'],
      ['periodicity', 'the repetition of a function at regular intervals'],
    ],
    practice: [
      num('What is the magnitude of ⟨3, 4⟩?', 5, '√25 = 5.'),
      mc('Adding vectors requires adding', ['magnitudes', 'components', 'angles', 'directions only'], 1, 'Components add.'),
      num('What is sin 30°?', 0.5, '0.5.'),
    ],
    review: [
      {
        prompt: 'How do you find a vector’s magnitude and direction from components?',
        answer: 'Magnitude is the square root of the sum of squared components, and direction is the inverse tangent of the vertical over the horizontal component, adjusted for quadrant.',
      },
      {
        prompt: 'Why does a trigonometric equation usually have infinitely many solutions?',
        answer: 'Because sine and cosine repeat every 2π, so each solution recurs with the addition of a full period.',
      },
    ],
    exercises: [
      'Compute magnitudes and directions for four vectors and sketch each.',
      'Verify two identities by transforming one side and solve a trig equation on [0, 2π).',
    ],
  },
  'precalc-u3-l1': {
    topics: ['logarithms'],
    objectives: [
      'Analyze exponential and logarithmic functions and solve related equations.',
      'Model growth and decay and work with sequences and series.',
    ],
    sections: [
      {
        heading: 'Exponentials and logarithms',
        paragraphs: [
          'An exponential function f(x) = a·bˣ grows by a constant factor b per unit. Its inverse is the logarithm: y = log_b x exactly when bʸ = x. The domain of a logarithm is x > 0, and its graph has a vertical asymptote at x = 0, which is why log equations can produce no solution.',
          'Logarithm properties, log(xy) = log x + log y, log(x/y) = log x − log y, and log(xⁿ) = n log x, follow from exponent rules. Solving 5^(2x) = 40 requires logarithms: 2x log 5 = log 40, so x = log 40/(2 log 5) ≈ 1.146. Checking the answer against the original equation catches sign and base errors.',
          'Growth and decay models use y = a·e^(kt) or y = a(1 + r)ᵗ. Doubling time satisfies e^(kt) = 2, so t = ln2/k, and half-life uses t = ln(1/2)/k. A population growing at 3% per year has k = ln(1.03) ≈ 0.0296 when written in continuous form, and the two forms describe the same curve.',
        ],
      },
      {
        heading: 'Sequences, series, and modeling',
        paragraphs: [
          'Arithmetic sequences add a constant difference, with aₙ = a₁ + (n − 1)d, while geometric sequences multiply by a ratio, with aₙ = a₁·r^(n−1). Sums follow formulas: an arithmetic series sums to n(a₁ + aₙ)/2 and a finite geometric series to a₁(1 − rⁿ)/(1 − r) for r ≠ 1.',
          'An infinite geometric series converges only when |r| < 1, summing to a₁/(1 − r). That condition is why 0.999… equals 1: the series 9/10 + 9/100 + … has a₁ = 0.9 and r = 0.1, so the sum is 0.9/0.9 = 1. Divergence when |r| ≥ 1 is a mathematical fact, not a limitation of the formula.',
          'Modeling requires choosing a family and checking residuals. Linear models add a constant amount, exponential models multiply, and logistic models level off at a carrying capacity. Plotting data before choosing an equation prevents the common error of forcing an exponential fit onto growth that is really linear over the observed range. Half-life and doubling-time problems should be solved both by the exponential equation and by repeated multiplication, so the formula is understood as a shortcut rather than a rule. Students preparing for calculus should also see the connection between average rate of change over an interval and the slope of a secant line, which previews the derivative without requiring it.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Solve 5^(2x) = 40 and find the sum of the geometric series 3 + 1.5 + 0.75 + …',
        steps: [
          'Take logs: 2x log 5 = log 40.',
          'x = log 40/(2 log 5) ≈ 1.602/1.398 ≈ 1.146.',
          'The series has a₁ = 3 and r = 0.5, so S = 3/(1 − 0.5) = 6.',
        ],
        answer: 'x ≈ 1.146, and the infinite sum is 6.',
      },
    ],
    terms: [
      ['exponential function', 'a function of the form a·bˣ with b positive'],
      ['logarithm', 'the exponent needed to produce a given number from a base'],
      ['doubling time', 'the time for a growing quantity to double'],
      ['geometric series', 'the sum of a geometric sequence'],
      ['convergence', 'the property of a series whose partial sums approach a limit'],
      ['logistic model', 'growth that levels off at a carrying capacity'],
    ],
    practice: [
      mc('The domain of log_b x is', ['all reals', 'x > 0', 'x ≥ 1', 'x ≠ 0'], 1, 'Logs need positive arguments.'),
      num('What is the sum of 3 + 1.5 + 0.75 + …?', 6, '3/(1 − 0.5) = 6.'),
      mc('An infinite geometric series converges when', ['|r| > 1', '|r| < 1', 'r = 1', 'r is negative'], 1, 'The ratio must be under 1 in absolute value.'),
    ],
    review: [
      {
        prompt: 'How do you solve an exponential equation with different bases?',
        answer: 'Take the logarithm of both sides, apply the power property, and divide to isolate the variable, then check the result.',
      },
      {
        prompt: 'When does an infinite geometric series have a finite sum?',
        answer: 'Only when the absolute value of the common ratio is less than one, in which case the sum is a₁/(1 − r).',
      },
    ],
    exercises: [
      'Solve three exponential and two logarithmic equations and check each.',
      'Model a savings account and a decaying isotope, then compare their graphs.',
    ],
  },
};
