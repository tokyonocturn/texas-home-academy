import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Grade 6, science and social studies depth pass. */
export const DEPTH_G6B: Record<string, LessonDepth> = {
  'g6-sci-u1-l1': {
    topics: ['density'],
    objectives: [
      'Calculate density from mass and volume and use it to identify a material.',
      'Explain how particle arrangement changes between solids, liquids, and gases.',
    ],
    sections: [
      {
        heading: 'Characteristic properties identify matter',
        paragraphs: [
          'A characteristic property stays the same no matter how much of a substance you have. Density, melting point, boiling point, conductivity, magnetism, and solubility are all characteristic. Cutting a sample in half changes its mass and volume but not its density, because both quantities shrink in the same proportion.',
          'Density is mass divided by volume, usually written in grams per cubic centimeter for solids. A metal sample with a mass of 27 grams and a volume of 10 cubic centimeters has a density of 2.7 g/cm³, which matches aluminum. Comparing a measured density with a table of known values is a standard way to identify an unknown material without damaging it.',
        ],
      },
      {
        heading: 'States of matter and particle motion',
        paragraphs: [
          'In a solid, particles are packed closely and vibrate in fixed positions, which is why solids keep their shape. In a liquid, particles are still close but move past one another, so liquids flow and take the shape of a container. In a gas, particles are far apart and move quickly, filling whatever space is available.',
          'Changing state requires energy. Heating adds energy that lets particles break free of their fixed positions, which is why ice melts and water boils. Cooling removes energy, allowing particles to settle back into place. Mass is conserved through every change of state, because the same particles are present before and after. Water is an unusual substance in one respect: its solid form is less dense than its liquid form, so ice floats. Most materials contract as they freeze, but water molecules arrange into an open structure when they crystallize, which is why pipes can burst in a hard freeze and why lakes freeze from the top down, allowing fish to survive beneath the ice. Density also explains floating and sinking: an object less dense than the fluid around it floats, one that is denser sinks, and a submarine changes its density by taking in or expelling water. Volume of an irregular solid is measured by displacement: fill a graduated cylinder, record the level, add the object, and subtract to find how much water it pushed aside. A rock that raises the level from 40 mL to 55 mL has a volume of 15 cm³. Dividing its mass by that volume gives a density that can be compared with known values, which is how geologists identify mineral samples in the field.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A sample has a mass of 27 g and a volume of 10 cm³. Find its density and identify the likely material.',
        steps: [
          'Use density = mass ÷ volume.',
          '27 ÷ 10 = 2.7 g/cm³.',
          'Compare with known densities: aluminum is about 2.7 g/cm³.',
        ],
        answer: '2.7 g/cm³, consistent with aluminum.',
      },
    ],
    terms: [
      ['density', 'mass per unit volume of a substance'],
      ['mass', 'the amount of matter in an object'],
      ['volume', 'the amount of space an object or substance occupies'],
      ['conductivity', 'how readily a material transfers heat or electric current'],
      ['melting point', 'the temperature at which a solid becomes a liquid'],
      ['characteristic property', 'a property that identifies a substance regardless of sample size'],
    ],
    practice: [
      num('What is the density of a 27 g sample with a volume of 10 cm³?', 2.7, 'Divide mass by volume.'),
      mc('Which property does not change when a sample is cut in half?', ['mass', 'volume', 'density', 'weight'], 2, 'Density is characteristic of the material.'),
      num('How many states of matter are described in this lesson?', 3, 'Solid, liquid, and gas.'),
    ],
    review: [
      {
        prompt: 'Why does cutting a sample in half not change its density?',
        answer: 'Both mass and volume are halved, so the ratio of mass to volume stays the same.',
      },
      {
        prompt: 'What does conductivity tell you about a material?',
        answer: 'It tells you how easily the material transfers heat or electric current through itself.',
      },
    ],
    exercises: [
      'Measure the mass and volume of three objects and calculate each density.',
      'Draw particle diagrams for a solid, a liquid, and a gas at the same temperature.',
    ],
  },
  'g6-sci-u2-l1': {
    topics: ['net force'],
    objectives: [
      'Calculate net force from forces acting in the same or opposite directions.',
      'Predict whether an object will stay at rest, move at constant speed, or accelerate.',
    ],
    sections: [
      {
        heading: 'Net force decides motion',
        paragraphs: [
          'Forces are pushes or pulls with both size and direction, measured in newtons. When several forces act on an object, they combine into a net force. Forces in the same direction add, and forces in opposite directions subtract, with the net force pointing toward the larger one. A book pushed right with 12 N while friction pulls left with 5 N has a net force of 7 N to the right.',
          'Balanced forces add to zero, and an object with balanced forces either stays at rest or keeps moving at a constant speed in a straight line. Unbalanced forces change motion: they start an object, stop it, speed it up, slow it down, or turn it. This is Newton’s first law, and it explains why a hockey puck slides so far on ice, where friction is small.',
        ],
      },
      {
        heading: 'Friction, gravity, and prediction',
        paragraphs: [
          'Friction opposes motion between surfaces and depends on the materials and on how hard they press together. Static friction resists starting motion, sliding friction acts while surfaces slide, and air resistance is friction with the air. Friction converts motion into heat, which is why brakes get hot and why a rolling ball eventually stops.',
          'Gravity pulls every object toward Earth, and weight is the measure of that pull in newtons, while mass is the amount of matter in kilograms. A free-body diagram draws each force as an arrow from the object, making the net force easy to see. Predictions follow from the net force: a skydiver accelerates until air resistance equals weight, then falls at a constant terminal velocity. Mass and weight are often confused because everyday language uses them interchangeably, but mass stays the same on the Moon while weight changes with gravity. Net force problems also explain seat belts: a car stopping suddenly does not push a passenger forward so much as remove the force that was keeping the passenger moving with the car, and the belt supplies the force that slows the body safely. Drawing the forces before calculating keeps the direction straight, because a negative answer usually means the motion is opposite to the direction you chose as positive. A tug-of-war is the clearest example: equal pulls in opposite directions produce no motion until one side adds force. The moment the net force becomes nonzero, both teams accelerate toward the stronger side.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A box is pushed right with 12 N while friction acts left with 5 N. Find the net force and predict the motion.',
        steps: [
          'Opposite directions mean subtract: 12 − 5 = 7 N.',
          'The larger force is to the right, so the net force is 7 N right.',
          'An unbalanced force means the box accelerates to the right.',
        ],
        answer: '7 N to the right, so the box speeds up in that direction.',
      },
    ],
    terms: [
      ['force', 'a push or a pull with size and direction'],
      ['net force', 'the combined effect of all forces acting on an object'],
      ['balanced forces', 'forces that add to zero, leaving motion unchanged'],
      ['unbalanced forces', 'forces that do not cancel, changing an object’s motion'],
      ['friction', 'a force that opposes motion between surfaces in contact'],
      ['newton', 'the unit used to measure force'],
    ],
    practice: [
      num('What is the net force when 9 N right and 4 N left act on an object?', 5, '9 − 4 = 5 N to the right.'),
      mc('Unbalanced forces produce', ['no change in motion', 'acceleration', 'constant velocity', 'zero net force'], 1, 'A net force changes the object’s motion.'),
      num('How many newtons are in the net force of two 6 N forces in opposite directions?', 0, 'Equal opposite forces cancel.'),
    ],
    review: [
      {
        prompt: 'What is the net force when forces are balanced?',
        answer: 'The net force is zero, so the object stays at rest or keeps moving at a constant speed.',
      },
      {
        prompt: 'Why does friction matter in predicting motion?',
        answer: 'Friction always opposes motion, so it reduces the net force and eventually stops a moving object.',
      },
    ],
    exercises: [
      'Draw free-body diagrams for five everyday situations and label each force.',
      'Measure how far a toy car rolls on two surfaces and explain the difference using friction.',
    ],
  },
  'g6-sci-u3-l1': {
    topics: ['plate tectonics'],
    objectives: [
      'Describe the three plate boundary types and the landforms each produces.',
      'Order the planets and explain how gravity shapes the solar system.',
    ],
    sections: [
      {
        heading: 'Three ways plates meet',
        paragraphs: [
          'Earth’s outer shell is broken into plates that move slowly on the hotter rock beneath. At a divergent boundary, plates pull apart and magma rises, building mid-ocean ridges and new seafloor. At a convergent boundary, plates collide; where one ocean plate slides beneath another, subduction produces deep trenches, volcanic mountains, and powerful earthquakes.',
          'At a transform boundary, plates slide past each other, producing earthquakes but little volcanic activity, as along California’s San Andreas Fault. Continental collision, a kind of convergence, crumples rock into mountain ranges such as the Himalayas. Convection currents in the mantle supply the energy for this motion, moving only a few centimeters per year.',
          'Evidence for plate tectonics accumulated over a century. Matching fossils and rock layers on continents now separated by oceans suggested they were once joined, and seafloor mapping revealed magnetic stripes recording reversals as new crust formed. Together these lines of evidence support a single explanation for earthquakes, volcanoes, and mountain building.',
        ],
      },
      {
        heading: 'The solar system and gravity',
        paragraphs: [
          'The planets orbit the Sun in this order: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. The four inner planets are small and rocky, while the outer planets are large and mostly gas or ice. The asteroid belt lies between Mars and Jupiter, and moons orbit most planets, with Jupiter and Saturn having dozens each.',
          'Gravity holds the system together. The Sun’s mass keeps the planets in orbit, and each planet’s gravity shapes the paths of its moons. Distances are enormous: sunlight takes about eight minutes to reach Earth but hours to reach Neptune. Scale models that shrink distances also shrink the Sun and planets, which is why a true-to-scale model is mostly empty space. Earth’s own motions belong to this system too. Its rotation produces day and night, its tilted revolution produces the seasons, and its gravity holds the Moon in an orbit that takes about a month. Tides result from the combined pull of the Moon and Sun on Earth’s oceans, which is why high tide arrives roughly twice a day. Comparing Earth with its neighbors helps explain why it supports life: liquid water, a protective atmosphere, and a stable distance from the Sun are not common in the solar system.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'An ocean plate meets a continental plate. Identify the boundary type, the process, and two features that result.',
        steps: [
          'A collision involving an ocean plate is convergent.',
          'The denser ocean plate subducts beneath the continent.',
          'Subduction produces a trench and a volcanic mountain range.',
        ],
        answer: 'Convergent boundary with subduction, producing a trench and volcanic mountains.',
      },
    ],
    terms: [
      ['plate tectonics', 'the theory that Earth’s shell is divided into moving plates'],
      ['divergent boundary', 'a boundary where plates move apart'],
      ['convergent boundary', 'a boundary where plates collide'],
      ['transform boundary', 'a boundary where plates slide past each other'],
      ['subduction', 'the sinking of one plate beneath another'],
      ['solar system', 'the Sun and all objects bound to it by gravity'],
    ],
    practice: [
      mc('Which boundary builds mid-ocean ridges?', ['divergent', 'convergent', 'transform', 'subduction'], 0, 'Rising magma separates plates.'),
      mc('Which planet is fourth from the Sun?', ['Venus', 'Earth', 'Mars', 'Jupiter'], 2, 'Mars follows Earth.'),
      num('How many planets are in the solar system?', 8, 'Mercury through Neptune.'),
    ],
    review: [
      {
        prompt: 'Name the three types of plate boundaries and one feature each makes.',
        answer: 'Divergent boundaries make mid-ocean ridges, convergent boundaries make mountains or trenches, and transform boundaries make faults.',
      },
      {
        prompt: 'List the planets in order from the Sun.',
        answer: 'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.',
      },
    ],
    exercises: [
      'Draw and label the three plate boundaries with arrows showing motion.',
      'Build a scale model of planet distances using a strip of paper and mark each planet.',
    ],
  },
  'g6-ss-u1-l1': {
    topics: ['surplus and specialization'],
    objectives: [
      'Explain how irrigation and surplus supported the first cities.',
      'Describe two features shared by early river-valley civilizations.',
    ],
    sections: [
      {
        heading: 'From farming to cities',
        paragraphs: [
          'The first cities grew in river valleys: Mesopotamia between the Tigris and Euphrates, Egypt along the Nile, the Indus valley, and the Yellow River in China. Rivers supplied water, deposited fertile silt after floods, and offered a route for transport. Farmers learned to irrigate, digging canals and dikes to carry water to fields and to control flooding.',
          'Irrigation produced surplus, more food than farmers needed to survive. Surplus allowed some people to stop farming and specialize as potters, weavers, priests, soldiers, or scribes. Specialization created interdependence: farmers fed craftspeople, and craftspeople supplied tools that made farming more productive. This exchange is the economic foundation of every city since.',
        ],
      },
      {
        heading: 'Government, writing, and law',
        paragraphs: [
          'Large irrigation systems required cooperation, because canals crossed many farms and needed constant maintenance. Managing that work encouraged organized government, which collected taxes in grain and organized labor. Rulers also claimed religious authority, and monumental temples and tombs show how much surplus could be directed toward a single project.',
          'Writing began as record keeping. Mesopotamian scribes pressed reed marks into clay to track grain and livestock, producing cuneiform, and the system grew to record laws, letters, and literature. Hammurabi’s code set out penalties that differed by social class, which reveals both a concern for order and a rigid hierarchy. Writing turned memory into a permanent record, allowing knowledge to accumulate. Geography shaped each civilization differently. Mesopotamia’s rivers flooded unpredictably, so farmers built levees and canals and credited their gods with control over the water; Egypt’s Nile flooded on a predictable schedule, which supported a calendar and a strong central state. The Indus cities had planned streets and drainage systems that suggest organized municipal government. Comparing these adaptations shows that similar problems produced different solutions, and that environment influenced politics as much as farming. Law codes reveal how these societies organized power. Hammurabi’s code, carved on a stone stele around 1750 BCE, lists penalties that vary by class: harming a noble cost more than harming a commoner, and enslaved people had fewer protections. The code also set wages, prices, and rules for irrigation, which shows a government trying to regulate an economy that depended on shared water. Reading it as evidence rather than as a model of justice shows what a society enforced and whom it protected.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain the chain from irrigation to a scribe’s job.',
        steps: [
          'Irrigation raises crop yields beyond what farmers need.',
          'Surplus feeds people who do not farm.',
          'Record keeping for stored grain creates the scribe’s role.',
        ],
        answer: 'Irrigation creates surplus, surplus supports specialists, and storage requires record keepers.',
      },
    ],
    terms: [
      ['surplus', 'more food or goods than are needed to survive'],
      ['irrigation', 'carrying water to fields through canals and ditches'],
      ['specialization', 'focusing on one kind of work'],
      ['civilization', 'a complex society with cities, government, and writing'],
      ['cuneiform', 'the wedge-shaped writing system of ancient Mesopotamia'],
      ['city-state', 'an independent city and the land around it'],
    ],
    practice: [
      mc('Why does surplus lead to specialization?', ['it makes people lazy', 'it frees some people from farming', 'it lowers prices', 'it ends trade'], 1, 'Surplus food supports non-farmers.'),
      mc('Which river valley is associated with cuneiform?', ['the Nile', 'the Indus', 'Mesopotamia', 'the Yellow River'], 2, 'Cuneiform developed in Mesopotamia.'),
      num('How many river-valley civilizations are named in this lesson?', 4, 'Mesopotamia, Egypt, the Indus valley, and China.'),
    ],
    review: [
      {
        prompt: 'Why does surplus lead to specialization?',
        answer: 'When farmers produce more food than they need, others can stop farming and develop skilled trades.',
      },
      {
        prompt: 'Name two features shared by early civilizations.',
        answer: 'They built cities and organized governments, and they developed writing to keep records.',
      },
    ],
    exercises: [
      'Draw a diagram showing how surplus, specialization, and trade depend on one another.',
      'Compare two river-valley civilizations in a chart of geography, writing, and government.',
    ],
  },
  'g6-ss-u2-l1': {
    topics: ['Silk Roads'],
    objectives: [
      'Explain how empires used roads, law, and currency to govern large territories.',
      'Trace how goods, technologies, and beliefs moved along trade routes.',
    ],
    sections: [
      {
        heading: 'Empires build systems',
        paragraphs: [
          'Classical empires governed vast territories by building infrastructure and standardizing rules. Rome paved roads and codified law; the Han dynasty built canals and a bureaucracy staffed by examined officials; Persia created a postal road and a common currency. Roads moved armies and taxes, but they also moved merchants, ideas, and diseases.',
          'Empires relied on both consent and force. Citizenship, legal protection, and trade opportunities persuaded some subjects to cooperate, while garrisons and taxation suppressed resistance. The same roads that carried grain to a capital carried rebellion to it, which is why imperial control depended on speed of communication as much as on military strength.',
        ],
      },
      {
        heading: 'The Silk Roads and the spread of belief',
        paragraphs: [
          'The Silk Roads were a network of overland and sea routes linking China, Central Asia, India, Persia, Arabia, and the Mediterranean. Few merchants traveled the whole distance; goods passed through many hands, so silk reached Rome while the trader who carried it knew only one segment. Caravan cities such as Samarkand grew rich on the traffic.',
          'Goods were only part of the exchange. Papermaking, gunpowder, and printing moved west, while Buddhism traveled from India into China and Central Asia, Christianity spread across the Roman world, and Islam expanded along trade and pilgrimage routes. Ideas changed as they moved, blending with local beliefs, which is why the same religion looked different in each region it reached. Trade also carried unintended cargo. The plague that struck the Mediterranean in the sixth century and the Black Death in the fourteenth both moved along trade and army routes, killing a large share of affected populations and disrupting labor systems. Empires responded by fortifying borders and restricting movement, which slowed but did not stop the traffic. Studying the Silk Roads therefore means studying connection itself: the same routes that enriched cities also carried risk, and no participant could take the benefits without the exposure. Comparing Rome and Han China shows how differently two large empires solved similar problems. Rome granted citizenship widely and relied on local elites to govern provinces, while Han China built a centralized bureaucracy chosen through examinations and a state ideology. Both maintained roads, standardized weights, and taxed trade, and both faced the same limit: the cost of defending long frontiers eventually exceeded what the interior could supply. Their solutions shaped later governments in Europe and East Asia for centuries.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain how Buddhism could reach China without a single traveler making the whole journey.',
        steps: [
          'Merchants and monks moved along segments of the route.',
          'Monasteries and caravan stops passed teachings onward.',
          'Local communities adopted and adapted the ideas.',
        ],
        answer: 'Beliefs traveled in stages through many hands, changing slightly at each stop.',
      },
    ],
    terms: [
      ['empire', 'a state that governs many peoples and territories'],
      ['Silk Roads', 'the trade network linking Asia, the Middle East, and Europe'],
      ['diffusion', 'the spread of ideas, goods, or practices between cultures'],
      ['bureaucracy', 'a system of officials who carry out government work'],
      ['monotheism', 'belief in a single god'],
      ['caravan', 'a group of travelers and animals moving together for safety'],
    ],
    practice: [
      mc('Which empire built a road network and codified law?', ['Rome', 'the Mongols', 'the Aztecs', 'the Inca'], 0, 'Roman roads and law are well documented.'),
      mc('What traveled on the Silk Roads besides goods?', ['only silk', 'technologies and religions', 'nothing else', 'only soldiers'], 1, 'Ideas and technologies moved with trade.'),
      num('How many belief systems are named as spreading along trade routes here?', 3, 'Buddhism, Christianity, and Islam.'),
    ],
    review: [
      {
        prompt: 'Give one reason empires built roads.',
        answer: 'Roads moved armies, tax grain, and messengers quickly, which helped govern and defend a large territory.',
      },
      {
        prompt: 'What traveled on the Silk Roads besides goods?',
        answer: 'Technologies, religions, and diseases traveled along the routes, changing the societies they reached.',
      },
    ],
    exercises: [
      'Map the Silk Roads and label four goods and two ideas that moved along them.',
      'Write a traveler’s journal entry describing one caravan city and its markets.',
    ],
  },
  'g6-ss-u3-l1': {
    topics: ['Columbian Exchange'],
    objectives: [
      'Explain the motives and technologies that enabled European exploration.',
      'Describe the biological and economic consequences of the Columbian Exchange.',
    ],
    sections: [
      {
        heading: 'Contact and consequence',
        paragraphs: [
          'European exploration grew from a search for trade routes to Asian spices and silk, combined with competition among states and a desire to spread Christianity. New technologies made long voyages possible: the caravel could sail against the wind, the magnetic compass and astrolabe aided navigation, and improved maps accumulated knowledge from Arab and Asian sailors.',
          'Portuguese voyages mapped the African coast before Columbus crossed the Atlantic in 1492 under Spanish sponsorship. Spanish conquistadors then conquered the Aztec and Inca empires, aided by steel weapons, horses, and above all by epidemic disease. The encounter was not a meeting of equals: it began a period of conquest, extraction, and forced labor.',
        ],
      },
      {
        heading: 'The Columbian Exchange',
        paragraphs: [
          'The Columbian Exchange was the transfer of plants, animals, people, and diseases between the hemispheres. Maize, potatoes, tomatoes, and peppers moved to Europe, Africa, and Asia, while wheat, rice, horses, cattle, and pigs moved to the Americas. The potato eventually became a staple in Europe, and the horse transformed life for many Native nations of the Plains.',
          'Diseases traveled faster than goods. Smallpox, measles, and influenza killed Native peoples who had no immunity, reducing some populations by ninety percent or more and destroying the societies that sustained them. The exchange also fed the Atlantic slave trade, as European planters in the Americas demanded labor for sugar, tobacco, and cotton. The result was a globally connected economy built on conquest and bondage. Historians debate how to frame the exchange as a whole. Some emphasize the long-term rise in global food supply and population made possible by New World crops; others stress that the benefits were distributed by force and that the costs fell overwhelmingly on Native peoples and enslaved Africans. Both are describing the same events from different vantage points, and a full account holds them together: the exchange remade the world’s farms and diets while destroying societies and enriching colonizers. Naming who gained and who paid is not a modern imposition; the documents of the period record it plainly. Epidemics also arrived in waves rather than as a single event. Smallpox reached Tenochtitlan in 1520, killing a large share of the population including the emperor, and later outbreaks continued for generations. Because the loss of adults disrupted farming, tribute, and child-rearing, the demographic collapse weakened societies in ways that outlasted the first epidemic. Historians estimate that the population of the Americas fell by as much as ninety percent within a century of contact, a catastrophe with few parallels in world history.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain why disease spread so quickly after contact, and name one consequence.',
        steps: [
          'Native populations had no prior exposure, so they had no immunity.',
          'Dense settlements and travel routes helped infections spread.',
          'Mass death weakened societies and made conquest easier.',
        ],
        answer: 'No immunity plus dense populations led to devastating epidemics that aided European conquest.',
      },
    ],
    terms: [
      ['Columbian Exchange', 'the transfer of plants, animals, people, and diseases between hemispheres'],
      ['caravel', 'a small, fast sailing ship able to sail against the wind'],
      ['conquistador', 'a Spanish soldier who led conquests in the Americas'],
      ['immunity', 'the body’s ability to resist a disease it has encountered'],
      ['encomienda', 'a Spanish system that forced Native labor for settlers'],
      ['Atlantic slave trade', 'the forced transport of enslaved Africans to the Americas'],
    ],
    practice: [
      mc('Which food moved from the Americas to Europe?', ['wheat', 'maize', 'rice', 'cattle'], 1, 'Maize originated in the Americas.'),
      mc('The greatest cause of Native population loss after contact was', ['war', 'disease', 'famine', 'forced migration'], 1, 'Epidemics killed far more people than combat.'),
      num('How many foods are named as moving to the Americas in this lesson?', 5, 'Wheat, rice, horses, cattle, and pigs.'),
    ],
    review: [
      {
        prompt: 'Name two foods that moved from the Americas to Europe.',
        answer: 'Maize and potatoes moved from the Americas to Europe, along with tomatoes and peppers.',
      },
      {
        prompt: 'Why did disease spread so quickly after contact?',
        answer: 'Native peoples had no prior exposure and therefore no immunity to European diseases.',
      },
    ],
    exercises: [
      'Draw a two-column chart of Columbian Exchange items and label the direction of each.',
      'Write a paragraph explaining how the exchange changed one region’s farming or diet.',
    ],
  },
};
