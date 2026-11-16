import type { Course } from '../../types';
import { HIGH_WEIGHTS } from '../weights';
import { exam, lesson, mc, project, quiz, rubricRow, section, short, teks, unit } from '../builders';

/**
 * High-school English language arts: English I-IV, one credit each.
 *
 * Alignment: 19 TAC Chapter 110 (English Language Arts and Reading). Citations
 * are chapter- and course-level because the TEKS student expectations are
 * adopted by section for each course; the summaries below are this program's
 * own descriptions, not quotations.
 */

export const english1: Course = {
  id: 'hs-eng1',
  title: 'English I',
  subject: 'ela',
  grade: 9,
  credits: 1,
  semesters: 2,
  description:
    'A first high-school course in close reading, literary analysis, and evidence-based writing. Students read short fiction, poetry, and informational texts, then build paragraphs and essays that defend an interpretation with quotations and reasoning.',
  essentialQuestions: [
    'How does an author use structure and language to shape what a reader feels and believes?',
    'What makes an interpretation defensible rather than merely an opinion?',
  ],
  teks: [
    teks('19 TAC ch. 110, English I', 'Reading and responding to fiction, poetry, drama, and informational text; composition; research; listening and speaking.'),
  ],
  weights: HIGH_WEIGHTS,
  units: [
    unit(
      'u1',
      'How fiction works',
      'Plot, character, and conflict are craft choices, not accidents.',
      [
        lesson({
          id: 'eng1-u1-l1',
          title: 'Plot, character, and conflict',
          minutes: 50,
          objectives: [
            'Identify exposition, rising action, climax, falling action, and resolution in a short story.',
            'Explain how a character’s choices reveal conflict and theme.',
          ],
          sections: [
            section('Plot is a chain of causes', [
              'A plot is not a list of events; it is a chain in which one choice causes the next problem. When you summarize, use because and so: “Because Maya hides the letter, her brother suspects her, so she finally tells the truth.” That sentence shows plot structure doing its job.',
              'Most short stories move through exposition (the situation), a complicating incident, rising action, a climax where the central conflict is faced, and a resolution that shows what changed. Some stories deliberately break this order. When they do, ask what the disruption makes the reader notice.',
            ]),
            section('Character, conflict, and theme', [
              'Conflict is the friction that forces a character to act: person against person, society, nature, or self. A theme is not a one-word topic like “friendship.” It is a claim the story tests, such as “loyalty that requires lying corrodes the friendship it protects.”',
              'Characters are revealed through what they say, what they do, what others say about them, and what the narrator notices. Direct statements about a character are the least reliable evidence; a pattern of choices is the strongest.',
            ]),
          ],
          example: {
            prompt: 'A story opens with a girl practicing a piano piece she hates, then shows her playing it perfectly at a recital while thinking about her late grandmother.',
            steps: [
              'Name the conflict: the girl against her own resentment, and against grief.',
              'Find the turning point: the recital, where discipline and memory meet.',
              'State a theme as a claim: mastery can be a form of mourning.',
              'Collect evidence: the practice routine, the recital, the thought about the grandmother.',
            ],
            answer: 'Theme claim: “Discipline can carry grief that words cannot.” Evidence: repeated practice, the recital, the memory.',
          },
          keyTerms: [
            { term: 'Climax', definition: 'The moment the central conflict is confronted and cannot be avoided.' },
            { term: 'Theme', definition: 'A claim about life or human behavior that a text develops and tests.' },
            { term: 'Motivation', definition: 'The need or desire that explains why a character acts.' },
          ],
          practice: [
            mc(
              'Which sentence best states a theme rather than a topic?',
              [
                'The story is about a piano recital.',
                'The story is set in a small Texas town.',
                'Discipline can become a way of carrying grief.',
                'The narrator is the girl’s older sister.',
              ],
              2,
              'A theme is a claim the story develops. The other options are subject, setting, or narrator facts.',
            ),
            mc(
              'A character who donates prize money but tells no one is characterized mainly through',
              ['direct narrator commentary', 'action', 'setting', 'dialogue'],
              1,
              'The choice to give anonymously is an action; the reader infers generosity and humility from behavior.',
            ),
          ],
        }),
      ],
      quiz('Unit 1 quiz: fiction fundamentals', [
        mc(
          'The complicating incident is best described as',
          [
            'the background information at the start',
            'the event that sets the central conflict in motion',
            'the final sentence of the story',
            'a description of the setting',
          ],
          1,
          'It is the event that turns the situation into a problem the character must act on.',
        ),
        mc(
          'Which is the strongest evidence for a claim about a character?',
          [
            'The narrator says she is “nice.”',
            'A pattern of choices across three scenes.',
            'The cover illustration.',
            'The story’s title.',
          ],
          1,
          'Patterns of choice are the most reliable evidence; direct labels are the weakest.',
        ),
        mc(
          'A story that begins at the end and then jumps backward is using',
          ['in medias res', 'a flashback structure', 'a frame narrative only', 'free verse'],
          1,
          'Beginning after the key event and then moving backward is a flashback structure.',
        ),
      ]),
      project({
        title: 'Character choice map',
        prompt:
          'Choose a short story from the course reading list. Map three choices the protagonist makes. For each, record the situation, the choice, the consequence, and what the choice reveals.',
        deliverable: 'A one-page map plus a 150-word paragraph explaining what the pattern of choices suggests about the theme.',
        guidance: [
          'The three choices should be genuinely different moments, not restatements.',
          'Each consequence should be traceable to the choice.',
          'The paragraph should name a theme as a claim and use at least one quotation.',
        ],
        rubric: [
          rubricRow('Choice selection and accuracy', 30, [
            ['Excellent', 'Three distinct, accurately described choices.', 30],
            ['Proficient', 'Three choices, one described loosely.', 24],
            ['Developing', 'Two accurate choices.', 15],
            ['Beginning', 'Choices are plot summary only.', 6],
          ]),
          rubricRow('Analysis of consequences', 30, [
            ['Excellent', 'Consequences traced clearly to causes.', 30],
            ['Proficient', 'Mostly clear causal links.', 24],
            ['Developing', 'Some links asserted without support.', 15],
            ['Beginning', 'No causal analysis.', 6],
          ]),
          rubricRow('Theme claim and evidence', 30, [
            ['Excellent', 'Theme stated as a claim and supported with a quotation.', 30],
            ['Proficient', 'Theme stated, evidence thin.', 24],
            ['Developing', 'Topic rather than theme.', 15],
            ['Beginning', 'No theme claim.', 6],
          ]),
          rubricRow('Conventions', 10, [
            ['Excellent', 'Few errors; clear sentences.', 10],
            ['Proficient', 'Minor errors that do not impede reading.', 8],
            ['Developing', 'Errors distract in places.', 5],
            ['Beginning', 'Errors impede meaning.', 2],
          ]),
        ],
      }),
    ),
    unit(
      'u2',
      'The analytical paragraph',
      'A defensible interpretation is built from a claim, evidence, and reasoning.',
      [
        lesson({
          id: 'eng1-u2-l1',
          title: 'Thesis, evidence, commentary',
          minutes: 50,
          objectives: [
            'Write a thesis that makes a debatable claim.',
            'Integrate a quotation and explain how it supports the claim.',
          ],
          sections: [
            section('A thesis is an argument, not a label', [
              'A weak thesis announces a topic: “This essay will discuss symbolism in the story.” A strong thesis makes a claim a reasonable reader could dispute: “The recurring broken clock suggests that the family’s grief has stopped time, leaving them unable to act.”',
              'Test your thesis with “so what?” and “could someone disagree?” If nobody could disagree, you have a summary. If nobody cares, you have a trivia note.',
            ]),
            section('Evidence needs a bridge', [
              'A quotation does not explain itself. Use a three-part move: introduce the quotation in context, quote only the words that matter, then explain how those words support your claim. The explanation, not the quotation, earns the credit.',
              'Keep quotations short. If you quote two sentences, you usually needed six words. Cite the page or line so a reader can check you.',
            ]),
          ],
          example: {
            prompt: 'Claim: The narrator’s repeated mention of the stopped clock shows that grief has frozen the family.',
            steps: [
              'Introduce: the clock appears each time the family avoids a decision.',
              'Quote briefly: “the hands had not moved.”',
              'Explain: the image links the family’s avoidance to stopped time, so the reader sees paralysis rather than sadness alone.',
            ],
            answer: 'A complete paragraph names the pattern, quotes the detail, and explains the link to the claim.',
          },
          practice: [
            mc(
              'Which thesis is most defensible?',
              [
                'The story uses many symbols.',
                'The author was born in Texas.',
                'The broken clock symbolizes the family’s inability to move past grief.',
                'This essay will be about the clock.',
              ],
              2,
              'Only the third makes a specific, arguable claim about how a detail creates meaning.',
            ),
            short(
              'Write two sentences: one introducing a quotation about a character’s silence, and one explaining how that silence supports a claim about fear.',
              'Model: When the narrator finally asks about the letter, she says only “he looked away.” The refusal to answer suggests that fear, not ignorance, keeps the family silent.',
              [
                'Sentence 1 sets context and quotes briefly.',
                'Sentence 2 interprets the quotation in relation to a claim.',
              ],
              10,
            ),
          ],
        }),
      ],
      quiz('Unit 2 quiz: analytical writing', [
        mc(
          'The purpose of commentary after a quotation is to',
          ['repeat the quotation', 'explain how the evidence supports the claim', 'add a second quotation', 'summarize the plot'],
          1,
          'Commentary connects evidence to the claim; repetition earns no credit.',
        ),
        mc(
          'A thesis that no reasonable person could dispute is usually',
          ['strong', 'a summary rather than an argument', 'too emotional', 'a citation error'],
          1,
          'If it cannot be disputed, it is a fact or summary, not an arguable claim.',
        ),
        mc(
          'The best way to cite a quotation is to',
          ['name the author only', 'give a page or line number', 'say “the book”', 'omit the source'],
          1,
          'A locator lets a reader verify the evidence.',
        ),
      ]),
      project({
        title: 'Analytical paragraph portfolio',
        prompt:
          'Write three analytical paragraphs about one short story, each defending a different claim about a single literary element (character, symbol, or structure).',
        deliverable: 'Three paragraphs of 150–200 words each, with a works-cited entry.',
        guidance: [
          'Each paragraph should open with a claim, not a plot fact.',
          'Every quotation should be short and explained.',
          'Paragraphs should not repeat the same claim in different words.',
        ],
        rubric: [
          rubricRow('Claim quality', 30, [
            ['Excellent', 'Three distinct, arguable claims.', 30],
            ['Proficient', 'Mostly arguable claims.', 24],
            ['Developing', 'Claims are summaries.', 15],
            ['Beginning', 'No clear claims.', 6],
          ]),
          rubricRow('Evidence and commentary', 40, [
            ['Excellent', 'Brief, relevant quotations fully explained.', 40],
            ['Proficient', 'Relevant evidence, some explanation thin.', 32],
            ['Developing', 'Quotations dropped without explanation.', 20],
            ['Beginning', 'Little or no evidence.', 8],
          ]),
          rubricRow('Organization', 20, [
            ['Excellent', 'Logical progression within and across paragraphs.', 20],
            ['Proficient', 'Clear order with minor gaps.', 16],
            ['Developing', 'Order is hard to follow.', 10],
            ['Beginning', 'No discernible organization.', 4],
          ]),
          rubricRow('Conventions and citation', 10, [
            ['Excellent', 'Clean prose and correct citation.', 10],
            ['Proficient', 'Minor errors.', 8],
            ['Developing', 'Citation incomplete.', 5],
            ['Beginning', 'No citation.', 2],
          ]),
        ],
      }),
    ),
    unit(
      'u3',
      'Poetry and figurative language',
      'Poems compress meaning into sound, image, and line breaks.',
      [
        lesson({
          id: 'eng1-u3-l1',
          title: 'Reading a poem in four passes',
          minutes: 50,
          objectives: [
            'Distinguish simile, metaphor, personification, and imagery.',
            'Explain how line breaks and sound devices shape tone.',
          ],
          sections: [
            section('Four passes through a poem', [
              'First pass: read for the situation. Who is speaking, to whom, and about what? Second pass: mark images — the concrete things you can see, hear, or touch. Third pass: notice sound and line breaks. Fourth pass: state a theme and test it against the whole poem, not one line.',
              'Figurative language transfers meaning: a simile compares with like or as, a metaphor states one thing is another, personification gives human qualities to non-human things, and imagery appeals to the senses. A symbol is an image that carries meaning beyond itself and recurs.',
            ]),
            section('Line breaks are punctuation', [
              'Where a line ends changes pace and emphasis. Enjambment runs a sentence across the line break, creating momentum; a caesura is a pause inside a line. Rhyme and meter create expectation, and poets often break that expectation for emphasis.',
              'Tone is the speaker’s attitude; mood is what the reader feels. A poem can have a calm tone and an unsettling mood, and noticing that gap is often the key to interpretation.',
            ]),
          ],
          example: {
            prompt: '“The kettle sings” — is this literal?',
            steps: [
              'Literal reading: a kettle makes noise when water boils.',
              'Figurative reading: “sings” personifies the kettle, suggesting domestic comfort or, in another context, false cheer.',
              'Check context: if the poem is about an empty house, the cheerful verb creates irony.',
            ],
            answer: 'Personification; its meaning depends on the surrounding images and tone.',
          },
          practice: [
            mc(
              '“Her voice was a rusted gate” is an example of',
              ['simile', 'metaphor', 'onomatopoeia', 'hyperbole'],
              1,
              'It states that one thing is another, without like or as, so it is a metaphor.',
            ),
            mc(
              'A sentence that continues past the end of a line is called',
              ['a caesura', 'enjambment', 'a couplet', 'an ode'],
              1,
              'Enjambment is the continuation of syntax across a line break.',
            ),
          ],
        }),
      ],
      quiz('Unit 3 quiz: poetry', [
        mc(
          '“The city coughed all night” mainly uses',
          ['personification', 'simile', 'alliteration only', 'understatement'],
          0,
          'Giving the city the human action of coughing is personification.',
        ),
        mc(
          'Tone differs from mood because tone is',
          ['the reader’s feeling', 'the speaker’s attitude', 'the rhyme scheme', 'the setting'],
          1,
          'Tone belongs to the speaker or author; mood is the feeling created in the reader.',
        ),
        mc(
          'A symbol in a poem is strongest when it',
          ['appears once', 'recurs and gathers meaning', 'rhymes', 'is explained by the poet'],
          1,
          'Recurrence lets an image accumulate associations; a single mention is usually just an image.',
        ),
      ]),
      project({
        title: 'Poem annotation and explication',
        prompt:
          'Choose a poem from the reading list. Annotate it for images, sound devices, and line breaks, then write a 300-word explication that states and supports a theme.',
        deliverable: 'Annotated copy plus a 300-word explication.',
        guidance: [
          'Annotations should mark specific words, not whole stanzas.',
          'The explication should quote at least three short phrases.',
          'The theme must be a claim, not a topic.',
        ],
        rubric: [
          rubricRow('Annotation quality', 30, [
            ['Excellent', 'Specific, insightful marks throughout.', 30],
            ['Proficient', 'Useful marks, some general.', 24],
            ['Developing', 'Few marks or only highlighting.', 15],
            ['Beginning', 'No annotations.', 6],
          ]),
          rubricRow('Analysis of devices', 40, [
            ['Excellent', 'Explains how devices create meaning and tone.', 40],
            ['Proficient', 'Identifies devices with partial explanation.', 32],
            ['Developing', 'Lists devices without effect.', 20],
            ['Beginning', 'No device analysis.', 8],
          ]),
          rubricRow('Theme and evidence', 20, [
            ['Excellent', 'Theme claim supported across the poem.', 20],
            ['Proficient', 'Claim supported in part.', 16],
            ['Developing', 'Vague theme.', 10],
            ['Beginning', 'No theme.', 4],
          ]),
          rubricRow('Conventions', 10, [
            ['Excellent', 'Clear, edited prose.', 10],
            ['Proficient', 'Minor errors.', 8],
            ['Developing', 'Distracting errors.', 5],
            ['Beginning', 'Unclear prose.', 2],
          ]),
        ],
      }),
    ),
    unit(
      'u4',
      'Research and source evaluation',
      'A source is only as good as the question it answers.',
      [
        lesson({
          id: 'eng1-u4-l1',
          title: 'Questions, sources, and citation',
          minutes: 50,
          objectives: [
            'Turn a topic into a research question.',
            'Evaluate a source for authority, accuracy, and purpose.',
          ],
          sections: [
            section('From topic to question', [
              '“School start times” is a topic. “How do later start times affect adolescent sleep and attendance?” is a research question: it names variables and implies what evidence would count. A good question is narrow enough to answer in the assigned length and open enough that sources can disagree.',
              'Write down what you already believe so you can notice when you are only collecting confirming evidence. Deliberately search for the strongest opposing source.',
            ]),
            section('Evaluating a source', [
              'Ask who wrote it, what expertise or stake they have, when it was published, and whether it cites evidence you can check. A government agency, a peer-reviewed journal, and a university research center usually carry more authority than a commercial blog. Authority is not the same as agreement: a credible source can still be wrong on a specific point.',
              'Record the author, title, publisher, date, and URL the moment you take a note. Reconstructing citations later is where accidental plagiarism begins.',
            ]),
          ],
          example: {
            prompt: 'Two sources on later school start times: a district press release and a pediatricians’ policy statement.',
            steps: [
              'Identify purpose: the district is explaining a decision; the professional association is summarizing research.',
              'Check evidence: does each cite data or studies?',
              'Use both: the press release for local details, the policy statement for the research consensus.',
              'Note the limits: a press release is not independent evidence of outcomes.',
            ],
            answer: 'Use each source for what it can actually support, and say so in the paper.',
          },
          practice: [
            mc(
              'Which is the strongest research question?',
              [
                'Why is sleep important?',
                'How do later high-school start times affect attendance in Texas districts?',
                'What do experts say?',
                'Should schools change?',
              ],
              1,
              'It names a population, a variable, and an outcome that evidence could address.',
            ),
            mc(
              'A source’s authority depends most on',
              ['how well it is designed', 'the author’s expertise and the evidence cited', 'whether it agrees with you', 'its length'],
              1,
              'Authority comes from expertise and verifiable evidence, not agreement or presentation.',
            ),
          ],
        }),
      ],
      quiz('Unit 4 quiz: research', [
        mc(
          'The first step in research is to',
          ['write the conclusion', 'form a focused question', 'collect ten sources', 'choose a font'],
          1,
          'A focused question determines what evidence is relevant.',
        ),
        mc(
          'Accidental plagiarism most often happens because',
          ['writers disagree with sources', 'notes are taken without recording source details', 'sources are too long', 'citations are numbered'],
          1,
          'Missing source details make it impossible to cite accurately later.',
        ),
        mc(
          'A government report and an advocacy blog disagree. The best move is to',
          ['ignore both', 'compare their evidence and state the disagreement', 'use only the one you prefer', 'average their claims'],
          1,
          'Explaining the disagreement, with attention to evidence, is stronger than picking a side silently.',
        ),
      ]),
      project({
        title: 'Annotated source set',
        prompt:
          'Assemble four sources that address one research question. For each, write a 100-word annotation covering the author’s claim, the evidence used, the source’s purpose, and its limits.',
        deliverable: 'Four annotations plus a correctly formatted works-cited list.',
        guidance: [
          'At least one source should complicate your initial view.',
          'Annotations should evaluate, not summarize alone.',
          'Citations should be consistent in format.',
        ],
        rubric: [
          rubricRow('Source quality and range', 30, [
            ['Excellent', 'Four credible, varied, relevant sources.', 30],
            ['Proficient', 'Credible sources with limited range.', 24],
            ['Developing', 'Some weak or tangential sources.', 15],
            ['Beginning', 'Sources unusable.', 6],
          ]),
          rubricRow('Evaluation', 40, [
            ['Excellent', 'Claim, evidence, purpose, and limits all addressed.', 40],
            ['Proficient', 'Most elements addressed.', 32],
            ['Developing', 'Summary without evaluation.', 20],
            ['Beginning', 'No evaluation.', 8],
          ]),
          rubricRow('Citation accuracy', 20, [
            ['Excellent', 'Complete and consistent.', 20],
            ['Proficient', 'Minor omissions.', 16],
            ['Developing', 'Missing elements.', 10],
            ['Beginning', 'No citations.', 4],
          ]),
          rubricRow('Clarity', 10, [
            ['Excellent', 'Precise, readable prose.', 10],
            ['Proficient', 'Clear with minor issues.', 8],
            ['Developing', 'Wordy or vague.', 5],
            ['Beginning', 'Hard to follow.', 2],
          ]),
        ],
      }),
    ),
  ],
  finalExam: exam('English I final examination', [
    mc(
      'The term for the event that introduces the central conflict is the',
      ['resolution', 'complicating incident', 'exposition', 'denouement'],
      1,
      'The complicating incident turns the situation into a conflict.',
    ),
    mc(
      'Which sentence contains a metaphor?',
      ['The wind was like a knife.', 'The wind was a knife.', 'The wind blew hard.', 'The wind howled loudly.'],
      1,
      'A metaphor states one thing is another; “like” would make it a simile.',
    ),
    mc(
      'The strongest thesis statement is',
      [
        'This essay is about symbolism.',
        'The novel is long and interesting.',
        'The recurring river imagery shows that the narrator cannot escape his father’s expectations.',
        'The author uses many literary devices.',
      ],
      2,
      'It makes a specific, arguable claim about a pattern and its meaning.',
    ),
    mc(
      'Commentary in an analytical paragraph should',
      ['restate the quotation', 'explain how evidence supports the claim', 'introduce a new topic', 'list page numbers'],
      1,
      'Commentary is the reasoning that connects evidence to claim.',
    ),
    short(
      'Read this passage: “She folded the letter into smaller and smaller squares until it would not fold again.” Write a claim about what the action suggests, then explain how one detail supports it.',
      'Model: The shrinking folds suggest an attempt to contain news she cannot process. “Until it would not fold again” marks the limit of that control, turning a small gesture into a signal of grief.',
      [
        'States a defensible claim about the action.',
        'Uses a specific detail from the passage.',
        'Explains the link between detail and claim.',
      ],
      10,
    ),
    short(
      'Explain the difference between tone and mood, and give an example of a passage where they diverge.',
      'Model: Tone is the speaker’s attitude; mood is the feeling created in the reader. A speaker describing a funeral as “a perfectly efficient affair” has a cool, ironic tone, while the reader feels unease — the gap between them is the point.',
      [
        'Defines tone and mood distinctly.',
        'Provides a concrete example.',
        'Explains why the divergence matters.',
      ],
      10,
    ),
  ]),
};

