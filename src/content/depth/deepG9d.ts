import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** World Geography and Spanish I (grade 9) depth pass. */
export const DEPTH_G9D: Record<string, LessonDepth> = {
  'geo-u1-l1': {
    topics: ['map projections'],
    objectives: [
      'Read latitude, longitude, scale, and projections and explain what each distorts.',
      'Connect plate boundaries and climate controls to the world’s major biomes.',
    ],
    sections: [
      {
        heading: 'Coordinates, projections, and map reading',
        paragraphs: [
          'Latitude measures distance north or south of the equator in degrees, from 0° at the equator to 90° at each pole, while longitude measures east or west of the prime meridian at Greenwich from 0° to 180°. A coordinate pair locates a place exactly: New Orleans sits near 30°N, 90°W, and Quito at 0°, 78°W sits almost on the equator.',
          'Every flat map distorts a sphere, so projections choose what to preserve. Mercator preserves direction and shape for navigation but exaggerates high-latitude area, making Greenland look larger than South America. Robinson compromises across shape, area, and distance, while an equal-area projection preserves area at the cost of shape.',
          'Scale converts map distance to ground distance: 1:50,000 means one centimeter represents half a kilometer. Topographic maps add contour lines, where closely spaced lines indicate steep slopes and index contours give elevation. GIS layers data such as roads, population, and elevation, and GPS fixes a position from satellites, which is why a phone can route around traffic.',
        ],
      },
      {
        heading: 'Tectonics, climate controls, and biomes',
        paragraphs: [
          'Tectonic plates move a few centimeters per year on convection currents in the mantle. Divergent boundaries such as the Mid-Atlantic Ridge create new seafloor and rift valleys, convergent boundaries build mountains like the Himalaya where India meets Eurasia and produce subduction trenches and volcanoes along the Andes, and transform boundaries such as the San Andreas Fault produce earthquakes.',
          'Climate responds to latitude, altitude, ocean currents, continentality, and topography. The tropics receive direct sunlight year-round, temperature falls about 6.5°C per kilometer of elevation, warm currents such as the Gulf Stream moderate northwestern Europe, and inland places swing between hotter summers and colder winters than coasts.',
          'Biomes are large communities shaped by temperature and precipitation: tropical rainforest in the Amazon, savanna in the Serengeti, desert across the Sahara and Arabian Peninsula, temperate grassland in the Great Plains, taiga across Siberia and Canada, and tundra in the Arctic. Mountain ranges create rain shadows, so the windward slope of the Cascades is wet forest while the leeward side is dry shrubland. Reading a climograph, which plots monthly temperature and precipitation, identifies a biome faster than a list of characteristics: a line that stays high with steady rainfall signals rainforest, while a wide seasonal swing with a dry season signals savanna or steppe. Comparing two climographs side by side is a reliable exam skill, because it forces attention to seasonal patterns rather than to a single average. Annual totals also hide variability, so two places with identical rainfall can support different vegetation if one gets it in a short monsoon and the other gets the same total spread evenly through the year. Seasonal timing, not just annual totals, decides what can grow in a particular region of the world, which is why farmers plant by season rather than by annual average.',
          'Population geography and physical geography meet in places where climate and soils concentrate people, such as river valleys, deltas, and volcanic highlands with rich volcanic soil. Those same advantages expose large populations to floods, earthquakes, and landslides, which is why hazard mapping is part of planning rather than an afterthought.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A city at 25°N on a coast has a warm current offshore. Predict its climate and biome, and explain why a city at the same latitude inland differs.',
        steps: [
          'Latitude 25°N places it in the subtropics with high sun angles.',
          'The warm current and onshore winds add moisture and moderate temperatures.',
          'The inland city lacks maritime moderation, so it has a larger temperature range and less rainfall.',
        ],
        answer: 'The coastal city is humid subtropical; the inland city is drier with greater temperature extremes.',
      },
    ],
    terms: [
      ['latitude', 'distance north or south of the equator in degrees'],
      ['longitude', 'distance east or west of the prime meridian in degrees'],
      ['projection', 'a method for showing the curved earth on a flat map'],
      ['scale', 'the ratio between map distance and ground distance'],
      ['biome', 'a large region defined by climate and its characteristic life'],
      ['rain shadow', 'the dry leeward side of a mountain range'],
    ],
    practice: [
      mc('Which projection preserves direction for navigation but exaggerates polar area?', ['Robinson', 'Mercator', 'equal-area', 'topographic'], 1, 'Mercator is the navigational standard.'),
      num('About how many degrees of latitude separate the equator from the pole?', 90, 'Poles sit at 90°.'),
      mc('The Himalaya formed at a', ['divergent boundary', 'transform boundary', 'convergent boundary', 'hot spot'], 2, 'India collided with Eurasia.'),
    ],
    review: [
      {
        prompt: 'Why does every map projection distort something?',
        answer: 'A sphere cannot be flattened without stretching or tearing, so each projection preserves some properties and distorts others.',
      },
      {
        prompt: 'How does altitude change climate at the same latitude?',
        answer: 'Temperature falls with elevation, so highland areas are cooler and often wetter than lowlands at the same latitude.',
      },
    ],
    exercises: [
      'Plot five world cities from their coordinates and identify each one’s biome.',
      'Compare two projections of the same region and list what each distorts.',
    ],
  },
  'geo-u2-l1': {
    topics: ['population pyramid'],
    objectives: [
      'Interpret population pyramids and describe the demographic transition.',
      'Explain migration patterns using push and pull factors and real examples.',
    ],
    sections: [
      {
        heading: 'Population distribution and pyramids',
        paragraphs: [
          'People cluster where soil, water, and climate support farming or where cities offer work. About half of humanity lives on roughly one percent of the land, and the ecumene, the permanently inhabited portion of the earth, excludes deserts, ice caps, and high mountains. Density is population divided by area, so Egypt’s crowded Nile corridor averages far higher density than the country as a whole.',
          'A population pyramid plots age groups by sex and reveals a society’s history. A wide base and narrow top, as in Niger, indicates high birth rates and rapid growth. A narrow base and broad middle, as in Japan, indicates an aging population with low fertility. A bulge moving up the pyramid records a past baby boom, which is how the United States’ mid-century growth still shows in its age structure.',
          'The demographic transition describes the shift from high birth and death rates to low ones. Death rates fall first with sanitation and medicine, producing rapid growth, and birth rates fall later as education and urban life change family decisions. Stage 4 countries such as Germany grow slowly or shrink, while stage 2 countries in sub-Saharan Africa still grow quickly, which shapes demand for schools, jobs, and housing.',
        ],
      },
      {
        heading: 'Migration and urbanization',
        paragraphs: [
          'Migration is driven by push factors that make a place less livable and pull factors that attract. Conflict, drought, and unemployment push; safety, wages, and family networks pull. The United Nations High Commissioner for Refugees counted over 110 million forcibly displaced people by 2023, most hosted in neighboring countries rather than in wealthy ones.',
          'Migration can be internal or international, voluntary or forced. Rural-to-urban movement dominates in rapidly industrializing countries, which is why Lagos and Dhaka have grown so quickly. Remittances, money sent home by workers abroad, exceed foreign aid for many countries and fund schooling and housing, though they leave families separated.',
          'Cities now hold more than half of humanity, and megacities above ten million include Tokyo, Delhi, and São Paulo. Urbanization brings economies of scale in services but also informal housing, congestion, and air pollution. Planning decisions about transit, water, and zoning determine whether growth improves lives or simply concentrates risk in floodplains and landslide-prone slopes. Housing policy decides whether that growth is safe, since building codes, drainage, and transit determine who bears the risk when a storm arrives. Migration also reshapes distant places through diaspora communities, which is why cities such as Houston and Los Angeles have large populations born elsewhere and why food, language, and religious institutions change with each arrival. Refugees differ from other migrants because they cannot safely return, which is why international law defines their status separately and why host countries bear obligations beyond ordinary immigration policy.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A country’s pyramid has a very wide base and a narrow top. Predict its growth rate, school demand, and likely migration pressure.',
        steps: [
          'A wide base means many children relative to adults.',
          'High fertility implies rapid growth and rising demand for schools.',
          'A large youth cohort entering the labor market creates pressure to migrate for work.',
        ],
        answer: 'Rapid growth, heavy school demand, and strong emigration pressure as young workers seek jobs.',
      },
    ],
    terms: [
      ['population density', 'the number of people per unit of area'],
      ['population pyramid', 'a graph of age groups by sex'],
      ['demographic transition', 'the shift from high to low birth and death rates'],
      ['push factor', 'a condition that drives people away from a place'],
      ['pull factor', 'a condition that attracts people to a place'],
      ['remittance', 'money sent by migrants to family in their home country'],
    ],
    practice: [
      mc('A pyramid with a narrow base indicates', ['rapid growth', 'an aging population', 'high fertility', 'heavy immigration'], 1, 'Few children relative to older adults.'),
      mc('War is an example of a', ['pull factor', 'push factor', 'remittance', 'density measure'], 1, 'It drives people away.'),
      num('How many people must a city have to be a megacity, in millions?', 10, 'Megacities exceed ten million.'),
    ],
    review: [
      {
        prompt: 'What does the shape of a population pyramid tell you?',
        answer: 'It shows the age and sex structure, revealing birth rates, past booms, and whether a population is growing or aging.',
      },
      {
        prompt: 'How do push and pull factors work together in migration?',
        answer: 'Difficulties at home push people out while opportunities and safety elsewhere pull them, and the decision depends on both.',
      },
    ],
    exercises: [
      'Compare pyramids for Niger and Japan and list three policy implications of each.',
      'Interview or research a migrant’s route and identify the push and pull factors involved.',
    ],
  },
  'geo-u3-l1': {
    topics: ['trade'],
    objectives: [
      'Classify resources and explain how they shape economies.',
      'Explain trade patterns, economic blocs, and the function of borders.',
    ],
    sections: [
      {
        heading: 'Resources and economic geography',
        paragraphs: [
          'Resources are renewable, such as solar, wind, and timber, or nonrenewable, such as oil, coal, and minerals. Texas illustrates the mix: the Permian Basin produces more crude oil than any other United States region, while the state also leads the country in wind generation. An economy built on one commodity is vulnerable to price swings, which is why diversification matters.',
          'Agriculture follows patterns explained by distance and perishability. Dairy and vegetables are grown near cities because they spoil quickly, while grain and ranching spread farther out where land is cheaper. Climate and irrigation decide what can grow: cotton and sorghum suit the Texas High Plains, rice needs the coastal prairie, and citrus grows in the Rio Grande Valley.',
          'Economies move through sectors from agriculture to manufacturing to services. The Human Development Index combines income, education, and life expectancy to compare well-being, and it shows that resource wealth does not guarantee high development. Manufacturing often shifts to lower-cost countries, leaving older industrial regions to rebuild around health care, logistics, and technology.',
        ],
      },
      {
        heading: 'Trade, borders, and cultural regions',
        paragraphs: [
          'Trade rests on comparative advantage: a country gains by producing what it makes at lower opportunity cost and trading for the rest. Mexico assembles vehicles and appliances while the United States supplies machinery and grain, and the USMCA governs much of that exchange. Supply chains cross borders repeatedly, so a single tariff or port closure can stall production far away.',
          'Borders mark sovereignty and control movement of goods and people, but they also cut through natural and cultural regions. The Rio Grande is both a river and an international boundary, and the borderlands share Spanish place names, food, and family networks on both sides. Maritime borders matter too: exclusive economic zones extend 200 nautical miles from shore and give states rights to fish and minerals.',
          'Cultural regions overlap political ones. Language, religion, and cuisine spread through migration and empire, which is why Arabic is spoken from Morocco to Iraq and Spanish from Mexico to Argentina. Globalization spreads English and consumer brands, yet local identities persist and sometimes sharpen in response, which is why geography studies both connection and difference. Trade agreements, shipping chokepoints such as the Strait of Hormuz and the Panama Canal, and currency exchange rates all influence what a household pays, which is why economic geography connects a global map to a grocery receipt. Resource wealth can also fund conflict, as diamond and oil revenues have done in several regions, so the same geology that creates opportunity can destabilize a state. Mapping those flows, rather than memorizing a list of exports, shows how a country’s location and geology constrain its options.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A country can grow coffee or cotton on the same land. Coffee earns more per hectare but needs three years before harvest. Recommend a crop and name the trade concept involved.',
        steps: [
          'Compare opportunity cost: cotton gives income sooner but lower returns per hectare.',
          'Coffee requires capital to survive the wait and access to export markets.',
          'The recommendation depends on the farmer’s ability to finance the delay.',
        ],
        answer: 'Coffee for well-financed farms with export access, cotton otherwise; the choice reflects comparative advantage and opportunity cost.',
      },
    ],
    terms: [
      ['renewable resource', 'a resource replenished by natural processes within a human lifetime'],
      ['nonrenewable resource', 'a resource that forms over millions of years and is depleted by use'],
      ['comparative advantage', 'producing a good at lower opportunity cost than a trading partner'],
      ['exclusive economic zone', 'waters within 200 nautical miles where a state controls resources'],
      ['supply chain', 'the sequence of steps that produces and delivers a good'],
      ['Human Development Index', 'a measure combining income, education, and life expectancy'],
    ],
    practice: [
      mc('Which is a renewable resource?', ['crude oil', 'wind', 'coal', 'copper ore'], 1, 'Wind is continually replenished.'),
      mc('Comparative advantage means producing at lower', ['price', 'opportunity cost', 'tax rate', 'distance'], 1, 'Opportunity cost is the test.'),
      num('How many nautical miles does an exclusive economic zone extend?', 200, 'EEZs extend 200 nautical miles.'),
    ],
    review: [
      {
        prompt: 'Why is an economy dependent on one commodity vulnerable?',
        answer: 'A fall in that commodity’s price cuts national income sharply, since there is no other sector to absorb the loss.',
      },
      {
        prompt: 'How do borders both connect and divide regions?',
        answer: 'They control movement and define sovereignty, but trade, migration, and shared culture still link the peoples on either side.',
      },
    ],
    exercises: [
      'Map three crops to Texas regions and explain each location using climate and distance.',
      'Trace one imported product’s supply chain and list the countries involved at each step.',
    ],
  },
  'span1-u1-l1': {
    topics: ['subject pronouns'],
    objectives: [
      'Pronounce Spanish letters and use greetings and introductions appropriately.',
      'Conjugate the verb ser and form questions and negatives with subject pronouns.',
    ],
    sections: [
      {
        heading: 'Sounds, greetings, and introductions',
        paragraphs: [
          'Spanish spelling is regular once the sounds are known. Vowels are short and pure: a as in father, e as in bet, i as in machine, o as in more, u as in rule. The letter h is always silent, ñ sounds like ny in canyon, ll sounds like y in most dialects, and rr is a rolled or trilled sound. Stress usually falls on the next-to-last syllable unless an accent mark or a final consonant moves it.',
          'Greetings change with formality. Use buenos días in the morning, buenas tardes in the afternoon, and buenas noches in the evening or at night. ¿Cómo estás? asks how you are informally, while ¿Cómo está usted? is formal. Answers include estoy bien, estoy mal, and más o menos, and gracias and de nada complete the exchange.',
          'Introductions use llamarse: ¿Cómo te llamas? means what is your name, and me llamo Ana answers it. Mucho gusto means pleased to meet you, and igualmente returns the sentiment. To ask someone’s origin, use ¿De dónde eres? and answer with soy de Texas. Use tú with friends and peers, and usted with adults, teachers, and strangers.',
        ],
      },
      {
        heading: 'Subject pronouns and the verb ser',
        paragraphs: [
          'Subject pronouns replace the person performing the action: yo, tú, él, ella, usted, nosotros, nosotras, ellos, ellas, and ustedes. Spanish often drops the pronoun because the verb ending already shows the subject, so hablo español is complete without yo. Usted and ustedes take third-person verb forms even though they address the listener directly.',
          'Ser means to be and describes identity, origin, nationality, profession, and inherent characteristics. Its present forms are soy, eres, es, somos, sois, and son. Soy estudiante means I am a student, ella es de México means she is from Mexico, and somos hermanos means we are siblings. The pattern is learned by matching each pronoun to its form until it is automatic.',
          'Negation places no directly before the verb: no soy de aquí means I am not from here. Questions can be formed with rising intonation, as in ¿Eres estudiante?, or by inversion, as in ¿Es usted profesor? Written Spanish uses an opening question mark, ¿, which lets a reader know a question is coming, and accent marks distinguish question words such as qué and cómo from their ordinary uses. Practice with a partner makes the formal and informal registers automatic, since choosing usted or tú is a social decision as much as a grammatical one. Listening to short recordings and repeating them aloud builds the intonation that textbook exercises cannot teach, and recording yourself speaking for thirty seconds reveals the sounds that still need work. Reading aloud daily for two minutes builds fluency faster than memorizing isolated words, because it trains the ear along with the eye.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Introduce yourself formally, state your origin, and ask a teacher’s name.',
        steps: [
          'Formal greeting: Buenos días, ¿cómo está usted?',
          'Introduction: Me llamo Kevin. Soy de Texas.',
          'Question with inversion and usted: ¿Cómo se llama usted?',
        ],
        answer: 'Buenos días, ¿cómo está usted? Me llamo Kevin, soy de Texas. ¿Cómo se llama usted?',
      },
    ],
    terms: [
      ['ser', 'to be, used for identity, origin, and inherent traits'],
      ['subject pronoun', 'a word that names who performs the verb action'],
      ['usted', 'the formal you, used with adults and strangers'],
      ['llamarse', 'to be called, used for names'],
      ['tilde', 'the written accent mark that shows stress or distinguishes words'],
      ['negation', 'placing no before the verb to make a sentence negative'],
    ],
    practice: [
      mc('Which form of ser matches yo?', ['eres', 'soy', 'es', 'somos'], 1, 'Yo soy.'),
      mc('¿Cómo te llamas? asks for your', ['age', 'name', 'origin', 'address'], 1, 'It asks your name.'),
      num('How many subject pronouns are listed here, counting singular and plural forms?', 10, 'Yo, tú, él, ella, usted, nosotros, nosotras, ellos, ellas, ustedes.'),
    ],
    review: [
      {
        prompt: 'When do you use tú and when do you use usted?',
        answer: 'Use tú with friends, peers, and children, and usted with adults, teachers, and strangers to show respect.',
      },
      {
        prompt: 'Why can Spanish sentences often omit the subject pronoun?',
        answer: 'Because the verb ending already identifies the subject, so the pronoun is unnecessary unless emphasis is needed.',
      },
    ],
    exercises: [
      'Write a six-line dialogue introducing two people, one formal and one informal.',
      'Conjugate ser for all six pronoun forms and write a sentence with each.',
    ],
  },
  'span1-u2-l1': {
    topics: ['present tense'],
    objectives: [
      'Tell time and give dates using Spanish numbers, days, and months.',
      'Conjugate regular -ar verbs in the present tense and ask questions with them.',
    ],
    sections: [
      {
        heading: 'Numbers, dates, and telling time',
        paragraphs: [
          'Numbers from uno to cien follow predictable patterns. Dieciséis through diecinueve contract into single words, veintiuno through veintinueve do the same, and tens combine with y: treinta y cinco is thirty-five. Days are lunes, martes, miércoles, jueves, viernes, sábado, and domingo, and months are enero through diciembre, all written lowercase in Spanish.',
          'Dates use el plus a number plus de plus the month: el cinco de mayo, el primero de enero for the first. To ask the date, say ¿Qué fecha es hoy? and answer hoy es el doce de octubre. Weekdays and months are not capitalized, and the day comes before the month, which is why 3/4/2026 means April 3 rather than March 4 in Spanish-speaking countries.',
          'Time uses es la for one o’clock and son las for every other hour. Es la una means it is one, son las dos means it is two, y media means half past, y cuarto means quarter past, and menos cuarto means quarter to. Add de la mañana, de la tarde, or de la noche to specify the period, and use a las to say at what time something happens.',
        ],
      },
      {
        heading: 'Regular -ar verbs in the present tense',
        paragraphs: [
          'Regular -ar verbs drop the ending and add the present-tense endings: -o, -as, -a, -amos, -áis, -an. Hablar becomes hablo, hablas, habla, hablamos, habláis, and hablan. The same pattern applies to estudiar, trabajar, necesitar, comprar, and caminar, which is why learning one verb unlocks hundreds.',
          'The present tense covers both ongoing and habitual actions. Estudio español can mean I study Spanish or I am studying Spanish, and the context decides. Frequency words sharpen the meaning: siempre means always, a menudo often, a veces sometimes, and nunca never, with nunca placed before the verb or paired with no.',
          'Questions follow simple patterns. Rising intonation turns a statement into a question, and inversion moves the verb first. ¿Hablas español? asks whether you speak Spanish, ¿Dónde trabajas? asks where you work, and ¿Estudias por la noche? asks whether you study at night. Answer with sí or no and repeat the verb, as in sí, trabajo en una tienda. Time expressions usually follow the verb, as in estudio español por la mañana, and the preposition a with a clock time marks when something happens. Spanish also uses the present tense for near-future plans, so viajo mañana is a normal way to say I travel tomorrow. Spelling changes matter too: verbs ending in -car, -gar, and -zar alter in the yo form to keep the sound, as in buscar, busco; llegar, llego; and empezar, empiezo. A short list of five verbs practiced aloud in all six forms covers most everyday conversation needs. Writing those forms out once by hand fixes the endings more firmly than reading a table, and it exposes the forms that still feel uncertain.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Say that it is 3:45 in the afternoon, then that you study at 8 in the evening and your friend works in the morning.',
        steps: [
          'Use son las for the hour: son las tres.',
          'Quarter to the next hour uses menos cuarto: son las cuatro menos cuarto de la tarde.',
          'Conjugate -ar verbs: estudio a las ocho de la noche, and mi amigo trabaja por la mañana.',
        ],
        answer: 'Son las cuatro menos cuarto de la tarde. Estudio a las ocho de la noche y mi amigo trabaja por la mañana.',
      },
    ],
    terms: [
      ['present tense', 'verb forms describing current, habitual, or general actions'],
      ['infinitive', 'the base form of a verb, such as hablar'],
      ['conjugation', 'changing a verb form to match its subject'],
      ['y cuarto', 'quarter past the hour'],
      ['menos cuarto', 'quarter to the next hour'],
      ['frequency adverb', 'a word such as siempre or nunca that shows how often'],
    ],
    practice: [
      num('What is treinta y cinco in digits?', 35, 'Thirty-five.'),
      mc('Which is correct for 1:00?', ['son las una', 'es la una', 'es las uno', 'son la una'], 1, 'Use es la for one o’clock.'),
      mc('The nosotros form of trabajar is', ['trabajas', 'trabajamos', 'trabajan', 'trabajo'], 1, '-amos for nosotros.'),
    ],
    review: [
      {
        prompt: 'How do you say it is 2:30 and it is 4:45?',
        answer: 'Son las dos y media for 2:30, and son las cinco menos cuarto for 4:45.',
      },
      {
        prompt: 'How are regular -ar verbs conjugated in the present tense?',
        answer: 'Drop -ar and add -o, -as, -a, -amos, -áis, or -an to match the subject.',
      },
    ],
    exercises: [
      'Write your weekly schedule in Spanish with days, times, and three -ar verbs.',
      'Ask and answer five questions using regular -ar verbs and frequency adverbs.',
    ],
  },
};
