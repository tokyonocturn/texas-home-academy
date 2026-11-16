import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Personal Financial Literacy (grade 11) depth pass. */
export const DEPTH_G11D: Record<string, LessonDepth> = {
  'pfl-u1-l1': {
    topics: ['budget'],
    objectives: [
      'Build a monthly budget from net income and distinguish needs from wants.',
      'Compare banking accounts and reconcile a statement against a register.',
    ],
    sections: [
      {
        heading: 'Income, expenses, and a working budget',
        paragraphs: [
          'A budget starts with net income, the amount actually deposited after taxes and deductions. Gross pay is larger, so planning from gross overstates what is available. A paycheck stub lists federal income tax, Social Security at 6.2%, Medicare at 1.45%, and any elective deductions, and subtracting them shows the real number to budget.',
          'Expenses divide into fixed, variable, and periodic. Rent and insurance are fixed, groceries and fuel vary, and car registration or textbooks arrive a few times a year. Dividing periodic costs by twelve and setting that amount aside each month prevents the annual surprise that derails otherwise careful planning.',
          'The 50/30/20 guideline assigns half of net income to needs, thirty percent to wants, and twenty percent to savings and debt repayment. It is a starting point rather than a rule, and a student with low income may need a higher needs share. The test of a budget is not its elegance but whether it survives an ordinary month and a small emergency.',
        ],
      },
      {
        heading: 'Banking, fees, and reconciliation',
        paragraphs: [
          'Checking accounts hold money for spending, savings accounts earn interest with limits on withdrawals, and certificates of deposit lock funds for a term in exchange for a higher rate. Fees matter as much as rates: monthly maintenance, overdraft, out-of-network ATM, and minimum-balance charges can erase interest on a small balance.',
          'Deposits are insured by the Federal Deposit Insurance Corporation up to $250,000 per depositor per bank, which is why a savings account is low risk. A credit union offers similar insurance through the National Credit Union Administration. Comparing an annual percentage yield rather than a nominal rate shows the real return after compounding.',
          'Reconciliation compares your register with the bank statement. Outstanding checks and deposits explain most differences, and an unexplained gap requires prompt contact with the bank. Reviewing transactions weekly catches errors and unauthorized charges early, and it is the habit that keeps a budget honest rather than aspirational. Students should also practice a zero-based budget, in which every dollar is assigned a job before the month begins, because unassigned money tends to disappear into small purchases. Reviewing the previous month before writing the next one turns the budget into a feedback loop rather than a wish list, and it makes the emergency fund a line item instead of an intention. A written budget also makes a conversation with a family member or roommate possible, because the numbers can be compared rather than argued about in general terms.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Net pay is $2,400 monthly. Rent is $900, groceries $350, car payment $300, fuel $120, phone $60, and insurance $150 semiannually. Build a budget and find the savings.',
        steps: [
          'Fixed and variable needs: 900 + 350 + 300 + 120 + 60 = $1,730.',
          'Insurance monthly: 150 ÷ 6 = $25, bringing needs to $1,755.',
          'Savings available: 2,400 − 1,755 = $645, or about 27%.',
        ],
        answer: 'Needs total $1,755, leaving $645 monthly, which exceeds the 20% savings guideline.',
      },
    ],
    terms: [
      ['net income', 'take-home pay after taxes and deductions'],
      ['fixed expense', 'a cost that stays the same each period'],
      ['variable expense', 'a cost that changes from month to month'],
      ['APY', 'annual percentage yield, including compounding'],
      ['overdraft', 'a charge for spending more than the account holds'],
      ['reconciliation', 'comparing a register with a bank statement'],
    ],
    practice: [
      num('If rent is $900 and net pay is $2,400, what percent goes to rent?', 37.5, '900/2,400 = 37.5%.'),
      mc('FDIC insurance covers deposits up to', ['$25,000', '$100,000', '$250,000', 'unlimited'], 2, '$250,000 per depositor.'),
      mc('A periodic expense should be', ['ignored', 'divided across months', 'paid by credit', 'removed from the budget'], 1, 'Spread it monthly.'),
    ],
    review: [
      {
        prompt: 'Why budget from net income rather than gross pay?',
        answer: 'Because taxes and deductions are already gone by the time money arrives, so gross pay overstates what can actually be spent or saved.',
      },
      {
        prompt: 'What does reconciling a bank statement involve?',
        answer: 'Comparing the register with the statement, accounting for outstanding checks and deposits, and investigating any unexplained difference.',
      },
    ],
    exercises: [
      'Build a monthly budget from a realistic paycheck and test it against an emergency expense.',
      'Reconcile a sample statement with a register and identify two discrepancies.',
    ],
  },
  'pfl-u2-l1': {
    topics: ['credit score'],
    objectives: [
      'Explain how credit scores are calculated and how interest accrues.',
      'Compare loan offers and plan repayment to avoid costly debt.',
    ],
    sections: [
      {
        heading: 'Credit scores and borrowing costs',
        paragraphs: [
          'A credit score summarizes repayment history, typically on a 300 to 850 scale. Payment history carries the most weight, followed by amounts owed, length of credit history, new credit, and credit mix. A single late payment can lower a score, and the effect fades with consistent on-time payments.',
          'Lenders price risk, so a lower score means a higher interest rate. On a $20,000 car loan over five years, an 8% rate costs about $4,330 in interest, while an 18% rate costs about $10,370 — the difference is more than the price of a used car. Checking rates before shopping prevents financing at the dealership’s first offer.',
          'Credit reports are available free once a year from AnnualCreditReport.com, the site authorized by federal law. Errors are common, and disputing them with the bureau and the lender is a documented process. Monitoring reports also detects identity theft before it becomes expensive.',
        ],
      },
      {
        heading: 'Loans, interest, and debt traps',
        paragraphs: [
          'Installment loans repay principal and interest over a fixed term, while revolving credit such as a credit card allows borrowing up to a limit. Paying only the minimum on a $3,000 balance at 22% can take over a decade and cost thousands in interest, because most of the payment covers interest first.',
          'The annual percentage rate includes fees as well as interest, which makes it the number to compare. A payday loan advertised at $15 per $100 borrowed for two weeks carries an annual rate near 390%, and rolling it over compounds the cost. Title loans and rent-to-own agreements carry similar structures.',
          'Repayment strategy matters. The avalanche method pays the highest-rate balance first for the greatest interest savings, while the snowball method clears the smallest balance first for motivation. Both require a budget line for debt and an emergency fund, since borrowing to cover surprises is how a temporary problem becomes a permanent one. Students should also read the Schumer box on a credit card offer, which discloses the APR, fees, and grace period in a standard format required by federal law. Comparing two offers side by side with those numbers is a skill that transfers directly to comparing mortgages or auto loans later.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Compare $20,000 over 5 years at 8% versus 18%, and compute the monthly payment at 8%.',
        steps: [
          'Use amortization: payment = P·r/(1 − (1 + r)⁻ⁿ) with r = 0.08/12 and n = 60.',
          'Payment ≈ $405.53, so total paid ≈ $24,332 and interest ≈ $4,332.',
          'At 18%, payment ≈ $507.83, total ≈ $30,470, interest ≈ $10,470.',
        ],
        answer: 'About $4,332 in interest at 8% versus roughly $10,470 at 18% on the same loan.',
      },
    ],
    terms: [
      ['credit score', 'a number summarizing creditworthiness'],
      ['APR', 'annual percentage rate, including fees and interest'],
      ['principal', 'the amount borrowed, separate from interest'],
      ['revolving credit', 'credit that can be borrowed against repeatedly, as with a card'],
      ['amortization', 'scheduled repayment of principal and interest over time'],
      ['avalanche method', 'paying the highest-interest debt first'],
    ],
    practice: [
      num('What is the top of the standard credit score range?', 850, '850.'),
      mc('Which factor weighs most in a credit score?', ['credit mix', 'payment history', 'new credit', 'length of history'], 1, 'Payment history dominates.'),
      mc('Under the avalanche method, which balance gets the extra payment?', ['the $800 balance at 24% APR', 'the $800 balance at 9% APR', 'whichever is larger', 'whichever has the lower minimum'], 0, 'Avalanche sends extra money to the highest interest rate first.'),
    ],
    review: [
      {
        prompt: 'Why does a lower credit score cost more to borrow?',
        answer: 'Lenders charge higher interest rates to offset the greater risk of late or missed payments, so the same loan costs more overall.',
      },
      {
        prompt: 'How do the avalanche and snowball methods differ?',
        answer: 'Avalanche targets the highest interest rate to minimize cost, while snowball clears the smallest balance first to build momentum.',
      },
    ],
    exercises: [
      'Compare three loan offers by APR and total interest, then choose one with justification.',
      'Calculate the cost of paying only the minimum on a credit card balance.',
    ],
  },
  'pfl-u3-l1': {
    topics: ['compound interest'],
    objectives: [
      'Compare saving and investing vehicles and explain compound growth.',
      'Evaluate insurance policies and describe how taxes are withheld and filed.',
    ],
    sections: [
      {
        heading: 'Saving, investing, and compound growth',
        paragraphs: [
          'Saving protects money for near-term needs, while investing accepts risk for higher expected returns over long periods. A savings account might pay 4% with federal insurance, a bond fund carries moderate risk, and a diversified stock index fund has historically returned more over decades with substantial short-term swings.',
          'Compound growth rewards time. Investing $200 monthly at an average 7% annual return grows to roughly $1,000,000 over 40 years, while starting ten years later yields far less for the same monthly amount. The formula for a series of deposits combines the future value of an annuity with compounding, and the lesson is that time matters more than the amount.',
          'Diversification reduces the risk of any single company or sector. Fees also compound against the investor: a 1% annual fee can consume a quarter of a portfolio’s growth over decades, which is why expense ratios belong in the comparison. Employers sometimes match retirement contributions, and an unmatched contribution is simply forgone compensation.',
        ],
      },
      {
        heading: 'Insurance and taxes',
        paragraphs: [
          'Insurance transfers risk in exchange for a premium. Health, auto, renters, and homeowners policies differ in deductible, coverage limit, and exclusions, and a low premium with a high deductible can be the right choice for someone with savings. Liability coverage is the part that protects against catastrophic loss, and in Texas auto liability insurance is required to drive.',
          'Taxes are withheld from wages based on a W-4 and reconciled on a return. A W-2 reports wages and withholding, while a 1099 reports income without withholding, so self-employed workers owe both income tax and self-employment tax. Texas has no state income tax, but federal filing is still required above the income thresholds the IRS publishes.',
          'Filing status, standard versus itemized deductions, and credits all change the result. A refund means too much was withheld during the year rather than a bonus, and an unexpected balance means withholding was too low. Adjusting a W-4 after a life change prevents both surprises, and keeping records for three years matches the IRS recommendation. Students should also compare a traditional and a Roth retirement account, since one defers taxes and the other pays them now, and the better choice depends on expected tax rates at withdrawal. Understanding that trade-off makes the account decision a calculation rather than a guess about future taxes.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Compare $5,000 invested at 7% for 30 years with the same amount at 4%, and compute the effect of a 1% fee.',
        steps: [
          'At 7%: 5,000 × 1.07³⁰ ≈ $38,061.',
          'At 4%: 5,000 × 1.04³⁰ ≈ $16,217.',
          'A 1% fee lowers the 7% case to 6%: 5,000 × 1.06³⁰ ≈ $28,717.',
        ],
        answer: 'About $38,061 versus $16,217, and a 1% fee cuts the stronger result to roughly $28,717.',
      },
    ],
    terms: [
      ['compound interest', 'interest earned on interest as well as principal'],
      ['diversification', 'spreading investments to reduce risk'],
      ['expense ratio', 'the annual fee a fund charges as a percentage of assets'],
      ['deductible', 'the amount paid out of pocket before insurance covers a loss'],
      ['W-2', 'a form reporting wages and tax withholding'],
      ['1099', 'a form reporting income paid without withholding'],
    ],
    practice: [
      num('What does $5,000 grow to at 7% for 30 years, to the nearest dollar?', 38061, '≈ $38,061.'),
      mc('A 1099 reports income', ['with withholding', 'without withholding', 'only for students', 'only for tips'], 1, 'No tax is withheld.'),
      mc('An insurance premium is', ['the amount paid for coverage', 'the amount paid before coverage begins', 'the coverage limit', 'a tax credit'], 0, 'The premium is what you pay, usually monthly, to keep the policy in force.'),
    ],
    review: [
      {
        prompt: 'Why does starting to invest early matter more than the amount invested?',
        answer: 'Compound growth rewards time, so contributions made decades earlier earn returns on their returns for much longer.',
      },
      {
        prompt: 'Why does a 1099 sometimes produce a tax bill?',
        answer: 'Because no tax was withheld from that income, so the worker owes income tax and self-employment tax when filing.',
      },
    ],
    exercises: [
      'Compare two index funds by expense ratio and projected 30-year value.',
      'Read a sample W-2 and 1099 and identify which boxes affect taxable income.',
    ],
  },
};
