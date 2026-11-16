import type { LessonDepth } from './types';

/** Authored depth for high-school English and mathematics. */
export const DEPTH_HS_A: Record<string, LessonDepth> = {
  'eng1-u1-l1': {
    topics: ['plot', 'character conflict'],
    applicationTitle: 'Reading a story as a chain of choices',
    application:
      'Plot is not a list of events; it is a chain of causes in which each choice narrows the character’s options. When you can say “because she lied, her brother stopped trusting her, so she had to confess,” you are reading structure rather than summary. That skill transfers to film, testimony, and any account where motive and consequence matter.',
    example: {
      prompt: 'A character lends money he cannot spare. Trace the causal chain.',
      steps: [
        'The choice reveals a value: loyalty over security.',
        'The consequence creates the next conflict: he cannot pay rent, so he hides it.',
      ],
      answer: 'The lending choice produces the concealment, which becomes the story’s rising action.',
    },
    terms: [
      ['rising action', 'the complications that build from the initial conflict'],
      ['climax', 'the turning point where the central conflict is decided'],
    ],
    review: [
      {
        prompt: 'Why is “and then” a weak way to describe plot?',
        answer: 'It lists events without cause; plot requires one event to produce the next.',
      },
      {
        prompt: 'What does a character’s choice reveal?',
        answer: 'Their values and pressures, which is how theme emerges from action.',
      },
    ],
    exercises: [
      'Diagram the causal chain of a short story in five boxes.',
      'Rewrite a summary so every event is linked by cause.',
    ],
  },
  'eng1-u2-l1': {
    topics: ['thesis', 'commentary'],
    applicationTitle: 'A thesis is an argument, not a label',
    application:
      'A thesis must be debatable and specific: “Symbolism in the novel” is a label, while “The green light represents a future that cannot be reached” is an argument someone could dispute. Evidence then needs commentary, a sentence explaining how the quotation supports the claim. Without commentary, a reader sees a quote and a thesis with no bridge between them.',
    example: {
      prompt: 'Improve: “The author uses imagery.”',
      steps: [
        'Name the specific image and its effect.',
        'Make a claim someone could contest: “The repeated cold imagery makes the house a character in its own grief.”',
      ],
      answer: 'A specific, arguable claim about how the imagery works.',
    },
    terms: [
      ['thesis', 'a debatable claim that the essay will support'],
      ['commentary', 'the writer’s explanation of how evidence supports the claim'],
    ],
    review: [
      {
        prompt: 'How do you test whether a thesis is arguable?',
        answer: 'Ask whether a reasonable reader could disagree; if not, it is a fact or summary.',
      },
      {
        prompt: 'What does commentary do after a quotation?',
        answer: 'It explains the link between the quoted words and the claim.',
      },
    ],
    exercises: [
      'Rewrite three label-style thesis statements as arguments.',
      'Write a paragraph with a quotation and two sentences of commentary.',
    ],
  },
  'eng1-u3-l1': {
    topics: ['poetic devices', 'line breaks'],
    applicationTitle: 'Reading a poem in passes',
    application:
      'A poem rewards rereading in layers: first for the situation, then for images, then for patterns of sound and line, then for the argument it makes. Line breaks are punctuation: a break before the last word isolates it and slows the reader. Sound devices such as assonance and alliteration create emphasis that prose achieves through word order.',
    example: {
      prompt: 'A poem ends each stanza with a one-word line. What effect can that create?',
      steps: [
        'The short line slows the reading and forces a pause.',
        'Repeated, it becomes a pattern that emphasizes each closing word.',
      ],
      answer: 'The isolated words accumulate meaning and create a refrain-like emphasis.',
    },
    terms: [
      ['enjambment', 'a sentence running past the end of a line without punctuation'],
      ['assonance', 'the repetition of vowel sounds within nearby words'],
    ],
    review: [
      {
        prompt: 'How does enjambment affect pace?',
        answer: 'It pulls the reader across the line break, speeding up and creating suspense.',
      },
      {
        prompt: 'What should a first pass through a poem focus on?',
        answer: 'What is happening and who is speaking, before analysis of devices.',
      },
    ],
    exercises: [
      'Annotate a poem in four passes and label each pass.',
      'Rewrite a stanza as prose and explain what the line breaks added.',
    ],
  },
  'eng1-u4-l1': {
    topics: ['research question', 'source evaluation'],
    applicationTitle: 'Research that can be checked',
    application:
      'A research question defines a scope narrow enough to answer with available evidence. Source evaluation asks who wrote it, what evidence is cited, who published it, and when. A government report, a peer-reviewed article, and an advocacy page can all be useful, but they carry different authority, and a citation lets a reader verify which one you used and how.',
    example: {
      prompt: 'Evaluate a claim that a new law reduced accidents, sourced to a blog.',
      steps: [
        'Check the original data: is there a government or insurance report?',
        'Compare the blog’s numbers with the source it cites, and note missing context.',
      ],
      answer: 'Trace the claim to primary data before accepting the blog’s interpretation.',
    },
    terms: [
      ['primary source', 'original data or a firsthand account'],
      ['secondary source', 'an analysis or summary of primary sources'],
    ],
    review: [
      {
        prompt: 'What four questions help evaluate a source?',
        answer: 'Who wrote it, what evidence is cited, who published it, and when.',
      },
      {
        prompt: 'Why cite a source you paraphrase?',
        answer: 'The idea is still the source’s, even in your own words.',
      },
    ],
    exercises: [
      'Turn a topic into a research question with a defined scope.',
      'Evaluate two websites on one claim using the four questions.',
    ],
  },
  'eng2-u1-l1': {
    topics: ['claim and warrant', 'counterargument'],
    applicationTitle: 'Finding the hidden link',
    application:
      'Arguments rest on warrants: unstated assumptions that connect evidence to a claim. “Test scores rose after the schedule change, so the schedule works” assumes nothing else changed. Skilled readers surface that assumption and test it. A counterargument is not a courtesy; it is the strongest test of whether the warrant holds.',
    example: {
      prompt: 'Surface the warrant: “Students who eat breakfast score higher, so schools should serve breakfast.”',
      steps: [
        'Evidence: correlation between breakfast and scores.',
        'Warrant: breakfast causes the higher scores, not family income or prior achievement.',
      ],
      answer: 'The causal warrant is the vulnerable point; correlation alone does not prove it.',
    },
    terms: [
      ['warrant', 'the assumption that links evidence to a claim'],
      ['counterargument', 'the strongest opposing case, which the writer must answer'],
    ],
    review: [
      {
        prompt: 'Why is correlation not proof of cause?',
        answer: 'A third factor may explain both, so the warrant needs more evidence.',
      },
      {
        prompt: 'How does answering a counterargument strengthen an essay?',
        answer: 'It shows the writer tested the claim instead of avoiding the hardest case.',
      },
    ],
    exercises: [
      'Surface the warrant in two editorials.',
      'Write a paragraph that concedes and rebuts a counterargument.',
    ],
  },
  'eng2-u2-l1': {
    topics: ['rhetorical appeals', 'audience'],
    applicationTitle: 'Appeals fitted to an audience',
    application:
      'Ethos, pathos, and logos are not interchangeable; each works differently with a given audience. A hospital board may respond to credentials and data, while a rally responds to shared values and story. Skilled speakers combine appeals and adjust proportion to the occasion, and readers who notice the mix are harder to manipulate.',
    example: {
      prompt: 'A mayor defends a budget: which appeal fits a town hall of worried residents?',
      steps: [
        'Logos: show the deficit and the trade-offs.',
        'Pathos and ethos: acknowledge specific losses and cite independent review.',
      ],
      answer: 'Lead with transparent data, then address the human costs directly.',
    },
    terms: [
      ['pathos', 'persuasion through emotion and shared values'],
      ['occasion', 'the setting, audience, and purpose of a speech'],
    ],
    review: [
      {
        prompt: 'What makes an appeal to ethos credible?',
        answer: 'Demonstrated expertise in the subject, fairness toward opponents, honesty about limits, and consistency between claims and actions.',
      },
      {
        prompt: 'Why can overusing pathos backfire?',
        answer: 'Audiences sense manipulation when emotion replaces evidence, and that suspicion makes them distrust the rest of the argument.',
      },
    ],
    exercises: [
      'Identify the dominant appeal in a speech and justify your choice.',
      'Rewrite a paragraph for a different audience.',
    ],
  },
  'eng2-u3-l1': {
    topics: ['historical context', 'translation'],
    applicationTitle: 'Context and translation as evidence',
    application:
      'A world text means something in its own moment: a play about kings speaks to the politics of its court. Context is evidence, not decoration, because it explains choices that look strange to a modern reader. Translation is interpretation: where a word has several meanings, the translator chooses one, so comparing translations reveals what is at stake.',
    example: {
      prompt: 'Two translations render a line as “proud” and “arrogant.” What does the difference change?',
      steps: [
        'Proud can be neutral or positive; arrogant is negative.',
        'The choice shifts whether the character is dignified or foolish.',
      ],
      answer: 'The translation decides the character’s moral standing in that moment.',
    },
    terms: [
      ['context', 'the historical and cultural conditions surrounding a text'],
      ['interpretation', 'a reading that explains meaning from evidence'],
    ],
    review: [
      {
        prompt: 'How can historical context support an interpretation?',
        answer: 'It explains references and choices that would otherwise seem arbitrary.',
      },
      {
        prompt: 'Why compare translations?',
        answer: 'Differences reveal where meaning is ambiguous and what the translator emphasized.',
      },
    ],
    exercises: [
      'Research the context of one scene and explain how it changes your reading.',
      'Compare two translations of a short passage.',
    ],
  },
  'eng2-u4-l1': {
    topics: ['synthesis', 'sources'],
    applicationTitle: 'Organizing by idea, not by source',
    application:
      'A synthesis paragraph develops one idea using several sources, showing where they agree, extend, or complicate each other. Organizing source by source produces a report; organizing by idea produces an argument. The strongest evidence sets the limit of your claim, which is why good writers revise a claim to fit the best contrary evidence rather than ignoring it.',
    example: {
      prompt: 'Three sources: two find homework helps older students, one finds no effect in elementary. Write the synthesis claim.',
      steps: [
        'Group by idea: effect varies by age.',
        'State a claim that accommodates all three findings.',
      ],
      answer: '“Homework’s benefit depends on age and task design,” supported by all three sources.',
    },
    terms: [
      ['synthesis', 'combining sources to build a larger claim'],
      ['qualifier', 'a word that limits a claim, such as “often” or “for older students”'],
    ],
    review: [
      {
        prompt: 'What does a qualifier do for a claim?',
        answer: 'It limits the claim to the cases the evidence actually supports.',
      },
      {
        prompt: 'Why is source-by-source organization weak?',
        answer: 'It hides the relationships between sources and reads as a list.',
      },
    ],
    exercises: [
      'Synthesize three sources in one paragraph organized by idea.',
      'Add qualifiers to an overbroad claim.',
    ],
  },
  'eng3-u1-l1': {
    topics: ['literary period', 'comparison'],
    applicationTitle: 'Reading a period through its arguments',
    application:
      'Literary periods are arguments about what art should do, not costumes. A text can resist its period as easily as represent it. Comparing two texts from the same era by their claims, rather than by their authors’ biographies, shows what was contested: two writers may define freedom in opposite ways while sharing a moment.',
    example: {
      prompt: 'Two 1920s texts: one celebrates cities, one mourns them. What does the pair reveal?',
      steps: [
        'Identify each text’s claim about modern life.',
        'Note the shared historical experience and the opposed evaluations.',
      ],
      answer: 'The period contained both excitement and anxiety about urban modernity.',
    },
    terms: [
      ['literary period', 'a movement defined by shared concerns and techniques'],
      ['close reading', 'analysis of a text’s language and structure for meaning'],
    ],
    review: [
      {
        prompt: 'Why is biography a weak substitute for reading?',
        answer: 'The text’s language and structure make its meaning, not the author’s life alone.',
      },
      {
        prompt: 'What does it mean that a text resists its period?',
        answer: 'It questions or reverses the assumptions its era usually holds.',
      },
    ],
    exercises: [
      'Compare two texts from one period by their central claims.',
      'Write a paragraph situating a text in its historical moment.',
    ],
  },
  'eng3-u2-l1': {
    topics: ['research scope', 'annotated bibliography'],
    applicationTitle: 'Scope as a kindness to the reader',
    application:
      'A workable research question names a population, a place, and a time frame, which keeps the essay from becoming a survey. An annotated bibliography is a thinking tool: each entry summarizes the source, evaluates its reliability, and states how it will be used. Writing annotations early exposes gaps before the draft depends on them.',
    example: {
      prompt: 'Narrow “immigration policy” into a researchable question.',
      steps: [
        'Choose a policy, a place, and an outcome: “How did the 1986 amnesty affect Texas farm wages through 1995?”',
        'Identify data sources: government reports and academic studies.',
      ],
      answer: 'A bounded question with identifiable evidence and a clear time frame.',
    },
    terms: [
      ['annotation', 'a summary and evaluation of a source, with its intended use'],
      ['scope', 'the boundaries of a research question'],
    ],
    review: [
      {
        prompt: 'What three elements narrow a research question?',
        answer: 'Population, place, and time frame, plus a specific outcome.',
      },
      {
        prompt: 'Why write annotations before drafting?',
        answer: 'They reveal whether the evidence actually supports the intended claim.',
      },
    ],
    exercises: [
      'Write three annotations of 60 words each for sources on one question.',
      'Narrow a broad topic into a scope statement.',
    ],
  },
  'eng3-u3-l1': {
    topics: ['sentence variety', 'delivery'],
    applicationTitle: 'Cut, then vary',
    application:
      'Concise prose is not short for its own sake; it removes words that do no work so the reader can follow the argument. Sentence variety then prevents a monotone: a short sentence after two long ones lands. In spoken argument, delivery is structure: signposting, pauses, and a clear ending help an audience follow without rereading.',
    example: {
      prompt: 'Revise: “It is important to note that the policy was, in many ways, quite unsuccessful.”',
      steps: [
        'Delete empty framing: “It is important to note that.”',
        'Replace vague qualifiers with a claim: “The policy failed.”',
      ],
      answer: '“The policy failed,” followed by evidence of what failed and why.',
    },
    terms: [
      ['concision', 'expressing an idea with no unnecessary words'],
      ['signposting', 'spoken cues that mark a speech’s structure'],
    ],
    review: [
      {
        prompt: 'How does sentence length affect emphasis?',
        answer: 'A short sentence after longer ones stands out and lands the point.',
      },
      {
        prompt: 'Why does a spoken argument need signposting?',
        answer: 'Listeners cannot reread, so cues help them track the structure.',
      },
    ],
    exercises: [
      'Cut a 100-word paragraph to 60 without losing its claim.',
      'Deliver a two-minute argument with three signposts.',
    ],
  },
  'eng4-u1-l1': {
    topics: ['allusion', 'genre'],
    applicationTitle: 'Allusion as a shortcut with a cost',
    application:
      'An allusion borrows meaning from an earlier text, so a reference to Eden or to Shakespeare carries associations the writer does not have to explain. The cost is exclusion: readers who miss the reference lose part of the meaning. Genre works similarly, setting expectations the writer can satisfy, complicate, or parody.',
    example: {
      prompt: 'A novel names a character “Eve” and places her in a garden. What does the allusion do?',
      steps: [
        'The name imports associations: creation, temptation, fall.',
        'The garden setting reinforces the parallel.',
      ],
      answer: 'It frames the character’s choice as a fall, and the story can confirm or reverse it.',
    },
    terms: [
      ['allusion', 'an indirect reference to another text or cultural source'],
      ['parody', 'an imitation that comments on or mocks its source'],
    ],
    review: [
      {
        prompt: 'How is parody different from adaptation?',
        answer: 'Parody comments critically or comically; adaptation retells in a new form.',
      },
      {
        prompt: 'What is the risk of allusion?',
        answer: 'Readers who do not recognize it lose meaning the text depends on.',
      },
    ],
    exercises: [
      'Trace one allusion to its source and explain its effect.',
      'Write a paragraph that parodies a familiar genre convention.',
    ],
  },
  'eng4-u2-l1': {
    topics: ['personal statement', 'specific detail'],
    applicationTitle: 'Specific beats impressive',
    application:
      'A personal statement earns attention through a specific moment, not a list of accomplishments. The structure is scene, turn, reflection: show a concrete situation, show what changed, then explain what you learned without overclaiming. Admissions readers value evidence of how you think, which is why a small, precise story outperforms adjectives.',
    example: {
      prompt: 'Revise “I am passionate about medicine” into a scene.',
      steps: [
        'Choose one moment: a grandmother’s insulin log, filled in your handwriting.',
        'Show the turn: you began asking why doses changed.',
      ],
      answer: 'A specific scene that demonstrates curiosity rather than asserting passion.',
    },
    terms: [
      ['scene', 'a concrete moment shown with sensory detail'],
      ['reflection', 'the writer’s explanation of what the moment meant'],
    ],
    review: [
      {
        prompt: 'Why avoid claiming transformation you cannot support?',
        answer: 'Readers can tell when the reflection is larger than the evidence in the scene.',
      },
      {
        prompt: 'What should the turn in a personal statement do?',
        answer: 'Mark the moment the writer’s understanding or action changed.',
      },
    ],
    exercises: [
      'Draft a 150-word scene with a clear turn.',
      'Replace three abstract adjectives with concrete details.',
    ],
  },
  'eng4-u3-l1': {
    topics: ['achievement statements', 'professional email'],
    applicationTitle: 'Documents that survive a ten-second scan',
    application:
      'A résumé is scanned, not read, so achievement statements lead with verbs and numbers: “reconciled 300 invoices weekly” beats “responsible for invoices.” Formatting serves scanning: consistent headings, white space, and one page for early-career applicants. A professional email states its purpose in the first line and its request in the last.',
    example: {
      prompt: 'Rewrite “Worked at a grocery store” as an achievement statement.',
      steps: [
        'Name the action: trained new cashiers, managed a register.',
        'Add scale or result: “Trained 6 new cashiers and balanced a register averaging $4,000 per shift.”',
      ],
      answer: 'A verb-first statement with numbers that shows scope.',
    },
    terms: [
      ['achievement statement', 'a résumé line describing an action and its result'],
      ['scanning', 'reading quickly for headings and keywords'],
    ],
    review: [
      {
        prompt: 'Why do numbers improve a résumé line?',
        answer: 'They show scale and result, which vague duties cannot.',
      },
      {
        prompt: 'What belongs in the first line of a professional email?',
        answer: 'The purpose, so the reader knows why it matters immediately.',
      },
    ],
    exercises: [
      'Rewrite four job duties as achievement statements.',
      'Draft a request email of under 120 words.',
    ],
  },
  'eng4-u4-l1': {
    topics: ['verifying claims', 'misleading techniques'],
    applicationTitle: 'Lateral reading before sharing',
    application:
      'Verifying a claim means leaving the page and checking what other sources say about the source itself. Lateral reading catches sites that look authoritative but have no expertise. Common techniques include missing context, misleading charts, and fabricated quotes, and each is defeated by the same habit: find the original data and read the method.',
    example: {
      prompt: 'A post cites a study but shows no link. What do you do?',
      steps: [
        'Search the study title and author independently.',
        'Check the sample, the journal, and whether the conclusion matches the post.',
      ],
      answer: 'Verify the study exists and supports the claim before sharing it.',
    },
    terms: [
      ['lateral reading', 'checking a source by reading what others say about it'],
      ['misleading context', 'true information presented to create a false impression'],
    ],
    review: [
      {
        prompt: 'What is lateral reading?',
        answer: 'Opening new tabs to evaluate a source through outside coverage and expertise.',
      },
      {
        prompt: 'Why can a true statistic still mislead?',
        answer: 'It may omit the base rate, the comparison, or the conditions that change its meaning.',
      },
    ],
    exercises: [
      'Take one viral claim and trace it to its original source.',
      'Identify the misleading element in two charts or headlines.',
    ],
  },

  'alg1-u1-l1': {
    topics: ['linear equations', 'slope'],
    applicationTitle: 'Equations and rates in real situations',
    application:
      'Solving an equation keeps a balance: whatever you do to one side, you do to the other. Slope turns that algebra into a rate with units, such as dollars per hour or meters per second. Together they model real situations, like the cost of a phone plan or the time a trip takes at a given speed.',
    example: {
      prompt: 'A plan costs $25 plus $0.15 per text. How many texts cost $40?',
      steps: ['Write 25 + 0.15x = 40.', 'Subtract 25: 0.15x = 15; divide: x = 100.'],
      answer: '100 texts, because 0.15 × 100 = 15.',
    },
    terms: [
      ['slope', 'the rate of change of a line, Δy/Δx'],
      ['linear equation', 'an equation whose graph is a straight line'],
    ],
    review: [
      {
        prompt: 'What does slope mean in a real context?',
        answer: 'The change in the output per one unit of the input, with units.',
      },
      {
        prompt: 'How do you solve a two-step equation?',
        answer: 'Undo addition or subtraction first, then multiplication or division.',
      },
    ],
    exercises: [
      'Solve 4(x − 3) = 20 and justify each step.',
      'Find and interpret the slope through (1, 4) and (5, 16).',
    ],
  },
  'alg1-u2-l1': {
    topics: ['systems of equations', 'substitution'],
    applicationTitle: 'Where two conditions meet',
    application:
      'A system models two conditions at once: two plans with different fees, two vehicles with different speeds. Substitution works when one equation is already solved for a variable; elimination works when coefficients can be canceled. A system with no solution describes parallel lines, while infinitely many solutions describe the same line written twice.',
    example: {
      prompt: 'Solve y = 2x + 1 and x + y = 10.',
      steps: ['Substitute: x + (2x + 1) = 10.', '3x = 9, so x = 3 and y = 7.'],
      answer: '(3, 7), which satisfies both equations.',
    },
    terms: [
      ['substitution', 'replacing a variable with an equivalent expression'],
      ['elimination', 'adding or subtracting equations to remove a variable'],
    ],
    review: [
      {
        prompt: 'What does it mean when a system has no solution?',
        answer: 'The lines are parallel, so no point satisfies both equations.',
      },
      {
        prompt: 'How do you check a system’s solution?',
        answer: 'Substitute the ordered pair into both original equations and confirm that each one becomes a true statement.',
      },
    ],
    exercises: [
      'Solve 2x + y = 7 and y = x + 1 by substitution.',
      'Solve x + y = 6 and x − y = 2 by elimination.',
    ],
  },
  'alg1-u3-l1': {
    topics: ['quadratic equations', 'discriminant'],
    applicationTitle: 'Solving equations with a squared term',
    application:
      'Quadratics model area, projectile height, and profit. Factoring works when the expression splits into binomials; the quadratic formula always works, and the discriminant b² − 4ac tells you how many real solutions exist before you finish computing. A negative discriminant means no real x-intercepts, which is a fact about the graph, not a failure.',
    example: {
      prompt: 'Solve x² − 5x + 6 = 0 and check the discriminant.',
      steps: ['Factor: (x − 2)(x − 3) = 0.', 'Discriminant: 25 − 24 = 1, positive, so two real roots.'],
      answer: 'x = 2 or x = 3.',
    },
    terms: [
      ['discriminant', 'b² − 4ac, which determines the number of real solutions'],
      ['root', 'a value that makes the equation true'],
    ],
    review: [
      {
        prompt: 'What does a negative discriminant tell you?',
        answer: 'There are no real solutions; the parabola does not cross the x-axis.',
      },
      {
        prompt: 'When is factoring preferable to the quadratic formula?',
        answer: 'When the factors are easy to see, since it is faster and shows structure.',
      },
    ],
    exercises: [
      'Solve x² + 2x − 8 = 0 by factoring.',
      'Use the quadratic formula on 2x² − 4x + 1 = 0.',
    ],
  },
  'alg1-u4-l1': {
    topics: ['exponential growth', 'sequences'],
    applicationTitle: 'Growth that compounds',
    application:
      'Linear growth adds a constant amount each step; exponential growth multiplies by a constant factor. A 3% annual increase multiplies by 1.03 each year, so the amount grows faster over time. This models interest, populations, and inflation, and it is why a small percentage difference becomes large over decades.',
    example: {
      prompt: 'A $500 account grows 3% per year. Write the model and find the value after 2 years.',
      steps: ['Model: A = 500(1.03)^t.', 't = 2: 500(1.0609) = 530.45.'],
      answer: 'About $530.45 after two years.',
    },
    terms: [
      ['growth factor', 'the multiplier applied each period, such as 1.03'],
      ['exponential function', 'a function with a variable in the exponent'],
    ],
    review: [
      {
        prompt: 'How is exponential growth different from linear growth?',
        answer: 'Linear adds a constant amount; exponential multiplies by a constant factor.',
      },
      {
        prompt: 'What does a growth factor below 1 mean?',
        answer: 'The quantity is decaying by a constant percentage each period, as with depreciation or a cooling drink.',
      },
    ],
    exercises: [
      'Write a model for a $1,200 car losing 12% of its value each year.',
      'Compare linear and exponential tables and identify each.',
    ],
  },
  'geom-u1-l1': {
    topics: ['conditionals', 'angle pairs'],
    applicationTitle: 'If–then reasoning',
    application:
      'A conditional statement has a hypothesis and a conclusion; its converse swaps them, and the converse is not automatically true. “If it is a square, it has four equal sides” is true, but its converse is false. Angle pairs give the same lesson in geometry: vertical angles are equal, and a linear pair sums to 180°, each fact usable only under its stated conditions.',
    example: {
      prompt: 'Write the converse of “If two angles are vertical, they are equal” and judge it.',
      steps: [
        'Swap: “If two angles are equal, they are vertical.”',
        'Counterexample: two equal angles that are not vertical.',
      ],
      answer: 'The converse is false; equal angles need not be vertical.',
    },
    terms: [
      ['conditional', 'a statement in if–then form'],
      ['converse', 'the statement formed by swapping hypothesis and conclusion'],
    ],
    review: [
      {
        prompt: 'Why is a converse not automatically true?',
        answer: 'The original only guarantees one direction of implication.',
      },
      {
        prompt: 'What is true about vertical angles?',
        answer: 'Vertical angles are equal in measure because they are opposite each other.',
      },
    ],
    exercises: [
      'Write the converse of three conditionals and test each with a counterexample.',
      'Find a missing angle using a linear pair.',
    ],
  },
  'geom-u2-l1': {
    topics: ['congruence', 'Pythagorean theorem'],
    applicationTitle: 'Proving triangles match',
    application:
      'Congruence criteria let you conclude two triangles are identical in shape and size from limited information: SSS, SAS, ASA, AAS, and HL for right triangles. SSA is not a criterion because it can produce two different triangles. The Pythagorean theorem then turns a right triangle into a distance calculator, and its converse tests whether an angle is right.',
    example: {
      prompt: 'Two right triangles have equal hypotenuses and one equal leg. Are they congruent?',
      steps: ['For right triangles, hypotenuse-leg (HL) is a valid criterion.', 'The third sides must then be equal by the theorem.'],
      answer: 'Yes, by HL congruence.',
    },
    terms: [
      ['congruent', 'having the same shape and size'],
      ['converse of the Pythagorean theorem', 'if a² + b² = c², the triangle is right'],
    ],
    review: [
      {
        prompt: 'Why is SSA not a congruence criterion?',
        answer: 'It can describe two non-congruent triangles with the same parts.',
      },
      {
        prompt: 'How do you test whether a triangle is right?',
        answer: 'Check whether the squares of the two shorter sides sum to the square of the longest.',
      },
    ],
    exercises: [
      'Identify the criterion that proves two given triangles congruent.',
      'Test whether sides 9, 12, and 15 form a right triangle.',
    ],
  },
  'geom-u3-l1': {
    topics: ['similar triangles', 'trigonometric ratios'],
    applicationTitle: 'Measuring what you cannot reach',
    application:
      'Similar triangles have equal angles and proportional sides, which lets you find heights and distances indirectly. Trigonometry extends this to right triangles: sine is opposite over hypotenuse, cosine adjacent over hypotenuse, and tangent opposite over adjacent. Surveyors, pilots, and roofers use these ratios when a tape measure will not reach.',
    example: {
      prompt: 'A 6-foot person casts a 4-foot shadow; a tree casts a 20-foot shadow. How tall is the tree?',
      steps: ['Set a proportion: 6/4 = h/20.', 'Cross-multiply: 4h = 120, so h = 30.'],
      answer: '30 feet, because the triangles are similar.',
    },
    terms: [
      ['similar', 'having equal angles and proportional sides'],
      ['tangent', 'the ratio of the opposite side to the adjacent side'],
    ],
    review: [
      {
        prompt: 'Which ratio uses the side opposite and the hypotenuse?',
        answer: 'Sine, from SOH: sine equals the opposite leg divided by the hypotenuse.',
      },
      {
        prompt: 'Why does AA similarity guarantee proportional sides?',
        answer: 'Two equal angles force the third to match, so the shapes scale uniformly.',
      },
    ],
    exercises: [
      'Use a shadow to estimate the height of a tree or building.',
      'Find the missing side using the correct trig ratio.',
    ],
  },
  'geom-u4-l1': {
    topics: ['circles', 'volume'],
    applicationTitle: 'Arcs, sectors, and solids',
    application:
      'A sector is a fraction of a circle’s area determined by its central angle, so its area is (θ/360)πr². Arc length uses the same fraction of the circumference. Volume formulas for prisms, cylinders, cones, and spheres extend these ideas into space, and comparing them explains design choices such as cone versus cylindrical cups.',
    example: {
      prompt: 'Find the area of a 90° sector of a circle with radius 4.',
      steps: ['Full area: π(4²) = 16π.', 'Fraction: 90/360 = 1/4, so area = 4π.'],
      answer: '4π square units, about 12.57.',
    },
    terms: [
      ['sector', 'the region bounded by two radii and an arc'],
      ['arc length', 'the distance along a circle between two points'],
    ],
    review: [
      {
        prompt: 'How do you find a sector’s area?',
        answer: 'Multiply the circle’s area by the central angle divided by 360.',
      },
      {
        prompt: 'How does a cone’s volume compare with a cylinder’s?',
        answer: 'It is one third when the base and height match.',
      },
    ],
    exercises: [
      'Compute the arc length for a 60° angle on a circle of radius 6.',
      'Find the volume of a sphere with radius 3.',
    ],
  },
  'alg2-u1-l1': {
    topics: ['parent functions', 'vertex form'],
    applicationTitle: 'Transformations of a parent graph',
    application:
      'Every function family has a parent: y = x², y = |x|, y = √x. Transformations shift, stretch, and reflect that parent, and vertex form y = a(x − h)² + k names the shift directly: h moves left or right, k moves up or down, and a stretches or reflects. Reading the equation tells you the graph before you plot a point.',
    example: {
      prompt: 'Describe y = −2(x − 3)² + 4.',
      steps: [
        'Inside the square: shift right 3. Outside: shift up 4.',
        'The −2 reflects over the x-axis and stretches vertically.',
      ],
      answer: 'A downward-opening parabola with vertex (3, 4), stretched by 2.',
    },
    terms: [
      ['vertex form', 'y = a(x − h)² + k, showing the vertex (h, k)'],
      ['domain', 'the set of valid inputs of a function'],
    ],
    review: [
      {
        prompt: 'What does the sign of a tell you in vertex form?',
        answer: 'Whether the parabola opens up (positive) or down (negative).',
      },
      {
        prompt: 'How do you find the domain of a square-root function?',
        answer: 'Set the expression under the radical greater than or equal to zero.',
      },
    ],
    exercises: [
      'Graph y = (x + 2)² − 5 and state its vertex.',
      'Write a vertex-form equation for a parabola with vertex (−1, 3) opening up.',
    ],
  },
  'alg2-u2-l1': {
    topics: ['polynomials', 'complex numbers'],
    applicationTitle: 'Factors, remainders, and imaginary numbers',
    application:
      'Factoring reverses multiplication, and the remainder theorem says a polynomial’s remainder when divided by (x − a) equals its value at a. When a quadratic has no real roots, complex numbers complete the system: i² = −1, so x² + 1 = 0 has solutions ±i. Complex arithmetic follows the same rules as algebra with a variable.',
    example: {
      prompt: 'Simplify (3 + 2i) + (1 − 4i) and multiply i × i.',
      steps: ['Add real and imaginary parts: 4 − 2i.', 'i × i = i² = −1.'],
      answer: '4 − 2i, using i² = −1.',
    },
    terms: [
      ['remainder theorem', 'the remainder of division by (x − a) equals f(a)'],
      ['imaginary unit', 'i, defined so that i² = −1'],
    ],
    review: [
      {
        prompt: 'How do you add complex numbers?',
        answer: 'Add the real parts and the imaginary parts separately.',
      },
      {
        prompt: 'What does the remainder theorem let you compute quickly?',
        answer: 'The remainder equals f(a), so substituting a is faster than long division.',
      },
    ],
    exercises: [
      'Factor 6x² + 9x.',
      'Multiply (2 + i)(3 − i) and simplify.',
    ],
  },
  'alg2-u3-l1': {
    topics: ['logarithms', 'exponential equations'],
    applicationTitle: 'Undoing an exponent',
    application:
      'A logarithm answers “what exponent gives this value?”: log₂ 8 = 3 because 2³ = 8. Logs undo exponentials, which is how you solve an equation with the variable in the exponent. The rules log(ab) = log a + log b and log(aⁿ) = n log a turn multiplication into addition and powers into factors.',
    example: {
      prompt: 'Solve 2^x = 32 using logs.',
      steps: ['Take log₂ of both sides: x = log₂ 32.', 'Because 2⁵ = 32, x = 5.'],
      answer: 'x = 5.',
    },
    terms: [
      ['logarithm', 'the exponent to which a base must be raised to produce a number'],
      ['base', 'the number being raised to a power in an exponential expression'],
    ],
    review: [
      {
        prompt: 'Convert 10³ = 1000 to logarithmic form.',
        answer: 'In logarithmic form, log base 10 of 1000 equals 3.',
      },
      {
        prompt: 'Which log rule handles a power inside the argument?',
        answer: 'log(aⁿ) = n log a, bringing the exponent to the front.',
      },
    ],
    exercises: [
      'Evaluate log₃ 81 and log₂ 1/8.',
      'Solve 5^x = 40 with logarithms, rounding to two decimals.',
    ],
  },
  'precalc-u1-l1': {
    topics: ['radians', 'reference angles'],
    applicationTitle: 'Angles measured two ways',
    application:
      'Radians measure angles by arc length: a full circle is 2π radians, so 180° = π. Reference angles reduce any angle to an acute angle with the same sine and cosine magnitudes, which is how exact values are computed without a calculator. This matters in calculus, where radians make derivative formulas simple.',
    example: {
      prompt: 'Convert 135° to radians and find its reference angle.',
      steps: ['Multiply by π/180: 135π/180 = 3π/4.', 'Reference angle: 180° − 135° = 45°.'],
      answer: '3π/4 radians, with a 45° reference angle.',
    },
    terms: [
      ['radian', 'the angle subtended by an arc equal to the radius'],
      ['reference angle', 'the acute angle between the terminal side and the x-axis'],
    ],
    review: [
      {
        prompt: 'How do you convert degrees to radians?',
        answer: 'Multiply the degree measure by π and divide by 180.',
      },
      {
        prompt: 'What is sin 30°?',
        answer: 'sin 30° equals 1/2, from the 30-60-90 triangle.',
      },
    ],
    exercises: [
      'Convert 210° and 300° to radians.',
      'Evaluate sin 150° and cos 240° using reference angles.',
    ],
  },
  'precalc-u2-l1': {
    topics: ['trigonometric equations', 'vectors'],
    applicationTitle: 'Solving and directing',
    application:
      'Trigonometric equations often have more than one solution in an interval because the functions repeat. Solve for the reference angle, then use the sign and period to find all solutions. Vectors add direction to magnitude, and their components allow you to add forces or velocities; the dot product measures how much two vectors point the same way.',
    example: {
      prompt: 'Solve sin x = 1/2 on [0°, 360°).',
      steps: ['Reference angle: 30°.', 'Sine is positive in quadrants I and II.'],
      answer: 'x = 30° or 150°.',
    },
    terms: [
      ['vector', 'a quantity with magnitude and direction'],
      ['dot product', 'the sum of the products of corresponding components'],
    ],
    review: [
      {
        prompt: 'Why can a trig equation have two solutions in one period?',
        answer: 'The function takes the same value at two angles in a full rotation.',
      },
      {
        prompt: 'How do you find a vector’s magnitude from components?',
        answer: 'Use the Pythagorean theorem on its components.',
      },
    ],
    exercises: [
      'Solve cos x = −1/2 on [0°, 360°).',
      'Find the magnitude of the vector (3, 4).',
    ],
  },
  'precalc-u3-l1': {
    topics: ['conic sections', 'limits'],
    applicationTitle: 'Shapes from equations and values approached',
    application:
      'Conic sections come from slicing a cone: circles, ellipses, parabolas, and hyperbolas, each with a characteristic equation. A limit describes the value a function approaches, not necessarily the value it reaches, which is why (x² − 4)/(x − 2) can be evaluated at x = 2 by factoring even though the original expression is undefined there.',
    example: {
      prompt: 'Evaluate the limit of (x² − 4)/(x − 2) as x approaches 2.',
      steps: ['Factor: (x − 2)(x + 2)/(x − 2).', 'Cancel for x ≠ 2, leaving x + 2, which approaches 4.'],
      answer: 'The limit is 4, though the function is undefined at exactly 2.',
    },
    terms: [
      ['conic section', 'a curve formed by intersecting a plane with a cone'],
      ['limit', 'the value a function approaches as the input approaches a point'],
    ],
    review: [
      {
        prompt: 'How do you recognize a circle from its equation?',
        answer: 'x² and y² have equal coefficients and the same sign.',
      },
      {
        prompt: 'Why can a limit exist where the function is undefined?',
        answer: 'The limit describes nearby values, not the value at the point itself.',
      },
    ],
    exercises: [
      'Identify the conic from 4x² + 9y² = 36.',
      'Evaluate the limit of (x² − 9)/(x − 3) as x approaches 3.',
    ],
  },
};
