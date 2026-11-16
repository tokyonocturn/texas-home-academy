import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Middle school electives, part one: art, PE, and health. */
export const DEPTH_MSA: Record<string, LessonDepth> = {
  'msart-u1-l1': {
    topics: ['focal point'],
    objectives: [
      'Explain how balance, contrast, and negative space direct a viewer’s eye.',
      'Use complementary and analogous color relationships to create a specific effect.',
    ],
    sections: [
      {
        heading: 'Arrangement: where the eye goes first',
        paragraphs: [
          'Composition is the arrangement of elements within a frame. Visual weight comes from contrast, size, and placement: a small dark shape can balance a large pale one. Symmetrical arrangements feel stable, while asymmetrical ones feel active, and both need balance to avoid the sense that the image is sliding off the page.',
          'A focal point is the place a viewer looks first. Artists create it with the highest contrast, the sharpest edge, or the brightest color. Leading lines, such as a road or a row of trees, carry the eye toward that point. Without a focal point the eye wanders, which is exhausting in a way viewers notice even when they cannot name it.',
          'Negative space is the area around and between subjects. Plenty of empty space can make a subject feel isolated or calm, while a crowded frame feels tense. Cropping is the fastest compositional decision available: moving the frame changes the relationships among everything inside it without altering a single object.',
        ],
      },
      {
        heading: 'Color relationships',
        paragraphs: [
          'The color wheel organizes hues so relationships become predictable. Primary colors — red, yellow, and blue in traditional mixing — combine to make secondary colors: orange, green, and violet. Complementary colors sit opposite each other on the wheel, such as red and green, and placed side by side they intensify each other.',
          'Analogous colors sit next to each other, such as blue, blue-green, and green. They produce harmony because they share a common hue, and they are useful when an artist wants unity rather than tension. Warm colors such as red and orange advance toward the viewer, while cool blues and greens recede, which is why a warm subject against a cool background separates clearly.',
          'Value matters as much as hue. Value is lightness or darkness, and a composition with strong value contrast remains readable even in a photograph without color. Simultaneous contrast describes how a color changes depending on its surroundings: the same gray looks darker on white and lighter on black, so color decisions must always be judged in context. Texture and repetition work the same way: a repeated shape creates rhythm, and a single rough patch among smooth ones draws attention without needing brighter color. Rhythmic repetition also gives the eye a path through the frame, which is why artists return to patterns when a composition feels scattered.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A photograph shows a single red umbrella on a gray street, placed left of center. Explain two compositional choices.',
        steps: [
          'The color contrast makes the umbrella the focal point.',
          'Off-center placement creates movement, and the empty street is negative space that isolates the subject.',
        ],
        answer: 'Color contrast creates a focal point, and off-center placement plus negative space make the image feel active.',
      },
    ],
    terms: [
      ['composition', 'the arrangement of elements within a frame'],
      ['focal point', 'the area a viewer notices first'],
      ['negative space', 'the empty area around and between subjects'],
      ['complementary colors', 'hues opposite each other on the color wheel'],
      ['analogous colors', 'hues next to each other on the color wheel'],
      ['value', 'the lightness or darkness of a color'],
    ],
    practice: [
      mc('What effect do complementary colors create?', ['dullness', 'strong contrast and intensity', 'harmony only', 'no effect'], 1, 'Opposites intensify each other.'),
      mc('Which creates a focal point?', ['even spacing', 'highest contrast', 'equal values', 'a centered grid'], 1, 'Contrast draws the eye.'),
      num('How many primary colors are named here?', 3, 'Red, yellow, and blue.'),
    ],
    review: [
      {
        prompt: 'What effect do complementary colors create?',
        answer: 'They intensify each other through strong contrast, making both colors appear more vivid when placed side by side.',
      },
      {
        prompt: 'Why avoid placing everything in the center?',
        answer: 'Centered placement can feel static, while off-center arrangements create movement and visual interest.',
      },
    ],
    exercises: [
      'Sketch three thumbnail compositions for the same subject and mark each focal point.',
      'Create a color study using one complementary pair and one analogous set, then compare the effects.',
    ],
  },
  'msart-u2-l1': {
    topics: ['proportion'],
    objectives: [
      'Draw from observation using contour, gesture, and sighting for proportion.',
      'Give critique that describes specifically and suggests an actionable next step.',
    ],
    sections: [
      {
        heading: 'Drawing what is actually there',
        paragraphs: [
          'Observational drawing begins with looking longer than seems necessary. Gesture drawing captures the whole pose in a few quick lines, recording movement before detail. Contour drawing traces edges slowly, treating the outline as a single continuous path. Both train the hand to follow the eye rather than a remembered idea of the object.',
          'Proportion is the relationship between parts. Sighting is a measuring technique: hold a pencil at arm’s length, align the tip with one edge of the subject, mark the other edge with your thumb, and compare that unit with other parts. Using one consistent unit prevents the common error of drawing a head too small or a table too short.',
          'Value turns a flat outline into a form. Squinting blurs detail so you can see the large light and dark shapes, which should be blocked in before fine shading. Foreshortening compresses objects that point toward the viewer, and negative space helps check the shape of gaps, because gaps are easier to see accurately than edges.',
        ],
      },
      {
        heading: 'Critique that helps',
        paragraphs: [
          'Useful critique describes before it judges. Start with what is actually visible: “The table edge tilts up on the right” is a description; “it looks bad” is not. Then analyze how the choices affect the viewer, interpret what the work seems to be doing, and only then evaluate whether it succeeds.',
          'Actionable feedback names a specific change. “Darken the shadow under the left leg to separate it from the floor” gives the artist something to try, while “add more contrast” is too vague to act on. Feedback should also be limited: three focused observations improve a drawing more than a list of twenty complaints.',
          'Revision is part of drawing, not evidence of failure. A second pass that corrects proportion and strengthens values often teaches more than a fresh start, because the artist can compare the two versions directly. Keeping earlier drafts makes that comparison possible and shows progress that is otherwise invisible. Thumbnail studies are a cheap way to solve composition before committing. Three small sketches of the same subject take minutes and reveal which arrangement works, saving an hour of correction on a full-size drawing. Erasing is a tool rather than an admission: lifting graphite to restore a highlight is often the fastest way to make a form read as three-dimensional.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A drawing shows a seated figure whose head looks too large. How would you check the proportion and fix it?',
        steps: [
          'Sight the head height as one unit and compare it with the torso.',
          'Measure how many head-units tall the figure should be, then compare with the drawing.',
          'Adjust the head or torso so the ratio matches the subject.',
        ],
        answer: 'Measure head-units on the subject, compare with the drawing, and correct whichever part is out of ratio.',
      },
    ],
    terms: [
      ['gesture drawing', 'a quick sketch capturing movement and overall form'],
      ['contour drawing', 'a slow drawing that follows edges'],
      ['sighting', 'measuring proportions by comparing units at arm’s length'],
      ['foreshortening', 'the visual compression of forms pointing toward the viewer'],
      ['critique', 'structured feedback that describes, analyzes, and evaluates'],
      ['revision', 'reworking a drawing to correct and strengthen it'],
    ],
    practice: [
      mc('What does sighting help you measure?', ['color temperature', 'proportions between parts', 'brush texture', 'canvas size'], 1, 'Sighting compares units to check proportion.'),
      mc('What makes critique actionable?', ['praise', 'a specific suggested change', 'a letter grade', 'silence'], 1, 'Specific suggestions can be acted on.'),
      num('How many critique steps are described here?', 4, 'Describe, analyze, interpret, and evaluate.'),
    ],
    review: [
      {
        prompt: 'What does sighting help you measure?',
        answer: 'Sighting compares one unit of the subject with other parts to check proportion accurately.',
      },
      {
        prompt: 'What makes critique actionable?',
        answer: 'It names a specific change the artist can make, rather than offering a general judgment.',
      },
    ],
    exercises: [
      'Draw a chair in ten minutes using only contour lines, then redraw it with value.',
      'Give a classmate three specific observations about a drawing and one suggested revision.',
    ],
  },
  'mspe-u1-l1': {
    topics: ['recovery'],
    objectives: [
      'Apply the FITT principle to design a weekly activity plan.',
      'Explain why recovery is part of training rather than a break from it.',
    ],
    sections: [
      {
        heading: 'FITT: four dials you can turn',
        paragraphs: [
          'The FITT principle describes how to build a training plan. Frequency is how often you exercise, intensity is how hard, time is how long, and type is what kind of activity. Adjusting one dial at a time lets you increase difficulty without overwhelming the body, which is the principle of progression.',
          'Overload means asking the body to do slightly more than it is used to, because adaptation happens in response to challenge. A rough guide to moderate intensity is a target heart rate of about 50 to 70 percent of maximum, and maximum heart rate can be estimated as 220 minus age. Perceived exertion, judged on a scale from easy to maximal, is often more useful because it accounts for heat, sleep, and illness.',
          'Type matters because different activities produce different adaptations. Aerobic activity such as running strengthens the heart and lungs, resistance training builds strength and bone density, and flexibility work supports range of motion. A balanced week includes more than one type, which also reduces the risk of overuse injury from repeating a single motion.',
        ],
      },
      {
        heading: 'Recovery is when adaptation happens',
        paragraphs: [
          'Training creates stress, and the body rebuilds during rest. Sleep is the most powerful recovery tool, and short sleep increases injury risk and slows repair. Rest days, lighter sessions, and alternating muscle groups give tissue time to rebuild without losing the habit of activity.',
          'Signs of inadequate recovery include persistent soreness, declining performance, trouble sleeping, and irritability. Ignoring them leads to overtraining, which can take weeks to reverse. Hydration and adequate protein and carbohydrate intake support repair, and stretching after activity helps maintain range of motion without preventing soreness entirely.',
          'A simple weekly plan alternates hard and easy days. Three aerobic sessions, two strength sessions, and daily movement such as walking can fit most schedules, with at least one full rest day. The best plan is one that can be sustained, because consistency over months matters more than the intensity of any single workout. Warm-ups of five to ten minutes raise heart rate and prepare joints, and cool-downs return it gradually. Specificity matters too: training for a sport should resemble that sport’s demands, which is why a swimmer benefits more from swimming intervals than from long runs. Sleep and hydration are training variables, not extras: a dehydrated athlete performs worse and recovers more slowly, and a sleep-deprived one cannot adapt to the work just completed.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A 15-year-old wants to improve endurance. Estimate a moderate target heart rate and describe one week of FITT.',
        steps: [
          'Estimate maximum heart rate: 220 − 15 = 205 beats per minute.',
          'Moderate zone is about 50–70%, or roughly 103–144 beats per minute.',
          'Plan three 30-minute aerobic sessions, two strength sessions, and rest days.',
        ],
        answer: 'A moderate zone near 103–144 bpm, trained three times weekly with strength and rest days.',
      },
    ],
    terms: [
      ['FITT', 'frequency, intensity, time, and type of exercise'],
      ['overload', 'training beyond current capacity to stimulate adaptation'],
      ['progression', 'gradually increasing training demands'],
      ['target heart rate', 'a heart rate range associated with a desired intensity'],
      ['recovery', 'rest and repair that allows the body to adapt'],
      ['overtraining', 'a decline caused by too much training without enough recovery'],
    ],
    practice: [
      mc('What does the T in FITT mean?', ['tension', 'time', 'temperature', 'technique'], 1, 'Time is how long a session lasts.'),
      mc('Recovery matters because', ['it wastes training time', 'adaptation happens during rest', 'it increases soreness', 'it lowers fitness'], 1, 'The body rebuilds during recovery.'),
      num('What is the estimated maximum heart rate for a 15-year-old?', 205, '220 − 15 = 205.'),
    ],
    review: [
      {
        prompt: 'Why is recovery necessary?',
        answer: 'Training creates stress, and the body repairs and strengthens tissue during rest, so recovery is when adaptation happens.',
      },
      {
        prompt: 'What does the T in FITT mean?',
        answer: 'Time refers to how long each exercise session lasts, which can be adjusted along with frequency and intensity.',
      },
    ],
    exercises: [
      'Write a one-week FITT plan and record how you felt after each session.',
      'Measure your heart rate after three intensities and compare with the estimated zone.',
    ],
  },
  'mspe-u2-l1': {
    topics: ['heat illness'],
    objectives: [
      'Distinguish heat exhaustion from heat stroke and describe the correct response.',
      'Apply prevention strategies for heat, hydration, and common sports injuries.',
    ],
    sections: [
      {
        heading: 'Heat illness and hydration',
        paragraphs: [
          'Heat illness ranges from cramps to a life-threatening emergency. Heat cramps are painful muscle spasms caused by heavy sweating and lost salts. Heat exhaustion brings heavy sweating, weakness, dizziness, nausea, and cool clammy skin, and it requires moving to a cool place, loosening clothing, and drinking fluids.',
          'Heat stroke is an emergency. The body’s cooling system fails, skin may be hot and dry or still sweaty, and confusion, slurred speech, or loss of consciousness can follow. Call emergency services immediately, move the person to shade, and cool them with water and ice while waiting. Do not give fluids to someone who is confused or unresponsive.',
          'Prevention is mostly planning. Drink water before, during, and after activity rather than waiting for thirst, which lags behind need. Acclimatize gradually over one to two weeks of heat, schedule hard sessions for cooler hours, wear light clothing, and take scheduled breaks. Texas heat and humidity make these habits essential rather than optional.',
        ],
      },
      {
        heading: 'Preventing and responding to injury',
        paragraphs: [
          'Warm-ups raise muscle temperature and prepare joints, and technique matters more than enthusiasm. Proper footwear, gradual increases in training load, and attention to pain during activity reduce overuse injuries such as shin splints and tendinitis. Pain that persists or worsens is a signal to stop, not a test of toughness.',
          'For a suspected sprain or strain, the standard first response is protection, rest, ice, compression, and elevation, followed by medical evaluation if the injury is severe or does not improve. Ice is applied for about fifteen to twenty minutes at a time with a cloth barrier to protect skin.',
          'A suspected concussion requires immediate removal from play and evaluation by a health care professional. Headaches, dizziness, nausea, confusion, and sensitivity to light are warning signs, and returning to play before clearance risks a longer recovery. Coaches and parents, not the athlete alone, should decide when return is safe. Weather adds hazards beyond heat: lightning requires leaving the field immediately, and Texas storms can arrive with little warning. A written emergency plan that names who calls 911, where the AED is kept, and how parents are contacted turns panic into a sequence. Acclimatization should be gradual, with shorter, lighter sessions in the first week of hot weather and longer ones as the body adjusts. Athletes returning from illness or a long break should rebuild volume before intensity, because fitness returns faster than connective tissue adapts.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A player becomes confused and stops sweating during practice in August. What should happen first?',
        steps: [
          'Treat confusion plus heat as possible heat stroke.',
          'Call emergency services and begin cooling immediately.',
          'Do not give fluids to someone who is confused.',
        ],
        answer: 'Emergency response: call for help, cool the player, and do not give fluids.',
      },
    ],
    terms: [
      ['heat exhaustion', 'heat illness with heavy sweating, weakness, and dizziness'],
      ['heat stroke', 'a medical emergency in which the body cannot cool itself'],
      ['acclimatization', 'gradual adjustment to a hotter environment'],
      ['sprain', 'an injury to a ligament connecting bones'],
      ['concussion', 'a brain injury caused by a blow or sudden movement'],
      ['RICE', 'rest, ice, compression, and elevation for a new injury'],
    ],
    practice: [
      mc('What distinguishes heat stroke from heat exhaustion?', ['sweating only', 'confusion and failed cooling', 'muscle cramps', 'thirst'], 1, 'Confusion signals an emergency.'),
      mc('Who decides when an athlete returns after a concussion?', ['the athlete', 'a health care professional', 'a teammate', 'the scorekeeper'], 1, 'Medical clearance is required.'),
      num('How many minutes should ice be applied at a time?', 20, 'About fifteen to twenty minutes with a cloth barrier.'),
    ],
    review: [
      {
        prompt: 'What distinguishes heat stroke from heat exhaustion?',
        answer: 'Heat stroke involves confusion or loss of consciousness and failed cooling, making it an emergency rather than a warning.',
      },
      {
        prompt: 'Who decides when an athlete returns after a concussion?',
        answer: 'A health care professional must clear the athlete before return, not the athlete or coach alone.',
      },
    ],
    exercises: [
      'Plan hydration and rest breaks for a two-hour practice in hot weather.',
      'Practice the RICE sequence and explain each step to a family member.',
    ],
  },
  'mshealth-u1-l1': {
    topics: ['serving size'],
    objectives: [
      'Read a nutrition label and interpret servings, added sugar, and percent daily value.',
      'Explain how sleep and stress affect health and describe two coping strategies.',
    ],
    sections: [
      {
        heading: 'Reading the label',
        paragraphs: [
          'A nutrition label lists serving size first because every other number depends on it. A package may contain two or three servings, so a snack eaten in one sitting can deliver double or triple the calories listed. Checking servings per container is the single most useful habit in label reading.',
          'Added sugars are listed separately from total sugars because they are added during processing rather than occurring naturally in fruit or milk. Percent daily value shows how much one serving contributes to a 2,000-calorie reference diet, so five percent is low and twenty percent is high. These numbers are guides for an average adult, not prescriptions for an individual teenager.',
          'A balanced plate is easier to remember than a list of rules. Fill about half with vegetables and fruit, a quarter with protein, and a quarter with whole grains, and choose water instead of sugary drinks most of the time. No single meal decides health; patterns over weeks do, which is why rigid rules tend to fail while sustainable habits last. Sugary drinks deserve particular attention because liquid calories do not satisfy hunger the way food does, and caffeine late in the day interferes with sleep. Water is the default drink for most activity, and sports drinks matter mainly for long, sweaty sessions.',
        ],
      },
      {
        heading: 'Sleep and stress',
        paragraphs: [
          'Teenagers generally need eight to ten hours of sleep, and most do not get it. Sleep supports memory, mood, immune function, and athletic recovery, and chronic short sleep raises the risk of anxiety and poor academic performance. A consistent bedtime, dim light in the evening, and keeping phones out of the bed improve sleep more reliably than trying to catch up on weekends.',
          'Stress is a normal response to demand, and short bursts can improve focus. Chronic stress keeps the body’s alarm system running, which affects sleep, digestion, and concentration. Naming the source of stress is the first step, because problems that can be planned for feel different from problems that cannot be controlled.',
          'Coping strategies that work are usually simple and repeatable: slow breathing, physical activity, breaking a task into smaller steps, and talking with someone trusted. Avoiding the source entirely often increases anxiety, while a small first action reduces it. Persistent low mood, hopelessness, or thoughts of self-harm are reasons to involve a trusted adult and a health professional immediately. Knowing your address, a parent’s phone number, and how to call 911 without a phone unlock is basic safety knowledge that costs nothing to learn. Writing a short list of trusted adults and keeping it where you can find it removes hesitation in a crisis. A basic first aid kit contains gloves, gauze, tape, adhesive bandages, antiseptic wipes, and a cold pack. Cleaning a small wound with water and covering it prevents infection, and any wound that is deep, dirty, or bleeding heavily needs medical care rather than home treatment.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A bag of chips says 3 servings per container and 150 calories per serving. How many calories are in the whole bag, and what should you check next?',
        steps: [
          'Multiply calories by servings: 150 × 3 = 450 calories.',
          'Check added sugar, sodium, and whether you would actually eat the whole bag.',
        ],
        answer: '450 calories for the bag; check added sugar and sodium next.',
      },
    ],
    terms: [
      ['serving size', 'the amount a label’s nutrition numbers are based on'],
      ['added sugar', 'sugar added during processing rather than occurring naturally'],
      ['percent daily value', 'how much a serving contributes to a reference daily diet'],
      ['balanced plate', 'a meal pattern of half produce, a quarter protein, a quarter grains'],
      ['sleep hygiene', 'habits that support consistent, restful sleep'],
      ['chronic stress', 'ongoing stress that keeps the body’s alarm system active'],
    ],
    practice: [
      num('How many calories are in a bag with 3 servings of 150 calories?', 450, '150 × 3 = 450.'),
      mc('Why check servings per package?', ['to count ingredients', 'the label numbers apply per serving', 'to find the price', 'to measure fiber'], 1, 'All values are per serving.'),
      num('How many hours of sleep do teenagers generally need at minimum?', 8, 'Eight to ten hours.'),
    ],
    review: [
      {
        prompt: 'Why check servings per package?',
        answer: 'Because every number on the label applies to one serving, and a package may contain several.',
      },
      {
        prompt: 'How does poor sleep affect stress?',
        answer: 'Short sleep raises stress hormones and reduces coping capacity, making ordinary demands feel harder to manage.',
      },
    ],
    exercises: [
      'Compare two similar snacks using their labels and explain which is the better choice and why.',
      'Track sleep and stress for five days and note any pattern you observe.',
    ],
  },
  'mshealth-u2-l1': {
    topics: ['consent'],
    objectives: [
      'Use assertive refusal skills and explain the elements of consent.',
      'Describe the first steps for bleeding, choking, and an unresponsive person.',
    ],
    sections: [
      {
        heading: 'Refusal and boundaries',
        paragraphs: [
          'Refusal skills are learned behaviors, not personality traits. An assertive refusal is brief, clear, and repeated if necessary: “No, I’m not doing that.” Adding an alternative such as “let’s do something else” makes it easier to exit without a confrontation, and having a planned excuse or a ride home removes the pressure to improvise.',
          'Consent is an agreement to an activity that is freely given, informed, enthusiastic, and revocable. Freely given means no pressure, threats, or manipulation; informed means the person understands what they are agreeing to; enthusiastic means genuine willingness rather than silence or reluctance; revocable means it can be withdrawn at any time.',
          'Peer pressure works because belonging matters. Recognizing the pattern — flattery, exclusion, dares, and urgency — makes it easier to resist. Leaving is a valid response, and so is naming the pressure out loud. A friend who respects a no is showing what the relationship is worth.',
        ],
      },
      {
        heading: 'First aid basics',
        paragraphs: [
          'Before helping, check the scene for danger and call 911 for any life-threatening emergency. For severe bleeding, apply firm direct pressure with a clean cloth and keep pressing until help arrives. Do not remove an object that is embedded; stabilize it instead.',
          'For choking in a conscious person who cannot speak or cough, give back blows and abdominal thrusts. If the person becomes unresponsive, call 911 and begin CPR if trained. For an unresponsive person who is not breathing normally, call 911, send for an AED, and start chest compressions at a rate of about 100 to 120 per minute if you are trained.',
          'Do not move someone with a suspected spinal injury unless there is immediate danger such as fire. Keep them still and wait for emergency responders. For burns, cool with running water and cover loosely; for poisoning, call Poison Control rather than inducing vomiting. Knowing when not to act is part of first aid. Calling 911 early is almost always right, because dispatchers can give instructions while help is on the way and because minutes matter in bleeding, breathing, and stroke emergencies. Staying on the line, giving the address clearly, and following the dispatcher’s directions are skills worth rehearsing before a crisis. Knowing your own address and a nearby landmark helps responders find you when stress makes details hard to recall.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A classmate pressures you to stay somewhere your family does not allow. Write a refusal and name the consent principle at stake.',
        steps: [
          'State the refusal clearly without a long explanation.',
          'Offer an alternative and leave if pressure continues.',
          'The relevant principle is that agreement must be free of pressure.',
        ],
        answer: '“No, I’m heading home; text me later.” Free consent cannot be produced by pressure.',
      },
    ],
    terms: [
      ['assertive refusal', 'a clear, brief statement declining an activity'],
      ['consent', 'freely given, informed, enthusiastic, and revocable agreement'],
      ['peer pressure', 'influence from peers to act in a certain way'],
      ['direct pressure', 'pressing firmly on a wound to slow bleeding'],
      ['CPR', 'chest compressions and rescue breaths to support circulation'],
      ['AED', 'a device that can restart a heart with an electrical shock'],
    ],
    practice: [
      mc('What are the elements of consent?', ['silence and agreement', 'free, informed, enthusiastic, revocable', 'pressure and urgency', 'age alone'], 1, 'All four elements are required.'),
      mc('What should you do first for a serious injury?', ['move the person', 'check the scene and call 911', 'give water', 'wait an hour'], 1, 'Scene safety and emergency help come first.'),
      num('How many compressions per minute are recommended in CPR?', 110, 'About 100 to 120 per minute.'),
    ],
    review: [
      {
        prompt: 'What are the elements of consent?',
        answer: 'Consent must be freely given, informed, enthusiastic, and revocable at any point during the activity.',
      },
      {
        prompt: 'What should you do first for a serious injury?',
        answer: 'Check the scene for danger, then call 911 or direct someone else to call while you help.',
      },
    ],
    exercises: [
      'Practice three refusal scripts aloud and note which felt most natural.',
      'Locate the AED at a school or gym and explain how you would use it with help.',
    ],
  },
};
