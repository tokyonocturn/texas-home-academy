import type { Course } from '../../types';
import { HIGH_WEIGHTS } from '../weights';
import { exam, lesson, mc, num, project, quiz, rubricRow, section, short, teks, unit } from '../builders';

/** Electives, languages, health/PE, fine arts, technology, CTE, and personal finance. */

export const spanish1: Course = {
  id: 'hs-span1',
  title: 'Spanish I',
  subject: 'lote',
  grade: 9,
  credits: 1,
  semesters: 2,
  description:
    'Beginning Spanish: greetings, introductions, numbers, time, family, school, food, and present-tense verbs, with cultural readings from the Spanish-speaking world. Two credits of the same language satisfy the LOTE requirement (19 TAC §74.12(b)(5)).',
  essentialQuestions: ['How do verb endings carry meaning in Spanish?', 'How does language reflect culture?'],
  teks: [teks('19 TAC ch. 114, Level I', 'Interpretive listening and reading, interpersonal speaking and writing, presentational communication, and cultural comparisons at the novice level.')],
  weights: HIGH_WEIGHTS,
  units: [
    unit('u1', 'First conversations', 'Greetings and questions open a conversation.', [
      lesson({
        id: 'span1-u1-l1',
        title: 'Greetings, introductions, and the verb ser',
        minutes: 45,
        objectives: ['Introduce yourself and ask someone’s name.', 'Conjugate ser in the present tense.'],
        sections: [
          section('Useful phrases', [
            'Hola, me llamo Ana. ¿Cómo te llamas? Mucho gusto. ¿De dónde eres? Soy de Texas. ¿Cómo estás? Bien, gracias. These phrases use informal tú; use usted with adults or in formal situations: ¿Cómo se llama usted?',
            'Spanish questions use inverted opening punctuation: ¿…? and ¡…! for exclamations.',
          ]),
          section('The verb ser', [
            'Ser means “to be” and describes identity and origin: yo soy, tú eres, él/ella/usted es, nosotros somos, vosotros sois, ellos/ellas/ustedes son. “Soy estudiante” means I am a student; “Eres de México” means you are from Mexico.',
            'Spanish often omits subject pronouns because the verb ending identifies the subject: “soy” already means “I am.”',
          ]),
        ],
        example: {
          prompt: 'Introduce yourself and a friend.',
          steps: ['Me llamo…', 'Soy de…', 'Él se llama…', 'Es de…'],
          answer: 'Me llamo Luis. Soy de Austin. Él se llama Marco. Es de El Paso.',
        },
        practice: [
          mc('“¿Cómo te llamas?” asks for', ['your age', 'your name', 'your address', 'your phone number'], 1, 'It literally asks what you call yourself.'),
          mc('The correct form of ser for “nosotros” is', ['somos', 'sois', 'son', 'soy'], 0, 'Nosotros somos.'),
        ],
      }),
    ], quiz('Unit 1 quiz: introductions', [
      mc('“Mucho gusto” means', ['See you later', 'Nice to meet you', 'How old are you', 'Good night'], 1, 'It is a greeting on meeting.'),
      mc('“¿De dónde eres?” asks', ['Where are you from?', 'How are you?', 'What is your name?', 'How old are you?'], 0, 'It asks origin.'),
      mc('The formal “you” in Spanish is', ['tú', 'usted', 'vosotros', 'ellos'], 1, 'Usted is formal singular.'),
    ]), project({
      title: 'Introducción oral',
      prompt: 'Record a 60-second self-introduction in Spanish: name, origin, age, one interest, and one question for a classmate.',
      deliverable: 'A recording or written script plus pronunciation notes.',
      guidance: ['Use complete sentences.', 'Include at least one question.', 'Practice aloud before recording.'],
      rubric: [
        rubricRow('Comprehensibility', 40, [['Excellent', 'Clear and understandable.', 40], ['Proficient', 'Mostly clear.', 32], ['Developing', 'Difficult to follow.', 20], ['Beginning', 'Not comprehensible.', 8]]),
        rubricRow('Grammar', 30, [['Excellent', 'Accurate ser and agreement.', 30], ['Proficient', 'Minor errors.', 24], ['Developing', 'Frequent errors.', 15], ['Beginning', 'Little control.', 6]]),
        rubricRow('Content', 20, [['Excellent', 'All required elements.', 20], ['Proficient', 'Most.', 16], ['Developing', 'Few.', 10], ['Beginning', 'Missing.', 4]]),
        rubricRow('Pronunciation', 10, [['Excellent', 'Clear vowels and stress.', 10], ['Proficient', 'Understandable.', 8], ['Developing', 'Anglicized.', 5], ['Beginning', 'Hard to understand.', 2]]),
      ],
    })),
    unit('u2', 'School, time, and regular verbs', 'Present-tense endings encode who acts.', [
      lesson({
        id: 'span1-u2-l1',
        title: 'Telling time and -ar verbs',
        minutes: 45,
        objectives: ['Tell time in Spanish.', 'Conjugate regular -ar verbs.'],
        sections: [
          section('Time', [
            '¿Qué hora es? Es la una. Son las dos. Son las tres y media. Son las cuatro y cuarto. Son las cinco menos diez. For 12:00: Es mediodía (noon) or Es medianoche (midnight).',
          ]),
          section('-ar verbs', [
            'Hablar (to speak): yo hablo, tú hablas, él/ella/usted habla, nosotros hablamos, vosotros habláis, ellos/ellas/ustedes hablan. The stem stays; the ending carries person and number. Common verbs: estudiar, trabajar, escuchar, mirar, necesitar, comprar.',
            'Negation places no before the verb: No estudio los sábados.',
          ]),
        ],
        example: {
          prompt: 'Say “I study at eight and my brother works at nine.”',
          steps: ['Estudiar → yo estudio.', 'A las ocho.', 'Trabajar → él trabaja.', 'A las nueve.'],
          answer: 'Estudio a las ocho y mi hermano trabaja a las nueve.',
        },
        practice: [
          mc('“Son las tres y media” means', ['3:30', '3:15', '2:30', '3:00'], 0, 'Y media is half past.'),
          mc('The “nosotros” form of estudiar is', ['estudiamos', 'estudian', 'estudias', 'estudio'], 0, 'Regular -ar ending for nosotros is -amos.'),
        ],
      }),
    ], quiz('Unit 2 quiz: verbs and time', [
      mc('“Es la una” uses “es” because', ['it is one o’clock', 'it is a question', 'it is plural', 'it is formal'], 0, 'One o’clock is singular.'),
      mc('“Ellos ____ español.”', ['hablan', 'habla', 'hablas', 'hablo'], 0, 'Third-person plural ending is -an.'),
      num('How many minutes are in “y cuarto”?', 15, 'Cuarto means quarter.'),
    ]), project({
      title: 'Mi horario',
      prompt: 'Create a school-day schedule in Spanish with times and verbs, then describe it aloud in five sentences.',
      deliverable: 'A written schedule and a short recording.',
      guidance: ['Use at least five different -ar verbs.', 'Use both “es la” and “son las” correctly.'],
      rubric: [
        rubricRow('Accuracy', 40, [['Excellent', 'Times and verbs correct.', 40], ['Proficient', 'Minor errors.', 32], ['Developing', 'Frequent errors.', 20], ['Beginning', 'Inaccurate.', 8]]),
        rubricRow('Completeness', 30, [['Excellent', 'Five sentences, five verbs.', 30], ['Proficient', 'Most.', 24], ['Developing', 'Few.', 15], ['Beginning', 'Missing.', 6]]),
        rubricRow('Pronunciation', 20, [['Excellent', 'Clear.', 20], ['Proficient', 'Understandable.', 16], ['Developing', 'Uneven.', 10], ['Beginning', 'Unclear.', 4]]),
        rubricRow('Presentation', 10, [['Excellent', 'Neat.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Messy.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
  ],
  finalExam: exam('Spanish I final examination', [
    mc('“¿Cómo estás?” means', ['What is your name?', 'How are you?', 'Where are you from?', 'How old are you?'], 1, 'It asks how you are.'),
    mc('The “yo” form of hablar is', ['hablo', 'hablas', 'habla', 'hablan'], 0, 'First-person singular ends in -o.'),
    mc('“Son las dos y cuarto” means', ['2:15', '2:30', '2:45', '1:15'], 0, 'Cuarto is a quarter.'),
    mc('The formal singular “you” is', ['tú', 'usted', 'ustedes', 'vosotros'], 1, 'Usted is formal.'),
    num('How many minutes are in “y media”?', 30, 'Media means half.'),
    short('Write two Spanish sentences introducing yourself and one family member, using ser correctly.', 'Model: Me llamo Carmen. Mi hermano es estudiante. (Accept any accurate sentences using soy/es and correct agreement.)', ['Uses ser correctly.', 'Includes two complete sentences.', 'Spelling is understandable.'], 10),
  ]),
};

export const spanish2: Course = {
  id: 'hs-span2',
  title: 'Spanish II',
  subject: 'lote',
  grade: 10,
  credits: 1,
  semesters: 2,
  description:
    'Intermediate Spanish: past tenses, object pronouns, food and travel situations, and short cultural readings. Completes the two-credit LOTE requirement for the Foundation High School Program.',
  essentialQuestions: ['How does past tense change what a story can say?', 'How do you choose between competing past forms?'],
  teks: [teks('19 TAC ch. 114, Level II', 'Intermediate interpretive, interpersonal, and presentational communication; past-tense narration; cultural comparison.')],
  weights: HIGH_WEIGHTS,
  units: [
    unit('u1', 'Talking about the past', 'Preterite narrates; imperfect describes.', [
      lesson({
        id: 'span2-u1-l1',
        title: 'Preterite and imperfect',
        minutes: 50,
        objectives: ['Form regular preterite verbs.', 'Choose preterite or imperfect in a narrative.'],
        sections: [
          section('Preterite', [
            'Regular -ar preterite: hablé, hablaste, habló, hablamos, hablasteis, hablaron. Regular -er/-ir: comí, comiste, comió, comimos, comisteis, comieron. Use the preterite for completed actions: Ayer comí a las dos.',
            'Irregulars to memorize: ser/ir (fui, fuiste, fue, fuimos, fuisteis, fueron), tener (tuve…), hacer (hice…), estar (estuve…).',
          ]),
          section('Imperfect', [
            'Imperfect endings: -ar verbs (hablaba, hablabas, hablaba, hablábamos, hablabais, hablaban); -er/-ir (comía, comías, comía, comíamos, comíais, comían). Use it for ongoing background, habits, and descriptions: Cuando era niño, jugaba mucho.',
            'In one sentence, background often takes imperfect and the interrupting event takes preterite: Leía cuando sonó el teléfono.',
          ]),
        ],
        example: {
          prompt: 'Choose the correct form: “Mientras (caminaba / caminé) a casa, (veía / vi) un accidente.”',
          steps: ['Caminar is background → imperfect: caminaba.', 'The accident is a completed event → preterite: vi.'],
          answer: 'caminaba; vi.',
        },
        practice: [
          mc('“Ayer ____ (comer) a las dos.”', ['comí', 'comía', 'como', 'comeré'], 0, 'A completed past action takes the preterite.'),
          mc('“Cuando era niño, ____ (jugar) mucho.”', ['jugaba', 'jugué', 'juego', 'jugaré'], 0, 'Habitual past action takes the imperfect.'),
        ],
      }),
    ], quiz('Unit 1 quiz: past tense', [
      mc('The preterite of “ir” for “yo” is', ['fui', 'iba', 'voy', 'iré'], 0, 'Ir and ser share fui in the preterite.'),
      mc('Background description in the past uses', ['preterite', 'imperfect', 'present', 'future'], 1, 'The imperfect describes ongoing background.'),
      mc('“Ellos ____ (hablar) por teléfono.” Completed action.', ['hablaron', 'hablaban', 'hablan', 'hablarán'], 0, 'Completed action takes the preterite.'),
    ]), project({
      title: 'Una anécdota',
      prompt: 'Write a 150-word personal anecdote in Spanish using at least five preterite and three imperfect verbs.',
      deliverable: 'The narrative plus a verb chart identifying tense choices.',
      guidance: ['Use imperfect for background and preterite for events.', 'Check irregular forms.'],
      rubric: [
        rubricRow('Tense control', 40, [['Excellent', 'Consistent and correct.', 40], ['Proficient', 'Mostly correct.', 32], ['Developing', 'Frequent confusion.', 20], ['Beginning', 'Little control.', 8]]),
        rubricRow('Narrative coherence', 30, [['Excellent', 'Clear sequence.', 30], ['Proficient', 'Understandable.', 24], ['Developing', 'Disjointed.', 15], ['Beginning', 'Unclear.', 6]]),
        rubricRow('Vocabulary and grammar', 20, [['Excellent', 'Varied and accurate.', 20], ['Proficient', 'Adequate.', 16], ['Developing', 'Limited.', 10], ['Beginning', 'Inaccurate.', 4]]),
        rubricRow('Verb chart', 10, [['Excellent', 'Accurate.', 10], ['Proficient', 'Minor errors.', 8], ['Developing', 'Incomplete.', 5], ['Beginning', 'Missing.', 2]]),
      ],
    })),
    unit('u2', 'Food, travel, and object pronouns', 'Pronouns keep speech efficient.', [
      lesson({
        id: 'span2-u2-l1',
        title: 'Direct objects and travel language',
        minutes: 45,
        objectives: ['Replace direct objects with lo, la, los, las.', 'Use travel vocabulary to ask for directions.'],
        sections: [
          section('Direct object pronouns', [
            'Lo, la, los, las replace a direct object: ¿Tienes el boleto? Sí, lo tengo. ¿Ves las maletas? Sí, las veo. The pronoun usually precedes the conjugated verb, or attaches to an infinitive: Quiero verlo.',
            'Indirect objects (le, les) receive the action: Le doy el mapa a ella. Clarify with a él/a ella when le is ambiguous.',
          ]),
          section('Travel', [
            '¿Dónde está el baño? ¿Cuánto cuesta el boleto? Quisiera una habitación para dos noches. ¿A qué hora sale el tren? Vocabulary: el aeropuerto, la estación, el equipaje, la llave, la reserva.',
          ]),
        ],
        example: {
          prompt: 'Replace the object: “Tengo los boletos.”',
          steps: ['Boletos is masculine plural.', 'The pronoun is los.', 'Place it before the verb: Los tengo.'],
          answer: 'Los tengo.',
        },
        practice: [
          mc('“¿Ves las maletas?” → “Sí, ____ veo.”', ['las', 'los', 'la', 'lo'], 0, 'Maletas is feminine plural.'),
          mc('“Quisiera” is a polite way to say', ['I want', 'I wanted', 'I will want', 'I have wanted'], 0, 'The imperfect subjunctive softens a request.'),
        ],
      }),
    ], quiz('Unit 2 quiz: pronouns and travel', [
      mc('“Le doy el mapa” — “le” is a(n)', ['direct object', 'indirect object', 'subject', 'possessive'], 1, 'It receives the map.'),
      mc('“¿Cuánto cuesta el boleto?” asks', ['Where is the ticket?', 'How much is the ticket?', 'When does the train leave?', 'Do you have a ticket?'], 1, 'It asks the price.'),
      mc('“Los tengo” replaces', ['las maletas', 'los boletos', 'la llave', 'el mapa'], 1, 'Los replaces a masculine plural object.'),
    ]), project({
      title: 'Plan de viaje',
      prompt: 'Plan a three-day trip in Spanish: transportation, lodging, two activities, and a budget. Present it in five sentences using object pronouns at least twice.',
      deliverable: 'A written itinerary and a short presentation.',
      guidance: ['Use accurate prices and vocabulary.', 'Include at least two pronoun uses.'],
      rubric: [
        rubricRow('Content', 35, [['Excellent', 'Complete and specific.', 35], ['Proficient', 'Most elements.', 28], ['Developing', 'Sparse.', 18], ['Beginning', 'Missing.', 7]]),
        rubricRow('Language accuracy', 35, [['Excellent', 'Accurate grammar and vocabulary.', 35], ['Proficient', 'Minor errors.', 28], ['Developing', 'Frequent errors.', 18], ['Beginning', 'Little control.', 7]]),
        rubricRow('Pronoun use', 20, [['Excellent', 'Two correct uses.', 20], ['Proficient', 'One correct use.', 16], ['Developing', 'Attempted with errors.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Presentation', 10, [['Excellent', 'Clear.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
  ],
  finalExam: exam('Spanish II final examination', [
    mc('The preterite of “hacer” for “yo” is', ['hice', 'hacía', 'hago', 'haré'], 0, 'Hacer is irregular in the preterite.'),
    mc('Background description uses', ['preterite', 'imperfect', 'present', 'future'], 1, 'The imperfect sets the scene.'),
    mc('“Las veo” replaces', ['el mapa', 'los boletos', 'las maletas', 'la llave'], 2, 'Las is feminine plural.'),
    mc('“¿A qué hora sale el tren?” asks', ['How much is the ticket?', 'When does the train leave?', 'Where is the station?', 'How many seats?'], 1, 'Sale means leaves.'),
    mc('The indirect object pronoun for “to them” is', ['les', 'los', 'las', 'nos'], 0, 'Les is the plural indirect object pronoun.'),
    short('Write two sentences about a past trip, one using the preterite and one using the imperfect, and label each.', 'Model: Llegué a San Antonio a las diez. (preterite: completed arrival) El hotel era pequeño y tranquilo. (imperfect: description)', ['One correct preterite sentence.', 'One correct imperfect sentence.', 'Correct labels.'], 10),
  ]),
};

export const physicalEducation: Course = {
  id: 'hs-pe',
  title: 'Lifetime Fitness and Wellness',
  subject: 'pe',
  grade: 10,
  credits: 1,
  semesters: 2,
  description:
    'A one-credit physical education course built around a personal fitness plan, safety, and lifetime activity. Activity is logged and verified by a supervising adult; written work covers fitness principles.',
  essentialQuestions: ['What makes a fitness plan sustainable?', 'How do you train safely?'],
  teks: [teks('19 TAC ch. 116, high school physical education', 'Movement competence; physical fitness; lifetime activity; safety and personal responsibility; health-related fitness planning.')],
  weights: { participation: 50, practice: 10, quiz: 20, exam: 20 },
  units: [
    unit('u1', 'Fitness foundations', 'Train the components you actually need.', [
      lesson({
        id: 'pe-u1-l1',
        title: 'The five components and the FITT principle',
        minutes: 45,
        objectives: ['Name the health-related fitness components.', 'Apply FITT to a weekly plan.'],
        sections: [
          section('Components', [
            'Cardiorespiratory endurance, muscular strength, muscular endurance, flexibility, and body composition are the health-related components. Skill-related components include speed, agility, balance, coordination, power, and reaction time.',
            'Aerobic activity improves heart and lung function; resistance training improves strength and bone density; stretching maintains range of motion. No single activity develops everything, which is why plans combine modalities.',
          ]),
          section('FITT', [
            'Frequency, Intensity, Time, and Type describe a training plan. A beginner might walk briskly (type) four days a week (frequency) at a pace where talking is possible but singing is not (intensity) for 30 minutes (time).',
            'Progressive overload means increasing demand gradually. Overtraining causes persistent fatigue, poor sleep, and injury; rest is part of training.',
          ]),
        ],
        example: {
          prompt: 'Apply FITT to a beginner walking plan.',
          steps: ['Frequency: 4 days/week.', 'Intensity: moderate, able to talk.', 'Time: 30 minutes.', 'Type: brisk walking.'],
          answer: '4 × 30 min moderate walking weekly, progressing 10% per week.',
        },
        practice: [
          mc('Which is a health-related fitness component?', ['agility', 'cardiorespiratory endurance', 'reaction time', 'power'], 1, 'Endurance is health-related; the others are skill-related.'),
          mc('The I in FITT stands for', ['interval', 'intensity', 'injury', 'impact'], 1, 'Intensity is how hard the work is.'),
        ],
      }),
    ], quiz('Unit 1 quiz: fitness principles', [
      mc('Progressive overload means', ['training maximally every day', 'gradually increasing demand', 'resting for a month', 'changing sports weekly'], 1, 'Demand increases gradually to drive adaptation.'),
      mc('Rest is important because', ['it prevents all soreness', 'adaptation occurs during recovery', 'it burns more calories', 'it replaces warm-ups'], 1, 'Training creates stimulus; recovery produces adaptation.'),
      mc('Body composition refers to', ['height', 'the proportion of fat and lean mass', 'flexibility', 'reaction time'], 1, 'It describes fat versus lean tissue.'),
    ]), project({
      title: 'Personal fitness plan',
      prompt: 'Write a four-week plan covering cardiorespiratory, strength, flexibility, and rest days. Include a warm-up, cool-down, and a progression rule.',
      deliverable: 'A weekly schedule plus a one-page rationale citing at least one public health source.',
      guidance: ['Be specific about days and minutes.', 'Include a safety note.', 'Plan for a bad-weather alternative.'],
      rubric: [
        rubricRow('Plan completeness', 35, [['Excellent', 'All components with progression.', 35], ['Proficient', 'Most components.', 28], ['Developing', 'Gaps.', 18], ['Beginning', 'Incomplete.', 7]]),
        rubricRow('Safety', 25, [['Excellent', 'Warm-up, cool-down, and precautions.', 25], ['Proficient', 'Some safety.', 20], ['Developing', 'Thin.', 12], ['Beginning', 'None.', 5]]),
        rubricRow('Rationale', 30, [['Excellent', 'Evidence-based and specific.', 30], ['Proficient', 'Reasonable.', 24], ['Developing', 'Vague.', 15], ['Beginning', 'None.', 6]]),
        rubricRow('Presentation', 10, [['Excellent', 'Clear.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
    unit('u2', 'Safety and lifelong activity', 'The best activity is one you will keep doing.', [
      lesson({
        id: 'pe-u2-l1',
        title: 'Heat, hydration, and injury prevention',
        minutes: 40,
        objectives: ['Recognize heat illness warning signs.', 'Describe basic injury prevention and concussion awareness.'],
        sections: [
          section('Heat and hydration', [
            'Texas heat is a serious hazard. Warning signs of heat exhaustion include heavy sweating, weakness, dizziness, nausea, and headache; move to a cool place, loosen clothing, and sip water. Heat stroke is an emergency: confusion, hot skin, and loss of consciousness require emergency medical help.',
            'Drink water before, during, and after activity. Sports drinks help mainly for prolonged intense exercise; water is adequate for most sessions under an hour.',
          ]),
          section('Injuries', [
            'Warm up dynamically, increase load gradually, and use proper technique. For a minor strain, relative rest, ice, compression, and elevation are common first steps; persistent pain warrants medical evaluation.',
            'A concussion is a brain injury. Signs include headache, confusion, nausea, dizziness, and sensitivity to light. Anyone suspected of a concussion should stop activity and be evaluated by a health professional before returning.',
          ]),
        ],
        example: {
          prompt: 'A runner feels dizzy and nauseated in August. What should happen first?',
          steps: ['Stop activity.', 'Move to shade or air conditioning.', 'Loosen clothing and sip water.', 'Seek emergency help if confusion or loss of consciousness occurs.'],
          answer: 'Stop, cool down, hydrate, and escalate if symptoms are severe.',
        },
        practice: [
          mc('Heat stroke is distinguished from heat exhaustion by', ['sweating', 'confusion or loss of consciousness', 'thirst', 'fatigue'], 1, 'Neurological signs indicate emergency.'),
          mc('A suspected concussion requires', ['continuing play', 'stopping activity and evaluation', 'stretching', 'more water only'], 1, 'Remove from play and get evaluated.'),
        ],
      }),
    ], quiz('Unit 2 quiz: safety', [
      mc('Heat exhaustion signs include', ['heavy sweating and dizziness', 'hot dry skin and confusion', 'chest pain', 'no symptoms'], 0, 'Heavy sweating, weakness, and dizziness are common.'),
      mc('Concussion return-to-play should be decided by', ['the athlete', 'a health professional', 'a coach alone', 'a teammate'], 1, 'Medical clearance is required.'),
      mc('Dynamic warm-ups help because they', ['reduce injury risk and prepare muscles', 'replace conditioning', 'prevent all injuries', 'cool the body'], 0, 'They prepare the body for activity.'),
    ]), project({
      title: 'Activity log and reflection',
      prompt: 'Log eight weeks of activity with date, type, duration, and intensity. Write a 300-word reflection on what changed and what you will sustain.',
      deliverable: 'A log signed by a supervising adult plus the reflection.',
      guidance: ['Log honestly, including missed days.', 'Note how you felt.', 'Identify one barrier and one solution.'],
      rubric: [
        rubricRow('Log completeness', 40, [['Excellent', 'Consistent, complete, verified.', 40], ['Proficient', 'Minor gaps.', 32], ['Developing', 'Sparse.', 20], ['Beginning', 'Missing.', 8]]),
        rubricRow('Reflection', 40, [['Excellent', 'Specific and insightful.', 40], ['Proficient', 'Reasonable.', 32], ['Developing', 'Generic.', 20], ['Beginning', 'None.', 8]]),
        rubricRow('Verification', 20, [['Excellent', 'Signed and dated.', 20], ['Proficient', 'Signed.', 16], ['Developing', 'Unsigned.', 10], ['Beginning', 'Absent.', 4]]),
      ],
    })),
  ],
  finalExam: exam('Lifetime Fitness final examination', [
    mc('Which is a skill-related component?', ['flexibility', 'agility', 'body composition', 'muscular endurance'], 1, 'Agility is skill-related.'),
    mc('FITT stands for', ['Frequency, Intensity, Time, Type', 'Fitness, Intensity, Training, Time', 'Flexibility, Injury, Treatment, Type', 'Force, Impact, Tempo, Training'], 0, 'It describes training variables.'),
    mc('Progressive overload means', ['maximal effort daily', 'gradually increasing demand', 'never resting', 'changing goals weekly'], 1, 'Demand rises gradually.'),
    mc('Heat stroke is an emergency because', ['it causes thirst', 'it can involve confusion and loss of consciousness', 'it only affects athletes', 'it is the same as exhaustion'], 1, 'Neurological involvement is dangerous.'),
    mc('A suspected concussion requires', ['return to play', 'removal and medical evaluation', 'stretching', 'extra water'], 1, 'Medical clearance is required.'),
    short('Explain how you would make a fitness plan sustainable during a busy school week.', 'Model: Schedule short sessions at consistent times, choose activities that require little equipment, plan a low-effort alternative for busy days, and track progress weekly so adjustments are based on evidence rather than guilt.', ['Names concrete scheduling strategies.', 'Includes a fallback.', 'Mentions tracking.'], 10),
  ]),
};

export const art1: Course = {
  id: 'hs-art1',
  title: 'Art I',
  subject: 'fine-arts',
  grade: 9,
  credits: 1,
  semesters: 2,
  description:
    'Foundations of visual art: elements and principles, drawing from observation, color theory, and critique. Students build a portfolio and write about their own work.',
  essentialQuestions: ['How do the elements of art create meaning?', 'What makes critique useful rather than hurtful?'],
  teks: [teks('19 TAC ch. 117, Art Level I', 'Perception; creative expression; historical and cultural relevance; critical evaluation and response.')],
  weights: { participation: 10, practice: 20, quiz: 15, exam: 15, project: 40 },
  units: [
    unit('u1', 'Elements and principles', 'Line, shape, value, and color are the vocabulary.', [
      lesson({
        id: 'art1-u1-l1',
        title: 'Elements of art and principles of design',
        minutes: 45,
        objectives: ['Identify the seven elements of art.', 'Explain how a principle organizes elements.'],
        sections: [
          section('The elements', [
            'Line, shape, form, value, texture, space, and color are the elements. Value is lightness or darkness; form is three-dimensional shape; space includes positive and negative areas and perspective.',
            'The principles — balance, contrast, emphasis, movement, pattern, rhythm, and unity — describe how elements are organized. A composition with high contrast draws the eye; symmetrical balance feels stable; asymmetry can feel dynamic.',
          ]),
          section('Reading a composition', [
            'Ask where your eye goes first, then trace the path. Artists use contrast, placement, and leading lines to control attention. Naming the mechanism, not just the feeling, is the beginning of useful analysis.',
          ]),
        ],
        example: {
          prompt: 'A painting places a bright red figure at the left edge against a dark field.',
          steps: ['Contrast: the red against dark creates emphasis.', 'Placement at the edge creates tension.', 'The eye returns to the figure, so it dominates despite its size.'],
          answer: 'Contrast and placement create emphasis and tension.',
        },
        practice: [
          mc('Which is an element of art?', ['balance', 'value', 'rhythm', 'unity'], 1, 'Value is an element; the others are principles.'),
          mc('Asymmetrical balance creates', ['stability through mirroring', 'dynamic equilibrium', 'no focal point', 'pattern'], 1, 'Unequal visual weight can balance dynamically.'),
        ],
      }),
    ], quiz('Unit 1 quiz: elements', [
      mc('Form differs from shape because form is', ['two-dimensional', 'three-dimensional', 'always geometric', 'a color'], 1, 'Form has volume.'),
      mc('Emphasis is created by', ['even distribution', 'contrast and placement', 'symmetry only', 'small size only'], 1, 'Contrast and placement direct attention.'),
      mc('Negative space is', ['the background or empty area', 'black paint', 'a mistake', 'a type of line'], 0, 'It is the space around and between subjects.'),
    ]), project({
      title: 'Elements study',
      prompt: 'Create four small studies, each emphasizing a different element (line, value, color, texture). Label the element and explain your choice.',
      deliverable: 'Four studies with a one-paragraph explanation each.',
      guidance: ['Work from observation where possible.', 'Explain decisions, not intentions.'],
      rubric: [
        rubricRow('Element focus', 40, [['Excellent', 'Each study clearly explores its element.', 40], ['Proficient', 'Most do.', 32], ['Developing', 'Unclear.', 20], ['Beginning', 'Missing.', 8]]),
        rubricRow('Craft', 30, [['Excellent', 'Controlled media.', 30], ['Proficient', 'Adequate.', 24], ['Developing', 'Rushed.', 15], ['Beginning', 'Careless.', 6]]),
        rubricRow('Explanation', 20, [['Excellent', 'Specific and reflective.', 20], ['Proficient', 'General.', 16], ['Developing', 'Thin.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Presentation', 10, [['Excellent', 'Neat, labeled.', 10], ['Proficient', 'Labeled.', 8], ['Developing', 'Messy.', 5], ['Beginning', 'Unlabeled.', 2]]),
      ],
    })),
    unit('u2', 'Observation and critique', 'Drawing is a set of decisions you can learn.', [
      lesson({
        id: 'art1-u2-l1',
        title: 'Drawing from observation and giving critique',
        minutes: 50,
        objectives: ['Use sighting and proportion to improve accuracy.', 'Give specific, actionable critique.'],
        sections: [
          section('Seeing accurately', [
            'Hold a pencil at arm’s length to compare proportions, and use negative space to check shapes. Draw the large shapes first, then refine. Most beginner errors come from drawing what you know rather than what you see.',
            'Value studies with three tones — light, mid, dark — teach you to see form before adding detail.',
          ]),
          section('Critique', [
            'Describe what you see, analyze how it works, interpret meaning, and evaluate against the artist’s goal. “The left hand looks flat because the values are uniform” is useful; “I don’t like it” is not.',
            'Ask the artist what they intended before judging whether it succeeded.',
          ]),
        ],
        example: {
          prompt: 'Critique a drawing with a flat-looking sphere.',
          steps: ['Describe: the sphere has one mid-tone.', 'Analyze: no highlight or core shadow.', 'Interpret: it reads as a circle.', 'Evaluate: add a highlight, core shadow, and reflected light.'],
          answer: 'Specific observation plus a concrete next step.',
        },
        practice: [
          mc('A good critique begins with', ['judgment', 'description', 'a grade', 'a compliment'], 1, 'Description grounds analysis.'),
          mc('Negative space helps because it', ['hides errors', 'checks shapes and proportions', 'adds color', 'replaces value'], 1, 'The shapes around an object reveal its contour.'),
        ],
      }),
    ], quiz('Unit 2 quiz: observation', [
      mc('The first step in a critique is', ['evaluate', 'describe', 'interpret', 'grade'], 1, 'Describe before analyzing.'),
      mc('A value study uses', ['many colors', 'a limited range of tones', 'only outlines', 'texture only'], 1, 'It simplifies to a few tones.'),
      mc('Proportion errors often come from', ['drawing what you see', 'drawing what you assume', 'using negative space', 'measuring'], 1, 'Assumptions override observation.'),
    ]), project({
      title: 'Observational still life',
      prompt: 'Draw a still life of three objects from observation, with a clear light source. Include a written self-critique using description, analysis, interpretation, and evaluation.',
      deliverable: 'The drawing plus a 250-word self-critique.',
      guidance: ['Set up a single light source.', 'Draw large shapes first.', 'Critique your own work with the four steps.'],
      rubric: [
        rubricRow('Proportion and form', 35, [['Excellent', 'Accurate proportions and volume.', 35], ['Proficient', 'Mostly accurate.', 28], ['Developing', 'Flattened.', 18], ['Beginning', 'Inaccurate.', 7]]),
        rubricRow('Value and light', 30, [['Excellent', 'Consistent light source and full range.', 30], ['Proficient', 'Adequate.', 24], ['Developing', 'Flat.', 15], ['Beginning', 'No value.', 6]]),
        rubricRow('Self-critique', 25, [['Excellent', 'Specific and honest.', 25], ['Proficient', 'Reasonable.', 20], ['Developing', 'Generic.', 12], ['Beginning', 'None.', 5]]),
        rubricRow('Craft', 10, [['Excellent', 'Controlled.', 10], ['Proficient', 'Adequate.', 8], ['Developing', 'Rushed.', 5], ['Beginning', 'Careless.', 2]]),
      ],
    })),
  ],
  finalExam: exam('Art I final examination', [
    mc('Which is a principle of design?', ['texture', 'rhythm', 'form', 'line'], 1, 'Rhythm is a principle.'),
    mc('Value refers to', ['hue', 'lightness and darkness', 'texture', 'shape'], 1, 'It describes tone.'),
    mc('Asymmetrical balance is', ['mirror symmetry', 'balance with unequal visual weight', 'the absence of balance', 'radial symmetry'], 1, 'Unequal elements can balance.'),
    mc('The first step of critique is', ['evaluate', 'describe', 'interpret', 'revise'], 1, 'Description precedes analysis.'),
    mc('Negative space is', ['empty area around the subject', 'black pigment', 'a type of brush', 'the focal point'], 0, 'It is the surrounding space.'),
    short('Describe how an artist can use contrast to create a focal point, using a specific example.', 'Model: A painter might surround a pale face with dark clothing so the highest value contrast falls on the face. Because the eye is drawn to the sharpest contrast, the face becomes the focal point without needing to be the largest shape.', ['Names contrast.', 'Gives a specific example.', 'Explains the perceptual effect.'], 10),
  ]),
};

export const health: Course = {
  id: 'hs-health',
  title: 'Health Education',
  subject: 'health',
  grade: 9,
  credits: 0.5,
  semesters: 1,
  description:
    'A one-semester health course: wellness and nutrition, mental health, substance use, relationships and consent, disease prevention, and first aid. Health is enrichment content in Tex. Educ. Code §28.002(a); this course is offered as a half-credit elective and supports the required health instruction for grades 9–12.',
  essentialQuestions: ['What habits actually improve long-term health?', 'How do you evaluate health claims?'],
  teks: [teks('19 TAC ch. 115, Health I', 'Health behaviors; nutrition and fitness; mental and emotional health; substance use prevention; injury and disease prevention; interpersonal communication.')],
  weights: HIGH_WEIGHTS,
  units: [
    unit('u1', 'Wellness and nutrition', 'Health is a pattern, not an event.', [
      lesson({
        id: 'health-u1-l1',
        title: 'Reading a nutrition label and building a plate',
        minutes: 45,
        objectives: ['Interpret serving size, added sugar, and sodium on a label.', 'Build a balanced meal with realistic portions.'],
        sections: [
          section('Labels', [
            'Start with serving size: all other numbers depend on it. Added sugars are listed separately from total sugars because they are the ones health guidance recommends limiting. Sodium is often high in packaged foods even when they do not taste salty.',
            'A useful plate model: about half vegetables and fruit, a quarter protein, a quarter whole grains, with water as the default drink. Exact needs vary by age, sex, activity, and health conditions; the plate is a heuristic, not a prescription.',
          ]),
          section('Evaluating claims', [
            'A supplement ad citing “clinical studies” should name them. Check who funded the study, whether it was in humans, and whether the outcome measured matters. A single small study is weak evidence; a systematic review is stronger.',
          ]),
        ],
        example: {
          prompt: 'A snack has 2 servings per container, 12 g added sugar per serving. How much added sugar is in the package?',
          steps: ['Read servings per container: 2.', 'Multiply per-serving sugar by servings.', '12 × 2 = 24 g.'],
          answer: '24 g of added sugar if you eat the whole package.',
        },
        practice: [
          mc('The first thing to check on a nutrition label is', ['calories', 'serving size', 'brand', 'price'], 1, 'All values depend on serving size.'),
          num('A label lists 8 g added sugar per serving and 3 servings per container. How many grams are in the container?', 24, '8 × 3 = 24.'),
        ],
      }),
    ], quiz('Unit 1 quiz: nutrition', [
      mc('Added sugars are listed separately because', ['they are natural', 'guidance recommends limiting them', 'they have no calories', 'they are vitamins'], 1, 'They are the sugars to limit.'),
      mc('A systematic review is stronger evidence than', ['a single small study', 'a randomized trial', 'a meta-analysis', 'a clinical guideline'], 0, 'It synthesizes multiple studies.'),
      mc('Water is a good default drink because', ['it has added sugar', 'it hydrates without added calories or sugar', 'it replaces meals', 'it contains electrolytes only'], 1, 'It hydrates without added sugar.'),
    ]), project({
      title: 'Three-day food and movement log',
      prompt: 'Log food and movement for three days, then evaluate one strength and one improvement using a credible source.',
      deliverable: 'Log plus a 300-word evaluation with a cited source.',
      guidance: ['Estimate portions honestly.', 'Do not aim for perfection.', 'Cite a government or academic source.'],
      rubric: [
        rubricRow('Log completeness', 35, [['Excellent', 'Complete and specific.', 35], ['Proficient', 'Minor gaps.', 28], ['Developing', 'Sparse.', 18], ['Beginning', 'Missing.', 7]]),
        rubricRow('Evaluation', 40, [['Excellent', 'Specific and evidence-based.', 40], ['Proficient', 'Reasonable.', 32], ['Developing', 'Generic.', 20], ['Beginning', 'None.', 8]]),
        rubricRow('Source use', 15, [['Excellent', 'Credible and cited.', 15], ['Proficient', 'Cited.', 12], ['Developing', 'Weak.', 8], ['Beginning', 'None.', 3]]),
        rubricRow('Clarity', 10, [['Excellent', 'Clear.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
    unit('u2', 'Mental health, substances, and safety', 'Knowing when to get help is a skill.', [
      lesson({
        id: 'health-u2-l1',
        title: 'Stress, sleep, and when to seek help',
        minutes: 45,
        objectives: ['Identify signs that stress is affecting health.', 'Name appropriate sources of help.'],
        sections: [
          section('Stress and sleep', [
            'Short-term stress is normal; chronic stress affects sleep, mood, digestion, and immune function. Sleep is not optional: most teenagers need about 8–10 hours, and consistent schedules help. Screens before bed delay sleep for many people.',
            'Coping skills that have evidence include regular activity, predictable routines, breathing or mindfulness practice, social connection, and limiting stimulants late in the day.',
          ]),
          section('Getting help', [
            'Seek help when symptoms persist for weeks, interfere with school or relationships, or include thoughts of self-harm. In the United States, the 988 Suicide and Crisis Lifeline is available by call or text.Trusted adults, school counselors, and primary care clinicians are appropriate first contacts.',
            'For substance use, evidence-based treatment works, and early intervention improves outcomes. Texas has a statewide substance use hotline operated through the Health and Human Services Commission; verify current numbers before relying on them.',
          ]),
        ],
        example: {
          prompt: 'A student has slept five hours a night for a month and is struggling in school. What is a reasonable first step?',
          steps: ['Treat sleep as a health issue, not a character flaw.', 'Talk to a trusted adult and a clinician.', 'Reduce late caffeine and screens; set a consistent schedule.', 'Follow up if symptoms persist.'],
          answer: 'Seek adult and clinical support while making sustainable sleep changes.',
        },
        practice: [
          mc('The 988 line is for', ['directory assistance', 'suicide and crisis support', 'poison control', 'weather alerts'], 1, 'It connects to crisis support.'),
          mc('Chronic stress can affect', ['only mood', 'sleep, mood, and immune function', 'nothing physical', 'only appetite'], 1, 'It affects multiple systems.'),
        ],
      }),
    ], quiz('Unit 2 quiz: mental health', [
      mc('Most teenagers need about', ['4–5 hours of sleep', '6–7 hours', '8–10 hours', '12 hours'], 2, 'Guidance generally recommends 8–10 hours.'),
      mc('988 provides', ['crisis support', 'homework help', 'traffic updates', 'financial advice'], 0, 'It is the Suicide and Crisis Lifeline.'),
      mc('A sign to seek professional help is', ['one bad day', 'symptoms persisting for weeks and interfering with daily life', 'feeling tired after exercise', 'a stressful exam'], 1, 'Persistence and impairment are key signals.'),
    ]), project({
      title: 'Health decision scenario',
      prompt: 'Write a scenario in which a friend shows warning signs of a mental health crisis. Describe what you would say, whom you would contact, and why you would not keep it secret.',
      deliverable: 'A 400-word scenario and response plan.',
      guidance: ['Use direct, nonjudgmental language.', 'Name real resources.', 'Prioritize safety over secrecy.'],
      rubric: [
        rubricRow('Recognition of signs', 30, [['Excellent', 'Specific warning signs.', 30], ['Proficient', 'Some signs.', 24], ['Developing', 'Vague.', 15], ['Beginning', 'None.', 6]]),
        rubricRow('Response plan', 40, [['Excellent', 'Clear, safe, and realistic.', 40], ['Proficient', 'Reasonable.', 32], ['Developing', 'Unclear.', 20], ['Beginning', 'Unsafe.', 8]]),
        rubricRow('Resources', 20, [['Excellent', 'Accurate and appropriate.', 20], ['Proficient', 'Named.', 16], ['Developing', 'Vague.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Communication', 10, [['Excellent', 'Empathetic and direct.', 10], ['Proficient', 'Respectful.', 8], ['Developing', 'Awkward.', 5], ['Beginning', 'Judgmental.', 2]]),
      ],
    })),
  ],
  finalExam: exam('Health final examination', [
    mc('The first number to check on a nutrition label is', ['calories', 'serving size', 'protein', 'price'], 1, 'Everything depends on serving size.'),
    mc('Most teenagers need about', ['5 hours of sleep', '8–10 hours of sleep', '12 hours of sleep', '6 hours of sleep'], 1, 'That is the typical recommendation.'),
    mc('988 is the', ['poison control number', 'Suicide and Crisis Lifeline', 'weather line', 'school district line'], 1, 'It provides crisis support.'),
    mc('A systematic review is', ['a single study', 'a synthesis of multiple studies', 'an advertisement', 'a news article'], 1, 'It summarizes the evidence base.'),
    mc('Consent requires', ['silence', 'clear, voluntary agreement', 'pressure', 'a prior relationship'], 1, 'Consent must be voluntary and clear.'),
    short('Explain how to evaluate a health claim you see online.', 'Model: Find the original source, check whether it is a study in humans or an animal or cell study, note the sample size and funding, see whether other studies agree, and ask whether the outcome measured is the one you care about. If no original source exists, treat the claim as unsupported.', ['Seeks the original source.', 'Considers study type and size.', 'Checks for independent replication.'], 10),
  ]),
};
