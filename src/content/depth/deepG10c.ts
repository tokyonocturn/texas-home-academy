import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Chemistry and World History (grade 10) depth pass. */
export const DEPTH_G10C: Record<string, LessonDepth> = {
  'chem-u1-l1': {
    topics: ['electron configuration'],
    objectives: [
      'Write electron configurations and relate them to periodic trends.',
      'Explain ionic and covalent bonding and draw Lewis structures.',
    ],
    sections: [
      {
        heading: 'Atomic structure and electron configuration',
        paragraphs: [
          'Electrons occupy orbitals in order of increasing energy: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p. Sodium with 11 electrons is 1s²2s²2p⁶3s¹, and the single 3s electron explains why sodium forms a 1+ ion so readily. The periodic table mirrors this order, which is why the table is organized by electron structure rather than by mass alone.',
          'Periodic trends follow from nuclear charge and shielding. Atomic radius decreases across a period as added protons pull electrons inward and increases down a group as new shells are added. Ionization energy rises across a period and falls down a group, and electronegativity follows the same pattern, peaking at fluorine.',
          'Ionic bonds form between metals and nonmetals through electron transfer: sodium loses one electron to become Na⁺, chlorine gains one to become Cl⁻, and the ions attract in a lattice. Covalent bonds form between nonmetals that share electrons, as in H₂O, where oxygen shares one pair with each hydrogen and keeps two lone pairs.',
        ],
      },
      {
        heading: 'Lewis structures and naming',
        paragraphs: [
          'A Lewis structure shows valence electrons as dots and bonds as lines. For CO₂, carbon sits in the center with two double bonds and no lone pairs, satisfying the octet for all three atoms. Total valence electrons are counted first, bonds are placed, then remaining electrons complete octets, and formal charge checks the result.',
          'Nomenclature follows charge and composition. Ionic compounds name the cation then the anion with an -ide ending, so NaCl is sodium chloride and MgO is magnesium oxide. Transition metals need Roman numerals when they have multiple charges, as in iron(III) oxide, and covalent compounds use prefixes, as in carbon dioxide or dinitrogen tetroxide.',
          'Polyatomic ions carry their names as units: NO₃⁻ is nitrate, SO₄²⁻ is sulfate, and NH₄⁺ is ammonium, so NH₄NO₃ is ammonium nitrate. Recognizing these units prevents the common mistake of renaming the elements separately inside a polyatomic ion. Bond polarity follows from electronegativity differences: a large difference produces an ionic bond, a moderate difference a polar covalent bond, and a near-zero difference a nonpolar covalent bond. That continuum explains why HCl dissolves into ions in water while methane does not, and why water, with its bent shape and polar bonds, dissolves so many substances. Students should practice drawing Lewis structures until octets and formal charges come out right on the first attempt, because every later topic depends on that skill. Molecular shape follows from electron pairs repelling one another, which is why water is bent rather than linear and why carbon dioxide is linear. Shape in turn determines polarity, boiling point, and how a molecule interacts with others, so a Lewis structure is not busywork but the starting point for predicting physical behavior.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Write the electron configuration of magnesium (Z = 12) and predict its ion.',
        steps: [
          'Fill orbitals: 1s²2s²2p⁶3s².',
          'Two valence electrons in 3s.',
          'Losing them gives the noble-gas configuration of neon, so the ion is Mg²⁺.',
        ],
        answer: '1s²2s²2p⁶3s², forming Mg²⁺ by losing two valence electrons.',
      },
    ],
    terms: [
      ['orbital', 'a region where an electron is likely to be found'],
      ['electron configuration', 'the arrangement of electrons in an atom’s orbitals'],
      ['ionization energy', 'the energy needed to remove an electron from an atom'],
      ['electronegativity', 'an atom’s pull on shared electrons in a bond'],
      ['Lewis structure', 'a diagram of valence electrons and bonds'],
      ['polyatomic ion', 'a charged group of covalently bonded atoms'],
    ],
    practice: [
      mc('Which has the largest atomic radius?', ['F', 'Cl', 'Br', 'I'], 3, 'Radius increases down a group.'),
      num('How many valence electrons does sodium have?', 1, 'The 3s¹ electron.'),
      mc('CO₂ contains', ['two single bonds', 'two double bonds', 'one triple bond', 'ionic bonds'], 1, 'Carbon forms two double bonds.'),
    ],
    review: [
      {
        prompt: 'Why does atomic radius decrease across a period?',
        answer: 'Added protons increase nuclear charge while electrons enter the same shell, so the attraction pulls the electron cloud inward.',
      },
      {
        prompt: 'How does an ionic bond differ from a covalent bond?',
        answer: 'An ionic bond transfers electrons between a metal and a nonmetal, while a covalent bond shares electrons between nonmetals.',
      },
    ],
    exercises: [
      'Write electron configurations for five elements and predict their common ions.',
      'Draw Lewis structures for three molecules and check octets and formal charge.',
    ],
  },
  'chem-u2-l1': {
    topics: ['limiting reactant'],
    objectives: [
      'Convert between mass, moles, and particles using molar mass and Avogadro’s number.',
      'Solve stoichiometry problems and identify the limiting reactant.',
    ],
    sections: [
      {
        heading: 'The mole and molar mass',
        paragraphs: [
          'A mole is 6.022 × 10²³ particles, Avogadro’s number, chosen so that one mole of a substance has a mass in grams equal to its formula mass in atomic mass units. The molar mass of water is about 18.02 g/mol, so 36.04 grams of water is 2.00 moles and contains about 1.204 × 10²⁴ molecules.',
          'Conversions form a chain in which units cancel. To find the mass of 0.75 moles of NaCl, multiply by 58.44 g/mol to get 43.83 grams. To find atoms in 10 grams of helium, divide by 4.00 g/mol and multiply by Avogadro’s number, which gives 1.51 × 10²⁴ atoms.',
          'Molar mass sums atomic masses from the periodic table, including subscripts. Calcium carbonate, CaCO₃, is 40.08 + 12.01 + 3(16.00) = 100.09 g/mol. Rounding atomic masses to two decimals is standard, and rounding too early in a multi-step calculation can shift the final digit.',
        ],
      },
      {
        heading: 'Stoichiometry and limiting reactants',
        paragraphs: [
          'A balanced equation gives mole ratios. For 2H₂ + O₂ → 2H₂O, two moles of hydrogen react with one mole of oxygen to form two moles of water. Stoichiometry converts the given quantity to moles, applies the ratio, and converts back to the requested unit, which is why balancing comes first.',
          'The limiting reactant runs out first and determines the theoretical yield. If 4 moles of H₂ and 3 moles of O₂ are available, hydrogen allows 4 moles of water while oxygen allows 6, so hydrogen limits and 4 moles of water form. The excess oxygen remains unreacted.',
          'Percent yield compares actual to theoretical yield: (actual/theoretical) × 100. A reaction producing 3.2 moles when 4.0 were predicted gives 80% yield, and the loss usually comes from side reactions, incomplete reaction, or transfer losses. Reporting yield is how a chemist judges whether a method is practical. Gas stoichiometry extends the same ratios to volumes, since equal volumes of gases at the same temperature and pressure contain equal numbers of particles. Solution stoichiometry uses molarity to convert volume to moles, so 25.0 mL of 0.200 M HCl contains 0.00500 moles and neutralizes an equal number of moles of NaOH. Keeping the units visible at every step is what makes a multi-step calculation checkable, and it is the habit that separates a correct answer from a lucky one. Empirical and molecular formulas follow from percent composition: dividing each percentage by atomic mass gives a mole ratio, which is reduced to the empirical formula and scaled to the molecular mass. Combustion analysis uses the masses of carbon dioxide and water produced to work backward to the formula, which is why careful weighing matters so much in the laboratory.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'How many grams of water form from 4.0 g of H₂ with excess O₂?',
        steps: [
          'Moles H₂ = 4.0 ÷ 2.02 ≈ 1.98 mol.',
          'Ratio 2H₂ : 2H₂O is 1:1, so 1.98 mol water.',
          'Mass = 1.98 × 18.02 ≈ 35.7 g.',
        ],
        answer: 'About 35.7 grams of water.',
      },
    ],
    terms: [
      ['mole', '6.022 × 10²³ particles of a substance'],
      ['molar mass', 'the mass of one mole of a substance in grams'],
      ['stoichiometry', 'using mole ratios from a balanced equation'],
      ['limiting reactant', 'the reactant that is used up first'],
      ['theoretical yield', 'the maximum product predicted by stoichiometry'],
      ['percent yield', 'actual yield divided by theoretical yield, times 100'],
    ],
    practice: [
      num('How many moles are in 36.04 g of water?', 2, 'Divide by 18.02 g/mol.'),
      mc('The limiting reactant is the one that', ['is most abundant', 'runs out first', 'has the largest molar mass', 'is a catalyst'], 1, 'It limits the product.'),
      num('What is the percent yield if 3.2 of a predicted 4.0 moles form?', 80, '3.2 ÷ 4.0 × 100.'),
    ],
    review: [
      {
        prompt: 'Why can you not change subscripts to balance an equation?',
        answer: 'Because subscripts define which substance it is, so changing them produces a different compound instead of balancing the reaction.',
      },
      {
        prompt: 'How do you identify the limiting reactant?',
        answer: 'Convert each reactant to moles of product using the balanced ratio, and the reactant giving the smaller amount limits the reaction.',
      },
    ],
    exercises: [
      'Convert five quantities between grams, moles, and particles.',
      'Solve a limiting-reactant problem and compute percent yield.',
    ],
  },
  'chem-u3-l1': {
    topics: ['pH'],
    objectives: [
      'Describe gas behavior with the gas laws and the ideal gas equation.',
      'Calculate solution concentration and interpret pH and neutralization.',
    ],
    sections: [
      {
        heading: 'Gas laws and the ideal gas equation',
        paragraphs: [
          'Boyle’s law states that pressure and volume are inversely proportional at constant temperature, so halving volume doubles pressure. Charles’s law states that volume and absolute temperature are directly proportional at constant pressure, and Gay-Lussac’s law relates pressure and temperature. All three use kelvin, because Celsius has no meaningful zero for ratios.',
          'The combined gas law, P₁V₁/T₁ = P₂V₂/T₂, handles changes in state, and the ideal gas law PV = nRT handles a single state with R = 0.08206 L·atm/(mol·K). A 2.0-mole sample at 300 K in 10 liters exerts P = nRT/V = (2.0)(0.08206)(300)/10 ≈ 4.92 atm.',
          'Real gases deviate at high pressure and low temperature, where molecules are close enough to attract and occupy volume. The ideal gas law is a model, useful within ordinary conditions, and knowing its limits is part of understanding it.',
        ],
      },
      {
        heading: 'Solutions, molarity, and pH',
        paragraphs: [
          'Molarity is moles of solute per liter of solution, so dissolving 0.50 moles of NaCl in enough water to make 2.0 liters gives 0.25 M. Dilution obeys M₁V₁ = M₂V₂, which is why adding water to 100 mL of 2.0 M solution until the volume is 500 mL yields 0.40 M.',
          'Acids donate protons and bases accept them. The pH scale is logarithmic: pH = −log[H⁺], so a solution with [H⁺] = 1 × 10⁻³ M has pH 3, and each unit represents a tenfold change. A pH of 2 is a hundred times more acidic than pH 4, not twice as acidic.',
          'Neutralization combines acid and base to produce water and a salt: HCl + NaOH → NaCl + H₂O. Titration uses a known concentration to find an unknown one through the balanced ratio, and the equivalence point is where moles of acid and base match stoichiometrically. Thermochemistry connects reactions to energy: an exothermic reaction releases heat and has a negative enthalpy change, while an endothermic one absorbs heat. Calorimetry measures that change using q = mcΔT, so heating 100 grams of water by 10°C requires about 4,184 joules, since water’s specific heat is 4.18 J/(g·°C). Hess’s law then lets a student add known enthalpy changes to find an unknown one, which is how formation data are used to predict whether a reaction will release or absorb energy. Reaction rates depend on concentration, temperature, surface area, and catalysts, and a catalyst lowers activation energy without being consumed. Equilibrium occurs when forward and reverse rates match, and Le Chatelier’s principle predicts how a system responds to change, which is the reasoning behind industrial processes such as ammonia synthesis, where pressure and temperature are chosen to favor product yield while keeping the rate practical.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Find the pH of 0.010 M HCl and the new concentration after diluting 100 mL of 2.0 M to 500 mL.',
        steps: [
          'HCl is strong, so [H⁺] = 0.010 M and pH = −log(0.010) = 2.0.',
          'Dilution: M₂ = M₁V₁/V₂ = (2.0)(0.100)/0.500 = 0.40 M.',
        ],
        answer: 'pH 2.0, and the diluted concentration is 0.40 M.',
      },
    ],
    terms: [
      ['Boyle’s law', 'pressure and volume are inversely proportional at constant temperature'],
      ['ideal gas law', 'PV = nRT, relating pressure, volume, moles, and temperature'],
      ['molarity', 'moles of solute per liter of solution'],
      ['dilution', 'lowering concentration by adding solvent'],
      ['pH', 'the negative logarithm of hydrogen ion concentration'],
      ['titration', 'using a known concentration to determine an unknown one'],
    ],
    practice: [
      num('What is the pH of 0.010 M HCl?', 2, '−log 0.01 = 2.'),
      num('Dilute 100 mL of 2.0 M to 500 mL. What is the new molarity?', 0.4, '0.2 ÷ 0.5 = 0.4 M.'),
      mc('At constant temperature, halving volume', ['halves pressure', 'doubles pressure', 'leaves pressure unchanged', 'doubles temperature'], 1, 'Boyle’s law.'),
    ],
    review: [
      {
        prompt: 'Why do gas-law calculations require kelvin?',
        answer: 'Because the laws describe proportional relationships, and only the kelvin scale starts at absolute zero so that ratios are meaningful.',
      },
      {
        prompt: 'How much more acidic is pH 2 than pH 4?',
        answer: 'A hundred times more acidic, because each pH unit represents a tenfold change in hydrogen ion concentration.',
      },
    ],
    exercises: [
      'Solve three gas-law problems and one ideal-gas calculation.',
      'Perform a dilution series and measure pH changes with indicator paper.',
    ],
  },
  'wh-u1-l1': {
    topics: ['Silk Road'],
    objectives: [
      'Compare the political and social structures of river-valley and classical civilizations.',
      'Explain how trade networks and world religions spread ideas across Eurasia.',
    ],
    sections: [
      {
        heading: 'River valleys and classical states',
        paragraphs: [
          'The first states grew in river valleys where irrigation supported dense populations: Mesopotamia between the Tigris and Euphrates, Egypt along the Nile, the Indus valley, and the Yellow River in China. Irrigation required coordination, which encouraged centralized authority, written records, and law codes such as Hammurabi’s, carved around 1750 BCE.',
          'Classical civilizations built on those foundations. Athens developed democracy in the fifth century BCE while Sparta kept an oligarchic military state; Rome moved from republic to empire under Augustus in 27 BCE; Han China organized a bureaucracy trained in Confucian texts; and Maurya and Gupta India produced mathematics and Buddhist institutions.',
          'Religion and philosophy shaped political legitimacy. Confucianism tied ruler virtue to harmony, Hinduism and Buddhism offered cosmologies that spread along trade routes, Judaism and Christianity developed monotheistic traditions in the eastern Mediterranean, and Islam emerged in seventh-century Arabia, unifying a region through faith, law, and trade.',
        ],
      },
      {
        heading: 'Trade networks and cultural exchange',
        paragraphs: [
          'The Silk Road linked China, Central Asia, Persia, and the Mediterranean from roughly 130 BCE onward. Silk moved west while horses, glass, and wool moved east, but the routes also carried Buddhism from India to China, papermaking westward, and diseases such as the plague that struck the Byzantine Empire in the sixth century.',
          'Indian Ocean trade connected East Africa, Arabia, India, and Southeast Asia through monsoon winds, carrying spices, textiles, and Islam. Trans-Saharan routes moved gold and salt between West African empires such as Mali and North Africa, and the pilgrimage to Mecca doubled as a network for scholarship and commerce.',
          'Exchange was not only goods. Arabic numerals and algebra reached Europe through Islamic scholars, Chinese printing and gunpowder spread westward, and crops moved between regions. Studying a trade network therefore means tracing ideas, technologies, and microbes as carefully as merchandise. Comparative study also requires attention to scale: the Han and Roman empires were roughly contemporaneous and similar in population, which makes their administrative choices comparable, while the Maya developed in a different environment with different constraints. Historians avoid the trap of treating one civilization as the standard against which others are measured. Reading a primary source alongside a modern map, and noting what the source assumes rather than states, is the practical version of that discipline. Writing about world history also requires distinguishing evidence from interpretation: a tax record and a chronicle answer different questions, and a chronicler’s account of a battle reflects who commissioned it. Comparing two accounts of the same event is the most reliable way to learn that distinction, and it produces essays that argue rather than summarize.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain how Buddhism reached China and what changed along the way.',
        steps: [
          'Monks travelled the Silk Road oases from India through Central Asia.',
          'Translation into Chinese adapted concepts and imagery.',
          'Schools such as Chan developed, showing adaptation rather than simple copying.',
        ],
        answer: 'Buddhism travelled with merchants and monks and was translated and adapted into distinct Chinese schools.',
      },
    ],
    terms: [
      ['city-state', 'an independent city and its surrounding territory'],
      ['bureaucracy', 'a trained administrative staff running a state'],
      ['Silk Road', 'overland trade routes linking China and the Mediterranean'],
      ['monsoon', 'seasonal wind patterns that enabled Indian Ocean trade'],
      ['diffusion', 'the spread of ideas, goods, or practices between societies'],
      ['legitimacy', 'the recognized right of a ruler to govern'],
    ],
    practice: [
      mc('Hammurabi’s Code comes from', ['Egypt', 'Mesopotamia', 'China', 'India'], 1, 'Babylon in Mesopotamia.'),
      num('In what year BCE did Augustus become Rome’s first emperor?', -27, '27 BCE.'),
      mc('The Silk Road carried which religion from India to China?', ['Islam', 'Buddhism', 'Judaism', 'Shinto'], 1, 'Buddhism spread along the routes.'),
    ],
    review: [
      {
        prompt: 'Why did early states form in river valleys?',
        answer: 'Irrigation supported surplus food and dense populations, and managing water required coordinated authority, records, and law.',
      },
      {
        prompt: 'What spread along the Silk Road besides trade goods?',
        answer: 'Religions such as Buddhism, technologies such as papermaking, and diseases such as plague travelled the routes along with merchandise.',
      },
    ],
    exercises: [
      'Compare two classical civilizations in a table of politics, religion, and technology.',
      'Trace one idea or technology along a trade route and explain how it changed.',
    ],
  },
  'wh-u2-l1': {
    topics: ['Reformation'],
    objectives: [
      'Explain the causes and consequences of the Renaissance and Reformation.',
      'Analyze exploration, the Columbian Exchange, and absolutist rule.',
    ],
    sections: [
      {
        heading: 'Renaissance and Reformation',
        paragraphs: [
          'The Renaissance began in Italian city-states such as Florence and Venice, where trade wealth funded art and scholarship. Humanism emphasized classical texts and human potential, and patrons such as the Medici commissioned works by Leonardo da Vinci and Michelangelo. Printing with movable type, developed by Gutenberg around 1450, accelerated the spread of ideas across Europe.',
          'The Reformation began when Martin Luther published his Ninety-five Theses in 1517, attacking the sale of indulgences. Printing spread his argument within weeks, and Luther’s insistence on scripture alone and faith alone broke with Rome. Calvinism added a doctrine of predestination, and Henry VIII’s break with Rome in 1534 created the Church of England for political as well as religious reasons.',
          'The consequences included the Peace of Augsburg in 1555, which allowed each prince to choose his territory’s religion, the Council of Trent’s reform of the Catholic Church, and the Wars of Religion that culminated in the Thirty Years’ War and the Peace of Westphalia in 1648, which strengthened the idea of sovereign states.',
        ],
      },
      {
        heading: 'Exploration, exchange, and absolutism',
        paragraphs: [
          'Portuguese voyages mapped the African coast, and Vasco da Gama reached India in 1498. Columbus crossed the Atlantic in 1492 under Spanish sponsorship, and the Treaty of Tordesillas in 1494 divided claimed territories between Spain and Portugal. Conquest followed: the Aztec empire fell to Cortés by 1521 and the Inca to Pizarro by 1533.',
          'The Columbian Exchange moved crops, animals, and diseases between hemispheres. Maize, potatoes, and tomatoes reached Europe, Africa, and Asia, while wheat, horses, and cattle reached the Americas. Smallpox and other diseases killed a large share of Indigenous populations, and the transatlantic slave trade forcibly moved millions of Africans to the Americas.',
          'Absolutist rulers concentrated power: Louis XIV of France, who reigned 1643–1715, built Versailles and revoked the Edict of Nantes in 1685, while Peter the Great of Russia westernized his state’s administration and military. Absolutism provoked Enlightenment thinkers such as Locke, who argued in 1690 that government rests on consent and must protect natural rights. The Scientific Revolution reinforced this confidence in reason, as Copernicus, Galileo, and Newton replaced inherited authority with observation and mathematics. Enlightenment thinkers applied the same skepticism to government, and their arguments later shaped the Declaration of Independence and the Constitution. Absolute rule and Enlightenment critique therefore belong in the same unit, because the second grew directly out of the first. A timeline that places Locke’s Two Treatises beside the Glorious Revolution of 1688 makes that connection concrete.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain how printing changed the course of the Reformation.',
        steps: [
          'Luther’s theses were printed and circulated within weeks rather than months.',
          'Vernacular pamphlets let ordinary readers engage without Latin.',
          'Rapid diffusion made suppression by any single authority impossible.',
        ],
        answer: 'Printing turned a local dispute into a Europe-wide movement that authorities could not contain.',
      },
    ],
    terms: [
      ['humanism', 'a movement emphasizing classical learning and human potential'],
      ['indulgence', 'a church grant reducing punishment for sin, which Luther attacked'],
      ['predestination', 'the Calvinist doctrine that salvation is predetermined'],
      ['Columbian Exchange', 'the transfer of plants, animals, and diseases between hemispheres'],
      ['absolutism', 'rule in which the monarch holds unrestricted power'],
      ['natural rights', 'rights belonging to people by birth, such as life and liberty'],
    ],
    practice: [
      num('In what year did Luther publish the Ninety-five Theses?', 1517, '1517.'),
      num('In what year did Columbus reach the Americas?', 1492, '1492.'),
      mc('The Peace of Westphalia in 1648 strengthened', ['feudalism', 'sovereign states', 'the Holy Roman Empire', 'colonial empires'], 1, 'It recognized state sovereignty.'),
    ],
    review: [
      {
        prompt: 'How did the printing press accelerate the Reformation?',
        answer: 'Printed pamphlets spread Luther’s arguments across Europe in weeks, letting ordinary readers engage and making suppression impossible.',
      },
      {
        prompt: 'What was exchanged in the Columbian Exchange, and with what consequences?',
        answer: 'Crops and animals moved between hemispheres, while diseases devastated Indigenous populations and the slave trade forcibly moved millions of Africans.',
      },
    ],
    exercises: [
      'Compare Luther and Calvin on authority and salvation in a short essay.',
      'Map the Columbian Exchange with three crops, two animals, and one disease.',
    ],
  },
  'wh-u3-l1': {
    topics: ['industrialization'],
    objectives: [
      'Explain the causes and social effects of industrialization and imperialism.',
      'Analyze the World Wars, decolonization, and the Cold War using evidence.',
    ],
    sections: [
      {
        heading: 'Industry, empire, and world war',
        paragraphs: [
          'Industrialization began in Britain in the late eighteenth century with cotton textiles, coal, and the steam engine improved by James Watt in the 1760s and 1770s. Railways, steamships, and telegraphs compressed distance, while factories concentrated workers in cities and produced crowded housing, child labor, and polluted air that reformers documented in reports and novels.',
          'Imperial expansion accelerated after 1880 as European powers partitioned Africa at the Berlin Conference of 1884–1885 and imposed rule across Asia. Resistance was widespread, from the Zulu in 1879 to the Maji Maji rebellion in German East Africa in 1905. Colonial economies were reorganized around export crops and minerals, with consequences that outlasted empire.',
          'The First World War began in 1914 after the assassination of Archduke Franz Ferdinand, and alliance systems turned a regional crisis into a global war. The Treaty of Versailles in 1919 imposed reparations and territorial losses on Germany, and the Second World War followed in 1939, ending in 1945 with the Holocaust and the use of atomic bombs at Hiroshima and Nagasaki.',
        ],
      },
      {
        heading: 'Decolonization and the Cold War',
        paragraphs: [
          'After 1945, independence movements dismantled empires. India and Pakistan gained independence in 1947 after Gandhi’s nonviolent campaigns, Ghana in 1957 under Nkrumah, and Algeria in 1962 after a brutal war. New states faced arbitrary borders, divided economies, and the pressures of the Cold War.',
          'The Cold War divided the world between the United States and the Soviet Union, with NATO formed in 1949 and the Warsaw Pact in 1955. Proxy wars in Korea, Vietnam, and Afghanistan, the Cuban Missile Crisis of 1962, and the nuclear arms race defined the period until the Soviet Union dissolved in 1991.',
          'Decolonization also reshaped international institutions. The United Nations was founded in 1945, the Universal Declaration of Human Rights followed in 1948, and the Non-Aligned Movement organized states that refused to join either bloc. Reading primary documents from these years shows how newly independent states argued for sovereignty and development. Comparing decolonization in India and Algeria shows how different routes produced different states: negotiated transfer preserved more institutions, while a long war left deeper scars and a more militarized politics. Economic dependency persisted through loans and commodity prices, and the 1970s oil shocks demonstrated how quickly resource wealth could shift global power. World history is best studied as connected systems rather than a list of dates, because decisions in one region repeatedly reshaped life in another, and that interconnection is the discipline’s central insight, and it is what makes comparison more than a list.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain how the Berlin Conference of 1884–1885 shaped later African borders.',
        steps: [
          'European powers drew boundaries by negotiation among themselves.',
          'Those lines ignored existing states, languages, and trade networks.',
          'Post-independence states inherited them, producing divided groups and contested regions.',
        ],
        answer: 'Borders drawn for European convenience were inherited by independent states, creating lasting ethnic and territorial tensions.',
      },
    ],
    terms: [
      ['industrialization', 'the shift to machine production and factory work'],
      ['imperialism', 'extending power over other territories and peoples'],
      ['reparations', 'payments required of a defeated state for war damage'],
      ['decolonization', 'the process by which colonies gained independence'],
      ['proxy war', 'a conflict in which major powers support opposing local sides'],
      ['non-alignment', 'refusing to join either Cold War bloc'],
    ],
    practice: [
      num('In what year did India and Pakistan gain independence?', 1947, '1947.'),
      num('In what year did the Soviet Union dissolve?', 1991, '1991.'),
      mc('NATO was formed in', ['1945', '1949', '1955', '1962'], 1, '1949.'),
    ],
    review: [
      {
        prompt: 'What social effects followed early industrialization?',
        answer: 'Factory work concentrated populations in cities, producing crowded housing, child labor, and pollution that reformers and writers documented.',
      },
      {
        prompt: 'How did the Cold War shape decolonization?',
        answer: 'New states were courted or pressured by both blocs, and many conflicts became proxy wars, while others organized through the Non-Aligned Movement.',
      },
    ],
    exercises: [
      'Analyze a primary source from 1919 or 1948 and identify its argument and audience.',
      'Build a timeline of decolonization with six dates and one consequence each.',
    ],
  },
};
