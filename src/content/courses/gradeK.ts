import type { Course } from '../../types';
import { ELEMENTARY_WEIGHTS } from '../weights';
import { CREATIVE_PROJECT, INQUIRY_PROJECT, MATH_PROJECT, WRITING_PROJECT } from '../rubrics';
import { exam, lesson, mc, project, quiz, section, teks, unit } from '../builders';

/**
 * Kindergarten. Alignment: 19 TAC chapters 110-117.
 *
 * Kindergarten lessons are written for a parent or caregiver to deliver aloud.
 * The practice and quiz items are the graded evidence; the reading is the
 * explanation. Nothing is graded for simply opening the page.
 */

export const kindergartenEla: Course = {
  id: 'k-ela',
  title: 'Kindergarten English Language Arts',
  subject: 'ela',
  grade: 0,
  credits: 0,
  semesters: 2,
  description:
    'Letters and sounds, rhyming, and listening to stories. Students learn how print works, connect letters to sounds, and retell what they hear.',
  essentialQuestions: ['How do letters turn into sounds and words?', 'How do I show that I understood a story?'],
  teks: [teks('19 TAC ch. 110, Kindergarten', 'Oral language; phonological awareness; phonics; vocabulary; comprehension of read-aloud texts; beginning writing.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Letters and sounds', 'Print carries a message, and letters stand for sounds.', [
      lesson({
        id: 'k-ela-u1-l1',
        title: 'The alphabet: names, sounds, and print',
        minutes: 20,
        objectives: ['Name the letters of the alphabet.', 'Say the sound a letter makes.', 'Show where reading starts and which way it goes.'],
        sections: [
          section('How print works', [
            'A book has a front and a back, a title, and pages. We read words from left to right and from the top of the page to the bottom. Point to each word as you say it. That is called one-to-one matching.',
            'Letters have names and sounds. The letter M is called “em” and says /m/ as in moon. Say the sound, not the letter name, when you stretch a word: /m/ /o/ /n/ — moon.',
          ]),
        ],
        example: {
          prompt: 'Stretch the word “sun.”',
          steps: ['Say the word slowly.', 'Listen for the first sound: /s/.', 'Then /u/, then /n/.', 'Push the sounds together: sun.'],
          answer: '/s/ /u/ /n/ — sun.',
        },
        keyTerms: [
          { term: 'Letter sound', definition: 'The sound a letter makes in a word.' },
          { term: 'Left to right', definition: 'The direction we read English words.' },
        ],
        practice: [
          mc('Which word starts with the same sound as “moon”?', ['sun', 'mat', 'tree', 'egg'], 1, 'Mat begins with /m/, like moon.'),
          mc('When we read, we start at the', ['bottom right', 'top left', 'middle', 'back cover'], 1, 'English print starts at the top left.'),
        ],
      }),
    ], quiz('Letters and sounds check', [
      mc('Which letter makes the /s/ sound?', ['M', 'S', 'T', 'B'], 1, 'S says /s/.'),
      mc('How many letters are in the word “cat”?', ['2', '3', '4', '5'], 1, 'C-a-t has three letters.'),
    ]), project({
      title: 'Alphabet sound book',
      prompt: 'Make a page for five letters. On each page write the letter, draw one thing that begins with its sound, and say the sound aloud to an adult.',
      deliverable: 'Five pages, each with a letter, a drawing, and an adult’s initials.',
      guidance: ['Check the sound, not just the letter name.', 'Ask the child to name the drawing.'],
      rubric: CREATIVE_PROJECT,
    })),
    unit('u2', 'Rhyme and word families', 'Words that rhyme share an ending sound.', [
      lesson({
        id: 'k-ela-u2-l1',
        title: 'Rhyming and beginning sounds',
        minutes: 20,
        objectives: ['Identify words that rhyme.', 'Change the first sound to make a new word.'],
        sections: [
          section('Listen for the ending', [
            'Cat, hat, and bat rhyme because they end with the same sound: -at. The first sound changes; the ending stays. This is a word family.',
            'Rhyming is about sound, not spelling. “Blue” and “shoe” rhyme even though their letters are different.',
          ]),
        ],
        example: {
          prompt: 'Make two new words in the -an family.',
          steps: ['Start with -an.', 'Add /m/: man.', 'Add /p/: pan.'],
          answer: 'man, pan (also can, fan, ran).',
        },
        practice: [
          mc('Which word rhymes with “cat”?', ['dog', 'hat', 'sun', 'pig'], 1, 'Hat ends with the same -at sound.'),
          mc('Which two words rhyme?', ['sun, moon', 'cake, lake', 'tree, rock', 'bed, cup'], 1, 'Cake and lake share the ending sound.'),
        ],
      }),
    ], quiz('Rhyme check', [
      mc('Which word rhymes with “star”?', ['car', 'sun', 'moon', 'tree'], 0, 'Car rhymes with star.'),
      mc('Change the first sound of “mat” to /b/. What word do you get?', ['bat', 'cat', 'rat', 'sat'], 0, 'Replace /m/ with /b/.'),
    ]), project({
      title: 'Rhyme hunt',
      prompt: 'Find or draw three pairs of rhyming objects. Say each pair aloud and explain why they rhyme.',
      deliverable: 'Three labeled pairs with an adult’s note.',
      guidance: ['Focus on sound, not spelling.', 'Accept nonsense words if they rhyme.'],
      rubric: CREATIVE_PROJECT,
    })),
    unit('u3', 'Stories and retelling', 'A story has characters, a place, and things that happen.', [
      lesson({
        id: 'k-ela-u3-l1',
        title: 'Listen, retell, and ask questions',
        minutes: 25,
        objectives: ['Name the characters and setting of a story.', 'Retell the beginning, middle, and end.'],
        sections: [
          section('Three parts of a story', [
            'Every story has a who (characters) and a where (setting). Something happens at the beginning, something changes in the middle, and the story ends a certain way.',
            'Retelling is not memorizing. Use your own words: “First… Then… At the end…”. Ask a question when something is confusing; good readers do that.',
          ]),
        ],
        example: {
          prompt: 'Retell “The Three Little Pigs” in three sentences.',
          steps: ['Beginning: three pigs build houses.', 'Middle: the wolf blows down two houses.', 'End: the brick house holds and the pigs are safe.'],
          answer: 'First, three pigs built houses of straw, sticks, and bricks. Then a wolf blew down two houses. At the end, the brick house kept them safe.',
        },
        practice: [
          mc('The people or animals in a story are called the', ['setting', 'characters', 'title', 'author'], 1, 'Characters are who the story is about.'),
          mc('The setting is', ['what happens', 'where and when it happens', 'the last page', 'the cover'], 1, 'Setting is place and time.'),
        ],
      }),
    ], quiz('Story check', [
      mc('Which question asks about the setting?', ['Who is in the story?', 'Where does the story happen?', 'What happens first?', 'How does it end?'], 1, 'Setting is where and when.'),
      mc('Retelling a story means', ['copying the words exactly', 'telling the important parts in your own words', 'reading the title', 'drawing the cover'], 1, 'A retell uses the reader’s own words.'),
    ]), project({
      title: 'Story retell with pictures',
      prompt: 'Listen to a story. Draw the beginning, middle, and end, then tell the story aloud using your drawings.',
      deliverable: 'Three drawings with an adult’s notes on the retell.',
      guidance: ['Ask “what happened first?” before drawing.', 'Prompt for character names and setting.'],
      rubric: CREATIVE_PROJECT,
    })),
  ],
  finalExam: exam('Kindergarten ELA final check', [
    mc('Which word begins with /m/?', ['sun', 'moon', 'tree', 'ant'], 1, 'Moon begins with /m/.'),
    mc('Which word rhymes with “log”?', ['frog', 'tree', 'sun', 'bed'], 0, 'Frog rhymes with log.'),
    mc('The characters in a story are', ['where it happens', 'who it is about', 'the title', 'the last page'], 1, 'Characters are the who.'),
    mc('We read words from', ['right to left', 'left to right', 'bottom to top', 'anywhere'], 1, 'English is read left to right.'),
  ], 20),
};

