import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** CTE Business and CTE Health Science (grade 11) depth pass. */
export const DEPTH_G11C: Record<string, LessonDepth> = {
  'cte-u1-l1': {
    topics: ['business plan'],
    objectives: [
      'Build the components of a business plan and test a market assumption.',
      'Read basic financial statements and compute break-even.',
    ],
    sections: [
      {
        heading: 'From idea to business plan',
        paragraphs: [
          'A business plan states a problem, a customer, a solution, and a way to make money. The executive summary comes first but is written last, and the market analysis identifies the specific segment a business serves rather than “everyone.” A plan is a hypothesis about demand, and its value lies in the tests it proposes, not in the length of the document.',
          'Market research uses primary data, such as surveys and interviews, and secondary data, such as census figures and industry reports. A survey of twenty classmates is a convenience sample and cannot support a claim about a city, which is why the sample and its limits belong in the plan. Pricing research asks what customers actually paid for substitutes, not what they say they would pay.',
          'Legal structure affects liability and taxes. A sole proprietorship is simple but exposes personal assets, a limited liability company separates them, and a corporation can raise capital by issuing shares. In Texas, registration and franchise tax obligations apply at thresholds the Secretary of State and Comptroller publish, and a plan should cite the specific requirement rather than assume it.',
        ],
      },
      {
        heading: 'Financial statements and break-even',
        paragraphs: [
          'An income statement reports revenue minus expenses over a period, a balance sheet lists assets and liabilities at a moment, and a cash-flow statement tracks money moving in and out. Profit on paper does not guarantee cash in the bank, which is why a business with growing sales can still fail if customers pay late.',
          'Contribution margin is price minus variable cost per unit. If a product sells for $25 and costs $10 in materials, each sale contributes $15 toward fixed costs. Break-even quantity is fixed costs divided by contribution margin, so $3,000 of monthly overhead requires 200 units, and every unit beyond that adds profit.',
          'Forecasts should show three scenarios: conservative, expected, and optimistic. A plan that assumes the best case gives no warning when sales arrive slowly, and lenders and investors read the conservative case first. Stating the assumptions behind each number makes the model auditable and lets a student defend it in a presentation. Students should also learn to separate a plan from a pitch: the plan documents assumptions, while the pitch makes a claim an audience can act on in a few minutes. Practicing the pitch with a skeptical listener exposes the assumptions that the writer has stopped noticing, and revising in response is the difference between a school exercise and a plan that could attract a partner rather than merely satisfy an assignment.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A product sells for $25, has $10 variable cost, and the business has $3,000 monthly fixed costs. Find break-even and the profit at 250 units.',
        steps: [
          'Contribution margin = 25 − 10 = $15.',
          'Break-even = 3,000 ÷ 15 = 200 units.',
          'At 250 units: 50 × 15 = $750 profit.',
        ],
        answer: 'Break-even is 200 units, and 250 units produce about $750 in monthly profit.',
      },
    ],
    terms: [
      ['business plan', 'a document describing a venture’s market, operations, and finances'],
      ['market segment', 'a specific group of customers with shared needs'],
      ['fixed cost', 'an expense that does not change with output'],
      ['variable cost', 'an expense that changes with the number of units produced'],
      ['contribution margin', 'price minus variable cost per unit'],
      ['break-even', 'the sales level at which revenue equals total cost'],
    ],
    practice: [
      num('With a $25 price and $10 variable cost, what is the contribution margin?', 15, '25 − 10 = 15.'),
      num('At $3,000 fixed cost and $15 margin, what is break-even in units?', 200, '3,000 ÷ 15 = 200.'),
      mc('A convenience sample', ['proves a citywide trend', 'cannot support a broad claim', 'is always biased', 'replaces secondary data'], 1, 'Its limits must be stated.'),
    ],
    review: [
      {
        prompt: 'Why can a profitable business still run out of cash?',
        answer: 'Because profit is recorded when a sale is made, while cash arrives when customers pay, so slow collections can leave bills unpaid.',
      },
      {
        prompt: 'How do you compute break-even quantity?',
        answer: 'Divide fixed costs by the contribution margin, which is price minus variable cost per unit.',
      },
    ],
    exercises: [
      'Write a one-page business plan for a local venture with a tested assumption.',
      'Build a break-even model in a spreadsheet and test three price points.',
    ],
  },
  'cte-u2-l1': {
    topics: ['marketing mix'],
    objectives: [
      'Apply the marketing mix to a product and choose a pricing strategy.',
      'Measure customer response and explain ethical marketing obligations.',
    ],
    sections: [
      {
        heading: 'The marketing mix and pricing',
        paragraphs: [
          'The marketing mix combines product, price, place, and promotion. A product decision includes features, packaging, and warranty; place covers distribution channels from retail to direct-to-consumer; promotion includes advertising, content, and personal selling. Changing one element affects the others, which is why a luxury price requires different placement than a discount price.',
          'Pricing strategies include cost-plus, which adds a margin to cost; value-based, which sets price from what customers will pay; and penetration, which starts low to gain share. A coffee shop pricing at $4.50 must deliver an experience that justifies it, because customers compare against substitutes rather than against cost.',
          'Promotion should be measured. A campaign’s conversion rate is the share of viewers who act, and cost per acquisition divides spend by the number of new customers. A $500 campaign that produces 25 new customers costs $20 each, which is worthwhile only if each customer generates more than $20 in margin.',
        ],
      },
      {
        heading: 'Customers, ethics, and measurement',
        paragraphs: [
          'Customer research distinguishes stated preference from behavior. Asking whether someone would buy a product invites politeness, while a preorder requires commitment. Small businesses test with a limited run, a pop-up, or a landing page that measures clicks, because behavior is more reliable than opinion.',
          'Ethical marketing means truthful claims, clear pricing, and respect for data. The Federal Trade Commission requires that endorsements reflect genuine experience and that material connections be disclosed, and the CAN-SPAM Act sets rules for commercial email. Collecting customer data creates obligations under privacy laws, and a business should collect only what it uses.',
          'Retention is cheaper than acquisition. A customer who returns three times is worth more than three one-time buyers, which is why service quality and follow-up matter. Measuring repeat rate, average order value, and referral share gives a small business a clearer picture than revenue alone, and those numbers are what a lender or investor will ask about. Students should also calculate a simple customer lifetime value, multiplying average order value by purchase frequency and margin, to see why retention changes the value of every acquisition. A business that knows those numbers can decide whether to spend on advertising or on service, and it can explain the decision with evidence.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A $500 campaign brings 25 new customers who each spend $60 with a 40% margin. Evaluate it.',
        steps: [
          'Cost per acquisition = 500 ÷ 25 = $20.',
          'Margin per customer = 60 × 0.40 = $24.',
          'Net gain per customer = $4, so the campaign is marginally profitable.',
        ],
        answer: 'It works but barely: $4 net per customer means small changes in conversion decide profitability.',
      },
    ],
    terms: [
      ['marketing mix', 'product, price, place, and promotion together'],
      ['penetration pricing', 'setting a low initial price to gain market share'],
      ['conversion rate', 'the share of an audience that takes the desired action'],
      ['cost per acquisition', 'marketing spend divided by new customers gained'],
      ['retention', 'the share of customers who return to buy again'],
      ['endorsement', 'a public recommendation, regulated when paid'],
    ],
    practice: [
      num('A $500 campaign yields 25 customers. What is the cost per acquisition?', 20, '500 ÷ 25 = $20.'),
      mc('The four elements of the marketing mix are', ['product, price, place, promotion', 'people, process, profit, price', 'plan, price, place, product', 'promotion, packaging, profit, place'], 0, 'The classic four Ps.'),
      mc('A preorder measures', ['stated preference', 'actual commitment', 'brand awareness', 'ad recall'], 1, 'It requires action.'),
    ],
    review: [
      {
        prompt: 'Why does a luxury price require different placement than a discount price?',
        answer: 'Because price signals quality and exclusivity, so the channel and presentation must support that expectation rather than undercut it.',
      },
      {
        prompt: 'Which measure best shows whether marketing paid for itself?',
        answer: 'Cost per acquisition compared with the margin each new customer generates over their relationship with the business.',
      },
    ],
    exercises: [
      'Design a marketing mix for a school store and justify each of the four Ps.',
      'Compute cost per acquisition and net margin for two campaign scenarios.',
    ],
  },
  'ctehealth-u1-l1': {
    topics: ['vital signs'],
    objectives: [
      'Measure and interpret the four primary vital signs within normal ranges.',
      'Use medical terminology accurately, including prefixes and roots.',
    ],
    sections: [
      {
        heading: 'Vital signs and their ranges',
        paragraphs: [
          'The four primary vital signs are temperature, pulse, respiration, and blood pressure. Normal adult oral temperature is about 98.6°F (37°C), resting heart rate 60 to 100 beats per minute, respiratory rate 12 to 20 breaths per minute, and blood pressure below 120/80 mmHg, with 120–129 systolic considered elevated.',
          'Measurement technique affects accuracy. Pulse is counted for 30 seconds and doubled, or for a full minute when irregular, and respiration should be counted without telling the patient, since awareness changes breathing. Blood pressure uses a cuff at heart level, and a cuff that is too small reads falsely high.',
          'Pain is often called the fifth vital sign and is assessed with a 0–10 scale or a faces scale for children. Pulse oximetry measures oxygen saturation, normally 95–100%, and a reading below 90% is a clinical concern. Documenting both the value and the method matters, because a reading without context cannot be interpreted.',
        ],
      },
      {
        heading: 'Medical terminology and documentation',
        paragraphs: [
          'Medical terms combine a root, a prefix, and a suffix. Bradycardia means slow heart rate, tachycardia fast, hypertension high pressure, and hypotension low. The prefix hyper- means above or excessive, hypo- below or deficient, and the suffix -itis means inflammation, as in arthritis or bronchitis.',
          'Directional terms standardize communication: anterior and posterior, proximal and distal, superior and inferior. A chart that says “the wound on the front of the forearm near the elbow” is less precise than “anterior proximal forearm,” and precision prevents treatment errors.',
          'Documentation is legal and clinical evidence. Objective findings, such as a measured pulse of 112, are separated from subjective reports, such as “I feel dizzy,” and both are recorded without interpretation the writer cannot support. Abbreviations should follow the facility’s approved list, since “q.d.” has been misread as “q.i.d.” and caused medication errors. Students should also practice reading a chart aloud to a partner, since verbal handoff is where many errors are caught or introduced, and standardized handoff formats exist precisely because memory fails under pressure. Recording a full set of vital signs with the time, site, and method takes seconds and makes the record defensible. Students should also learn the standard ranges for adults and for children, since normal values differ by age and treating an adult threshold as universal leads to false alarms. Reporting a value outside the range with the measurement conditions, such as recent exercise or anxiety, helps the next clinician interpret it correctly, and it protects the worker who took the reading from later dispute about what was measured and when.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A patient has a pulse of 48, respiration of 22, and blood pressure 92/58. Interpret each using terminology.',
        steps: [
          'Pulse 48 is below 60, so bradycardia.',
          'Respiration 22 is above 20, so tachypnea.',
          'Blood pressure 92/58 is below normal, so hypotension.',
        ],
        answer: 'Bradycardia, tachypnea, and hypotension, all of which should be reported and rechecked.',
      },
    ],
    terms: [
      ['vital signs', 'temperature, pulse, respiration, and blood pressure'],
      ['bradycardia', 'a resting heart rate below 60 beats per minute'],
      ['tachycardia', 'a resting heart rate above 100 beats per minute'],
      ['hypertension', 'blood pressure persistently above normal'],
      ['hypotension', 'blood pressure below normal'],
      ['pulse oximetry', 'a measurement of blood oxygen saturation'],
    ],
    practice: [
      num('What is the low end of the normal adult resting heart rate?', 60, '60 beats per minute.'),
      mc('What does the prefix hyper- mean?', ['below', 'above or excessive', 'inflammation', 'slow'], 1, 'Above or excessive.'),
      mc('A respiratory rate of 22 is called', ['bradypnea', 'tachypnea', 'apnea', 'dyspnea'], 1, 'Above 20 is tachypnea.'),
    ],
    review: [
      {
        prompt: 'What is a normal adult resting heart rate and blood pressure?',
        answer: 'A resting heart rate of 60 to 100 beats per minute and blood pressure below 120/80 mmHg are typical normal adult values.',
      },
      {
        prompt: 'What does the prefix hyper- mean, and how does it compare with hypo-?',
        answer: 'Hyper- means above or excessive, while hypo- means below or deficient, as in hypertension and hypotension.',
      },
    ],
    exercises: [
      'Practice measuring pulse and respiration on a partner and record both values twice.',
      'Build a glossary of twenty medical terms, splitting each into prefix, root, and suffix.',
    ],
  },
  'ctehealth-u2-l1': {
    topics: ['infection control'],
    objectives: [
      'Apply standard precautions and hand-hygiene practice in patient care.',
      'Explain patient privacy, consent, and scope-of-practice obligations.',
    ],
    sections: [
      {
        heading: 'Infection control and safety',
        paragraphs: [
          'Standard precautions treat all blood and body fluids as potentially infectious. Hand hygiene is the single most effective measure: soap and water for at least twenty seconds when hands are visibly soiled, and alcohol-based sanitizer otherwise. Personal protective equipment includes gloves, gown, mask, and eye protection, and gloves never replace handwashing.',
          'Transmission chains require an infectious agent, a reservoir, a portal of exit, a mode of transmission, a portal of entry, and a susceptible host. Breaking any link prevents infection, which is why isolation, sterilization, and vaccination all work through different links. Needlestick injuries require immediate washing and reporting, since post-exposure protocols are time-sensitive.',
          'Environmental safety includes fall prevention, correct body mechanics, and safe handling of equipment. Lifting with the legs rather than the back, keeping pathways clear, and using gait belts reduce injury to both patient and worker. In Texas, healthcare workers must follow facility policy and the Occupational Safety and Health Administration’s bloodborne pathogens standard.',
        ],
      },
      {
        heading: 'Ethics, privacy, and scope of practice',
        paragraphs: [
          'Patient privacy is protected by the Health Insurance Portability and Accountability Act, which limits disclosure of protected health information to those who need it for treatment, payment, or operations. Discussing a patient in a hallway or posting a chart photo violates the law even without naming the person.',
          'Informed consent requires capacity, disclosure of risks and alternatives, and voluntariness. A patient may refuse treatment, and documentation of that refusal is part of the record. Assault, battery, and false imprisonment are legal concepts that apply to care, which is why consent must be obtained before contact.',
          'Scope of practice defines what a worker may do without a license. A nursing assistant may take vital signs and provide personal care but may not administer medication or interpret diagnostic results. Recognizing the boundary and escalating to a supervisor protects patients and the worker, and it is a professional obligation rather than a limitation. Students should rehearse the sentence that declines an out-of-scope request and offers an alternative: I cannot do that, but I will get the nurse. That script protects the patient and keeps the worker from improvising under pressure, and it is the practical form of everything the ethics unit teaches. Students should also know the reporting chain for a safety concern: a supervisor, then a facility safety officer or compliance line when the concern is not addressed. Whistleblower protections exist because reporting can carry personal risk, and knowing that they exist makes the decision to speak up more likely. Practicing these conversations in class, with a partner playing the supervisor, turns policy into behavior a student can actually perform under pressure rather than merely recite in a written policy that no one on the unit has ever rehearsed aloud.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A coworker removes gloves and reaches for the door without washing hands. Apply standard precautions.',
        steps: [
          'Gloves are contaminated and must be removed without touching the outside.',
          'Hand hygiene is required immediately after glove removal.',
          'The door should be opened with a clean hand or elbow, and the lapse reported.',
        ],
        answer: 'Hand hygiene after glove removal is mandatory; the door and any shared surface are contamination risks.',
      },
    ],
    terms: [
      ['standard precautions', 'treating all body fluids as potentially infectious'],
      ['personal protective equipment', 'gloves, gown, mask, and eye protection'],
      ['chain of infection', 'the six links required for transmission'],
      ['HIPAA', 'the federal law protecting health information privacy'],
      ['informed consent', 'agreement after disclosure of risks and alternatives'],
      ['scope of practice', 'the tasks a worker is legally permitted to perform'],
    ],
    practice: [
      num('How many seconds should hands be washed with soap and water?', 20, 'At least twenty seconds.'),
      mc('HIPAA protects', ['equipment', 'health information', 'schedules', 'supplies'], 1, 'Protected health information.'),
      mc('A nursing assistant may not', ['take vital signs', 'provide personal care', 'administer medication', 'document care'], 2, 'Medication is outside the scope.'),
    ],
    review: [
      {
        prompt: 'Why is hand hygiene more important than gloves?',
        answer: 'Gloves can tear or be removed incorrectly and hands become contaminated during removal, so hand hygiene is the reliable barrier.',
      },
      {
        prompt: 'What does informed consent require?',
        answer: 'Capacity to decide, disclosure of risks and alternatives, and a voluntary choice without coercion.',
      },
    ],
    exercises: [
      'Demonstrate correct glove removal and hand hygiene and describe each step.',
      'Write a short scenario identifying three HIPAA violations and the correct action.',
    ],
  },
};
