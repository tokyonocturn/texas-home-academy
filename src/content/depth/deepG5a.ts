import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Grade 5, ELA and math: sections, third example, vocabulary, practice, review. */
export const DEPTH_G5A: Record<string, LessonDepth> = {
  'g5-ela-u1-l1': {
    topics: ['motivation'],
    objectives: [
      'Track how a character changes by comparing choices at the start and end of a text.',
      'Write a thematic claim and defend it with evidence from more than one scene.',
    ],
    sections: [
      {
        heading: 'Character change is evidence',
        paragraphs: [
          'A dynamic character changes in an important way during a story, while a static character stays essentially the same. Change is shown through choices under pressure rather than through the narrator’s summary. If a character refuses to share in chapter one and quietly divides her lunch in chapter eight, the contrast is evidence, and the middle of the story explains what caused it.',
          'Motivation is what a character wants and why, and it explains most choices. Readers infer motivation from what a character says, what she avoids, and what she sacrifices. Naming a trait without evidence — calling someone kind because the story feels warm — is guessing; strong readers point to the moment that shows it. Quoting that moment gives your reader something to check, and a character’s motivation often presses against an obligation, which is where the story’s hardest choices come from.',
        ],
      },
      {
        heading: 'Making a thematic claim',
        paragraphs: [
          'A thematic claim states what a text suggests about people or life, in a sentence that could be argued. “Generosity can be learned” is a claim; “generosity” is only a topic. The claim must be broad enough to cover the whole story but specific enough that a different story might support a different idea.',
          'To test a thematic claim, look for counterevidence. If a scene contradicts your claim, either narrow the claim or choose a better one. Themes are not morals pinned to the end of a fable; they emerge from patterns across the text, including how the story resolves and what it refuses to resolve. A claim that fits only the last paragraph is too narrow, while a claim that could describe any story is too broad, so the right claim covers the pattern without turning into a slogan.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A character hides his artwork, then posts it publicly at the end. Write a thematic claim and the evidence you would cite.',
        steps: [
          'Identify the change: from hiding work out of fear to sharing it despite fear.',
          'State a claim the change supports, then name two scenes as evidence.',
        ],
        answer: 'Claim: courage is acting despite fear, not the absence of it. Evidence: the hidden drawings and the public posting.',
      },
    ],
    terms: [
      ['character development', 'the way a character changes over the course of a text'],
      ['motivation', 'what a character wants and why'],
      ['dynamic character', 'a character who changes significantly'],
      ['static character', 'a character who stays essentially the same'],
      ['thematic claim', 'a sentence stating what a text suggests about life'],
      ['textual evidence', 'a quotation or detail from the text that supports a claim'],
    ],
    practice: [
      mc('What best shows character development?', ['the narrator describes her', 'her choices change under pressure', 'the setting changes', 'the book is long'], 1, 'Change appears in choices and actions.'),
      mc('Which is a thematic claim?', ['courage', 'fear of failure', 'Courage grows when someone acts despite fear.', 'a young artist'], 2, 'A claim is a full, arguable sentence.'),
      num('How many scenes should support a thematic claim at minimum?', 2, 'At least two moments from different parts of the text.'),
    ],
    review: [
      {
        prompt: 'What evidence proves character development?',
        answer: 'A contrast between a character’s choices early and late in the story, with the events that caused the change.',
      },
      {
        prompt: 'Why is a one-word topic not a theme?',
        answer: 'A topic names a subject, while a theme makes an arguable claim about that subject that evidence can support.',
      },
    ],
    exercises: [
      'Track one character’s choices at the beginning, middle, and end of a novel and explain the change.',
      'Write two competing thematic claims for the same story and argue which the text supports better.',
    ],
  },
  'g5-ela-u2-l1': {
    topics: ['evidence'],
    objectives: [
      'Distinguish a claim, a reason, and evidence in a short argument.',
      'Identify weak reasoning such as hasty generalization and false cause.',
    ],
    sections: [
      {
        heading: 'Claim, reason, evidence',
        paragraphs: [
          'A claim states what the writer wants you to accept. A reason explains why the claim should be accepted, and evidence is the fact, example, or data that supports the reason. “Our town needs more sidewalks” is a claim; “sidewalks make walking safer” is a reason; a count of pedestrian injuries on streets without sidewalks is evidence.',
          'Evidence must be relevant, sufficient, and accurate to count. Relevant means it bears on the claim; sufficient means there is enough of it to support a general conclusion; accurate means it can be checked. A single story about one walker is relevant but rarely sufficient for a claim about a whole town. Ask how many cases the evidence covers and whether the sample was chosen fairly, because a survey of one street cannot describe a city. Reading an argument slowly, sentence by sentence, exposes gaps that a quick skim hides. A useful habit is to underline every claim and circle every piece of evidence, then check whether the two line up.',
        ],
      },
      {
        heading: 'Spotting weak reasoning',
        paragraphs: [
          'Some arguments fail because of their pattern rather than their facts. A hasty generalization draws a broad conclusion from a small sample, as when one bad meal proves a restaurant is terrible. False cause assumes that because two things happened together, one caused the other, which is why ice cream sales and drowning rates rise together in summer without causing each other.',
          'Other patterns include circular reasoning, which assumes the conclusion, and either-or thinking, which pretends there are only two options. A useful question is what evidence would change the writer’s mind; an argument that cannot be tested is often an opinion in disguise, however confidently it is stated. Notice also who benefits from a claim being believed, since purpose shapes what evidence gets included and what gets left out.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Evaluate: “School should start later. My cousin says she is tired, so later starts would raise grades everywhere.”',
        steps: [
          'The claim is stated, but the evidence is one person’s report.',
          'The conclusion about grades everywhere is a hasty generalization.',
        ],
        answer: 'The claim may be reasonable, but the evidence is too thin and the conclusion too broad.',
      },
    ],
    terms: [
      ['claim', 'the statement a writer wants you to accept'],
      ['reason', 'an explanation of why a claim should be accepted'],
      ['evidence', 'facts, examples, or data that support a reason'],
      ['relevance', 'how closely evidence connects to the claim'],
      ['hasty generalization', 'a broad conclusion drawn from too little evidence'],
      ['false cause', 'assuming one event caused another because they occurred together'],
    ],
    practice: [
      mc('Which is evidence rather than a reason?', ['sidewalks make walking safer', 'our town needs sidewalks', 'injury counts on streets without sidewalks', 'walking is healthy'], 2, 'A count is data that can be checked.'),
      mc('“One bad meal proves the restaurant is terrible” is', ['strong evidence', 'a hasty generalization', 'a citation', 'a counterargument'], 1, 'One case cannot support a broad claim.'),
      num('How many tests must evidence pass in this lesson?', 3, 'Relevant, sufficient, and accurate.'),
    ],
    review: [
      {
        prompt: 'What is the difference between a reason and evidence?',
        answer: 'A reason explains why a claim should be accepted, while evidence is the checkable fact or data that supports the reason.',
      },
      {
        prompt: 'Why can a true fact still be bad evidence?',
        answer: 'It may be irrelevant to the claim or too small a sample to support a general conclusion.',
      },
    ],
    exercises: [
      'Find an advertisement, identify its claim and evidence, and judge whether the evidence is sufficient.',
      'Write a short argument with a claim, two reasons, and one piece of checkable evidence.',
    ],
  },
  'g5-ela-u3-l1': {
    topics: ['primary source'],
    objectives: [
      'Turn a broad interest into a narrow, researchable question.',
      'Judge a source’s credibility and cite it so a reader can verify the claim.',
    ],
    sections: [
      {
        heading: 'From curiosity to a researchable question',
        paragraphs: [
          'A research question is narrow enough to answer in the space you have and specific enough that sources can address it. “Dogs” is a topic, not a question. “How did the introduction of dogs change hunting among Plains peoples?” can be researched, while “Are dogs good?” is too vague and invites opinion rather than evidence.',
          'Good questions often begin with how or why, because those words ask for explanation rather than a yes or no. Once the question is set, choose keywords that sources would actually use, and be ready to narrow or widen the question as you learn. Research is a loop: reading changes the question, and the question directs the next reading. Keep a running list of what you already know and what you still need to find, so searching stays purposeful rather than random. Two or three well-chosen sources usually serve a short project better than ten skimmed ones.',
        ],
      },
      {
        heading: 'Sources, citation, and speaking',
        paragraphs: [
          'A primary source comes from the time or person studied, such as a letter, photograph, or law. A secondary source interprets primary material, such as a textbook or documentary. Credibility depends on who wrote it, when, for what purpose, and whether it cites evidence. A anonymous page with no date is weaker than a government report with sources.',
          'A citation names the source so a reader can find and check it. Copying words or ideas without citation is plagiarism, even when you change a few words. A short presentation works best with a clear claim, two or three pieces of evidence, one visual that supports rather than decorates, and a conclusion that answers the research question. Rehearse the talk aloud, because sentences that read well on paper often need shortening when spoken.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Narrow “volcanoes” into a research question and name the kind of source you would start with.',
        steps: [
          'Add a place, time, or effect to make the topic specific.',
          'Choose a source type that matches the question.',
        ],
        answer: '“How do volcanoes change soil fertility in Hawaii?” Start with a USGS report or a geology textbook.',
      },
    ],
    terms: [
      ['research question', 'a narrow question that sources can answer with evidence'],
      ['primary source', 'material created by someone who experienced the events'],
      ['secondary source', 'a work that interprets primary sources'],
      ['citation', 'a reference that lets a reader locate a source'],
      ['plagiarism', 'using someone’s words or ideas without credit'],
      ['credible', 'trustworthy because of authorship, evidence, and accuracy'],
    ],
    practice: [
      mc('Which is a researchable question?', ['Are dogs good?', 'Dogs', 'How did dogs change hunting on the Plains?', 'I like dogs.'], 2, 'It is narrow and answerable with evidence.'),
      mc('A letter written by a soldier in 1864 is a', ['secondary source', 'primary source', 'citation', 'summary'], 1, 'It comes from the time studied.'),
      num('How many credibility checks are named here?', 4, 'Author, date, purpose, and evidence.'),
    ],
    review: [
      {
        prompt: 'What makes a source credible?',
        answer: 'A credible source has an identifiable author, a date, a clear purpose, and evidence that can be checked.',
      },
      {
        prompt: 'Why cite a source instead of just stating a fact?',
        answer: 'A citation lets a reader verify the claim and see where the information came from.',
      },
    ],
    exercises: [
      'Turn three broad topics into research questions and list keywords for each.',
      'Give a two-minute presentation with a claim, two citations, and one supporting visual.',
    ],
  },
  'g5-math-u1-l1': {
    topics: ['place value'],
    objectives: [
      'Read, write, and compare decimals through the thousandths place.',
      'Add, subtract, and multiply decimals and explain where the decimal point goes.',
    ],
    sections: [
      {
        heading: 'Place value to the right of the point',
        paragraphs: [
          'Each place to the right of the decimal point is ten times smaller than the one before it. In 3.45, the 4 is four tenths and the 5 is five hundredths, so the number is 3 + 0.4 + 0.05. A thousandth is one tenth of a hundredth, which is why 0.005 is smaller than 0.05 even though 5 looks larger than 5.',
          'Comparing decimals means comparing place by place from left to right. 0.7 is seven tenths, while 0.65 is six tenths and five hundredths, so 0.7 is larger. Writing both with the same number of places, as 0.70 and 0.65, makes the comparison obvious and prevents the common error of counting digits instead of comparing value.',
        ],
      },
      {
        heading: 'Computing with decimals',
        paragraphs: [
          'To add or subtract decimals, line up the decimal points so like places combine. Annexing zeros, as in writing 1.7 as 1.70, fills empty places without changing the value. For multiplication, multiply as if the numbers were whole, then count the total decimal places in both factors and place the point that many places from the right: 0.6 × 0.4 has two decimal places, so the product is 0.24.',
          'Multiplying or dividing by a power of ten shifts the decimal point rather than changing the digits. Multiplying by 10 moves the point one place right; dividing by 100 moves it two places left. In money, decimals record cents, so 3.45 dollars means three dollars and forty-five cents, and prices are added the same way as any other decimal. Keeping a running total and comparing it with an estimate catches a misplaced decimal point before it becomes an expensive error.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Compute 3.45 + 1.7 and 0.6 × 0.4, explaining the decimal point in each.',
        steps: [
          'Line up the points: 3.45 + 1.70 = 5.15.',
          'For the product, 6 × 4 = 24; there are two decimal places total, so 0.24.',
        ],
        answer: '5.15 and 0.24, with the point placed by place value rather than by guessing.',
      },
    ],
    terms: [
      ['tenths', 'the first place to the right of the decimal point'],
      ['hundredths', 'the second place to the right of the decimal point'],
      ['decimal point', 'the mark that separates whole numbers from parts of a whole'],
      ['annex', 'to add a zero at the end of a decimal without changing its value'],
      ['product', 'the result of multiplication'],
      ['place value', 'the value a digit has because of its position'],
    ],
    practice: [
      num('What is 3.45 + 1.7?', 5.15, 'Line up the decimal points and add.'),
      mc('Which is larger, 0.7 or 0.65?', ['0.7', '0.65', 'equal', 'cannot tell'], 0, '0.70 is greater than 0.65.'),
      num('What is 0.6 × 0.4?', 0.24, 'Six tenths of four tenths is twenty-four hundredths.'),
    ],
    review: [
      {
        prompt: 'Why line up decimal points when adding?',
        answer: 'So that digits in the same place value combine, keeping tenths with tenths and hundredths with hundredths.',
      },
      {
        prompt: 'Which is larger, 0.7 or 0.65?',
        answer: '0.7 is larger, because it equals 0.70, which is greater than 0.65.',
      },
    ],
    exercises: [
      'Add five pairs of prices and check each by rounding to the nearest dollar.',
      'Measure three objects in meters and write each measurement to the thousandths place.',
    ],
  },
  'g5-math-u2-l1': {
    topics: ['multiplying fractions'],
    objectives: [
      'Multiply fractions and mixed numbers and simplify the result.',
      'Evaluate expressions using the order of operations.',
    ],
    sections: [
      {
        heading: 'Multiplying fractions means parts of parts',
        paragraphs: [
          'Multiplying a fraction by a fraction finds a part of a part. Two-thirds of three-quarters is 2/3 × 3/4: you take three quarters and keep two of every three of those pieces, which is 6/12, or 1/2. The rule is to multiply numerators and multiply denominators, then simplify, but the model explains why the product is smaller than either factor. Canceling common factors before multiplying keeps the arithmetic small and the answer already simplified.',
          'Simplifying before multiplying keeps numbers small. In 4/9 × 3/8, the 4 and 8 share a factor of 4 and the 3 and 9 share a factor of 3, so the product reduces to 1/6. Multiplying by a fraction less than one makes a number smaller, which is why “multiplication always makes bigger” is false once fractions appear.',
        ],
      },
      {
        heading: 'Order of operations',
        paragraphs: [
          'An expression with several operations is evaluated in a fixed order: parentheses first, then exponents, then multiplication and division from left to right, then addition and subtraction from left to right. Without that agreement, 8 + 2 × 5 could mean 50 or 18, and only 18 follows the convention. Mathematicians agreed on this order so that everyone reading the same expression gets the same value, much as drivers agree to keep to one side of the road.',
          'Grouping symbols such as brackets work like parentheses and are evaluated from the inside out. Writing each step on its own line prevents careless errors, and estimating the result first tells you whether the final answer is reasonable. Order of operations is a shared convention, not a mathematical law, but it makes expressions mean one thing to everyone. When in doubt, rewrite the expression with explicit grouping symbols rather than trusting memory.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Evaluate 8 + 2 × 5 and (8 + 2) × 5, and compute 2/3 × 3/4.',
        steps: [
          'Multiplication before addition: 2 × 5 = 10, so 8 + 10 = 18.',
          'Parentheses first: 10 × 5 = 50.',
          'Multiply fractions: 6/12, which simplifies to 1/2.',
        ],
        answer: '18, 50, and 1/2; the grouping symbols change the first two results.',
      },
    ],
    terms: [
      ['numerator', 'the top number of a fraction'],
      ['denominator', 'the bottom number of a fraction'],
      ['simplify', 'to write a fraction with the smallest possible numbers'],
      ['parentheses', 'grouping symbols that tell you what to compute first'],
      ['order of operations', 'the agreed sequence for evaluating expressions'],
      ['expression', 'a combination of numbers and operations without an equals sign'],
    ],
    practice: [
      num('What is 2/3 × 3/4 in simplest form?', 1, 'The product is 6/12, which simplifies to 1/2; enter the simplified numerator over 2.'),
      mc('Evaluate 8 + 2 × 5.', ['50', '18', '40', '13'], 1, 'Multiply before adding.'),
      num('What is 1/2 of 12?', 6, 'Half of twelve is six.'),
    ],
    review: [
      {
        prompt: 'Evaluate 8 + 2 × 5.',
        answer: 'Multiplication comes first, so 2 × 5 = 10 and 8 + 10 = 18.',
      },
      {
        prompt: 'Why does multiplying by a fraction smaller than 1 make a number smaller?',
        answer: 'You are taking only part of the number, as when half of twelve is six. Speakers who explain why a source is trustworthy inspire more confidence than speakers who simply assert facts.',
      },
    ],
    exercises: [
      'Draw an area model for 2/3 × 3/4 and label the overlapping region.',
      'Write five expressions that use grouping symbols and evaluate each step by step.',
    ],
  },
  'g5-math-u3-l1': {
    topics: ['volume'],
    objectives: [
      'Find the volume of a rectangular prism using unit cubes and a formula.',
      'Plot and read ordered pairs in the first quadrant of the coordinate plane.',
    ],
    sections: [
      {
        heading: 'Volume counts cubic units',
        paragraphs: [
          'Volume is the amount of space a solid fills, measured in cubic units. A rectangular prism 4 units long, 3 wide, and 2 high holds 4 × 3 = 12 cubes in each layer and 2 layers, so the volume is 24 cubic units. The formula length × width × height records that reasoning, and base area × height gives the same result.',
          'Because volume is additive, an L-shaped solid can be split into two prisms whose volumes are added. Units matter: a box measured in centimeters has a volume in cubic centimeters, and doubling every side multiplies the volume by eight rather than by two. That is why a larger container holds far more than its dimensions suggest.',
        ],
      },
      {
        heading: 'Plotting points and seeing patterns',
        paragraphs: [
          'The coordinate plane has a horizontal x-axis and a vertical y-axis that meet at the origin, (0, 0). An ordered pair lists the x-coordinate first and the y-coordinate second, so (2, 6) means move two right and six up. Reversing the order gives a different point, which is why the order is called ordered.',
          'Points that share an x-coordinate form a vertical line, and points that share a y-coordinate form a horizontal line, so distance along such a line is found by subtracting coordinates. Plotting pairs from a table can reveal a rule, such as y = 2x, where every y value is twice its x value. Graphs turn patterns into pictures you can read at a glance. Plotting a few points is usually enough to see whether a relationship is linear, and a ruler laid along them confirms it. Coordinates also describe positions on maps and screens, which is why the order of the pair matters in programming.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A box is 4 cm by 3 cm by 2 cm. Find its volume, then plot (2, 6) and (6, 2) and explain how they differ.',
        steps: [
          'Volume is 4 × 3 × 2 = 24 cubic centimeters.',
          'The first pair moves 2 right and 6 up; the second moves 6 right and 2 up.',
        ],
        answer: '24 cm³; the two points are different because the coordinates are in a different order.',
      },
    ],
    terms: [
      ['volume', 'the amount of space a solid occupies'],
      ['cubic unit', 'a cube one unit on each edge, used to measure volume'],
      ['rectangular prism', 'a solid with six rectangular faces'],
      ['coordinate plane', 'a grid formed by a horizontal and a vertical axis'],
      ['ordered pair', 'two numbers giving a point’s x and y position'],
      ['origin', 'the point (0, 0) where the axes meet'],
    ],
    practice: [
      num('What is the volume of a 4 by 3 by 2 prism in cubic units?', 24, '4 × 3 × 2 = 24.'),
      mc('How do you plot (2, 6)?', ['up 2, right 6', 'right 2, up 6', 'right 6, up 2', 'up 6, right 2'], 1, 'The x-coordinate comes first.'),
      num('A prism has a base area of 15 square units and a height of 4 units. What is its volume?', 60, 'Base area times height: 15 × 4 = 60.'),
    ],
    review: [
      {
        prompt: 'How do you plot (2, 6) in the first quadrant?',
        answer: 'Start at the origin, move two units right along the x-axis, then six units up.',
      },
      {
        prompt: 'Why is volume measured in cubic units?',
        answer: 'Because volume counts how many unit cubes fill a space, and each cube has three dimensions.',
      },
    ],
    exercises: [
      'Build three rectangular prisms from blocks and compute each volume two ways.',
      'Plot ten ordered pairs from a table and describe the pattern the points form.',
    ],
  },
};
