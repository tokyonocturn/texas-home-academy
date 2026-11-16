import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Grade 2, ELA and math: sections, third example, vocabulary, practice, review. */
export const DEPTH_G2A: Record<string, LessonDepth> = {
  'g2-ela-u1-l1': {
    topics: ['syllable counting'],
    objectives: [
      'Count the syllables in a word by listening for vowel sounds.',
      'Add a prefix or suffix to a base word and explain how the meaning changes.',
    ],
    sections: [
      {
        heading: 'Counting syllables by listening',
        paragraphs: [
          'A syllable is one beat in a spoken word, and every syllable has exactly one vowel sound. Say “rabbit” slowly: rab-bit. Your chin drops twice, once for each vowel sound. That chin drop is a reliable test, because your mouth must open to let a vowel sound out, even when the vowel is spelled with a letter you would not expect.',
          'Long words can be split into syllables to make them easier to read and spell. “Picnic” is pic-nic; “elephant” is el-e-phant. Read one syllable at a time, then say them together quickly. Compound words are even easier because they are built from two whole words: “sunset” is sun-set, and each part keeps its own meaning.',
        ],
      },
      {
        heading: 'How prefixes and suffixes change a word',
        paragraphs: [
          'A prefix is added to the front of a base word and a suffix is added to the end. The base word keeps its meaning, and the added part changes it. The prefix re- means again, so “reread” means read again. The prefix un- means not, so “unhappy” means not happy. The suffix -less means without, so “careless” means without care.',
          'Suffixes can also change a word’s job in a sentence. Adding -ly to “quick” makes “quickly,” which describes how something is done. Adding -ful to “help” makes “helpful,” which describes a person. Spelling sometimes shifts when a suffix is added: “hope” drops the e before -ing, and “run” doubles the n before -ing.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Break “unhappily” into its parts and explain what each part adds.',
        steps: [
          'Find the base word: happy.',
          'The prefix un- means not; the suffix -ly tells how something is done.',
          'The y in happy changes to i before the suffix is added.',
        ],
        answer: 'un- + happi- + -ly means in a way that is not happy.',
      },
    ],
    terms: [
      ['syllable', 'one beat in a spoken word, built around one vowel sound'],
      ['vowel sound', 'the open sound in a syllable, such as the a in cat'],
      ['prefix', 'a word part added to the front of a base word'],
      ['suffix', 'a word part added to the end of a base word'],
      ['base word', 'the main word that prefixes and suffixes are added to'],
      ['compound word', 'a word made of two smaller words, such as sunset'],
    ],
    practice: [
      num('How many syllables are in “picnic”?', 2, 'Say pic-nic: two beats, two vowel sounds.'),
      mc('What does the prefix re- mean in “rebuild”?', ['not', 'again', 'before', 'under'], 1, 'Re- means again, so rebuild means build again.'),
      num('How many syllables are in “unbelievable”?', 5, 'un-be-liev-a-ble: five beats.'),
    ],
    review: [
      {
        prompt: 'Why does each syllable need a vowel sound?',
        answer: 'Because the mouth must open to let a vowel out, and that opening is the beat you hear.',
      },
      {
        prompt: 'What happens to the word “hope” when you add -ing?',
        answer: 'The silent e is dropped, so hope becomes hoping, while the meaning stays the same.',
      },
    ],
    exercises: [
      'Find six long words in a book, clap their syllables, and write each count.',
      'Add un-, re-, and -ful to three base words and write a sentence for each new word.',
    ],
  },
  'g2-ela-u2-l1': {
    topics: ['subject and predicate', 'joining sentences'],
    objectives: [
      'Find the subject and the predicate in a sentence.',
      'Join two short sentences with a conjunction that shows how the ideas relate.',
    ],
    sections: [
      {
        heading: 'Subjects, predicates, and word jobs',
        paragraphs: [
          'Every complete sentence has a subject and a predicate. The subject tells who or what the sentence is about, and the predicate tells what the subject does or is. In “The brown dog runs fast,” the subject is “The brown dog” and the predicate is “runs fast.” Finding the subject is easier if you first find the verb and then ask who or what did it.',
          'Words also have jobs. A noun names a person, place, thing, or idea; a proper noun names a specific one and begins with a capital letter, as in Texas or Maria. A verb shows action or being, and an adjective describes a noun. The subject and verb must agree: “The dog runs” uses one dog, so the verb ends in s, while “The dogs run” uses more than one.',
        ],
      },
      {
        heading: 'Joining ideas with conjunctions',
        paragraphs: [
          'Two short sentences can be joined into one compound sentence with a conjunction. And adds information, but shows a contrast, or offers a choice, and so shows a result. “It rained. We stayed inside.” becomes “It rained, so we stayed inside.” A comma goes before the conjunction when both halves could stand alone as sentences.',
          'Do not confuse a compound sentence with a compound subject. “Ana and Luis play chess” has two subjects sharing one verb, so it is one sentence with a compound subject. “Ana plays chess, and Luis watches” has two complete sentences joined by a comma and conjunction. Joining too many ideas without punctuation creates a run-on.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Join “The soup was hot. We ate it slowly.” with a conjunction that shows contrast.',
        steps: [
          'Decide how the ideas relate: hot soup usually makes people hurry, but they did not.',
          'Choose but, which signals a contrast, and place a comma before it.',
        ],
        answer: '“The soup was hot, but we ate it slowly.”',
      },
    ],
    terms: [
      ['subject', 'the part of a sentence that tells who or what it is about'],
      ['predicate', 'the part of a sentence that tells what the subject does or is'],
      ['proper noun', 'a specific name, such as Texas, that begins with a capital'],
      ['verb', 'a word that shows action or being'],
      ['adjective', 'a word that describes a noun'],
      ['conjunction', 'a word such as and, but, or so that joins ideas'],
    ],
    practice: [
      mc('What is the subject of “The tall girl sings loudly”?', ['sings', 'loudly', 'The tall girl', 'tall'], 2, 'The subject is who the sentence is about.'),
      mc('Which conjunction shows a result?', ['and', 'but', 'or', 'so'], 3, 'So connects a cause to its result.'),
      num('How many sentences are joined in “We ran, and we won”?', 2, 'Two complete sentences joined by a comma and and.'),
    ],
    review: [
      {
        prompt: 'How can you find the subject of a sentence?',
        answer: 'Find the verb first, then ask who or what is doing or being it.',
      },
      {
        prompt: 'Why does a compound sentence need a comma before the conjunction?',
        answer: 'The comma shows where the first complete sentence ends and the second begins.',
      },
    ],
    exercises: [
      'Write three compound sentences using and, but, and so, with correct commas.',
      'Find the subject and predicate in five sentences from a book.',
    ],
  },
  'g2-ela-u3-l1': {
    topics: ['main idea statements', 'relevant details'],
    objectives: [
      'State the main idea of a short paragraph in one sentence.',
      'Decide whether a detail supports the main idea or does not belong.',
    ],
    sections: [
      {
        heading: 'Topic, main idea, and details',
        paragraphs: [
          'The topic is what a paragraph is about, usually expressible in one or two words. The main idea is what the author says about that topic, expressed as a full sentence. A paragraph about armadillos might have the topic “armadillos” and the main idea “Armadillos have special defenses that help them survive.”',
          'Supporting details are the facts, examples, and reasons that prove the main idea. In that paragraph, details might include that an armadillo can roll into a ball and that it can jump several feet straight up. Each detail answers a question a reader might ask: how do armadillos defend themselves? The main idea is the answer, and the details are the evidence.',
        ],
      },
      {
        heading: 'Checking whether a detail belongs',
        paragraphs: [
          'A detail belongs if it supports the main idea. Ask, “Does this tell me more about the main idea?” A sentence about what an armadillo eats does not support a main idea about defenses, even though it is true. Including it weakens the paragraph because the reader cannot tell what the paragraph is mainly about. A paragraph that keeps every fact it knows reads like a list, and a list is harder to remember than one clear point.',
          'The main idea is often stated in the first or last sentence, but not always. If it is not stated, you can write it yourself by asking what all the details have in common. A one-sentence summary of the whole paragraph is a good test: if your summary covers every detail, you have found the main idea.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Find the main idea: “Bats hunt at night. Their ears help them find insects in the dark. They also sleep upside down during the day.”',
        steps: [
          'Ask what all three sentences are about: bats.',
          'Ask what they say about bats: how bats live and hunt.',
        ],
        answer: 'Bats have unusual habits that help them live and hunt.',
      },
    ],
    terms: [
      ['topic', 'what a paragraph is about, in a word or two'],
      ['main idea', 'the most important point the author makes about the topic'],
      ['supporting detail', 'a fact or example that proves the main idea'],
      ['summary', 'a short statement of the most important information'],
      ['paragraph', 'a group of sentences about one idea'],
      ['irrelevant', 'not connected to the main idea'],
    ],
    practice: [
      mc('Which is a main idea rather than a detail?', ['Bats sleep upside down.', 'Bats have unusual habits.', 'Bats hunt at night.', 'Bats have large ears.'], 1, 'It states the point all the details support.'),
      mc('A detail that does not support the main idea is', ['helpful', 'irrelevant', 'a summary', 'a topic'], 1, 'It does not belong in the paragraph.'),
      num('How many sentences should a summary be for a short paragraph?', 1, 'One sentence captures the main idea.'),
    ],
    review: [
      {
        prompt: 'How is a topic different from a main idea?',
        answer: 'A topic is the subject in a word or two, while a main idea is a sentence saying what the author claims about it.',
      },
      {
        prompt: 'What question helps you test whether a detail belongs?',
        answer: 'Ask whether the detail tells more about the main idea or drifts to another subject.',
      },
    ],
    exercises: [
      'Read a short article, write its main idea in one sentence, and list three supporting details.',
      'Write a paragraph with one detail that does not belong, then trade it with a family member to find.',
    ],
  },
  'g2-math-u1-l1': {
    topics: ['comparing three-digit numbers'],
    objectives: [
      'Write a three-digit number in expanded form.',
      'Compare two three-digit numbers using place value.',
    ],
    sections: [
      {
        heading: 'Three places, three values',
        paragraphs: [
          'In a three-digit number, each place is ten times the value of the place to its right. Ten ones make one ten, and ten tens make one hundred. In 345, the 3 means 3 hundreds, the 4 means 4 tens, and the 5 means 5 ones. Expanded form writes those parts out: 300 + 40 + 5.',
          'A zero still matters because it holds a place. In 503 there are no tens, so a zero marks the empty tens place and keeps the 5 in the hundreds. Without that zero, 53 would mean something completely different. Reading a number aloud by place value — five hundred three — makes the zero’s job clear.',
        ],
      },
      {
        heading: 'Comparing and ordering numbers',
        paragraphs: [
          'To compare three-digit numbers, compare the hundreds first. Whichever number has more hundreds is greater. If the hundreds are equal, compare the tens, and if those are equal, compare the ones. This is why 389 is less than 398: both have 3 hundreds, but 398 has 9 tens while 389 has only 8 tens.',
          'The symbols < and > always open toward the greater number, like a hungry mouth. Ordering several numbers from least to greatest uses the same place-value comparison, one pair at a time. Counting by tens or hundreds — 496, 506, 516 — is a quick check that your comparisons are consistent. Saying a comparison aloud, as in “three hundred eighty-nine is less than three hundred ninety-eight,” makes the place-value reasoning explicit.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Write 407 in expanded form and compare it with 470.',
        steps: [
          '407 is 4 hundreds, 0 tens, and 7 ones, so 400 + 0 + 7.',
          'Both numbers have 4 hundreds; compare tens: 0 tens is less than 7 tens.',
        ],
        answer: '407 = 400 + 7, and 407 < 470.',
      },
    ],
    terms: [
      ['hundreds place', 'the digit that counts groups of one hundred'],
      ['expanded form', 'a number written as the sum of its place values'],
      ['placeholder', 'a zero that holds an empty place so other digits keep their value'],
      ['compare', 'to decide which number is greater, less, or equal'],
      ['greater than', 'the relation shown by >, opening toward the larger number'],
      ['standard form', 'a number written with digits, such as 345'],
    ],
    practice: [
      num('What is 600 + 20 + 9 in standard form?', 629, 'Six hundreds, two tens, nine ones.'),
      mc('Which is greater, 389 or 398?', ['389', '398', 'they are equal', 'cannot tell'], 1, 'Both have 3 hundreds, but 398 has 9 tens and 389 has 8 tens, so 398 is greater.'),
      num('What is 10 more than 496?', 506, 'Adding ten makes 5 hundreds and 0 tens.'),
    ],
    review: [
      {
        prompt: 'What does the zero in 503 tell you?',
        answer: 'That there are no tens in the number, and the 5 is in the hundreds place.',
      },
      {
        prompt: 'How do you compare two numbers that have the same hundreds digit?',
        answer: 'Compare the tens digits next, and if those match, compare the ones digits.',
      },
    ],
    exercises: [
      'Write five three-digit numbers in expanded form and back in standard form.',
      'Order 486, 468, 648, and 864 from least to greatest and explain your first step.',
    ],
  },
  'g2-math-u2-l1': {
    topics: ['regrouping rules'],
    objectives: [
      'Regroup ones and tens to add two-digit numbers.',
      'Regroup to subtract when a digit is too small.',
    ],
    sections: [
      {
        heading: 'Regrouping in addition',
        paragraphs: [
          'When you add and a column reaches ten or more, you regroup. Ten ones are traded for one ten, which moves into the tens column. Adding 47 + 38: the ones give 7 + 8 = 15, so you write 5 and carry 1 ten. The tens then give 4 + 3 + 1 = 8, for a total of 85.',
          'Line up the columns by place value before adding, or the digits will be combined with the wrong values. An estimate checks the answer: 47 is about 50 and 38 is about 40, so the sum should be near 90. If your written answer is 58 or 185, the estimate tells you to look again.',
        ],
      },
      {
        heading: 'Regrouping in subtraction',
        paragraphs: [
          'Subtraction regroups in the other direction. If the top ones digit is smaller than the bottom one, borrow one ten and turn it into ten ones. In 63 − 28, you cannot take 8 from 3, so the 6 tens become 5 tens and the 3 ones become 13 ones. Then 13 − 8 = 5, and 5 − 2 = 3, giving 35.',
          'Check subtraction by adding the answer back to the number you subtracted. If 35 + 28 gives 63, the borrowing was correct. With money, the same idea applies: changing a ten-dollar bill into coins makes it possible to pay an amount you could not pay otherwise.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Solve 52 − 27 and check it.',
        steps: [
          'You cannot take 7 from 2, so borrow: 5 tens become 4 tens and 2 ones become 12 ones.',
          '12 − 7 = 5, then 4 − 2 = 2, so the answer is 25.',
          'Check: 25 + 27 = 52.',
        ],
        answer: '25, confirmed by adding it back to 27.',
      },
    ],
    terms: [
      ['regroup', 'to trade ten in one place for one in the next place'],
      ['carry', 'to move a regrouped ten into the next column when adding'],
      ['borrow', 'to take one from the next column when subtracting'],
      ['column', 'a vertical line of digits that share a place value'],
      ['estimate', 'a close answer used to check whether a result is reasonable'],
      ['difference', 'the result of subtracting one number from another'],
    ],
    practice: [
      num('What is 47 + 38?', 85, '7 + 8 = 15, write 5 and carry 1.'),
      num('What is 63 − 28?', 35, 'Borrow a ten, then subtract.'),
      mc('Why do you regroup when adding 56 + 27?', ['the tens are too big', 'the ones add to more than nine', 'the answer is odd', 'there is a zero'], 1, '6 + 7 = 13 ones, which is one ten and three ones.'),
    ],
    review: [
      {
        prompt: 'Why do you carry a 1 when the ones add to 13?',
        answer: 'Because 13 ones is one ten and three ones, and the ten belongs in the tens column.',
      },
      {
        prompt: 'How can you check a subtraction answer?',
        answer: 'Add the difference to the number you subtracted and see whether you get the starting number.',
      },
    ],
    exercises: [
      'Solve five two-digit addition problems that require carrying, and estimate each first.',
      'Write a shopping problem where you must borrow to find change from $1.00.',
    ],
  },
  'g2-math-u3-l1': {
    topics: ['counting coins', 'telling time to five minutes'],
    objectives: [
      'Count a mixed group of coins and write the total in cents and dollars.',
      'Read an analog clock to the nearest five minutes.',
    ],
    sections: [
      {
        heading: 'Counting coins and making change',
        paragraphs: [
          'A penny is 1 cent, a nickel is 5, a dime is 10, and a quarter is 25. Count the largest coins first, then the smaller ones, because that keeps a running total easy to hold in your head. One quarter, two dimes, and one nickel come to 25 + 10 + 10 + 5 = 50 cents, written $0.50.',
          'Change is the difference between what you pay and the price. If a snack costs 65 cents and you pay with a dollar, the change is 100 − 65 = 35 cents. Counting up from the price is a good check: 65, 75 with a dime, 85, 95, then a nickel makes 35 cents of change.',
        ],
      },
      {
        heading: 'Time to five minutes and equal parts',
        paragraphs: [
          'The minute hand moves around the clock in five-minute steps, so each number marks five more minutes. When the minute hand points to 7, 35 minutes have passed, and the time is 35 minutes after the hour. Reading 4:45 means the hour hand is near the 5, and the minute hand points to the 9.',
          'Equal parts split a whole into pieces of the same size. Two equal parts are halves, three are thirds, and four are fourths or quarters. The parts must be equal in size, not just in number: a shape cut into two unequal pieces does not show halves, even though there are two pieces.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A pencil costs 30 cents. You pay with two quarters. How much change do you get?',
        steps: [
          'Two quarters are 25 + 25 = 50 cents.',
          'Subtract the price: 50 − 30 = 20 cents.',
        ],
        answer: '20 cents, which is two dimes.',
      },
    ],
    terms: [
      ['penny', 'a coin worth 1 cent'],
      ['nickel', 'a coin worth 5 cents'],
      ['dime', 'a coin worth 10 cents'],
      ['quarter', 'a coin worth 25 cents'],
      ['half hour', 'thirty minutes, when the minute hand points to 6'],
      ['fourth', 'one of four equal parts of a whole'],
    ],
    practice: [
      num('How many cents are one quarter and two dimes?', 45, '25 + 10 + 10 = 45 cents.'),
      num('How many minutes past the hour is it when the minute hand points to 4?', 20, 'Each number is five minutes, so 4 × 5 = 20.'),
      mc('A shape cut into four equal parts shows', ['halves', 'thirds', 'fourths', 'fifths'], 2, 'Four equal parts are fourths.'),
    ],
    review: [
      {
        prompt: 'Why count the largest coins first?',
        answer: 'It builds the total quickly and makes the smaller coins easier to add without losing track.',
      },
      {
        prompt: 'Why must parts be equal to be called halves?',
        answer: 'Halves are two parts of the same size, so unequal pieces do not show halves at all.',
      },
    ],
    exercises: [
      'Count the coins in a pocket or jar and write the total two ways.',
      'Draw three clocks showing 2:15, 2:40, and 3:05, and label the minute hand position.',
    ],
  },
};
