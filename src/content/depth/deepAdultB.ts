import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/**
 * Adult Life Education, units 5-8: business and contracts, civic life,
 * borrowing and investing, negotiation. Same 600-word adult bar as units 1-4.
 */
export const DEPTH_ADULT_B: Record<string, LessonDepth> = {
  'adult-u5-l1': {
    topics: ['sole proprietorship', 'certificate of formation', 'franchise tax'],
    objectives: [
      'Match a business structure to revenue, risk, and paperwork burden.',
      'Separate the filings that create an entity from the permits that let it sell.',
    ],
    applicationTitle: 'registering a small business in one afternoon',
    application:
      'Suppose you will sell $12,000 of handmade goods in your first year, with no employees and no inventory beyond supplies. The sequence is short: choose a name and check it, decide whether the liability protection of an LLC is worth the $300 filing and the annual report, get a sales tax permit if what you sell is taxable, and keep business money in its own account from the first sale. Skipping the sales tax permit is the expensive shortcut, because the tax is owed whether or not it was collected, and the state can assess it later with penalties.',
    sections: [
      {
        heading: 'Structure is a trade, not a status symbol',
        paragraphs: [
          'A sole proprietorship has no separate legal identity: you report the income on your own return, and you are personally liable for business debts and judgments. An LLC creates a separate entity and generally shields personal assets from business liabilities, but it adds a $300 certificate of formation, a registered agent, an annual report, and a franchise tax filing. Neither structure removes the need to pay tax on profit or to keep records.',
          'Choose by asking three questions: how much risk does the activity carry, how much revenue is expected, and how much paperwork will actually be maintained. A dog-walking business with one client does not need an entity; a business installing equipment on other people’s property carries liability that justifies one. Insurance is often the cheaper first defense, and some clients require it before signing a contract.',
        ],
      },
      {
        heading: 'Filings, permits, and the tax account',
        paragraphs: [
          'Formation and permission are different things. The Secretary of State creates the entity; a sales tax permit from the Comptroller lets you collect and remit sales tax; the IRS issues an EIN, free, which you need to open a business bank account and to file employment returns. Local permits and zoning rules apply to a physical location or a home-based business, so check with the city before signing a lease or converting a garage.',
          'Texas sales tax is 6.25% at the state rate, plus any local rate up to 2%, for a maximum of 8.25% in most places. If you sell taxable goods, you collect from the customer, hold the money, and remit on the Comptroller’s schedule. That money was never yours: treating it as revenue is the most common way a small retailer gets into trouble in the first year.',
        ],
      },
      {
        heading: 'The franchise tax and a clean set of books',
        paragraphs: [
          'The Texas franchise, or margin, tax applies to many taxable entities, including LLCs. For reports originally due January 1, 2026 through December 31, 2027, no tax is due if total revenue is at or below $2,650,000, and the rates above that threshold are 0.75% for most entities, 0.375% for retail and wholesale, and 0.331% under the EZ computation for qualifying entities. Because thresholds are adjusted periodically, verify the current figure on the Comptroller’s site before filing rather than relying on a number from a course.',
          'Bookkeeping is the part that compounds. Record every sale and expense as it happens, keep receipts, and reconcile the business account monthly. Separate accounts make the annual return a summary rather than an investigation, and they are the first thing a lender, buyer, or insurer will request. A simple spreadsheet with date, description, amount, and category is enough for a one-person business.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A sole proprietor sells $2,400 of taxable goods in a quarter at an 8.25% combined rate. What is owed to the Comptroller, and what did the owner actually earn from those sales?',
        steps: [
          'Sales tax collected = 0.0825 × 2,400 = 198.',
          'Revenue excluding tax = 2,400 − 198 = 2,202.',
          'Remit 198 to the Comptroller on the required schedule.',
        ],
        answer: '$198 is held for the state; revenue is $2,202, not $2,400.',
      },
      {
        prompt: 'Compare a sole proprietorship and an LLC for a one-person lawn service expecting $18,000 of revenue and carrying liability risk near customers’ homes.',
        steps: [
          'Sole proprietorship: no filing fee, profit reported on the owner’s return, personal liability for injury claims.',
          'LLC: $300 formation fee plus a registered agent and franchise filing, generally shielding personal assets.',
          'Insurance is advisable in both cases; the entity adds protection beyond a policy limit.',
        ],
        answer: 'An LLC is defensible here because liability exposure is real; the filing cost is small relative to the risk.',
      },
    ],
    terms: [
      ['sole proprietorship', 'a business with no separate legal identity from its owner'],
      ['limited liability company', 'a state-created entity that generally shields personal assets'],
      ['certificate of formation', 'the Texas filing that creates an LLC for a $300 fee'],
      ['registered agent', 'the person or service that accepts legal documents for an entity'],
      ['EIN', 'the free federal employer identification number issued by the IRS'],
      ['sales tax permit', 'the Comptroller authorization to collect and remit sales tax'],
      ['franchise tax', 'the Texas margin tax on taxable entities above the revenue threshold'],
      ['commingling', 'mixing business and personal money in one account'],
    ],
    practice: [
      mc('A sole proprietorship', ['is a separate legal entity', 'exposes the owner to personal liability', 'requires a $300 state filing', 'is identical to an LLC'], 1, 'It has no separate identity.'),
      num('An owner collects $1,850 of taxable sales at 8.25%. How much sales tax is owed to the state? Round to the nearest dollar.', 153, '1,850 × 0.0825 = 152.63.'),
      mc('An EIN is obtained from', ['the Texas Secretary of State', 'the IRS at no charge', 'a bank', 'the county clerk'], 1, 'The IRS issues it free.'),
    ],
    exercises: [
      'Write a one-page structure decision for a business idea you have, comparing liability, filing cost, and recordkeeping.',
      'Build a startup filing checklist with the agency, form, fee, and purpose for each item.',
      'Create a one-month bookkeeping sheet and enter ten realistic transactions with categories.',
      'Compute the sales tax you would collect on a month of taxable sales at your local combined rate.',
    ],
    review: [
      {
        prompt: 'Why is an LLC not automatically the right choice for every small business?',
        answer: 'It adds filing fees, a registered agent, annual reports, and a franchise filing, which may exceed the benefit when risk and revenue are small.',
      },
      {
        prompt: 'What is the difference between forming an entity and being allowed to sell?',
        answer: 'Formation creates the legal entity, while permits such as a sales tax permit authorize the activity and the collection of tax.',
      },
      {
        prompt: 'Why is collected sales tax not revenue?',
        answer: 'It is held on behalf of the state and must be remitted, so spending it leaves the business unable to pay what it owes.',
      },
      {
        prompt: 'Why do lenders and buyers ask for separate business records?',
        answer: 'Separate records show what the business actually earned and spent, which is the basis for valuation, lending, and tax reporting.',
      },
    ],
  },

  'adult-u5-l2': {
    topics: ['consideration', 'arbitration clause', 'consumer complaint'],
    objectives: [
      'Read a contract for the four clauses that most often cause losses.',
      'Route a consumer problem to the agency with actual authority over it.',
    ],
    applicationTitle: 'signing a phone contract and a gym membership',
    application:
      'Two ordinary contracts cause most young-adult disputes: a phone plan with a device installment and a gym membership with automatic renewal. Both are legal, both are enforceable, and both are decided by clauses most people never read. Before signing, find the total cost over the full term, the early termination charge, the automatic renewal language, and the cancellation method. Then put the cancellation in the form the contract requires, in writing, and keep the confirmation. That four-item check prevents more financial damage than any negotiation after the fact.',
    sections: [
      {
        heading: 'The clauses that cost money',
        paragraphs: [
          'A contract generally requires an offer, acceptance, consideration, capacity, and a lawful purpose. Consideration is the bargained-for exchange: each side gives something of value. Some contracts must be in writing, including many involving land or goods over $500 under the Uniform Commercial Code, and Texas has specific written-contract rules for certain services. A verbal agreement can be enforceable, but proving its terms without a document is difficult and expensive.',
          'Four clauses deserve a slow read. An arbitration clause usually requires disputes to be decided by a private arbitrator instead of a court and can limit class actions. An automatic renewal clause continues the contract unless you cancel in a specified way. A liquidated damages or early termination clause sets what you owe for leaving. A warranty disclaimer limits what the seller promises about quality. None of these is automatically unfair, but each changes what you can do later.',
        ],
      },
      {
        heading: 'Scams share a shape',
        paragraphs: [
          'Most consumer fraud follows a pattern: urgency, secrecy, an irreversible payment method, and a reason you must act before checking. Fake job offers that require paying for training, overpayment checks you are asked to deposit and forward, gift-card demands, tech-support calls, and messages claiming to be the IRS all use the same structure. The IRS contacts taxpayers by mail and does not demand immediate payment by gift card, wire, or cryptocurrency.',
          'The defensive rule is procedural rather than clever: never pay or send money under time pressure, verify the entity through a phone number you found yourself, and talk to one other person before acting. If a check arrives unexpectedly, do not deposit it. If a caller claims to be from an agency, hang up and call the published number. Reporting quickly improves the chance of recovery and protects the next person.',
        ],
      },
      {
        heading: 'Where complaints actually go',
        paragraphs: [
          'Route the complaint to the agency with authority. The Texas Attorney General’s Consumer Protection Division handles deceptive trade practices. The Federal Trade Commission takes fraud reports at ReportFraud.ftc.gov and identity-theft reports at IdentityTheft.gov. Financial products and services go to the Consumer Financial Protection Bureau. Landlord and tenant disputes generally go to justice court, and licensing complaints go to the state agency that issues the license for that trade.',
          'A usable complaint states dates, amounts, what was promised, what happened, what you have already tried, and what remedy you want. Attach the contract, receipts, and messages. Send a written demand to the business first and keep a copy; many complaints are resolved at that step because the business knows the record exists. Escalation is a sequence, not a single dramatic act.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A 24-month phone contract costs $45 a month plus a $200 device payment, with a $180 early termination fee. What is the total commitment and the cost of leaving in month 8?',
        steps: [
          'Service over the term = 24 × 45 = 1,080.',
          'Device payment = 200.',
          'Total commitment = 1,280.',
          'Leaving in month 8: remaining service is not always owed, but the termination fee of 180 plus any unpaid device balance is.',
        ],
        answer: '$1,280 committed over the term; leaving early costs the $180 fee plus the unpaid device balance.',
      },
      {
        prompt: 'A text says a package is held and asks for a $2.99 card payment through a link. What should you do?',
        steps: [
          'Do not use the link; the payment method and urgency are the pattern of a scam.',
          'Check the carrier’s official site or call the number on your own receipt.',
          'Report the message to the FTC and delete it.',
        ],
        answer: 'Ignore and report it; verify through a channel you found independently.',
      },
    ],
    terms: [
      ['consideration', 'the something of value each party exchanges in a contract'],
      ['capacity', 'the legal ability to understand and agree to a contract'],
      ['arbitration clause', 'a term requiring disputes to be decided outside court'],
      ['automatic renewal', 'a clause that extends the contract unless cancelled correctly'],
      ['liquidated damages', 'a stated amount owed when a contract is broken'],
      ['warranty disclaimer', 'language limiting the seller’s promises about quality'],
      ['deceptive trade practice', 'a misleading act in selling goods or services'],
      ['small claims', 'the justice court process for disputes within a monetary limit'],
    ],
    practice: [
      mc('A contract generally requires', ['a notary', 'offer, acceptance, and consideration', 'a lawyer', 'two witnesses'], 1, 'Those are the core elements.'),
      mc('An arbitration clause generally', ['guarantees a court trial', 'sends disputes to a private decision-maker', 'voids the contract', 'sets the price'], 1, 'It removes court by default.'),
      mc('The IRS generally', ['demands gift-card payment by phone', 'contacts taxpayers by mail', 'asks for passwords', 'calls only at night'], 1, 'Card demands signal fraud.'),
    ],
    exercises: [
      'Find a real contract you or your family has signed and mark the arbitration, renewal, termination, and warranty clauses.',
      'Write a one-page complaint about a hypothetical defective purchase, including dates, evidence, and the remedy requested.',
      'List the agency you would contact for five different problems: a scam call, a landlord repair, a lender, a contractor license, and identity theft.',
      'Draft a written cancellation notice that follows a contract’s stated method and keeps proof of delivery.',
    ],
    review: [
      {
        prompt: 'Why should an arbitration clause be read before signing rather than after a dispute?',
        answer: 'It can remove the option of court entirely, so discovering it after a problem means the choice has already been made for you.',
      },
      {
        prompt: 'What is the common structure of a consumer scam?',
        answer: 'Urgency, an irreversible payment method, a story that discourages verification, and a demand to act before checking with anyone.',
      },
      {
        prompt: 'How does a written demand help before a formal complaint?',
        answer: 'It creates a dated record, gives the business a chance to resolve the issue, and is often required as a step in the escalation.',
      },
      {
        prompt: 'Why does the right agency matter more than the loudest complaint?',
        answer: 'Only the agency with jurisdiction can investigate or order a remedy, so a complaint sent elsewhere consumes time without producing action.',
      },
    ],
  },

  'adult-u6-l1': {
    topics: ['appraisal district', 'bond election', 'public comment'],
    objectives: [
      'Route a practical problem to the office that can actually fix it.',
      'Use a public meeting or bond election to influence a local decision.',
    ],
    applicationTitle: 'a streetlight, a pothole, and a school bond',
    application:
      'Three problems that feel similar have three different owners. A broken streetlight usually belongs to the city or the utility that owns the pole, so the request goes to public works with the pole number and location. A pothole on a city street goes to the same department, while one on a state highway goes to TxDOT. A school bond appears on the ballot because the district’s board called the election, so the people to speak to are the trustees and the voters, not the city council. Sending the request to the wrong office is the most common reason nothing happens.',
    sections: [
      {
        heading: 'The map of who does what',
        paragraphs: [
          'Cities provide water, sewer, trash, streets, zoning, and police in most places; counties run the courts, property records, jails, and elections, and in unincorporated areas they handle roads and some services. School districts set curriculum, calendars, and tax rates for schools through an elected board. The state handles most criminal law, professional licensing, and higher education, and the federal government handles immigration, Social Security, and interstate matters.',
          'Knowing the level is a practical skill. A property tax protest goes to the county appraisal district and then the appraisal review board. A contractor licensing complaint goes to the state agency that licenses the trade. Benefits such as SNAP and Medicaid are administered by the state health and human services agency, with applications taken online or through local offices. Texas 2-1-1 routes callers to health and human services, and the number is the fastest way to find the right program.',
        ],
      },
      {
        heading: 'Voting where the money is decided',
        paragraphs: [
          'Local ballots decide bond issues, tax rates, city councils, school boards, and sometimes special districts. These elections often have low turnout, which means a small number of voters decide large commitments: a school bond can authorize hundreds of millions in debt repaid through property taxes. Read the ballot language for the amount, the purpose, and the estimated tax impact, and check whether the measure requires a specific project list.',
          'Register through your county elections office or the Texas Secretary of State, confirm your registration and polling place before election day, and check the deadlines for registration and for mail ballots. Texas requires an acceptable form of identification at the polls. If you move, update the registration before the next election rather than discovering the problem at the door.',
        ],
      },
      {
        heading: 'Public comment that gets a response',
        paragraphs: [
          'A public meeting is a decision process with rules. Agendas are posted in advance, public comment is usually time-limited, and the body can only act on posted items. Effective comment names the specific agenda item, states the requested action, gives one or two facts with a source, and stops. Handing in written comments gives the record something durable that staff can attach to the file.',
          'Follow up in writing after the meeting, reference the date and item, and ask for the next step and the timeline. If the answer is no, ask what would change it: a cost estimate, a grant cycle, or a different department. Persistence with a specific request is far more effective than repetition of a general complaint, and it is the difference between being heard and being recorded.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A pothole on a residential street, a missing sidewalk near a school, and a dangerous intersection on a state highway. Route each request.',
        steps: [
          'Pothole on a city street: city public works, with location and photos.',
          'Sidewalk near a school: city transportation or capital improvement program, and the school district as a partner.',
          'State highway intersection: TxDOT district office, since the state maintains that road.',
        ],
        answer: 'City public works, city transportation, and TxDOT respectively.',
      },
      {
        prompt: 'A school bond of $90 million is on the ballot for a district with $3 billion of taxable property value. What does that imply about the tax rate, roughly?',
        steps: [
          'Debt service is paid from property taxes over the bond term.',
          'Annual debt service: $90 million at 4% over 25 years is about $5.76 million a year.',
          'Rate per $1 of taxable value = 5.76 million ÷ 3 billion = 0.00192.',
          'Convert to the per-$100 convention tax bills use: 0.00192 × 100 = $0.192 per $100.',
          'On a $300,000 home, the annual cost would be 300,000 ÷ 100 × 0.192 = $576.',
        ],
        answer: 'About $0.192 per $100 of taxable value — 19.2 cents — or roughly $576 a year on a $300,000 home, depending on rates and term; the ballot should state the estimate.',
      },
    ],
    terms: [
      ['appraisal district', 'the county office that values property for taxation'],
      ['bond election', 'a vote authorizing a district to borrow for construction'],
      ['public comment', 'the timed portion of a meeting where residents speak'],
      ['agenda', 'the posted list of items a body may act on'],
      ['special district', 'a local government created for a specific service'],
      ['TxDOT', 'the state agency that builds and maintains state highways'],
      ['2-1-1', 'the Texas referral line for health and human services'],
      ['trustee', 'an elected member of a school board'],
    ],
    practice: [
      mc('School district policy is set by', ['the governor', 'the elected school board', 'the Texas Supreme Court', 'the city council'], 1, 'Trustees set district policy.'),
      mc('A property tax protest is filed with', ['the county appraisal district', 'the IRS', 'the school board', 'TxDOT'], 1, 'Appraisal districts handle valuations.'),
      mc('2-1-1 in Texas connects residents to', ['traffic reports', 'health and human services', 'college applications', 'weather alerts'], 1, 'It is a services referral line.'),
    ],
    exercises: [
      'Pick a real local problem and write the request you would send, naming the office, location, and requested action.',
      'Look up one bond or tax measure from a recent local ballot and summarize the amount, purpose, and stated tax impact.',
      'Draft two minutes of public comment on a posted agenda item, with one sourced fact.',
      'Build a contact sheet of five local offices with address, phone, and what each handles.',
    ],
    review: [
      {
        prompt: 'Why does the level of government matter more than the size of the complaint?',
        answer: 'Only the office with authority can act, so routing the request correctly determines whether anything happens at all.',
      },
      {
        prompt: 'Why do local elections decide so much spending?',
        answer: 'Bond issues and tax rates are set locally, and low turnout means a small share of residents authorizes large long-term debt.',
      },
      {
        prompt: 'What makes public comment effective?',
        answer: 'It names the posted item, requests a specific action, gives one or two sourced facts, and is short enough to be heard.',
      },
      {
        prompt: 'How should you follow up after a public meeting?',
        answer: 'Send a written note referencing the date and item, ask for the next step and timeline, and ask what would change the decision.',
      },
    ],
  },

  'adult-u6-l2': {
    topics: ['decision journal', 'reversible', 'conflict'],
    objectives: [
      'Classify a decision as reversible or irreversible and size the research accordingly.',
      'Document a conflict so the next conversation starts from facts.',
    ],
    applicationTitle: 'the two-week decision',
    application:
      'A job offer arrives with a deadline of Friday and a move to another city attached. The decision is partly reversible and partly not: the job can be left, but the lease, the move, and the lost savings cannot be undone as easily. Write the options, the criteria, and what you would need to know before deciding, then separate the reversible from the irreversible parts. Ask for the deadline in writing and for two extra days, which is a normal request. Most pressure to decide immediately is artificial, and a decision made under artificial pressure is usually the one people regret.',
    sections: [
      {
        heading: 'A process that fits on one page',
        paragraphs: [
          'Name the decision, list three to five realistic options including doing nothing, choose the criteria that actually matter, and score each option against them. Weight the criteria before scoring, because weighting after the fact produces the answer you already wanted. For decisions with money at stake, write the numbers: cost now, cost later, and the best alternative you are giving up, which is the opportunity cost.',
          'Then classify: reversible decisions deserve speed and a test, irreversible ones deserve research, advice, and a night of sleep. A purchase that can be returned is reversible; a lease, a move, a surgery, or a loan are not. Most people over-research reversible decisions and under-research irreversible ones, which is exactly backwards.',
        ],
      },
      {
        heading: 'Facts, impact, request',
        paragraphs: [
          'A conflict statement has three parts. State the observed facts without interpretation, name the impact on you or the work, and make a specific request with a deadline. “The last three shifts you arrived twenty minutes late, which left me alone on the floor; can we agree on a start time we both can meet?” gives the other person something to accept, refuse, or counter, which a character judgment does not.',
          'Choose the channel deliberately. A disagreement about a schedule or a bill is usually better in writing, because it creates a record and removes the pressure of an audience. A relationship problem is often better in person, with the same three-part structure. Escalating in the moment, in front of others, is how small problems become grievances.',
        ],
      },
      {
        heading: 'When the other side will not move',
        paragraphs: [
          'Know your alternatives before you need them: a different shift, a different apartment, a small-claims filing, or simply ending the arrangement. That alternative is what makes a request credible, and it also tells you when to stop negotiating. Set a deadline for a response and decide in advance what you will do if it passes, so the decision is not made in frustration.',
          'Document as you go. Dates, messages, receipts, and photographs are the difference between a complaint and a case. Keep the tone factual even when the other party is not; written records are read later by people who were not there, and the calmer record is usually the more persuasive one when someone else reads it later.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A used car is offered at $6,800 with a $400 repair estimate. The alternative is keeping a reliable car that costs $150 a month in maintenance. How should the decision be framed?',
        steps: [
          'Total first-year cost of buying: 6,800 + 400 + tax, title, insurance, and fuel.',
          'Cost of keeping: 150 × 12 = 1,800 plus fuel and insurance already budgeted.',
          'Add the irreversible element: the purchase price cannot be recovered quickly.',
        ],
        answer: 'Compare first-year total cost and reversibility, not the sticker price against a monthly repair bill.',
      },
      {
        prompt: 'A roommate dispute over noise has escalated twice. Write the next message.',
        steps: [
          'Facts: music above conversation level after 11 p.m. on four nights in the last week.',
          'Impact: lost sleep before work shifts.',
          'Request: headphones after 11 p.m., or agree on two quiet nights, with a check-in in a week.',
        ],
        answer: 'A dated message with facts, impact, a specific request, and a follow-up date.',
      },
    ],
    terms: [
      ['reversible decision', 'a choice that can be undone at low cost'],
      ['irreversible decision', 'a choice whose consequences cannot easily be undone'],
      ['opportunity cost', 'the value of the best alternative given up'],
      ['decision journal', 'a written record of the options, information, and expected outcome'],
      ['sunk cost', 'money already spent that cannot be recovered'],
      ['escalation', 'moving a dispute to a higher authority or formal step'],
      ['documentation', 'dated records that support your account of events'],
      ['reservation point', 'the least favorable outcome you will accept'],
    ],
    practice: [
      mc('When a project is going badly, the best question is', ['how much we have already spent', 'what future cost and benefit remain', 'who is to blame', 'how to hide the loss'], 1, 'Only future costs and benefits should guide the decision.'),
      mc('A useful conflict statement includes', ['a character judgment', 'facts, impact, and a specific request', 'an ultimatum', 'silence'], 1, 'Facts plus a request is actionable.'),
      mc('Signing a one-year lease is', ['reversible at no cost', 'largely irreversible', 'not a decision', 'always refundable'], 1, 'Leaving early has real costs.'),
    ],
    exercises: [
      'Take one current decision and write a one-page analysis with options, weighted criteria, and a reversal test.',
      'Rewrite a recent disagreement as facts, impact, and a specific request with a deadline.',
      'Start a decision journal with three entries and a review date for each.',
      'List the alternatives you have in one ongoing negotiation and rate each as strong or weak.',
    ],
    review: [
      {
        prompt: 'Why is it backwards to over-research reversible decisions?',
        answer: 'A reversible choice can be tested cheaply, so deliberation costs more than trying it, while irreversible choices deserve the research instead.',
      },
      {
        prompt: 'What are the three parts of a usable conflict statement?',
        answer: 'The observed facts, the impact those facts have, and a specific request with a deadline.',
      },
      {
        prompt: 'Why write a disagreement down instead of raising it in the moment?',
        answer: 'Writing creates a dated record, removes the pressure of an audience, and lets you state the request precisely.',
      },
      {
        prompt: 'How does knowing your alternative change a negotiation?',
        answer: 'A real alternative makes the request credible and tells you when to stop, so you are not negotiating from necessity.',
      },
    ],
  },

  'adult-u7-l1': {
    topics: ['APR', 'amortization', 'total interest'],
    objectives: [
      'Compare two loan offers on total repayment rather than monthly payment.',
    ],
    applicationTitle: 'two offers for the same car',
    application:
      'The dealer offers 8% for four years and the credit union offers 7.5% for six. The monthly payment on the longer loan looks easier, but the total paid is higher because interest runs for twenty-four more months. Before signing, ask for the amount financed, the APR, the monthly payment, and the total of payments in writing, then compare the totals rather than the payments. A shorter term with a payment you can sustain usually costs less, and paying extra principal on any installment loan shortens the term without changing the rate.',
    sections: [
      {
        heading: 'Interest, APR, and the term',
        paragraphs: [
          'The interest rate prices the principal; the APR is meant to capture the yearly cost of credit including many fees, which is why a loan advertised at a low rate can carry a higher APR. Compare APRs and totals of payments, not monthly payments, because the payment can be lowered simply by stretching the term. Origination fees, documentation fees, and required add-ons all raise the real cost.',
          'Term length is the quiet variable. A longer term lowers each payment and raises the total interest, since interest accrues on a balance that stays higher for longer. The difference is not small: on $20,000 at 8%, a four-year loan costs roughly $3,400 in interest, while a six-year loan costs roughly $5,250. The six-year payment is easier; the four-year loan is cheaper.',
        ],
      },
      {
        heading: 'Amortization explains the slow start',
        paragraphs: [
          'Installment loans amortize: each payment covers the interest accrued since the last payment, and the remainder reduces principal. Early payments are mostly interest because the balance is large, later payments are mostly principal, and the crossover happens gradually. That is why paying an extra $50 in month two saves more than paying $50 in month fifty: the earlier payment removes interest from every subsequent month.',
          'A minimum payment set as a percentage of the balance can be nearly useless. On $1,500 at 24% APR, monthly interest is $30, and a 3% minimum is $45, so only $15 reduces the balance. A fixed payment well above the minimum is what actually retires debt. If the statement offers a “minimum due” and a “statement balance,” understand that only the second one avoids new interest on purchases.',
        ],
      },
      {
        heading: 'Choosing and exiting a payoff plan',
        paragraphs: [
          'List every debt with balance, APR, minimum, and monthly interest. Avalanche pays the highest APR first and minimizes total interest; snowball pays the smallest balance first and produces early wins. Either works if the total payment is fixed and directed deliberately. Switching plans repeatedly is the only reliably bad strategy.',
          'If a payment becomes unaffordable, contact the lender before missing one. Hardship programs, modified terms, and deferments exist, and they are cheaper than default, which adds fees, a damaged report, and possible collection. For very high-cost products such as payday and auto-title loans, the goal is to exit the cycle rather than optimize it, using a credit union small loan or a payment plan where available.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Compare total interest on $20,000 at 8% over 48 months versus 72 months using the standard amortizing payment.',
        steps: [
          '48 months: payment ≈ $488.26; total paid ≈ $23,436; interest ≈ $3,436.',
          '72 months: payment ≈ $350.66; total paid ≈ $25,248; interest ≈ $5,248.',
          'The longer loan lowers the payment by about $138 and costs about $1,812 more.',
        ],
        answer: 'The 48-month loan costs about $3,440 in interest versus about $5,250 for 72 months.',
      },
      {
        prompt: 'A balance is $3,000 at 18% APR. Compare paying a 3% minimum with paying $200 a month for the first month.',
        steps: [
          'Monthly interest = 0.015 × 3,000 = 45.',
          '3% minimum = 90, so principal falls by 90 − 45 = 45.',
          'A $200 payment reduces principal by 200 − 45 = 155.',
        ],
        answer: 'The minimum removes $45 of principal; $200 removes $155, more than three times as much.',
      },
    ],
    terms: [
      ['annual percentage rate', 'the yearly cost of credit including many fees'],
      ['amortization', 'the schedule that splits each payment into interest and principal'],
      ['principal', 'the amount borrowed, excluding interest and fees'],
      ['total of payments', 'the sum of every payment over the loan term'],
      ['origination fee', 'a charge the lender deducts for making the loan'],
      ['minimum payment', 'the smallest amount the lender will accept each month'],
      ['statement balance', 'the amount owed that avoids new interest on purchases'],
      ['hardship program', 'a lender arrangement that temporarily changes payment terms'],
    ],
    practice: [
      num('What is one month of interest on $3,600 at 15% APR?', 45, '15% ÷ 12 = 1.25%; 3,600 × 0.0125 = 45.'),
      num('What is one month of interest on $12,000 at 6% APR?', 60, '6% ÷ 12 = 0.5%; 12,000 × 0.005 = 60.'),
    ],
    exercises: [
      'Obtain one real loan offer and compute the total of payments and total interest.',
      'Compare the same loan amount at two terms and write a paragraph on the payment-versus-total trade-off.',
    ],
    review: [
      {
        prompt: 'Why does an extra payment early save more than the same amount later?',
        answer: 'It reduces the balance that interest is charged on for every remaining month, so the saving compounds over the life of the loan.',
      },
      {
        prompt: 'What makes a percentage-based minimum payment dangerous?',
        answer: 'When the minimum is close to the monthly interest, almost nothing reduces principal, so the balance can persist for years.',
      },
    ],
  },

  'adult-u7-l2': {
    topics: ['compounding', 'employer match', 'diversification'],
    objectives: [
      'Compare the after-fee growth of two accounts with different expense ratios.',
    ],
    applicationTitle: 'the first retirement contribution',
    application:
      'A first job offers a 401(k) with a match and a list of funds with expense ratios. The order of decisions is simple: contribute at least enough to earn the full match, choose a diversified low-cost fund rather than a single stock, and increase the contribution with each raise before lifestyle spending absorbs it. The match is part of compensation, and the expense ratio is a cost you pay every year whether or not the fund performs. Starting ten years earlier matters more than picking the perfect fund.',
    sections: [
      {
        heading: 'Compounding and the cost of waiting',
        paragraphs: [
          'Compound growth means returns earn returns. The Rule of 72 estimates doubling time as 72 divided by the annual return, so 6% doubles in about twelve years and 9% in about eight. The estimate assumes a constant return, which markets do not deliver, but it is accurate enough to show why time dominates contribution size in the early years.',
          'Waiting has a measurable cost. Investing $200 a month from age 25 to 65 at an average 6% produces far more than investing $400 a month from age 45 to 65, even though the second person contributes the same total. The difference is the extra twenty years of growth on the early contributions, and no fund selection later can fully replace it.',
        ],
      },
      {
        heading: 'Accounts, taxes, and the match',
        paragraphs: [
          'A traditional 401(k) or IRA generally uses pre-tax money: contributions may reduce taxable income now, withdrawals are taxed as ordinary income later, and early withdrawals can trigger tax and a penalty. A Roth account generally uses after-tax money: no deduction now, qualified withdrawals later are tax-free. The choice depends on your tax rate now versus later, and a reasonable default for a low-income year is often the Roth.',
          'An employer match is compensation contingent on contributing. A common formula matches a share of contributions up to a percentage of pay, so contributing below the match threshold leaves part of the offer unclaimed. Vesting schedules determine when the match becomes yours, and they are worth reading before changing jobs.',
        ],
      },
      {
        heading: 'Fees and diversification',
        paragraphs: [
          'Fees compound against you. A 1% annual expense ratio on a $50,000 balance growing at 6% for thirty years leaves roughly $216,000, while a 0.05% ratio leaves roughly $283,000, a difference of about $67,000. The fund with the lower ratio is not automatically better, but the cost difference is certain while the performance difference is not.',
          'Diversification spreads money across many companies and sectors, reducing the risk that one failure destroys the account. It does not remove market-wide risk, and it does not guarantee a gain. Bank deposits at insured institutions are protected up to the published limit, while investment funds are not insured and can lose value. Anyone promising a guaranteed high return is describing fraud, not investing.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'At a 7% average annual return, how long does money take to double, and what does $200 a month for 25 years become?',
        steps: [
          'Rule of 72: 72 ÷ 7 ≈ 10.3 years to double.',
          'Monthly rate = 0.07 ÷ 12 ≈ 0.005833; 300 months.',
          'Growth factor for a monthly contribution ≈ ((1.005833)^300 − 1) ÷ 0.005833 ≈ 811.',
          '200 × 811 ≈ 162,000, on 60,000 of contributions.',
        ],
        answer: 'About 10.3 years to double; roughly $162,000 after 25 years.',
      },
      {
        prompt: 'Two funds hold the same $50,000 for 30 years at 6% before fees. One charges 1%, the other 0.05%. Compare the ending balances.',
        steps: [
          'Net returns: 5% and 5.95%.',
          '50,000 × 1.05^30 ≈ 216,097.',
          '50,000 × 1.0595^30 ≈ 283,000.',
          'Difference ≈ 67,000.',
        ],
        answer: 'The low-cost fund ends about $67,000 higher on the same starting balance.',
      },
    ],
    terms: [
      ['compound growth', 'returns that earn further returns over time'],
      ['Rule of 72', 'a shortcut for estimating doubling time from a return rate'],
      ['expense ratio', 'the annual percentage a fund charges its investors'],
      ['employer match', 'an employer contribution tied to the employee’s own contribution'],
      ['vesting', 'the schedule on which employer contributions become yours'],
      ['diversification', 'spreading investments to reduce single-company risk'],
      ['Roth account', 'a retirement account funded with after-tax money'],
      ['market risk', 'the risk that the whole market falls, which diversification cannot remove'],
    ],
    practice: [
      num('Using the Rule of 72, how many years to double at 4%?', 18, '72 ÷ 4 = 18.'),
      mc('An expense ratio is', ['a one-time sales charge', 'an annual percentage charged by a fund', 'a tax', 'an employer match'], 1, 'It is charged yearly.'),
    ],
    exercises: [
      'Look up the expense ratios of two index funds and compute the fee difference on a $10,000 balance over 20 years at 6%.',
      'Write your own contribution plan: percentage of pay, account type, and the raise date you will increase it.',
    ],
    review: [
      {
        prompt: 'Why does starting early beat contributing more later?',
        answer: 'Early contributions compound for more years, and that growth typically exceeds the extra amount a later saver can add.',
      },
      {
        prompt: 'What makes a guaranteed high return a fraud signal?',
        answer: 'Legitimate investments carry risk and can lose value, and only insured deposits are federally protected, so a guarantee of high returns is not credible.',
      },
    ],
  },

  'adult-u8-l1': {
    topics: ['BATNA', 'reservation point', 'written notice'],
    objectives: [
      'Draft a written dispute notice that a business can act on without a phone call.',
    ],
    applicationTitle: 'asking for a raise with evidence',
    application:
      'A raise conversation goes better with three things prepared: a documented list of what you delivered, the market range for the role in your area from a public wage-statistics source, and a specific number with a fallback that you can defend. Open with the results, state the number, and stop talking. If the answer is no, ask what would make it yes and when to revisit, and get that in writing. A refused raise with a documented review date is a better outcome than a vague promise, because it converts an opinion into a commitment.',
    sections: [
      {
        heading: 'Leverage is prepared, not performed',
        paragraphs: [
          'Your BATNA is the best alternative to a negotiated agreement: the other offer, the other apartment, the small-claims filing, or walking away. A strong alternative lets you ask without desperation; a weak one tells you to build one before the conversation. The reservation point is the least you will accept, decided in advance and written down so it does not drift when the other side pushes.',
          'Anchor with evidence rather than opinion. For pay, use public wage statistics for the occupation and area plus documented results from your own record. For rent, use comparable listings and the condition of the unit. For a repair or deposit dispute, use the lease, photographs, dates, and written notices. The person who brings the documents usually sets the frame of the discussion.',
        ],
      },
      {
        heading: 'Write it so it can be answered',
        paragraphs: [
          'A written dispute should fit on one page: what happened, with dates; what you want, in a specific amount or action; by when; and what happens next if it is not resolved. Attach the evidence and keep a copy. Avoid characterizing motives; describe conduct. A letter that a supervisor can forward to a decision-maker without editing is far more effective than an angry one that requires interpretation.',
          'Written notice is often a legal prerequisite. Texas Property Code §92.056, for example, requires written notice of a condition that materially affects health or safety before certain repair remedies, and deposit disputes turn on whether an itemized list and a forwarding address were provided in writing. Sending notice by a method that proves delivery, such as certified mail or a tracked email, protects the record.',
        ],
      },
      {
        heading: 'Escalate in order',
        paragraphs: [
          'Start with the person who can fix the problem, then the supervisor, then the formal complaint. Each step should reference the previous one with its date. Consumer complaints go to the Texas Attorney General’s Consumer Protection Division; financial products go to the Consumer Financial Protection Bureau; fraud goes to the FTC. Small claims in justice court handle disputes within the court’s monetary limit and are designed for people without lawyers.',
          'Decide in advance when to stop. A dispute that consumes more time and stress than the amount at stake is a poor trade, and saying so out loud is not defeat. The measure of a good negotiation is not winning every point; it is reaching a defensible outcome with the relationship and the record intact.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Rent is being raised from $1,150 to $1,300 with sixty days’ notice. Comparable units rent for $1,180 to $1,220. Write the negotiation.',
        steps: [
          'BATNA: moving costs roughly two months’ rent plus time, so it is a weak but real alternative.',
          'Evidence: three comparable listings at $1,180–$1,220 and a clean payment record.',
          'Ask: $1,210 with a twelve-month renewal signed this week.',
          'Fallback: accept $1,225 with a two-year term or a repair commitment.',
        ],
        answer: 'A specific counter at $1,210 supported by comps, with a documented fallback.',
      },
      {
        prompt: 'A final phone bill includes a $70 charge for a service you cancelled in writing. Draft the notice.',
        steps: [
          'State the cancellation date and attach the confirmation.',
          'State the charge and the correct balance.',
          'Request removal within ten business days.',
          'Name the next step: a complaint to the Attorney General’s Consumer Protection Division.',
        ],
        answer: 'A dated one-page notice with the evidence, the exact correction, a deadline, and the escalation.',
      },
    ],
    terms: [
      ['BATNA', 'the best alternative available if no agreement is reached'],
      ['reservation point', 'the least favorable outcome you will accept'],
      ['anchoring', 'setting the first number that frames the negotiation'],
      ['market wage data', 'public statistics on pay for an occupation and area'],
      ['written demand', 'a dated letter requesting a specific remedy by a deadline'],
      ['proof of delivery', 'evidence such as certified mail that a notice arrived'],
      ['escalation path', 'the sequence of people and agencies a dispute moves through'],
      ['small claims court', 'the justice court process for disputes under a monetary limit'],
    ],
    practice: [
      mc('A BATNA is', ['your opening offer', 'your best alternative if no deal is reached', 'a written contract', 'your final price'], 1, 'It is the walk-away alternative.'),
      mc('A written demand should include', ['only a complaint', 'facts, a specific remedy, and a deadline', 'a threat', 'a verbal summary'], 1, 'Specifics and a deadline make it usable.'),
    ],
    exercises: [
      'Write a one-page raise request with three documented results, a market range, and a specific number.',
      'Draft a dispute notice for a real or hypothetical bill error, including the escalation step.',
    ],
    review: [
      {
        prompt: 'Why decide your reservation point before the conversation?',
        answer: 'Pressure and momentum push people past their own limits, so a written figure made in advance keeps the decision from drifting.',
      },
      {
        prompt: 'What makes a written dispute more effective than a phone call?',
        answer: 'It creates a dated record that can be forwarded and reviewed, and it is often a legal prerequisite for the remedy being requested.',
      },
    ],
  },

  'adult-u8-l2': {
    topics: ['expected value', 'deductible', 'hindsight bias'],
    objectives: [
      'Decide whether a warranty or insurance product is worth its price using expected value and downside risk.',
    ],
    applicationTitle: 'whether to buy the extended warranty',
    application:
      'At the register, a $180 warranty is offered on a $1,200 laptop. The expected value calculation is simple: if the chance of a covered failure is 12%, the expected loss is $144, which is less than the $180 price. The warranty is therefore a losing bet on average, and it is worth buying only if a $1,200 replacement would be genuinely unaffordable. That is the rule to apply consistently: insure the losses you could not absorb, self-insure the ones you could, and ignore the framing that makes the small certain payment feel safer than the large unlikely one.',
    sections: [
      {
        heading: 'Expected value is a tool, not a verdict',
        paragraphs: [
          'Expected value multiplies each outcome by its probability and adds the results. A 5% chance of a $10,000 loss has an expected cost of $500. A 12% chance of a $1,200 loss has an expected cost of $144. Comparing that with a premium or warranty price gives a first answer: if the price exceeds the expected loss, the product is profitable for the seller and costly for you on average.',
          'The average is not the whole decision. A small chance of a loss that would ruin you is not equivalent to a certain small cost, which is why insurance is bought for protection rather than for expected profit. A deductible sets how much of each loss you keep; a very high deductible lowers the premium and can leave you unable to repair or replace what you lost. The right question is not “which is cheaper on average” but “which loss could I not survive.”',
        ],
      },
      {
        heading: 'Sunk costs and hindsight',
        paragraphs: [
          'Sunk costs are already spent and cannot be recovered. Staying in a bad course, lease, or project because of money already spent is the sunk-cost fallacy: the only relevant question is what the next dollar buys. The same error appears as “I have already paid for the ticket” when the event is no longer worth attending, and as “I have come this far” in a project that will not work.',
          'Hindsight bias makes past decisions look more predictable than they were. A decision journal records the options, the information available, and what you expected, plus a review date. Reviewing it later separates a bad decision from a bad outcome, which is the difference between learning and merely feeling regret. Good decisions sometimes produce bad results, and the journal is what lets you tell the difference.',
        ],
      },
      {
        heading: 'Rules that make pressure unnecessary',
        paragraphs: [
          'Decide policies in advance so individual decisions are cheap: no financing above a set APR, no purchase above a set amount without a night’s sleep, no deductible you could not pay in cash, and no investment you cannot explain in two sentences. A written rule is easier to follow than a resolution made in the moment, because it removes the negotiation with yourself.',
          'For recurring costs, review once a year rather than continuously: insurance at renewal, subscriptions quarterly, and fees when a statement arrives. Continuous review consumes attention without improving outcomes, while an annual comparison catches the drift that makes old policies and plans expensive.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A $180 warranty covers a $1,200 laptop with a 12% chance of a covered failure. Should you buy it?',
        steps: [
          'Expected loss = 0.12 × 1,200 = 144.',
          'Warranty price = 180, which exceeds the expected loss by 36.',
          'Buy only if a $1,200 replacement would be unaffordable.',
        ],
        answer: 'No on expected value; yes only if the loss would be genuinely unaffordable.',
      },
      {
        prompt: 'A $90 concert ticket is for tonight, and you now would rather stay home. What does the sunk-cost rule say?',
        steps: [
          'The $90 is spent either way and cannot be recovered.',
          'Compare only the future: the value of attending versus the value of the evening at home.',
          'Choose on that comparison, not on the ticket price.',
        ],
        answer: 'Decide on the value of attending now; the ticket price is irrelevant to that choice.',
      },
    ],
    terms: [
      ['expected value', 'the probability-weighted average of possible outcomes'],
      ['downside risk', 'the size of a loss you could not absorb'],
      ['self-insure', 'to carry a risk yourself by keeping reserves'],
      ['premium', 'the amount paid for insurance coverage'],
      ['deductible', 'the amount you pay before insurance responds'],
      ['sunk cost', 'money already spent that cannot be recovered'],
      ['hindsight bias', 'the illusion that a past outcome was predictable'],
      ['decision rule', 'a policy decided in advance to simplify a repeated choice'],
    ],
    practice: [
      num('What is the expected cost of a 15% chance of an $8,000 loss?', 1200, '0.15 × 8,000 = 1,200.'),
      mc('A decision journal primarily reduces', ['premiums', 'hindsight bias', 'deductibles', 'taxes'], 1, 'It records what you knew beforehand.'),
    ],
    exercises: [
      'Evaluate one warranty or service plan you have been offered using expected value and a downside test.',
      'Write three decision rules for yourself with specific numbers and the reason for each.',
    ],
    review: [
      {
        prompt: 'When is buying a warranty rational even when its price exceeds the expected loss?',
        answer: 'When the loss would be unaffordable, so the protection is worth more than the expected value calculation suggests.',
      },
      {
        prompt: 'How does a decision journal separate a bad decision from a bad outcome?',
        answer: 'It records the information and expectations at the time, so a later review can judge the reasoning rather than the result.',
      },
    ],
  },
};
