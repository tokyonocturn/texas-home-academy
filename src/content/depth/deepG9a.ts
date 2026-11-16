import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** English I (grade 9): plot and character, argument, poetry, research. */
export const DEPTH_G9A: Record<string, LessonDepth> = {
  'eng1-u1-l1': {
    topics: ['characterization'],
    objectives: [
      'Explain how plot works as a chain of causes rather than a list of events.',
      'Analyze how an author reveals character and how character drives conflict.',
    ],
    sections: [
      {
        heading: 'Plot as causal structure',
        paragraphs: [
          'Plot is the arrangement of events by cause and effect, not simply the order in which things happen. Exposition establishes the situation, an inciting incident disturbs it, rising action accumulates consequences, a climax forces a decisive choice, and the resolution shows what has changed. Remove any link and the later events stop making sense.',
          'Conflict is the engine of that chain. External conflict pits a character against another person, society, or nature; internal conflict sets a character against their own fear, loyalty, or desire. Most substantial stories braid the two, so a visible struggle carries an inner one and the climax resolves both at once.',
          'A plot summary that lists events in order misses the structure. A stronger account names the choice that makes later events inevitable and explains why the character could not have acted otherwise. That reasoning is what an essay about plot must do, and it is also how a reader predicts what a story is building toward.',
        ],
      },
      {
        heading: 'Character and motivation',
        paragraphs: [
          'Authors reveal character directly, by telling the reader what a person is like, or indirectly, through speech, action, appearance, and the reactions of others. Indirect characterization asks the reader to infer, which is why a single repeated gesture can say more than a paragraph of description.',
          'Motivation is what a character wants badly enough to act on, and it is usually mixed. A student may want to win a competition and also want to be liked, and the plot happens where those wants collide. Naming the competing desires turns a flat description into an explanation of behavior.',
          'Round characters change in response to events; flat characters serve a function and stay consistent. A dynamic character’s change should be earned by the plot, not announced at the end. When a story feels unconvincing, the usual cause is a change of heart the events did not pay for. Naming what a character wants, what blocks them, and what they will sacrifice is the fastest way to explain why a scene ends as it does. Tracking what a character wants, what blocks them, and what they are willing to sacrifice produces a reading that can be supported with evidence rather than impression. That same triad also predicts how a scene will end, which is why experienced readers notice when a story avoids the choice it has set up.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A runner hides an injury to keep a scholarship. Identify the conflict and predict the climax.',
        steps: [
          'External conflict: the runner against a rival and against the demands of the sport.',
          'Internal conflict: honesty against the fear of losing the scholarship.',
          'The climax should force both at once, such as collapsing mid-race and having to admit the injury.',
        ],
        answer: 'An external and internal conflict braided together; the climax forces the runner to choose honesty over the scholarship.',
      },
    ],
    terms: [
      ['plot', 'events arranged by cause and effect'],
      ['inciting incident', 'the event that sets the main conflict in motion'],
      ['climax', 'the decisive moment that resolves the main conflict'],
      ['internal conflict', 'a struggle within a character’s mind'],
      ['characterization', 'the methods an author uses to reveal a character'],
      ['motivation', 'what a character wants enough to act on'],
    ],
    practice: [
      mc('The inciting incident', ['ends the story', 'sets the main conflict in motion', 'resolves the plot', 'introduces the setting only'], 1, 'It disturbs the initial situation.'),
      mc('Indirect characterization reveals character through', ['direct statements', 'action and speech', 'the title', 'footnotes'], 1, 'Readers infer from behavior.'),
      num('How many conflict types are described here?', 2, 'External and internal.'),
    ],
    review: [
      {
        prompt: 'Why is plot better described as a chain of causes than as a list of events?',
        answer: 'Because each event produces the next, so understanding plot means explaining why later events follow from earlier choices.',
      },
      {
        prompt: 'How does characterization support theme?',
        answer: 'A character’s choices and changes embody the idea the story develops, so characterization makes a theme visible in action.',
      },
    ],
    exercises: [
      'Chart the causal chain of a short story and mark the climax.',
      'Rewrite a scene using indirect characterization instead of direct description.',
    ],
  },
  'eng1-u2-l1': {
    topics: ['commentary'],
    objectives: [
      'Write an arguable, specific thesis that previews the essay’s reasoning.',
      'Integrate evidence with commentary that explains rather than summarizes.',
    ],
    sections: [
      {
        heading: 'Building a thesis',
        paragraphs: [
          'A thesis is a claim about a text that a reasonable reader could dispute. “The novel uses imagery” states a fact and cannot be argued; “the novel’s winter imagery turns grief into a season the family must survive” makes an interpretive claim that requires evidence.',
          'Specificity comes from naming the text’s parts and the relationship between them. A thesis that answers how and why gives the essay its structure, because each body paragraph then develops one part of the claim. A vague thesis leaves the writer summarizing in search of something to prove.',
          'Placement matters less than function. A thesis may appear at the end of an introduction, or it may be delayed in a longer essay, but the reader should know by the end of the first page what is being argued. If the claim only becomes clear in the conclusion, the essay was organized by discovery rather than by argument.',
        ],
      },
      {
        heading: 'Evidence and commentary',
        paragraphs: [
          'Evidence should be selected, not accumulated. A short quotation that contains the exact words doing the work is stronger than a long passage the reader must search. Introducing the quotation with its context and following it with analysis keeps the writer in control of the argument.',
          'Commentary explains how the evidence supports the claim. It answers what the quotation shows, why the author chose that wording, and what a reader should conclude. A practical ratio is one line of evidence to two or three of commentary, because the analysis is the part only the writer can supply.',
          'Plot summary is the most common failure. Retelling what happens feels safe but proves nothing, and a reader who has read the text does not need it. The test for each sentence is whether it would survive in an essay about a book the reader has never opened: if not, it is summary rather than argument. Revision at the paragraph level is mostly a matter of asking whether each sentence advances the claim or merely restates the previous one. Cut the restatements, and the argument becomes shorter and clearer without losing anything a reader needs. Read the paragraph aloud is another test: where you stumble, the logic usually jumps, and where you run out of breath, the sentence probably carries two ideas that deserve separate sentences. A paragraph that can be summarized in one sentence about the text is usually working, and one that can only be summarized as a sequence of events is usually not. That test takes ten seconds and saves a paragraph of revision.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Turn “the poem is sad” into a thesis, then write one commentary sentence for the line “the house kept its lights on.”',
        steps: [
          'Name the device and the effect: the house’s lights personify stubborn hope.',
          'State the claim: the poem treats hope as a habit rather than a feeling.',
          'Commentary: the lights stay on without anyone inside, so hope persists as routine after the people are gone.',
        ],
        answer: 'Thesis: the poem treats hope as a household habit rather than an emotion; commentary explains how the empty lit house carries that idea.',
      },
    ],
    terms: [
      ['thesis', 'an arguable claim that organizes an essay'],
      ['evidence', 'a quotation or detail used to support a claim'],
      ['commentary', 'analysis explaining how evidence supports a claim'],
      ['context', 'information that situates a quotation'],
      ['plot summary', 'retelling events without analysis'],
      ['interpretive claim', 'a statement about meaning that requires support'],
    ],
    practice: [
      mc('Which is a thesis rather than a fact?', ['The poem has four stanzas.', 'The poem’s short lines compress grief into restraint.', 'The poet was born in 1930.', 'The poem rhymes.'], 1, 'It makes an arguable claim about meaning.'),
      mc('The recommended ratio of evidence to commentary is about', ['three to one', 'one to two or three', 'equal', 'none'], 1, 'Commentary should dominate.'),
      num('How many parts must a thesis name to be specific?', 2, 'The text’s parts and their relationship.'),
    ],
    review: [
      {
        prompt: 'What makes a thesis arguable?',
        answer: 'It makes an interpretive claim that a reasonable reader could dispute and that requires evidence to support.',
      },
      {
        prompt: 'How can you tell whether a sentence is summary or commentary?',
        answer: 'Summary retells events, while commentary explains how a detail supports the claim and why the author chose it.',
      },
    ],
    exercises: [
      'Revise three weak thesis statements into arguable claims.',
      'Write one body paragraph with a single quotation and three sentences of commentary.',
    ],
  },
  'eng1-u3-l1': {
    topics: ['line breaks'],
    objectives: [
      'Read a poem in four passes from literal meaning to thematic interpretation.',
      'Explain how line breaks, imagery, and diction create tone.',
    ],
    sections: [
      {
        heading: 'First and second passes: sense and structure',
        paragraphs: [
          'The first pass is literal: read the poem aloud and paraphrase each sentence in plain language. Poetry is compressed, so a paraphrase that sounds clumsy is normal; the goal is to know what is being said before interpreting how it is said.',
          'The second pass attends to structure. Notice where lines break, how stanzas group ideas, whether rhyme and meter are regular or deliberately broken, and where a sentence runs past the line ending. Enjambment pulls the reader forward, while a end-stopped line creates pause and emphasis.',
          'Structure carries meaning. A poem that breaks a sonnet’s expected form may be arguing against its conventions, and a short final stanza can isolate a conclusion. Reading line breaks as choices rather than accidents turns form into evidence.',
        ],
      },
      {
        heading: 'Third and fourth passes: figuration and tone',
        paragraphs: [
          'The third pass examines figurative language: metaphor, simile, personification, symbol, and allusion. For each figure, ask what is being compared, which qualities the comparison selects, and what it makes the reader notice. A metaphor that calls memory a warehouse emphasizes storage and loss rather than warmth.',
          'The fourth pass is about tone, the speaker’s attitude toward the subject. Tone comes from diction, punctuation, rhythm, and the gap between what is said and what is meant. Irony appears when that gap widens, and a poem’s tone may shift between stanzas rather than staying fixed.',
          'Interpretation comes last, and it should be stated as a claim about the whole poem rather than about a single line. The best readings account for difficulty: they explain why the poem resists a simpler meaning instead of ignoring the parts that do not fit. Writing the four passes in order also produces a natural essay structure: the literal reading becomes the introduction, structure and figuration become body paragraphs, and tone and theme become the conclusion. That alignment between method and organization makes a poetry essay easier to write and easier to follow. Keep a copy of the poem beside the draft and check every claim against a specific line, because poetry essays fail most often by drifting into general statements about life that the poem never makes. Quoting a line and then explaining which word does the work is the whole skill, and it improves quickly with practice on short poems. Two quoted lines are usually enough to prove one point.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A poem ends mid-sentence on the word “almost.” Explain the effect of that line break and diction.',
        steps: [
          'The sentence is unfinished, so the line break withholds closure.',
          '“Almost” implies near success and permanent shortfall.',
          'Together they make incompletion the poem’s final subject.',
        ],
        answer: 'The unfinished sentence and the word “almost” leave the reader in the state the poem describes.',
      },
    ],
    terms: [
      ['line break', 'where a poet ends one line and begins the next'],
      ['enjambment', 'a sentence continuing past the line ending without pause'],
      ['imagery', 'language that appeals to the senses'],
      ['diction', 'a writer’s choice of words'],
      ['tone', 'the speaker’s attitude toward the subject'],
      ['irony', 'a gap between what is said and what is meant'],
    ],
    practice: [
      mc('Enjambment tends to', ['stop the reader', 'pull the reader forward', 'rhyme', 'end a stanza'], 1, 'The sentence continues across the break.'),
      mc('Tone is created mainly by', ['page length', 'diction and rhythm', 'the title’s font', 'the author’s age'], 1, 'Word choice and sound create attitude.'),
      num('How many passes does this lesson describe?', 4, 'Literal, structural, figurative, tonal.'),
    ],
    review: [
      {
        prompt: 'Why should interpretation come after literal reading?',
        answer: 'You cannot judge how a poem means something until you know what it is saying and how its parts are arranged.',
      },
      {
        prompt: 'How do line breaks create meaning?',
        answer: 'They control pace and emphasis, isolating words or pulling the reader across a pause to create tension or surprise.',
      },
    ],
    exercises: [
      'Annotate a poem in four passes and write a paragraph on one line break.',
      'Rewrite a stanza as prose and explain what the line breaks were adding.',
    ],
  },
  'eng1-u4-l1': {
    topics: ['research question'],
    objectives: [
      'Narrow a topic into an answerable research question.',
      'Evaluate sources for credibility and cite them accurately.',
    ],
    sections: [
      {
        heading: 'From topic to question',
        paragraphs: [
          'A research question guides inquiry and must be answerable with evidence. “Social media” is a topic, “does social media affect teenagers” is broad, and “how do short-form video platforms affect sleep duration among high school students” can be investigated with studies and data.',
          'Narrowing happens along several dimensions: population, place, time, and outcome. Naming each makes the question precise and reveals what kind of evidence would answer it. A question that cannot be answered by any available evidence is a belief, not a research question.',
          'Good questions also imply a debate. If everyone already agrees, there is nothing to argue, so the writer should look for disagreement among credible sources. Finding that disagreement early prevents the common problem of writing an essay that reports consensus and calls it analysis.',
        ],
      },
      {
        heading: 'Sources and citation',
        paragraphs: [
          'Primary sources are original materials such as data, interviews, letters, or the text itself; secondary sources analyze primary material. Both are useful, but a research paper should rest on primary evidence where possible and use secondary sources for context and interpretation.',
          'Credibility depends on authorship, publication process, date, and evidence. A peer-reviewed study, a government report, and a newspaper investigation carry different weight from an anonymous post. Checking who wrote a source, who published it, and what it cites takes a minute and prevents most errors.',
          'Citation has two purposes: letting a reader find the source and showing which ideas are yours. Record author, title, publisher, date, and location at the moment of note-taking. Whether the format is MLA or APA, consistency and completeness matter more than ornament, and a bibliography is not a substitute for in-text citation. Keeping a running source list as you read is the single most reliable defense against accidental plagiarism, because the alternative is reconstructing where an idea came from after it has already entered your draft. Numbering each note and matching it to a numbered entry in the source list takes seconds and makes the final citation pass mechanical rather than anxious. Sources change during a project, so date each note; a page number that no longer matches the edition you cite is a small error that undermines a reader’s confidence in everything else. Build the list in alphabetical order as you go, and the final works-cited page is already mostly finished when the draft is. Checking each entry against the source once, at the end, catches the missing dates that reviewers look for first.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Narrow “school start times” into a research question and name the evidence you would need.',
        steps: [
          'Specify population and outcome: high school students and attendance.',
          'Specify place and time: Texas districts since 2015.',
          'Evidence needed: district attendance records plus published studies.',
        ],
        answer: 'Do Texas high schools that start after 8:30 a.m. show higher attendance than earlier-starting districts?',
      },
    ],
    terms: [
      ['research question', 'a focused question answerable with evidence'],
      ['primary source', 'original material produced at the time or by participants'],
      ['secondary source', 'an analysis or interpretation of primary material'],
      ['credibility', 'the trustworthiness of a source'],
      ['citation', 'a reference identifying where information came from'],
      ['peer review', 'expert evaluation before publication'],
    ],
    practice: [
      mc('Which is a primary source for a history paper?', ['a textbook chapter', 'a diary from the period', 'an encyclopedia entry', 'a documentary summary'], 1, 'Diaries are original material.'),
      mc('A research question must be', ['broad', 'answerable with evidence', 'a personal opinion', 'uncontroversial'], 1, 'Evidence must be able to answer it.'),
      num('How many narrowing dimensions are named here?', 4, 'Population, place, time, and outcome.'),
    ],
    review: [
      {
        prompt: 'How do you narrow a topic into a research question?',
        answer: 'Specify the population, place, time, and outcome so the question is focused enough to be answered with evidence.',
      },
      {
        prompt: 'What should you check to judge a source’s credibility?',
        answer: 'Check the author’s expertise, the publication process, the date, and whether the source supports its claims with evidence.',
      },
    ],
    exercises: [
      'Write three research questions on one topic and rank them by answerability.',
      'Build an annotated bibliography of four sources with a credibility note for each.',
    ],
  },
};
