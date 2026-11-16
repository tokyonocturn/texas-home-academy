import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Grade 1 depth pass: sections, third example, vocabulary, practice, review. */
export const DEPTH_G1: Record<string, LessonDepth> = {
  'g1-ela-u1-l1': {
    topics: ['digraphs and blends', 'decode words'],
    objectives: [
      'Read words that begin or end with sh, ch, th, and wh.',
      'Explain the difference between a digraph and a blend.',
    ],
    sections: [
      {
        heading: 'Two kinds of letter teams',
        paragraphs: [
          'A digraph is two letters that make one new sound: sh in ship, ch in chin, th in thin, wh in when. You cannot hear the separate letters, only the single sound they make together. A blend is different: both consonant sounds are still heard, as in st in stop, gr in grass, and bl in blue.',
          'Knowing which team you are looking at changes how you read a word. If you say /s/ and /h/ separately in “ship,” it sounds wrong. If you collapse the two sounds in “stop,” it sounds like “sop.” Readers check whether the sounds blend or merge, and that decision is what makes the word correct.',
        ],
      },
      {
        heading: 'Using teams to read new words',
        paragraphs: [
          'When you meet an unfamiliar word, cover part of it and read the rest. In “fresh,” read the ending -esh first, then add fr. In “catch,” find the digraph tch, then add ca. Chunking turns a long word into two easy parts instead of one hard one.',
          'Word families help too. Once you can read “shop,” you can read “shed,” “fish,” and “wish” by changing only the first or last sound. Practice reading a whole family aloud, and the team stops being a rule you memorize and becomes a sound you recognize instantly. That instant recognition is what fluent reading feels like.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Read “thin” and “tin”. What is the difference?',
        steps: ['In “tin,” t and i and n are separate sounds.', 'In “thin,” t and h work as one team that makes the /th/ sound.'],
        answer: '“Thin” begins with the digraph th; “tin” begins with the single sound /t/.',
      },
    ],
    terms: [
      ['digraph', 'two letters that make one new sound, such as sh'],
      ['blend', 'two consonants whose sounds are both heard, such as st'],
      ['consonant', 'a letter that is not a vowel'],
      ['word family', 'words that share an ending, such as shop and drop'],
      ['chunk', 'a part of a word read as one piece'],
      ['decode', 'to work out a word by matching sounds to letters'],
    ],
    practice: [
      mc('Which word begins with a digraph?', ['stop', 'ship', 'grass', 'blue'], 1, 'Sh makes one sound.'),
      mc('Which word begins with a blend?', ['chin', 'thin', 'stop', 'when'], 2, 'You hear both /s/ and /t/ in stop.'),
      num('How many letters are in the digraph “sh”?', 2, 'Two letters make one sound.'),
    ],
    review: [
      {
        prompt: 'How can you tell a digraph from a blend?',
        answer: 'A digraph makes one new sound; in a blend you still hear both letters.',
      },
      {
        prompt: 'Why read a word in chunks?',
        answer: 'Smaller parts are easier to decode than one long unfamiliar string of letters.',
      },
    ],
    exercises: [
      'Find five words with sh in a book and read each aloud.',
      'Write two words starting with gr and two starting with st.',
    ],
  },
  'g1-ela-u2-l1': {
    topics: ['complete sentences', 'end marks'],
    objectives: [
      'Decide whether a group of words is a complete sentence.',
      'Choose a period, question mark, or exclamation point for a sentence.',
    ],
    sections: [
      {
        heading: 'What makes a sentence complete',
        paragraphs: [
          'A sentence needs a naming part (who or what), a telling part (what happens), and a complete idea. “The dog barked” is complete. “The dog” is only a naming part, and “barked loudly” is only a telling part. Both leave the reader waiting for the missing piece.',
          'A complete idea can stand alone and make sense to someone else. “Because it rained” has a naming and telling part but depends on another idea, so it is a fragment. Testing whether a sentence can stand alone is the quickest way to find fragments in your own writing.',
        ],
      },
      {
        heading: 'Capitals and end marks',
        paragraphs: [
          'A capital letter marks the beginning of a sentence and the beginning of a name. An end mark marks the finish: a period for a statement, a question mark for a question, and an exclamation point for strong feeling or a command. Without them, a reader cannot tell where one idea stops and the next begins.',
          'Read your sentence aloud to choose the end mark. If your voice falls, use a period. If it rises and expects an answer, use a question mark. If it is urgent or surprised, use an exclamation point — but use it sparingly, or the emphasis stops working. A page full of exclamation points reads as shouting, and the reader stops trusting it. Save the exclamation point for a line that truly deserves it.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Fix: “where is my backpack”',
        steps: ['It asks a question, so it needs a capital and a question mark.', 'Write: Where is my backpack?'],
        answer: '“Where is my backpack?” — capital W and a question mark.',
      },
    ],
    terms: [
      ['sentence', 'words that tell one complete idea'],
      ['fragment', 'a group of words that is not a complete sentence'],
      ['subject', 'the naming part of a sentence'],
      ['predicate', 'the telling part of a sentence'],
      ['end mark', 'punctuation that shows a sentence has finished'],
      ['statement', 'a sentence that tells something and ends with a period'],
    ],
    practice: [
      mc('Which is a complete sentence?', ['The red ball.', 'Ran down the hill.', 'The cat slept.', 'Because it was late.'], 2, 'It has a naming part, a telling part, and a complete idea.'),
      mc('Which end mark fits “Can you help me”', ['period', 'question mark', 'exclamation point', 'comma'], 1, 'It asks a question.'),
      num('How many capital letters belong in “my friend ana lives in austin”?', 3, 'My, Ana, and Austin each need a capital.'),
    ],
    review: [
      {
        prompt: 'How do you test whether a group of words is a sentence?',
        answer: 'Check for a naming part, a telling part, and a complete idea that can stand alone.',
      },
      {
        prompt: 'Why use exclamation points sparingly?',
        answer: 'If everything is emphasized, then nothing stands out as important.',
      },
    ],
    exercises: [
      'Write three sentences about your day with correct capitals and end marks.',
      'Find and fix two fragments in a piece of your own writing.',
    ],
  },
  'g1-ela-u3-l1': {
    topics: ['characters and setting', 'retelling'],
    objectives: [
      'Describe a character by what they do and say.',
      'Retell a story with a beginning, middle, and end.',
    ],
    sections: [
      {
        heading: 'Characters and setting',
        paragraphs: [
          'Characters are the people or animals a story is about. You learn about them from what they do, what they say, and how others treat them. A character who shares a snack is shown as generous through action, not by the narrator announcing “she was generous.”',
          'The setting is where and when the story happens. A story set in a snowy forest at night feels different from one set in a sunny kitchen. Setting can even create a problem, as when a character is lost in a storm. Noticing setting helps you understand why characters act as they do.',
        ],
      },
      {
        heading: 'Retelling in order',
        paragraphs: [
          'A retell has three parts: beginning, middle, and end. The beginning introduces the characters and setting and often states a problem. The middle shows attempts to solve it. The end shows how it turned out. Order words — first, next, then, finally — keep the listener oriented.',
          'A good retell leaves out tiny details and keeps what changed. If the character learned something or solved a problem, that belongs. If someone wore a blue hat, that belongs only if the hat matters. Deciding what matters is the beginning of summarizing, a skill used in every subject. A retell that keeps every detail is really a summary of nothing, because it gives the listener no way to tell what mattered. Ask yourself what changed by the end, and build the retell around that change.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Retell a story about a boy who loses his dog at the park.',
        steps: ['Beginning: the boy and his dog are at the park; the dog runs off.', 'Middle and end: he searches, asks a helper, and finds the dog by the gate.'],
        answer: 'Beginning, middle, and end: the loss, the search, the reunion.',
      },
    ],
    terms: [
      ['character', 'a person or animal in a story'],
      ['setting', 'where and when a story takes place'],
      ['retell', 'to tell a story again in your own words and in order'],
      ['problem', 'the difficulty a character faces'],
      ['solution', 'how the problem is resolved'],
      ['order word', 'a word such as first or next that shows sequence'],
    ],
    practice: [
      mc('What does the setting tell you?', ['who the story is about', 'where and when it happens', 'who wrote it', 'how long it is'], 1, 'Setting is place and time.'),
      mc('Which is an order word?', ['beautiful', 'finally', 'yellow', 'quickly'], 1, 'Finally shows sequence.'),
      num('How many parts does a beginning–middle–end retell have?', 3, 'Beginning, middle, end.'),
    ],
    review: [
      {
        prompt: 'How can you learn about a character without being told?',
        answer: 'Watch what the character does and says, and how others respond.',
      },
      {
        prompt: 'What should a retell leave out?',
        answer: 'Small details that do not change what happened or what the character learned.',
      },
    ],
    exercises: [
      'Retell a story to a family member using first, next, then, finally.',
      'Draw a character and write one sentence about what they do.',
    ],
  },
  'g1-math-u1-l1': {
    topics: ['place value', 'ten more and ten less'],
    objectives: [
      'Write a two-digit number as tens and ones.',
      'Find ten more and ten less than a number without counting.',
    ],
    sections: [
      {
        heading: 'Bundles of ten',
        paragraphs: [
          'A two-digit number is made of tens and ones. In 47, the 4 means four groups of ten and the 7 means seven single ones. Forty-seven is 40 + 7. Bundling objects into groups of ten makes counting faster and shows why the digits have different values.',
          'The position of a digit matters. In 47 the 4 is worth 40, but in 74 the 4 is worth 4. Swapping digits changes the number, which is why reading left to right and naming the tens place first prevents mistakes. A place-value chart with a tens column and a ones column makes the difference visible.',
        ],
      },
      {
        heading: 'Ten more and ten less',
        paragraphs: [
          'Adding ten changes only the tens digit: 47 becomes 57. Subtracting ten reverses it: 47 becomes 37. The ones digit stays the same because you are adding or removing a full bundle of ten. Recognizing this pattern lets you compute in your head instead of counting one by one.',
          'You can check by counting on or back by tens: 47, 57, 67 for two more tens. If the ones digit changes, a counting error has crept in. This pattern is the foundation for mental addition later, when you add 20 or 30 the same way.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'What is 10 more than 63, and what is 10 less?',
        steps: ['63 is 6 tens and 3 ones.', 'Ten more adds one ten: 73. Ten less removes one ten: 53.'],
        answer: '73 and 53; the ones digit stays 3.',
      },
    ],
    terms: [
      ['tens place', 'the digit that counts groups of ten'],
      ['ones place', 'the digit that counts single items'],
      ['digit', 'one of the symbols 0 through 9 used to write numbers'],
      ['bundle', 'a group of ten ones traded for one ten'],
      ['place value', 'the value a digit has because of its position'],
      ['mental math', 'computing in your head without writing every step'],
    ],
    practice: [
      num('What is 10 more than 48?', 58, 'Only the tens digit changes to 5.'),
      num('What is 10 less than 72?', 62, 'The tens digit drops from 7 to 6.'),
      mc('In 85, the 8 is worth', ['8', '80', '85', '800'], 1, 'It is in the tens place, so 8 × 10.'),
    ],
    review: [
      {
        prompt: 'Why does the ones digit stay the same when you add ten?',
        answer: 'You are adding a full bundle of ten, not changing the single ones.',
      },
      {
        prompt: 'How do you write 7 tens and 4 ones as a number?',
        answer: '74, because 7 tens make 70 and 4 ones make 4.',
      },
    ],
    exercises: [
      'Bundle 42 objects into tens and ones and write the number.',
      'Say a number and have a family member name ten more and ten less.',
    ],
  },
  'g1-math-u2-l1': {
    topics: ['make ten', 'doubles facts'],
    objectives: [
      'Use the make-ten strategy to add within 20.',
      'Use a doubles fact to solve a near double.',
    ],
    sections: [
      {
        heading: 'Making a ten first',
        paragraphs: [
          'Make-ten turns a hard sum into an easy one. To add 8 + 5, notice that 8 needs 2 more to reach 10. Break 5 into 2 and 3, add 8 + 2 = 10, then add the remaining 3 to get 13. The total never changes; only the order of adding does.',
          'This works because ten is easy to add to any number. With practice, you stop writing the break apart and just see it: 9 + 4 becomes 10 + 3. The strategy is especially useful for sums between 11 and 18, which are the ones children most often count on their fingers.',
        ],
      },
      {
        heading: 'Doubles and near doubles',
        paragraphs: [
          'A doubles fact is a number added to itself: 6 + 6 = 12. Doubles are easy to remember because the two parts are equal. Once you know a double, a near double is one more or one less: 6 + 7 is 6 + 6 plus 1, so 13. 6 + 5 is 6 + 6 minus 1, so 11.',
          'Doubles also help with subtraction. If 7 + 7 = 14, then 14 − 7 = 7. Knowing the doubles facts from 1 + 1 through 10 + 10 gives you a toolkit for many other facts. Say them aloud in order until they are automatic rather than counted.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Solve 9 + 6 using make-ten.',
        steps: ['9 needs 1 to make 10.', 'Break 6 into 1 and 5; 10 + 5 = 15.'],
        answer: '15 — the ten is made first, then the leftover is added.',
      },
    ],
    terms: [
      ['make ten', 'using facts that add to ten to solve a harder sum'],
      ['doubles fact', 'a number added to itself, such as 7 + 7'],
      ['near double', 'a sum one more or one less than a double'],
      ['break apart', 'to split a number into two parts that are easier to use'],
      ['sum', 'the answer to an addition problem'],
      ['automatic', 'known without counting or working it out'],
    ],
    practice: [
      num('8 + 6 = ?', 14, '8 + 2 = 10, then 10 + 4 = 14.'),
      num('7 + 8 = ?', 15, '7 + 7 = 14, plus 1 more.'),
      mc('Which doubles fact helps with 9 + 8?', ['9 + 9 = 18', '8 + 8 = 16', '10 + 10 = 20', '7 + 7 = 14'], 0, '9 + 8 is one less than 9 + 9.'),
    ],
    review: [
      {
        prompt: 'Why break a number apart to make ten?',
        answer: 'Ten is easy to add to, so making a ten simplifies the remaining addition.',
      },
      {
        prompt: 'How does a doubles fact help with subtraction?',
        answer: 'If a + a = b, then b − a = a, so the subtraction fact is already known.',
      },
    ],
    exercises: [
      'Solve 9 + 5 and 8 + 7 aloud, explaining each make-ten step.',
      'Write all the doubles facts from 1 + 1 to 10 + 10.',
    ],
  },
  'g1-math-u3-l1': {
    topics: ['measurement units', 'telling time'],
    objectives: [
      'Measure an object with nonstandard and standard units.',
      'Tell time to the hour and half hour on an analog clock.',
    ],
    sections: [
      {
        heading: 'Measuring with repeated units',
        paragraphs: [
          'Measuring means counting how many units long something is. With paper clips, a pencil might be 6 clips long; with a ruler, it might be 5 inches. Both are correct, but the standard unit lets another person get the same answer without using your clips.',
          'Start measuring at the zero mark, not the end of the ruler, and keep units end to end with no gaps or overlaps. Gaps make the measurement too short; overlaps make it too long. These habits matter when a wrong measurement means a shelf does not fit or a recipe fails. Measure twice when the result matters, because adjusting later usually costs more.',
        ],
      },
      {
        heading: 'Reading a clock',
        paragraphs: [
          'A clock has a short hour hand and a long minute hand. When the minute hand points to 12, the time is exactly on the hour. When it points to 6, thirty minutes have passed and the time is half past the hour. The hour hand sits halfway between two numbers at half past.',
          'Read the hour first, then the minutes. At 7:30, the hour hand is between 7 and 8, and the minute hand is on 6. At 7:00, the hour hand points directly at 7 and the minute hand at 12. Checking both hands prevents the common mistake of reading only the hour. Reading a clock improves with daily practice, so name the time whenever you see one.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'The minute hand points to 6 and the hour hand is halfway between 3 and 4. What time is it?',
        steps: ['Minute hand on 6 means 30 minutes past.', 'Hour hand between 3 and 4 means the hour is 3.'],
        answer: '3:30, or half past three.',
      },
    ],
    terms: [
      ['unit', 'a repeated amount used to measure, such as an inch'],
      ['standard unit', 'a unit everyone agrees on, such as a centimeter'],
      ['inch', 'a standard unit of length used on a ruler'],
      ['hour hand', 'the short hand that shows the hour'],
      ['minute hand', 'the long hand that shows the minutes'],
      ['half hour', 'thirty minutes, when the minute hand points to 6'],
    ],
    practice: [
      num('How many minutes are in half an hour?', 30, 'Half of 60 minutes is 30.'),
      mc('When the minute hand points to 12, the time is', ['half past', 'exactly on the hour', 'a quarter past', 'noon only'], 1, 'It is exactly on the hour.'),
      mc('Why start measuring at zero?', ['it looks neat', 'so the length is counted correctly', 'to make it longer', 'to avoid inches'], 1, 'Starting at zero counts the whole length.'),
    ],
    review: [
      {
        prompt: 'Why is a ruler better than a paper clip for measuring?',
        answer: 'A ruler uses a standard unit, so another person measures the same length.',
      },
      {
        prompt: 'How do you tell 4:30 from 4:00?',
        answer: 'At 4:30 the minute hand points to 6 and the hour hand is between 4 and 5.',
      },
    ],
    exercises: [
      'Measure a table with a spoon and with a ruler, then compare.',
      'Draw clocks for 2:00, 2:30, and 3:00 and label each.',
    ],
  },
  'g1-sci-u1-l1': {
    topics: ['states of matter', 'changes of state'],
    objectives: [
      'Classify matter as solid, liquid, or gas.',
      'Explain what heating and cooling do to matter.',
    ],
    sections: [
      {
        heading: 'Three states and their properties',
        paragraphs: [
          'Solids keep their own shape. A block stays a block whether it is in a box or on a table. Liquids keep their volume but take the shape of their container: pour water into a cup and it becomes cup-shaped. Gases spread out to fill whatever space they are in, which is why you can smell something across a room.',
          'Everything around you is matter, and matter takes up space and has mass. Air is matter even though you cannot see it; a balloon inflates because air fills it. Recognizing the state of a material helps you predict whether it will stack, pour, or spread.',
        ],
      },
      {
        heading: 'Heating and cooling change state',
        paragraphs: [
          'Heating a solid can melt it into a liquid; cooling a liquid can freeze it into a solid. Ice melts at 32°F (0°C), and water boils at 212°F (100°C) at sea level. Heating a liquid enough turns it into a gas, and cooling a gas can turn it back into a liquid, as when water vapor condenses on a cold glass.',
          'These are physical changes: the material is still the same substance. Melted ice is still water. That is different from a chemical change, where a new substance forms. Knowing the difference helps you decide whether a change can be reversed by simply heating or cooling it again. Freezing a juice box and letting it thaw shows the change is reversible, because it is still juice.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Classify ice, water, and steam, and explain how to change one into another.',
        steps: ['Ice keeps its shape: solid. Water takes the container shape: liquid. Steam spreads to fill space: gas.', 'Heating moves ice to water to steam; cooling reverses the direction.'],
        answer: 'Solid, liquid, gas; heating and cooling move matter between them.',
      },
    ],
    terms: [
      ['solid', 'matter that keeps its own shape'],
      ['liquid', 'matter that flows and takes the shape of its container'],
      ['gas', 'matter that spreads out to fill its space'],
      ['matter', 'anything that takes up space and has mass'],
      ['melt', 'to change from solid to liquid by heating'],
      ['freeze', 'to change from liquid to solid by cooling'],
    ],
    practice: [
      mc('Which state keeps its own shape?', ['solid', 'liquid', 'gas', 'all of them'], 0, 'Solids keep their shape.'),
      mc('Water vapor is a', ['solid', 'liquid', 'gas', 'mixture'], 2, 'Vapor is water in gas form.'),
      num('At what temperature Fahrenheit does water freeze?', 32, 'Water freezes at 32°F, or 0°C.'),
    ],
    review: [
      {
        prompt: 'How do you know air is matter?',
        answer: 'It takes up space and has mass, as a filled balloon shows.',
      },
      {
        prompt: 'Why is melting a physical change?',
        answer: 'The substance stays the same; only its state changes.',
      },
    ],
    exercises: [
      'Find a solid, a liquid, and a gas at home and list them.',
      'Melt ice cubes in three places and record which melts first.',
    ],
  },
  'g1-sci-u2-l1': {
    topics: ['basic needs', 'life cycles'],
    objectives: [
      'List the basic needs of plants and animals.',
      'Put the stages of a plant life cycle in order.',
    ],
    sections: [
      {
        heading: 'What living things need',
        paragraphs: [
          'Plants need light, water, air, and nutrients from soil. Animals need food, water, air, and shelter. A need is something a living thing cannot survive without; a want is something nice to have. A dog needs water but does not need a toy, even though it may enjoy one.',
          'When a need is missing, the living thing shows it. A plant without light grows pale and leggy; a pet without water becomes weak. Checking each need in turn is how gardeners and pet owners solve problems. It is also how scientists test ideas: change one condition and observe the effect.',
        ],
      },
      {
        heading: 'Life cycles and stages',
        paragraphs: [
          'A life cycle is the series of stages a living thing passes through. A bean seed sprouts, grows leaves, flowers, and forms new seeds. A frog begins as an egg, becomes a tadpole, grows legs, and becomes an adult. Each stage has different needs, which is why a tadpole lives in water and an adult frog can live on land.',
          'Young living things are not miniature adults. A seedling cannot survive the same conditions as a mature plant, and a puppy needs different food than a grown dog. Recognizing stages helps you care for living things correctly and explains why a garden must be replanted each year. Some animals change form completely, which is why a caterpillar and a butterfly look like different creatures.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Put the stages of a bean plant in order.',
        steps: ['Start with the seed in soil and the root emerging.', 'Then the sprout, leaves, flowers, and finally seed pods.'],
        answer: 'Seed → root and sprout → leaves → flowers → seed pods.',
      },
    ],
    terms: [
      ['need', 'something a living thing must have to survive'],
      ['life cycle', 'the stages a living thing passes through'],
      ['seed', 'the part of a plant that can grow into a new plant'],
      ['sprout', 'a young plant just coming out of the soil'],
      ['tadpole', 'the water-living young stage of a frog'],
      ['stage', 'one step in a life cycle'],
    ],
    practice: [
      mc('Which is a need for all animals?', ['a toy', 'water', 'music', 'a bed'], 1, 'Water is required for survival.'),
      mc('A tadpole becomes a', ['seed', 'frog', 'bird', 'fish'], 1, 'Tadpoles grow into frogs.'),
      num('How many stages are in the bean plant cycle described here?', 5, 'Seed, sprout, leaves, flowers, seed pods.'),
    ],
    review: [
      {
        prompt: 'How is a need different from a want?',
        answer: 'A need is required for survival; a want is optional and only improves comfort.',
      },
      {
        prompt: 'Why do young animals need different care than adults?',
        answer: 'Each stage has different needs for food, shelter, and safety.',
      },
    ],
    exercises: [
      'Draw and label four stages of a plant life cycle.',
      'Observe a pet or plant and list three of its needs.',
    ],
  },
  'g1-sci-u3-l1': {
    topics: ['weather patterns', 'sun and moon'],
    objectives: [
      'Describe a weather pattern over several days.',
      'Explain why the Moon appears to shine.',
    ],
    sections: [
      {
        heading: 'Patterns in weather',
        paragraphs: [
          'Weather changes from day to day, but patterns appear over weeks and seasons. A week of afternoon thunderstorms is a pattern; so is a dry, hot August. Recording the temperature and sky each day lets you see patterns that a single day cannot show.',
          'Seasons are long patterns caused by Earth’s tilt as it orbits the Sun. Summer days are longer and sunlight is more direct; winter days are shorter and the light is slanted. Texas has wide weather swings within a season, so a single cold day does not disprove a seasonal pattern.',
        ],
      },
      {
        heading: 'Sunlight and moonlight',
        paragraphs: [
          'The Sun produces its own light and heat. The Moon does not; it reflects sunlight from its surface, which is why it looks bright at night. The Moon’s shape appears to change over about a month because we see different amounts of its sunlit side from Earth.',
          'Sunlight also causes shadows, and shadow length changes during the day. Shadows are shortest near midday, when the Sun is highest, and longest in early morning and late afternoon. Observing a shadow over a day is an easy way to see Earth’s rotation without special equipment. Record the time and the shadow length together, and the pattern explains why afternoons feel different from noon. Repeating the observation on another day shows whether the pattern is stable, and a single odd day does not break a longer trend.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Why does the Moon look bright if it does not make light?',
        steps: ['Compare it with the Sun, which produces light and heat.', 'The Moon’s surface reflects sunlight toward Earth.'],
        answer: 'We see reflected sunlight from the Moon’s surface.',
      },
    ],
    terms: [
      ['weather', 'the condition of the air and sky at a given time'],
      ['pattern', 'something that repeats in a predictable way'],
      ['season', 'a long period of the year with typical weather'],
      ['reflect', 'to bounce light back from a surface'],
      ['shadow', 'the dark area where an object blocks light'],
      ['orbit', 'the path one object follows around another'],
    ],
    practice: [
      mc('Why does the Moon shine?', ['it makes light', 'it reflects sunlight', 'it is on fire', 'it has electricity'], 1, 'The Moon reflects sunlight.'),
      mc('When are shadows shortest?', ['early morning', 'midday', 'late afternoon', 'at night'], 1, 'The Sun is highest near midday.'),
      num('About how many days does the Moon take to repeat its shape pattern?', 29, 'About 29 days, close to one month.'),
    ],
    review: [
      {
        prompt: 'How is a pattern different from a single day’s weather?',
        answer: 'A pattern repeats over many days; one day is only one data point.',
      },
      {
        prompt: 'What causes seasons?',
        answer: 'Earth’s tilt as it orbits the Sun changes how direct the sunlight is.',
      },
    ],
    exercises: [
      'Record weather for five days and describe any pattern.',
      'Measure a shadow in the morning, midday, and afternoon.',
    ],
  },
  'g1-ss-u1-l1': {
    topics: ['family roles', 'community interdependence'],
    objectives: [
      'Describe a tradition and what it shows about a family.',
      'Explain how community members depend on one another.',
    ],
    sections: [
      {
        heading: 'Families, roles, and traditions',
        paragraphs: [
          'Families differ in size, structure, and customs, but every family shares work so members are cared for. A role is a job someone does in the group: cooking, earning money, driving, or caring for a younger child. Roles can change as people grow or circumstances shift.',
          'A tradition is a practice passed down over time, such as a holiday meal or a weekly game night. Traditions carry memories and values, and they connect generations. Asking why a tradition exists often reveals what a family prizes, such as generosity, patience, or remembering relatives.',
        ],
      },
      {
        heading: 'Depending on one another',
        paragraphs: [
          'Community members depend on one another through work and trade. A farmer grows food, a truck driver moves it, a grocer sells it, and a cook prepares it. Remove one link and the others are affected, which is why communities need many kinds of jobs rather than one.',
          'Cooperation makes these chains work. People take turns, share tools, and keep promises. When someone does not do their part, others must compensate, and the whole group slows down. That is why responsibility is a community skill, not just a personal habit. A family is a small community, and the same habits that keep a household running keep a town running too. Learning to notice who depends on whom makes it easier to see why shared work matters. Naming who depends on whom turns a vague idea of community into something you can see at home.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'How does a family tradition show what the family values?',
        steps: ['Name what happens in the tradition.', 'Ask what it protects or teaches, such as sharing or remembering.'],
        answer: 'Cooking extra food to share shows the family values generosity.',
      },
    ],
    terms: [
      ['family', 'a group of people related by birth, adoption, or choice'],
      ['tradition', 'a practice passed from one generation to another'],
      ['role', 'the job a person does in a group'],
      ['community', 'a group of people who live or work together'],
      ['depend', 'to rely on someone or something for a need'],
      ['responsibility', 'a duty you are expected to carry out'],
    ],
    practice: [
      mc('A weekly family dinner is an example of', ['a rule', 'a tradition', 'a role', 'a job'], 1, 'It is a repeated family practice.'),
      mc('Why do communities need many jobs?', ['so everyone is busy', 'so needs can be met by different people', 'to make money', 'to follow rules'], 1, 'Different jobs meet different needs.'),
      num('How many people are needed for dependence?', 2, 'At least two people rely on each other.'),
    ],
    review: [
      {
        prompt: 'Why can roles in a family change?',
        answer: 'People grow, work changes, and needs shift, so jobs are reassigned.',
      },
      {
        prompt: 'What happens when one person does not do their part?',
        answer: 'Others must compensate, and the group’s work slows or fails.',
      },
    ],
    exercises: [
      'Ask a family member about a tradition and write two sentences about it.',
      'List three jobs in your home and what each protects.',
    ],
  },
  'g1-ss-u2-l1': {
    topics: ['Texas symbols', 'Stephen F. Austin'],
    objectives: [
      'Name three Texas symbols and what they represent.',
      'Explain one contribution of Stephen F. Austin.',
    ],
    sections: [
      {
        heading: 'Symbols of Texas',
        paragraphs: [
          'Texas has official symbols chosen to represent the state. The lone star stands for Texas itself and gives the state its nickname. The bluebonnet is the state flower, the mockingbird the state bird, and the pecan tree the state tree. Each was chosen because it is common or distinctive in Texas.',
          'Symbols work by agreement: people decide that a flower or a bird will stand for the whole state. Learning symbols is a way of learning what a place values and what grows there. State symbols appear on flags, signs, coins, and license plates.',
        ],
      },
      {
        heading: 'Stephen F. Austin and early settlement',
        paragraphs: [
          'Stephen F. Austin led the first large group of Anglo settlers into Texas in the 1820s, carrying out his father’s contract with the Mexican government. Because of that role, he is often called the “Father of Texas.” Settlers received land in exchange for promises to obey Mexican law and, in many cases, to bring enslaved people, a contradiction that shaped Texas history.',
          'Austin’s colony changed the region, bringing new farms, towns, and tensions with the Mexican government and with Native peoples already living there. Learning about him means learning both about settlement and about the conflicts it created, not only about a heroic nickname.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'What does the bluebonnet represent, and why is it a fitting symbol?',
        steps: ['It is the state flower of Texas.', 'It grows wild across much of the state in spring.'],
        answer: 'It stands for Texas’s natural landscape, which is why it was chosen.',
      },
    ],
    terms: [
      ['symbol', 'a picture or object that stands for something else'],
      ['state flower', 'the flower chosen to represent a state'],
      ['settler', 'a person who moves to a new place to live'],
      ['colony', 'a settlement controlled by a distant government'],
      ['empresario', 'an agent who brought settlers to Mexican Texas'],
      ['nickname', 'an informal name used instead of the official one'],
    ],
    practice: [
      mc('Which is the Texas state flower?', ['rose', 'bluebonnet', 'sunflower', 'tulip'], 1, 'The bluebonnet is the state flower.'),
      mc('Stephen F. Austin is often called the', ['Father of Texas', 'King of Texas', 'First President', 'State Bird'], 0, 'He led the first large Anglo colony.'),
      num('How many stars are on the Texas flag?', 1, 'One star, which is why Texas is the Lone Star State.'),
    ],
    review: [
      {
        prompt: 'Why do states choose symbols?',
        answer: 'Symbols give people a shared way to represent and recognize their state.',
      },
      {
        prompt: 'Why is Austin’s story more complicated than a nickname suggests?',
        answer: 'His colony brought settlement but also conflicts over land, slavery, and Mexican authority.',
      },
    ],
    exercises: [
      'Draw the Texas flag and label its colors and star.',
      'Choose one Texas symbol and write why it fits the state.',
    ],
  },
  'g1-ss-u3-l1': {
    topics: ['map key and symbols', 'goods and services'],
    objectives: [
      'Use a map key and compass directions to locate places.',
      'Classify examples as goods or services.',
    ],
    sections: [
      {
        heading: 'Reading a map',
        paragraphs: [
          'A map key explains the symbols on a map, and a compass rose shows direction. If the key says a blue line is a creek and a black square is a school, you can find both without asking. Direction words let you say where something is relative to something else: “The school is north of the park.”',
          'Maps are models, so they leave things out. A map of a neighborhood may not show every tree or mailbox, because those details would make it hard to read. Choosing what to include is part of making a map useful for its purpose, whether that is walking, driving, or finding a bathroom. A map key turns a confusing set of shapes into readable information. Anyone can learn to read a map once they know what the symbols mean.',
        ],
      },
      {
        heading: 'Goods, services, and trade',
        paragraphs: [
          'Goods are physical things people buy, such as bread, shoes, or pencils. Services are work people do for pay, such as a haircut, a bus ride, or a repair. Many businesses provide both: a bakery sells bread (a good) and delivers it (a service).',
          'People trade because they cannot make everything themselves. A town with a bakery, a dentist, and a mechanic can meet more needs than a family alone. Money makes trade easier because it lets people exchange goods and services without finding someone who wants exactly what they have.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A bakery sells bread and delivers it. What is the good and what is the service?',
        steps: ['The bread is a thing you can take home.', 'Delivering is work done for the customer.'],
        answer: 'Bread is the good; delivery is the service.',
      },
    ],
    terms: [
      ['map key', 'the list that explains a map’s symbols'],
      ['compass rose', 'the symbol showing north, south, east, and west'],
      ['good', 'a physical item people buy'],
      ['service', 'work someone does for pay'],
      ['trade', 'exchanging goods or services'],
      ['money', 'a medium of exchange used to buy goods and services'],
    ],
    practice: [
      mc('A haircut is an example of', ['a good', 'a service', 'a map', 'a symbol'], 1, 'A haircut is work done for pay.'),
      mc('What explains symbols on a map?', ['the title', 'the map key', 'the compass rose', 'the border'], 1, 'The key explains each symbol.'),
      num('How many main directions does a compass rose show?', 4, 'North, south, east, and west.'),
    ],
    review: [
      {
        prompt: 'Why does a map leave some things out?',
        answer: 'Including everything would make it cluttered and hard to read.',
      },
      {
        prompt: 'Why does money make trade easier?',
        answer: 'It avoids needing a direct swap of goods between two people.',
      },
    ],
    exercises: [
      'Draw a map with a key and label a school and a park.',
      'List five purchases and mark each as a good or a service.',
    ],
  },
};
