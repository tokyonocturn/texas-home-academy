import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** United States Government and Economics (grade 12) depth pass. */
export const DEPTH_G12B: Record<string, LessonDepth> = {
  'gov-u1-l1': {
    topics: ['federalism'],
    objectives: [
      'Explain the Constitution’s structure, articles, and amendment process.',
      'Distinguish enumerated, implied, reserved, and concurrent powers under federalism.',
    ],
    sections: [
      {
        heading: 'The Constitution’s structure',
        paragraphs: [
          'The Constitution, drafted in 1787 and ratified in 1788, opens with a preamble listing six purposes, from forming a more perfect union to securing liberty. Article I creates Congress and lists enumerated powers in Section 8, including taxing, coining money, and regulating interstate commerce. Article II creates the presidency, Article III the judiciary, and Articles IV through VII address states, amendment, and ratification.',
          'The amendment process is deliberately difficult: two-thirds of both houses or a convention of two-thirds of states may propose, and three-fourths of states must ratify. That is why only twenty-seven amendments exist, the first ten ratified in 1791 and the most recent in 1992. The difficulty protects stability but also makes formal change slow.',
          'The Bill of Rights limits federal power, and the Fourteenth Amendment’s due process clause later applied most protections to the states through incorporation. Understanding that sequence matters, because a right protected against Congress in 1791 was not necessarily protected against a state government until the twentieth century.',
        ],
      },
      {
        heading: 'Federalism and the powers',
        paragraphs: [
          'Enumerated powers are listed, implied powers come from the necessary and proper clause, and reserved powers belong to the states under the Tenth Amendment. Concurrent powers, such as taxing and building roads, are shared. McCulloch v. Maryland in 1819 upheld the implied power to charter a national bank and established that federal law prevails over conflicting state law.',
          'Federalism creates both laboratories and conflicts. States set education policy, which is why Texas adopts its own TEKS, while the federal government attaches conditions to funding. Grants-in-aid, mandates, and preemption are the practical tools, and each raises accountability questions about who pays and who decides.',
          'Texas’s constitution, adopted in 1876, reflects a distrust of centralized power: it provides for a plural executive with independently elected officials and meets biennially, with a legislature that convenes in odd-numbered years. That structure limits gubernatorial control compared with most states and shapes how policy moves. Students should also trace one policy area, such as water or education, through both levels to see where authority actually sits. That exercise turns federalism from a definition into a map, and it explains why the same issue can be decided differently in two states, and it shows that federalism is a working arrangement rather than a single rule, and it makes the Tenth Amendment a live question rather than a slogan.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain how McCulloch v. Maryland expanded federal power.',
        steps: [
          'The Court held that Congress may charter a bank under the necessary and proper clause.',
          'It held that Maryland could not tax a federal instrumentality.',
          'Together those holdings established implied powers and federal supremacy.',
        ],
        answer: 'McCulloch recognized broad implied powers and barred state taxation of federal institutions.',
      },
    ],
    terms: [
      ['enumerated powers', 'powers explicitly listed in the Constitution'],
      ['implied powers', 'powers inferred from the necessary and proper clause'],
      ['reserved powers', 'powers retained by the states under the Tenth Amendment'],
      ['concurrent powers', 'powers shared by federal and state governments'],
      ['incorporation', 'applying Bill of Rights protections to the states'],
      ['plural executive', 'an executive branch with independently elected officials'],
    ],
    practice: [
      num('How many amendments must ratify a proposed amendment, as a fraction of states?', 0.75, 'Three-fourths.'),
      mc('McCulloch v. Maryland was decided in', ['1787', '1819', '1868', '1954'], 1, '1819.'),
      mc('Education policy is primarily a', ['federal power', 'reserved state power', 'concurrent power', 'implied federal power'], 1, 'Reserved to the states.'),
    ],
    review: [
      {
        prompt: 'Why is the amendment process intentionally difficult?',
        answer: 'Because requiring supermajorities prevents temporary majorities from changing fundamental rules and gives the Constitution stability.',
      },
      {
        prompt: 'What is the difference between enumerated and implied powers?',
        answer: 'Enumerated powers are listed in the text, while implied powers are inferred as necessary to carry out those listed powers.',
      },
    ],
    exercises: [
      'Map the articles of the Constitution and one power granted by each.',
      'Compare the Texas and U.S. executive branches in a short table with citations.',
    ],
  },
  'gov-u2-l1': {
    topics: ['judicial review'],
    objectives: [
      'Describe the powers of each branch and the checks between them.',
      'Analyze landmark cases on civil liberties and explain their holdings.',
    ],
    sections: [
      {
        heading: 'Three branches and their checks',
        paragraphs: [
          'Congress legislates, appropriates, confirms nominees, and can impeach. The president executes, commands the military, vetoes legislation, and issues executive orders within statutory authority. The judiciary interprets, and Marbury v. Madison in 1803 established judicial review, the power to declare acts unconstitutional, which is nowhere explicitly granted in the text.',
          'Checks operate in practice. A presidential veto can be overridden by two-thirds of both houses, a treaty needs Senate consent, and appointments require confirmation. Executive orders can be reversed by later presidents or struck down if they exceed statutory or constitutional authority, which is why the legal basis cited in an order matters.',
          'Bureaucratic agencies carry out policy through rulemaking. The Administrative Procedure Act of 1946 requires notice, comment, and reasoned decisions, and courts review whether an agency exceeded its authority. Regulation is where legislation becomes specific, which is why agency appointments and budgets are politically contested.',
        ],
      },
      {
        heading: 'Civil liberties and landmark cases',
        paragraphs: [
          'The First Amendment protects speech, religion, press, assembly, and petition. Schenck v. United States in 1919 introduced the clear and present danger test, later narrowed; Tinker v. Des Moines in 1969 protected student symbolic speech absent substantial disruption; and Engel v. Vitale in 1962 barred school-sponsored prayer.',
          'Criminal procedure protections come from the Fourth through Eighth Amendments. Gideon v. Wainwright in 1963 required counsel for felony defendants, Miranda v. Arizona in 1966 required warnings before custodial interrogation, and Mapp v. Ohio in 1961 applied the exclusionary rule to the states. Each case answers a specific question about what the text requires.',
          'Equal protection cases include Brown v. Board of Education in 1954, which ended segregation in schools, and Obergefell v. Hodges in 2015, which recognized same-sex marriage. Analyzing a case means stating the facts, the question, the holding, and the reasoning, and then evaluating whether the reasoning supports the holding. Students should also compare a majority opinion with a dissent, since the dissent usually states the strongest objection and shows what the holding leaves unresolved. Reading both is the fastest way to understand that a case decides a question rather than settling an argument forever, which is why later cases return to the same clause with new facts. Comparing the majority and dissent in one case is also the best preparation for writing about a case in an exam, because it forces you to separate reasoning from outcome and explain why a court might reach the same result for different reasons, which is a distinction examiners reward and courts themselves must explain at length in a published opinion.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain the holding and reasoning of Gideon v. Wainwright.',
        steps: [
          'Facts: Gideon was tried without counsel for a felony in Florida.',
          'Question: does the Sixth Amendment require appointed counsel in state felony trials?',
          'Holding and reasoning: yes, because a fair trial requires a lawyer, applied to states through the Fourteenth Amendment.',
        ],
        answer: 'Gideon incorporated the right to counsel, requiring appointed lawyers for felony defendants in state courts.',
      },
    ],
    terms: [
      ['judicial review', 'the power to declare acts unconstitutional'],
      ['veto', 'a president’s rejection of legislation'],
      ['incorporation', 'applying Bill of Rights protections to states'],
      ['exclusionary rule', 'barring evidence obtained through illegal search'],
      ['holding', 'the legal rule a court’s decision establishes'],
      ['rulemaking', 'agency process for issuing regulations'],
    ],
    practice: [
      num('In what year was Marbury v. Madison decided?', 1803, '1803.'),
      mc('Gideon v. Wainwright concerns', ['free speech', 'right to counsel', 'search warrants', 'school prayer'], 1, 'Counsel for defendants.'),
      mc('Tinker v. Des Moines protected', ['school prayer', 'student symbolic speech', 'gun rights', 'voting'], 1, 'Student armbands.'),
    ],
    review: [
      {
        prompt: 'Where does judicial review come from if the Constitution does not name it?',
        answer: 'Marbury v. Madison reasoned that a court must follow the Constitution over a conflicting statute, which implies the power to declare that statute invalid.',
      },
      {
        prompt: 'What four elements should an analysis of a case include?',
        answer: 'The facts, the legal question, the holding, and the reasoning that connects the holding to the law.',
      },
    ],
    exercises: [
      'Brief three landmark cases using facts, question, holding, and reasoning.',
      'Evaluate one executive order’s legal basis using its cited statute.',
    ],
  },
  'gov-u3-l1': {
    topics: ['political participation'],
    objectives: [
      'Explain elections, parties, and forms of political participation in the United States.',
      'Describe Texas state and local government and the obligations of citizenship.',
    ],
    sections: [
      {
        heading: 'Elections, parties, and participation',
        paragraphs: [
          'Elections are administered by states and counties, which is why registration deadlines and ballot rules vary. The Electoral College, created in Article II, allocates electors by state representation, and the Twelfth Amendment separated presidential and vice-presidential ballots after the election of 1800. The Twenty-Sixth Amendment in 1971 lowered the voting age to eighteen.',
          'Participation extends beyond voting: canvassing, donating, contacting representatives, attending school board meetings, petitioning, and organizing. Turnout in local elections is typically far lower than in presidential years, which means small groups can decide school and city policy. That asymmetry is a practical argument for local engagement.',
          'The two-party system emerges from single-member districts with plurality rules, which tend to produce two broad coalitions. Third parties influence agendas even when they lose, and primaries determine much of the general election’s outcome in safe districts. Media literacy matters because campaign information is designed to persuade rather than to inform.',
        ],
      },
      {
        heading: 'Texas government and citizenship',
        paragraphs: [
          'Texas has a bicameral legislature with 31 senators and 150 representatives, a governor with limited appointment and budget powers, and a plural executive including the lieutenant governor, attorney general, comptroller, and land commissioner. The lieutenant governor controls the Senate’s calendar, which makes that office unusually powerful.',
          'Local government includes counties, cities, school districts, and special districts. Texas cities may adopt home-rule charters above 5,000 residents, and school boards set local policy within state requirements. Property taxes fund much of local services, which is why appraisal districts and bond elections matter to families.',
          'Citizenship carries obligations and limits. Jury service, selective service registration for men aged 18 to 25, and paying taxes are legal duties, while voting, volunteering, and public comment are civic responsibilities. Free speech does not protect incitement, threats, or defamation, and the right to assemble does not include violence or trespass. Understanding those limits is part of participating responsibly. Students should also know how a bill becomes law in Texas, where the lieutenant governor’s calendar power and the two-thirds rule for bringing bills to the floor have historically shaped outcomes. Tracing one bill’s path is more instructive than memorizing the textbook diagram, especially because most bills die in committee rather than on the floor, and committee chairs decide which proposals receive a hearing at all, which is why leadership positions matter more than a single vote, and it explains why observers track committee assignments so closely in Austin and in Washington, since the same calendar logic shapes both chambers and both capitals in everyday practice, not just on paper.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain why the lieutenant governor is powerful in Texas despite the governor’s prominence.',
        steps: [
          'The lieutenant governor presides over the Senate.',
          'That office controls committee assignments and the flow of bills.',
          'Controlling the calendar determines which legislation can pass.',
        ],
        answer: 'The lieutenant governor’s control of the Senate calendar gives that office decisive influence over legislation.',
      },
    ],
    terms: [
      ['Electoral College', 'the body that formally elects the president'],
      ['plurality', 'winning more votes than any other candidate, without a majority'],
      ['home-rule city', 'a city operating under its own charter'],
      ['special district', 'a local unit created for a specific service'],
      ['civic responsibility', 'a voluntary contribution to public life'],
      ['defamation', 'a false statement damaging a person’s reputation'],
    ],
    practice: [
      num('How many members does the Texas House have?', 150, '150 representatives.'),
      num('How many Texas senators serve?', 31, '31.'),
      mc('Voting age became eighteen with the', ['Fifteenth Amendment', 'Nineteenth Amendment', 'Twenty-Fourth Amendment', 'Twenty-Sixth Amendment'], 3, '1971.'),
    ],
    review: [
      {
        prompt: 'Why does low turnout in local elections matter?',
        answer: 'Because a small share of voters decides school, city, and district policy that affects daily life directly.',
      },
      {
        prompt: 'What limits exist on free speech and assembly?',
        answer: 'Incitement, true threats, defamation, and violence or trespass are not protected, so expression has legal boundaries.',
      },
    ],
    exercises: [
      'Compare a Texas and a U.S. election rule and explain the consequence for voters.',
      'Attend or watch a local meeting and summarize one decision and who influenced it.',
    ],
  },
  'econ-u1-l1': {
    topics: ['elasticity'],
    objectives: [
      'Apply scarcity and opportunity cost to choices and production possibilities.',
      'Distinguish shifts of supply and demand from movements along the curves and compute elasticity.',
    ],
    sections: [
      {
        heading: 'Scarcity, choice, and opportunity cost',
        paragraphs: [
          'Economics studies how people allocate scarce resources with competing uses. Every choice has an opportunity cost, the value of the next best alternative forgone. Choosing to work Saturday for $80 instead of attending a concert worth $50 to you carries an opportunity cost of $50, so the net gain is $30.',
          'A production possibilities frontier shows the maximum combinations of two goods an economy can produce with fixed resources. Points on the curve are efficient, points inside are inefficient, and points outside are unattainable. The curve’s bowed shape reflects increasing opportunity cost as resources shift between uses.',
          'Marginal analysis compares additional benefit to additional cost. A business should expand output while marginal revenue exceeds marginal cost, and a student should study another hour while the expected gain in grade outweighs the value of the hour elsewhere. Thinking at the margin explains decisions that averages obscure. Students should also draw a production possibilities frontier and shift it outward to represent new technology, then explain why the shift differs from moving along the curve, since one changes capacity and the other changes the mix produced, and only the first reflects growth in capacity and raises living standards over time, while the second only changes what is produced today, without changing how much the economy can produce at all with its current resources and its available technology over time, not merely in one year.',
        ],
      },
      {
        heading: 'Supply, demand, and elasticity',
        paragraphs: [
          'Demand is the relationship between price and quantity demanded, and supply is the relationship between price and quantity supplied. Equilibrium occurs where they intersect. A change in the good’s own price moves quantity demanded along the curve, while a change in income, preferences, prices of related goods, or expectations shifts the whole curve.',
          'Shifts produce predictable results. An increase in demand raises equilibrium price and quantity; an increase in supply lowers price and raises quantity. A simultaneous shift in both curves can leave one variable uncertain, which is why a correct answer names which curve moved and why before predicting.',
          'Elasticity measures responsiveness. Price elasticity of demand is the percentage change in quantity divided by the percentage change in price; a value above one is elastic, below one inelastic. If price rises 10% and quantity falls 20%, elasticity is 2, meaning revenue falls because the quantity effect dominates. Necessities tend to be inelastic and luxuries elastic.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Price rises from $10 to $11 and quantity demanded falls from 100 to 90. Compute elasticity and interpret it.',
        steps: [
          'Percentage change in quantity: (90 − 100)/100 = −10%.',
          'Percentage change in price: (11 − 10)/10 = +10%.',
          'Elasticity = 10/10 = 1, unit elastic, so revenue is roughly unchanged.',
        ],
        answer: 'Elasticity of 1, unit elastic, meaning the price and quantity effects offset each other.',
      },
    ],
    terms: [
      ['scarcity', 'limited resources relative to unlimited wants'],
      ['opportunity cost', 'the value of the next best alternative forgone'],
      ['production possibilities frontier', 'the maximum output combinations with fixed resources'],
      ['equilibrium price', 'the price where quantity supplied equals quantity demanded'],
      ['elasticity', 'the responsiveness of quantity to a change in price'],
      ['marginal analysis', 'comparing additional benefit with additional cost'],
    ],
    practice: [
      num('What is the elasticity when price rises 10% and quantity falls 20%?', 2, '20/10 = 2.'),
      mc('A change in the good’s own price causes', ['a shift of demand', 'movement along demand', 'a shift of supply', 'no change'], 1, 'Movement along the curve.'),
      mc('A point inside the production possibilities frontier is', ['efficient', 'inefficient', 'unattainable', 'optimal'], 1, 'Resources are underused.'),
    ],
    review: [
      {
        prompt: 'What causes movement along a demand curve, and what causes a shift?',
        answer: 'A change in the good’s own price moves quantity demanded along the curve, while changes in income, preferences, related prices, or expectations shift the curve.',
      },
      {
        prompt: 'Why does revenue fall when demand is elastic and price rises?',
        answer: 'Because the percentage drop in quantity exceeds the percentage rise in price, so fewer sales outweigh the higher price.',
      },
    ],
    exercises: [
      'Graph a demand and supply shift and state the effect on price and quantity.',
      'Compute elasticity for three price changes and classify each as elastic or inelastic.',
    ],
  },
  'econ-u2-l1': {
    topics: ['inflation'],
    objectives: [
      'Explain GDP, unemployment, and inflation and how each is measured.',
      'Describe money, banking, and the Federal Reserve’s tools.',
    ],
    sections: [
      {
        heading: 'Measuring output, employment, and prices',
        paragraphs: [
          'Gross domestic product is the market value of final goods and services produced within a country in a period. Nominal GDP uses current prices, while real GDP adjusts for inflation, so a rise in nominal GDP can reflect higher prices rather than more output. GDP excludes household production and the underground economy, which limits its reach as a welfare measure.',
          'Unemployment is measured from a survey of the labor force, which includes people working or actively seeking work. Someone who has stopped looking is not counted as unemployed, which is why the official rate can understate hardship. Types include frictional, structural, and cyclical unemployment, and full employment allows for frictional and structural movement.',
          'Inflation is a sustained rise in the general price level, measured by the consumer price index. If the CPI rises from 250 to 260, inflation is 4%. Inflation hurts savers and fixed-income recipients while helping borrowers, and unanticipated inflation redistributes wealth because contracts were written under old expectations.',
        ],
      },
      {
        heading: 'Money, banking, and the Fed',
        paragraphs: [
          'Money serves as a medium of exchange, a unit of account, and a store of value. In the United States, the Federal Reserve issues currency and regulates banks, while most money exists as bank deposits created through lending. The money supply matters because spending depends on how much money people hold and how readily they spend it.',
          'The Federal Reserve has three classic tools: open market operations, the discount rate, and reserve requirements. Buying securities adds reserves and lowers interest rates; selling does the opposite. The federal funds rate, the rate banks charge each other overnight, is the primary policy target, and changes there ripple into mortgages and business loans.',
          'Banking depends on confidence. Deposit insurance, created in 1933, prevents runs by assuring depositors their funds are safe up to a limit. Fractional reserve banking means banks hold only part of deposits as reserves, which supports lending but requires regulation to prevent instability when many depositors withdraw at once. Students should also distinguish the money supply measures and explain why the Fed watches several rather than one, because deposits and currency behave differently during a crisis, so a single measure can mislead about how much money is actually available to spend at a given moment, which is why policy watches several measures together.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'The CPI rises from 250 to 260 while nominal GDP rises 6%. Find inflation and approximate real growth.',
        steps: [
          'Inflation = (260 − 250)/250 = 4%.',
          'Real growth ≈ nominal growth − inflation = 6% − 4% = 2%.',
          'The approximation is close for small rates, so real output grew about 2%.',
        ],
        answer: 'Inflation of 4%, so real growth was approximately 2%.',
      },
    ],
    terms: [
      ['GDP', 'the market value of final output produced within a country'],
      ['real GDP', 'output adjusted for price changes'],
      ['unemployment rate', 'unemployed persons as a share of the labor force'],
      ['CPI', 'a price index tracking a basket of consumer goods'],
      ['federal funds rate', 'the overnight rate banks charge each other'],
      ['fractional reserve banking', 'holding only part of deposits as reserves'],
    ],
    practice: [
      num('If the CPI moves from 250 to 260, what is inflation in percent?', 4, '10/250 = 4%.'),
      mc('Real GDP differs from nominal GDP because it', ['includes exports', 'adjusts for prices', 'excludes services', 'counts only wages'], 1, 'It is inflation-adjusted.'),
      mc('Buying securities generally', ['raises rates', 'lowers rates', 'has no effect', 'raises reserve requirements'], 1, 'It adds reserves and lowers rates.'),
    ],
    review: [
      {
        prompt: 'Why can the official unemployment rate understate hardship?',
        answer: 'Because discouraged workers who stop searching leave the labor force and are no longer counted as unemployed.',
      },
      {
        prompt: 'How does buying securities affect interest rates?',
        answer: 'It adds reserves to the banking system, increasing the supply of loanable funds and pushing interest rates down.',
      },
    ],
    exercises: [
      'Compute inflation and real growth from three sets of GDP and CPI figures.',
      'Explain how each Fed tool would be used during a recession.',
    ],
  },
  'econ-u3-l1': {
    topics: ['fiscal policy'],
    objectives: [
      'Compare fiscal and monetary policy responses to recession and inflation.',
      'Explain market structures and the gains from trade.',
    ],
    sections: [
      {
        heading: 'Fiscal and monetary policy',
        paragraphs: [
          'Fiscal policy uses government spending and taxation. Expansionary policy raises spending or cuts taxes to increase aggregate demand during a recession, while contractionary policy does the reverse to fight inflation. The multiplier effect means an initial change in spending produces a larger total change, though its size depends on how much recipients spend.',
          'Monetary policy uses interest rates and the money supply. Lowering rates encourages borrowing and investment; raising rates cools spending. Policy lags matter: recognition, implementation, and effect all take time, so a stimulus can arrive after a recession has ended, which is why rules versus discretion is a longstanding debate.',
          'Deficits and debt are different. A deficit is a single year’s shortfall, while debt is accumulated borrowing. Persistent deficits raise interest costs and can crowd out private investment, but the appropriate level depends on growth, rates, and obligations such as Social Security. Evaluating a proposal requires numbers, not slogans.',
        ],
      },
      {
        heading: 'Market structures and trade',
        paragraphs: [
          'Market structures range from perfect competition, with many firms and identical products, to monopoly, with one seller and high barriers. Monopolistic competition features differentiated products, and oligopoly a few large firms whose decisions interact. Structure affects price, output, and the incentive to innovate.',
          'Comparative advantage explains trade: a country benefits by producing what it makes at lower opportunity cost and trading for the rest. If the United States gives up two units of cloth to produce one unit of software while Mexico gives up four, the United States has the comparative advantage in software even if Mexico has an absolute advantage in both.',
          'Trade policy includes tariffs, quotas, and agreements such as the USMCA. Tariffs raise domestic prices and protect producers while harming consumers and downstream industries, which is why their net effect is contested. Texas exports heavily in energy, technology, and agriculture, so trade rules affect state employment directly. Students should also evaluate a tariff from three perspectives: the protected producer, the consumer, and the exporting industry that faces retaliation. Naming whose interests a policy serves is the analytical habit the course is building, and it prevents the common mistake of treating a policy’s supporters as proof of its effects, or of assuming that a tariff’s revenue measures its cost, since the revenue is paid mostly by domestic consumers rather than by foreign exporters, and the difference matters for who ultimately bears the burden of the tariff in the end, and for how long that burden lasts.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'The government raises spending by $50 billion with a multiplier of 1.5. Find the total demand effect and the deficit change.',
        steps: [
          'Total effect = 50 × 1.5 = $75 billion.',
          'If taxes do not change, the deficit rises by $50 billion in that year.',
          'The demand effect exceeds the deficit because spending circulates.',
        ],
        answer: '$75 billion in added demand from a $50 billion spending increase and a $50 billion larger deficit.',
      },
    ],
    terms: [
      ['fiscal policy', 'government use of spending and taxation'],
      ['multiplier effect', 'the total demand change from an initial spending change'],
      ['monetary policy', 'central bank control of money and rates'],
      ['oligopoly', 'a market with a few large firms'],
      ['comparative advantage', 'producing at lower opportunity cost than a partner'],
      ['tariff', 'a tax on imported goods'],
    ],
    practice: [
      num('With a multiplier of 1.5, what is the effect of $50 billion in spending?', 75, '50 × 1.5 = 75.'),
      mc('Expansionary fiscal policy', ['raises taxes', 'raises spending', 'raises rates', 'sells securities'], 1, 'Spending increases demand.'),
      mc('A monopoly is characterized by', ['many sellers', 'one seller', 'identical products', 'free entry'], 1, 'A single seller.'),
    ],
    review: [
      {
        prompt: 'How do fiscal and monetary policy differ?',
        answer: 'Fiscal policy uses government spending and taxes, while monetary policy uses interest rates and the money supply through a central bank.',
      },
      {
        prompt: 'Why does comparative advantage matter more than absolute advantage?',
        answer: 'Because the gains from trade depend on opportunity cost, so a country benefits by specializing where its sacrifice is smallest.',
      },
    ],
    exercises: [
      'Model a recession response using one fiscal and one monetary tool.',
      'Compute opportunity costs for two countries and identify comparative advantage.',
    ],
  },
};
