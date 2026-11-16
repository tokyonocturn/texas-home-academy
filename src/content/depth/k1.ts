import type { LessonDepth } from './types';

/**
 * Authored depth for kindergarten and grade 1. Each entry is written for its own
 * lesson: the application uses that lesson's idea in a real situation, the
 * second example shows the reasoning again, and the review answers are model
 * answers a parent can compare against.
 */
export const DEPTH_K1: Record<string, LessonDepth> = {
  'k-ela-u1-l1': {
    topics: ['alphabet', 'letter sounds'],
    applicationTitle: 'Letters you can find today',
    application:
      'Letters are tools you use all day, not just in school. The A on a cereal box, the M on a mailbox, and the S on a stop sign are the same letters you name in class. When you can say a letter’s name and its sound, you can find it on signs, labels, and book covers, and you can begin to read words you have never seen before.',
    example: {
      prompt: 'Which letter starts the word “sun”, and what sound does it make?',
      steps: [
        'Say the word slowly and listen to the very first sound: sss-un.',
        'The first sound is /s/, and the letter that spells it is S.',
      ],
      answer: 'S. It makes the /s/ sound, as in sun, sock, and sand.',
    },
    terms: [
      ['letter name', 'the label we use to talk about a letter, such as “B”'],
      ['letter sound', 'the sound a letter makes in a word, such as /b/ in bat'],
    ],
    review: [
      {
        prompt: 'Where does reading start on a page?',
        answer:
          'At the top left, then left to right across the line, then down to the next line.',
      },
      {
        prompt: 'How can you tell a letter from a picture?',
        answer:
          'A letter stands for a sound we use in words; a picture stands for a thing or an idea.',
      },
    ],
    exercises: [
      'Walk through one room and name five letters you can see on labels or signs.',
      'Trace your first name and say each letter sound as you write it.',
    ],
  },
  'k-ela-u2-l1': {
    topics: ['rhyme', 'beginning sounds'],
    applicationTitle: 'Playing with sounds before reading',
    application:
      'Rhyme and beginning sounds are how children play with language before they can read it. Songs, chants, and nursery rhymes repeat endings (cat, hat, mat) and swap beginnings (cat, bat, rat). Hearing those parts helps you predict the next word in a story and later spell it, because words that rhyme often share an ending spelling. A child who can hear that cat, hat, and bat share an ending is already doing the work of a speller: listening for the parts of a word rather than memorizing its shape.',
    example: {
      prompt: 'Which word rhymes with “cake”: “kite” or “lake”?',
      steps: [
        'Say both words aloud and listen to the ending, not the beginning.',
        '“Lake” ends with the same -ake sound as “cake”; “kite” ends differently.',
      ],
      answer: 'Lake rhymes with cake. Only the first sound changed, from /k/ to /l/.',
    },
    terms: [
      ['rhyme', 'words that end with the same sound, such as bug and rug'],
      ['beginning sound', 'the first sound you hear in a word'],
    ],
    review: [
      {
        prompt: 'How do you make a new word by changing the first sound?',
        answer:
          'Keep the ending the same and swap the first sound, as in cat to bat to rat.',
      },
      {
        prompt: 'Why do songs and rhymes help you read?',
        answer:
          'They repeat sounds and endings, so you hear the parts of words many times.',
      },
    ],
    exercises: [
      'Say three words that rhyme with “star” and clap once for each word.',
      'Find two objects in the kitchen whose names start with the same sound.',
    ],
  },
  'k-ela-u3-l1': {
    topics: ['retelling', 'story parts'],
    applicationTitle: 'Telling what happened',
    application:
      'Retelling is how you share something that happened, from a story you heard to a trip to the store. Grown-ups retell at work (“first the machine stopped, then we called the repair shop”) and families retell at dinner. A good retell keeps the important parts in order and leaves out small details that do not change what happened.',
    example: {
      prompt: 'Retell “The Three Little Pigs” in three parts.',
      steps: [
        'Beginning: three pigs leave home and build houses of straw, sticks, and bricks.',
        'Middle and end: the wolf blows down two houses, then cannot blow down the brick house.',
      ],
      answer:
        'Beginning, middle, and end: the pigs build, the wolf tries, the brick house keeps them safe.',
    },
    terms: [
      ['retell', 'to tell a story again in your own words and in order'],
      ['setting', 'where and when a story happens'],
    ],
    review: [
      {
        prompt: 'What three parts does a retell need?',
        answer: 'A beginning, a middle, and an end, told in the order they happened.',
      },
      {
        prompt: 'What is the setting of a story?',
        answer: 'Where and when the story happens, such as a farm at night.',
      },
    ],
    exercises: [
      'Retell your day to a family member using beginning, middle, and end.',
      'After a read-aloud, name the characters and the setting out loud.',
    ],
  },
  'k-math-u1-l1': {
    topics: ['counting', 'comparing numbers'],
    applicationTitle: 'Counting things that matter',
    application:
      'Counting with one touch per object is how you know how many plates you need for dinner, how many socks are in a drawer, or how many chairs are at a table. Matching each object to exactly one number word is the idea behind every later number skill, including adding and subtracting, because those operations start from an accurate count.',
    example: {
      prompt: 'Count thirteen spoons scattered on a table. How do you keep track?',
      steps: [
        'Move each spoon as you count it, so you never count the same one twice.',
        'Say the numbers in order: 1, 2, 3 … and stop at 13.',
      ],
      answer: 'Thirteen spoons. The last number you say tells how many there are.',
    },
    terms: [
      ['one-to-one matching', 'giving each object exactly one number as you count'],
      ['compare', 'to decide which group has more, fewer, or the same'],
    ],
    review: [
      {
        prompt: 'Why should you move each object while counting?',
        answer: 'So you count every object once and do not count one twice.',
      },
      {
        prompt: 'How do you know 9 is more than 6?',
        answer: 'Counting up from 6, you say 7, 8, 9, so 9 comes later and is more.',
      },
    ],
    exercises: [
      'Count the forks in your kitchen drawer and write the number.',
      'Make two groups of toys and say which group has fewer.',
    ],
  },
  'k-math-u2-l1': {
    topics: ['shapes', 'position words'],
    applicationTitle: 'Shapes and words that tell you where',
    application:
      'Shapes and position words help you describe the world so someone else can picture it. “The box is on the shelf above the sink” is more useful than “it is over there.” Builders, cooks, and drivers all use position words, and recognizing a circle, square, triangle, and rectangle helps you sort and pack things that fit together.',
    example: {
      prompt: 'How many sides does a triangle have, and how is it different from a square?',
      steps: [
        'Count the straight sides: a triangle has three.',
        'A square has four sides of the same length and four corners.',
      ],
      answer: 'A triangle has 3 sides; a square has 4 equal sides and 4 corners.',
    },
    terms: [
      ['attribute', 'a feature used to describe a shape, such as sides or corners'],
      ['position word', 'a word that tells where something is, such as above or beside'],
    ],
    review: [
      {
        prompt: 'Where is something that is “between” two chairs?',
        answer: 'It is in the middle, with one chair on each side of it.',
      },
      {
        prompt: 'Name two shapes with four sides.',
        answer: 'A square and a rectangle both have four sides.',
      },
    ],
    exercises: [
      'Find one circle, one triangle, and one rectangle in your home.',
      'Give a family member directions using above, below, beside, and between.',
    ],
  },
  'k-math-u3-l1': {
    topics: ['addition', 'subtraction'],
    applicationTitle: 'Joining and taking away at home',
    application:
      'Joining and separating groups is what addition and subtraction mean before they are symbols. Setting three plates and then two more joins two groups; eating two of five cookies separates a group. Seeing the action first makes the number sentence make sense later, because the symbols simply record what you already did with real objects.',
    example: {
      prompt: 'You have 6 crayons and a friend gives you 3 more. How many now?',
      steps: [
        'Join the groups: start at 6 and count on 7, 8, 9.',
        'The number you land on is the total.',
      ],
      answer: '9 crayons, because 6 and 3 more make 9.',
    },
    terms: [
      ['join', 'to put two groups together to find a total'],
      ['separate', 'to take some away from a group to find what is left'],
    ],
    review: [
      {
        prompt: 'What does subtraction look like with real objects?',
        answer: 'Start with a group, take some away, and count what is left.',
      },
      {
        prompt: 'If you have 8 and take away 5, how many are left?',
        answer: 'Three, because 8 take away 5 leaves 3.',
      },
    ],
    exercises: [
      'Use five spoons to show 5 − 2, then say how many are left.',
      'Count two groups of toys, join them, and say the total.',
    ],
  },
  'k-sci-u1-l1': {
    topics: ['observation', 'properties'],
    applicationTitle: 'Observing like a scientist',
    application:
      'Scientists observe before they explain. You do the same when you choose a ripe avocado by feeling it, look at the color of meat before cooking it, or listen for a click in a car engine. Using more than one sense gives you better evidence, and describing properties such as color, size, and texture lets you compare two things fairly.',
    example: {
      prompt: 'Compare an apple and an orange using three properties.',
      steps: [
        'Choose properties you can observe: color, shape, and texture of the skin.',
        'Describe each object with the same property so the comparison is fair.',
      ],
      answer:
        'The apple is red or green, round with a dip on top, and smooth; the orange is orange, round, and dimpled.',
    },
    terms: [
      ['observe', 'to use your senses to gather information'],
      ['property', 'a feature you can describe, such as color, size, or texture'],
    ],
    review: [
      {
        prompt: 'Which senses can you use safely to observe?',
        answer:
          'Sight, hearing, smell, and touch. Taste only food a grown-up says is safe.',
      },
      {
        prompt: 'Why compare using the same property?',
        answer: 'So the comparison is fair, like size to size or color to color.',
      },
    ],
    exercises: [
      'Choose two fruits and describe each with color, size, and texture.',
      'Sit quietly outside for two minutes and list three sounds you hear.',
    ],
  },
  'k-sci-u2-l1': {
    topics: ['weather', 'safety'],
    applicationTitle: 'Getting ready for the weather',
    application:
      'Weather decides what you wear and how you travel. A cold morning needs a coat and maybe gloves; a hot afternoon needs water and shade; lightning means going indoors. Checking the forecast before you leave is a habit that prevents discomfort and real danger, and it is the same information a farmer or a pilot uses.',
    example: {
      prompt: 'The forecast says 40°F with strong wind. What do you wear and why?',
      steps: [
        '40°F is cold, and wind makes your body lose heat faster.',
        'Choose a warm coat, long pants, and a hat; bring gloves if you will be outside long.',
      ],
      answer: 'A warm coat, long pants, and a hat, because wind makes 40°F feel colder.',
    },
    terms: [
      ['weather', 'what the air and sky are like right now'],
      ['forecast', 'a prediction of weather made from measurements'],
    ],
    review: [
      {
        prompt: 'What should you do when you hear thunder?',
        answer: 'Go indoors or into a car and stay there until the storm passes.',
      },
      {
        prompt: 'Why does wind make a cold day feel colder?',
        answer: 'Moving air carries heat away from your skin faster.',
      },
    ],
    exercises: [
      'Draw today’s weather and label two clothing choices for it.',
      'Watch a forecast with a grown-up and name one safety action for the day.',
    ],
  },
  'k-sci-u3-l1': {
    topics: ['living things', 'needs'],
    applicationTitle: 'What living things need',
    application:
      'Knowing what living things need is how you keep a plant or pet alive. A goldfish needs clean water and food; a bean plant needs light, water, and soil. When something stops growing or looks wilted, you check its needs one by one. That habit, checking conditions instead of guessing, is the beginning of scientific thinking.',
    example: {
      prompt: 'Is a rock a living thing? Give two reasons.',
      steps: [
        'Check the needs of living things: food or nutrients, water, and growth.',
        'A rock does not eat, drink, grow, or respond, so it does not meet the needs.',
      ],
      answer: 'No. A rock does not grow, take in food or water, or respond to its surroundings.',
    },
    terms: [
      ['living', 'able to grow, use food or nutrients, and respond to surroundings'],
      ['need', 'something a living thing must have to stay alive'],
    ],
    review: [
      {
        prompt: 'Name three things most plants need.',
        answer: 'Light, water, and air, plus nutrients from soil.',
      },
      {
        prompt: 'How can you tell a plant is not getting enough water?',
        answer: 'Its leaves droop or turn brown and the soil is dry.',
      },
    ],
    exercises: [
      'Sort five things at home into living and nonliving and explain one choice.',
      'Water a plant for three days and draw what changes.',
    ],
  },
  'k-ss-u1-l1': {
    topics: ['rules', 'community jobs'],
    applicationTitle: 'Rules and jobs make a group work',
    application:
      'Every group needs agreements so people can share space safely. A family rule about knocking before entering and a classroom rule about raising a hand do the same job: they protect everyone’s turn. Jobs work the same way. When one person is the line leader and another holds the door, the whole group moves faster and no one is left behind.',
    example: {
      prompt: 'Why does a cafeteria need a person to wipe tables?',
      steps: [
        'Think about what happens if no one does it: crumbs and spills stay for the next group.',
        'The job protects everyone’s health and makes the next lunch start clean.',
      ],
      answer: 'The job keeps the space clean and safe for the next students who eat there.',
    },
    terms: [
      ['rule', 'an agreement about how people act in a group'],
      ['community', 'a group of people who live or work together'],
    ],
    review: [
      {
        prompt: 'Why do families and classrooms need rules?',
        answer: 'So people stay safe, take turns, and treat each other fairly.',
      },
      {
        prompt: 'Name a community job and what it does.',
        answer: 'A mail carrier brings letters and packages to homes and businesses.',
      },
    ],
    exercises: [
      'Name one rule at home and explain what it protects.',
      'Interview a family member about their job and one tool they use.',
    ],
  },
  'k-ss-u2-l1': {
    topics: ['maps', 'position words'],
    applicationTitle: 'Maps help you find your way',
    application:
      'A map is a drawing of a place from above. Families use maps to find a park, a store, or a friend’s house, and phones show the same idea on a screen. A globe is a map of the whole Earth shaped like a ball. Learning to say “next to,” “across from,” and “between” lets you give directions someone can actually follow.',
    example: {
      prompt: 'Your house is across the street from the park. How do you explain it?',
      steps: [
        'Start with a landmark the other person knows: the park.',
        'Add the position word: across the street from the park.',
      ],
      answer:
        '“My house is across the street from the park.” The landmark plus the position word gives the location.',
    },
    terms: [
      ['map', 'a drawing of a place seen from above'],
      ['globe', 'a model of Earth shaped like a ball'],
    ],
    review: [
      {
        prompt: 'How is a globe different from a flat map?',
        answer: 'A globe is round like Earth; a flat map shows the whole world on paper.',
      },
      {
        prompt: 'Why do directions need a landmark?',
        answer: 'A landmark gives the other person a place to start from.',
      },
    ],
    exercises: [
      'Draw a map of your bedroom and mark the door and window.',
      'Give a family member directions to the kitchen using two position words.',
    ],
  },
  'k-ss-u3-l1': {
    topics: ['symbols', 'flags'],
    applicationTitle: 'Symbols stand for ideas',
    application:
      'A symbol is a picture or object that stands for something bigger. The Texas flag stands for the state, and the U.S. flag stands for the country. Symbols help people share an idea quickly, the way a heart shape stands for love or a stop sign stands for “stop.” Learning to read symbols is part of understanding the community you live in.',
    example: {
      prompt: 'What does the single star on the Texas flag stand for?',
      steps: [
        'Notice the star is alone, which is why Texas is called the Lone Star State.',
        'Connect the symbol to the idea it represents: Texas itself.',
      ],
      answer: 'The single star stands for Texas, the “Lone Star State.”',
    },
    terms: [
      ['symbol', 'a picture or object that stands for something else'],
      ['flag', 'a piece of cloth whose colors and shapes stand for a place or group'],
    ],
    review: [
      {
        prompt: 'What does the U.S. flag stand for?',
        answer: 'The United States, its states, and the ideas the country is built on.',
      },
      {
        prompt: 'Name a symbol you see in your neighborhood and what it means.',
        answer: 'A stop sign is a red octagon that means drivers must stop.',
      },
    ],
    exercises: [
      'Draw two symbols you see in your community and label what they mean.',
      'Say the Pledge of Allegiance and explain one word in it to a family member.',
    ],
  },

  'g1-ela-u1-l1': {
    topics: ['digraphs', 'blends'],
    applicationTitle: 'Letter teams in real words',
    application:
      'Some sounds need two letters. A digraph is two letters that make one new sound, like sh in ship or th in thin. A blend is two consonants you can still hear separately, like st in stop or gr in grass. Recognizing the team lets you read a whole family of words: once you know sh, you can read shop, shed, fish, and dish.',
    example: {
      prompt: 'Read “ship” and “sip”. What is the difference?',
      steps: [
        'In “sip”, s and i are separate sounds: /s/ /i/ /p/.',
        'In “ship”, s and h work as one team that makes the /sh/ sound.',
      ],
      answer: '“Ship” begins with the digraph sh; “sip” begins with the single sound /s/.',
    },
    terms: [
      ['digraph', 'two letters that make one new sound, such as sh or th'],
      ['blend', 'two consonants you hear separately, such as st in stop'],
    ],
    review: [
      {
        prompt: 'How can you tell a digraph from a blend?',
        answer:
          'A digraph makes one new sound; in a blend you can still hear both letters.',
      },
      {
        prompt: 'Read these words: chat, thin, whip. What team does each use?',
        answer: 'Each begins with a digraph: ch, th, and wh.',
      },
    ],
    exercises: [
      'Find five words with sh in a book and read them aloud.',
      'Write two words that start with the blend gr and two with st.',
    ],
  },
  'g1-ela-u2-l1': {
    topics: ['sentences', 'capital letters'],
    applicationTitle: 'Writing so others can read it',
    application:
      'A sentence is a complete thought that someone else can understand. Capital letters and end marks are the signals that tell a reader where a thought starts and stops. When you write a note to a family member or type a message, those signals are what keep your meaning clear, especially when the reader cannot ask you what you meant.',
    example: {
      prompt: 'Fix this sentence: “my dog runs fast”',
      steps: [
        'Ask the three questions: Does it have a naming part? A telling part? A complete idea?',
        'Add a capital M and a period at the end.',
      ],
      answer: '“My dog runs fast.” It has a subject, a verb, and a complete idea.',
    },
    terms: [
      ['sentence', 'a group of words that tells one complete idea'],
      ['end mark', 'the punctuation that shows a sentence has finished'],
    ],
    review: [
      {
        prompt: 'What three things does a sentence need?',
        answer: 'A naming part, a telling part, and a complete idea.',
      },
      {
        prompt: 'When do you use a question mark?',
        answer: 'When the sentence asks something and expects an answer.',
      },
    ],
    exercises: [
      'Write three sentences about your day, each with a capital and an end mark.',
      'Find two sentences in a book and circle the capital letter and end mark.',
    ],
  },
  'g1-ela-u3-l1': {
    topics: ['characters', 'retelling'],
    applicationTitle: 'Talking about a story',
    application:
      'When you tell someone about a movie or a book, you naturally mention who it was about and where it happened. Those are the characters and the setting. Retelling in order, beginning, middle, and end, is how you make the story make sense to someone who was not there, and it is the same skill you use to explain what happened at school.',
    example: {
      prompt: 'Name the characters and setting of a story about a girl lost in a market.',
      steps: [
        'Ask who the story is about: the girl, and anyone who helps her.',
        'Ask where and when: a busy outdoor market, during the day.',
      ],
      answer: 'Characters: the girl and the market vendor. Setting: a busy market during the day.',
    },
    terms: [
      ['character', 'a person or animal in a story'],
      ['setting', 'where and when a story takes place'],
    ],
    review: [
      {
        prompt: 'Why does a retell need the beginning, middle, and end?',
        answer: 'So the listener understands what caused what and how the story finished.',
      },
      {
        prompt: 'How is the setting different from the characters?',
        answer: 'Characters are who the story is about; the setting is where and when it happens.',
      },
    ],
    exercises: [
      'Retell a bedtime story to a family member in three sentences.',
      'Draw the setting of your favorite story and label two details.',
    ],
  },
  'g1-math-u1-l1': {
    topics: ['place value', 'tens and ones'],
    applicationTitle: 'Bundles of ten',
    application:
      'Numbers are organized in tens because counting one by one gets slow. A box of 10 crayons plus 4 loose crayons is 14 crayons, written as 1 ten and 4 ones. The same idea explains why 34 is not the same as 43: the digit in the tens place counts bundles of ten, and the digit in the ones place counts singles. Writing a number in a place-value table makes the pattern visible: 34 puts 3 in the tens column and 4 in the ones column, while 43 swaps them and changes the value by nine.',
    example: {
      prompt: 'What is 10 more than 34, and how do you know without counting?',
      steps: [
        '34 is 3 tens and 4 ones.',
        'Ten more adds one more ten: 4 tens and 4 ones.',
      ],
      answer: '44. Only the tens digit changes when you add 10.',
    },
    terms: [
      ['tens place', 'the digit that counts groups of ten'],
      ['ones place', 'the digit that counts single items'],
    ],
    review: [
      {
        prompt: 'How do you write 5 tens and 7 ones as a number?',
        answer: '57, because 5 tens make 50 and 7 ones make 7.',
      },
      {
        prompt: 'What happens to 62 when you subtract 10?',
        answer: 'It becomes 52; the tens digit drops by one.',
      },
    ],
    exercises: [
      'Count 34 buttons by making bundles of ten, then write the number.',
      'Say a number, then tell a family member what is 10 more and 10 less.',
    ],
  },
  'g1-math-u2-l1': {
    topics: ['make ten', 'doubles'],
    applicationTitle: 'Adding quickly in your head',
    application:
      'Make-ten and doubles are mental shortcuts you can use at a store or in a kitchen. If a snack costs 8 cents and another costs 5 cents, you can think “8 needs 2 to make 10, and 5 is 2 and 3, so 10 and 3 make 13.” Doubles help too: if you know 6 + 6 = 12, then 6 + 7 is one more, 13.',
    example: {
      prompt: 'Use make-ten to add 8 + 5.',
      steps: [
        'Break 5 into 2 and 3 so that 8 + 2 makes 10.',
        'Add the rest: 10 + 3 = 13.',
      ],
      answer: '13. Making a ten first turns a hard sum into an easy one.',
    },
    terms: [
      ['make ten', 'using facts that add to 10 to solve a harder sum'],
      ['doubles fact', 'a sum of a number with itself, such as 7 + 7'],
    ],
    review: [
      {
        prompt: 'How do doubles facts help with near doubles?',
        answer: 'Near doubles are one more or one less than a double, so adjust by one.',
      },
      {
        prompt: 'Show 9 + 4 using make-ten.',
        answer: '9 needs 1 to make 10; 4 is 1 and 3, so 10 + 3 = 13.',
      },
    ],
    exercises: [
      'Solve 7 + 5 and 9 + 6 using make-ten and explain each step aloud.',
      'Write the doubles facts from 1 + 1 to 10 + 10.',
    ],
  },
  'g1-math-u3-l1': {
    topics: ['measurement', 'telling time'],
    applicationTitle: 'Measuring and telling time',
    application:
      'Measuring and telling time answer “how long?” and “when?” questions in daily life. You measure a shelf before buying a basket for it, and you read a clock to know when a favorite show starts. Nonstandard units, like paper clips or cubes, teach the idea of repeated units; standard units, like inches or centimeters, let someone else repeat your measurement exactly.',
    example: {
      prompt: 'The clock shows 7:30. Where is the minute hand and what does it mean?',
      steps: [
        'The minute hand points at 6, which means 30 minutes past the hour.',
        'The hour hand is halfway between 7 and 8.',
      ],
      answer: '7:30, or half past seven, because the minute hand is on the 6.',
    },
    terms: [
      ['unit', 'a repeated amount used to measure, such as a cube or an inch'],
      ['half hour', 'thirty minutes, when the minute hand points to 6'],
    ],
    review: [
      {
        prompt: 'Why is a ruler better than a paper clip for measuring?',
        answer: 'A ruler uses a standard unit, so another person measures the same length you did.',
      },
      {
        prompt: 'If the minute hand points to 12, what time is it?',
        answer: 'It is exactly on the hour, so read the hour number the hand is pointing to.',
      },
    ],
    exercises: [
      'Measure a table with a spoon, then with a ruler, and compare the results.',
      'Draw clocks showing 3:00, 3:30, and 4:00.',
    ],
  },
  'g1-sci-u1-l1': {
    topics: ['states of matter', 'solids liquids gases'],
    applicationTitle: 'Three states in the kitchen',
    application:
      'Matter around you is a solid, a liquid, or a gas. Ice is solid water, the water you drink is liquid, and the steam from a kettle is water vapor. Heating and cooling move matter between states: ice melts into liquid water and liquid water freezes back into ice. Recognizing the state of something helps you predict how it will pour, stack, or spread.',
    example: {
      prompt: 'Classify ice, water, and steam, and say what changed them.',
      steps: [
        'Ice keeps its shape: solid.',
        'Water takes the shape of its container: liquid. Steam spreads to fill space: gas.',
      ],
      answer: 'Ice is solid, water is liquid, steam is gas; heating moves each one to the next state.',
    },
    terms: [
      ['solid', 'matter that keeps its own shape'],
      ['liquid', 'matter that takes the shape of its container and flows'],
    ],
    review: [
      {
        prompt: 'How do you know a balloon filled with air contains matter?',
        answer: 'It takes up space and has weight, so its contents are matter.',
      },
      {
        prompt: 'What happens to liquid water when it freezes?',
        answer: 'It becomes a solid and keeps a shape of its own.',
      },
    ],
    exercises: [
      'Find one solid, one liquid, and one gas in your home and list them.',
      'Melt three ice cubes in different places and draw which melted first.',
    ],
  },
  'g1-sci-u2-l1': {
    topics: ['needs', 'life cycles'],
    applicationTitle: 'Watching things grow',
    application:
      'Plants and animals pass through stages: a bean sprout appears, grows leaves, flowers, and forms seeds. Every stage needs different conditions, so a gardener waters more when seedlings are young. Animals need food, water, shelter, and air. Learning to sequence a life cycle explains why a fruit has seeds inside and why a caterpillar disappears into a chrysalis. It also explains why a garden must be replanted each year and why a tadpole looks nothing like the frog it becomes.',
    example: {
      prompt: 'Sequence the stages of a bean plant.',
      steps: [
        'Start with the seed and the root pushing into soil.',
        'Then the sprout, leaves, flowers, and finally seed pods.',
      ],
      answer: 'Seed → root and sprout → leaves → flowers → seed pods.',
    },
    terms: [
      ['life cycle', 'the stages a living thing passes through from seed or birth'],
      ['shelter', 'a place that protects an animal from weather and danger'],
    ],
    review: [
      {
        prompt: 'What do all animals need to survive?',
        answer: 'Food, water, air, and shelter, plus space to move and raise young.',
      },
      {
        prompt: 'Why does an animal life cycle begin with an egg or a live birth?',
        answer: 'Because each generation begins a new life; the parent does not live forever.',
      },
    ],
    exercises: [
      'Draw the four stages of a plant and label each.',
      'Observe a pet or a yard animal and list three things it needs.',
    ],
  },
  'g1-sci-u3-l1': {
    topics: ['weather patterns', 'sun and moon'],
    applicationTitle: 'Patterns you can predict',
    application:
      'Weather forms patterns across days and months, which is why the same region is rainy in one season and dry in another. The Sun gives light and heat, and the Moon shines because it reflects sunlight. Watching the Moon over two weeks shows a repeating pattern of phases, and recording daily weather shows trends that a single day cannot explain.',
    example: {
      prompt: 'Why does the Moon look bright at night if it does not make its own light?',
      steps: [
        'Compare the Moon to the Sun: the Sun produces light and heat.',
        'The Moon reflects light from the Sun toward Earth.',
      ],
      answer: 'The Moon has no light of its own; we see reflected sunlight from its surface.',
    },
    terms: [
      ['pattern', 'something that repeats in a predictable way'],
      ['reflect', 'to bounce light back, as the Moon does with sunlight'],
    ],
    review: [
      {
        prompt: 'What does the Sun provide that living things need?',
        answer: 'Light and heat, which plants use to grow and which keep Earth warm.',
      },
      {
        prompt: 'How does weather in summer usually differ from winter?',
        answer: 'Summer is usually hotter and drier; winter is cooler, though Texas varies by region.',
      },
    ],
    exercises: [
      'Draw the weather for five days and describe the pattern.',
      'Look at the Moon for three nights and sketch its shape each time.',
    ],
  },
  'g1-ss-u1-l1': {
    topics: ['families', 'traditions'],
    applicationTitle: 'Families and the jobs they share',
    application:
      'Families come in many shapes, but all of them share work so everyone is cared for. A tradition, such as cooking a particular meal on a holiday, carries memories and values from one generation to the next. Community members depend on one another too: the baker needs the farmer’s wheat, and the farmer needs the mechanic’s repair.',
    example: {
      prompt: 'How does one family tradition show what the family values?',
      steps: [
        'Name the tradition and what actually happens.',
        'Ask what the tradition protects or teaches, such as generosity or remembering ancestors.',
      ],
      answer:
        'If a family cooks extra food and shares it with neighbors, the tradition shows they value generosity.',
    },
    terms: [
      ['tradition', 'a practice passed down from one generation to another'],
      ['role', 'a job or part a person plays in a group'],
    ],
    review: [
      {
        prompt: 'Why do families depend on each other?',
        answer: 'Because different members do different jobs that keep everyone fed, safe, and cared for.',
      },
      {
        prompt: 'Name a community member your family depends on and how.',
        answer: 'A grocery worker, because they stock the food your family buys.',
      },
    ],
    exercises: [
      'Ask a family member about a tradition and write two sentences about it.',
      'List three jobs you do in your home and what they protect.',
    ],
  },
  'g1-ss-u2-l1': {
    topics: ['Texas symbols', 'historical figures'],
    applicationTitle: 'A state tells its story through symbols',
    application:
      'Texas symbols, such as the lone star, the bluebonnet, and the mockingbird, remind people of the state’s history and natural features. Historical figures matter too: Stephen F. Austin brought the first large group of Anglo settlers in the 1820s, which is why he is called the “Father of Texas.” Remembering both symbols and people helps explain how a place got its identity. A state flag is not just cloth: it is a short argument about who lives there and what they value, and learning its parts is a first lesson in reading evidence.',
    example: {
      prompt: 'What does the bluebonnet represent about Texas?',
      steps: [
        'Notice when and where it grows: wild in spring across much of the state.',
        'Connect the flower to a feature of the state: its natural landscape.',
      ],
      answer: 'The bluebonnet stands for Texas’s spring wildflowers and natural landscape.',
    },
    terms: [
      ['symbol', 'an object or picture that stands for an idea or place'],
      ['historical figure', 'a real person remembered for their part in history'],
    ],
    review: [
      {
        prompt: 'Why is Stephen F. Austin remembered in Texas history?',
        answer: 'He led the first large group of Anglo settlers to Texas in the 1820s.',
      },
      {
        prompt: 'Name three Texas symbols and what each suggests.',
        answer:
          'The lone star, the bluebonnet, and the mockingbird, suggesting independence, landscape, and wildlife.',
      },
    ],
    exercises: [
      'Draw a Texas flag and label the color and the star.',
      'Choose one Texas symbol and write a sentence about why it fits the state.',
    ],
  },
  'g1-ss-u3-l1': {
    topics: ['goods and services', 'map key'],
    applicationTitle: 'Maps and trade in your own town',
    application:
      'A map key explains the symbols on a map, such as a blue line for a creek or a dot for a library. Compass directions help you say which way something lies. Goods are things people buy, like bread or shoes; services are jobs people pay for, like a haircut or a bus ride. Comparing goods and services explains why a town needs both a store and a dentist.',
    example: {
      prompt: 'A bakery sells bread and also delivers it. What is the good and what is the service?',
      steps: [
        'Ask what the customer takes away: the bread is a thing, so it is a good.',
        'Ask what work is done: delivering is an action, so it is a service.',
      ],
      answer: 'The bread is the good; delivering it is the service.',
    },
    terms: [
      ['good', 'a physical thing people buy, such as food or clothing'],
      ['service', 'work someone does for pay, such as a repair'],
    ],
    review: [
      {
        prompt: 'What does a map key do?',
        answer: 'It explains what the symbols and colors on a map mean.',
      },
      {
        prompt: 'Give an example of a service you use and who provides it.',
        answer: 'A haircut, provided by a barber or stylist.',
      },
    ],
    exercises: [
      'Draw a simple map with a key and label the school and the park.',
      'List five things your family buys and mark each as a good or a service.',
    ],
  },
};