export const english2: Course = {
  id: 'hs-eng2',
  title: 'English II',
  subject: 'ela',
  grade: 10,
  credits: 1,
  semesters: 2,
  description:
    'World literature and argument. Students analyze how writers persuade, compare texts from different cultures and eras, and build researched arguments with credible sources.',
  essentialQuestions: [
    'How do writers persuade readers who do not share their assumptions?',
    'What changes when a story is told from a different cultural vantage point?',
  ],
  teks: [
    teks('19 TAC ch. 110, English II', 'World literature; argument and persuasive technique; informational text; composition and research.'),
  ],
  weights: HIGH_WEIGHTS,
  units: [
    unit('u1', 'Argument and rhetoric', 'Persuasion works through claims, reasons, and the trust a writer earns.', [
      lesson({
        id: 'eng2-u1-l1',
        title: 'Claim, reason, evidence, warrant',
        minutes: 50,
        objectives: [
          'Distinguish a claim from a reason and from evidence.',
          'Identify the unstated warrant that connects evidence to a claim.',
        ],
        sections: [
          section('The hidden link', [
            'An argument has a claim (what you want accepted), reasons (why), evidence (what supports the reasons), and a warrant (the assumption that lets the evidence count). “We should fund after-school tutoring (claim) because it raises attendance (reason); students who attend more pass more courses (evidence)” rests on the warrant that passing courses is the goal.',
            'Most disagreements are about warrants, not facts. When an argument feels airtight to one person and absurd to another, name the warrant and examine it directly.',
          ]),
          section('Counterarguments are a test, not a formality', [
            'A real counterargument is the strongest version of the opposing view, not a weak version you can knock down. State it fairly, concede what is true, then explain why your claim still holds or how it should be limited.',
            'Concessions make an argument more credible. “Later start times help attendance, though bus schedules and athletics create real constraints” is stronger than pretending the constraints do not exist.',
          ]),
        ],
        example: {
          prompt: 'Claim: the school should ban phones during class. Build one reason and one warrant.',
          steps: [
            'Reason: off-task phone use reduces time on instruction.',
            'Evidence: classroom observation studies linking notifications to task switching.',
            'Warrant: uninterrupted instructional time improves learning.',
            'Counterargument: phones can support accessibility tools — address with an exception policy.',
          ],
          answer: 'A complete argument names the warrant and answers the strongest objection.',
        },
        practice: [
          mc(
            'The unstated assumption connecting evidence to a claim is called the',
            ['warrant', 'rebuttal', 'citation', 'thesis'],
            0,
            'The warrant is the assumption that makes the evidence relevant to the claim.',
          ),
          mc(
            'The strongest counterargument is one that',
            ['is easy to refute', 'states the opposing case fairly and forcefully', 'ignores evidence', 'attacks the author'],
            1,
            'Engaging the strongest version of the other side makes your argument credible.',
          ),
        ],
      }),
    ], quiz('Unit 1 quiz: argument structure', [
      mc('“We should expand the library’s hours because students need quiet study space” — “students need quiet study space” is a', ['claim', 'reason', 'warrant', 'citation'], 1, 'It answers why the claim should be accepted.'),
      mc('A concession in an argument', ['weakens it by definition', 'acknowledges a valid point from the other side', 'changes the topic', 'replaces evidence'], 1, 'Acknowledging a valid opposing point builds credibility and sharpens the argument.'),
      mc('Evidence that does not connect to the claim usually fails because', ['it is too short', 'the warrant is missing or false', 'it is cited', 'it is statistical'], 1, 'Without a plausible warrant, evidence is irrelevant rather than supportive.'),
    ]), project({
      title: 'Argument in the wild',
      prompt: 'Find an op-ed or speech. Reconstruct its claim, reasons, evidence, and warrants in a diagram, then write 250 words evaluating whether the argument succeeds.',
      deliverable: 'A diagram plus a 250-word evaluation.',
      guidance: ['Quote the actual claim.', 'Identify at least one unstated warrant.', 'Judge the argument by its evidence, not by whether you agree.'],
      rubric: [
        rubricRow('Accurate reconstruction', 40, [['Excellent', 'Claim, reasons, evidence, warrants all accurate.', 40], ['Proficient', 'Mostly accurate.', 32], ['Developing', 'Misses key elements.', 20], ['Beginning', 'Misreads the argument.', 8]]),
        rubricRow('Evaluation quality', 40, [['Excellent', 'Judges evidence and warrants specifically.', 40], ['Proficient', 'Reasonable but general.', 32], ['Developing', 'Opinion without analysis.', 20], ['Beginning', 'No evaluation.', 8]]),
        rubricRow('Clarity and citation', 20, [['Excellent', 'Clear prose, correct citation.', 20], ['Proficient', 'Minor issues.', 16], ['Developing', 'Unclear or uncited.', 10], ['Beginning', 'Missing.', 4]]),
      ],
    })),
    unit('u2', 'Rhetorical analysis', 'Ethos, pathos, and logos describe how a text earns belief.', [
      lesson({
        id: 'eng2-u2-l1',
        title: 'Ethos, pathos, logos in context',
        minutes: 50,
        objectives: ['Identify appeals to credibility, emotion, and logic.', 'Explain how an appeal fits its audience and occasion.'],
        sections: [
          section('Three appeals, one situation', [
            'Ethos is credibility: the writer’s expertise, fairness, or shared values. Pathos is emotion: fear, hope, indignation, belonging. Logos is reasoning: facts, examples, and inference. These are not good or bad in themselves; a claim about a child’s safety may reasonably use pathos, while a budget analysis should lean on logos.',
            'Rhetorical analysis does not ask “did this persuade me?” It asks how the text tries to persuade this audience in this moment, and whether the means are honest.',
          ]),
          section('Reading for the occasion', [
            'A speech at a dedication, a letter to the editor, and a product page have different constraints. Notice what the writer assumes the audience already believes, what is left unsaid, and which appeals are doing the heaviest work.',
            'Watch for appeals that substitute for evidence: an expert’s endorsement is not data, and a vivid story is not a trend.',
          ]),
        ],
        example: {
          prompt: 'A mayor’s speech cites a 20% rise in park use and a child’s letter about a new playground.',
          steps: ['Logos: the statistic.', 'Pathos: the child’s letter.', 'Ethos: the mayor’s office as sponsor.', 'Evaluate: the statistic measures use, not health outcomes.'],
          answer: 'The speech combines appeals effectively while making a claim larger than its evidence supports.',
        },
        practice: [
          mc('A doctor’s credentials used to support a health claim appeal mainly to', ['logos', 'pathos', 'ethos', 'kairos'], 2, 'Credentials establish credibility, which is ethos.'),
          mc('A vivid story about one family is weakest as evidence for', ['an emotional point', 'a broad statistical claim', 'a values claim', 'an anecdotal illustration'], 1, 'A single case cannot establish a population-level trend.'),
        ],
      }),
    ], quiz('Unit 2 quiz: rhetorical analysis', [
      mc('The appeal to emotion is', ['ethos', 'pathos', 'logos', 'syllogism'], 1, 'Pathos is the emotional appeal.'),
      mc('Rhetorical analysis primarily asks', ['whether you agree', 'how the text persuades its audience', 'who wrote it', 'how long it is'], 1, 'It studies the means of persuasion in context.'),
      mc('An expert endorsement presented as proof of an empirical claim is weak because', ['experts are usually wrong', 'authority is not data about outcomes', 'endorsements are illegal', 'it uses pathos'], 1, 'Authority supports credibility, not the truth of a factual claim.'),
    ]), project({
      title: 'Rhetorical analysis essay',
      prompt: 'Analyze a published speech. Explain how it uses ethos, pathos, and logos for a specific audience, and evaluate whether the appeals are honest.',
      deliverable: 'A 600–800 word essay with at least three quoted passages.',
      guidance: ['Identify the audience and occasion first.', 'Do not merely list appeals; explain their work.', 'Include a judgment about honesty, supported by evidence.'],
      rubric: [
        rubricRow('Context and thesis', 25, [['Excellent', 'Precise audience, occasion, arguable thesis.', 25], ['Proficient', 'Context present, thesis general.', 20], ['Developing', 'Thin context.', 12], ['Beginning', 'No thesis.', 5]]),
        rubricRow('Analysis of appeals', 45, [['Excellent', 'Explains how each appeal functions.', 45], ['Proficient', 'Identifies appeals with some analysis.', 36], ['Developing', 'Lists appeals.', 22], ['Beginning', 'No analysis.', 9]]),
        rubricRow('Evidence and quotation', 20, [['Excellent', 'Brief, apt quotations explained.', 20], ['Proficient', 'Relevant evidence.', 16], ['Developing', 'Long or unexplained quotation.', 10], ['Beginning', 'No evidence.', 4]]),
        rubricRow('Style', 10, [['Excellent', 'Controlled, varied prose.', 10], ['Proficient', 'Clear.', 8], ['Developing', 'Wordy.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
    unit('u3', 'World literature in context', 'A text’s meaning shifts when you know what it was answering.', [
      lesson({
        id: 'eng2-u3-l1',
        title: 'Context, translation, and theme',
        minutes: 50,
        objectives: ['Research the historical context of a world text.', 'Explain how translation choices affect meaning.'],
        sections: [
          section('Context is evidence, not decoration', [
            'Knowing when and where a text was written helps you see what it argues with. A novel written under censorship reads differently from one written in open debate. Use context to generate interpretations, then test them against the text itself.',
            'Avoid using biography as a master key. “The author was sad” does not explain a complex novel; specific historical pressures, genres, and audiences usually explain more.',
          ]),
          section('Translation is interpretation', [
            'Every translation chooses among meanings. A word that can mean “honor” or “face” forces a choice that changes a character. When you analyze a translated text, note the translator and consider comparing two translations of the same passage.',
            'Theme in world literature often concerns obligations: to family, to state, to faith, to self. Ask which obligation the text treats as binding and which it treats as destructive.',
          ]),
        ],
        example: {
          prompt: 'A novel’s opening calls a village “quiet” in one translation and “silent” in another.',
          steps: ['Quiet suggests peace; silent suggests suppression.', 'Check the original context if available.', 'Ask which reading the rest of the chapter supports.', 'Argue for one with evidence.'],
          answer: 'Translation choices are interpretive evidence, not noise.',
        },
        practice: [
          mc('Historical context is most useful when it', ['replaces reading the text', 'generates and tests interpretations', 'proves the author’s intention', 'dates the cover'], 1, 'Context should sharpen interpretation of the text, not substitute for it.'),
          mc('Comparing two translations of a passage can reveal', ['the author’s birthday', 'interpretive choices about meaning', 'the genre', 'the price'], 1, 'Differences expose decisions translators made about ambiguous language.'),
        ],
      }),
    ], quiz('Unit 3 quiz: world literature', [
      mc('A text’s historical context is best used to', ['prove a single meaning', 'ask better questions of the text', 'avoid quoting', 'summarize the plot'], 1, 'Context informs inquiry rather than settling meaning.'),
      mc('A translator’s choice between two possible meanings is', ['an error', 'an interpretation', 'irrelevant', 'plagiarism'], 1, 'Translation necessarily interprets ambiguous language.'),
      mc('Theme in many world texts centers on', ['weather', 'competing obligations', 'typography', 'publishing dates'], 1, 'Conflicting duties to family, state, faith, and self recur across literatures.'),
    ]), project({
      title: 'Context dossier and essay',
      prompt: 'Choose a world text. Build a one-page dossier of its historical context with three cited sources, then write a 500-word essay showing how that context illuminates one theme.',
      deliverable: 'Dossier plus essay.',
      guidance: ['Sources must be cited.', 'Context should be used to interpret specific passages.', 'Avoid biography-as-explanation.'],
      rubric: [
        rubricRow('Research quality', 30, [['Excellent', 'Three credible, relevant sources.', 30], ['Proficient', 'Relevant sources, thin variety.', 24], ['Developing', 'Weak sources.', 15], ['Beginning', 'No sources.', 6]]),
        rubricRow('Use of context', 40, [['Excellent', 'Context interprets specific passages.', 40], ['Proficient', 'Context connected to theme.', 32], ['Developing', 'Context summarized separately.', 20], ['Beginning', 'No connection.', 8]]),
        rubricRow('Thematic argument', 20, [['Excellent', 'Arguable, well-supported theme.', 20], ['Proficient', 'Clear theme, partial support.', 16], ['Developing', 'Vague theme.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Conventions', 10, [['Excellent', 'Clean prose and citation.', 10], ['Proficient', 'Minor errors.', 8], ['Developing', 'Distracting errors.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
    unit('u4', 'Synthesis and researched argument', 'Good synthesis puts sources in conversation rather than in a row.', [
      lesson({
        id: 'eng2-u4-l1',
        title: 'Synthesis: agreeing, extending, complicating',
        minutes: 55,
        objectives: ['Organize a synthesis by idea rather than by source.', 'Use sources to extend or complicate a claim.'],
        sections: [
          section('Organize by idea', [
            'A summary-by-source paper marches through “Source A says… Source B says….” A synthesis organizes by idea: “Districts that moved start times later saw attendance gains (A), though effects on achievement remain contested (B).” The sources now talk to each other.',
            'Three moves build synthesis: agree and add (“A shows X; B shows X also holds for rural districts”), extend (“A’s finding implies Y, which B tests”), and complicate (“B’s null result limits how far A’s claim travels”).',
          ]),
          section('Let the strongest evidence set the limit', [
            'Your conclusion should be proportionate to your evidence. If two studies find small effects and one finds none, claim a small or uncertain effect. Overclaiming is the most common failure in student research, and it is easy for a reader to catch.',
            'Cite every borrowed idea, not only direct quotations. Paraphrased reasoning still belongs to its author.',
          ]),
        ],
        example: {
          prompt: 'Two sources find later start times improve attendance; one finds no change in grades.',
          steps: ['Claim: later starts improve attendance.', 'Limit: evidence for achievement is mixed.', 'Synthesis: attendance effects are consistent; academic effects need more study.', 'Implication: policy can be justified on attendance grounds alone.'],
          answer: 'A proportionate claim distinguishes what the evidence supports from what it does not.',
        },
        practice: [
          mc('Synthesis is best organized by', ['source', 'idea or claim', 'publication date', 'author last name'], 1, 'Organizing by idea lets sources respond to one another.'),
          mc('If evidence is mixed, the responsible conclusion is', ['strong and confident', 'proportionate and qualified', 'omitted', 'based on the first source'], 1, 'Claims should match the strength and consistency of the evidence.'),
        ],
      }),
    ], quiz('Unit 4 quiz: synthesis', [
      mc('Paraphrased ideas must be cited because', ['they are quotations', 'the reasoning belongs to the source', 'it looks professional', 'teachers require it'], 1, 'Credit follows ideas, not just exact wording.'),
      mc('A paper that discusses one source per paragraph usually lacks', ['citations', 'synthesis', 'a title', 'evidence'], 1, 'Source-by-source organization prevents sources from interacting.'),
      mc('“Extending” a source means', ['disagreeing with it', 'showing how its finding implies or applies to something new', 'quoting it at length', 'summarizing it'], 1, 'Extension builds on a finding by applying or developing it.'),
    ]), project({
      title: 'Researched argument',
      prompt: 'Write a 900–1,200 word argument on a school or community issue, synthesizing at least four credible sources and answering the strongest counterargument.',
      deliverable: 'Essay plus works-cited page.',
      guidance: ['The thesis must be arguable.', 'At least one source should complicate your claim.', 'Cite paraphrases as well as quotations.'],
      rubric: [
        rubricRow('Thesis and argument', 25, [['Excellent', 'Specific, arguable thesis sustained throughout.', 25], ['Proficient', 'Clear thesis, some drift.', 20], ['Developing', 'Vague thesis.', 12], ['Beginning', 'No thesis.', 5]]),
        rubricRow('Synthesis of sources', 30, [['Excellent', 'Sources integrated by idea, including tension.', 30], ['Proficient', 'Sources used, some integration.', 24], ['Developing', 'Source-by-source summary.', 15], ['Beginning', 'Little source use.', 6]]),
        rubricRow('Counterargument and limits', 20, [['Excellent', 'Strongest objection fairly answered.', 20], ['Proficient', 'Objection addressed.', 16], ['Developing', 'Straw-man objection.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Evidence and citation', 15, [['Excellent', 'Accurate, complete citations.', 15], ['Proficient', 'Minor citation gaps.', 12], ['Developing', 'Incomplete citations.', 8], ['Beginning', 'Uncited.', 3]]),
        rubricRow('Organization and style', 10, [['Excellent', 'Coherent, controlled prose.', 10], ['Proficient', 'Clear.', 8], ['Developing', 'Disorganized passages.', 5], ['Beginning', 'Hard to follow.', 2]]),
      ],
    })),
  ],
  finalExam: exam('English II final examination', [
    mc('An unstated assumption that links evidence to a claim is a', ['warrant', 'rebuttal', 'citation', 'thesis'], 0, 'The warrant licenses the inference from evidence to claim.'),
    mc('Pathos refers to', ['credibility', 'emotion', 'logic', 'timing'], 1, 'Pathos is the emotional appeal.'),
    mc('The best synthesis is organized by', ['source', 'idea', 'date', 'length'], 1, 'Organizing by idea allows sources to interact.'),
    mc('A conclusion should be', ['stronger than the evidence', 'proportionate to the evidence', 'unrelated to the evidence', 'omitted'], 1, 'Proportional claims preserve credibility.'),
    short('Explain why a single vivid anecdote cannot establish a broad trend, and describe what evidence would.', 'Model: One case shows that something is possible, not how common it is. Establishing a trend requires a representative sample or population data showing a pattern, ideally with a comparison group.', ['Explains the limits of anecdote.', 'Names what stronger evidence would look like.', 'Uses precise language.'], 10),
    short('Write a thesis for an argument about whether schools should require a personal finance course, then name the strongest counterargument.', 'Model: Texas should require a one-semester personal finance course because... The strongest objection is that required courses crowd out electives and may not change behavior; a response is to integrate the content into existing math and economics courses with assessed projects.', ['Thesis is specific and arguable.', 'Counterargument is fair and strong.', 'Response is plausible.'], 10),
  ]),
};
