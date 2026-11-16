import type { Course } from '../../types';
import { ADULT_WEIGHTS } from '../weights';
import { exam, lesson, mc, num, project, quiz, rubricRow, section, short, teks, unit } from '../builders';

/**
 * Adult Life Education: the practical course this program treats as required
 * for graduation planning even though Texas does not mandate it as a credit.
 *
 * Every figure is sourced in src/content/sources.ts and repeated in the lesson
 * with the year it applies to. Tax and benefit figures change; the course tells
 * students to verify before filing or claiming.
 */

export const adultLife: Course = {
  id: 'hs-adulting',
  title: 'Adult Life Education',
  subject: 'adult-education',
  grade: 12,
  credits: 1,
  semesters: 2,
  description:
    'The practical course school usually leaves out: taxes and filing, paychecks and workplace rights, budgeting and credit, renting and insurance, buying a vehicle, starting a business, contracts, civic services, and independent decision-making. Built on current IRS, Department of Labor, Texas Workforce Commission, Texas Comptroller, Texas Department of Insurance, and Texas Property Code sources.',
  essentialQuestions: [
    'What do you actually take home, and what does each deduction buy?',
    'Which adult obligations are legally binding, and how do you read them before signing?',
  ],
  teks: [
    teks('Tex. Educ. Code §28.002(a)(2)(H)', 'Personal financial literacy is part of the enrichment curriculum. This course extends that content into taxes, employment, housing, insurance, and entrepreneurship.'),
    teks('19 TAC ch. 113, Personal Financial Literacy', 'Income and taxes; budgeting; banking; credit; insurance; major purchases; consumer protection.'),
  ],
  weights: ADULT_WEIGHTS,
  project: {
    title: 'Launch portfolio',
    prompt:
      'Assemble a launch portfolio for your first year after high school: a résumé, a realistic monthly budget, a tax estimate, a housing plan with a lease checklist, an insurance plan, and a one-page decision journal describing three choices and their trade-offs.',
    deliverable:
      'A single PDF or binder with six sections, each labeled, dated, and accompanied by a short note on what you verified and where.',
    guidance: [
      'Every number needs a source or a stated assumption.',
      'The budget must start from net pay, not gross pay.',
      'The lease checklist must cite the specific Texas Property Code protections you would rely on.',
      'The decision journal should show alternatives considered, not just the chosen path.',
    ],
    rubric: [
      rubricRow('Accuracy of figures', 30, [
        ['Excellent', 'All figures verified and current, with sources.', 30],
        ['Proficient', 'Minor outdated or unsourced figures.', 24],
        ['Developing', 'Several unsourced figures.', 15],
        ['Beginning', 'Figures invented or inconsistent.', 6],
      ]),
      rubricRow('Completeness', 25, [
        ['Excellent', 'All six sections complete and specific.', 25],
        ['Proficient', 'Five sections complete.', 20],
        ['Developing', 'Three or four sections.', 12],
        ['Beginning', 'Fewer than three.', 5],
      ]),
      rubricRow('Legal and financial reasoning', 25, [
        ['Excellent', 'Obligations and trade-offs explained accurately.', 25],
        ['Proficient', 'Mostly accurate.', 20],
        ['Developing', 'General claims.', 12],
        ['Beginning', 'Inaccurate.', 5],
      ]),
      rubricRow('Decision journal', 20, [
        ['Excellent', 'Alternatives, criteria, and trade-offs explicit.', 20],
        ['Proficient', 'Clear reasoning.', 16],
        ['Developing', 'Describes choice only.', 10],
        ['Beginning', 'Missing.', 4],
      ]),
    ],
  },
  units: [
    unit(
      'u1',
      'Taxes: what is withheld, what is owed',
      'Withholding is a prepayment, not a tax bill.',
      [
        lesson({
          id: 'adult-u1-l1',
          title: 'W-4, W-2, and the 1040',
          minutes: 55,
          objectives: [
            'Explain the purpose of Forms W-4, W-2, and 1040.',
            'Estimate federal income tax and take-home pay for a simple case.',
          ],
          sections: [
            section('The three forms that matter first', [
              'Form W-4 tells your employer how much federal income tax to withhold. It records filing status, dependents, other income, and any extra withholding. Withholding is an estimate: if too little is withheld, you owe at filing; if too much, you get a refund of your own money.',
              'Form W-2 is issued by your employer each January. It reports wages and the Social Security, Medicare, and income tax withheld. Your employer also sends the information to the Social Security Administration, which shares it with the IRS, so mismatches are easy to detect.',
              'Form 1040 is the annual return where you report income, claim the standard deduction or itemized deductions, apply credits, and settle up. For tax year 2025, the standard deduction is $15,750 for a single filer and $31,500 for married filing jointly; for tax year 2026 it is $16,100 and $32,200. Filing thresholds are tied to these figures, and you may need to file even if you are owed a refund.',
            ]),
            section('A simple estimate', [
              'Tax is marginal: only income above each bracket threshold is taxed at the higher rate. For a single filer in tax year 2025, the 10% bracket runs to $11,925 of taxable income, 12% to $48,475, and 22% to $103,350.',
              'Example: $30,000 of wages, single, standard deduction. Taxable income = 30,000 − 15,750 = $14,250. Tax = 10% of 11,925 ($1,192.50) + 12% of the remaining 2,325 ($279) = $1,471.50. FICA is separate: 6.2% Social Security plus 1.45% Medicare.',
            ]),
          ],
          example: {
            prompt: 'Estimate federal income tax for $30,000 of wages, single, taking the standard deduction for tax year 2025.',
            steps: [
              'Taxable income = 30,000 − 15,750 = 14,250.',
              'First 11,925 taxed at 10% = 1,192.50.',
              'Remaining 2,325 taxed at 12% = 279.00.',
              'Total = 1,471.50.',
            ],
            answer: 'About $1,471.50 of federal income tax, before credits, plus FICA.',
          },
          keyTerms: [
            { term: 'Withholding', definition: 'Tax your employer sends to the IRS on your behalf during the year.' },
            { term: 'Marginal bracket', definition: 'The rate applied only to income within that bracket, not to all income.' },
            { term: 'Standard deduction', definition: 'A fixed amount subtracted from income before tax is calculated.' },
          ],
          practice: [
            mc('Form W-4 is used to', ['report wages to the IRS', 'tell an employer how much to withhold', 'file an annual return', 'claim unemployment'], 1, 'It sets withholding.'),
            num('Using the 2025 single brackets, what is the tax on $20,000 of taxable income? Round to the nearest dollar.', 2161, '10% of 11,925 = 1,192.50; 12% of 8,075 = 969; total 2,161.50.'),
          ],
        }),
        lesson({
          id: 'adult-u1-l2',
          title: '1099 income, self-employment, and quarterly taxes',
          minutes: 50,
          objectives: [
            'Distinguish an employee from an independent contractor.',
            'Explain self-employment tax and estimated payments.',
          ],
          sections: [
            section('Employee or contractor', [
              'An employee works under an employer’s direction; the employer withholds income tax and pays half of FICA. An independent contractor controls how the work is done and receives a Form 1099-NEC when a business pays them at least $600 for services in 2025 — the threshold rises to $2,000 for payments made after December 31, 2025, and is indexed after 2026.',
              'A 1099-K reports payments through third-party settlement organizations such as payment apps and marketplaces. The federal threshold is gross payments over $20,000 and more than 200 transactions; payment-card transactions have no threshold. Income is taxable whether or not a form arrives.',
            ]),
            section('Self-employment tax', [
              'Self-employed workers generally owe self-employment tax of 15.3% — 12.4% Social Security plus 2.9% Medicare — on net self-employment earnings, subject to Social Security wage-base rules. Half of that tax is deductible for income tax purposes.',
              'Because no employer withholds, self-employed workers usually make quarterly estimated payments using Form 1040-ES. Underpayment can trigger penalties. Set aside a percentage of each payment as it arrives rather than waiting until April.',
            ]),
          ],
          example: {
            prompt: 'A freelancer nets $20,000. Estimate self-employment tax before deductions.',
            steps: ['15.3% of 20,000 = 3,060.', 'Half (1,530) is deductible for income tax.', 'Income tax is computed separately on net earnings.'],
            answer: 'About $3,060 of self-employment tax, with half deductible.',
          },
          practice: [
            mc('A business must generally issue Form 1099-NEC for services paid at least', ['$10', '$600 for 2025 payments', '$5,000', '$20,000'], 1, 'The 2025 threshold is $600; it becomes $2,000 for payments after 2025.'),
            num('15.3% of $10,000 is', 1530, '10,000 × 0.153 = 1,530.'),
          ],
        }),
      ],
      quiz('Unit 1 quiz: taxes', [
        mc('Withholding is', ['the final tax owed', 'a prepayment of estimated tax', 'a penalty', 'a state tax'], 1, 'It is an estimate collected during the year.'),
        mc('The 2025 standard deduction for a single filer is', ['$12,000', '$15,750', '$16,100', '$31,500'], 1, 'It is $15,750 for 2025 and $16,100 for 2026.'),
        num('What is 6.2% of $40,000?', 2480, '40,000 × 0.062 = 2,480.'),
      ]),
    ),
    unit(
      'u2',
      'Work: getting hired and knowing your rights',
      'A job is a contract with legal protections and limits.',
      [
        lesson({
          id: 'adult-u2-l1',
          title: 'Résumé, application, and interview',
          minutes: 50,
          objectives: [
            'Write achievement statements with verbs and verifiable numbers.',
            'Prepare for a behavioral interview.',
          ],
          sections: [
            section('Documents that survive screening', [
              'Keep a one-page résumé for early-career applications: contact information, a short summary if useful, experience in reverse chronological order, education, and skills. Each bullet should start with a verb and describe a result. “Reconciled a daily cash drawer with no shortages over six months” is stronger than “responsible for register.”',
              'Tailor the top third of the résumé to the posting. Many employers use software to screen keywords, so use the posting’s language where it is accurate. Never claim experience you do not have; interviews and reference checks expose it.',
            ]),
            section('Interviews', [
              'Behavioral questions (“Tell me about a time you handled a conflict”) are answered with a specific situation, the task, the action you took, and the result. Prepare four or five stories you can adapt. Prepare two questions about the work itself.',
              'In Texas, employment is generally at-will: either party may end the relationship with or without notice, absent a contract or a legal exception. At-will does not permit unlawful discrimination or retaliation. Asking about salary is normal; some interview questions (for example, about disability or family plans) are legally risky for employers, and you are not required to answer personal questions unrelated to the job.',
            ]),
          ],
          example: {
            prompt: 'Turn “worked at a grocery store” into two achievement bullets.',
            steps: ['Name the action: stocked, trained, resolved.', 'Add scale: number of items, people, or hours.', 'Add a result only if true.'],
            answer: 'Stocked 120+ cases per shift with a 99% shelf-accuracy audit; trained two new clerks on closing procedures.',
          },
          practice: [
            mc('A strong résumé bullet begins with', ['a noun', 'an action verb', 'an adjective', 'a date'], 1, 'Verbs show ownership.'),
            mc('At-will employment in Texas generally means', ['you cannot be fired without cause', 'either party may end employment absent a contract or legal exception', 'you must give two weeks’ notice', 'only the employer may end it'], 1, 'Either side may end it, subject to legal limits.'),
          ],
        }),
        lesson({
          id: 'adult-u2-l2',
          title: 'Paychecks, overtime, and unemployment',
          minutes: 50,
          objectives: [
            'Read a pay stub and verify overtime.',
            'Explain unemployment insurance eligibility in Texas.',
          ],
          sections: [
            section('Reading a paycheck', [
              'Gross pay minus deductions equals net pay. Statutory deductions include federal income tax withholding and FICA: Social Security at 6.2% up to the annual wage base ($184,500 for 2026) and Medicare at 1.45% with no cap. An additional 0.9% Medicare tax applies to wages above $200,000 for single filers, $250,000 for married filing jointly, and $125,000 for married filing separately.',
              'Under the Fair Labor Standards Act, covered nonexempt employees generally must receive at least 1.5 times their regular rate for hours worked over 40 in a workweek. Overtime is based on hours worked, not on being scheduled on a weekend. The federal minimum wage is $7.25 per hour, effective July 24, 2009; Texas adopts the federal rate by reference.',
            ]),
            section('Unemployment benefits', [
              'Texas unemployment insurance is employer-funded; nothing is deducted from your paycheck. To qualify, you generally must be unemployed or have reduced hours through no fault of your own, meet base-period wage requirements, be able and available for full-time work, register on WorkInTexas.com, and complete required work-search activities with a verifiable log.',
              'The benefit year is 52 weeks. The weekly benefit amount is based on your highest base-period quarter, and for claims effective October 4, 2026 the range is $76 to $619 per week. Benefits are taxable income for federal purposes. Quitting without good cause or being discharged for misconduct can disqualify a claim.',
            ]),
          ],
          example: {
            prompt: 'You earn $15/hour and work 46 hours in a week. Estimate gross pay (no state overtime law applies).',
            steps: ['Regular pay: 40 × 15 = 600.', 'Overtime rate: 15 × 1.5 = 22.50.', 'Overtime pay: 6 × 22.50 = 135.', 'Total: 735.'],
            answer: '$735 gross.',
          },
          practice: [
            num('At $12/hour with 45 hours, what is gross pay?', 570, '40 × 12 = 480; 5 × 18 = 90; total 570.'),
            mc('Texas unemployment benefits are funded by', ['employee payroll deductions', 'employer contributions', 'federal income tax', 'sales tax'], 1, 'The program is employer-funded.'),
          ],
        }),
      ],
      quiz('Unit 2 quiz: work', [
        mc('Overtime under the FLSA is generally', ['1.5 times the regular rate over 40 hours in a workweek', 'double time after 8 hours daily', 'optional', 'only for salaried workers'], 0, 'It applies to hours over 40 in a workweek for covered nonexempt employees.'),
        num('What is 1.45% of $3,200?', 46.4, '3,200 × 0.0145 = 46.40.'),
        mc('To claim Texas unemployment benefits, a claimant generally must', ['be available for full-time work and register on WorkInTexas.com', 'have quit voluntarily', 'refuse offers', 'pay a fee'], 0, 'Availability and registration are ongoing requirements.'),
      ]),
    ),
    unit(
      'u3',
      'Money: budgeting, banking, and credit',
      'Cash flow first; credit second.',
      [
        lesson({
          id: 'adult-u3-l1',
          title: 'Banking, budgeting, and the emergency fund',
          minutes: 50,
          objectives: [
            'Compare checking and savings accounts.',
            'Build a budget from net income.',
          ],
          sections: [
            section('Accounts', [
              'A checking account is for transactions; a savings account is for money you do not plan to spend. Deposits at insured banks are protected by FDIC insurance up to $250,000 per depositor, per insured bank, for each account ownership category. Credit unions have parallel coverage through the NCUSIF.',
              'Watch for monthly maintenance fees, overdraft fees, and minimum balances. Overdraft “protection” is often an expensive short-term loan. Opt out of overdraft coverage if you would rather have a transaction declined.',
            ]),
            section('Budgeting that survives a bad month', [
              'Start with net pay. Cover obligations first (rent, utilities, insurance, minimum debt payments, transportation), then food and essentials, then savings, then discretionary spending. Automate savings on payday so it is not a leftover.',
              'An emergency fund of three to six months of essential expenses is a common target. If that is unreachable now, start with $500 and build. A budget that assumes perfect months will fail; include a line for irregular costs such as car repairs and annual fees.',
            ]),
          ],
          example: {
            prompt: 'Net pay $2,400. Rent $850, utilities $140, food $350, car $220, insurance $110, phone $45, savings target 10%. Is it balanced?',
            steps: ['Savings = 240. Total committed = 850+140+350+220+110+45+240 = 1,955.', 'Remaining = 445 for discretionary and irregular costs.'],
            answer: 'Yes, with $445 unassigned; direct part of it to irregular expenses.',
          },
          practice: [
            num('What is 10% of $2,400?', 240, '0.10 × 2,400 = 240.'),
            mc('FDIC insurance covers deposits up to', ['$25,000', '$100,000', '$250,000 per depositor, per bank, per ownership category', 'unlimited'], 2, 'That is the standard limit.'),
          ],
        }),
        lesson({
          id: 'adult-u3-l2',
          title: 'Credit reports, scores, and getting out of debt',
          minutes: 55,
          objectives: [
            'Obtain and read a free credit report.',
            'Compare debt repayment strategies.',
          ],
          sections: [
            section('Your report and score', [
              'The Fair Credit Reporting Act entitles you to a free report from each nationwide credit reporting company at least once every 12 months through AnnualCreditReport.com, the federally authorized site. Check for accounts you do not recognize, late payments reported incorrectly, and incorrect balances.',
              'Dispute errors with both the credit reporting company and the furnisher. A reporting company generally has 30 days to investigate, and up to 45 days in some circumstances. FICO scores weight payment history about 35%, amounts owed 30%, length of history 15%, new credit 10%, and credit mix 10%.',
            ]),
            section('Debt', [
              'List every debt with balance, interest rate, and minimum payment. Avalanche repayment targets the highest rate first, minimizing total interest. Snowball repayment targets the smallest balance first, which some people sustain better because of early wins. Either works if you keep paying.',
              'Avoid taking on new debt while repaying. A 24% credit card balance is an expensive place to park a purchase; if you cannot pay the statement balance in full, the purchase costs more than the price tag.',
            ]),
          ],
          example: {
            prompt: 'Two debts: $800 at 22% and $2,000 at 9%. Which do you attack first under avalanche?',
            steps: ['Compare interest rates, not balances.', '22% is higher.', 'Pay minimums on both and direct extra to the 22% debt.'],
            answer: 'The $800 at 22%.',
          },
          practice: [
            mc('An avalanche repayment strategy targets', ['the smallest balance', 'the highest interest rate', 'the newest account', 'the largest balance'], 1, 'It minimizes interest.'),
            mc('A credit reporting company generally must investigate a dispute within', ['7 days', '30 days', '6 months', 'one year'], 1, 'Thirty days, up to 45 in some cases.'),
          ],
        }),
      ],
      quiz('Unit 3 quiz: money', [
        mc('FDIC insurance protects', ['investments', 'bank deposits up to the standard limit', 'credit scores', 'rent payments'], 1, 'It insures deposits.'),
        mc('The largest FICO factor is', ['credit mix', 'payment history', 'new credit', 'length of history'], 1, 'Payment history is about 35%.'),
        num('A $1,200 balance at 20% annual interest costs how much for a year with no payments?', 240, '1,200 × 0.20 = 240.'),
      ]),
    ),
    unit(
      'u4',
      'Housing, insurance, and vehicles',
      'The biggest contracts most adults sign are leases, loans, and policies.',
      [
        lesson({
          id: 'adult-u4-l1',
          title: 'Renting in Texas: deposits, repairs, and eviction',
          minutes: 55,
          objectives: [
            'Apply Texas security-deposit rules to a move-out scenario.',
            'Use the repair notice process correctly.',
          ],
          sections: [
            section('Deposits and move-out', [
              'Under Texas Property Code §92.103, a landlord generally must return a security deposit on or before the 30th day after the tenant surrenders the premises. The landlord may deduct damages but not normal wear and tear (§92.104), and must provide a written description and itemized list of deductions with the balance.',
              'The landlord is not obligated to return the deposit until the tenant provides a written forwarding address (§92.107). Photograph the unit at move-in and move-out, keep the lease, and send the forwarding address in writing.',
            ]),
            section('Repairs and eviction', [
              'For a condition that materially affects health or safety, Texas Property Code §92.056 requires written notice and gives the landlord a reasonable time to repair; seven days is a rebuttable presumption of reasonableness, not a universal deadline. A second notice may be required if the first was not sent by registered or certified mail. Repair-and-deduct under §92.0561 is conditional: the deduction is generally capped at one month’s rent or $500, whichever is greater, and the statutory conditions must be met.',
              'Eviction is a court process. A notice to vacate is generally at least three days unless the lease provides otherwise (Property Code §24.005), followed by a suit in justice court, a hearing, and possibly a writ of possession. A landlord may not lock a tenant out or remove property without a court order.',
            ]),
          ],
          example: {
            prompt: 'You move out June 1 and the landlord keeps $300 for “cleaning.” What should you check?',
            steps: ['Was an itemized list provided?', 'Is the charge for ordinary wear and tear?', 'Was your forwarding address in writing?', 'If the charge is improper, request the balance in writing and cite §92.104.'],
            answer: 'Request the itemization and dispute charges that are normal wear and tear.',
          },
          practice: [
            num('A deposit must generally be returned within how many days after surrender?', 30, 'Texas Property Code §92.103 sets 30 days.'),
            mc('Repair-and-deduct under Texas law is generally capped at', ['$100', 'one month’s rent or $500, whichever is greater', 'the full repair cost', 'two months’ rent'], 1, 'The statute sets that cap, subject to conditions.'),
          ],
        }),
        lesson({
          id: 'adult-u4-l2',
          title: 'Insurance and buying a vehicle in Texas',
          minutes: 55,
          objectives: [
            'Explain premium, deductible, and exclusion.',
            'Compute Texas motor vehicle sales tax and title timing.',
          ],
          sections: [
            section('Insurance you actually need', [
              'Renters insurance covers your belongings and personal liability, not the building; the landlord’s policy covers the structure. Standard homeowners and renters policies generally exclude flood, which requires separate coverage. Texas premiums are shaped by frequent and costly weather — hail, hurricanes, freezes, and windstorms — plus repair costs. TDI does not set rates.',
              'Compare policies on coverage limits, deductible, exclusions, and the insurer’s complaint record rather than price alone. A very high deductible lowers the premium but can leave you unable to repair or replace what you lost.',
            ]),
            section('Buying a car', [
              'Texas motor vehicle sales and use tax is 6.25%. For a dealer sale, tax is generally based on the sales price less an eligible trade-in. For many private-party purchases, tax is based on the greater of the sales price or 80% of standard presumptive value. The buyer generally must apply to transfer the title within 30 days using Form 130-U at the county tax assessor-collector.',
              'As of January 1, 2025, most noncommercial vehicles no longer require a safety inspection before registration, but the $7.50 Inspection Program Replacement Fee remains ($16.75 for a new vehicle’s first two years). Emissions inspections still apply in designated counties. Budget for insurance, fuel, maintenance, and registration, not just the purchase price.',
            ]),
          ],
          example: {
            prompt: 'A private-party car costs $9,000 and its standard presumptive value is $10,000. Estimate sales tax.',
            steps: ['80% of SPV = 8,000.', 'Greater of price ($9,000) and 80% SPV ($8,000) is $9,000.', 'Tax = 6.25% × 9,000 = 562.50.'],
            answer: 'About $562.50.',
          },
          practice: [
            num('What is 6.25% of $12,000?', 750, '12,000 × 0.0625 = 750.'),
            mc('A standard renters policy generally excludes', ['theft', 'flood damage', 'liability', 'personal property'], 1, 'Flood requires separate coverage.'),
          ],
        }),
      ],
      quiz('Unit 4 quiz: housing and vehicles', [
        mc('A landlord may deduct for', ['normal wear and tear', 'damages beyond normal wear', 'the tenant’s groceries', 'routine painting between tenants'], 1, 'Only damages, not normal wear.'),
        mc('A notice to vacate in Texas is generally at least', ['24 hours', 'three days unless the lease says otherwise', '30 days', '60 days'], 1, 'Property Code §24.005 sets a general three-day minimum.'),
        num('Texas motor vehicle sales tax is what percent?', 6.25, 'The rate is 6.25%.'),
      ]),
    ),
    unit(
      'u5',
      'Business, contracts, and consumer rights',
      'Read before you sign; document before you pay.',
      [
        lesson({
          id: 'adult-u5-l1',
          title: 'Starting a business in Texas',
          minutes: 55,
          objectives: [
            'Choose an appropriate business structure.',
            'List the Texas and federal filings for a small business.',
          ],
          sections: [
            section('Structure and filings', [
              'A sole proprietorship is the simplest structure: no separate entity, and the owner is personally liable for business debts. A Texas LLC files a Certificate of Formation (Form 205) with the Secretary of State for a $300 fee and must maintain a registered agent and office. An assumed name for a registered entity is filed with the Secretary of State (Form 503, $25); for a sole proprietor, it is generally filed with the county clerk where the business has premises.',
              'The IRS issues an EIN free of charge. A single-member LLC is generally disregarded for federal income tax by default, and a multi-member LLC is generally treated as a partnership unless it elects otherwise. Register for a Texas sales tax permit if you sell taxable goods or services, and remit the 6.25% state rate plus any local rate (up to 2%, for a maximum of 8.25%).',
            ]),
            section('Franchise tax and recordkeeping', [
              'The Texas franchise (“margin”) tax applies to many taxable entities, including LLCs. For reports originally due January 1, 2026 through December 31, 2027, no tax is due if total revenue is at or below $2,650,000; the rates are 0.75% for most entities, 0.375% for retail and wholesale, and 0.331% under the EZ computation for qualifying entities, with a $480,000 compensation deduction limit. Thresholds are adjusted periodically, so verify before filing.',
              'Keep business and personal money separate, record every sale and expense, and save receipts. Separate records are required for taxes and are the first thing a lender or buyer will ask for.',
            ]),
          ],
          example: {
            prompt: 'You sell handmade goods online and expect $8,000 of revenue. Which structure and filings?',
            steps: ['Low revenue, one owner: a sole proprietorship is often sufficient.', 'File an assumed name with the county clerk if using a business name.', 'Get a Texas sales tax permit if selling taxable goods.', 'Keep separate records; an EIN is free if you want one.'],
            answer: 'A sole proprietorship with an assumed name, sales tax permit, and clean records.',
          },
          practice: [
            mc('The Texas LLC certificate of formation fee is', ['$25', '$300', '$1,000', 'free'], 1, 'Form 205 costs $300.'),
            num('What is 8.25% of $2,000?', 165, '2,000 × 0.0825 = 165.'),
          ],
        }),
        lesson({
          id: 'adult-u5-l2',
          title: 'Contracts, scams, and consumer complaints',
          minutes: 50,
          objectives: [
            'Identify the elements of a contract.',
            'Recognize common consumer scams and where to complain.',
          ],
          sections: [
            section('Contracts', [
              'A contract generally requires an offer, acceptance, consideration (something of value exchanged), and parties with capacity, for a lawful purpose. Some contracts must be in writing — for example, many involving land or goods over $500 under the Uniform Commercial Code. Read the entire document, including arbitration clauses and automatic renewal terms, before signing.',
              'A verbal agreement can be enforceable, but it is hard to prove. Put important terms in writing, keep copies, and do not sign a document you do not understand. Free or low-cost legal aid exists; a public library and the Texas State Law Library are good starting points.',
            ]),
            section('Scams and complaints', [
              'Common scams: fake job offers that require you to pay for training, unsolicited checks you are asked to deposit and forward, gift-card payment demands, and calls claiming to be the IRS. The IRS contacts taxpayers by mail and does not demand immediate payment by gift card or wire.',
              'Complaints go to the Texas Attorney General’s Consumer Protection Division, the Federal Trade Commission at ReportFraud.ftc.gov, and for financial products the Consumer Financial Protection Bureau. Report identity theft to the FTC at IdentityTheft.gov and contact the three credit reporting companies.',
            ]),
          ],
          example: {
            prompt: 'A “employer” sends a check and asks you to buy equipment and wire the remainder back. What is happening?',
            steps: ['The check is likely fraudulent and will be reversed.', 'The wire is irreversible.', 'You would owe the bank the full amount.', 'Stop, do not deposit, and report to the FTC.'],
            answer: 'An overpayment scam; do not deposit or wire, and report it.',
          },
          practice: [
            mc('A contract generally requires', ['a notary', 'offer, acceptance, and consideration', 'a lawyer', 'a witness'], 1, 'Those are the core elements.'),
            mc('The IRS generally', ['demands gift-card payment by phone', 'contacts taxpayers by mail and does not demand immediate card payment', 'calls only at night', 'asks for passwords'], 1, 'That pattern signals a scam.'),
          ],
        }),
      ],
      quiz('Unit 5 quiz: business and contracts', [
        mc('A sole proprietorship', ['is a separate legal entity', 'exposes the owner to personal liability', 'requires a $300 state filing', 'is the same as an LLC'], 1, 'It has no separate legal identity.'),
        mc('An EIN is obtained from', ['the Texas Secretary of State', 'the IRS free of charge', 'a bank', 'the county clerk'], 1, 'The IRS issues EINs free.'),
        mc('Consideration in a contract means', ['thoughtfulness', 'something of value exchanged', 'a signature', 'a notary seal'], 1, 'It is the bargained-for exchange.'),
      ]),
    ),
    unit(
      'u6',
      'Independent living and civic life',
      'Independence is a set of habits and relationships.',
      [
        lesson({
          id: 'adult-u6-l1',
          title: 'Government services, voting, and civic responsibilities',
          minutes: 50,
          objectives: [
            'Locate the right level of government for a problem.',
            'Explain basic civic obligations and how to register to vote.',
          ],
          sections: [
            section('Who does what', [
              'Cities handle local services such as water, trash, zoning, and police; counties handle courts, records, and elections; school districts set school policy; the state handles most criminal law, licensing, and higher education; the federal government handles immigration, Social Security, and interstate matters. Knowing the level saves hours.',
              'Texas 2-1-1 connects residents to health and human services, including food, housing, and utility assistance. Benefits such as SNAP and Medicaid have income limits and application processes; eligibility rules change, so verify with the administering agency.',
            ]),
            section('Civic participation', [
              'Register to vote through your county elections office or the Texas Secretary of State; Texas requires registration before an election deadline, and you can check your status and polling place with your county. Local elections for city councils, school boards, and bond issues often have low turnout and direct impact on taxes and schools.',
              'Jury service, paying taxes, and obeying the law are legal obligations. Voting, attending public meetings, and commenting on rules are opportunities. Public comment is usually most effective when it is specific, brief, and addressed to the decision the body can actually make.',
            ]),
          ],
          example: {
            prompt: 'Your street has no sidewalk and you want one. Where do you start?',
            steps: ['Sidewalks are typically a city responsibility.', 'Check the city budget and capital improvement plan.', 'Attend a council or transportation meeting.', 'Submit a specific request with location and safety data.'],
            answer: 'City council or transportation department, with a specific written request.',
          },
          practice: [
            mc('School district policy is set by', ['the governor', 'the local school board', 'the Texas Supreme Court', 'the U.S. Senate'], 1, 'Elected trustees set district policy.'),
            mc('2-1-1 in Texas connects residents to', ['weather forecasts', 'health and human services', 'traffic reports', 'college applications'], 1, 'It is a social services referral line.'),
          ],
        }),
        lesson({
          id: 'adult-u6-l2',
          title: 'Communication, conflict, and decisions under pressure',
          minutes: 45,
          objectives: [
            'Use a structured decision process.',
            'Handle a disagreement without escalating it.',
          ],
          sections: [
            section('Deciding well', [
              'Name the decision, list realistic options, identify the criteria that matter, and evaluate each option against them. Separate reversible from irreversible decisions: reversible ones can be tested quickly; irreversible ones deserve more research and advice.',
              'Beware sunk costs. Money already spent should not determine whether you continue. Ask what you would do if you were starting fresh today.',
            ]),
            section('Conflict', [
              'Separate the person from the problem. State the facts you observed, the impact, and a specific request. “The last three shifts you arrived 20 minutes late, which left me alone on the floor; can we set a start time we both can meet?” is more effective than a character judgment.',
              'In a dispute with an employer, landlord, or business, document dates and keep copies. Escalate in writing. Most problems are resolved by a clear, documented request before they require a lawyer.',
            ]),
          ],
          example: {
            prompt: 'A roommate repeatedly leaves dishes. What is a structured response?',
            steps: ['Observe: dishes left for three days, twice this week.', 'Impact: pests and lost cooking time.', 'Request: wash or load by 10 p.m. on your nights.', 'Agreement: written schedule and a check-in in two weeks.'],
            answer: 'Facts, impact, specific request, and a follow-up.',
          },
          practice: [
            mc('A sunk cost should', ['drive the decision', 'be ignored in the current decision', 'always be recovered', 'be doubled'], 1, 'Past spending is not recoverable.'),
            mc('A useful conflict statement includes', ['a character judgment', 'observed facts, impact, and a specific request', 'an ultimatum', 'silence'], 1, 'Facts plus request is actionable.'),
          ],
        }),
      ],
      quiz('Unit 6 quiz: independent living', [
        mc('Sidewalks are typically the responsibility of', ['the federal government', 'the city', 'the state legislature', 'the school board'], 1, 'Cities generally maintain sidewalks.'),
        mc('A sunk cost is', ['a future cost', 'money already spent that cannot be recovered', 'a tax', 'a fee'], 1, 'It is unrecoverable.'),
        mc('When documenting a dispute, you should', ['rely on memory', 'keep dates and copies in writing', 'delete messages', 'wait a year'], 1, 'Written records matter.'),
      ]),
    ),
    unit(
      'u7',
      'Borrowing, investing, and retirement',
      'Money grows or shrinks by a rate; know which rate you are paying or earning.',
      [
        lesson({
          id: 'adult-u7-l1',
          title: 'Loans, interest, and the real cost of debt',
          minutes: 55,
          objectives: [
            'Distinguish the interest rate from the APR.',
            'Explain why a minimum payment can leave a balance almost unchanged.',
            'Compare two payoff strategies using total interest.',
          ],
          sections: [
            section('The rate is not the whole price', [
              'The interest rate prices the borrowed principal. The annual percentage rate (APR) is meant to capture the yearly cost of credit including many fees, which is why a loan advertised at 5% can carry a 6.2% APR. When comparing offers, compare APRs and total repayment, not the monthly payment alone.',
              'A longer term lowers the monthly payment and raises total interest. A $20,000 car loan at 8% for 4 years costs less in total interest than the same loan for 6 years, even though the 6-year payment is smaller. The lower payment is not a discount; it is more time paying interest.',
            ]),
            section('Minimum payments and amortization', [
              'Installment loans amortize: early payments are mostly interest, later payments are mostly principal. On a $1,200 balance at a 24% APR, the monthly rate is about 2%, so the first month’s interest is about $24. A minimum payment of 2% ($24) would cover only the interest, leaving the balance unchanged.',
              'Two common payoff plans are the avalanche (highest APR first, least total interest) and the snowball (smallest balance first, fastest wins). Either works if the payment is fixed and the plan is followed; the avalanche is cheaper in interest, the snowball is often easier to sustain. Payday and auto-title loans carry extremely high effective costs and should be treated as emergencies, not budgeting tools.',
            ]),
          ],
          example: {
            prompt: 'You owe $1,200 at a 24% APR. The minimum payment is 2% of the balance. What happens in month one?',
            steps: ['Monthly rate = 24% / 12 = 2%.', 'Interest = 0.02 × 1,200 = $24.', 'Minimum payment = 0.02 × 1,200 = $24.', 'Principal reduced = $24 − $24 = $0.'],
            answer: 'The balance does not fall. Paying more than the minimum is the only way to make progress.',
          },
          practice: [
            num('What is the monthly interest on a $2,000 balance at an 18% APR?', 30, '18% / 12 = 1.5%; 2,000 × 0.015 = 30.'),
            mc('A longer loan term usually', ['lowers total interest', 'raises total interest', 'has no effect on interest', 'removes the APR'], 1, 'More months of interest means a higher total.'),
            mc('The avalanche method pays off', ['the smallest balance first', 'the highest APR first', 'the newest debt first', 'all debts equally'], 1, 'Highest rate first minimizes interest.'),
          ],
          assignments: [
            'Find one real loan offer (auto, personal, or student) and write down the amount financed, term, APR, monthly payment, and total of payments. Compute total interest and compare it with a shorter term.',
            'Using a balance you or a family member actually carries, calculate one month of interest at the stated APR and compare it with the minimum payment.',
          ],
          review: [
            { prompt: 'Why can two loans with the same interest rate have different APRs?', answer: 'The APR includes fees and other finance charges, so origination or processing fees raise the APR above the nominal rate.' },
            { prompt: 'When is the snowball method the better choice?', answer: 'When motivation and follow-through are the binding constraint: clearing a small balance quickly builds momentum, even though it may cost more interest than the avalanche.' },
          ],
        }),
        lesson({
          id: 'adult-u7-l2',
          title: 'Investing, compounding, and retirement accounts',
          minutes: 55,
          objectives: [
            'Apply the Rule of 72 and compound growth.',
            'Distinguish insured deposits from investments that can lose value.',
            'Explain the difference between a traditional 401(k) or IRA and a Roth account.',
          ],
          sections: [
            section('Compounding and the Rule of 72', [
              'Compound growth means returns earn returns. The Rule of 72 estimates doubling time: 72 divided by the annual percentage return. At 6%, money doubles in about 12 years; at 9%, about 8 years. The rule is an approximation, and it assumes a constant return, which markets do not provide.',
              'Time in the market matters more than the size of any single contribution. Saving $100 a month for 30 years at an average 6% annual return grows to roughly $100,000, of which $36,000 is contributions. The rest is growth, and it is concentrated in the later years.',
            ]),
            section('Accounts, risk, and fees', [
              'A traditional 401(k) or IRA generally uses pre-tax money: contributions may reduce taxable income now, withdrawals are taxed as ordinary income later, and early withdrawals can trigger taxes and a penalty. A Roth account generally uses after-tax money: no deduction now, qualified withdrawals later are tax-free. An employer match is part of compensation; not contributing enough to earn it leaves money on the table.',
              'Bank deposits at insured institutions are protected by FDIC insurance (NCUSIF for credit unions) up to the published limit per depositor, per institution, per ownership category. Investments such as stock and bond funds are not insured and can lose value. Diversification reduces company-specific risk but not market risk. Fees compound against you: a 1% annual fee can consume a large share of long-run growth.',
            ]),
          ],
          example: {
            prompt: 'At an average 6% annual return, how long does money take to double, and what does $100 a month for 30 years become?',
            steps: ['Rule of 72: 72 / 6 = 12 years to double.', 'Monthly rate = 0.06 / 12 = 0.005; 360 months.', 'Future value factor ≈ 1,004.5.', '100 × 1,004.5 ≈ $100,450.'],
            answer: 'About 12 years to double; about $100,000 after 30 years, on $36,000 of contributions.',
          },
          practice: [
            num('Using the Rule of 72, how many years to double at 8%?', 9, '72 / 8 = 9.'),
            mc('FDIC insurance covers', ['stock funds', 'bank deposits up to the insured limit', 'all investments', 'cryptocurrency'], 1, 'It covers deposits, not investments.'),
            mc('An employer 401(k) match is', ['a gift with no strings', 'part of your compensation for contributing', 'a loan', 'a tax'], 1, 'It is compensation contingent on contributing.'),
          ],
          assignments: [
            'Build a two-column comparison of a traditional and a Roth retirement account for your expected situation: tax treatment now, tax treatment later, and one reason to choose each.',
            'Pick one broad index fund and find its expense ratio. Compute what a 1% versus 0.05% fee difference could cost on a $50,000 balance over 30 years at 6%.',
          ],
          review: [
            { prompt: 'Why is a guaranteed 20% annual return a red flag?', answer: 'Legitimate investments carry risk and can lose value; only insured deposits carry federal insurance. A guarantee of high returns is a classic fraud signal.' },
            { prompt: 'What does diversification actually reduce?', answer: 'It reduces exposure to any single company or sector. It does not remove market-wide risk, and it does not guarantee a gain.' },
          ],
        }),
      ],
      quiz('Unit 7 quiz: borrowing and investing', [
        num('What is the monthly interest on a $1,500 balance at a 12% APR?', 15, '12% / 12 = 1%; 1,500 × 0.01 = 15.'),
        num('Using the Rule of 72, how many years to double at 9%?', 8, '72 / 9 = 8.'),
        mc('The APR differs from the interest rate because it', ['is always lower', 'includes many fees', 'ignores the term', 'is set by the borrower'], 1, 'It captures the yearly cost of credit including fees.'),
        mc('A Roth account is generally funded with', ['pre-tax dollars', 'after-tax dollars', 'employer dollars only', 'borrowed money'], 1, 'Contributions are made after tax.'),
      ]),
      project({
        title: 'Debt payoff and retirement plan',
        prompt: 'Take two real or realistic debts and one retirement account. Compare avalanche and snowball payoff, show total interest for each, then compute one retirement contribution scenario using the Rule of 72 or a compound-growth calculator. Write a one-page plan.',
        deliverable: 'A table of both payoff orders, the total interest for each, one compound-growth calculation, and a signed one-page plan with dates.',
        guidance: ['Use APRs from the statements, not estimates.', 'Show the calculation, not just the result.', 'State one behavior change that makes the plan survivable.'],
        rubric: [
          rubricRow('Accurate debt analysis', 30, [['Excellent', 'Balances, APRs, and payments accurate; totals correct.', 30], ['Proficient', 'Minor arithmetic slip.', 24], ['Developing', 'Missing one debt or APR.', 16], ['Beginning', 'No usable figures.', 6]]),
          rubricRow('Payoff comparison', 25, [['Excellent', 'Both strategies computed and compared on total interest.', 25], ['Proficient', 'Both computed, comparison thin.', 20], ['Developing', 'One strategy only.', 13], ['Beginning', 'None.', 5]]),
          rubricRow('Retirement calculation', 25, [['Excellent', 'Assumptions stated; growth computed correctly.', 25], ['Proficient', 'Correct with unclear assumptions.', 20], ['Developing', 'Arithmetic error.', 13], ['Beginning', 'Absent.', 5]]),
          rubricRow('Plan quality', 20, [['Excellent', 'Specific dates, amounts, and a fallback.', 20], ['Proficient', 'Clear but general.', 16], ['Developing', 'Vague intentions.', 10], ['Beginning', 'None.', 4]]),
        ],
      }),
    ),
    unit(
      'u8',
      'Communication, negotiation, and decisions',
      'Most adult problems are conversations with consequences; prepare for both.',
      [
        lesson({
          id: 'adult-u8-l1',
          title: 'Negotiating pay, rent, and conflicts',
          minutes: 50,
          objectives: [
            'Define a BATNA and explain why it sets your leverage.',
            'Prepare a written negotiation script with evidence.',
            'Handle a dispute in writing instead of in the moment.',
          ],
          sections: [
            section('Know your alternative before you talk', [
              'Your BATNA is your best alternative to a negotiated agreement: the other job, the other apartment, the small claims filing, the decision to walk away. A strong BATNA lets you ask without desperation; a weak one tells you to build an alternative first. Decide your reservation point — the least you will accept — before the conversation, and write it down so it does not drift.',
              'Anchor with evidence, not opinion. For pay, use market data such as the Bureau of Labor Statistics Occupational Employment and Wage Statistics for your area and occupation, plus your own documented results. For rent, use comparable listings and the condition of the unit. For a repair dispute, use the lease, photographs, dates, and written notices.',
            ]),
            section('Disputes belong in writing', [
              'Say what happened, what you want, and by when, in plain language, and keep a copy. Written notice is often a legal prerequisite: Texas Property Code §92.056, for example, requires written notice of a condition that materially affects health or safety before certain repair remedies, and security-deposit disputes turn on whether an itemized list and forwarding address were provided in writing.',
              'Stay on the decision, not the person. A useful sequence is: describe the facts, state the impact, propose a specific fix, set a reasonable deadline, and name the next step if it is not resolved. Escalation paths include a supervisor, the property owner, a consumer complaint to the Texas Attorney General, or justice court for small claims within its jurisdictional limit.',
            ]),
          ],
          example: {
            prompt: 'You are offered $48,000 for a job whose posted range is $50,000–$56,000, and you have a second interview elsewhere. What do you say?',
            steps: ['BATNA: the second interview, so you can decline without panic.', 'Evidence: posted range plus your documented results.', 'Ask: “Based on the posted range and my experience with X, can we get to $52,000?”', 'If base is fixed, ask for a written review date, signing bonus, or start date.'],
            answer: 'A specific, evidence-based request with a fallback, in writing after the call.',
          },
          practice: [
            mc('A BATNA is', ['your first offer', 'your best alternative if no deal is reached', 'a legal filing', 'your reservation price'], 1, 'It is the walk-away alternative.'),
            mc('A reservation point is', ['the opening ask', 'the least you will accept', 'the market rate', 'the final offer'], 1, 'It is your minimum acceptable outcome.'),
            mc('Written notice matters because', ['it is polite', 'it is often a legal prerequisite and creates a record', 'it replaces a lease', 'it avoids court'], 1, 'It creates evidence and is sometimes required.'),
          ],
          assignments: [
            'Write a one-page negotiation script for a real situation (pay, rent, a refund, or a grade appeal): BATNA, evidence, opening ask, reservation point, and the next step if refused.',
            'Draft a written dispute notice for a hypothetical repair or deposit problem that cites the lease terms and a deadline.',
          ],
          review: [
            { prompt: 'Why should you never name a number before knowing the market range?', answer: 'Without a reference point you may anchor far below the range, and the first number strongly shapes the discussion.' },
            { prompt: 'What belongs in a written dispute notice?', answer: 'Dates, facts, the specific remedy requested, a reasonable deadline, and a copy kept for your records.' },
          ],
        }),
        lesson({
          id: 'adult-u8-l2',
          title: 'Decisions under uncertainty',
          minutes: 50,
          objectives: [
            'Compute an expected value for a simple decision.',
            'Separate sunk costs from future costs.',
            'Explain why insurance is bought for protection, not for expected profit.',
          ],
          sections: [
            section('Expected value and opportunity cost', [
              'Expected value multiplies each outcome by its probability and adds the results. A 5% chance of a $10,000 loss has an expected cost of $500. Expected value is a tool, not a verdict: a small chance of ruin is not equivalent to a certain small cost, which is why people buy insurance even when the expected payout is below the premium.',
              'Opportunity cost is the value of the best alternative you gave up. A “free” evening has a cost if it displaces sleep before an exam. A cheap car with high maintenance can cost more than a reliable one. Compare total cost of ownership, not sticker price.',
            ]),
            section('Sunk costs, insurance, and decision journals', [
              'Sunk costs are already spent and cannot be recovered. Staying in a bad course, lease, or project because of money already spent is the sunk-cost fallacy; the only question is what the next dollar buys. Insurance trades a certain premium for protection against a loss you could not absorb: compare premiums, deductibles, coverage limits, and exclusions, and remember that a very high deductible can leave you unable to repair or replace what you lost.',
              'Keep a decision journal: the decision, the information you had, the alternatives, what you expected to happen, and a review date. It exposes hindsight bias and improves the next decision. For recurring decisions, set a rule in advance (for example, “no financing over 10% APR” or “no purchase over $200 without a night’s sleep”) so the decision is made before pressure arrives.',
            ]),
          ],
          example: {
            prompt: 'Insurance costs $600 a year with a $1,000 deductible. There is a 5% chance of a $10,000 loss. Compare expected out-of-pocket cost with and without insurance.',
            steps: ['Without insurance: 0.05 × 10,000 = $500 expected loss.', 'With insurance: $600 premium + 0.05 × $1,000 deductible = $650.', 'Insurance costs $150 more in expected value but caps the loss at $1,600.'],
            answer: 'Insurance is not the cheaper expected value here; it buys protection against a loss you could not easily absorb.',
          },
          practice: [
            num('What is the expected cost of a 10% chance of a $5,000 loss?', 500, '0.10 × 5,000 = 500.'),
            mc('A sunk cost is', ['a future cost', 'money already spent that cannot be recovered', 'an insurance premium', 'a tax'], 1, 'It is unrecoverable.'),
            mc('A high deductible usually', ['raises the premium', 'lowers the premium and raises your share of a claim', 'removes coverage', 'has no effect'], 1, 'You pay less up front and more when you claim.'),
          ],
          assignments: [
            'Take one real decision you face and write a decision journal entry: options, information, expected outcomes, review date.',
            'Compare two insurance quotes for renters or auto coverage on premium, deductible, coverage limits, and one exclusion. Recommend one and explain the trade-off.',
          ],
          review: [
            { prompt: 'Why is expected value not the only test for insurance?', answer: 'A low-probability catastrophic loss can be unaffordable even when its expected cost is small; insurance buys protection against that outcome.' },
            { prompt: 'How does a decision journal reduce hindsight bias?', answer: 'It records what you knew and expected before the outcome, so you can judge the decision on the information available rather than on the result.' },
          ],
        }),
      ],
      quiz('Unit 8 quiz: negotiation and decisions', [
        mc('Your BATNA is', ['your opening offer', 'your best alternative if no deal is reached', 'your final price', 'a written contract'], 1, 'It is the walk-away alternative.'),
        num('What is the expected cost of a 20% chance of a $2,500 loss?', 500, '0.20 × 2,500 = 500.'),
        mc('Money already spent that cannot be recovered is', ['opportunity cost', 'a sunk cost', 'a premium', 'a deductible'], 1, 'It is sunk.'),
        mc('A written dispute notice should include', ['only a complaint', 'facts, a specific remedy, and a deadline', 'a threat', 'a verbal summary'], 1, 'Specifics and a deadline make it usable.'),
      ]),
      project({
        title: 'Negotiation and decision memo',
        prompt: 'Choose one real negotiation and one real decision. Write a memo with your BATNA, evidence, reservation point, and script for the negotiation, then a decision-journal entry for the decision with expected values and a review date.',
        deliverable: 'A two-page memo, dated and signed, with the evidence attached.',
        guidance: ['Use at least one authoritative source for market or legal facts.', 'State your reservation point in numbers.', 'Name the next step if the other side refuses.'],
        rubric: [
          rubricRow('Negotiation preparation', 30, [['Excellent', 'BATNA, evidence, reservation point, and script are specific.', 30], ['Proficient', 'Most elements present.', 24], ['Developing', 'General intentions.', 16], ['Beginning', 'Missing.', 6]]),
          rubricRow('Decision analysis', 30, [['Excellent', 'Alternatives, expected values, and opportunity costs computed.', 30], ['Proficient', 'Analysis present, one gap.', 24], ['Developing', 'Asserted without numbers.', 16], ['Beginning', 'Missing.', 6]]),
          rubricRow('Use of sources', 20, [['Excellent', 'Authoritative source cited and applied.', 20], ['Proficient', 'Source cited, application thin.', 16], ['Developing', 'Unreliable source.', 10], ['Beginning', 'None.', 4]]),
          rubricRow('Clarity and follow-through', 20, [['Excellent', 'Clear, dated, with a review and fallback.', 20], ['Proficient', 'Clear.', 16], ['Developing', 'Disorganized.', 10], ['Beginning', 'Unusable.', 4]]),
        ],
      }),
    ),
  ],
  finalExam: exam('Adult Life Education final examination', [
    mc('Form W-4 tells an employer', ['how much to withhold', 'your credit score', 'your rent', 'your grades'], 0, 'It sets federal withholding.'),
    num('Using the 2025 single brackets, what is the tax on $25,000 of taxable income? Round to the nearest dollar.', 2762, '10% of 11,925 = 1,192.50; 12% of 13,075 = 1,569; total 2,761.50.'),
    mc('Self-employment tax is generally', ['7.65%', '15.3%', '25%', '0%'], 1, 'It combines 12.4% Social Security and 2.9% Medicare.'),
    num('What is 6.2% of $3,500?', 217, '3,500 × 0.062 = 217.'),
    mc('Texas security deposits must generally be returned within', ['10 days', '30 days after surrender', '90 days', 'six months'], 1, 'Property Code §92.103 sets 30 days.'),
    mc('Texas motor vehicle sales tax is', ['4%', '6.25%', '8.25%', '10%'], 1, 'The rate is 6.25%.'),
    mc('The Texas LLC certificate of formation fee is', ['$25', '$300', '$1,000', 'free'], 1, 'Form 205 costs $300.'),
    short('Explain what a lease obligates you to do and what protections Texas law gives you at move-out.', 'Model: A lease obligates you to pay rent, follow rules, and return the unit in similar condition except normal wear. Texas law requires the landlord to return the deposit within 30 days after surrender, provide an itemized list of deductions, and not charge for normal wear; the landlord may wait for a written forwarding address. I would photograph the unit and keep the lease.', ['Names tenant obligations.', 'Cites deposit timing and itemization.', 'Mentions normal wear and documentation.'], 10),
    short('A friend offers you a “guaranteed” investment returning 20% per year. Describe three questions you would ask and one red flag.', 'Model: Ask what the underlying asset is, who regulates or insures it, and how returns have been verified. Ask for the prospectus or disclosure documents in writing. A guarantee of high returns with no risk is a red flag, because legitimate investments can lose value and only insured deposits carry federal insurance.', ['Asks about the underlying asset.', 'Asks about regulation and insurance.', 'Identifies a guarantee as a red flag.'], 10),
    num('Using the Rule of 72, how many years does money take to double at 6%?', 12, '72 / 6 = 12.'),
    mc('The APR differs from the interest rate because it', ['is always lower', 'includes many fees and finance charges', 'ignores the term', 'is set by the borrower'], 1, 'It captures the yearly cost of credit.'),
    num('What is the expected cost of a 5% chance of a $10,000 loss?', 500, '0.05 × 10,000 = 500.'),
    mc('A BATNA is', ['your opening offer', 'your best alternative if no deal is reached', 'a written contract', 'a deductible'], 1, 'It is the walk-away alternative.'),
    mc('Money already spent and unrecoverable is', ['opportunity cost', 'a sunk cost', 'a premium', 'equity'], 1, 'It is sunk.'),
  ]),
};
