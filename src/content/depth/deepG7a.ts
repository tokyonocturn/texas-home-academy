import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Grade 7, ELA and math: sections, third example, vocabulary, practice, review. */
export const DEPTH_G7A: Record<string, LessonDepth> = {
  'g7-ela-u1-l1': {
    topics: ['point of view'],
    objectives: [
      'Identify first-person, third-person limited, and omniscient narration and what each can reveal.',
      'Explain how pacing and diction create tone and tension.',
    ],
    sections: [
      {
        heading: 'Who tells it, and what they can know',
        paragraphs: [
          'Point of view is the vantage from which a story is told. A first-person narrator uses I and can report only what that character experiences, which creates intimacy and limits. A third-person limited narrator stands outside the character but stays inside one mind, gaining distance while keeping a single perspective. An omniscient narrator knows every character’s thoughts and can move through time and place at will.',
          'Each choice costs something. First person produces a voice with a personality but cannot see what happens in another room; omniscient narration can explain motives but may feel distant or judgmental. Second person, rare in fiction, addresses you directly and pulls the reader into the action, which is why it appears in instructions and in some experimental stories.',
          'Narrators can also be unreliable. A first-person narrator may misunderstand events, protect themselves, or lie, and the reader detects the gap between what is claimed and what the details show. That gap is not a flaw; it is often the point of the story, and it rewards rereading once the reader knows what the narrator omitted.',
        ],
      },
      {
        heading: 'Pacing and tone',
        paragraphs: [
          'Pacing is the speed at which a story moves. Summary compresses months into a sentence, while scene slows down to show dialogue and gesture moment by moment. Short sentences and quick exchanges speed a reader up; long sentences with layered clauses slow the eye and create a sense of weight.',
          'Writers manipulate time to control tension. A chapter may stretch a few seconds of a fall across a page, or skip a year in a phrase, and each choice signals what matters. Repeating a detail also affects pace, since the reader notices the return and begins to expect significance.',
          'Tone is the writer’s attitude toward the subject, conveyed through diction, sentence rhythm, and detail selection. Connotation matters more than dictionary meaning: calling a house cramped rather than cozy changes the tone without changing the facts. Naming the tone with a precise word, such as wry, elegiac, or exasperated, is more useful than calling a passage “good.” Free indirect discourse blends the narrator’s voice with a character’s thoughts, so a sentence may report a fact and judge it at the same time. That technique lets a writer stay in third person while keeping the intimacy of first person, and it is one reason point of view is a craft decision rather than a label.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A passage reads: “I told them I was fine. Later, I stood in the hallway for eleven minutes before I knocked.” Identify the point of view and one technique that creates tension.',
        steps: [
          'The pronoun I shows first-person narration.',
          'The gap between “fine” and the eleven-minute hesitation reveals an unreliable self-report.',
          'The specific number slows the passage and makes the delay feel long.',
        ],
        answer: 'First person; the narrator’s contradiction and the specific delay create tension.',
      },
    ],
    terms: [
      ['point of view', 'the vantage from which a story is narrated'],
      ['first person', 'narration using I, limited to one character’s experience'],
      ['third-person limited', 'narration outside the story but inside one character’s mind'],
      ['omniscient', 'narration that knows every character’s thoughts'],
      ['pacing', 'the speed at which a narrative moves'],
      ['tone', 'the writer’s attitude toward the subject, shown through diction and detail'],
    ],
    practice: [
      mc('What can an omniscient narrator do that a first-person narrator cannot?', ['use I', 'report other characters’ thoughts', 'describe weather', 'use dialogue'], 1, 'Omniscient narration has access to every mind.'),
      mc('Which technique slows pacing?', ['short sentences', 'summary', 'long sentences with detail', 'a time jump'], 2, 'Layered detail slows the reader’s eye.'),
      num('How many points of view are described in this lesson?', 4, 'First, third limited, omniscient, and second person.'),
    ],
    review: [
      {
        prompt: 'What can an omniscient narrator do that a first-person narrator cannot?',
        answer: 'An omniscient narrator can report every character’s thoughts and move freely across time and place.',
      },
      {
        prompt: 'How does pacing create tension?',
        answer: 'Slowing a scene at a critical moment stretches suspense, while quick summaries speed past consequences.',
      },
    ],
    exercises: [
      'Rewrite a paragraph from a story in a different point of view and note what is lost.',
      'Find a passage in a novel and mark where the author speeds up and slows down, then explain why.',
    ],
  },
  'g7-ela-u2-l1': {
    topics: ['warrant'],
    objectives: [
      'Map an argument into claim, reasons, evidence, and warrants, including unstated warrants.',
      'Judge evidence for relevance, sufficiency, accuracy, and recency.',
    ],
    sections: [
      {
        heading: 'Mapping an argument',
        paragraphs: [
          'An argument is a set of connected statements in which some support others. The claim is what the writer wants accepted; reasons explain why; evidence supplies facts; and warrants are the assumptions that connect evidence to claim. Naming each part turns a paragraph of prose into a structure you can inspect for gaps.',
          'Warrants are often unstated, which is why they matter. If a writer argues that a new bus route will reduce traffic because a similar city added one, the hidden warrant is that the two cities are alike in the ways that matter. Making that assumption explicit lets a reader decide whether it holds, instead of accepting the conclusion by default.',
          'Qualifiers limit a claim honestly. Words such as usually, in most cases, and under these conditions make an argument defensible, while absolute terms like always and never make it easy to refute with one exception. A strong argument states its scope, because an overbroad claim invites a counterexample rather than agreement.',
        ],
      },
      {
        heading: 'Judging evidence and sources',
        paragraphs: [
          'Evidence must be relevant, sufficient, accurate, and current enough for the claim. A single anecdote can illustrate a point but cannot establish a pattern; a statistic from one neighborhood cannot describe a city; a study of adults may not generalize to children. Checking these qualities is faster than arguing about conclusions.',
          'Sources add another layer. Expertise, funding, method, and date all affect credibility, and a source can be honest yet limited. A company study of its own product is not automatically false, but a reader should ask what it measured and what it left out, and look for independent work that examined the same question.',
          'Correlation and causation are frequently confused. Two trends that rise together may share a third cause, or one may follow the other by coincidence. A claim of cause needs an account of the mechanism and, ideally, a comparison in which other factors are held steady. Without that, the safest statement is that the two are associated, not that one produced the other. Experts disagree for reasons worth reading closely: they may be weighing different evidence, using different definitions, or answering slightly different questions. When two credible sources conflict, compare their methods and definitions before deciding that one must be wrong, because a disagreement about measurement is not the same as a disagreement about facts. Recording a source’s date matters for the same reason: a study of reading instruction from 1985 may still be useful, but its conclusions should be checked against later work with larger samples.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Map this argument: “Our school should start later. Students are chronically short on sleep, and later starts in two nearby districts raised attendance.” Name one unstated warrant.',
        steps: [
          'Claim: the school should start later.',
          'Reason: students are short on sleep; evidence: attendance gains in nearby districts.',
          'Unstated warrant: those districts resemble ours closely enough for the results to transfer.',
        ],
        answer: 'Claim, reason, two pieces of evidence, and a transferability warrant that should be examined.',
      },
    ],
    terms: [
      ['argument', 'connected statements in which some support a conclusion'],
      ['warrant', 'the assumption connecting evidence to a claim'],
      ['qualifier', 'a word that limits the scope of a claim'],
      ['correlation', 'a relationship in which two variables change together'],
      ['causation', 'a relationship in which one variable produces a change in another'],
      ['credible', 'trustworthy because of expertise, method, and evidence'],
    ],
    practice: [
      mc('A warrant is', ['the main claim', 'the assumption connecting evidence to claim', 'a citation', 'a counterargument'], 1, 'Warrants explain why evidence counts.'),
      mc('Two trends rising together shows', ['causation', 'correlation', 'neither', 'proof'], 1, 'Association alone does not establish cause.'),
      num('How many evidence tests are named here?', 4, 'Relevance, sufficiency, accuracy, and currency.'),
    ],
    review: [
      {
        prompt: 'Why is a warrant important?',
        answer: 'It explains why the evidence supports the claim, and making it explicit exposes assumptions a reader can test.',
      },
      {
        prompt: 'Name three signs of a credible source.',
        answer: 'Relevant expertise, a described method, and evidence that can be checked independently all support credibility.',
      },
    ],
    exercises: [
      'Diagram an editorial’s argument and circle every unstated warrant.',
      'Find a news claim based on a study and list what the study measured and what it did not.',
    ],
  },
  'g7-ela-u3-l1': {
    topics: ['revision'],
    objectives: [
      'Narrow a broad topic into a research question with a workable scope.',
      'Revise a draft at the level of ideas before editing sentences.',
    ],
    sections: [
      {
        heading: 'From topic to researchable question',
        paragraphs: [
          'A research question sets the scope of an inquiry. Broad topics such as water produce unfocused essays; a question such as “How has groundwater pumping changed farming in the Texas Panhandle since 1950?” names a place, a practice, and a time period, which tells you what sources to look for.',
          'Scope must match the assignment. A short paper needs a question that a few strong sources can answer, while a longer project can support subquestions. Writing two or three subquestions turns a large question into a plan, and each subquestion can be matched to a type of source: government data, scholarly articles, interviews, or primary documents.',
          'Keywords follow from the question. A researcher lists synonyms and technical terms, tries combinations, and records which searches produced useful results. Keeping a simple log of sources and search terms prevents the common waste of finding a good article twice and losing track of how it was found.',
        ],
      },
      {
        heading: 'Revision at the level of ideas',
        paragraphs: [
          'Revision means re-seeing the whole draft, not correcting commas. Start with the thesis: does the draft still argue what the introduction promises, or has it drifted? Thesis drift is common when a writer follows interesting evidence away from the original question, and fixing it may require cutting material that is good but irrelevant.',
          'Next, check the order of paragraphs. Each should prepare the next, and a reader should be able to follow the argument from topic sentences alone. If two paragraphs make the same point, combine them; if a paragraph makes three points, split it. Moving a paragraph is often more valuable than rewriting a sentence inside it.',
          'Only after the structure holds should a writer edit sentences for clarity and proofread. Peer feedback helps most when it asks specific questions, such as where the argument was hard to follow, rather than offering general praise. Citations belong to revision too: every borrowed idea needs a source, and paraphrases must be genuinely rewritten, not lightly reworded. Swapping a few synonyms while keeping the original sentence structure is still too close, and it is treated as plagiarism in most school policies. Reading the source, closing it, and writing the idea from memory is the simplest guard. A works-cited entry is not decoration; it is the reader’s route back to the evidence, which is why missing dates and page numbers weaken an otherwise good paper.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Narrow “social media” into a research question and name two source types you would use.',
        steps: [
          'Add a population, an effect, and a time frame.',
          'Choose sources that measure that effect rather than opinion pieces.',
        ],
        answer: '“How does social media use relate to sleep duration among U.S. teenagers since 2015?” Use survey data and peer-reviewed studies.',
      },
    ],
    terms: [
      ['research question', 'a narrow question that focuses an inquiry'],
      ['scope', 'the range a project covers, including place, time, and population'],
      ['revision', 'reworking a draft’s ideas and structure'],
      ['thesis drift', 'when a draft stops arguing what the introduction promised'],
      ['peer review', 'feedback from another reader before a draft is finished'],
      ['citation', 'a reference allowing a reader to locate a source'],
    ],
    practice: [
      mc('How do you know a research question is too broad?', ['it has a place and date', 'a few sources cannot answer it', 'it uses technical terms', 'it is a full sentence'], 1, 'A workable question can be answered with available sources.'),
      mc('What should you check first when revising?', ['spelling', 'the thesis and structure', 'font size', 'word count'], 1, 'Ideas and organization come before editing.'),
      num('How many subquestions does this lesson suggest writing?', 3, 'Two or three subquestions turn a question into a plan.'),
    ],
    review: [
      {
        prompt: 'How do you know a research question is too broad?',
        answer: 'If a handful of sources cannot answer it within the assignment’s length, the scope needs narrowing.',
      },
      {
        prompt: 'What should you check first when revising?',
        answer: 'Check whether the thesis and paragraph order still deliver what the introduction promised.',
      },
    ],
    exercises: [
      'Turn three broad topics into research questions with subquestions and keywords.',
      'Revise an old draft by reordering paragraphs and cutting one irrelevant section.',
    ],
  },
  'g7-math-u1-l1': {
    topics: ['percent change'],
    objectives: [
      'Compute percent increase and decrease and apply successive percent changes.',
      'Use a scale factor to convert between a drawing and the real object.',
    ],
    sections: [
      {
        heading: 'Percent change and multipliers',
        paragraphs: [
          'A percent is a ratio out of one hundred, and a percent change compares the amount of change with the original amount. An increase from 40 to 50 is a change of 10, and 10 ÷ 40 = 0.25, so it is a 25% increase. A decrease is computed the same way, with the change expressed as a positive number and labeled a decrease.',
          'Multipliers make successive changes easy. A 20% discount multiplies the price by 0.80, and an 8% tax multiplies the result by 1.08. An $80 item with a 20% discount costs $64, and tax brings it to $69.12. Adding and subtracting percents instead — treating 20% off then 8% tax as a 12% discount — gives the wrong answer because each percent applies to a different base.',
          'Percents also describe interest, commission, and tips. Simple interest is principal × rate × time, so $500 at 4% for three years earns $60. Commission is a percent of sales, and a 6% commission on $2,400 is $144. In each case, identify the base before computing, because the same rate applied to a different base produces a different amount.',
        ],
      },
      {
        heading: 'Scale drawings and similar figures',
        paragraphs: [
          'A scale compares a drawing to the real object. A scale of 1:50 means one unit on the drawing represents fifty of the same unit in reality, so a 4 cm wall on the plan is 200 cm, or 2 meters, long. Scale factors work in both directions: multiply to go from drawing to reality, divide to go back.',
          'Similar figures have the same shape and proportional side lengths. If two rectangles are similar with a scale factor of 3, every length in the larger figure is three times the corresponding length in the smaller one. Areas, however, scale by the square of the factor, so the larger rectangle’s area is nine times as large.',
          'Scale problems appear in maps, models, and recipes. A map legend of one inch to ten miles converts a 3.5-inch distance to 35 miles, and a recipe scaled by 1.5 multiplies every ingredient by one and a half. Checking units at each step prevents the common error of mixing inches with miles or grams with kilograms. A quick sanity check helps: a scale drawing of a house should produce room dimensions a person could walk through, not five centimeters or five kilometers, so an absurd result usually signals a missed conversion.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A $80 jacket is discounted 20%, then 8% tax is added. Find the final price.',
        steps: [
          'Apply the discount: 80 × 0.80 = 64.',
          'Apply the tax to the discounted price: 64 × 1.08 = 69.12.',
        ],
        answer: '$69.12, because each percent applies to a different base.',
      },
    ],
    terms: [
      ['percent change', 'the amount of change divided by the original amount, as a percent'],
      ['multiplier', 'a factor such as 1.08 that applies a percent change in one step'],
      ['scale factor', 'the ratio between a drawing or model and the real object'],
      ['similar figures', 'figures with the same shape and proportional sides'],
      ['commission', 'a payment that is a percent of sales'],
      ['simple interest', 'interest computed as principal times rate times time'],
    ],
    practice: [
      num('A price rises from 40 to 50. What is the percent increase?', 25, '10 ÷ 40 = 0.25, or 25%.'),
      num('What is the final price of an $80 item after 20% off and 8% tax, in dollars?', 69.12, '80 × 0.8 × 1.08 = 69.12.'),
      num('A map uses 1 inch for 10 miles. How many miles is 3.5 inches?', 35, 'Multiply by the scale factor.'),
    ],
    review: [
      {
        prompt: 'How do you compute a percent increase?',
        answer: 'Divide the amount of increase by the original amount, then write the result as a percent.',
      },
      {
        prompt: 'Why is a 20% discount followed by 20% tax not back to the original price?',
        answer: 'The tax applies to the reduced price, so 20% of a smaller amount is less than the original discount.',
      },
    ],
    exercises: [
      'Track three purchases through discount and tax and compare with the sticker price.',
      'Measure a room and draw it to a scale of 1:50, labeling the real dimensions.',
    ],
  },
  'g7-math-u2-l1': {
    topics: ['reciprocal'],
    objectives: [
      'Solve two-step equations by undoing operations in reverse order.',
      'Compute with rational numbers, including division by a fraction.',
    ],
    sections: [
      {
        heading: 'Undoing two operations',
        paragraphs: [
          'A two-step equation such as 3x − 7 = 14 is solved by undoing the operations in reverse order. Addition and subtraction are undone first, then multiplication or division. Adding 7 to both sides gives 3x = 21, and dividing by 3 gives x = 7. Reversing that order produces a different and incorrect value, which checking by substitution exposes.',
          'When a coefficient is a fraction, multiply both sides by its reciprocal. For −2/3 x = 8, multiply by −3/2 to get x = −12. Dividing by a fraction and multiplying by its reciprocal are the same operation, which is why the rule is consistent rather than a trick to memorize.',
          'Parentheses change the order. In 2(x + 5) = 18, either distribute to get 2x + 10 = 18 or divide both sides by 2 to get x + 5 = 9; both lead to x = 4. Choosing the division first is usually faster, and comparing the two routes is a useful way to check that the algebra is sound.',
        ],
      },
      {
        heading: 'Rational number operations',
        paragraphs: [
          'Rational numbers include fractions, decimals, and integers, and the rules for signs apply to all of them. Adding fractions requires a common denominator, while multiplying fractions does not. Dividing by a fraction is multiplying by its reciprocal, so 3/4 ÷ 2/5 becomes 3/4 × 5/2 = 15/8, or 1 7/8.',
          'Order of operations still governs expressions with rational numbers: grouping, exponents, multiplication and division left to right, then addition and subtraction. In −3 + 4 × (−2), multiply first to get −8, then add to get −11. A common error is to work left to right regardless of operation, which produces a different value.',
          'Decimals and fractions can be converted when a problem mixes them. Writing 0.75 as 3/4 makes an exact computation possible, while converting 1/3 to 0.333 gives only an approximation. Choosing the form that keeps the numbers exact is part of solving efficiently, and estimating first tells you whether the final value is plausible. A negative coefficient also reverses the sign of the solution, so an equation such as −4x = 20 yields x = −5, not 5, and substituting the answer is the fastest way to confirm the sign is right.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Solve 3x − 7 = 14 and −2/3 x = 8.',
        steps: [
          'Add 7 to both sides: 3x = 21.',
          'Divide by 3: x = 7; check 3(7) − 7 = 14.',
          'Multiply by the reciprocal −3/2: x = −12; check −2/3(−12) = 8.',
        ],
        answer: 'x = 7 and x = −12.',
      },
    ],
    terms: [
      ['two-step equation', 'an equation requiring two inverse operations to solve'],
      ['rational number', 'a number expressible as a fraction of integers'],
      ['reciprocal', 'the number you multiply by to get a product of one'],
      ['distribute', 'to multiply a factor across terms inside parentheses'],
      ['coefficient', 'the number multiplying a variable'],
      ['isolate', 'to get a variable alone on one side of an equation'],
    ],
    practice: [
      num('Solve 5x + 4 = 29.', 5, 'Subtract 4, then divide by 5.'),
      num('Solve −2/3 x = 8.', -12, 'Multiply by the reciprocal −3/2.'),
      mc('How do you divide by −2/3?', ['multiply by 2/3', 'multiply by −3/2', 'divide by 3', 'multiply by −2'], 1, 'Multiply by the reciprocal.'),
    ],
    review: [
      {
        prompt: 'Why undo addition before division?',
        answer: 'Because the operations were applied in the other order, so they must be undone in reverse.',
      },
      {
        prompt: 'How do you divide by −2/3?',
        answer: 'Multiply by its reciprocal, −3/2, which is the same operation written differently.',
      },
    ],
    exercises: [
      'Solve five two-step equations with fractions and check each answer.',
      'Write a two-step equation from a real situation and explain each solving step.',
    ],
  },
  'g7-math-u3-l1': {
    topics: ['probability'],
    objectives: [
      'Compute circumference and area of circles and figures that include them.',
      'Find theoretical and experimental probabilities and combine independent events.',
    ],
    sections: [
      {
        heading: 'Circles: circumference and area',
        paragraphs: [
          'A circle’s circumference is the distance around it, and its area is the space inside. Both depend on the radius, the distance from center to edge. The diameter is twice the radius, so C = πd = 2πr and A = πr². Using 3.14 for π is accurate enough for most school problems, though the exact value is irrational and never terminates.',
          'The area formula contains r², which is why doubling the radius quadruples the area. A pizza with twice the diameter of another has four times the area, not twice, which explains why a larger pizza is often a better value per square inch. Comparing prices per square inch is a practical application of the formula.',
          'Composite figures that include circles are handled by adding or subtracting areas. A semicircle on top of a rectangle contributes half of πr², and a circular window cut from a wall is subtracted from the wall’s area. Keeping track of units, square units for area and linear units for circumference, prevents the two measurements from being confused. Probability problems benefit from the same discipline: list the sample space before computing, because an incomplete list silently changes the denominator and produces a probability that cannot be correct. A probability of 0 means the event is impossible, and 1 means it is certain, so any computed value outside that range signals a counting error rather than a surprising result.',
        ],
      },
      {
        heading: 'Probability and independence',
        paragraphs: [
          'Probability measures how likely an event is, on a scale from 0 to 1. The theoretical probability of an event is the number of favorable outcomes divided by the number of equally likely outcomes in the sample space. Rolling a 4 on a fair six-sided die has probability 1/6, because one outcome out of six is favorable.',
          'Experimental probability comes from actually performing trials and dividing the number of successes by the number of trials. It usually approaches the theoretical value as trials increase, which is why a coin flipped ten times may show seven heads while a thousand flips will be close to half. The law of large numbers describes that convergence.',
          'For independent events, multiply probabilities. The chance of two heads in two coin flips is 1/2 × 1/2 = 1/4. Events are independent when one outcome does not change the other’s probability, which is false for drawing cards without replacement. The complement rule, P(not A) = 1 − P(A), is often the fastest route to an answer.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A circle has radius 5 cm. Find its area, then find the probability of rolling a 4 on a fair die.',
        steps: [
          'Use A = πr²: 3.14 × 25 = 78.5 square centimeters.',
          'One favorable outcome out of six gives 1/6 ≈ 0.167.',
        ],
        answer: '78.5 cm² and a probability of about 16.7%.',
      },
    ],
    terms: [
      ['circumference', 'the distance around a circle'],
      ['radius', 'the distance from a circle’s center to its edge'],
      ['diameter', 'the distance across a circle through its center'],
      ['probability', 'a number from 0 to 1 measuring how likely an event is'],
      ['sample space', 'the set of all equally likely outcomes'],
      ['independent events', 'events whose probabilities are unaffected by each other'],
    ],
    practice: [
      num('What is the area of a circle with radius 5, using 3.14 for π?', 78.5, '3.14 × 25 = 78.5.'),
      mc('What is the probability of rolling a 4 on a fair die?', ['1/2', '1/3', '1/6', '4/6'], 2, 'One favorable outcome out of six.'),
      num('A coin is flipped twice. What is the probability of two heads, as a fraction of 4?', 1, '1/4 of the four outcomes.'),
    ],
    review: [
      {
        prompt: 'What is the probability of rolling a 4 on a fair die?',
        answer: 'The probability is 1/6, because one of six equally likely outcomes is favorable.',
      },
      {
        prompt: 'How do you find the probability of two independent events?',
        answer: 'Multiply the probability of each event, since one outcome does not affect the other.',
      },
    ],
    exercises: [
      'Measure three circular objects, compute circumference and area, and compare with a string measurement.',
      'Roll a die fifty times, record results, and compare experimental with theoretical probability.',
    ],
  },
};
