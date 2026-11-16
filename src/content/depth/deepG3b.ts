import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Grade 3, science and social studies depth pass. */
export const DEPTH_G3B: Record<string, LessonDepth> = {
  'g3-sci-u1-l1': {
    topics: ['mixture'],
    objectives: [
      'Distinguish a mixture from a solution using observable evidence.',
      'Choose a method to separate a given mixture and explain why it works.',
    ],
    sections: [
      {
        heading: 'Mixtures keep their ingredients',
        paragraphs: [
          'A mixture is two or more materials combined without forming a new substance. Each material keeps its own properties, which is why you can often see the parts. Trail mix, sand mixed with iron filings, and a salad are mixtures. Because no new substance forms, a mixture can usually be separated by physical means.',
          'The method you choose depends on a property that differs between the ingredients. A magnet removes iron from sand because iron is magnetic. A filter traps solid bits while water passes through. Evaporation removes water and leaves dissolved solid behind. Hand sorting works when the pieces are large enough to pick apart. A mixture as a whole can have properties none of its parts had, such as a color that is a blend of two ingredients.',
        ],
      },
      {
        heading: 'Solutions look like one material',
        paragraphs: [
          'A solution is a mixture in which one material spreads evenly through another, so you cannot see the separate parts. The material that dissolves is the solute, and the one that does the dissolving is the solvent; in salt water, salt is the solute and water is the solvent. Dissolving is a physical change, because the salt is still salt and can be recovered by evaporating the water.',
          'Temperature and stirring change how fast a solute dissolves, but they do not change how much can dissolve forever. A solution that can hold no more solute is saturated, and extra solute settles at the bottom. Stirring adds motion but not material, so it changes how fast a solute dissolves rather than how much can dissolve. Because the solute is still present, the mass of a solution equals the mass of its parts, even though the solid seems to disappear. A suspension differs from a solution because its particles are large enough to settle out, as muddy water does when it sits still.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Separate a mixture of sand, salt, and iron filings, using one property at a time.',
        steps: [
          'Use a magnet to pull out the iron, because iron is magnetic.',
          'Stir the rest into water so the salt dissolves, then pour it through a filter to catch the sand.',
          'Evaporate the water to recover the salt.',
        ],
        answer: 'Magnet for iron, filter for sand, evaporation for salt.',
      },
    ],
    terms: [
      ['mixture', 'materials combined without forming a new substance'],
      ['solution', 'a mixture in which one material spreads evenly through another'],
      ['solute', 'the material that dissolves in a solution'],
      ['solvent', 'the material that does the dissolving'],
      ['dissolve', 'to spread evenly through a liquid until no solid is visible'],
      ['evaporate', 'to change from liquid to gas, leaving dissolved solids behind'],
    ],
    practice: [
      mc('Which is a solution?', ['trail mix', 'salt water', 'sand and iron', 'a salad'], 1, 'Salt spreads evenly and cannot be seen.'),
      mc('Which tool separates iron filings from sand?', ['filter', 'magnet', 'strainer', 'freezer'], 1, 'Iron is magnetic.'),
      num('How many separation methods are named in this lesson?', 4, 'Magnet, filter, evaporation, hand sorting.'),
    ],
    review: [
      {
        prompt: 'How can you tell a solution from a mixture you can see?',
        answer: 'A solution looks like one material because the solute is spread evenly and no separate pieces are visible.',
      },
      {
        prompt: 'What property makes it possible to separate iron from sand?',
        answer: 'Iron is magnetic while sand is not, so a magnet attracts only the iron.',
      },
    ],
    exercises: [
      'Mix three safe kitchen materials, then separate them using two different methods.',
      'Dissolve sugar in warm and cold water and record which dissolves faster.',
    ],
  },
  'g3-sci-u2-l1': {
    topics: ['simple machine'],
    objectives: [
      'Name five forms of energy and give an example of each.',
      'Explain how a simple machine changes the force needed to do work.',
    ],
    sections: [
      {
        heading: 'Energy takes different forms',
        paragraphs: [
          'Energy is the ability to cause change or do work. It appears as motion, light, sound, heat, and electricity. A moving bicycle has mechanical energy, a lamp gives off light and heat, a drum produces sound, and a battery stores chemical energy that becomes electrical energy in a circuit.',
          'Energy can be stored or in use. Stored energy is potential: a ball held above the ground, a stretched rubber band, or food before it is eaten. Energy of motion is kinetic. When the ball drops, potential energy becomes kinetic, and when it lands, some of that energy becomes sound and heat, which is why the bounce is never quite as high. Energy is never used up when it seems to vanish; it spreads into the surroundings, often as low-level heat that is hard to capture.',
        ],
      },
      {
        heading: 'Simple machines redirect force',
        paragraphs: [
          'A simple machine makes work easier by changing the size or direction of a force. A ramp, or inclined plane, lets you push a load up a slope with less force than lifting it straight up, but you push over a longer distance. A lever pivots on a fulcrum, and moving the fulcrum changes how much force is needed: a load placed close to the fulcrum takes less effort to lift than one placed far away.',
          'A pulley changes the direction of a pull, a wheel and axle reduces friction, and a wedge splits material apart. No simple machine creates energy: the work you put in is always at least the work you get out, and friction wastes some as heat. That trade — less force over more distance — is the central idea behind every machine. Machines also combine: a bicycle uses wheels, axles, levers, and pulleys, each handling part of the job.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A worker loads a heavy box into a truck using a ramp instead of lifting it. What changed?',
        steps: [
          'The ramp reduces the force needed at any moment.',
          'The box travels a longer distance along the slope instead of straight up.',
        ],
        answer: 'Force decreased and distance increased; the total work did not disappear.',
      },
    ],
    terms: [
      ['energy', 'the ability to cause change or do work'],
      ['potential energy', 'stored energy waiting to be used'],
      ['kinetic energy', 'the energy of motion'],
      ['simple machine', 'a basic device that changes the size or direction of a force'],
      ['lever', 'a bar that pivots on a fulcrum to lift or move a load'],
      ['friction', 'a force that opposes motion and wastes some energy as heat'],
    ],
    practice: [
      mc('A stretched rubber band has', ['kinetic energy', 'potential energy', 'sound energy', 'electrical energy'], 1, 'Stored energy is potential.'),
      mc('What does a pulley change?', ['the amount of energy', 'the direction of a pull', 'the mass of a load', 'gravity'], 1, 'A pulley redirects the force.'),
      num('How many forms of energy are named in this lesson?', 5, 'Motion, light, sound, heat, and electricity.'),
    ],
    review: [
      {
        prompt: 'Name three forms of energy and one example of each.',
        answer: 'Light from a lamp, sound from a drum, and heat from a stove are three forms of energy.',
      },
      {
        prompt: 'Does a machine create energy?',
        answer: 'No, a machine only redirects or spreads out energy, and friction wastes some as heat.',
      },
    ],
    exercises: [
      'Find five simple machines at home and label the type of each.',
      'Build a ramp at two heights and compare the force needed to move a toy car up each.',
    ],
  },
  'g3-sci-u3-l1': {
    topics: ['water cycle'],
    objectives: [
      'Describe how weathering, erosion, and deposition change land over time.',
      'Compare a slow earth change with a rapid one and their effects on people.',
    ],
    sections: [
      {
        heading: 'Rocks, soil, and slow change',
        paragraphs: [
          'Rocks form in three ways. Igneous rock cools from melted rock, sedimentary rock forms from layers of sand and mud pressed together, and metamorphic rock forms when heat and pressure change existing rock. Sedimentary layers often hold fossils, because organisms were buried in the mud before it hardened.',
          'Soil forms slowly as rock breaks down and dead plants decay. Topsoil, the dark upper layer, contains humus, the decayed material that holds water and nutrients. Weathering breaks rock into smaller pieces, erosion moves those pieces, and deposition drops them somewhere new. A river carving a canyon over millions of years shows all three at work. Plants and burrowing animals mix humus into soil, which is why forest soil is darker and richer than the soil on a bare slope.',
        ],
      },
      {
        heading: 'The water cycle and rapid changes',
        paragraphs: [
          'Water moves in a cycle: the sun evaporates water from oceans and lakes, the vapor rises and cools, condensation forms clouds, and precipitation falls as rain, snow, or hail. Water then collects in rivers, lakes, and underground, and the cycle repeats. A watershed is all the land whose water drains into one river system, which is why pollution upstream affects people downstream. Water also shapes land underground, dissolving limestone to form caves and sinkholes.',
          'Some earth changes happen fast. Earthquakes shift the ground in seconds, volcanoes build or destroy land in days, landslides move hillsides, and floods reshape riverbanks. Rapid changes are dangerous because people have little warning, which is why building codes, evacuation plans, and weather alerts matter. People can make rapid changes worse: paving land increases runoff, and clearing a slope can trigger a landslide. Slow changes are easier to plan for but harder to notice day to day.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Classify each change as slow or rapid and explain: a river widening its banks over centuries, a volcano erupting, a landslide after heavy rain.',
        steps: [
          'River widening happens over centuries, so it is slow.',
          'An eruption and a landslide both happen within hours or days, so they are rapid.',
        ],
        answer: 'River widening is slow; the eruption and landslide are rapid.',
      },
    ],
    terms: [
      ['weathering', 'the breaking down of rock into smaller pieces'],
      ['erosion', 'the movement of weathered material by water, wind, or ice'],
      ['sedimentary rock', 'rock formed from layers of pressed sediment'],
      ['humus', 'decayed plant and animal material in soil'],
      ['evaporation', 'the change of liquid water into water vapor'],
      ['condensation', 'the change of water vapor into liquid droplets'],
      ['watershed', 'all the land that drains into one river system'],
    ],
    practice: [
      mc('Which process moves weathered rock to a new place?', ['weathering', 'erosion', 'condensation', 'deposition only'], 1, 'Erosion transports material.'),
      mc('Fossils are most often found in', ['igneous rock', 'sedimentary rock', 'metamorphic rock', 'topsoil'], 1, 'Layers of sediment buried organisms.'),
      num('How many stages of the water cycle are named here?', 4, 'Evaporation, condensation, precipitation, and collection.'),
    ],
    review: [
      {
        prompt: 'Where are fossils most often found, and why?',
        answer: 'In sedimentary rock, because organisms were buried in sediment that later hardened into layers.',
      },
      {
        prompt: 'How does a volcano change land quickly?',
        answer: 'Lava flows and ash can build new land or bury existing land within days, unlike slow weathering.',
      },
    ],
    exercises: [
      'Draw and label the water cycle, including a watershed near your home.',
      'Compare a photo of a local creek after heavy rain with one taken in dry weather.',
    ],
  },
  'g3-ss-u1-l1': {
    topics: ['local government'],
    objectives: [
      'Compare rural, urban, and suburban communities by land use and services.',
      'Match a public issue to the level of government that handles it.',
    ],
    sections: [
      {
        heading: 'Three kinds of communities',
        paragraphs: [
          'An urban community is a city, densely settled with tall buildings, heavy traffic, and many specialized jobs. A suburban community sits near a city, with houses, yards, and shopping centers, and many residents commute to work. A rural community is spread out, with farms, ranches, and small towns where people often travel long distances for services. Urban areas cover a small share of the land but hold most of the population, which is why census counts shape public spending.',
          'Each kind of community involves trade-offs. Cities offer jobs, hospitals, and transit but cost more and feel crowded. Suburbs offer space and schools but depend on cars. Rural areas offer land and quiet but may lack fast internet or nearby doctors. People choose where to live based on work, cost, family, and what they value. Many places are mixtures: a single county can contain a city, its suburbs, and farmland within a few miles.',
        ],
      },
      {
        heading: 'Who decides what',
        paragraphs: [
          'Government in the United States has three levels. Local government — city and county — handles streets, water, police and fire, parks, and zoning. State government runs highways, public universities, licensing, and sets standards for schools. The federal government handles defense, treaties, currency, immigration, and mail.',
          'The levels share work: all three collect taxes, maintain roads, and respond to disasters. Knowing which level is responsible saves time when something needs fixing. A pothole is a city issue, a dangerous highway interchange is a state issue, and a passport is a federal issue. Citizens influence each level by voting, attending meetings, and contacting representatives. Because state and federal money often pays for local projects, a single road may be funded by more than one level of government.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A neighborhood wants a new crosswalk near a school. Which level of government decides, and how would residents make their case?',
        steps: [
          'Crosswalks and local streets are managed by the city or town.',
          'Residents attend a city council meeting or contact their council member.',
        ],
        answer: 'The city decides; residents make their case at a council meeting.',
      },
    ],
    terms: [
      ['urban', 'densely settled, as in a city'],
      ['suburban', 'a residential area near a city'],
      ['rural', 'spread out, with farms and small towns'],
      ['local government', 'the government of a city, town, or county'],
      ['state government', 'the government of a state, handling highways and licensing'],
      ['federal government', 'the national government of the United States'],
    ],
    practice: [
      mc('Which level of government issues passports?', ['city', 'county', 'state', 'federal'], 3, 'Passports are federal documents.'),
      mc('A community with farms and long distances between homes is', ['urban', 'suburban', 'rural', 'metropolitan'], 2, 'Rural areas are spread out.'),
      num('How many levels of government does this lesson describe?', 3, 'Local, state, and federal.'),
    ],
    review: [
      {
        prompt: 'Give one job of local government and one of state government.',
        answer: 'Local government maintains streets and police, while state government builds highways and licenses drivers.',
      },
      {
        prompt: 'How does a suburb differ from a rural area?',
        answer: 'A suburb is a residential area close to a city, while a rural area is spread out with farms and few services.',
      },
    ],
    exercises: [
      'List three services in your community and name the level of government for each.',
      'Write a short letter to a local official about one improvement you would like.',
    ],
  },
  'g3-ss-u2-l1': {
    topics: ['adaptation'],
    objectives: [
      'Name the four natural regions of Texas and describe one environment in each.',
      'Explain how two Native peoples of Texas adapted to their environments.',
    ],
    sections: [
      {
        heading: 'Land shapes life',
        paragraphs: [
          'Texas has four natural regions. The Gulf Coastal Plain is low and wet, with rich soil and coastline. The North Central Plains have rolling hills, farmland, and rivers. The Great Plains are high, windy, and grassy, good for grazing. The Mountains and Basins region is dry, with mountains, desert plants, and few rivers.',
          'Rainfall, landforms, and resources decide what people can eat, build with, and trade. Coastal peoples could fish and gather shellfish, Plains peoples could hunt grazing animals, and farming peoples needed reliable water and good soil. Environment did not determine everything, but it shaped the choices available. Regions are not sealed off from one another: rivers, roads, and trade connect them, and people have always moved between them.',
        ],
      },
      {
        heading: 'How Native peoples adapted',
        paragraphs: [
          'The Caddo lived in the Piney Woods of East Texas, built permanent villages with thatched houses, farmed corn, beans, and squash, and traded widely. The Karankawa lived along the coast, fishing, gathering, and traveling by canoe. The Jumano of West Texas traded and farmed near rivers in a dry region where water was scarce. The Caddo also built earthen mounds and maintained a trade network that reached far beyond the borders of present-day Texas.',
          'The Comanche moved onto the Plains and became skilled bison hunters and riders. Horses, brought by Europeans in the 1500s and 1600s, transformed Plains life by making travel and hunting faster, though the Comanche did not acquire them in large numbers until the 1700s. Adaptation was active and intelligent: peoples used the materials and opportunities their land provided. Native peoples still live in Texas today as citizens of tribes and of the state, and their governments and cultures remain part of the present, not only the past.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Compare how the Caddo and the Comanche met their food needs.',
        steps: [
          'The Caddo lived where soil and rain allowed farming, so they grew crops in permanent villages.',
          'The Comanche lived on grassland where bison grazed, so they hunted and moved with the herds.',
        ],
        answer: 'The Caddo farmed; the Comanche hunted bison and traveled with the herds.',
      },
    ],
    terms: [
      ['region', 'a large area with features that set it apart'],
      ['adaptation', 'a change in how people live that fits their environment'],
      ['bison', 'the large grazing animal of the Great Plains'],
      ['nomad', 'a person who moves from place to place rather than living in one spot'],
      ['agriculture', 'the practice of farming crops and raising animals'],
      ['trade', 'exchanging goods between people or groups'],
    ],
    practice: [
      mc('Which group farmed corn, beans, and squash in East Texas?', ['Comanche', 'Caddo', 'Karankawa', 'Jumano'], 1, 'The Caddo were farming villagers.'),
      mc('Which animal was central to Plains life?', ['salmon', 'bison', 'llama', 'reindeer'], 1, 'Bison supplied food, hides, and tools.'),
      num('How many natural regions does Texas have in this lesson?', 4, 'Coastal Plain, North Central Plains, Great Plains, Mountains and Basins.'),
    ],
    review: [
      {
        prompt: 'Name the four Texas regions.',
        answer: 'The Gulf Coastal Plain, North Central Plains, Great Plains, and Mountains and Basins.',
      },
      {
        prompt: 'How did the horse change Plains life?',
        answer: 'Horses made hunting and travel faster, letting Plains peoples follow bison herds more effectively.',
      },
    ],
    exercises: [
      'Draw a Texas map with the four regions and one Native people in each.',
      'Explain how your own food and housing would change if you moved to a desert.',
    ],
  },
  'g3-ss-u3-l1': {
    topics: ['opportunity cost'],
    objectives: [
      'Explain why scarcity forces people to make choices.',
      'Give an example of specialization and one responsibility of good citizenship.',
    ],
    sections: [
      {
        heading: 'Scarcity and the choices it forces',
        paragraphs: [
          'Scarcity means that resources are limited while wants are unlimited. A family has a limited amount of money and time, so it cannot buy and do everything it wants. Scarcity cannot be eliminated, because even a wealthy person has only so many hours in a day and must choose how to use them. Comparing opportunity costs is a skill that improves with practice, and adults use it when weighing jobs, housing, and savings.',
          'Every choice has an opportunity cost: the best thing you give up when you choose something else. If you spend $30 on a game, the opportunity cost might be the shoes you also wanted, or the savings you did not add. Naming the opportunity cost makes a decision clearer, because it shows what the choice actually costs in alternatives. Governments face the same problem: a city cannot fund every program, so a council sets priorities in a budget and explains what it did not fund.',
        ],
      },
      {
        heading: 'Specialization and citizenship',
        paragraphs: [
          'Specialization means focusing on the work you do best. A dentist repairs teeth, a farmer grows food, and a mechanic fixes engines, so each becomes more skilled and productive than if everyone tried to do everything. Specialization creates interdependence: people rely on one another for goods and services they do not produce themselves.',
          'Good citizenship is the set of responsibilities that keeps a community working. Citizens obey laws, pay taxes, serve on juries when called, vote, and treat public property with care. Rights and responsibilities pair together: free speech comes with the responsibility to disagree respectfully, and public parks exist because people pay for them and do not damage them. Volunteering and jury service are forms of participation that cost time but support the whole community.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'You have $40 and must choose between a concert ticket and a new backpack. What is the opportunity cost of the ticket?',
        steps: [
          'Identify the choice: the concert ticket costs the full $40.',
          'Identify the best alternative given up: the backpack.',
        ],
        answer: 'The backpack is the opportunity cost, since it is the best alternative you gave up.',
      },
    ],
    terms: [
      ['scarcity', 'limited resources compared with unlimited wants'],
      ['opportunity cost', 'the best alternative given up when making a choice'],
      ['specialization', 'focusing on the work a person or place does best'],
      ['interdependence', 'reliance of people on one another for goods and services'],
      ['citizenship', 'membership in a community with rights and responsibilities'],
      ['responsibility', 'a duty a person is expected to carry out'],
    ],
    practice: [
      mc('Scarcity exists because', ['people are greedy', 'resources are limited and wants are unlimited', 'prices are high', 'some people are poor'], 1, 'Limited resources plus unlimited wants create scarcity.'),
      mc('The best alternative you give up is called', ['scarcity', 'opportunity cost', 'specialization', 'interdependence'], 1, 'That is the definition of opportunity cost.'),
      num('How many responsibilities of citizenship are named here?', 5, 'Obey laws, pay taxes, serve on juries, vote, and care for public property.'),
    ],
    review: [
      {
        prompt: 'Why can scarcity never be eliminated?',
        answer: 'Wants are unlimited while resources such as money and time are always limited.',
      },
      {
        prompt: 'Give an example of specialization in your town.',
        answer: 'A bakery specializes in bread, which lets it bake better bread than each family could at home.',
      },
    ],
    exercises: [
      'List three choices you made this week and the opportunity cost of each.',
      'Interview an adult about a job they specialize in and who depends on their work.',
    ],
  },
};