export const kindergartenMath: Course = {
  id: 'k-math',
  title: 'Kindergarten Mathematics',
  subject: 'math',
  grade: 0,
  credits: 0,
  semesters: 2,
  description:
    'Counting and comparing to 20, flat and solid shapes, position words, and joining and separating groups within 10.',
  essentialQuestions: ['How do numbers tell “how many?”', 'How can I show adding and taking away?'],
  teks: [teks('19 TAC ch. 111, Kindergarten', 'Numeracy to 20; comparison; addition and subtraction within 10; geometry and position; measurement; data.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Numbers to 20', 'Each number names a quantity, and the count stays the same no matter the order.', [
      lesson({
        id: 'k-math-u1-l1',
        title: 'Count, write, and compare to 20',
        minutes: 20,
        objectives: ['Count objects to 20 with one-to-one matching.', 'Compare two groups using more, fewer, or equal.'],
        sections: [
          section('Counting accurately', [
            'Touch each object once and say one number for each touch. The last number you say tells how many. Moving objects from left to right helps you keep track.',
            'The order does not change the total. Five blocks in a row and five blocks in a pile are still five. This is called conservation of number.',
          ]),
          section('Comparing', [
            'Line up two groups and match them one to one. The group with objects left over has more. If every object has a partner and none are left, the groups are equal.',
          ]),
        ],
        example: {
          prompt: 'Compare 7 and 9.',
          steps: ['Count out seven objects.', 'Count out nine objects.', 'Match them one to one.', 'Two are left over in the nine group.'],
          answer: '9 is more than 7; 7 is fewer than 9.',
        },
        practice: [
          mc('Which number is greater?', ['6', '9', '4', '2'], 1, 'Nine is the largest of these.'),
          mc('A group of 5 and a group of 5 are', ['more', 'fewer', 'equal', 'none'], 2, 'Equal means the same amount.'),
        ],
      }),
    ], quiz('Numbers to 20 check', [
      mc('What number comes after 12?', ['11', '13', '14', '20'], 1, 'Counting forward from 12 gives 13.'),
      mc('Which group is fewer: 8 or 6?', ['8', '6', 'equal', 'cannot tell'], 1, 'Six is fewer than eight.'),
    ]), project({
      title: 'Count and compare collections',
      prompt: 'Make three groups of small objects (for example, 4, 9, and 6). Count each, write the number, and put them in order from fewest to most.',
      deliverable: 'A photo or drawing of the groups with numbers written.',
      guidance: ['Check one-to-one counting.', 'Ask “how do you know?”'],
      rubric: MATH_PROJECT,
    })),
    unit('u2', 'Shapes and position', 'Shapes have names and attributes.', [
      lesson({
        id: 'k-math-u2-l1',
        title: 'Flat shapes and position words',
        minutes: 20,
        objectives: ['Name circles, triangles, squares, and rectangles.', 'Describe position with above, below, beside, and between.'],
        sections: [
          section('Shape attributes', [
            'A circle is round with no corners. A triangle has three sides and three corners. A square has four equal sides and four corners. A rectangle has four sides and four corners, with opposite sides equal.',
            'Shapes can be found in the world: a clock face is a circle, a door is a rectangle, a roof can be a triangle.',
          ]),
          section('Where is it?', [
            'Use position words: the book is above the shelf, below the window, beside the lamp, or between two boxes. Position words describe relationships, not just locations.',
          ]),
        ],
        example: {
          prompt: 'Sort a square and a triangle by corners.',
          steps: ['Count the corners of the square: four.', 'Count the corners of the triangle: three.', 'The triangle has fewer corners.'],
          answer: 'Square: 4 corners; triangle: 3 corners.',
        },
        practice: [
          mc('How many sides does a triangle have?', ['2', '3', '4', '5'], 1, 'Tri means three.'),
          mc('The cup is ____ the table (on top of it).', ['under', 'on', 'between', 'behind'], 1, 'On means supported by the top surface.'),
        ],
      }),
    ], quiz('Shapes and position check', [
      mc('Which shape has no corners?', ['square', 'triangle', 'circle', 'rectangle'], 2, 'A circle has no corners.'),
      mc('If a ball is under the chair, it is', ['above the chair', 'below the chair', 'beside the chair', 'on the chair'], 1, 'Under means below.'),
    ]), project({
      title: 'Shape hunt',
      prompt: 'Find five shapes in your home. Draw each, label it, and name one attribute (sides or corners).',
      deliverable: 'Five labeled drawings.',
      guidance: ['Ask for the attribute, not just the name.', 'Include at least one solid object.'],
      rubric: MATH_PROJECT,
    })),
    unit('u3', 'Add and subtract within 10', 'Joining makes more; separating makes fewer.', [
      lesson({
        id: 'k-math-u3-l1',
        title: 'Joining and separating groups',
        minutes: 20,
        objectives: ['Show addition by joining two groups.', 'Show subtraction by taking away from a group.'],
        sections: [
          section('Joining', [
            'If you have 3 apples and get 2 more, you join the groups. Count all: 1, 2, 3, 4, 5. Three plus two equals five. Write it 3 + 2 = 5.',
            'Use objects or fingers first. The goal is to see that addition combines quantities.',
          ]),
          section('Separating', [
            'If you have 5 cookies and eat 2, you take away. Count what is left: 3. Five minus two equals three. Write it 5 − 2 = 3.',
            'Addition and subtraction are related: 3 + 2 = 5 means 5 − 2 = 3.',
          ]),
        ],
        example: {
          prompt: 'Show 4 + 3 with objects.',
          steps: ['Make a group of 4.', 'Make a group of 3.', 'Push them together.', 'Count all: 7.'],
          answer: '4 + 3 = 7.',
        },
        practice: [
          mc('2 + 3 = ?', ['4', '5', '6', '7'], 1, 'Two and three more make five.'),
          mc('6 − 2 = ?', ['3', '4', '5', '8'], 1, 'Taking two from six leaves four.'),
        ],
      }),
    ], quiz('Add and subtract check', [
      mc('3 + 1 = ?', ['2', '3', '4', '5'], 2, 'Three and one more make four.'),
      mc('5 − 3 = ?', ['1', '2', '3', '8'], 1, 'Taking three from five leaves two.'),
    ]), project({
      title: 'Story problems with objects',
      prompt: 'Act out two addition and two subtraction stories with toys. Draw each story and write the number sentence.',
      deliverable: 'Four drawings with number sentences.',
      guidance: ['Say the story aloud before acting it out.', 'Check the number sentence against the objects.'],
      rubric: MATH_PROJECT,
    })),
  ],
  finalExam: exam('Kindergarten math final check', [
    mc('Which number is greatest?', ['11', '7', '19', '14'], 2, 'Nineteen is the largest.'),
    mc('3 + 4 = ?', ['6', '7', '8', '9'], 1, 'Three and four make seven.'),
    mc('9 − 4 = ?', ['3', '4', '5', '6'], 2, 'Nine take away four is five.'),
    mc('Which shape has three sides?', ['circle', 'square', 'triangle', 'rectangle'], 2, 'A triangle has three sides.'),
  ], 20),
};

