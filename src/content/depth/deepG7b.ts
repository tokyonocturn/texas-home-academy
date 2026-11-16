import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Grade 7, science and social studies depth pass. */
export const DEPTH_G7B: Record<string, LessonDepth> = {
  'g7-sci-u1-l1': {
    topics: ['balanced chemical equations'],
    objectives: [
      'Identify evidence that a chemical reaction has occurred.',
      'Balance a simple chemical equation and explain conservation of mass.',
    ],
    sections: [
      {
        heading: 'Signs that matter became something new',
        paragraphs: [
          'A chemical reaction produces new substances with new properties. Evidence includes gas production such as bubbles that are not from boiling, a precipitate that forms when two clear solutions mix, an unexpected color change, a temperature change without an outside heat source, and a new odor. One sign is suggestive; several together are convincing.',
          'Physical changes can look dramatic without creating a new substance. Dissolving sugar, melting ice, and tearing paper all leave the same material. Burning paper does not: ash, smoke, and gases are new substances, which is why the change cannot be reversed by cooling or recombining the pieces.',
          'Everyday examples show the range. Iron rusts when oxygen and water combine with it, forming a flaky red-brown compound. Baking soda and vinegar produce carbon dioxide bubbles. Food browns when sugars react with proteins under heat, and a cut apple darkens as its compounds react with oxygen. Each involves rearrangement of atoms rather than a change of state.',
        ],
      },
      {
        heading: 'Equations and conservation of mass',
        paragraphs: [
          'A chemical equation uses formulas to show reactants on the left and products on the right. H₂ + O₂ → H₂O says hydrogen and oxygen react to form water, but it is not balanced: there are two oxygen atoms on the left and only one on the right. Balancing by changing coefficients gives 2H₂ + O₂ → 2H₂O.',
          'Coefficients multiply whole formulas and can be changed; subscripts cannot, because changing a subscript changes the substance. That is why H₂O cannot become H₂O₂ to solve a counting problem: hydrogen peroxide is a different compound. Balancing is a bookkeeping task governed by conservation of mass, since atoms are rearranged but not created or destroyed.',
          'Reactions either release energy or absorb it. Exothermic reactions, such as combustion, release heat to the surroundings. Endothermic reactions absorb energy, which is why an instant cold pack feels cold as its contents dissolve. Energy changes do not affect the mass balance, but they explain why some reactions feel hot and others cold. Reaction rates depend on temperature, concentration, surface area, and the presence of a catalyst, which is why powdered sugar burns faster than a cube and why food spoils faster on a counter than in a refrigerator. A catalyst speeds a reaction without being consumed, which is how catalytic converters reduce exhaust pollutants and how enzymes digest food.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Balance H₂ + O₂ → H₂O and name two signs that a reaction occurred.',
        steps: [
          'Count atoms: two hydrogens and two oxygens on the left, but two hydrogens and one oxygen on the right.',
          'Place a coefficient of 2 before H₂O, giving two oxygens, then a coefficient of 2 before H₂ to restore four hydrogens.',
          'Signs include gas bubbles and a temperature change.',
        ],
        answer: '2H₂ + O₂ → 2H₂O, with gas production and heat as evidence.',
      },
    ],
    terms: [
      ['chemical reaction', 'a process that forms new substances from reactants'],
      ['reactant', 'a substance that is changed in a chemical reaction'],
      ['product', 'a substance formed by a chemical reaction'],
      ['precipitate', 'a solid that forms from solution during a reaction'],
      ['exothermic', 'releasing energy to the surroundings'],
      ['coefficient', 'a number placed before a formula to balance an equation'],
    ],
    practice: [
      mc('Which is evidence of a chemical reaction?', ['ice melting', 'a precipitate forming', 'sugar dissolving', 'paper tearing'], 1, 'A new solid forming indicates a reaction.'),
      num('How many water molecules are produced by 2H₂ + O₂ → 2H₂O?', 2, 'The coefficient is two.'),
      mc('An endothermic reaction', ['releases heat', 'absorbs heat', 'creates mass', 'destroys atoms'], 1, 'Endothermic reactions absorb energy.'),
    ],
    review: [
      {
        prompt: 'How can you tell a chemical change from a physical one?',
        answer: 'A chemical change forms a new substance, often shown by gas, precipitate, color change, or a temperature change.',
      },
      {
        prompt: 'Why must a chemical equation be balanced?',
        answer: 'Because atoms are conserved, so the number of each type must be the same on both sides.',
      },
    ],
    exercises: [
      'Perform a safe reaction such as baking soda and vinegar, and record three observations.',
      'Balance five simple equations and count atoms on each side.',
    ],
  },
  'g7-sci-u2-l1': {
    topics: ['work and power'],
    objectives: [
      'Calculate work and power and explain when work is zero.',
      'Explain how machines trade force for distance without reducing work.',
    ],
    sections: [
      {
        heading: 'Work and power',
        paragraphs: [
          'In physics, work is done when a force moves an object in the direction of the force. The formula is work = force × distance, measured in joules. Lifting a 50-newton box 2 meters does 100 joules of work. Holding the same box still does no work, because the object does not move, even though the effort feels tiring.',
          'Power is the rate of doing work: power = work ÷ time, measured in watts. Lifting 100 joules in 5 seconds is 20 watts, while lifting the same load in 1 second is 100 watts. The same work is done either way, but the faster effort requires more power, which is why a motor’s rating matters for how quickly it can complete a task.',
          'Work only counts the force in the direction of motion. Pushing a box at an angle splits the force into a useful part and a part pressing the box into the floor. That pressing part does no work, and it increases friction, which is why pushing low and level is easier than pushing down at a steep angle.',
        ],
      },
      {
        heading: 'Machines trade force for distance',
        paragraphs: [
          'A simple machine makes work easier by changing the size or direction of a force, not by reducing the work itself. A ramp lets you push a load with less force, but you push over a longer distance, and the product of force and distance stays roughly the same. Friction means the machine actually requires slightly more work than lifting directly.',
          'Mechanical advantage describes how much a machine multiplies force. A lever with the load close to the fulcrum and the effort far away can lift a heavy object with a small force, at the cost of moving the effort end a longer distance. A fixed pulley changes direction rather than magnitude, while a movable pulley can halve the force needed.',
          'Efficiency compares useful output to input, expressed as a percentage. A machine that requires 200 joules of input to produce 150 joules of useful output is 75% efficient, with the remainder lost mostly to friction and heat. Lubrication and smooth surfaces raise efficiency, which is why a well-maintained bicycle feels easier to ride than a rusty one. Comparing machines by efficiency rather than by force alone prevents the mistake of assuming that a bigger mechanical advantage always means less effort overall.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A 50 N box is lifted 3 m in 5 s. Find the work and the power.',
        steps: [
          'Work = force × distance = 50 × 3 = 150 joules.',
          'Power = work ÷ time = 150 ÷ 5 = 30 watts.',
        ],
        answer: '150 J of work and 30 W of power.',
      },
    ],
    terms: [
      ['work', 'force applied over a distance in the direction of the force'],
      ['joule', 'the unit of work and energy'],
      ['power', 'the rate at which work is done'],
      ['watt', 'the unit of power, equal to one joule per second'],
      ['mechanical advantage', 'how much a machine multiplies the applied force'],
      ['efficiency', 'the ratio of useful output to total input, as a percent'],
    ],
    practice: [
      num('How many joules of work are done lifting a 50 N box 3 m?', 150, '50 × 3 = 150 joules.'),
      num('What is the power if 150 J of work is done in 5 s, in watts?', 30, '150 ÷ 5 = 30 watts.'),
      mc('Does a machine reduce total work?', ['yes, always', 'no, it changes force or distance', 'only with pulleys', 'only with levers'], 1, 'Machines trade force for distance.'),
    ],
    review: [
      {
        prompt: 'Why does a machine not reduce work?',
        answer: 'A machine trades force for distance, so the total work stays roughly the same and friction adds a little more.',
      },
      {
        prompt: 'How is power different from work?',
        answer: 'Work measures force applied over distance, while power measures how quickly that work is done.',
      },
    ],
    exercises: [
      'Measure the work and power of lifting a backpack several times.',
      'Test a ramp at two angles and compare force and distance for the same load.',
    ],
  },
  'g7-sci-u3-l1': {
    topics: ['aquifer'],
    objectives: [
      'Explain how water moves through a watershed and into an aquifer.',
      'Describe two Texas biomes and an adaptation in each.',
    ],
    sections: [
      {
        heading: 'Groundwater and watersheds',
        paragraphs: [
          'A watershed is all the land whose water drains into one river system. Rain that falls on a slope runs downhill as runoff until it reaches a stream, and streams join into rivers. Ridges and hills form the boundaries between watersheds, so a single hill can send water to two different rivers on opposite sides.',
          'Some water soaks into the ground instead of running off. Permeable materials such as sand and gravel allow water to pass, while clay and solid rock resist it. An aquifer is an underground layer that stores usable amounts of water, and the water table is the top of the saturated zone. Wells pump from the water table, and recharge refills it slowly from rain and rivers.',
          'Paving changes the balance. Concrete and asphalt are nearly impermeable, so water that once soaked in becomes runoff, raising flood risk and carrying oil and litter into streams. Groundwater pumping can also outpace recharge, lowering the water table and drying wells. Both problems are visible in Texas, where growing cities and irrigated farms compete for limited water.',
        ],
      },
      {
        heading: 'Texas biomes and their adaptations',
        paragraphs: [
          'Texas contains several biomes. The Chihuahuan Desert in the west is dry with wide temperature swings, where cacti store water and animals are often nocturnal. The Edwards Plateau and Hill Country support juniper, oak, and animals adapted to rocky terrain and seasonal drought. The Gulf Coast has prairies and wetlands that hold water and buffer storms.',
          'Adaptations match conditions. Desert plants reduce water loss with waxy coatings and spines that discourage browsing, and many have shallow, wide roots to catch brief rain. Grassland animals such as pronghorn are built for speed, while wetland birds have long legs and beaks suited to shallow water. Each adaptation is a solution to a specific pressure rather than a general sign of toughness.',
          'Human activity reshapes these systems. Invasive species such as saltcedar consume large amounts of water, overgrazing removes grass that holds soil, and development fragments habitat. Conservation takes several forms: protecting land, restoring native plants, and using water more efficiently. Because watersheds cross property lines, effective management usually requires cooperation among landowners, cities, and agencies. Monitoring matters as much as policy: measuring spring flow, well levels, and stream quality shows whether a rule is actually protecting the resource or only appearing to.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A hillside is paved for a parking lot. Explain two effects on the watershed.',
        steps: [
          'Paving removes permeable surface, so less water soaks in.',
          'Runoff increases and reaches streams faster, raising flood peaks.',
          'Pollutants from cars wash into the stream instead of being filtered by soil.',
        ],
        answer: 'Less recharge and more polluted runoff, which increases flooding downstream.',
      },
    ],
    terms: [
      ['aquifer', 'an underground layer that stores usable groundwater'],
      ['water table', 'the upper surface of the saturated zone underground'],
      ['watershed', 'all the land draining into one river system'],
      ['runoff', 'water flowing over the surface rather than soaking in'],
      ['permeable', 'allowing water to pass through'],
      ['biome', 'a large region defined by climate and its living communities'],
    ],
    practice: [
      mc('Which material is most permeable?', ['clay', 'solid granite', 'sand', 'asphalt'], 2, 'Sand allows water to pass.'),
      mc('Paving land increases', ['recharge', 'runoff', 'infiltration', 'the water table'], 1, 'Impermeable surfaces send water downhill.'),
      num('How many Texas biomes are described in this lesson?', 3, 'Desert, Hill Country, and Gulf Coast.'),
    ],
    review: [
      {
        prompt: 'Why does paving land increase runoff?',
        answer: 'Impermeable surfaces prevent water from soaking in, so more water flows over the ground into streams.',
      },
      {
        prompt: 'Name two Texas biomes and one adaptation in each.',
        answer: 'Desert cacti store water and have waxy skins, while grassland animals such as pronghorn are built for speed.',
      },
    ],
    exercises: [
      'Map the watershed your home sits in and trace where its water flows.',
      'Compare two Texas biomes in a chart of climate, plants, and animal adaptations.',
    ],
  },
  'g7-ss-u1-l1': {
    topics: ['empresario'],
    objectives: [
      'Sequence the layers of settlement in Texas from missions to the Republic.',
      'Explain the political causes of the Texas Revolution.',
    ],
    sections: [
      {
        heading: 'Layers of settlement',
        paragraphs: [
          'Texas was home to many Native nations long before Europeans arrived, including the Caddo in the east, the Karankawa on the coast, and the Comanche on the Plains. Spanish missions and presidios established a thin presence in the 1700s, converting some Native peoples and securing claims against France, but most of the territory remained controlled by Native nations.',
          'Mexican independence in 1821 opened Texas to immigration through empresarios, agents who contracted to bring settlers in exchange for land. Stephen F. Austin’s colony became the largest. Settlers were supposed to become Mexican citizens and Catholics, and Mexico restricted immigration in 1830 partly because those terms were being ignored and because settlers brought enslaved people into a nation that had abolished slavery.',
          'By the 1830s the population included Tejanos of Mexican descent, Anglo settlers from the United States, enslaved people, and Native nations, with sharply different interests. Tejanos such as Lorenzo de Zavala and Juan Seguín played central roles in the coming conflict, and their presence complicates any simple story of Texans against Mexico.',
        ],
      },
      {
        heading: 'From protest to independence',
        paragraphs: [
          'When Santa Anna replaced the federal constitution with a centralist government in the 1830s, Texans and Tejanos who favored the 1824 constitution protested. Conventions at San Felipe in 1832 and 1833 petitioned for separate statehood. Santa Anna’s arrest of Austin in 1834 and his march north in 1835 turned protest into war.',
          'The fighting included the siege of Béxar in late 1835, the fall of the Alamo in March 1836, and the Goliad massacre, each of which shaped the politics of the war. At San Jacinto on April 21, 1836, Houston’s army defeated Santa Anna in about eighteen minutes and captured him, producing treaties that recognized independence.',
          'The Republic of Texas lasted from 1836 to 1845, burdened by debt and conflict with Mexico and with Native nations. Its constitution protected slavery and excluded free Black residents and women from political life. The revolution secured independence, but the republic it created distributed its freedoms narrowly, a tension that carried into statehood. Reading the revolution through the experiences of Tejanos, enslaved people, and Native nations does not diminish the courage of the settlers; it explains why the new republic’s promises were unevenly distributed from its first day.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Trace a chain of causes from the 1830 immigration law to the outbreak of fighting.',
        steps: [
          'The law restricted immigration and increased military presence.',
          'Settlers and Tejanos petitioned for separate statehood and greater self-government.',
          'Santa Anna’s centralist move and arrest of Austin made compromise unlikely.',
          'Armed conflict began in 1835.',
        ],
        answer: 'Restriction led to protest, centralism closed off compromise, and fighting followed.',
      },
    ],
    terms: [
      ['mission', 'a religious settlement built to convert Native peoples'],
      ['presidio', 'a fort protecting a mission or settlement'],
      ['empresario', 'an agent who contracted to bring settlers to Mexican Texas'],
      ['centralism', 'concentrating power in a national government rather than the states'],
      ['Tejano', 'a Texan of Mexican descent'],
      ['republic', 'a government in which citizens elect representatives'],
    ],
    practice: [
      mc('What was the purpose of a presidio?', ['to teach farming', 'to protect a mission or settlement', 'to collect taxes', 'to print newspapers'], 1, 'Presidios were military forts.'),
      mc('Mexican independence from Spain occurred in', ['1776', '1821', '1836', '1845'], 1, 'Mexico became independent in 1821.'),
      num('How many years did the Republic of Texas exist?', 9, 'From 1836 to 1845.'),
    ],
    review: [
      {
        prompt: 'What was the purpose of a presidio?',
        answer: 'A presidio was a fort built to protect a mission or settlement from attack and to secure Spanish claims.',
      },
      {
        prompt: 'Name two causes of the Texas Revolution.',
        answer: 'Mexico’s restriction of immigration and Santa Anna’s shift to centralist rule both drove Texans toward revolt.',
      },
    ],
    exercises: [
      'Build a timeline from 1718 to 1845 with eight events and one sentence each.',
      'Write a paragraph explaining the role of Tejanos in the revolution using two specific people.',
    ],
  },
  'g7-ss-u2-l1': {
    topics: ['annexation'],
    objectives: [
      'Explain why annexation was delayed and how Texas became a state.',
      'Describe secession, the Civil War’s effect on Texas, and the meaning of Juneteenth.',
    ],
    sections: [
      {
        heading: 'A republic joins a divided nation',
        paragraphs: [
          'The Republic of Texas struggled with debt, defense, and recognition. Many Texans wanted annexation by the United States, but Congress delayed for nearly a decade because admitting another slave state would change the balance of power between free and slave states. Annexation was approved in 1845, and Texas became the twenty-eighth state on December 29.',
          'Statehood brought a border dispute with Mexico and war in 1846. The Treaty of Guadalupe Hidalgo in 1848 added a vast territory to the United States, and the Compromise of 1850 settled Texas’s current boundaries in exchange for giving up claims farther west. Cotton agriculture expanded, and enslaved people made up roughly a third of the state’s population by 1860.',
          'The state’s economy and politics became tied to slavery. Planters moved west with enslaved laborers, and Texas politics increasingly defended the institution. When Lincoln was elected in 1860, a secession convention voted to leave the Union in February 1861, and Texas joined the Confederacy.',
        ],
      },
      {
        heading: 'War, emancipation, and Reconstruction',
        paragraphs: [
          'The Civil War brought blockade, inflation, and the loss of enslaved labor as Union forces advanced. Texas avoided most large battles but supplied soldiers and goods, and its coast was occupied at times. The war ended in 1865, though enslaved people in Texas did not learn of emancipation immediately.',
          'On June 19, 1865, Major General Gordon Granger issued General Order No. 3 in Galveston, announcing that all enslaved people were free. Juneteenth commemorates that announcement, which came more than two years after the Emancipation Proclamation. Freedom was followed by violence and by laws that restricted Black Texans’ movement, labor, and voting.',
          'Reconstruction briefly expanded political participation, with Black Texans elected to state offices and the Fourteenth and Fifteenth Amendments extending citizenship and voting protections. Federal troops withdrew in 1877, and white supremacist laws and violence reversed much of that progress. Sharecropping and segregation replaced slavery as systems of economic and social control, which is why Juneteenth is both a celebration and a reminder of unfinished work. Federal troops and the Freedmen’s Bureau briefly protected Black Texans’ rights, and their withdrawal in 1877 left those rights to state and local authorities who often refused to defend them. The Fourteenth Amendment’s equal protection clause later became the basis for federal court decisions against segregation, which shows how a promise written in 1868 was used more than a century later.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain why annexation took almost a decade.',
        steps: [
          'Texas applied after independence in 1836.',
          'Congress feared changing the free–slave balance.',
          'Approval came only in 1845, when political conditions allowed it.',
        ],
        answer: 'Slavery politics delayed statehood until 1845.',
      },
    ],
    terms: [
      ['annexation', 'adding territory to a country'],
      ['secession', 'withdrawing from a union'],
      ['emancipation', 'the act of freeing enslaved people'],
      ['Reconstruction', 'the period after the Civil War when the South was rebuilt'],
      ['sharecropping', 'farming land for a share of the crop, often trapping laborers in debt'],
      ['amendment', 'a formal change to the Constitution'],
    ],
    practice: [
      mc('When did Texas join the United States?', ['1836', '1845', '1861', '1865'], 1, 'Texas became a state in 1845.'),
      mc('General Order No. 3 announced', ['secession', 'emancipation in Texas', 'statehood', 'the end of Reconstruction'], 1, 'It declared enslaved people free.'),
      num('In what year was the Thirteenth Amendment ratified?', 1865, 'It abolished slavery in 1865.'),
    ],
    review: [
      {
        prompt: 'When did Texas join the United States?',
        answer: 'Texas joined the United States in 1845, when it was admitted as the twenty-eighth state.',
      },
      {
        prompt: 'Name one achievement and one failure of Reconstruction in Texas.',
        answer: 'Black Texans gained voting rights and officeholding, but violence and later segregation laws reversed much of that progress.',
      },
    ],
    exercises: [
      'Create a timeline from 1845 to 1877 with annexation, secession, war, and Reconstruction.',
      'Explain in a paragraph what Juneteenth commemorates and why it became a federal holiday.',
    ],
  },
  'g7-ss-u3-l1': {
    topics: ['urbanization'],
    objectives: [
      'Explain how the Spindletop discovery reshaped the Texas economy.',
      'Describe urbanization and the modern challenges facing Texas cities.',
    ],
    sections: [
      {
        heading: 'Boom and bust',
        paragraphs: [
          'On January 10, 1901, the Lucas gusher at Spindletop near Beaumont produced a massive column of oil and proved that enormous reserves lay under the Gulf Coast. Within months, thousands of workers arrived, land prices soared, and refineries and pipelines followed. Texas became a major petroleum producer almost overnight.',
          'Oil wealth was unstable. Boomtowns outgrew housing, schools, and water systems, and when prices collapsed, jobs disappeared and towns emptied. The Texas Railroad Commission gained power to limit production in the 1930s, which stabilized prices and gave the state unusual influence over national markets. Oil also supplied fuel and materials for the industrial growth that followed the Second World War.',
          'Dependence on one industry made state budgets vulnerable. When oil prices fell in the 1980s, Texas entered a severe recession, which pushed leaders to recruit other industries. That experience explains why later state economic policy emphasized diversification rather than relying on energy alone.',
        ],
      },
      {
        heading: 'Cities and the modern economy',
        paragraphs: [
          'The twentieth century transformed Texas from a rural state into an urban one. Railroads, highways, and air conditioning made large cities livable in the summer heat, and jobs in energy, manufacturing, and services drew people from farms and from other states. Houston, Dallas, Fort Worth, San Antonio, and Austin grew into major metropolitan areas.',
          'The modern economy spans energy, health care, technology, aerospace, agriculture, logistics, and tourism. Houston hosts energy companies and the Texas Medical Center; Dallas–Fort Worth is a center of finance and distribution; Austin concentrates technology and government; San Antonio combines military installations and tourism. Ports along the Gulf handle a large share of national trade.',
          'Growth brings hard problems. Water supply is the most serious long-term constraint, since cities, farms, and industry compete for limited surface and groundwater. Housing costs, traffic, and school funding follow. Because Texas has a large population and a strong economy, how it manages water and growth will shape the region for decades. Desalination, conservation, reuse, and new reservoirs are all proposed responses, and each carries costs that fall unevenly on cities, farms, and ecosystems. Comparing those costs is a civic task, not only an engineering one. Texas also depends on interstate water agreements, which means a state decision can be constrained by neighbors upstream or downstream. The same tension appears in every fast-growing state, but Texas faces it with a history of limited statewide planning, which makes local cooperation and accurate data especially important.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain why an oil price drop can hurt a state budget even when other industries are growing.',
        steps: [
          'Severance taxes and royalties fall with oil prices.',
          'Energy jobs and local spending decline, reducing sales tax revenue.',
          'A diversified economy cushions the loss but does not eliminate it.',
        ],
        answer: 'Oil revenue falls directly, and the wider slowdown reduces other tax collections.',
      },
    ],
    terms: [
      ['petroleum', 'oil refined into fuels and other products'],
      ['refinery', 'a plant that turns crude oil into usable products'],
      ['urbanization', 'the growth of cities and the shift of population into them'],
      ['boomtown', 'a town that grows very quickly because of a new industry'],
      ['diversification', 'spreading an economy across many industries'],
      ['infrastructure', 'the roads, pipes, and utilities a society depends on'],
    ],
    practice: [
      mc('What was Spindletop and why does it matter?', ['a refinery', 'an oil gusher that started the Texas oil boom', 'a railroad town', 'a type of cactus'], 1, 'The 1901 gusher launched the oil industry.'),
      mc('Which city is known for technology and government?', ['Houston', 'Austin', 'Corpus Christi', 'Amarillo'], 1, 'Austin hosts technology firms and state government.'),
      num('How many industries does this lesson list in the modern economy?', 7, 'Energy, health care, technology, aerospace, agriculture, logistics, and tourism.'),
    ],
    review: [
      {
        prompt: 'What was Spindletop and why does it matter?',
        answer: 'Spindletop was a 1901 oil gusher near Beaumont that proved huge reserves existed and launched the Texas oil industry.',
      },
      {
        prompt: 'Why is an oil-based budget risky?',
        answer: 'Oil prices fall sharply in downturns, so revenue tied to production drops exactly when other needs rise.',
      },
    ],
    exercises: [
      'Graph Texas population growth from 1900 to 2020 and note when the fastest growth occurred.',
      'Explain in a paragraph how air conditioning and highways changed where Texans live.',
    ],
  },
};
