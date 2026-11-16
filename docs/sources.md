# Sources and citation policy

The curriculum makes claims about law, standards, and government programs. Each
one must be traceable to a public source. The registry lives in
`src/content/sources.ts` and is displayed in the app under **Sources**.

Accessed 2026-11-16. Statutes, rules, and agency guidance change; verify a
citation before relying on it for a legal or financial decision.

## Rules the project follows

1. **No invented citations.** A section number is used only when it was checked
   against the published rule or statute. Courses cite TEKS chapters
   (19 TAC chapters 110–117, 126, 127) rather than guessing section numbers.
2. **Quotation marks mean quotation.** Quoted statutory language is attributed.
   Everything else is a summary in the author's words.
3. **Time-bound numbers carry their date.** Tax brackets, wage bases, benefit
   amounts, filing thresholds, and fees are labeled with the tax year or
   effective date they belong to.
4. **Policy is labeled as policy.** Where this program adopts a rule that binds
   school districts but not home schools (180 days, 90% attendance, the fourth
   Monday start), the text says so.
5. **No promises about acceptance.** Transcript, credit, admission, and
   eligibility language distinguishes what this program records from what an
   institution decides.

## Primary sources by area

**Texas home-school law and graduation**

- Tex. Educ. Code ch. 25 (attendance, exemptions, 180 days, start date).
- *Texas Education Agency v. Leeper*, 893 S.W.2d 432 (Tex. 1994).
- 19 TAC ch. 74, subchapters A–C (required curriculum, graduation, credit).
- TEA, *Home Schooling*; TEA, *Graduation Toolkit 2025*; TEA high-school
  graduation requirements.
- Tex. Educ. Code §28.002 (foundation and enrichment curriculum).

**Standards and assessment**

- TEA, Texas Essential Knowledge and Skills (TEKS).
- TEA, STAAR resources (scope: public and open-enrollment charter students).

**Federal framework**

- 20 U.S.C. §3403(b) and §7906a (no federal curriculum control or mandate).
- Every Student Succeeds Act, 20 U.S.C. §6301 et seq. (funding conditions).
- FERPA, 20 U.S.C. §1232g; 34 C.F.R. Part 99.
- IDEA, 20 U.S.C. §1400 et seq.; Title IX, 20 U.S.C. §§1681–1688.

**Taxes and employment**

- IRS tax-year 2026 inflation adjustments; Publication 501; Form 1040
  instructions; Topics 752, 753; Publications 15 and 15-A.
- IRS 1099-NEC and 1099-K guidance.
- Social Security Administration contribution and benefit base.
- U.S. Department of Labor minimum wage and overtime rules.
- Tex. Const. art. VIII §24-a (no individual income tax).
- Texas Comptroller sales and franchise tax guidance.
- Texas Workforce Commission unemployment benefits, minimum wage, and at-will
  employment.

**Consumer, housing, and business**

- Consumer Financial Protection Bureau credit-report disputes; AnnualCreditReport;
  myFICO score composition.
- Texas Property Code ch. 92 and §24.005.
- Texas Department of Insurance home and renters guides.
- Texas DMV title transfer and 2025 inspection changes; Comptroller motor
  vehicle sales tax.
- Texas Secretary of State Forms 205 and 503; IRS EIN guidance.

**College and athletics**

- Texas A&M admissions guidance for home-educated applicants (one example, not a
  statewide rule).
- Texas Higher Education Coordinating Board, Texas Success Initiative.
- NCAA Eligibility Center, home-school initial eligibility.

## Adding a source

Add an entry to `sources.ts` with a stable URL, a one-sentence statement of what
it supports, and an access date. Then reference the id from the framework note,
course, or lesson that depends on it. Do not add a claim to a lesson without a
source entry or a `furtherReading` link.
