import type { LessonDepth } from './types';

/** Authored depth for high-school science and social studies. */
export const DEPTH_HS_B: Record<string, LessonDepth> = {
  'bio-u1-l1': {
    topics: ['organelles', 'cellular respiration'],
    applicationTitle: 'Structure explains function',
    application:
      'Every organelle’s shape serves a job: folded inner membranes increase surface area for the reactions of respiration, and stacked thylakoids do the same for photosynthesis. Plant cells add chloroplasts and a cell wall; animal cells rely on mitochondria and a flexible membrane. When you know the function, the structure stops being a list to memorize.',
    example: {
      prompt: 'A muscle cell has far more mitochondria than a skin cell. Why?',
      steps: [
        'Muscle contraction requires continuous ATP.',
        'Mitochondria produce ATP through cellular respiration.',
      ],
      answer: 'More mitochondria supply the ATP that muscle work demands.',
    },
    terms: [
      ['organelle', 'a membrane-bound structure with a specific job inside a cell'],
      ['ATP', 'the molecule cells use to store and transfer usable energy'],
    ],
    review: [
      {
        prompt: 'What does the chloroplast do that a mitochondrion cannot?',
        answer: 'It captures light energy to make glucose through photosynthesis.',
      },
      {
        prompt: 'How are photosynthesis and respiration related?',
        answer: 'Their products are each other’s inputs: glucose and oxygen versus carbon dioxide and water.',
      },
    ],
    exercises: [
      'Draw and label a plant and an animal cell, noting two differences.',
      'Explain why a cell’s shape suits its function in two examples.',
    ],
  },
  'bio-u2-l1': {
    topics: ['DNA alleles', 'Punnett squares'],
    applicationTitle: 'From genes to traits',
    application:
      'DNA is transcribed into RNA and translated into protein, and proteins build traits. Alleles are versions of a gene; a dominant allele masks a recessive one in a heterozygote. A Punnett square predicts offspring ratios from parental genotypes, which is why two carriers of a recessive condition have a one-in-four chance of an affected child.',
    example: {
      prompt: 'Cross two heterozygous parents (Bb × Bb). Predict offspring ratios.',
      steps: ['Each parent contributes B or b.', 'The square gives BB, Bb, Bb, bb.'],
      answer: '3 dominant : 1 recessive phenotype, with genotypes 1 BB : 2 Bb : 1 bb.',
    },
    terms: [
      ['allele', 'one version of a gene'],
      ['heterozygous', 'having two different alleles for a gene'],
    ],
    review: [
      {
        prompt: 'What is the difference between genotype and phenotype?',
        answer: 'Genotype is the allele combination; phenotype is the observable trait.',
      },
      {
        prompt: 'Why can a recessive trait reappear after two generations?',
        answer: 'Carriers keep the recessive allele without showing it and can pass it on.',
      },
    ],
    exercises: [
      'Complete a Punnett square for Aa × aa and state the ratios.',
      'Explain how a single DNA mutation can change a protein.',
    ],
  },
  'bio-u3-l1': {
    topics: ['natural selection', 'energy flow'],
    applicationTitle: 'Selection and the ten percent rule',
    application:
      'Natural selection requires variation, heritability, and differential reproduction: individuals with helpful traits leave more offspring, so those traits spread. Energy flow follows a similar arithmetic: only about ten percent of energy passes to the next trophic level, which limits the number of top predators an ecosystem can support.',
    example: {
      prompt: 'Explain antibiotic resistance as natural selection.',
      steps: [
        'Random mutations create some bacteria resistant to the drug.',
        'The antibiotic kills susceptible cells, so resistant ones reproduce.',
      ],
      answer: 'The population shifts because resistance is inherited and favored under treatment.',
    },
    terms: [
      ['natural selection', 'differential survival and reproduction of inherited traits'],
      ['trophic level', 'a feeding position in a food chain'],
    ],
    review: [
      {
        prompt: 'What three conditions must hold for natural selection?',
        answer: 'Individuals must vary, the variation must be heritable, and some variants must reproduce more successfully than others.',
      },
      {
        prompt: 'Why are food chains short?',
        answer: 'Only about ten percent of energy transfers at each step.',
      },
    ],
    exercises: [
      'Model selection with two colors of beans on two backgrounds.',
      'Compute available energy through four trophic levels starting at 10,000 kcal.',
    ],
  },
  'ipc-u1-l1': {
    topics: ['SI units', 'balanced forces'],
    applicationTitle: 'Units and forces in the lab',
    application:
      'SI units make measurements comparable: meters, kilograms, seconds, newtons, joules. Converting within the metric system is multiplying by powers of ten, and getting units wrong can make a calculation meaningless. Forces add as vectors, so balanced forces produce no acceleration while a net force changes motion.',
    example: {
      prompt: 'Convert 2.5 km to meters and find the net force of 12 N right and 5 N left.',
      steps: ['1 km = 1,000 m, so 2.5 km = 2,500 m.', 'Forces oppose: 12 − 5 = 7 N right.'],
      answer: '2,500 m; 7 N to the right.',
    },
    terms: [
      ['SI unit', 'the standard metric unit used in science, such as the newton'],
      ['net force', 'the vector sum of all forces on an object'],
    ],
    review: [
      {
        prompt: 'Why do scientists use SI units?',
        answer: 'So measurements and calculations can be compared and reproduced worldwide.',
      },
      {
        prompt: 'What happens when forces on an object are balanced?',
        answer: 'The net force is zero, so its motion does not change.',
      },
    ],
    exercises: [
      'Convert 450 cm to meters and 3 kg to grams.',
      'Draw and compute net force for three force diagrams.',
    ],
  },
  'ipc-u2-l1': {
    topics: ['energy transformations', 'wave speed'],
    applicationTitle: 'Tracking energy and waves',
    application:
      'Energy changes form but is conserved: a battery’s chemical energy becomes electrical energy, then light and heat. Waves transfer energy without transferring matter, and the relationship v = fλ connects speed, frequency, and wavelength. Ohm’s law, V = IR, does the same for circuits, linking voltage, current, and resistance.',
    example: {
      prompt: 'A wave has frequency 5 Hz and wavelength 2 m. Find its speed.',
      steps: ['Use v = fλ.', 'v = 5 × 2 = 10 m/s.'],
      answer: '10 meters per second.',
    },
    terms: [
      ['frequency', 'the number of wave cycles per second, in hertz'],
      ['resistance', 'opposition to current flow, measured in ohms'],
    ],
    review: [
      {
        prompt: 'What does conservation of energy mean?',
        answer: 'Energy is not created or destroyed, only transferred or transformed.',
      },
      {
        prompt: 'How do you compute current with Ohm’s law?',
        answer: 'Divide voltage by resistance, I = V/R, so 12 volts across 4 ohms carries 3 amperes.',
      },
    ],
    exercises: [
      'Trace energy transformations in a flashlight.',
      'Compute current for a 9 V battery with 3 Ω resistance.',
    ],
  },
  'ipc-u3-l1': {
    topics: ['chemical change', 'conservation of mass'],
    applicationTitle: 'New substances, same atoms',
    application:
      'A physical change alters form or state; a chemical change produces new substances with different properties, often with evidence such as gas, heat, light, or a color change that cannot be reversed. Mass is conserved because atoms are rearranged, which is why a sealed reaction keeps its total mass even when a gas forms.',
    example: {
      prompt: 'Steel wool gains mass after burning in a sealed flask. Explain.',
      steps: [
        'Iron reacts with oxygen to form iron oxide.',
        'In a sealed flask, the oxygen’s mass was already inside, so total mass is unchanged.',
      ],
      answer: 'The reaction rearranges atoms; mass is conserved in the closed system.',
    },
    terms: [
      ['chemical change', 'a change that produces a new substance'],
      ['closed system', 'a system that exchanges no matter with its surroundings'],
    ],
    review: [
      {
        prompt: 'Give two signs of a chemical change.',
        answer: 'Gas production and a color change that cannot be reversed, plus heat or light.',
      },
      {
        prompt: 'Why does an open reaction sometimes seem to lose mass?',
        answer: 'A gas escapes into the surroundings, carrying matter away.',
      },
    ],
    exercises: [
      'Classify five changes as physical or chemical and justify each.',
      'Balance a simple equation and count atoms on both sides.',
    ],
  },
  'chem-u1-l1': {
    topics: ['electron configuration', 'periodic trends'],
    applicationTitle: 'The table as a map of electrons',
    application:
      'An element’s group number reveals its valence electrons, which govern bonding and reactivity. Trends follow from nuclear charge and distance: atomic radius increases down a group and decreases across a period, while electronegativity does the opposite. Predicting a trend is therefore reasoning about attraction, not memorizing a list.',
    example: {
      prompt: 'Which is larger, sodium or chlorine, and why?',
      steps: [
        'Both are in period 3, so the same shell count.',
        'Chlorine has more protons, pulling electrons closer.',
      ],
      answer: 'Sodium is larger because its nuclear charge is lower across the same period.',
    },
    terms: [
      ['electronegativity', 'the tendency of an atom to attract shared electrons'],
      ['valence electron', 'an outer-shell electron involved in bonding'],
    ],
    review: [
      {
        prompt: 'Why does atomic radius increase down a group?',
        answer: 'Each period adds a shell, so the outer electrons sit farther from the nucleus.',
      },
      {
        prompt: 'How many valence electrons does group 17 have?',
        answer: 'Seven, which is why halogens react by gaining one electron.',
      },
    ],
    exercises: [
      'Write electron configurations for sodium and chlorine.',
      'Rank three elements by electronegativity and justify the order.',
    ],
  },
  'chem-u2-l1': {
    topics: ['ionic and covalent bonds', 'balancing equations'],
    applicationTitle: 'Bonds and balanced equations',
    application:
      'Ionic bonds transfer electrons between a metal and a nonmetal, creating charged ions that attract; covalent bonds share electrons between nonmetals. Chemical equations must balance because atoms are conserved, and coefficients give mole ratios that convert between substances, which is the arithmetic behind every stoichiometry problem.',
    example: {
      prompt: 'Balance H₂ + O₂ → H₂O and state the mole ratio of H₂ to H₂O.',
      steps: ['Balance oxygen with 2 H₂O.', 'Then balance hydrogen with 2 H₂.'],
      answer: '2H₂ + O₂ → 2H₂O; the ratio is 2 mol H₂ per 2 mol H₂O, or 1:1.',
    },
    terms: [
      ['ionic bond', 'attraction between oppositely charged ions'],
      ['mole ratio', 'the ratio of coefficients between substances in an equation'],
    ],
    review: [
      {
        prompt: 'How do you decide whether a bond is ionic or covalent?',
        answer: 'Metal plus nonmetal usually forms ionic; nonmetal plus nonmetal forms covalent.',
      },
      {
        prompt: 'Why can you not change subscripts to balance an equation?',
        answer: 'Because subscripts define which substance it is, so changing them produces a different compound rather than a balanced equation.',
      },
    ],
    exercises: [
      'Balance three equations and list their mole ratios.',
      'Classify five compounds as ionic or covalent.',
    ],
  },
  'chem-u3-l1': {
    topics: ['molarity', 'pH'],
    applicationTitle: 'Concentration and acidity',
    application:
      'Molarity is moles of solute per liter of solution, so it measures concentration rather than amount. pH is a logarithmic scale: each unit is a tenfold change in hydrogen ion concentration, so pH 3 is ten times more acidic than pH 4. The ideal gas law, PV = nRT, connects pressure, volume, temperature, and moles.',
    example: {
      prompt: '0.50 mol of salt dissolves in 2.0 L of solution. Find the molarity.',
      steps: ['M = mol ÷ L.', 'M = 0.50 ÷ 2.0 = 0.25.'],
      answer: '0.25 M, or 0.25 moles per liter.',
    },
    terms: [
      ['molarity', 'moles of solute per liter of solution'],
      ['pH', 'a logarithmic measure of hydrogen ion concentration'],
    ],
    review: [
      {
        prompt: 'Why is pH called a logarithmic scale?',
        answer: 'Each unit represents a tenfold change in hydrogen ion concentration.',
      },
      {
        prompt: 'What happens to pressure if volume decreases at constant temperature?',
        answer: 'Pressure increases, because the gas particles collide more often.',
      },
    ],
    exercises: [
      'Compute molarity for 0.2 mol in 500 mL.',
      'Predict the pH change when a strong acid is diluted tenfold.',
    ],
  },
  'phys-u1-l1': {
    topics: ['kinematics', 'Newton’s second law'],
    applicationTitle: 'Describing and explaining motion',
    application:
      'Kinematics describes motion with position, velocity, and acceleration; dynamics explains it with force. Acceleration is the change in velocity per time, and F = ma connects net force to it. Mass is the amount of matter; weight is the gravitational force on that mass, which is why your mass is the same on the Moon but your weight is not.',
    example: {
      prompt: 'A 10 kg object accelerates at 3 m/s². Find the net force and its weight on Earth.',
      steps: ['F = ma = 10 × 3 = 30 N.', 'Weight = mg = 10 × 9.8 = 98 N.'],
      answer: '30 N net force; about 98 N of weight.',
    },
    terms: [
      ['acceleration', 'the rate of change of velocity'],
      ['weight', 'the force of gravity on an object, mg'],
    ],
    review: [
      {
        prompt: 'How is mass different from weight?',
        answer: 'Mass is matter, measured in kg; weight is a force, measured in newtons.',
      },
      {
        prompt: 'What net force is needed for constant velocity?',
        answer: 'Zero net force, because constant velocity means no acceleration, so the forces must balance.',
      },
    ],
    exercises: [
      'Compute acceleration for a 20 N force on a 4 kg cart.',
      'Distinguish speed, velocity, and acceleration with one example each.',
    ],
  },
  'phys-u2-l1': {
    topics: ['work and energy', 'momentum'],
    applicationTitle: 'Energy accounting and collisions',
    application:
      'Work is force times distance, and it changes an object’s energy. Kinetic energy is ½mv², so doubling speed quadruples it, which is why stopping distance grows quickly with speed. Momentum, mv, is conserved in collisions, giving a reliable tool for predicting outcomes even when energy is lost to deformation or heat.',
    example: {
      prompt: 'A 2 kg ball moves at 6 m/s. Find its kinetic energy and momentum.',
      steps: ['KE = ½ × 2 × 6² = 36 J.', 'p = mv = 2 × 6 = 12 kg·m/s.'],
      answer: '36 joules and 12 kg·m/s.',
    },
    terms: [
      ['kinetic energy', 'energy of motion, ½mv²'],
      ['momentum', 'mass times velocity, conserved in a closed system'],
    ],
    review: [
      {
        prompt: 'Why does doubling speed quadruple kinetic energy?',
        answer: 'Velocity is squared in ½mv², so doubling it multiplies energy by four.',
      },
      {
        prompt: 'What does conservation of momentum let you predict?',
        answer: 'The velocities after a collision, given the masses and initial velocities.',
      },
    ],
    exercises: [
      'Compute the kinetic energy of a 1,000 kg car at 20 m/s.',
      'Solve a perfectly inelastic collision between two carts.',
    ],
  },
  'phys-u3-l1': {
    topics: ['wave speed', 'Ohm’s law'],
    applicationTitle: 'Waves and circuits',
    application:
      'Wave speed equals frequency times wavelength, so a higher frequency means a shorter wavelength at the same speed. In circuits, Ohm’s law relates voltage, current, and resistance, and electrical power is P = IV. These relationships explain why a 60 W bulb draws half an amp at 120 V and why long, thin wires waste energy as heat.',
    example: {
      prompt: 'A 60 W bulb runs on 120 V. Find the current and resistance.',
      steps: ['I = P/V = 60/120 = 0.5 A.', 'R = V/I = 120/0.5 = 240 Ω.'],
      answer: '0.5 A and 240 ohms.',
    },
    terms: [
      ['wavelength', 'the distance between successive wave crests'],
      ['power', 'the rate of energy transfer, P = IV'],
    ],
    review: [
      {
        prompt: 'What is Ohm’s law?',
        answer: 'V = IR: voltage equals current times resistance.',
      },
      {
        prompt: 'How are frequency and wavelength related at constant speed?',
        answer: 'They are inversely proportional: higher frequency means shorter wavelength.',
      },
    ],
    exercises: [
      'Compute wave speed for 200 Hz and 1.5 m wavelength.',
      'Find the power of a device drawing 2 A at 12 V.',
    ],
  },
  'geo-u1-l1': {
    topics: ['plate tectonics', 'climate and biomes'],
    applicationTitle: 'Land, climate, and where people live',
    application:
      'Plate boundaries explain mountain belts, volcanoes, and earthquake zones, which in turn shape climate by blocking moisture and creating rain shadows. Latitude and wind patterns determine temperature and rainfall, and biomes follow those patterns. Geography therefore links physical processes to where agriculture, cities, and hazards concentrate.',
    example: {
      prompt: 'Why is the leeward side of a mountain range dry?',
      steps: [
        'Air rises on the windward side, cools, and releases moisture.',
        'Descending air on the leeward side warms and holds moisture, creating a rain shadow.',
      ],
      answer: 'The rain shadow leaves the leeward side arid.',
    },
    terms: [
      ['rain shadow', 'the dry area on the leeward side of a mountain range'],
      ['biome', 'a large ecological region defined by climate'],
    ],
    review: [
      {
        prompt: 'Which plate boundary produces volcanoes and why?',
        answer: 'Convergent boundaries, where subducting crust melts and magma rises.',
      },
      {
        prompt: 'How does latitude affect climate?',
        answer: 'Lower latitudes receive more direct sunlight and are generally warmer.',
      },
    ],
    exercises: [
      'Map three plate boundaries and label the hazards at each.',
      'Explain the climate of a city using latitude and wind patterns.',
    ],
  },
  'geo-u2-l1': {
    topics: ['population pyramids', 'migration'],
    applicationTitle: 'Reading a population',
    application:
      'A population pyramid shows age and sex structure: a wide base indicates high birth rates, a narrow top indicates short life expectancy, and a bulge shows a baby boom moving through time. Migration reshapes these structures. Push factors drive people away, pull factors attract them, and both affect labor markets and public services.',
    example: {
      prompt: 'A pyramid has a very wide base and narrow top. What does it imply for schools?',
      steps: ['Many children relative to adults means high fertility.', 'Demand for schools and child health services is high.'],
      answer: 'A young population with rapid growth and heavy demand for schools.',
    },
    terms: [
      ['population pyramid', 'a graph of population by age and sex'],
      ['push factor', 'a condition that drives people to leave a place'],
    ],
    review: [
      {
        prompt: 'What does a top-heavy pyramid suggest?',
        answer: 'An aging population with low birth rates and longer life expectancy.',
      },
      {
        prompt: 'Give one push and one pull factor for migration.',
        answer: 'Push: unemployment or conflict. Pull: jobs or safety.',
      },
    ],
    exercises: [
      'Compare two population pyramids and describe the difference.',
      'List three push and three pull factors for your region.',
    ],
  },
  'geo-u3-l1': {
    topics: ['comparative advantage', 'trade dependence'],
    applicationTitle: 'Why countries trade',
    application:
      'Comparative advantage means producing what you give up least to make, even if another country is better at everything. Trade raises total output but creates dependence, and a country reliant on one export is vulnerable to price swings. That is why diversification and trade policy are central political questions.',
    example: {
      prompt: 'Country A is better at both wheat and cloth. Should it still trade?',
      steps: [
        'Compare opportunity costs, not absolute ability.',
        'If A gives up less cloth to produce wheat, it should specialize in wheat.',
      ],
      answer: 'Yes; both gain by specializing where opportunity cost is lower.',
    },
    terms: [
      ['comparative advantage', 'the ability to produce at a lower opportunity cost'],
      ['diversification', 'expanding the range of products an economy makes'],
    ],
    review: [
      {
        prompt: 'How is comparative advantage different from absolute advantage?',
        answer: 'It compares opportunity costs rather than total productivity.',
      },
      {
        prompt: 'Why is dependence on one export risky?',
        answer: 'A price drop in that commodity collapses national revenue.',
      },
    ],
    exercises: [
      'Compute opportunity costs for two producers and identify specialization.',
      'Explain one benefit and one cost of trade for a single-export economy.',
    ],
  },
  'wh-u1-l1': {
    topics: ['Silk Road', 'Columbian Exchange'],
    applicationTitle: 'Networks that moved the world',
    application:
      'Trade networks move more than goods: the Silk Road carried Buddhism, papermaking, and plague, while the Columbian Exchange after 1492 moved crops, animals, people, and diseases between hemispheres. Both increased interconnection, and both had uneven consequences, enriching some regions while devastating others through disease and coerced labor.',
    example: {
      prompt: 'Explain one way the Columbian Exchange changed diets in both hemispheres.',
      steps: [
        'Potatoes and corn reached Europe, Africa, and Asia.',
        'Wheat, cattle, and horses reached the Americas.',
      ],
      answer: 'Diets diversified in both directions, with population effects from new staple crops.',
    },
    terms: [
      ['Columbian Exchange', 'the transatlantic transfer of plants, animals, people, and disease'],
      ['diffusion', 'the spread of ideas or practices between societies'],
    ],
    review: [
      {
        prompt: 'What spread along the Silk Road besides trade goods?',
        answer: 'Religions, technologies such as papermaking, and diseases such as plague travelled the Silk Road along with goods.',
      },
      {
        prompt: 'Why was the Columbian Exchange devastating for Indigenous Americans?',
        answer: 'Eurasian diseases killed a large share of a population with no immunity.',
      },
    ],
    exercises: [
      'Map two trade routes and mark three items that traveled each.',
      'Write a paragraph comparing the effects of both networks.',
    ],
  },
  'wh-u2-l1': {
    topics: ['political revolution', 'industrialization'],
    applicationTitle: 'Revolutions in politics and production',
    application:
      'The American, French, and Haitian revolutions shared claims about rights and representation but differed in scope and outcome: Haiti abolished slavery through revolution, while France’s revolution moved through radical and reactionary phases. Industrialization then changed work, cities, and class structure, producing both productivity gains and harsh labor conditions that reformers attacked.',
    example: {
      prompt: 'Compare one similarity and one difference between the American and Haitian revolutions.',
      steps: [
        'Similarity: both rejected colonial rule and asserted popular sovereignty.',
        'Difference: Haiti’s revolution ended slavery and faced extreme international isolation.',
      ],
      answer: 'Shared anti-colonial claims, divergent social consequences.',
    },
    terms: [
      ['popular sovereignty', 'the idea that authority comes from the people'],
      ['industrialization', 'the shift to machine-based manufacturing and urban work'],
    ],
    review: [
      {
        prompt: 'What was one social consequence of industrialization?',
        answer: 'Rapid urban growth and a new industrial working class with poor conditions.',
      },
      {
        prompt: 'Why did the Haitian revolution have international consequences?',
        answer: 'It destroyed a profitable slave economy and alarmed slaveholding powers.',
      },
    ],
    exercises: [
      'Create a comparison chart of three revolutions.',
      'Explain two effects of industrialization on daily life.',
    ],
  },
  'wh-u3-l1': {
    topics: ['total war', 'decolonization'],
    applicationTitle: 'War on everyone, then independence',
    application:
      'Total war mobilizes civilians, industry, and propaganda, blurring the line between soldiers and society. The two world wars exhausted empires and undermined claims to rule others, and decolonization after 1945 produced new states, often with borders drawn for imperial convenience. Those borders and Cold War interventions shaped later conflicts.',
    example: {
      prompt: 'Give two features that made the world wars “total.”',
      steps: [
        'Economies were directed to war production and rationing.',
        'Civilians became targets through bombing and occupation.',
      ],
      answer: 'Economic mobilization and attacks on civilian populations.',
    },
    terms: [
      ['total war', 'war that mobilizes entire societies, not only armies'],
      ['decolonization', 'the end of colonial rule and creation of independent states'],
    ],
    review: [
      {
        prompt: 'Why did decolonization accelerate after 1945?',
        answer: 'War weakened empires, anti-colonial movements grew, and new superpowers opposed old empires.',
      },
      {
        prompt: 'How did arbitrary borders affect new states?',
        answer: 'They grouped rival communities and split others, fueling conflict.',
      },
    ],
    exercises: [
      'Map three decolonized states and note one legacy of their borders.',
      'Write a paragraph on one consequence of total war.',
    ],
  },
  'us1-u1-l1': {
    topics: ['Reconstruction amendments', 'Jim Crow'],
    applicationTitle: 'Promises and retreat',
    application:
      'The Thirteenth, Fourteenth, and Fifteenth Amendments abolished slavery, guaranteed citizenship and equal protection, and protected voting rights. Reconstruction governments expanded education and civil rights, but paramilitary violence, Black codes, and the Compromise of 1877 ended federal enforcement, allowing Jim Crow segregation to entrench for generations.',
    example: {
      prompt: 'How did the end of Reconstruction affect the Fourteenth Amendment’s promise?',
      steps: [
        'Federal troops withdrew in 1877, ending enforcement.',
        'States used literacy tests, poll taxes, and segregation to circumvent equal protection.',
      ],
      answer: 'The amendment remained law but was largely unenforced until the twentieth century.',
    },
    terms: [
      ['Black codes', 'laws restricting the rights of Black Americans after the Civil War'],
      ['Jim Crow', 'state and local laws enforcing racial segregation'],
    ],
    review: [
      {
        prompt: 'What did the Fifteenth Amendment protect?',
        answer: 'The right to vote regardless of race, color, or previous servitude.',
      },
      {
        prompt: 'How did Reconstruction end?',
        answer: 'The disputed 1876 election led to federal troops withdrawing in 1877.',
      },
    ],
    exercises: [
      'Summarize each Reconstruction amendment in one sentence.',
      'Explain two methods used to disenfranchise Black voters.',
    ],
  },
  'us1-u2-l1': {
    topics: ['industrialization', 'New Deal'],
    applicationTitle: 'Growth, reform, and the welfare state',
    application:
      'Industrial growth after 1877 was driven by railroads, steel, oil, immigration, and new financial markets, producing immense wealth and harsh labor conditions. Progressives responded with regulation, antitrust action, and constitutional amendments; the New Deal went further, creating social insurance and direct federal roles in the economy that reshaped American politics.',
    example: {
      prompt: 'Compare Progressive and New Deal approaches to reform.',
      steps: [
        'Progressives emphasized regulation, transparency, and political process.',
        'The New Deal created federal programs and direct relief during the Depression.',
      ],
      answer: 'Both regulated markets, but the New Deal built permanent federal social programs.',
    },
    terms: [
      ['Progressivism', 'a reform movement addressing industrial and political abuses'],
      ['New Deal', 'federal programs created in the 1930s to address the Depression'],
    ],
    review: [
      {
        prompt: 'Name two causes of industrial growth after 1877.',
        answer: 'Railroads and steel, plus oil, immigration, and capital investment.',
      },
      {
        prompt: 'What did Social Security create?',
        answer: 'A federal old-age insurance program, a foundation of the welfare state.',
      },
    ],
    exercises: [
      'Make a chart of Progressive and New Deal reforms.',
      'Explain one labor conflict and its outcome.',
    ],
  },
  'us1-u3-l1': {
    topics: ['World War II', 'civil rights movement'],
    applicationTitle: 'War abroad, rights at home',
    application:
      'The United States entered World War II after Pearl Harbor in 1941, mobilizing industry and millions of soldiers while interning Japanese Americans. The war’s rhetoric of freedom exposed racial hypocrisy, and the civil rights movement used a legal strategy: challenge segregation in court, then press Congress for legislation, culminating in the Civil Rights Act of 1964 and Voting Rights Act of 1965.',
    example: {
      prompt: 'Explain how wartime experience contributed to the civil rights movement.',
      steps: [
        'Black veterans returned having fought for freedom abroad.',
        'Wartime employment and migration changed expectations and organizing capacity.',
      ],
      answer: 'The war raised expectations and strengthened demands for equality at home.',
    },
    terms: [
      ['internment', 'forced confinement of a group, as with Japanese Americans in WWII'],
      ['judicial review', 'courts’ power to invalidate laws conflicting with the Constitution'],
    ],
    review: [
      {
        prompt: 'What event brought the United States into World War II?',
        answer: 'The Japanese attack on Pearl Harbor in December 1941.',
      },
      {
        prompt: 'What did Brown v. Board of Education decide?',
        answer: 'That racial segregation in public schools is unconstitutional.',
      },
    ],
    exercises: [
      'Create a timeline from 1941 to 1965 with six events.',
      'Explain the legal strategy behind one civil rights case.',
    ],
  },
  'gov-u1-l1': {
    topics: ['federalism', 'enumerated powers'],
    applicationTitle: 'Who can do what',
    application:
      'Federalism divides power between national and state governments. Enumerated powers belong to Congress, reserved powers to the states, and concurrent powers are shared, as with taxation. The Necessary and Proper Clause allows implied powers, which is why federal authority has expanded beyond the literal list in Article I.',
    example: {
      prompt: 'Is a driver’s license a state or federal function?',
      steps: [
        'The Constitution does not enumerate driver licensing to Congress.',
        'States retain general police powers over health, safety, and welfare.',
      ],
      answer: 'A state function under reserved powers.',
    },
    terms: [
      ['enumerated powers', 'powers explicitly listed in the Constitution'],
      ['reserved powers', 'powers retained by the states under the Tenth Amendment'],
    ],
    review: [
      {
        prompt: 'Give an example of a concurrent power.',
        answer: 'Taxation, which both federal and state governments exercise.',
      },
      {
        prompt: 'What does the Necessary and Proper Clause allow?',
        answer: 'Congress to make laws needed to carry out its enumerated powers.',
      },
    ],
    exercises: [
      'Sort ten government functions into federal, state, and concurrent.',
      'Explain one Supremacy Clause conflict.',
    ],
  },
  'gov-u2-l1': {
    topics: ['legislative process', 'judicial review'],
    applicationTitle: 'From bill to law to precedent',
    application:
      'A bill becomes law through committee review, floor votes in both chambers, conference reconciliation, and presidential signature or veto, which Congress can override with two-thirds. Courts then interpret statutes, and judicial review lets them strike down laws that violate the Constitution. Precedent stabilizes interpretation while allowing gradual change.',
    example: {
      prompt: 'The president vetoes a bill. What happens next?',
      steps: [
        'The bill returns to Congress with objections.',
        'A two-thirds vote in each chamber overrides the veto.',
      ],
      answer: 'Congress can override with two-thirds majorities; otherwise the bill dies.',
    },
    terms: [
      ['judicial review', 'the power to declare laws unconstitutional'],
      ['precedent', 'a prior decision that guides later courts'],
    ],
    review: [
      {
        prompt: 'Why do committees matter in the legislative process?',
        answer: 'They revise, investigate, and decide which bills reach a floor vote.',
      },
      {
        prompt: 'What case established judicial review?',
        answer: 'Marbury v. Madison in 1803 established the power of judicial review.',
      },
    ],
    exercises: [
      'Trace a hypothetical bill through both chambers.',
      'Summarize one precedent and explain how it constrains courts.',
    ],
  },
  'gov-u3-l1': {
    topics: ['civil liberties', 'local government'],
    applicationTitle: 'Rights, votes, and city hall',
    application:
      'Civil liberties protect individuals from government overreach, such as speech and due process; civil rights guarantee equal treatment across groups. Elections connect both to power, and local government handles the services people encounter daily: schools, zoning, police, water, and roads. Most political participation happens at that local level.',
    example: {
      prompt: 'A city bans a peaceful protest. Which liberty is implicated?',
      steps: [
        'The First Amendment protects peaceful assembly and speech.',
        'The city must show a compelling interest and narrow tailoring.',
      ],
      answer: 'Free assembly and speech; the ban faces strict scrutiny.',
    },
    terms: [
      ['civil liberty', 'protection from government interference, such as free speech'],
      ['zoning', 'local rules governing land use'],
    ],
    review: [
      {
        prompt: 'How do civil rights differ from civil liberties?',
        answer: 'Liberties protect individuals from government; rights ensure equal treatment.',
      },
      {
        prompt: 'Name three services local government provides.',
        answer: 'Schools, police and fire protection, and water or road maintenance.',
      },
    ],
    exercises: [
      'Classify five scenarios as liberty or rights issues.',
      'Attend or read about a local meeting and summarize one decision.',
    ],
  },
  'econ-u1-l1': {
    topics: ['supply and demand', 'equilibrium'],
    applicationTitle: 'Reading a market',
    application:
      'Demand is the relationship between price and quantity buyers want; supply is the same for sellers. A change in price moves along the curve, while a change in income, preferences, or input costs shifts the curve. Equilibrium is where the curves meet, and shifts predict new prices and quantities, which is how economists explain shortages and surpluses.',
    example: {
      prompt: 'A freeze destroys part of the orange crop. What happens in the orange market?',
      steps: ['Supply decreases, shifting the supply curve left.', 'At the old price, quantity demanded exceeds supply.'],
      answer: 'Price rises and quantity sold falls to a new equilibrium.',
    },
    terms: [
      ['equilibrium', 'the price where quantity supplied equals quantity demanded'],
      ['shift in supply', 'a change in supply caused by a factor other than price'],
    ],
    review: [
      {
        prompt: 'What causes movement along a demand curve?',
        answer: 'A change in the good’s own price.',
      },
      {
        prompt: 'What happens when price is above equilibrium?',
        answer: 'A surplus, because quantity supplied exceeds quantity demanded.',
      },
    ],
    exercises: [
      'Draw supply and demand shifts for two scenarios.',
      'Explain a real price change using shifts.',
    ],
  },
  'econ-u2-l1': {
    topics: ['GDP and inflation', 'Federal Reserve'],
    applicationTitle: 'Measuring and steering the economy',
    application:
      'GDP measures output, nominal GDP uses current prices, and real GDP adjusts for inflation so growth is not confused with rising prices. Unemployment has several measures, and the Fed pursues maximum employment and stable prices using interest rates and reserve tools. Raising rates cools inflation by making borrowing costlier.',
    example: {
      prompt: 'Inflation is 6% and the Fed raises rates. Explain the intended effect.',
      steps: [
        'Higher rates raise borrowing costs for households and firms.',
        'Spending and investment slow, reducing demand pressure on prices.',
      ],
      answer: 'Lower demand cools inflation, at the risk of slower growth and higher unemployment.',
    },
    terms: [
      ['real GDP', 'output adjusted for price changes'],
      ['dual mandate', 'the Fed’s goals of maximum employment and stable prices'],
    ],
    review: [
      {
        prompt: 'Why is real GDP preferred to nominal GDP?',
        answer: 'It removes the effect of price changes, showing actual output growth.',
      },
      {
        prompt: 'What is one tool the Fed uses?',
        answer: 'Setting the target federal funds rate, which influences other interest rates.',
      },
    ],
    exercises: [
      'Compute real GDP from nominal GDP and a price index.',
      'Explain one trade-off of raising interest rates.',
    ],
  },
  'econ-u3-l1': {
    topics: ['taxes and trade', 'budget'],
    applicationTitle: 'Who pays and what trade costs',
    application:
      'A progressive tax takes a larger share from higher incomes, a proportional tax takes the same share, and a regressive tax takes a larger share from lower incomes. Sales taxes are often regressive in effect. Trade produces gains from specialization but also adjustment costs for workers and industries that lose competitive advantage.',
    example: {
      prompt: 'Is a 6.25% sales tax progressive, proportional, or regressive?',
      steps: [
        'The same rate applies to purchases.',
        'Lower-income households spend a larger share of income on taxable goods.',
      ],
      answer: 'Regressive in effect, even though the rate is flat.',
    },
    terms: [
      ['regressive tax', 'a tax that takes a larger share of lower incomes'],
      ['budget deficit', 'spending exceeding revenue in a year'],
    ],
    review: [
      {
        prompt: 'How does a progressive tax work?',
        answer: 'Higher incomes pay a larger percentage, as with federal income tax brackets.',
      },
      {
        prompt: 'What is one cost of trade?',
        answer: 'Workers in losing industries face job loss and retraining costs.',
      },
    ],
    exercises: [
      'Classify three taxes and explain each classification.',
      'Compute a household budget deficit from income and spending.',
    ],
  },
};
