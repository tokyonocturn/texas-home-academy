import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Biology and Integrated Physics and Chemistry (grade 9) depth pass. */
export const DEPTH_G9C: Record<string, LessonDepth> = {
  'bio-u1-l1': {
    topics: ['organelles'],
    objectives: [
      'Relate cell structures to the functions they perform.',
      'Trace how photosynthesis and cellular respiration move energy through a cell.',
    ],
    sections: [
      {
        heading: 'Cell structure and function',
        paragraphs: [
          'All living things are made of cells, and every cell is bounded by a membrane that controls what enters and leaves. Prokaryotic cells, such as bacteria, lack a nucleus and membrane-bound organelles; eukaryotic cells, such as plant and animal cells, keep their DNA in a nucleus and divide labor among organelles.',
          'Each organelle matches a job. The nucleus stores DNA and directs protein synthesis, ribosomes assemble proteins, the endoplasmic reticulum folds and transports them, and the Golgi apparatus packages them for delivery. Mitochondria release energy from glucose, chloroplasts capture light energy in plants, and vacuoles store water and solutes.',
          'Cell size is limited by geometry. Volume grows faster than surface area, so a large cell cannot move materials across its membrane fast enough to supply its interior. That constraint explains why cells are small, why intestinal cells have folded surfaces, and why a single fertilized egg divides rather than simply swelling.',
        ],
      },
      {
        heading: 'Energy pathways',
        paragraphs: [
          'Photosynthesis stores energy: chloroplasts use light to convert carbon dioxide and water into glucose and oxygen, summarized as 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂. The light reactions capture energy and release oxygen, while the Calvin cycle uses that energy to build sugar from carbon dioxide.',
          'Cellular respiration releases stored energy in three stages. Glycolysis splits glucose in the cytoplasm, the Krebs cycle finishes breaking carbon bonds in the mitochondria, and the electron transport chain uses those electrons to produce most of the ATP. The overall equation reverses photosynthesis: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP.',
          'ATP is the cell’s spendable currency: energy released from glucose is stored briefly in ATP and used for transport, movement, and synthesis. When oxygen is scarce, fermentation regenerates the molecules glycolysis needs without producing much ATP, which is why hard exercise produces lactate and why yeast produces ethanol and carbon dioxide. Comparing the ATP yield of respiration with fermentation explains why intense exercise cannot be sustained on fermentation alone: the pathway works quickly but returns only a small fraction of the energy stored in glucose, so a sprinter can run hard for seconds while a distance runner needs oxygen to keep going. Both pathways begin with glucose, which is why diet and oxygen supply limit performance in different events. A single diagram showing both pathways, with arrows for where each molecule enters and leaves, is a more useful study tool than two separate lists.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A muscle cell and a leaf cell are compared. Predict which organelles differ and why.',
        steps: [
          'Both need ATP, so both have many mitochondria relative to their energy demand.',
          'Only the leaf cell performs photosynthesis, so it contains chloroplasts and a large central vacuole.',
          'The muscle cell needs rapid ATP delivery and has abundant mitochondria but no chloroplasts.',
        ],
        answer: 'The leaf cell adds chloroplasts and a large vacuole; both keep mitochondria, scaled to energy use.',
      },
    ],
    terms: [
      ['prokaryote', 'a cell without a nucleus or membrane-bound organelles'],
      ['eukaryote', 'a cell with a nucleus and membrane-bound organelles'],
      ['organelle', 'a specialized structure inside a cell'],
      ['chloroplast', 'the organelle where photosynthesis occurs in plant cells'],
      ['mitochondrion', 'the organelle that produces most ATP from glucose'],
      ['ATP', 'the molecule cells use to store and transfer usable energy'],
    ],
    practice: [
      mc('Which organelle produces most of a cell’s ATP?', ['nucleus', 'mitochondrion', 'Golgi apparatus', 'vacuole'], 1, 'Mitochondria run the electron transport chain.'),
      mc('Photosynthesis produces', ['glucose and oxygen', 'carbon dioxide and water', 'only ATP', 'protein'], 0, 'It stores energy in sugar and releases oxygen.'),
      num('How many stages of cellular respiration are described here?', 3, 'Glycolysis, Krebs cycle, electron transport.'),
    ],
    review: [
      {
        prompt: 'Why can a cell not simply grow larger without limit?',
        answer: 'Volume increases faster than surface area, so a large cell cannot exchange materials fast enough across its membrane.',
      },
      {
        prompt: 'How are photosynthesis and cellular respiration related?',
        answer: 'Their equations are reverses: photosynthesis stores energy in glucose and releases oxygen, while respiration releases that energy using oxygen.',
      },
    ],
    exercises: [
      'Draw and label a plant and an animal cell, then list two structures unique to each.',
      'Explain in a paragraph why a marathon runner’s cells use both respiration and fermentation.',
    ],
  },
  'bio-u2-l1': {
    topics: ['Punnett square'],
    objectives: [
      'Describe how DNA is copied and expressed as protein.',
      'Predict offspring genotypes and phenotypes with Punnett squares and explain inheritance patterns.',
    ],
    sections: [
      {
        heading: 'From DNA to protein',
        paragraphs: [
          'DNA is a double helix of nucleotides, each with a sugar, a phosphate, and one of four bases: adenine, thymine, guanine, and cytosine. Bases pair specifically, A with T and G with C, so one strand can serve as a template for the other during replication.',
          'Gene expression happens in two steps. Transcription copies a gene into messenger RNA in the nucleus, and translation reads that message at a ribosome, where each three-base codon specifies an amino acid. The sequence of codons therefore determines the sequence of amino acids and the shape and function of the resulting protein.',
          'Mutations are changes in the DNA sequence. Substitutions may change one amino acid, insertions and deletions can shift the reading frame and alter every following codon, and some changes are silent because the genetic code is redundant. Mutations supply the variation that natural selection can act on, which is why they matter far beyond a single organism.',
        ],
      },
      {
        heading: 'Alleles and Punnett squares',
        paragraphs: [
          'An allele is one version of a gene. A dominant allele masks a recessive one in a heterozygote, so genotype, the pair of alleles, determines phenotype, the observable trait. Two heterozygous parents (Aa × Aa) produce a 3:1 phenotypic ratio and a 1:2:1 genotypic ratio in their offspring.',
          'A Punnett square lists the possible gametes along each side and fills in every combination. The square shows probabilities for each offspring, not the results of a particular family, so a 3:1 ratio predicts expectations across many offspring rather than guaranteeing three of every four.',
          'Not all traits follow simple dominance. In incomplete dominance the heterozygote shows an intermediate phenotype, as when red and white snapdragons produce pink flowers, and codominance shows both traits at once, as in AB blood type. Sex-linked traits sit on the X chromosome and appear more often in males, who have only one copy. Pedigrees display these patterns across generations, and reading one requires checking whether a trait skips generations, whether it appears equally in both sexes, and whether affected children have unaffected parents. Probability predictions from a square describe each child independently, so a family with one affected child is not due a second or protected from one. Larger sample sizes make observed ratios approach the predicted ones, which is why geneticists collect many offspring before concluding anything. Chi-square analysis is the formal version of that check, comparing observed counts with predicted counts to see whether an observed difference could be explained by chance rather than by a real genetic effect.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Cross two heterozygous pea plants (Aa × Aa) for seed color, where A is yellow and a is green. Give the genotype and phenotype ratios.',
        steps: [
          'Gametes from each parent: A and a.',
          'Square produces AA, Aa, Aa, aa.',
          'Count phenotypes: three yellow to one green.',
        ],
        answer: 'Genotypes 1 AA : 2 Aa : 1 aa; phenotypes 3 yellow : 1 green.',
      },
    ],
    terms: [
      ['nucleotide', 'the building block of DNA, made of a sugar, phosphate, and base'],
      ['transcription', 'copying a gene into messenger RNA'],
      ['translation', 'building a protein from an mRNA message at a ribosome'],
      ['allele', 'one version of a gene'],
      ['genotype', 'the pair of alleles an organism carries'],
      ['phenotype', 'the observable trait produced by a genotype'],
    ],
    practice: [
      mc('Which base pairs with adenine?', ['guanine', 'cytosine', 'thymine', 'uracil in DNA'], 2, 'A pairs with T in DNA.'),
      mc('Aa × Aa gives a phenotypic ratio of', ['1:1', '3:1', '1:2:1', '9:3:3:1'], 1, 'Three dominant to one recessive.'),
      num('How many bases make one codon?', 3, 'A codon is three bases.'),
    ],
    review: [
      {
        prompt: 'How does a mutation in DNA affect a protein?',
        answer: 'It can change a codon so a different amino acid is added, or shift the reading frame, altering the protein’s shape and function.',
      },
      {
        prompt: 'What does a Punnett square predict?',
        answer: 'It shows the probability of each possible genotype and phenotype among offspring of a given cross.',
      },
    ],
    exercises: [
      'Complete monohybrid and dihybrid crosses and report both ratios.',
      'Trace a sex-linked trait through a three-generation pedigree and explain the pattern.',
    ],
  },
  'bio-u3-l1': {
    topics: ['natural selection'],
    objectives: [
      'Explain natural selection as differential reproduction acting on heritable variation.',
      'Describe energy flow through trophic levels and the cycling of matter.',
    ],
    sections: [
      {
        heading: 'Evolution by natural selection',
        paragraphs: [
          'Natural selection requires three conditions: individuals vary, the variation is heritable, and some variants reproduce more successfully in a given environment. Over generations the inherited traits associated with greater reproductive success become more common, which is evolution in a population rather than change in an individual.',
          'Selection pressures include predators, disease, climate, and competition for food. An antibiotic is a selection pressure on bacteria, so resistant cells survive and multiply, which is why incomplete courses of antibiotics favor resistance. The same logic explains pesticide resistance and the loss of traits that no longer pay their costs.',
          'Evolution also proceeds without selection. Genetic drift changes allele frequencies by chance, especially in small populations, and gene flow moves alleles between populations through migration. Speciation occurs when populations become reproductively isolated long enough to accumulate differences, which is why islands and mountain ranges produce so many unique species.',
        ],
      },
      {
        heading: 'Energy flow and matter cycling',
        paragraphs: [
          'Energy enters most ecosystems as sunlight captured by producers. Consumers obtain energy by eating, and decomposers release nutrients from dead material. Only about ten percent of the energy at one trophic level transfers to the next, because most is lost as heat during metabolism.',
          'That ten percent rule explains why food chains are short and why top predators are rare. A field supporting 10,000 kilograms of grass can support roughly 1,000 kilograms of herbivores and about 100 kilograms of carnivores. Eating lower on the food chain is therefore more efficient in land and water use.',
          'Matter cycles while energy flows. Carbon moves between organisms, the atmosphere, soil, and oceans through photosynthesis, respiration, decomposition, and combustion; nitrogen is fixed by bacteria before plants can use it. Human burning of fossil fuels accelerates the carbon cycle, adding greenhouse gases faster than the cycle removes them. Energy and matter behave differently in this system: energy passes through once and is lost as heat, while atoms are reused indefinitely, so the same carbon may have been part of a plant, an animal, and the atmosphere. That difference explains why energy must constantly enter from the sun while nutrients can be recycled indefinitely. Tracing one element through a diagram, rather than memorizing the cycle’s stages, makes the process easier to recall and apply to new ecosystems. Estimating how much energy a person’s diet requires, or why a lake can support only so many fish, uses the same transfer percentages and the same assumption that most energy is lost as heat at every step.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A beetle population lives on green and brown leaves. Birds eat beetles they can see. Predict the change over many generations.',
        steps: [
          'Beetles vary in color, and color is heritable.',
          'Birds remove the beetles that contrast with their background.',
          'Survivors reproduce more, so the camouflaged color becomes common.',
        ],
        answer: 'The population shifts toward the background color, because predators remove the conspicuous variants.',
      },
    ],
    terms: [
      ['natural selection', 'differential survival and reproduction of heritable variants'],
      ['adaptation', 'a trait that improves fitness in a particular environment'],
      ['genetic drift', 'random change in allele frequencies, strongest in small populations'],
      ['trophic level', 'a feeding position in a food chain'],
      ['producer', 'an organism that makes its own food from sunlight or chemicals'],
      ['carrying capacity', 'the largest population an environment can sustain'],
    ],
    practice: [
      mc('Which is required for natural selection?', ['identical offspring', 'heritable variation', 'constant environment', 'large body size'], 1, 'Selection needs inherited differences.'),
      num('About what percent of energy transfers to the next trophic level?', 10, 'Roughly ten percent.'),
      mc('Genetic drift is strongest in', ['large populations', 'small populations', 'oceans', 'deserts'], 1, 'Chance effects dominate in small populations.'),
    ],
    review: [
      {
        prompt: 'What three conditions must hold for natural selection to occur?',
        answer: 'Individuals must vary, the variation must be heritable, and some variants must reproduce more successfully than others.',
      },
      {
        prompt: 'Why are food chains usually short?',
        answer: 'Only about ten percent of energy passes to the next level, so little remains to support additional trophic levels.',
      },
    ],
    exercises: [
      'Model a three-level food chain and calculate the energy available at each level from 10,000 units of sunlight.',
      'Explain antibiotic resistance using the three conditions for natural selection.',
    ],
  },
  'ipc-u1-l1': {
    topics: ['significant figures'],
    objectives: [
      'Measure and report quantities with correct SI units and significant figures.',
      'Apply Newton’s laws to objects with balanced and unbalanced forces.',
    ],
    sections: [
      {
        heading: 'Measurement and significant figures',
        paragraphs: [
          'SI units give measurements a common language: meter for length, kilogram for mass, second for time, kelvin for temperature, ampere for current, and mole for amount. Prefixes scale by powers of ten, so a kilometer is 1,000 meters and a millimeter is 0.001 meters, which is why unit conversion is mostly a matter of moving a decimal.',
          'Significant figures communicate how precisely a quantity was measured. Nonzero digits are always significant, zeros between them are significant, leading zeros are not, and trailing zeros count only when a decimal point is present. The measurement 0.00450 has three significant figures, and 1200 has two unless written 1.200 × 10³.',
          'Calculations follow rules that prevent overstating precision: multiplication and division keep the least number of significant figures, while addition and subtraction keep the least number of decimal places. Precision describes how closely repeated measurements agree, while accuracy describes how close a measurement is to the true value, and a miscalibrated scale can be precise but inaccurate.',
        ],
      },
      {
        heading: 'Motion and balanced forces',
        paragraphs: [
          'Speed is distance divided by time, velocity adds direction, and acceleration is the rate at which velocity changes. A car going from 0 to 24 m/s in 8 seconds accelerates at 3 m/s², and a car turning a corner at constant speed is still accelerating because its direction changes.',
          'Forces are pushes or pulls measured in newtons. When forces balance, the net force is zero and motion does not change: a book resting on a table has gravity downward and a normal force upward of equal size. When forces are unbalanced, the object accelerates in the direction of the net force according to F = ma.',
          'Friction always opposes relative motion and converts kinetic energy into thermal energy. Mass is the amount of matter, while weight is the gravitational force on that mass, w = mg, so a 10-kilogram object weighs about 98 newtons on Earth and about 16 newtons on the Moon. Drawing a free-body diagram before calculating keeps track of which forces act on which object. Recording measurements with units and the correct number of significant figures matters here too, because a force calculated from a mass rounded too early can be off by more than the precision of the original measurement. Rounding only at the final step and stating units in the answer are the two habits that most improve laboratory work. Recording the smallest division of the instrument also settles arguments about the last digit, and reporting the instrument used lets a reader judge the precision of a result.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A 2.5 kilogram cart is pushed with 10 N while 4 N of friction opposes it. Find the acceleration, and report 0.00450 × 12.0 with correct significant figures.',
        steps: [
          'Net force = 10 N − 4 N = 6 N.',
          'a = F/m = 6 ÷ 2.5 = 2.4 m/s².',
          '0.00450 has three significant figures and 12.0 has three, so the product is 0.0540.',
        ],
        answer: 'Acceleration 2.4 m/s²; the product is 0.0540 with three significant figures.',
      },
    ],
    terms: [
      ['SI unit', 'a standard unit of the International System of Units'],
      ['significant figures', 'the digits that carry measured precision'],
      ['accuracy', 'how close a measurement is to the true value'],
      ['precision', 'how closely repeated measurements agree'],
      ['net force', 'the vector sum of all forces on an object'],
      ['weight', 'the gravitational force on an object, w = mg'],
    ],
    practice: [
      num('How many significant figures does 0.00450 have?', 3, 'Leading zeros do not count.'),
      num('A 2.5 kg cart has a 6 N net force. What is its acceleration?', 2.4, '6 ÷ 2.5 = 2.4 m/s².'),
      mc('Balanced forces produce', ['acceleration', 'constant velocity', 'a change in direction', 'zero mass'], 1, 'No net force means no change in motion.'),
    ],
    review: [
      {
        prompt: 'How do accuracy and precision differ?',
        answer: 'Accuracy is closeness to the true value, while precision is how closely repeated measurements agree with one another.',
      },
      {
        prompt: 'Why does a book resting on a table not accelerate despite gravity acting on it?',
        answer: 'The table exerts an equal upward normal force, so the net force is zero and the book’s motion does not change.',
      },
    ],
    exercises: [
      'Measure five objects with a ruler and report lengths to the correct precision.',
      'Draw free-body diagrams for three situations and compute net force and acceleration.',
    ],
  },
  'ipc-u2-l1': {
    topics: ['Ohm’s law'],
    objectives: [
      'Apply conservation of energy to work, power, and heat transfer.',
      'Relate wave properties and use Ohm’s law to analyze simple circuits.',
    ],
    sections: [
      {
        heading: 'Energy, work, and heat',
        paragraphs: [
          'Energy exists as kinetic energy of motion and potential energy of position, and the total in a closed system is conserved. A roller coaster trades height for speed and back again, while friction converts some mechanical energy into thermal energy that spreads into the surroundings.',
          'Work is force times displacement in the direction of the force, measured in joules, and power is work divided by time, measured in watts. Lifting a 20-kilogram box 1.5 meters takes about 294 joules, and doing it in 2 seconds requires about 147 watts, which is why the same task feels harder when hurried.',
          'Heat moves from warmer to cooler objects by conduction through contact, convection through fluid motion, and radiation through electromagnetic waves. Specific heat describes how much energy a substance needs to change temperature, which is why water heats slowly and why coastal climates are milder than inland ones.',
        ],
      },
      {
        heading: 'Waves and simple circuits',
        paragraphs: [
          'A wave transfers energy without transferring matter. Wavelength is the distance between crests, frequency is the number of cycles per second, and speed equals wavelength times frequency. Sound needs a medium, while light travels through a vacuum at about 3 × 10⁸ meters per second, and the electromagnetic spectrum orders radiation from radio waves to gamma rays by wavelength.',
          'Ohm’s law relates voltage, current, and resistance: V = IR, with volts, amperes, and ohms. A 12-volt source across a 4-ohm resistor drives 3 amperes. In a series circuit the current is the same through each component and resistances add, while in a parallel circuit the voltage is the same across each branch and the total resistance is smaller than any single branch.',
          'Electrical power is P = IV, so a device drawing 2 amperes at 120 volts uses 240 watts. That relationship explains why high-power appliances need thicker wiring and why a circuit breaker opens when current exceeds its rating. Energy use is power multiplied by time, which is why a 1,500-watt heater run for two hours consumes 3 kilowatt-hours. Reading a utility bill becomes an exercise in this arithmetic: multiply each appliance’s wattage by its hours of use, convert to kilowatt-hours, and compare the total with the meter reading to see where the energy actually goes. Replacing an old bulb or appliance with a more efficient one changes the wattage, so the same calculation shows the savings over a year. Because power depends on both current and voltage, a device can draw a modest current and still use a great deal of energy if it runs continuously.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A 12 V battery drives 3 A through a resistor. Find the resistance and the power, then find the wave speed for 2 m wavelength at 5 Hz.',
        steps: [
          'R = V/I = 12 ÷ 3 = 4 ohms.',
          'P = IV = 3 × 12 = 36 watts.',
          'v = λf = 2 × 5 = 10 m/s.',
        ],
        answer: '4 ohms, 36 watts, and a wave speed of 10 m/s.',
      },
    ],
    terms: [
            ['kinetic energy', 'the energy an object has because of its motion'],
      ['potential energy', 'stored energy that depends on position or condition'],
      ['power', 'the rate at which work is done, measured in watts'],
      ['specific heat', 'the energy needed to raise one gram of a substance by one degree Celsius'],
      ['frequency', 'the number of wave cycles per second'],
      ['resistance', 'opposition to current flow, measured in ohms'],
    ],
    practice: [
      num('What is the resistance when 12 V drives 3 A?', 4, 'R = V/I = 4 ohms.'),
      num('A wave of wavelength 2 m at 5 Hz travels at what speed?', 10, 'v = λf = 10 m/s.'),
      mc('In a series circuit, the current is', ['different in each component', 'the same throughout', 'zero', 'equal to the voltage'], 1, 'Series current is constant.'),
    ],
    review: [
      {
        prompt: 'How do series and parallel circuits differ?',
        answer: 'Series circuits share one path with the same current and added resistances, while parallel circuits split into branches with the same voltage and lower total resistance.',
      },
      {
        prompt: 'Why does water’s high specific heat moderate coastal climates?',
        answer: 'Water absorbs and releases large amounts of energy with small temperature changes, so nearby air temperatures vary less.',
      },
    ],
    exercises: [
      'Calculate the energy used by three household appliances from their power ratings and run times.',
      'Build or simulate series and parallel circuits and compare measured current and voltage.',
    ],
  },
  'ipc-u3-l1': {
    topics: ['conservation of mass'],
    objectives: [
      'Explain ionic and covalent bonding using atomic structure and the periodic table.',
      'Classify changes as physical or chemical and verify balanced equations for conservation of mass.',
    ],
    sections: [
      {
        heading: 'Atoms, bonding, and conservation of mass',
        paragraphs: [
          'Atoms contain protons and neutrons in the nucleus and electrons in energy levels around it. The atomic number counts protons and identifies the element, while the mass number counts protons plus neutrons. Electrons in the outermost level determine bonding, and elements in the same group share valence electron counts and therefore similar chemistry.',
          'Ionic bonds form when electrons transfer from a metal to a nonmetal, producing charged ions that attract. Sodium loses one electron to become Na⁺ and chlorine gains one to become Cl⁻, giving NaCl. Covalent bonds form when nonmetals share electrons, as in H₂O, where each hydrogen shares with oxygen.',
          'A chemical equation must balance because matter is conserved. In 2H₂ + O₂ → 2H₂O there are four hydrogen atoms and two oxygen atoms on each side. Coefficients change amounts, while subscripts are part of a substance’s identity, so changing H₂O to H₂O₂ produces a different compound rather than a balanced equation.',
        ],
      },
      {
        heading: 'Solutions and chemical reactions',
        paragraphs: [
          'A solution is a homogeneous mixture of a solute dissolved in a solvent, usually water. Concentration measures how much solute is present, and molarity expresses moles of solute per liter of solution. Solubility depends on temperature and on the substances involved, which is why some solids dissolve more readily in hot water.',
          'Acids produce hydrogen ions in water and have a pH below 7, while bases produce hydroxide ions and have a pH above 7. A neutralization reaction combines an acid and a base to form water and a salt, as in HCl + NaOH → NaCl + H₂O, and pH matters for soil, pools, and the body’s chemistry.',
          'Physical changes alter form without creating new substances, so melting and dissolving are physical, while chemical changes produce new substances and are usually signaled by gas, precipitate, color change, or heat. Burning, rusting, and baking are chemical; the total mass before and after is unchanged even when the products look entirely different. Massing the reactants and products in a closed container is the classic demonstration: the total does not change, and any apparent loss is a gas that escaped. That same accounting underlies stoichiometry, where balanced coefficients give the ratios needed to predict how much product a reaction will form. That is why a recipe-like calculation begins with a balanced equation rather than with the masses written on the page. Coefficients also let a chemist check that a predicted yield is reasonable before starting the experiment. Writing the balanced equation first also makes the reaction type obvious, since the formulas reveal what combined and what was produced, and in what exact molar proportions the balanced reaction requires.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Balance Fe + O₂ → Fe₂O₃ and classify dissolving salt in water.',
        steps: [
          'Oxygen appears in twos on the left and threes on the right, so use 3O₂ and 2Fe₂O₃.',
          'That requires 4Fe on the left: 4Fe + 3O₂ → 2Fe₂O₃.',
          'Dissolving produces no new substance, so it is a physical change.',
        ],
        answer: '4Fe + 3O₂ → 2Fe₂O₃; dissolving is a physical change.',
      },
    ],
    terms: [
      ['valence electron', 'an electron in the outermost energy level'],
      ['ionic bond', 'a bond formed by transfer of electrons between ions'],
      ['covalent bond', 'a bond formed by sharing electrons'],
      ['solute', 'the substance dissolved in a solution'],
      ['molarity', 'moles of solute per liter of solution'],
      ['neutralization', 'a reaction between an acid and a base producing water and a salt'],
    ],
    practice: [
      mc('NaCl forms through', ['sharing electrons', 'transferring electrons', 'melting', 'dissolving'], 1, 'A metal transfers to a nonmetal.'),
      num('In 2H₂ + O₂ → 2H₂O, how many hydrogen atoms are on each side?', 4, 'Two molecules of H₂ hold four atoms.'),
      mc('A precipitate indicates', ['a physical change', 'a chemical change', 'a mixture', 'neutralization only'], 1, 'A new solid product has formed.'),
    ],
    review: [
      {
        prompt: 'Why must a chemical equation be balanced?',
        answer: 'Because matter is conserved, so the number of atoms of each element must be the same on both sides of the equation.',
      },
      {
        prompt: 'How does dissolving differ from a chemical reaction?',
        answer: 'Dissolving is a physical change that creates no new substance, while a reaction produces new substances with different properties.',
      },
    ],
    exercises: [
      'Balance five equations and classify each reaction type.',
      'Test three household substances with indicator paper and explain the pH results.',
    ],
  },
};