export const kindergartenScience: Course = {
  id: 'k-sci',
  title: 'Kindergarten Science',
  subject: 'science',
  grade: 0,
  credits: 0,
  semesters: 2,
  description:
    'Observing with the senses, describing weather and seasons, and identifying what living things need.',
  essentialQuestions: ['How do I find out about the world?', 'What do living things need to stay alive?'],
  teks: [teks('19 TAC ch. 112, Kindergarten', 'Scientific investigation and reasoning; matter and energy; force and motion; Earth and space; organisms and environments.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Observe and describe', 'Scientists use their senses and words to compare.', [
      lesson({
        id: 'k-sci-u1-l1',
        title: 'Observe, describe, and compare',
        minutes: 20,
        objectives: ['Use the five senses to observe.', 'Describe properties such as color, size, and texture.'],
        sections: [
          section('Five senses', [
            'We see with our eyes, hear with our ears, smell with our nose, taste with our tongue, and touch with our skin. Scientists use senses to gather information, and they use tools — such as a magnifier — to observe more carefully.',
            'Safety first: never taste or smell an unknown substance in a science investigation. Use a picture or an adult’s guidance instead.',
          ]),
          section('Describing properties', [
            'A property is something you can observe: color, size, shape, texture (rough or smooth), and whether something is heavy or light. Comparing two objects by one property at a time makes observations clearer.',
          ]),
        ],
        example: {
          prompt: 'Compare an apple and a golf ball.',
          steps: ['Choose a property: shape.', 'Apple: round but uneven; golf ball: round with dimples.', 'Choose another property: texture.', 'Apple: smooth skin; golf ball: bumpy.'],
          answer: 'They are both round, but they differ in texture and size.',
        },
        practice: [
          mc('Which sense would you use to tell if a sock is soft?', ['sight', 'touch', 'taste', 'hearing'], 1, 'Texture is felt with the skin.'),
          mc('A safe science rule is', ['taste everything', 'never taste unknown materials', 'smell all chemicals', 'work alone'], 1, 'Never taste unknown materials.'),
        ],
      }),
    ], quiz('Observation check', [
      mc('Which is a property you can observe?', ['weight in grams', 'color', 'age', 'price'], 1, 'Color is directly observable.'),
      mc('A magnifier helps you', ['hear better', 'see small details', 'taste', 'weigh objects'], 1, 'It enlarges what you see.'),
    ]), project({
      title: 'Sensory observation journal',
      prompt: 'Observe three objects with at least two senses each (safely). Draw each and write one describing word.',
      deliverable: 'Three journal entries with drawings and words.',
      guidance: ['Model descriptive words.', 'Enforce the no-tasting rule.'],
      rubric: INQUIRY_PROJECT,
    })),
    unit('u2', 'Weather and seasons', 'Weather changes, and we prepare for it.', [
      lesson({
        id: 'k-sci-u2-l1',
        title: 'Weather, clothing, and safety',
        minutes: 20,
        objectives: ['Describe today’s weather.', 'Choose clothing and safety actions for weather.'],
        sections: [
          section('Weather words', [
            'Weather is what the air and sky are like right now: sunny, cloudy, rainy, windy, hot, or cold. You can observe weather by looking outside and feeling the air.',
            'Seasons are longer patterns. In Texas, summers are usually hot and winters are usually mild, but weather can change quickly. A thermometer measures temperature.',
          ]),
          section('Staying safe', [
            'Dress for the weather: a coat when it is cold, a hat and water when it is hot. During lightning, go indoors. Never play in flood water — it can be deeper and faster than it looks.',
          ]),
        ],
        example: {
          prompt: 'It is 38 °C and sunny. What should you take outside?',
          steps: ['Notice the heat.', 'Choose water and a hat.', 'Plan shade and short time outdoors.'],
          answer: 'Water, a hat, and shade breaks.',
        },
        practice: [
          mc('Which tool measures temperature?', ['ruler', 'thermometer', 'scale', 'clock'], 1, 'A thermometer measures temperature.'),
          mc('During lightning, you should', ['stay outside', 'go indoors', 'stand under a tree', 'swim'], 1, 'Indoors is safest.'),
        ],
      }),
    ], quiz('Weather check', [
      mc('Which is a weather word?', ['windy', 'square', 'loud', 'sweet'], 0, 'Windy describes weather.'),
      mc('Flood water is dangerous because', ['it is always warm', 'it can be deep and fast', 'it is clean', 'it is shallow'], 1, 'Flood water can be deeper and faster than it appears.'),
    ]), project({
      title: 'Weather chart',
      prompt: 'Record the weather for five days with a drawing and one word each day. Circle the day with the most wind or rain.',
      deliverable: 'A five-day chart.',
      guidance: ['Record at the same time each day.', 'Use words and pictures.'],
      rubric: INQUIRY_PROJECT,
    })),
    unit('u3', 'Living things', 'Living things grow, need food and water, and change.', [
      lesson({
        id: 'k-sci-u3-l1',
        title: 'What living things need',
        minutes: 20,
        objectives: ['Distinguish living from nonliving.', 'Name what plants and animals need.'],
        sections: [
          section('Living or not?', [
            'Living things grow, need food or sunlight, take in water, and can produce young. A plant is living; a rock is not. A toy dog is not living even though it looks like a dog.',
            'Plants need light, water, air, and space. Animals need food, water, air, and shelter. People need those things too, plus care from others.',
          ]),
          section('Observing change', [
            'A seed can sprout, a puppy can grow, and a leaf can fall. Observing the same plant over days teaches you that living things change.',
          ]),
        ],
        example: {
          prompt: 'Is a tree living? Give two reasons.',
          steps: ['Does it grow? Yes.', 'Does it need water and light? Yes.', 'Conclusion: living.'],
          answer: 'Yes; it grows and needs water and light.',
        },
        practice: [
          mc('Which is living?', ['rock', 'tree', 'chair', 'cup'], 1, 'A tree grows and needs water and light.'),
          mc('Plants need', ['only darkness', 'light and water', 'only soil', 'nothing'], 1, 'Plants need light and water, among other things.'),
        ],
      }),
    ], quiz('Living things check', [
      mc('Which is nonliving?', ['dog', 'rock', 'grass', 'bird'], 1, 'A rock does not grow or need food.'),
      mc('Animals need', ['only toys', 'food, water, air, and shelter', 'only sunlight', 'nothing'], 1, 'Those are basic needs.'),
    ]), project({
      title: 'Plant watch',
      prompt: 'Plant a bean seed. Draw it every three days for two weeks and label what changed.',
      deliverable: 'Five dated drawings with one sentence each.',
      guidance: ['Keep light and water consistent.', 'Measure height with a string or ruler.'],
      rubric: INQUIRY_PROJECT,
    })),
  ],
  finalExam: exam('Kindergarten science final check', [
    mc('Which sense tells you a lemon is sour?', ['sight', 'taste', 'hearing', 'smell'], 1, 'Sour is a taste.'),
    mc('A thermometer measures', ['wind', 'temperature', 'rain', 'time'], 1, 'It measures temperature.'),
    mc('Which is living?', ['rock', 'plant', 'chair', 'shoe'], 1, 'A plant grows and needs water and light.'),
    mc('Plants need', ['light and water', 'only sand', 'only air', 'nothing'], 0, 'Light and water are basic needs.'),
  ], 20),
};

