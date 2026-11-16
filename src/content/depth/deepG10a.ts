import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** English II and Speech (grade 10) depth pass. */
export const DEPTH_G10A: Record<string, LessonDepth> = {
  'eng2-u1-l1': {
    topics: ['close reading'],
    objectives: [
      'Close-read a passage from world literature for detail, diction, and structure.',
      'Explain how an author builds theme through characterization across a whole work.',
    ],
    sections: [
      {
        heading: 'Close reading across languages and cultures',
        paragraphs: [
          'World literature arrives in translation, and translation is an interpretation. Chinua Achebe wrote Things Fall Apart in English but built it from Igbo proverbs and speech rhythms, while translators of Dostoevsky or García Márquez choose between literal fidelity and readable style. Comparing two translations of the same paragraph shows students that word choice carries culture, not just meaning.',
          'Close reading begins with observation before interpretation: note repeated words, shifts in tense or person, and where a paragraph turns. In Achebe’s novel, the repeated image of locusts links a natural event to the arrival of missionaries, so the metaphor does interpretive work the plot alone does not.',
          'Context matters more in world literature than in a single national tradition. A reader who knows that Okonkwo’s clan measures status through titles and yam harvests understands his fear of weakness differently than a reader who does not. Reading the introduction and the publication date is part of the assignment, not extra credit.',
        ],
      },
      {
        heading: 'Theme and characterization',
        paragraphs: [
          'Round characters change under pressure, and the change is the argument a novel makes. Okonkwo’s rigidity is tested by his son’s conversion and by colonial courts; his refusal to adapt becomes the theme’s evidence. A character who merely illustrates a lesson is propaganda, while one whose choices cost something is literature.',
          'Theme emerges from the intersection of character, conflict, and ending. A novel that ends with a district commissioner reducing a man’s life to a paragraph is arguing about who gets to write history, not merely reporting a death. Stating that argument in one sentence, then showing where the text supports it, is the core skill of literary analysis.',
          'Characterization in translation also depends on honorifics and pronouns. French distinguishes tu and vous, Spanish tú and usted, and Japanese honorific suffixes; a translator must decide whether to keep them or explain them. Noticing those choices teaches students that grammar itself can carry social meaning. A final useful habit is to read the ending twice: once for what happens to the characters and once for what the last image leaves the reader holding. In a novel like Things Fall Apart, the closing paragraph steps outside the story to a colonial administrator’s notebook, and that shift in perspective is the argument. Writing about world literature therefore means holding plot, language, and framing in view at once, and quoting the specific sentences where the framing changes. Keeping a quotation log with page numbers turns that work into evidence rather than impression.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A passage shifts from past tense narration into a proverb in the present tense. Explain the effect.',
        steps: [
          'Identify the shift and quote both sides of it.',
          'Note that proverbs state general truths, while narration reports events.',
          'Argue that the shift elevates the moment from one man’s fate to a communal lesson.',
        ],
        answer: 'The tense shift moves the scene from event to communal wisdom, so the reader feels the loss as a cultural judgment.',
      },
    ],
    terms: [
      ['close reading', 'careful analysis of a short passage’s language and structure'],
      ['theme', 'an arguable idea a work develops about life'],
      ['characterization', 'the methods an author uses to reveal character'],
      ['translation', 'rendering a text from one language into another'],
      ['motif', 'a recurring image or phrase that develops meaning'],
      ['context', 'the historical and cultural setting that shapes meaning'],
    ],
    practice: [
      mc('Close reading should begin with', ['evaluation', 'observation of detail', 'the author’s biography', 'the title'], 1, 'Observe before interpreting.'),
      mc('A round character is one who', ['never changes', 'changes under pressure', 'serves one function', 'narrates the story'], 1, 'Change under pressure defines roundness.'),
      num('How many languages are named as pronoun examples here?', 3, 'French, Spanish, and Japanese.'),
    ],
    review: [
      {
        prompt: 'Why does translation count as interpretation?',
        answer: 'Every translation chooses among possible equivalents, so it emphasizes some meanings and loses others, which shapes how a reader understands the text.',
      },
      {
        prompt: 'How does characterization support theme?',
        answer: 'A character’s choices under pressure embody the idea the work argues, so the outcome of those choices becomes evidence for the theme.',
      },
    ],
    exercises: [
      'Compare two translations of one paragraph and list three differences with effects.',
      'Write a paragraph arguing a theme, quoting three passages from a world literature text.',
    ],
  },
  'eng2-u2-l1': {
    topics: ['rhetorical appeals'],
    objectives: [
      'Analyze how ethos, pathos, and logos operate in a sustained argument.',
      'Identify fallacies and evaluate whether evidence supports a claim.',
    ],
    sections: [
      {
        heading: 'The three appeals in sustained argument',
        paragraphs: [
          'Ethos is credibility, built by credentials, fairness, and consistency. A writer who names the strongest opposing view before answering it earns trust, while one who hides a funding source loses it. In Martin Luther King Jr.’s “Letter from Birmingham Jail,” ethos comes from his willingness to concede that some criticism of his tactics is fair before arguing that the timing is not.',
          'Pathos works through concrete human detail rather than adjectives. A statistic about infant mortality moves fewer readers than one child’s name and fever, and that is a legitimate rhetorical choice when the detail is true. Overusing pathos backfires because readers sense manipulation and begin to doubt the evidence.',
          'Logos is the structure of reasons: claims supported by evidence, warrants that connect them, and conclusions that follow. A strong logos paragraph anticipates objections and answers them, which is why argument essays often include a concession clause — “although standardized tests predict first-year grades, they predict later performance poorly.”',
        ],
      },
      {
        heading: 'Fallacies and evidence quality',
        paragraphs: [
          'Fallacies fail as reasoning. Ad hominem attacks the speaker, straw man misstates the opposition, false dilemma removes middle options, and slippery slope asserts an inevitable chain without evidence. Either-or framing and appeals to popularity appear constantly in advertising and political speech.',
          'Evidence quality varies by kind. Peer-reviewed research and official statistics carry more weight than anecdote, and correlation is not causation: ice cream sales and drowning rise together because both follow summer heat. A writer who says “studies show” without naming one invites skepticism.',
          'Evaluation also asks what the argument leaves out. An opinion piece about school start times that never mentions transportation costs is not necessarily wrong, but its silence limits its conclusion. Naming the omission is stronger than accusing the writer of bias, because it points to checkable evidence. Persuasion also depends on timing and occasion: a letter written from a jail cell carries moral weight that the same sentences in a campaign speech would not. Students should ask who the audience is, what the writer wants them to do, and what constraints shaped the text. Answering those three questions before identifying appeals keeps rhetorical analysis from becoming a labeling exercise, and it produces the kind of reading that can survive contact with a difficult, uncomfortable argument. Practicing on a speech you disagree with is the best training, because it forces attention to technique instead of agreement. Keep a two-column chart of appeals and fallacies while reading, then write one sentence explaining which appeal does the most work and why the others support it.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A op-ed argues: “Our mayor’s plan failed, and he was a businessman, so businesspeople cannot govern.” Diagnose the reasoning.',
        steps: [
          'The conclusion about businesspeople generalizes from one case.',
          'Calling the plan a failure asserts the outcome without evidence.',
          'The attack shifts from the policy to the person’s background, an ad hominem flavored with hasty generalization.',
        ],
        answer: 'Hasty generalization plus ad hominem; the argument never examines the plan’s actual results.',
      },
    ],
    terms: [
      ['ethos', 'the appeal to the speaker’s credibility'],
      ['pathos', 'the appeal to emotion'],
      ['logos', 'the appeal to logic and evidence'],
      ['warrant', 'the assumption that connects evidence to a claim'],
      ['concession', 'acknowledging a valid point on the other side'],
      ['hasty generalization', 'concluding from too few cases'],
    ],
    practice: [
      mc('“Studies show” without naming a study weakens', ['pathos', 'logos', 'ethos', 'diction'], 2, 'Unnamed evidence damages credibility.'),
      mc('A straw man argument', ['answers the strongest objection', 'misstates the opposition', 'cites data', 'concedes a point'], 1, 'It replaces the real position with a weaker one.'),
      num('How many appeals are named in this lesson?', 3, 'Ethos, pathos, logos.'),
    ],
    review: [
      {
        prompt: 'What makes an appeal to ethos credible?',
        answer: 'Relevant expertise, honesty about limits and funding, fairness toward opponents, and consistency between the writer’s claims and actions.',
      },
      {
        prompt: 'Why can overusing pathos backfire?',
        answer: 'Readers notice when emotion substitutes for evidence, and the sense of manipulation makes them distrust the argument’s other claims.',
      },
    ],
    exercises: [
      'Annotate a speech for all three appeals and one fallacy.',
      'Rewrite a fallacious paragraph so its reasoning becomes valid.',
    ],
  },
  'eng2-u3-l1': {
    topics: ['imagery'],
    objectives: [
      'Identify figurative language and explain how imagery creates tone.',
      'Analyze poetic form, including meter, rhyme, and lineation, as meaning.',
    ],
    sections: [
      {
        heading: 'Figurative language and imagery',
        paragraphs: [
          'Figurative language compares or substitutes: a metaphor states one thing is another, a simile uses like or as, personification gives human qualities to nonhuman things, and metonymy substitutes an associated object for a concept, as when “the crown” means the monarch. Synecdoche uses a part for a whole, as in “all hands on deck.”',
          'Imagery is language that appeals to the senses, and it is more than decoration. In Wilfred Owen’s “Dulce et Decorum Est,” the image of a soldier drowning in gas replaces patriotic abstraction with physical detail, and that replacement is the argument. Strong imagery selects details that carry judgment.',
          'Tone is the speaker’s attitude, and it is built from diction, syntax, and image choice together. A poem that calls a corpse “a thing” has already told the reader how to feel. Tracking tone shifts across stanzas is often the fastest route to a poem’s meaning.',
        ],
      },
      {
        heading: 'Poetic form as argument',
        paragraphs: [
          'Meter organizes stressed and unstressed syllables. Iambic pentameter has five iambs per line and dominates English blank verse, which Shakespeare used in his plays and Frost used in “Mending Wall.” A regular meter broken at one line draws attention to that line.',
          'Rhyme schemes are labeled with letters, so ABAB describes alternating rhyme and AABB describes couplets. A sonnet’s fourteen lines and turn, or volta, usually mark a shift in argument, as in Shakespeare’s Sonnet 18, where the turn arrives with “But thy eternal summer shall not fade.”',
          'Lineation matters in free verse too. Enjambment runs a sentence past the line break, creating momentum or suspense, while an end-stopped line closes a thought. Reading a poem aloud and pausing only where punctuation allows reveals the pace the poet intended. Sound devices reinforce that pace: alliteration links stressed words, assonance creates internal echo, and consonance can make a line feel hard or soft depending on the consonants chosen. A reader who marks stresses, rhyme, and punctuation in the margin has a map of the poem’s movement, and that map is the evidence for any claim about tone. Practicing on short poems builds the habit quickly, because every choice is visible in a few lines and the effect of changing one word becomes obvious, and that experiment is worth writing down as evidence. A poem read this way stops being a puzzle to decode and becomes a structure to describe, which is exactly what an analytical paragraph needs. Naming the device is only the first step; explaining its effect completes the analysis, and the effect is always argued from the words on the page.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Analyze “the fog comes / on little cat feet” for figure, imagery, and lineation.',
        steps: [
          'The fog is compared to a cat without like or as, so it is a metaphor.',
          'The image is tactile and quiet, suggesting stealth rather than weather.',
          'The line break after “comes” delays the comparison, mimicking the fog’s arrival.',
        ],
        answer: 'A metaphor of fog as a cat, carried by tactile imagery and a delaying line break that enacts the arrival.',
      },
    ],
    terms: [
      ['metaphor', 'a direct comparison stating one thing is another'],
      ['imagery', 'language that appeals to the senses'],
      ['meter', 'the pattern of stressed and unstressed syllables in verse'],
      ['enjambment', 'a sentence continuing past a line break without pause'],
      ['volta', 'the turn or shift in a sonnet’s argument'],
      ['synecdoche', 'using a part to represent the whole'],
    ],
    practice: [
      mc('“All hands on deck” is an example of', ['metaphor', 'synecdoche', 'simile', 'irony'], 1, 'A part stands for the whole.'),
      num('How many lines does a sonnet have?', 14, 'Fourteen lines.'),
      mc('Enjambment usually', ['stops the line', 'carries the sentence forward', 'rhymes', 'ends a stanza'], 1, 'The sentence continues.'),
    ],
    review: [
      {
        prompt: 'How is imagery different from decoration?',
        answer: 'Imagery selects sensory details that carry meaning and judgment, so it advances the argument rather than merely ornamenting it.',
      },
      {
        prompt: 'Why does lineation matter in free verse?',
        answer: 'Line breaks control pace, emphasis, and suspense, so they shape how a reader experiences the sentence even without meter or rhyme.',
      },
    ],
    exercises: [
      'Scan four lines of iambic pentameter and mark stresses.',
      'Write a paragraph on one image, explaining diction, sense, and effect.',
    ],
  },
  'eng2-u4-l1': {
    topics: ['citation'],
    objectives: [
      'Evaluate sources for authority, currency, and relevance.',
      'Cite sources accurately and revise an essay for evidence and clarity.',
    ],
    sections: [
      {
        heading: 'Evaluating sources',
        paragraphs: [
          'Authority depends on expertise and process. A peer-reviewed article in a scholarly journal has been checked by specialists, while a newspaper may employ fact-checkers but writes faster, and a personal blog usually has neither. The question is not whether a source is digital but who produced it and how it was reviewed.',
          'Currency matters differently by field. A chemistry paper from 1995 may be superseded, while a history monograph from 1995 may remain standard. Check whether newer work cites or challenges the source, and notice when a page was last updated.',
          'Relevance is about fit, not quantity. A source that studies college students may not support a claim about high schoolers, and a study of one district cannot establish a national trend. Recording the population, sample size, and method while taking notes prevents overgeneralizing later.',
        ],
      },
      {
        heading: 'Citation and revision',
        paragraphs: [
          'A citation has two jobs: it lets a reader find the source and it marks which ideas are not the writer’s. MLA style gives author and page in text and a works-cited entry with author, title, container, publisher, date, and location; APA gives author and year in text and a reference list entry. Consistency matters more than memorizing every edge case.',
          'Revision is not proofreading. Global revision checks whether the thesis answers the assignment, whether each paragraph advances it, and whether evidence is analyzed rather than summarized. Only after that should a writer edit sentences for clarity and correct grammar.',
          'A useful revision test is the reverse outline: summarize each paragraph in one sentence beside the draft. If two summaries match, one paragraph is redundant; if a paragraph has no summary, it probably lacks a point. Reading aloud then catches the sentences that need splitting. Citation is also a habit of note-taking: record the author, title, container, date, and page at the moment of reading, because reconstructing them later wastes hours and invites error. A works-cited list should be built alongside the draft, not after it. Finally, read the assignment prompt again before submitting, since the most common revision failure is an essay that answers a question the instructor did not ask, however polished its prose may be. A final read for citation accuracy takes ten minutes and prevents the most damaging kind of error, since a missing citation undermines every claim around it even when the reasoning is sound, and instructors check citations before they read for argument. Building the works-cited list as you draft also shows at a glance which claims still lack support.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A student cites a 2011 blog post for a claim about teen sleep. Improve the source choice and citation.',
        steps: [
          'Check authority: a blog lacks review, though it may quote better sources.',
          'Replace it with a CDC or peer-reviewed study and note the publication date.',
          'Cite author, title, publisher, date, and URL in MLA form, with an in-text citation.',
        ],
        answer: 'Replace the blog with a reviewed or government source and cite author, title, publisher, date, and location consistently.',
      },
    ],
    terms: [
      ['authority', 'the expertise and review behind a source'],
      ['currency', 'how current a source is for its field'],
      ['relevance', 'how closely a source fits the specific claim'],
      ['works cited', 'the formatted list of sources in MLA style'],
      ['reverse outline', 'summarizing each paragraph to test an essay’s structure'],
      ['plagiarism', 'presenting others’ words or ideas as your own'],
    ],
    practice: [
      mc('Peer review primarily establishes', ['popularity', 'authority', 'currency', 'length'], 1, 'It checks expertise and method.'),
      mc('Global revision happens', ['before editing sentences', 'after proofreading', 'instead of citation', 'only in conclusions'], 0, 'Structure first, sentences later.'),
      num('How many jobs does a citation do in this lesson?', 2, 'Locate the source and mark borrowed ideas.'),
    ],
    review: [
      {
        prompt: 'What should you check when judging a source’s authority?',
        answer: 'The author’s expertise, the publication’s review process, the evidence offered, and whether the source discloses funding or bias.',
      },
      {
        prompt: 'How does a reverse outline help revision?',
        answer: 'It shows whether every paragraph advances the thesis, exposes redundancy, and reveals paragraphs that lack a clear point.',
      },
    ],
    exercises: [
      'Evaluate three sources on one question and rank them by authority and relevance.',
      'Reverse-outline a draft and revise one paragraph that lacks a clear claim.',
    ],
  },
  'speech-u1-l1': {
    topics: ['audience analysis'],
    objectives: [
      'Analyze an audience and choose a structure suited to purpose.',
      'Build an introduction, body, and conclusion that a listener can follow once.',
    ],
    sections: [
      {
        heading: 'Audience and purpose',
        paragraphs: [
          'Audience analysis asks who will listen, what they already know, and what they care about. A speech to a school board about cafeteria food needs cost data and student health figures, while the same topic to classmates needs vivid examples and a clear ask. Purpose — to inform, persuade, or commemorate — determines what evidence belongs.',
          'Speaking differs from writing because listeners cannot reread. A speech therefore needs signposting: “first,” “the second reason,” “what this means for you.” Repetition that would look clumsy on paper helps an audience track structure, and a single memorable phrase can carry the argument.',
          'Demographics matter but so do attitudes. An audience already sympathetic needs a specific action, while a skeptical one needs acknowledged objections and credible evidence. Speaking past an audience’s concerns produces polite applause and no change.',
        ],
      },
      {
        heading: 'Structure a listener can follow',
        paragraphs: [
          'An introduction earns attention, states the topic, and previews the structure. A startling statistic, a short story, or a relevant question can work as an attention-getter, but it must connect to the thesis rather than merely entertain.',
          'The body usually holds two to four main points, each supported by evidence and a transition. A problem-solution order suits persuasion, chronological order suits narrative, and topical order suits explanation. More than four points usually means the speech is trying to do too much.',
          'A conclusion restates the main idea, returns to the opening hook, and gives a specific call to action when persuasion is the goal. Ending on “so, yeah, that’s my speech” wastes the last chance to be remembered, and a strong final line is worth rehearsing separately. Timing is part of structure: a three-minute speech is roughly 400 to 450 words at a conversational pace, so writing 900 words guarantees rushing. Practice with a timer, cut rather than speed up, and mark the two places where a pause will do more than another sentence. Speakers who rehearse the transitions rather than the whole script sound natural, because they know where they are going and can find their own words along the way. Rehearsing the first thirty seconds and the last thirty seconds most thoroughly pays off, since those are the moments an audience remembers. Speaking from an outline rather than a script also lets a speaker respond to a room that looks confused by slowing down or repeating the main point. Notes should be a few keywords per point rather than sentences, since reading full sentences pulls the eyes down and flattens the voice. Practicing with only five words per card forces genuine eye contact and makes the outline portable and keeps the delivery conversational rather than read.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Plan a three-minute persuasive speech asking the school to add a late bus. Choose a hook, structure, and close.',
        steps: [
          'Hook: name the number of students who miss tutoring because no bus runs after 4:30.',
          'Structure problem-solution: the gap, the cost, the proposal, the benefit.',
          'Close: repeat the opening number and ask the board to fund one route for a semester.',
        ],
        answer: 'A problem-solution structure with a concrete opening statistic and a specific, costed request at the close.',
      },
    ],
    terms: [
      ['audience analysis', 'studying listeners to shape a message'],
      ['signposting', 'verbal cues that show a speech’s structure'],
      ['thesis', 'the single claim a speech develops'],
      ['call to action', 'a specific request for the audience to do something'],
      ['transition', 'a phrase that moves the audience between points'],
      ['hook', 'an opening device that earns attention'],
    ],
    practice: [
      mc('A skeptical audience most needs', ['more jokes', 'acknowledged objections', 'longer sentences', 'visual clutter'], 1, 'Address their concerns directly.'),
      num('How many main points does this lesson recommend at most?', 4, 'Two to four.'),
      mc('A hook must', ['entertain only', 'connect to the thesis', 'be a statistic', 'come last'], 1, 'It has to serve the argument.'),
    ],
    review: [
      {
        prompt: 'Why does a speech need more signposting than an essay?',
        answer: 'Listeners cannot reread or skim, so spoken cues tell them where the argument is and what comes next.',
      },
      {
        prompt: 'What should a persuasive conclusion do?',
        answer: 'Restate the main idea, return to the opening, and give the audience a specific action to take.',
      },
    ],
    exercises: [
      'Write a full-sentence outline for a four-minute speech with three main points.',
      'Deliver the introduction to a partner and revise it based on their recall.',
    ],
  },
  'speech-u2-l1': {
    topics: ['delivery'],
    objectives: [
      'Use voice, pace, and gesture deliberately while speaking.',
      'Design and use visual aids that support rather than replace the message.',
    ],
    sections: [
      {
        heading: 'Voice, pace, and presence',
        paragraphs: [
          'Delivery is learned, not innate. Volume must reach the back row without shouting, pace should slow at key claims and quicken through familiar material, and pauses after important points let an audience absorb them. Filler words such as “um” and “like” usually signal a search for the next idea, so a planned pause replaces them.',
          'Eye contact distributes attention across the room in three-to-five-second intervals rather than scanning constantly. Gestures should illustrate meaning — counting points on fingers, showing size with hands — and stay within the body’s natural frame. Standing still with a purpose reads as confidence, while swaying reads as nerves.',
          'Practice changes delivery. Reading a script aloud once is rehearsal; speaking from an outline repeatedly, recording yourself, and watching the recording is practice. Most speakers discover they speak faster and softer than they thought, and both are easy to correct once seen.',
        ],
      },
      {
        heading: 'Visual aids that help',
        paragraphs: [
          'A visual aid should show what words cannot: a chart, a map, a photograph, or a short diagram. Slides crowded with paragraphs compete with the speaker, because the audience reads instead of listening. One idea per slide, large type, and minimal text keep attention on the argument.',
          'Design follows contrast and hierarchy. Dark text on a light background, a consistent font, and a single accent color improve legibility, while animations that fly in distract. Label axes, cite data sources on the slide, and describe the visual aloud for anyone who cannot see it.',
          'Handling materials is part of delivery. Test equipment beforehand, keep a backup of the file, and know what to do if the projector fails. A speaker who can deliver without slides is more credible than one who cannot begin without them, which is why the outline should be memorized even when slides are used. On delivery day, arrive early, test the projector and the clicker, and place notes where a glance is enough rather than where reading is required. Speak to the back row, pause after each main point, and watch the audience for confusion rather than for approval. If a question comes mid-speech, answer briefly and return to the outline, since losing the structure costs more than a partial answer. These habits make a speaker appear prepared even when nerves are high. Videotaping one full run-through, then watching it without sound, exposes posture and pacing problems no amount of reading can fix. Practicing in the room where you will speak, with the actual equipment, removes most of the surprises that derail a nervous speaker, and it turns the room into a familiar space rather than an audience to fear. Arriving early also gives time to adjust lighting and seating before anyone is watching, which lowers the chances of a technical problem becoming a public one.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A speaker reads ten bullet points from a slide and speaks too quickly. Prescribe three fixes.',
        steps: [
          'Reduce each slide to one claim plus one chart or image.',
          'Replace reading with an outline and add planned pauses after key numbers.',
          'Record a run-through, time it, and mark two places to slow down.',
        ],
        answer: 'Simplify slides to one idea each, speak from an outline with planned pauses, and rehearse against a recording.',
      },
    ],
    terms: [
      ['pace', 'the speed at which a speaker delivers material'],
      ['filler word', 'a meaningless sound or word used while searching for the next idea'],
      ['eye contact', 'looking at listeners to hold attention and convey confidence'],
      ['visual aid', 'an image, chart, or object that supports a spoken point'],
      ['legibility', 'how easily text can be read at a distance'],
      ['rehearsal', 'practicing a speech aloud before delivery'],
    ],
    practice: [
      mc('A slide should contain', ['a full paragraph', 'one idea', 'the entire script', 'many fonts'], 1, 'One idea per slide.'),
      num('How many seconds does this lesson suggest for eye contact intervals?', 4, 'Three to five seconds, so about four.'),
      mc('A planned pause helps by', ['filling silence', 'letting the audience absorb a point', 'speeding delivery', 'replacing evidence'], 1, 'It gives listeners time.'),
    ],
    review: [
      {
        prompt: 'How should a speaker handle a projector failure?',
        answer: 'Continue from a memorized outline, since the argument should not depend on the slides being visible.',
      },
      {
        prompt: 'Why is recording a rehearsal useful?',
        answer: 'It reveals habits such as speaking too fast or too softly that a speaker cannot notice while concentrating on delivery.',
      },
    ],
    exercises: [
      'Record a two-minute speech and note three delivery habits to change.',
      'Rebuild one crowded slide as a single claim with one supporting visual.',
    ],
  },
};
