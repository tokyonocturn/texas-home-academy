import type { Course } from '../../types';
import { HIGH_WEIGHTS } from '../weights';
import { exam, lesson, mc, num, project, quiz, rubricRow, section, short, teks, unit } from '../builders';

/** Social studies. Alignment: 19 TAC Chapter 113. */

export const worldGeography: Course = {
  id: 'hs-world-geo',
  title: 'World Geography',
  subject: 'social-studies',
  grade: 9,
  credits: 1,
  semesters: 2,
  description:
    'Physical and human geography: plate tectonics, climate, population, migration, culture regions, resources, and globalization. Students use maps, data, and case studies to explain why places differ.',
  essentialQuestions: [
    'How do physical systems shape where and how people live?',
    'Who benefits and who bears the cost of global trade?',
  ],
  teks: [
    teks('19 TAC ch. 113, World Geography', 'Physical processes; human systems; regions; economic and political geography; geographic tools and data.'),
  ],
  weights: HIGH_WEIGHTS,
  units: [
    unit('u1', 'Physical systems', 'Landforms and climate are processes, not scenery.', [
      lesson({
        id: 'geo-u1-l1',
        title: 'Plate tectonics, climate, and biomes',
        minutes: 50,
        objectives: ['Relate plate boundaries to earthquakes, volcanoes, and mountain belts.', 'Explain how latitude and wind patterns shape climate.'],
        sections: [
          section('A moving surface', [
            'Earth’s lithosphere is divided into plates that move on the asthenosphere. At divergent boundaries plates separate, producing mid-ocean ridges and rift valleys. At convergent boundaries one plate subducts, producing trenches, volcanic arcs, and mountain ranges. At transform boundaries plates slide past one another, producing faults such as the San Andreas.',
            'The Ring of Fire around the Pacific marks a belt of subduction zones and frequent earthquakes and volcanoes. Texas is far from a plate boundary, which is why it has relatively few earthquakes, though induced seismicity linked to deep fluid injection has been documented in parts of the state.',
          ]),
          section('Climate', [
            'Climate is long-term average weather. Latitude determines solar angle; prevailing winds and ocean currents redistribute heat; elevation lowers temperature; proximity to water moderates temperature range. Rain shadows form when moist air rises over mountains and drops precipitation on the windward side, leaving the leeward side dry.',
            'Biomes — tropical rainforest, desert, grassland, temperate forest, taiga, tundra — follow climate patterns. Human land use can convert one biome into another, as with deforestation in the Amazon.',
          ]),
        ],
        example: {
          prompt: 'Why is El Paso drier than Houston?',
          steps: ['Houston is near the Gulf, with moist onshore winds.', 'El Paso is inland, in the Chihuahuan Desert, with mountain barriers to moisture.', 'Distance from the Gulf and rain-shadow effects reduce precipitation.'],
          answer: 'Continental position and mountain barriers reduce moisture; Houston receives Gulf humidity.',
        },
        practice: [
          mc('A trench is most likely at a', ['divergent boundary', 'convergent boundary', 'transform boundary', 'hot spot only'], 1, 'Subduction at convergent boundaries creates trenches.'),
          mc('A rain shadow occurs on the', ['windward side', 'leeward side', 'coast', 'equator'], 1, 'Air descends and warms on the leeward side, reducing rainfall.'),
        ],
      }),
    ], quiz('Unit 1 quiz: physical geography', [
      mc('The Ring of Fire is associated with', ['subduction zones', 'divergent boundaries only', 'hot spots only', 'continental interiors'], 0, 'Subduction produces volcanic arcs and earthquakes.'),
      mc('Climate differs from weather because climate is', ['short-term', 'long-term average conditions', 'only temperature', 'only precipitation'], 1, 'Climate is the long-run pattern.'),
      num('Air temperature typically decreases with elevation at about 6.5 °C per kilometer. If sea level is 30 °C, what is it at 2 km?', 17, '30 − 13 = 17 °C.'),
    ]), project({
      title: 'Regional geography profile',
      prompt: 'Profile one world region: physical features, climate, population distribution, and one resource conflict. Use at least three maps or datasets.',
      deliverable: 'A 600-word profile with maps and cited data.',
      guidance: ['Distinguish physical from human features.', 'Cite datasets with dates.', 'Explain, do not just describe.'],
      rubric: [
        rubricRow('Physical geography', 30, [['Excellent', 'Accurate and explanatory.', 30], ['Proficient', 'Accurate but descriptive.', 24], ['Developing', 'Errors.', 15], ['Beginning', 'Missing.', 6]]),
        rubricRow('Human geography', 30, [['Excellent', 'Population and culture explained.', 30], ['Proficient', 'Described.', 24], ['Developing', 'Thin.', 15], ['Beginning', 'Missing.', 6]]),
        rubricRow('Resource conflict', 25, [['Excellent', 'Specific and evidenced.', 25], ['Proficient', 'Reasonable.', 20], ['Developing', 'Unsupported.', 12], ['Beginning', 'None.', 5]]),
        rubricRow('Maps and citations', 15, [['Excellent', 'Three sources with dates.', 15], ['Proficient', 'Two sources.', 12], ['Developing', 'One source.', 8], ['Beginning', 'None.', 3]]),
      ],
    })),
    unit('u2', 'Human systems', 'Populations move for reasons that can be modeled.', [
      lesson({
        id: 'geo-u2-l1',
        title: 'Population pyramids and migration',
        minutes: 50,
        objectives: ['Interpret a population pyramid.', 'Distinguish push and pull factors.'],
        sections: [
          section('Reading a pyramid', [
            'A population pyramid plots age cohorts by sex. A wide base indicates high birth rates and a young population; a narrow base and heavy top indicate an aging population. Rapidly growing populations strain schools and jobs; shrinking populations strain pension systems and labor supply.',
            'The demographic transition model describes a shift from high birth and death rates to low ones as sanitation, medicine, and income improve. Countries move through stages at different speeds, and the model is a generalization, not a law.',
          ]),
          section('Migration', [
            'Push factors drive people away: conflict, persecution, drought, unemployment. Pull factors attract: safety, jobs, family, education. Migrants remit money home, which can exceed foreign aid in some economies. Migration also creates tension over housing, wages, and cultural change, which policy must address.',
          ]),
        ],
        example: {
          prompt: 'A country has a very wide base and a narrow top. Predict two policy challenges.',
          steps: ['Wide base means many children.', 'Future demand for schools and jobs will rise.', 'A narrow top means few elderly now, but the cohort will age.'],
          answer: 'School and job capacity now; pension and health capacity later.',
        },
        practice: [
          mc('A wide base on a population pyramid indicates', ['an aging population', 'high birth rates', 'low birth rates', 'high mortality only'], 1, 'Many young children widen the base.'),
          mc('A pull factor is', ['drought', 'war', 'a job offer', 'persecution'], 2, 'A job attracts migrants.'),
        ],
      }),
    ], quiz('Unit 2 quiz: human geography', [
      mc('The demographic transition describes', ['plate movement', 'changes in birth and death rates over development', 'trade routes', 'climate zones'], 1, 'It models the shift to lower birth and death rates.'),
      mc('Remittances are', ['taxes on imports', 'money migrants send home', 'foreign aid', 'tariffs'], 1, 'They are transfers from migrants to families.'),
      num('A country has 20 million people and a growth rate of 2% per year. By what number does the population grow in one year, in millions?', 0.4, '2% of 20 million is 0.4 million.'),
    ]), project({
      title: 'Migration case study',
      prompt: 'Investigate one migration flow. Explain push and pull factors, measure its scale with data, and evaluate one policy response.',
      deliverable: 'A 500-word case study with a data table and citations.',
      guidance: ['Use official or academic data.', 'Separate causes from consequences.', 'Evaluate, do not advocate.'],
      rubric: [
        rubricRow('Causes', 30, [['Excellent', 'Push and pull factors evidenced.', 30], ['Proficient', 'Clear.', 24], ['Developing', 'Asserted.', 15], ['Beginning', 'None.', 6]]),
        rubricRow('Data', 25, [['Excellent', 'Accurate with dates.', 25], ['Proficient', 'Adequate.', 20], ['Developing', 'Unclear.', 12], ['Beginning', 'Missing.', 5]]),
        rubricRow('Policy evaluation', 30, [['Excellent', 'Costs and benefits weighed.', 30], ['Proficient', 'Reasonable.', 24], ['Developing', 'One-sided.', 15], ['Beginning', 'None.', 6]]),
        rubricRow('Sources', 15, [['Excellent', 'Credible and cited.', 15], ['Proficient', 'Cited.', 12], ['Developing', 'Weak.', 8], ['Beginning', 'None.', 3]]),
      ],
    })),
    unit('u3', 'Economic and political geography', 'Trade creates interdependence and vulnerability.', [
      lesson({
        id: 'geo-u3-l1',
        title: 'Resources, trade, and borders',
        minutes: 50,
        objectives: ['Explain comparative advantage in plain terms.', 'Identify costs of dependence on a single export.'],
        sections: [
          section('Why trade happens', [
            'Countries trade because opportunity costs differ. If one country can produce a good at lower opportunity cost, both can gain by specializing and exchanging, even if one is better at everything. This is comparative advantage, and it explains trade patterns better than absolute productivity.',
            'Trade also creates exposure. A country dependent on one export — oil, cocoa, tourism — is vulnerable to price swings and natural disasters. Diversification reduces that risk.',
          ]),
          section('Borders and governance', [
            'Borders are political lines that rarely match cultural or physical geography. Colonial boundaries in Africa and the Middle East cut across ethnic and linguistic groups, contributing to long-running conflicts. Geopolitics studies how location, resources, and power interact.',
            'Texas illustrates resource geography: oil and gas, wind energy, agriculture, and a long international border with Mexico shape its economy and politics.',
          ]),
        ],
        example: {
          prompt: 'Country A can make 10 shirts or 5 hats per day; Country B can make 4 shirts or 4 hats. Who should make hats?',
          steps: ['A’s opportunity cost of 1 hat is 2 shirts.', 'B’s opportunity cost of 1 hat is 1 shirt.', 'B gives up less, so B has comparative advantage in hats.'],
          answer: 'Country B should specialize in hats.',
        },
        practice: [
          mc('Comparative advantage depends on', ['absolute productivity only', 'opportunity cost', 'tariffs', 'population size'], 1, 'Lower opportunity cost defines comparative advantage.'),
          mc('Dependence on a single export makes an economy', ['more stable', 'vulnerable to price shocks', 'immune to drought', 'self-sufficient'], 1, 'Concentration increases exposure to shocks.'),
        ],
      }),
    ], quiz('Unit 3 quiz: economic geography', [
      mc('A tariff is', ['a tax on imports', 'a subsidy', 'a trade agreement', 'a currency'], 0, 'Tariffs tax imported goods.'),
      mc('Comparative advantage is about', ['who produces most', 'who gives up least', 'who exports most', 'who has the most workers'], 1, 'It is an opportunity-cost comparison.'),
      mc('Colonial borders often cause conflict because they', ['follow rivers exactly', 'cut across ethnic and linguistic groups', 'are too large', 'are unmarked'], 1, 'They rarely reflect existing social geography.'),
    ]), project({
      title: 'Global supply chain map',
      prompt: 'Trace one everyday product from raw materials to your home. Map each stage, identify the countries involved, and analyze one vulnerability in the chain.',
      deliverable: 'A labeled map or diagram plus a 400-word analysis.',
      guidance: ['Cite sources for each stage.', 'Distinguish manufacturing from extraction.', 'Explain one realistic disruption.'],
      rubric: [
        rubricRow('Chain accuracy', 35, [['Excellent', 'Stages and countries accurate.', 35], ['Proficient', 'Mostly accurate.', 28], ['Developing', 'Speculative.', 18], ['Beginning', 'Missing.', 7]]),
        rubricRow('Vulnerability analysis', 30, [['Excellent', 'Specific and evidenced.', 30], ['Proficient', 'Reasonable.', 24], ['Developing', 'Vague.', 15], ['Beginning', 'None.', 6]]),
        rubricRow('Map/diagram', 20, [['Excellent', 'Clear and labeled.', 20], ['Proficient', 'Readable.', 16], ['Developing', 'Unlabeled.', 10], ['Beginning', 'Missing.', 4]]),
        rubricRow('Citations', 15, [['Excellent', 'Credible, complete.', 15], ['Proficient', 'Present.', 12], ['Developing', 'Weak.', 8], ['Beginning', 'None.', 3]]),
      ],
    })),
  ],
  finalExam: exam('World Geography final examination', [
    mc('A trench forms at a', ['divergent boundary', 'convergent boundary', 'transform boundary', 'hot spot'], 1, 'Subduction creates trenches.'),
    mc('A rain shadow is on the', ['windward side', 'leeward side', 'equator', 'coast'], 1, 'Descending air on the leeward side is dry.'),
    mc('Comparative advantage depends on', ['absolute output', 'opportunity cost', 'tariffs', 'population'], 1, 'Lower opportunity cost determines specialization.'),
    num('At 6.5 °C per km, how much colder is 3 km than sea level, in °C?', 19.5, '3 × 6.5 = 19.5 °C.'),
    mc('A wide-based population pyramid indicates', ['aging', 'high birth rates', 'low fertility', 'high migration'], 1, 'Many children widen the base.'),
    short('Explain how physical geography can shape a country’s economy, using one specific example.', 'Model: A landlocked country with few navigable rivers faces higher transport costs, which can make exports less competitive and encourage concentration in minerals; coastal access and ports lower trade costs. The effect is a tendency, not a deterministic law, since institutions and policy also matter.', ['Names a physical feature.', 'Explains a mechanism.', 'Avoids determinism.'], 10),
  ]),
};

