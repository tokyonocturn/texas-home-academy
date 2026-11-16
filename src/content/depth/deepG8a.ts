import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Grade 8, ELA and math: sections, third example, vocabulary, practice, review. */
export const DEPTH_G8A: Record<string, LessonDepth> = {
  'g8-ela-u1-l1': {
    topics: ['symbol'],
    objectives: [
      'Explain how a concrete symbol carries an abstract idea in a text.',
      'Trace a motif across a text and state the theme it builds.',
    ],
    sections: [
      {
        heading: 'How symbols carry meaning',
        paragraphs: [
          'A symbol is a concrete thing that stands for an abstract idea: a locked door for confinement, a river for change, a garden for innocence. Symbols work by association rather than by definition, so a reader builds meaning from how the object is used, described, and repeated rather than from a dictionary.',
          'Some symbols are conventional, drawing on shared cultural associations such as light for knowledge. Others are contextual, meaning something only within one text: a chipped mug may stand for a lost parent because of how the story treats it. Contextual symbols require evidence, and a reader who claims one should be able to point to passages that support it.',
          'Over-reading is the common failure. Not every object is a symbol, and a symbol does not need to mean something on every page. A useful test is whether the text returns to the object at moments of importance, whether characters react to it strongly, and whether interpreting it explains more of the story than a literal reading does.',
        ],
      },
      {
        heading: 'Motif and the development of theme',
        paragraphs: [
          'A motif is a recurring element, image, or phrase that develops a theme. Where a symbol may appear once, a motif returns: winter imagery in a novel about grief, hands in a story about labor, or a repeated phrase that changes meaning each time it appears. Repetition is the signal that something matters.',
          'Themes develop as motifs accumulate. A first appearance may establish an image neutrally, a middle appearance may complicate it, and a late appearance may reverse its meaning. Tracking those shifts lets a reader state a theme as a claim the whole text earns, rather than a lesson attached to one scene.',
          'The strongest thematic statements are arguable and specific. “Nature imagery shows that grief is seasonal” can be supported or challenged with evidence, while “the book is about grief” merely names a topic. Specificity is what turns an observation into an interpretation someone could disagree with productively. Symbolism also depends on genre. In realistic fiction a symbol usually stays grounded in an ordinary object, while in allegory every element carries a second meaning and the story reads as a code. Recognizing which mode you are in prevents both under-reading, where a deliberate pattern is ignored, and over-reading, where an ordinary object is forced into service. A useful summary of the evidence usually settles the question: quote the passages, then say what they suggest together.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A novel returns four times to a stopped clock in a family kitchen. Propose a symbolic reading and one way to test it.',
        steps: [
          'Note when the clock appears and what happens in those scenes.',
          'Consider what a stopped clock suggests: frozen time, grief, a family unable to move on.',
          'Test it by checking whether the clock appears at moments of change or refusal to change.',
        ],
        answer: 'The clock likely symbolizes grief that halts a family; test it against scenes of change and refusal.',
      },
    ],
    terms: [
      ['symbol', 'a concrete thing that represents an abstract idea'],
      ['motif', 'a recurring image or phrase that develops a theme'],
      ['theme', 'a claim about life that a text develops'],
      ['conventional symbol', 'a symbol with widely shared cultural meaning'],
      ['contextual symbol', 'a symbol whose meaning comes from one text’s usage'],
      ['over-reading', 'finding symbolic meaning the text does not support'],
    ],
    practice: [
      mc('What makes a motif different from a symbol?', ['it is always an object', 'it recurs and develops', 'it has no meaning', 'it appears once'], 1, 'Motifs return and change.'),
      mc('A contextual symbol is one whose meaning comes from', ['dictionary definition', 'the text’s own usage', 'the author’s biography', 'the cover art'], 1, 'Context supplies the meaning.'),
      num('How many appearances should a motif have at minimum?', 2, 'At least two, so a pattern exists.'),
    ],
    review: [
      {
        prompt: 'How is a theme different from a topic?',
        answer: 'A topic names a subject, while a theme states an arguable claim the text develops about that subject.',
      },
      {
        prompt: 'How can you test whether an object is functioning as a symbol?',
        answer: 'Check whether the text returns to it at important moments and whether reading it symbolically explains more of the story.',
      },
    ],
    exercises: [
      'Trace one motif through a short story and chart how its meaning shifts.',
      'Write a paragraph arguing for a symbolic reading of an object, citing three passages.',
    ],
  },
  'g8-ela-u2-l1': {
    topics: ['rhetorical appeals'],
    objectives: [
      'Identify ethos, pathos, and logos in an argument and judge how they work together.',
      'Name common logical fallacies and explain why each fails as reasoning.',
    ],
    sections: [
      {
        heading: 'Three appeals',
        paragraphs: [
          'Ethos is the appeal to credibility. A speaker builds it through expertise, fairness, and good character, and it fails when the speaker has no relevant knowledge or hides a conflict of interest. Citing a qualified source is an appeal to ethos, and so is acknowledging an opponent’s reasonable point.',
          'Pathos is the appeal to emotion. Stories, vivid images, and loaded language can move an audience, and emotion is legitimate when it fits the facts. It becomes manipulation when feeling substitutes for evidence, as in an advertisement that shows a crying child but offers no information about the product.',
          'Logos is the appeal to reason: evidence, statistics, examples, and valid inference. Strong arguments usually combine all three, because a credible speaker offering evidence that matters to an audience is more persuasive than any single appeal alone. Analyzing which appeal carries a text reveals who the writer thinks the audience is.',
        ],
      },
      {
        heading: 'Fallacies and why they fail',
        paragraphs: [
          'A fallacy is an error in reasoning that can look persuasive. Ad hominem attacks the person rather than the argument. A straw man replaces an opponent’s position with a weaker version. False dilemma presents two options when more exist, and slippery slope claims that one step inevitably leads to an extreme outcome without evidence.',
          'Other common patterns include bandwagon appeals, which claim something is true because many believe it, and circular reasoning, which assumes the conclusion in the premises. Post hoc reasoning assumes that because one event followed another, the first caused the second.',
          'Naming a fallacy requires care. An argument is not fallacious merely because it is emotional or because you disagree with it. The test is whether the reasoning supports the conclusion: does the evidence actually bear on the claim, and would the conclusion follow even if the audience felt nothing? Fallacies often appear alongside legitimate evidence, which is why refuting an argument requires addressing its strongest part rather than its weakest sentence. A reader who names every flaw loses the thread of what the writer is actually claiming. A more disciplined method is to restate the argument charitably first, then ask whether any step breaks. That habit is also the best defense against being persuaded by a confident tone, because confidence is not evidence and eloquence is not proof. Analyzing appeals also reveals the audience a text assumes, since an advertisement that leans on pathos expects a hurried reader while a policy brief that leans on logos expects a skeptical one.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Identify the appeal and one weakness: “As a doctor, I know this supplement works; thousands of patients can’t be wrong.”',
        steps: [
          'The speaker claims medical authority, which is an appeal to ethos.',
          '“Thousands can’t be wrong” is a bandwagon appeal, not evidence.',
          'No study or outcome data is offered, so the reasoning is unsupported.',
        ],
        answer: 'Ethos plus bandwagon; the claim lacks verifiable evidence.',
      },
    ],
    terms: [
      ['ethos', 'the appeal to the speaker’s credibility and character'],
      ['pathos', 'the appeal to emotion'],
      ['logos', 'the appeal to logic and evidence'],
      ['ad hominem', 'attacking the person instead of the argument'],
      ['false dilemma', 'presenting two options when others exist'],
      ['bandwagon', 'claiming something is true because many believe it'],
    ],
    practice: [
      mc('Which appeal relies on statistics and valid inference?', ['ethos', 'pathos', 'logos', 'none'], 2, 'Logos is the appeal to reason.'),
      mc('“Either we ban all cars or the planet is doomed” is', ['a valid argument', 'a false dilemma', 'an appeal to ethos', 'a citation'], 1, 'More options exist than the two named.'),
      num('How many rhetorical appeals are described here?', 3, 'Ethos, pathos, and logos.'),
    ],
    review: [
      {
        prompt: 'How do the three appeals work together in a strong argument?',
        answer: 'A credible speaker presents relevant evidence in terms the audience cares about, so ethos, logos, and pathos reinforce one another.',
      },
      {
        prompt: 'Why is naming a fallacy not enough to refute an argument?',
        answer: 'The label identifies a pattern of error, but the argument may still contain evidence that supports its conclusion.',
      },
    ],
    exercises: [
      'Analyze an advertisement for all three appeals and note which dominates.',
      'Find three fallacies in opinion writing and rewrite one argument so it avoids the fallacy.',
    ],
  },
  'g8-ela-u3-l1': {
    topics: ['synthesis'],
    objectives: [
      'Synthesize several sources into a claim that no single source states.',
      'Apply citation and paraphrase rules that avoid plagiarism.',
    ],
    sections: [
      {
        heading: 'Synthesis: putting sources in conversation',
        paragraphs: [
          'Synthesis combines information from multiple sources to produce a claim none of them makes alone. Instead of summarizing sources one after another, a writer organizes by idea and shows how the sources agree, disagree, or fill gaps. The result is an argument about the conversation, not a report on each participant.',
          'A synthesis paragraph usually states a point, presents evidence from two or more sources, and comments on the relationship between them. One study may establish a trend, another may qualify it, and a third may offer an explanation. Noticing those relationships is the intellectual work; quoting is only the delivery.',
          'Sources that disagree are an opportunity rather than an obstacle. Comparing their methods, definitions, and dates often explains the disagreement and produces a more precise claim. A writer who hides inconvenient evidence produces a tidy essay that a knowledgeable reader will not trust.',
        ],
      },
      {
        heading: 'Academic honesty',
        paragraphs: [
          'Plagiarism is presenting someone else’s words or ideas as your own, whether deliberate or careless. Copying text without quotation marks, paraphrasing too closely, and reusing a paper from another class all count. The common thread is that a reader is misled about who produced the work.',
          'Paraphrasing means restating an idea in genuinely different structure and wording, then citing the source. Reading the passage, closing the book, and writing the idea from memory produces better paraphrase than swapping synonyms. Direct quotations belong in quotation marks with a citation, and they should be used when the exact wording matters.',
          'Collaboration has limits. Discussing ideas with classmates is normal, but writing another student’s sentences or submitting shared work as individual is not. The same principle applies to writing tools and AI assistants: using them to brainstorm is different from submitting generated text as your own. When a policy is unclear, ask before submitting rather than after. Citation format matters less than completeness: author, title, date, and location should let a reader find the source without guessing. Notes taken carelessly cause most accidental plagiarism, so recording the page number at the moment of reading saves hours later. A final check that every quotation and borrowed idea carries a citation is faster than reconstructing sources from memory, and it protects both the writer’s work and the reader’s trust. Keeping research notes in one document with source and page attached prevents the frantic search for a citation the night before a paper is due.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Two sources: one finds later school start times raise attendance, another finds no effect in rural districts. Write a synthesis claim.',
        steps: [
          'Identify the disagreement: urban versus rural results.',
          'Look for an explanation rather than choosing a winner.',
          'Qualify the claim to fit both findings.',
        ],
        answer: 'Later start times may raise attendance where commutes are long, with smaller effects in rural districts.',
      },
    ],
    terms: [
      ['synthesis', 'combining sources into a new claim'],
      ['paraphrase', 'restating an idea in different words and structure'],
      ['plagiarism', 'presenting others’ words or ideas as your own'],
      ['citation', 'a reference that identifies a source'],
      ['common knowledge', 'facts widely known and not requiring citation'],
      ['qualify', 'to limit a claim so it fits the evidence'],
    ],
    practice: [
      mc('Synthesis requires', ['summarizing each source in order', 'combining sources into a new claim', 'quoting the longest passage', 'listing sources'], 1, 'Synthesis produces a new claim.'),
      mc('Which is plagiarism?', ['citing a paraphrase', 'quoting with marks and a citation', 'paraphrasing too closely without citation', 'summarizing with a citation'], 2, 'Close paraphrase without credit is plagiarism.'),
      num('How many sources does synthesis require at minimum?', 2, 'At least two, so a relationship can be described.'),
    ],
    review: [
      {
        prompt: 'How is synthesis different from summary?',
        answer: 'A summary restates one source, while synthesis combines several into a claim that none of them states alone.',
      },
      {
        prompt: 'What makes a paraphrase acceptable?',
        answer: 'It must restate the idea in genuinely different wording and structure and cite the original source.',
      },
    ],
    exercises: [
      'Write a synthesis paragraph using three sources on one question and note where they disagree.',
      'Revise a too-close paraphrase until the wording and sentence structure are your own.',
    ],
  },
  'g8-math-u1-l1': {
    topics: ['slope'],
    objectives: [
      'Compute slope from a graph, a table, or two points and interpret it as a rate.',
      'Write and graph a linear equation in slope-intercept form.',
    ],
    sections: [
      {
        heading: 'Slope is a rate of change',
        paragraphs: [
          'Slope measures how steeply a line rises or falls. It is the change in y divided by the change in x, often called rise over run. Between (2, 3) and (6, 11), the rise is 8 and the run is 4, so the slope is 2. A positive slope means the line rises left to right, and a negative slope means it falls.',
          'Slope has units when the axes have units. A graph of distance against time with a slope of 12 meters per second describes speed, and a graph of cost against quantity with a slope of 3 dollars per item describes a unit price. Naming the units turns an abstract number into an interpretable rate.',
          'Horizontal lines have slope zero because y does not change, while vertical lines have undefined slope because the run is zero and division by zero is undefined. Reading a graph carefully before computing prevents the common error of writing zero for a vertical line.',
        ],
      },
      {
        heading: 'Slope-intercept form and intercepts',
        paragraphs: [
          'The equation y = mx + b shows slope m and y-intercept b. The y-intercept is the value of y when x is zero, which often represents a starting amount: a gym membership might cost $40 to join plus $25 per month, giving y = 25x + 40. The slope is the monthly rate and the intercept is the startup fee.',
          'To graph from an equation, plot the y-intercept and use the slope to find a second point. From (0, 40) with slope 25, move up 25 and right 1 to reach (1, 65). Two points determine the line, and a third point is a check that the work is consistent.',
          'To write an equation from two points, compute the slope first, then substitute one point into y = mx + b and solve for b. Checking the finished equation against the second point catches arithmetic errors. The x-intercept, where y is zero, answers a different question: how many months until the total cost reaches a given value. Comparing two linear models is often the real question: one gym charges a high fee and a low monthly rate, another the reverse, and the intersection tells you where the cheaper option changes. Interpreting that intersection in context is worth more than graphing it accurately. Naming what each intercept and slope means in the situation turns a pair of numbers into an answer someone could act on. In a system, that means naming what each variable counts and what the intersection represents in the story.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Find the slope through (2, 3) and (6, 11), then write the equation of the line.',
        steps: [
          'Slope = (11 − 3) ÷ (6 − 2) = 8 ÷ 4 = 2.',
          'Substitute into y = mx + b using (2, 3): 3 = 2(2) + b, so b = −1.',
          'Check with (6, 11): 2(6) − 1 = 11.',
        ],
        answer: 'Slope 2; the equation is y = 2x − 1.',
      },
    ],
    terms: [
      ['slope', 'the change in y divided by the change in x'],
      ['y-intercept', 'the y-value where a line crosses the y-axis'],
      ['x-intercept', 'the x-value where a line crosses the x-axis'],
      ['slope-intercept form', 'y = mx + b, showing slope and y-intercept'],
      ['rate of change', 'how one quantity changes relative to another'],
      ['linear equation', 'an equation whose graph is a straight line'],
    ],
    practice: [
      num('What is the slope through (2, 3) and (6, 11)?', 2, '8 ÷ 4 = 2.'),
      mc('A horizontal line has slope', ['0', 'undefined', '1', '−1'], 0, 'y does not change.'),
      num('For y = 25x + 40, what is the value of y when x = 0?', 40, 'The y-intercept is 40.'),
    ],
    review: [
      {
        prompt: 'What does slope mean in a real context?',
        answer: 'It is the rate of change, telling how much the vertical quantity changes for each unit of the horizontal quantity.',
      },
      {
        prompt: 'Why does a vertical line have undefined slope?',
        answer: 'Its run is zero, and slope requires dividing by the change in x, which cannot be zero.',
      },
    ],
    exercises: [
      'Graph three linear equations and identify slope and intercept for each.',
      'Collect two real data pairs, compute the slope, and explain its units.',
    ],
  },
  'g8-math-u2-l1': {
    topics: ['systems of equations'],
    objectives: [
      'Solve a system of two linear equations by graphing, substitution, or elimination.',
      'Apply translations, reflections, rotations, and dilations to figures on a coordinate plane.',
    ],
    sections: [
      {
        heading: 'Systems of equations',
        paragraphs: [
          'A system of two linear equations asks for values that satisfy both at once. Graphically, the solution is the intersection point. Substitution solves one equation for a variable and replaces that variable in the other, while elimination adds or subtracts the equations to cancel a variable.',
          'Not every system has one solution. Parallel lines never intersect, so the system has no solution and the equations are inconsistent. Two equations that describe the same line intersect everywhere, producing infinitely many solutions. Recognizing these cases prevents a student from forcing an answer that does not exist.',
          'Word problems become systems when two conditions must hold at once. If tickets cost $8 for adults and $5 for children and 200 tickets brought $1,300, the equations a + c = 200 and 8a + 5c = 1300 describe both conditions. Solving gives the counts, and checking both equations confirms the answer.',
        ],
      },
      {
        heading: 'Transformations on the coordinate plane',
        paragraphs: [
          'A transformation moves or resizes a figure. Translations slide it, reflections flip it across a line, rotations turn it about a point, and dilations scale it from a center. Translations, reflections, and rotations preserve size and shape, so the result is congruent to the original. Describing a sequence of transformations requires naming each step in order, because reversing the order can produce a different final image even when each individual move preserves shape.',
          'Coordinate rules make transformations precise. A translation of 3 right and 2 down adds 3 to each x and subtracts 2 from each y. A reflection across the x-axis changes y to its opposite, and a reflection across the y-axis changes x to its opposite. A 180-degree rotation about the origin changes both signs.',
          'Dilations change size but preserve shape, producing similar figures. A dilation with scale factor 2 doubles every distance from the center, so side lengths double while angles stay the same. Area, however, scales by the square of the factor, which is why a doubled figure has four times the area. Sequence matters for transformations: translating and then reflecting is not always the same as reflecting and then translating, though both preserve congruence. Describing a transformation precisely requires naming the type, the direction or line or center, and the amount, since “it moved” is not a description a reader can reproduce on a coordinate grid.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Solve the system x + y = 10 and x − y = 4, then translate triangle A(1, 2), B(3, 2), C(1, 5) by 2 left and 1 up.',
        steps: [
          'Add the equations: 2x = 14, so x = 7.',
          'Substitute: 7 + y = 10, so y = 3.',
          'For the translation, subtract 2 from each x and add 1 to each y.',
        ],
        answer: 'The solution is (7, 3); the image is A′(−1, 3), B′(1, 3), C′(−1, 6).',
      },
    ],
    terms: [
      ['system of equations', 'two or more equations solved together'],
      ['substitution', 'replacing a variable with an equivalent expression'],
      ['elimination', 'adding or subtracting equations to cancel a variable'],
      ['translation', 'a slide that preserves size and shape'],
      ['dilation', 'a scaling transformation that preserves shape'],
      ['congruent', 'having the same size and shape'],
    ],
    practice: [
      num('In x + y = 10 and x − y = 4, what is x?', 7, 'Adding gives 2x = 14.'),
      mc('A dilation with scale factor 2 produces a figure that is', ['congruent', 'similar with doubled sides', 'half the size', 'rotated'], 1, 'Dilations preserve shape and change size.'),
      num('How many solutions does a system of parallel lines have?', 0, 'Parallel lines never intersect.'),
    ],
    review: [
      {
        prompt: 'What does the solution of a system of equations represent on a graph?',
        answer: 'It is the point where the two lines intersect, satisfying both equations at once.',
      },
      {
        prompt: 'How does a dilation differ from a translation?',
        answer: 'A translation slides a figure without changing size, while a dilation changes size while preserving shape.',
      },
    ],
    exercises: [
      'Solve three systems using a different method for each and check the answers.',
      'Transform a quadrilateral four ways and describe the coordinates of each image.',
    ],
  },
  'g8-math-u3-l1': {
    topics: ['Pythagorean theorem'],
    objectives: [
      'Apply the Pythagorean theorem to find a missing side and the distance between points.',
      'Compute the volume of cylinders, cones, and spheres.',
    ],
    sections: [
      {
        heading: 'The Pythagorean theorem',
        paragraphs: [
          'In a right triangle, the square of the hypotenuse equals the sum of the squares of the legs: a² + b² = c². The hypotenuse is the side opposite the right angle and is always the longest side. A triangle with legs 3 and 4 has a hypotenuse of 5, since 9 + 16 = 25.',
          'The converse also holds: if the squares of the two shorter sides add to the square of the longest, the triangle is a right triangle. That test is used in construction and carpentry to check a square corner, and it lets you classify a triangle as acute or obtuse by comparing c² with a² + b².',
          'The theorem finds distances on the coordinate plane. The horizontal and vertical differences between two points are the legs, so the distance between (1, 2) and (4, 6) is the hypotenuse of legs 3 and 4, which is 5. Answers are often irrational, and a decimal approximation should be labeled as such.',
        ],
      },
      {
        heading: 'Volume of round solids',
        paragraphs: [
          'The volume of a cylinder is the area of its circular base times its height: V = πr²h. A cone with the same base and height holds one third as much, so V = ⅓πr²h. A sphere’s volume is V = 4/3πr³, which is why a sphere with the same radius as a cylinder fills about two thirds of it.',
          'Composite solids are handled by adding or subtracting volumes. A silo made of a cylinder and a half sphere is the sum of the two parts, while a cylindrical pipe with a hole is the outer volume minus the inner. Keeping the units consistent and reporting cubic units prevents confusing volume with surface area.',
          'Size changes affect volume dramatically because volume depends on the cube of the radius. Doubling a sphere’s radius multiplies its volume by eight. That relationship explains why a small increase in a container’s dimensions produces a large increase in capacity and why shipping costs scale with size rather than with height alone. Estimating before computing is still the best check: a cone with radius 3 and height 10 should hold about a third of a cylinder with the same dimensions, so a result larger than the cylinder signals an error.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A right triangle has legs 6 and 8. Find the hypotenuse, then the volume of a cylinder with radius 3 and height 10.',
        steps: [
          'Use a² + b² = c²: 36 + 64 = 100, so c = 10.',
          'Use V = πr²h: π × 9 × 10 = 90π, about 282.7 cubic units.',
        ],
        answer: 'The hypotenuse is 10, and the cylinder’s volume is about 282.7 cubic units.',
      },
    ],
    terms: [
      ['hypotenuse', 'the side opposite the right angle in a right triangle'],
      ['leg', 'one of the two sides forming the right angle'],
      ['Pythagorean theorem', 'a² + b² = c² for right triangles'],
      ['cylinder', 'a solid with two parallel circular bases'],
      ['cone', 'a solid with a circular base tapering to a point'],
      ['sphere', 'a perfectly round solid whose points are equidistant from its center'],
    ],
    practice: [
      num('A right triangle has legs 5 and 12. What is the hypotenuse?', 13, '25 + 144 = 169.'),
      mc('The volume of a cone is what fraction of a cylinder with the same base and height?', ['one half', 'one third', 'two thirds', 'the same'], 1, 'A cone holds one third as much.'),
      num('What is the distance between (1, 2) and (4, 6)?', 5, 'Legs 3 and 4 give hypotenuse 5.'),
    ],
    review: [
      {
        prompt: 'How do you find the distance between two points on a coordinate plane?',
        answer: 'Use the horizontal and vertical differences as legs and apply the Pythagorean theorem to find the hypotenuse.',
      },
      {
        prompt: 'Why is volume measured in cubic units?',
        answer: 'Volume counts unit cubes filling a solid, and each cube has three dimensions.',
      },
    ],
    exercises: [
      'Measure a rectangular room’s diagonal using the theorem and check with a tape measure.',
      'Compute the volume of three household containers and compare with their labels.',
    ],
  },
};
