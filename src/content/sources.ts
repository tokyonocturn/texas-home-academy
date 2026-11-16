import type { SourceRef } from '../types';

/**
 * Source registry. Every claim this program makes about law, standards, or
 * government programs points here. Accessed 2026-11-16 unless noted.
 *
 * Rule: if a fact is not in this registry (or a lesson's own `furtherReading`),
 * it does not belong in the curriculum.
 */

export const ACCESSED = '2026-11-16';

export const SOURCES: SourceRef[] = [
  {
    id: 'tea-homeschool',
    title: 'Home Schooling',
    publisher: 'Texas Education Agency',
    url: 'https://tea.texas.gov/families-and-students/finding-school-your-child/home-schooling',
    supports:
      'TEA does not regulate, index, monitor, approve, register, or accredit home schools; the State of Texas does not award a diploma to home-schooled students.',
    accessed: ACCESSED,
  },
  {
    id: 'tec-25',
    title: 'Texas Education Code, Chapter 25 (Attendance and Admissions)',
    publisher: 'Texas Legislature',
    url: 'https://statutes.capitol.texas.gov/Docs/ED/htm/ED.25.htm',
    supports:
      '§25.085 compulsory attendance age; §25.086(a)(1) private/parochial school exemption; §25.092 minimum attendance for class credit; §25.081 180 days of instruction; §25.0811 earliest school start date.',
    accessed: ACCESSED,
  },
  {
    id: 'leeper',
    title: 'Texas Education Agency v. Leeper, 893 S.W.2d 432 (Tex. 1994)',
    publisher: 'CourtListener (Texas Supreme Court opinion)',
    url: 'https://www.courtlistener.com/opinion/1528595/texas-education-agency-v-leeper/',
    supports:
      'A bona fide (good faith, not a sham) home school teaching reading, spelling, grammar, mathematics, and good citizenship qualifies for the private-school exemption.',
    accessed: ACCESSED,
  },
  {
    id: 'tac-74a',
    title: '19 TAC Chapter 74, Subchapter A (Required Curriculum)',
    publisher: 'Texas Education Agency / State Board of Education',
    url: 'https://tea.texas.gov/about-tea/laws-and-rules/sboe-rules-tac/sboe-tac-currently-in-effect/ch074a.pdf',
    supports:
      'Required curriculum by grade band; required K-5 and 6-8 subjects; high-school course sequences.',
    accessed: ACCESSED,
  },
  {
    id: 'tac-74b',
    title: '19 TAC Chapter 74, Subchapter B (Graduation Requirements)',
    publisher: 'Texas Education Agency / State Board of Education',
    url: 'https://tea.texas.gov/about-tea/laws-and-rules/sboe-rules-tac/sboe-tac-currently-in-effect/ch074b.pdf',
    supports:
      'FHSP 22 credits and endorsement plan 26 credits; endorsement areas; Distinguished Level of Achievement; speech proficiency requirement.',
    accessed: ACCESSED,
  },
  {
    id: 'tac-74c',
    title: '19 TAC Chapter 74, Subchapter C (Credit and testing)',
    publisher: 'Texas Education Agency / State Board of Education',
    url: 'https://tea.texas.gov/laws-and-rules/sboe-rules-tac/sboe-tac-currently-in-effect/ch074c.pdf',
    supports:
      '§74.26(c): credit may be earned only with a grade equivalent to 70 on a 100-point scale; §74.24 credit by examination.',
    accessed: ACCESSED,
  },
  {
    id: 'tea-toolkit',
    title: 'Texas Graduation Toolkit 2025',
    publisher: 'Texas Education Agency',
    url: 'https://tea.texas.gov/about-tea/newsroom/brochures/tea-graduation-toolkit-2025.pdf',
    supports:
      'Plain-language summary of the 22- and 26-credit plans, the five endorsement areas, and the DLA.',
    accessed: ACCESSED,
  },
  {
    id: 'tea-grad',
    title: 'High School Graduation Requirements',
    publisher: 'Texas Education Agency',
    url: 'https://tea.texas.gov/student-readiness-and-high-school/high-school-graduation-requirements',
    supports: 'Current graduation requirements overview and end-of-course assessment list.',
    accessed: ACCESSED,
  },
  {
    id: 'teks',
    title: 'Texas Essential Knowledge and Skills (TEKS)',
    publisher: 'Texas Education Agency',
    url: 'https://tea.texas.gov/curriculum-and-instruction/curriculum-standards-teks',
    supports:
      'TEKS chapter structure: 110 ELA, 111 Math, 112 Science, 113 Social Studies, 114 LOTE, 115 Health, 116 PE, 117 Fine Arts, 126 Technology Applications, 127 CTE.',
    accessed: ACCESSED,
  },
  {
    id: 'tec-28-002',
    title: 'Tex. Educ. Code §28.002 (Required curriculum)',
    publisher: 'Texas Legislature',
    url: 'https://statutes.capitol.texas.gov/GetStatute.aspx?Code=ED&Value=28.002',
    supports:
      'Foundation curriculum (ELA, math, science, social studies) and enrichment curriculum (LOTE, health, PE, fine arts, CTE, technology applications, religious literature, personal financial literacy).',
    accessed: ACCESSED,
  },
  {
    id: 'staar',
    title: 'STAAR Resources',
    publisher: 'Texas Education Agency',
    url: 'https://tea.texas.gov/student-assessment/testing/staar/staar-resources',
    supports:
      'STAAR applies to students enrolled in Texas public and open-enrollment charter schools: math and reading language arts grades 3-8, science grades 5 and 8, social studies grade 8, and five end-of-course exams.',
    accessed: ACCESSED,
  },
  {
    id: 'usc-3403',
    title: '20 U.S.C. §3403(b) (Prohibition of federal control of education)',
    publisher: 'U.S. House of Representatives, U.S. Code',
    url: 'https://uscode.house.gov/view.xhtml?edition=prelim&num=0&req=granuleid%3AUSC-prelim-title20-section3403',
    supports: 'Federal department may not direct, supervise, or control curriculum or instruction.',
    accessed: ACCESSED,
  },
  {
    id: 'usc-7906a',
    title: '20 U.S.C. §7906a (Prohibition against federal mandates, direction, or control)',
    publisher: 'U.S. House of Representatives, U.S. Code',
    url: 'https://uscode.house.gov/view.xhtml?edition=prelim&num=0&req=granuleid%3AUSC-prelim-title20-section7906a',
    supports: 'No federal mandate or incentive to adopt Common Core or any other set of standards.',
    accessed: ACCESSED,
  },
  {
    id: 'essa',
    title: 'Every Student Succeeds Act, 20 U.S.C. §6301 et seq.',
    publisher: 'U.S. Congress',
    url: 'https://www.congress.gov/114/plaws/publ95/PLAW-114publ95.pdf',
    supports:
      'Federal K-12 law regulates federal funding and state plans (20 U.S.C. §6311), not curriculum content.',
    accessed: ACCESSED,
  },
  {
    id: 'ferpa',
    title: 'FERPA, 20 U.S.C. §1232g; 34 C.F.R. Part 99',
    publisher: 'U.S. Department of Education',
    url: 'https://studentprivacy.ed.gov/ferpa',
    supports: 'Federal student-records privacy rule; this program keeps all records on the family device.',
    accessed: ACCESSED,
  },
  {
    id: 'idea',
    title: 'Individuals with Disabilities Education Act, 20 U.S.C. §1400 et seq.',
    publisher: 'U.S. Department of Education',
    url: 'https://sites.ed.gov/idea/about-idea/',
    supports: 'Federal special-education law and the framework for accommodations.',
    accessed: ACCESSED,
  },
  {
    id: 'title-ix',
    title: 'Title IX, 20 U.S.C. §§1681-1688',
    publisher: 'U.S. Congress (CRS summary)',
    url: 'https://www.congress.gov/crs-product/LSB11279',
    supports: 'Federal prohibition on sex discrimination in education programs receiving federal funds.',
    accessed: ACCESSED,
  },
  {
    id: 'irs-brackets',
    title: 'IRS releases tax inflation adjustments for tax year 2026',
    publisher: 'Internal Revenue Service',
    url: 'https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill',
    supports:
      'Tax year 2026 brackets and standard deduction ($16,100 single; $32,200 married filing jointly).',
    accessed: ACCESSED,
  },
  {
    id: 'irs-brackets-2025',
    title: 'Federal income tax rates and brackets',
    publisher: 'Internal Revenue Service',
    url: 'https://www.irs.gov/filing/federal-income-tax-rates-and-brackets',
    supports: 'Tax year 2025 brackets and the 2026 comparison table.',
    accessed: ACCESSED,
  },
  {
    id: 'irs-501',
    title: 'Publication 501: Dependents, Standard Deduction, and Filing Information',
    publisher: 'Internal Revenue Service',
    url: 'https://www.irs.gov/publications/p501',
    supports: 'Filing thresholds and standard deduction tables used in the tax lessons.',
    accessed: ACCESSED,
  },
  {
    id: 'irs-1040',
    title: 'Instructions for Form 1040 (2025)',
    publisher: 'Internal Revenue Service',
    url: 'https://www.irs.gov/instructions/i1040gi',
    supports: 'Form 1040 line structure, filing status, and filing-requirement rules.',
    accessed: ACCESSED,
  },
  {
    id: 'irs-w4',
    title: 'Topic No. 753: Form W-4, Employee’s Withholding Certificate',
    publisher: 'Internal Revenue Service',
    url: 'https://www.irs.gov/taxtopics/tc753',
    supports: 'What Form W-4 does and why withholding is not the same as tax owed.',
    accessed: ACCESSED,
  },
  {
    id: 'irs-w2',
    title: 'Topic No. 752: Form W-2, Wage and Tax Statement',
    publisher: 'Internal Revenue Service',
    url: 'https://www.irs.gov/taxtopics/tc752',
    supports: 'W-2 boxes, who files it, and the 2026 $2,000 wage threshold for furnishing W-2s.',
    accessed: ACCESSED,
  },
  {
    id: 'irs-1099nec',
    title: 'Form 1099-NEC and independent contractors (FAQ)',
    publisher: 'Internal Revenue Service',
    url: 'https://www.irs.gov/faqs/small-business-self-employed-other-business/form-1099-nec-and-independent-contractors',
    supports: '$600 threshold for 2025 payments and $2,000 for payments after December 31, 2025.',
    accessed: ACCESSED,
  },
  {
    id: 'irs-1099k',
    title: 'Form 1099-K FAQs',
    publisher: 'Internal Revenue Service',
    url: 'https://www.irs.gov/newsroom/form-1099-k-faqs-general-information',
    supports: 'Third-party settlement organization reporting threshold of $20,000 and 200 transactions.',
    accessed: ACCESSED,
  },
  {
    id: 'irs-p15',
    title: 'Publication 15 (Circular E), Employer’s Tax Guide',
    publisher: 'Internal Revenue Service',
    url: 'https://www.irs.gov/publications/p15',
    supports: 'FICA rates, withholding tables, and the additional Medicare tax withholding threshold.',
    accessed: ACCESSED,
  },
  {
    id: 'ssa-cbb',
    title: 'Contribution and Benefit Base',
    publisher: 'Social Security Administration',
    url: 'https://www.ssa.gov/oact/COLA/cbb.html',
    supports: 'Social Security wage base: $176,100 for 2025 and $184,500 for 2026.',
    accessed: ACCESSED,
  },
  {
    id: 'dol-minwage',
    title: 'Minimum Wage',
    publisher: 'U.S. Department of Labor, Wage and Hour Division',
    url: 'https://www.dol.gov/agencies/whd/minimum-wage',
    supports: 'Federal minimum wage of $7.25 per hour, effective July 24, 2009.',
    accessed: ACCESSED,
  },
  {
    id: 'dol-overtime',
    title: 'Overtime Pay',
    publisher: 'U.S. Department of Labor, Wage and Hour Division',
    url: 'https://www.dol.gov/agencies/whd/overtime',
    supports: 'FLSA overtime at 1.5 times the regular rate for hours over 40 in a workweek.',
    accessed: ACCESSED,
  },
  {
    id: 'tx-constitution',
    title: 'Tex. Const. art. VIII, §24-a (Individual income tax prohibited)',
    publisher: 'Texas Legislature',
    url: 'https://statutes.capitol.texas.gov/Docs/CN/htm/CN.8/CN.8.24-a.htm',
    supports: 'Texas constitution bars a state tax on individuals’ net incomes.',
    accessed: ACCESSED,
  },
  {
    id: 'comptroller-sales',
    title: 'Sales and Use Tax',
    publisher: 'Texas Comptroller of Public Accounts',
    url: 'https://comptroller.texas.gov/taxes/sales/',
    supports: '6.25% state sales tax; local jurisdictions may add up to 2%, for a maximum of 8.25%.',
    accessed: ACCESSED,
  },
  {
    id: 'comptroller-franchise',
    title: 'Franchise Tax',
    publisher: 'Texas Comptroller of Public Accounts',
    url: 'https://comptroller.texas.gov/taxes/franchise/',
    supports:
      'Margin tax on taxable entities; 2026 no-tax-due threshold of $2,650,000, rates of 0.75%, 0.375%, and 0.331%, and the $480,000 compensation deduction limit.',
    accessed: ACCESSED,
  },
  {
    id: 'twc-ui',
    title: 'Eligibility and Benefit Amounts',
    publisher: 'Texas Workforce Commission',
    url: 'https://www.twc.texas.gov/programs/unemployment-benefits/eligibility-benefit-amounts',
    supports:
      'Unemployment base period, wage requirements, and weekly benefit amounts ($76-$619 effective October 4, 2026).',
    accessed: ACCESSED,
  },
  {
    id: 'twc-atwill',
    title: 'At-Will Employment and Wrongful Discharge',
    publisher: 'Texas Workforce Commission',
    url: 'https://efte.twc.texas.gov/wrongful_discharge.html',
    supports: 'Texas at-will employment default and its statutory exceptions.',
    accessed: ACCESSED,
  },
  {
    id: 'twc-minwage',
    title: 'Texas Minimum Wage Law',
    publisher: 'Texas Workforce Commission',
    url: 'https://www.twc.texas.gov/jobseekers/texas-minimum-wage-law',
    supports: 'Texas adopts the federal minimum wage by reference: $7.25 per hour.',
    accessed: ACCESSED,
  },
  {
    id: 'cfpb-dispute',
    title: 'How do I dispute an error on my credit report?',
    publisher: 'Consumer Financial Protection Bureau',
    url: 'https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-an-error-on-my-credit-report-en-314/',
    supports: 'Dispute rights with the furnisher and the credit reporting company; 30-day investigation.',
    accessed: ACCESSED,
  },
  {
    id: 'annualcreditreport',
    title: 'Annual Credit Report',
    publisher: 'Equifax, Experian, and TransUnion (federally authorized site)',
    url: 'https://www.annualcreditreport.com/',
    supports: 'Free credit reports from each nationwide credit reporting company.',
    accessed: ACCESSED,
  },
  {
    id: 'myfico',
    title: 'What’s in your credit score',
    publisher: 'myFICO (FICO)',
    url: 'https://www.myfico.com/credit-education/whats-in-your-credit-score',
    supports: 'FICO category weights: payment history 35%, amounts owed 30%, length 15%, new credit 10%, mix 10%.',
    accessed: ACCESSED,
  },
  {
    id: 'tx-prop-92',
    title: 'Texas Property Code, Chapter 92 (Residential Tenancies)',
    publisher: 'Texas Legislature',
    url: 'https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm',
    supports:
      '§92.103 security deposit return by the 30th day; §92.104 no deduction for normal wear; §92.107 forwarding address; §92.056 repair notice and seven-day presumption; §92.0561 repair-and-deduct limits.',
    accessed: ACCESSED,
  },
  {
    id: 'tx-prop-24',
    title: 'Texas Property Code §24.005 (Notice to vacate)',
    publisher: 'Texas Legislature',
    url: 'https://statutes.capitol.texas.gov/GetStatute.aspx?Code=PR&Value=24.005',
    supports: 'Eviction notice-to-vacate period, generally at least three days unless the lease provides otherwise.',
    accessed: ACCESSED,
  },
  {
    id: 'tdi-home',
    title: 'Home Insurance Guide',
    publisher: 'Texas Department of Insurance',
    url: 'https://www.tdi.texas.gov/pubs/consumer/cb025.html',
    supports: 'Standard homeowners coverage, flood exclusions, and lender requirements.',
    accessed: ACCESSED,
  },
  {
    id: 'tdi-renters',
    title: 'Renters Insurance',
    publisher: 'Texas Department of Insurance',
    url: 'https://tdi.texas.gov/tips/renters-insurance.html',
    supports: 'What renters policies cover and why a landlord’s policy does not cover tenant property.',
    accessed: ACCESSED,
  },
  {
    id: 'txdmv-buying',
    title: 'Buying or Selling a Vehicle',
    publisher: 'Texas Department of Motor Vehicles',
    url: 'https://www.txdmv.gov/motorists/buying-or-selling-a-vehicle',
    supports: 'Title transfer within 30 days using Form 130-U.',
    accessed: ACCESSED,
  },
  {
    id: 'comptroller-mv',
    title: 'Motor Vehicle Sales and Use Tax',
    publisher: 'Texas Comptroller of Public Accounts',
    url: 'https://comptroller.texas.gov/taxes/publications/96-254/mv-sales.php',
    supports: '6.25% motor vehicle sales tax and the 80% standard presumptive value rule for private-party sales.',
    accessed: ACCESSED,
  },
  {
    id: 'txdmv-inspection',
    title: 'Vehicle Inspection Changes (effective January 1, 2025)',
    publisher: 'Texas Department of Motor Vehicles',
    url: 'https://www.txdmv.gov/sites/default/files/body-files/2024-12-17-Vehicle-Inspection-Changes.pdf',
    supports:
      'Most noncommercial vehicles no longer require a safety inspection; the $7.50 Inspection Program Replacement Fee remains.',
    accessed: ACCESSED,
  },
  {
    id: 'sos-205',
    title: 'Form 205: Certificate of Formation (Limited Liability Company)',
    publisher: 'Texas Secretary of State',
    url: 'https://www.sos.state.tx.us/corp/forms/205_boc.pdf',
    supports: '$300 LLC filing fee and required contents of the certificate of formation.',
    accessed: ACCESSED,
  },
  {
    id: 'sos-503',
    title: 'Form 503: Assumed Name Certificate',
    publisher: 'Texas Secretary of State',
    url: 'https://www.sos.state.tx.us/corp/instructions/503.shtml',
    supports: '$25 assumed-name filing for registered entities.',
    accessed: ACCESSED,
  },
  {
    id: 'irs-ein',
    title: 'Get an Employer Identification Number',
    publisher: 'Internal Revenue Service',
    url: 'https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number',
    supports: 'EINs are issued free by the IRS.',
    accessed: ACCESSED,
  },
  {
    id: 'thsc-records',
    title: 'Homeschool Record Keeping',
    publisher: 'Texas Home School Coalition',
    url: 'https://thsc.org/homeschool-record-keeping',
    supports:
      'Texas does not require home schools to keep educational records; records are recommended for college, scholarships, and work.',
    accessed: ACCESSED,
  },
  {
    id: 'tamu-homeschool',
    title: 'Home-Educated Students: STARS Tips',
    publisher: 'Texas A&M University Admissions',
    url: 'https://admissions.tamu.edu/resources/future-students/college-readiness/stars-tips',
    supports: 'One example of how a Texas public university documents home-school coursework.',
    accessed: ACCESSED,
  },
  {
    id: 'thcb-tsi',
    title: 'Texas Success Initiative',
    publisher: 'Texas Higher Education Coordinating Board',
    url: 'https://www.highered.texas.gov/our-work/supporting-our-institutions/institutional-resources/texas-success-initiative',
    supports: 'TSI applies to entering, non-exempt students at Texas public colleges; exemptions vary by institution.',
    accessed: ACCESSED,
  },
  {
    id: 'ncaa-homeschool',
    title: 'Homeschool Student Initial Eligibility Requirements',
    publisher: 'NCAA Eligibility Center',
    url: 'https://www.ncaa.org/eligibility-center/initial-eligibility-requirements/homeschool-student',
    supports:
      'NCAA reviews home-school core courses specially and requires documentation such as an administrator statement and core-course worksheets.',
    accessed: ACCESSED,
  },
];

export const SOURCE_MAP: Record<string, SourceRef> = Object.fromEntries(
  SOURCES.map((s) => [s.id, s]),
);

export function source(id: string): SourceRef {
  const found = SOURCE_MAP[id];
  if (!found) throw new Error(`Unknown source id: ${id}`);
  return found;
}
