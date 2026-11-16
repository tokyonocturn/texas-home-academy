import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Grade 4, ELA and math: sections, third example, vocabulary, practice, review. */
export const DEPTH_G4A: Record<string, LessonDepth> = {
  'g4-ela-u1-l1': {
    topics: ['inference'],
    objectives: [
      'Support an inference with at least two details from the text.',
      'State a theme as a sentence and defend it with evidence from across a text.',
    ],
    sections: [
      {
        heading: 'An inference is a claim built from evidence',
        paragraphs: [
          'An inference is a conclusion you reach by combining what the text says with what you already know. When a story says a character’s hands shook and she checked the clock three times, you infer that she is anxious, even though the word anxious never appears. The details are explicit; the conclusion is implicit, which means it is suggested rather than stated.',
          'A strong inference accounts for most of the evidence rather than one detail. If a character slams a door but also makes dinner for a sibling, “angry” explains only half the scene, while “frustrated but caring” explains both. Strong readers hold two or three details side by side and choose the explanation that fits them all, then adjust when new evidence appears. Keeping a two-column chart, evidence on one side and inference on the other, makes that reasoning visible and keeps you from claiming more than the text supports.',
        ],
      },
      {
        heading: 'Theme is a message, not a subject',
        paragraphs: [
          'A topic is what a text is about, often in a word: friendship, courage, loss. A theme is a sentence that states what the text suggests about that topic, such as “Friendship sometimes requires telling a hard truth.” Because a theme is a claim, it can be supported or challenged with evidence, while a one-word topic cannot.',
          'Themes are rarely stated outright. Authors reveal them through patterns: a repeated image, a choice a character makes twice, or the consequences of a decision. A theme must be supported by the whole text rather than a single scene, and it should not be so broad that it could fit any story ever written.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A story says: “Maya practiced the same measure forty times, erased her notes, and started again.” What can you infer, and what evidence supports it?',
        steps: [
          'Note the details: repeated practice, erasing, restarting from the beginning.',
          'Ask what kind of person does that: someone who wants to get it exactly right.',
          'Check that the inference explains every detail, not just one.',
        ],
        answer: 'Maya is persistent or a perfectionist; the repeated practice and restarts support it.',
      },
    ],
    terms: [
      ['inference', 'a conclusion drawn from evidence plus background knowledge'],
      ['evidence', 'a detail from the text that supports a claim'],
      ['explicit', 'stated directly in the text'],
      ['implicit', 'suggested rather than stated directly'],
      ['theme', 'a message about life that a text develops'],
      ['topic', 'the subject of a text, usually stated in a word or two'],
    ],
    practice: [
      mc('What makes an inference strong?', ['it sounds clever', 'several details support it', 'the teacher agrees', 'it uses big words'], 1, 'Strong inferences explain multiple details.'),
      mc('Which is a theme rather than a topic?', ['friendship', 'courage', 'Loyalty can require sacrifice.', 'the ocean'], 2, 'A theme is a full claim about a topic.'),
      num('How many details should support a theme claim at minimum?', 2, 'At least two details from different parts of the text.'),
    ],
    review: [
      {
        prompt: 'How is a theme different from a topic?',
        answer: 'A topic names the subject in a word or two, while a theme states a claim the text makes about that subject.',
      },
      {
        prompt: 'What makes an inference strong rather than a guess?',
        answer: 'It is supported by several details from the text rather than by one detail or personal feeling.',
      },
    ],
    exercises: [
      'Read a short story, write two inferences, and list the details that support each.',
      'Write a theme sentence for a book you know and find three scenes that support it.',
    ],
  },
  'g4-ela-u2-l1': {
    topics: ['summary'],
    objectives: [
      'Identify a text’s structure from its signal words and organization.',
      'Write a summary that states the main idea and key details in your own words.',
    ],
    sections: [
      {
        heading: 'Five common structures',
        paragraphs: [
          'Writers organize information in patterns, and recognizing the pattern helps you follow and remember it. Chronological order presents events in time, using words such as first, then, and after. Compare and contrast shows similarities and differences, using both, unlike, and on the other hand. Cause and effect explains why something happened, using because, therefore, and as a result.',
          'Problem and solution states a difficulty and how it was addressed, using problem, solution, and fixed. Description lists features of a subject, using for example and also. Many texts mix structures: a science article may describe a process chronologically and then explain its effects, so a reader checks each section rather than assuming one pattern for the whole article. Previewing headings and the first sentence of each paragraph usually reveals the dominant pattern before you read closely.',
        ],
      },
      {
        heading: 'Summarizing without copying',
        paragraphs: [
          'A summary states the main idea and the key details that support it, in your own words, and it is much shorter than the original. It contains no personal opinion and no new information. Examples, repeated ideas, and small anecdotes are left out because they support the main idea rather than change it.',
          'Paraphrasing means restating an idea in fresh wording while keeping its meaning. A good test is whether your summary can be understood by someone who has not read the text. If it only makes sense alongside the original sentences, you have copied rather than summarized. Compare your draft with the original to make sure the wording and sentence structure are genuinely your own. A summary that follows the original sentence by sentence usually copies its structure even when words are swapped, so reorganize the ideas in an order that makes sense to you.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Summarize: “The city planted trees along Main Street. Shade lowered summer temperatures, and drivers slowed down. Within two years, nearby shops reported more foot traffic.”',
        steps: [
          'Find the main idea: planting trees changed the street in several good ways.',
          'Keep the key effects and drop decorative detail.',
        ],
        answer: 'Planting trees on Main Street cooled the street, slowed traffic, and increased shop traffic.',
      },
    ],
    terms: [
      ['text structure', 'the way a text organizes its ideas'],
      ['chronological', 'arranged in the order events happened'],
      ['cause and effect', 'a structure that explains why something happened'],
      ['compare and contrast', 'a structure that shows similarities and differences'],
      ['summary', 'a short restatement of the main idea and key details'],
      ['paraphrase', 'to restate an idea in your own words'],
    ],
    practice: [
      mc('Which signal words suggest cause and effect?', ['first, next, finally', 'because, therefore, as a result', 'both, unlike, similarly', 'for example, also'], 1, 'Those words link reasons to results.'),
      mc('A summary should not include', ['the main idea', 'key details', 'personal opinions', 'the author’s topic'], 2, 'Opinions belong in a response, not a summary.'),
      num('How many common text structures are described here?', 5, 'Chronological, compare and contrast, cause and effect, problem and solution, description.'),
    ],
    review: [
      {
        prompt: 'What signal words suggest cause and effect?',
        answer: 'Words such as because, therefore, since, and as a result point to a cause-and-effect structure.',
      },
      {
        prompt: 'What should a summary leave out?',
        answer: 'It should leave out examples, repetition, minor details, and the writer’s own opinions.',
      },
    ],
    exercises: [
      'Find an article, identify its structure, and list the signal words that revealed it.',
      'Summarize a two-page article in five sentences without copying any phrase.',
    ],
  },
  'g4-ela-u3-l1': {
    topics: ['counterargument'],
    objectives: [
      'Distinguish a fact from an opinion and from a supportable claim.',
      'Write a counterargument and a rebuttal for a claim you make.',
    ],
    sections: [
      {
        heading: 'Facts, opinions, and supportable claims',
        paragraphs: [
          'A fact is a statement that can be checked and shown to be true or false, such as “Austin is the capital of Texas.” An opinion is a judgment or preference that cannot be proven, such as “Austin is the best city in the state.” Words like best, worst, should, and beautiful usually signal opinion because they depend on values.',
          'A claim sits between them: it is arguable, but it can be supported with reasons and evidence. “Our school should start later” is a claim, not a fact, because it recommends a change, and it can be defended with evidence about sleep and attendance. Strong writers label their claims honestly instead of dressing opinions up as facts. A claim can be tested by asking what evidence would count against it; if nothing could, the statement is a belief rather than an arguable claim. That test works on advertisements as well as essays, where words like best often hide an opinion with nothing behind it.',
        ],
      },
      {
        heading: 'Counterarguments make an argument stronger',
        paragraphs: [
          'A counterargument states the strongest objection to your claim. A rebuttal answers it with evidence or by showing the objection matters less than it seems. Including a real counterargument shows readers you understand the issue, and it makes your own position more credible than pretending no one disagrees.',
          'Avoid the straw man, which replaces an opponent’s real objection with a weaker one that is easy to defeat. If someone argues that later start times complicate bus schedules, answer that concern directly rather than pretending they said school should never change. Fair argument is a skill citizens use in meetings, juries, and public comments. Listening to an opposing view does not require changing your mind, but it does require stating that view accurately.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Claim: “Our class should read for twenty minutes each night.” Write a counterargument and a rebuttal.',
        steps: [
          'State the strongest objection: many students have practice or jobs after school.',
          'Answer it with a practical adjustment rather than denying the problem.',
        ],
        answer: 'Counterargument: schedules are full. Rebuttal: twenty minutes can replace screen time rather than add to the day.',
      },
    ],
    terms: [
      ['fact', 'a statement that can be checked and proven true or false'],
      ['opinion', 'a judgment or preference that cannot be proven'],
      ['claim', 'an arguable statement supported by reasons and evidence'],
      ['counterargument', 'the strongest objection to a claim'],
      ['rebuttal', 'a response that answers a counterargument'],
      ['straw man', 'a weakened version of an opponent’s argument set up to be defeated'],
    ],
    practice: [
      mc('Which statement is a fact?', ['Summer is the best season.', 'Texas borders New Mexico.', 'Everyone should visit Austin.', 'Mornings are too early.'], 1, 'It can be checked on a map.'),
      mc('A weakened version of an opponent’s argument is called', ['a rebuttal', 'a straw man', 'a claim', 'evidence'], 1, 'That is the definition of a straw man.'),
      num('How many parts does a fair argument include here?', 4, 'Claim, reason, evidence, and counterargument with rebuttal.'),
    ],
    review: [
      {
        prompt: 'How can you test whether a statement is a fact?',
        answer: 'Ask whether it can be checked against evidence and shown to be true or false.',
      },
      {
        prompt: 'Why include a counterargument you cannot fully defeat?',
        answer: 'Acknowledging the strongest objection makes your argument more credible and shows you understand the issue.',
      },
    ],
    exercises: [
      'Take an opinion you hold, turn it into a claim, and list two reasons and one counterargument.',
      'Find an editorial, identify its claim and counterargument, and judge whether the rebuttal is fair.',
    ],
  },
  'g4-math-u1-l1': {
    topics: ['partial product'],
    objectives: [
      'Multiply a three-digit number by a one-digit number using partial products.',
      'Multiply two two-digit numbers and check the answer with an estimate.',
    ],
    sections: [
      {
        heading: 'Partial products break multiplication apart',
        paragraphs: [
          'The distributive property lets you split a factor into place-value parts. To multiply 23 × 14, split 14 into 10 + 4, then compute 23 × 10 = 230 and 23 × 4 = 92, and add the partial products to get 322. Each partial product is a smaller, easier multiplication, and the sum is the same as multiplying the whole numbers at once.',
          'An area model draws the same reasoning. A rectangle 23 units by 14 units is cut into four smaller rectangles: 20 × 10, 20 × 4, 3 × 10, and 3 × 4. Their areas add to 322. The model makes clear why partial products must line up by place value: the 230 is hundreds and tens, while the 92 is tens and ones. Writing the place values above the model keeps each partial product attached to the right column when you add them.',
        ],
      },
      {
        heading: 'The standard algorithm and estimation',
        paragraphs: [
          'The standard algorithm records the same partial products in columns. When a column product reaches ten or more, regroup into the next place, and when multiplying by a tens digit, write a zero in the ones place of that row because you are really multiplying by tens. Aligning rows by place value prevents errors that look like simple addition mistakes. Keeping digits in straight columns with grid paper or a ruler edge prevents most place-value errors before they happen and makes checking faster. An estimate computed first also tells you how many digits the answer should have.',
          'Estimate before computing so you can judge the answer. 36 × 24 is about 40 × 25 = 1,000, so an answer near 864 is reasonable while 86 or 8,640 is not. Estimation does not replace exact computation; it catches mistakes in it.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Compute 412 × 5 and check with an estimate.',
        steps: [
          'Estimate: 400 × 5 = 2,000, so the answer should be slightly more.',
          'Multiply by place: 2 × 5 = 10, write 0 carry 1; 1 × 5 + 1 = 6; 4 × 5 = 20.',
        ],
        answer: '2,060, which matches the estimate of about 2,000.',
      },
    ],
    terms: [
      ['partial product', 'the result of multiplying one place-value part at a time'],
      ['distributive property', 'splitting a factor into parts and multiplying each part'],
      ['area model', 'a rectangle diagram that shows multiplication by place value'],
      ['product', 'the result of a multiplication'],
      ['factor', 'a number being multiplied'],
      ['algorithm', 'a step-by-step procedure that always gives the same result'],
    ],
    practice: [
      num('What is 412 × 5?', 2060, '2,000 + 60, matching the estimate.'),
      num('What is 36 × 24?', 864, '36 × 20 = 720 and 36 × 4 = 144.'),
      mc('Which estimate checks 47 × 32?', ['about 150', 'about 1,500', 'about 15,000', 'about 15'], 1, '50 × 30 = 1,500.'),
    ],
    review: [
      {
        prompt: 'Why do partial products line up by place value?',
        answer: 'Because each product represents a different place value, so misaligning them adds the wrong amounts.',
      },
      {
        prompt: 'Estimate 412 × 5, then compute it.',
        answer: '412 is about 400, and 400 × 5 = 2,000, while the exact product is 2,060.',
      },
    ],
    exercises: [
      'Draw an area model for 34 × 26 and write the four partial products.',
      'Solve five two-digit multiplication problems and estimate each before computing.',
    ],
  },
  'g4-math-u2-l1': {
    topics: ['remainder'],
    objectives: [
      'Divide a three-digit number by a one-digit number using long division.',
      'Write a decimal as a fraction in simplest form using place value.',
    ],
    sections: [
      {
        heading: 'Long division, step by step',
        paragraphs: [
          'Long division repeats four steps: divide, multiply, subtract, and bring down. Dividing 156 by 6, you ask how many sixes fit in 15 (two), multiply 2 × 6 = 12, subtract to get 3, bring down the 6 to make 36, and divide again to get 6. The quotient is 26 with no remainder.',
          'A remainder is what is left when the divisor does not divide evenly. Check any answer with divisor × quotient + remainder = dividend. In word problems, the remainder has to be interpreted: 25 students in vans that hold 6 means four full vans and one student left over, so five vans are needed even though the quotient is 4 remainder 1. Arithmetic supplies the quotient, but the situation decides whether to round up, round down, or keep the remainder as a fraction.',
        ],
      },
      {
        heading: 'Equivalent fractions and decimals',
        paragraphs: [
          'Multiplying or dividing the numerator and denominator by the same number produces an equivalent fraction, because you are multiplying by a form of one. 6/8 divided by 2 gives 3/4. Simplifying means dividing until no common factor remains other than one, which makes fractions easier to compare and compute with.',
          'Decimals are fractions written with place value. 0.75 means 75 hundredths, or 75/100, which simplifies to 3/4. Reading decimals by their place value prevents errors: 0.7 is seven tenths and 0.65 is sixty-five hundredths, so 0.7 is larger even though 65 looks bigger than 7. Writing both numbers with the same number of decimal places, as 0.70 and 0.65, makes the comparison obvious. The number of digits does not decide value; place value does, so 0.7 is seven tenths while 0.65 is only sixty-five hundredths.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Divide 156 by 6, then write 0.6 as a fraction in simplest form.',
        steps: [
          '15 ÷ 6 = 2 with 3 left; bring down 6 to make 36; 36 ÷ 6 = 6.',
          'The quotient is 26, and 6 × 26 = 156 checks it.',
          '0.6 is six tenths, so 6/10, which simplifies to 3/5.',
        ],
        answer: '156 ÷ 6 = 26, and 0.6 = 3/5.',
      },
    ],
    terms: [
      ['dividend', 'the number being divided'],
      ['divisor', 'the number you divide by'],
      ['quotient', 'the result of a division problem'],
      ['remainder', 'the amount left over when division is not exact'],
      ['equivalent fraction', 'fractions that name the same value'],
      ['decimal', 'a number written with place value to the right of the point'],
    ],
    practice: [
      num('What is 156 ÷ 6?', 26, 'Six groups of 26 make 156.'),
      mc('Write 0.75 as a fraction in simplest form.', ['75/10', '7/5', '3/4', '75/1000'], 2, '75/100 simplifies to 3/4.'),
      num('What is the remainder when 47 is divided by 5?', 2, '45 is nine fives, leaving 2.'),
    ],
    review: [
      {
        prompt: 'How do you check a division answer?',
        answer: 'Multiply the divisor by the quotient and add the remainder; the result should equal the dividend.',
      },
      {
        prompt: 'Write 0.75 as a fraction in simplest form.',
        answer: '0.75 is 75/100, and dividing both parts by 25 gives 3/4.',
      },
    ],
    exercises: [
      'Solve four division problems with remainders and explain what each remainder means in a story.',
      'Convert five decimals to fractions and simplify each one.',
    ],
  },
  'g4-math-u3-l1': {
    topics: ['angle'],
    objectives: [
      'Classify angles as acute, right, obtuse, or straight and measure them in degrees.',
      'Convert between metric units and compute the area of a rectangle.',
    ],
    sections: [
      {
        heading: 'Angles are measured in degrees',
        paragraphs: [
          'An angle is formed by two rays that meet at a point. Angles are measured in degrees, with a full turn equal to 360 degrees. A right angle is exactly 90 degrees, an acute angle is less than 90, an obtuse angle is between 90 and 180, and a straight angle is exactly 180, forming a line.',
          'A protractor measures angles by aligning its center with the vertex and one ray with the zero line, then reading where the other ray crosses the scale. Angles can be added: if a right angle is split into a 30-degree and a 60-degree part, the parts sum to 90. Recognizing that relationship lets you find a missing angle without measuring again. Estimating an angle first, noticing that it looks a little less than a right angle, helps you catch a misread protractor.',
        ],
      },
      {
        heading: 'Area and unit conversion',
        paragraphs: [
          'The area of a rectangle is length times width, measured in square units. Metric length units are related by powers of ten: 1 meter equals 100 centimeters, and 1 kilometer equals 1,000 meters. Converting before comparing is essential, because 2.5 meters and 240 centimeters look similar as numbers but 2.5 meters is longer.',
          'To convert from a larger unit to a smaller one, multiply; to convert from smaller to larger, divide. Perimeter uses the same units as the sides, while area uses square units, so an answer of 96 square centimeters and an answer of 40 centimeters describe different measurements and cannot be compared directly. Labeling the unit on every answer is the simplest way to catch that mistake before it reaches a test.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A rectangle is 12 cm by 8 cm. Find its area and perimeter, and compare 2.5 m with 240 cm.',
        steps: [
          'Area is 12 × 8 = 96 square centimeters; perimeter is 12 + 8 + 12 + 8 = 40 centimeters.',
          '2.5 m equals 250 cm, which is longer than 240 cm.',
        ],
        answer: 'Area 96 cm², perimeter 40 cm, and 2.5 m is longer than 240 cm.',
      },
    ],
    terms: [
      ['angle', 'two rays meeting at a common point'],
      ['degree', 'the unit used to measure angles'],
      ['right angle', 'an angle of exactly 90 degrees'],
      ['acute angle', 'an angle smaller than 90 degrees'],
      ['obtuse angle', 'an angle between 90 and 180 degrees'],
      ['unit conversion', 'changing a measurement from one unit to another'],
    ],
    practice: [
      num('How many degrees are in a straight angle?', 180, 'A straight angle forms a line.'),
      mc('Which is longer, 2.5 meters or 240 centimeters?', ['2.5 meters', '240 centimeters', 'equal', 'cannot tell'], 0, '2.5 m is 250 cm.'),
      num('What is the area of a 9 cm by 4 cm rectangle?', 36, '9 × 4 = 36 square centimeters.'),
    ],
    review: [
      {
        prompt: 'How many degrees are in a straight angle?',
        answer: 'A straight angle measures exactly 180 degrees, which forms a straight line.',
      },
      {
        prompt: 'Which is longer, 2.5 meters or 240 centimeters?',
        answer: '2.5 meters is 250 centimeters, so it is ten centimeters longer than 240 centimeters.',
      },
    ],
    exercises: [
      'Measure five angles around your home with a protractor and classify each.',
      'Measure a table in centimeters and meters, then compute its area in square centimeters.',
    ],
  },
};
