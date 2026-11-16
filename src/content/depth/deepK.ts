import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/**
 * Kindergarten depth pass. These blocks add the explanatory sections, third
 * worked example, vocabulary, practice, review, and exercises needed to bring
 * each kindergarten lesson to the self-teaching standard (350 prose words,
 * three examples, eight terms, five practice items, four exercises, four
 * reviewed questions).
 */
export const DEPTH_KINDER: Record<string, LessonDepth> = {
  'k-ela-u1-l1': {
    topics: ['vowels', 'print concepts'],
    objectives: [
      'Tell the difference between uppercase and lowercase letters.',
      'Point to words and spaces on a page and show the direction of reading.',
    ],
    sections: [
      {
        heading: 'How letters and sounds connect',
        paragraphs: [
          'English has 26 letters, and each letter has a name and a sound. Five letters — a, e, i, o, and u — are vowels, and every word needs at least one vowel sound. The other 21 letters are consonants. Knowing which is which helps because vowels open the mouth and carry the beat of a word, which is why you can sing a vowel but not a consonant.',
          'Letters can be written two ways: uppercase (capital) letters begin names and sentences, and lowercase letters do most of the work inside words. The letter is the same letter either way; only the shape changes. Knowing both shapes means a sign written in capitals and a book written in lowercase are equally readable to you.',
        ],
      },
      {
        heading: 'How print works on a page',
        paragraphs: [
          'A book has a front cover, a title, and pages in order. Print runs from the top of the page to the bottom and from left to right, the same direction your finger moves when you point. At the end of a line, your finger sweeps back to the left and down to the next line, like a gardener turning to a new row.',
          'Words are separated by spaces, letters build words, and words build sentences. Pointing to each word as you say it teaches your eye to match spoken words to printed ones. This is why grown-ups read with a finger under the words: it shows that one spoken word matches one group of letters.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Look at the word “map”. Name its first letter, its last letter, and how many letters it has.',
        steps: [
          'Read left to right: the first letter is m.',
          'The last letter is p. Count each letter: m, a, p — three letters.',
        ],
        answer: 'First letter m, last letter p, three letters total.',
      },
    ],
    terms: [
      ['vowel', 'one of the five letters a, e, i, o, u that carries a word’s beat'],
      ['consonant', 'a letter that is not a vowel, such as b, m, or t'],
      ['uppercase', 'the capital form of a letter, used to begin names'],
      ['lowercase', 'the small form of a letter used inside words'],
      ['word', 'a group of letters with a space on each side'],
      ['sentence', 'words that together tell one complete idea'],
    ],
    practice: [
      mc('Which letter is a vowel?', ['m', 'a', 't', 's'], 1, 'A is one of the five vowels.'),
      num('How many letters are in the word “sun”?', 3, 'Count s, u, n: three letters.'),
      mc('Which way do we read the words on a page?', ['right to left', 'left to right', 'bottom to top', 'in a circle'], 1, 'English print goes left to right, top to bottom.'),
    ],
    review: [
      {
        prompt: 'Why does the order of the alphabet matter?',
        answer: 'It gives every letter a fixed place, which is how dictionaries and indexes organize words.',
      },
      {
        prompt: 'How is the letter “A” different from the word “A”?',
        answer: 'The letter is a shape and a sound; the word is that letter standing alone with a space around it.',
      },
    ],
    exercises: [
      'Open a book and point to three words, saying each one aloud as you touch it.',
      'Write your first name in uppercase, then in lowercase.',
    ],
  },
  'k-ela-u2-l1': {
    topics: ['phonemes', 'blending sounds'],
    objectives: [
      'Blend three sounds into a spoken word.',
      'Break a spoken word into its beginning, middle, and ending sounds.',
    ],
    sections: [
      {
        heading: 'Why rhyme and sounds come before letters',
        paragraphs: [
          'A phoneme is the smallest sound in a word. “Cat” has three: /k/, /a/, and /t/. Before children match sounds to letters, they need to hear those sounds separately. Rhyming helps because words that rhyme share the ending sounds — cat, hat, bat — so the ear learns that the beginning can change while the ending stays.',
          'The beginning sound of a word is called the onset, and the rest is the rime. In “stop,” the onset is /st/ and the rime is /op/. Playing with onsets, “stop, hop, mop,” trains the ear to notice the part that changed. This is the same skill you use later to spell unfamiliar words by sound, because the ending of a rhyming word is often spelled the same way even when the first sound changes.',
        ],
      },
      {
        heading: 'Blending and taking apart',
        paragraphs: [
          'Blending means pushing sounds together: /m/ /a/ /p/ becomes “map.” Say each sound slowly, then faster, until the word appears. Segmenting is the opposite: say “fish” slowly and pull it apart into /f/ /i/ /sh/. Blending and segmenting are the two halves of reading and spelling by sound.',
          'Clap the beats in a word to hear its parts. “Butterfly” has three beats; “sun” has one. Beats are syllables, which are larger than phonemes but easier to hear. Practicing both — clapping syllables and stretching sounds — builds the ear for reading without any worksheets.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Blend the sounds /p/ /i/ /g/ into a word.',
        steps: ['Say each sound slowly: /p/, /i/, /g/.', 'Push them together faster: pig.'],
        answer: 'Pig — three sounds blended into one word.',
      },
    ],
    terms: [
      ['phoneme', 'the smallest single sound in a spoken word'],
      ['onset', 'the first sound or sounds of a word, before the vowel'],
      ['rime', 'the ending part of a word that rhymes, such as -at in cat'],
      ['blend', 'to push separate sounds together into a word'],
      ['segment', 'to pull a word apart into its sounds'],
      ['syllable', 'a beat in a word, made by one vowel sound'],
    ],
    practice: [
      mc('Which word rhymes with “cake”?', ['kite', 'lake', 'cat', 'cup'], 1, 'Lake and cake share the ending sound.'),
      num('How many sounds are in “sun”?', 3, 'Sun has /s/, /u/, and /n/.'),
      mc('What is the first sound in “map”?', ['/m/', '/a/', '/p/', '/ap/'], 0, 'The onset of map is /m/.'),
    ],
    review: [
      {
        prompt: 'How is a syllable different from a phoneme?',
        answer: 'A syllable is a beat made of several sounds; a phoneme is a single sound.',
      },
      {
        prompt: 'Why practice swapping the first sound?',
        answer: 'It trains the ear to separate the onset from the rest and to hear what changed.',
      },
    ],
    exercises: [
      'Say three words that rhyme with “bug” and clap once for each word.',
      'Take the word “sand” apart sound by sound, then put it back together.',
    ],
  },
  'k-ela-u3-l1': {
    topics: ['story parts', 'asking questions'],
    objectives: [
      'Name the problem and solution in a story.',
      'Ask a who, what, where, or why question about a story you heard.',
    ],
    sections: [
      {
        heading: 'The parts every story has',
        paragraphs: [
          'Most stories have characters (who), a setting (where and when), a problem, attempts to solve it, and a solution. “The Little Red Hen” has a hen, a farm, a problem (no one will help), several attempts, and a solution (she does the work and eats the bread). Knowing the parts makes retelling easy because you are filling slots rather than remembering every sentence.',
          'A retell should keep the order of events. If you say the ending before the problem, your listener cannot understand why anything happened. Use words like first, then, next, and finally to show the order. A good retell also leaves out small details that do not change what happened.',
        ],
      },
      {
        heading: 'Questions that unlock meaning',
        paragraphs: [
          'Listeners ask questions to understand: Who did that? What happened next? Where were they? Why did she do that? Each question points to a different part of the story. “Why” questions are the hardest and the most useful, because they ask about motives and causes rather than just facts.',
          'Before hearing the end, you can predict what will happen by thinking about what a character wants and what is in the way. After hearing it, check your prediction: were you right, and what clue did you use? Predicting and checking turns listening into thinking rather than just hearing. A listener who predicts also notices details, because predicting forces you to pay attention to what a character wants and what stands in the way. When a prediction turns out wrong, the surprise itself is evidence about the story.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Retell “The Three Billy Goats Gruff” in five parts.',
        steps: [
          'Characters and setting: three goats and a troll, at a bridge.',
          'Problem and attempts: the troll blocks the bridge; each goat crosses by promising a bigger meal. Solution: the largest goat knocks the troll away.',
        ],
        answer: 'Goats, bridge, troll blocks them, each goat crosses, biggest goat solves it.',
      },
    ],
    terms: [
      ['character', 'a person or animal in a story'],
      ['setting', 'where and when a story happens'],
      ['problem', 'the difficulty a character must solve'],
      ['solution', 'how the problem is resolved'],
      ['predict', 'to guess what will happen next from clues'],
      ['retell', 'to tell a story again in order, in your own words'],
    ],
    practice: [
      mc('What does a “who” question ask about?', ['the place', 'the character', 'the time', 'the reason'], 1, 'Who asks about the character.'),
      mc('“Why did the goat cross the bridge?” is a question about', ['a reason', 'a place', 'a color', 'a number'], 0, 'Why asks for a cause or reason.'),
      num('How many parts are in a beginning–middle–end retell?', 3, 'Beginning, middle, and end: three parts.'),
    ],
    review: [
      {
        prompt: 'Why should a retell keep the order of events?',
        answer: 'Because causes must come before results for the listener to understand the story.',
      },
      {
        prompt: 'How do you make a prediction?',
        answer: 'Use what a character wants and what is blocking them to guess what happens next.',
      },
    ],
    exercises: [
      'Retell a story you heard today using first, then, next, and finally.',
      'Ask a family member one “why” question about a story they told you.',
    ],
  },
  'k-math-u1-l1': {
    topics: ['cardinality', 'teen numbers'],
    objectives: [
      'Count a group of up to 20 objects and say how many without recounting.',
      'Show a teen number as ten and some more.',
    ],
    sections: [
      {
        heading: 'The rules that make counting work',
        paragraphs: [
          'Counting follows rules. Say the number names in the same order every time (stable order). Touch each object exactly once (one-to-one). The last number you say tells how many there are (cardinality). You can count in any order — left to right, right to left, or in a circle — as long as each object is counted once.',
          'Children often count an object twice when it is moved or counted in a circle. Marking a starting point, or moving each object aside as it is counted, prevents double counting. Accuracy matters more than speed, because every later operation depends on a trustworthy count.',
        ],
      },
      {
        heading: 'Teen numbers are ten and some more',
        paragraphs: [
          'The numbers 11 through 19 are made of one full ten and some extra ones. Fourteen is ten and four more. If you fill a ten-frame with ten counters and add four, you have made fourteen without counting from one. This is the first place where place value appears, and it makes larger numbers easier later.',
          'Comparing groups means asking which has more, fewer, or the same. Line up objects in pairs to compare without counting: if each object in one group has a partner in the other and none are left over, the groups are equal. Counting both groups and saying which number is larger is a second way to check.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A ten-frame is full and there are 3 counters beside it. What number is shown, and how do you know?',
        steps: ['A full ten-frame holds 10.', 'Three more counters make 10 + 3.'],
        answer: '13 — one ten and three ones.',
      },
    ],
    terms: [
      ['cardinality', 'the idea that the last number counted is the total'],
      ['one-to-one', 'touching each object once as you say one number'],
      ['ten-frame', 'a grid of ten boxes used to show numbers as ten and some more'],
      ['teen number', 'a number from 11 to 19, made of ten and some ones'],
      ['compare', 'to decide which group has more, fewer, or the same'],
      ['numeral', 'the written symbol for a number, such as 7'],
    ],
    practice: [
      num('A full ten-frame plus 5 counters shows which number?', 15, '10 + 5 = 15.'),
      mc('Which group has more: 12 or 9?', ['12', '9', 'the same', 'cannot tell'], 0, '12 is three more than 9.'),
      num('How many is one ten and seven ones?', 17, '10 + 7 = 17.'),
    ],
    review: [
      {
        prompt: 'Why does moving each object help you count accurately?',
        answer: 'It shows which objects are already counted so none are counted twice.',
      },
      {
        prompt: 'How can you compare two groups without counting?',
        answer: 'Pair objects one to one; leftovers show which group has more.',
      },
    ],
    exercises: [
      'Count 18 small objects by moving each one and say the total.',
      'Build 13 and 16 with a ten-frame and tell which is larger.',
    ],
  },
  'k-math-u2-l1': {
    topics: ['shape attributes', 'position words'],
    objectives: [
      'Describe a shape by its sides and corners.',
      'Use position words to describe where an object is.',
    ],
    sections: [
      {
        heading: 'Naming shapes by their attributes',
        paragraphs: [
          'Shapes are named by their attributes: straight or curved sides, number of sides, and number of corners. A triangle has three straight sides and three corners. A square has four equal sides and four corners. A rectangle has four sides and four corners, but only opposite sides are equal. A circle has no straight sides and no corners.',
          'Flat shapes are two-dimensional; solids such as cubes, spheres, and cylinders are three-dimensional and take up space. A square drawn on paper is flat; a block with square faces is a cube. Sorting objects by one attribute at a time — all the shapes with four sides, then all the shapes with curves — makes the differences visible.',
        ],
      },
      {
        heading: 'Telling someone where something is',
        paragraphs: [
          'Position words describe location: above, below, beside, between, in front of, behind, next to, inside, and outside. “The cup is beside the plate” is more useful than “the cup is there.” Using two position words makes directions even clearer: “between the plate and the fork.”',
          'Direction words — left, right, forward, back — depend on whose view you use. Your left is not the same as a friend’s left when you face each other. Saying “on the side with the window” avoids that confusion. Clear position language is the beginning of map reading and giving directions.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A door has four sides, two long and two short, and four corners. What shape is it, and why?',
        steps: ['Count the sides: four. Count the corners: four.', 'Check the side lengths: opposite sides match, adjacent sides do not.'],
        answer: 'A rectangle — four sides and four corners with unequal adjacent sides.',
      },
    ],
    terms: [
      ['side', 'a straight edge of a flat shape'],
      ['corner', 'the point where two sides of a shape meet'],
      ['attribute', 'a feature used to describe or sort, such as sides or curves'],
      ['two-dimensional', 'flat, having length and width but no depth'],
      ['three-dimensional', 'solid, having length, width, and depth'],
      ['position word', 'a word that tells where something is, such as beside'],
    ],
    practice: [
      num('A square has how many equal sides?', 4, 'A square has four equal sides and four corners.'),
      mc('Which shape has no corners?', ['square', 'triangle', 'circle', 'rectangle'], 2, 'A circle has no straight sides or corners.'),
      mc('“The book is between the lamp and the cup” tells us', ['the color', 'the location', 'the size', 'the shape'], 1, 'Between is a position word.'),
    ],
    review: [
      {
        prompt: 'How is a square different from a rectangle?',
        answer: 'A square has four equal sides; a rectangle has opposite sides equal and adjacent sides different.',
      },
      {
        prompt: 'Why do left and right need a reference point?',
        answer: 'Because left depends on which way a person is facing.',
      },
    ],
    exercises: [
      'Find one square, one rectangle, one triangle, and one circle at home.',
      'Give a family member directions using two position words.',
    ],
  },
  'k-math-u3-l1': {
    topics: ['number bonds', 'addition and subtraction'],
    objectives: [
      'Show a number as two parts with a number bond.',
      'Tell an addition or subtraction story to match a picture.',
    ],
    sections: [
      {
        heading: 'Joining groups is addition',
        paragraphs: [
          'Addition joins two parts into a whole. If you have three red blocks and two blue blocks, the whole is five blocks. A number bond draws this: the whole at the top and the two parts below. Number bonds make the relationship visible, so 3 + 2 = 5 and 5 = 3 + 2 describe the same picture.',
          'Counting on is faster than counting from one. To add 3 + 2, start at 3 and count two more: four, five. Starting from the larger number makes it quicker still. With practice, these small sums become facts you know without counting, which frees attention for harder problems later.',
        ],
      },
      {
        heading: 'Separating and comparing is subtraction',
        paragraphs: [
          'Subtraction takes away or compares. If five ducks are on a pond and two swim away, three remain: 5 − 2 = 3. Subtraction also answers “how many more?” If you have four stickers and a friend has six, the difference is two. Both meanings matter, and the same number sentence can describe either one depending on the story.',
          'An equation is a sentence with an equals sign. The equals sign means “is the same as,” not “here comes the answer.” So 5 = 3 + 2 is a true equation, and so is 3 + 2 = 5. Reading the equals sign correctly prevents a common misunderstanding later, when equations have unknowns on both sides.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'There are 7 crackers. You eat 3. Show the subtraction and the number bond.',
        steps: ['Start with the whole: 7.', 'One part is 3 eaten; the other part is what remains: 7 − 3 = 4.'],
        answer: '4 crackers remain; the bond is 7 split into 3 and 4.',
      },
    ],
    terms: [
      ['add', 'to join two or more groups to find a total'],
      ['subtract', 'to take away or compare to find a difference'],
      ['sum', 'the total when numbers are added'],
      ['difference', 'the result of subtracting one number from another'],
      ['number bond', 'a drawing that shows a whole and its two parts'],
      ['equation', 'a number sentence with an equals sign'],
    ],
    practice: [
      num('3 + 4 = ?', 7, 'Count on from 4: five, six, seven.'),
      num('9 − 5 = ?', 4, 'Five and four make nine.'),
      mc('Which number sentence matches “6 birds, 2 fly away”?', ['6 + 2 = 8', '6 − 2 = 4', '2 + 2 = 4', '6 − 4 = 2'], 1, 'Take away 2 from 6 to get 4.'),
    ],
    review: [
      {
        prompt: 'What does the equals sign mean?',
        answer: 'That the amounts on both sides are the same, not that an answer comes next.',
      },
      {
        prompt: 'What are the two meanings of subtraction?',
        answer: 'Taking away from a group, and comparing two groups to find the difference.',
      },
    ],
    exercises: [
      'Use five spoons to show 5 − 2, then draw the number bond.',
      'Tell a joining story and a separating story using the same three numbers.',
    ],
  },
  'k-sci-u1-l1': {
    topics: ['observation', 'properties'],
    objectives: [
      'Record an observation with a drawing and a label.',
      'Sort objects by one property and explain the rule.',
    ],
    sections: [
      {
        heading: 'Observing with senses and tools',
        paragraphs: [
          'Scientists observe before they explain. You observe with your senses: you see color and shape, hear sounds, feel texture, and smell scents. Taste is used only for food a grown-up says is safe. A magnifier makes small details visible, and a drawing with labels records what you saw so you can compare it later.',
          'An observation is a fact you gathered, not a guess. “The leaf is smooth and green” is an observation. “The leaf is healthy” is an idea about the observation. Separating what you saw from what you think is the beginning of scientific reasoning, and it keeps your notes honest.',
        ],
      },
      {
        heading: 'Properties and fair comparison',
        paragraphs: [
          'A property is a feature you can describe: color, size, shape, texture, weight, and whether something sinks or floats. Comparing two objects fairly means using the same property for both. Comparing an apple’s color to an orange’s weight tells you nothing useful; comparing their colors or their weights does.',
          'Sorting puts objects into groups that share a property. You might sort buttons by color, then re-sort the same buttons by size. Each sort uses one rule at a time, and changing the rule changes the groups. This is how scientists organize collections and how libraries organize books.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Compare two leaves using two properties.',
        steps: ['Choose the same properties for both: color and texture.', 'Describe each leaf with both properties.'],
        answer: '“Leaf A is dark green and smooth; leaf B is light green and fuzzy.”',
      },
    ],
    terms: [
      ['observe', 'to gather information using your senses'],
      ['property', 'a feature you can describe, such as texture or weight'],
      ['evidence', 'information you gather that supports an idea'],
      ['sort', 'to group objects by a shared property'],
      ['magnifier', 'a tool that makes small details look larger'],
      ['compare', 'to describe how two things are alike and different'],
    ],
    practice: [
      mc('Which is an observation, not an idea?', ['The rock is beautiful', 'The rock is gray and rough', 'The rock is the best one', 'The rock is lucky'], 1, 'Color and texture are observable.'),
      mc('A magnifier helps you', ['weigh an object', 'see small details', 'measure temperature', 'hear sounds'], 1, 'It makes small details easier to see.'),
      num('How many senses are safe to observe with, excluding taste?', 4, 'Sight, hearing, smell, and touch: four.'),
    ],
    review: [
      {
        prompt: 'Why record an observation with a drawing and labels?',
        answer: 'So you can compare it later and show exactly what you saw.',
      },
      {
        prompt: 'Why compare using the same property?',
        answer: 'So the comparison is fair and tells you something real.',
      },
    ],
    exercises: [
      'Observe two objects and record color, size, and texture for each.',
      'Sort ten buttons or toys by one property, then by another.',
    ],
  },
  'k-sci-u2-l1': {
    topics: ['weather', 'weather safety'],
    objectives: [
      'Describe today’s weather with three weather words.',
      'Choose clothing and a safety action for a given forecast.',
    ],
    sections: [
      {
        heading: 'Weather words and measurement',
        paragraphs: [
          'Weather is what the air and sky are doing right now: sunny, cloudy, rainy, windy, hot, or cold. Temperature measures how hot or cold the air is, and a thermometer shows it in degrees. Rain, snow, sleet, and hail are kinds of precipitation, and wind is air moving.',
          'A forecast predicts what the weather will do, based on measurements and patterns. Forecasts are usually right about the day but can be wrong about the hour, which is why people check again before an outdoor plan. Seasons are longer patterns: summer is usually hotter and winter cooler, though Texas weather varies a lot by region.',
        ],
      },
      {
        heading: 'Dressing and staying safe',
        paragraphs: [
          'Clothing is a response to weather. Cold mornings call for layers, a coat, and a hat; hot afternoons call for light clothing, water, and shade. Layers help because you can remove one when the day warms up. Sun protection matters even when it is cool, because sunlight can burn skin on a clear winter day.',
          'Storms require actions, not clothing. When you hear thunder, go indoors or into a car and stay there until the storm passes. Lightning can strike far from the rain, so the sound of thunder is the warning. Flood water is never safe to walk or drive through, because moving water can sweep a person or a car away.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'The forecast says 95°F, sunny, and no wind. What do you wear and do?',
        steps: ['Hot and sunny means light clothing and sun protection.', 'Heat means water and shade, especially during active play.'],
        answer: 'Light clothing, a hat, sunscreen, water, and breaks in the shade.',
      },
    ],
    terms: [
      ['weather', 'what the air and sky are like right now'],
      ['temperature', 'how hot or cold the air is, measured in degrees'],
      ['thermometer', 'a tool that measures temperature'],
      ['forecast', 'a prediction of upcoming weather'],
      ['precipitation', 'water that falls from clouds as rain, snow, sleet, or hail'],
      ['season', 'a long period of the year with a typical weather pattern'],
    ],
    practice: [
      mc('Which tool measures how much rain fell?', ['ruler', 'rain gauge', 'scale', 'clock'], 1, 'A rain gauge collects and measures rainfall.'),
      mc('When you hear thunder, you should', ['go outside', 'go indoors or into a car', 'stand under a tree', 'keep swimming'], 1, 'Thunder means lightning is close.'),
      num('How many degrees warmer is 80°F than 65°F?', 15, '80 − 65 = 15 degrees.'),
    ],
    review: [
      {
        prompt: 'Why do layers help on a cold morning that becomes warm?',
        answer: 'You can remove a layer when the temperature rises.',
      },
      {
        prompt: 'Why is flood water dangerous even when it looks shallow?',
        answer: 'Moving water can be deeper and stronger than it looks and can sweep people away.',
      },
    ],
    exercises: [
      'Record the temperature and sky for three days and describe the pattern.',
      'Choose clothing for a rainy 50°F day and explain each choice.',
    ],
  },
  'k-sci-u3-l1': {
    topics: ['living things', 'habitat needs'],
    objectives: [
      'Explain three things all living things need.',
      'Distinguish living, nonliving, and once-living things.',
    ],
    sections: [
      {
        heading: 'What makes something living',
        paragraphs: [
          'Living things grow, need food or nutrients and water, use air, respond to their surroundings, and can make more of their own kind. A plant grows toward light and takes in water; a puppy eats, drinks, plays, and grows. These are signs of life you can observe without a microscope.',
          'Nonliving things do not do these things. A rock does not grow, eat, or respond. Some things are once-living: a wooden chair was part of a tree, and a cotton shirt came from a plant. They are made of material that was alive but are not alive now, which is why they do not need water or food.',
        ],
      },
      {
        heading: 'Needs and homes',
        paragraphs: [
          'Every living thing has needs: food or nutrients, water, air, and a place to live. A habitat is the place where an animal or plant finds those needs met. A pond gives a frog water, insects to eat, and plants to hide in. A desert gives a cactus sun, sand, and rare rain, and the cactus stores water to survive between storms.',
          'When a need is missing, a living thing struggles. A plant without light turns pale and stops growing; a pet without water becomes weak. Checking needs one at a time — light, water, food, space — is how gardeners and pet owners solve problems instead of guessing.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Is a wooden chair living, nonliving, or once-living? Explain.',
        steps: ['It does not grow, eat, drink, or respond now.', 'It was made from a tree, which was alive.'],
        answer: 'Once-living: made from a living tree but no longer alive.',
      },
    ],
    terms: [
      ['living', 'able to grow, use food or water, and respond to surroundings'],
      ['nonliving', 'never alive, such as a rock or water'],
      ['once-living', 'made from something that was alive but is not alive now'],
      ['need', 'something a living thing must have to survive'],
      ['habitat', 'the place where a living thing finds food, water, and shelter'],
      ['respond', 'to react to something in the surroundings'],
    ],
    practice: [
      mc('Which is nonliving?', ['a puppy', 'a rock', 'a tree', 'a bird'], 1, 'A rock does not grow, eat, or respond.'),
      mc('Which is a need of all animals?', ['toys', 'water', 'music', 'shoes'], 1, 'Water is needed by all animals.'),
      num('How many needs are named in this lesson: food, water, air, shelter?', 4, 'Four basic needs.'),
    ],
    review: [
      {
        prompt: 'Why is a wooden chair not living?',
        answer: 'It does not grow, eat, drink, or respond, even though it came from a tree.',
      },
      {
        prompt: 'What is a habitat?',
        answer: 'The place where a living thing finds the food, water, and shelter it needs.',
      },
    ],
    exercises: [
      'Sort eight things at home into living, nonliving, and once-living.',
      'Draw a habitat for a frog and label its food, water, and shelter.',
    ],
  },
  'k-ss-u1-l1': {
    topics: ['rules', 'cooperation'],
    objectives: [
      'Explain why a rule exists and what it protects.',
      'Describe how two people cooperate to finish a job.',
    ],
    sections: [
      {
        heading: 'Why groups need rules',
        paragraphs: [
          'A rule is an agreement about how people act so everyone can be safe and fair. A classroom rule about walking protects bodies; a rule about taking turns protects fairness. Rules work only when people understand the reason for them, which is why families and teachers explain the purpose instead of only saying “because I said so.”',
          'Rules can change when they stop working. If a rule makes it impossible to share materials, the group can revise it. Changing a rule with everyone’s agreement is different from ignoring it. That difference — revising fairly versus breaking quietly — is an early lesson in citizenship.',
        ],
      },
      {
        heading: 'Jobs and working together',
        paragraphs: [
          'A job is work someone does for the group. In a classroom, jobs include line leader, door holder, and materials helper. In a community, jobs include teacher, nurse, mail carrier, and firefighter. Each job covers something the group needs, which is why people depend on one another.',
          'Cooperation means working together toward a shared goal. When one person holds the paper and another cuts, the project is finished faster and better than either could do alone. Cooperation requires talking, listening, and dividing the work, and those are the same skills adults use on every crew and in every family.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A crossing guard stands at a crosswalk. What job does she do and who benefits?',
        steps: ['Her job is to stop traffic so people can cross safely.', 'Students, families, and drivers all benefit from fewer accidents.'],
        answer: 'She protects walkers at the crossing; the whole community benefits.',
      },
    ],
    terms: [
      ['rule', 'an agreement about how people act in a group'],
      ['job', 'work someone does that helps the group'],
      ['cooperate', 'to work together toward a shared goal'],
      ['community', 'a group of people who live or work together'],
      ['responsibility', 'a duty you are expected to take care of'],
      ['consequence', 'what happens as a result of an action'],
    ],
    practice: [
      mc('Why does a classroom need a rule about walking?', ['to be strict', 'to keep people safe', 'to slow everyone down', 'to make noise'], 1, 'Walking prevents collisions and injuries.'),
      mc('Holding the door for someone is an example of', ['a rule', 'cooperation', 'a consequence', 'a job title'], 1, 'It helps another person complete a task.'),
      num('How many people are needed to cooperate?', 2, 'Cooperation requires at least two people working together.'),
    ],
    review: [
      {
        prompt: 'Why should a rule have a reason people understand?',
        answer: 'People follow rules they understand, and they can help improve rules that no longer work.',
      },
      {
        prompt: 'How do community jobs make people depend on each other?',
        answer: 'Each job provides something others need, so no one can do everything alone.',
      },
    ],
    exercises: [
      'Name one home rule and explain what it protects.',
      'Interview a family member about their job and who depends on it.',
    ],
  },
  'k-ss-u2-l1': {
    topics: ['maps', 'directions'],
    objectives: [
      'Use a map key to explain two symbols.',
      'Give directions using a landmark and a direction word.',
    ],
    sections: [
      {
        heading: 'Maps are drawings from above',
        paragraphs: [
          'A map is a drawing of a place seen from above, as if you were a bird. Because a map is flat and small, it uses symbols: a blue line for a creek, a green square for a park, a cross for a hospital. A map key explains what the symbols mean, so a map without a key is a puzzle.',
          'A globe is a model of Earth shaped like a ball. A flat map can show the whole world at once, but it stretches the shapes near the edges. A globe keeps shapes accurate but lets you see only half the world at a time. Both are models, and each is useful for different questions.',
        ],
      },
      {
        heading: 'Finding your way',
        paragraphs: [
          'A compass rose shows directions: north, south, east, and west. On most maps north is at the top, so “up” means north. Direction words let you describe a route: “Walk north past the park, then turn east at the library.” A landmark — a school, a tree, a store — gives the listener a place to start.',
          'Good directions use a landmark, a direction, and a distance or count: “Go two blocks north from the library.” Vague directions (“over there”) depend on the speaker’s view and confuse everyone else. Clear directions are a kindness, and they are the same skill used in navigation apps and hiking trails. Practice by describing a familiar route out loud and checking whether someone else can follow it.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A map shows a park with a blue symbol and a cross symbol beside it. What does each likely mean?',
        steps: ['Check the map key: blue often means water, a cross often means hospital or help.', 'Match each symbol to its meaning in the key.'],
        answer: 'The blue symbol is water; the cross is a hospital or first-aid location.',
      },
    ],
    terms: [
      ['map', 'a drawing of a place seen from above'],
      ['globe', 'a round model of Earth'],
      ['symbol', 'a small drawing on a map that stands for something'],
      ['map key', 'the list that explains a map’s symbols'],
      ['compass rose', 'the symbol showing north, south, east, and west'],
      ['landmark', 'a recognizable place used to give directions'],
    ],
    practice: [
      mc('What explains the symbols on a map?', ['the title', 'the map key', 'the compass rose', 'the border'], 1, 'The key explains each symbol.'),
      mc('On most maps, the top of the page is', ['south', 'east', 'north', 'west'], 2, 'North is usually at the top.'),
      num('How many main directions does a compass rose show?', 4, 'North, south, east, and west.'),
    ],
    review: [
      {
        prompt: 'Why is a globe more accurate than a flat map for shapes?',
        answer: 'A flat map must stretch the round Earth, while a globe keeps the shapes correct.',
      },
      {
        prompt: 'What three parts make directions easy to follow?',
        answer: 'A landmark, a direction, and a distance or number of blocks.',
      },
    ],
    exercises: [
      'Draw a map of your room with a key and three symbols.',
      'Give directions to a nearby place using a landmark and a compass direction.',
    ],
  },
  'k-ss-u3-l1': {
    topics: ['symbols', 'flags'],
    objectives: [
      'Explain what a symbol stands for.',
      'Describe two Texas or United States symbols and their meaning.',
    ],
    sections: [
      {
        heading: 'Symbols stand for ideas',
        paragraphs: [
          'A symbol is a picture, object, or gesture that stands for something else. A heart stands for love, a stop sign stands for “stop,” and a school mascot stands for a team. Symbols work because people agree on what they mean, which is why the same shape can mean different things in different places.',
          'Flags are symbols made of cloth. The United States flag has fifty stars for the states and thirteen stripes for the original colonies. The Texas flag has a single star, which is why Texas is called the Lone Star State, plus blue, white, and red bands. Each part was chosen to stand for something, and the flag is treated with care because of what it represents.',
        ],
      },
      {
        heading: 'Saying the pledge and respecting symbols',
        paragraphs: [
          'The Pledge of Allegiance is a promise of loyalty to the flag and the country it represents. People stand and face the flag while saying it. Respecting a symbol can look different for different families and beliefs, and that is allowed; what matters is understanding what the symbol means and why others treat it with care.',
          'Symbols also appear in daily life: a red octagon means stop, a green light means go, and a recycling triangle means an item can be recycled. Learning to read these symbols keeps you safe and helps you follow community rules without needing a sentence to explain everything.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'What does a red octagon with the word STOP mean, and why is it shaped that way?',
        steps: ['The word and color both signal stopping.', 'The unique eight-sided shape is recognizable even from behind or in snow.'],
        answer: 'It means stop; the shape makes it recognizable at a glance.',
      },
    ],
    terms: [
      ['symbol', 'a picture or object that stands for something else'],
      ['flag', 'cloth whose colors and shapes stand for a place or group'],
      ['pledge', 'a formal promise of loyalty'],
      ['liberty', 'freedom to act and speak within the law'],
      ['state', 'one of the parts of the United States, such as Texas'],
      ['country', 'a nation with its own government and borders'],
    ],
    practice: [
      mc('What does the single star on the Texas flag stand for?', ['the capital', 'Texas itself', 'the president', 'the army'], 1, 'It stands for Texas, the Lone Star State.'),
      mc('How many stars are on the United States flag?', ['13', '48', '50', '52'], 2, 'One star for each state: fifty.'),
      num('How many stripes are on the United States flag?', 13, 'Thirteen stripes stand for the original colonies.'),
    ],
    review: [
      {
        prompt: 'Why do people need to agree on what a symbol means?',
        answer: 'A symbol only works if everyone understands the same meaning.',
      },
      {
        prompt: 'How can two people show respect differently?',
        answer: 'One may stand silently while another recites; both can be respectful.',
      },
    ],
    exercises: [
      'Draw two symbols from your neighborhood and label their meanings.',
      'Say the Pledge of Allegiance and explain one word in it to a family member.',
    ],
  },
};
