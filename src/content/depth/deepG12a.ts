import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** English IV: British and world literature (grade 12) depth pass. */
export const DEPTH_G12A: Record<string, LessonDepth> = {
  'eng4-u1-l1': {
    topics: ['Old English'],
    objectives: [
      'Trace the development of English from Old English through the Renaissance.',
      'Build a literary argument about a passage using historical and textual evidence.',
    ],
    sections: [
      {
        heading: 'From Old English to the Renaissance stage',
        paragraphs: [
          'Old English is the language of Beowulf, composed perhaps around 700–1000 and preserved in a single manuscript copied about 1000. Its verse does not rhyme but alliterates: stressed words begin with the same sound, and a caesura divides each line. Reading a modern translation beside the original shows how much a translator decides, since “hwæt” can become “Listen,” “So,” or “Attend.”',
          'The Norman Conquest of 1066 made French the language of court and law, and Middle English emerged as a mixture. Chaucer’s Canterbury Tales, begun around 1387, uses London English and frames stories inside a pilgrimage, so the teller shapes the tale. The Wife of Bath’s prologue is a literary argument about authority in marriage, delivered by a character who quotes scripture against scripture.',
          'The Renaissance brought classical models, the printing press, and the public theater. Shakespeare’s Hamlet, first performed around 1600, uses soliloquy to make a mind visible, and Macbeth (c. 1606) turns ambition into imagery of blood and darkness. Drama is written to be performed, so stage directions, entrances, and silences carry meaning that a page alone can hide.',
        ],
      },
      {
        heading: 'Arguing about a passage',
        paragraphs: [
          'A literary argument begins with an interpretive claim that a reasonable reader could dispute. “Hamlet delays” states a fact; “Hamlet’s delay is a performance for an audience he cannot see” makes a claim requiring evidence. The thesis should name the text’s parts and the relationship between them so the essay has a structure.',
          'Evidence is quoted precisely and analyzed. A single line — “the play’s the thing / Wherein I’ll catch the conscience of the king” — contains the metaphor of theater as trap, and the commentary must explain what that metaphor assumes about guilt. Quotation without analysis is summary with someone else’s words.',
          'Historical context supports rather than replaces reading. Knowing that revenge tragedy was a popular genre makes Hamlet’s hesitation a deliberate variation, and knowing that boy actors played women’s roles changes how we hear a heroine’s lines. The strongest essays use context to explain a choice a modern reader might otherwise miss. Students should also practice reading verse aloud, since Old English alliteration and Shakespearean blank verse are easier to hear than to scan silently, and a performance reveals emphasis the page conceals. Keeping a quotation log by act and scene makes the later essay fast to write and hard to misattribute. Comparing a translation with the facing-page original is also a lesson in how much a translator decides, which is why editions should be cited by translator and year, and it makes a claim about fidelity testable rather than impressionistic, which is why the edition belongs in the citation beside the translator’s name, since a translation is itself an authored work.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Analyze the alliteration and caesura in a Beowulf line about the sea, and state what the form does.',
        steps: [
          'Mark the stressed alliterating words at the start of each half-line.',
          'Note the caesura that pauses the line in the middle.',
          'Argue that the pattern makes the line feel carved and memorable, suited to oral performance.',
        ],
        answer: 'Alliteration across a medial caesura gives the line a heavy, memorable shape that supports oral recitation.',
      },
    ],
    terms: [
      ['alliteration', 'repetition of initial consonant sounds in stressed syllables'],
      ['caesura', 'a pause dividing a line of verse'],
      ['Middle English', 'the English of roughly 1100–1500, after Norman French influence'],
      ['soliloquy', 'a speech in which a character alone reveals inner thought'],
      ['revenge tragedy', 'a genre built on a wronged protagonist seeking vengeance'],
      ['interpretive claim', 'a statement about meaning that requires evidence'],
    ],
    practice: [
      mc('The Norman Conquest occurred in', ['1066', '1387', '1600', '1660'], 0, '1066.'),
      mc('Beowulf is written in', ['Middle English', 'Old English', 'Early Modern English', 'Latin'], 1, 'Old English.'),
      num('About what year did Chaucer begin The Canterbury Tales?', 1387, '1387.'),
    ],
    review: [
      {
        prompt: 'How does Old English verse differ from modern English poetry?',
        answer: 'It alliterates rather than rhymes, divides each line with a caesura, and stresses sounds instead of counting syllables.',
      },
      {
        prompt: 'What makes a literary thesis arguable?',
        answer: 'It makes an interpretive claim about the text that a reasonable reader could dispute and that requires quoted evidence to support.',
      },
    ],
    exercises: [
      'Compare two translations of the opening of Beowulf and justify a preference.',
      'Write a paragraph on one Hamlet soliloquy with two quotations and commentary.',
    ],
  },
  'eng4-u2-l1': {
    topics: ['Romanticism'],
    objectives: [
      'Analyze Romantic and Victorian poetry for form, image, and argument.',
      'Explain how Victorian prose responds to industrialization and doubt.',
    ],
    sections: [
      {
        heading: 'Romantic poetry and the turn inward',
        paragraphs: [
          'Romanticism, roughly 1789–1832, privileged imagination, nature, and the individual. Wordsworth’s preface to Lyrical Ballads (1800) argued for ordinary language, and “Tintern Abbey” (1798) makes memory a source of moral continuity. Keats’s odes of 1819 turn an urn or a nightingale into a meditation on permanence and loss.',
          'Form carries the argument. A sonnet’s fourteen lines and turn suit a single movement of thought, which is why Wordsworth’s “Composed upon Westminster Bridge” can spend twelve lines describing a city and then reverse into feeling. An ode’s elevated address and stanzas allow a speaker to circle a question without resolving it.',
          'Shelley’s “Ozymandias” (1818) uses a framed narration — a traveler reports a sculptor’s work — to make a claim about power and time. The poem’s irony depends on the gap between the inscription’s boast and the surrounding wreck, and that gap is the evidence a student analyzes rather than summarizes.',
        ],
      },
      {
        heading: 'Victorian prose, doubt, and social critique',
        paragraphs: [
          'Victorian writing, roughly 1832–1901, responded to industrial cities, empire, and new science. Dickens’s Hard Times (1854) attacks utilitarian education through repeated imagery of facts, and his serial publication shaped plots around monthly suspense. The novel as a form could hold a whole society in a way poetry could not.',
          'Tennyson’s In Memoriam (1850) works through grief and geological time, and its “Nature, red in tooth and claw” line registers the challenge of evolutionary theory to comfortable faith. Browning’s dramatic monologues, such as “My Last Duchess” (1842), let a speaker condemn himself while describing a portrait, so the reader must judge a voice the poem never corrects.',
          'The period’s debates still structure literary study: realism versus romance, art for art’s sake versus social purpose, and the question of who gets to be represented. An essay that names a Victorian debate and then shows how one text takes a side is arguing historically rather than merely describing. Students should also notice how publication shaped form: serial novels built suspense between installments, and periodical poems answered current events within weeks. Comparing a Victorian poem with a modern response to the same question shows how form carries a period’s assumptions, and that comparison is a strong basis for a comparative essay. Students should also notice meter and stanza shape as arguments: a regular rhythm broken once draws attention to that break, so scansion is evidence rather than decoration. Marking stresses and pauses in the margin takes five minutes and prevents the vaguest kind of claim about a poem’s rhythm, and it gives an essay concrete evidence for a claim about sound, which is otherwise the hardest thing to argue in writing without technical vocabulary that a general reader may not share.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain how “My Last Duchess” makes the speaker condemn himself.',
        steps: [
          'The speaker reveals jealousy over a smile he could not control.',
          'He reports having “given commands,” implying his wife’s death.',
          'He then turns immediately to negotiating a dowry, revealing his priorities.',
        ],
        answer: 'The monologue’s casual cruelty and abrupt return to business expose the speaker without the poet commenting.',
      },
    ],
    terms: [
      ['Romanticism', 'a movement valuing imagination, nature, and individual feeling'],
      ['ode', 'a lyric poem addressing a subject in elevated form'],
      ['dramatic monologue', 'a poem spoken by a character to an implied listener'],
      ['serialization', 'publishing a novel in installments'],
      ['irony', 'a gap between what is said and what is meant or known'],
      ['realism', 'depicting ordinary life with social and material detail'],
    ],
    practice: [
      mc('Wordsworth’s preface to Lyrical Ballads appeared in', ['1798', '1800', '1818', '1850'], 1, 'The preface is dated 1800; the poems first appeared in 1798.'),
      num('How many lines does a sonnet have?', 14, 'Fourteen.'),
      mc('In Memoriam was published in', ['1832', '1842', '1850', '1854'], 2, '1850.'),
    ],
    review: [
      {
        prompt: 'How does poetic form support a poem’s argument?',
        answer: 'Form controls movement and emphasis, so a sonnet’s turn or an ode’s repeated stanzas can stage a shift in thought that the words alone would not.',
      },
      {
        prompt: 'How does a dramatic monologue create irony?',
        answer: 'The speaker reveals more than he intends, so the reader judges him by evidence the poem never explicitly comments on.',
      },
    ],
    exercises: [
      'Scan and analyze one Romantic sonnet, marking the turn.',
      'Write an essay paragraph connecting a Victorian text to one period debate.',
    ],
  },
  'eng4-u3-l1': {
    topics: ['modernism'],
    objectives: [
      'Analyze modernist form, including fragmentation and stream of consciousness.',
      'Read postcolonial and world literature with attention to language and power.',
    ],
    sections: [
      {
        heading: 'Modernism and the broken mirror',
        paragraphs: [
          'Modernism, roughly 1900–1945, responded to world war and rapid change by breaking familiar forms. Eliot’s The Waste Land (1922) assembles fragments from many traditions, and its notes point readers outward rather than inward. Pound’s “In a Station of the Metro” compresses a scene into two lines, trusting juxtaposition over explanation.',
          'Woolf’s Mrs Dalloway (1925) and Joyce’s Ulysses (1922) use stream of consciousness to render thought as it moves, which means plot becomes less important than the shape of attention. A single day can hold a life, and the narrator’s shifts inside a character’s mind replace the omniscient Victorian voice.',
          'Yeats’s “The Second Coming” (1919) uses apocalyptic imagery to describe a political moment without naming it, which is why the poem is quoted in crises it was not written about. Modernist difficulty is intentional: the reader is asked to assemble meaning, and that effort is part of the argument about a fragmented world.',
        ],
      },
      {
        heading: 'World literature, empire, and language',
        paragraphs: [
          'Postcolonial writing examines what empire left behind. Achebe’s Things Fall Apart (1958) answers colonial narratives by giving Igbo society its own interiority, and its use of proverbs makes oral tradition part of the novel’s structure. Conrad’s Heart of Darkness (1899) is read both as a critique of empire and as an example of its assumptions, which is why Achebe’s 1977 essay is assigned alongside it.',
          'Language is a site of power. Ngũgĩ wa Thiong’o stopped writing creative work in English, arguing that colonized languages carry colonial structures, while Achebe chose English to reach a wide audience and reshaped it with Igbo idiom. Comparing those positions turns a question about style into a question about politics.',
          'World literature also requires attention to translation and reception. A novel read in translation has passed through another writer’s choices, and a text’s meaning changes with the audience that receives it. Naming the translator and the year of translation is part of citing evidence honestly. Students should also practice reading a postcolonial novel against a colonial one, noting what each assumes about who speaks and who is spoken for. That pairing produces the kind of argument the course rewards: a claim about form and power supported by quoted language rather than by summary of plot. A useful exercise is to rewrite one paragraph of a modernist passage in straightforward chronological prose, then explain what was lost when the fragments were removed. The comparison makes clear that difficulty is a choice with an effect rather than a failure of clarity, and it prepares students for later texts that are difficult on purpose, where patience is part of the reading method and rereading is expected rather than remedial, which is why assigned passages are short.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain how a two-line imagist poem can carry an argument.',
        steps: [
          'Identify the two juxtaposed images and what each suggests.',
          'Note the absence of connective explanation.',
          'Argue that the gap forces the reader to produce the comparison, which is the poem’s meaning.',
        ],
        answer: 'Juxtaposition without explanation makes the reader construct the comparison, so compression itself becomes the argument.',
      },
    ],
    terms: [
      ['modernism', 'early twentieth-century writing that experiments with form'],
      ['stream of consciousness', 'narration that follows thought’s movement'],
      ['imagism', 'a movement favoring precise images over explanation'],
      ['postcolonial', 'writing that examines the legacy of empire'],
      ['juxtaposition', 'placing images side by side without explanation'],
      ['translation', 'rendering a text into another language'],
    ],
    practice: [
      num('In what year was The Waste Land published?', 1922, '1922.'),
      mc('Ulysses was published in', ['1900', '1919', '1922', '1925'], 2, '1922.'),
      mc('Achebe’s Things Fall Apart appeared in', ['1899', '1958', '1977', '1925'], 1, '1958.'),
    ],
    review: [
      {
        prompt: 'Why is modernist difficulty often intentional?',
        answer: 'Because fragmented form makes the reader assemble meaning, which enacts the argument that experience no longer arrives whole.',
      },
      {
        prompt: 'What does Achebe’s use of proverbs accomplish?',
        answer: 'It embeds Igbo oral tradition in the novel’s structure, giving the society its own voice rather than describing it from outside.',
      },
    ],
    exercises: [
      'Annotate a modernist passage for fragmentation and shifts in voice.',
      'Compare two positions on writing in a colonial language and take a side.',
    ],
  },
  'eng4-u4-l1': {
    topics: ['research paper'],
    objectives: [
      'Construct a research question and select credible primary and secondary sources.',
      'Integrate sources with citation and revise a paper for argument and clarity.',
    ],
    sections: [
      {
        heading: 'From question to sources',
        paragraphs: [
          'A research paper answers a question, not a topic. “Shakespeare’s fools” is a topic; “how does Feste’s wit expose the limits of Olivia’s household in Twelfth Night” can be argued with textual evidence. A good question is narrow enough to answer in the assigned length and broad enough to require sources.',
          'Primary sources are the texts and documents themselves; secondary sources are scholarly interpretations. A paper should rest on primary evidence first and use secondary work to situate the argument, not to supply it. A general encyclopedia is a starting point for vocabulary, not a citable authority in a literary argument.',
          'Credibility depends on author, venue, date, and evidence. Peer-reviewed journals and university presses carry more weight than study guides, and a source that never quotes the text cannot support a close reading. Recording page numbers and editions at the moment of reading prevents the citation errors that undermine an otherwise strong paper.',
        ],
      },
      {
        heading: 'Citation, integration, and revision',
        paragraphs: [
          'MLA style gives author and page in text and a works-cited entry listing author, title, container, publisher, date, and location. Every borrowed idea needs a citation whether quoted or paraphrased, and a bibliography alone does not mark which sentences are borrowed. Consistency matters more than memorizing every edge case.',
          'Integration means a lead-in, a quotation, and commentary. A quotation dropped without context forces the reader to guess who is speaking and why it matters, and a paragraph of quotation followed by one sentence of comment leaves the analysis undone. The commentary should name the words doing the work.',
          'Revision is re-argument. A reverse outline, summarizing each paragraph in one sentence, exposes redundancy and paragraphs that only summarize. After structure is sound, edit sentences for clarity and only then proofread. Keeping drafts with notes on what changed turns revision into evidence of thinking rather than a final polish. A research paper also needs a clear method: state the question, explain which sources were used and why, and acknowledge what the evidence cannot settle. That honesty about limits is what distinguishes a researched argument from an opinion with footnotes, and it is the standard a reader will apply first. Keeping a research log with dates, searches, and rejected sources also makes the final citation list accurate, since reconstructing it from memory is where most errors begin. Building the works-cited list as sources are read also shows at a glance which claims still lack support, so the final revision is a check rather than a rescue, and the paper is stronger for it, because a reader can follow the evidence rather than trusting a claim.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Turn “fools in Shakespeare” into a research question and name the evidence you would need.',
        steps: [
          'Choose one play and one function: Feste and Olivia’s household.',
          'Frame a claim about wit exposing limits of authority.',
          'Evidence: quoted exchanges plus two scholarly articles on festivity and power.',
        ],
        answer: 'How does Feste’s wit expose the limits of Olivia’s authority in Twelfth Night, and what do critics say about festivity and power?',
      },
    ],
    terms: [
      ['research question', 'a focused question answerable with evidence'],
      ['primary source', 'the original text or document under study'],
      ['secondary source', 'a scholarly interpretation of primary material'],
      ['works cited', 'the formatted source list in MLA style'],
      ['integration', 'introducing and explaining a quotation'],
      ['reverse outline', 'summarizing paragraphs to test structure'],
    ],
    practice: [
      mc('A primary source for a Shakespeare paper is', ['a study guide', 'the play’s text', 'an encyclopedia', 'a film review'], 1, 'The text itself.'),
      mc('Every paraphrased idea requires', ['no citation', 'a citation', 'a footnote only', 'a bibliography entry only'], 1, 'Paraphrase still needs credit.'),
      num('How many elements does an MLA works-cited entry need at minimum here?', 6, 'Author, title, container, publisher, date, and location: six.'),
    ],
    review: [
      {
        prompt: 'How is a research question different from a topic?',
        answer: 'A question can be answered with evidence and implies an argument, while a topic merely names a subject to explore.',
      },
      {
        prompt: 'Why is a reverse outline useful in revision?',
        answer: 'It shows whether each paragraph advances the thesis, exposes redundancy, and identifies paragraphs that only summarize.',
      },
    ],
    exercises: [
      'Build an annotated bibliography of four sources with a credibility note each.',
      'Reverse-outline a draft and rewrite one paragraph that lacks commentary.',
    ],
  },
};
