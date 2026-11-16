import type { LessonDepth } from './types';

/** Authored depth for grade 2. Each entry teaches the lesson's own topic. */
export const DEPTH_G2: Record<string, LessonDepth> = {
  'g2-ela-u1-l1': {
    topics: ['syllables', 'prefixes and suffixes'],
    applicationTitle: 'Taking long words apart',
    application:
      'Long words are easier to read and spell when you break them into parts. A syllable is a beat with one vowel sound: “un-hap-py” has three. A prefix goes at the front and changes meaning, as un- means “not.” A suffix goes at the end and can change the word’s job, as -ful means “full of.” Together they let you read a word like “unhelpful” piece by piece.',
    example: {
      prompt: 'Break “unhelpful” into parts and explain what each part adds.',
      steps: [
        'Find the base word: help.',
        'Add the prefix un- (“not”) and the suffix -ful (“full of”).',
      ],
      answer: 'un- + help + -ful means “not full of help,” or not useful.',
    },
    terms: [
      ['syllable', 'a word part with one vowel sound, such as “hap” in happy'],
      ['prefix', 'a word part added to the front that changes meaning'],
    ],
    review: [
      {
        prompt: 'How do you count syllables in a word?',
        answer: 'Say it slowly and count the beats, one beat for each vowel sound.',
      },
      {
        prompt: 'What does the suffix -less mean?',
        answer: 'It means without, as in hopeless, meaning without any hope at all.',
      },
    ],
    exercises: [
      'Clap the syllables in five words from a book and write the counts.',
      'Make two new words with the prefix re- and use each in a sentence.',
    ],
  },
  'g2-ela-u2-l1': {
    topics: ['nouns', 'compound sentences'],
    applicationTitle: 'Building clear sentences',
    application:
      'Nouns name people, places, things, and ideas; verbs tell what happens; adjectives describe. Knowing the jobs lets you fix a sentence that does not make sense. Two short sentences can also be joined with a conjunction such as and, but, or so: “It rained. We stayed inside.” becomes “It rained, so we stayed inside.” The joining word shows how the ideas connect.',
    example: {
      prompt: 'Combine: “The dog barked. The mail carrier left.” Use a joining word that shows cause.',
      steps: [
        'Decide how the ideas relate: the barking came before the carrier left.',
        'Choose so or because to show the connection.',
      ],
      answer: '“The dog barked, so the mail carrier left.” The conjunction shows the result.',
    },
    terms: [
      ['noun', 'a word that names a person, place, thing, or idea'],
      ['conjunction', 'a word such as and, but, or so that joins ideas'],
    ],
    review: [
      {
        prompt: 'What job does an adjective do?',
        answer: 'It describes a noun, telling which one, what kind, or how many.',
      },
      {
        prompt: 'When should you use “but” instead of “and”?',
        answer: 'When the second idea contrasts with the first, as in “I wanted to go, but it rained.”',
      },
    ],
    exercises: [
      'Label the nouns and verbs in three sentences from a book.',
      'Write two pairs of sentences and join each pair with a different conjunction.',
    ],
  },
  'g2-ela-u3-l1': {
    topics: ['main idea', 'supporting details'],
    applicationTitle: 'Finding what a paragraph is really about',
    application:
      'The main idea is what a whole paragraph or section is mostly about; details support it. A paragraph about how bees find flowers might include details about color, scent, and dance. Separating the big idea from the details helps you take notes, answer questions, and summarize a page in one sentence instead of copying it.',
    example: {
      prompt: 'A paragraph says bees see ultraviolet patterns, smell flowers, and dance to share directions. What is the main idea?',
      steps: [
        'Ask what all three details have in common: how bees locate food.',
        'Write one sentence that covers all three without listing them.',
      ],
      answer: 'Bees use several senses and signals to find flowers.',
    },
    terms: [
      ['main idea', 'the most important point a text makes about its topic'],
      ['supporting detail', 'a fact or example that explains or proves the main idea'],
    ],
    review: [
      {
        prompt: 'How is a topic different from a main idea?',
        answer: 'A topic is what the text is about; the main idea is what it says about that topic.',
      },
      {
        prompt: 'How many details should support a main idea?',
        answer: 'Enough to convince a reader, usually two or three strong ones.',
      },
    ],
    exercises: [
      'Read a short article and write its main idea in one sentence.',
      'Find two details that support the main idea and copy them.',
    ],
  },
  'g2-math-u1-l1': {
    topics: ['place value', 'expanded form'],
    applicationTitle: 'Reading and writing bigger numbers',
    application:
      'Three-digit numbers are built from hundreds, tens, and ones. Writing 407 in expanded form as 400 + 0 + 7 shows that the zero means “no tens,” which is different from 47. Comparing numbers means comparing the largest place first: 407 is greater than 397 because 4 hundreds beat 3 hundreds, even before you look at the tens. A place-value table with hundreds, tens, and ones columns turns that comparison into a habit.',
    example: {
      prompt: 'Write 265 in expanded form and compare it with 256.',
      steps: [
        'Break it apart: 200 + 60 + 5.',
        'Compare the hundreds first: both have 2. Then the tens: 6 tens beats 5 tens.',
      ],
      answer: '265 = 200 + 60 + 5, and 265 > 256 because it has more tens.',
    },
    terms: [
      ['expanded form', 'a number written as the sum of its place values'],
      ['place value', 'the value a digit has because of its position'],
    ],
    review: [
      {
        prompt: 'What does the 0 in 503 tell you?',
        answer: 'There are no tens; the number is 500 plus 3.',
      },
      {
        prompt: 'Which is greater, 489 or 498? How do you know?',
        answer: '498, because the hundreds are equal and 9 tens is more than 8 tens.',
      },
    ],
    exercises: [
      'Write five three-digit numbers in expanded form.',
      'Put these in order from least to greatest: 372, 327, 732.',
    ],
  },
  'g2-math-u2-l1': {
    topics: ['regrouping', 'addition and subtraction'],
    applicationTitle: 'Carrying and borrowing with money',
    application:
      'Regrouping is what you do when a column has more than nine: ten ones become one ten, and ten tens become one hundred. The same idea runs backward in subtraction, where you borrow a ten to make enough ones. This matters with money, where ten dimes make a dollar, and with any measurement that has units of ten. Writing the regroup above the column you changed keeps the arithmetic honest and makes checking your work possible.',
    example: {
      prompt: 'Add 46 + 27 using regrouping.',
      steps: [
        'Add the ones: 6 + 7 = 13. Write 3 and carry 1 ten.',
        'Add the tens: 4 + 2 + 1 = 7 tens.',
      ],
      answer: '73, because 13 ones regroup as 1 ten and 3 ones.',
    },
    terms: [
      ['regroup', 'to trade ten in one place for one in the next place'],
      ['borrow', 'to regroup in subtraction by taking from the next place value'],
    ],
    review: [
      {
        prompt: 'Why do you carry a 1 when the ones add to 13?',
        answer: 'Because 13 ones equal 1 ten and 3 ones; the ten moves to the tens column.',
      },
      {
        prompt: 'Show 52 − 27 with borrowing.',
        answer: 'Borrow 1 ten: 12 − 7 = 5 ones; 4 − 2 = 2 tens; the answer is 25.',
      },
    ],
    exercises: [
      'Solve 58 + 36 and 81 − 47, showing each regroup.',
      'Use coins to show why 10 dimes equal 1 dollar.',
    ],
  },
  'g2-math-u3-l1': {
    topics: ['money', 'fractions'],
    applicationTitle: 'Coins, clocks, and equal parts',
    application:
      'Coins, clocks, and fractions all depend on equal parts. A quarter is one fourth of a dollar; half past the hour is 30 of 60 minutes; a sandwich cut into two equal halves gives each person the same amount. When parts are not equal, the fraction name is wrong, which is why a pizza cut unevenly cannot be described as halves. Naming the fraction also tells you how many parts make a whole: two halves, three thirds, four fourths.',
    example: {
      prompt: 'You have 2 quarters, 1 dime, and 3 pennies. How much money is that?',
      steps: [
        'Quarters: 25 + 25 = 50 cents. Add the dime: 60 cents.',
        'Add the pennies: 63 cents.',
      ],
      answer: '63 cents, or $0.63.',
    },
    terms: [
      ['quarter', 'a coin worth 25 cents, or one fourth of a dollar'],
      ['half', 'one of two equal parts of a whole'],
    ],
    review: [
      {
        prompt: 'How many minutes are in half an hour?',
        answer: 'Thirty minutes, because half of 60 is 30.',
      },
      {
        prompt: 'Why must parts be equal to be called halves?',
        answer: 'Because halves are two parts of exactly the same size.',
      },
    ],
    exercises: [
      'Count a handful of coins and write the total in cents.',
      'Cut a piece of paper into four equal parts and label each fourth.',
    ],
  },
  'g2-sci-u1-l1': {
    topics: ['physical changes', 'mass and volume'],
    applicationTitle: 'Changes you can undo',
    application:
      'A physical change alters how something looks or behaves without making a new substance. Melting butter, freezing water, and tearing paper are physical changes; you can often reverse them. Mass stays the same when matter changes shape or state, and volume measures how much space something takes up. Cooks rely on both ideas when they melt, mix, and chill ingredients.',
    example: {
      prompt: 'You freeze 200 grams of water into ice. What is the mass of the ice?',
      steps: [
        'Freezing changes state, not the amount of matter.',
        'Mass is conserved in a physical change.',
      ],
      answer: '200 grams. The ice takes more space, but its mass is unchanged.',
    },
    terms: [
      ['physical change', 'a change in form or appearance that makes no new substance'],
      ['mass', 'the amount of matter in an object'],
    ],
    review: [
      {
        prompt: 'How can you tell a change was only physical?',
        answer: 'The material is still the same substance, and the change can often be reversed.',
      },
      {
        prompt: 'What tool measures mass, and what tool measures volume?',
        answer: 'A balance measures mass; a graduated cylinder measures liquid volume.',
      },
    ],
    exercises: [
      'Melt an ice cube and describe two things that stayed the same and one that changed.',
      'Measure the mass of a piece of fruit before and after cutting it.',
    ],
  },
  'g2-sci-u2-l1': {
    topics: ['force', 'motion'],
    applicationTitle: 'Pushes and pulls all day',
    application:
      'A force is a push or a pull, and every change in motion comes from one. You push a door, pull a wagon, and feel friction slow a sliding book. A stronger force changes speed or direction more; a heavier object needs more force to move. Understanding this explains why a shopping cart is easier to push on smooth tile than on carpet.',
    example: {
      prompt: 'A ball rolls across a carpet and stops. What force acted on it?',
      steps: [
        'The ball slowed, so a force pushed against its motion.',
        'The carpet’s rough surface creates friction with the ball.',
      ],
      answer: 'Friction from the carpet pushed opposite the ball’s motion and stopped it.',
    },
    terms: [
      ['force', 'a push or a pull that can change motion'],
      ['friction', 'a force between surfaces that slows sliding or rolling'],
    ],
    review: [
      {
        prompt: 'What two things can a force change about an object’s motion?',
        answer: 'A force can change an object’s speed, its direction, or both at once.',
      },
      {
        prompt: 'Why is a heavy box harder to push than a light one?',
        answer: 'It has more mass, so it takes more force to start and change its motion.',
      },
    ],
    exercises: [
      'Push a toy on carpet and on a hard floor and describe the difference.',
      'List three pushes and three pulls you did today.',
    ],
  },
  'g2-sci-u3-l1': {
    topics: ['habitats', 'food chains'],
    applicationTitle: 'Who eats whom, and where they live',
    application:
      'A habitat provides an animal with food, water, shelter, and space. A food chain shows the order in which energy moves: the Sun feeds grass, grass feeds a rabbit, and the rabbit feeds a fox. Remove one link, such as the grass, and every animal above it is affected. This is why protecting a habitat protects the animals that depend on it, and why a food chain is a map of consequences rather than a list of names.',
    example: {
      prompt: 'Build a pond food chain with three links and name the producer.',
      steps: [
        'Start with something that makes its own food: algae or pond plants.',
        'Add a plant eater, then an animal that eats it: algae → tadpole → heron.',
      ],
      answer: 'Algae → tadpole → heron. The algae is the producer.',
    },
    terms: [
      ['habitat', 'the place where an animal finds food, water, and shelter'],
      ['producer', 'a living thing that makes its own food using sunlight'],
    ],
    review: [
      {
        prompt: 'What is a consumer in a food chain?',
        answer: 'An animal that eats other living things for energy.',
      },
      {
        prompt: 'What happens if a habitat loses its plants?',
        answer: 'Plant eaters lose food and shelter, and the animals that eat them lose food too.',
      },
    ],
    exercises: [
      'Draw a food chain from your yard or a park and label the producer.',
      'Describe one habitat near you and two animals that live there.',
    ],
  },
  'g2-ss-u1-l1': {
    topics: ['local government', 'taxes'],
    applicationTitle: 'Who pays for the library and the fire truck',
    application:
      'Local government provides services people cannot easily provide alone: schools, firefighting, libraries, parks, and street repair. Those services are paid for mostly by taxes, including property taxes on homes and sales taxes on purchases. When you see a fire truck or use a library, you are seeing tax money turned into a shared service. Because everyone pays a little, no single family has to buy a fire truck or build a library alone.',
    example: {
      prompt: 'A streetlight is broken. Which level of government fixes it, and who pays?',
      steps: [
        'Streetlights are a city service, not a federal one.',
        'Cities pay from their budget, funded mainly by property and sales taxes.',
      ],
      answer: 'The city repairs it, using tax money collected from residents and shoppers.',
    },
    terms: [
      ['public service', 'something a government provides for everyone, such as fire protection'],
      ['tax', 'money collected by government to pay for public services'],
    ],
    review: [
      {
        prompt: 'Name three services your city or town provides.',
        answer: 'For example: police and fire protection, parks, and street maintenance.',
      },
      {
        prompt: 'Why do people pay taxes?',
        answer: 'To fund services that benefit everyone and would be too costly for one person.',
      },
    ],
    exercises: [
      'List five public services you used this week.',
      'Ask an adult which taxes they pay and what those taxes fund.',
    ],
  },
  'g2-ss-u2-l1': {
    topics: ['Texas history', 'change over time'],
    applicationTitle: 'Texas then and now',
    application:
      'Life in Texas has changed enormously in a hundred years. In 1900 most Texans lived on farms without electricity or indoor plumbing; today most live in cities. Railroads, oil, air conditioning, and highways drove that change. Comparing then and now helps explain why Texas has large cities far from where people first settled and why some small towns shrank.',
    example: {
      prompt: 'Give one cause and one effect of Texas urbanization in the 1900s.',
      steps: [
        'Choose a cause: jobs in oil, factories, or air-conditioned offices drew people to cities.',
        'State the effect: cities grew while some rural counties lost population.',
      ],
      answer: 'Cause: industrial and oil jobs; effect: fast urban growth and decline in some rural areas.',
    },
    terms: [
      ['urban', 'having to do with cities'],
      ['rural', 'having to do with the countryside and farms'],
    ],
    review: [
      {
        prompt: 'Name two inventions that changed daily life in Texas.',
        answer: 'Electricity and air conditioning, plus automobiles and rural telephones.',
      },
      {
        prompt: 'How did railroads change Texas towns?',
        answer: 'Towns on rail lines grew because goods and people could move quickly; bypassed towns declined.',
      },
    ],
    exercises: [
      'Interview an older relative about how daily life differed when they were young.',
      'Draw a then-and-now picture of one Texas home.',
    ],
  },
  'g2-ss-u3-l1': {
    topics: ['Texas regions', 'natural resources'],
    applicationTitle: 'Regions, resources, and jobs',
    application:
      'Texas is divided into regions with different land, climate, and resources. The Gulf Coastal Plain has oil, ports, and farming; the Great Plains has wheat and cattle; the Piney Woods has timber. Resources shape jobs: where there is oil, there are refineries and engineers; where there is timber, there are sawmills. This connection between land and work is called economic geography.',
    example: {
      prompt: 'Why are there many refineries near the Gulf Coast?',
      steps: [
        'Oil is produced in and near the Gulf Coastal Plain and offshore.',
        'Refineries process crude oil, so they locate near supply and ports.',
      ],
      answer: 'Because oil is produced nearby and ports allow shipping, making the coast a cheap place to refine.',
    },
    terms: [
      ['region', 'an area with features that make it different from nearby areas'],
      ['natural resource', 'something from nature that people use, such as oil or timber'],
    ],
    review: [
      {
        prompt: 'Name two Texas regions and one resource in each.',
        answer: 'Gulf Coastal Plain: oil and cotton; Great Plains: wheat and cattle.',
      },
      {
        prompt: 'How does a resource create jobs?',
        answer: 'People are needed to extract, process, transport, and sell it.',
      },
    ],
    exercises: [
      'Label the four Texas regions on a map you draw.',
      'Choose one resource and list two jobs it creates.',
    ],
  },
};