export const kindergartenSocialStudies: Course = {
  id: 'k-ss',
  title: 'Kindergarten Social Studies',
  subject: 'social-studies',
  grade: 0,
  credits: 0,
  semesters: 2,
  description:
    'Rules and community jobs, maps and position words, and Texas and United States symbols. Introduces the idea of citizenship through concrete examples.',
  essentialQuestions: ['Why do communities need rules?', 'What do symbols tell us about a place?'],
  teks: [teks('19 TAC ch. 113, Kindergarten', 'Self, family, and community; rules and authority; maps and places; symbols and celebrations; basic economics.')],
  weights: ELEMENTARY_WEIGHTS,
  units: [
    unit('u1', 'Rules and community', 'Rules help people live and work together safely.', [
      lesson({
        id: 'k-ss-u1-l1',
        title: 'Rules, jobs, and cooperation',
        minutes: 20,
        objectives: ['Explain why a family or classroom needs rules.', 'Name community jobs and what they do.'],
        sections: [
          section('Rules', [
            'Rules tell us what is safe and fair. A classroom rule such as “raise your hand” lets everyone be heard. A family rule such as “tell an adult where you are going” keeps people safe.',
            'Rules work best when they are clear, fair, and applied to everyone. When a rule is broken, the community decides on a fair consequence.',
          ]),
          section('Jobs', [
            'People in a community do different jobs that help one another: teachers, nurses, farmers, bus drivers, firefighters, and store clerks. A job is work that provides a good or service people need.',
          ]),
        ],
        example: {
          prompt: 'Why does a crossing guard help the community?',
          steps: ['Identify the job.', 'Identify who benefits: children and drivers.', 'Identify the risk reduced: crossing traffic safely.'],
          answer: 'The guard helps children cross safely and keeps traffic orderly.',
        },
        practice: [
          mc('Why do we have rules?', ['to be mean', 'to keep people safe and fair', 'to make school longer', 'to stop all fun'], 1, 'Rules protect safety and fairness.'),
          mc('Which is a community job?', ['firefighter', 'dragon', 'mountain', 'cloud'], 0, 'A firefighter provides a service.'),
        ],
      }),
    ], quiz('Rules and jobs check', [
      mc('A rule should be', ['secret', 'clear and fair', 'different for everyone', 'impossible'], 1, 'Clear and fair rules work best.'),
      mc('A teacher provides', ['a service', 'a rock', 'a road', 'a storm'], 0, 'Teaching is a service.'),
    ]), project({
      title: 'Community helper drawing',
      prompt: 'Draw one community helper. Write or dictate one sentence about how that person helps.',
      deliverable: 'A labeled drawing with one sentence.',
      guidance: ['Ask the child to name a specific action.', 'Accept invented spelling and label it.'],
      rubric: CREATIVE_PROJECT,
    })),
    unit('u2', 'Maps and places', 'Maps show where things are.', [
      lesson({
        id: 'k-ss-u2-l1',
        title: 'Maps, globes, and position words',
        minutes: 20,
        objectives: ['Recognize a map and a globe.', 'Use position and direction words.'],
        sections: [
          section('Models of places', [
            'A map is a drawing of a place seen from above. A globe is a model of Earth. Maps use symbols, such as a blue line for a river or a star for a capital.',
            'A map key explains the symbols. North, south, east, and west are directions; on most maps north is at the top.',
          ]),
        ],
        example: {
          prompt: 'On a map of your room, where is the bed?',
          steps: ['Draw the room from above.', 'Mark the door.', 'Place the bed and label it.', 'Use a position word: “next to the window.”'],
          answer: 'A labeled top-down drawing with a position word.',
        },
        practice: [
          mc('A map is a drawing of a place', ['from above', 'from underneath', 'from space only', 'with no symbols'], 0, 'Maps are top-down views.'),
          mc('A globe is a model of', ['a house', 'Earth', 'a car', 'a book'], 1, 'A globe models Earth.'),
        ],
      }),
    ], quiz('Maps check', [
      mc('A map key explains', ['the weather', 'symbols on the map', 'the time', 'the price'], 1, 'Keys explain symbols.'),
      mc('On most maps, north is', ['at the bottom', 'at the top', 'on the left', 'in the middle'], 1, 'North is usually at the top.'),
    ]), project({
      title: 'Map of my room',
      prompt: 'Draw a map of your room from above, with a key for three objects.',
      deliverable: 'A labeled map with a key.',
      guidance: ['Start with walls and door.', 'Add a key with symbols.'],
      rubric: CREATIVE_PROJECT,
    })),
    unit('u3', 'Symbols and citizenship', 'Symbols stand for a place and its ideas.', [
      lesson({
        id: 'k-ss-u3-l1',
        title: 'Texas and U.S. symbols',
        minutes: 20,
        objectives: ['Identify the Texas and U.S. flags.', 'Explain what a symbol is.'],
        sections: [
          section('Symbols', [
            'A symbol is something that stands for something else. The United States flag stands for the country; the Texas flag stands for the state. The bald eagle is a national symbol; the mockingbird is the Texas state bird.',
            'People show respect for symbols in different ways, such as standing during the national anthem. Families may hold different views about how to show respect; the important thing is to understand what the symbol represents.',
          ]),
        ],
        example: {
          prompt: 'Name one U.S. symbol and what it stands for.',
          steps: ['Choose a symbol.', 'State what it represents.'],
          answer: 'The U.S. flag stands for the United States.',
        },
        practice: [
          mc('A symbol is something that', ['is always red', 'stands for something else', 'is a rule', 'is a map'], 1, 'Symbols represent something.'),
          mc('The Texas state bird is the', ['bald eagle', 'mockingbird', 'blue jay', 'cardinal'], 1, 'The mockingbird is the Texas state bird.'),
        ],
      }),
    ], quiz('Symbols check', [
      mc('The U.S. flag stands for', ['a city', 'the United States', 'a school', 'a river'], 1, 'It represents the country.'),
      mc('The bald eagle is a symbol of', ['Texas', 'the United States', 'a county', 'a team'], 1, 'It is a national symbol.'),
    ]), project({
      title: 'Symbol poster',
      prompt: 'Draw two symbols (one Texas, one U.S.) and say what each stands for.',
      deliverable: 'A labeled poster with two symbols.',
      guidance: ['Check colors and shapes against a reference.', 'Ask the child to explain each symbol.'],
      rubric: CREATIVE_PROJECT,
    })),
  ],
  finalExam: exam('Kindergarten social studies final check', [
    mc('Rules help keep people', ['confused', 'safe and fair', 'quiet forever', 'apart'], 1, 'Rules protect safety and fairness.'),
    mc('A map is a drawing of a place', ['from above', 'from below', 'from the side', 'with no labels'], 0, 'Maps are top-down.'),
    mc('The Texas state bird is the', ['eagle', 'mockingbird', 'owl', 'hawk'], 1, 'The mockingbird is the state bird.'),
    mc('A community helper is', ['a firefighter', 'a rock', 'a cloud', 'a river'], 0, 'Firefighters serve the community.'),
  ], 20),
};
