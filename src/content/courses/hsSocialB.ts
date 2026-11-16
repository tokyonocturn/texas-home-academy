import type { Course } from '../../types';
import { HIGH_WEIGHTS } from '../weights';
import { exam, lesson, mc, num, project, quiz, rubricRow, section, short, teks, unit } from '../builders';

export const usHistory: Course = {
  id: 'hs-us-hist',
  title: 'U.S. History Since 1877',
  subject: 'social-studies',
  grade: 11,
  credits: 1,
  semesters: 2,
  description:
    'The American past from Reconstruction to the present: industrialization, reform, depression and war, the civil rights movement, and contemporary politics. Students read primary sources and build evidence-based arguments.',
  essentialQuestions: [
    'Who has been included in American citizenship, and who has been excluded?',
    'How have Americans used government to solve problems, and with what results?',
  ],
  teks: [
    teks('19 TAC ch. 113, United States History Since 1877', 'Reconstruction; industrialization and reform; the Great Depression and New Deal; world wars; civil rights; modern America; historical thinking skills.'),
  ],
  weights: HIGH_WEIGHTS,
  units: [
    unit('u1', 'Reconstruction and the contested nation', 'Freedom was declared, then fought over.', [
      lesson({
        id: 'us1-u1-l1',
        title: 'Reconstruction and its retreat',
        minutes: 55,
        objectives: ['Explain the Reconstruction amendments.', 'Assess how Reconstruction ended and what replaced it.'],
        sections: [
          section('The amendments', [
            'The Thirteenth Amendment (1865) abolished slavery except as punishment for crime. The Fourteenth (1868) granted citizenship and equal protection and applied the Bill of Rights against states over time. The Fifteenth (1870) prohibited denying the vote on the basis of race. Together they transformed the constitutional order.',
            'Reconstruction governments expanded public education and civil rights, but violence and paramilitary groups targeted Black voters and officeholders. Federal troops withdrew after the disputed 1876 election, and white supremacist state governments imposed segregation, disenfranchisement through poll taxes and literacy tests, and sharecropping.',
          ]),
          section('The long shadow', [
            'The “Jim Crow” system was not a natural outcome but a political project enforced by violence and law. It persisted until the mid-twentieth century, shaping education, housing, and economic opportunity. Understanding the mechanisms matters more than memorizing dates.',
          ]),
        ],
        example: {
          prompt: 'How did poll taxes and literacy tests evade the Fifteenth Amendment?',
          steps: ['The amendment barred denial of the vote “on account of race.”', 'States imposed facially race-neutral requirements.', 'Officials applied them selectively, with grandfather clauses and arbitrary grading.', 'The result was disenfranchisement without an explicit racial criterion.'],
          answer: 'Neutral-sounding rules, applied discriminatorily, achieved racial exclusion.',
        },
        practice: [
          mc('The Fourteenth Amendment guarantees', ['the right to bear arms', 'equal protection of the laws', 'the abolition of slavery', 'the right to vote regardless of sex'], 1, 'It guarantees citizenship and equal protection.'),
          mc('Federal troops withdrew from the South after', ['1863', '1865', 'the disputed election of 1876', '1901'], 2, 'The Compromise of 1877 ended Reconstruction.'),
        ],
      }),
    ], quiz('Unit 1 quiz: Reconstruction', [
      mc('The Thirteenth Amendment', ['abolished slavery', 'granted voting rights to women', 'created the income tax', 'established the Senate'], 0, 'It abolished slavery with a punishment exception.'),
      mc('Jim Crow laws', ['expanded Black voting', 'enforced racial segregation', 'ended sharecropping', 'were federal laws'], 1, 'They enforced segregation, largely at state and local level.'),
      mc('Sharecropping often trapped families because', ['wages were high', 'debt and crop liens limited mobility', 'land was free', 'banks refused credit'], 1, 'Debt arrangements restricted economic independence.'),
    ]), project({
      title: 'Primary source analysis',
      prompt: 'Analyze two primary documents from Reconstruction with opposing views. Identify each author’s purpose, audience, and evidence.',
      deliverable: 'A two-page analysis with quoted evidence and citation.',
      guidance: ['Do not assume an author is neutral.', 'Distinguish claim from evidence.', 'Place each document in its year.'],
      rubric: [
        rubricRow('Source understanding', 35, [['Excellent', 'Purpose, audience, context accurate.', 35], ['Proficient', 'Mostly accurate.', 28], ['Developing', 'Thin context.', 18], ['Beginning', 'Misread.', 7]]),
        rubricRow('Evidence use', 35, [['Excellent', 'Apt quotations explained.', 35], ['Proficient', 'Relevant.', 28], ['Developing', 'Quotes without explanation.', 18], ['Beginning', 'None.', 7]]),
        rubricRow('Comparison', 20, [['Excellent', 'Explains disagreement.', 20], ['Proficient', 'Describes both.', 16], ['Developing', 'Separate summaries.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Citation', 10, [['Excellent', 'Complete.', 10], ['Proficient', 'Minor gaps.', 8], ['Developing', 'Incomplete.', 5], ['Beginning', 'Missing.', 2]]),
      ],
    })),
    unit('u2', 'Industry, reform, and crisis', 'Growth produced both wealth and movements to restrain it.', [
      lesson({
        id: 'us1-u2-l1',
        title: 'Industrialization, Progressivism, and the New Deal',
        minutes: 55,
        objectives: ['Explain causes of industrial growth after 1877.', 'Compare Progressive and New Deal approaches to reform.'],
        sections: [
          section('Growth and its costs', [
            'Railroads, steel, oil, and electricity transformed the economy. Immigration supplied labor; cities grew faster than housing and sanitation. Workers organized unions, and strikes such as Pullman (1894) met federal troops. Muckraking journalists exposed unsafe food and monopolistic practices.',
            'Progressive reforms (roughly 1890–1920) produced the Pure Food and Drug Act, the Federal Reserve (1913), direct election of senators (Seventeenth Amendment, 1913), and women’s suffrage (Nineteenth Amendment, 1920). Progressives were not uniform: some sought efficiency, others social justice, and many held racist views.',
          ]),
          section('Depression and the New Deal', [
            'The stock market crash of 1929 preceded bank failures, mass unemployment, and farm collapse. The New Deal created Social Security (1935), insured bank deposits (FDIC), regulated securities (SEC), and employed millions through programs such as the WPA and CCC. It did not end the Depression; wartime production did.',
            'The New Deal expanded federal responsibility for economic security, a shift still debated. Its programs also excluded many Black workers, for example through occupational categories in early Social Security.',
          ]),
        ],
        example: {
          prompt: 'Did the New Deal end the Great Depression?',
          steps: ['Unemployment remained high through the 1930s.', 'Full employment returned with wartime mobilization.', 'The New Deal changed institutions and expectations even without full recovery.'],
          answer: 'No, it did not end it; war production did, though the New Deal reshaped policy.',
        },
        practice: [
          mc('The Nineteenth Amendment (1920)', ['ended Prohibition', 'granted women the vote', 'created Social Security', 'established the Fed'], 1, 'It prohibited denying the vote on account of sex.'),
          mc('The FDIC was created to', ['regulate railroads', 'insure bank deposits', 'build highways', 'fund schools'], 1, 'Deposit insurance reduced bank-run risk.'),
        ],
      }),
    ], quiz('Unit 2 quiz: industry and reform', [
      mc('The Federal Reserve was created in', ['1865', '1913', '1933', '1945'], 1, 'It was established in 1913.'),
      mc('Social Security was created by', ['the New Deal', 'the Great Society', 'Reconstruction', 'the Progressive Era only'], 0, 'The Social Security Act passed in 1935.'),
      mc('The Great Depression ended decisively with', ['the New Deal', 'wartime production', 'the gold standard', 'Prohibition'], 1, 'Mobilization for World War II restored employment.'),
    ]), project({
      title: 'Reform movement report',
      prompt: 'Research one reform movement between 1890 and 1940. Explain its goals, methods, achievements, and limits with at least three sources.',
      deliverable: 'A 700-word report with citations.',
      guidance: ['Distinguish rhetoric from results.', 'Include who was left out.', 'Use dates.'],
      rubric: [
        rubricRow('Historical accuracy', 35, [['Excellent', 'Accurate and specific.', 35], ['Proficient', 'Minor errors.', 28], ['Developing', 'General.', 18], ['Beginning', 'Inaccurate.', 7]]),
        rubricRow('Analysis of limits', 30, [['Excellent', 'Thoughtful and evidenced.', 30], ['Proficient', 'Reasonable.', 24], ['Developing', 'Thin.', 15], ['Beginning', 'None.', 6]]),
        rubricRow('Sources', 25, [['Excellent', 'Three credible sources.', 25], ['Proficient', 'Two.', 20], ['Developing', 'One.', 12], ['Beginning', 'None.', 5]]),
        rubricRow('Writing', 10, [['Excellent', 'Clear.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Unclear.', 5], ['Beginning', 'Disorganized.', 2]]),
      ],
    })),
    unit('u3', 'War, rights, and modern America', 'Twentieth-century America was remade by war and protest.', [
      lesson({
        id: 'us1-u3-l1',
        title: 'World War II to the civil rights movement',
        minutes: 55,
        objectives: ['Explain U.S. entry into World War II and its domestic effects.', 'Trace the legal strategy of the civil rights movement.'],
        sections: [
          section('War and the home front', [
            'The United States entered World War II after the attack on Pearl Harbor on December 7, 1941. War production ended the Depression and drew millions of women into paid work. The federal government also interned about 120,000 people of Japanese ancestry, most of them U.S. citizens, an action later acknowledged and compensated by Congress.',
            'The war produced the GI Bill (1944), which funded education and home loans for veterans, and helped create the postwar middle class — though Black veterans often faced discrimination in accessing those benefits.',
          ]),
          section('Civil rights', [
            'Brown v. Board of Education (1954) held that racial segregation in public schools was unconstitutional, overturning Plessy v. Ferguson (1896). The Montgomery bus boycott (1955–56), sit-ins, Freedom Rides, and the March on Washington (1963) built pressure for the Civil Rights Act of 1964 and the Voting Rights Act of 1965.',
            'The movement was not a single leader or event. Local organizers, students, and churches did most of the work, and legal victories depended on enforcement. The Fair Housing Act followed in 1968.',
          ]),
        ],
        example: {
          prompt: 'Why was Brown v. Board significant if segregation persisted afterward?',
          steps: ['It established that “separate but equal” was unconstitutional in education.', 'It delegitimized segregation in law.', 'Enforcement required litigation, legislation, and protest.', 'De facto segregation persisted through housing patterns.'],
          answer: 'It changed the legal rule; changing actual conditions required decades of enforcement.',
        },
        practice: [
          mc('Brown v. Board of Education was decided in', ['1896', '1954', '1964', '1968'], 1, 'It was decided in 1954.'),
          mc('The Civil Rights Act of 1964', ['ended Prohibition', 'prohibited discrimination in public accommodations and employment', 'created Social Security', 'declared war'], 1, 'It barred discrimination on the basis of race, color, religion, sex, or national origin in covered areas.'),
        ],
      }),
    ], quiz('Unit 3 quiz: modern America', [
      mc('The United States entered World War II after', ['the fall of France', 'Pearl Harbor', 'the invasion of Poland', 'D-Day'], 1, 'Pearl Harbor was attacked December 7, 1941.'),
      mc('Plessy v. Ferguson (1896) established', ['desegregation', '“separate but equal”', 'voting rights', 'the income tax'], 1, 'It upheld racial segregation.'),
      mc('The Voting Rights Act was passed in', ['1954', '1964', '1965', '1968'], 2, 'It was passed in 1965.'),
    ]), project({
      title: 'Civil rights document set',
      prompt: 'Assemble four documents from the civil rights era (a court opinion, a speech, a law, and a photograph or letter). Explain what each reveals and how they connect.',
      deliverable: 'Four annotated documents plus a synthesis paragraph.',
      guidance: ['Identify each document’s type and date.', 'Distinguish legal change from social change.'],
      rubric: [
        rubricRow('Document selection', 25, [['Excellent', 'Four relevant, varied documents.', 25], ['Proficient', 'Relevant.', 20], ['Developing', 'Narrow.', 12], ['Beginning', 'Irrelevant.', 5]]),
        rubricRow('Annotation', 40, [['Excellent', 'Accurate context and significance.', 40], ['Proficient', 'Mostly accurate.', 32], ['Developing', 'Descriptive.', 20], ['Beginning', 'Inaccurate.', 8]]),
        rubricRow('Synthesis', 25, [['Excellent', 'Connects legal and social change.', 25], ['Proficient', 'Reasonable.', 20], ['Developing', 'Lists documents.', 12], ['Beginning', 'None.', 5]]),
        rubricRow('Citations', 10, [['Excellent', 'Complete.', 10], ['Proficient', 'Minor gaps.', 8], ['Developing', 'Incomplete.', 5], ['Beginning', 'None.', 2]]),
      ],
    })),
  ],
  finalExam: exam('U.S. History final examination', [
    mc('The Fourteenth Amendment guarantees', ['free speech', 'equal protection of the laws', 'the right to vote for women', 'abolition of the army'], 1, 'It guarantees citizenship and equal protection.'),
    mc('The Nineteenth Amendment granted', ['Black men the vote', 'women the vote', 'citizenship', 'due process'], 1, 'It barred denying the vote on account of sex.'),
    mc('Social Security was created in', ['1913', '1935', '1944', '1964'], 1, 'The Social Security Act passed in 1935.'),
    mc('Brown v. Board of Education was decided in', ['1896', '1954', '1964', '1973'], 1, 'It was decided in 1954.'),
    mc('The Civil Rights Act of 1964 prohibited discrimination in', ['only voting', 'public accommodations and employment', 'only schools', 'only housing'], 1, 'It covered public accommodations and employment, among other areas.'),
    short('Explain how facially neutral voting rules could violate the Fifteenth Amendment.', 'Model: A rule such as a literacy test does not mention race, but if officials apply it selectively, with arbitrary standards and exemptions for white voters, its purpose and effect are racial exclusion. Courts assess such rules by their design, administration, and effect, not only their text.', ['Identifies neutral rule.', 'Explains discriminatory administration.', 'Connects to purpose and effect.'], 10),
  ]),
};

export const usGovernment: Course = {
  id: 'hs-gov',
  title: 'United States Government',
  subject: 'social-studies',
  grade: 12,
  credits: 0.5,
  semesters: 1,
  description:
    'Constitutional principles, federalism, the three branches, civil liberties, elections, and Texas state government. One-semester course; paired with Economics for the required social studies credits.',
  essentialQuestions: [
    'How does the Constitution limit power while making action possible?',
    'Where does state authority end and federal authority begin?',
  ],
  teks: [
    teks('19 TAC ch. 113, United States Government', 'Constitutional principles; federalism; branches and processes; civil rights and liberties; political participation; Texas government.'),
  ],
  weights: HIGH_WEIGHTS,
  units: [
    unit('u1', 'Constitutional foundations', 'Power is divided so that it can be checked.', [
      lesson({
        id: 'gov-u1-l1',
        title: 'Principles and federalism',
        minutes: 55,
        objectives: ['Identify the principles in Articles I-III and the Bill of Rights.', 'Distinguish enumerated, reserved, and concurrent powers.'],
        sections: [
          section('Seven principles', [
            'Popular sovereignty (authority derives from the people), limited government, separation of powers, checks and balances, federalism, republicanism, and individual rights. Article I creates Congress, Article II the presidency, Article III the judiciary. The Bill of Rights (1791) limits federal power; the Fourteenth Amendment later applied most of it to the states.',
            'Checks are concrete: the president vetoes legislation, Congress overrides by two-thirds, the Senate confirms appointments and ratifies treaties, and courts can declare acts unconstitutional. Gridlock is a feature designed into the system, not only a malfunction.',
          ]),
          section('Federalism', [
            'Enumerated powers belong to Congress (for example, coining money, regulating interstate commerce, declaring war). Reserved powers belong to states (for example, public education, most criminal law, elections). Concurrent powers are shared (taxation, courts). The Supremacy Clause makes federal law supreme when valid.',
            'Texas has its own constitution (1876, frequently amended) with a plural executive: the governor, lieutenant governor, attorney general, comptroller, and others are elected separately, which diffuses authority. The Texas Legislature meets in regular session for 140 days every two years.',
          ]),
        ],
        example: {
          prompt: 'Is public education a federal or state responsibility?',
          steps: ['The Constitution does not enumerate education.', 'The Tenth Amendment reserves unenumerated powers to states.', 'States create school systems; federal law attaches conditions to federal funding.', 'So it is primarily state authority with federal conditions.'],
          answer: 'Primarily state authority, shaped by federal funding conditions and civil-rights law.',
        },
        practice: [
          mc('The power to coin money is', ['reserved to states', 'an enumerated federal power', 'a concurrent power', 'a judicial power'], 1, 'Article I grants it to Congress.'),
          mc('The Texas Legislature meets in regular session', ['every year for six months', 'for 140 days every two years', 'continuously', 'only when called by courts'], 1, 'Regular sessions are 140 days in odd-numbered years.'),
        ],
      }),
    ], quiz('Unit 1 quiz: foundations', [
      mc('The Supremacy Clause provides that', ['states may ignore federal law', 'valid federal law prevails over conflicting state law', 'courts make law', 'treaties are void'], 1, 'Federal law is supreme when constitutional.'),
      mc('Reserved powers belong to', ['the federal government', 'the states', 'the courts', 'local school boards'], 1, 'The Tenth Amendment reserves unenumerated powers to states.'),
      mc('A two-thirds vote of Congress can', ['ratify treaties', 'override a veto', 'appoint judges', 'amend the Constitution alone'], 1, 'Override requires two-thirds of each chamber.'),
    ]), project({
      title: 'Federalism case brief',
      prompt: 'Brief one Supreme Court case about federalism (for example, a Commerce Clause or Tenth Amendment case). Summarize facts, holding, reasoning, and significance.',
      deliverable: 'A one-page brief with the citation.',
      guidance: ['State the holding in one sentence.', 'Explain the reasoning, not just the outcome.'],
      rubric: [
        rubricRow('Facts and holding', 35, [['Excellent', 'Accurate and concise.', 35], ['Proficient', 'Minor gaps.', 28], ['Developing', 'Confused.', 18], ['Beginning', 'Incorrect.', 7]]),
        rubricRow('Reasoning', 35, [['Excellent', 'Explains the constitutional logic.', 35], ['Proficient', 'Basic.', 28], ['Developing', 'Outcome only.', 18], ['Beginning', 'None.', 7]]),
        rubricRow('Significance', 20, [['Excellent', 'Connects to federalism doctrine.', 20], ['Proficient', 'Reasonable.', 16], ['Developing', 'Vague.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Citation', 10, [['Excellent', 'Complete.', 10], ['Proficient', 'Minor gaps.', 8], ['Developing', 'Incomplete.', 5], ['Beginning', 'Missing.', 2]]),
      ],
    })),
    unit('u2', 'Branches and process', 'Lawmaking is a sequence with many veto points.', [
      lesson({
        id: 'gov-u2-l1',
        title: 'How a bill becomes law, and how courts decide',
        minutes: 55,
        objectives: ['Trace the legislative process.', 'Explain judicial review and precedent.'],
        sections: [
          section('The legislative path', [
            'A bill is introduced, assigned to committee, marked up, debated, and voted on in one chamber, then repeated in the other. Differences are resolved in conference. The president may sign, veto, or take no action; a pocket veto occurs when Congress adjourns within ten days. Most bills die in committee.',
            'Committees are where expertise and interest-group pressure concentrate. Hearings and markup are often more consequential than floor debate.',
          ]),
          section('Courts', [
            'Judicial review is the power to declare acts unconstitutional, established in Marbury v. Madison (1803). Courts follow precedent (stare decisis), but they can distinguish or overrule earlier decisions. Federal judges are nominated by the president and confirmed by the Senate, and serve during good behavior.',
            'Texas has a bifurcated appellate structure with separate supreme courts for civil and criminal cases: the Texas Supreme Court and the Texas Court of Criminal Appeals.',
          ]),
        ],
        example: {
          prompt: 'Why does a bill with majority support sometimes fail?',
          steps: ['Committee gatekeeping can block it.', 'A filibuster or supermajority rule may apply in the Senate.', 'Presidential veto requires a two-thirds override.', 'Multiple veto points make failure common.'],
          answer: 'Multiple veto points mean majority support is not sufficient.',
        },
        practice: [
          mc('Judicial review was established by', ['Marbury v. Madison', 'Brown v. Board', 'McCulloch v. Maryland', 'Plessy v. Ferguson'], 0, 'Marbury (1803) established judicial review.'),
          mc('Most bills die', ['on the floor', 'in committee', 'at the White House', 'in conference'], 1, 'Committee gatekeeping stops most legislation.'),
        ],
      }),
    ], quiz('Unit 2 quiz: institutions', [
      mc('A presidential veto can be overridden by', ['a simple majority', 'two-thirds of each chamber', 'the Supreme Court', 'the states'], 1, 'Two-thirds in both chambers is required.'),
      mc('Texas’s highest criminal court is the', ['Texas Supreme Court', 'Court of Criminal Appeals', 'Fifth Circuit', 'district court'], 1, 'Texas separates civil and criminal final appeals.'),
      mc('Stare decisis means', ['judges may ignore precedent', 'courts generally follow precedent', 'statutes expire', 'the president decides'], 1, 'It is the principle of standing by decided cases.'),
    ]), project({
      title: 'Legislative simulation',
      prompt: 'Draft a one-page bill on a state issue. Identify the committee it would go to, the fiscal cost, and the strongest objection.',
      deliverable: 'Bill text, committee assignment, cost estimate, and objection analysis.',
      guidance: ['Write operative language, not just goals.', 'Estimate cost with a stated assumption.'],
      rubric: [
        rubricRow('Bill quality', 35, [['Excellent', 'Clear operative language.', 35], ['Proficient', 'Understandable.', 28], ['Developing', 'Vague.', 18], ['Beginning', 'Not a bill.', 7]]),
        rubricRow('Process knowledge', 25, [['Excellent', 'Correct committee and path.', 25], ['Proficient', 'Mostly correct.', 20], ['Developing', 'Unclear.', 12], ['Beginning', 'Wrong.', 5]]),
        rubricRow('Cost and objection', 30, [['Excellent', 'Specific estimate and strong objection.', 30], ['Proficient', 'Reasonable.', 24], ['Developing', 'Thin.', 15], ['Beginning', 'None.', 6]]),
        rubricRow('Presentation', 10, [['Excellent', 'Clear.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
    unit('u3', 'Rights and participation', 'Rights are enforced through institutions and participation.', [
      lesson({
        id: 'gov-u3-l1',
        title: 'Civil liberties, elections, and local government',
        minutes: 50,
        objectives: ['Distinguish civil liberties from civil rights.', 'Explain the role of local government and voting.'],
        sections: [
          section('Liberties and rights', [
            'Civil liberties protect individuals from government overreach (speech, religion, due process). Civil rights guarantee equal treatment and participation regardless of protected characteristics. The First Amendment protects speech, press, assembly, petition, and religion, with limits such as incitement, true threats, and obscenity as defined by courts.',
            'The Fourteenth Amendment’s due process and equal protection clauses are the main vehicles for applying rights against states. Procedural due process concerns fair procedures; substantive due process concerns fundamental rights.',
          ]),
          section('Participation and local government', [
            'Voting requires registration in Texas; elections are administered by counties. Local governments — counties, cities, school districts, and special districts — levy property taxes and provide services such as roads, water, police, and schools. School boards and city councils are where individuals have the most direct influence.',
            'Turnout in local elections is typically much lower than in presidential elections, which means small numbers of voters can decide consequential questions.',
          ]),
        ],
        example: {
          prompt: 'A city council proposes a rule limiting yard signs. What constitutional question arises?',
          steps: ['Signs are a form of expression.', 'The First Amendment limits content-based restrictions.', 'Time, place, and manner rules must be content-neutral and narrowly tailored.', 'The analysis depends on the rule’s text and application.'],
          answer: 'A First Amendment question about content neutrality and tailoring.',
        },
        practice: [
          mc('Civil liberties primarily protect against', ['private discrimination only', 'government overreach', 'contract disputes', 'foreign governments'], 1, 'Liberties limit government action.'),
          mc('School districts are governed by', ['the governor', 'elected school boards', 'the Texas Supreme Court', 'the U.S. Senate'], 1, 'Local boards set policy within state and federal law.'),
        ],
      }),
    ], quiz('Unit 3 quiz: rights and participation', [
      mc('The First Amendment protects', ['the right to a jury trial', 'speech and assembly', 'the right to bear arms', 'quartering soldiers'], 1, 'Speech, press, assembly, petition, and religion are protected.'),
      mc('Procedural due process concerns', ['fair procedures', 'economic policy', 'treaty ratification', 'federalism'], 0, 'It concerns fair processes before deprivation.'),
      mc('Local elections often have lower turnout, which means', ['they do not matter', 'a small number of voters can decide outcomes', 'they are decided by courts', 'they are canceled'], 1, 'Low turnout increases the influence of each voter.'),
    ]), project({
      title: 'Civic participation plan',
      prompt: 'Identify a local issue, the body that decides it, the relevant meetings and deadlines, and a lawful way to participate. Write a 300-word plan.',
      deliverable: 'A plan with specific dates, authorities, and a draft public comment.',
      guidance: ['Name the correct body and process.', 'Keep the comment civil and evidence-based.'],
      rubric: [
        rubricRow('Accuracy of process', 40, [['Excellent', 'Correct body, dates, and procedure.', 40], ['Proficient', 'Mostly correct.', 32], ['Developing', 'Vague.', 20], ['Beginning', 'Wrong.', 8]]),
        rubricRow('Public comment', 35, [['Excellent', 'Specific, evidence-based, civil.', 35], ['Proficient', 'Reasonable.', 28], ['Developing', 'General.', 18], ['Beginning', 'Inflammatory.', 7]]),
        rubricRow('Feasibility', 15, [['Excellent', 'Realistic steps.', 15], ['Proficient', 'Plausible.', 12], ['Developing', 'Unclear.', 8], ['Beginning', 'Impossible.', 3]]),
        rubricRow('Clarity', 10, [['Excellent', 'Clear.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
  ],
  finalExam: exam('U.S. Government final examination', [
    mc('Enumerated powers belong to', ['the states', 'Congress', 'the courts', 'counties'], 1, 'Article I lists them.'),
    mc('The Supremacy Clause means', ['states are supreme', 'valid federal law prevails', 'treaties are void', 'courts legislate'], 1, 'Federal law prevails when constitutional.'),
    mc('Judicial review was established in', ['Marbury v. Madison', 'Brown v. Board', 'Plessy v. Ferguson', 'McCulloch v. Maryland'], 0, 'Marbury (1803).'),
    mc('A veto override requires', ['a simple majority', 'two-thirds of each chamber', 'the Supreme Court', 'a national referendum'], 1, 'Two-thirds of both chambers.'),
    mc('The Texas Legislature’s regular session lasts', ['140 days every two years', 'all year', '30 days yearly', 'six months yearly'], 0, 'It meets for 140 days in odd-numbered years.'),
    short('Explain how federalism both protects and complicates liberty.', 'Model: Dividing power between state and federal governments creates competition and multiple access points, so a rights violation by one level can be checked by another. But it also produces inconsistent protection across states and disputes over authority, requiring courts and Congress to resolve conflicts.', ['Explains protection.', 'Explains complication.', 'Uses a concrete mechanism.'], 10),
  ]),
};

export const economics: Course = {
  id: 'hs-econ',
  title: 'Economics with Emphasis on the Free Enterprise System',
  subject: 'social-studies',
  grade: 12,
  credits: 0.5,
  semesters: 1,
  description:
    'Scarcity and opportunity cost, supply and demand, market structures, macroeconomic measurement, the Federal Reserve, government policy, and personal financial decisions. One-semester course; pairs with Government.',
  essentialQuestions: [
    'How do prices coordinate decisions among millions of people?',
    'What can policy do about inflation and unemployment, and at what cost?',
  ],
  teks: [
    teks('19 TAC ch. 113, Economics with Emphasis on the Free Enterprise System and Its Benefits', 'Scarcity and opportunity cost; supply and demand; market structures; macroeconomic indicators; money and the Federal Reserve; government policy; personal finance.'),
  ],
  weights: HIGH_WEIGHTS,
  units: [
    unit('u1', 'Markets', 'Prices are information and incentives at once.', [
      lesson({
        id: 'econ-u1-l1',
        title: 'Scarcity, demand, and supply',
        minutes: 55,
        objectives: ['Distinguish a change in demand from a change in quantity demanded.', 'Predict the effect of a shift on equilibrium price and quantity.'],
        sections: [
          section('Opportunity cost', [
            'Every choice has a cost: the value of the next-best alternative forgone. Studying for an hour costs the wages or leisure you gave up. Sunk costs are already spent and should not drive future decisions; marginal analysis compares the additional benefit of one more unit with its additional cost.',
            'The production possibilities frontier illustrates trade-offs: producing more of one good requires giving up some of another along the curve, and points inside the curve are inefficient.',
          ]),
          section('Supply and demand', [
            'Demand is the relationship between price and quantity buyers will purchase, all else equal. A change in the good’s own price changes quantity demanded (movement along the curve). A change in income, tastes, prices of substitutes, or expectations shifts the whole curve.',
            'Supply slopes upward because higher prices make additional production profitable. Equilibrium occurs where the curves intersect. If demand increases and supply is unchanged, both equilibrium price and quantity rise. Price ceilings below equilibrium create shortages; price floors above it create surpluses.',
          ]),
        ],
        example: {
          prompt: 'A new study says coffee improves alertness. What happens in the coffee market?',
          steps: ['Tastes shift in favor of coffee.', 'Demand shifts right.', 'Supply is unchanged in the short run.', 'Equilibrium price and quantity both rise.'],
          answer: 'Higher price and higher quantity, assuming supply does not shift.',
        },
        practice: [
          mc('A fall in the price of a good causes', ['a decrease in demand', 'an increase in quantity demanded', 'a supply shift', 'no change'], 1, 'A price change moves along the demand curve.'),
          mc('A price ceiling below equilibrium produces', ['a surplus', 'a shortage', 'equilibrium', 'no effect'], 1, 'Quantity demanded exceeds quantity supplied.'),
        ],
      }),
    ], quiz('Unit 1 quiz: markets', [
      mc('Opportunity cost is', ['the money paid', 'the value of the next-best alternative', 'total cost', 'a sunk cost'], 1, 'It measures the forgone alternative.'),
      mc('An increase in demand with supply unchanged causes', ['lower price and quantity', 'higher price and quantity', 'no change', 'a surplus'], 1, 'The demand curve shifts right along an upward-sloping supply curve.'),
      mc('A price floor above equilibrium produces', ['a shortage', 'a surplus', 'equilibrium', 'a shift in demand'], 1, 'Quantity supplied exceeds quantity demanded.'),
    ]), project({
      title: 'Market event analysis',
      prompt: 'Choose a recent news event affecting a specific market. Draw the shift, explain the mechanism, and predict price and quantity effects, noting what would falsify your prediction.',
      deliverable: 'Graph, explanation, and a falsification condition.',
      guidance: ['Distinguish shifts from movements along a curve.', 'State assumptions.', 'Consider substitutes.'],
      rubric: [
        rubricRow('Graph', 30, [['Excellent', 'Correct shift with labels.', 30], ['Proficient', 'Minor error.', 24], ['Developing', 'Confused.', 15], ['Beginning', 'Incorrect.', 6]]),
        rubricRow('Mechanism', 40, [['Excellent', 'Clear causal explanation.', 40], ['Proficient', 'Reasonable.', 32], ['Developing', 'Asserted.', 20], ['Beginning', 'None.', 8]]),
        rubricRow('Prediction and falsification', 20, [['Excellent', 'Specific and testable.', 20], ['Proficient', 'Plausible.', 16], ['Developing', 'Vague.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Clarity', 10, [['Excellent', 'Clear.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
    unit('u2', 'Macroeconomics', 'Growth, inflation, and unemployment are measured, not felt directly.', [
      lesson({
        id: 'econ-u2-l1',
        title: 'GDP, inflation, unemployment, and the Fed',
        minutes: 55,
        objectives: ['Distinguish nominal from real GDP.', 'Explain the Fed’s dual mandate and basic tools.'],
        sections: [
          section('Measuring the economy', [
            'Gross domestic product is the market value of final goods and services produced within a country in a period. Nominal GDP uses current prices; real GDP adjusts for inflation using a price index. GDP omits unpaid household work and does not measure distribution or well-being.',
            'Inflation is a sustained rise in the general price level, commonly measured by the Consumer Price Index. The unemployment rate counts people without work who are actively seeking it; discouraged workers who stop looking are not counted, which understates slack.',
          ]),
          section('The Federal Reserve', [
            'The Fed is the central bank of the United States, created in 1913. Its statutory goals are maximum employment and price stability. It raises or lowers the target federal funds rate, which influences other interest rates, and it can adjust reserve requirements and use open market operations.',
            'Monetary policy works with lags and involves trade-offs: tightening reduces inflation but can raise unemployment. Fiscal policy — taxation and spending — is set by Congress and the president. Texas has no state personal income tax; the state relies heavily on sales and property taxes.',
          ]),
        ],
        example: {
          prompt: 'Nominal GDP rises 6% while prices rise 4%. What happened to real output?',
          steps: ['Real growth is approximately nominal growth minus inflation.', '6% − 4% = 2%.', 'The approximation is close for small rates.'],
          answer: 'Real output grew about 2%.',
        },
        practice: [
          mc('Real GDP differs from nominal GDP because real GDP', ['includes imports', 'adjusts for price changes', 'counts only services', 'excludes government'], 1, 'Real GDP uses constant prices.'),
          mc('The Fed’s statutory goals are', ['zero inflation and full trade', 'maximum employment and price stability', 'balanced budgets', 'low taxes'], 1, 'Those are the dual mandate goals.'),
        ],
      }),
    ], quiz('Unit 2 quiz: macroeconomics', [
      mc('Inflation is measured by', ['the federal funds rate', 'a price index such as the CPI', 'the unemployment rate', 'GDP only'], 1, 'The CPI tracks a basket of consumer prices.'),
      mc('A discouraged worker who stops looking for work is', ['counted as employed', 'not counted in the official unemployment rate', 'counted as retired', 'counted as underemployed'], 1, 'The official rate counts active job seekers.'),
      num('Nominal GDP grows 5% and prices rise 3%. What is approximate real growth in percent?', 2, '5 − 3 = 2.'),
    ]), project({
      title: 'Economic indicators briefing',
      prompt: 'Build a one-page briefing on the latest GDP, unemployment, and inflation data from official sources. Explain what each measures and one limitation.',
      deliverable: 'A briefing with a data table, sources, and dates.',
      guidance: ['Use BLS, BEA, or FRED data with dates.', 'Do not compare figures from different periods without saying so.', 'Explain limitations.'],
      rubric: [
        rubricRow('Data accuracy', 40, [['Excellent', 'Correct figures with dates and sources.', 40], ['Proficient', 'Minor issues.', 32], ['Developing', 'Unsourced.', 20], ['Beginning', 'Incorrect.', 8]]),
        rubricRow('Explanation', 35, [['Excellent', 'Clear definitions and limits.', 35], ['Proficient', 'Basic.', 28], ['Developing', 'Confused.', 18], ['Beginning', 'None.', 7]]),
        rubricRow('Synthesis', 15, [['Excellent', 'Indicators related coherently.', 15], ['Proficient', 'Reasonable.', 12], ['Developing', 'List.', 8], ['Beginning', 'None.', 3]]),
        rubricRow('Presentation', 10, [['Excellent', 'Professional.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
    unit('u3', 'Government, trade, and personal decisions', 'Policy shapes incentives; incentives shape choices.', [
      lesson({
        id: 'econ-u3-l1',
        title: 'Taxes, trade, and the budget',
        minutes: 50,
        objectives: ['Distinguish progressive, proportional, and regressive taxes.', 'Explain gains and costs of trade.'],
        sections: [
          section('Tax structure', [
            'A progressive tax takes a larger share of income from higher earners (the federal income tax). A proportional tax takes the same share (a flat rate). A regressive tax takes a larger share from lower earners (sales taxes, which consume a larger fraction of a low income).',
            'Texas has no state personal income tax, prohibited by Tex. Const. art. VIII, §24-a. The state sales tax is 6.25%, and local jurisdictions may add up to 2%, for a maximum combined rate of 8.25%. Property taxes fund schools and local services.',
          ]),
          section('Trade and the budget', [
            'Trade increases total output through specialization, but gains are not evenly distributed: import-competing workers can lose while consumers gain. Tariffs raise revenue and protect domestic producers but raise prices for consumers and invite retaliation.',
            'A budget deficit occurs when spending exceeds revenue in a year; the debt is the accumulated total. Deficits can be justified during recessions but constrain future choices.',
          ]),
        ],
        example: {
          prompt: 'Is a 6.25% sales tax progressive, proportional, or regressive?',
          steps: ['Compare tax paid as a share of income.', 'Lower-income households spend a larger share of income on taxable goods.', 'So the effective burden is a larger share of income for them.'],
          answer: 'Regressive in effect, even though the rate is flat.',
        },
        practice: [
          mc('A progressive tax', ['takes a larger share from higher incomes', 'takes the same share', 'takes more from lower incomes', 'applies only to corporations'], 0, 'Average rates rise with income.'),
          mc('Texas’s maximum combined state and local sales tax rate is', ['6.25%', '7%', '8.25%', '10%'], 2, '6.25% state plus up to 2% local equals 8.25%.'),
        ],
      }),
    ], quiz('Unit 3 quiz: policy', [
      mc('A regressive tax', ['takes a larger share from lower incomes', 'takes a larger share from higher incomes', 'is always a flat rate', 'is unconstitutional'], 0, 'Its burden falls proportionally more on lower incomes.'),
      mc('Texas personal income tax is', ['graduated', 'flat', 'prohibited by the state constitution', 'set by cities'], 2, 'Tex. Const. art. VIII, §24-a prohibits it.'),
      mc('A tariff is a tax on', ['income', 'imports', 'property', 'payroll'], 1, 'Tariffs apply to imported goods.'),
    ]), project({
      title: 'Personal budget and tax estimate',
      prompt: 'Build a monthly budget for a realistic entry-level income in your area. Estimate federal income tax and FICA, then compute take-home pay and savings.',
      deliverable: 'Budget spreadsheet with assumptions and an explanation of each deduction.',
      guidance: ['Use current IRS and SSA figures.', 'Distinguish gross from net pay.', 'Include irregular expenses.'],
      rubric: [
        rubricRow('Budget realism', 30, [['Excellent', 'Realistic local costs with sources.', 30], ['Proficient', 'Plausible.', 24], ['Developing', 'Unrealistic.', 15], ['Beginning', 'Missing.', 6]]),
        rubricRow('Tax and payroll accuracy', 35, [['Excellent', 'Correct method and current figures.', 35], ['Proficient', 'Minor error.', 28], ['Developing', 'Confused.', 18], ['Beginning', 'Incorrect.', 7]]),
        rubricRow('Savings and trade-offs', 25, [['Excellent', 'Clear trade-offs and emergency fund.', 25], ['Proficient', 'Reasonable.', 20], ['Developing', 'Thin.', 12], ['Beginning', 'None.', 5]]),
        rubricRow('Explanation', 10, [['Excellent', 'Clear and accurate.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Confused.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
  ],
  finalExam: exam('Economics final examination', [
    mc('Opportunity cost is', ['total spending', 'the value of the next-best alternative', 'the price paid', 'a sunk cost'], 1, 'It is the forgone alternative.'),
    mc('A price ceiling below equilibrium causes', ['a surplus', 'a shortage', 'equilibrium', 'no effect'], 1, 'Quantity demanded exceeds supply.'),
    mc('Real GDP adjusts for', ['population', 'price changes', 'imports', 'employment'], 1, 'Real GDP uses constant prices.'),
    num('Nominal GDP grows 4% and prices rise 1.5%. What is approximate real growth in percent?', 2.5, '4 − 1.5 = 2.5.'),
    mc('A progressive tax takes', ['a larger share from higher incomes', 'the same share', 'more from lower incomes', 'only corporate profits'], 0, 'Average rates rise with income.'),
    short('Explain why a sales tax can be regressive even though its rate is the same for everyone.', 'Model: Regressivity concerns the share of income paid, not the rate. Lower-income households spend a larger fraction of income on taxable consumption and save less, so the tax absorbs a larger share of their income than it does for higher earners.', ['Defines regressivity by income share.', 'Explains consumption patterns.', 'Concludes correctly.'], 10),
  ]),
};