export const worldHistory: Course = {
  id: 'hs-world-hist',
  title: 'World History',
  subject: 'social-studies',
  grade: 10,
  credits: 1,
  semesters: 2,
  description:
    'From early civilizations and long-distance trade through revolutions, empire, world war, decolonization, and globalization. Students evaluate sources and explain change over time.',
  essentialQuestions: [
    'What moves ideas, goods, and people across distances?',
    'Who writes history, and what does that leave out?',
  ],
  teks: [
    teks('19 TAC ch. 113, World History', 'Early civilizations; classical and medieval societies; exchange and empire; revolutions; world wars; decolonization; globalization.'),
  ],
  weights: HIGH_WEIGHTS,
  units: [
    unit('u1', 'Exchange and empire', 'Trade routes carried more than goods.', [
      lesson({
        id: 'wh-u1-l1',
        title: 'The Silk Road and the Columbian Exchange',
        minutes: 55,
        objectives: ['Explain how trade networks spread technology and belief.', 'Assess the consequences of the Columbian Exchange.'],
        sections: [
          section('Networks before nations', [
            'The Silk Road was not a single road but a web of routes linking China, Central Asia, India, Persia, and the Mediterranean. Goods moved in relays; so did papermaking, gunpowder, mathematics, Buddhism, and Islam. Disease traveled too, including plague outbreaks in the fourteenth century.',
            'The Mongol conquests of the thirteenth century connected much of Eurasia, making travel safer for a time and enabling figures such as Marco Polo to move between courts. Empires often reduce transaction costs within their borders while imposing violence at the frontier.',
          ]),
          section('The Columbian Exchange', [
            'After 1492, crops, animals, people, and pathogens moved between the Americas and Afro-Eurasia. Maize, potatoes, and tomatoes transformed European and Asian diets; wheat, horses, and cattle reshaped American landscapes. Smallpox and other diseases devastated Indigenous populations that had no prior exposure.',
            'The exchange also drove the transatlantic slave trade and the forced migration of millions of Africans. Any account that celebrates food exchange while omitting disease and coercion is incomplete.',
          ]),
        ],
        example: {
          prompt: 'Evaluate: “The Columbian Exchange benefited everyone.”',
          steps: ['Identify gains: new food crops, increased agricultural output in Eurasia.', 'Identify harms: epidemic disease, slavery, dispossession.', 'Weigh distribution: benefits and harms fell on different groups.', 'Revise the claim to be defensible.'],
          answer: 'The exchange increased food variety and output globally but imposed catastrophic costs on Indigenous Americans and enslaved Africans.',
        },
        practice: [
          mc('The Silk Road primarily moved', ['only silk', 'goods, technologies, and beliefs', 'only armies', 'only people'], 1, 'It was a network for many kinds of exchange.'),
          mc('The Columbian Exchange refers to', ['trade within Asia', 'the transfer of crops, animals, people, and diseases across the Atlantic', 'the Industrial Revolution', 'the Silk Road'], 1, 'It describes post-1492 biological and human exchange.'),
        ],
      }),
    ], quiz('Unit 1 quiz: exchange', [
      mc('Papermaking and gunpowder spread from', ['Europe to China', 'China westward', 'Africa to Asia', 'the Americas'], 1, 'Both technologies originated in China and spread west.'),
      mc('A major demographic effect of the Columbian Exchange was', ['population growth in the Americas from disease', 'devastating epidemics among Indigenous peoples', 'the end of agriculture', 'the elimination of trade'], 1, 'Disease caused catastrophic mortality.'),
      mc('Empires often', ['reduce trade within their borders', 'eliminate all exchange', 'have no effect on trade', 'only tax religion'], 0, 'Common rule and currency can lower transaction costs.'),
    ]), project({
      title: 'Commodity biography',
      prompt: 'Trace one commodity (sugar, silver, cotton, or coffee) from production to consumption across at least three regions, and analyze who bore the costs.',
      deliverable: 'A timeline or map plus a 600-word analysis with citations.',
      guidance: ['Include labor systems.', 'Use dates and specific regions.', 'Distinguish evidence from inference.'],
      rubric: [
        rubricRow('Historical accuracy', 35, [['Excellent', 'Accurate dates, places, and processes.', 35], ['Proficient', 'Minor errors.', 28], ['Developing', 'Vague.', 18], ['Beginning', 'Inaccurate.', 7]]),
        rubricRow('Analysis of costs', 35, [['Excellent', 'Labor and environmental costs weighed.', 35], ['Proficient', 'Some analysis.', 28], ['Developing', 'Description only.', 18], ['Beginning', 'None.', 7]]),
        rubricRow('Sources', 20, [['Excellent', 'Cited and evaluated.', 20], ['Proficient', 'Cited.', 16], ['Developing', 'Weak.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Organization', 10, [['Excellent', 'Clear structure.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
    unit('u2', 'Revolutions and industry', 'New ideas about rights and new machines remade society.', [
      lesson({
        id: 'wh-u2-l1',
        title: 'Political revolution and industrialization',
        minutes: 55,
        objectives: ['Compare the American, French, and Haitian revolutions.', 'Explain how industrialization changed work and cities.'],
        sections: [
          section('Revolutionary ideals and limits', [
            'The American Revolution (1775–1783) produced a constitutional republic that preserved slavery in much of the new nation. The French Revolution (1789) advanced universal male citizenship and then descended into the Terror. The Haitian Revolution (1791–1804) abolished slavery and created the first Black republic, and was met with isolation and debt imposed by France.',
            'All three drew on Enlightenment claims about natural rights and consent. Their different outcomes show that ideas are filtered through economic interests, military power, and existing social hierarchies.',
          ]),
          section('Industry', [
            'The Industrial Revolution began in eighteenth-century Britain with textiles, coal, and steam power, then spread. Factory work reorganized time, separated home from workplace, and drew populations to cities. Early industrial cities suffered from overcrowding and disease, prompting sanitation reform.',
            'Industrialization raised average incomes over the long run while producing inequality, child labor, and organized labor movements. These trade-offs are still debated by historians.',
          ]),
        ],
        example: {
          prompt: 'Why did the Haitian Revolution go further than the American or French revolutions on slavery?',
          steps: ['Saint-Domingue’s economy depended on enslaved labor.', 'Enslaved people formed the majority and revolted in 1791.', 'French revolutionary rhetoric of liberty was turned against slavery itself.', 'Independence in 1804 followed military victory.'],
          answer: 'Enslaved people made the revolution, so abolition was central rather than peripheral.',
        },
        practice: [
          mc('The Haitian Revolution resulted in', ['the restoration of slavery', 'independence and abolition of slavery', 'French annexation', 'a monarchy'], 1, 'Haiti became independent in 1804 and abolished slavery.'),
          mc('Industrialization first began in', ['France', 'Britain', 'the United States', 'Germany'], 1, 'Textiles, coal, and steam power developed first in Britain.'),
        ],
      }),
    ], quiz('Unit 2 quiz: revolutions', [
      mc('The French Revolution began in', ['1776', '1789', '1804', '1848'], 1, 'It began in 1789.'),
      mc('Early industrial cities were characterized by', ['clean water and spacious housing', 'overcrowding and disease', 'declining populations', 'universal suffrage'], 1, 'Rapid urbanization outpaced sanitation.'),
      mc('The American Revolution did not abolish slavery because', ['slavery did not exist', 'political compromise preserved it in much of the country', 'the Constitution banned abolition', 'Britain required it'], 1, 'Compromise left slavery intact in much of the new nation.'),
    ]), project({
      title: 'Revolution comparison',
      prompt: 'Compare two revolutions on goals, participants, and outcomes in a 700-word essay with primary-source evidence.',
      deliverable: 'Essay with at least two primary sources cited.',
      guidance: ['Use documents, not only textbooks.', 'Compare on explicit criteria.', 'Acknowledge limits of your sources.'],
      rubric: [
        rubricRow('Comparison', 35, [['Excellent', 'Clear criteria, sustained comparison.', 35], ['Proficient', 'Comparison present.', 28], ['Developing', 'Separate summaries.', 18], ['Beginning', 'None.', 7]]),
        rubricRow('Evidence', 30, [['Excellent', 'Primary sources used well.', 30], ['Proficient', 'Some evidence.', 24], ['Developing', 'General claims.', 15], ['Beginning', 'None.', 6]]),
        rubricRow('Analysis', 25, [['Excellent', 'Explains why outcomes differed.', 25], ['Proficient', 'Reasonable.', 20], ['Developing', 'Descriptive.', 12], ['Beginning', 'None.', 5]]),
        rubricRow('Writing', 10, [['Excellent', 'Clear and organized.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Unclear.', 5], ['Beginning', 'Disorganized.', 2]]),
      ],
    })),
    unit('u3', 'World war, decolonization, and globalization', 'The twentieth century compressed time and distance.', [
      lesson({
        id: 'wh-u3-l1',
        title: 'Total war, decolonization, and interdependence',
        minutes: 55,
        objectives: ['Explain what made the world wars “total.”', 'Trace decolonization and its legacies.'],
        sections: [
          section('Total war', [
            'The two world wars mobilized entire economies and civilian populations. World War I (1914–1918) introduced industrial slaughter and chemical weapons; World War II (1939–1945) included the Holocaust, strategic bombing, and the only use of nuclear weapons in war. The United Nations was founded in 1945 to prevent another general war.',
            'The Cold War divided the world into blocs led by the United States and the Soviet Union. Proxy wars in Korea, Vietnam, and Afghanistan killed millions without direct superpower combat.',
          ]),
          section('Decolonization and after', [
            'After 1945, independence movements dismantled European empires across Asia and Africa. New states inherited arbitrary borders, economies oriented toward exporting raw materials, and in some cases settler populations. These inheritances shaped postcolonial conflict and development.',
            'Globalization since the 1970s increased trade, travel, and communication. It lifted hundreds of millions out of extreme poverty while concentrating gains unevenly and creating new vulnerabilities, as supply-chain disruptions have shown.',
          ]),
        ],
        example: {
          prompt: 'Why is “the twentieth century was the bloodiest” a claim that requires definition?',
          steps: ['Define measure: absolute deaths, deaths per capita, or wars counted.', 'Compare periods with the same measure.', 'Acknowledge data uncertainty.', 'State a defensible version of the claim.'],
          answer: 'The claim depends on the metric; absolute deaths and per-capita rates give different rankings.',
        },
        practice: [
          mc('The United Nations was founded in', ['1919', '1939', '1945', '1961'], 2, 'It was founded in 1945.'),
          mc('Decolonization after 1945 produced', ['uniformly stable states', 'new states with inherited borders and economies', 'the end of trade', 'a single world government'], 1, 'New states inherited colonial boundaries and economic structures.'),
        ],
      }),
    ], quiz('Unit 3 quiz: the modern world', [
      mc('The Cold War was primarily a rivalry between', ['Britain and France', 'the United States and the Soviet Union', 'China and Japan', 'Germany and Russia'], 1, 'The superpowers led opposing blocs.'),
      mc('A proxy war is fought', ['directly between superpowers', 'by local forces supported by larger powers', 'only at sea', 'without weapons'], 1, 'Local conflicts served superpower competition.'),
      mc('Globalization since the 1970s has', ['reduced trade', 'increased trade and communication', 'ended poverty', 'eliminated inequality'], 1, 'It increased integration, with uneven gains.'),
    ]), project({
      title: 'Decolonization case study',
      prompt: 'Choose one country that gained independence after 1945. Explain the independence movement, the transfer of power, and one legacy visible today.',
      deliverable: 'A 600-word case study with a timeline and citations.',
      guidance: ['Name leaders and dates accurately.', 'Distinguish cause from consequence.', 'Use at least two sources.'],
      rubric: [
        rubricRow('Historical accuracy', 40, [['Excellent', 'Accurate dates, actors, and events.', 40], ['Proficient', 'Minor errors.', 32], ['Developing', 'Vague.', 20], ['Beginning', 'Inaccurate.', 8]]),
        rubricRow('Analysis of legacy', 30, [['Excellent', 'Specific, evidenced legacy.', 30], ['Proficient', 'Reasonable.', 24], ['Developing', 'Asserted.', 15], ['Beginning', 'None.', 6]]),
        rubricRow('Sources', 20, [['Excellent', 'Two credible sources cited.', 20], ['Proficient', 'Cited.', 16], ['Developing', 'Weak.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Organization', 10, [['Excellent', 'Clear.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
  ],
  finalExam: exam('World History final examination', [
    mc('The Columbian Exchange began after', ['1492', '1453', '1517', '1648'], 0, 'It followed Columbus’s 1492 voyage.'),
    mc('The Haitian Revolution resulted in', ['a French colony', 'independence and abolition', 'a monarchy', 'restoration of slavery'], 1, 'Haiti became independent in 1804.'),
    mc('The Industrial Revolution began in', ['Britain', 'France', 'Japan', 'Russia'], 0, 'It began in Britain.'),
    mc('The United Nations was founded in', ['1919', '1945', '1949', '1961'], 1, 'It was founded in 1945.'),
    mc('Decolonization after 1945 created states that often inherited', ['stable institutions', 'arbitrary borders and export economies', 'no borders', 'equal wealth'], 1, 'Colonial boundaries and economies persisted.'),
    short('Explain why the Columbian Exchange cannot be described as simply beneficial.', 'Model: It increased food supply and variety across continents, but it also introduced epidemic diseases that killed a large share of Indigenous Americans, enabled the transatlantic slave trade, and dispossessed communities. Gains and harms fell on different people, so a single verdict obscures the distribution.', ['Names both gains and harms.', 'Notes distributional effects.', 'Avoids anachronism.'], 10),
  ]),
};
