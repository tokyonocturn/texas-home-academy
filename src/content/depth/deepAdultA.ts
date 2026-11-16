import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/**
 * Adult Life Education, units 1-4: taxes, work, money, and housing.
 * Adult learners are not grade-scaled, so every lesson is held to the top
 * K-12 prose band (600 words) and the full v2 structure.
 */
export const DEPTH_ADULT_A: Record<string, LessonDepth> = {
  'adult-u1-l1': {
    topics: ['withholding', 'standard deduction', 'refund'],
    objectives: [
      'Trace wages from withholding and FICA through the W-2 to the annual return.',
      'Explain the difference between a marginal rate and an effective rate.',
    ],
    applicationTitle: 'your first January as an employee',
    application:
      'In late January your employer must furnish a W-2, and the figures on it are the ones you will type into a return. Before that, keep every final pay stub of the year: the year-to-date columns should match the W-2 boxes exactly, and a mismatch is much easier to fix in February than in April. If you changed jobs, held two jobs at once, or started a side business, check whether the total withheld is close to the tax on your combined income rather than on each job separately. Adjusting a W-4 mid-year is routine and free; discovering a shortfall at filing time is neither.',
    sections: [
      {
        heading: 'Where every dollar of a paycheck goes',
        paragraphs: [
          'A paycheck has three layers of deduction. Federal income tax withholding is a prepayment toward the tax you will compute on the annual return, sized from the W-4 you filed. FICA is separate and is not a prepayment: 6.2% for Social Security up to the annual wage base and 1.45% for Medicare with no cap, and your employer pays a matching amount that never appears on your stub. State and local deductions depend on where you live; Texas has no individual income tax.',
          'Because withholding is an estimate, the W-2 exists to reconcile it. Box 1 reports taxable wages after pre-tax items such as a traditional 401(k) contribution, Box 2 reports the federal income tax withheld, and Boxes 3 through 6 report Social Security and Medicare wages and the amounts withheld. Learning those boxes once turns a confusing form into a checklist you can verify against your last stub.',
        ],
      },
      {
        heading: 'Marginal rate, effective rate, and why they differ',
        paragraphs: [
          'The marginal rate applies only to the slice of income inside a bracket; the effective rate is total tax divided by total income. A single filer with $30,000 of wages takes the 2025 standard deduction of $15,750, leaving $14,250 taxable. Tax is 10% of the first $11,925, or $1,192.50, plus 12% of the remaining $2,325, or $279, for $1,471.50. That is an effective rate of about 4.9% on wages, even though every additional dollar is taxed at 12%.',
          'Confusing the two produces two common errors: believing a raise into a higher bracket shrinks take-home pay, which it cannot, and assuming the marginal rate applies to all income, which overstates the bill. Credits are subtracted after the bracket arithmetic, so a credit reduces tax dollar for dollar while a deduction reduces it by the marginal rate. Knowing which one a provision is tells you what it is actually worth to you.',
        ],
      },
      {
        heading: 'Setting withholding and reading the result',
        paragraphs: [
          'Withholding is set per job, which is why two jobs can each withhold as though they were your only income and still leave a balance due. The same happens when a household has two earners, when a bonus is paid, or when self-employment income arrives without withholding. The fix is a new W-4 with additional withholding, or quarterly estimated payments, chosen by comparing your projected total tax with your projected total withholding.',
          'A refund is not a reward; it is the return of money you lent the government interest-free. A balance due is not a penalty; it means you kept money during the year and owe it now. Aim to land within a few hundred dollars either way, then use the refund or the balance as information about next year’s W-4 rather than as a yearly surprise.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A single filer earns $52,000 of wages in 2025 and takes the standard deduction. Compute taxable income, federal income tax, and employee FICA.',
        steps: [
          'Taxable income = 52,000 − 15,750 = 36,250.',
          'Tax = 10% of 11,925 = 1,192.50.',
          'Remaining taxable = 36,250 − 11,925 = 24,325, taxed at 12% = 2,919.',
          'Federal income tax = 1,192.50 + 2,919 = 4,111.50.',
          'FICA = 6.2% of 52,000 (3,224) + 1.45% of 52,000 (754) = 3,978.',
        ],
        answer: 'About $4,111.50 of federal income tax plus $3,978 of FICA.',
      },
      {
        prompt: 'A W-2 shows $31,200 of wages and $1,900 withheld. Does the employee owe more or get a refund?',
        steps: [
          'Taxable income = 31,200 − 15,750 = 15,450.',
          'Tax = 1,192.50 + 12% of (15,450 − 11,925 = 3,525) = 1,192.50 + 423.',
          'Tax = 1,615.50. Withheld was 1,900.',
          'Refund = 1,900 − 1,615.50 = 284.50, before any credits.',
        ],
        answer: 'A refund of about $284.50, before credits.',
      },
    ],
    terms: [
      ['FICA', 'Social Security and Medicare taxes split between employee and employer'],
      ['Box 1 wages', 'the W-2 figure for wages subject to federal income tax'],
      ['effective tax rate', 'total tax divided by total income, not the bracket rate'],
      ['dependent credit', 'a subtraction from tax for each qualifying dependent claimed'],
      ['estimated payment', 'a quarterly payment of tax on income that has no withholding'],
    ],
    practice: [
      mc('Which W-2 box reports federal income tax withheld?', ['Box 1', 'Box 2', 'Box 3', 'Box 5'], 1, 'Box 2 is federal income tax withheld.'),
      num('What is employee FICA on $40,000 of wages? Round to the nearest dollar.', 3060, '6.2% (2,480) + 1.45% (580) = 3,060.'),
      mc('A refund generally means', ['the IRS paid you interest', 'you over-withheld during the year', 'your tax rate fell to zero', 'you made an error'], 1, 'Withholding exceeded the tax computed.'),
    ],
    exercises: [
      'Collect your last pay stub of the year and match every year-to-date figure to the W-2 boxes; list any that disagree.',
      'Compute the effective federal rate on the $30,000 example and compare it with the 12% marginal rate in one paragraph.',
      'Draft a new W-4 plan for a household with two jobs and explain how you chose the additional withholding.',
      'Write a one-page checklist for keeping tax records through the year, naming each document and where it is stored.',
    ],
    review: [
      {
        prompt: 'Why can two jobs leave a balance due even when each employer withholds correctly?',
        answer: 'Each employer withholds as if its job were the only income, so neither applies the higher brackets your combined income reaches.',
      },
      {
        prompt: 'What is the difference between a tax deduction and a tax credit?',
        answer: 'A deduction reduces taxable income and is worth the marginal rate, while a credit reduces the tax itself dollar for dollar.',
      },
      {
        prompt: 'Why is a large refund not automatically good news?',
        answer: 'It means too much was withheld through the year, so you gave up the use of that money until the return was processed.',
      },
      {
        prompt: 'Which records should you keep to support a return?',
        answer: 'Keep the W-2 and any 1099 forms, final pay stubs, records of deductible payments, and confirmation of any estimated payments made.',
      },
    ],
  },

  'adult-u1-l2': {
    topics: ['self-employment tax', 'estimated payments', 'net earnings'],
    objectives: [
      'Compute net self-employment earnings and the tax owed on them.',
      'Build a quarterly estimated payment schedule from expected income.',
    ],
    applicationTitle: 'your first year freelancing',
    application:
      'Freelance money arrives irregularly, which is exactly why the tax treatment surprises people. A $4,000 payment in March is not $4,000 of spendable income: part of it is owed for self-employment tax and part for income tax, and both come due before the following April unless you pay quarterly. The practical habit is to move a fixed share of every payment into a separate tax account the day it lands, then pay estimates from that account. That single habit prevents the most common and most expensive first-year mistake: spending the whole payment and financing the tax bill with a credit card.',
    sections: [
      {
        heading: 'From gross receipts to net earnings',
        paragraphs: [
          'Self-employment tax is charged on net earnings, not on gross receipts. Ordinary and necessary business expenses are subtracted first: supplies, software, mileage at the standard rate, a home-office share if the space qualifies, and the employer-equivalent portion of health insurance in some cases. Keeping receipts is not optional bookkeeping, because every documented expense reduces both income tax and self-employment tax.',
          'The 15.3% rate mirrors what an employer and employee together pay for FICA: 12.4% Social Security plus 2.9% Medicare, with the Social Security portion applying only up to the annual wage base. Half of the self-employment tax is deductible for income tax, which softens but does not erase the bite. A freelancer who nets $20,000 owes roughly $3,060 before any income tax, and that figure is the one to plan around.',
        ],
      },
      {
        heading: 'Estimated payments without guesswork',
        paragraphs: [
          'Estimated payments are made four times a year using Form 1040-ES. The safe approach is to project the year’s net earnings, compute self-employment tax and income tax on them, subtract any withholding from a W-2 job, and divide the remainder across the four due dates. If income is unpredictable, pay based on what has actually arrived each quarter rather than on an optimistic annual forecast.',
          'Underpayment can trigger a penalty even when a return filed in April shows a refund owed elsewhere, because the penalty is about timing rather than the final total. A mid-year correction is allowed: increase the remaining payments when a large contract lands. Setting aside a fixed percentage of each payment, commonly between 25% and 30% for someone in the lower brackets, keeps the quarterly bill funded without a separate savings scramble.',
        ],
      },
      {
        heading: 'Records that survive an audit',
        paragraphs: [
          'Separate business and personal accounts from the first dollar. A dedicated checking account and a folder per month, physical or digital, make the annual total a matter of addition rather than reconstruction. Mileage needs a log with dates and purposes, not an estimate; meals and gifts have their own limits and documentation rules; equipment may be deducted or depreciated depending on cost and the election made.',
          'A contractor paid $600 or more for services in 2025 should receive a 1099-NEC from the payer, and the threshold rises to $2,000 for payments after 2025 under current law. Income is taxable whether or not a form arrives, and payment apps may issue a 1099-K. Report what you actually earned and reconcile it to the forms rather than waiting for paperwork to define your income.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A freelancer has $28,000 of receipts and $6,000 of documented expenses. Compute net earnings and the self-employment tax before the deduction for half of it.',
        steps: ['Net earnings = 28,000 − 6,000 = 22,000.', 'Self-employment tax = 15.3% of 22,000.', '0.153 × 22,000 = 3,366.', 'Half, 1,683, is deductible for income tax.'],
        answer: 'Net earnings $22,000; self-employment tax about $3,366 before the half deduction.',
      },
      {
        prompt: 'A freelancer expects $30,000 of net earnings and has $2,400 withheld from a part-time job. Estimate the quarterly payment needed for self-employment tax alone.',
        steps: ['Self-employment tax = 0.153 × 30,000 = 4,590.', 'Subtract withholding already covering part of the liability: 4,590 − 2,400 = 2,190.', 'Divide across four payments: 2,190 ÷ 4 = 547.50.', 'Income tax is computed separately and added to each payment.'],
        answer: 'About $547.50 per quarter for self-employment tax, plus the income-tax share.',
      },
    ],
    terms: [
      ['net earnings', 'business receipts minus ordinary and necessary expenses'],
      ['self-employment tax', 'the 15.3% Social Security and Medicare tax on net earnings'],
      ['estimated payment', 'a quarterly prepayment of tax using Form 1040-ES'],
      ['1099-NEC', 'the form a business files for nonemployee compensation of $600 or more'],
      ['quarterly due date', 'one of four annual deadlines for estimated tax payments'],
      ['wage base', 'the annual earnings ceiling above which Social Security tax stops'],
      ['ordinary and necessary expense', 'a cost that is common and helpful in running the business'],
      ['underpayment penalty', 'a charge for paying tax too late during the year'],
    ],
    practice: [
      mc('Self-employment tax is charged on', ['gross receipts', 'net earnings', 'the standard deduction', 'withheld tax'], 1, 'Expenses are subtracted first.'),
      num('What is 15.3% of $12,000 of net earnings? Round to the nearest dollar.', 1836, '12,000 × 0.153 = 1,836.'),
      mc('A 1099-NEC is issued for', ['employee wages', 'nonemployee compensation of $600 or more', 'rent paid to a landlord', 'bank interest'], 1, 'It reports contractor payments.'),
    ],
    exercises: [
      'List every business expense you or a family member incurred in the last month and total the deductible share.',
      'Build a four-row estimated payment calendar with amounts based on a realistic annual net-earnings forecast.',
      'Write the sentence you would use to explain to a new freelancer why a $4,000 payment is not $4,000 of spending money.',
      'Start a mileage log for one week with dates, destinations, and business purposes.',
    ],
    review: [
      {
        prompt: 'Why does a documented expense reduce two different taxes?',
        answer: 'It lowers net earnings, so it reduces both the income tax computed on that income and the self-employment tax charged on net earnings.',
      },
      {
        prompt: 'How should a freelancer with irregular income size quarterly payments?',
        answer: 'Project net earnings from what has actually arrived, compute the tax on it, subtract withholding, and divide the remainder across the remaining due dates.',
      },
      {
        prompt: 'What makes a mileage log usable if the return is questioned?',
        answer: 'It records dates, destinations, miles, and business purpose at the time of travel, so the total can be verified rather than estimated.',
      },
      {
        prompt: 'Why is income taxable when no 1099 arrives?',
        answer: 'The obligation follows the income, not the paperwork; a payer that fails to file a form does not make the payment tax-free.',
      },
    ],
  },

  'adult-u2-l1': {
    topics: ['résumé', 'behavioral interview', 'at-will'],
    objectives: [
      'Build a résumé section that passes both software screening and a human read.',
      'Answer a behavioral question with a complete situation-task-action-result story.',
    ],
    applicationTitle: 'applying for a first real job',
    application:
      'A first job application usually takes ninety minutes and decides whether you get thirty minutes of interview. Spend the time on the top third of the page: the summary line if you use one, the most relevant experience, and the skills that match the posting word for word where honest. Save the file as a PDF named with your name so it opens correctly and is easy to find in a folder of applications. Keep a copy of every version you send, with the date, because the version the employer has is the one you will be asked about.',
    sections: [
      {
        heading: 'What screening actually removes',
        paragraphs: [
          'Applications fail for boring reasons: a phone number with a typo, a file that will not open, a blank field where a date belongs, or a résumé that never mentions the words in the posting. Software matching is literal, so if the listing says “inventory counts” and your résumé says “stock work,” the match may be missed. Use the posting’s vocabulary where it is accurate, and never adopt a term for experience you do not have.',
          'A bullet earns its space by naming an action and a result. “Handled money” says little; “balanced a cash drawer of up to $2,000 nightly with no shortages over eight months” says what you did, at what scale, with what outcome. If you lack paid experience, the same structure works for volunteering, family responsibilities, coursework, and athletics, as long as every number is true and you can explain it in an interview.',
        ],
      },
      {
        heading: 'Interviews as evidence, not performance',
        paragraphs: [
          'Behavioral questions ask for a specific past event, so prepare four or five stories you can adapt: a conflict, a mistake, a time you learned something quickly, a time you helped a customer, and a time you organized a messy task. For each, fix the situation, your task, the actions you personally took, and the result. Keep each story under two minutes and be ready for the follow-up question about what you would do differently.',
          'Prepare two questions about the work itself, such as how success is measured in the first ninety days or which tasks take the most time. Questions about schedule, training, and pay are legitimate; ask them at the right point, usually when the employer raises them or at the offer stage. In Texas, employment is generally at-will, meaning either side may end it absent a contract or legal exception, but at-will status never licenses unlawful discrimination or retaliation.',
        ],
      },
      {
        heading: 'After the interview',
        paragraphs: [
          'Send a short thank-you note within a day that references one specific thing discussed and restates your interest. It is not flattery; it is a test of whether you follow through. Note the date, the names, and the next step the employer promised, then follow up once, politely, if that date passes without word.',
          'If you are not selected, ask for one sentence of feedback. Some employers will not answer, but the ones who do often name the exact gap: availability, a missing certification, or thin examples. Treat a rejection as data about the next application rather than a verdict, and keep a simple log of where you applied, when, and what happened.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Rewrite “responsible for the register” as an achievement bullet for a grocery cashier.',
        steps: [
          'Name the action: balanced, counted, reconciled.',
          'Add scale: dollar amount per shift and duration.',
          'Add a verifiable result: shortage record or accuracy rate.',
        ],
        answer: 'Balanced a cash drawer of up to $2,000 nightly for eight months with no shortages, and trained two new cashiers on closing procedure.',
      },
      {
        prompt: 'Answer “tell me about a time you handled a conflict” for a group project where a teammate missed deadlines.',
        steps: [
          'Situation and task: a four-person project with a teammate missing two drafts.',
          'Action: asked what was blocking them, split the remaining work, set a written schedule.',
          'Result: the project was submitted on time and the teammate delivered their section.',
        ],
        answer: 'A specific story with the action you took and a result you can verify.',
      },
    ],
    terms: [
      ['achievement bullet', 'a résumé line naming an action, its scale, and its result'],
      ['applicant tracking system', 'software that screens and ranks applications by keywords'],
      ['behavioral question', 'an interview question asking for a specific past example'],
      ['STAR method', 'answering with situation, task, action, and result'],
      ['at-will employment', 'either party may end employment absent a contract or legal exception'],
      ['tailoring', 'rewriting the top of a résumé to match a specific posting'],
      ['follow-up', 'a brief, dated message after an interview or application'],
      ['reference check', 'an employer contacting people who can verify your work'],
    ],
    practice: [
      mc('A strong achievement bullet includes', ['a personality description', 'an action, scale, and result', 'a salary figure', 'a hobby'], 1, 'Action plus evidence.'),
      mc('An applicant tracking system primarily matches', ['handwriting', 'keywords from the posting', 'references', 'cover-letter length'], 1, 'It screens on terms.'),
      mc('At-will employment in Texas does not permit', ['resignation without notice', 'unlawful discrimination or retaliation', 'schedule changes', 'probation periods'], 1, 'Legal protections still apply.'),
    ],
    exercises: [
      'Rewrite four of your own experience lines as achievement bullets with a verb, a scale, and a result.',
      'Write out two behavioral stories in STAR form and time yourself telling each in under two minutes.',
      'Take one real job posting and mark every term you can honestly reuse in your résumé.',
      'Draft the thank-you note you would send after an interview, referencing one specific detail.',
    ],
    review: [
      {
        prompt: 'Why do literal keywords matter on a résumé?',
        answer: 'Screening software matches the posting’s exact terms, so an accurate but differently worded line can be filtered out before a person reads it.',
      },
      {
        prompt: 'What makes a behavioral answer credible?',
        answer: 'A specific event with the actions you personally took and a result you can describe, rather than a general description of how you usually work.',
      },
      {
        prompt: 'What does at-will employment actually allow?',
        answer: 'Either party may end the relationship without notice or cause, unless a contract or a legal exception such as anti-discrimination law applies.',
      },
      {
        prompt: 'How should you use a rejection?',
        answer: 'Ask for one sentence of feedback, log what happened, and fix the specific gap it names before the next application.',
      },
    ],
  },

  'adult-u2-l2': {
    topics: ['overtime', 'pay stub', 'unemployment'],
    objectives: [
      'Reconstruct gross pay from hours, rate, and the overtime rule.',
      'Explain what a Texas unemployment claim requires week by week.',
    ],
    applicationTitle: 'the week your hours jump',
    application:
      'Hourly work makes pay predictable until it is not: a holiday, a double shift, or a week covering for someone who quit can push you past forty hours. Check the stub for that week rather than the month, because overtime is calculated per workweek, not per pay period. If the stub shows forty-six hours at the regular rate, you are owed the extra half-time for six hours. Raise it in writing with the dates and the hours, keep the stub, and ask payroll to correct the next check; most errors are clerical and get fixed quickly when the record is clear.',
    sections: [
      {
        heading: 'The arithmetic of a workweek',
        paragraphs: [
          'Under the Fair Labor Standards Act, covered nonexempt employees generally receive at least one and a half times the regular rate for hours over forty in a workweek. The regular rate is not always the base wage: nondiscretionary bonuses and some differentials are included, which is why a production bonus can raise the overtime rate. Hours are counted per workweek, so a short week cannot offset a long one unless the employer uses a lawful alternative schedule.',
          'Pay stubs show hours, rate, gross pay, deductions, and net pay. FICA takes 6.2% for Social Security up to the annual wage base and 1.45% for Medicare, and federal income tax withholding follows the W-4. If the gross pay on the stub does not match hours times rate plus the overtime premium, the stub is the evidence you need: photograph it, note the pay period, and ask for the calculation in writing.',
        ],
      },
      {
        heading: 'Unemployment is insurance, not charity',
        paragraphs: [
          'Texas unemployment insurance is funded by employer contributions; nothing is deducted from your pay. Eligibility generally requires losing work through no fault of your own, meeting base-period wage requirements, being able and available for full-time work, registering on WorkInTexas.com, and completing required work-search activities with a verifiable log. Quitting without good cause or discharge for misconduct can disqualify a claim.',
          'Claims are filed by week, and each week requires an active job search and honest answers about earnings. Part-time or gig earnings usually reduce the benefit rather than eliminate it. Benefits are taxable income for federal purposes, and the benefit year runs fifty-two weeks. Keeping a simple log of employers contacted, dates, and outcomes is the difference between a smooth claim and a disputed one.',
        ],
      },
      {
        heading: 'When a paycheck is wrong',
        paragraphs: [
          'Raise pay errors promptly and in writing, with the pay period, the hours worked, and the amount you believe is missing. Start with the supervisor or payroll, then escalate inside the company. Texas has no state agency that investigates unpaid wages for most private employees, so the federal route matters: the U.S. Department of Labor Wage and Hour Division can investigate minimum wage and overtime complaints, and it can recover back wages.',
          'Keep your own records of hours from the first day of work. A notebook with start and end times, or screenshots of a scheduling app, is far stronger than a reconstruction months later. Do not wait until you leave the job: claims have time limits, and employers are more able to correct a recent week than a year of them.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'An employee earns $14 per hour and works 47 hours in one workweek. Compute gross pay.',
        steps: ['Regular pay: 40 × 14 = 560.', 'Overtime rate: 14 × 1.5 = 21.', 'Overtime hours: 7 × 21 = 147.', 'Gross pay: 560 + 147 = 707.'],
        answer: '$707 of gross pay for that week.',
      },
      {
        prompt: 'A stub shows 84 hours at $13 for a two-week period with no overtime line, and the employee worked 48 hours in the first week and 36 in the second. What is owed?',
        steps: ['Week 1: 40 × 13 = 520, plus 8 × 19.50 = 156, total 676.', 'Week 2: 36 × 13 = 468.', 'Correct gross = 676 + 468 = 1,144.', 'Stub gross = 84 × 13 = 1,092, so 52 is missing.'],
        answer: '$52 of overtime premium is missing for week one.',
      },
    ],
    terms: [
      ['workweek', 'a fixed, recurring 168-hour period used for overtime'],
      ['regular rate', 'the hourly rate including certain bonuses and differentials'],
      ['gross pay', 'total earnings before any taxes or other deductions'],
      ['net pay', 'take-home pay after taxes and other deductions'],
      ['base period', 'the prior quarters whose wages determine unemployment eligibility'],
      ['work search', 'documented weekly job-search activity required for benefits'],
      ['wage claim', 'a formal complaint that wages are owed and unpaid'],
      ['nonexempt employee', 'a worker entitled to minimum wage and overtime protections'],
    ],
    practice: [
      mc('Overtime under the FLSA is based on', ['hours per pay period', 'hours over 40 in a workweek', 'hours over 8 in a day', 'the monthly total'], 1, 'It is a weekly test.'),
      num('At $16 per hour with 44 hours, what is gross pay? Round to the nearest dollar.', 736, '40 × 16 = 640; 4 × 24 = 96; total 736.'),
      mc('Texas unemployment benefits are funded by', ['employee payroll deductions', 'employer contributions', 'the federal income tax', 'sales tax'], 1, 'Employers fund the program.'),
    ],
    exercises: [
      'Take a real or sample pay stub and verify gross pay from hours, rate, and any overtime premium.',
      'Write a one-paragraph written request to correct an overtime error, including dates and the amount owed.',
      'Build a two-week work-search log with employer, date, contact method, and result for each entry.',
      'List the deductions on a pay stub and mark each as statutory, elective, or employer-provided.',
    ],
    review: [
      {
        prompt: 'Why must overtime be checked per workweek rather than per pay period?',
        answer: 'The legal test is hours over forty in each workweek, so a long week and a short week in the same period do not cancel out.',
      },
      {
        prompt: 'What does a Texas unemployment claimant have to do each week?',
        answer: 'Be able and available for full-time work, complete and document the required work searches, and report any earnings accurately.',
      },
      {
        prompt: 'Which agency can investigate an unpaid overtime claim for a private employee?',
        answer: 'The U.S. Department of Labor Wage and Hour Division, which enforces the Fair Labor Standards Act and can recover back wages.',
      },
      {
        prompt: 'What records should you keep from the first day of a job?',
        answer: 'Your own record of start and end times each day plus pay stubs, because reconstructing hours later is far weaker evidence.',
      },
    ],
  },

  'adult-u3-l1': {
    topics: ['checking account', 'emergency fund', 'budget'],
    objectives: [
      'Match each account to the job it does in a household cash flow.',
      'Build a monthly budget that absorbs an irregular expense without borrowing.',
    ],
    applicationTitle: 'the month the car needs brakes',
    application:
      'A budget is tested by the month something breaks, not by the month everything goes right. Suppose the brakes cost $420 and the checking balance is $610 with rent still due. The plan that works is the one written before the bill: a sinking fund for car maintenance, funded monthly, or a small emergency fund that can be refilled over two months. The plan that fails is the one that treats the emergency as evidence the budget does not work, when it is actually the reason the irregular line exists.',
    sections: [
      {
        heading: 'Accounts as tools, not trophies',
        paragraphs: [
          'A checking account handles the month: rent, utilities, groceries, and card payments. A savings account holds money that is not for this month: the emergency fund, a sinking fund for car repairs, and short-term goals. Keeping them separate is not bureaucratic fussiness; it prevents the emergency fund from being spent because it happened to be visible in the same balance as the rent money.',
          'Compare accounts on total cost rather than headline yield. Monthly maintenance fees, minimum balance requirements, ATM fees, and overdraft fees can exceed a small interest rate many times over. Insured deposits are protected up to the published limit per depositor, per institution, per ownership category, which is far above what most households keep in cash. Opting out of overdraft coverage means a charge is declined instead of paid with a fee.',
        ],
      },
      {
        heading: 'A budget built from net pay',
        paragraphs: [
          'Start with net pay and subtract obligations in order: housing, utilities, insurance, minimum debt payments, transportation, food, then savings, then discretionary spending. Put savings on payday as an automatic transfer rather than at the end of the month, because whatever is left at the end is usually nothing. A zero-based plan assigns every dollar a job, including a small buffer for the categories that always run over.',
          'The categories that break budgets are the irregular ones: car repairs, annual insurance, school supplies, gifts, and medical copays. Divide each annual cost by twelve and fund it monthly. A household that spends $600 a year on car maintenance should move $50 a month into a sinking fund, so the repair is a transfer rather than a crisis. The emergency fund, typically three to six months of essential expenses, sits behind those planned costs and is used only for what was genuinely unplanned.',
        ],
      },
      {
        heading: 'When income is irregular',
        paragraphs: [
          'Variable income needs a baseline, not an average. Use the lowest recent month as the budget and treat anything above it as surplus to allocate: first to the buffer, then to irregular costs, then to debt, then to goals. This avoids the trap of budgeting on a good month and missing rent in a slow one. A one-month buffer in checking absorbs timing mismatches between when income lands and when bills are due.',
          'Review the budget monthly for ten minutes: compare each category with the plan, note the two largest variances, and change one thing. Tracking every purchase in detail is less useful than knowing which three categories move. The goal is a plan you will actually follow for a year, not a perfect spreadsheet abandoned in February.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Net pay is $2,900. Rent $950, utilities $160, food $400, car payment $240, insurance $120, phone $55, minimum debt $90. Build a budget with a 10% savings target and a $60 monthly sinking fund for car repairs.',
        steps: [
          'Savings target = 10% of 2,900 = 290.',
          'Obligations plus food plus sinking fund = 950 + 160 + 400 + 240 + 120 + 55 + 90 + 60 = 2,075.',
          'Add savings: 2,075 + 290 = 2,365.',
          'Remaining for discretionary spending and buffer = 2,900 − 2,365 = 535.',
        ],
        answer: 'A balanced plan with $535 left for discretionary spending and a buffer.',
      },
      {
        prompt: 'A household earns $3,200 in a good month and $2,400 in a slow one. How should it budget?',
        steps: [
          'Budget fixed costs against the slow month: 2,400.',
          'Keep fixed obligations below that figure; fund irregular costs from the slow-month surplus.',
          'In a 3,200 month, direct the extra 800 to the buffer and sinking funds before discretionary spending.',
        ],
        answer: 'Budget on the slow month and allocate the good-month surplus deliberately.',
      },
    ],
    terms: [
      ['net pay', 'take-home pay after taxes and deductions'],
      ['sinking fund', 'money set aside monthly for a known future expense'],
      ['emergency fund', 'cash reserved for unplanned essential costs'],
      ['overdraft fee', 'a charge for spending more than the account balance'],
      ['FDIC insurance', 'federal protection of bank deposits up to the published limit'],
      ['zero-based budget', 'a plan that assigns every dollar of income a purpose'],
      ['fixed expense', 'a cost that stays roughly the same each month'],
      ['variable expense', 'a cost that changes with use or season'],
    ],
    practice: [
      num('A household budgets $75 a month for a $900 annual insurance premium. How many months does it take to fund the premium?', 12, '900 ÷ 75 = 12.'),
      mc('An emergency fund is meant for', ['planned annual costs', 'unplanned essential expenses', 'investments', 'discretionary spending'], 1, 'It covers the unplanned.'),
      mc('Opting out of overdraft coverage generally means', ['charges are declined instead of paid with a fee', 'no fees ever', 'the bank covers the shortfall', 'higher interest'], 1, 'The transaction is declined.'),
    ],
    exercises: [
      'Write a zero-based budget from your actual net income for one month, including a sinking fund line.',
      'List your three largest irregular annual costs and compute the monthly amount needed to fund each.',
      'Compare two real checking accounts on monthly fee, minimum balance, and overdraft policy; state which you would choose and why.',
      'Set a specific emergency-fund target in dollars based on three months of essential expenses and a date to reach it.',
    ],
    review: [
      {
        prompt: 'Why keep savings in a separate account from checking?',
        answer: 'Separation prevents reserve money from being spent as part of the monthly balance and makes the emergency fund deliberate rather than incidental.',
      },
      {
        prompt: 'How does a sinking fund differ from an emergency fund?',
        answer: 'A sinking fund is planned saving for a known future cost, while an emergency fund covers costs that were genuinely unplanned.',
      },
      {
        prompt: 'Why budget irregular income on the lowest month?',
        answer: 'Fixed obligations must be covered even in a slow month, so budgeting on the low figure prevents a shortfall when income drops.',
      },
      {
        prompt: 'What is the point of comparing total account cost rather than interest rate?',
        answer: 'Fees and minimum-balance requirements usually exceed the interest earned, so the fee structure decides the real cost of the account.',
      },
    ],
  },

  'adult-u3-l2': {
    topics: ['credit report', 'FICO score', 'avalanche'],
    objectives: [
      'Read a credit report for the four errors that most often lower a score.',
      'Compare avalanche and snowball payoff using total interest and behavior.',
    ],
    applicationTitle: 'the denial that starts with a report',
    application:
      'An apartment application is denied and the reason is a collection account you do not recognize. The order of operations matters: request the free reports through the federally authorized site, identify the furnisher, dispute in writing with both the reporting company and the furnisher, and keep copies and dates. Do not pay a debt you do not owe to make a score move, and do not close old accounts out of frustration. A corrected report can update within a month or two of a completed dispute, which is why the application should be paused rather than abandoned.',
    sections: [
      {
        heading: 'What the report contains',
        paragraphs: [
          'A credit report lists accounts with balances and payment history, public records such as judgments where reported, collection accounts, and inquiries. The report does not contain a score; the score is computed from the report by a model such as FICO, which weights payment history about 35%, amounts owed 30%, length of history 15%, new credit 10%, and credit mix 10%. That weighting explains why one late payment can matter more than a small balance.',
          'You are entitled to a free report from each nationwide reporting company at least once every twelve months through AnnualCreditReport.com, the federally authorized site. Review it for accounts you do not recognize, payments marked late that were on time, balances that are wrong, and duplicate collections. Dispute errors with both the reporting company and the furnisher; the reporting company generally has thirty days to investigate, and up to forty-five in some circumstances.',
        ],
      },
      {
        heading: 'Utilization and the score you can control',
        paragraphs: [
          'Amounts owed is the factor most responsive to short-term action. Utilization compares balances with limits, and paying a balance down before a statement closes lowers the reported figure. Someone at 80% utilization can often move several dozen points by paying down a card, while someone already at 5% has little room to gain. Utilization has no memory in most scoring models, so the improvement can appear within one or two reporting cycles.',
          'Payment history is slower and more consequential. A single missed payment can stay for years, so automation is the cheapest insurance: autopay the minimum on every account, then pay more deliberately. Length of history rewards keeping old accounts open, new credit penalizes a burst of applications, and credit mix rewards a record of handling different kinds of credit responsibly. None of these requires carrying a balance, and paying interest to build a score is a bad trade.',
        ],
      },
      {
        heading: 'Choosing a payoff order you will finish',
        paragraphs: [
          'List each debt with balance, rate, and minimum payment. Avalanche targets the highest rate first and minimizes total interest. Snowball targets the smallest balance first and produces earlier wins. The mathematically cheaper plan is avalanche; the plan that gets finished is whichever one the household sustains. A useful compromise is to set every minimum on autopay and direct one fixed extra amount to the chosen target each month.',
          'Avoid new debt while repaying, and treat high-cost products such as payday and auto-title loans as emergencies rather than budgeting tools. If a balance is unmanageable, contact the lender before it goes to collections; a documented hardship arrangement is usually cheaper than a default. Nonprofit credit counseling can help with a plan, but check fees and whether the organization is legitimate before signing anything.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Two debts: $600 at 27% and $2,400 at 12%. Compare the first month of interest and the avalanche order.',
        steps: [
          'Monthly rate on the first: 27% ÷ 12 = 2.25%; interest = 0.0225 × 600 = 13.50.',
          'Monthly rate on the second: 12% ÷ 12 = 1%; interest = 0.01 × 2,400 = 24.',
          'Avalanche order: pay minimums on both, then direct every extra dollar to the 27% debt.',
        ],
        answer: 'Attack the $600 at 27% first; it costs less per month but far more per dollar owed.',
      },
      {
        prompt: 'A card carries $1,500 at 24% APR with a 3% minimum payment. What happens in the first month?',
        steps: ['Monthly rate = 2%; interest = 0.02 × 1,500 = 30.', 'Minimum = 0.03 × 1,500 = 45.', 'Principal reduced = 45 − 30 = 15.', 'At that rate the balance barely moves.'],
        answer: 'Only $15 of principal is paid; the minimum is mostly interest.',
      },
    ],
    terms: [
      ['credit report', 'a record of accounts, payment history, and inquiries'],
      ['FICO score', 'a score computed from report data with weighted factors'],
      ['utilization', 'the share of available credit currently used'],
      ['dispute', 'a written challenge to an item on a credit report'],
      ['collection account', 'a debt transferred to a collector after default'],
      ['avalanche method', 'paying the highest interest rate first'],
      ['snowball method', 'paying the smallest balance first'],
      ['autopay', 'an automatic payment that prevents a missed due date'],
    ],
    practice: [
      mc('The largest FICO factor is', ['credit mix', 'payment history', 'new credit', 'length of history'], 1, 'Payment history is about 35%.'),
      num('What is one month of interest on $1,800 at 18% APR? Round to the nearest dollar.', 27, '18% ÷ 12 = 1.5%; 1,800 × 0.015 = 27.'),
      mc('Avalanche repayment targets', ['the smallest balance', 'the highest interest rate', 'the oldest account', 'the newest account'], 1, 'Highest rate first minimizes interest.'),
    ],
    exercises: [
      'Request your free reports and list every item you cannot verify, with the furnisher named.',
      'Draft a dispute letter for one inaccurate item, including dates and the specific correction requested.',
      'Build a debt table with balance, rate, minimum, and monthly interest for each account you or a family member holds.',
      'Compute the first three months of an avalanche payoff for two debts and total the interest paid.',
    ],
    review: [
      {
        prompt: 'Why does utilization respond faster than payment history?',
        answer: 'Utilization is recalculated from current balances each cycle, while a missed payment stays on the report and affects the score for years.',
      },
      {
        prompt: 'What is wrong with carrying a balance to build credit?',
        answer: 'Interest is a real cost, and on-time payments build history whether or not a balance is carried, so paying interest buys nothing extra.',
      },
      {
        prompt: 'When is snowball the rational choice over avalanche?',
        answer: 'When sustaining the plan is the binding constraint, because clearing a small balance early provides the momentum that keeps the payments going.',
      },
      {
        prompt: 'What should you do first when an application is denied for a report error?',
        answer: 'Get the free reports, identify and dispute the specific item in writing with both the reporting company and the furnisher, and keep copies.',
      },
    ],
  },

  'adult-u4-l1': {
    topics: ['security deposit', 'lease', 'notice to vacate'],
    objectives: [
      'Document a unit so a deposit dispute is decided on evidence.',
      'Sequence a repair request and an eviction response correctly under Texas law.',
    ],
    applicationTitle: 'moving out without losing the deposit',
    application:
      'The deposit is decided by what both sides can prove. On move-in day, photograph every room, the appliances, and any existing damage, with a date visible, and email the set to the landlord so there is a timestamped record. On move-out day, clean to the standard the lease states, photograph again, return every key, and send the forwarding address in writing. If a deduction appears, ask for the itemized list and compare it with your photographs before responding. That sequence costs an hour and resolves most deposit disputes without a filing.',
    sections: [
      {
        heading: 'What a lease actually commits you to',
        paragraphs: [
          'A lease transfers possession for a term in exchange for rent, and it usually adds rules on guests, pets, maintenance, and notice. Read the sections on renewal, early termination, and fees before signing, because those are the terms that cost money later. A lease can be oral in some circumstances, but a written one is far easier to enforce, and Texas requires certain disclosures in writing for matters such as parking, parking permits, and whether a dwelling unit has been used for manufacturing methamphetamine.',
          'Tenant obligations are mostly ordinary: pay rent on time, keep the unit reasonably clean, avoid damage beyond normal wear, and report conditions that need repair. Landlord obligations include making a diligent effort to repair conditions that materially affect health or safety after written notice. Normal wear and tear is not damage, and painting between tenants, worn carpet from ordinary use, and small nail holes are the classic examples.',
        ],
      },
      {
        heading: 'Deposits, itemization, and the clock',
        paragraphs: [
          'Under Texas Property Code §92.103, a landlord generally must return the deposit on or before the thirtieth day after the tenant surrenders the premises. Deductions are allowed for damages and for unpaid rent or other charges under the lease, but not for normal wear and tear (§92.104), and the landlord must provide a written description and itemized list of deductions with the balance. The landlord is not obligated to return anything until the tenant provides a written forwarding address (§92.107).',
          'If the itemization is missing or wrong, the remedy is a written demand that cites the statute and states the amount and the deadline. Keep the demand factual: dates, amounts, and photographs. A landlord who retains a deposit in bad faith can face additional liability under the statute, but the case is built on documents rather than on how unfair the charge feels.',
        ],
      },
      {
        heading: 'Repairs and eviction are procedures',
        paragraphs: [
          'For a condition that materially affects health or safety, §92.056 requires written notice and gives the landlord a reasonable time to repair; seven days is a rebuttable presumption of reasonableness rather than a universal deadline. A second notice may be required if the first was not sent by registered or certified mail. Repair-and-deduct under §92.0561 is conditional and generally capped at one month’s rent or $500, whichever is greater, and the statutory conditions must be satisfied before withholding rent.',
          'Eviction runs through the courts. A notice to vacate is generally at least three days unless the lease says otherwise (§24.005), followed by a suit in justice court, a hearing, and possibly a writ of possession. A landlord may not lock a tenant out, remove doors, or take property without a court order. If a notice arrives, respond in writing, keep the receipt for rent paid, and attend the hearing; a default judgment is far worse than appearing.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Rent is $1,100 and the landlord keeps $640 for “cleaning and paint” with no itemization. What is the strongest response?',
        steps: [
          'Compare the charge with the move-out photographs and the lease standard.',
          'Send a written demand citing §92.103 and §92.104, requesting the itemized list and the balance.',
          'State a deadline and keep proof of delivery; paint between tenants is normally wear, not damage.',
        ],
        answer: 'A dated written demand for itemization and the balance, citing the deposit statutes.',
      },
      {
        prompt: 'A tenant has no hot water for nine days after written notice. What are the next steps?',
        steps: [
          'Confirm the notice was written and dated; send a second by certified mail if needed.',
          'Document the condition daily with photographs or a log.',
          'Check whether the §92.056 conditions for repair-and-deduct are satisfied before withholding rent.',
          'Keep paying rent unless the statutory conditions are clearly met.',
        ],
        answer: 'Document, give proper written notice, and only use statutory remedies once their conditions are met.',
      },
    ],
    terms: [
      ['security deposit', 'money held to cover damage or unpaid rent at move-out'],
      ['normal wear and tear', 'deterioration from ordinary use that cannot be charged to the tenant'],
      ['itemized deduction list', 'the written accounting a landlord must send with a retained deposit'],
      ['forwarding address', 'the written address a tenant must provide to receive the deposit'],
      ['notice to vacate', 'a written demand to leave the premises by a stated date'],
      ['writ of possession', 'a court order authorizing removal after an eviction judgment'],
      ['repair-and-deduct', 'a conditional statutory remedy for unrepaired conditions'],
      ['justice court', 'the Texas court that hears eviction cases'],
    ],
    practice: [
      mc('A tenant who disagrees with the deposit deductions may', ['withhold rent', 'sue in justice court', 'change the locks', 'ignore the itemized notice'], 1, 'The remedy is a court claim, not self-help.'),
      mc('A landlord may deduct for', ['normal wear and tear', 'damage beyond normal wear', 'routine repainting between tenants', 'the tenant’s groceries'], 1, 'Only damage, not wear.'),
      mc('A landlord may remove a tenant’s property without a court order', ['after three days', 'never', 'if rent is late', 'with a text message'], 1, 'A court order is required.'),
    ],
    exercises: [
      'Create a move-in photo checklist covering every room, appliance, and existing defect, with a place for dates.',
      'Write a deposit demand letter for a hypothetical $500 deduction with no itemization, citing the statute.',
      'Draft a repair notice that states the condition, its effect on health or safety, and the requested repair date.',
      'Summarize, in your own words, the sequence from notice to vacate through a court hearing.',
    ],
    review: [
      {
        prompt: 'Why does a written forwarding address matter for a deposit?',
        answer: 'The landlord’s duty to return the deposit is not triggered until the tenant provides a written forwarding address under the statute.',
      },
      {
        prompt: 'What is the difference between damage and normal wear and tear?',
        answer: 'Damage is deterioration beyond ordinary use, such as a hole in a wall, while wear is the expected decline from living in the unit.',
      },
      {
        prompt: 'Why is repair-and-deduct risky without following the statute exactly?',
        answer: 'It is conditional and capped, so withholding rent outside those conditions can expose the tenant to an eviction for nonpayment.',
      },
      {
        prompt: 'What should a tenant do when a notice to vacate arrives?',
        answer: 'Respond in writing, keep rent receipts and the notice, and appear at the hearing, because a default judgment forfeits the chance to contest.',
      },
    ],
  },

  'adult-u4-l2': {
    topics: ['deductible', 'premium', 'sales tax'],
    objectives: [
      'Compare insurance policies on coverage, deductible, and exclusions rather than price.',
      'Compute the total first-year cost of owning a used vehicle in Texas.',
    ],
    applicationTitle: 'insuring a first apartment and a first car',
    application:
      'Two purchases drive most of the insurance decisions a young adult makes, and both punish shopping by price alone. A renters policy with a $2,500 deductible is cheap until a stolen laptop and a burst pipe make the deductible larger than the claim. A car policy with state-minimum liability is cheap until an at-fault crash exceeds the limit, leaving a judgment that follows you for years. Compare quotes on the same coverage limits and deductibles, read the exclusions, and check the insurer’s complaint record before choosing.',
    sections: [
      {
        heading: 'Premium, deductible, and what is excluded',
        paragraphs: [
          'The premium is what you pay for coverage; the deductible is what you pay before the policy responds; the limit is the most the policy will pay. Raising a deductible lowers the premium, but only if you could actually pay that amount after a loss. A policy is a set of promises with exclusions, and the exclusions decide most disputes: standard homeowners and renters policies generally exclude flood, which requires separate coverage, and ordinary wear and maintenance are never insured.',
          'Renters insurance covers personal property and personal liability, not the building, which the landlord insures. Homeowners insurance covers the structure and liability. Auto policies split into liability, collision, and comprehensive, plus uninsured and underinsured motorist coverage. Texas requires liability coverage to register a vehicle, and the state minimums are low enough that many drivers buy more. TDI publishes rate guides and complaint data and does not set rates.',
        ],
      },
      {
        heading: 'The paper cost of a used car',
        paragraphs: [
          'Texas motor vehicle sales and use tax is 6.25%. On a dealer sale, tax is generally based on the sales price less an eligible trade-in. On many private-party purchases, tax is based on the greater of the sales price or 80% of standard presumptive value, which is why a bargain price does not always reduce the tax. The buyer generally applies to transfer the title within thirty days using Form 130-U at the county tax assessor-collector.',
          'Registration, the inspection program replacement fee, and local fees add to the first-year cost. Since January 1, 2025, most noncommercial vehicles no longer require a safety inspection before registration, though emissions inspections still apply in designated counties. Then come the recurring costs: insurance, fuel, maintenance, tires, and repairs. A $9,000 car can cost $3,000 in the first year once tax, title, registration, insurance, and an initial repair are counted, which is why the purchase price is the wrong number to budget against.',
        ],
      },
      {
        heading: 'Deciding what to insure and what to self-insure',
        paragraphs: [
          'Insure what you could not recover from. Liability coverage protects against a claim larger than your savings; collision and comprehensive protect a vehicle whose replacement you could not fund quickly. A high deductible on a low-value car often makes little sense, because the premium saving is small relative to the risk. On a valuable car, the opposite is true.',
          'Read the declarations page and the exclusions, ask what the deductible applies per claim, and confirm whether a claim raises the premium. Keep proof of insurance in the vehicle, update the policy when you move or change vehicles, and never let a lapse happen: driving uninsured in Texas carries fines and can affect future rates. If a claim is denied, ask for the denial in writing and cite the policy language you believe applies.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A private-party truck costs $7,500 and its standard presumptive value is $9,000. Compute the sales tax.',
        steps: ['80% of SPV = 0.8 × 9,000 = 7,200.', 'Tax base = greater of 7,500 and 7,200 = 7,500.', 'Tax = 0.0625 × 7,500 = 468.75.'],
        answer: 'About $468.75 of Texas motor vehicle sales tax.',
      },
      {
        prompt: 'Policy A: $900 premium with a $500 deductible. Policy B: $720 premium with a $2,000 deductible. One $1,600 claim occurs. Which costs less in year one?',
        steps: ['A pays premium plus deductible: 900 + 500 = 1,400.', 'B pays premium plus deductible: 720 + 2,000 = 2,720.', 'B is cheaper only if no claim occurs: 720 versus 900.'],
        answer: 'With one claim, A costs $1,400 and B costs $2,720, so the cheaper premium loses.',
      },
    ],
    terms: [
      ['premium', 'the amount paid for an insurance policy'],
      ['deductible', 'the amount the insured pays before the policy pays'],
      ['exclusion', 'a loss the policy does not cover'],
      ['liability coverage', 'coverage for damage or injury you cause to others'],
      ['standard presumptive value', 'the state reference value used to compute tax on some private sales'],
      ['Form 130-U', 'the Texas application for title and registration transfer'],
      ['comprehensive coverage', 'coverage for theft, weather, and other non-collision losses'],
      ['declarations page', 'the summary of limits, deductibles, and covered vehicles'],
    ],
    practice: [
      num('What is 6.25% of $9,600? Round to the nearest dollar.', 600, '9,600 × 0.0625 = 600.'),
      mc('A standard renters policy generally excludes', ['theft', 'flood damage', 'personal liability', 'personal property'], 1, 'Flood needs separate coverage.'),
      mc('Raising a deductible usually', ['raises the premium', 'lowers the premium and raises your share of a claim', 'removes liability coverage', 'has no effect'], 1, 'You pay less up front.'),
    ],
    exercises: [
      'Get two real auto or renters quotes at identical limits and build a table of premium, deductible, and exclusions.',
      'Price a used vehicle from a listing and compute sales tax, title, registration, and first-year insurance.',
      'Write a one-page comparison of liability-only versus full coverage for a $6,000 car.',
      'Draft the questions you would ask an insurer before buying a policy, including what the deductible applies to.',
    ],
    review: [
      {
        prompt: 'Why is the lowest premium often the most expensive policy?',
        answer: 'A low premium usually comes with a high deductible or narrow limits, so a single claim can cost far more than the premium saved.',
      },
      {
        prompt: 'How is tax computed on a private-party vehicle purchase in Texas?',
        answer: 'Generally on the greater of the sales price or 80% of the standard presumptive value, at the 6.25% motor vehicle rate.',
      },
      {
        prompt: 'What does renters insurance cover that the landlord’s policy does not?',
        answer: 'The tenant’s personal property and personal liability, while the landlord’s policy covers the building itself.',
      },
      {
        prompt: 'Why budget more than the purchase price for a used car?',
        answer: 'Tax, title, registration, insurance, and immediate repairs often add thousands in the first year on top of the price.',
      },
    ],
  },
};
