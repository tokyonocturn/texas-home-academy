import type { Course } from '../../types';
import { HIGH_WEIGHTS } from '../weights';
import { exam, lesson, mc, project, quiz, rubricRow, section, short, teks, unit } from '../builders';

/** English III (American literature) and English IV (British/world literature and transition writing). */

export const english3: Course = {
  id: 'hs-eng3',
  title: 'English III: American Literature',
  subject: 'ela',
  grade: 11,
  credits: 1,
  semesters: 2,
  description:
    'American literature from the colonial period to the present, with an emphasis on how writers argue about national identity, freedom, and opportunity. Students write a researched paper and deliver a presentation.',
  essentialQuestions: [
    'Whose version of America appears in a given text, and who is left out?',
    'How does a writer’s historical moment shape the argument a text can make?',
  ],
  teks: [
    teks('19 TAC ch. 110, English III', 'American literature across periods; rhetorical and literary analysis; researched composition; presentation.'),
  ],
  weights: HIGH_WEIGHTS,
  units: [
    unit('u1', 'American voices, American arguments', 'Literature is one place a nation argues with itself.', [
      lesson({
        id: 'eng3-u1-l1',
        title: 'Reading a period through its texts',
        minutes: 55,
        objectives: ['Situate a text in its period without reducing it to that period.', 'Compare how two texts define freedom.'],
        sections: [
          section('Periods are arguments, not costumes', [
            'Labels such as “Romanticism” or “Realism” describe clusters of assumptions about truth, self, and society. They help you ask why a writer chose a form, but they do not explain a specific text. Use the label to generate a question, then answer it with evidence from the page.',
            'American literature repeatedly returns to questions of who counts as a citizen, what freedom costs, and whether the frontier is promise or theft. Tracking one question across texts from different periods produces a stronger paper than summarizing each period.',
          ]),
          section('Compare by claim, not by author', [
            'A comparison earns credit when it states a relationship: “Both texts treat self-reliance as virtue, but Douglass makes it collective while Emerson makes it individual.” Then support both halves with evidence.',
          ]),
        ],
        example: {
          prompt: 'Compare two texts that praise self-reliance.',
          steps: ['State the shared value.', 'Show where they diverge.', 'Quote evidence for each side.', 'Explain what the divergence reveals about each writer’s audience.'],
          answer: 'A comparison is a claim about relationship, supported on both sides.',
        },
        practice: [
          mc('A literary period label is most useful as', ['proof of a text’s meaning', 'a question-generating context', 'a substitute for evidence', 'a citation format'], 1, 'Periods generate questions; evidence answers them.'),
          mc('A comparison paragraph earns credit mainly by', ['summarizing both texts', 'stating and supporting a relationship between them', 'quoting at length', 'naming the authors'], 1, 'Comparison requires an explicit relationship plus evidence.'),
        ],
      }),
    ], quiz('Unit 1 quiz: American literature', [
      mc('“Realism” as a period label generally points to', ['idealized nature', 'attention to ordinary life and social conditions', 'strict rhyme', 'science fiction'], 1, 'Realism emphasizes ordinary experience and social detail.'),
      mc('Tracking one question across periods produces', ['a summary', 'an argument about change and continuity', 'a timeline', 'a biography'], 1, 'A recurring question lets you argue about how treatments change.'),
      mc('Comparison claims require evidence from', ['one text only', 'both texts', 'the author’s biography', 'reviews'], 1, 'Both sides of a comparison need support.'),
    ]), project({
      title: 'Freedom across three texts',
      prompt: 'Trace one definition of freedom across three American texts from different periods in a 700-word essay.',
      deliverable: 'Essay with quotations from all three texts and a works-cited page.',
      guidance: ['Define the version of freedom you are tracking.', 'Show change or continuity, not just three summaries.'],
      rubric: [
        rubricRow('Thesis', 25, [['Excellent', 'Arguable claim about change or continuity.', 25], ['Proficient', 'Clear claim.', 20], ['Developing', 'Vague.', 12], ['Beginning', 'None.', 5]]),
        rubricRow('Evidence from three texts', 45, [['Excellent', 'Apt quotations, fully explained.', 45], ['Proficient', 'Evidence present, some thin.', 36], ['Developing', 'Uneven evidence.', 22], ['Beginning', 'Little evidence.', 9]]),
        rubricRow('Organization', 20, [['Excellent', 'Progression by idea.', 20], ['Proficient', 'Clear order.', 16], ['Developing', 'Text-by-text summary.', 10], ['Beginning', 'Disordered.', 4]]),
        rubricRow('Conventions', 10, [['Excellent', 'Clean.', 10], ['Proficient', 'Minor errors.', 8], ['Developing', 'Distracting.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
    unit('u2', 'The researched paper', 'A research question is a promise you can keep with evidence.', [
      lesson({
        id: 'eng3-u2-l1',
        title: 'Question, sources, and annotated bibliography',
        minutes: 55,
        objectives: ['Refine a research question into a workable scope.', 'Write an evaluative annotation.'],
        sections: [
          section('Scope is a kindness to your reader', [
            '“Immigration in America” cannot be answered in eight pages. “How did the 1965 Immigration and Nationality Act change family-based immigration from Asia?” can. Scope by time, place, population, and question type.',
            'Write your question as a sentence with a because-clause: “I am studying X because I want to understand Y.” If the because-clause is vague, the question is not ready.',
          ]),
          section('The annotated bibliography as thinking tool', [
            'Each annotation should state the source’s claim, its evidence, its purpose, and how it changes your argument. If an annotation only summarizes, it is not doing its job. Group annotations by the sub-claim they support and gaps become visible.',
          ]),
        ],
        example: {
          prompt: 'Topic: school lunch policy. Narrow it.',
          steps: ['Time: since the 2010 Healthy, Hunger-Free Kids Act.', 'Place: Texas districts.', 'Population: high-school students.', 'Question: how did updated nutrition standards change participation and waste?'],
          answer: 'A scoped question names time, place, population, and outcome.',
        },
        practice: [
          mc('The most workable research question is', ['What is education?', 'How did a 2019 Texas law change dual-credit funding?', 'Why is school important?', 'What do people think about school?'], 1, 'It is scoped by place, time, and a specific policy.'),
          mc('An annotation that only summarizes', ['evaluates the source', 'fails to assess evidence and use', 'is too long', 'is plagiarism'], 1, 'Annotation must evaluate, not just summarize.'),
        ],
      }),
    ], quiz('Unit 2 quiz: research', [
      mc('Scope should be limited by', ['font size', 'time, place, population, and outcome', 'the number of quotations', 'the author’s age'], 1, 'These dimensions make a question answerable.'),
      mc('Grouping annotations by sub-claim reveals', ['gaps in evidence', 'the publication year', 'the citation style', 'the word count'], 0, 'Organizing by sub-claim shows which parts of the argument lack support.'),
      mc('A because-clause in a research statement clarifies', ['the font', 'motive and significance', 'the citation', 'the page limit'], 1, 'It states why the question matters.'),
    ]), project({
      title: 'Annotated bibliography',
      prompt: 'Build an annotated bibliography of six sources for your research question, organized by the sub-claims they support.',
      deliverable: 'Six annotations of 100–150 words each plus a research question statement.',
      guidance: ['Include at least one source that complicates your view.', 'State each source’s limits.'],
      rubric: [
        rubricRow('Source quality', 30, [['Excellent', 'Six credible, relevant sources.', 30], ['Proficient', 'Mostly credible.', 24], ['Developing', 'Weak sources.', 15], ['Beginning', 'Unusable.', 6]]),
        rubricRow('Evaluation', 40, [['Excellent', 'Claim, evidence, purpose, limits assessed.', 40], ['Proficient', 'Most elements.', 32], ['Developing', 'Summary only.', 20], ['Beginning', 'None.', 8]]),
        rubricRow('Organization', 20, [['Excellent', 'Grouped by sub-claim with gaps named.', 20], ['Proficient', 'Grouped.', 16], ['Developing', 'Alphabetical only.', 10], ['Beginning', 'Unordered.', 4]]),
        rubricRow('Citation', 10, [['Excellent', 'Consistent and complete.', 10], ['Proficient', 'Minor gaps.', 8], ['Developing', 'Incomplete.', 5], ['Beginning', 'Missing.', 2]]),
      ],
    })),
    unit('u3', 'Style and the presentation', 'Precise sentences and a clear delivery are part of the argument.', [
      lesson({
        id: 'eng3-u3-l1',
        title: 'Sentence variety and spoken argument',
        minutes: 50,
        objectives: ['Revise for concision and sentence variety.', 'Deliver a short argument with clear structure.'],
        sections: [
          section('Cut, then vary', [
            'Start revision by cutting: “due to the fact that” becomes “because”; “in order to” becomes “to.” Then vary sentence length deliberately. A short sentence after two long ones lands hard. Read your draft aloud; the places you run out of breath are the places to split.',
            'Precision beats formality. “The policy reduced participation by 12%” is stronger than “the policy had a negative impact on participation.”',
          ]),
          section('Delivery as structure', [
            'A spoken argument needs a signposted shape: claim, two reasons with evidence, one objection answered, and a close that repeats the claim in light of the evidence. Practice with a timer. Eye contact and pace matter more than memorization.',
          ]),
        ],
        example: {
          prompt: 'Revise: “Due to the fact that the data was analyzed by researchers, it is able to be seen that there was a reduction.”',
          steps: ['Cut nominalizations: “was analyzed by researchers” → “researchers analyzed.”', 'Replace passive with active.', 'Name the finding.'],
          answer: '“Researchers found a reduction.”',
        },
        practice: [
          mc('The clearest revision of “had a negative impact on” is', ['impacted negatively', 'reduced', 'was detrimental to', 'had an adverse effect upon'], 1, 'A concrete verb is clearer than nominalized impact language.'),
          mc('A spoken argument should include', ['only claims', 'a claim, evidence, and an answered objection', 'a long quotation', 'apologies'], 1, 'Structure and engagement with objection make it an argument.'),
        ],
      }),
    ], quiz('Unit 3 quiz: style and delivery', [
      mc('“Due to the fact that” can usually be replaced by', ['because', 'however', 'therefore', 'moreover'], 0, 'It is a wordy way of saying because.'),
      mc('Sentence variety is created by', ['uniform length', 'deliberate changes in length and structure', 'longer words', 'passive voice'], 1, 'Variation is a deliberate rhetorical choice.'),
      mc('Answering an objection in a speech', ['weakens it', 'strengthens credibility', 'wastes time', 'is optional'], 1, 'Addressing the strongest objection increases credibility.'),
    ]), project({
      title: 'Researched argument and presentation',
      prompt: 'Write a 1,000-word researched argument and deliver a 4-minute presentation of it.',
      deliverable: 'Essay plus presentation notes or recording.',
      guidance: ['Use at least five credible sources.', 'Include a slide or handout with your key evidence.'],
      rubric: [
        rubricRow('Argument', 30, [['Excellent', 'Sustained, specific, well-supported.', 30], ['Proficient', 'Clear argument.', 24], ['Developing', 'Inconsistent.', 15], ['Beginning', 'None.', 6]]),
        rubricRow('Research and citation', 25, [['Excellent', 'Five credible sources, accurate citation.', 25], ['Proficient', 'Adequate sources.', 20], ['Developing', 'Thin sourcing.', 12], ['Beginning', 'Uncited.', 5]]),
        rubricRow('Presentation', 25, [['Excellent', 'Clear structure, pacing, engagement.', 25], ['Proficient', 'Clear delivery.', 20], ['Developing', 'Reads notes heavily.', 12], ['Beginning', 'Unprepared.', 5]]),
        rubricRow('Style', 20, [['Excellent', 'Concise, varied, precise.', 20], ['Proficient', 'Clear.', 16], ['Developing', 'Wordy.', 10], ['Beginning', 'Unclear.', 4]]),
      ],
    })),
  ],
  finalExam: exam('English III final examination', [
    mc('A period label is best used as', ['proof', 'context that generates questions', 'a citation', 'a summary'], 1, 'Labels guide inquiry rather than proving meaning.'),
    mc('A workable research question is limited by', ['time, place, population, and outcome', 'font and margin', 'quotation count', 'author age'], 0, 'Those dimensions make it answerable.'),
    mc('“Due to the fact that” is usually replaced by', ['because', 'although', 'therefore', 'meanwhile'], 0, 'Because is the concise equivalent.'),
    mc('An annotated bibliography should', ['summarize only', 'evaluate claim, evidence, purpose, and limits', 'list titles', 'quote at length'], 1, 'Evaluation is the point of annotation.'),
    short('Explain how a writer’s historical moment can shape an argument without determining it.', 'Model: Available audiences, censorship, and events set the questions a writer can raise and the evidence they can publish, but craft and individual judgment still produce choices the moment does not dictate. Reading context as pressure, not causation, keeps the text’s agency visible.', ['Distinguishes context from determinism.', 'Gives a mechanism.', 'Uses precise language.'], 10),
    short('Revise this sentence for concision and explain your change: “It is important to note that the researchers were able to discover a significant number of students who were not in attendance.”', 'Model: “Researchers found many students absent.” The revision removes expletives and nominalizations and replaces vague quantity with a direct object.', ['Produces a concise revision.', 'Explains the specific edits.', 'Preserves meaning.'], 10),
  ]),
};

export const english4: Course = {
  id: 'hs-eng4',
  title: 'English IV: British and World Literature',
  subject: 'ela',
  grade: 12,
  credits: 1,
  semesters: 2,
  description:
    'Senior English: literary tradition and translation, college and scholarship writing, technical and workplace documents, and media literacy for civic life.',
  essentialQuestions: [
    'How do old texts keep speaking to new problems?',
    'What does clear writing look like when the audience is a committee, an employer, or a public reader?',
  ],
  teks: [
    teks('19 TAC ch. 110, English IV', 'British and world literature; advanced composition; technical writing; media literacy; research.'),
  ],
  weights: HIGH_WEIGHTS,
  units: [
    unit('u1', 'Tradition and translation', 'Inherited stories are tools people keep reshaping.', [
      lesson({
        id: 'eng4-u1-l1',
        title: 'Allusion, genre, and the long conversation',
        minutes: 50,
        objectives: ['Trace an allusion to its source and explain its work in a new text.', 'Distinguish parody, adaptation, and allusion.'],
        sections: [
          section('Allusion is a shortcut with a cost', [
            'An allusion borrows meaning from an earlier text. When a modern novel titles a chapter “Netherfield,” it expects readers to bring associations from Pride and Prejudice. The borrowing enriches the new text but also depends on readers recognizing it, which excludes some readers and flatters others.',
            'Parody imitates in order to critique; adaptation retells for a new medium or context; allusion briefly gestures. Naming which one a text is doing sharpens your analysis.',
          ]),
          section('Genre sets expectations', [
            'A sonnet, a gothic novel, and a detective story each promise certain pleasures and impose constraints. Strong writers satisfy the expectation and then complicate it. Track where a text fulfills a convention and where it refuses to.',
          ]),
        ],
        example: {
          prompt: 'A story calls its decaying mansion “Wuthering.”',
          steps: ['Identify the source and its associations.', 'Note the difference: this house is in Texas, not Yorkshire.', 'Explain the effect: the borrowed name signals inherited grief in a new setting.'],
          answer: 'The allusion imports atmosphere while the changed setting creates irony.',
        },
        practice: [
          mc('An adaptation differs from an allusion because an adaptation', ['briefly references', 'retells the work in a new context', 'critiques the original', 'ignores the original'], 1, 'Adaptation retells; allusion gestures.'),
          mc('Genre conventions are useful to analyze because writers', ['always follow them', 'both satisfy and complicate them', 'ignore them', 'invent them'], 1, 'The interesting analysis is where fulfillment turns into complication.'),
        ],
      }),
    ], quiz('Unit 1 quiz: tradition', [
      mc('Parody primarily', ['retells faithfully', 'imitates in order to critique', 'avoids reference', 'translates'], 1, 'Parody is critical imitation.'),
      mc('An allusion depends on', ['the reader’s recognition', 'a footnote', 'rhyme', 'length'], 0, 'Its meaning relies on shared literary knowledge.'),
      mc('A text that fulfills a genre convention and then breaks it is', ['incoherent', 'using convention as a baseline for surprise', 'plagiarizing', 'unfinished'], 1, 'Deviation is meaningful against an established expectation.'),
    ]), project({
      title: 'Allusion trace',
      prompt: 'Choose a modern text that alludes to an older one. Trace three allusions and argue what the borrowing accomplishes.',
      deliverable: 'A 600-word essay with quotations from both texts.',
      guidance: ['Cite both sources.', 'Explain effect, not just identification.'],
      rubric: [
        rubricRow('Identification', 25, [['Excellent', 'Three accurate allusions.', 25], ['Proficient', 'Two accurate.', 20], ['Developing', 'One accurate.', 12], ['Beginning', 'Inaccurate.', 5]]),
        rubricRow('Analysis of effect', 45, [['Excellent', 'Explains how borrowing creates meaning.', 45], ['Proficient', 'Some analysis.', 36], ['Developing', 'Identification only.', 22], ['Beginning', 'None.', 9]]),
        rubricRow('Evidence', 20, [['Excellent', 'Quotations from both texts.', 20], ['Proficient', 'Evidence from one.', 16], ['Developing', 'Thin.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Style', 10, [['Excellent', 'Controlled.', 10], ['Proficient', 'Clear.', 8], ['Developing', 'Wordy.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
    unit('u2', 'College and scholarship writing', 'A personal statement is an argument about character, not a diary entry.', [
      lesson({
        id: 'eng4-u2-l1',
        title: 'The personal statement that earns a second read',
        minutes: 55,
        objectives: ['Choose a specific moment that reveals a trait.', 'Show growth without claiming transformation you cannot support.'],
        sections: [
          section('Specific beats impressive', [
            'Admission readers read thousands of essays about winning the big game. They remember the essay about learning to repair a bicycle brake because the writer shows patience, diagnosis, and humility in concrete detail. Choose one scene small enough to render precisely.',
            'The essay should reveal a trait the reader could not infer from your transcript: how you handle failure, how you work with others, what you notice. It is not a résumé in prose.',
          ]),
          section('Structure: scene, turn, reflection', [
            'Open in the scene, not in abstraction. Show the problem, the decision, and the consequence. Then reflect: what did you understand afterward that you did not understand then? Keep the reflection proportionate — one honest insight is stronger than a claimed transformation.',
          ]),
        ],
        example: {
          prompt: 'Draft an opening for an essay about a part-time job.',
          steps: ['Start mid-scene: a specific customer, a specific problem.', 'Include one sensory detail.', 'End the paragraph with the tension the essay will resolve.'],
          answer: 'Concrete scene + tension, no thesis statement in the first sentence.',
        },
        practice: [
          mc('The strongest personal statement topic is', ['a list of achievements', 'one specific moment that reveals a trait', 'a summary of your transcript', 'a general statement about hard work'], 1, 'Specificity and reflection distinguish a memorable essay.'),
          mc('Reflection in a personal statement should be', ['dramatic and total', 'proportionate to the experience', 'omitted', 'written by someone else'], 1, 'Proportionate insight reads as honest.'),
        ],
      }),
    ], quiz('Unit 2 quiz: application writing', [
      mc('Admission essays should primarily reveal', ['grades', 'character and judgment', 'test scores', 'family income'], 1, 'Transcripts show grades; essays show how you think and act.'),
      mc('The best opening is usually', ['a thesis statement', 'a concrete scene', 'a definition', 'a quotation'], 1, 'A scene earns attention and grounds reflection.'),
      mc('A claim of transformation should be', ['as large as possible', 'supported by the narrative', 'avoided entirely', 'repeated'], 1, 'Unsupported claims read as exaggeration.'),
    ]), project({
      title: 'Application essay portfolio',
      prompt: 'Write a 650-word personal statement and a 300-word scholarship essay for a specific award.',
      deliverable: 'Two essays plus a one-paragraph note on the audience and constraints of each.',
      guidance: ['Read the prompt and word limit carefully.', 'Have a reader mark the sentence where the essay becomes specific.'],
      rubric: [
        rubricRow('Specificity', 30, [['Excellent', 'Concrete scenes and details.', 30], ['Proficient', 'Mostly specific.', 24], ['Developing', 'General.', 15], ['Beginning', 'Clichéd.', 6]]),
        rubricRow('Reflection', 30, [['Excellent', 'Insightful and proportionate.', 30], ['Proficient', 'Clear insight.', 24], ['Developing', 'Thin reflection.', 15], ['Beginning', 'None.', 6]]),
        rubricRow('Fit to prompt', 25, [['Excellent', 'Answers the specific prompt within limits.', 25], ['Proficient', 'Mostly on prompt.', 20], ['Developing', 'Drifts.', 12], ['Beginning', 'Ignores prompt.', 5]]),
        rubricRow('Style', 15, [['Excellent', 'Voice and clarity.', 15], ['Proficient', 'Clear.', 12], ['Developing', 'Uneven.', 8], ['Beginning', 'Unclear.', 3]]),
      ],
    })),
    unit('u3', 'Workplace and technical writing', 'Documents are judged by whether a busy reader can act on them.', [
      lesson({
        id: 'eng4-u3-l1',
        title: 'Résumés, emails, and instructions',
        minutes: 50,
        objectives: ['Write achievement statements with verbs and numbers.', 'Format a document for scanning.'],
        sections: [
          section('Show, do not label', [
            '“Responsible for cash register” describes a duty. “Reconciled a $2,000 daily drawer with zero shortages over eight months” shows a result. Begin bullets with strong verbs and include a number where one exists. Never invent a number.',
            'A résumé is scanned in seconds. Use one page for early-career applicants, consistent dates, and reverse-chronological order. Keep formatting simple so automated systems can read it.',
          ]),
          section('Email and instructions', [
            'A professional email states the purpose in the subject line and the first sentence, gives necessary context in two or three sentences, and ends with a specific request and deadline. Instructions work best as numbered steps with one action per step and a warning before the risky step, not after.',
          ]),
        ],
        example: {
          prompt: 'Rewrite “Helped customers with problems” as an achievement statement.',
          steps: ['Choose a precise verb: resolved.', 'Add the setting: front-desk customer issues.', 'Add a measured result only if true.'],
          answer: '“Resolved 30+ customer issues weekly at the front desk, escalating policy exceptions to the manager.”',
        },
        practice: [
          mc('The strongest résumé bullet is', ['Responsible for social media', 'Managed social media', 'Grew a school club account from 80 to 1,200 followers in five months', 'Good at social media'], 2, 'It uses a verb and a specific, verifiable result.'),
          mc('Instructions are clearest when', ['written as a paragraph', 'numbered with one action per step', 'include warnings after the step', 'omit context'], 1, 'One action per numbered step reduces error.'),
        ],
      }),
    ], quiz('Unit 3 quiz: technical writing', [
      mc('A résumé bullet should begin with', ['a noun', 'a strong verb', 'an adjective', 'a date'], 1, 'Verbs convey action and ownership.'),
      mc('A professional email should state its purpose', ['only at the end', 'in the subject line and first sentence', 'in a footnote', 'nowhere'], 1, 'Busy readers need the purpose immediately.'),
      mc('A warning in instructions belongs', ['after the step', 'before the risky step', 'in an appendix', 'only in training'], 1, 'Warnings must precede the action they protect.'),
    ]), project({
      title: 'Career document set',
      prompt: 'Create a one-page résumé, a cover letter for a real posting, and a one-page instruction sheet for a task you know well.',
      deliverable: 'Three documents, each formatted for its reader.',
      guidance: ['Every résumé claim must be true and specific.', 'The instruction sheet should be testable by another person.'],
      rubric: [
        rubricRow('Résumé', 35, [['Excellent', 'Specific, quantified, scannable.', 35], ['Proficient', 'Clear with some duties.', 28], ['Developing', 'Duty lists.', 18], ['Beginning', 'Unformatted.', 7]]),
        rubricRow('Cover letter', 25, [['Excellent', 'Tailored to the posting with evidence.', 25], ['Proficient', 'Relevant.', 20], ['Developing', 'Generic.', 12], ['Beginning', 'Missing.', 5]]),
        rubricRow('Instructions', 30, [['Excellent', 'Testable, ordered, safe.', 30], ['Proficient', 'Usable.', 24], ['Developing', 'Ambiguous steps.', 15], ['Beginning', 'Unusable.', 6]]),
        rubricRow('Conventions', 10, [['Excellent', 'Error-free.', 10], ['Proficient', 'Minor errors.', 8], ['Developing', 'Distracting.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
    unit('u4', 'Media literacy and civic argument', 'A claim travels faster than its correction.', [
      lesson({
        id: 'eng4-u4-l1',
        title: 'Verifying before sharing',
        minutes: 50,
        objectives: ['Trace a claim to its original source.', 'Identify common misleading techniques.'],
        sections: [
          section('Lateral reading', [
            'Professional fact-checkers do not stay on the page; they open new tabs and find out who is behind the claim. Ask: what is the original source, what does it actually say, and who benefits from this framing? A screenshot is not a source; find the underlying document.',
            'Common techniques include cherry-picked time ranges, misleading axes, decontextualized quotations, and headlines that outrun the article. Each has a counter-move: check the full range, read the axis, find the full quote, read past the headline.',
          ]),
          section('Arguing in public', [
            'Civic argument works better when it states the strongest version of the opposing view, separates facts from values, and proposes something testable. “We disagree about whether the tax is worth the service” is a clearer disagreement than trading statistics.',
          ]),
        ],
        example: {
          prompt: 'A post claims a chart proves crime doubled. The chart starts at a pandemic low.',
          steps: ['Find the original data.', 'Check the time range.', 'Compare with a longer baseline.', 'Report the specific problem rather than “fake news.”'],
          answer: 'The technique is a cherry-picked baseline; the correction names the range and gives context.',
        },
        practice: [
          mc('Lateral reading means', ['reading slowly', 'opening other sources to check a claim', 'reading only headlines', 'trusting experts'], 1, 'Fact-checkers leave the page to verify the source.'),
          mc('A chart that begins at an unusual low point is likely', ['accurate', 'cherry-picking a baseline', 'peer reviewed', 'randomized'], 1, 'The baseline choice exaggerates change.'),
        ],
      }),
    ], quiz('Unit 4 quiz: media literacy', [
      mc('A screenshot of a claim is', ['a primary source', 'not sufficient verification', 'peer review', 'a citation'], 1, 'You must locate the original document.'),
      mc('A headline that outruns its article is an example of', ['accurate summary', 'decontextualization', 'peer review', 'data visualization'], 1, 'The claim exceeds what the article supports.'),
      mc('Civic argument improves when participants', ['hide their values', 'separate factual disputes from value disputes', 'avoid evidence', 'use more statistics'], 1, 'Naming the kind of disagreement clarifies it.'),
    ]), project({
      title: 'Verification report',
      prompt: 'Find a viral claim. Trace it to its origin, evaluate the evidence, and write a 400-word correction that a general reader could follow.',
      deliverable: 'The report plus links to every source you used.',
      guidance: ['Quote the original claim exactly.', 'Explain the technique used to mislead, if any.', 'Avoid mocking the reader who shared it.'],
      rubric: [
        rubricRow('Tracing', 35, [['Excellent', 'Reaches the original source.', 35], ['Proficient', 'Partial trace.', 28], ['Developing', 'Secondary sources only.', 18], ['Beginning', 'No trace.', 7]]),
        rubricRow('Evaluation', 35, [['Excellent', 'Names techniques and evidence precisely.', 35], ['Proficient', 'Clear evaluation.', 28], ['Developing', 'General skepticism.', 18], ['Beginning', 'None.', 7]]),
        rubricRow('Correction writing', 20, [['Excellent', 'Clear, fair, actionable.', 20], ['Proficient', 'Understandable.', 16], ['Developing', 'Confusing.', 10], ['Beginning', 'Unclear.', 4]]),
        rubricRow('Sourcing', 10, [['Excellent', 'Every claim linked.', 10], ['Proficient', 'Most linked.', 8], ['Developing', 'Few links.', 5], ['Beginning', 'None.', 2]]),
      ],
    })),
  ],
  finalExam: exam('English IV final examination', [
    mc('An adaptation differs from an allusion by', ['briefly referencing', 'retelling in a new context', 'critiquing', 'translating'], 1, 'Adaptation retells; allusion gestures.'),
    mc('A strong résumé bullet includes', ['a duty description', 'a verb and a verifiable result', 'an adjective', 'a character reference'], 1, 'Verbs and results show impact.'),
    mc('Lateral reading requires', ['staying on the page', 'checking other sources', 'reading only the headline', 'trusting the author'], 1, 'Verification happens off the page.'),
    mc('The strongest personal statement focuses on', ['a list of awards', 'one specific moment of growth', 'a summary of coursework', 'a general claim about hard work'], 1, 'Specificity and reflection distinguish it.'),
    short('Describe how you would verify a claim that a new state policy reduced dropout rates by half.', 'Model: Locate the original policy and the agency data, identify the years and definitions used, compare with prior trends and independent analyses, and check whether the change is attributed to the policy or to other factors.', ['Identifies the primary source.', 'Checks definitions and time range.', 'Considers alternative explanations.'], 10),
    short('Write a two-sentence reflection suitable for a personal statement about a time you revised your approach after failing at something.', 'Model: After the first build collapsed, I stopped guessing at the joint and measured each cut twice. The second version held — and taught me that patience is a form of respect for the material.', ['Specific moment.', 'Proportionate insight.', 'Concrete detail.'], 10),
  ]),
};
