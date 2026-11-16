import type { Course } from '../../types';
import { HIGH_WEIGHTS } from '../weights';
import { exam, lesson, mc, num, project, quiz, rubricRow, section, short, teks, unit } from '../builders';

/** High-school science. Alignment: 19 TAC Chapter 112. */

export const biology: Course = {
  id: 'hs-bio',
  title: 'Biology',
  subject: 'science',
  grade: 9,
  credits: 1,
  semesters: 2,
  description:
    'Cells and biomolecules, genetics and inheritance, evolution, and ecology. Students explain living systems at molecular, organismal, and ecosystem scales and evaluate evidence.',
  essentialQuestions: [
    'How do cells capture and use energy?',
    'How does variation in a population become change over generations?',
  ],
  teks: [
    teks('19 TAC ch. 112, Biology', 'Structures and processes of cells; mechanisms of genetics; evolution; biological ecosystems; interdependence.'),
  ],
  weights: HIGH_WEIGHTS,
  units: [
    unit('u1', 'Cells and energy', 'Life maintains order by moving energy and matter.', [
      lesson({
        id: 'bio-u1-l1',
        title: 'Cell structure and the energy pathways',
        minutes: 55,
        objectives: ['Relate organelle structure to function.', 'Compare photosynthesis and cellular respiration.'],
        sections: [
          section('Compartmentalization', [
            'Eukaryotic cells divide labor among membrane-bound organelles. The nucleus stores DNA; ribosomes assemble proteins; the rough endoplasmic reticulum folds and ships them; the Golgi modifies and packages; mitochondria convert chemical energy into ATP; chloroplasts capture light energy in plants. Prokaryotes lack membrane-bound organelles and have their own simpler machinery.',
            'The plasma membrane is a phospholipid bilayer with embedded proteins. Its selective permeability is why a cell can maintain an internal environment different from its surroundings.',
          ]),
          section('Two complementary pathways', [
            'Photosynthesis: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂. It stores energy in glucose. Cellular respiration reverses the overall equation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP. Neither process is the exact reverse of the other: they use different enzymes, locations, and intermediates.',
            'Photosynthesis occurs in chloroplasts (light reactions in the thylakoid membranes, the Calvin cycle in the stroma). Aerobic respiration begins in the cytoplasm with glycolysis and continues in the mitochondria.',
          ]),
        ],
        example: {
          prompt: 'A plant is sealed in a clear container with a carbon dioxide sensor. What happens to CO₂ during a sunny day, and why?',
          steps: ['Light drives photosynthesis, which consumes CO₂.', 'Respiration also occurs and releases CO₂.', 'In bright light photosynthesis usually exceeds respiration, so net CO₂ falls.'],
          answer: 'Net CO₂ decreases while photosynthesis outpaces respiration.',
        },
        keyTerms: [
          { term: 'ATP', definition: 'The cell’s short-term energy currency, produced by respiration and light reactions.' },
          { term: 'Selective permeability', definition: 'The property of a membrane that allows some substances through and restricts others.' },
        ],
        practice: [
          mc('Which organelle produces ATP from glucose in an animal cell?', ['nucleus', 'mitochondrion', 'Golgi apparatus', 'lysosome'], 1, 'Mitochondria carry out aerobic respiration.'),
          mc('Photosynthesis and cellular respiration are best described as', ['identical processes', 'complementary pathways for energy and matter', 'unrelated', 'both occurring only in animals'], 1, 'One stores energy in glucose; the other releases it.'),
        ],
      }),
    ], quiz('Unit 1 quiz: cells', [
      mc('The site of protein synthesis is the', ['ribosome', 'nucleus', 'vacuole', 'mitochondrion'], 0, 'Ribosomes translate mRNA into protein.'),
      mc('The overall products of photosynthesis are', ['glucose and oxygen', 'carbon dioxide and water', 'ATP only', 'proteins'], 0, '6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂.'),
      mc('A prokaryotic cell lacks', ['DNA', 'ribosomes', 'a membrane-bound nucleus', 'a cell membrane'], 2, 'Prokaryotes have no membrane-bound nucleus.'),
    ]), project({
      title: 'Cell model with justification',
      prompt: 'Build a model of a plant or animal cell and justify each organelle’s inclusion by its function. Include a short written explanation of one energy pathway.',
      deliverable: 'A labeled model (physical or digital) plus a one-page justification.',
      guidance: ['Use accurate relative sizes where practical.', 'Explain function, not just name.', 'Cite a source for any claim you did not derive.'],
      rubric: [
        rubricRow('Accuracy', 40, [['Excellent', 'Organelles accurately represented and labeled.', 40], ['Proficient', 'Minor inaccuracies.', 32], ['Developing', 'Several errors.', 20], ['Beginning', 'Mostly inaccurate.', 8]]),
        rubricRow('Functional justification', 35, [['Excellent', 'Each structure tied to function.', 35], ['Proficient', 'Mostly tied.', 28], ['Developing', 'Names only.', 18], ['Beginning', 'None.', 7]]),
        rubricRow('Energy pathway explanation', 15, [['Excellent', 'Accurate and clear.', 15], ['Proficient', 'Basic.', 12], ['Developing', 'Vague.', 8], ['Beginning', 'Incorrect.', 3]]),
        rubricRow('Presentation', 10, [['Excellent', 'Neat and organized.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
    unit('u2', 'Genetics', 'Inheritance is probabilistic, not deterministic.', [
      lesson({
        id: 'bio-u2-l1',
        title: 'DNA, alleles, and Punnett squares',
        minutes: 55,
        objectives: ['Describe the relationship among DNA, genes, and proteins.', 'Predict offspring ratios with a Punnett square.'],
        sections: [
          section('From DNA to trait', [
            'DNA is a double helix of nucleotides. A gene is a segment that encodes a product, usually a protein. Transcription copies DNA into mRNA; translation at the ribosome assembles amino acids into a protein. Proteins do most of the work that produces traits.',
            'Alleles are alternative versions of a gene. A dominant allele masks a recessive allele in a heterozygote. Genotype is the allele combination; phenotype is the observable trait.',
          ]),
          section('Predicting ratios', [
            'Cross Aa × Aa. Each parent can pass A or a, giving AA, Aa, Aa, aa: a 1:2:1 genotype ratio and a 3:1 phenotype ratio if A is completely dominant. The ratios are probabilities for each offspring, not guarantees for a family.',
            'Some traits do not follow simple dominance: incomplete dominance produces an intermediate phenotype, codominance expresses both alleles, and multiple alleles (as in ABO blood type) create more combinations.',
          ]),
        ],
        example: {
          prompt: 'Two heterozygous tall plants (Tt) are crossed. What fraction of offspring are expected to be short?',
          steps: ['Punnett square: TT, Tt, Tt, tt.', 'Short is the recessive phenotype tt.', 'One of four squares is tt.'],
          answer: '1/4, or 25%.',
        },
        practice: [
          mc('In a cross of Aa × Aa, the expected genotype ratio is', ['1:1', '1:2:1', '3:1', '9:3:3:1'], 1, 'AA:Aa:aa appears in a 1:2:1 ratio.'),
          mc('Transcription produces', ['protein', 'mRNA', 'DNA', 'lipid'], 1, 'DNA is transcribed into mRNA, which is then translated.'),
        ],
      }),
    ], quiz('Unit 2 quiz: genetics', [
      mc('An organism with two identical alleles is', ['heterozygous', 'homozygous', 'haploid', 'recombinant'], 1, 'Homozygous means both alleles match.'),
      num('In Aa × Aa, what percent of offspring show the dominant phenotype?', 75, 'AA, Aa, and Aa show the dominant trait: 3 of 4.'),
      mc('Codominance is illustrated by', ['pink flowers from red and white', 'AB blood type', 'height in peas', 'sex determination'], 1, 'Both A and B antigens are expressed in AB blood.'),
    ]), project({
      title: 'Trait inheritance investigation',
      prompt: 'Choose a trait you can observe or research. Diagram a cross, predict ratios, and explain how the environment can affect the phenotype.',
      deliverable: 'Punnett squares, predictions, and a paragraph on environment and phenotype.',
      guidance: ['Distinguish genotype from phenotype.', 'Note whether the trait is simple Mendelian or not.'],
      rubric: [
        rubricRow('Genetics accuracy', 40, [['Excellent', 'Correct alleles and ratios.', 40], ['Proficient', 'Minor error.', 32], ['Developing', 'Ratio error.', 20], ['Beginning', 'Incorrect.', 8]]),
        rubricRow('Explanation', 35, [['Excellent', 'Clear link from gene to trait.', 35], ['Proficient', 'Mostly clear.', 28], ['Developing', 'Vague.', 18], ['Beginning', 'None.', 7]]),
        rubricRow('Environment discussion', 15, [['Excellent', 'Specific and accurate.', 15], ['Proficient', 'General.', 12], ['Developing', 'Thin.', 8], ['Beginning', 'Absent.', 3]]),
        rubricRow('Presentation', 10, [['Excellent', 'Clear.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
    unit('u3', 'Evolution and ecology', 'Populations change; ecosystems cycle matter and flow energy.', [
      lesson({
        id: 'bio-u3-l1',
        title: 'Natural selection and energy flow',
        minutes: 55,
        objectives: ['Explain natural selection as a mechanism.', 'Trace energy and matter through an ecosystem.'],
        sections: [
          section('Natural selection in four steps', [
            'Populations vary. Some variation is heritable. More offspring are produced than can survive, so individuals differ in reproductive success. Traits that improve survival and reproduction in a given environment become more common over generations.',
            'Selection acts on phenotypes, not for a purpose. “Bacteria became resistant because they needed to” is wrong; resistant variants already existed and survived the antibiotic. Evolution is a change in allele frequencies in a population, not a change in one individual.',
          ]),
          section('Energy flows, matter cycles', [
            'Sunlight enters through producers, passes to consumers, and leaves as heat. Only a fraction — often approximated as about 10% — of energy transfers between trophic levels, which is why food chains are short and top predators are few. Matter such as carbon and nitrogen cycles through living and nonliving reservoirs.',
            'Photosynthesis removes CO₂ from the atmosphere; respiration and combustion return it. Human burning of fossil fuels adds carbon that was stored underground, shifting the balance.',
          ]),
        ],
        example: {
          prompt: 'A population of insects is sprayed with an insecticide. Most die; a few survive and reproduce. Explain.',
          steps: ['Variation existed before the spray.', 'The insecticide acts as a selective pressure.', 'Survivors carry heritable resistance alleles.', 'Resistance becomes more common in the next generation.'],
          answer: 'Selection on pre-existing variation; resistance is not caused by need.',
        },
        practice: [
          mc('Natural selection acts directly on', ['genotypes', 'phenotypes', 'allele frequencies by design', 'species intentions'], 1, 'Selection filters phenotypes; allele frequencies change as a result.'),
          mc('Energy transfer between trophic levels is inefficient mainly because', ['energy is destroyed', 'much energy is lost as heat and used in metabolism', 'predators eat too little', 'sunlight is constant'], 1, 'Metabolism and heat loss reduce the energy available at each level.'),
        ],
      }),
    ], quiz('Unit 3 quiz: evolution and ecology', [
      mc('Antibiotic resistance evolves because', ['bacteria choose to mutate', 'pre-existing resistant variants survive and reproduce', 'antibiotics create mutations', 'bacteria learn'], 1, 'Selection acts on existing variation.'),
      mc('Producers in most ecosystems are', ['fungi', 'photosynthetic organisms', 'herbivores', 'decomposers'], 1, 'Photosynthetic organisms capture sunlight.'),
      num('If producers store 10,000 kJ, about how many kJ reach the second consumer level at 10% transfer efficiency?', 100, '10,000 → 1,000 (primary consumer) → 100 (secondary consumer).'),
    ]), project({
      title: 'Ecosystem case study',
      prompt: 'Choose a Texas ecosystem. Describe its producers, consumers, decomposers, and one matter cycle. Explain one human impact and one evidence-based mitigation.',
      deliverable: 'A 500-word case study with a food web diagram and cited sources.',
      guidance: ['Name species accurately.', 'Cite at least two sources.', 'Distinguish correlation from causation in impact claims.'],
      rubric: [
        rubricRow('Ecological accuracy', 40, [['Excellent', 'Accurate organisms and relationships.', 40], ['Proficient', 'Minor errors.', 32], ['Developing', 'General claims.', 20], ['Beginning', 'Inaccurate.', 8]]),
        rubricRow('Matter and energy', 25, [['Excellent', 'Cycle explained correctly.', 25], ['Proficient', 'Basic.', 20], ['Developing', 'Confused.', 12], ['Beginning', 'Absent.', 5]]),
        rubricRow('Impact and mitigation', 25, [['Excellent', 'Evidence-based and specific.', 25], ['Proficient', 'Reasonable.', 20], ['Developing', 'Unsupported.', 12], ['Beginning', 'None.', 5]]),
        rubricRow('Sources and clarity', 10, [['Excellent', 'Two credible sources, clear prose.', 10], ['Proficient', 'Cited.', 8], ['Developing', 'Uncited.', 5], ['Beginning', 'Missing.', 2]]),
      ],
    })),
  ],
  finalExam: exam('Biology final examination', [
    mc('The organelle that carries out aerobic respiration is the', ['chloroplast', 'mitochondrion', 'nucleus', 'ribosome'], 1, 'Mitochondria produce ATP from glucose.'),
    mc('Photosynthesis produces', ['CO₂ and water', 'glucose and oxygen', 'only ATP', 'DNA'], 1, 'The overall equation yields glucose and oxygen.'),
    num('In Aa × Aa, what percent of offspring are expected to be homozygous recessive?', 25, 'One of four squares is aa.'),
    mc('Natural selection requires', ['heritable variation', 'intentional change', 'equal reproduction', 'isolation only'], 0, 'Selection needs heritable differences affecting reproduction.'),
    num('About what percent of energy transfers between trophic levels?', 10, 'Roughly 10% is a common approximation.'),
    short('Explain why “the bacteria mutated because they needed resistance” is not a scientific explanation.', 'Model: Mutations arise independently of need. What changes is the frequency of pre-existing resistant variants under selection. Attributing intention to bacteria reverses the causal order and cannot be tested.', ['Rejects need-driven mutation.', 'States selection on existing variation.', 'Notes testability.'], 10),
  ]),
};

export const chemistry: Course = {
  id: 'hs-chem',
  title: 'Chemistry',
  subject: 'science',
  grade: 10,
  credits: 1,
  semesters: 2,
  description:
    'Atomic structure, the periodic table, bonding, chemical reactions and stoichiometry, solutions, acids and bases, and gas behavior. Includes laboratory work with safe household materials.',
  essentialQuestions: [
    'Why do elements in the same group behave similarly?',
    'How does the mole connect the invisible and the measurable?',
  ],
  teks: [
    teks('19 TAC ch. 112, Chemistry', 'Atomic structure and the periodic table; chemical bonding; reactions and stoichiometry; solutions; acids and bases; gases; laboratory safety.'),
  ],
  weights: HIGH_WEIGHTS,
  units: [
    unit('u1', 'Atoms and the periodic table', 'Position predicts behavior.', [
      lesson({
        id: 'chem-u1-l1',
        title: 'Electron configuration and periodic trends',
        minutes: 55,
        objectives: ['Relate group number to valence electrons.', 'Predict atomic radius and electronegativity trends.'],
        sections: [
          section('Why the table is shaped that way', [
            'Elements in the same column (group) have the same number of valence electrons, which is why they form similar compounds. Group 1 has one valence electron and tends to lose it; Group 17 has seven and tends to gain one. Noble gases have full valence shells and are largely unreactive.',
            'Across a period, protons increase while electrons enter the same shell, so the nucleus pulls electrons more tightly: atomic radius decreases and electronegativity generally increases. Down a group, additional shells shield valence electrons, so radius increases and ionization energy decreases.',
          ]),
          section('Isotopes and atomic mass', [
            'Isotopes have the same number of protons but different neutrons. Atomic mass on the periodic table is a weighted average of isotope masses. Carbon-12 and carbon-13 occur in nature, so carbon’s atomic mass is about 12.011 u, not exactly 12.',
          ]),
        ],
        example: {
          prompt: 'Which is larger, Na or Cl? Which has higher electronegativity?',
          steps: ['Both are in period 3; Cl is to the right.', 'Across a period, radius decreases.', 'Electronegativity increases across a period.', 'So Na is larger and Cl is more electronegative.'],
          answer: 'Na is larger; Cl is more electronegative.',
        },
        practice: [
          mc('Elements in the same group have the same number of', ['neutrons', 'valence electrons', 'protons', 'isotopes'], 1, 'Group membership reflects valence electron count.'),
          mc('Atomic radius generally ____ across a period and ____ down a group.', ['increases, decreases', 'decreases, increases', 'increases, increases', 'decreases, decreases'], 1, 'Effective nuclear charge pulls electrons closer across; new shells add distance down.'),
        ],
      }),
    ], quiz('Unit 1 quiz: atomic structure', [
      mc('Isotopes differ in the number of', ['protons', 'neutrons', 'electrons', 'bonds'], 1, 'Isotopes share proton count but differ in neutrons.'),
      mc('The most electronegative element is', ['fluorine', 'oxygen', 'sodium', 'helium'], 0, 'Fluorine is the most electronegative element.'),
      mc('A neutral atom with 11 protons has', ['10 electrons', '11 electrons', '12 electrons', '23 electrons'], 1, 'Neutral atoms have equal protons and electrons.'),
    ]), project({
      title: 'Element profile',
      prompt: 'Choose an element. Report its atomic number, mass, electron configuration, group trends, two uses, and one safety consideration. Cite sources.',
      deliverable: 'A one-page profile with a cited source list.',
      guidance: ['Use a periodic table and a government or academic source.', 'Explain trends rather than listing them.'],
      rubric: [
        rubricRow('Accuracy', 45, [['Excellent', 'All data correct.', 45], ['Proficient', 'Minor error.', 36], ['Developing', 'Several errors.', 22], ['Beginning', 'Inaccurate.', 9]]),
        rubricRow('Trend explanation', 25, [['Excellent', 'Explains position and behavior.', 25], ['Proficient', 'Basic.', 20], ['Developing', 'List only.', 12], ['Beginning', 'None.', 5]]),
        rubricRow('Uses and safety', 20, [['Excellent', 'Specific and accurate.', 20], ['Proficient', 'General.', 16], ['Developing', 'Thin.', 10], ['Beginning', 'Absent.', 4]]),
        rubricRow('Citations', 10, [['Excellent', 'Credible and complete.', 10], ['Proficient', 'Present.', 8], ['Developing', 'Weak.', 5], ['Beginning', 'None.', 2]]),
      ],
    })),
    unit('u2', 'Bonding and reactions', 'Atoms combine to lower energy.', [
      lesson({
        id: 'chem-u2-l1',
        title: 'Ionic and covalent bonds; balancing equations',
        minutes: 55,
        objectives: ['Distinguish ionic from covalent bonding.', 'Balance a chemical equation and use mole ratios.'],
        sections: [
          section('Two ways to bond', [
            'Ionic bonds transfer electrons between a metal and a nonmetal, creating ions held by electrostatic attraction (NaCl). Covalent bonds share electrons between nonmetals (H₂O). Metallic bonds share a sea of delocalized electrons, which explains conductivity and malleability.',
            'Bond polarity runs on electronegativity difference. Equal sharing is nonpolar covalent; unequal sharing is polar covalent; a large difference produces ionic character.',
          ]),
          section('Balancing and stoichiometry', [
            'A balanced equation obeys conservation of mass. For 2H₂ + O₂ → 2H₂O, four hydrogen atoms and two oxygen atoms appear on each side. Coefficients give mole ratios: 2 mol H₂ react with 1 mol O₂ to produce 2 mol H₂O.',
            'The mole is 6.022 × 10²³ particles (Avogadro’s number). Molar mass is the mass of one mole in grams: water is about 18.02 g/mol, so 36.04 g is about 2 mol.',
          ]),
        ],
        example: {
          prompt: 'How many moles of water form when 4 mol H₂ react with excess O₂?',
          steps: ['Balanced equation: 2H₂ + O₂ → 2H₂O.', 'Mole ratio H₂:H₂O is 2:2, or 1:1.', '4 mol H₂ → 4 mol H₂O.'],
          answer: '4 mol H₂O (about 72.1 g).',
        },
        practice: [
          num('How many moles are in 36.04 g of water? Use 18.02 g/mol.', 2, '36.04 / 18.02 = 2.'),
          mc('NaCl is held together by', ['covalent bonds', 'ionic bonds', 'metallic bonds', 'hydrogen bonds'], 1, 'A metal and a nonmetal form ions held by electrostatic attraction.'),
        ],
      }),
    ], quiz('Unit 2 quiz: bonding and reactions', [
      mc('A covalent bond involves', ['transfer of electrons', 'sharing of electrons', 'loss of protons', 'gain of neutrons'], 1, 'Covalent bonds share electron pairs.'),
      num('Balance: __ H₂ + O₂ → __ H₂O. What coefficient belongs before H₂?', 2, 'Two H₂ molecules supply four hydrogen atoms.'),
      mc('Conservation of mass requires that', ['coefficients be whole numbers', 'atoms balance on both sides', 'products be gases', 'energy be conserved only'], 1, 'Balancing atoms is the operational requirement.'),
    ]), project({
      title: 'Reaction in a bag',
      prompt: 'Perform a safe reaction (for example, baking soda and vinegar) and measure mass before and after in a sealed bag. Balance the equation and explain any mass change in an open container.',
      deliverable: 'Procedure, observations, balanced equation, and explanation.',
      guidance: ['Wear eye protection.', 'Use a sealed bag for the conservation test.', 'Explain the role of the escaping gas.'],
      rubric: [
        rubricRow('Safety and procedure', 25, [['Excellent', 'Safe, clear, repeatable.', 25], ['Proficient', 'Minor gaps.', 20], ['Developing', 'Unclear.', 12], ['Beginning', 'Unsafe.', 5]]),
        rubricRow('Data and equation', 35, [['Excellent', 'Accurate data and balanced equation.', 35], ['Proficient', 'Minor error.', 28], ['Developing', 'Unbalanced.', 18], ['Beginning', 'Missing.', 7]]),
        rubricRow('Explanation', 30, [['Excellent', 'Conservation of mass explained correctly.', 30], ['Proficient', 'Basic.', 24], ['Developing', 'Confused.', 15], ['Beginning', 'None.', 6]]),
        rubricRow('Presentation', 10, [['Excellent', 'Organized.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
    unit('u3', 'Solutions, acids, and gases', 'Concentration and pH describe invisible conditions.', [
      lesson({
        id: 'chem-u3-l1',
        title: 'Molarity, pH, and the gas laws',
        minutes: 55,
        objectives: ['Compute molarity.', 'Interpret pH and apply the ideal gas law conceptually.'],
        sections: [
          section('Concentration and pH', [
            'Molarity M = moles of solute / liters of solution. Dissolving 0.5 mol of solute in 2 L gives 0.25 M. Concentration matters because reaction rates and biological effects depend on it, not on the amount alone.',
            'pH = −log[H⁺]. A solution with [H⁺] = 1 × 10⁻³ M has pH 3 and is acidic; pH 7 is neutral at standard conditions; pH above 7 is basic. Each pH unit is a tenfold change in hydrogen ion concentration.',
          ]),
          section('Gases', [
            'The ideal gas law is PV = nRT, with R = 0.08206 L·atm/(mol·K). At constant temperature, pressure and volume are inversely related (Boyle’s law); at constant pressure, volume and temperature in kelvin are directly related (Charles’s law). Temperature must be in kelvin: K = °C + 273.15.',
          ]),
        ],
        example: {
          prompt: 'Find the pH of a solution with [H⁺] = 1 × 10⁻³ M and the molarity of 0.5 mol in 2 L.',
          steps: ['pH = −log(10⁻³) = 3.', 'M = 0.5/2 = 0.25 mol/L.'],
          answer: 'pH 3; 0.25 M.',
        },
        practice: [
          num('What is the pH of a solution with [H⁺] = 1 × 10⁻⁴ M?', 4, 'pH = −log(10⁻⁴) = 4.'),
          num('What is the molarity of 0.5 mol dissolved in 2 L?', 0.25, '0.5 / 2 = 0.25 M.'),
        ],
      }),
    ], quiz('Unit 3 quiz: solutions and gases', [
      mc('A pH of 10 is', ['acidic', 'neutral', 'basic', 'impossible'], 2, 'Above 7 is basic at standard conditions.'),
      num('How many liters does 1 mol of gas occupy at STP, using 22.4 L/mol?', 22.4, 'The molar volume at STP is about 22.4 L.'),
      mc('Boyle’s law relates', ['pressure and volume inversely', 'volume and temperature directly', 'moles and mass', 'pH and pOH only'], 0, 'At constant temperature, PV is constant.'),
    ]), project({
      title: 'Household pH lab',
      prompt: 'Test five household solutions with pH indicator or strips. Record results, classify each, and explain one practical consequence of pH in daily life.',
      deliverable: 'Data table, classification, and a short explanation.',
      guidance: ['Do not taste anything.', 'Rinse and dispose safely.', 'Note that indicator strips give approximate values.'],
      rubric: [
        rubricRow('Data quality', 35, [['Excellent', 'Five clear, consistent measurements.', 35], ['Proficient', 'Minor gaps.', 28], ['Developing', 'Inconsistent.', 18], ['Beginning', 'Missing.', 7]]),
        rubricRow('Classification', 25, [['Excellent', 'Correct acid/base/neutral labels.', 25], ['Proficient', 'Mostly correct.', 20], ['Developing', 'Errors.', 12], ['Beginning', 'Incorrect.', 5]]),
        rubricRow('Explanation', 30, [['Excellent', 'Accurate practical consequence.', 30], ['Proficient', 'Basic.', 24], ['Developing', 'Vague.', 15], ['Beginning', 'None.', 6]]),
        rubricRow('Safety', 10, [['Excellent', 'Followed all precautions.', 10], ['Proficient', 'Minor lapse.', 8], ['Developing', 'Unsafe.', 2], ['Beginning', 'Not followed.', 0]]),
      ],
    })),
  ],
  finalExam: exam('Chemistry final examination', [
    mc('Elements in the same group share', ['atomic mass', 'number of valence electrons', 'number of neutrons', 'atomic radius'], 1, 'Group number reflects valence electrons.'),
    num('How many moles are in 18.02 g of water?', 1, '18.02 g/mol means one mole.'),
    mc('A pH of 3 indicates', ['a basic solution', 'a neutral solution', 'an acidic solution', 'pure water'], 2, 'pH below 7 is acidic.'),
    num('Balance 2H₂ + O₂ → __H₂O. What is the coefficient of water?', 2, 'Four hydrogens require two water molecules.'),
    mc('An ionic bond forms between', ['two nonmetals', 'a metal and a nonmetal', 'two noble gases', 'two metals'], 1, 'Electron transfer between metal and nonmetal creates ions.'),
    short('Explain why a pH change from 3 to 5 is a hundredfold change in hydrogen ion concentration.', 'Model: pH is a base-10 logarithmic scale. A difference of 2 pH units corresponds to 10² = 100 times lower [H⁺], because each unit is a tenfold change.', ['Identifies pH as logarithmic.', 'Computes 10².', 'States direction correctly.'], 10),
  ]),
};

export const physics: Course = {
  id: 'hs-physics',
  title: 'Physics',
  subject: 'science',
  grade: 11,
  credits: 1,
  semesters: 2,
  description:
    'Motion, forces, energy, momentum, waves, electricity, and circuits, with laboratory measurement and error analysis.',
  essentialQuestions: [
    'How do forces explain changes in motion?',
    'What is conserved, and what is merely transferred?',
  ],
  teks: [
    teks('19 TAC ch. 112, Physics', 'Kinematics; Newton’s laws; work, energy, and power; momentum; waves and sound; electricity and circuits; laboratory investigation.'),
  ],
  weights: HIGH_WEIGHTS,
  units: [
    unit('u1', 'Motion and forces', 'Forces change motion; they do not maintain it.', [
      lesson({
        id: 'phys-u1-l1',
        title: 'Kinematics and Newton’s second law',
        minutes: 55,
        objectives: ['Compute speed, velocity, and acceleration.', 'Apply F = ma and distinguish mass from weight.'],
        sections: [
          section('Describing motion', [
            'Speed is distance over time; velocity includes direction. Acceleration is the change in velocity over time. A car going from 0 to 20 m/s in 4 s has an average acceleration of 5 m/s². Negative acceleration can mean slowing down or speeding up in the negative direction — the sign alone does not tell you.',
            'For constant acceleration, the kinematic equations relate displacement, velocity, acceleration, and time. Choose the equation that contains the quantity you know and the one you want.',
          ]),
          section('Forces', [
            'Newton’s second law: net force equals mass times acceleration. A 10 kg cart accelerating at 3 m/s² needs a net force of 30 N. Newton’s first law says an object at rest stays at rest unless a net force acts; Newton’s third law says forces come in equal and opposite pairs acting on different objects.',
            'Mass is a measure of inertia in kilograms; weight is the gravitational force on that mass, W = mg. A 10 kg object weighs about 98 N on Earth using g = 9.8 m/s². In free fall, weight is the only force (ignoring air resistance), so all objects accelerate at about 9.8 m/s².',
          ]),
        ],
        example: {
          prompt: 'A 10 kg cart is pushed with a net force of 30 N. What is its acceleration? How much does it weigh?',
          steps: ['a = F/m = 30/10 = 3 m/s².', 'W = mg = 10 × 9.8 = 98 N.'],
          answer: '3 m/s²; 98 N.',
        },
        practice: [
          num('A car goes from 0 to 20 m/s in 4 s. What is its acceleration in m/s²?', 5, '20/4 = 5.'),
          num('What is the weight in newtons of a 5 kg object? Use g = 9.8 m/s².', 49, '5 × 9.8 = 49.'),
        ],
      }),
    ], quiz('Unit 1 quiz: motion and forces', [
      num('A 2 kg object experiences a net force of 8 N. What is its acceleration in m/s²?', 4, 'a = F/m = 4.'),
      mc('An object moving at constant velocity has', ['a large net force', 'zero net force', 'no mass', 'zero inertia'], 1, 'Constant velocity means zero acceleration and therefore zero net force.'),
      mc('Mass differs from weight because mass', ['depends on gravity', 'is a measure of inertia', 'is measured in newtons', 'changes with location'], 1, 'Mass is inertial; weight is the gravitational force.'),
    ]), project({
      title: 'Toy car motion lab',
      prompt: 'Measure the motion of a rolling toy car at three distances. Compute average speed, graph distance vs. time, and discuss sources of error.',
      deliverable: 'Data table, graph, calculations, and error discussion.',
      guidance: ['Take at least three trials per distance.', 'Report units consistently.', 'Identify one systematic and one random error.'],
      rubric: [
        rubricRow('Data collection', 30, [['Excellent', 'Repeated trials, consistent method.', 30], ['Proficient', 'Adequate data.', 24], ['Developing', 'Single trials.', 15], ['Beginning', 'Unreliable.', 6]]),
        rubricRow('Calculations and graph', 35, [['Excellent', 'Accurate with labeled graph.', 35], ['Proficient', 'Minor error.', 28], ['Developing', 'Errors.', 18], ['Beginning', 'Missing.', 7]]),
        rubricRow('Error analysis', 25, [['Excellent', 'Specific systematic and random errors.', 25], ['Proficient', 'General.', 20], ['Developing', 'Vague.', 12], ['Beginning', 'None.', 5]]),
        rubricRow('Report quality', 10, [['Excellent', 'Clear and organized.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
    unit('u2', 'Energy and momentum', 'Energy and momentum are conserved quantities.', [
      lesson({
        id: 'phys-u2-l1',
        title: 'Work, energy, and collisions',
        minutes: 55,
        objectives: ['Compute work, kinetic energy, and gravitational potential energy.', 'Apply conservation of momentum to a collision.'],
        sections: [
          section('Energy accounting', [
            'Work is force times displacement in the direction of the force: W = Fd. Lifting a 2 kg mass 5 m does mgh = 2 × 9.8 × 5 = 98 J of work against gravity. Kinetic energy is ½mv²; a 2 kg object at 3 m/s has 9 J.',
            'Energy is conserved but not always conserved in a useful form. Friction converts mechanical energy into thermal energy. Power is work per time, measured in watts.',
          ]),
          section('Momentum', [
            'Momentum p = mv. In a closed system, total momentum before a collision equals total momentum after. A 2 kg cart at 5 m/s has 10 kg·m/s; if it sticks to a stationary 3 kg cart, the combined 5 kg moves at 2 m/s.',
            'Kinetic energy is conserved only in elastic collisions. In inelastic collisions, some kinetic energy becomes deformation, sound, and heat, but momentum is still conserved.',
          ]),
        ],
        example: {
          prompt: 'A 2 kg cart at 5 m/s sticks to a stationary 3 kg cart. Find the final velocity.',
          steps: ['Initial momentum: 2 × 5 = 10 kg·m/s.', 'Total mass after: 5 kg.', '10 = 5v, so v = 2 m/s.'],
          answer: '2 m/s in the original direction.',
        },
        practice: [
          num('What is the kinetic energy of a 2 kg object moving at 3 m/s?', 9, '½ × 2 × 9 = 9 J.'),
          num('What is the momentum of a 4 kg object at 6 m/s?', 24, 'p = mv = 24 kg·m/s.'),
        ],
      }),
    ], quiz('Unit 2 quiz: energy and momentum', [
      num('How much work is done lifting a 2 kg mass 5 m? Use g = 9.8 m/s².', 98, 'mgh = 2 × 9.8 × 5 = 98 J.'),
      mc('In a perfectly inelastic collision, which is conserved?', ['kinetic energy only', 'momentum', 'neither', 'both always'], 1, 'Momentum is conserved; kinetic energy is not.'),
      num('A 3 kg object at 4 m/s has what momentum?', 12, 'p = 3 × 4 = 12 kg·m/s.'),
    ]), project({
      title: 'Roller coaster energy audit',
      prompt: 'Design a track for a marble. Measure release height and speed at the bottom, compute potential and kinetic energy, and quantify the energy lost to friction.',
      deliverable: 'Design sketch, measurements, calculations, and percent energy lost.',
      guidance: ['Use consistent units.', 'Repeat trials.', 'Explain where the missing energy went.'],
      rubric: [
        rubricRow('Design and measurement', 30, [['Excellent', 'Workable design and careful measurements.', 30], ['Proficient', 'Adequate.', 24], ['Developing', 'Inconsistent.', 15], ['Beginning', 'No data.', 6]]),
        rubricRow('Energy calculations', 40, [['Excellent', 'Correct PE, KE, and loss.', 40], ['Proficient', 'Minor error.', 32], ['Developing', 'Formula error.', 20], ['Beginning', 'Incorrect.', 8]]),
        rubricRow('Explanation', 20, [['Excellent', 'Accounts for lost energy.', 20], ['Proficient', 'Basic.', 16], ['Developing', 'Vague.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Report', 10, [['Excellent', 'Clear.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
    unit('u3', 'Waves and electricity', 'Oscillation and charge carry energy and information.', [
      lesson({
        id: 'phys-u3-l1',
        title: 'Wave speed and Ohm’s law',
        minutes: 55,
        objectives: ['Relate wave speed, frequency, and wavelength.', 'Apply Ohm’s law and compute electrical power.'],
        sections: [
          section('Waves', [
            'Wave speed v = fλ. A wave with frequency 50 Hz and wavelength 2 m travels at 100 m/s. Frequency is set by the source; speed is set by the medium. Sound travels faster in warmer air and much faster in water; light in a vacuum travels at about 3.0 × 10⁸ m/s.',
            'Transverse waves oscillate perpendicular to travel; longitudinal waves oscillate along the direction of travel. Sound is longitudinal. Amplitude relates to energy; frequency relates to pitch for sound and color for light.',
          ]),
          section('Circuits', [
            'Ohm’s law: V = IR. A 12 V battery across 4 Ω produces 3 A. Power P = IV, so 3 A at 12 V is 36 W. In series, current is the same through each component and resistances add; in parallel, voltage is the same across branches and current splits.',
            'Electrical energy is billed in kilowatt-hours: 1 kWh = 1,000 W used for one hour. A 100 W bulb left on for 10 hours uses 1 kWh.',
          ]),
        ],
        example: {
          prompt: 'A 12 V battery is connected to a 4 Ω resistor. Find the current and power.',
          steps: ['I = V/R = 12/4 = 3 A.', 'P = IV = 3 × 12 = 36 W.'],
          answer: '3 A; 36 W.',
        },
        practice: [
          num('A wave has frequency 20 Hz and wavelength 3 m. What is its speed in m/s?', 60, 'v = fλ = 60.'),
          num('A 9 V battery across 3 Ω produces what current in amperes?', 3, 'I = V/R = 3 A.'),
        ],
      }),
    ], quiz('Unit 3 quiz: waves and circuits', [
      num('What is the speed of a wave with frequency 10 Hz and wavelength 4 m?', 40, 'v = fλ = 40 m/s.'),
      mc('In a series circuit, the current is', ['different in each component', 'the same through all components', 'zero', 'always alternating'], 1, 'Series circuits have one path, so current is the same.'),
      num('A 60 W bulb runs for 2 hours. How many kilowatt-hours are used?', 0.12, '60 W = 0.06 kW; 0.06 × 2 = 0.12 kWh.'),
    ]), project({
      title: 'Home energy audit',
      prompt: 'Select five household devices. Estimate their power ratings and daily use, compute monthly kWh and cost at your local rate, and propose one realistic reduction.',
      deliverable: 'Table of devices, calculations, and a recommendation.',
      guidance: ['Use nameplate wattage or a meter.', 'State your electricity rate and source.', 'Show the arithmetic.'],
      rubric: [
        rubricRow('Data', 30, [['Excellent', 'Five credible estimates with sources.', 30], ['Proficient', 'Adequate.', 24], ['Developing', 'Guesswork.', 15], ['Beginning', 'Missing.', 6]]),
        rubricRow('Calculations', 40, [['Excellent', 'Correct kWh and cost.', 40], ['Proficient', 'Minor error.', 32], ['Developing', 'Errors.', 20], ['Beginning', 'Incorrect.', 8]]),
        rubricRow('Recommendation', 20, [['Excellent', 'Specific and justified.', 20], ['Proficient', 'Reasonable.', 16], ['Developing', 'Vague.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Clarity', 10, [['Excellent', 'Clear.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
  ],
  finalExam: exam('Physics final examination', [
    num('A 4 kg object accelerates at 5 m/s². What is the net force in newtons?', 20, 'F = ma = 20 N.'),
    num('What is the kinetic energy of a 4 kg object at 5 m/s?', 50, '½ × 4 × 25 = 50 J.'),
    num('A wave has frequency 25 Hz and wavelength 4 m. What is its speed?', 100, 'v = fλ = 100 m/s.'),
    mc('A 12 V source across 6 Ω produces', ['2 A', '6 A', '72 A', '0.5 A'], 0, 'I = V/R = 2 A.'),
    num('A 2 kg cart at 6 m/s collides and sticks to a 4 kg cart at rest. What is the final speed in m/s?', 2, '12 = 6v, so v = 2 m/s.'),
    short('Explain why a passenger without a seatbelt continues moving forward when a car stops suddenly.', 'Model: By inertia, the passenger keeps the velocity the car had. When the car stops, no net force acts on the passenger until contact with the dashboard or belt, so the passenger continues forward relative to the car. The belt supplies the force that changes the passenger’s momentum over a longer time, reducing injury.', ['Invokes inertia / Newton’s first law.', 'Explains relative motion.', 'Connects to force and momentum.'], 10),
  ]),
};
