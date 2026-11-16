import type { LessonDepth } from './types';

/** Authored depth for grades 6–8. */
export const DEPTH_G68: Record<string, LessonDepth> = {
  'g6-ela-u1-l1': {
    topics: ['conflict', 'plot structure'],
    applicationTitle: 'Why stories need trouble',
    application:
      'A story without conflict is a list of events. Conflict is the pressure that forces a character to choose: a person against another person, against nature, against society, or against themselves. Plot is the chain of causes that follows from that choice, so the turning point is not just a dramatic moment but the place where the character can no longer avoid deciding.',
    example: {
      prompt: 'A girl hides a failing grade from her parents. Identify the conflict and the turning point.',
      steps: [
        'The conflict is internal: honesty versus fear of disappointment.',
        'The turning point is when she chooses to show the grade before the conference.',
      ],
      answer: 'Internal conflict, resolved at the moment she chooses honesty.',
    },
    terms: [
      ['conflict', 'the struggle between opposing forces that drives a story'],
      ['turning point', 'the moment a character’s choice changes the direction of the plot'],
    ],
    review: [
      {
        prompt: 'How is internal conflict different from external conflict?',
        answer: 'Internal conflict happens inside a character; external conflict is with a person, nature, or society.',
      },
      {
        prompt: 'Why does a resolution need to follow from the conflict?',
        answer: 'Because a satisfying ending shows the consequences of the choice the conflict forced.',
      },
    ],
    exercises: [
      'Chart the conflict and turning point of a story you have read.',
      'Write a two-paragraph scene with an internal conflict and a clear choice.',
    ],
  },
  'g6-ela-u2-l1': {
    topics: ['central idea', 'author purpose'],
    applicationTitle: 'Reading for what a text is doing',
    application:
      'A central idea is what a text says overall; an author’s purpose is why it says it: to inform, persuade, entertain, or explain. Bias is a slant that favors one side, visible in word choice and in what is left out. News, advertising, and textbooks all have purposes, so asking “who wrote this, for whom, and why?” is part of reading accurately.',
    example: {
      prompt: 'An article calls a policy “a reckless gamble” and quotes only opponents. What is the purpose and one sign of bias?',
      steps: [
        'The language and one-sided sources aim to persuade against the policy.',
        'Loaded words and missing supporters are the bias signals.',
      ],
      answer: 'Purpose: persuade. Bias: loaded language and one-sided sourcing.',
    },
    terms: [
      ['central idea', 'the main point a text develops about its topic'],
      ['bias', 'a slant toward one side shown by word choice or omission'],
    ],
    review: [
      {
        prompt: 'Name three common author purposes.',
        answer: 'To inform, to persuade, and to entertain, plus to explain or describe.',
      },
      {
        prompt: 'How can omission reveal bias?',
        answer: 'Leaving out a strong opposing fact makes one side look better than the evidence supports.',
      },
    ],
    exercises: [
      'Find an opinion article and underline two loaded words.',
      'State the central idea of an article in one sentence.',
    ],
  },
  'g6-ela-u3-l1': {
    topics: ['argumentative essay', 'counterclaim'],
    applicationTitle: 'Building an argument that survives disagreement',
    application:
      'An argumentative essay makes a claim, supports it with reasons and evidence, and answers the strongest objection. The counterclaim is not a weakness; addressing it shows you understand the issue. A useful structure is claim, reason with evidence, counterclaim, rebuttal, and conclusion, with every paragraph tied back to the claim by a sentence of commentary.',
    example: {
      prompt: 'Claim: schools should start later. Write a counterclaim and a rebuttal.',
      steps: [
        'Counterclaim: later starts disrupt bus schedules and after-school jobs.',
        'Rebuttal: districts with staggered bus routes have absorbed the change without losing instruction time.',
      ],
      answer: 'Concede the scheduling cost, then show evidence that it is manageable.',
    },
    terms: [
      ['claim', 'the position the essay argues for'],
      ['rebuttal', 'the answer to a counterclaim that restores the argument'],
    ],
    review: [
      {
        prompt: 'Where should a counterclaim appear?',
        answer: 'After the main evidence, before the conclusion, so the rebuttal can close the case.',
      },
      {
        prompt: 'What makes evidence strong in an essay?',
        answer: 'It is relevant, specific, cited, and explained in your own commentary.',
      },
    ],
    exercises: [
      'Write a claim, two reasons, and one counterclaim on a school issue.',
      'Draft a rebuttal paragraph using one piece of evidence.',
    ],
  },
  'g6-math-u1-l1': {
    topics: ['unit rate', 'proportions'],
    applicationTitle: 'Rates you can compare',
    application:
      'A unit rate expresses a ratio per one unit: 12 miles in 3 hours is 4 miles per hour. Unit rates make comparisons fair, which is why grocery stores post price per ounce. A proportion sets two ratios equal and is solved by reasoning about equivalent fractions or cross-multiplying, and the units must match on both sides or the equation is meaningless.',
    example: {
      prompt: 'A 12-ounce box costs $3.60 and a 20-ounce box costs $5.40. Which is the better buy?',
      steps: [
        'Divide price by ounces: 3.60 ÷ 12 = $0.30 per ounce.',
        '5.40 ÷ 20 = $0.27 per ounce.',
      ],
      answer: 'The 20-ounce box, at 27 cents per ounce versus 30 cents.',
    },
    terms: [
      ['unit rate', 'a ratio that compares a quantity to one unit of another'],
      ['proportion', 'an equation stating that two ratios are equal'],
    ],
    review: [
      {
        prompt: 'How do you solve a proportion?',
        answer: 'Cross-multiply, then divide to isolate the unknown, checking that units match.',
      },
      {
        prompt: 'Why are unit rates useful for comparison?',
        answer: 'They put different package sizes or speeds on the same per-one basis.',
      },
    ],
    exercises: [
      'Find the unit price of three items at a store and rank them.',
      'Solve: 5/8 = x/24.',
    ],
  },
  'g6-math-u2-l1': {
    topics: ['integers', 'absolute value'],
    applicationTitle: 'Negative numbers in the real world',
    application:
      'Integers include negatives, which model temperatures below zero, debts, and elevations below sea level. Absolute value is distance from zero, so |−7| = 7 and |7| = 7. Adding a negative moves left on the number line; subtracting a negative moves right, which is why 4 − (−3) = 7: removing a debt increases what you have.',
    example: {
      prompt: 'The temperature is −6°F and rises 9 degrees. What is the new temperature?',
      steps: ['Start at −6 on the number line.', 'Move right 9: −6 + 9 = 3.'],
      answer: '3°F, because adding a positive moves right toward zero and past it.',
    },
    terms: [
      ['integer', 'a whole number that can be positive, negative, or zero'],
      ['absolute value', 'a number’s distance from zero, always nonnegative'],
    ],
    review: [
      {
        prompt: 'Why is −8 + 5 equal to −3?',
        answer: 'You move 5 right from −8, landing 3 below zero.',
      },
      {
        prompt: 'How do you multiply two negative numbers?',
        answer: 'The product is positive, because the signs cancel.',
      },
    ],
    exercises: [
      'Order −4, 3, −9, and 0 from least to greatest.',
      'Compute −12 + 7 − (−3) and explain each move.',
    ],
  },
  'g6-math-u3-l1': {
    topics: ['one-step equations', 'area of triangles'],
    applicationTitle: 'Undoing an operation',
    application:
      'Solving an equation means undoing what was done to the variable while keeping both sides equal. If 8 was added, subtract 8 from both sides; if the variable was multiplied by 3, divide both sides by 3. The same balance idea applies to formulas: the area of a triangle is half the base times height, so finding a missing height means undoing the multiplication.',
    example: {
      prompt: 'Solve x + 8 = 15, then find the height of a triangle with area 24 and base 8.',
      steps: ['Subtract 8 from both sides: x = 7.', '24 = (1/2)(8)h = 4h, so h = 6.'],
      answer: 'x = 7; the triangle’s height is 6 units.',
    },
    terms: [
      ['inverse operation', 'the operation that undoes another, such as subtraction for addition'],
      ['area', 'the space inside a flat shape, measured in square units'],
    ],
    review: [
      {
        prompt: 'Why must you do the same thing to both sides?',
        answer: 'To keep the equation balanced so the two sides stay equal.',
      },
      {
        prompt: 'How do you check a solution?',
        answer: 'Substitute it back into the original equation and confirm both sides match.',
      },
    ],
    exercises: [
      'Solve 4x = 36 and x/3 = 9, checking each answer.',
      'Find the base of a triangle with area 30 and height 6.',
    ],
  },
  'g6-sci-u1-l1': {
    topics: ['density', 'characteristic properties'],
    applicationTitle: 'Identifying matter by its properties',
    application:
      'Density is mass divided by volume and is a characteristic property: a substance’s density does not change when you cut it into pieces. Conductivity, melting point, and solubility are also characteristic. That is how you distinguish materials that look alike, and it explains why oil floats on water (about 0.92 g/cm³ versus 1.0) and why a heavy but hollow object can still float.',
    example: {
      prompt: 'A metal sample has mass 20 g and volume 5 cm³. Identify its likely density and compare with water.',
      steps: ['Density = mass ÷ volume = 20 ÷ 5.', 'Density = 4 g/cm³.'],
      answer: '4 g/cm³, so it is denser than water and will sink.',
    },
    terms: [
      ['density', 'mass per unit volume, measured in g/cm³'],
      ['characteristic property', 'a property that identifies a substance regardless of sample size'],
    ],
    review: [
      {
        prompt: 'Why does cutting a sample in half not change its density?',
        answer: 'Both mass and volume halve, so the ratio stays the same.',
      },
      {
        prompt: 'What does conductivity tell you about a material?',
        answer: 'Whether it lets heat or electric current pass through easily.',
      },
    ],
    exercises: [
      'Measure a small object’s mass and volume and compute its density.',
      'Predict whether five objects will float and test your predictions.',
    ],
  },
  'g6-sci-u2-l1': {
    topics: ['net force', 'unbalanced forces'],
    applicationTitle: 'Adding forces to predict motion',
    application:
      'Forces are vectors: they have size and direction. Net force is the sum, so a 10 N push right and a 4 N push left give 6 N right. Balanced forces produce no change in motion; unbalanced forces accelerate an object. This is why a book rests on a table (gravity balanced by the table’s push) yet slides when a larger push overcomes friction.',
    example: {
      prompt: 'Two people push a box: 30 N right and 18 N left. What happens?',
      steps: ['Subtract opposing forces: 30 − 18 = 12 N.', 'The larger force points right, so the net force is 12 N right.'],
      answer: 'The box accelerates to the right; the forces are unbalanced.',
    },
    terms: [
      ['net force', 'the single force that results from combining all forces on an object'],
      ['balanced forces', 'equal and opposite forces that produce no change in motion'],
    ],
    review: [
      {
        prompt: 'What is the net force when forces are balanced?',
        answer: 'Zero, so the object stays at rest or keeps a constant velocity.',
      },
      {
        prompt: 'Why does friction matter in predicting motion?',
        answer: 'It opposes motion, so it reduces the net force pushing an object forward.',
      },
    ],
    exercises: [
      'Draw a free-body diagram for a book on a table.',
      'Compute net force for three pairs of opposing forces.',
    ],
  },
  'g6-sci-u3-l1': {
    topics: ['plate tectonics', 'solar system'],
    applicationTitle: 'A moving planet and its neighbors',
    application:
      'Earth’s lithosphere is broken into plates that move on the mantle. Divergent boundaries create ridges and rifts, convergent boundaries create mountains and volcanoes, and transform boundaries produce earthquakes. The solar system’s planets orbit the Sun in order from Mercury to Neptune, with rocky planets near the Sun and gas and ice giants farther out. Gravity keeps each planet in orbit, and the farther a planet is, the longer its year.',
    example: {
      prompt: 'The Himalayas are rising. What kind of plate boundary is involved?',
      steps: [
        'Two continental plates are colliding rather than spreading apart.',
        'Convergent boundaries crumple crust upward.',
      ],
      answer: 'A convergent boundary between continental plates.',
    },
    terms: [
      ['plate boundary', 'the edge where two tectonic plates meet'],
      ['orbit', 'the path one body follows around another under gravity'],
    ],
    review: [
      {
        prompt: 'Name the three types of plate boundaries and one feature each makes.',
        answer: 'Divergent: mid-ocean ridge; convergent: mountains or volcanoes; transform: earthquakes.',
      },
      {
        prompt: 'List the planets in order from the Sun.',
        answer: 'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.',
      },
    ],
    exercises: [
      'Label a diagram of the three plate boundaries.',
      'Make a scale model or table of planet distances.',
    ],
  },
  'g6-ss-u1-l1': {
    topics: ['river valleys', 'early civilizations'],
    applicationTitle: 'Why cities grew beside rivers',
    application:
      'Farming produced surplus food, and surplus allowed some people to specialize as potters, priests, and soldiers. Rivers made that possible: annual floods renewed soil, irrigation extended farmland, and waterways moved grain. The result was the first cities in Mesopotamia, Egypt, the Indus Valley, and China, each with government, writing, and organized religion. Farming also changed how people lived: settled villages replaced migration, and stored grain made wealth unequal.',
    example: {
      prompt: 'Explain how a flood could both help and harm an early city.',
      steps: [
        'Help: silt renewed soil and produced larger harvests.',
        'Harm: uncontrolled flooding destroyed homes and crops, which is why levees and irrigation were built.',
      ],
      answer: 'Floods enriched farmland but required organized control, which strengthened government.',
    },
    terms: [
      ['surplus', 'more food or goods than a group needs to survive'],
      ['civilization', 'a complex society with cities, government, and writing'],
    ],
    review: [
      {
        prompt: 'Why does surplus lead to specialization?',
        answer: 'If fewer people must farm, others can work at other jobs and trade for food.',
      },
      {
        prompt: 'Name two features shared by early civilizations.',
        answer: 'Cities and writing, plus government, religion, and social classes.',
      },
    ],
    exercises: [
      'Draw a river-valley settlement and label its farm, market, and temple.',
      'Write a paragraph on one consequence of irrigation.',
    ],
  },
  'g6-ss-u2-l1': {
    topics: ['classical empires', 'Silk Roads'],
    applicationTitle: 'How empires moved ideas',
    application:
      'Classical empires unified large territories through roads, laws, and armies. Rome built roads and a legal tradition; the Han expanded trade routes; the Maurya and Gupta supported Buddhism and mathematics. Trade routes such as the Silk Roads carried religion, technology, and disease along with goods, which is why a faith born in one region could become dominant a thousand miles away.',
    example: {
      prompt: 'How did the Silk Roads spread Buddhism from India to China?',
      steps: [
        'Merchants and monks traveled the routes for trade.',
        'They carried texts, practices, and art, which took root along the way.',
      ],
      answer: 'Trade routes carried missionaries and texts, not just goods.',
    },
    terms: [
      ['empire', 'a large state ruling many peoples and territories'],
      ['cultural diffusion', 'the spread of ideas, beliefs, or technology between societies'],
    ],
    review: [
      {
        prompt: 'Give one reason empires built roads.',
        answer: 'To move armies, tax collectors, and trade goods quickly across territory.',
      },
      {
        prompt: 'What traveled on the Silk Roads besides goods?',
        answer: 'Religions, technologies, languages, and diseases moved along with trade goods.',
      },
    ],
    exercises: [
      'Map the Silk Roads and mark two goods and one religion.',
      'Write a paragraph on one effect of cultural diffusion.',
    ],
  },
  'g6-ss-u3-l1': {
    topics: ['age of exploration', 'Columbian Exchange'],
    applicationTitle: 'Contact and its consequences',
    application:
      'European exploration after 1400 was driven by trade, religion, and competition for power. The Columbian Exchange moved plants, animals, people, and diseases between hemispheres: horses and wheat went west; corn, potatoes, and tomatoes went east. The exchange enriched diets worldwide but also brought smallpox and enslavement, so its consequences were both transformative and catastrophic.',
    example: {
      prompt: 'Explain two consequences of the Columbian Exchange, one positive and one negative.',
      steps: [
        'Positive: potatoes and corn raised food supplies in Europe, Africa, and Asia.',
        'Negative: Eurasian diseases killed a large share of Indigenous Americans.',
      ],
      answer: 'Global diets improved while disease devastated American populations.',
    },
    terms: [
      ['Columbian Exchange', 'the transfer of plants, animals, people, and diseases across the Atlantic'],
      ['mercantilism', 'an economic policy measuring national power by accumulated wealth and trade'],
    ],
    review: [
      {
        prompt: 'Name two foods that moved from the Americas to Europe.',
        answer: 'Corn and potatoes, along with tomatoes, peppers, and chocolate.',
      },
      {
        prompt: 'Why did disease spread so quickly after contact?',
        answer: 'Indigenous populations had no prior exposure or immunity to Eurasian diseases.',
      },
    ],
    exercises: [
      'Make a two-column chart of items exchanged in each direction.',
      'Write a paragraph weighing one benefit and one cost of contact.',
    ],
  },

  'g7-ela-u1-l1': {
    topics: ['point of view', 'pacing and tone'],
    applicationTitle: 'Who tells it, and how fast',
    application:
      'Point of view decides what a reader can know. A first-person narrator is limited and may be unreliable; a third-person limited narrator follows one character; omniscient narration can enter many minds. Pacing controls tension: short sentences and scene breaks speed a reader up, while long descriptions slow them down. Tone is the writer’s attitude, built from word choice and detail.',
    example: {
      prompt: 'A narrator says “I wasn’t scared” while describing shaking hands. What is the effect?',
      steps: [
        'First person gives direct access but only to what the narrator admits.',
        'The contradiction between words and details creates irony and unreliability.',
      ],
      answer: 'The reader trusts the details over the claim, sensing fear the narrator denies.',
    },
    terms: [
      ['point of view', 'the perspective from which a story is told'],
      ['tone', 'the writer’s attitude toward the subject, conveyed by language'],
    ],
    review: [
      {
        prompt: 'What can an omniscient narrator do that a first-person narrator cannot?',
        answer: 'Enter multiple characters’ thoughts and report events the narrator did not witness.',
      },
      {
        prompt: 'How does pacing create tension?',
        answer: 'Short, quick scenes make events feel urgent; slow passages build dread or reflection.',
      },
    ],
    exercises: [
      'Rewrite a paragraph from a different point of view.',
      'Identify three tone words in a passage and explain their effect.',
    ],
  },
  'g7-ela-u2-l1': {
    topics: ['argument mapping', 'source credibility'],
    applicationTitle: 'Mapping an argument before judging it',
    application:
      'Mapping an argument means separating its claim, reasons, evidence, and assumptions. Once mapped, you can test each part: is the evidence accurate, current, and relevant, and does it actually support the reason? Credibility depends on the author’s expertise, the publisher’s standards, the date, and whether sources are cited, not on whether you agree with the conclusion.',
    example: {
      prompt: '“We need later start times. Students are sleep-deprived; a district study found 20% fewer absences after the change.” Map it.',
      steps: [
        'Claim: later start times are needed. Reason: students are sleep-deprived and absences fall.',
        'Evidence: district study. Assumption: the schedule caused the drop.',
      ],
      answer: 'The assumption is the weak link; other changes could explain the absences.',
    },
    terms: [
      ['warrant', 'the unstated assumption connecting evidence to a claim'],
      ['credibility', 'the trustworthiness of a source based on expertise, evidence, and process'],
    ],
    review: [
      {
        prompt: 'Why is a warrant important?',
        answer: 'It is the hidden link; if it is false, the evidence does not support the claim.',
      },
      {
        prompt: 'Name three signs of a credible source.',
        answer: 'A named expert author, cited evidence, and a recent date from a reputable publisher.',
      },
    ],
    exercises: [
      'Map an editorial’s claim, reasons, evidence, and one assumption.',
      'Compare two sources on the same topic for credibility.',
    ],
  },
  'g7-ela-u3-l1': {
    topics: ['research question', 'revision'],
    applicationTitle: 'Revising ideas, not just sentences',
    application:
      'A research question should be narrow, arguable, and answerable with evidence. “How does social media affect teenagers?” is too broad; “How does nighttime phone use affect sleep in 13–15 year olds?” can be researched. Real revision happens at the level of ideas: reordering paragraphs, replacing weak evidence, and cutting material that does not serve the claim.',
    example: {
      prompt: 'Narrow “school lunches” into a research question.',
      steps: [
        'Choose a population, a variable, and a measurable outcome.',
        'Draft: “How does a 30-minute lunch period affect how much fruit students eat?”',
      ],
      answer: 'A specific question with measurable variables and a defined group.',
    },
    terms: [
      ['scope', 'the range a research question covers'],
      ['revision', 'reworking a draft’s ideas and structure, not only its wording'],
    ],
    review: [
      {
        prompt: 'How do you know a research question is too broad?',
        answer: 'It cannot be answered with the time, sources, or evidence available.',
      },
      {
        prompt: 'What should you check first when revising?',
        answer: 'Whether the claim is clear and whether each paragraph supports it.',
      },
    ],
    exercises: [
      'Narrow two broad topics into research questions.',
      'Revise a paragraph by reordering and replacing one weak detail.',
    ],
  },
  'g7-math-u1-l1': {
    topics: ['proportions', 'percent change'],
    applicationTitle: 'Percents in prices and scale',
    application:
      'A proportion sets two ratios equal, which solves scale and unit problems: if 1 inch represents 4 feet, then 3 inches represents 12 feet. Percent change compares the change to the original amount: a price rising from $50 to $60 is a 20% increase, not 10%, because the change is measured against the starting value. Discounts, taxes, and tips all use these ideas.',
    example: {
      prompt: 'A $50 jacket is marked down 20%, then sales tax is 8%. What is the final price?',
      steps: ['Discount: 50 × 0.20 = 10, so the price is 40.', 'Tax: 40 × 0.08 = 3.20; total 43.20.'],
      answer: '$43.20, because the tax applies to the discounted price.',
    },
    terms: [
      ['percent change', 'the change divided by the original amount, written as a percent'],
      ['scale factor', 'the ratio between a drawing or model and the real object'],
    ],
    review: [
      {
        prompt: 'How do you compute a percent increase?',
        answer: 'Divide the increase by the original amount, then multiply by 100.',
      },
      {
        prompt: 'Why is a 20% discount followed by 20% tax not back to the original price?',
        answer: 'The tax is computed on the lower price, so the total stays below the original.',
      },
    ],
    exercises: [
      'Compute the final cost of a $80 item with 15% off and 8.25% tax.',
      'Use a map scale to find a real distance.',
    ],
  },
  'g7-math-u2-l1': {
    topics: ['two-step equations', 'rational numbers'],
    applicationTitle: 'Solving in two moves',
    application:
      'A two-step equation undoes operations in reverse order: first undo addition or subtraction, then undo multiplication or division. For 3x + 5 = 20, subtract 5 and divide by 3. The same rules work with negative fractions and decimals, where signs and reciprocals matter; dividing by a fraction is multiplying by its reciprocal. Checking by substitution catches sign errors, which are the most common mistake with negative rational numbers.',
    example: {
      prompt: 'Solve 3x + 5 = 20.',
      steps: ['Subtract 5: 3x = 15.', 'Divide by 3: x = 5.'],
      answer: 'x = 5, which checks because 3(5) + 5 = 20.',
    },
    terms: [
      ['coefficient', 'the number multiplying a variable'],
      ['reciprocal', 'the number you multiply by to get 1, such as 3/4 and 4/3'],
    ],
    review: [
      {
        prompt: 'Why undo addition before division?',
        answer: 'Because the variable is multiplied first, then added; undo in reverse order.',
      },
      {
        prompt: 'How do you divide by −2/3?',
        answer: 'Multiply both sides by the reciprocal −3/2, giving x = −12.',
      },
    ],
    exercises: [
      'Solve 5x − 7 = 18 and check it.',
      'Solve −2/3 x = 8.',
    ],
  },
  'g7-math-u3-l1': {
    topics: ['circle area', 'probability'],
    applicationTitle: 'Circles and chance',
    application:
      'A circle’s circumference is 2πr and its area is πr². Doubling the radius quadruples the area, which is why a 16-inch pizza is far more than twice a 8-inch one. Probability measures likelihood: simple probability is favorable outcomes over total outcomes, while compound probability multiplies the chances of independent events, as with two coin flips.',
    example: {
      prompt: 'A circle has radius 5 cm. Find its circumference and area, using π ≈ 3.14.',
      steps: ['Circumference = 2 × 3.14 × 5 = 31.4 cm.', 'Area = 3.14 × 25 = 78.5 cm².'],
      answer: 'About 31.4 cm around and 78.5 cm² inside.',
    },
    terms: [
      ['circumference', 'the distance around a circle'],
      ['independent events', 'events whose outcomes do not affect each other'],
    ],
    review: [
      {
        prompt: 'What is the probability of rolling a 4 on a fair die?',
        answer: '1/6, because one of six equally likely outcomes is favorable.',
      },
      {
        prompt: 'How do you find the probability of two independent events?',
        answer: 'Multiply their individual probabilities, so two heads in a row is 1/2 × 1/2 = 1/4.',
      },
    ],
    exercises: [
      'Measure a lid and compute its circumference and area.',
      'Find the probability of flipping heads twice in a row.',
    ],
  },
  'g7-sci-u1-l1': {
    topics: ['chemical reactions', 'conservation of mass'],
    applicationTitle: 'When matter becomes something new',
    application:
      'A chemical change produces new substances with new properties: rust, ash, gas bubbles, or a color change that cannot be reversed by simple physical means. Mass is conserved because atoms are rearranged, not destroyed, which is why a balloon with baking soda and vinegar gains mass from the gas produced. Balancing equations records that conservation.',
    example: {
      prompt: 'Vinegar and baking soda fizz in a sealed bag. What happens to the mass?',
      steps: [
        'The reaction produces carbon dioxide gas, a new substance.',
        'Because the bag is sealed, no matter escapes, so the total mass stays the same.',
      ],
      answer: 'Mass is unchanged; the atoms simply rearranged into new compounds.',
    },
    terms: [
      ['chemical reaction', 'a process that rearranges atoms into new substances'],
      ['conservation of mass', 'matter is neither created nor destroyed in a chemical change'],
    ],
    review: [
      {
        prompt: 'How can you tell a chemical change from a physical one?',
        answer: 'A chemical change forms a new substance and is usually hard to reverse.',
      },
      {
        prompt: 'Why must a chemical equation be balanced?',
        answer: 'To show that every atom present before the reaction is still present after it.',
      },
    ],
    exercises: [
      'Observe rust or a browning apple and list two signs of chemical change.',
      'Balance a simple equation such as H₂ + O₂ → H₂O.',
    ],
  },
  'g7-sci-u2-l1': {
    topics: ['work and power', 'mechanical advantage'],
    applicationTitle: 'Work, power, and machines',
    application:
      'Work is force times distance, measured in joules, and power is work divided by time, measured in watts. Lifting a 100 N box 2 m does 200 J of work; doing it in 1 second requires 200 W, while doing it in 10 seconds requires 20 W. A machine cannot reduce the work; it can reduce the force by increasing the distance, which is mechanical advantage.',
    example: {
      prompt: 'You lift a 50 N box 3 m in 5 seconds. Find the work and power.',
      steps: ['Work = 50 × 3 = 150 J.', 'Power = 150 ÷ 5 = 30 W.'],
      answer: '150 joules of work at 30 watts of power.',
    },
    terms: [
      ['work', 'force applied over a distance, measured in joules'],
      ['power', 'the rate of doing work, measured in watts'],
    ],
    review: [
      {
        prompt: 'Why does a machine not reduce work?',
        answer: 'It trades force for distance; the product of force and distance stays the same.',
      },
      {
        prompt: 'How is power different from work?',
        answer: 'Power is work per unit time, so it measures how fast work is done.',
      },
    ],
    exercises: [
      'Compute the work of carrying a backpack up a flight of stairs.',
      'Compare the power of two people doing the same work in different times.',
    ],
  },
  'g7-sci-u3-l1': {
    topics: ['watersheds', 'Texas biomes'],
    applicationTitle: 'Where water goes and what lives there',
    application:
      'A watershed is all the land that drains into a single body of water. Rain on a roof, a parking lot, or a field follows the same slope toward a creek, carrying soil, fertilizer, and oil with it. Texas biomes range from pine forests to desert, and each supports organisms adapted to its rainfall, temperature, and soil.',
    example: {
      prompt: 'Fertilizer applied to a lawn ends up in a nearby creek. Trace the path.',
      steps: [
        'Rain dissolves the fertilizer, and runoff carries it downhill.',
        'The creek flows through the watershed toward a larger river or lake.',
      ],
      answer: 'Runoff carries nutrients through the watershed into the creek, causing algae growth downstream.',
    },
    terms: [
      ['watershed', 'all the land that drains into a particular body of water'],
      ['biome', 'a large region defined by climate and its typical organisms'],
    ],
    review: [
      {
        prompt: 'Why does paving land increase runoff?',
        answer: 'Water cannot soak into pavement, so it flows across the surface instead.',
      },
      {
        prompt: 'Name two Texas biomes and one adaptation in each.',
        answer: 'Desert: deep roots or water storage; pine forest: shade-tolerant understory plants.',
      },
    ],
    exercises: [
      'Trace the watershed your home drains into using a local map.',
      'Compare two Texas biomes in rainfall, temperature, and organisms.',
    ],
  },
  'g7-ss-u1-l1': {
    topics: ['Spanish colonization', 'Texas Revolution'],
    applicationTitle: 'Layers of settlement and revolt',
    application:
      'Spain colonized Texas through missions, presidios, and civilian settlements, then Mexico inherited the territory in 1821. Mexico encouraged Anglo colonization through empresario contracts but later restricted immigration and tightened control, especially over slavery and customs. Those conflicts, plus the centralist shift under Santa Anna, produced the Texas Revolution.',
    example: {
      prompt: 'Why did Mexican policies toward Anglo settlers change after 1830?',
      steps: [
        'Settlers outnumbered Mexican Texans in some areas and resisted Mexican law.',
        'The government banned further immigration and enforced customs duties to regain control.',
      ],
      answer: 'Fear of losing control led to restrictions that settlers saw as tyranny.',
    },
    terms: [
      ['empresario', 'an agent who contracted settlers to colonize Mexican Texas'],
      ['centralist', 'favoring power concentrated in a national government'],
    ],
    review: [
      {
        prompt: 'What was the purpose of a presidio?',
        answer: 'A presidio was a military fort built to protect missions and settlements from attack.',
      },
      {
        prompt: 'Name two causes of the Texas Revolution.',
        answer: 'Restrictions on immigration and slavery, and the shift to centralist rule.',
      },
    ],
    exercises: [
      'Create a timeline of Texas from 1718 to 1836.',
      'Write a paragraph from a settler’s and a Mexican official’s point of view.',
    ],
  },
  'g7-ss-u2-l1': {
    topics: ['annexation', 'Reconstruction in Texas'],
    applicationTitle: 'A republic joins a divided nation',
    application:
      'The Republic of Texas existed from 1836 to 1845, when annexation made it the 28th state. The debate centered on slavery and the balance of power in Congress. Texas seceded in 1861, and after the Civil War Reconstruction imposed new constitutions, expanded rights, and federal oversight, while Black codes and violence limited those gains.',
    example: {
      prompt: 'Why was annexation controversial in the United States?',
      steps: [
        'Texas would enter as a slave state, shifting the Senate balance.',
        'War with Mexico was also a risk.',
      ],
      answer: 'It threatened the sectional balance and risked war with Mexico.',
    },
    terms: [
      ['secession', 'withdrawing from a nation or union'],
      ['Reconstruction', 'the postwar period of rebuilding and reforming the South'],
    ],
    review: [
      {
        prompt: 'When did Texas join the United States?',
        answer: 'Texas joined the United States in 1845, when it became the twenty-eighth state.',
      },
      {
        prompt: 'Name one achievement and one failure of Reconstruction in Texas.',
        answer: 'Achievement: the 1869 constitution and Black suffrage; failure: Black codes and violence.',
      },
    ],
    exercises: [
      'Debate annexation from two perspectives in a short written exchange.',
      'List three Reconstruction changes in Texas.',
    ],
  },
  'g7-ss-u3-l1': {
    topics: ['oil boom', 'urbanization'],
    applicationTitle: 'Oil, cities, and a changing state',
    application:
      'Spindletop in 1901 launched an oil boom that reshaped Texas: refineries, ports, pipelines, and railroads created jobs, and Houston grew into an energy center. Boom-and-bust cycles followed oil prices, while urbanization drew people from farms to cities. Oil revenue also funded public universities and highways, tying the state’s budget to a volatile commodity.',
    example: {
      prompt: 'Explain one way oil money changed public services in Texas.',
      steps: [
        'Oil production generated severance taxes and royalties.',
        'Those funds supported universities, roads, and the Permanent University Fund.',
      ],
      answer: 'Oil revenue financed universities and infrastructure, linking services to energy prices.',
    },
    terms: [
      ['boom and bust', 'rapid economic growth followed by sharp decline'],
      ['urbanization', 'the movement of population from rural areas to cities'],
    ],
    review: [
      {
        prompt: 'What was Spindletop and why does it matter?',
        answer: 'A 1901 oil gusher near Beaumont that began large-scale Texas oil production.',
      },
      {
        prompt: 'Why is an oil-based budget risky?',
        answer: 'Prices fall, so revenue drops exactly when services are needed.',
      },
    ],
    exercises: [
      'Graph Texas population growth from 1900 to 2000 and describe the trend.',
      'Interview an adult about a boom-and-bust industry in your area.',
    ],
  },

  'g8-ela-u1-l1': {
    topics: ['symbol and motif', 'theme'],
    applicationTitle: 'Patterns that carry meaning',
    application:
      'A symbol is an object that stands for something beyond itself; a motif is a recurring image or idea that develops a theme. Rain might symbolize renewal in one story and grief in another, so meaning comes from how the text uses it, not from a fixed dictionary. Tracking a motif across chapters lets you build a thematic argument from evidence rather than impression.',
    example: {
      prompt: 'A novel repeats the image of a locked gate in three chapters. How would you argue it functions?',
      steps: [
        'Note each appearance and what surrounds it.',
        'Name what the gate separates: safety, memory, or exclusion.',
      ],
      answer: 'The gate is a motif marking exclusion; the theme concerns who is allowed inside.',
    },
    terms: [
      ['symbol', 'an object or image that represents an idea beyond itself'],
      ['motif', 'a recurring element that develops a theme'],
    ],
    review: [
      {
        prompt: 'How is a motif different from a symbol?',
        answer: 'A symbol is a single object with meaning; a motif recurs and builds meaning across a text.',
      },
      {
        prompt: 'What makes a thematic argument strong?',
        answer: 'It is supported by patterns of evidence from across the whole text.',
      },
    ],
    exercises: [
      'Track one recurring image through a novel and note three appearances.',
      'Write a thematic claim supported by two symbols.',
    ],
  },
  'g8-ela-u2-l1': {
    topics: ['rhetorical appeals', 'logical fallacies'],
    applicationTitle: 'How speeches persuade',
    application:
      'Ethos builds credibility through character and expertise, pathos appeals to emotion, and logos appeals to reason and evidence. Skilled speakers combine them and fit them to the audience and occasion. Fallacies mimic argument: ad hominem attacks the person, straw man misstates the opponent, and false dilemma reduces options to two when more exist.',
    example: {
      prompt: 'A speaker says, “My opponent wants to destroy our schools.” Which fallacy is this?',
      steps: [
        'The claim exaggerates and misrepresents the opponent’s position.',
        'That is a straw man, not a response to the actual proposal.',
      ],
      answer: 'Straw man: it attacks a distorted version of the opponent’s view.',
    },
    terms: [
      ['ethos', 'persuasion by establishing the speaker’s credibility'],
      ['straw man', 'misrepresenting an opponent’s argument to make it easier to attack'],
    ],
    review: [
      {
        prompt: 'Give an example of logos in a speech.',
        answer: 'Citing statistics or a chain of reasoning that supports the claim.',
      },
      {
        prompt: 'Why is ad hominem a fallacy?',
        answer: 'It attacks the person rather than addressing the argument’s evidence.',
      },
    ],
    exercises: [
      'Label three appeals in a famous speech excerpt.',
      'Find two fallacies in an advertisement and explain each.',
    ],
  },
  'g8-ela-u3-l1': {
    topics: ['synthesis', 'citation'],
    applicationTitle: 'Putting sources in conversation',
    application:
      'Synthesis organizes sources by idea rather than by author: one paragraph might combine three sources on the same point. Citation is part of honesty, distinguishing your analysis from another writer’s words and ideas. Paraphrase still requires a citation; only common knowledge is exempt. A works-cited entry lets a reader retrace your path.',
    example: {
      prompt: 'Two sources disagree about homework’s value. How do you synthesize them fairly?',
      steps: [
        'State the shared question and each source’s claim with its evidence.',
        'Explain what explains the difference, such as age group or subject.',
      ],
      answer: 'Present both claims and account for the disagreement rather than picking one silently.',
    },
    terms: [
      ['synthesis', 'combining multiple sources to develop a new understanding'],
      ['paraphrase', 'restating an idea in your own words, still requiring citation'],
    ],
    review: [
      {
        prompt: 'Why must a paraphrase be cited?',
        answer: 'The idea belongs to the source even when the wording is yours.',
      },
      {
        prompt: 'What does organizing by idea accomplish?',
        answer: 'It shows relationships between sources instead of listing them one by one.',
      },
    ],
    exercises: [
      'Synthesize three short sources in one paragraph with citations.',
      'Write a works-cited entry for a website and a book.',
    ],
  },
  'g8-math-u1-l1': {
    topics: ['slope', 'linear equations'],
    applicationTitle: 'Slope as a rate of change',
    application:
      'Slope is the change in y divided by the change in x, so it measures a rate: dollars per hour, meters per second, cost per item. A linear equation y = mx + b uses m for slope and b for the starting value. In a table, constant differences signal a linear pattern; in a graph, slope is rise over run.',
    example: {
      prompt: 'A phone plan costs $20 plus $0.10 per minute. Write the equation and find the cost for 300 minutes.',
      steps: ['Start value b = 20; slope m = 0.10 per minute.', 'y = 0.10x + 20; for x = 300, y = 30 + 20.'],
      answer: 'y = 0.10x + 20, so 300 minutes cost $50.',
    },
    terms: [
      ['slope', 'the rate of change of a line, rise over run'],
      ['y-intercept', 'the value of y where the line crosses the y-axis'],
    ],
    review: [
      {
        prompt: 'How do you compute slope from two points?',
        answer: '(y₂ − y₁) ÷ (x₂ − x₁), the change in y over the change in x.',
      },
      {
        prompt: 'What does the y-intercept mean in a cost problem?',
        answer: 'The fixed cost charged before any units are used.',
      },
    ],
    exercises: [
      'Find the slope through (2, 5) and (6, 13).',
      'Write an equation for a savings account starting at $100 and growing $25 a week.',
    ],
  },
  'g8-math-u2-l1': {
    topics: ['systems of equations', 'transformations'],
    applicationTitle: 'Where two rules meet',
    application:
      'A system of equations asks where two relationships give the same output, such as when two phone plans cost the same. Substitution solves one equation for a variable and puts it into the other. Transformations move figures without changing their shape: translations slide, reflections flip, rotations turn, and dilations resize proportionally.',
    example: {
      prompt: 'Solve y = 2x + 1 and y = −x + 7 by substitution.',
      steps: ['Set equal: 2x + 1 = −x + 7.', 'Add x, subtract 1: 3x = 6, so x = 2; then y = 5.'],
      answer: 'The lines meet at (2, 5).',
    },
    terms: [
      ['system of equations', 'two or more equations solved together'],
      ['dilation', 'a transformation that resizes a figure proportionally'],
    ],
    review: [
      {
        prompt: 'What does the solution of a system represent on a graph?',
        answer: 'The point where the two lines intersect, the ordered pair that satisfies both equations at once.',
      },
      {
        prompt: 'Which transformation changes size but not shape?',
        answer: 'A dilation, which scales all distances by the same factor.',
      },
    ],
    exercises: [
      'Solve y = x + 4 and y = 3x − 2.',
      'Describe the transformation that maps (2, 3) to (2, −3).',
    ],
  },
  'g8-math-u3-l1': {
    topics: ['Pythagorean theorem', 'volume'],
    applicationTitle: 'Right triangles and solid space',
    application:
      'The Pythagorean theorem states that in a right triangle, a² + b² = c², where c is the hypotenuse. It finds distances that cannot be measured directly, such as the diagonal of a screen or the length of a ladder. Volume formulas extend geometry into three dimensions: a cylinder holds πr²h, a cone one third of that, and a sphere four thirds πr³. Comparing volumes explains why a tall narrow glass can hold less than a short wide one.',
    example: {
      prompt: 'A 3-4-5 triangle: verify the theorem and find the diagonal of a 3 m by 4 m room.',
      steps: ['3² + 4² = 9 + 16 = 25.', '√25 = 5.'],
      answer: 'The diagonal is 5 m, because 3² + 4² = 5².',
    },
    terms: [
      ['hypotenuse', 'the longest side of a right triangle, opposite the right angle'],
      ['volume', 'the space inside a solid, measured in cubic units'],
    ],
    review: [
      {
        prompt: 'When can you use the Pythagorean theorem?',
        answer: 'Only in a right triangle, to relate the two legs and the hypotenuse.',
      },
      {
        prompt: 'How does a cone’s volume compare with a cylinder of the same base and height?',
        answer: 'The cone is one third of the cylinder.',
      },
    ],
    exercises: [
      'Find the diagonal of a 6 by 8 rectangle.',
      'Compute the volume of a cylinder with radius 3 cm and height 10 cm.',
    ],
  },
  'g8-sci-u1-l1': {
    topics: ['atomic structure', 'periodic table'],
    applicationTitle: 'Reading the periodic table',
    application:
      'Atoms have protons and neutrons in the nucleus and electrons in shells around it. The atomic number is the proton count and determines the element. In the periodic table, groups (columns) share valence electrons and similar reactivity, while periods (rows) correspond to energy levels; that is why sodium and potassium behave alike and why noble gases are unreactive.',
    example: {
      prompt: 'An atom has 11 protons and 11 electrons. Identify it and predict its group behavior.',
      steps: ['Atomic number 11 is sodium.', 'Its single valence electron makes it highly reactive with nonmetals.'],
      answer: 'Sodium, an alkali metal that loses one electron easily.',
    },
    terms: [
      ['atomic number', 'the number of protons in an atom’s nucleus'],
      ['valence electron', 'an electron in the outermost shell, involved in bonding'],
    ],
    review: [
      {
        prompt: 'What determines an element’s identity?',
        answer: 'Its atomic number, the number of protons in its nucleus.',
      },
      {
        prompt: 'Why do elements in the same group react similarly?',
        answer: 'They have the same number of valence electrons.',
      },
    ],
    exercises: [
      'Build a diagram of a carbon atom with protons, neutrons, and electrons.',
      'Compare two elements in the same group and predict their reactivity.',
    ],
  },
  'g8-sci-u2-l1': {
    topics: ['Newton’s laws', 'speed and acceleration'],
    applicationTitle: 'Forces explain motion',
    application:
      'Newton’s second law, F = ma, says acceleration grows with force and shrinks with mass. Speed is distance over time; velocity adds direction; acceleration is a change in velocity. A car turning at constant speed is still accelerating because its direction changes, which is why passengers feel pushed sideways in a turn. Free-body diagrams make these forces visible before any calculation, and they are the first step in every mechanics problem.',
    example: {
      prompt: 'A 1,000 kg car accelerates at 2 m/s². What net force acts on it?',
      steps: ['Use F = ma.', 'F = 1,000 × 2 = 2,000 N.'],
      answer: '2,000 newtons in the direction of acceleration.',
    },
    terms: [
      ['acceleration', 'the rate of change of velocity, including direction changes'],
      ['inertia', 'an object’s resistance to changes in motion'],
    ],
    review: [
      {
        prompt: 'Why does a heavier object accelerate less under the same force?',
        answer: 'Because acceleration equals force divided by mass, so a greater mass gives less acceleration for the same net force.',
      },
      {
        prompt: 'How can an object accelerate without changing speed?',
        answer: 'By changing direction, as a car does when it turns.',
      },
    ],
    exercises: [
      'Compute the force needed to accelerate a 500 kg cart at 3 m/s².',
      'Measure a toy car’s speed over a measured distance.',
    ],
  },
  'g8-sci-u3-l1': {
    topics: ['climate', 'ecosystem interdependence'],
    applicationTitle: 'Climate and the web of life',
    application:
      'Weather is short-term; climate is the long-term pattern of a region. Removing a species can cascade through an ecosystem: sea otters eat urchins, which graze kelp, so losing otters can turn a kelp forest into a barren. Plate motion matters over longer spans, building mountains that change rainfall and creating volcanoes that enrich soils. Climate, geology, and living things therefore act on different timescales but in the same system.',
    example: {
      prompt: 'Why did kelp forests decline when sea otters were hunted?',
      steps: [
        'Without otters, sea urchin populations grew unchecked.',
        'Urchins grazed the kelp, removing habitat for fish and invertebrates.',
      ],
      answer: 'A keystone predator was removed, so its prey overgrazed the ecosystem.',
    },
    terms: [
      ['climate', 'the long-term average weather pattern of a region'],
      ['keystone species', 'a species whose removal strongly changes an ecosystem'],
    ],
    review: [
      {
        prompt: 'How is climate different from weather?',
        answer: 'Weather is today’s conditions; climate is the pattern over decades.',
      },
      {
        prompt: 'What is a keystone species?',
        answer: 'One whose influence is outsized relative to its numbers, like the sea otter.',
      },
    ],
    exercises: [
      'Find climate data for your city and describe the pattern.',
      'Draw a food web and remove one species to predict effects.',
    ],
  },
  'g8-ss-u1-l1': {
    topics: ['Constitutional Convention', 'ratification'],
    applicationTitle: 'Compromise and debate in Philadelphia',
    application:
      'The Constitutional Convention of 1787 replaced the Articles of Confederation with a stronger federal system. The Great Compromise created a House based on population and a Senate with equal state representation; the Three-Fifths Compromise counted enslaved people for representation without granting them rights. Federalists argued for a strong union, while Anti-Federalists demanded a bill of rights.',
    example: {
      prompt: 'How did the Great Compromise resolve the dispute between large and small states?',
      steps: [
        'Large states wanted representation by population; small states wanted equality.',
        'Congress became bicameral: population in the House, equality in the Senate.',
      ],
      answer: 'It split representation between the two chambers, satisfying both sides.',
    },
    terms: [
      ['federalism', 'power divided between national and state governments'],
      ['ratification', 'formal approval of a constitution or amendment'],
    ],
    review: [
      {
        prompt: 'What did Anti-Federalists fear?',
        answer: 'A strong central government without protections for individual rights.',
      },
      {
        prompt: 'Why was the Three-Fifths Compromise morally flawed?',
        answer: 'It counted enslaved people for representation while denying them rights.',
      },
    ],
    exercises: [
      'Compare Federalist and Anti-Federalist arguments in a two-column chart.',
      'Write a short speech for or against ratification.',
    ],
  },
  'g8-ss-u2-l1': {
    topics: ['westward expansion', 'sectional conflict'],
    applicationTitle: 'Expansion and the road to war',
    application:
      'Westward expansion raised the question of whether new territories would permit slavery. The Missouri Compromise (1820) drew a line, the Compromise of 1850 admitted California free, the Kansas-Nebraska Act (1854) let settlers decide, and the Dred Scott decision (1857) denied Congress the power to restrict slavery. Lincoln’s election in 1860 triggered secession.',
    example: {
      prompt: 'How did the Kansas-Nebraska Act increase tension?',
      steps: [
        'It repealed the Missouri Compromise line and allowed popular sovereignty.',
        'Pro- and anti-slavery settlers fought in “Bleeding Kansas.”',
      ],
      answer: 'It reopened the slavery question by violence instead of compromise.',
    },
    terms: [
      ['popular sovereignty', 'letting settlers decide an issue such as slavery'],
      ['secession', 'a state’s withdrawal from the Union'],
    ],
    review: [
      {
        prompt: 'What did the Dred Scott decision rule?',
        answer: 'That Congress could not ban slavery in territories and that Scott was not a citizen.',
      },
      {
        prompt: 'Why did Lincoln’s election prompt secession?',
        answer: 'Southern states feared his party would restrict slavery’s expansion.',
      },
    ],
    exercises: [
      'Create a timeline from 1820 to 1861 with five compromises or events.',
      'Explain how one compromise failed in a paragraph.',
    ],
  },
  'g8-ss-u3-l1': {
    topics: ['Emancipation Proclamation', 'Reconstruction'],
    applicationTitle: 'War aims and the unfinished work',
    application:
      'The Emancipation Proclamation, effective January 1, 1863, declared enslaved people in Confederate states free and made ending slavery a Union war aim, though it did not apply to border states. Reconstruction added the Thirteenth, Fourteenth, and Fifteenth Amendments, but Black codes, violence, and the withdrawal of federal troops in 1877 undid much of the protection.',
    example: {
      prompt: 'Why is the Emancipation Proclamation both significant and limited?',
      steps: [
        'Significant: it shifted the war’s purpose and invited Black soldiers to serve.',
        'Limited: it did not free people in border states under Union control.',
      ],
      answer: 'It transformed the war’s meaning but was not universal abolition.',
    },
    terms: [
      ['emancipation', 'the act of freeing people from slavery'],
      ['amendment', 'a formal change to the Constitution'],
    ],
    review: [
      {
        prompt: 'What did the Fourteenth Amendment guarantee?',
        answer: 'Citizenship, due process, and equal protection under the law.',
      },
      {
        prompt: 'How did Reconstruction end?',
        answer: 'The disputed 1876 election led to federal troops withdrawing in 1877.',
      },
    ],
    exercises: [
      'Summarize the three Reconstruction amendments in one sentence each.',
      'Write a paragraph on one achievement and one failure of Reconstruction.',
    ],
  },
};
