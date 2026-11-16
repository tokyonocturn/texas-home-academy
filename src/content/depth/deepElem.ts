import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Elementary fine arts, health/PE, and technology (banded K–5, grade 5 band). */
export const DEPTH_ELEM: Record<string, LessonDepth> = {
  'efa-u1-l1': {
    topics: ['tempo'],
    objectives: [
      'Name the elements of visual art and the building blocks of music.',
      'Describe what you see and hear using correct arts vocabulary.',
    ],
    sections: [
      {
        heading: 'Looking at art: line, shape, color, texture',
        paragraphs: [
          'Artists build pictures from a few elements. Line is a mark that shows direction, shape is a closed outline, and form is a shape that looks three-dimensional. Color has a name, a lightness, and a brightness, and texture is how a surface looks or feels — smooth, rough, bumpy, or soft.',
          'We describe art before we judge it. “I see a thick black line curving from the corner” is a description, while “it is beautiful” is an opinion. Naming the element you notice helps you explain why a picture makes you feel a certain way, and it is the first step in every art conversation.',
          'Space matters too. The shape you draw is positive space, and the empty area around it is negative space. Artists balance the two so a picture does not feel crowded on one side. Try drawing one large circle and three small ones and notice how the empty space changes when you move them.',
        ],
      },
      {
        heading: 'Listening to music: beat, rhythm, tempo, dynamics',
        paragraphs: [
          'Music has a steady pulse called the beat. Rhythm is the pattern of long and short sounds on top of that beat, and you can clap a rhythm while tapping the beat with your foot. Tempo describes how fast or slow the music moves, and dynamics describe how loud or soft it is.',
          'Instruments fall into families. Strings are played with a bow or plucked, woodwinds and brass are blown, percussion is struck or shaken, and keyboards can do several jobs at once. Listening for one family at a time is an easy way to hear how a piece is put together.',
          'A simple listening routine works for any piece: tap the beat, clap the rhythm, decide whether the tempo is fast or slow, and notice whether the dynamics change. Then say one thing you heard and one thing you wondered. That habit turns listening into a skill rather than background noise.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A drumbeat starts slow, gets faster, then becomes very soft. Describe it using tempo and dynamics.',
        steps: [
          'The speed changes from slow to fast, so the tempo increases.',
          'The volume drops at the end, so the dynamics become softer.',
          'Together they make the music feel like it is building and then fading.',
        ],
        answer: 'The tempo speeds up and the dynamics soften, creating a build and fade.',
      },
    ],
    terms: [
      ['line', 'a mark that shows direction and edge'],
      ['shape', 'a closed outline that has area'],
      ['texture', 'how a surface looks or feels'],
      ['beat', 'the steady pulse of music'],
      ['tempo', 'how fast or slow music moves'],
      ['dynamics', 'how loud or soft music is'],
    ],
    practice: [
      mc('Tempo describes', ['how loud the music is', 'how fast or slow it moves', 'the instrument family', 'the beat pattern'], 1, 'Tempo is speed.'),
      mc('Negative space is', ['the shape you draw', 'the empty area around it', 'dark paint', 'the background color'], 1, 'Space around the subject.'),
      num('How many instrument families are named here?', 4, 'Strings, woodwinds, brass, percussion, plus keyboards.'),
    ],
    review: [
      {
        prompt: 'What does tempo describe, and how is it different from dynamics?',
        answer: 'Tempo describes how fast or slow the music moves, while dynamics describe how loud or soft it is.',
      },
      {
        prompt: 'Why do we describe a work of art before judging it?',
        answer: 'Because naming what is actually there gives evidence for an opinion and helps others see what you see.',
      },
    ],
    exercises: [
      'Draw a picture using one thick line, one thin line, and two textures, then label each.',
      'Listen to a short piece and write the beat, tempo, and one dynamic change.',
    ],
  },
  'efa-u2-l1': {
    topics: ['warm-up'],
    objectives: [
      'Use basic drawing and painting techniques to create a finished work.',
      'Give and receive kind, specific feedback about art and music.',
    ],
    sections: [
      {
        heading: 'Making: drawing, painting, and singing',
        paragraphs: [
          'Every art session starts with a warm-up. A quick sketch of five shapes loosens the hand, and a vocal warm-up such as humming up and down a scale loosens the voice. Warm-ups are not the artwork; they are how you get ready to make one, like stretching before a run.',
          'In drawing, start with light shapes and add details later. Pressing hard too early makes erasing difficult, so sketch softly, check the size of each part, and darken the lines you want to keep. Pencil, crayon, and marker each make different lines, and choosing the right tool is part of the plan.',
          'In painting, mix small amounts of color first. Add a little water to spread paint thinly, and let one layer dry before adding another so colors stay bright instead of turning muddy. When singing, sit or stand tall, breathe from the belly, and sing softly enough to hear yourself match the pitch.',
        ],
      },
      {
        heading: 'Responding: describing and improving',
        paragraphs: [
          'Feedback works best when it is specific and kind. “Your sky has three shades of blue that make it look like evening” is helpful, while “it is good” gives the artist nothing to use. Say what you notice, then ask a question about a choice the artist made.',
          'Artists improve by revising. Choose one thing to change, try it on a practice sheet, and compare the two versions. Keeping both is useful, because seeing the first try beside the second shows progress that memory alone would miss.',
          'Performances improve the same way. Record a short song or read your sketchbook aloud, then pick one thing to fix next time — a steadier beat, a clearer title, or a darker shadow. Small, specific goals beat vague wishes to be better.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A painting’s colors look muddy. Diagnose and fix it.',
        steps: [
          'Muddy color usually comes from mixing too many colors or painting over wet paint.',
          'Rinse the brush and mix only two colors at a time.',
          'Let the layer dry before adding the next one.',
        ],
        answer: 'Limit the mix to two colors and let each layer dry so the colors stay clear.',
      },
    ],
    terms: [
      ['warm-up', 'a short preparation activity before making art or music'],
      ['sketch', 'a light, quick drawing used to plan'],
      ['layer', 'one coat of paint allowed to dry before the next'],
      ['pitch', 'how high or low a sung note is'],
      ['feedback', 'specific comments meant to help someone improve'],
      ['revise', 'to change a work to make it stronger'],
    ],
    practice: [
      mc('A warm-up is meant to', ['be the final artwork', 'prepare you to make art', 'replace practice', 'be graded'], 1, 'It prepares you.'),
      mc('Muddy paint usually comes from', ['too little water', 'mixing too many colors', 'drying layers', 'thin brushes'], 1, 'Too many colors mixed.'),
      num('How many things should you change at a time when revising?', 1, 'One change at a time.'),
    ],
    review: [
      {
        prompt: 'What makes feedback helpful to an artist?',
        answer: 'It names something specific the artist did and asks about a choice, so the artist knows what to keep or change.',
      },
      {
        prompt: 'Why should paint layers dry before the next one is added?',
        answer: 'Because wet layers mix together and turn muddy, while dry layers keep their separate colors.',
      },
    ],
    exercises: [
      'Make a practice sheet of three line types and three color mixes, then label them.',
      'Give a partner one specific compliment and one question about their work.',
    ],
  },
  'ehp-u1-l1': {
    topics: ['locomotor'],
    objectives: [
      'Perform and name locomotor, non-locomotor, and manipulative movements.',
      'Improve coordination through practice and explain why warm-ups prevent injury.',
    ],
    sections: [
      {
        heading: 'How the body moves',
        paragraphs: [
          'Locomotor movements take you from one place to another: walking, running, hopping, skipping, jumping, galloping, and sliding. Non-locomotor movements happen in place, such as bending, twisting, stretching, and balancing. Both kinds appear in every game and dance.',
          'Manipulative skills use an object: throwing, catching, kicking, striking, dribbling, and bouncing. Each has a sequence — step, turn, release — and practicing the parts slowly makes the whole skill smoother. Catching is easier with soft hands that give a little as the ball arrives.',
          'Coordination improves with repetition and rest. Practicing a skill twenty times in a row teaches less than practicing ten times, resting, and practicing ten more, because the body consolidates movement between attempts. Short, frequent practice beats one long session.',
        ],
      },
      {
        heading: 'Warm-ups, safety, and fair play',
        paragraphs: [
          'A warm-up raises heart rate and loosens joints. Jogging in place, arm circles, and leg swings prepare the body for running and throwing, and a cool-down with slow walking helps breathing return to normal. Skipping a warm-up is the most common cause of strains in physical education class.',
          'Safety rules protect everyone. Wear shoes that fit, check the space for obstacles, keep water nearby, and stop if you feel dizzy or sharp pain. When throwing, make sure no one is in front of you, and when running, look where you are going rather than at the ball.',
          'Fair play means following rules, taking turns, and encouraging teammates. A game where one person dominates stops being fun for everyone, so rotating positions and passing the ball keeps all players involved. Good sportsmanship after a loss is as much a skill as a good throw.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A student keeps missing catches. Diagnose and prescribe practice steps.',
        steps: [
          'Watch the hands: stiff hands let the ball bounce out.',
          'Practice with a soft ball, tossing it up and catching it yourself.',
          'Then catch with a partner at a short distance, moving back gradually.',
        ],
        answer: 'Soften the hands and progress from self-toss to partner catches at increasing distance.',
      },
    ],
    terms: [
      ['locomotor movement', 'movement that travels from one place to another'],
      ['non-locomotor movement', 'movement performed in place'],
      ['manipulative skill', 'a skill using an object, such as throwing or catching'],
      ['coordination', 'using body parts together smoothly'],
      ['warm-up', 'activity that prepares the body for exercise'],
      ['sportsmanship', 'fair and respectful behavior in games'],
    ],
    practice: [
      mc('Skipping is a', ['non-locomotor movement', 'locomotor movement', 'manipulative skill', 'warm-up'], 1, 'It travels.'),
      mc('Catching is easier with', ['stiff hands', 'soft hands', 'one finger', 'eyes closed'], 1, 'Soft hands absorb the ball.'),
      num('How many manipulative skills are named here?', 6, 'Throw, catch, kick, strike, dribble, bounce.'),
    ],
    review: [
      {
        prompt: 'Why does a warm-up reduce the chance of injury?',
        answer: 'It raises heart rate and loosens joints and muscles so they can handle sudden movement without straining.',
      },
      {
        prompt: 'How does short, repeated practice beat one long session?',
        answer: 'Because the body consolidates new movement between attempts, so rest improves the next try.',
      },
    ],
    exercises: [
      'Practice three locomotor movements for one minute each and record which felt smoothest.',
      'Design a five-minute warm-up with four movements and explain each choice.',
    ],
  },
  'ehp-u2-l1': {
    topics: ['hygiene'],
    objectives: [
      'Describe daily habits that protect health, including nutrition, sleep, and hygiene.',
      'Recognize safety rules and explain how to ask an adult for help.',
    ],
    sections: [
      {
        heading: 'Everyday health habits',
        paragraphs: [
          'Bodies need fuel, rest, water, and cleanliness. A healthy plate has fruits and vegetables, whole grains, protein, and dairy or a fortified alternative, and water is the best everyday drink. Breakfast helps concentration, and snacks with protein last longer than sugary ones.',
          'Children need about nine to eleven hours of sleep. A regular bedtime, a dark quiet room, and no screens for the last half hour help the body settle. Sleep is when the body grows and the brain stores what was learned that day, so it is part of schoolwork, not a break from it.',
          'Hygiene prevents illness. Wash hands with soap for at least twenty seconds before eating and after using the bathroom, brush teeth twice a day, bathe regularly, and cover coughs with an elbow. These habits protect you and the people around you.',
        ],
      },
      {
        heading: 'Safety and asking for help',
        paragraphs: [
          'Safety rules exist because accidents are fast. Wear a helmet when biking or skating, cross streets with an adult and look both ways, never swim alone, and wear sunscreen outdoors. Helmets must fit snugly and sit level on the head to protect the brain.',
          'Feelings are part of health. Everyone feels sad, angry, or worried sometimes, and naming the feeling helps. If a feeling lasts a long time or makes it hard to eat, sleep, or play, tell a trusted adult — a parent, teacher, counselor, or school nurse. Asking for help is a strong choice, not a weakness.',
          'Know how to get help in an emergency. In the United States, call 911 for fire, serious injury, or danger, and give your address first. Practice with an adult so the words are ready before you need them.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A student feels tired every morning and cannot concentrate. Diagnose and prescribe two changes.',
        steps: [
          'Check bedtime and total hours: aim for nine to eleven.',
          'Remove screens for thirty minutes before bed.',
          'Add water and a protein snack during the day.',
        ],
        answer: 'Earlier, screen-free bedtime and better food and water should improve morning energy.',
      },
    ],
    terms: [
      ['nutrient', 'a substance the body needs to grow and work'],
      ['hygiene', 'habits that keep the body clean and healthy'],
      ['helmet fit', 'a helmet worn level and snug with straps fastened'],
      ['trusted adult', 'a grown-up you can talk to about safety or feelings'],
      ['emergency', 'a situation needing immediate help'],
      ['screen time', 'time spent looking at phones, tablets, or televisions'],
    ],
    practice: [
      num('How many seconds should you wash your hands?', 20, 'At least twenty.'),
      mc('Children need about how much sleep?', ['five to six hours', 'seven to eight hours', 'nine to eleven hours', 'twelve to fourteen hours'], 2, 'Nine to eleven.'),
      num('What number do you call in an emergency in the United States?', 911, '911.'),
    ],
    review: [
      {
        prompt: 'Why is sleep part of doing well in school?',
        answer: 'Because the brain stores new learning during sleep, and too little sleep makes concentration and mood worse.',
      },
      {
        prompt: 'When should you tell a trusted adult about a feeling?',
        answer: 'When the feeling lasts a long time or makes it hard to eat, sleep, learn, or play.',
      },
    ],
    exercises: [
      'Track bedtime and sleep hours for five nights and describe one change to try.',
      'Write and practice a short script for calling 911 with your address.',
    ],
  },
  'etech-u1-l1': {
    topics: ['keyboarding'],
    objectives: [
      'Type with correct posture and home-row finger placement.',
      'Organize files and folders and explain basic digital citizenship rules.',
    ],
    sections: [
      {
        heading: 'Keyboarding and saving work',
        paragraphs: [
          'Touch typing uses the home row: your left fingers rest on A, S, D, and F, and your right fingers rest on J, K, L, and the semicolon. The bumps on F and J help you find home without looking. Thumbs press the space bar, and each finger reaches its own keys, returning home after every stroke.',
          'Posture matters. Sit with feet flat, back straight, and wrists level, and keep the screen at eye level. Looking at the screen instead of your hands feels slow at first, but it builds speed faster than hunting for letters, and accuracy should come before speed.',
          'Save your work often and name files clearly. A name like “book-report-draft-2” tells you what it is, while “untitled” does not. Keep folders for each subject, and remember that saving to a school account is different from saving only on one computer.',
        ],
      },
      {
        heading: 'Digital citizenship and safety',
        paragraphs: [
          'Digital citizenship means behaving online as you would in person. Use kind words, respect others’ privacy, and do not share someone else’s photo without permission. Once something is posted, it can be copied, so treat every message as public even when it feels private.',
          'Protect personal information. Never share your home address, phone number, school name, or passwords with strangers, and use a password that is long and hard to guess. If a message makes you uncomfortable, tell an adult rather than replying.',
          'Give credit for other people’s work. Copying text and calling it your own is plagiarism, and images from the internet belong to someone. Ask permission or use sources labeled for reuse, and always say where information came from. A citation can be as simple as naming the site and the date you visited it, which is enough for a class project and builds the habit that later research requires.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A classmate asks for your password to borrow your account. Respond and explain.',
        steps: [
          'Say no clearly: passwords stay private, even with friends.',
          'Offer a different help: they can use a shared class login or ask the teacher.',
          'Tell an adult if the request continues.',
        ],
        answer: 'Decline, offer the approved alternative, and involve an adult if pressure continues.',
      },
    ],
    terms: [
      ['home row', 'the keys where fingers rest while typing'],
      ['posture', 'the position of your body while sitting and working'],
      ['file name', 'the label that identifies a saved document'],
      ['digital citizenship', 'responsible, safe, and respectful behavior when using the internet and devices'],
      ['password', 'a secret string used to access an account'],
      ['plagiarism', 'presenting someone else’s work as your own'],
    ],
    practice: [
      mc('Which keys are the home row for the left hand?', ['Q, W, E, R', 'A, S, D, F', 'Z, X, C, V', '1, 2, 3, 4'], 1, 'A, S, D, F.'),
      mc('A strong password is', ['your first name', 'long and hard to guess', 'shared with friends', 'the same everywhere'], 1, 'Long and unpredictable.'),
      num('How many things should you never share online, according to this lesson?', 4, 'Address, phone, school, passwords.'),
    ],
    review: [
      {
        prompt: 'Why should you look at the screen instead of your hands while typing?',
        answer: 'Because touch typing depends on finger memory, and looking at the keys slows you down and prevents that memory from forming.',
      },
      {
        prompt: 'Name two things you should never share online with strangers.',
        answer: 'Never share your home address, your passwords, your phone number, or your school name with strangers.',
      },
    ],
    exercises: [
      'Type a short paragraph three times and record your accuracy each time.',
      'Create three folders and save five files with clear, descriptive names.',
    ],
  },
  'etech-u2-l1': {
    topics: ['algorithm'],
    objectives: [
      'Explain what an algorithm is and put steps in a correct sequence.',
      'Search safely and evaluate whether online information is trustworthy.',
    ],
    sections: [
      {
        heading: 'Algorithms and sequencing',
        paragraphs: [
          'An algorithm is a list of steps that solves a problem. A recipe, a set of directions, and a computer program are all algorithms. The steps must be in the right order, and each step must be clear enough that someone else could follow it without guessing.',
          'Sequencing is the order of steps. Getting dressed before showering produces a different result from showering first, and a program that adds before it reads the numbers will use the wrong values. Debugging means finding the step where the result goes wrong and fixing that step.',
          'Loops and conditions make algorithms powerful. A loop repeats steps, like stirring until the batter is smooth, and a condition chooses a path, like “if it is raining, take an umbrella.” Recognizing these patterns in everyday instructions is the beginning of programming.',
        ],
      },
      {
        heading: 'Searching safely and checking information',
        paragraphs: [
          'A good search uses a few specific words rather than a whole sentence. Searching “Texas state bird” finds an answer faster than “what is the bird for the state of Texas please.” Checking two reliable sites is better than trusting the first result, because the top result is not always the most accurate.',
          'Not everything online is true. Check who wrote the page, whether it was updated recently, and whether it gives evidence. Government and museum sites, encyclopedias, and library databases are usually more dependable than a random video or a comment.',
          'Stay safe while searching. Use school-approved tools, avoid pop-ups and downloads, and tell an adult if a page shows something upsetting. Never meet someone you met online, and never send a photo to a stranger. Reporting a problem quickly is the best protection.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Fix this algorithm: “Put on shoes. Put on socks. Go outside.”',
        steps: [
          'The order is wrong because socks go under shoes.',
          'Swap the first two steps.',
          'Check that the final step depends on the first two being done.',
        ],
        answer: 'Put on socks, put on shoes, go outside.',
      },
    ],
    terms: [
      ['algorithm', 'a clear list of steps that solves a problem'],
      ['sequence', 'the order in which steps happen'],
      ['loop', 'a step or set of steps that repeats'],
      ['condition', 'a rule that chooses between paths'],
      ['debug', 'to find and fix a step that causes an error'],
      ['reliable source', 'a source whose author and evidence can be checked'],
    ],
    practice: [
      mc('An algorithm must have steps that are', ['long', 'clear and in order', 'written in code', 'secret'], 1, 'Clear and ordered.'),
      mc('A loop is used to', ['stop a program', 'repeat steps', 'delete files', 'search the web'], 1, 'It repeats.'),
      num('How many reliable-source checks are named here?', 3, 'Author, date, evidence.'),
    ],
    review: [
      {
        prompt: 'What makes an algorithm work?',
        answer: 'Its steps must be clear, complete, and in the right order so someone else can follow them and get the same result.',
      },
      {
        prompt: 'How can you tell whether a website is trustworthy?',
        answer: 'Check who wrote it, when it was updated, and whether it supports its claims with evidence from a reliable source.',
      },
    ],
    exercises: [
      'Write an algorithm for brushing your teeth with at least six ordered steps.',
      'Compare two websites on one question and explain which is more reliable.',
    ],
  },
};
