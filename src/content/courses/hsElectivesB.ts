import type { Course } from '../../types';
import { HIGH_WEIGHTS } from '../weights';
import { exam, lesson, mc, num, project, quiz, rubricRow, section, short, teks, unit } from '../builders';

export const speech: Course = {
  id: 'hs-speech',
  title: 'Communication Applications',
  subject: 'elective',
  grade: 10,
  credits: 0.5,
  semesters: 1,
  description:
    'A one-semester speech course: audience analysis, organization, delivery, visual aids, and listening. Texas requires students to demonstrate communication proficiency (19 TAC §74.11(a)(3)); districts choose how to assess it. This course provides a documented, rubric-scored way to do that.',
  essentialQuestions: ['What does this audience already believe, and what do they need?', 'How does delivery change what an argument can accomplish?'],
  teks: [teks('19 TAC ch. 110, Communication Applications', 'Audience analysis; organization; language; delivery; listening; interpersonal and group communication.')],
  weights: { participation: 20, practice: 15, quiz: 15, exam: 20, project: 30 },
  units: [
    unit('u1', 'Audience and structure', 'A speech is designed for particular ears.', [
      lesson({
        id: 'speech-u1-l1',
        title: 'Audience analysis and the signposted speech',
        minutes: 45,
        objectives: ['Analyze an audience’s knowledge and stance.', 'Structure a speech with a clear roadmap.'],
        sections: [
          section('Know whom you are addressing', [
            'Audience analysis asks what listeners already know, what they value, and what they are likely to resist. A speech to a school board needs different evidence from a speech to classmates: budgets and policy for one, personal consequence for the other.',
            'Credibility is built by acknowledging what the audience already accepts before asking them to move. Starting with a claim the audience rejects wastes the opening.',
          ]),
          section('Structure', [
            'Use a roadmap: attention device, thesis, preview of two or three points, then each point with evidence, then a conclusion that restates the claim and gives a specific action. Transitions should do work: “That cost matters because…” is stronger than “Now let’s move on.”',
            'For a five-minute speech, two well-supported points beat five thin ones.',
          ]),
        ],
        example: {
          prompt: 'You have four minutes to persuade classmates to attend a city council meeting.',
          steps: ['Attention: a decision made last month with almost no public comment.', 'Thesis: attendance changes outcomes.', 'Point 1: how public comment works.', 'Point 2: one example of a changed decision.', 'Action: date, time, and what to say.'],
          answer: 'Two points plus a concrete action fit the time and audience.',
        },
        practice: [
          mc('Audience analysis primarily determines', ['font choice', 'what evidence and appeals will land', 'the room', 'the time limit'], 1, 'It shapes evidence and framing.'),
          mc('A roadmap in an introduction', ['replaces evidence', 'previews the main points', 'is unnecessary', 'should be a quotation'], 1, 'It tells listeners where the argument goes.'),
        ],
      }),
    ], quiz('Unit 1 quiz: audience and structure', [
      mc('Credibility is strengthened by', ['ignoring the audience', 'acknowledging what the audience accepts', 'speaking faster', 'using jargon'], 1, 'Shared ground builds trust.'),
      mc('For a five-minute speech, the best number of main points is', ['one', 'two or three', 'seven', 'as many as possible'], 1, 'Two or three points fit the time.'),
      mc('A transition should', ['repeat the thesis', 'show the relationship between ideas', 'introduce a new topic', 'thank the audience'], 1, 'Transitions signal logical connection.'),
    ]), project({
      title: 'Persuasive speech',
      prompt: 'Deliver a 4–5 minute persuasive speech on a local issue, with a works-cited page and a Q&A response.',
      deliverable: 'A recording or live delivery, an outline, and citations.',
      guidance: ['Rehearse with a timer.', 'Make eye contact rather than reading.', 'Prepare for one hostile question.'],
      rubric: [
        rubricRow('Argument and evidence', 35, [['Excellent', 'Clear thesis with strong evidence.', 35], ['Proficient', 'Solid argument.', 28], ['Developing', 'Thin evidence.', 18], ['Beginning', 'No argument.', 7]]),
        rubricRow('Organization', 25, [['Excellent', 'Clear roadmap and transitions.', 25], ['Proficient', 'Organized.', 20], ['Developing', 'Hard to follow.', 12], ['Beginning', 'Disordered.', 5]]),
        rubricRow('Delivery', 30, [['Excellent', 'Confident, paced, engaged.', 30], ['Proficient', 'Clear.', 24], ['Developing', 'Reads notes.', 15], ['Beginning', 'Unprepared.', 6]]),
        rubricRow('Citations', 10, [['Excellent', 'Complete.', 10], ['Proficient', 'Present.', 8], ['Developing', 'Incomplete.', 5], ['Beginning', 'None.', 2]]),
      ],
    })),
    unit('u2', 'Delivery and listening', 'Listening is a skill with techniques.', [
      lesson({
        id: 'speech-u2-l1',
        title: 'Voice, visuals, and active listening',
        minutes: 40,
        objectives: ['Use pace, pause, and volume deliberately.', 'Apply active listening in a Q&A.'],
        sections: [
          section('Delivery', [
            'Pace slower than conversation; pause after key points. Volume should reach the back row without shouting. Fillers increase when you are unprepared, so rehearse the transitions rather than the whole script.',
            'Visual aids should be readable at a distance, sparse in text, and referenced rather than read aloud. A slide with your full script competes with you.',
          ]),
          section('Listening', [
            'Active listening means paraphrasing the question, asking for clarification, and answering the question actually asked. In a Q&A, repeat the question for the room, answer briefly, and stop.',
            'If you do not know, say so and describe how you would find out. That is more credible than improvisation.',
          ]),
        ],
        example: {
          prompt: 'A questioner asks a hostile question about cost.',
          steps: ['Paraphrase: “You’re asking who pays for this.”', 'Concede the real constraint.', 'Answer with your best evidence.', 'Offer to follow up with the budget detail.'],
          answer: 'Paraphrase, concede, answer, follow up.',
        },
        practice: [
          mc('A visual aid should', ['contain the full script', 'be sparse and readable', 'use small text', 'replace the speaker'], 1, 'Slides support, not replace, the speaker.'),
          mc('Active listening includes', ['interrupting', 'paraphrasing the question', 'changing the subject', 'ignoring tone'], 1, 'Paraphrasing confirms understanding.'),
        ],
      }),
    ], quiz('Unit 2 quiz: delivery', [
      mc('Pausing after a key point', ['weakens emphasis', 'lets the point land', 'wastes time', 'confuses listeners'], 1, 'Pauses create emphasis.'),
      mc('If you do not know an answer, you should', ['invent one', 'say so and describe how you would find out', 'ignore the question', 'change the topic'], 1, 'Honesty preserves credibility.'),
      mc('Fillers usually increase when', ['you are well rehearsed', 'you are unprepared', 'you speak slowly', 'you use notes'], 1, 'Preparation reduces fillers.'),
    ]), project({
      title: 'Listening analysis',
      prompt: 'Watch a public meeting or speech. Analyze two speakers’ delivery and one audience response, then propose one improvement for each speaker.',
      deliverable: 'A 400-word analysis with timestamps.',
      guidance: ['Use specific observations.', 'Avoid personality judgments.', 'Link delivery to effect.'],
      rubric: [
        rubricRow('Observation quality', 40, [['Excellent', 'Specific with timestamps.', 40], ['Proficient', 'Clear.', 32], ['Developing', 'General.', 20], ['Beginning', 'Vague.', 8]]),
        rubricRow('Analysis', 35, [['Excellent', 'Links delivery to effect.', 35], ['Proficient', 'Reasonable.', 28], ['Developing', 'Descriptive.', 18], ['Beginning', 'None.', 7]]),
        rubricRow('Recommendations', 15, [['Excellent', 'Specific and actionable.', 15], ['Proficient', 'Plausible.', 12], ['Developing', 'Vague.', 8], ['Beginning', 'None.', 3]]),
        rubricRow('Clarity', 10, [['Excellent', 'Clear.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
  ],
  finalExam: exam('Communication Applications final examination', [
    mc('Audience analysis determines', ['the room layout', 'which evidence and appeals will be effective', 'the font', 'the length only'], 1, 'It shapes evidence and framing.'),
    mc('A roadmap previews', ['the conclusion only', 'the main points', 'citations', 'the Q&A'], 1, 'It previews the structure.'),
    mc('A visual aid should be', ['dense with text', 'sparse and readable', 'read aloud', 'the full script'], 1, 'Slides support the speaker.'),
    mc('Active listening includes', ['interrupting', 'paraphrasing', 'changing topics', 'ignoring questions'], 1, 'Paraphrasing confirms understanding.'),
    mc('If you do not know an answer, the credible response is', ['to invent one', 'to say so and explain how you would find out', 'to ignore it', 'to attack the questioner'], 1, 'Honesty preserves credibility.'),
    short('Describe how you would adapt the same argument for a school board and for a group of classmates.', 'Model: For a school board I would lead with budget impact, policy precedent, and measurable outcomes, using data and a short timeline. For classmates I would lead with a concrete consequence they recognize, use a brief story, and end with a specific action. The claim stays the same; the evidence, order, and tone change.', ['Names audience differences.', 'Adjusts evidence and tone.', 'Keeps the claim consistent.'], 10),
  ]),
};

export const computerScience1: Course = {
  id: 'hs-cs1',
  title: 'Computer Science I',
  subject: 'technology',
  grade: 10,
  credits: 1,
  semesters: 2,
  description:
    'Computational thinking and programming in Python: variables, control flow, functions, lists, debugging, binary data, networks, and security fundamentals. No prior programming required.',
  essentialQuestions: ['How do you decompose a problem so a computer can solve it?', 'What makes a program correct, readable, and safe?'],
  teks: [teks('19 TAC ch. 126, Technology Applications (high school computer science)', 'Computational thinking; programming; data; algorithms; networks and the internet; cybersecurity; digital citizenship.')],
  weights: { practice: 30, quiz: 20, exam: 30, project: 20 },
  units: [
    unit('u1', 'Programming fundamentals', 'Programs are precise instructions over data.', [
      lesson({
        id: 'cs1-u1-l1',
        title: 'Variables, conditionals, and loops',
        minutes: 60,
        objectives: ['Write and trace a short Python program.', 'Explain the role of a loop condition.'],
        sections: [
          section('Python basics', [
            'A variable names a value: `age = 16`. Strings use quotes, integers have no decimal point, and booleans are `True` or `False`. `input()` returns a string, so convert with `int()` or `float()` before doing arithmetic.',
            'Conditionals choose a path: `if score >= 90: print("A") elif score >= 80: print("B") else: print("F")`. Indentation is syntax in Python; four spaces is the convention.',
          ]),
          section('Loops', [
            'A `for` loop iterates over a sequence: `for i in range(5): print(i)` prints 0 through 4. A `while` loop repeats while a condition holds and must change something each pass, or it never ends.',
            'Trace loops by hand with a table of variables. Most beginner bugs are off-by-one errors or a condition that never becomes false.',
          ]),
        ],
        example: {
          prompt: 'Write a loop that sums the numbers 1 through 10.',
          steps: ['Initialize total = 0.', 'Loop i from 1 to 10 inclusive: range(1, 11).', 'Add i to total each pass.', 'Print total, which is 55.'],
          answer: 'total = 0\nfor i in range(1, 11):\n    total += i\nprint(total)',
        },
        practice: [
          mc('`range(1, 5)` produces', ['1,2,3,4,5', '1,2,3,4', '0,1,2,3,4', '5'], 1, 'The stop value is excluded.'),
          num('What is the sum of 1 through 10?', 55, '10 × 11 / 2 = 55.'),
        ],
      }),
    ], quiz('Unit 1 quiz: programming', [
      mc('`input()` returns', ['an integer', 'a string', 'a float', 'a boolean'], 1, 'It always returns a string; convert explicitly.'),
      mc('A while loop must', ['never repeat', 'change something so the condition can become false', 'use range', 'print'], 1, 'Otherwise it is infinite.'),
      num('How many times does `for i in range(4)` execute?', 4, 'It runs for 0, 1, 2, 3.'),
    ]), project({
      title: 'Number guessing game',
      prompt: 'Write a Python program that picks a random number from 1 to 100, gives higher/lower hints, counts attempts, and validates input.',
      deliverable: 'Source code, a test transcript, and a short explanation.',
      guidance: ['Handle non-numeric input without crashing.', 'Limit attempts or allow replay.', 'Test edge cases such as 1 and 100.'],
      rubric: [
        rubricRow('Correctness', 40, [['Excellent', 'Works for all tested inputs.', 40], ['Proficient', 'Minor bug.', 32], ['Developing', 'Frequent bugs.', 20], ['Beginning', 'Does not run.', 8]]),
        rubricRow('Input validation', 20, [['Excellent', 'Handles invalid input.', 20], ['Proficient', 'Partial.', 16], ['Developing', 'Crashes.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Readability', 20, [['Excellent', 'Clear names and structure.', 20], ['Proficient', 'Readable.', 16], ['Developing', 'Confusing.', 10], ['Beginning', 'Unreadable.', 4]]),
        rubricRow('Testing evidence', 20, [['Excellent', 'Transcript covers edge cases.', 20], ['Proficient', 'Basic tests.', 16], ['Developing', 'One test.', 10], ['Beginning', 'None.', 4]]),
      ],
    })),
    unit('u2', 'Data, networks, and security', 'The internet is layers of agreements.', [
      lesson({
        id: 'cs1-u2-l1',
        title: 'Binary, networks, and account security',
        minutes: 55,
        objectives: ['Convert small numbers between binary and decimal.', 'Explain phishing and multi-factor authentication.'],
        sections: [
          section('Binary', [
            'Computers store data as bits. Each position is a power of two: 1011 = 8 + 0 + 2 + 1 = 11. Eight bits make a byte, which encodes 256 values. Text is encoded by agreed standards such as ASCII and UTF-8.',
            'A file’s size is measured in bytes; network speed is measured in bits per second. That is why a 100 Mbps connection and a 100 MB file are not directly comparable.',
          ]),
          section('Networks and security', [
            'The internet moves packets between networks using IP addresses; DNS translates names into addresses; HTTPS encrypts traffic between a browser and a server. Encryption protects data in transit, not a careless password.',
            'Phishing impersonates a trusted sender to obtain credentials. Defenses: verify the sender through a separate channel, use unique passwords stored in a password manager, enable multi-factor authentication, and never approve an unexpected MFA prompt.',
          ]),
        ],
        example: {
          prompt: 'Convert binary 1101 to decimal.',
          steps: ['Positions: 8, 4, 2, 1.', 'Bits: 1, 1, 0, 1.', '8 + 4 + 0 + 1 = 13.'],
          answer: '13.',
        },
        practice: [
          num('Convert binary 1010 to decimal.', 10, '8 + 0 + 2 + 0 = 10.'),
          mc('HTTPS protects', ['your password from being reused', 'data in transit', 'your device from malware', 'your account from phishing'], 1, 'It encrypts traffic in transit.'),
        ],
      }),
    ], quiz('Unit 2 quiz: data and security', [
      num('Convert binary 1111 to decimal.', 15, '8 + 4 + 2 + 1 = 15.'),
      mc('DNS translates', ['passwords to hashes', 'domain names to IP addresses', 'files to bytes', 'bits to bytes'], 1, 'It resolves names.'),
      mc('Multi-factor authentication helps because', ['it replaces passwords entirely', 'a stolen password alone is insufficient', 'it encrypts files', 'it speeds up login'], 1, 'A second factor blocks password-only attacks.'),
    ]), project({
      title: 'Security audit',
      prompt: 'Audit one personal account: password uniqueness, MFA status, recovery options, and connected apps. Write a 300-word report with a remediation checklist.',
      deliverable: 'A report with no actual passwords or secrets included.',
      guidance: ['Never write passwords in the report.', 'Prioritize the highest-risk finding.', 'Verify recovery methods work.'],
      rubric: [
        rubricRow('Audit completeness', 40, [['Excellent', 'All four areas assessed.', 40], ['Proficient', 'Most.', 32], ['Developing', 'Few.', 20], ['Beginning', 'None.', 8]]),
        rubricRow('Risk reasoning', 30, [['Excellent', 'Prioritizes by real risk.', 30], ['Proficient', 'Reasonable.', 24], ['Developing', 'Generic.', 15], ['Beginning', 'None.', 6]]),
        rubricRow('Remediation plan', 20, [['Excellent', 'Specific and actionable.', 20], ['Proficient', 'Plausible.', 16], ['Developing', 'Vague.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Safety', 10, [['Excellent', 'No secrets included.', 10], ['Proficient', 'Minor lapse.', 6], ['Developing', 'Risky.', 2], ['Beginning', 'Exposed secrets.', 0]]),
      ],
    })),
  ],
  finalExam: exam('Computer Science I final examination', [
    num('Convert binary 1001 to decimal.', 9, '8 + 1 = 9.'),
    mc('`range(3)` produces', ['1,2,3', '0,1,2', '0,1,2,3', '3'], 1, 'It starts at 0 and excludes the stop value.'),
    mc('An infinite loop happens when', ['the condition never becomes false', 'there is an if statement', 'a variable is a string', 'you use range'], 0, 'Nothing changes the condition.'),
    mc('HTTPS provides', ['encryption in transit', 'password storage', 'malware removal', 'phishing detection'], 0, 'It encrypts traffic between client and server.'),
    num('What is the sum of 1 through 5?', 15, '1+2+3+4+5 = 15.'),
    short('Explain why testing a program with normal inputs is not enough.', 'Model: Normal inputs exercise the expected path but not boundaries or invalid data. Bugs cluster at edges (0, empty input, maximum values) and in error handling. Testing boundary and invalid cases reveals crashes and incorrect assumptions that normal cases hide.', ['Mentions boundary cases.', 'Mentions invalid input.', 'Explains why normal tests miss them.'], 10),
  ]),
};

export const cteBusiness: Course = {
  id: 'hs-cte-business',
  title: 'Business Management and Entrepreneurship (CTE)',
  subject: 'cte',
  grade: 11,
  credits: 1,
  semesters: 2,
  description:
    'A CTE course in business planning, marketing, finance, and Texas business formation. Students write a business plan and model unit economics for a real or simulated venture.',
  essentialQuestions: ['What makes a business viable rather than merely interesting?', 'Which legal structure and obligations fit this venture?'],
  teks: [teks('19 TAC ch. 127, Business Management', 'Business operations; marketing; financial management; entrepreneurship; legal and ethical responsibilities; employability skills.')],
  weights: HIGH_WEIGHTS,
  units: [
    unit('u1', 'Venture design', 'A business plan is a set of testable assumptions.', [
      lesson({
        id: 'cte-u1-l1',
        title: 'Customers, value, and unit economics',
        minutes: 55,
        objectives: ['Define a target customer and value proposition.', 'Compute contribution margin and break-even units.'],
        sections: [
          section('Start with a customer', [
            'A value proposition states who the customer is, what problem you solve, and why your solution is better than the alternatives. “Everyone” is not a customer segment. Interview potential customers before building; the goal is to falsify assumptions cheaply.',
            'A minimum viable product tests the riskiest assumption with the least effort. If customers will not pay a deposit, a beautiful prototype will not save the idea.',
          ]),
          section('Unit economics', [
            'Contribution margin = price − variable cost per unit. If you sell a product for $25 with $10 of materials and fees, margin is $15. Break-even units = fixed costs / contribution margin. With $3,000 of fixed costs, break-even is 200 units.',
            'Fixed costs do not change with volume (rent, software subscriptions); variable costs do (materials, payment fees, shipping). Confusing them produces optimistic projections.',
          ]),
        ],
        example: {
          prompt: 'Price $30, variable cost $12, fixed costs $4,500. Find break-even units.',
          steps: ['Contribution margin = 30 − 12 = $18.', 'Break-even = 4,500 / 18 = 250 units.'],
          answer: '250 units.',
        },
        practice: [
          num('Price $40, variable cost $15, fixed costs $5,000. How many units to break even?', 200, 'Margin is $25; 5,000 / 25 = 200.'),
          mc('Which is a fixed cost?', ['materials', 'monthly software subscription', 'shipping per order', 'payment processing fee'], 1, 'It does not vary with volume.'),
        ],
      }),
    ], quiz('Unit 1 quiz: venture design', [
      mc('Contribution margin equals', ['price minus fixed cost', 'price minus variable cost per unit', 'revenue minus profit', 'fixed cost plus variable cost'], 1, 'It is the per-unit amount available to cover fixed costs.'),
      num('Margin is $20 and fixed costs are $2,000. What is break-even in units?', 100, '2,000 / 20 = 100.'),
      mc('A minimum viable product exists to', ['look polished', 'test the riskiest assumption cheaply', 'replace customer research', 'raise prices'], 1, 'It tests assumptions with minimal investment.'),
    ]), project({
      title: 'Business model canvas',
      prompt: 'Complete a business model canvas for a venture you could realistically start. Include customer segment, value proposition, channels, costs, and revenue.',
      deliverable: 'A one-page canvas plus a 300-word justification of the riskiest assumption.',
      guidance: ['Name a specific customer.', 'Quantify at least two costs.', 'State how you would test the riskiest assumption.'],
      rubric: [
        rubricRow('Canvas completeness', 35, [['Excellent', 'All blocks specific and coherent.', 35], ['Proficient', 'Most blocks.', 28], ['Developing', 'Generic.', 18], ['Beginning', 'Incomplete.', 7]]),
        rubricRow('Customer specificity', 25, [['Excellent', 'Narrow, researchable segment.', 25], ['Proficient', 'Reasonably specific.', 20], ['Developing', 'Broad.', 12], ['Beginning', '“Everyone.”', 5]]),
        rubricRow('Financial realism', 25, [['Excellent', 'Plausible costs and revenue.', 25], ['Proficient', 'Reasonable.', 20], ['Developing', 'Optimistic.', 12], ['Beginning', 'Absent.', 5]]),
        rubricRow('Testing plan', 15, [['Excellent', 'Specific and cheap.', 15], ['Proficient', 'Plausible.', 12], ['Developing', 'Vague.', 8], ['Beginning', 'None.', 3]]),
      ],
    })),
    unit('u2', 'Formation, law, and money', 'Structure determines liability, taxes, and paperwork.', [
      lesson({
        id: 'cte-u2-l1',
        title: 'Sole proprietorship, LLC, and Texas filing',
        minutes: 50,
        objectives: ['Compare sole proprietorship and LLC.', 'Identify the Texas filings and costs for an LLC.'],
        sections: [
          section('Choosing a structure', [
            'A sole proprietorship is an unincorporated business owned by one person. It is simple and inexpensive but does not create a separate legal entity, so the owner is personally exposed to business debts. An LLC is a separate entity; members generally are not personally liable for the LLC’s debts, though liability protection has limits (for example, personal guarantees and misconduct).',
            'For federal income tax, a single-member LLC is generally disregarded by default and a multi-member LLC is generally treated as a partnership, unless it elects otherwise. An LLC is not automatically a tax classification.',
          ]),
          section('Texas filings', [
            'A Texas LLC files a Certificate of Formation (Secretary of State Form 205); the filing fee is $300. A registered agent and office are required. An assumed name (“DBA”) for a registered entity is filed with the Secretary of State (Form 503, $25) and does not by itself create exclusive rights to the name.',
            'The IRS issues an EIN free of charge. Texas has no state personal income tax, but the franchise (“margin”) tax applies to many taxable entities; for reports originally due January 1, 2026 through December 31, 2027, the no-tax-due threshold is $2,650,000 in total revenue. Verify current thresholds before filing.',
          ]),
        ],
        example: {
          prompt: 'A single owner wants limited liability and simple taxes. What fits?',
          steps: ['An LLC provides a separate entity.', 'A single-member LLC is disregarded for federal tax by default.', 'File Form 205 ($300) and obtain an EIN.', 'Register for sales tax if selling taxable goods.'],
          answer: 'A single-member LLC, with the state filing and EIN, is a common fit.',
        },
        practice: [
          mc('The Texas LLC certificate of formation fee is', ['$25', '$300', '$500', 'free'], 1, 'Form 205 costs $300.'),
          mc('A single-member LLC is, by default, taxed as', ['a corporation', 'disregarded entity', 'a partnership', 'a trust'], 1, 'It is disregarded unless it elects otherwise.'),
        ],
      }),
    ], quiz('Unit 2 quiz: formation', [
      mc('An LLC’s main advantage over a sole proprietorship is', ['lower taxes always', 'a separate legal entity with limited liability', 'no paperwork', 'guaranteed profit'], 1, 'It separates the entity from the owner.'),
      mc('An EIN is obtained from', ['the Texas Secretary of State', 'the IRS, free of charge', 'a bank', 'the county clerk'], 1, 'The IRS issues EINs free.'),
      mc('An assumed name filing', ['grants exclusive trademark rights', 'gives notice of the name used', 'creates an LLC', 'replaces an EIN'], 1, 'It provides notice, not exclusive rights.'),
    ]), project({
      title: 'Business plan',
      prompt: 'Write an 8–10 page business plan: problem, customer, product, market, operations, legal structure, financial projections, and risks.',
      deliverable: 'A plan with a one-page executive summary and a simple three-year projection.',
      guidance: ['State assumptions explicitly.', 'Include a downside scenario.', 'Cite the Texas filing requirements you plan to meet.'],
      rubric: [
        rubricRow('Market and customer', 25, [['Excellent', 'Specific and researched.', 25], ['Proficient', 'Reasonable.', 20], ['Developing', 'Generic.', 12], ['Beginning', 'Missing.', 5]]),
        rubricRow('Operations and legal', 25, [['Excellent', 'Accurate structure and filings.', 25], ['Proficient', 'Mostly accurate.', 20], ['Developing', 'Vague.', 12], ['Beginning', 'Incorrect.', 5]]),
        rubricRow('Financials', 30, [['Excellent', 'Coherent and conservative with assumptions.', 30], ['Proficient', 'Plausible.', 24], ['Developing', 'Optimistic.', 15], ['Beginning', 'Absent.', 6]]),
        rubricRow('Risks', 20, [['Excellent', 'Specific with mitigations.', 20], ['Proficient', 'General.', 16], ['Developing', 'Thin.', 10], ['Beginning', 'None.', 4]]),
      ],
    })),
  ],
  finalExam: exam('Business Management final examination', [
    num('Price $50, variable cost $20, fixed costs $6,000. Break-even units?', 200, 'Margin $30; 6,000/30 = 200.'),
    mc('A fixed cost is one that', ['changes with volume', 'does not change with volume', 'is always zero', 'is paid only once'], 1, 'It is constant across the relevant range.'),
    mc('The Texas LLC filing fee is', ['$25', '$300', '$1,000', 'free'], 1, 'Form 205 is $300.'),
    mc('A single-member LLC is by default', ['a C corporation', 'disregarded for federal income tax', 'a partnership', 'a nonprofit'], 1, 'It is disregarded unless it elects otherwise.'),
    mc('An assumed name filing', ['creates exclusive trademark rights', 'provides notice of the name used', 'creates an LLC', 'replaces a sales tax permit'], 1, 'It gives notice only.'),
    short('Explain why an LLC does not eliminate all personal risk for its owner.', 'Model: Limited liability generally shields members from the entity’s debts, but owners can still be personally liable for their own torts or misconduct, for personal guarantees they sign, for unpaid taxes in some cases, and if the entity is not kept separate so that courts disregard it. Insurance and careful contracts remain necessary.', ['Names limits of limited liability.', 'Mentions guarantees or personal conduct.', 'Recommends insurance or separation.'], 10),
  ]),
};

export const cteHealth: Course = {
  id: 'hs-cte-health',
  title: 'Health Science Theory (CTE)',
  subject: 'cte',
  grade: 11,
  credits: 1,
  semesters: 2,
  description:
    'An introduction to health careers, medical terminology, infection control, vital signs, ethics, and patient communication. Supports the Public Services endorsement pathway.',
  essentialQuestions: ['What makes a health care workplace safe?', 'How do ethics shape clinical decisions?'],
  teks: [teks('19 TAC ch. 127, Health Science', 'Health care systems; terminology; safety and infection control; vital signs; ethics and legal responsibilities; communication; employability.')],
  weights: HIGH_WEIGHTS,
  units: [
    unit('u1', 'Careers, terminology, and safety', 'Precision in language protects patients.', [
      lesson({
        id: 'ctehealth-u1-l1',
        title: 'Terminology, hand hygiene, and vital signs',
        minutes: 50,
        objectives: ['Decode common medical prefixes and suffixes.', 'Describe standard precautions and normal adult vital ranges.'],
        sections: [
          section('Terminology', [
            'Prefixes: brady- (slow), tachy- (fast), hyper- (high), hypo- (low). Roots: cardi- (heart), pulmon- (lung), derm- (skin). Suffixes: -itis (inflammation), -ectomy (surgical removal), -ology (study of). Bradycardia means slow heart rate; dermatitis means skin inflammation.',
            'Accurate terminology prevents ambiguity. “Patient reports chest pain radiating to the left arm” conveys more than “patient feels bad.”',
          ]),
          section('Safety and vital signs', [
            'Hand hygiene is the single most effective infection-control measure. Standard precautions treat all blood and body fluids as potentially infectious and require gloves and other PPE as indicated. Sharps go in rigid containers; never recap a used needle by hand.',
            'Typical resting adult ranges: heart rate 60–100 beats per minute, respiratory rate 12–20 breaths per minute, blood pressure around 120/80 mmHg, temperature about 37 °C (98.6 °F), oxygen saturation 95–100% on room air. Ranges vary by individual and condition; abnormal values are reported, not diagnosed, by unlicensed personnel.',
          ]),
        ],
        example: {
          prompt: 'A patient has a heart rate of 48 and a temperature of 39 °C. Describe both using terminology.',
          steps: ['Heart rate below 60 = bradycardia.', 'Temperature 39 °C is above normal = fever/hyperthermia.', 'Report to the supervising clinician rather than acting independently.'],
          answer: 'Bradycardia and fever; report both.',
        },
        practice: [
          mc('“-itis” means', ['removal', 'inflammation', 'study of', 'slow'], 1, 'It denotes inflammation.'),
          mc('The most effective infection-control measure is', ['gloves only', 'hand hygiene', 'masks only', 'isolation'], 1, 'Hand hygiene is foundational.'),
        ],
      }),
    ], quiz('Unit 1 quiz: foundations', [
      mc('Tachycardia means', ['slow heart rate', 'fast heart rate', 'no heart rate', 'irregular rhythm'], 1, 'Tachy- means fast.'),
      mc('A normal adult resting respiratory rate is about', ['4–8', '12–20', '30–40', '50–60'], 1, '12–20 breaths per minute is typical.'),
      mc('Standard precautions require treating', ['only known infections as contagious', 'all blood and body fluids as potentially infectious', 'only blood as infectious', 'nothing as infectious'], 1, 'Universal precaution is the principle.'),
    ]), project({
      title: 'Career profile',
      prompt: 'Profile one health career: education, licensure or certification, typical duties, salary range from a government source, and one ethical challenge.',
      deliverable: 'A two-page profile with citations.',
      guidance: ['Use the Bureau of Labor Statistics or a Texas licensing board.', 'Distinguish certification from licensure.', 'Describe an ethical dilemma, not a task.'],
      rubric: [
        rubricRow('Accuracy', 35, [['Excellent', 'Accurate requirements and data.', 35], ['Proficient', 'Minor errors.', 28], ['Developing', 'Vague.', 18], ['Beginning', 'Inaccurate.', 7]]),
        rubricRow('Ethical analysis', 30, [['Excellent', 'Specific dilemma with reasoning.', 30], ['Proficient', 'Reasonable.', 24], ['Developing', 'Generic.', 15], ['Beginning', 'None.', 6]]),
        rubricRow('Sources', 25, [['Excellent', 'Government or board sources cited.', 25], ['Proficient', 'Cited.', 20], ['Developing', 'Weak.', 12], ['Beginning', 'None.', 5]]),
        rubricRow('Presentation', 10, [['Excellent', 'Clear.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
    unit('u2', 'Ethics and communication', 'Consent, privacy, and honesty are not optional.', [
      lesson({
        id: 'ctehealth-u2-l1',
        title: 'Consent, privacy, and difficult conversations',
        minutes: 45,
        objectives: ['Explain informed consent and confidentiality.', 'Use plain language with a patient.'],
        sections: [
          section('Ethics', [
            'Informed consent requires capacity, disclosure of risks and alternatives, understanding, and voluntary choice. HIPAA governs protected health information held by covered entities; minimum necessary access and need-to-know apply. Discussing a patient’s condition in a hallway is a privacy breach even without naming them.',
            'Ethical principles: autonomy (respect choice), beneficence (act for benefit), nonmaleficence (avoid harm), justice (fair treatment). These conflict in real cases, which is why ethics committees exist.',
          ]),
          section('Communication', [
            'Use plain language, check understanding with teach-back (“Can you tell me how you will take this?”), and avoid jargon. When a patient is upset, acknowledge the emotion before explaining facts.',
          ]),
        ],
        example: {
          prompt: 'A family member asks for a patient’s test results. What do you do?',
          steps: ['Confirm whether the patient has authorized disclosure.', 'If not, decline politely and explain privacy rules.', 'Offer to ask the patient whether they want to share.'],
          answer: 'Protect confidentiality unless authorization exists.',
        },
        practice: [
          mc('Informed consent requires', ['a signature only', 'capacity, disclosure, understanding, and voluntariness', 'a family member’s approval', 'a court order'], 1, 'All four elements are required.'),
          mc('Teach-back checks', ['the patient’s hearing', 'whether the patient understood', 'the chart', 'insurance'], 1, 'It confirms comprehension.'),
        ],
      }),
    ], quiz('Unit 2 quiz: ethics', [
      mc('Autonomy means', ['doing what the clinician thinks best', 'respecting the patient’s choices', 'avoiding all risk', 'fair distribution'], 1, 'It respects self-determination.'),
      mc('Sharing patient information without authorization is', ['acceptable if the person is family', 'a privacy breach', 'required by law', 'good communication'], 1, 'Authorization is required.'),
      mc('Nonmaleficence means', ['doing good', 'avoiding harm', 'fairness', 'truth telling'], 1, 'It is the duty to avoid harm.'),
    ]), project({
      title: 'Ethics case analysis',
      prompt: 'Analyze a clinical ethics scenario using autonomy, beneficence, nonmaleficence, and justice. Recommend a course of action and explain the trade-offs.',
      deliverable: 'A 500-word analysis with a clear recommendation.',
      guidance: ['Identify the conflict, not just the facts.', 'Consider all stakeholders.', 'Recommend a process, not only an outcome.'],
      rubric: [
        rubricRow('Identification of conflict', 30, [['Excellent', 'Clear ethical tension.', 30], ['Proficient', 'Reasonable.', 24], ['Developing', 'Descriptive.', 15], ['Beginning', 'None.', 6]]),
        rubricRow('Application of principles', 35, [['Excellent', 'All four applied accurately.', 35], ['Proficient', 'Most.', 28], ['Developing', 'One.', 18], ['Beginning', 'None.', 7]]),
        rubricRow('Recommendation', 25, [['Excellent', 'Clear with trade-offs.', 25], ['Proficient', 'Plausible.', 20], ['Developing', 'Vague.', 12], ['Beginning', 'None.', 5]]),
        rubricRow('Clarity', 10, [['Excellent', 'Clear.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
  ],
  finalExam: exam('Health Science final examination', [
    mc('Bradycardia means', ['fast heart rate', 'slow heart rate', 'no pulse', 'high blood pressure'], 1, 'Brady- means slow.'),
    mc('Hand hygiene is important because', ['it is required by policy only', 'it is the most effective infection-control measure', 'it replaces gloves', 'it sterilizes equipment'], 1, 'It is foundational to infection control.'),
    mc('Informed consent requires', ['a signature', 'capacity, disclosure, understanding, and voluntariness', 'family approval', 'payment'], 1, 'All four elements are required.'),
    mc('HIPAA protects', ['salary data', 'protected health information', 'parking records', 'school grades'], 1, 'It governs health information privacy.'),
    mc('A normal adult oxygen saturation on room air is about', ['50–60%', '75–85%', '95–100%', '100% only'], 2, '95–100% is typical.'),
    short('Explain how you would confirm that a patient understood discharge instructions.', 'Model: I would ask the patient to explain in their own words how and when to take the medication and what warning signs to watch for. If the explanation is incomplete, I would re-teach using plain language and ask again, involving an interpreter if needed.', ['Uses teach-back.', 'Uses plain language.', 'Plans follow-up.'], 10),
  ]),
};

export const personalFinance: Course = {
  id: 'hs-pfl',
  title: 'Personal Financial Literacy',
  subject: 'personal-finance',
  grade: 11,
  credits: 0.5,
  semesters: 1,
  description:
    'A one-semester course in budgeting, banking, credit, debt, insurance, taxes, and investing, built on current federal and Texas sources. Personal financial literacy is named in Tex. Educ. Code §28.002(a) as enrichment content; this course provides a documented half credit and pairs with the Adult Life Education course for deeper practice.',
  essentialQuestions: ['What does a financial decision cost over time?', 'How do you evaluate a financial product you did not design?'],
  teks: [teks('19 TAC ch. 113, Personal Financial Literacy', 'Income and taxes; budgeting; banking; credit and debt; saving and investing; insurance; major purchases; consumer protection.')],
  weights: HIGH_WEIGHTS,
  units: [
    unit('u1', 'Income, taxes, and budgeting', 'Net pay is the number that matters.', [
      lesson({
        id: 'pfl-u1-l1',
        title: 'From gross pay to a working budget',
        minutes: 50,
        objectives: ['Compute FICA withholding on a paycheck.', 'Build a zero-based monthly budget.'],
        sections: [
          section('Paycheck math', [
            'Gross pay is wages before deductions. FICA is Social Security at 6.2% of wages up to the annual wage base and Medicare at 1.45% with no cap; the 2026 Social Security wage base is $184,500. Federal income tax withholding depends on your Form W-4, not on a flat percentage. Texas has no state personal income tax (Tex. Const. art. VIII, §24-a).',
            'Example: $3,000 gross monthly. Social Security = 6.2% × 3,000 = $186. Medicare = 1.45% × 3,000 = $43.50. FICA total = $229.50 before income tax withholding.',
          ]),
          section('Budgeting', [
            'A zero-based budget assigns every dollar of net income a job: needs, obligations, savings, and wants. Pay yourself first by automating a transfer on payday. An emergency fund of three to six months of essential expenses is a common target, though the right amount depends on income stability.',
            'Track actual spending for a month before setting targets; budgets built on guesses fail quietly.',
          ]),
        ],
        example: {
          prompt: 'Gross monthly pay $3,000. Compute FICA.',
          steps: ['Social Security: 3,000 × 0.062 = 186.', 'Medicare: 3,000 × 0.0145 = 43.50.', 'Total: 229.50.'],
          answer: '$229.50 in FICA before income tax.',
        },
        practice: [
          num('What is 6.2% of $2,500?', 155, '2,500 × 0.062 = 155.'),
          num('What is 1.45% of $2,000?', 29, '2,000 × 0.0145 = 29.'),
        ],
      }),
    ], quiz('Unit 1 quiz: income and budgeting', [
      mc('FICA consists of', ['federal income tax only', 'Social Security and Medicare', 'state tax and sales tax', 'property tax'], 1, 'It funds Social Security and Medicare.'),
      num('What is 6.2% of $4,000?', 248, '4,000 × 0.062 = 248.'),
      mc('A zero-based budget', ['leaves money unassigned', 'assigns every dollar a purpose', 'ignores savings', 'is only for businesses'], 1, 'Every dollar is allocated.'),
    ]), project({
      title: 'Realistic first budget',
      prompt: 'Build a monthly budget for a job you could get now. Use net pay after estimated FICA and income tax, list actual local costs, and include savings.',
      deliverable: 'A spreadsheet with sources for costs and a one-paragraph reflection.',
      guidance: ['Use gross-to-net math, not gross pay.', 'Include irregular costs such as car maintenance.', 'Show the savings rate.'],
      rubric: [
        rubricRow('Income accuracy', 30, [['Excellent', 'Correct net pay with FICA and tax estimate.', 30], ['Proficient', 'Minor error.', 24], ['Developing', 'Uses gross pay.', 15], ['Beginning', 'No math.', 6]]),
        rubricRow('Expense realism', 30, [['Excellent', 'Local, sourced costs.', 30], ['Proficient', 'Plausible.', 24], ['Developing', 'Unrealistic.', 15], ['Beginning', 'Missing.', 6]]),
        rubricRow('Savings and trade-offs', 25, [['Excellent', 'Clear savings plan and trade-offs.', 25], ['Proficient', 'Reasonable.', 20], ['Developing', 'Thin.', 12], ['Beginning', 'None.', 5]]),
        rubricRow('Reflection', 15, [['Excellent', 'Specific and honest.', 15], ['Proficient', 'General.', 12], ['Developing', 'Vague.', 8], ['Beginning', 'None.', 3]]),
      ],
    })),
    unit('u2', 'Credit and debt', 'Interest is rent on money you have not earned yet.', [
      lesson({
        id: 'pfl-u2-l1',
        title: 'Credit reports, scores, and the cost of interest',
        minutes: 50,
        objectives: ['Explain what a credit report contains and how to dispute an error.', 'Compute the total cost of a loan.'],
        sections: [
          section('Credit reporting', [
            'The Fair Credit Reporting Act gives you a free report from each nationwide credit reporting company at least once every 12 months; AnnualCreditReport.com is the federally authorized site. You can dispute inaccurate information with the credit reporting company and with the furnisher; a reporting company generally has 30 days to investigate, and up to 45 in some circumstances.',
            'FICO scores weigh payment history about 35%, amounts owed 30%, length of history 15%, new credit 10%, and credit mix 10%. These are category weights, not a formula you can compute exactly. Paying on time and using a modest share of available credit matter more than closing old accounts.',
          ]),
          section('The cost of borrowing', [
            'Simple interest: I = P × r × t. A $5,000 loan at 8% for 3 years costs 5,000 × 0.08 × 3 = $1,200 in simple interest. Most consumer loans compound and amortize, so the total interest is lower than simple interest on the full principal because the balance declines.',
            'A credit card charging 24% annual interest on a $1,000 balance carried for a year costs about $240 if no payments are made, and more with fees. Minimum payments stretch repayment for years. The annual percentage rate (APR) includes fees and is the number to compare.',
          ]),
        ],
        example: {
          prompt: 'A $5,000 loan at 8% simple interest for 3 years: what is the total interest?',
          steps: ['I = P r t.', '5,000 × 0.08 × 3 = 1,200.'],
          answer: '$1,200.',
        },
        practice: [
          num('What is the simple interest on $2,000 at 5% for 2 years?', 200, '2,000 × 0.05 × 2 = 200.'),
          mc('A free credit report is available from', ['any bank', 'AnnualCreditReport.com', 'a credit repair company', 'social media'], 1, 'It is the federally authorized site.'),
        ],
      }),
    ], quiz('Unit 2 quiz: credit', [
      mc('The largest FICO category weight is', ['amounts owed', 'payment history', 'length of history', 'credit mix'], 1, 'Payment history is about 35%.'),
      num('What is 24% annual interest on $1,000 for one year?', 240, '1,000 × 0.24 = 240.'),
      mc('A dispute with a credit reporting company generally must be investigated within', ['7 days', '30 days', '90 days', 'one year'], 1, 'Generally 30 days, up to 45 in some cases.'),
    ]), project({
      title: 'Loan comparison',
      prompt: 'Compare three auto loan offers for the same vehicle: APR, term, monthly payment (use a calculator and show inputs), and total interest. Recommend one and explain the trade-off.',
      deliverable: 'A comparison table with calculations and a recommendation.',
      guidance: ['Use the same loan amount for all three.', 'Compute total interest, not just the payment.', 'Explain the risk of a longer term.'],
      rubric: [
        rubricRow('Comparison accuracy', 40, [['Excellent', 'Correct payments and total interest.', 40], ['Proficient', 'Minor error.', 32], ['Developing', 'Payment only.', 20], ['Beginning', 'Incorrect.', 8]]),
        rubricRow('Recommendation', 30, [['Excellent', 'Trade-offs explained.', 30], ['Proficient', 'Reasonable.', 24], ['Developing', 'Unsupported.', 15], ['Beginning', 'None.', 6]]),
        rubricRow('Risk discussion', 20, [['Excellent', 'Term and affordability risks.', 20], ['Proficient', 'Basic.', 16], ['Developing', 'Thin.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Clarity', 10, [['Excellent', 'Clear.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
    unit('u3', 'Insurance, investing, and consumer protection', 'Protection and growth are different jobs.', [
      lesson({
        id: 'pfl-u3-l1',
        title: 'Insurance basics and compound growth',
        minutes: 50,
        objectives: ['Explain deductible, premium, and coverage limits.', 'Compute compound growth over time.'],
        sections: [
          section('Insurance', [
            'A premium is what you pay for coverage; a deductible is what you pay before insurance pays; a coverage limit is the maximum the policy pays. Renters insurance covers a tenant’s belongings and liability, not the building — the landlord’s policy covers the structure. Standard homeowners and renters policies generally exclude flood damage, which requires separate coverage. Texas wind and hail claims are common and can raise premiums.',
            'Insurance is for losses you cannot absorb, not for small expenses. A very high deductible lowers the premium but can leave you exposed.',
          ]),
          section('Investing', [
            'Compound growth: A = P(1 + r/n)^(nt). $1,000 at 7% compounded annually for 10 years is 1,000(1.07)¹⁰ ≈ $1,967.15. Time matters more than a small difference in rate for young investors.',
            'Diversification reduces company-specific risk but not market risk. Fees compound against you: a 1% annual fee can consume a large share of returns over decades. Investments can lose value; only insured deposits are protected, and FDIC insurance covers up to $250,000 per depositor, per insured bank, per ownership category.',
          ]),
        ],
        example: {
          prompt: '$1,000 at 7% compounded annually for 10 years. Find the balance.',
          steps: ['A = 1000(1.07)^10.', '1.07^10 ≈ 1.967151.', 'A ≈ 1,967.15.'],
          answer: 'About $1,967.15.',
        },
        practice: [
          num('$1,000 at 5% compounded annually for 2 years. Round to the nearest dollar.', 1103, '1000 × 1.05² = 1,102.50, about $1,103.'),
          mc('A deductible is', ['the monthly premium', 'what you pay before insurance pays', 'the coverage limit', 'a tax'], 1, 'It is your share before coverage begins.'),
        ],
      }),
    ], quiz('Unit 3 quiz: protection and growth', [
      mc('Renters insurance covers', ['the building', 'the tenant’s belongings and liability', 'flood damage always', 'the landlord’s mortgage'], 1, 'It covers the tenant, not the structure.'),
      mc('FDIC insurance covers deposits up to', ['$10,000', '$100,000', '$250,000 per depositor, per bank, per ownership category', 'unlimited'], 2, 'That is the standard coverage limit.'),
      num('$2,000 grows 10% compounded annually for one year. What is the balance?', 2200, '2,000 × 1.10 = 2,200.'),
    ]), project({
      title: 'Financial protection plan',
      prompt: 'For a realistic young adult scenario, choose renters or auto insurance coverage, set a deductible, and explain the trade-off. Then project $100/month invested at 6% for 30 years.',
      deliverable: 'A one-page plan with calculations and reasoning.',
      guidance: ['Use a real quote or published average and cite it.', 'Show the compound growth formula and result.', 'Explain why the deductible is affordable.'],
      rubric: [
        rubricRow('Coverage reasoning', 35, [['Excellent', 'Coverage matched to risk and budget.', 35], ['Proficient', 'Reasonable.', 28], ['Developing', 'Generic.', 18], ['Beginning', 'None.', 7]]),
        rubricRow('Calculations', 30, [['Excellent', 'Correct compound growth.', 30], ['Proficient', 'Minor error.', 24], ['Developing', 'Formula error.', 15], ['Beginning', 'Missing.', 6]]),
        rubricRow('Trade-off explanation', 25, [['Excellent', 'Clear premium/deductible trade-off.', 25], ['Proficient', 'Basic.', 20], ['Developing', 'Vague.', 12], ['Beginning', 'None.', 5]]),
        rubricRow('Sources', 10, [['Excellent', 'Cited.', 10], ['Proficient', 'Present.', 8], ['Developing', 'Weak.', 5], ['Beginning', 'None.', 2]]),
      ],
    })),
  ],
  finalExam: exam('Personal Financial Literacy final examination', [
    num('What is 6.2% of $3,000?', 186, '3,000 × 0.062 = 186.'),
    num('What is the simple interest on $1,500 at 6% for 2 years?', 180, '1,500 × 0.06 × 2 = 180.'),
    mc('Texas personal income tax is', ['graduated', 'prohibited by the state constitution', 'flat at 5%', 'set by counties'], 1, 'Tex. Const. art. VIII, §24-a prohibits it.'),
    mc('A deductible is', ['a monthly payment', 'the amount you pay before insurance pays', 'a coverage limit', 'a tax'], 1, 'It is your initial share.'),
    num('$1,000 at 6% compounded annually for 2 years. Round to the nearest dollar.', 1124, '1,000 × 1.1236 = 1,123.60, about $1,124.'),
    short('Explain why a longer car loan can be more expensive even when the monthly payment is lower.', 'Model: A longer term spreads principal over more months, so interest accrues for longer and total interest rises. The lower payment can also encourage borrowing more than necessary, and the car may be worth less than the remaining balance for longer.', ['Explains total interest.', 'Mentions term length.', 'Notes affordability risk.'], 10),
  ]),
};
