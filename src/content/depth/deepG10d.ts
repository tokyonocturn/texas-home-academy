import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Spanish II, Physical Education, and Computer Science I (grade 10). */
export const DEPTH_G10D: Record<string, LessonDepth> = {
  'span2-u1-l1': {
    topics: ['preterite'],
    objectives: [
      'Conjugate regular and common irregular verbs in the preterite tense.',
      'Describe a past daily routine using reflexive verbs and time expressions.',
    ],
    sections: [
      {
        heading: 'The preterite: completed past actions',
        paragraphs: [
          'Spanish has two past tenses, and the preterite describes completed actions with a clear end. Regular -ar verbs take -é, -aste, -ó, -amos, -asteis, -aron, so hablar becomes hablé, hablaste, habló, hablamos, hablasteis, hablaron. Regular -er and -ir verbs share endings: -í, -iste, -ió, -imos, -isteis, -ieron, as in comí and viví.',
          'Common verbs are irregular and must be memorized: ir and ser share fui, fuiste, fue, fuimos, fuisteis, fueron; hacer becomes hice, hiciste, hizo; tener becomes tuve, tuviste, tuvo; estar becomes estuve, estuviste, estuvo. Context distinguishes ir from ser, since both look identical in the preterite.',
          'Time expressions signal the tense: ayer means yesterday, anoche last night, la semana pasada last week, and hace dos años two years ago. The imperfect, by contrast, describes ongoing or habitual past action, so “de niño, jugaba” sets a scene while “ayer jugué” reports a completed event.',
        ],
      },
      {
        heading: 'Reflexive verbs and daily routine',
        paragraphs: [
          'Reflexive verbs describe actions done to oneself and use pronouns me, te, se, nos, os, se: levantarse means to get up, ducharse to shower, vestirse to get dressed, and acostarse to go to bed. The pronoun matches the subject, so me levanto a las seis means I get up at six, and the reflexive pronoun precedes the conjugated verb or attaches to an infinitive.',
          'Stem-changing verbs keep their changes in the preterite only for -ir verbs in the third person: dormir becomes durmió and durmieron, while pedir becomes pidió and pidieron. Recognizing that pattern prevents the common error of applying it to -ar or -er verbs, where stems stay regular.',
          'A past routine paragraph combines preterite verbs, reflexive pronouns, and time markers: me desperté a las seis, me duché, desayuné, y salí para la escuela. Sequencers such as primero, luego, después, and finalmente make the order explicit, which is what a narrative in the past requires. Students should also distinguish the preterite from the present perfect, formed with haber plus a participle: he estudiado means I have studied, describing a past action connected to the present, while estudié reports a finished event. Time markers help: esta mañana can take either tense depending on whether the morning is over, and ya, todavía no, and alguna vez often signal the perfect. Writing the same event in both tenses, then explaining the difference in meaning, is the exercise that makes the distinction stick. Reading a short account of a trip and retelling it in the preterite aloud builds the same control, and recording yourself exposes endings that still need attention. Writing the same paragraph twice, once with time markers and once without, shows how much the tense alone carries the sequence, and it prepares students for the longer narratives required in Spanish III, where the contrast between these past tenses carries the whole story, not just the timeline.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Describe yesterday’s routine in three preterite sentences with reflexive verbs.',
        steps: [
          'Choose reflexive verbs: despertarse, ducharse, vestirse.',
          'Conjugate in the preterite with the correct pronoun: me desperté, me duché, me vestí.',
          'Add time markers: a las seis, luego, antes de salir.',
        ],
        answer: 'Ayer me desperté a las seis, me duché luego, y me vestí antes de salir.',
      },
    ],
    terms: [
      ['preterite', 'the past tense for completed actions'],
      ['reflexive verb', 'a verb whose action returns to the subject'],
      ['time expression', 'a phrase such as ayer that places an action in time'],
      ['stem-changing verb', 'a verb whose stem vowel changes in some forms'],
      ['imperfect', 'the past tense for ongoing or habitual actions'],
      ['sequencer', 'a word such as luego that orders events'],
    ],
    practice: [
      mc('The preterite of hablar for yo is', ['hablo', 'hablé', 'hablaba', 'hablaré'], 1, 'hablé is preterite.'),
      mc('Ir and ser share which preterite forms?', ['hablé', 'fui', 'tuve', 'hice'], 1, 'Both use fui.'),
      num('How many reflexive pronouns are listed here?', 6, 'Me, te, se, nos, os, se.'),
    ],
    review: [
      {
        prompt: 'When do you use the preterite rather than the imperfect?',
        answer: 'Use the preterite for completed actions with a definite end, and the imperfect for ongoing, habitual, or background past action.',
      },
      {
        prompt: 'How do reflexive verbs work in a sentence about your morning?',
        answer: 'The reflexive pronoun matches the subject and comes before the conjugated verb, as in me duché or me vestí.',
      },
    ],
    exercises: [
      'Write a ten-sentence paragraph about last weekend using five preterite verbs.',
      'Conjugate three irregular preterite verbs in all six forms and use each in a sentence.',
    ],
  },
  'span2-u2-l1': {
    topics: ['object pronouns'],
    objectives: [
      'Replace direct and indirect objects with the correct pronouns.',
      'Place object pronouns correctly and use gustar-type constructions.',
    ],
    sections: [
      {
        heading: 'Direct and indirect object pronouns',
        paragraphs: [
          'Direct object pronouns replace the thing receiving the action: me, te, lo, la, nos, os, los, las. If the object is el libro, the pronoun is lo; if it is las cartas, it is las. The pronoun agrees in gender and number with the noun it replaces, not with the subject.',
          'Indirect object pronouns replace the person receiving the object: me, te, le, nos, os, les. “Le di el libro a María” becomes “le di el libro,” and if the indirect object is also replaced by a pronoun for clarity, Spanish often adds a redundant a él or a ella because le is ambiguous in the third person.',
          'Placement follows a rule: the pronoun precedes a conjugated verb, attaches to an infinitive or gerund, or precedes a negative command. Quiero verlo and lo quiero ver are both correct, while a negative command puts the pronoun first: no lo hagas. With both objects, the indirect comes first, and le becomes se before lo, la, los, or las, as in se lo di.',
        ],
      },
      {
        heading: 'Gustar and similar verbs',
        paragraphs: [
          'Verbs like gustar, encantar, interesar, and doler work differently: the thing liked is the subject, and the person is the indirect object. Me gusta el café means coffee is pleasing to me, and me gustan los libros uses the plural verb because libros is plural. This structure explains why gustar never takes yo as its subject.',
          'Clarifying phrases remove ambiguity: a mí me gusta, a ella le gusta, a nosotros nos interesa. Those phrases are optional grammatically but common in speech, and they are the reason a learner hears both me gusta and a mí me gusta in the same conversation.',
          'The same pattern extends to needs and pains: me duele la cabeza uses the singular because cabeza is singular, while me duelen los pies uses the plural. Getting the verb to agree with the thing rather than the person is the central skill, and it transfers directly to encantar and faltar. Students should also learn the placement rules for commands and questions, since pronouns attach to affirmative commands but precede negative ones: dímelo means tell it to me, while no me lo digas means do not tell it to me. In questions, the pronoun normally precedes the verb, as in ¿lo tienes? Direct and indirect pronouns can also combine with reflexive pronouns in a fixed order, and writing those combinations out once prevents most word-order errors in conversation, and it makes the difference between “I gave it to her” and “she gave it to me” a matter of pronoun choice rather than guesswork. Practicing with a partner who asks follow-up questions builds the speed that real conversation demands, since pronoun placement must become automatic rather than calculated during the sentence or while listening to a speaker.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Replace the objects: “Compré las flores para mi madre.”',
        steps: [
          'Direct object is las flores, feminine plural: las.',
          'Indirect object is mi madre, third person singular: le.',
          'Indirect precedes direct, and le becomes se: se las compré.',
        ],
        answer: 'Se las compré.',
      },
    ],
    terms: [
      ['direct object pronoun', 'a pronoun replacing the noun that receives the action'],
      ['indirect object pronoun', 'a pronoun replacing the person who receives the object'],
      ['redundant pronoun', 'an added a mí or a ella for clarity'],
      ['gustar', 'a verb meaning to be pleasing, used with indirect objects'],
      ['agreement', 'matching gender and number between pronoun and noun'],
      ['negative command', 'an instruction not to do something'],
    ],
    practice: [
      mc('Which pronoun replaces “el libro”?', ['la', 'lo', 'le', 'los'], 1, 'Libro is masculine singular.'),
      mc('“Le di el regalo a Juan” can become', ['lo di', 'se lo di', 'le lo di', 'la di'], 1, 'Le becomes se before lo.'),
      num('How many direct object pronouns are listed here?', 8, 'Me, te, lo, la, nos, os, los, las.'),
    ],
    review: [
      {
        prompt: 'Why does gustar use me gustan with a plural noun?',
        answer: 'Because the thing liked is the grammatical subject, so the verb agrees with it: los libros are plural, hence gustan.',
      },
      {
        prompt: 'Where do object pronouns go with an infinitive?',
        answer: 'They may precede the conjugated verb or attach to the end of the infinitive, as in lo quiero ver or quiero verlo.',
      },
    ],
    exercises: [
      'Rewrite eight sentences replacing objects with pronouns.',
      'Write a short dialogue using gustar, encantar, and doler correctly.',
    ],
  },
  'pe-u1-l1': {
    topics: ['FITT'],
    objectives: [
      'Apply the FITT principle and training principles to a personal plan.',
      'Explain how the components of fitness are developed and measured.',
    ],
    sections: [
      {
        heading: 'Components of fitness and the FITT principle',
        paragraphs: [
          'Health-related fitness has five components: cardiorespiratory endurance, muscular strength, muscular endurance, flexibility, and body composition. Skill-related components include speed, agility, power, balance, coordination, and reaction time. A complete program addresses health-related fitness first, since those components most directly reduce disease risk.',
          'FITT stands for frequency, intensity, time, and type. A cardiorespiratory plan might be five days per week at moderate intensity for thirty minutes of running or cycling; a strength plan might be three days per week at moderate-to-high intensity for thirty to forty-five minutes of resistance training. Changing one variable at a time is how a program progresses safely.',
          'Training principles govern adaptation. Overload means demanding more than the body is used to, progression means increasing gradually, specificity means training the system you want to improve, and recovery means allowing adaptation to occur. Reversibility is the warning: unused capacity declines within weeks.',
        ],
      },
      {
        heading: 'Intensity, measurement, and program design',
        paragraphs: [
          'Intensity can be measured by heart rate, perceived exertion, or pace. Moderate activity raises heart rate to roughly 50–70% of maximum, estimated as 220 minus age, and the talk test gives a practical check: you can speak in short sentences but not sing. Vigorous activity pushes above 70% and makes conversation difficult.',
          'A balanced week alternates hard and easy days. A sample plan might put cardiorespiratory work on Monday, Wednesday, and Friday, strength on Tuesday and Thursday, and flexibility or active recovery on the weekend, with one full rest day. Adolescents should accumulate about sixty minutes of moderate-to-vigorous activity daily.',
          'Tracking matters because perception drifts. Recording frequency, duration, and intensity in a log for two weeks shows whether the plan is actually being followed, and it makes progress visible. Goals should be specific and measurable, such as running two miles without stopping, rather than vague intentions to get in shape. Students should also learn to read their own data: a resting heart rate that falls over weeks suggests improving cardiorespiratory fitness, while a strength log that stalls suggests a need to change volume or recovery. Rest days are part of the plan rather than a lapse, because adaptation happens between sessions. A plan that ignores sleep, nutrition, and school obligations will not survive a busy month, so realistic scheduling is itself a training skill. Writing the plan into a calendar, with specific times and locations, is what turns an intention into a habit, and reviewing it weekly keeps the progression honest. A plan that is written down and checked off also provides the evidence a parent needs in order to award credit for the course, which is why the log is filled in each session rather than reconstructed, and reviewed with a parent at the end of each term.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Build a one-week plan for a student who can currently jog ten minutes and wants to reach thirty.',
        steps: [
          'Frequency: three jogging days plus two strength days and one flexibility day.',
          'Progression: add two minutes per jogging session each week, keeping intensity moderate.',
          'Recovery: keep one full rest day and alternate hard and easy sessions.',
        ],
        answer: 'Three progressive jogs per week adding two minutes each, two strength sessions, one flexibility day, and one rest day.',
      },
    ],
    terms: [
      ['FITT', 'frequency, intensity, time, and type'],
      ['cardiorespiratory endurance', 'the ability to sustain aerobic activity'],
      ['overload', 'training beyond current capacity to stimulate adaptation'],
      ['progression', 'increasing training demands gradually over time'],
      ['reversibility', 'the loss of fitness when training stops'],
      ['perceived exertion', 'a self-rating of how hard an effort feels'],
    ],
    practice: [
      mc('What does the I in FITT stand for?', ['intensity', 'interval', 'injury', 'index'], 0, 'Intensity is how hard you work.'),
      num('About how many minutes of daily activity are recommended for adolescents?', 60, 'Sixty minutes.'),
      mc('Training a specific system to improve it is called', ['overload', 'specificity', 'reversibility', 'recovery'], 1, 'Specificity.'),
    ],
    review: [
      {
        prompt: 'What do overload, progression, and recovery each contribute?',
        answer: 'Overload provides the stimulus, progression keeps it manageable, and recovery allows the body to adapt and grow stronger.',
      },
      {
        prompt: 'How can you estimate moderate intensity without a heart-rate monitor?',
        answer: 'Use the talk test: at moderate intensity you can speak in short sentences but not sing comfortably.',
      },
    ],
    exercises: [
      'Write a two-week FITT plan and log actual sessions against it.',
      'Measure your heart rate before, during, and after activity and estimate intensity.',
    ],
  },
  'pe-u2-l1': {
    topics: ['heat illness'],
    objectives: [
      'Prevent and recognize heat illness and hydration problems during activity.',
      'Apply injury-prevention and safety practices to training and outdoor activity.',
    ],
    sections: [
      {
        heading: 'Heat, hydration, and exertion',
        paragraphs: [
          'Heat illness ranges from cramps and exhaustion to heat stroke, which is a medical emergency. Warning signs of heat exhaustion include heavy sweating, weakness, dizziness, nausea, headache, and cool clammy skin. Heat stroke brings confusion, hot dry skin, and a temperature above 103°F, and it requires immediate cooling and emergency care.',
          'Hydration prevents most heat problems. Drinking water before activity, every fifteen to twenty minutes during it, and afterward replaces losses, and urine color is a practical gauge: pale yellow suggests adequate hydration. Sports drinks help during prolonged sweating because they replace sodium, but sugary drinks slow absorption.',
          'Acclimatization takes one to two weeks of gradual exposure. Athletes new to Texas summer practice should start with shorter sessions in cooler hours, and coaches should schedule conditioning early in the morning. Clothing should be light-colored and loose, and dark uniforms increase heat load.',
        ],
      },
      {
        heading: 'Injury prevention and safe training',
        paragraphs: [
          'Warm-ups raise muscle temperature and prepare joints, while dynamic stretches such as leg swings and lunges are better before activity than long static holds. Cool-downs and static stretching belong afterward. Sudden increases in volume are the most common cause of overuse injuries, so the ten percent rule — increasing weekly training by no more than about ten percent — is a useful guide.',
          'Common injuries have recognizable patterns. Ankle sprains come from rolling the foot inward, shin splints from rapid mileage increases, and tendinitis from repetitive strain. RICE — rest, ice, compression, elevation — manages many acute soft-tissue injuries, and persistent pain needs evaluation rather than continued training.',
          'Safety extends beyond the body. Helmets for cycling and contact sports, mouthguards, proper footwear, and reflective clothing at night reduce risk substantially. Knowing the signs of concussion — headache, confusion, nausea, sensitivity to light — and removing an athlete from play until cleared is now standard practice in school sports. Hydration and nutrition belong in the same prevention plan: water before, during, and after activity, a meal with carbohydrate and protein within a few hours of training, and adequate salt when sweating heavily. Students should also know when to stop and ask for help, since continuing through dizziness or chest pain turns a manageable problem into an emergency. Learning to report symptoms accurately to a coach, nurse, or parent is as important as learning the injury itself. A short written emergency plan, including who to call and where the nearest athletic trainer is, removes hesitation when minutes matter and makes the response faster than panic allows, especially in a crowded gym or on a hot outdoor practice field where an athletic trainer is not nearby and help is minutes away.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A runner training for a half marathon develops knee pain after raising weekly mileage from 20 to 32 miles. Diagnose and prescribe.',
        steps: [
          'The jump exceeds the ten percent guideline by a wide margin.',
          'Pain suggests an overuse injury from sudden volume increase.',
          'Reduce mileage, add rest and strengthening, and rebuild gradually.',
        ],
        answer: 'An overuse injury from excessive progression; cut volume, allow recovery, and rebuild by roughly ten percent per week.',
      },
    ],
    terms: [
      ['heat exhaustion', 'a heat illness with heavy sweating, weakness, and dizziness'],
      ['heat stroke', 'a life-threatening condition with confusion and hot dry skin'],
      ['acclimatization', 'gradual adaptation to a hot environment'],
      ['dynamic stretch', 'a controlled movement through a joint’s range before activity'],
      ['RICE', 'rest, ice, compression, and elevation for acute injuries'],
      ['concussion', 'a brain injury from impact that needs removal from play'],
    ],
    practice: [
      mc('Which is a sign of heat stroke?', ['heavy sweating with chills', 'confusion and hot dry skin', 'mild thirst', 'sore muscles'], 1, 'Confusion is a red flag.'),
      num('By about what percent should weekly training volume increase?', 10, 'Roughly ten percent.'),
      mc('RICE stands for', ['run, ice, cycle, elevate', 'rest, ice, compression, elevation', 'rest, ice, cool, exercise', 'repeat, ice, compress, extend'], 1, 'The standard acute-injury response.'),
    ],
    review: [
      {
        prompt: 'What are warning signs of heat exhaustion, and what should you do?',
        answer: 'Heavy sweating, weakness, dizziness, nausea, headache, and cool clammy skin; stop activity, move to shade, cool down, and hydrate.',
      },
      {
        prompt: 'Why is the ten percent rule useful for preventing injury?',
        answer: 'Gradual increases let tissues adapt, while sudden jumps in volume overload muscles and tendons faster than they can recover.',
      },
    ],
    exercises: [
      'Design a heat-safety checklist for a summer practice and justify each item.',
      'Log a week of training and identify one place where progression exceeded safe limits.',
    ],
  },
  'cs1-u1-l1': {
    topics: ['loops'],
    objectives: [
      'Write programs using variables, input, conditionals, and loops.',
      'Trace loop execution and predict output, including off-by-one behavior.',
    ],
    sections: [
      {
        heading: 'Variables, conditionals, and loops',
        paragraphs: [
          'A variable names a value stored in memory, and Python assigns with = : total = 0 creates an integer, while name = "Ana" creates a string. Types matter because operations differ: "3" + "4" concatenates to "34" while 3 + 4 evaluates to 7, so converting input with int() is often required.',
          'Conditionals choose a path with if, elif, and else, and indentation defines which lines belong to each branch. Comparison operators such as ==, !=, <, and >= return booleans, and logical operators and, or, and not combine them. A common error is using = where == is meant.',
          'Loops repeat work. A for loop iterates over a sequence, so for i in range(1, 4) produces 1, 2, and 3 because range stops before its end value. A while loop repeats while a condition holds, which requires updating the condition inside the loop or it runs forever.',
        ],
      },
      {
        heading: 'Tracing and debugging',
        paragraphs: [
          'Tracing means tracking variable values line by line. For total = 0 followed by for n in range(1, 5): total += n, the values are 1, 3, 6, 10, so the final total is 10. Writing a trace table with columns for the loop variable and each accumulator makes output predictable without running the code.',
          'Off-by-one errors come from misunderstanding whether an endpoint is included. range(1, 4) gives three values, and indexing a list of length 3 allows positions 0, 1, and 2, so accessing index 3 raises an IndexError. Checking the first and last iteration is the fastest way to catch these errors.',
          'Debugging is systematic. Read the error message and its line number, print intermediate values, test with the smallest input, and change one thing at a time. Comments and meaningful variable names prevent many bugs, and a function that does one job is easier to test than a long script that does five. Students should also learn to read the traceback rather than fear it: the last line names the error type, and the lines above show the call path, so an IndexError points to a list position while a TypeError points to mismatched types. Testing a program with zero, one, and many items reveals edge cases that a single example hides. Writing the expected output before running the code turns debugging into a comparison rather than a hopeful guess, and it makes the fix verifiable. Keeping a commented-out version of the last working code is a simple safeguard when an experiment goes wrong. Saving a working version before refactoring turns a risky change into a reversible one, which is the practical version of version control and a habit that scales to any project or assignment.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Predict the output: total = 0; for n in range(1, 5): total += n; print(total)',
        steps: [
          'range(1, 5) yields 1, 2, 3, 4.',
          'total accumulates 1, then 3, then 6, then 10.',
          'print outputs the final value.',
        ],
        answer: '10',
      },
    ],
    terms: [
      ['variable', 'a name bound to a stored value'],
      ['conditional', 'a statement that runs code only when a condition holds'],
      ['loop', 'a construct that repeats a block of code'],
      ['iteration', 'one pass through a loop’s body'],
      ['trace table', 'a table tracking variable values line by line'],
      ['off-by-one error', 'an error from misjudging an inclusive endpoint or index'],
    ],
    practice: [
      num('What does range(1, 4) produce as its last value?', 3, 'The end value is excluded.'),
      mc('A while loop needs', ['a break statement', 'a condition that eventually becomes false', 'a list', 'a function'], 1, 'Otherwise it never stops.'),
      num('What is the final total for 1 + 2 + 3 + 4?', 10, 'The sum is 10.'),
    ],
    review: [
      {
        prompt: 'Why does range(1, 4) exclude 4?',
        answer: 'Because range stops before its end value, so range(1, 4) produces 1, 2, and 3.',
      },
      {
        prompt: 'How does a trace table help find a bug?',
        answer: 'It records each variable’s value at every step, so the exact line where a value diverges from the expected result becomes visible.',
      },
    ],
    exercises: [
      'Trace three short loops with a table and predict their output before running them.',
      'Write a program that sums user-entered numbers until a sentinel value is entered.',
    ],
  },
  'cs1-u2-l1': {
    topics: ['functions'],
    objectives: [
      'Define and call functions with parameters and return values.',
      'Use lists and dictionaries to organize data and debug common errors.',
    ],
    sections: [
      {
        heading: 'Functions and scope',
        paragraphs: [
          'A function packages reusable logic: def area(width, height): return width * height defines a function with two parameters, and area(3, 4) returns 12. Parameters are local names, and returning a value is different from printing it, since a returned value can be stored and reused while printed text cannot.',
          'Scope determines where a name exists. Variables created inside a function are local and disappear when it returns, while module-level variables are visible inside functions but should be modified cautiously. Passing a list to a function passes a reference, so mutating it inside the function changes the caller’s list.',
          'Good functions have one job, a descriptive name, and a docstring. A function that both reads input and computes a result is hard to test, while one that computes from arguments can be tested with fixed values. Default parameters and keyword arguments make calls readable, as in format_name(first="Ada", last="Lovelace").',
        ],
      },
      {
        heading: 'Lists, dictionaries, and debugging',
        paragraphs: [
          'A list stores an ordered sequence and supports indexing, slicing, and methods such as append, remove, and sort. A dictionary stores key-value pairs and is the right structure for lookups by name: scores = {"Ana": 92, "Luis": 88} allows scores["Ana"] without scanning a list. Both are mutable, so copying with list(a) or dict(d) matters when the original must be preserved.',
          'Iteration over collections follows patterns: for item in items, for i, item in enumerate(items), and for key, value in d.items(). Choosing the right pattern avoids index arithmetic and the off-by-one errors that come with it.',
          'Debugging collections means checking type and shape first: len(items) confirms size, print(type(x)) reveals a string where a number was expected, and a missing key raises a KeyError that dict.get can avoid with a default. Reading the traceback from the bottom up identifies the failing line quickly. Students should also practice reading someone else’s function and predicting its result from the signature and docstring alone, which is the skill that makes larger programs possible. Naming functions by what they return, keeping them short, and testing each one before combining them prevents the tangled debugging that comes from changing five things at once, and it makes the code readable to the next person, including your future self. A short comment above each function explaining its inputs and output is usually enough, and it doubles as documentation for anyone reading the file later, including a grader, a collaborator, or any student returning to the file months later with no memory of what each variable is supposed to hold at that point.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Write a function that returns the average of a list, then explain what happens with an empty list.',
        steps: [
          'def average(nums): return sum(nums) / len(nums).',
          'With an empty list, len is zero, so division raises ZeroDivisionError.',
          'Guard with if not nums: return 0.0 or raise a clear error.',
        ],
        answer: 'The function divides the sum by the length and must handle an empty list explicitly to avoid ZeroDivisionError.',
      },
    ],
    terms: [
      ['function', 'a named block of reusable code'],
      ['parameter', 'a name in a function definition that receives a value'],
      ['return value', 'the result a function sends back to its caller'],
      ['scope', 'the region where a name is visible'],
      ['dictionary', 'a collection of key-value pairs'],
      ['traceback', 'the error report showing the call stack and failing line'],
    ],
    practice: [
      mc('A function’s return value can be', ['only printed', 'stored and reused', 'used only once', 'changed by the caller'], 1, 'It is returned to the caller.'),
      mc('A dictionary is best for', ['ordered duplicates', 'lookups by key', 'numeric ranges', 'repeating code'], 1, 'Keys enable lookup.'),
      num('What does area(3, 4) return for width × height?', 12, '3 × 4 = 12.'),
    ],
    review: [
      {
        prompt: 'How does returning a value differ from printing one?',
        answer: 'A returned value goes back to the caller and can be stored or reused, while printing only displays text and leaves nothing usable.',
      },
      {
        prompt: 'Why does mutating a list inside a function affect the caller’s list?',
        answer: 'Because the list is passed by reference, so the function receives the same object rather than a copy.',
      },
    ],
    exercises: [
      'Write three functions with parameters and test each with edge-case inputs.',
      'Build a dictionary-based grade book and compute an average from its values.',
    ],
  },
};
