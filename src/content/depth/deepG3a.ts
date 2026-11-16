import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Grade 3, ELA and math: sections, third example, vocabulary, practice, review. */
export const DEPTH_G3A: Record<string, LessonDepth> = {
  'g3-ela-u1-l1': {
    topics: ['context clues'],
    objectives: [
      'Identify a definition clue, a synonym clue, and an antonym clue in a sentence.',
      'Use a common root plus a prefix or suffix to work out an unfamiliar word.',
    ],
    sections: [
      {
        heading: 'Four kinds of context clues',
        paragraphs: [
          'A context clue is a word or phrase near an unfamiliar word that hints at its meaning. A definition clue states the meaning outright, often after “called” or “which means,” or inside parentheses. A synonym clue offers a familiar word with the same meaning, as in “the arid, or dry, desert.” A synonym clue is helpful when you already know the familiar word.',
          'An antonym clue signals an opposite, using words such as but, unlike, or instead of. “Unlike her talkative brother, Mina was reticent” tells you reticent means quiet. An example clue gives instances introduced by “such as” or “for example,” letting you infer the category. Not every clue is reliable, so readers confirm a guess by substituting it back into the sentence. Watch also for signal words such as however, although, and in contrast, because they warn that the next idea reverses the one before it, which is often faster than puzzling over the unfamiliar word itself.',
        ],
      },
      {
        heading: 'Roots, prefixes, and suffixes at work',
        paragraphs: [
          'Many English words are built from a root plus affixes. The root carries the core meaning: port means carry, spect means look, and bio means life. A prefix changes that meaning, often in a direction: pre- means before, re- means again, sub- means under, and in- or im- often means not.',
          'Suffixes usually change a word’s job rather than its core meaning. -tion turns a verb into a noun, -able means capable of, -ist means a person who does something, and -ment names a result. Combining the parts narrows the meaning: “transportable” is able to be carried across. Checking the parts against the sentence tells you whether your reading is right. When the parts suggest a meaning that does not fit, trust the sentence and check a dictionary, since English borrows from many languages and some roots mislead.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Define “impassable” in “The bridge was impassable after the flood, so the trucks turned around.”',
        steps: [
          'Word parts: im- means not, pass means go through, and -able means capable of.',
          'Context: the trucks turned around, which confirms they could not cross.',
        ],
        answer: 'Impassable means not able to be passed through; the flood blocked the bridge.',
      },
    ],
    terms: [
      ['context clue', 'a nearby word or phrase that hints at a word’s meaning'],
      ['root', 'the base part of a word that carries its main meaning'],
      ['prefix', 'a word part added to the front that changes meaning'],
      ['suffix', 'a word part added to the end that often changes a word’s job'],
      ['definition clue', 'a clue that states a word’s meaning directly'],
      ['antonym clue', 'a clue that gives an opposite meaning to help you infer'],
    ],
    practice: [
      mc('“The arid, or dry, desert” uses which clue type?', ['antonym', 'synonym', 'example', 'definition'], 1, 'A familiar word with the same meaning is given.'),
      mc('What does the root port mean in “transport”?', ['look', 'carry', 'life', 'write'], 1, 'Port means carry, as in portable and export.'),
      num('How many clue types are described in this lesson?', 4, 'Definition, synonym, antonym, and example clues.'),
    ],
    review: [
      {
        prompt: 'What should you do if two clues point to different meanings?',
        answer: 'Substitute each meaning into the sentence and check a dictionary if neither fits clearly.',
      },
      {
        prompt: 'How does the suffix -able change a word such as “read”?',
        answer: 'It turns read into readable, meaning capable of being read.',
      },
    ],
    exercises: [
      'Find four unfamiliar words in an article and label the clue type for each.',
      'Build five words from the roots port, spect, or bio and define each.',
    ],
  },
  'g3-ela-u2-l1': {
    topics: ['topic sentence'],
    objectives: [
      'Write a topic sentence that states both the subject and the main point.',
      'Revise a paragraph so every detail supports its topic sentence.',
    ],
    sections: [
      {
        heading: 'The shape of a paragraph',
        paragraphs: [
          'A paragraph develops one idea. The topic sentence states that idea, usually in the first sentence, and it does two jobs: it names the subject and it makes a point about it. “Recycling saves landfill space” names the subject and makes a claim. “This paragraph is about recycling” only names the subject, so it gives the reader nothing to follow.',
          'Supporting details prove or explain the topic sentence. They can be facts, examples, or reasons, and they need an order. Sequence words such as first, next, and finally organize steps; comparison words such as also and however organize ideas. Each detail should answer a question the topic sentence raises in the reader’s mind. Length matters less than focus: three well-chosen details can prove a point better than eight details that wander away from it.',
        ],
      },
      {
        heading: 'Ending a paragraph well',
        paragraphs: [
          'A concluding sentence closes the paragraph by restating the main point in fresh words or by drawing a small conclusion from the details. It should not introduce a new topic, and it should not simply copy the topic sentence word for word. “For these reasons, recycling is one of the simplest ways a family can reduce waste” restates without repeating. Copying the topic sentence word for word tells the reader nothing new, so fresh wording is part of the job.',
          'Revision is where a paragraph becomes clear. Read it aloud and ask three questions: does every detail support the topic sentence, does the order make sense, and does the ending close the idea? A detail that fails the first question should be cut or moved to another paragraph, even if it is interesting. Many writers discover their real topic sentence only after drafting, so naming the point afterward is a normal revision step rather than a failure.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Write a topic sentence for a paragraph whose details are: recycling paper saves trees, recycling cans saves metal, and recycling glass saves sand.',
        steps: [
          'Identify what all three details share: recycling saves raw materials.',
          'Write one sentence naming recycling and making that point.',
        ],
        answer: '“Recycling saves the raw materials used to make paper, cans, and glass.”',
      },
    ],
    terms: [
      ['topic sentence', 'the sentence that states a paragraph’s main idea'],
      ['supporting detail', 'a fact, example, or reason that proves the main idea'],
      ['transition', 'a word that shows how ideas connect'],
      ['concluding sentence', 'the sentence that closes a paragraph’s idea'],
      ['unity', 'the quality of every sentence supporting one main idea'],
      ['coherence', 'the quality of ideas being arranged in a clear order'],
    ],
    practice: [
      mc('Which is the strongest topic sentence?', ['This paragraph is about dogs.', 'Dogs make good pets for active families.', 'Dogs bark.', 'I have a dog.'], 1, 'It names the subject and makes a claim.'),
      mc('A detail that does not support the topic sentence should be', ['kept', 'repeated', 'cut or moved', 'made longer'], 2, 'Unity requires cutting details that drift.'),
      num('How many questions does this lesson suggest for revising a paragraph?', 3, 'Support, order, and ending.'),
    ],
    review: [
      {
        prompt: 'What job does the concluding sentence do?',
        answer: 'It closes the paragraph by restating the main point or drawing a conclusion from the details.',
      },
      {
        prompt: 'How do you know a detail does not belong?',
        answer: 'It fails to support the topic sentence, so it pulls the paragraph toward a different idea.',
      },
    ],
    exercises: [
      'Write a paragraph with a topic sentence, three details, and a conclusion about your town.',
      'Take a paragraph you wrote earlier and cut any detail that does not support its topic sentence.',
    ],
  },
  'g3-ela-u3-l1': {
    topics: ['text features'],
    objectives: [
      'Distinguish fiction from nonfiction by purpose and by how facts are used.',
      'Use a heading, caption, glossary, or index to locate information quickly.',
    ],
    sections: [
      {
        heading: 'Story and information serve different purposes',
        paragraphs: [
          'Fiction is invented: the characters, events, and settings come from the author’s imagination, even when they resemble real life. Its purpose is usually to entertain or to explore an idea through a story. A fiction writer may research details, but the story itself is not a claim about what happened. A writer may use real places and accurate details to make an invented story feel true, so realism is not the test; the test is whether events are presented as fact.',
          'Nonfiction presents information the author believes is true and can be checked. Its purposes include informing, explaining, persuading, and describing. Biographies, news articles, and science books are nonfiction. Some books blend the two: historical fiction invents characters but places them in real events, which is why readers check which parts are documented. A nonfiction writer also chooses what to include, so a factual article can still reflect judgment about what matters most.',
        ],
      },
      {
        heading: 'Text features help you find and use information',
        paragraphs: [
          'Nonfiction uses text features to make information easy to find. A table of contents lists chapters in order, headings announce what a section covers, and captions explain a picture or diagram. Bold or colored words signal important terms, and a glossary defines those terms, usually in the back of the book.',
          'An index lists topics alphabetically with page numbers, which is faster than reading the whole book when you need one fact. Diagrams, maps, timelines, and charts present relationships that would take many sentences to describe. Good readers scan features first, then read closely only the parts that answer their question. When two features disagree, as when a caption contradicts a diagram, check the main text before trusting either one. Scanning features first also tells you whether a source covers your question at all, which saves reading an entire chapter for one missing fact.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'You need to know what a “watershed” is, and the book has bold words, a glossary, and an index. Where do you look first?',
        steps: [
          'The word appears in bold, which marks it as a key term.',
          'The glossary defines key terms alphabetically, so check there before the index.',
        ],
        answer: 'Look in the glossary for the bold term; use the index if you need every page that mentions it.',
      },
    ],
    terms: [
      ['fiction', 'writing imagined by the author rather than presented as fact'],
      ['nonfiction', 'writing that presents information the author believes is true'],
      ['heading', 'a title above a section that says what it covers'],
      ['caption', 'text that explains a picture, diagram, or chart'],
      ['glossary', 'an alphabetical list of terms and their meanings'],
      ['index', 'an alphabetical list of topics with page numbers'],
    ],
    practice: [
      mc('Which is nonfiction?', ['a fantasy novel', 'a science article', 'a fable', 'a poem about a dragon'], 1, 'A science article presents checkable information.'),
      mc('Which feature lists topics alphabetically with page numbers?', ['glossary', 'index', 'caption', 'table of contents'], 1, 'An index points to pages for each topic.'),
      num('How many text features are named in this lesson?', 6, 'Headings, captions, bold words, glossary, index, and diagrams.'),
    ],
    review: [
      {
        prompt: 'Name three text features that help you find information.',
        answer: 'A table of contents, headings, and an index each help you locate information quickly.',
      },
      {
        prompt: 'How does the purpose of fiction differ from nonfiction?',
        answer: 'Fiction usually entertains or explores an idea, while nonfiction informs, explains, or persuades using checkable facts.',
      },
    ],
    exercises: [
      'Open a nonfiction book and label four text features with what each helps you do.',
      'Write a one-paragraph nonfiction account and a one-paragraph fictional scene about the same animal.',
    ],
  },
  'g3-math-u1-l1': {
    topics: ['rounding'],
    objectives: [
      'Read and write numbers to 100,000 using periods and expanded form.',
      'Round a number to the nearest ten, hundred, or thousand.',
    ],
    sections: [
      {
        heading: 'Reading large numbers by periods',
        paragraphs: [
          'Large numbers are grouped in periods of three digits, separated by commas. In 47,382 the comma separates the thousands period from the ones period. Read the thousands period first, then say “thousand,” then read the ones period: forty-seven thousand, three hundred eighty-two. The comma is not decoration; it marks the period boundary that tells a reader where the thousands end.',
          'Each place is ten times the place to its right, so the 4 in 47,382 is worth 40,000 while the 3 is worth 300. Expanded form writes the value of every digit: 40,000 + 7,000 + 300 + 80 + 2. A zero holds an empty place, as in 40,502, where the zero in the hundreds place keeps the 5 in the thousands.',
        ],
      },
      {
        heading: 'Rounding using a number line',
        paragraphs: [
          'Rounding replaces a number with a nearby number that is easier to use. To round to the nearest hundred, find the two hundreds the number sits between and decide which is closer. The midpoint is 50: numbers ending in 49 or less round down, and 50 or more round up. A number line makes the choice visible rather than a rule to memorize.',
          'Rounding to the nearest thousand works the same way with the hundreds digit as the deciding digit. Rounding does not give an exact answer, so it is used for estimates and quick checks. If 4,872 rounds to 5,000 and 2,140 rounds to 2,000, the sum is about 7,000 — close enough to catch a written answer of 700 or 70,000. An estimate is not a wrong answer; it is an answer at a coarser level of precision, which is exactly what you want when exactness is unnecessary.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Round 47,682 to the nearest thousand and explain the deciding digit.',
        steps: [
          'The thousands are 47,000 and 48,000, so the number sits between them.',
          'The deciding digit is the hundreds digit, 6, which is 50 or more.',
        ],
        answer: '48,000, because 47,682 is closer to 48,000 than to 47,000.',
      },
    ],
    terms: [
      ['place value', 'the value a digit has because of its position'],
      ['period', 'a group of three digits separated by commas'],
      ['expanded form', 'a number written as the sum of its place values'],
      ['round', 'to replace a number with a nearby, simpler number'],
      ['midpoint', 'the halfway value that decides whether to round up or down'],
      ['estimate', 'an approximate answer used for checking'],
    ],
    practice: [
      num('Round 8,672 to the nearest hundred.', 8700, 'The tens digit is 7, so round up.'),
      num('Round 47,382 to the nearest thousand.', 47000, 'The hundreds digit is 3, so round down.'),
      mc('In 40,502, the 5 is worth', ['5', '50', '500', '5,000'], 2, 'It is in the hundreds place of the ones period.'),
    ],
    review: [
      {
        prompt: 'How do you round 8,672 to the nearest hundred?',
        answer: 'The hundreds are 8,600 and 8,700; the tens digit is 7, so it rounds up to 8,700.',
      },
      {
        prompt: 'Why is the 4 in 47,382 worth 40,000?',
        answer: 'It sits in the ten-thousands place, so its value is four groups of ten thousand.',
      },
    ],
    exercises: [
      'Write three five-digit numbers in expanded form and in words.',
      'Round ten prices to the nearest dollar and estimate their total.',
    ],
  },
  'g3-math-u2-l1': {
    topics: ['fact families'],
    objectives: [
      'Use an array to write a multiplication fact and a repeated addition sentence.',
      'Use a fact family to find a missing factor or quotient.',
    ],
    sections: [
      {
        heading: 'Arrays show equal groups',
        paragraphs: [
          'An array arranges objects in equal rows and columns. An array with 4 rows of 6 chairs holds 24 chairs, which can be written as 4 × 6 = 24 or as 6 + 6 + 6 + 6 = 24. Multiplication is a shortcut for repeated addition of equal groups, so it only works when every group has the same size.',
          'Turning the array sideways gives 6 rows of 4, which is 24 again. That is the commutative property: changing the order of the factors does not change the product. Recognizing it halves the number of facts to learn, because knowing 4 × 6 also gives you 6 × 4. Arrays also connect to area: a rectangle 4 units by 6 units contains 24 square units, the same product the array shows.',
        ],
      },
      {
        heading: 'Fact families and missing numbers',
        paragraphs: [
          'Multiplication and division undo each other. From 4 × 6 = 24 you can write 6 × 4 = 24, 24 ÷ 4 = 6, and 24 ÷ 6 = 4. These four sentences are a fact family, and they let you solve a division problem by recalling a multiplication fact instead of counting.',
          'That relationship finds missing numbers. If 6 × ? = 42, divide 42 by 6 to get 7. If 42 ÷ ? = 6, divide 42 by 6 as well. Strategies such as skip counting, doubling, and using the facts for 5 and 10 make recall faster, and speed matters because later work with fractions and area depends on knowing these facts. Fluency grows from short, frequent practice rather than one long session, and deriving an unknown fact from a known one — 6 × 7 is 6 × 5 plus 6 × 2 — builds understanding that memorizing alone does not.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'An auditorium has 5 rows of 8 seats. Write the multiplication fact, the repeated addition, and the fact family.',
        steps: [
          'Five equal rows of 8 gives 5 × 8 = 40 chairs.',
          'Repeated addition is 8 + 8 + 8 + 8 + 8 = 40.',
          'The family is 5 × 8 = 40, 8 × 5 = 40, 40 ÷ 5 = 8, and 40 ÷ 8 = 5.',
        ],
        answer: '5 × 8 = 40, with 40 ÷ 8 = 5 and 40 ÷ 5 = 8 in the same family.',
      },
    ],
    terms: [
      ['array', 'objects arranged in equal rows and columns'],
      ['factor', 'a number being multiplied'],
      ['product', 'the result of multiplying two or more numbers'],
      ['quotient', 'the result of a division problem'],
      ['commutative property', 'changing the order of factors does not change the product'],
      ['fact family', 'related multiplication and division facts using the same numbers'],
    ],
    practice: [
      num('What is 7 × 8?', 56, 'Seven groups of eight, or 5 × 8 plus 2 × 8.'),
      num('If 6 × ? = 42, what is the missing factor?', 7, 'Divide 42 by 6 to get 7.'),
      mc('Which fact belongs to the 3, 4, 12 family?', ['12 ÷ 3 = 4', '12 − 3 = 9', '3 + 4 = 7', '12 × 3 = 36'], 0, 'Division facts share the same three numbers.'),
    ],
    review: [
      {
        prompt: 'Why does 3 × 9 equal 9 × 3?',
        answer: 'Turning the array sideways keeps the same total, which is the commutative property.',
      },
      {
        prompt: 'Write the four facts in the 5, 6, 30 family.',
        answer: '5 × 6 = 30, 6 × 5 = 30, 30 ÷ 5 = 6, and 30 ÷ 6 = 5.',
      },
    ],
    exercises: [
      'Draw three arrays, write the multiplication fact and repeated addition for each.',
      'Write the fact families for 4 × 7 and 9 × 6, then quiz a family member.',
    ],
  },
  'g3-math-u3-l1': {
    topics: ['unit fraction'],
    objectives: [
      'Place a fraction on a number line by partitioning the interval.',
      'Find the area and perimeter of a rectangle and explain how they differ.',
    ],
    sections: [
      {
        heading: 'Fractions are numbers on a line',
        paragraphs: [
          'A unit fraction is one part of a whole divided into equal parts: 1/2, 1/3, 1/4, and so on. The denominator tells how many equal parts make one whole, and the numerator tells how many of those parts you have. Three copies of 1/4 make 3/4, which is why 3/4 sits three quarter-lengths to the right of zero.',
          'To place a fraction on a number line, partition the space between whole numbers into the number of parts named by the denominator, then count that many parts from zero. Fractions can be greater than one: 5/4 is one whole plus 1/4, so it sits past 1. Splitting every part in half shows equivalent fractions, because 2/4 and 1/2 land at the same point. Counting unit fractions aloud — one fourth, two fourths, three fourths — reinforces that every step along the line is the same size.',
        ],
      },
      {
        heading: 'Area and perimeter measure different things',
        paragraphs: [
          'Perimeter is the distance around a shape, found by adding the side lengths. Area is the amount of surface inside, measured in square units. A rectangle 6 cm long and 4 cm wide has a perimeter of 6 + 4 + 6 + 4 = 20 cm and an area of 6 × 4 = 24 square centimeters.',
          'Two rectangles can have the same area and different perimeters. A 6 × 4 rectangle and a 12 × 2 rectangle both have an area of 24 square units, but their perimeters are 20 and 28. Fencing a garden depends on perimeter, while buying seed depends on area, so knowing which measurement a task needs prevents wasted material. Perimeter is measured in linear units such as centimeters while area is measured in square units, so the two numbers are never interchangeable, and checking units catches many errors.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A garden is 8 feet by 5 feet. Find its area and perimeter, and say which you need for fencing.',
        steps: [
          'Area is length times width: 8 × 5 = 40 square feet.',
          'Perimeter is the distance around: 8 + 5 + 8 + 5 = 26 feet.',
        ],
        answer: 'Area 40 square feet, perimeter 26 feet; fencing uses the perimeter.',
      },
    ],
    terms: [
      ['unit fraction', 'one equal part of a whole, such as 1/5'],
      ['numerator', 'the top number of a fraction, counting the parts'],
      ['denominator', 'the bottom number, naming how many equal parts make a whole'],
      ['area', 'the number of square units that cover a surface'],
      ['perimeter', 'the distance around the outside of a shape'],
      ['square unit', 'a square one unit on each side, used to measure area'],
    ],
    practice: [
      num('What is the area of a 7 by 3 rectangle?', 21, '7 × 3 = 21 square units.'),
      num('What is the perimeter of a 7 by 3 rectangle?', 20, '7 + 3 + 7 + 3 = 20 units.'),
      mc('Where does 5/4 sit on a number line?', ['before 0', 'between 0 and 1', 'between 1 and 2', 'at exactly 2'], 2, 'Four fourths make 1, and one more fourth goes past it.'),
    ],
    review: [
      {
        prompt: 'How do you place 3/4 on a number line?',
        answer: 'Split the space from 0 to 1 into four equal parts and count three of them from zero.',
      },
      {
        prompt: 'How can two rectangles have the same area but different perimeters?',
        answer: 'Different side lengths can multiply to the same area while adding to different totals around the edge.',
      },
    ],
    exercises: [
      'Draw three rectangles with an area of 24 square units and compare their perimeters.',
      'Measure a table, then compute the area and perimeter and explain which a tablecloth needs.',
    ],
  },
};
