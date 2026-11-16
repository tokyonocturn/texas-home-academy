import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Grade 8, science and social studies depth pass. */
export const DEPTH_G8B: Record<string, LessonDepth> = {
  'g8-sci-u1-l1': {
    topics: ['valence electrons'],
    objectives: [
      'Describe atomic structure using protons, neutrons, and electrons.',
      'Use group position to predict an element’s reactivity and bonding.',
    ],
    sections: [
      {
        heading: 'Inside the atom',
        paragraphs: [
          'An atom has a dense nucleus of protons and neutrons surrounded by electrons. The atomic number is the number of protons, which identifies the element; the mass number is protons plus neutrons. Carbon always has six protons, but it may have six or seven neutrons, and those variants are isotopes.',
          'Electrons occupy energy levels, and the outermost level holds the valence electrons that determine chemical behavior. Atoms with a full outer level are stable and rarely react, while atoms with one or two extra electrons tend to lose them and atoms needing one or two tend to gain them. Ions form when electrons are gained or lost, giving the atom a charge.',
          'Models are simplifications. The shell model is useful for counting valence electrons but does not show where electrons actually are, and the nucleus is far smaller than a diagram suggests. Remembering that a model is a tool rather than a picture prevents later confusion when a more accurate model replaces it.',
        ],
      },
      {
        heading: 'Reading the periodic table',
        paragraphs: [
          'The periodic table arranges elements by increasing atomic number. Columns are groups with similar properties because they share valence electron counts, and rows are periods in which electron levels fill. Metals sit on the left and center, nonmetals on the upper right, and metalloids along the staircase between them.',
          'Group patterns predict reactivity. Alkali metals in group 1 react vigorously with water because each has one valence electron to lose. Halogens in group 17 react readily because each needs one electron. Noble gases in group 18 have full outer levels and are largely inert, which is why helium fills balloons safely.',
          'Trends across the table follow from atomic structure. Atoms generally get smaller across a period as added protons pull electrons closer, and larger down a group as new levels are added. Electronegativity, the pull an atom exerts on shared electrons, increases across a period and decreases down a group, which helps predict whether a bond will be ionic or covalent. A large difference in electronegativity usually means electrons are transferred, producing ions and an ionic bond, while a small difference means electrons are shared in a covalent bond. Metals and nonmetals therefore tend to form ionic compounds, and two nonmetals tend to share electrons. These predictions are tendencies rather than guarantees, which is why chemists test them against measured properties.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'An atom has 11 protons and 12 neutrons. Identify the element and predict how it will react.',
        steps: [
          'Atomic number 11 identifies sodium.',
          'Sodium is in group 1, so it has one valence electron.',
          'Losing that electron gives a stable full level, so sodium reacts readily with water and other nonmetals.',
        ],
        answer: 'Sodium; it reacts readily by losing its single valence electron.',
      },
    ],
    terms: [
      ['atomic number', 'the number of protons in an atom'],
      ['mass number', 'the total of protons and neutrons'],
      ['isotope', 'an atom of an element with a different number of neutrons'],
      ['valence electron', 'an electron in the outermost energy level'],
      ['ion', 'an atom or group of atoms with an electric charge'],
      ['electronegativity', 'an atom’s pull on shared electrons in a bond'],
    ],
    practice: [
      num('How many protons does an atom with atomic number 11 have?', 11, 'Atomic number equals protons.'),
      mc('Which group is largely unreactive?', ['group 1', 'group 2', 'group 17', 'group 18'], 3, 'Noble gases have full outer levels.'),
      num('What is the mass number of an atom with 6 protons and 7 neutrons?', 13, '6 + 7 = 13.'),
    ],
    review: [
      {
        prompt: 'What determines an element’s identity?',
        answer: 'The number of protons, called the atomic number, determines which element an atom is.',
      },
      {
        prompt: 'Why do elements in the same group behave similarly?',
        answer: 'They share the same number of valence electrons, which governs how they bond and react.',
      },
    ],
    exercises: [
      'Draw shell models for three elements and count valence electrons.',
      'Predict the formulas of two compounds using group positions and explain your reasoning.',
    ],
  },
  'g8-sci-u2-l1': {
    topics: ['acceleration'],
    objectives: [
      'Distinguish speed, velocity, and acceleration and compute each.',
      'Apply Newton’s three laws to explain everyday motion.',
    ],
    sections: [
      {
        heading: 'Describing motion precisely',
        paragraphs: [
          'Speed is distance divided by time and has no direction. Velocity is speed with a direction, so a car going 60 km/h north and another going 60 km/h south have different velocities. Acceleration is the rate at which velocity changes, which includes speeding up, slowing down, and changing direction.',
          'Motion graphs make these ideas visible. On a distance-time graph, slope is speed: a flat line means rest and a steeper line means faster motion. On a velocity-time graph, slope is acceleration and the area under the line is distance traveled.',
          'Units carry meaning. Kilometers per hour suits driving, meters per second suits laboratory work, and mixing them without converting produces nonsense. Because acceleration is velocity per time, its units are meters per second per second, written m/s².',
        ],
      },
      {
        heading: 'Newton’s three laws',
        paragraphs: [
          'Newton’s first law states that an object at rest stays at rest and an object in motion continues in a straight line at constant speed unless a net force acts. This tendency is inertia, and mass measures it. A loaded truck is harder to stop than a bicycle because it has more inertia.',
          'The second law states that force equals mass times acceleration, F = ma. A larger force produces more acceleration, while a larger mass produces less for the same force. Pushing an empty cart and a full cart with the same effort produces very different results.',
          'The third law states that every action has an equal and opposite reaction. A rocket pushes gas backward and the gas pushes the rocket forward, and a swimmer pushes water back to move ahead. A common misconception is that these forces cancel; they act on different objects, so each object accelerates. Weight is the force of gravity on an object and changes with location, while mass stays the same; a 60-kilogram student weighs less on the Moon but still has 60 kilograms of matter. Friction complicates predictions because it always opposes motion, which is why a pushed box may move at constant speed once the push equals friction. Drawing forces before calculating keeps the directions straight and makes clear which forces act on which object. Sketching the situation before choosing an equation is the habit that separates a solved problem from a guessed one.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A car travels 150 m in 10 s, then speeds up from 15 m/s to 25 m/s in 5 s. Find its average speed and acceleration.',
        steps: [
          'Average speed = distance ÷ time = 150 ÷ 10 = 15 m/s.',
          'Acceleration = change in velocity ÷ time = (25 − 15) ÷ 5 = 2 m/s².',
        ],
        answer: 'Average speed 15 m/s and acceleration 2 m/s².',
      },
    ],
    terms: [
      ['speed', 'distance traveled per unit of time'],
      ['velocity', 'speed in a stated direction'],
      ['acceleration', 'the rate of change of velocity'],
      ['inertia', 'the tendency of an object to resist changes in motion'],
      ['mass', 'the amount of matter in an object, a measure of inertia'],
      ['net force', 'the combined force acting on an object'],
    ],
    practice: [
      num('What is the average speed of a car covering 150 m in 10 s?', 15, '150 ÷ 10 = 15 m/s.'),
      num('What is the acceleration from 15 m/s to 25 m/s in 5 s?', 2, '10 ÷ 5 = 2 m/s².'),
      mc('Newton’s first law is also called the law of', ['acceleration', 'inertia', 'action-reaction', 'gravity'], 1, 'The first law describes inertia.'),
    ],
    review: [
      {
        prompt: 'Why does a heavier object accelerate less under the same force?',
        answer: 'Because acceleration equals force divided by mass, so a larger mass produces a smaller acceleration.',
      },
      {
        prompt: 'Why do action and reaction forces not cancel?',
        answer: 'They act on different objects, so each object experiences an unbalanced force from the other.',
      },
    ],
    exercises: [
      'Time a ball rolling several distances and graph speed against time.',
      'Explain three everyday events using each of Newton’s laws.',
    ],
  },
  'g8-sci-u3-l1': {
    topics: ['climate factors'],
    objectives: [
      'Distinguish climate from weather and identify factors that shape climate.',
      'Explain how plate motion creates landforms and how organisms depend on one another.',
    ],
    sections: [
      {
        heading: 'Climate and a moving planet',
        paragraphs: [
          'Weather is the condition of the atmosphere at a moment; climate is the pattern of weather over decades. A single cold week does not disprove a warming climate, just as one hot day does not establish one. Climate is described with averages, ranges, and extremes rather than with a single reading.',
          'Latitude, altitude, ocean currents, and landforms shape climate. Tropical regions near the equator receive direct sunlight year-round, high elevations are cooler, and warm ocean currents moderate coastal temperatures. Mountains create rain shadows: air rises and drops rain on the windward side, leaving the leeward side dry.',
          'Plate motion builds and rearranges land over millions of years. Divergent boundaries create ridges and rift valleys, convergent boundaries build mountains or produce subduction zones with trenches and volcanoes, and transform boundaries produce faults and earthquakes. Convection in the mantle drives the movement, and the resulting geography influences climate and where people can live.',
        ],
      },
      {
        heading: 'Interdependence in ecosystems',
        paragraphs: [
          'Organisms in an ecosystem depend on one another for energy and nutrients. Producers capture sunlight, consumers eat, and decomposers return nutrients to the soil. Removing one species can change the abundance of others through competition and predation, which is why ecologists study relationships rather than isolated organisms.',
          'Symbiosis describes close relationships between species. Mutualism benefits both, as when bees pollinate flowers while feeding; commensalism benefits one without harming the other; parasitism benefits one at the other’s expense. These relationships shape populations and can determine whether a species persists in a habitat.',
          'Carrying capacity is the largest population an environment can sustain. It depends on food, water, space, and shelter, and it can be reduced by drought, disease, or habitat loss. Human activity affects carrying capacity for other species through land use, pollution, and climate change, which is why conservation requires understanding whole systems. Resilience describes an ecosystem’s ability to recover after a disturbance. Systems with many species and overlapping relationships usually recover more fully than simplified ones, because alternative food sources buffer a loss. That principle guides restoration work, where replanting native species and reconnecting habitat is preferred to managing a single charismatic animal in isolation. Measuring resilience means comparing a disturbed site with an undisturbed one over several seasons, and the comparison is what turns a general idea into evidence.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A mountain range blocks moist air from the ocean. Predict the climate on each side and explain.',
        steps: [
          'Air rises on the ocean-facing side, cools, and drops precipitation.',
          'The descending air on the far side is dry and warms as it sinks.',
        ],
        answer: 'The ocean side is wet and the far side is dry, forming a rain shadow.',
      },
    ],
    terms: [
      ['climate', 'the long-term pattern of weather in a region'],
      ['rain shadow', 'the dry area on the sheltered side of a mountain range'],
      ['plate boundary', 'a place where two tectonic plates meet'],
      ['symbiosis', 'a close, long-term relationship between species'],
      ['carrying capacity', 'the largest population an environment can sustain'],
      ['decomposer', 'an organism that breaks down dead material'],
    ],
    practice: [
      mc('Which describes climate rather than weather?', ['it rained today', 'the average July high is 96°F', 'a storm is coming', 'it is windy now'], 1, 'Climate is a long-term pattern.'),
      mc('A rain shadow forms on the', ['windward side', 'leeward side', 'coast', 'equator'], 1, 'Descending air is dry.'),
      num('How many plate boundary types are named here?', 3, 'Divergent, convergent, and transform.'),
    ],
    review: [
      {
        prompt: 'How is climate different from weather?',
        answer: 'Weather is the condition of the atmosphere at a given moment, while climate is the long-term pattern of weather.',
      },
      {
        prompt: 'Why can removing one species affect many others?',
        answer: 'Species are linked through food webs and symbiotic relationships, so a loss changes competition, predation, and nutrient cycling.',
      },
    ],
    exercises: [
      'Compare climate data for two Texas cities and explain the differences.',
      'Map a local food web and predict the effects of losing one producer.',
    ],
  },
  'g8-ss-u1-l1': {
    topics: ['Great Compromise'],
    objectives: [
      'Explain the compromises that shaped the Constitution.',
      'Compare Federalist and Anti-Federalist arguments about ratification.',
    ],
    sections: [
      {
        heading: 'Compromises in Philadelphia',
        paragraphs: [
          'The Constitutional Convention of 1787 met because the Articles of Confederation left the national government unable to tax or regulate trade. The Virginia Plan proposed representation by population, favoring large states, while the New Jersey Plan proposed equal representation for each state, favoring small ones.',
          'The Great Compromise created a two-house Congress: the House apportioned by population and the Senate with equal state representation. The Three-Fifths Compromise counted enslaved people as three fifths of a person for representation, increasing Southern power without granting any rights to enslaved people. The Constitution also protected the slave trade until 1808.',
          'Other compromises shaped the presidency and the courts. The Electoral College balanced popular election with state influence, and the separation of powers divided authority among three branches with checks on one another. Federalism split power between the national government and the states, leaving unresolved questions that later conflicts would force open.',
        ],
      },
      {
        heading: 'The ratification fight',
        paragraphs: [
          'Federalists supported ratification, arguing that a stronger national government was needed for trade, defense, and stability. The Federalist Papers, written by Hamilton, Madison, and Jay, explained the proposed system and argued that separated powers would protect liberty.',
          'Anti-Federalists feared a distant government would threaten individual rights and state authority. They pointed to the absence of a bill of rights and argued that a large republic could not represent its citizens fairly. Their opposition was strong enough that ratification was uncertain in several states.',
          'The Bill of Rights resolved the impasse. Ten amendments ratified in 1791 protected speech, religion, assembly, and fair legal treatment, and the promise of those amendments persuaded holdout states. Ratification was a political bargain rather than a unanimous agreement, which is why the argument over federal power continues today. The Constitution also left slavery intact, and the compromises that secured ratification embedded a contradiction between liberty and bondage that later generations could not avoid. Reading the convention as a series of bargains rather than a single act of genius explains both the document’s durability and its silences, and it prepares students for the sectional conflict that followed. Comparing the Articles with the Constitution shows what the framers thought had failed and what they were willing to leave unresolved. The debates also show that compromise is not the same as agreement, since each side accepted a provision it disliked in exchange for one it wanted.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain how the Great Compromise resolved the dispute between large and small states.',
        steps: [
          'Large states wanted representation by population.',
          'Small states wanted equal representation per state.',
          'Congress was split into a population-based House and an equal Senate.',
        ],
        answer: 'One chamber by population and one by equal state representation satisfied both sides partially.',
      },
    ],
    terms: [
      ['Great Compromise', 'the agreement creating a two-house Congress'],
      ['Three-Fifths Compromise', 'counting enslaved people as three fifths of a person for representation'],
      ['federalism', 'division of power between national and state governments'],
      ['Federalist', 'a supporter of ratifying the Constitution'],
      ['Anti-Federalist', 'an opponent of ratification without a bill of rights'],
      ['amendment', 'a formal change to the Constitution'],
    ],
    practice: [
      mc('What did the Great Compromise create?', ['one house of Congress', 'a two-house Congress', 'the presidency', 'the Supreme Court'], 1, 'It created the House and Senate.'),
      mc('Anti-Federalists demanded', ['a stronger army', 'a bill of rights', 'an end to states', 'a king'], 1, 'They feared unprotected rights.'),
      num('How many amendments were ratified in the Bill of Rights?', 10, 'Ten amendments in 1791.'),
    ],
    review: [
      {
        prompt: 'Why did small states object to the Virginia Plan?',
        answer: 'Representation by population would give large states more power, leaving small states with little influence.',
      },
      {
        prompt: 'How did the Bill of Rights help secure ratification?',
        answer: 'It promised protections for individual liberties, which persuaded states that had withheld support without one.',
      },
    ],
    exercises: [
      'Debate the Virginia and New Jersey plans and propose a compromise.',
      'Summarize one Federalist Paper and one Anti-Federalist argument in your own words.',
    ],
  },
  'g8-ss-u2-l1': {
    topics: ['sectional crisis'],
    objectives: [
      'Explain how westward expansion intensified the conflict over slavery.',
      'Sequence the compromises and events that led to the Civil War.',
    ],
    sections: [
      {
        heading: 'Expansion and its costs',
        paragraphs: [
          'The Louisiana Purchase of 1803 doubled the nation’s territory, and expansion continued through the annexation of Texas in 1845, the Oregon settlement, and the Mexican Cession of 1848. The idea of manifest destiny framed expansion as a mission, but the reality included conquest, treaties broken under pressure, and the displacement of Native nations.',
          'The Indian Removal Act of 1830 forced southeastern nations west along the Trail of Tears, killing thousands. Expansion also raised a political question that could not be avoided: whether new territories would permit slavery. Every new state threatened to shift the balance of power in Congress.',
          'Economic change deepened the divide. The North industrialized and attracted immigrants, while the South remained agricultural and dependent on enslaved labor. Two societies with different labor systems were expanding into the same territories, and compromise grew harder as the stakes rose.',
        ],
      },
      {
        heading: 'The road to war',
        paragraphs: [
          'The Missouri Compromise of 1820 admitted Missouri as a slave state and Maine as free, drawing a line across the Louisiana Territory. The Compromise of 1850 admitted California free and added a stricter fugitive slave law, which angered Northerners and intensified resistance.',
          'The Kansas-Nebraska Act of 1854 repealed the Missouri Compromise line and let settlers decide, producing violent conflict in “Bleeding Kansas.” The Supreme Court’s Dred Scott decision in 1857 held that enslaved people could not claim citizenship and that Congress could not ban slavery in the territories.',
          'The election of Abraham Lincoln in 1860 convinced many Southern leaders that slavery was threatened. South Carolina seceded in December 1860, and six more states followed before Lincoln took office. The war began at Fort Sumter in April 1861, and the underlying cause was slavery, however much other issues were debated. Secession declarations from several states named slavery directly, which is why historians treat it as the central cause rather than a peripheral one. Tariffs and states’ rights were argued too, but they were arguments about protecting an economy built on enslaved labor, and the war’s outcome settled whether the Union could be dissolved by a minority of states. Reading a state’s declaration of secession alongside Lincoln’s first inaugural address shows how differently each side described the stakes. Those documents are short enough to read in a class period and specific enough to end a vague argument.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain how the Kansas-Nebraska Act increased sectional tension.',
        steps: [
          'It repealed the Missouri Compromise line, opening territory to slavery.',
          'Settlers and outside groups rushed in to influence the vote.',
          'Violence broke out, and both sides concluded compromise was failing.',
        ],
        answer: 'It reopened a settled question, produced violence, and convinced each side the other would not accept limits.',
      },
    ],
    terms: [
      ['manifest destiny', 'the belief that the United States should expand across the continent'],
      ['sectionalism', 'loyalty to a region rather than the whole country'],
      ['compromise', 'an agreement in which each side gives something up'],
      ['secede', 'to withdraw from the Union'],
      ['popular sovereignty', 'letting settlers decide whether to allow slavery'],
      ['abolitionist', 'a person who worked to end slavery'],
    ],
    practice: [
      mc('What did the Compromise of 1850 do?', ['admitted California free and strengthened the fugitive slave law', 'ended slavery', 'created the Republican Party', 'repealed the Constitution'], 0, 'It paired a free state with a stricter law.'),
      mc('The Dred Scott decision held that', ['slavery was illegal', 'enslaved people could not claim citizenship', 'Congress could ban slavery', 'states could not secede'], 1, 'The ruling denied citizenship.'),
      num('In what year did the Civil War begin?', 1861, 'Fighting began at Fort Sumter in April 1861.'),
    ],
    review: [
      {
        prompt: 'Why did westward expansion intensify the conflict over slavery?',
        answer: 'Each new territory raised the question of whether slavery would expand, threatening the balance of power in Congress.',
      },
      {
        prompt: 'What was the underlying cause of the Civil War?',
        answer: 'Slavery was the underlying cause, because the conflict concerned whether it would expand and be protected.',
      },
    ],
    exercises: [
      'Build a timeline from 1820 to 1861 with six events and one sentence each.',
      'Explain one compromise and what each side gained and gave up.',
    ],
  },
  'g8-ss-u3-l1': {
    topics: ['Reconstruction amendments'],
    objectives: [
      'Describe the war’s turning points and the meaning of emancipation.',
      'Explain the achievements and failures of Reconstruction.',
    ],
    sections: [
      {
        heading: 'The war and emancipation',
        paragraphs: [
          'The war began at Fort Sumter in April 1861. The Union’s strategy combined a naval blockade, control of the Mississippi, and pressure on the Confederate capital, while the Confederacy sought to defend its territory and win foreign support. Early battles showed the war would be long.',
          'The Emancipation Proclamation, issued after the battle of Antietam, declared enslaved people in rebelling states free as of January 1, 1863. It did not immediately free anyone under Confederate control, but it changed the war’s purpose and allowed Black soldiers to enlist. Gettysburg and Vicksburg in 1863 turned the war decisively toward the Union.',
          'The war killed roughly 620,000 soldiers and devastated the Southern economy. Sherman’s march through Georgia demonstrated total war against resources as well as armies. Lee surrendered at Appomattox in April 1865, and Lincoln was assassinated days later, leaving Reconstruction to a government eager to move on.',
        ],
      },
      {
        heading: 'Reconstruction and its limits',
        paragraphs: [
          'The Thirteenth Amendment abolished slavery in 1865, the Fourteenth granted citizenship and equal protection in 1868, and the Fifteenth protected voting rights regardless of race in 1870. The Freedmen’s Bureau opened schools, distributed food, and helped formerly enslaved people find work and reunite families.',
          'Radical Reconstruction placed the South under military control and required states to ratify the amendments before rejoining the Union. Black men voted in large numbers and were elected to local, state, and national offices. Public schools and legal protections expanded, though land ownership remained concentrated and most freedpeople worked as sharecroppers.',
          'Federal troops withdrew in 1877 as part of a political bargain that resolved a disputed presidential election. Without protection, white supremacist groups used violence and states passed laws that stripped Black citizens of voting rights and enforced segregation. Reconstruction’s promises were written into the Constitution but not enforced for nearly a century. Reconstruction’s legal legacy proved durable even when its politics failed: the Fourteenth Amendment later supplied the basis for desegregation and for applying the Bill of Rights to the states. Understanding that gap between written promise and enforcement is essential to reading the civil rights movement that followed, and it explains why constitutional text alone never settles a question of justice. Comparing the amendments with the Black codes passed in the same years makes that gap concrete.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain what changed and what did not change for a formerly enslaved family in 1866.',
        steps: [
          'Legal status changed: slavery ended and citizenship followed.',
          'Employment, land, and safety changed little, since sharecropping and violence persisted.',
        ],
        answer: 'Freedom and citizenship were legally secured, but economic dependence and physical danger remained.',
      },
    ],
    terms: [
      ['emancipation', 'the act of freeing enslaved people'],
      ['Reconstruction', 'the period after the Civil War when the South was rebuilt'],
      ['Freedmen’s Bureau', 'a federal agency that aided formerly enslaved people'],
      ['sharecropping', 'farming land for a share of the crop, often trapping workers in debt'],
      ['segregation', 'enforced separation of people by race'],
      ['amendment', 'a formal change to the Constitution'],
    ],
    practice: [
      mc('What did the Thirteenth Amendment do?', ['granted citizenship', 'abolished slavery', 'protected voting', 'ended the war'], 1, 'It abolished slavery nationwide.'),
      mc('What did the Fourteenth Amendment guarantee?', ['citizenship and equal protection', 'the right to vote', 'land ownership', 'free schooling'], 0, 'It granted citizenship and equal protection.'),
      num('In what year did federal troops withdraw from the South?', 1877, 'The withdrawal ended Reconstruction.'),
    ],
    review: [
      {
        prompt: 'What did the Thirteenth Amendment do?',
        answer: 'It abolished slavery throughout the United States when it was ratified in 1865.',
      },
      {
        prompt: 'Name one achievement and one failure of Reconstruction.',
        answer: 'It secured citizenship and voting rights by amendment, but violence and later segregation laws prevented those rights from being enforced.',
      },
    ],
    exercises: [
      'Chart the three Reconstruction amendments with what each protects.',
      'Explain in a paragraph how legal equality and lived equality differed after 1870.',
    ],
  },
};
