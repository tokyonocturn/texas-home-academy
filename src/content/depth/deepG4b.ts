import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Grade 4, science and social studies depth pass. */
export const DEPTH_G4B: Record<string, LessonDepth> = {
  'g4-sci-u1-l1': {
    topics: ['conductor'],
    objectives: [
      'Explain why a circuit must form a closed loop to work.',
      'Classify materials as conductors or insulators and give a use for each.',
    ],
    sections: [
      {
        heading: 'A circuit is a loop',
        paragraphs: [
          'Electric current flows only when there is a complete path from one end of an energy source, through the parts, and back to the other end. A battery pushes electrons through a wire, and a bulb lights when the current passes through its filament. Break the loop anywhere and the current stops, which is exactly what a switch is designed to do. A battery, two wires, and a bulb form the simplest useful circuit you can build.',
          'Materials differ in how easily they let current pass. Conductors, such as copper, aluminum, and salt water, allow charges to move and are used for wires and contacts. Insulators, such as rubber, plastic, glass, and dry wood, resist the flow and are used to cover wires so people can handle them safely. The same element can behave differently in different forms: graphite in a pencil conducts, while diamond, also pure carbon, does not.',
        ],
      },
      {
        heading: 'Using circuits safely',
        paragraphs: [
          'A short circuit happens when current takes a path with almost no resistance, bypassing the device. The current becomes large, wires heat up, and a fire can start. Fuses and circuit breakers protect a home by breaking the loop when current gets too high, which is why a tripped breaker is a warning rather than a nuisance.',
          'Water and electricity are a dangerous combination because water with dissolved minerals conducts. Never handle a plugged-in device with wet hands or place a drink on a power strip. Understanding the loop explains the safety rules: current needs a path to your body and back to the source, so removing the path removes the shock. Never investigate with wall outlets; use only battery-powered circuits, because household current can injure a person in an instant.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A bulb does not light. The battery and bulb are fine, and the wire is cut in one place. Explain why, and how to fix it.',
        steps: [
          'The cut breaks the closed loop, so current cannot return to the battery.',
          'Reconnecting the wire restores the path and the bulb lights.',
        ],
        answer: 'The loop is broken at the cut; joining the wire closes the circuit.',
      },
    ],
    terms: [
      ['electric current', 'the flow of electric charge through a material'],
      ['circuit', 'a complete path that current can travel'],
      ['conductor', 'a material that lets current pass easily'],
      ['insulator', 'a material that resists the flow of current'],
      ['switch', 'a device that opens or closes a circuit'],
      ['short circuit', 'an unintended low-resistance path that bypasses a device'],
    ],
    practice: [
      mc('Which material is a conductor?', ['rubber', 'glass', 'copper', 'dry wood'], 2, 'Copper allows current to flow.'),
      mc('What does a switch do?', ['stores energy', 'opens or closes the circuit', 'increases voltage', 'cools the wire'], 1, 'Opening the switch breaks the loop.'),
      num('How many ends of a battery must be connected for current to flow?', 2, 'Both ends must be part of the loop.'),
    ],
    review: [
      {
        prompt: 'Why is copper used inside wires?',
        answer: 'Copper is an excellent conductor, so it lets current flow with little resistance and wastes less energy as heat.',
      },
      {
        prompt: 'What does a switch do in a circuit?',
        answer: 'It opens or closes the loop, allowing current to flow or stopping it entirely.',
      },
    ],
    exercises: [
      'Test five household materials with a simple circuit and sort them into conductors and insulators.',
      'Draw a circuit with a battery, switch, and bulb, and label the closed and open positions.',
    ],
  },
  'g4-sci-u2-l1': {
    topics: ['erosion'],
    objectives: [
      'Distinguish weathering, erosion, and deposition by what each does.',
      'Explain how water, wind, and ice shape land over time.',
    ],
    sections: [
      {
        heading: 'Breaking, moving, and dropping',
        paragraphs: [
          'Weathering breaks rock into smaller pieces without moving them. Freezing water expands in cracks and splits rock, plant roots widen gaps, and wind-blown sand wears surfaces smooth. Chemical weathering also changes rock: acid in rain slowly dissolves limestone, and oxygen rusts iron-rich minerals.',
          'Erosion moves the broken material, and deposition drops it somewhere new. Water is the most powerful agent in Texas, carrying soil downstream and depositing it where the current slows. Wind builds dunes and strips topsoil from bare fields. Ice in the form of glaciers moves boulders and grinds valleys, though glaciers never covered most of Texas, where moving water dominates the work.',
        ],
      },
      {
        heading: 'Reading the land for evidence',
        paragraphs: [
          'Landforms record which process built them. A delta forms where a river slows as it enters a lake or sea and drops its sediment. A sandbar forms where a current loses speed, and a canyon shows a river cutting downward while the land rises. A pile of sand at the end of a gully is deposition from one storm. Geologists read layers the way historians read documents: each layer records what happened and in what order, and a layer cutting across others marks a later event. Slope and rainfall together determine how quickly a hillside loses soil.',
          'Human choices change the balance. Bare soil erodes far faster than soil held by grass roots, which is why farmers plant cover crops and builders install silt fences. A single heavy rain can move more soil than months of gentle weather, so prevention matters most where slopes are steep and vegetation has been removed. Terracing and contour plowing follow the shape of a slope, slowing water before it gains the speed that carries soil away.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A hillside is cleared of grass before houses are built. Predict what will happen in the next heavy rain and name the processes involved.',
        steps: [
          'Without roots holding soil, water runs off faster and carries particles.',
          'That movement is erosion; the soil piles up downhill as deposition.',
        ],
        answer: 'Erosion will strip the slope and deposit mud at the bottom, often clogging drains.',
      },
    ],
    terms: [
      ['weathering', 'the breakdown of rock into smaller pieces'],
      ['erosion', 'the movement of weathered material by water, wind, or ice'],
      ['deposition', 'the dropping of eroded material in a new place'],
      ['sediment', 'small particles of rock, sand, and soil moved by water or wind'],
      ['delta', 'land built where a river drops sediment as it slows'],
      ['topsoil', 'the dark upper layer of soil that holds nutrients and roots'],
    ],
    practice: [
      mc('Which process moves material?', ['weathering', 'erosion', 'deposition', 'cementation'], 1, 'Erosion transports material.'),
      mc('A delta forms because a river', ['speeds up', 'slows down and drops sediment', 'freezes', 'evaporates'], 1, 'Slower water cannot carry as much sediment.'),
      num('How many agents of erosion are named in this lesson?', 3, 'Water, wind, and ice.'),
    ],
    review: [
      {
        prompt: 'How is weathering different from erosion?',
        answer: 'Weathering breaks rock apart in place, while erosion moves the broken material to another location.',
      },
      {
        prompt: 'Why do fossils form in sedimentary rock?',
        answer: 'Organisms were buried in sediment that later hardened, preserving their shapes in the layers.',
      },
    ],
    exercises: [
      'Find evidence of erosion and deposition near your home and sketch both.',
      'Pour water on bare soil and grass-covered soil and compare the runoff.',
    ],
  },
  'g4-sci-u3-l1': {
    topics: ['structural adaptation'],
    objectives: [
      'Distinguish structural from behavioral adaptations with examples.',
      'Trace energy through a food web and explain what happens when one part is removed.',
    ],
    sections: [
      {
        heading: 'Two kinds of adaptations',
        paragraphs: [
          'An adaptation is a feature or behavior that helps an organism survive in its environment. Structural adaptations are body features: a woodpecker’s strong beak, a cactus’s waxy skin, an armadillo’s bony plates, and a jackrabbit’s long ears that release heat. These features are inherited and develop as the organism grows.',
          'Behavioral adaptations are actions: migrating, hibernating, hunting at night, storing food, or moving to shade at midday. Some behaviors are learned, but adaptations are inherited patterns that helped ancestors survive. Both kinds solve the same problems — finding food, avoiding predators, and coping with temperature — using different tools. A single organism often has both: a beaver’s chisel-like teeth are structural, and building a dam is behavioral.',
        ],
      },
      {
        heading: 'Food webs move energy',
        paragraphs: [
          'A food web connects several food chains in one habitat. Energy starts with producers, which capture sunlight, and moves to consumers when they eat. Most of the energy is used or lost as heat at each step, which is why top predators are fewer and why food chains rarely have more than four or five links.',
          'Decomposers close the loop by breaking down dead organisms and returning nutrients to the soil, where producers reuse them. Removing one part of a web affects many others: if a plant disappears, its consumers must switch food or decline, and the predators above them feel the loss. This is why habitat protection is central to conserving species. Invasive species can disrupt a web quickly because native organisms have no adaptations for them. Keeping habitats connected also matters, because isolated populations cannot move to better conditions when food or water runs out. Camouflage is structural, while staying perfectly still to avoid notice is behavioral.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Classify each as structural or behavioral: a heron’s long legs, a bear sleeping through winter, a lizard basking on a rock.',
        steps: [
          'Decide whether the feature is a body part or an action.',
          'Long legs are a body feature; sleeping through winter and basking are actions.',
        ],
        answer: 'Structural: long legs. Behavioral: hibernation and basking.',
      },
    ],
    terms: [
      ['adaptation', 'a feature or behavior that helps an organism survive'],
      ['structural adaptation', 'a body feature that improves survival'],
      ['behavioral adaptation', 'an inherited action that improves survival'],
      ['producer', 'an organism that makes its own food from sunlight'],
      ['consumer', 'an organism that eats other organisms'],
      ['decomposer', 'an organism that breaks down dead material'],
    ],
    practice: [
      mc('A cactus’s waxy skin is a', ['behavioral adaptation', 'structural adaptation', 'learned habit', 'life cycle'], 1, 'It is a body feature that limits water loss.'),
      mc('Which is a behavioral adaptation?', ['thick fur', 'migration', 'sharp claws', 'camouflage coloring'], 1, 'Migration is an action.'),
      num('How many links do most food chains have at most?', 5, 'Energy loss limits chains to about four or five links.'),
    ],
    review: [
      {
        prompt: 'Why are decomposers necessary in a food web?',
        answer: 'They break down dead material and return nutrients to the soil so producers can use them again.',
      },
      {
        prompt: 'Give one structural and one behavioral adaptation.',
        answer: 'A thick coat is a structural adaptation, and migrating south for winter is a behavioral adaptation.',
      },
    ],
    exercises: [
      'Choose one Texas animal and list two structural and two behavioral adaptations.',
      'Draw a food web with at least six organisms and remove one to predict the effects.',
    ],
  },
  'g4-ss-u1-l1': {
    topics: ['mission'],
    objectives: [
      'Explain why Spain built missions and presidios in Texas.',
      'Sequence the key events of the Texas Revolution and explain the outcome at San Jacinto.',
    ],
    sections: [
      {
        heading: 'Missions, presidios, and Mexican Texas',
        paragraphs: [
          'Spain built missions in Texas during the 1700s to convert Native peoples to Christianity, teach farming and crafts, and hold territory against French claims. Missions such as San José and Concepción near San Antonio were walled communities with fields and churches, guarded by presidios, or forts. Native residents often lived and worked there, sometimes by choice and sometimes under pressure.',
          'Mexico won independence from Spain in 1821, and Texas became part of Mexico. The new government allowed empresarios such as Stephen F. Austin to bring settlers in exchange for land, and thousands arrived from the United States. By 1830 Mexico restricted further immigration, partly because settlers were not learning Spanish or obeying the requirement to become Catholic. Tensions also grew over slavery, which Mexico had abolished, and over whether Texas would be governed from Mexico City or by its own settlers.',
        ],
      },
      {
        heading: 'From protest to independence',
        paragraphs: [
          'When General Santa Anna turned Mexico toward a central government in the 1830s, Texans and Tejanos who favored the 1824 constitution protested. Fighting began in 1835. The Alamo fell in March 1836, and a separate defeat at Goliad hardened resistance. At San Jacinto on April 21, 1836, Sam Houston’s army defeated Santa Anna in about eighteen minutes, and the captured general signed treaties recognizing Texas independence.',
          'The new Republic of Texas lasted from 1836 to 1845, with Houston as its first president. Tejanos, Anglo settlers, enslaved people, and Native peoples experienced the republic very differently: some gained land and offices, while others lost property or were excluded. A full account holds the courage of the revolution and its limits together.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain why the battle of San Jacinto mattered more than its short length suggests.',
        steps: [
          'It captured Santa Anna, the Mexican commander and president.',
          'His signature produced treaties that recognized Texas independence.',
        ],
        answer: 'The battle was brief but ended the war by capturing the enemy’s leader and producing treaties.',
      },
    ],
    terms: [
      ['mission', 'a religious settlement built to convert and teach Native peoples'],
      ['presidio', 'a Spanish fort that protected a mission or settlement'],
      ['empresario', 'an agent who contracted to bring settlers to Mexican Texas'],
      ['Tejano', 'a Texan of Mexican descent'],
      ['republic', 'a government in which people elect representatives'],
      ['treaty', 'a formal agreement between governments'],
    ],
    practice: [
      mc('Why did Spain build missions in Texas?', ['to mine gold', 'to convert Native peoples and hold territory', 'to build railroads', 'to trade with France'], 1, 'Missions served religion and border defense.'),
      mc('Which battle secured Texas independence in 1836?', ['the Alamo', 'Goliad', 'San Jacinto', 'Gonzales'], 2, 'San Jacinto ended the war.'),
      num('How many years did the Republic of Texas last?', 9, 'From 1836 to 1845.'),
    ],
    review: [
      {
        prompt: 'Why did Spain build missions in Texas?',
        answer: 'Spain used missions to convert Native peoples, teach Spanish farming, and secure its claim against France.',
      },
      {
        prompt: 'What battle secured Texas independence in 1836?',
        answer: 'The battle of San Jacinto, where Houston’s army captured Santa Anna and forced treaties recognizing independence.',
      },
    ],
    exercises: [
      'Draw a timeline from 1718 to 1845 with five key events labeled.',
      'Write a paragraph explaining one group’s experience during the revolution, using two facts.',
    ],
  },
  'g4-ss-u2-l1': {
    topics: ['Juneteenth'],
    objectives: [
      'Explain how Texas became a state and why annexation was debated.',
      'Describe what Juneteenth commemorates and why it matters.',
    ],
    sections: [
      {
        heading: 'Annexation and a divided nation',
        paragraphs: [
          'The Republic of Texas struggled with debt and defense, and many Texans wanted to join the United States. Annexation was delayed for years because admitting Texas would shift the balance between free and slave states. Congress approved annexation in 1845, and Texas became the 28th state on December 29, 1845.',
          'Statehood brought a border dispute with Mexico and war in 1846. The Treaty of Guadalupe Hidalgo in 1848 added vast territory to the United States, and the Compromise of 1850 settled Texas’s current boundaries in exchange for giving up claims farther west. Slavery expanded in Texas as cotton farming grew, and enslaved people made up roughly a third of the population by 1860. Cotton planters moved west into Texas with enslaved laborers, tying the state’s economy tightly to the national conflict over slavery. By 1861, roughly one in three Texans was enslaved, and the state’s leaders chose secession to protect that system.',
        ],
      },
      {
        heading: 'Secession, war, and Juneteenth',
        paragraphs: [
          'Texas seceded in February 1861 and joined the Confederacy, fighting to preserve slavery. The Civil War ended in 1865, but enslaved people in Texas did not learn of emancipation immediately. On June 19, 1865, Major General Gordon Granger issued General Order No. 3 in Galveston, announcing that all enslaved people were free.',
          'Juneteenth marks that announcement and the long struggle that followed. Freedom did not bring equality: Black Texans faced violence, denied voting rights, and segregated schools for generations. Juneteenth became a federal holiday in 2021, and it is both a celebration of freedom and a reminder that rights must be protected after they are declared. Texas made Juneteenth an official state holiday in 1980, and communities had been celebrating it since 1866.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Why did annexation take almost a decade to accomplish?',
        steps: [
          'Texas applied for statehood after winning independence in 1836.',
          'Congress delayed because adding a slave state would change the balance of power.',
        ],
        answer: 'Slavery politics delayed annexation until 1845, when Congress finally approved it.',
      },
    ],
    terms: [
      ['annexation', 'the process of adding territory to a country'],
      ['secede', 'to withdraw from a union or country'],
      ['emancipation', 'the act of freeing people from slavery'],
      ['Confederacy', 'the group of states that seceded and fought the Union'],
      ['segregation', 'the enforced separation of groups, especially by race'],
      ['federal holiday', 'a day recognized by the national government'],
    ],
    practice: [
      mc('When did Texas become a state?', ['1836', '1845', '1861', '1865'], 1, 'Annexation was approved in 1845.'),
      mc('General Order No. 3 announced', ['secession', 'emancipation in Texas', 'statehood', 'the end of the Republic'], 1, 'It declared enslaved people free.'),
      num('On what date is Juneteenth observed?', 19, 'June 19, the date of General Order No. 3.'),
    ],
    review: [
      {
        prompt: 'When did Texas become a state, and what number was it?',
        answer: 'Texas became a state on December 29, 1845, and it was the twenty-eighth state admitted.',
      },
      {
        prompt: 'What did General Order No. 3 announce?',
        answer: 'It announced that all enslaved people in Texas were free, which Juneteenth commemorates.',
      },
    ],
    exercises: [
      'Create a timeline from 1845 to 1865 with annexation, secession, war, and Juneteenth.',
      'Explain in one paragraph why freedom declared and freedom practiced differed for Black Texans.',
    ],
  },
  'g4-ss-u3-l1': {
    topics: ['Spindletop'],
    objectives: [
      'Describe the Spindletop discovery and how it changed the Texas economy.',
      'Explain how oil, agriculture, and technology shape Texas today.',
    ],
    sections: [
      {
        heading: 'Boom and bust',
        paragraphs: [
          'On January 10, 1901, the Lucas gusher at Spindletop, near Beaumont, blew oil hundreds of feet into the air. It produced more oil in a day than every other well in the world combined, and it launched the Texas oil industry. Towns such as Beaumont and later Houston grew rapidly as refineries, pipelines, and shipping followed the discovery.',
          'Oil wealth came with instability. Boomtowns filled faster than housing and schools could be built, and when prices fell, jobs vanished. The Texas Railroad Commission began regulating production in the 1930s, and Texas oil helped supply the Allies in both world wars. The commission’s power to limit production gave Texas unusual influence over national oil prices. Pipelines, ports, and refineries built for that effort became permanent parts of the state’s infrastructure. The pattern of boom and bust still shapes towns that depend on one industry. Diversification works like insurance: a state with many industries absorbs the loss of one far better than a town with a single employer.',
        ],
      },
      {
        heading: 'A diversified economy',
        paragraphs: [
          'Texas today produces oil and natural gas but also depends on agriculture, manufacturing, aerospace, health care, technology, and trade. Houston is a center for energy and medicine, Dallas–Fort Worth for finance and logistics, Austin for technology and government, and San Antonio for military and tourism. Ports along the Gulf handle a large share of national shipping.',
          'Growth brings challenges: water supply, traffic, housing costs, and the need for a skilled workforce. Understanding the oil boom helps explain why Texas cities are located where they are and why the state’s economy is both wealthy and vulnerable to price swings. Water is the resource most likely to limit growth, since cities, farms, and industry compete for the same limited supply.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain how a single well at Spindletop changed a region.',
        steps: [
          'The well proved enormous oil reserves existed under the Gulf Coast.',
          'Investment flowed in, building refineries, ports, and cities to move and sell the oil.',
        ],
        answer: 'It created an industry that drew workers and capital, transforming the coast into an energy center.',
      },
    ],
    terms: [
      ['petroleum', 'oil found underground and refined into fuels'],
      ['gusher', 'a well that sprays oil out under pressure'],
      ['refinery', 'a plant that turns crude oil into usable products'],
      ['boomtown', 'a town that grows very fast because of a new industry'],
      ['diversified', 'spread across many industries rather than one'],
      ['logistics', 'the planning and movement of goods and materials'],
    ],
    practice: [
      mc('What happened at Spindletop in 1901?', ['a refinery opened', 'a massive oil gusher was drilled', 'Texas joined the Union', 'a railroad was built'], 1, 'The Lucas gusher started the oil boom.'),
      mc('Which city is a center for energy and medicine?', ['Austin', 'Houston', 'El Paso', 'Lubbock'], 1, 'Houston hosts energy firms and the Texas Medical Center.'),
      num('How many industries are named as part of the modern Texas economy?', 6, 'Energy, agriculture, manufacturing, aerospace, health care, and technology.'),
    ],
    review: [
      {
        prompt: 'What happened at Spindletop in 1901?',
        answer: 'A huge oil gusher was drilled near Beaumont, starting the Texas oil boom and a new industry.',
      },
      {
        prompt: 'Name two industries that now employ many Texans.',
        answer: 'Health care and technology employ large numbers of Texans, along with energy and agriculture.',
      },
    ],
    exercises: [
      'Map five Texas cities and label the industry each is known for.',
      'Interview an adult about how oil prices affect prices they pay, and summarize what you learn.',
    ],
  },
};
