import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Grade 5, science and social studies depth pass. */
export const DEPTH_G5B: Record<string, LessonDepth> = {
  'g5-sci-u1-l1': {
    topics: ['conservation of matter'],
    objectives: [
      'Explain why dissolved matter still has mass and can be recovered.',
      'Describe how boiling point changes with added solute and with altitude.',
    ],
    sections: [
      {
        heading: 'Dissolving does not destroy matter',
        paragraphs: [
          'When salt dissolves in water, the salt breaks into particles too small to see, but no matter is created or destroyed. The mass of the solution equals the mass of the water plus the mass of the salt. Weighing before and after dissolving is a direct test of the law of conservation of matter, and the totals match within measurement error.',
          'Because the salt is still present, it can be recovered by evaporating the water. The water leaves as vapor and the salt remains as crystals. This is how sea salt is produced and why a dried spill leaves a white ring. Dissolving is a physical change: the substance is the same, only its arrangement and size have changed. Heating a solution speeds up evaporation because warmer particles escape the surface more quickly, and cooling one can reverse the process as crystals form.',
        ],
      },
      {
        heading: 'Boiling points and what changes them',
        paragraphs: [
          'Pure water boils at 212°F, or 100°C, at sea level. Adding salt raises the boiling point slightly and lowers the freezing point, which is why salt is spread on icy roads. At higher altitudes, air pressure is lower, so water boils at a lower temperature, and cooking times must be adjusted in mountain kitchens.',
          'Boiling happens throughout a liquid, while evaporation happens only at the surface, which is why a puddle disappears slowly but a pot boils dry quickly. Both processes require energy, and the energy comes from a stove or the sun. Recognizing the difference helps explain why wet clothes dry in shade but never reach a rolling boil. Dissolved substances also lower the freezing point, which is why salt water freezes below 32°F.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'You dissolve 5 g of salt in 95 g of water, then evaporate all the water. What mass of salt remains, and why?',
        steps: [
          'The solution has a mass of 100 g because matter is conserved.',
          'Evaporating removes only water, so the dissolved salt is left behind.',
        ],
        answer: '5 g of salt remains, the same amount that was dissolved.',
      },
    ],
    terms: [
      ['solute', 'the substance that dissolves in a solution'],
      ['solvent', 'the substance that does the dissolving'],
      ['solution', 'a mixture in which a solute spreads evenly through a solvent'],
      ['conservation of matter', 'the principle that matter is not created or destroyed'],
      ['boiling point', 'the temperature at which a liquid changes to gas throughout'],
      ['evaporation', 'the change from liquid to gas at a liquid’s surface'],
    ],
    practice: [
      mc('Does dissolved salt disappear?', ['yes, it is destroyed', 'no, it spreads out and can be recovered', 'only in hot water', 'only in cold water'], 1, 'The salt is still present in the solution.'),
      num('At what temperature Celsius does pure water boil at sea level?', 100, 'Water boils at 100°C at sea level.'),
      mc('Adding salt to water', ['lowers the boiling point', 'raises the boiling point', 'has no effect', 'stops boiling'], 1, 'Salt raises the boiling point slightly.'),
    ],
    review: [
      {
        prompt: 'Does dissolved salt disappear?',
        answer: 'No, the salt spreads through the water as tiny particles and can be recovered by evaporation.',
      },
      {
        prompt: 'How can you recover salt from salt water?',
        answer: 'Evaporate the water, leaving the dissolved salt behind as solid crystals.',
      },
    ],
    exercises: [
      'Weigh water and salt before and after dissolving and compare the totals.',
      'Compare how long plain water and salt water take to boil in the same pot.',
    ],
  },
  'g5-sci-u2-l1': {
    topics: ['energy pyramid'],
    objectives: [
      'Explain why energy decreases at each level of a food web.',
      'Describe how matter cycles while energy flows in one direction.',
    ],
    sections: [
      {
        heading: 'Energy flows and is lost',
        paragraphs: [
          'Energy enters an ecosystem as sunlight captured by producers. When a consumer eats, only part of the energy in its food becomes body tissue; the rest is used for movement, growth, and warmth, or lost as heat. Roughly a tenth of the energy passes to the next level, which is why an energy pyramid narrows so sharply toward the top.',
          'That loss explains why food chains are short and why top predators are rare. A hawk needs a large area to find enough prey because most of the energy that started in plants never reaches its level. Eating lower on the food chain, as herbivores do, captures more of the original energy. This is why farmers raise grain rather than cattle on the same land: grain feeds more people directly than meat does.',
        ],
      },
      {
        heading: 'Matter cycles while energy does not',
        paragraphs: [
          'Matter moves in loops. Decomposers break down dead organisms and wastes, releasing nutrients into the soil and water where producers absorb them again. Carbon, nitrogen, and water are reused endlessly, but the energy that powered each step has already spread out as heat and cannot be recycled by living things.',
          'A food web shows these connections more honestly than a single chain, because most consumers eat several kinds of food and are eaten by several predators. Removing one species can push others to switch food, move, or decline. Healthy ecosystems have many overlapping paths, which makes them more stable when one path fails. A pyramid of biomass, which measures mass rather than energy, often shows the same narrowing pattern. Energy leaves an ecosystem as heat at every step, so sunlight must keep arriving for life to continue.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Grass stores 10,000 units of energy. About how much reaches a rabbit, and a hawk that eats the rabbit?',
        steps: [
          'About a tenth passes to the rabbit, so roughly 1,000 units.',
          'About a tenth of that passes to the hawk, so roughly 100 units.',
        ],
        answer: 'About 1,000 units to the rabbit and about 100 to the hawk.',
      },
    ],
    terms: [
      ['energy pyramid', 'a diagram showing energy decreasing at each feeding level'],
      ['trophic level', 'a feeding position in a food web, such as producer or predator'],
      ['biomass', 'the total mass of living material in an area'],
      ['decomposer', 'an organism that breaks down dead material and releases nutrients'],
      ['nutrient cycle', 'the reuse of elements through living things and the environment'],
      ['food web', 'overlapping food chains in an ecosystem'],
    ],
    practice: [
      mc('About how much energy passes to the next trophic level?', ['all of it', 'half', 'a tenth', 'none'], 2, 'Roughly ten percent passes on.'),
      mc('Decomposers are important because they', ['create energy', 'release nutrients for reuse', 'eat predators', 'stop energy flow'], 1, 'They recycle matter.'),
      num('How many links do most food chains have at most?', 5, 'Energy loss limits chain length.'),
    ],
    review: [
      {
        prompt: 'Why are most food chains only four or five links long?',
        answer: 'Because only about a tenth of the energy passes to each level, so higher levels have too little energy to support many organisms.',
      },
      {
        prompt: 'What role do decomposers play in matter cycling?',
        answer: 'They break down dead organisms and return nutrients to soil and water for producers to reuse.',
      },
    ],
    exercises: [
      'Draw an energy pyramid for a Texas ecosystem and label the approximate energy at each level.',
      'Remove one species from a food web diagram and predict three effects on other organisms.',
    ],
  },
  'g5-sci-u3-l1': {
    topics: ['rotation'],
    objectives: [
      'Distinguish rotation from revolution and explain what each causes.',
      'Trace the path of water through the cycle and identify the energy source that drives it.',
    ],
    sections: [
      {
        heading: 'Two motions, two effects',
        paragraphs: [
          'Earth rotates on its axis once about every 24 hours, turning day into night. Earth also revolves around the Sun once in about 365¼ days, which is why calendars add a leap day every four years. Rotation explains the daily cycle, while revolution combined with Earth’s tilt explains the seasons.',
          'The tilt is what makes seasons possible. When the Northern Hemisphere leans toward the Sun, sunlight strikes more directly and days are longer, so it is summer there while the Southern Hemisphere has winter. Distance from the Sun does not explain seasons, because Earth is actually closest to the Sun during the northern winter. The Sun also appears higher in the summer sky, which is why noon shadows are shorter then.',
        ],
      },
      {
        heading: 'The water cycle and its engine',
        paragraphs: [
          'The Sun supplies the energy that drives the water cycle. Heat evaporates water from oceans, lakes, and soil; the vapor rises, cools, and condenses into clouds; precipitation returns it to the surface; and runoff and groundwater carry it back toward the sea. The same water is used again and again, which is why the cycle is called a cycle. Clouds form when rising air cools and vapor condenses on tiny particles of dust, salt, or smoke, and precipitation returns as rain, snow, sleet, or hail depending on temperature.',
          'Gravity moves water downhill and underground, while plants release water vapor through their leaves in a process called transpiration. Together these paths connect the atmosphere, land, and oceans. Because the supply of fresh water is limited even though water cycles endlessly, conserving it matters. Groundwater stored in aquifers can take centuries to refill, so pumping faster than it recharges is a form of borrowing against the future.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain why Texas has longer days in June than in December, using rotation and revolution.',
        steps: [
          'Earth’s tilt leans the Northern Hemisphere toward the Sun in June.',
          'A tilted hemisphere spends more of each rotation in sunlight, so days are longer.',
        ],
        answer: 'The tilt during revolution gives the Northern Hemisphere more direct sunlight and longer days in June.',
      },
    ],
    terms: [
      ['rotation', 'spinning on an axis, causing day and night'],
      ['revolution', 'traveling around another object, causing the year'],
      ['axis', 'the imaginary line an object spins around'],
      ['tilt', 'the slant of Earth’s axis, which causes seasons'],
      ['transpiration', 'the release of water vapor from plant leaves'],
      ['runoff', 'water that flows over the surface toward streams and rivers'],
    ],
    practice: [
      mc('What causes day and night?', ['revolution', 'rotation', 'the tilt', 'the Moon'], 1, 'Rotation turns Earth toward and away from the Sun.'),
      mc('What causes seasons?', ['distance from the Sun', 'Earth’s tilt during revolution', 'the Moon’s orbit', 'ocean currents'], 1, 'Tilt changes sunlight angle and day length.'),
      num('How many hours are in one rotation of Earth?', 24, 'One rotation takes about 24 hours.'),
    ],
    review: [
      {
        prompt: 'How long is one rotation and one revolution of Earth?',
        answer: 'One rotation takes about 24 hours, and one revolution takes about 365¼ days.',
      },
      {
        prompt: 'What drives evaporation in the water cycle?',
        answer: 'Energy from the Sun heats water, causing it to change from liquid to vapor.',
      },
    ],
    exercises: [
      'Track sunrise and sunset times for a week and describe the trend.',
      'Draw the water cycle with evaporation, condensation, precipitation, runoff, and transpiration labeled.',
    ],
  },
  'g5-ss-u1-l1': {
    topics: ['colonies'],
    objectives: [
      'Compare the New England, Middle, and Southern colonies by geography and economy.',
      'Explain the causes of the American Revolution and its outcome.',
    ],
    sections: [
      {
        heading: 'Three regions, three economies',
        paragraphs: [
          'The New England colonies had rocky soil and a short growing season, so families fished, built ships, and traded rather than farming large crops. The Middle Colonies had fertile land and good harbors, producing grain and iron. The Southern Colonies had long growing seasons and rich soil, which supported tobacco, rice, and later cotton on large plantations worked first by indentured servants and then increasingly by enslaved Africans.',
          'Settlement also meant conflict. Colonists took land from Native nations, and wars such as King Philip’s War in 1675 devastated Native communities. In 1619 the first Africans arrived in Virginia, and by the 1700s slavery was central to the Southern economy. A full account of colonial growth includes both opportunity and dispossession. Colonial assemblies such as the Virginia House of Burgesses gave settlers practice in self-rule, which later shaped arguments about representation.',
        ],
      },
      {
        heading: 'From protest to independence',
        paragraphs: [
          'After the French and Indian War, Britain taxed the colonies to pay its debts. The Stamp Act of 1765 taxed printed paper, and the Townshend Acts taxed imported goods. Colonists argued that they should not be taxed without representation in Parliament, and protests such as the Boston Tea Party in 1773 led Britain to punish Massachusetts with the Intolerable Acts.',
          'Fighting began at Lexington and Concord in 1775, and the Declaration of Independence followed on July 4, 1776. The American victory at Saratoga brought French support, and the war ended with the British surrender at Yorktown in 1781 and the Treaty of Paris in 1783. The new nation faced the question of who would be included in its freedoms. Enslaved people, Native nations, and women were largely excluded from the new nation’s political life, a contradiction that took generations to confront.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain how geography shaped the Southern colonial economy.',
        steps: [
          'Long growing seasons and fertile soil favored cash crops.',
          'Large labor needs led planters to rely first on indentured servants and then on enslaved Africans.',
        ],
        answer: 'Geography supported plantation agriculture, which drove the demand for enslaved labor.',
      },
    ],
    terms: [
      ['colony', 'a settlement controlled by a distant country'],
      ['indentured servant', 'a person who worked for a set number of years to pay for passage'],
      ['plantation', 'a large farm growing cash crops with enslaved or hired labor'],
      ['boycott', 'refusing to buy goods as a protest'],
      ['representation', 'having a voice in the government that decides taxes'],
      ['independence', 'self-government free of outside control'],
    ],
    practice: [
      mc('Which crop saved Jamestown?', ['rice', 'tobacco', 'cotton', 'indigo'], 1, 'Tobacco became a profitable cash crop.'),
      mc('Which act taxed printed paper in 1765?', ['Tea Act', 'Stamp Act', 'Townshend Acts', 'Intolerable Acts'], 1, 'The Stamp Act taxed printed documents.'),
      num('In what year was the Declaration of Independence adopted?', 1776, 'It was adopted on July 4, 1776.'),
    ],
    review: [
      {
        prompt: 'What crop saved Jamestown?',
        answer: 'Tobacco became a profitable cash crop that allowed the Jamestown colony to survive and grow.',
      },
      {
        prompt: 'Name two acts that angered the colonies.',
        answer: 'The Stamp Act taxed printed paper, and the Townshend Acts taxed imported goods such as glass and tea.',
      },
    ],
    exercises: [
      'Draw a three-column chart comparing the economies of the New England, Middle, and Southern colonies.',
      'Write a paragraph explaining one colonial grievance and the British response to it.',
    ],
  },
  'g5-ss-u2-l1': {
    topics: ['Bill of Rights'],
    objectives: [
      'Explain the structure of the Constitution and why the Bill of Rights was added.',
      'Describe the protections in the First Amendment and how federalism divides power.',
    ],
    sections: [
      {
        heading: 'A framework with limits',
        paragraphs: [
          'The Articles of Confederation gave the national government too little power: it could not tax or regulate trade, and Shays’ Rebellion in 1786 showed how weak it was. Delegates met in Philadelphia in 1787 and wrote a Constitution that created three branches — legislative, executive, and judicial — with separate powers and checks on one another.',
          'Federalism divides authority between the national government and the states. The Constitution lists national powers, reserves other powers to the states, and forbids certain actions to both. This compromise satisfied neither side completely, which is part of why it has lasted: no branch or level can act alone. The Constitution also created a process for change: amendments need approval by two-thirds of Congress and three-fourths of the states, which makes change possible but slow.',
        ],
      },
      {
        heading: 'The Bill of Rights',
        paragraphs: [
          'Some states refused to ratify the Constitution without protections for individual liberties. Congress passed twelve amendments in 1789, and ten were ratified in 1791 as the Bill of Rights. The First Amendment protects religion, speech, press, assembly, and the right to petition the government, while others protect against unreasonable searches and guarantee a fair trial.',
          'These rights have limits: speech does not protect threats or fraud, and courts decide where one person’s rights end and another’s begin. The Fourteenth Amendment, ratified in 1868, later applied many protections to the states, and the Supreme Court has interpreted the text in thousands of cases. The amendments are short, which is why their meaning is argued rather than simply read off the page. State constitutions add further protections, and state courts interpret them alongside federal ones, so rights often rest on more than one document. Courts decide conflicts between them, which is why judges matter to daily life.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A state passes a law banning all criticism of its governor. Which amendment is implicated, and how does federalism matter?',
        steps: [
          'Criticism of officials is speech protected by the First Amendment.',
          'The Fourteenth Amendment applies most Bill of Rights protections to state governments.',
        ],
        answer: 'The First Amendment protects the speech, and the Fourteenth applies that protection to the state.',
      },
    ],
    terms: [
      ['constitution', 'the framework that defines a government’s powers'],
      ['federalism', 'the division of power between national and state governments'],
      ['separation of powers', 'dividing authority among three branches'],
      ['checks and balances', 'each branch’s ability to limit the others'],
      ['amendment', 'a formal change to the Constitution'],
      ['ratify', 'to formally approve an agreement or amendment'],
    ],
    practice: [
      mc('What does the First Amendment protect?', ['the right to vote', 'speech, religion, press, assembly, and petition', 'gun ownership', 'a speedy trial'], 1, 'It protects five freedoms.'),
      mc('Federalism means power is divided between', ['two political parties', 'national and state governments', 'the House and Senate', 'courts and police'], 1, 'That is the definition of federalism.'),
      num('How many amendments are in the Bill of Rights?', 10, 'Ten amendments were ratified in 1791.'),
    ],
    review: [
      {
        prompt: 'What does the First Amendment protect?',
        answer: 'It protects freedom of religion, speech, the press, assembly, and the right to petition the government.',
      },
      {
        prompt: 'Why did the Bill of Rights need to be added?',
        answer: 'Several states would not ratify the Constitution without written protections for individual liberties.',
      },
    ],
    exercises: [
      'Match five scenarios to the amendment that protects them and explain each choice.',
      'Draw a diagram of the three branches and one check each has on another.',
    ],
  },
  'g5-ss-u3-l1': {
    topics: ['Reconstruction'],
    objectives: [
      'Explain how westward expansion affected Native nations and the slavery debate.',
      'Describe the Civil War’s outcome and the amendments that followed it.',
    ],
    sections: [
      {
        heading: 'Expansion and division',
        paragraphs: [
          'The Louisiana Purchase in 1803 doubled the nation’s size, and expansion continued through treaties, purchases, and war. The Indian Removal Act of 1830 forced southeastern nations west along the Trail of Tears, and the Mexican Cession in 1848 added vast territory after the Mexican-American War. Each new territory raised the question of whether slavery would be allowed there.',
          'Compromises in 1820 and 1850 delayed the conflict but did not settle it. The Kansas-Nebraska Act of 1854 let settlers decide, producing violent conflict, and the Dred Scott decision in 1857 held that enslaved people could not claim citizenship. When Abraham Lincoln was elected in 1860, southern states seceded, and war began in April 1861. The war pitted the industrial North against an agricultural South and turned farms and towns into battlefields.',
        ],
      },
      {
        heading: 'War, emancipation, and unfinished work',
        paragraphs: [
          'The Civil War lasted four years and killed roughly 620,000 soldiers. Lincoln’s Emancipation Proclamation in 1863 declared enslaved people in rebelling states free, and the Thirteenth Amendment in 1865 abolished slavery nationwide. The Fourteenth Amendment in 1868 granted citizenship and equal protection, and the Fifteenth in 1870 protected voting rights regardless of race.',
          'Reconstruction governments briefly expanded Black political power, but federal troops withdrew in 1877 and white supremacist laws and violence reversed much of that progress. Segregation was enforced until the Civil Rights Act of 1964 and the Voting Rights Act of 1965. The amendments promised equality; the century that followed shows how much work enforcing a promise requires. The Civil Rights Act of 1964 banned segregation in public places, and the Voting Rights Act of 1965 gave the federal government power to oversee elections where Black voters had been suppressed.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain what the Thirteenth, Fourteenth, and Fifteenth Amendments each did.',
        steps: [
          'The Thirteenth abolished slavery.',
          'The Fourteenth granted citizenship and equal protection, and the Fifteenth protected voting rights by race.',
        ],
        answer: 'Slavery abolished, citizenship and equal protection granted, and voting rights protected.',
      },
    ],
    terms: [
      ['secede', 'to withdraw from the Union'],
      ['emancipation', 'the act of freeing enslaved people'],
      ['Reconstruction', 'the period after the Civil War when the South was rebuilt'],
      ['segregation', 'enforced separation of people by race'],
      ['amendment', 'a formal change to the Constitution'],
      ['civil rights', 'the rights of citizens to equal treatment under law'],
    ],
    practice: [
      mc('What did the Thirteenth Amendment do?', ['granted voting rights', 'abolished slavery', 'created the Senate', 'ended the war'], 1, 'It abolished slavery nationwide.'),
      mc('The Indian Removal Act of 1830 forced Native nations', ['to move west', 'to become citizens', 'to join the Union', 'to leave the country'], 0, 'It led to the Trail of Tears.'),
      num('In what year was the Fifteenth Amendment ratified?', 1870, 'It protected voting rights regardless of race.'),
    ],
    review: [
      {
        prompt: 'What did the Thirteenth Amendment do?',
        answer: 'It abolished slavery throughout the United States when it was ratified in 1865.',
      },
      {
        prompt: 'Name one limit of Reconstruction.',
        answer: 'Federal troops withdrew in 1877, allowing segregation laws and violence to reverse much of its progress.',
      },
    ],
    exercises: [
      'Create a timeline from 1803 to 1870 with six events and one sentence each.',
      'Explain in a paragraph how a constitutional promise can exist while equal treatment does not.',
    ],
  },
};
