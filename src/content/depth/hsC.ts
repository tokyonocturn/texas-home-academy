import type { LessonDepth } from './types';

/** Authored depth for high-school electives and K–8 enrichment courses. */
export const DEPTH_HS_C: Record<string, LessonDepth> = {
  'span1-u1-l1': {
    topics: ['greetings', 'verb ser'],
    applicationTitle: 'Introducing yourself in Spanish',
    application:
      'Introductions combine a greeting, a name, and a question. Ser is used for identity and origin, and its forms are irregular: soy, eres, es, somos, son. Because Spanish verbs carry the subject, “Soy Ana” is complete without a pronoun, and the question form simply reverses intonation or places the subject after the verb.',
    example: {
      prompt: 'Introduce yourself and ask a new classmate’s name formally.',
      steps: ['Use a greeting: “Buenos días.”', 'State your name with ser: “Soy Ana.” Ask: “¿Cómo se llama usted?”'],
      answer: '“Buenos días. Soy Ana. ¿Cómo se llama usted?”',
    },
    terms: [
      ['ser', 'to be, used for identity, origin, and inherent traits'],
      ['usted', 'the formal “you,” used with strangers and elders'],
    ],
    review: [
      {
        prompt: 'What are the forms of ser in the present tense?',
        answer: 'The forms are soy, eres, es, somos, and son, used for identity and origin.',
      },
      {
        prompt: 'When do you use tú instead of usted?',
        answer: 'With friends, peers, and people you know well; usted shows respect.',
      },
    ],
    exercises: [
      'Write four sentences introducing yourself and two classmates.',
      'Practice a formal and informal introduction aloud.',
    ],
  },
  'span1-u2-l1': {
    topics: ['telling time', 'ar verbs'],
    applicationTitle: 'Telling time and daily actions',
    application:
      'Telling time uses ser with the hour and minutes: “Son las tres” for three o’clock, “Es la una” for one. Regular -ar verbs follow a pattern: hablar becomes hablo, hablas, habla, hablamos, hablan. Combining the two lets you say when you do something, which is the foundation of daily conversation. Saying when you do something is one of the first things a learner can do with a new verb.',
    example: {
      prompt: 'Say “I study at eight o’clock” in Spanish.',
      steps: ['Conjugate estudiar for yo: estudio.', 'Tell time: “a las ocho.”'],
      answer: '“Estudio a las ocho.”',
    },
    terms: [
      ['conjugation', 'changing a verb form to match its subject'],
      ['infinitive', 'the base form of a verb, such as hablar'],
    ],
    review: [
      {
        prompt: 'How do you say “It is one o’clock”?',
        answer: '“Es la una,” using the singular form.',
      },
      {
        prompt: 'What endings do regular -ar verbs take?',
        answer: 'The endings are -o, -as, -a, -amos, and -an for regular -ar verbs.',
      },
    ],
    exercises: [
      'Write five sentences saying what you do and at what time.',
      'Conjugate three -ar verbs in all present-tense forms.',
    ],
  },
  'span2-u1-l1': {
    topics: ['preterite', 'imperfect'],
    applicationTitle: 'Choosing the past tense',
    application:
      'Spanish has two simple past tenses. The preterite presents completed actions with a clear boundary; the imperfect presents ongoing background, habits, and descriptions. “Ayer comí” reports a finished event, while “Cuando era niño, comía” sets a habitual scene. Narratives often combine them: background in the imperfect, events in the preterite.',
    example: {
      prompt: 'Choose the tense: “We were watching TV when the phone rang.”',
      steps: [
        'Watching is ongoing background: imperfect, “veíamos.”',
        'The ring interrupts: preterite, “sonó.”',
      ],
      answer: '“Veíamos la televisión cuando sonó el teléfono.”',
    },
    terms: [
      ['preterite', 'the past tense for completed actions'],
      ['imperfect', 'the past tense for ongoing or habitual actions'],
    ],
    review: [
      {
        prompt: 'Which tense describes a habitual childhood action?',
        answer: 'The imperfect, as in “jugaba” for “I used to play.”',
      },
      {
        prompt: 'What ending does a regular -ar verb take in the preterite yo form?',
        answer: 'Regular -ar verbs take -é in the yo form, as in “hablé.”',
      },
    ],
    exercises: [
      'Write a short narrative using both past tenses.',
      'Choose the correct tense for eight sentences and justify each.',
    ],
  },
  'span2-u2-l1': {
    topics: ['direct object pronouns', 'travel vocabulary'],
    applicationTitle: 'Replacing what you already named',
    application:
      'Direct object pronouns replace the thing receiving the action: lo, la, los, las agree in gender and number. They usually precede the conjugated verb: “¿El mapa? Lo tengo.” Travel situations require this economy, since repeating “el mapa” in every sentence sounds unnatural and slows communication. Practicing with a map or a train station dialogue makes the pronouns automatic.',
    example: {
      prompt: 'Answer “¿Tienes las llaves?” without repeating “las llaves.”',
      steps: ['Identify the object: llaves is feminine plural.', 'Use las before the verb.'],
      answer: '“Sí, las tengo.”',
    },
    terms: [
      ['direct object', 'the noun that receives the verb’s action'],
      ['gender agreement', 'matching articles and pronouns to a noun’s gender'],
    ],
    review: [
      {
        prompt: 'Which pronoun replaces “el libro”?',
        answer: 'lo, because libro is masculine singular.',
      },
      {
        prompt: 'Where does the pronoun usually go?',
        answer: 'Before the conjugated verb, or attached to an infinitive.',
      },
    ],
    exercises: [
      'Rewrite five sentences using direct object pronouns.',
      'Role-play asking for and following directions.',
    ],
  },
  'pe-u1-l1': {
    topics: ['fitness components', 'FITT principle'],
    applicationTitle: 'Planning a week that actually works',
    application:
      'Health-related fitness has five components: cardiorespiratory endurance, muscular strength, muscular endurance, flexibility, and body composition. FITT — frequency, intensity, time, type — turns a goal into a plan. A plan that ignores one component leaves a gap, which is why balanced weeks include aerobic work, resistance, and mobility.',
    example: {
      prompt: 'Build a FITT entry for improving cardiorespiratory endurance.',
      steps: ['Frequency: 3–4 days. Intensity: moderate, able to talk but not sing.', 'Time: 30 minutes. Type: running or cycling.'],
      answer: 'A concrete weekly prescription with all four FITT variables specified.',
    },
    terms: [
      ['cardiorespiratory endurance', 'the ability to sustain aerobic activity'],
      ['FITT', 'frequency, intensity, time, and type of exercise'],
    ],
    review: [
      {
        prompt: 'Name the five health-related fitness components.',
        answer: 'Cardiorespiratory endurance, muscular strength, muscular endurance, flexibility, and body composition.',
      },
      {
        prompt: 'What does the I in FITT stand for?',
        answer: 'Intensity, how hard the activity is.',
      },
    ],
    exercises: [
      'Write a one-week FITT plan for two components.',
      'Log three workouts and evaluate them against your plan.',
    ],
  },
  'pe-u2-l1': {
    topics: ['heat illness', 'concussion'],
    applicationTitle: 'Safety when the body is stressed',
    application:
      'Heat illness ranges from cramps and exhaustion to heat stroke, which is an emergency: confusion, hot skin, and collapse require cooling and emergency help. Concussion is a brain injury; anyone with headache, confusion, nausea, or balance problems after a hit must stop play and be evaluated. Hydration and gradual acclimation prevent most heat problems.',
    example: {
      prompt: 'A player is confused and stops sweating in heat. What do you do?',
      steps: [
        'Recognize possible heat stroke: confusion and lack of sweating are red flags.',
        'Call emergency services, move to shade, and begin cooling.',
      ],
      answer: 'Treat as an emergency and cool the athlete while calling for help.',
    },
    terms: [
      ['heat stroke', 'a life-threatening failure of temperature regulation'],
      ['concussion', 'a brain injury caused by a blow or sudden movement'],
    ],
    review: [
      {
        prompt: 'What are warning signs of heat exhaustion?',
        answer: 'Heavy sweating, weakness, dizziness, nausea, and headache.',
      },
      {
        prompt: 'What should happen after a suspected concussion?',
        answer: 'Remove from play immediately and seek medical evaluation before returning.',
      },
    ],
    exercises: [
      'Write a hydration plan for a two-hour practice.',
      'List the steps for responding to a suspected concussion.',
    ],
  },
  'art1-u1-l1': {
    topics: ['elements of art', 'principles of design'],
    applicationTitle: 'The vocabulary of looking',
    application:
      'The elements — line, shape, form, color, value, texture, and space — are the materials of visual language. Principles such as balance, contrast, emphasis, movement, pattern, and unity describe how elements are organized. Naming them turns “I like it” into a specific claim about how a work directs attention.',
    example: {
      prompt: 'How does a painting use contrast to create emphasis?',
      steps: [
        'Identify the element: a bright warm figure against cool dark ground.',
        'Name the principle: contrast creates a focal point.',
      ],
      answer: 'Value and color contrast isolate the figure, making it the emphasis.',
    },
    terms: [
      ['value', 'the lightness or darkness of a color'],
      ['emphasis', 'the part of a work that draws attention first'],
    ],
    review: [
      {
        prompt: 'How is shape different from form?',
        answer: 'Shape is flat and two-dimensional; form has volume and depth.',
      },
      {
        prompt: 'What does unity mean in a composition?',
        answer: 'The parts work together as a coherent whole.',
      },
    ],
    exercises: [
      'Identify all seven elements in one artwork.',
      'Make a small composition using contrast for emphasis.',
    ],
  },
  'art1-u2-l1': {
    topics: ['observational drawing', 'critique'],
    applicationTitle: 'Drawing what is there',
    application:
      'Observational drawing depends on measurement: sighting compares angles and proportions with a pencil, and negative space describes the shapes around an object rather than the object itself. Critique then uses specific language — “the left edge is too steep” — instead of vague judgment, which is what makes feedback usable.',
    example: {
      prompt: 'Your drawing of a chair looks tilted. What do you check?',
      steps: [
        'Sight the angle of the back leg against vertical.',
        'Compare negative spaces on each side of the leg.',
      ],
      answer: 'Measure the angle and the surrounding shapes, then correct the line.',
    },
    terms: [
      ['sighting', 'measuring proportions and angles by comparing with a pencil'],
      ['negative space', 'the space around and between objects'],
    ],
    review: [
      {
        prompt: 'Why does negative space help accuracy?',
        answer: 'It gives the eye simpler shapes to compare instead of a familiar object.',
      },
      {
        prompt: 'What makes critique useful?',
        answer: 'It names a specific element and suggests a concrete change.',
      },
    ],
    exercises: [
      'Draw a chair using negative space only.',
      'Give and receive one specific critique on a drawing.',
    ],
  },
  'health-u1-l1': {
    topics: ['nutrition label', 'balanced plate'],
    applicationTitle: 'Reading a label honestly',
    application:
      'A nutrition label’s serving size determines every number below it; a bottle with two servings doubles the calories and sugar. Added sugar and sodium are the values most often underestimated. Building a plate from vegetables, protein, grains, and fruit gives a practical portion guide without weighing food.',
    example: {
      prompt: 'A drink has 20 g of added sugar per serving and two servings per bottle. How much sugar is in the bottle?',
      steps: ['Multiply by servings: 20 × 2.', 'Compare with the daily limit guidance.'],
      answer: '40 grams of added sugar, which is high for one drink.',
    },
    terms: [
      ['serving size', 'the amount the label’s numbers describe'],
      ['added sugar', 'sugar added during processing, not naturally present'],
    ],
    review: [
      {
        prompt: 'Why check servings per container?',
        answer: 'The whole package may contain several servings, multiplying every value.',
      },
      {
        prompt: 'What does a balanced plate emphasize?',
        answer: 'Vegetables and fruit, with lean protein and whole grains.',
      },
    ],
    exercises: [
      'Compare two labels for added sugar and sodium.',
      'Build three balanced meals and list their components.',
    ],
  },
  'health-u2-l1': {
    topics: ['stress and sleep', 'seeking help'],
    applicationTitle: 'When stress stops being useful',
    application:
      'Short-term stress can sharpen focus, but chronic stress disrupts sleep, appetite, and immune function. Sleep debt worsens mood and memory, and it is often the first thing to fix. Knowing when to seek help — persistent hopelessness, panic, or inability to function — is a skill, and trusted adults, counselors, and crisis lines are appropriate resources.',
    example: {
      prompt: 'A student is sleeping five hours, skipping meals, and snapping at friends. What is the first step?',
      steps: [
        'Name the pattern: sleep loss, appetite change, irritability.',
        'Talk to a trusted adult or school counselor and address sleep first.',
      ],
      answer: 'Recognize the cluster as a warning sign and involve a trusted adult.',
    },
    terms: [
      ['chronic stress', 'sustained stress that wears down health over time'],
      ['sleep debt', 'accumulated loss of needed sleep'],
    ],
    review: [
      {
        prompt: 'How much sleep do most teenagers need?',
        answer: 'About eight to ten hours per night.',
      },
      {
        prompt: 'When should you seek help for stress?',
        answer: 'When it persists, disrupts daily functioning, or includes hopelessness or panic.',
      },
    ],
    exercises: [
      'Track sleep for a week and note its effect on mood.',
      'List three trusted adults and one crisis resource.',
    ],
  },
  'speech-u1-l1': {
    topics: ['audience analysis', 'speech structure'],
    applicationTitle: 'Speaking to these people, today',
    application:
      'Audience analysis asks what listeners already know, what they believe, and what they need from you. A speech to experts can skip definitions; a speech to newcomers cannot. Signposting — “first, second, finally” — makes structure audible, and a clear roadmap early in the speech lets listeners predict where it is going.',
    example: {
      prompt: 'You must explain a new policy to parents and to staff. How does the speech differ?',
      steps: [
        'Parents need effects on their children and clear next steps.',
        'Staff need implementation details and timelines.',
      ],
      answer: 'Same policy, different emphasis and vocabulary for each audience.',
    },
    terms: [
      ['audience analysis', 'assessing listeners’ knowledge, beliefs, and needs'],
      ['signpost', 'a spoken cue that marks structure, such as “next”'],
    ],
    review: [
      {
        prompt: 'Why does a roadmap help listeners?',
        answer: 'It tells them what is coming so they can follow without rereading.',
      },
      {
        prompt: 'What should you learn about an audience first?',
        answer: 'Their existing knowledge and their stake in the topic.',
      },
    ],
    exercises: [
      'Write an audience profile for two different groups.',
      'Outline a five-minute speech with three signposts.',
    ],
  },
  'speech-u2-l1': {
    topics: ['vocal delivery', 'active listening'],
    applicationTitle: 'Voice and listening under pressure',
    application:
      'Pace, pause, and volume carry meaning: a pause before a key number makes it land, and slowing down signals importance. Visuals should support, not duplicate, the words. In a Q&A, active listening means restating the question before answering, which prevents miscommunication and gives you a moment to think.',
    example: {
      prompt: 'A questioner rambles. How do you respond?',
      steps: ['Paraphrase the core question aloud.', 'Answer that version and check whether it addressed the concern.'],
      answer: 'Restate, answer, and confirm understanding.',
    },
    terms: [
      ['pace', 'the speed of speaking'],
      ['active listening', 'attending, paraphrasing, and confirming to understand'],
    ],
    review: [
      {
        prompt: 'How does a pause improve a speech?',
        answer: 'It emphasizes the next point and gives listeners time to process.',
      },
      {
        prompt: 'Why restate a question before answering?',
        answer: 'It confirms understanding and keeps the answer focused.',
      },
    ],
    exercises: [
      'Record a one-minute explanation and mark three pauses.',
      'Practice paraphrasing questions with a partner.',
    ],
  },
  'cs1-u1-l1': {
    topics: ['variables and loops', 'Python tracing'],
    applicationTitle: 'Reading a program like a machine',
    application:
      'A program is a sequence of instructions over state: variables hold values, conditionals choose a path, and loops repeat while a condition holds. Tracing executes the program on paper, tracking each variable, which is how you find off-by-one errors. The loop condition is the part most often wrong.',
    example: {
      prompt: 'Trace: total = 0; for i in range(1, 4): total += i. What is total?',
      steps: ['range(1, 4) yields 1, 2, 3.', 'Add each: 0 + 1 + 2 + 3.'],
      answer: 'total = 6; the upper bound 4 is excluded.',
    },
    terms: [
      ['variable', 'a named storage location holding a value'],
      ['loop condition', 'the test that decides whether a loop repeats'],
    ],
    review: [
      {
        prompt: 'Why does range(1, 4) exclude 4?',
        answer: 'Python ranges stop before the end value.',
      },
      {
        prompt: 'What does a conditional do?',
        answer: 'It runs a block only when its condition is true.',
      },
    ],
    exercises: [
      'Trace a loop that counts down from 5 and write each value.',
      'Write a program that prints even numbers under 20.',
    ],
  },
  'cs1-u2-l1': {
    topics: ['binary numbers', 'phishing'],
    applicationTitle: 'Bits and account security',
    application:
      'Binary represents numbers with powers of two, so 1011 is 8 + 0 + 2 + 1 = 11. Computers store and transmit data this way, and networks layer protocols: DNS resolves names, HTTPS encrypts traffic. Phishing exploits people rather than systems, which is why multi-factor authentication and link inspection matter more than antivirus alone.',
    example: {
      prompt: 'Convert binary 1011 to decimal.',
      steps: ['Place values: 8, 4, 2, 1.', 'Add where the bit is 1: 8 + 2 + 1.'],
      answer: '11 in decimal.',
    },
    terms: [
      ['binary', 'a base-2 number system using only 0 and 1'],
      ['multi-factor authentication', 'requiring two or more independent proofs of identity'],
    ],
    review: [
      {
        prompt: 'What does HTTPS protect?',
        answer: 'It encrypts traffic between the browser and the server.',
      },
      {
        prompt: 'Why is MFA effective against phishing?',
        answer: 'A stolen password alone is not enough to sign in.',
      },
    ],
    exercises: [
      'Convert 1101 and 10000 to decimal.',
      'Inspect a suspicious email and list three warning signs.',
    ],
  },
  'cte-u1-l1': {
    topics: ['value proposition', 'break-even'],
    applicationTitle: 'The arithmetic of a small business',
    application:
      'A value proposition states who the customer is and why the product solves their problem better than alternatives. Unit economics then tests whether the idea can survive: contribution margin is price minus variable cost, and break-even units equal fixed costs divided by that margin. A business can be popular and still lose money if the margin is too thin.',
    example: {
      prompt: 'Fixed costs are $3,000; price is $25; variable cost is $10. Find break-even units.',
      steps: ['Contribution margin = 25 − 10 = 15.', 'Break-even = 3,000 ÷ 15 = 200.'],
      answer: '200 units, after which each sale contributes $15.',
    },
    terms: [
      ['contribution margin', 'price minus variable cost per unit'],
      ['fixed cost', 'a cost that does not change with units sold'],
    ],
    review: [
      {
        prompt: 'What does break-even mean?',
        answer: 'The sales volume where revenue equals total costs.',
      },
      {
        prompt: 'Why is a value proposition not a slogan?',
        answer: 'It names a specific customer and a specific problem being solved.',
      },
    ],
    exercises: [
      'Compute break-even for a product you invent.',
      'Write a one-sentence value proposition for a local business.',
    ],
  },
  'cte-u2-l1': {
    topics: ['business structures', 'Texas LLC filing'],
    applicationTitle: 'Choosing a legal structure',
    application:
      'A sole proprietorship is easy to start but offers no separation between owner and business, so personal assets are exposed. An LLC creates a separate legal entity and limits liability, at the cost of filing fees and formalities: in Texas, a Certificate of Formation (Form 205) costs $300 and an EIN comes free from the IRS.',
    example: {
      prompt: 'A baker wants liability protection and low cost. What should she file?',
      steps: [
        'Choose an LLC for liability separation.',
        'File Form 205 with the Secretary of State and obtain an EIN.',
      ],
      answer: 'Form an LLC: $300 state filing plus a free federal EIN.',
    },
    terms: [
      ['limited liability', 'protection of personal assets from business debts'],
      ['EIN', 'an employer identification number issued free by the IRS'],
    ],
    review: [
      {
        prompt: 'What is the main risk of a sole proprietorship?',
        answer: 'The owner is personally liable for business debts and lawsuits.',
      },
      {
        prompt: 'Where is a Texas LLC formed?',
        answer: 'With the Texas Secretary of State by filing a Certificate of Formation.',
      },
    ],
    exercises: [
      'Compare a sole proprietorship and an LLC in a table.',
      'List the steps and costs to form a Texas LLC.',
    ],
  },
  'ctehealth-u1-l1': {
    topics: ['medical terminology', 'vital signs'],
    applicationTitle: 'Language and numbers at the bedside',
    application:
      'Medical terms are built from prefixes, roots, and suffixes: brady- is slow, tachy- is fast, hyper- is high, hypo- is low. Vital signs give a quick picture of stability: adult resting heart rate 60–100, respirations 12–20, blood pressure near 120/80, temperature about 98.6°F, and oxygen saturation above 95%.',
    example: {
      prompt: 'A chart says “tachycardia, hypotension.” Translate and interpret.',
      steps: ['tachy- fast + cardia heart; hypo- low + tension pressure.', 'Fast heart rate with low blood pressure.'],
      answer: 'Rapid heart rate and low blood pressure, a pattern that can signal shock.',
    },
    terms: [
      ['bradycardia', 'a slower than normal heart rate'],
      ['hypotension', 'lower than normal blood pressure'],
    ],
    review: [
      {
        prompt: 'What is a normal adult resting heart rate?',
        answer: 'About 60 to 100 beats per minute.',
      },
      {
        prompt: 'What does the prefix hyper- mean?',
        answer: 'High or excessive, as in hypertension.',
      },
    ],
    exercises: [
      'Decode ten medical terms using prefixes and suffixes.',
      'Take and record a resting pulse and respiration rate.',
    ],
  },
  'ctehealth-u2-l1': {
    topics: ['informed consent', 'patient privacy'],
    applicationTitle: 'Rights and plain language',
    application:
      'Informed consent requires that a patient understand a procedure, its risks, benefits, and alternatives, and agree freely. Privacy rules limit who can see health information, and casual conversation can violate them. Plain language — short sentences, no jargon — is not a courtesy but a safety requirement, because misunderstanding a dose or instruction can cause harm.',
    example: {
      prompt: 'A patient nods after a jargon-heavy explanation. What should you do?',
      steps: [
        'Nodding is not proof of understanding.',
        'Use teach-back: ask the patient to explain the plan in their own words.',
      ],
      answer: 'Confirm understanding with teach-back before proceeding.',
    },
    terms: [
      ['informed consent', 'voluntary agreement after understanding risks and alternatives'],
      ['teach-back', 'asking a patient to restate instructions to confirm understanding'],
    ],
    review: [
      {
        prompt: 'What are the elements of informed consent?',
        answer: 'Understanding the procedure, risks, benefits, alternatives, and free agreement.',
      },
      {
        prompt: 'Why does privacy matter in casual settings?',
        answer: 'Discussing a patient where others can hear violates confidentiality.',
      },
    ],
    exercises: [
      'Rewrite a jargon-heavy instruction in plain language.',
      'Role-play a teach-back conversation.',
    ],
  },
  'pfl-u1-l1': {
    topics: ['FICA withholding', 'zero-based budget'],
    applicationTitle: 'From gross pay to a plan',
    application:
      'Gross pay is before deductions; net pay is what arrives. FICA withholds 6.2% for Social Security and 1.45% for Medicare, in addition to income tax withholding based on Form W-4. A zero-based budget assigns every dollar a job, so income minus planned spending and saving equals zero.',
    example: {
      prompt: 'Gross pay is $2,000. Compute FICA and the net before income tax.',
      steps: ['Social Security: 2,000 × 0.062 = 124.', 'Medicare: 2,000 × 0.0145 = 29; FICA total 153.'],
      answer: '$153 withheld for FICA, leaving $1,847 before income tax.',
    },
    terms: [
      ['gross pay', 'earnings before any deductions'],
      ['zero-based budget', 'a budget where every dollar is assigned'],
    ],
    review: [
      {
        prompt: 'What does FICA fund?',
        answer: 'FICA funds Social Security and Medicare, the federal retirement and health programs.',
      },
      {
        prompt: 'How do you build a zero-based budget?',
        answer: 'Assign all income to spending, saving, and giving until the remainder is zero.',
      },
    ],
    exercises: [
      'Compute FICA on a paycheck of your choice.',
      'Build a monthly zero-based budget with three categories.',
    ],
  },
  'pfl-u2-l1': {
    topics: ['credit reports', 'loan cost'],
    applicationTitle: 'Credit and the price of borrowing',
    application:
      'A credit report records accounts, payment history, and inquiries; errors can be disputed with the bureau and the furnisher, which must investigate. A credit score summarizes that history, with payment history and amounts owed weighing most. The cost of a loan is not the monthly payment but the total repaid, which grows with the rate and the term.',
    example: {
      prompt: 'Borrow $5,000 at 10% simple interest for 3 years. Find the total repaid.',
      steps: ['Interest = 5,000 × 0.10 × 3 = 1,500.', 'Total = 5,000 + 1,500.'],
      answer: '$6,500 total, so the loan costs $1,500.',
    },
    terms: [
      ['credit report', 'a record of credit accounts and payment history'],
      ['dispute', 'a formal challenge to an error on a credit report'],
    ],
    review: [
      {
        prompt: 'What two factors weigh most in a credit score?',
        answer: 'Payment history and amounts owed carry the most weight in a credit score.',
      },
      {
        prompt: 'Why compare total repayment instead of monthly payment?',
        answer: 'A longer term lowers the payment but raises total interest.',
      },
    ],
    exercises: [
      'Pull a free credit report and check it for errors.',
      'Compare total cost for two loan terms.',
    ],
  },
  'pfl-u3-l1': {
    topics: ['insurance basics', 'compound growth'],
    applicationTitle: 'Protection and patience',
    application:
      'Insurance trades a certain premium for protection against a large loss; the deductible is what you pay before coverage begins, and limits cap the payout. Compound growth works in the opposite direction for savings: returns earn returns, so time matters more than a single contribution. Both ideas are about managing risk over years.',
    example: {
      prompt: '$2,000 invested at 5% compounded annually for 3 years. Find the balance.',
      steps: ['Year 1: 2,100. Year 2: 2,205.', 'Year 3: 2,315.25.'],
      answer: 'About $2,315.25, with $315.25 of growth.',
    },
    terms: [
      ['deductible', 'the amount you pay before insurance covers a claim'],
      ['compound interest', 'interest earned on both principal and prior interest'],
    ],
    review: [
      {
        prompt: 'What is the trade-off of a higher deductible?',
        answer: 'Lower premiums but more out-of-pocket cost when you file a claim.',
      },
      {
        prompt: 'Why does starting early matter for compound growth?',
        answer: 'More years of compounding produce disproportionately more growth.',
      },
    ],
    exercises: [
      'Compare two insurance quotes on premium, deductible, and limits.',
      'Compute compound growth for a monthly savings plan.',
    ],
  },

  'efa-u1-l1': {
    topics: ['elements of art', 'music opposites'],
    applicationTitle: 'Looking and listening closely',
    application:
      'Art and music both use basic elements. In art, line, shape, color, and texture organize what you see; in music, fast and slow, high and low, loud and soft organize what you hear. Naming these elements lets you describe a work precisely instead of saying only that you like it. The same habit carries into music, film, and design, where precise description is how people collaborate.',
    example: {
      prompt: 'Describe a painting and a song using one element from each.',
      steps: ['Art: the painting uses bold curved lines.', 'Music: the song is fast and gets louder.'],
      answer: 'Curved lines in the painting; a fast tempo and growing volume in the song.',
    },
    terms: [
      ['element of art', 'a basic visual building block such as line or color'],
      ['tempo', 'the speed of music'],
    ],
    review: [
      {
        prompt: 'Name three elements of art.',
        answer: 'Line, shape, and color, plus texture, value, form, and space.',
      },
      {
        prompt: 'What does tempo describe?',
        answer: 'How fast or slow the music moves.',
      },
    ],
    exercises: [
      'Find three lines in a artwork and describe each.',
      'Clap a fast pattern and a slow pattern.',
    ],
  },
  'efa-u2-l1': {
    topics: ['art choices', 'reflection'],
    applicationTitle: 'Make first, then explain',
    application:
      'Artists make choices, and explaining them is part of the work. After creating something with two elements, you can describe what you chose and why: why this color, why this shape, why here. Reflection is not a test of talent; it is practice in noticing your own decisions, which is how skill improves. A short explanation after each piece also gives you a record of what you tried and what to change next time, and it gives a parent something concrete to respond to beyond “nice work.”',
    example: {
      prompt: 'You used only circles and blue. Explain two choices.',
      steps: ['Name the elements: shape and color.', 'Explain the effect: circles feel calm and blue feels cool.'],
      answer: '“I used circles to make it feel soft, and blue to make it feel cool.”',
    },
    terms: [
      ['reflection', 'thinking and talking about your own artistic choices'],
      ['composition', 'the arrangement of elements in a work'],
    ],
    review: [
      {
        prompt: 'Why explain your choices after making art?',
        answer: 'It helps you notice what you did and make deliberate choices next time.',
      },
      {
        prompt: 'What is composition?',
        answer: 'How the parts of an artwork are arranged.',
      },
    ],
    exercises: [
      'Create a small artwork using two elements and describe it.',
      'Choose a favorite artwork and say one thing you would change.',
    ],
  },
  'ehp-u1-l1': {
    topics: ['locomotor skills', 'warm-up'],
    applicationTitle: 'Moving well and starting safely',
    application:
      'Locomotor skills move the body from place to place: walking, running, hopping, skipping, jumping, galloping, and sliding. A warm-up raises heart rate and loosens joints gradually, which lowers injury risk. Safe play also means checking space, following rules, and stopping when something hurts. Children who practice these skills with games learn to move with control, which makes later sports safer and more enjoyable. A short warm-up and a quick check of the play space prevent most injuries at this age.',
    example: {
      prompt: 'Plan a two-minute warm-up before a game.',
      steps: ['Start with walking, then light jogging.', 'Add arm circles and leg swings.'],
      answer: 'Walk, jog, then move joints through their range before playing.',
    },
    terms: [
      ['locomotor skill', 'a movement that travels from one place to another'],
      ['warm-up', 'gentle activity that prepares the body for exercise'],
    ],
    review: [
      {
        prompt: 'Name four locomotor skills.',
        answer: 'Running, hopping, skipping, and jumping, plus walking, galloping, and sliding.',
      },
      {
        prompt: 'Why warm up before activity?',
        answer: 'It raises heart rate and loosens joints to reduce injury risk.',
      },
    ],
    exercises: [
      'Practice four locomotor skills across a room.',
      'Lead a family member through a two-minute warm-up.',
    ],
  },
  'ehp-u2-l1': {
    topics: ['balanced meal', 'sleep and hygiene'],
    applicationTitle: 'Habits that keep you well',
    application:
      'A balanced meal includes vegetables or fruit, a protein, a grain, and water. Sleep restores attention and mood, and handwashing removes germs that cause illness. These habits are simple but cumulative: small daily choices matter more than occasional efforts, which is why routines beat intentions. A predictable bedtime and a handwashing routine at key moments (before eating, after the bathroom) remove the need to decide each time, and they make healthy choices the default rather than a daily test of willpower.',
    example: {
      prompt: 'Build a balanced breakfast from three food groups.',
      steps: ['Choose a grain, a protein, and fruit.', 'Add water instead of a sugary drink.'],
      answer: 'Oatmeal with milk and banana, plus water.',
    },
    terms: [
      ['balanced meal', 'a meal with a variety of food groups in sensible portions'],
      ['hygiene', 'habits that keep the body clean and healthy'],
    ],
    review: [
      {
        prompt: 'Name three parts of a balanced meal.',
        answer: 'A vegetable or fruit, a protein, and a grain, with water.',
      },
      {
        prompt: 'Why does handwashing matter?',
        answer: 'It removes germs that cause illness and spread to others.',
      },
    ],
    exercises: [
      'Draw a balanced plate for dinner.',
      'Track bedtime for five nights and note how you feel.',
    ],
  },
  'etech-u1-l1': {
    topics: ['home row', 'saving files'],
    applicationTitle: 'Using a computer with control',
    application:
      'Typing starts at the home row, where fingers rest on A, S, D, F and J, K, L, semicolon; returning there builds speed and accuracy. Files need names and folders so they can be found later. Saving often and naming clearly prevents lost work, which is a habit professionals rely on. Accurate typing also frees attention for the ideas instead of the keys.',
    example: {
      prompt: 'Where should your fingers rest, and how do you name a school file?',
      steps: ['Rest on the home row keys.', 'Use a descriptive name with a date: “book-report-2026-11”.'],
      answer: 'Fingers on the home row; a descriptive name with a date.',
    },
    terms: [
      ['home row', 'the middle row of keys where fingers rest'],
      ['file name', 'the label that identifies a saved document'],
    ],
    review: [
      {
        prompt: 'Which keys are under the left hand on the home row?',
        answer: 'The left hand rests on A, S, D, and F; the right on J, K, L, and semicolon.',
      },
      {
        prompt: 'Why use descriptive file names?',
        answer: 'So you and others can find the file later without opening many documents.',
      },
    ],
    exercises: [
      'Type your name ten times without looking at the keyboard.',
      'Create a folder and save a document with a clear name.',
    ],
  },
  'etech-u2-l1': {
    topics: ['private information', 'sequencing steps'],
    applicationTitle: 'Staying safe and thinking in order',
    application:
      'Personal information such as your address, passwords, and phone number should not be shared online without a trusted adult. A sequence lists steps in order, and order matters: you must open a document before you can print it. Learning to write steps clearly is the beginning of programming and of giving instructions anyone can follow. Testing your steps on someone else shows where a step is missing or out of order.',
    example: {
      prompt: 'Write three steps to print a document.',
      steps: ['Open the document.', 'Choose Print and select a printer.'],
      answer: 'Open, choose Print, select the printer, then confirm.',
    },
    terms: [
      ['personal information', 'private details that identify or locate you'],
      ['sequence', 'steps arranged in the order they must happen'],
    ],
    review: [
      {
        prompt: 'Name two things you should not share online.',
        answer: 'Your home address and your passwords.',
      },
      {
        prompt: 'Why does the order of steps matter?',
        answer: 'Some steps only work after earlier ones are finished.',
      },
    ],
    exercises: [
      'Write the steps for making a sandwich in order.',
      'List three pieces of information to keep private.',
    ],
  },
  'msart-u1-l1': {
    topics: ['rule of thirds', 'color schemes'],
    applicationTitle: 'Arranging a strong image',
    application:
      'The rule of thirds places key elements along imaginary lines that divide a frame into thirds, which feels more dynamic than centering everything. Color schemes do similar work: complementary colors (opposites on the wheel) create contrast, while analogous colors (neighbors) create harmony. Both are tools for directing attention, and choosing one deliberately is what separates composition from a snapshot.',
    example: {
      prompt: 'Place a horizon and a subject using the rule of thirds.',
      steps: ['Put the horizon on a horizontal third line.', 'Place the subject near an intersection of thirds.'],
      answer: 'Horizon low or high, subject off-center at an intersection.',
    },
    terms: [
      ['rule of thirds', 'dividing a frame into thirds to place key elements'],
      ['complementary colors', 'colors opposite each other on the color wheel'],
    ],
    review: [
      {
        prompt: 'What effect do complementary colors create?',
        answer: 'Strong contrast that makes both colors appear more vivid.',
      },
      {
        prompt: 'Why avoid placing everything in the center?',
        answer: 'Off-center placement creates movement and interest.',
      },
    ],
    exercises: [
      'Crop three photos using the rule of thirds.',
      'Make two color studies, one complementary and one analogous.',
    ],
  },
  'msart-u2-l1': {
    topics: ['observational drawing', 'critique'],
    applicationTitle: 'Seeing accurately and responding usefully',
    application:
      'Sighting compares angles and proportions with a pencil held at arm’s length, while negative space focuses on the shapes around an object. Both slow down the tendency to draw what you expect rather than what is there. Critique then names a specific element and suggests a change, which is what makes feedback actionable. Sketching the same object repeatedly shows how much of drawing is measurement rather than talent. Comparing your first and fifth sketch is the most honest measure of progress.',
    example: {
      prompt: 'A drawn cup looks too wide. What do you measure?',
      steps: ['Compare the width to the height with a pencil.', 'Check the negative space on each side.'],
      answer: 'Measure the width-to-height ratio and correct the proportion.',
    },
    terms: [
      ['proportion', 'the size relationship between parts of a drawing'],
      ['negative space', 'the area around and between objects'],
    ],
    review: [
      {
        prompt: 'What does sighting help you measure?',
        answer: 'Angles and proportions, by comparing them with your pencil.',
      },
      {
        prompt: 'What makes critique actionable?',
        answer: 'It names a specific element and proposes a concrete change.',
      },
    ],
    exercises: [
      'Draw a simple object twice, once from memory and once observing.',
      'Give a classmate one specific, kind critique.',
    ],
  },
  'mspe-u1-l1': {
    topics: ['FITT', 'recovery'],
    applicationTitle: 'Training with a plan',
    application:
      'FITT turns a fitness goal into a weekly plan: how often, how hard, how long, and what kind. Recovery is part of the plan, not a break from it: muscles adapt during rest, and training the same muscles hard every day prevents adaptation and raises injury risk. Alternating hard and easy days is a basic principle.',
    example: {
      prompt: 'Plan a week that trains strength and endurance without overtraining.',
      steps: ['Strength three days, alternating muscle groups.', 'Aerobic work on alternate days, with one full rest day.'],
      answer: 'Alternate hard and easy days, with at least one rest day.',
    },
    terms: [
      ['recovery', 'rest that allows the body to adapt to training'],
      ['intensity', 'how hard an activity is'],
    ],
    review: [
      {
        prompt: 'Why is recovery necessary?',
        answer: 'Adaptation happens during rest, and overtraining raises injury risk.',
      },
      {
        prompt: 'What does the T in FITT mean?',
        answer: 'Time, how long the activity lasts.',
      },
    ],
    exercises: [
      'Write a weekly FITT plan with one rest day.',
      'Track energy levels across a week of training.',
    ],
  },
  'mspe-u2-l1': {
    topics: ['heat illness', 'concussion protocol'],
    applicationTitle: 'Safety in heat and contact',
    application:
      'Heat illness escalates from cramps to exhaustion to heat stroke, which is life-threatening and requires emergency cooling. Hydration, acclimation, and scheduled breaks prevent most cases. A concussion is a brain injury: any athlete with confusion, headache, or balance problems after a hit is removed from play and cannot return until medically cleared. Coaches and teammates should know the signs so no one pressures an injured player back onto the field.',
    example: {
      prompt: 'An athlete complains of dizziness and stops sweating. What is the response?',
      steps: ['Treat as possible heat stroke.', 'Call emergency services, cool immediately, do not give fluids to an unconscious person.'],
      answer: 'Emergency response: cool the athlete and get medical help.',
    },
    terms: [
      ['heat exhaustion', 'heat illness with heavy sweating, weakness, and dizziness'],
      ['concussion protocol', 'the required steps for removing and clearing an athlete'],
    ],
    review: [
      {
        prompt: 'What distinguishes heat stroke from heat exhaustion?',
        answer: 'Confusion and lack of sweating signal stroke, a medical emergency.',
      },
      {
        prompt: 'Who decides when an athlete returns after a concussion?',
        answer: 'A medical professional, following a graduated return protocol.',
      },
    ],
    exercises: [
      'Write a hydration schedule for a hot practice.',
      'List four concussion signs and the response to each.',
    ],
  },
  'mshealth-u1-l1': {
    topics: ['nutrition label', 'sleep and stress'],
    applicationTitle: 'Reading the fine print',
    application:
      'A nutrition label’s numbers apply to one serving, so a package with two servings contains double. Added sugar and sodium are the values most often missed. Sleep and stress interact: poor sleep raises stress hormones, and chronic stress makes sleep harder, which is why fixing sleep often improves mood first. Reading a label with attention is a skill that carries directly into grocery shopping and cooking later.',
    example: {
      prompt: 'A snack has 12 g of added sugar per serving and two servings. How much sugar is in the package?',
      steps: ['Multiply by servings: 12 × 2.', 'Compare with daily guidance.'],
      answer: '24 grams of added sugar in the package.',
    },
    terms: [
      ['serving size', 'the amount the label describes'],
      ['chronic stress', 'long-lasting stress that affects health'],
    ],
    review: [
      {
        prompt: 'Why check servings per package?',
        answer: 'The whole package may be two or more servings, multiplying every value.',
      },
      {
        prompt: 'How does poor sleep affect stress?',
        answer: 'It raises stress hormones and makes coping harder.',
      },
    ],
    exercises: [
      'Compare two snack labels for added sugar.',
      'Track sleep and mood for five days.',
    ],
  },
  'mshealth-u2-l1': {
    topics: ['refusal skills', 'consent and first aid'],
    applicationTitle: 'Saying no and responding well',
    application:
      'A refusal skill is a planned sentence: name the offer, say no clearly, and offer an alternative or leave. Consent must be freely given, informed, and revocable, and it applies to physical contact and to sharing information. Basic first aid — stopping bleeding, calling for help, and not moving an injured person — buys time for professionals.',
    example: {
      prompt: 'A friend offers a vape. Give a refusal and an alternative.',
      steps: ['Name it: “No, I don’t vape.”', 'Offer another activity: “Let’s get food instead.”'],
      answer: 'A clear no plus an alternative activity.',
    },
    terms: [
      ['refusal skill', 'a planned way to say no to pressure'],
      ['consent', 'freely given, informed, and revocable agreement'],
    ],
    review: [
      {
        prompt: 'What are the elements of consent?',
        answer: 'It must be freely given, informed, and can be withdrawn at any time.',
      },
      {
        prompt: 'What should you do first for a serious injury?',
        answer: 'Call for emergency help and keep the person still.',
      },
    ],
    exercises: [
      'Write and practice three refusal scripts.',
      'Demonstrate the steps for a minor cut and a suspected fracture.',
    ],
  },
  'mstech-u1-l1': {
    topics: ['document formatting', 'binary'],
    applicationTitle: 'Tools that organize information',
    application:
      'Headings and styles make a document navigable and consistent, and spreadsheets compute with formulas rather than typed answers. Binary represents numbers with powers of two, so 101 is 5. These tools share a purpose: organizing information so it can be found, checked, and changed without redoing everything by hand. Naming files, using styles, and documenting a formula all serve that same goal. A reader should be able to follow your file from its name alone, without opening it.',
    example: {
      prompt: 'Write a spreadsheet formula to add cells A1 through A5, and convert 101 to decimal.',
      steps: ['Use =SUM(A1:A5).', 'Binary 101 = 4 + 0 + 1.'],
      answer: '=SUM(A1:A5); binary 101 equals 5.',
    },
    terms: [
      ['formula', 'an instruction that calculates a value in a spreadsheet'],
      ['binary', 'a base-2 number system using 0 and 1'],
    ],
    review: [
      {
        prompt: 'Why use headings and styles?',
        answer: 'They create consistent formatting and make the document easy to navigate.',
      },
      {
        prompt: 'What is binary 110 in decimal?',
        answer: '6, because 4 + 2 + 0 = 6.',
      },
    ],
    exercises: [
      'Format a document with three heading levels.',
      'Build a spreadsheet that totals five expenses with a formula.',
    ],
  },
  'mstech-u2-l1': {
    topics: ['networks', 'phishing and MFA'],
    applicationTitle: 'How the internet finds and protects you',
    application:
      'DNS translates names like example.com into addresses, and HTTPS encrypts the connection so others cannot read it. Phishing imitates a trusted sender to steal credentials, and multi-factor authentication blocks most attacks because a stolen password alone is not enough. Checking the address and enabling MFA prevents the most common account theft.',
    example: {
      prompt: 'An email says your account will close unless you log in through a link. What do you check?',
      steps: ['Inspect the sender address and the link target.', 'Navigate to the site directly instead of clicking.'],
      answer: 'Treat it as phishing until verified through the official site.',
    },
    terms: [
      ['DNS', 'the system that maps domain names to IP addresses'],
      ['multi-factor authentication', 'two or more independent proofs of identity'],
    ],
    review: [
      {
        prompt: 'What does HTTPS protect?',
        answer: 'It encrypts data between the browser and the server.',
      },
      {
        prompt: 'Why does MFA stop many account takeovers?',
        answer: 'A stolen password is not enough without the second factor.',
      },
    ],
    exercises: [
      'Inspect two emails for phishing signs.',
      'Enable multi-factor authentication on one account with an adult.',
    ],
  },
  'msspan-u1-l1': {
    topics: ['greetings', 'ar verb conjugation'],
    applicationTitle: 'First conversations',
    application:
      'Greetings and introductions follow predictable patterns: a greeting, a name, a question about origin or well-being. Regular -ar verbs follow a fixed set of endings, so learning one verb teaches the pattern for hundreds. Asking a question is often just intonation or word order, which makes early conversation possible quickly. Practicing the pattern aloud matters more than memorizing a long vocabulary list. Beginners can hold a short exchange after one lesson if they practice greeting, naming, and asking a question aloud, then repeat it with a partner and change only the name or place, or both at once.',
    example: {
      prompt: 'Greet someone, give your name, and ask where they are from.',
      steps: ['“Hola, me llamo Ana.”', '“¿De dónde eres?”'],
      answer: 'A greeting, a name, and an origin question using ser.',
    },
    terms: [
      ['greeting', 'a word or phrase used to begin a conversation'],
      ['conjugation', 'changing a verb to match its subject'],
    ],
    review: [
      {
        prompt: 'How do you ask someone’s name informally?',
        answer: 'Informally, ask “¿Cómo te llamas?”; formally, “¿Cómo se llama usted?”',
      },
      {
        prompt: 'What ending does “hablar” take for “we”?',
        answer: 'The nosotros form takes -amos, as in “nosotros hablamos.”',
      },
    ],
    exercises: [
      'Write a six-line introduction dialogue.',
      'Conjugate two -ar verbs in writing.',
    ],
  },
  'msspan-u2-l1': {
    topics: ['numbers and school vocabulary', 'cultural comparison'],
    applicationTitle: 'Counting and comparing schools',
    application:
      'Numbers to 100 follow patterns: 30 is treinta, 31 is treinta y uno. School vocabulary names objects and routines, and comparing a school practice in another country with your own builds cultural awareness rather than stereotypes. Comparison requires specifics: schedules, uniforms, subjects, and holidays. Specific comparisons avoid turning a difference into a stereotype. A useful exercise is to name one similarity and one difference, then explain what each shows about the community rather than about individuals. Numbers and dates keep the comparison honest.',
    example: {
      prompt: 'Count by tens to 100 and name three school supplies.',
      steps: ['diez, veinte, treinta… cien.', 'el lápiz, el cuaderno, la mochila.'],
      answer: 'Ten to one hundred by tens, plus three named supplies.',
    },
    terms: [
      ['number pattern', 'a regular way numbers are formed, as with treinta y uno'],
      ['cultural comparison', 'contrasting practices between cultures using specifics'],
    ],
    review: [
      {
        prompt: 'How do you say 45 in Spanish?',
        answer: 'Cuarenta y cinco, built from cuarenta plus y cinco.',
      },
      {
        prompt: 'Name three school supplies in Spanish.',
        answer: 'El lápiz, el cuaderno, and la mochila.',
      },
    ],
    exercises: [
      'Write the numbers 10–100 by tens in Spanish.',
      'Compare your school day with one in a Spanish-speaking country.',
    ],
  },
};
