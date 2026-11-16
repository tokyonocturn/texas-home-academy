import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Middle school electives, part two: technology and Spanish. */
export const DEPTH_MSB: Record<string, LessonDepth> = {
  'mstech-u1-l1': {
    topics: ['binary'],
    objectives: [
      'Use headings, styles, and formulas to organize a document and a spreadsheet.',
      'Convert between binary and decimal numbers and explain why computers use binary.',
    ],
    sections: [
      {
        heading: 'Documents and spreadsheets',
        paragraphs: [
          'A word processor separates content from formatting. Headings applied through styles create an outline that can generate a table of contents and keep the document consistent. Formatting text one line at a time looks fine until the document changes, at which point every manual adjustment must be redone; styles update together.',
          'A spreadsheet stores numbers in cells addressed by column and row, such as B4. A formula begins with an equals sign and refers to cells rather than typing values, so changing a cell updates every result. Relative references shift when a formula is copied, while absolute references with dollar signs stay fixed, which matters when every row multiplies by the same tax rate.',
          'Functions summarize ranges: SUM adds, AVERAGE divides the total by the count, and MAX returns the largest value. Charts display relationships that a table hides, but they can also mislead if the vertical axis does not start at zero. Clear labels and consistent units make a spreadsheet usable by someone other than its author. Version history and comments turn a shared document into a record of decisions, which matters when several people edit the same file. Naming files consistently and storing them in one folder prevents the duplicate-version problem that wastes more time than any formatting choice.',
        ],
      },
      {
        heading: 'Binary and why computers use it',
        paragraphs: [
          'Computers store information as bits, each holding a 1 or a 0. A byte is eight bits. Binary is a base-two system, so each place is worth twice the place to its right: 1, 2, 4, 8, 16, and so on. The binary number 1101 is 8 + 4 + 0 + 1 = 13 in decimal.',
          'Hardware uses binary because a circuit can reliably distinguish two states, such as high and low voltage, while distinguishing ten levels would invite errors. Text, images, and sound are all encoded as numbers: a character set such as ASCII assigns a number to each letter, and images store numeric values for pixel colors.',
          'File sizes follow the same doubling pattern. A kilobyte is about a thousand bytes, a megabyte about a million, and a gigabyte about a billion, which is why a short document is measured in kilobytes while video is measured in gigabytes. Understanding the units makes storage and download estimates meaningful.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Convert binary 1101 to decimal, and convert decimal 10 to binary.',
        steps: [
          'For 1101, add place values: 8 + 4 + 0 + 1 = 13.',
          'For 10, use 8 + 2, so the bits are 1010.',
        ],
        answer: '1101 is 13, and 10 is 1010.',
      },
    ],
    terms: [
      ['style', 'a saved set of formatting rules applied to text consistently'],
      ['cell reference', 'a column-and-row address such as B4'],
      ['absolute reference', 'a cell reference that stays fixed when copied'],
      ['function', 'a built-in operation such as SUM that works on a range'],
      ['bit', 'a single binary digit, 0 or 1'],
      ['byte', 'eight bits, commonly one character of text'],
    ],
    practice: [
      num('What is binary 1101 in decimal?', 13, '8 + 4 + 1 = 13.'),
      mc('What is binary 110 in decimal?', ['4', '6', '8', '12'], 1, '4 + 2 = 6.'),
      mc('Why do computers use binary?', ['it is faster to type', 'circuits reliably detect two states', 'it uses less electricity', 'it is newer'], 1, 'Two states are easy to distinguish reliably.'),
    ],
    review: [
      {
        prompt: 'Why use headings and styles?',
        answer: 'They create consistent formatting and a navigable structure that updates automatically when the document changes.',
      },
      {
        prompt: 'What is binary 110 in decimal?',
        answer: 'Binary 110 equals 4 + 2 + 0, which is 6 in decimal.',
      },
    ],
    exercises: [
      'Build a spreadsheet that totals a shopping list and computes tax with an absolute reference.',
      'Convert five decimal numbers under 32 to binary and back.',
    ],
  },
  'mstech-u2-l1': {
    topics: ['multi-factor authentication'],
    objectives: [
      'Explain how packets, IP addresses, and DNS deliver a web page.',
      'Describe how accounts are stolen and how multi-factor authentication blocks most attacks.',
    ],
    sections: [
      {
        heading: 'How the internet moves data',
        paragraphs: [
          'The internet is a network of networks. When you request a page, your device sends packets of data to a server identified by an IP address. Routers forward each packet toward its destination, and because packets can take different paths, they are reassembled in order at the end. This design is resilient: if one route fails, traffic moves around it.',
          'Humans use names, so DNS translates a domain name into an IP address before the request goes out. HTTPS adds encryption through TLS, which protects the contents of a request from anyone watching the network, such as a user on public Wi-Fi. The padlock means the connection is encrypted and the certificate matches the domain; it does not guarantee the site is honest.',
          'Speed depends on bandwidth, the amount of data a connection can carry, and latency, the delay before data arrives. A satellite link may have high bandwidth and still feel slow because of latency. Understanding the difference explains why a video call can struggle while a large download proceeds normally. Public Wi-Fi deserves caution even with HTTPS, because an attacker can still redirect you to a lookalike page or capture unencrypted traffic. Installing updates promptly closes known holes, and locking your device with a passcode protects everything else if it is lost. Length beats cleverness in passwords: a long passphrase of unrelated words is easier to remember and harder to crack than a short string of symbols.',
        ],
      },
      {
        heading: 'How accounts get stolen',
        paragraphs: [
          'Most account takeovers begin with stolen credentials rather than clever code. Password reuse is the largest risk: when one site is breached, attackers try the same email and password on banking, email, and social accounts. A password manager makes unique passwords practical, and it removes the need to remember them.',
          'Phishing tricks users into entering credentials on a lookalike page or into replying with a code. Urgency, unusual sender addresses, and links that do not match the stated domain are warning signs. Multi-factor authentication blocks most of these attacks because a stolen password alone is not enough without the second factor.',
          'Recovery options deserve as much attention as passwords. An outdated recovery email or phone number can lock you out or let an attacker in, and security questions with public answers are weak. Checking whether your email appears in a known breach, enabling MFA everywhere it is offered, and using passkeys where available are practical steps that materially reduce risk.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'An email says your account will be closed in 24 hours unless you “verify” at a link. List two warning signs and the safest action.',
        steps: [
          'Urgency and a threat are classic phishing pressure tactics.',
          'Check the sender address and the link target, which will not match the real domain.',
          'Do not use the link; open the service directly and check the account there.',
        ],
        answer: 'Urgency plus a mismatched link; navigate to the site yourself instead of clicking.',
      },
    ],
    terms: [
      ['packet', 'a small unit of data sent across a network'],
      ['IP address', 'a numeric address identifying a device on a network'],
      ['DNS', 'the system that translates domain names into IP addresses'],
      ['HTTPS', 'encrypted web traffic protected by TLS'],
      ['phishing', 'a scam that tricks users into revealing credentials'],
      ['multi-factor authentication', 'requiring a second proof of identity beyond a password'],
    ],
    practice: [
      mc('What does HTTPS protect?', ['the site’s honesty', 'the contents of traffic in transit', 'your password strength', 'your device from malware'], 1, 'It encrypts traffic between browser and server.'),
      mc('Why does MFA stop many account takeovers?', ['it changes your password', 'a stolen password is not enough', 'it blocks all malware', 'it hides your email'], 1, 'A second factor is still required.'),
      num('How many bits are in a byte?', 8, 'One byte is eight bits.'),
    ],
    review: [
      {
        prompt: 'What does HTTPS protect?',
        answer: 'It encrypts the traffic between your browser and the server so others on the network cannot read it.',
      },
      {
        prompt: 'Why does MFA stop many account takeovers?',
        answer: 'Even with a stolen password, an attacker cannot log in without the second factor.',
      },
    ],
    exercises: [
      'Inspect three URLs and identify which parts indicate the real domain.',
      'Enable MFA on one account with an adult and record the steps.',
    ],
  },
  'msspan-u1-l1': {
    topics: ['present tense'],
    objectives: [
      'Greet someone and introduce yourself formally and informally in Spanish.',
      'Conjugate regular -ar verbs in the present tense and form simple questions.',
    ],
    sections: [
      {
        heading: 'Greetings and introductions',
        paragraphs: [
          'Spanish greetings change with the time of day and with formality. Hola works at any hour among friends, while buenos días, buenas tardes, and buenas noches suit morning, afternoon, and evening. ¿Cómo te llamas? asks a peer’s name informally, and ¿Cómo se llama usted? asks politely, using the formal pronoun usted.',
          'Introductions follow a predictable pattern: me llamo Ana, mucho gusto, and ¿y tú? The response encantado or encantada agrees in gender with the speaker, which is a first lesson in how Spanish marks gender on adjectives. Soy de Texas tells where you are from, and ¿De dónde eres? asks the same of someone else.',
          'Spanish has two words for you. Tú is informal and used with friends, classmates, and children. Usted is formal and used with strangers, older adults, and people in authority. Choosing the wrong one is not grammatically incorrect, but it can sound too familiar or oddly distant, so the distinction is part of politeness rather than decoration.',
        ],
      },
      {
        heading: 'Regular -ar verbs in the present tense',
        paragraphs: [
          'Spanish verbs change endings to show who performs the action. Hablar means to speak, and its stem is habl-. The present-tense endings for -ar verbs are -o, -as, -a, -amos, -áis, and -an, giving hablo, hablas, habla, hablamos, habláis, and hablan.',
          'Because the ending already shows the subject, subject pronouns are usually omitted: hablo means I speak without needing yo. They appear for emphasis or clarity, as in yo hablo español pero ella habla inglés. Negation is simple: place no before the verb, as in no hablo francés.',
          'Questions form by rising intonation or by changing word order, and written questions take inverted question marks: ¿Hablas español? The same conjugation supports everyday statements about studying, working, and traveling, since estudiar, trabajar, and viajar are all regular -ar verbs. Spanish vowels are short and consistent, so hablar sounds the same in every word where it appears, unlike English vowels that shift with spelling. The vosotros form is used mainly in Spain, while Latin American speakers generally use ustedes for plural you, which is why textbooks often teach both. Formal situations call for usted even when the other person is younger, such as addressing a new teacher or a clerk in a store.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Conjugate hablar for yo and nosotros, then write a short introduction.',
        steps: [
          'Drop -ar from hablar to get the stem habl-.',
          'Add -o for yo and -amos for nosotros: hablo, hablamos.',
          'Introduce yourself: Hola, me llamo Luis. ¿Cómo te llamas?',
        ],
        answer: 'Hablo and hablamos; the introduction uses me llamo and ¿cómo te llamas?',
      },
    ],
    terms: [
      ['hola', 'hello, used informally at any time'],
      ['usted', 'the formal word for you'],
      ['tú', 'the informal word for you'],
      ['infinitive', 'the base form of a verb, such as hablar'],
      ['stem', 'the part of a verb left after removing -ar, -er, or -ir'],
      ['conjugation', 'changing a verb’s ending to match its subject'],
    ],
    practice: [
      mc('How do you ask someone’s name informally?', ['¿Cómo se llama usted?', '¿Cómo te llamas?', '¿De dónde eres?', 'Mucho gusto'], 1, 'The tú form is informal.'),
      mc('What ending does hablar take for nosotros?', ['-o', '-as', '-amos', '-an'], 2, 'Nosotros takes -amos.'),
      num('How many present-tense endings do regular -ar verbs have?', 6, 'One for each subject form.'),
    ],
    review: [
      {
        prompt: 'How do you ask someone’s name informally?',
        answer: 'Use ¿Cómo te llamas? with the informal tú form, and answer with me llamo plus your name.',
      },
      {
        prompt: 'What ending does “hablar” take for “we”?',
        answer: 'The nosotros form takes -amos, so hablar becomes hablamos.',
      },
    ],
    exercises: [
      'Write a six-line dialogue with a partner using greetings, names, and one -ar verb.',
      'Conjugate hablar, estudiar, and trabajar for all six subjects in a table.',
    ],
  },
  'msspan-u2-l1': {
    topics: ['horario'],
    objectives: [
      'Count and use numbers through one hundred, including prices and times.',
      'Describe school supplies and schedules and compare them with schools in Spanish-speaking countries.',
    ],
    sections: [
      {
        heading: 'Numbers, time, and dates',
        paragraphs: [
          'Spanish numbers follow a predictable pattern. Uno through diez, once through quince, then dieciséis through diecinueve combine forms, and twenty is veinte. Tens are treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa, and cien, joined with y: treinta y cinco is thirty-five.',
          'Time uses son las with hours after one and es la with one: es la una, son las tres. Minutes are added with y, as in son las cuatro y veinte, and half past is y media. Asking ¿Qué hora es? and answering with a specific hour is one of the most practical uses of numbers.',
          'Dates combine numbers and months: el cinco de mayo, el primero de enero. Days and months are not capitalized in Spanish, unlike English, and the day comes before the month. Prices are stated with euros or pesos depending on the country, which is a reminder that Spanish is spoken in more than twenty countries with different currencies and customs.',
        ],
      },
      {
        heading: 'School supplies and cultural comparison',
        paragraphs: [
          'Classroom vocabulary includes el lápiz, el cuaderno, la mochila, el libro, la clase, el horario, and la tarea. Articles carry gender, so el accompanies masculine nouns and la accompanies feminine ones, and adjectives agree with the noun they describe. Learning a noun with its article prevents errors that are hard to correct later.',
          'Schools differ across the Spanish-speaking world. Many secondary schools in Spain and Latin America use a jornada with a long midday break, and some students attend in morning and afternoon shifts. Uniforms are common in many countries, and the school year often begins in a different month than in the United States.',
          'Comparison is most useful when it avoids ranking. Saying “schools in Mexico often have a longer lunch break than mine” observes a difference; saying one system is better requires evidence and ignores local priorities. Cultural comparison asks how a community’s choices fit its circumstances, which is a habit that transfers to every language you learn. Numbers also appear in dates and schedules, so asking ¿A qué hora empieza la clase? combines the question pattern with time vocabulary. Practicing with a real schedule, such as your own school day described in Spanish, makes the vocabulary stick far better than a list. Note that cien becomes ciento before another number, as in ciento veinte for one hundred twenty.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Say the price 35 pesos and the time 4:20 in Spanish.',
        steps: [
          'Thirty-five is treinta y cinco.',
          'Hours take son las, so 4:20 is son las cuatro y veinte.',
        ],
        answer: 'Treinta y cinco pesos; son las cuatro y veinte.',
      },
    ],
    terms: [
      ['el lápiz', 'the pencil, a writing tool with a graphite core'],
      ['el cuaderno', 'the notebook used for writing class notes'],
      ['la mochila', 'the backpack worn to carry books and supplies'],
      ['el horario', 'the schedule listing classes and times'],
      ['la tarea', 'the homework assigned to be completed outside class'],
      ['jornada', 'the school day or working day'],
    ],
    practice: [
      mc('How do you say thirty-five in Spanish?', ['treinta y cinco', 'cincuenta y tres', 'veinticinco', 'cuarenta y cinco'], 0, 'Treinta is thirty, plus y cinco.'),
      mc('Which article goes with mochila?', ['el', 'la', 'los', 'las'], 1, 'Mochila is feminine.'),
      num('How many minutes are in media hora?', 30, 'Media hora is half an hour.'),
    ],
    review: [
      {
        prompt: 'Name three school supplies in Spanish.',
        answer: 'El lápiz, el cuaderno, and la mochila are three common school supplies, each with its article.',
      },
      {
        prompt: 'Why compare school schedules instead of ranking them?',
        answer: 'Comparison describes differences, while ranking requires evidence and ignores each community’s priorities.',
      },
    ],
    exercises: [
      'Label ten objects in your backpack in Spanish with the correct article.',
      'Write five sentences comparing your school day with a schedule from a Spanish-speaking country.',
    ],
  },
};
