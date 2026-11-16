import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Grade 2, science and social studies depth pass. */
export const DEPTH_G2B: Record<string, LessonDepth> = {
  'g2-sci-u1-l1': {
    topics: ['measuring properties'],
    objectives: [
      'Describe an object using measurable properties such as mass and volume.',
      'Decide whether a change is physical by checking whether the material is the same.',
    ],
    sections: [
      {
        heading: 'Properties you can measure',
        paragraphs: [
          'A property is a feature of matter you can observe or measure. Color, shape, and texture are observed with your senses. Mass is how much matter an object contains, measured with a balance or scale. Volume is how much space something takes up, measured with a graduated cup for liquids.',
          'Some properties help identify a material. Metal is shiny and conducts heat, glass is transparent, and wood floats on water. A property is not a measurement of size: a large sponge and a small rock can have similar mass even though the sponge looks bigger, because mass depends on what the material is and how much of it there is.',
        ],
      },
      {
        heading: 'Physical changes keep the same material',
        paragraphs: [
          'In a physical change, the material is still the same substance afterward. Cutting paper changes its shape and size but not what paper is. Melting ice changes solid water into liquid water, and freezing it changes it back. Dissolving sugar in water changes how it looks, but the sugar is still there, which you can taste. Ice cream melting in a bowl is another example: it changes from solid to liquid, but it is still ice cream.',
          'Physical changes are usually reversible by physical means: recut, refreeze, evaporate, or filter. A chemical change makes a new substance, as when wood burns into ash and smoke, and it cannot be undone by these simple steps. The test is simple to state: did the material stay the same, or did something new form?',
        ],
      },
    ],
    examples: [
      {
        prompt: 'You tear a sheet of paper, then burn a corner of another sheet. Which change is physical, and why?',
        steps: [
          'Tearing changes only shape and size; the pieces are still paper.',
          'Burning produces ash, smoke, and heat, which are new materials.',
        ],
        answer: 'Tearing is physical; burning is chemical because a new substance forms.',
      },
    ],
    terms: [
      ['property', 'a feature of matter you can observe or measure'],
      ['mass', 'the amount of matter in an object'],
      ['volume', 'the amount of space an object or liquid takes up'],
      ['physical change', 'a change that does not make a new substance'],
      ['chemical change', 'a change that forms a new substance'],
      ['balance', 'a tool that compares or measures mass'],
    ],
    practice: [
      mc('Which change is physical?', ['burning toast', 'melting butter', 'rusting metal', 'baking a cake'], 1, 'Melting changes state but the butter is still butter.'),
      mc('Which tool measures volume of a liquid?', ['balance', 'ruler', 'graduated cup', 'thermometer'], 2, 'A graduated cup is marked in units of volume.'),
      num('How many states of water are named in this lesson?', 3, 'Solid ice, liquid water, and gas vapor.'),
    ],
    review: [
      {
        prompt: 'How can you tell that a change was only physical?',
        answer: 'The material is the same substance afterward, even if its shape, size, or state changed.',
      },
      {
        prompt: 'Why can two objects of the same size have different mass?',
        answer: 'Mass depends on the material, and different materials pack different amounts of matter into the same space.',
      },
    ],
    exercises: [
      'Find three objects, describe two measurable properties of each, and rank them by mass.',
      'Perform two physical changes at home and record what stayed the same.',
    ],
  },
  'g2-sci-u2-l1': {
    topics: ['force and motion'],
    objectives: [
      'Explain how a push or pull can change an object’s speed or direction.',
      'Describe a repeating motion pattern and what causes it.',
    ],
    sections: [
      {
        heading: 'Forces change motion',
        paragraphs: [
          'A force is a push or a pull. Forces cannot be seen, but their effects can: a force can start an object moving, stop it, speed it up, slow it down, or change its direction. Kicking a ball is a push, and pulling a wagon handle is a pull. The harder the push or pull, the greater the change in motion.',
          'An object at rest stays at rest until a force acts on it. That is why a book on a table does not move by itself. Friction is a force that opposes sliding motion, which is why a rolling ball slows down on carpet faster than on tile. Heavier objects need more force to move because they have more mass.',
        ],
      },
      {
        heading: 'Patterns of motion',
        paragraphs: [
          'Some motion repeats in a pattern. A swing moves forward and back, a seesaw goes up and down, and a pendulum swings side to side. These back-and-forth motions are predictable, which means you can tell where the object will be next. A pattern is a repeat you can describe with words such as first, then, and again.',
          'Gravity is a force that pulls objects toward Earth, and it explains many patterns. A dropped ball falls, bounces, and falls again because gravity pulls it down while the bounce pushes it back up. The bounces get lower each time because some energy is lost to sound, heat, and bending.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A ball rolls across a rug and stops. What force slowed it, and what would happen on a smooth floor?',
        steps: [
          'The rug’s surface creates friction against the ball.',
          'A smooth floor creates less friction, so the ball would roll farther.',
        ],
        answer: 'Friction stopped it; on a smooth floor it would roll farther before stopping.',
      },
    ],
    terms: [
      ['force', 'a push or a pull'],
      ['friction', 'a force that opposes motion between surfaces'],
      ['gravity', 'a force that pulls objects toward Earth'],
      ['motion', 'a change in an object’s position over time'],
      ['pattern', 'something that repeats in a predictable way'],
      ['mass', 'the amount of matter in an object'],
    ],
    practice: [
      mc('Which is a pull?', ['kicking a rock', 'dragging a suitcase', 'throwing a ball', 'pushing a door'], 1, 'Dragging moves the object toward you.'),
      mc('What force pulls a dropped pencil to the floor?', ['friction', 'gravity', 'magnetism', 'electricity'], 1, 'Gravity pulls objects toward Earth.'),
      num('How many ways can a force change motion according to this lesson?', 5, 'Start, stop, speed up, slow down, change direction.'),
    ],
    review: [
      {
        prompt: 'What two things can a force change about an object’s motion?',
        answer: 'It can change how fast the object moves and which direction it moves.',
      },
      {
        prompt: 'Why does a ball stop sooner on carpet than on tile?',
        answer: 'Carpet creates more friction, which opposes the ball’s motion more strongly.',
      },
    ],
    exercises: [
      'Push a toy car on two surfaces and measure how far it travels each time.',
      'List five motions at home that repeat in a pattern and name the force involved.',
    ],
  },
  'g2-sci-u3-l1': {
    topics: ['food chain roles'],
    objectives: [
      'Describe the roles of producers, consumers, and decomposers in a food chain.',
      'Explain what happens to a food chain when one part is removed.',
    ],
    sections: [
      {
        heading: 'Roles in a food chain',
        paragraphs: [
          'A food chain shows who eats whom. It begins with a producer, a plant that makes its own food using sunlight. Grass, trees, and algae are producers. Next come consumers: animals that eat other living things. A rabbit eating grass is a consumer, and a hawk eating a rabbit is also a consumer.',
          'Decomposers break down dead plants and animals and return nutrients to the soil. Mushrooms, bacteria, and earthworms are decomposers. Without them, dead material would pile up and the soil would run out of the nutrients plants need. Arrows in a food chain always point from the food to the eater, showing the direction the energy travels.',
        ],
      },
      {
        heading: 'Habitats and balance',
        paragraphs: [
          'A habitat provides an organism with food, water, shelter, and space. A pond, a prairie, and a forest are different habitats with different producers and consumers. The same animal may be a consumer in more than one food chain, and many food chains overlap to form a food web.',
          'If one part of a food chain disappears, the others are affected. Without plants, plant-eaters have no food and their numbers drop; without plant-eaters, predators lose their prey. This is why protecting a habitat protects every organism in it, not just the ones people find attractive. A single habitat usually contains many food chains that share producers and consumers, which is why scientists draw them as a food web rather than a single line.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Show a pond food chain and label each role.',
        steps: [
          'Algae uses sunlight to make food, so it is a producer.',
          'A tadpole eats algae and a fish eats tadpoles, so both are consumers.',
        ],
        answer: 'Algae (producer) → tadpole (consumer) → fish (consumer), with bacteria decomposing what dies.',
      },
    ],
    terms: [
      ['producer', 'a living thing that makes its own food using sunlight'],
      ['consumer', 'a living thing that eats other living things'],
      ['decomposer', 'a living thing that breaks down dead material'],
      ['food chain', 'the path energy takes from one living thing to another'],
      ['habitat', 'the place where an organism finds food, water, and shelter'],
      ['food web', 'overlapping food chains in one habitat'],
    ],
    practice: [
      mc('Which is a producer?', ['a rabbit', 'grass', 'a hawk', 'a mushroom'], 1, 'Grass makes its own food from sunlight.'),
      mc('What do decomposers return to the soil?', ['sunlight', 'nutrients', 'oxygen only', 'water only'], 1, 'They release nutrients that plants reuse.'),
      num('How many roles are named in a food chain here?', 3, 'Producer, consumer, and decomposer.'),
    ],
    review: [
      {
        prompt: 'What is a consumer in a food chain?',
        answer: 'A living thing that gets its energy by eating plants or other animals.',
      },
      {
        prompt: 'What happens if a habitat loses its plants?',
        answer: 'Plant-eaters lose their food supply, and the animals that eat them lose prey as well.',
      },
    ],
    exercises: [
      'Draw a food chain from your yard or a nearby park and label every role.',
      'Explain what would happen to a pond food chain if all the fish were removed.',
    ],
  },
  'g2-ss-u1-l1': {
    topics: ['public services'],
    objectives: [
      'Name services provided by local government and explain who pays for them.',
      'Explain why taxes are necessary for shared services.',
    ],
    sections: [
      {
        heading: 'Services a city provides',
        paragraphs: [
          'Local government provides services that would be hard for one person to supply alone. A city runs police and fire departments, collects trash, maintains streets and parks, supplies water, and operates libraries. These services are shared: everyone can use the library, and everyone benefits when fires are put out quickly.',
          'Some services come from the county or the state instead. Counties keep records such as birth certificates and run courts; the state builds and maintains highways and sets school standards. Knowing which level of government provides a service helps you know whom to call or vote for when something needs fixing.',
        ],
      },
      {
        heading: 'Who pays, and why',
        paragraphs: [
          'Public services are paid for mostly by taxes, which are money collected from people and businesses. Property taxes on land and buildings fund schools and local services; sales taxes add a small amount to many purchases. Taxes are compulsory because a service that everyone uses cannot depend on voluntary donations alone.',
          'People disagree about which services are worth the cost, and that disagreement is settled by voting and by public meetings. Paying taxes is not the same as buying a product: you do not receive exactly what you paid, but you receive a community where streets are paved, water is safe, and fires are fought. City councils publish a budget each year, and residents may attend meetings to ask how that money is being spent.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A streetlight is broken. Which level of government usually fixes it, and how is it paid for?',
        steps: [
          'Streetlights are maintained by the city or town.',
          'The work is funded from the city budget, which comes largely from taxes.',
        ],
        answer: 'The city fixes it using money collected through taxes.',
      },
    ],
    terms: [
      ['local government', 'the government of a city, town, or county'],
      ['public service', 'a service provided for everyone by government'],
      ['tax', 'money collected by government to pay for public services'],
      ['budget', 'a plan for how money will be spent'],
      ['property tax', 'a tax on land and buildings'],
      ['county', 'a division of a state that handles local records and courts'],
    ],
    practice: [
      mc('Which is a local government service?', ['printing money', 'trash collection', 'declaring war', 'issuing passports'], 1, 'Cities collect trash.'),
      mc('Most public services are paid for by', ['donations', 'taxes', 'lotteries only', 'fees only'], 1, 'Taxes fund most public services.'),
      num('How many levels of government are named in this lesson?', 3, 'City or town, county, and state.'),
    ],
    review: [
      {
        prompt: 'Name three services your city or town provides.',
        answer: 'Cities typically provide police and fire protection, trash collection, and public parks or libraries.',
      },
      {
        prompt: 'Why do people pay taxes?',
        answer: 'Taxes pay for shared services that individuals could not reasonably provide for themselves.',
      },
    ],
    exercises: [
      'List five public services you used this week and name the level of government for each.',
      'Ask an adult which taxes they pay and what those taxes support.',
    ],
  },
  'g2-ss-u2-l1': {
    topics: ['Texas communities over time'],
    objectives: [
      'Compare daily life in early Texas with daily life today.',
      'Explain how one invention or technology changed Texas communities.',
    ],
    sections: [
      {
        heading: 'Daily life in early Texas',
        paragraphs: [
          'In the 1800s, most Texans lived on farms or ranches and made much of what they used. Families hauled water from wells, cooked over fires, made their own soap and clothing, and traveled by horse or wagon. Children often attended school in a one-room building and helped with chores before and after lessons.',
          'Communities were small and far apart, so people relied on neighbors. Raising a barn or harvesting a crop was shared work. Letters took weeks to arrive, and news traveled with travelers. This does not mean life was simple: it required skills in farming, building, medicine, and repair that most families today pay specialists to provide.',
        ],
      },
      {
        heading: 'What changed, and what stayed',
        paragraphs: [
          'Railroads were the first great change. A town with a rail line could ship cotton or cattle to market and receive manufactured goods, so it grew while towns without rails shrank. Later, cars and paved highways made it possible to live far from work. Electricity, telephones, and indoor plumbing changed household work dramatically.',
          'Some things have not changed. Texans still depend on water, still build communities around work, and still help neighbors after storms and floods. Comparing then and now shows that technology changes how needs are met, not that needs disappear. The past also explains why some Texas towns are located where they are. Photographs, letters, and diaries from the 1800s are primary sources, meaning they were made by people who lived through the events they describe.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'How did the railroad change a small Texas town?',
        steps: [
          'Farmers could ship crops to distant buyers instead of selling only locally.',
          'More goods and people arrived, so businesses and population grew.',
        ],
        answer: 'The railroad connected the town to wider markets, which brought growth.',
      },
    ],
    terms: [
      ['settler', 'a person who moves to a new place to live'],
      ['railroad', 'a track system that carries trains and freight'],
      ['community', 'a group of people who live and work in one place'],
      ['technology', 'a tool or method that makes a task easier'],
      ['market', 'a place or system where goods are bought and sold'],
      ['population', 'the number of people living in a place'],
    ],
    practice: [
      mc('Which change connected Texas towns to distant markets?', ['the telegraph', 'the railroad', 'indoor plumbing', 'the telephone'], 1, 'Railroads carried crops and goods to market.'),
      mc('In early Texas, most families', ['bought all their food', 'made much of what they used', 'worked in factories', 'had no neighbors'], 1, 'They produced much of what they needed.'),
      num('How many inventions or technologies are named as changing daily life here?', 4, 'Railroads, cars, electricity, telephones.'),
    ],
    review: [
      {
        prompt: 'Name two inventions that changed daily life in Texas.',
        answer: 'Railroads changed how goods moved, and electricity changed work inside the home.',
      },
      {
        prompt: 'How did railroads change Texas towns?',
        answer: 'Towns on rail lines could ship goods and attract business, so they grew while others declined.',
      },
    ],
    exercises: [
      'Interview an older relative about one way daily life has changed since childhood.',
      'Draw a before-and-after picture of a Texas kitchen in 1880 and today.',
    ],
  },
  'g2-ss-u3-l1': {
    topics: ['Texas resources and jobs'],
    objectives: [
      'Name the four natural regions of Texas and one resource from each.',
      'Explain how a natural resource supports jobs in a region.',
    ],
    sections: [
      {
        heading: 'Regions have different land and resources',
        paragraphs: [
          'Texas is large enough to contain several natural regions. The Gulf Coastal Plain has rich soil, oil, and ports. The North Central Plains have farmland and limestone. The Great Plains have ranchland and wind, and the Mountains and Basins region is dry with few people. Each region’s land and climate shape what can be grown, built, and sold.',
          'A natural resource is something found in nature that people use. Oil, natural gas, fertile soil, water, timber, and wind are all Texas resources. Some are renewable, meaning they can be replaced in a human lifetime, such as wind and sunlight. Others, like oil, are nonrenewable because they formed over millions of years.',
        ],
      },
      {
        heading: 'Resources become jobs',
        paragraphs: [
          'A resource creates jobs when people work to extract it, process it, or move it. Oil supports drilling crews, refinery workers, and truck drivers. Fertile soil supports farmers, equipment dealers, and grocery suppliers. Wind supports turbine technicians and electric utilities. The same resource can support many different jobs at once.',
          'Regions specialize in what their resources make cheapest to produce. That is why cotton grew in the plains, why ports handle shipping on the coast, and why ranchland supports cattle. Specializing means a region depends on trade for the goods it does not produce, which connects Texas regions to each other and to the world. A map of the regions shows that Texas is larger than many countries, which is why its land, rainfall, and weather differ so much from place to place.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'How does fertile soil in the Coastal Plain create jobs beyond farming?',
        steps: [
          'Farmers grow crops on the soil.',
          'Those crops need seed suppliers, truck drivers, and stores to sell them.',
        ],
        answer: 'The soil supports farming and the transport and selling jobs that follow it.',
      },
    ],
    terms: [
      ['region', 'a large area with features that set it apart'],
      ['natural resource', 'something from nature that people use'],
      ['renewable', 'able to be replaced within a human lifetime'],
      ['nonrenewable', 'formed over millions of years and not easily replaced'],
      ['specialize', 'to focus on producing a particular good or service'],
      ['trade', 'exchanging goods and services between people or places'],
    ],
    practice: [
      mc('Which is a renewable resource?', ['oil', 'wind', 'natural gas', 'coal'], 1, 'Wind is replaced continuously.'),
      mc('Which region is described as dry with few people?', ['Gulf Coastal Plain', 'North Central Plains', 'Mountains and Basins', 'Great Plains'], 2, 'The Mountains and Basins region is dry and sparsely populated.'),
      num('How many natural regions of Texas are named here?', 4, 'Coastal Plain, North Central Plains, Great Plains, Mountains and Basins.'),
    ],
    review: [
      {
        prompt: 'Name two Texas regions and one resource in each.',
        answer: 'The Gulf Coastal Plain has oil and rich soil, and the Great Plains has ranchland and wind.',
      },
      {
        prompt: 'How does a resource create jobs?',
        answer: 'People are needed to gather, process, transport, and sell what the resource provides.',
      },
    ],
    exercises: [
      'Label the four Texas regions on a map and write one resource for each.',
      'Choose a product in your home and trace which region’s resources helped make it.',
    ],
  },
};
