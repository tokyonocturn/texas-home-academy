import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Art I and Health (grade 9) depth pass. */
export const DEPTH_G9E: Record<string, LessonDepth> = {
  'art1-u1-l1': {
    topics: ['color theory'],
    objectives: [
      'Identify the elements of art and use color theory vocabulary accurately.',
      'Explain how the principles of design organize a composition.',
    ],
    sections: [
      {
        heading: 'The elements of art',
        paragraphs: [
          'Line is a mark with direction and can be contour, gesture, or hatching. Shape is flat and enclosed, while form has volume and is described through value and perspective. Value is the range from light to dark, texture is the surface quality real or implied, and space includes positive shapes and the negative areas around them.',
          'Color has three properties: hue, the name of the color family; value, its lightness or darkness; and intensity, its saturation. Primary colors of pigment are red, yellow, and blue, secondary colors mix two primaries into orange, green, and violet, and tertiary colors mix a primary with a neighboring secondary. Complementary colors sit opposite on the wheel and intensify each other when placed together.',
          'Color temperature shapes mood: warm reds, oranges, and yellows advance and feel energetic, while cool blues and greens recede and calm. A tint is a color mixed with white and a shade is mixed with black, while tone adds gray. Understanding these relationships lets a painter direct attention deliberately rather than by accident.',
        ],
      },
      {
        heading: 'Principles of design',
        paragraphs: [
          'Balance distributes visual weight. Symmetrical balance mirrors around an axis, asymmetrical balance offsets a large shape with a small intense one, and radial balance radiates from a center as in a rose window. Emphasis creates a focal point through contrast, placement, or isolation, and contrast itself is the difference in value, color, texture, or size that makes a composition readable.',
          'Rhythm repeats elements to create movement, as in the repeated arches of a colonnade, and pattern extends that repetition across a surface. Proportion compares parts to each other and to the whole, while scale compares size to a standard, which is why a giant sculpture in a plaza feels monumental rather than merely large.',
          'Unity is the sense that everything belongs together, and variety is the interest that keeps unity from becoming monotony. Katsushika Hokusai’s Great Wave works because the mountain-like wave dominates, the small boats create rhythm, and the pale mountain in the distance balances the dark water, so the eye travels and then rests. A useful exercise is to sketch the composition as three or four simple shapes, which reveals the underlying balance faster than studying the details. Keeping a small thumbnail sketch beside a finished work also shows whether the first idea survived, which is where most compositional problems begin. Cropping two L-shaped cards over a drawing is a cheap way to test alternative compositions without redrawing, and moving the crop by an inch often solves a problem that felt like a drawing error. Testing three small thumbnails before committing to a full sheet is the habit that separates a draft from a finished composition, and it costs only a few minutes of planning before the final drawing begins, and it prevents starting over on a full sheet.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A poster uses a large cool blue field, a small bright orange circle, and thin repeated lines. Identify the principles at work.',
        steps: [
          'The orange circle is small but complementary to blue, so it gains emphasis through contrast.',
          'Asymmetric balance results, since the intense small shape offsets the large calm field.',
          'Repeated thin lines create rhythm and texture across the background.',
        ],
        answer: 'Emphasis by complementary contrast, asymmetrical balance, and rhythm from repetition.',
      },
    ],
    terms: [
      ['value', 'the lightness or darkness of a color or tone'],
      ['hue', 'the name of a color family on the color wheel'],
      ['intensity', 'the saturation or purity of a color'],
      ['complementary colors', 'colors opposite each other on the color wheel'],
      ['emphasis', 'the principle that creates a focal point'],
      ['unity', 'the quality of a composition whose parts belong together'],
    ],
    practice: [
      mc('Red and green are', ['analogous', 'complementary', 'tertiary', 'neutral'], 1, 'They sit opposite on the wheel.'),
      mc('Adding white to a color produces a', ['shade', 'tint', 'tone', 'hue'], 1, 'White makes a tint.'),
      num('How many primary colors are there in pigment mixing?', 3, 'Red, yellow, and blue.'),
    ],
    review: [
      {
        prompt: 'How are hue, value, and intensity different?',
        answer: 'Hue is the color family, value is its lightness or darkness, and intensity is how saturated or pure it is.',
      },
      {
        prompt: 'How can an artist create emphasis without using a large shape?',
        answer: 'By using strong contrast, isolating the element, or placing it where the eye naturally travels first.',
      },
    ],
    exercises: [
      'Build a twelve-step color wheel and label primaries, secondaries, and one complementary pair.',
      'Analyze a reproduction of a famous work, naming three elements and three principles.',
    ],
  },
  'art1-u2-l1': {
    topics: ['perspective'],
    objectives: [
      'Draw from observation using proportion, gesture, and sighting techniques.',
      'Give and receive critique using description, analysis, interpretation, and evaluation.',
    ],
    sections: [
      {
        heading: 'Observation and drawing technique',
        paragraphs: [
          'Drawing from observation begins with seeing relationships rather than objects. Sighting compares lengths by holding a pencil at arm’s length, gesture drawing captures the whole pose in seconds, and contour drawing traces edges slowly without looking at the paper. Proportion checks compare one part to another, such as the head to the body, and negative space helps locate edges that are hard to judge directly.',
          'Value builds form. A five-step value scale from white to black trains the eye, and shading techniques include hatching with parallel lines, cross-hatching with layered sets, stippling with dots, and smooth blending. Light direction determines where highlights, midtones, core shadows, reflected light, and cast shadows fall, and keeping that direction consistent is what makes an object look solid.',
          'Perspective organizes space. One-point perspective sends receding parallel lines to a single vanishing point on the horizon, two-point perspective uses two points for a corner view, and three-point adds vertical convergence for tall buildings. Foreshortening compresses forms that point toward the viewer, which is why a pointing arm looks shorter than its actual length.',
        ],
      },
      {
        heading: 'Critique methodology',
        paragraphs: [
          'A critique proceeds in four steps. Describe what is literally present without judgment, analyze how the elements and principles are used, interpret what the work communicates, and only then evaluate whether it succeeds at what it attempts. Separating description from evaluation keeps feedback specific instead of personal.',
          'Effective feedback names a specific choice and its effect: “the dark background pushes the lit face forward” is useful, while “I like it” is not. When receiving critique, listen without defending, ask clarifying questions, and decide afterward which suggestions to apply. The artist owns the work, so feedback is evidence rather than instruction.',
          'Art history gives critique context. Renaissance artists developed linear perspective and anatomical study, Impressionists broke color into visible strokes to capture light, and modernist movements questioned representation itself. Knowing what a period valued prevents judging an expressionist painting by the standards of a photograph, and it lets a student place their own choices within a tradition. Keeping a sketchbook of daily studies, dated and annotated, documents that growth and gives a student concrete evidence of improvement to discuss in critique. Photographing work in consistent light and reviewing the images a month later reveals habits a student cannot see while drawing, such as shrinking proportions or flattening value. Critiquing your own older work with the four-step method is good preparation for a portfolio review, because it turns taste into specific, defensible language. Writing three sentences about what you would change, and why, is the version of critique that most improves the next drawing, especially when you keep the note beside the new work and compare the two side by side with fresh eyes after a week away from the work.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A still-life drawing looks flat. Diagnose the problem and prescribe two fixes.',
        steps: [
          'Check the value range: if everything sits in the midtones, form cannot read.',
          'Check light direction: shadows on different sides of objects signal inconsistent light.',
          'Deepen the core shadows, add a highlight on the lit side, and unify the cast shadows in one direction.',
        ],
        answer: 'The value range is too narrow and the light direction inconsistent; deepen shadows and unify them under one light source.',
      },
    ],
    terms: [
      ['gesture drawing', 'a quick drawing that captures movement and overall form'],
      ['contour line', 'a line that follows the visible edge of a form'],
      ['cross-hatching', 'layered sets of parallel lines used to build value'],
      ['vanishing point', 'the point where receding parallel lines appear to meet'],
      ['foreshortening', 'drawing forms that point toward the viewer as compressed'],
      ['critique', 'structured feedback on a work of art'],
    ],
    practice: [
      mc('Two-point perspective is used when', ['drawing a flat shape', 'viewing a corner', 'drawing a circle', 'mixing paint'], 1, 'A corner view needs two points.'),
      mc('The first step of a critique is', ['evaluation', 'description', 'revision', 'comparison'], 1, 'Describe before judging.'),
      num('How many steps does the critique method described here have?', 4, 'Describe, analyze, interpret, evaluate.'),
    ],
    review: [
      {
        prompt: 'Why does an inconsistent light direction make a drawing look wrong?',
        answer: 'Because highlights and shadows no longer describe one light source, so the forms stop reading as solid objects in a shared space.',
      },
      {
        prompt: 'What makes critique feedback useful rather than personal?',
        answer: 'It names a specific choice and its effect and separates description from evaluation, so the artist can act on it.',
      },
    ],
    exercises: [
      'Draw a five-step value scale and a shaded sphere with one light source.',
      'Run a four-step critique on a classmate’s drawing and write one actionable suggestion.',
    ],
  },
  'health-u1-l1': {
    topics: ['macronutrients'],
    objectives: [
      'Read a nutrition label and calculate the energy contributed by each macronutrient.',
      'Plan a balanced plate and apply physical activity and sleep guidelines.',
    ],
    sections: [
      {
        heading: 'Macronutrients and nutrition labels',
        paragraphs: [
          'Macronutrients supply energy: carbohydrate and protein provide about 4 kilocalories per gram, and fat provides about 9. A food with 30 grams of carbohydrate, 5 grams of protein, and 10 grams of fat supplies 120 + 20 + 90, or 230 kilocalories, which is why fat-rich foods are energy dense.',
          'Labels report serving size first, and everything else depends on it. Check total calories, added sugars, sodium, and fiber, and read the percent daily value as a rough guide based on a 2,000-calorie diet. A food with 25% of the daily value for sodium in one serving supplies a quarter of the recommended limit for the day, which matters for anyone eating several servings.',
          'Dietary fiber supports digestion and fullness, and most adolescents fall short of the recommended amounts. Added sugars should stay under about 10% of daily calories, and sodium under 2,300 milligrams for most people. Water is the default drink; sugary beverages add calories without nutrients and are a major source of added sugar.',
        ],
      },
      {
        heading: 'Building a plate and moving daily',
        paragraphs: [
          'A balanced plate fills half with fruits and vegetables, a quarter with whole grains, and a quarter with protein, with a serving of dairy or a fortified alternative alongside. This visual method is easier to apply than counting calories, and it naturally increases fiber and reduces energy density because vegetables add volume and water.',
          'Physical activity has components: aerobic capacity for the heart and lungs, muscular strength and endurance, flexibility, and balance. The FITT principle organizes a plan by frequency, intensity, time, and type. Adolescents should get about sixty minutes of moderate-to-vigorous activity daily, including muscle- and bone-strengthening activity several days a week.',
          'Sleep is part of fitness. Teenagers need eight to ten hours, and short sleep raises the risk of poor mood, accidents, and weight gain while reducing learning. Consistent bed and wake times, dim light before bed, and keeping screens out of the bedroom improve sleep more reliably than trying to catch up on weekends. Reading a label and planning a plate are skills that transfer directly to cooking at home, where portions and ingredients are under the cook’s control rather than a restaurant’s. A simple habit of packing produce and a protein for lunch improves the plate more reliably than any supplement, and it costs less than eating out. Packing a lunch also makes portions visible, which is the same skill a label teaches. Pairing that habit with a water bottle and a piece of fruit covers the most common gaps in a school day without requiring a decision in the moment, which is when hunger makes the worst choices, and it takes willpower out of the equation entirely.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A snack has 30 g carbohydrate, 5 g protein, and 10 g fat. Compute its calories and judge it against a 2,000-calorie day.',
        steps: [
          'Carbohydrate: 30 × 4 = 120 kcal.',
          'Protein: 5 × 4 = 20 kcal and fat: 10 × 9 = 90 kcal.',
          'Total 230 kcal, about 11.5% of a 2,000-calorie day.',
        ],
        answer: 'About 230 kilocalories, roughly 12% of a 2,000-calorie day.',
      },
    ],
    terms: [
      ['macronutrient', 'a nutrient that supplies energy in large amounts'],
      ['calorie', 'a unit of food energy, equal to one kilocalorie'],
      ['percent daily value', 'the share of a day’s recommended nutrient intake in one serving'],
      ['dietary fiber', 'plant material that resists digestion and aids fullness'],
      ['FITT', 'frequency, intensity, time, and type of exercise'],
      ['aerobic activity', 'sustained activity that raises heart and breathing rates'],
    ],
    practice: [
      num('How many kilocalories does 10 grams of fat supply?', 90, 'Fat provides 9 kcal per gram.'),
      mc('A balanced plate is half', ['protein', 'grains', 'fruits and vegetables', 'dairy'], 2, 'Half the plate is produce.'),
      num('How many minutes of daily activity are recommended for adolescents?', 60, 'About sixty minutes.'),
    ],
    review: [
      {
        prompt: 'Why does serving size matter when reading a label?',
        answer: 'All the nutrient numbers apply to one serving, so a package with two servings contains twice the calories and sodium listed.',
      },
      {
        prompt: 'What are the components of physical fitness?',
        answer: 'Aerobic capacity, muscular strength and endurance, flexibility, and balance, each trained with different activities.',
      },
    ],
    exercises: [
      'Compare two labels for the same food type and justify the healthier choice with numbers.',
      'Design a one-week activity plan using FITT and track sleep hours for five nights.',
    ],
  },
  'health-u2-l1': {
    topics: ['stress'],
    objectives: [
      'Distinguish eustress from distress and apply coping strategies to a real stressor.',
      'Recognize risk factors for substance use and know basic first aid and emergency steps.',
    ],
    sections: [
      {
        heading: 'Stress, coping, and mental health',
        paragraphs: [
          'Stress is the body’s response to demand. Eustress is short-term and motivating, such as nerves before a performance, while distress is prolonged or overwhelming and strains health. The stress response raises heart rate and releases cortisol, which is useful briefly and harmful when it never turns off.',
          'Coping strategies divide into problem-focused approaches that change the situation and emotion-focused approaches that change the response. Making a study schedule and asking for help are problem-focused; breathing exercises, exercise, music, and talking with a friend are emotion-focused. Avoidance and substance use reduce feeling in the short term and make the problem larger.',
          'Mental health warning signs include two weeks or more of persistent sadness, loss of interest, major sleep or appetite changes, and withdrawal from people. These are reasons to talk with a trusted adult, school counselor, or clinician, not signs of weakness. In the United States, 988 reaches the Suicide and Crisis Lifeline by call or text at any hour.',
        ],
      },
      {
        heading: 'Substance use, first aid, and health literacy',
        paragraphs: [
          'Nicotine and vaping harm developing brains and lungs and are highly addictive, alcohol impairs judgment and is illegal for minors, and cannabis affects memory and coordination. Refusal skills work best when practiced: keep a short reason ready, make eye contact, suggest an alternative, and leave if pressure continues. Having a plan in advance is more effective than improvising under pressure.',
          'Basic first aid saves lives. For severe bleeding, apply firm direct pressure with a clean cloth and call emergency services. For choking in a conscious person, give back blows and abdominal thrusts. For suspected cardiac arrest, call 911, start chest compressions at about 100 to 120 per minute, and use an AED if one is available.',
          'Health literacy means judging information before acting on it. Prefer sources such as the Centers for Disease Control and Prevention, the National Institutes of Health, and the Texas Department of State Health Services, and check the date, the author’s credentials, and whether the claim cites evidence. Anecdotes and influencer testimonials are not evidence, and urgent symptoms belong with a clinician or 911 rather than a search engine. The same caution applies to supplements and viral remedies, which are loosely regulated and often marketed with claims that no trial supports. Knowing where to look, and when to stop looking and call a professional, is the practical core of health literacy, and it is worth practicing on a claim you can check against a government page, such as a vaccination schedule, a nutrition recommendation, or a first-aid guide.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A student is overwhelmed two weeks before finals and a friend offers vaping to relax. Apply a coping plan and a refusal script.',
        steps: [
          'Name the stressor and choose a problem-focused step: build a study calendar and ask a teacher for help.',
          'Add an emotion-focused step: daily walking and a breathing exercise before bed.',
          'Use a refusal script: no thanks, that would make exams harder, then suggest studying together instead.',
        ],
        answer: 'A study plan plus exercise and sleep, with a practiced refusal that offers an alternative activity.',
      },
    ],
    terms: [
      ['eustress', 'short-term stress that motivates and improves performance'],
      ['distress', 'prolonged or overwhelming stress that harms health'],
      ['coping strategy', 'a deliberate response to manage a stressor or its effects'],
      ['refusal skill', 'a practiced way to decline pressure safely'],
      ['AED', 'an automated external defibrillator used in cardiac arrest'],
      ['health literacy', 'the ability to find and judge health information'],
    ],
    practice: [
      mc('Which is an example of eustress?', ['ongoing family conflict', 'nerves before a performance', 'chronic illness', 'sleep loss'], 1, 'Short-term, motivating stress.'),
      num('What number reaches the Suicide and Crisis Lifeline?', 988, 'Call or text 988.'),
      mc('The first step for severe bleeding is', ['apply a tourniquet immediately', 'direct pressure', 'give water', 'wait for swelling'], 1, 'Firm direct pressure first.'),
    ],
    review: [
      {
        prompt: 'How much sleep do most teenagers need?',
        answer: 'Most teenagers need eight to ten hours of sleep each night for mood, learning, and physical health.',
      },
      {
        prompt: 'How do you judge whether a health claim is trustworthy?',
        answer: 'Check the source, the author’s credentials, the date, and whether it cites evidence rather than anecdotes.',
      },
    ],
    exercises: [
      'Track stressors for a week and match each with a coping strategy you actually used.',
      'Write and rehearse three refusal scripts for situations involving nicotine, alcohol, and a dare.',
    ],
  },
};
