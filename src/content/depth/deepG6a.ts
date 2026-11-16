import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Grade 6, ELA and math: sections, third example, vocabulary, practice, review. */
export const DEPTH_G6A: Record<string, LessonDepth> = {
  'g6-ela-u1-l1': {
    topics: ['internal conflict'],
    objectives: [
      'Classify a story’s conflicts as internal or external and explain the stakes.',
      'Map a plot onto exposition, rising action, climax, and resolution.',
    ],
    sections: [
      {
        heading: 'Four kinds of trouble',
        paragraphs: [
          'Conflict is the opposition that drives a story, and it usually falls into four types. Character against character sets two people at odds. Character against society pits a person against a rule, custom, or institution. Character against nature places a person against weather, landscape, or biology. Character against self is internal, happening inside a mind divided about what to do.',
          'Internal and external conflicts follow different rules. An external conflict can be resolved by an action: the bridge is crossed, the rival is defeated, the storm passes. An internal conflict is resolved by a decision or a change in understanding, which is why a story can end with the character standing still while everything has changed inside.',
          'Most novels layer conflicts rather than using one. A character may fight a rival while also doubting her own courage, and the inner struggle decides how the outer one ends. Naming both layers keeps a summary from flattening the story into a list of events, and it explains why the same plot can feel different to two readers.',
        ],
      },
      {
        heading: 'Plot is a shape, not a list',
        paragraphs: [
          'Plot structure describes how tension rises and falls. Exposition introduces character and setting, the inciting incident disrupts the ordinary world, rising action complicates the problem, the climax is the moment of highest tension and irreversible choice, falling action shows consequences, and the resolution settles the remaining question.',
          'Rising action matters because it makes the climax mean something. A hero who wins a fight in chapter one has nothing at stake; a hero who fails twice and loses a friend before the final attempt has earned the outcome. Each complication should narrow the character’s options, so the climax feels forced rather than chosen at random.',
          'Not every plot runs in a straight line. Flashbacks interrupt chronology to supply motive, and stories that begin in the middle of the action explain the past later. A resolution that ignores the conflict — a sudden rescue by a stranger, for example — feels unearned, which is why readers notice it as a failure of craft rather than a surprise. Subplots work the same way at a smaller scale: a secondary conflict over a friendship or a job echoes the main struggle and comments on it. When a subplot resolves before the main climax, it can prepare the reader for the choice the hero will face, and when it resolves after, it shows what the victory cost. Mapping both the main plot and the subplots is the fastest way to see whether a story’s parts are doing separate work or one job together.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A climber doubts her ability, then attempts a route after a fall, and finally chooses to turn back and help an injured partner. Identify the conflicts and the climax.',
        steps: [
          'Label the internal conflict: doubt about her own competence.',
          'Label the external conflict: the mountain and the injured partner.',
          'Find the irreversible choice: turning back, which resolves the internal conflict by redefining success.',
        ],
        answer: 'Internal doubt plus external danger; the climax is the decision to turn back and help.',
      },
    ],
    terms: [
      ['internal conflict', 'a struggle inside a character’s mind'],
      ['external conflict', 'a struggle against another person, society, or nature'],
      ['inciting incident', 'the event that disrupts the ordinary world and starts the plot'],
      ['rising action', 'the complications that build tension before the climax'],
      ['climax', 'the moment of highest tension and decisive choice'],
      ['resolution', 'the ending that settles the story’s central question'],
    ],
    practice: [
      mc('Which conflict is internal?', ['a fight with a rival', 'a storm at sea', 'a character doubting her courage', 'a law that blocks a family'], 2, 'The struggle is inside the character.'),
      mc('What does the climax of a plot do?', ['introduces the setting', 'resolves every subplot', 'forces an irreversible choice at peak tension', 'explains the theme'], 2, 'The climax is the decisive moment.'),
      num('How many conflict types are described in this lesson?', 4, 'Character against character, society, nature, and self.'),
    ],
    review: [
      {
        prompt: 'How is internal conflict different from external conflict?',
        answer: 'Internal conflict happens inside a character’s mind, while external conflict involves another person, society, or nature.',
      },
      {
        prompt: 'Why does a resolution need to follow from the conflict?',
        answer: 'Because an ending unrelated to the struggle feels unearned, as if the story’s central question were avoided.',
      },
    ],
    exercises: [
      'Chart the plot of a short story on a tension line and label each stage.',
      'Write a scene with an internal conflict that is never stated directly, then explain how you showed it.',
    ],
  },
  'g6-ela-u2-l1': {
    topics: ['bias and omission'],
    objectives: [
      'State a text’s central idea and explain how it develops across paragraphs.',
      'Identify loaded language, omission, and framing as signs of bias.',
    ],
    sections: [
      {
        heading: 'Central idea and how it develops',
        paragraphs: [
          'A central idea is the main point a text develops about its topic, stated as a full sentence rather than a word. A text about school start times might have the central idea “Later start times improve attendance because they align with adolescent sleep cycles.” The topic is school start times; the central idea is the claim the writer makes about them.',
          'Central ideas develop. A writer introduces the point, supports it with evidence, addresses complications, and refines it. Tracking that development means noticing where the idea is introduced, which paragraphs extend it, and whether the conclusion narrows or broadens it. A summary that keeps only the first paragraph usually misses the refinement the writer worked toward.',
        ],
      },
      {
        heading: 'Purpose, point of view, and bias',
        paragraphs: [
          'Authors write to inform, explain, persuade, or entertain, and the purpose shapes every choice. A persuasive op-ed selects vivid examples, while an encyclopedia entry strives for neutral wording. Point of view matters too: an industry report on pollution and a residents’ group’s account may describe the same facts from positions that make different details seem important.',
          'Bias appears in what is included and what is left out. Loaded words such as reckless or scheme carry judgment; omission hides evidence that would complicate the claim; framing presents one interpretation as the only reasonable one. A text can be biased without being false, which is why readers check what a source does not mention and compare it with a second source before trusting a claim. Perspective and bias are not identical. Every writer has a vantage point shaped by experience, but bias becomes a problem when a text hides evidence, distorts proportion, or treats an interpretation as settled fact. A labor union’s report and a company’s report may both be accurate about wages and still emphasize different numbers, which is why a careful reader asks what each side measured, over what period, and for what audience. Corroborating two sources does not mean splitting the difference; it means finding where independent evidence agrees. Statistics deserve the same scrutiny. A percentage without a sample size is unreadable, a survey paid for by an interested party deserves a second look, and a graph with a truncated axis can make a small change look enormous. Asking who collected the data, how many cases it covers, and what comparison it uses turns a confident number into an assessable claim.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A notice says: “The council’s reckless plan will destroy our neighborhood, according to residents who attended one meeting.” Identify two signs of bias and a missing question.',
        steps: [
          'Notice the loaded word reckless, which judges rather than reports.',
          'Notice the thin evidence: one meeting and unnamed residents.',
          'Ask what the council’s own cost or traffic study says, since it is omitted.',
        ],
        answer: 'Loaded language and thin, one-sided evidence; the omitted council study is the missing question.',
      },
    ],
    terms: [
      ['central idea', 'the main point a text develops about its topic'],
      ['author’s purpose', 'the reason a text was written, such as to inform or persuade'],
      ['bias', 'a slant that favors one interpretation through selection and wording'],
      ['omission', 'leaving out information that would change a reader’s judgment'],
      ['framing', 'presenting facts in a way that suggests one interpretation'],
      ['corroborate', 'to support a claim with an independent source'],
    ],
    practice: [
      mc('Which is a central idea rather than a topic?', ['school start times', 'sleep', 'Later start times improve attendance because teen sleep cycles shift.', 'adolescents'], 2, 'A central idea is a full claim.'),
      mc('Omitting evidence that complicates a claim is a sign of', ['neutrality', 'bias', 'citation', 'summary'], 1, 'Selection shapes the reader’s judgment.'),
      num('How many author purposes are named in this lesson?', 4, 'Inform, explain, persuade, and entertain.'),
    ],
    review: [
      {
        prompt: 'Name three common author purposes.',
        answer: 'Authors commonly write to inform, to explain, to persuade, or to entertain, and the purpose shapes their choices.',
      },
      {
        prompt: 'How can omission reveal bias?',
        answer: 'Leaving out evidence that would complicate the claim steers readers toward one conclusion without stating anything false.',
      },
    ],
    exercises: [
      'Summarize a news article’s central idea in one sentence and list two details that develop it.',
      'Compare two accounts of the same event and list what each one omits.',
    ],
  },
  'g6-ela-u3-l1': {
    topics: ['counterclaim and rebuttal'],
    objectives: [
      'Write a thesis with reasons and connect evidence to the claim with a warrant.',
      'Place a counterclaim and rebuttal where they strengthen rather than weaken the argument.',
    ],
    sections: [
      {
        heading: 'Structure: claim, reasons, evidence, warrants',
        paragraphs: [
          'An argumentative essay begins with a thesis that states a position and previews the reasons. Each body paragraph develops one reason with evidence and then explains the connection, which is the warrant. Without a warrant, a statistic sits next to a claim without showing why it proves anything, and the reader has to do the writer’s thinking.',
          'Organization follows the logic of the argument. Order reasons from strongest to weakest or from simplest to most complex, and use transitions that signal the relationship between ideas: furthermore adds, however concedes, therefore concludes. Each paragraph should be able to state its own reason in one sentence, which is a quick test for whether a paragraph is doing one job or three.',
        ],
      },
      {
        heading: 'Counterclaim, rebuttal, and revision',
        paragraphs: [
          'A counterclaim states the strongest objection, and a rebuttal answers it. Place the counterclaim after your main evidence, where it shows you have considered alternatives, and answer it with evidence rather than dismissal. Conceding a limited point — “opponents are right that cost matters” — often makes the rest of the argument more credible.',
          'Revision is where arguments improve. Read the draft asking whether each piece of evidence is relevant, sufficient, and accurately described, and whether any claim is doing more work than the evidence supports. Replace anecdote with data where possible, define vague terms, and cite sources so a reader can check. Strong essays sound confident because their evidence is specific, not because their adjectives are loud. A useful revision pass reads only the topic sentences in order, which should form a logical outline; if they do not, the argument has a gap rather than a wording problem. A second pass reads only the evidence, asking of each item whether a skeptical reader would accept it and whether it is doing more than decorating a claim already assumed. Finally, read the counterclaim aloud and check that your rebuttal answers the objection the opponent actually made rather than a weaker version you invented for convenience. Audience shapes tone as much as evidence does. An essay for classmates can assume shared context and use direct language, while a letter to a school board needs formal address, a clear request, and evidence a board member can verify. Naming the audience before drafting prevents the common mismatch of casual phrasing in a formal document. Citations should follow one consistent format and include enough detail, such as author, title, and date, that a reader could find the source without help.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Write a thesis, a counterclaim, and a rebuttal for the claim that the school should add a second lunch period.',
        steps: [
          'State the position with two reasons: crowding and time to eat.',
          'Name the strongest objection: scheduling and staffing cost.',
          'Answer with evidence: staggered schedules used by similar schools at modest cost.',
        ],
        answer: 'Thesis: a second lunch would reduce crowding and give students time to eat. Counterclaim: cost. Rebuttal: staggered schedules elsewhere show it is affordable.',
      },
    ],
    terms: [
      ['thesis', 'the sentence that states an essay’s position and previews its reasons'],
      ['warrant', 'the explanation of how evidence supports a claim'],
      ['counterclaim', 'the strongest objection to an argument'],
      ['rebuttal', 'the response that answers a counterclaim'],
      ['concession', 'admitting a limited point in an opponent’s favor'],
      ['citation', 'a reference that lets a reader locate a source'],
    ],
    practice: [
      mc('What does a warrant do?', ['cites the source', 'explains how evidence supports the claim', 'states the counterclaim', 'introduces the topic'], 1, 'The warrant connects evidence to claim.'),
      mc('Where does a counterclaim usually appear?', ['before the thesis', 'after the main evidence', 'in the title', 'in the works cited'], 1, 'It follows your evidence and precedes the rebuttal.'),
      num('How many parts does a body paragraph have in this lesson?', 4, 'Reason, evidence, warrant, and transition.'),
    ],
    review: [
      {
        prompt: 'Where should a counterclaim appear?',
        answer: 'After your main evidence, where acknowledging the strongest objection makes your argument more credible.',
      },
      {
        prompt: 'What makes evidence strong in an essay?',
        answer: 'It is relevant to the claim, sufficient in amount, accurate, and connected to the claim by a clear warrant.',
      },
    ],
    exercises: [
      'Draft a five-paragraph argumentative essay with a counterclaim and rebuttal, then annotate each warrant.',
      'Take an editorial and mark its thesis, reasons, evidence, warrants, and any missing counterclaim.',
    ],
  },
  'g6-math-u1-l1': {
    topics: ['unit rate'],
    objectives: [
      'Compute a unit rate and use it to compare two offers.',
      'Solve a proportion by cross products and check the result in context.',
    ],
    sections: [
      {
        heading: 'Rates, unit rates, and comparison',
        paragraphs: [
          'A ratio compares two quantities, and a rate is a ratio that compares different units, such as miles to hours or dollars to pounds. A unit rate expresses the comparison per one unit: 150 miles in 3 hours is 50 miles per hour. Unit rates make comparison easy because both quantities are described in the same terms.',
          'To find a unit rate, divide the first quantity by the second. A 3-pound bag costing $7.50 has a unit price of $2.50 per pound, while a 5-pound bag at $11.00 costs $2.20 per pound, so the larger bag is the better buy. Unit rates also expose misleading offers, because a “family size” package is not always cheaper per ounce.',
        ],
      },
      {
        heading: 'Proportions and cross products',
        paragraphs: [
          'A proportion states that two ratios are equal, such as 4/6 = x/15. Cross products multiply the numerator of one ratio by the denominator of the other, giving 4 × 15 = 6x, so x = 10. The method works because multiplying both sides by the same denominators clears them, which is the same reasoning used to solve any equation.',
          'Set up proportions by matching units carefully. If 3 pencils cost $1.20, then 8 pencils cost x, and the ratio of pencils to dollars must be written the same way on both sides. Labeling each quantity before solving prevents the common error of comparing pencils to dollars on one side and dollars to pencils on the other, which produces an answer that is wrong by a factor of the rate. Proportional reasoning also supports scale drawings and recipes: if a map uses one inch for ten miles, then three and a half inches represent thirty-five miles, and a recipe for six servings can be doubled by multiplying every quantity by two. A proportion is only valid when the relationship is truly proportional, meaning both quantities change by the same factor. Comparing a child’s age to height is not proportional, because growth slows, so setting up a proportion there would produce a confident but meaningless number. Percents are proportions with a denominator of one hundred. To find a 15% tip on a $42 bill, write 15/100 = x/42, cross multiply, and get $6.30. To find what percent 18 is of 24, solve 18/24 = x/100, which gives 75%. Treating the percent as a rate per hundred keeps every percent problem inside the same method instead of requiring a separate rule for each variation.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A car travels 150 miles in 3 hours. Find the unit rate, then predict the distance in 7 hours at the same speed.',
        steps: [
          'Divide distance by time: 150 ÷ 3 = 50 miles per hour.',
          'Multiply the unit rate by 7 hours: 50 × 7 = 350 miles.',
        ],
        answer: '50 miles per hour, so about 350 miles in 7 hours.',
      },
    ],
    terms: [
      ['ratio', 'a comparison of two quantities by division'],
      ['rate', 'a ratio that compares quantities with different units'],
      ['unit rate', 'a rate expressed per one unit of the second quantity'],
      ['proportion', 'an equation stating that two ratios are equal'],
      ['cross products', 'multiplying across the equal ratios to solve a proportion'],
      ['scale factor', 'the number by which one ratio is multiplied to reach the other'],
    ],
    practice: [
      num('What is the unit price of a 3-pound bag costing $7.50, in dollars per pound?', 2.5, '7.50 ÷ 3 = 2.50.'),
      num('Solve 4/6 = x/15.', 10, '4 × 15 = 60, and 60 ÷ 6 = 10.'),
      mc('Which bag is the better buy?', ['3 lb for $7.50', '5 lb for $11.00', 'they are equal', 'cannot tell'], 1, 'It costs $2.20 per pound versus $2.50.'),
    ],
    review: [
      {
        prompt: 'How do you solve a proportion?',
        answer: 'Set the two ratios equal, cross multiply, and divide to isolate the unknown value.',
      },
      {
        prompt: 'Why are unit rates useful for comparison?',
        answer: 'They express both quantities per single unit, so offers with different package sizes can be compared directly.',
      },
    ],
    exercises: [
      'Find the unit price of five products at a store and rank them by cost per ounce.',
      'Write and solve three proportions from recipes, then check each answer by scaling.',
    ],
  },
  'g6-math-u2-l1': {
    topics: ['absolute value'],
    objectives: [
      'Order integers and interpret absolute value as distance from zero.',
      'Add, subtract, multiply, and divide integers and justify the sign of the result.',
    ],
    sections: [
      {
        heading: 'Signed numbers on a number line',
        paragraphs: [
          'Integers include positive numbers, negative numbers, and zero. On a number line, negatives sit left of zero and positives to the right, so −7 is less than −2 even though 7 is greater than 2. Opposites are the same distance from zero on opposite sides, and zero is its own opposite.',
          'Absolute value measures distance from zero and is always nonnegative, written with bars: |−7| = 7. That is why elevation and temperature problems use it: a mine 40 meters below sea level and a hill 40 meters above have the same absolute elevation change from sea level but different elevations. Reading the bars as “distance” prevents sign errors.',
        ],
      },
      {
        heading: 'Operations with integers',
        paragraphs: [
          'Adding integers with the same sign combines their distances and keeps the sign: −8 + −5 = −13. With different signs, subtract the smaller distance from the larger and keep the sign of the larger: −8 + 5 = −3. Subtracting an integer is the same as adding its opposite, so 4 − (−3) becomes 4 + 3 = 7.',
          'Multiplication and division follow a sign rule: two negatives give a positive, and one negative gives a negative. So (−4)(−6) = 24 while (−4)(6) = −24, and −18 ÷ 3 = −6. The rule follows from repeated addition, and it keeps arithmetic consistent: multiplying by a negative reverses direction on the number line. A pattern table makes the rule convincing rather than mysterious. Reading 3 × (−2), 2 × (−2), 1 × (−2), 0 × (−2) gives −6, −4, −2, 0, decreasing by two each time, so the next term must be −2 and the one after that −4, which is (−1) × (−2) and (−2) × (−2). The pattern continues only if a negative times a negative is positive. Integer arithmetic also appears in finance, where a −$40 balance plus a $25 deposit leaves −$15, and in temperature changes that cross zero. Absolute value also measures distance between any two numbers on the line, since the distance from a to b is |a − b|. The distance between −3 and 5 is |−3 − 5| = 8, which matches counting the units in between. That interpretation explains why |a − b| equals |b − a|, and it prepares the way for coordinate geometry, where distance along a horizontal or vertical line is found by subtracting coordinates.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Compute −8 + 5, 3 − (−7), and (−4)(−6), explaining each sign.',
        steps: [
          'For −8 + 5, subtract distances and keep the larger sign: −3.',
          'Subtracting −7 means adding 7, so 3 + 7 = 10.',
          'Two negatives multiply to a positive: 24.',
        ],
        answer: '−3, 10, and 24.',
      },
    ],
    terms: [
      ['integer', 'a whole number that may be positive, negative, or zero'],
      ['opposite', 'a number the same distance from zero on the other side'],
      ['absolute value', 'a number’s distance from zero, always nonnegative'],
      ['negative', 'a number less than zero'],
      ['positive', 'a number greater than zero'],
      ['product', 'the result of multiplication'],
    ],
    practice: [
      num('What is −8 + 5?', -3, 'Different signs: subtract and keep the negative sign.'),
      mc('What is |−9|?', ['−9', '9', '0', '−1'], 1, 'Distance from zero is nine.'),
      num('What is (−4)(−6)?', 24, 'Two negatives give a positive product.'),
    ],
    review: [
      {
        prompt: 'Why is −8 + 5 equal to −3?',
        answer: 'The distances are 8 and 5, and subtracting gives 3, with the sign of the larger distance, which is negative.',
      },
      {
        prompt: 'How do you multiply two negative numbers?',
        answer: 'The product is positive, because two negatives give a positive under the sign rule for multiplication.',
      },
    ],
    exercises: [
      'Record temperatures for a week, including negatives, and find the range.',
      'Write five integer expressions with mixed operations and evaluate each step by step.',
    ],
  },
  'g6-math-u3-l1': {
    topics: ['inverse operations'],
    objectives: [
      'Solve one-step equations using inverse operations and check the solution.',
      'Find the area of triangles, parallelograms, and composite figures.',
    ],
    sections: [
      {
        heading: 'Undoing an operation',
        paragraphs: [
          'An equation states that two expressions are equal, and solving means finding the value of the variable that keeps the statement true. The balance model explains the rule: whatever you do to one side you must do to the other, or the balance tips. To undo addition, subtract; to undo multiplication, divide.',
          'For x + 7 = 19, subtract 7 from both sides to get x = 12. For 3x = 42, divide both sides by 3 to get x = 14. Always check by substituting: 3(14) = 42 confirms the solution. A solution that fails the check is not a small mistake to ignore; it means the reasoning was wrong somewhere.',
        ],
      },
      {
        heading: 'Area of triangles and parallelograms',
        paragraphs: [
          'The area of a parallelogram is base times height, A = bh, because it can be cut and rearranged into a rectangle. A triangle is half of a parallelogram with the same base and height, so its area is A = ½bh. The height must be perpendicular to the base, not the slanted side, which is a common source of wrong answers.',
          'Composite figures are handled by decomposing them into rectangles, triangles, and parallelograms, finding each area, and adding. Subtracting a cut-out region works too. Labeling every dimension with its unit and writing the answer in square units keeps area distinct from perimeter, which measures distance around rather than surface covered. The formulas are easy to mix up, so it helps to know where each comes from. A rectangle’s area counts rows of unit squares; a parallelogram can be cut at one end and moved to the other to form that rectangle, which is why its area is base times height. A triangle is exactly half of the parallelogram formed by two copies, so its area is half the product. Keeping the perpendicular height distinct from a slanted side, and writing square units in every answer, prevents most errors on area problems. Equations with fractions follow the same balance rule. For x/4 = 9, multiply both sides by 4 to get x = 36, and for 2x/3 = 8, multiply by 3 and divide by 2 to get x = 12. Checking by substitution is especially important with fractions, because a small arithmetic slip can produce a value that looks reasonable. Writing the inverse operation beside each step also makes it possible to find the error later instead of starting over.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Solve x + 7 = 19 and 3x = 42, then find the area of a triangle with base 10 cm and height 6 cm.',
        steps: [
          'Subtract 7 from both sides: x = 12; check 12 + 7 = 19.',
          'Divide both sides by 3: x = 14; check 3(14) = 42.',
          'Use A = ½bh: ½ × 10 × 6 = 30 square centimeters.',
        ],
        answer: 'x = 12, x = 14, and an area of 30 cm².',
      },
    ],
    terms: [
      ['equation', 'a statement that two expressions are equal'],
      ['solution', 'the value of the variable that makes an equation true'],
      ['inverse operation', 'an operation that undoes another, such as division undoing multiplication'],
      ['variable', 'a letter representing an unknown or changing value'],
      ['area', 'the number of square units covering a surface'],
      ['parallelogram', 'a quadrilateral with opposite sides parallel and equal'],
    ],
    practice: [
      num('Solve x + 7 = 19.', 12, 'Subtract 7 from both sides.'),
      num('Solve 3x = 42.', 14, 'Divide both sides by 3.'),
      num('Find the area of a triangle with base 10 and height 6.', 30, '½ × 10 × 6 = 30 square units.'),
    ],
    review: [
      {
        prompt: 'Why must you do the same thing to both sides of an equation?',
        answer: 'Because an equation is a balance, and changing only one side would make the two sides unequal.',
      },
      {
        prompt: 'How do you check a solution?',
        answer: 'Substitute the value into the original equation and confirm that both sides are equal.',
      },
    ],
    exercises: [
      'Write and solve five one-step equations from shopping or sports situations.',
      'Draw a composite figure, decompose it, and compute its area two different ways.',
    ],
  },
};
