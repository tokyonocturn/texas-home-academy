import { mc, num } from '../builders';
import type { LessonDepth } from './types';

/** Physics and U.S. History Since 1877 (grade 11) depth pass. */
export const DEPTH_G11B: Record<string, LessonDepth> = {
  'phys-u1-l1': {
    topics: ['net force'],
    objectives: [
      'Solve kinematics problems for constant acceleration using the standard equations.',
      'Apply Newton’s second law to find net force and acceleration.',
    ],
    sections: [
      {
        heading: 'Kinematics with constant acceleration',
        paragraphs: [
          'Motion in one dimension is described by displacement, velocity, and acceleration. For constant acceleration, the equations v = v₀ + at, Δx = v₀t + ½at², and v² = v₀² + 2aΔx link the five quantities. Choose the equation that contains the unknown and omits the irrelevant variable, which is faster than deriving each time.',
          'A car accelerating from rest at 3 m/s² reaches 24 m/s in 8 seconds, having traveled ½(3)(64) = 96 meters. Units must stay consistent: kilometers per hour must be converted to meters per second before substitution, and 72 km/h is 20 m/s.',
          'Free fall is constant acceleration near Earth’s surface with g = 9.8 m/s² downward. A dropped object falls 4.9 meters in the first second and 19.6 meters in two, which is why the distance quadruples as time doubles. Air resistance is neglected in introductory problems, and saying so is part of the answer.',
        ],
      },
      {
        heading: 'Forces and Newton’s second law',
        paragraphs: [
          'Newton’s second law, ΣF = ma, relates net force to acceleration. A 1,200-kilogram car accelerating at 2.5 m/s² needs a net force of 3,000 newtons, and if friction supplies 800 newtons of resistance, the engine must supply 3,800 newtons. Drawing a free-body diagram before writing the equation prevents sign errors.',
          'Weight is a force, w = mg, so a 70-kilogram student weighs about 686 newtons. Normal force is not always equal to weight: on an incline, only the perpendicular component of gravity is balanced, which is why objects slide and why the normal force is mg cos θ.',
          'Newton’s third law explains propulsion and collisions. A rocket pushes gas backward and the gas pushes the rocket forward, and in a collision each vehicle exerts an equal force on the other, though the lighter one accelerates more because a = F/m. Equal forces do not imply equal consequences. Students should also distinguish static from kinetic friction: static friction adjusts up to a maximum, which is why a heavy box does not move until the push exceeds the threshold, while kinetic friction stays roughly constant once motion begins. That threshold explains why starting a heavy cart is harder than keeping it rolling and why anti-lock brakes maintain rolling contact rather than skidding.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A 1,200 kg car accelerates from 10 m/s to 25 m/s in 6 s against 800 N of friction. Find the net force and the engine force.',
        steps: [
          'a = (25 − 10)/6 = 2.5 m/s².',
          'Net force = ma = 1,200 × 2.5 = 3,000 N.',
          'Engine force = 3,000 + 800 = 3,800 N.',
        ],
        answer: 'Net force 3,000 N; the engine must supply 3,800 N.',
      },
    ],
    terms: [
      ['displacement', 'change in position with direction'],
      ['acceleration', 'the rate of change of velocity'],
      ['free fall', 'motion under gravity alone, with a = 9.8 m/s² downward'],
      ['net force', 'the vector sum of all forces acting on an object'],
      ['normal force', 'the perpendicular force a surface exerts on an object'],
      ['inertia', 'an object’s resistance to changes in motion'],
    ],
    practice: [
      num('How far does a car travel accelerating from rest at 3 m/s² for 8 s?', 96, '½(3)(64) = 96 m.'),
      num('What net force accelerates 1,200 kg at 2.5 m/s²?', 3000, 'ma = 3,000 N.'),
      mc('On an incline, the normal force equals', ['mg', 'mg sin θ', 'mg cos θ', 'zero'], 2, 'Only the perpendicular component is balanced.'),
    ],
    review: [
      {
        prompt: 'What net force is needed for constant acceleration?',
        answer: 'The net force equals mass times acceleration, so a steady acceleration requires a steady net force in the direction of motion.',
      },
      {
        prompt: 'Why is the normal force on an incline less than the object’s weight?',
        answer: 'Because only the component of gravity perpendicular to the surface, mg cos θ, is balanced by the normal force.',
      },
    ],
    exercises: [
      'Solve three kinematics problems, listing knowns and the equation used.',
      'Draw free-body diagrams for four situations and compute net force.',
    ],
  },
  'phys-u2-l1': {
    topics: ['momentum'],
    objectives: [
      'Apply work, energy, and power relationships to mechanical systems.',
      'Analyze collisions with conservation of momentum and energy.',
    ],
    sections: [
      {
        heading: 'Work, energy, and power',
        paragraphs: [
          'Work is force times displacement in the direction of the force, W = Fd cos θ, measured in joules. Lifting a 10-kilogram box 2 meters requires about 196 joules, while carrying it horizontally at constant speed does no work against gravity because the force is perpendicular to the displacement.',
          'Energy is conserved within a closed system. A 2-kilogram object dropped from 5 meters has potential energy mgh = 2 × 9.8 × 5 = 98 joules, which becomes kinetic energy ½mv² at the bottom, giving v = √(2gh) ≈ 9.9 m/s. Friction converts mechanical energy into thermal energy, which is why real systems never recover all of it.',
          'Power is work divided by time, P = W/t, measured in watts. Lifting those 98 joules in 0.5 seconds requires 196 watts, and a 1,500-watt motor lifting at constant speed can raise a 75-kilogram load at about 2 m/s. Efficiency compares useful output to total input and is always less than 100% in real devices.',
        ],
      },
      {
        heading: 'Momentum and collisions',
        paragraphs: [
          'Momentum is mass times velocity, p = mv, and total momentum is conserved in the absence of external forces. A 1,000-kilogram car at 20 m/s has 20,000 kg·m/s of momentum, and a 0.5-kilogram ball at 40 m/s has 20 kg·m/s, so momentum depends on both mass and speed.',
          'In a perfectly inelastic collision, objects stick together and momentum is conserved while kinetic energy is not. A 2-kilogram cart at 3 m/s hitting a stationary 4-kilogram cart and sticking gives (2)(3) = 6v, so v = 1 m/s, and the kinetic energy drops from 9 joules to 3. The lost energy becomes deformation and heat.',
          'Elastic collisions conserve both momentum and kinetic energy, which is why billiard balls approximately exchange velocities. Impulse, J = FΔt = Δp, explains why airbags reduce injury: extending the collision time lowers the force for the same change in momentum, a relationship students can verify with a simple calculation. Energy accounting should always name the system and the interval: a ball thrown upward converts kinetic energy to potential on the way up and back again on the way down, with total mechanical energy constant if air resistance is negligible. Friction makes mechanical energy decrease while total energy is still conserved, since the missing energy appears as heat. A lab report should therefore state both the mechanical energy lost and the temperature rise that accounts for it, using q = mcΔT and the specific heat of the materials involved.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'A 0.15 kg ball moving at 20 m/s is caught in 0.05 s. Find the impulse and average force.',
        steps: [
          'Δp = mΔv = 0.15 × 20 = 3.0 kg·m/s.',
          'Impulse equals the change in momentum: 3.0 N·s.',
          'F = Δp/Δt = 3.0/0.05 = 60 N.',
        ],
        answer: 'Impulse 3.0 N·s and average force 60 N.',
      },
    ],
    terms: [
      ['work', 'force times displacement in the direction of the force'],
      ['kinetic energy', 'energy of motion, ½mv²'],
      ['conservation of energy', 'energy is neither created nor destroyed, only transformed'],
      ['power', 'the rate of doing work, measured in watts'],
      ['momentum', 'mass times velocity, a conserved vector quantity'],
      ['impulse', 'force multiplied by time, equal to the change in momentum'],
    ],
    practice: [
      num('What is the kinetic energy of a 2 kg object at 10 m/s?', 100, '½(2)(100) = 100 J.'),
      num('A 2 kg cart at 3 m/s sticks to a 4 kg cart at rest. What is the final speed?', 1, '6/6 = 1 m/s.'),
      mc('Airbags reduce injury by', ['increasing momentum', 'increasing collision time', 'decreasing mass', 'increasing force'], 1, 'Longer time means less force.'),
    ],
    review: [
      {
        prompt: 'How does conservation of energy solve a falling-object problem?',
        answer: 'Set potential energy at the start equal to kinetic energy at the end, so mgh = ½mv², which gives v = √(2gh) independent of mass.',
      },
      {
        prompt: 'Why is kinetic energy lost in a perfectly inelastic collision?',
        answer: 'Momentum is conserved but the objects deform and generate heat, so some kinetic energy becomes thermal and internal energy.',
      },
    ],
    exercises: [
      'Calculate work, power, and efficiency for three simple machines.',
      'Solve two collision problems and verify momentum before and after.',
    ],
  },
  'phys-u3-l1': {
    topics: ['Ohm’s law'],
    objectives: [
      'Describe wave properties and solve problems involving sound and light.',
      'Apply Ohm’s law and circuit rules to series and parallel circuits.',
    ],
    sections: [
      {
        heading: 'Waves, sound, and light',
        paragraphs: [
          'A wave transfers energy without transferring matter. Wavelength λ, frequency f, and speed v satisfy v = λf, so a 440-hertz tone in air at 343 m/s has a wavelength of about 0.78 meters. Amplitude determines loudness or brightness, and frequency determines pitch or color.',
          'Sound requires a medium, traveling faster in solids than in gases because particles are closer together. Light travels at 3.0 × 10⁸ m/s in a vacuum and slows in glass or water, which causes refraction and is why a straw looks bent in a glass.',
          'Wave behavior includes reflection, refraction, diffraction, and interference. Constructive interference of two in-phase waves doubles amplitude, while destructive interference cancels it, which is how noise-cancelling headphones work and why thin films show colored bands.',
        ],
      },
      {
        heading: 'Circuits and electrical power',
        paragraphs: [
          'Ohm’s law, V = IR, relates voltage, current, and resistance. A 9-volt battery across a 3-ohm resistor drives 3 amperes. Resistance depends on material, length, and cross-sectional area, which is why long thin wires heat more than short thick ones at the same current.',
          'In a series circuit the current is identical through every element and resistances add: 2 Ω + 3 Ω = 5 Ω total. In a parallel circuit the voltage is the same across each branch and the reciprocal resistances add: 1/R = 1/2 + 1/3 gives R = 1.2 Ω, smaller than either branch.',
          'Electrical power is P = IV, so a device drawing 2 amperes at 120 volts uses 240 watts. Energy consumption is power times time, which is why a 1,500-watt heater running two hours uses 3 kilowatt-hours. Circuit breakers protect wiring by opening when current exceeds a safe rating, and grounding provides a low-resistance path for stray current. Students should also relate current to charge flow, since one ampere equals one coulomb per second, and use that relationship to compute the charge moved in a given time. Household wiring illustrates the safety logic: parallel branches keep each outlet at full voltage, and a breaker rated for fifteen amperes opens before wiring in the wall can overheat. Students should also compute the cost of running an appliance for a month, since that calculation connects Ohm’s law to a household budget and makes energy efficiency concrete enough to compare two appliances before buying one for a family kitchen or a school workshop.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Find the current through a 12 V battery connected to 4 Ω, and the equivalent resistance of 6 Ω and 3 Ω in parallel.',
        steps: [
          'I = V/R = 12/4 = 3 A.',
          'Parallel: 1/R = 1/6 + 1/3 = 1/2, so R = 2 Ω.',
        ],
        answer: '3 A through the series resistor, and 2 Ω for the parallel pair.',
      },
    ],
    terms: [
      ['wavelength', 'the distance between successive wave crests'],
      ['frequency', 'the number of cycles per second, in hertz'],
      ['refraction', 'the bending of a wave as it changes speed between media'],
      ['resistance', 'opposition to current flow, in ohms'],
      ['series circuit', 'a single path where current is the same throughout'],
      ['parallel circuit', 'branches with the same voltage and lower total resistance'],
    ],
    practice: [
      num('What is the current through 4 Ω at 12 V?', 3, 'I = 12/4 = 3 A.'),
      num('What is the wavelength of 343 m/s at 440 Hz, to two decimals?', 0.78, '343/440 ≈ 0.78 m.'),
      mc('In a parallel circuit, which quantity is the same across branches?', ['current', 'voltage', 'resistance', 'power'], 1, 'Voltage is shared equally.'),
    ],
    review: [
      {
        prompt: 'Why does sound travel faster in solids than in gases?',
        answer: 'Particles in a solid are closer together, so collisions transmit the disturbance more quickly through the material.',
      },
      {
        prompt: 'How do series and parallel circuits differ in current and resistance?',
        answer: 'Series circuits share one current and add resistances, while parallel circuits share one voltage and have a total resistance smaller than any branch.',
      },
    ],
    exercises: [
      'Measure wavelength and frequency for a standing wave on a string.',
      'Build series and parallel circuits and compare measured current and voltage with predictions.',
    ],
  },
  'us1-u1-l1': {
    topics: ['Reconstruction'],
    objectives: [
      'Explain the political and social outcomes of Reconstruction.',
      'Analyze industrialization, immigration, and their effects on American life.',
    ],
    sections: [
      {
        heading: 'Reconstruction and its collapse',
        paragraphs: [
          'The Thirteenth Amendment abolished slavery in 1865, the Fourteenth granted citizenship and equal protection in 1868, and the Fifteenth protected voting rights by race in 1870. The Freedmen’s Bureau opened schools and helped families reunite, and Black men were elected to Congress, including Hiram Revels of Mississippi in 1870.',
          'Radical Reconstruction divided the South into military districts and required ratification of the amendments, but resistance was immediate. The Ku Klux Klan, founded in 1865, used terror, and the Compromise of 1877 withdrew federal troops in exchange for Rutherford B. Hayes’s presidency. Without enforcement, states imposed poll taxes, literacy tests, and Jim Crow segregation.',
          'The Supreme Court narrowed the amendments: Plessy v. Ferguson in 1896 endorsed “separate but equal,” and United States v. Cruikshank in 1876 limited federal prosecution of racial violence. The legal promise survived while its enforcement failed, a gap that shaped the next century of civil rights struggle.',
        ],
      },
      {
        heading: 'Industry, cities, and immigration',
        paragraphs: [
          'Industrialization transformed the economy after 1870. Carnegie’s steel and Rockefeller’s Standard Oil, incorporated in 1870, built national markets, while railroads linked them and the transcontinental line was completed at Promontory, Utah, in 1869. Output rose, and so did inequality and periodic panics, including those of 1873 and 1893.',
          'Immigration reshaped the population. Between 1880 and 1920 roughly 23 million immigrants arrived, many from southern and eastern Europe, settling in cities such as New York, Chicago, and Cleveland. Ellis Island opened in 1892, and Angel Island processed Asian arrivals from 1910 under exclusion laws such as the Chinese Exclusion Act of 1882.',
          'Cities grew faster than their infrastructure. Tenements, contaminated water, and factory accidents produced reform movements, and labor organized through the Knights of Labor in 1869 and the American Federation of Labor in 1886. Strikes at Homestead in 1892 and Pullman in 1894 showed both the power and the limits of organized labor. Immigration also produced nativist backlash, including the Know-Nothing movement of the 1850s and the Chinese Exclusion Act of 1882, which shows that debates about who belongs are as old as the republic. Comparing immigrant letters with reformer reports reveals how differently the same city could be described, and that contrast is the raw material for an argument about perspective. Industrialization also transformed the South and West differently: textile mills moved south for cheap labor, mining and ranching shaped the West, and federal land policy such as the Homestead Act of 1862 distributed acreage while displacing Native nations. Regional variation is why a single narrative of American industrialization misleads, and comparing two regions is a reliable way to build a nuanced thesis that survives contact with evidence.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain how the Compromise of 1877 ended Reconstruction and what followed.',
        steps: [
          'The disputed 1876 election was resolved by withdrawing federal troops from the South.',
          'Without enforcement, the Fourteenth and Fifteenth Amendments went unenforced.',
          'States then imposed poll taxes, literacy tests, and segregation.',
        ],
        answer: 'The withdrawal of troops ended federal enforcement, allowing disenfranchisement and Jim Crow to spread.',
      },
    ],
    terms: [
      ['Reconstruction', 'the period after the Civil War when the South was rebuilt'],
      ['Freedmen’s Bureau', 'a federal agency aiding formerly enslaved people'],
      ['Jim Crow', 'state and local laws enforcing racial segregation'],
      ['poll tax', 'a fee required to vote, used to disenfranchise Black voters'],
      ['tenement', 'a crowded urban apartment building'],
      ['collective bargaining', 'negotiation between a union and an employer'],
    ],
    practice: [
      num('In what year was the Fourteenth Amendment ratified?', 1868, '1868.'),
      num('In what year did Plessy v. Ferguson uphold segregation?', 1896, '1896.'),
      mc('Ellis Island opened in', ['1865', '1882', '1892', '1910'], 2, '1892.'),
    ],
    review: [
      {
        prompt: 'How did Reconstruction end, and with what consequences?',
        answer: 'Federal troops withdrew under the Compromise of 1877, so the amendments went unenforced and segregation and disenfranchisement spread.',
      },
      {
        prompt: 'What effects did immigration have on American cities?',
        answer: 'It produced rapid population growth, dense neighborhoods, and labor supply, along with tenements, reform movements, and nativist backlash.',
      },
    ],
    exercises: [
      'Analyze a Reconstruction-era primary source and identify its argument.',
      'Chart three causes and three effects of industrialization with dates.',
    ],
  },
  'us1-u2-l1': {
    topics: ['New Deal'],
    objectives: [
      'Evaluate Progressive reforms and the consequences of the First World War.',
      'Explain the causes of the Great Depression and the New Deal response.',
    ],
    sections: [
      {
        heading: 'Progressivism and the First World War',
        paragraphs: [
          'Progressives responded to industrial inequality with regulation and reform. The Sherman Antitrust Act of 1890 and the Clayton Act of 1914 addressed monopolies, the Pure Food and Drug Act of 1906 created federal food safety, and the Seventeenth Amendment in 1913 provided for direct election of senators. Women’s suffrage culminated in the Nineteenth Amendment in 1920.',
          'The United States entered the First World War in April 1917 after German submarine warfare and the Zimmermann Telegram. Mobilization expanded federal power, and the Treaty of Versailles in 1919 redrew boundaries and imposed reparations on Germany, which the Senate refused to ratify, keeping the United States out of the League of Nations.',
          'The 1920s mixed prosperity with reaction. Assembly lines and consumer credit expanded ownership of cars and radios, while the Eighteenth Amendment’s Prohibition, in force from 1920 to 1933, produced bootlegging and organized crime. The Immigration Act of 1924 imposed national quotas that sharply reduced arrivals from southern and eastern Europe.',
        ],
      },
      {
        heading: 'Depression and the New Deal',
        paragraphs: [
          'The stock market crashed in October 1929, and the Depression deepened as banks failed and unemployment reached roughly 25% by 1933. Drought and poor farming practices created the Dust Bowl, displacing families westward, as described in Steinbeck’s The Grapes of Wrath (1939).',
          'Franklin Roosevelt’s New Deal created the Federal Deposit Insurance Corporation in 1933, the Securities and Exchange Commission in 1934, and the Social Security Act in 1935. The Works Progress Administration employed millions, and the Wagner Act of 1935 protected collective bargaining. The Supreme Court struck down several programs before shifting course in 1937.',
          'The Depression ended only with wartime production. The New Deal did not restore full employment, but it changed expectations about federal responsibility for the economy, and its programs remain part of American life. The 1930s also reshaped American culture: federal arts projects employed writers and painters, radio and film created a shared national audience, and the photograph became a tool of reform. Studying culture alongside policy shows how a society explains a crisis to itself, which is often more revealing than the legislation alone. Comparing a New Deal poster with a contemporary photograph of a breadline shows how the same government presented itself and how its citizens experienced it, and the gap between them is itself historical evidence of how the same historical moment was presented by the state and lived by ordinary people in the same decade and the same cities, a comparison no single source could supply alone. Students should practice reading a photograph as evidence: Dorothea Lange’s Migrant Mother was staged in part, and knowing that does not make it false but does change what it can prove.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain how the New Deal changed the federal government’s role.',
        steps: [
          'It insured bank deposits, regulating risk for ordinary savers.',
          'It created old-age insurance through Social Security.',
          'It established direct federal employment and labor protections.',
        ],
        answer: 'The federal government became an insurer, employer, and regulator of last resort rather than a distant authority.',
      },
    ],
    terms: [
      ['Progressivism', 'a reform movement addressing industrial-era inequality'],
      ['suffrage', 'the right to vote'],
      ['reparations', 'payments required of a defeated state'],
      ['Prohibition', 'the constitutional ban on alcohol from 1920 to 1933'],
      ['New Deal', 'Roosevelt’s programs responding to the Depression'],
      ['Dust Bowl', 'the drought-driven ecological disaster of the 1930s'],
    ],
    practice: [
      num('In what year did the Nineteenth Amendment grant women suffrage?', 1920, '1920.'),
      num('In what year did the stock market crash?', 1929, 'October 1929.'),
      mc('The Social Security Act passed in', ['1929', '1933', '1935', '1939'], 2, '1935.'),
    ],
    review: [
      {
        prompt: 'What caused the Great Depression?',
        answer: 'Speculation and unequal wealth, bank failures, falling demand, and agricultural collapse combined, worsened by drought and poor policy responses.',
      },
      {
        prompt: 'How did the New Deal change federal responsibility?',
        answer: 'It made the federal government an insurer of deposits, a provider of old-age support, and an employer during emergencies.',
      },
    ],
    exercises: [
      'Analyze a New Deal program’s purpose, mechanism, and legacy.',
      'Build a timeline from 1890 to 1939 with eight events and their effects.',
    ],
  },
  'us1-u3-l1': {
    topics: ['civil rights'],
    objectives: [
      'Explain American participation in the Second World War and its domestic effects.',
      'Analyze the Cold War, the civil rights movement, and recent decades.',
    ],
    sections: [
      {
        heading: 'The Second World War and the early Cold War',
        paragraphs: [
          'The United States entered the war after the attack on Pearl Harbor on December 7, 1941. War production ended the Depression, and Executive Order 9066 in 1942 forced about 120,000 Japanese Americans into internment camps, a policy later acknowledged and compensated by the Civil Liberties Act of 1988.',
          'The war ended in Europe in May 1945 and in the Pacific in August after the atomic bombings of Hiroshima and Nagasaki. The United Nations was founded in 1945, and the Cold War divided Europe, with NATO formed in 1949 and the Warsaw Pact in 1955. The Marshall Plan of 1948 rebuilt western Europe and deepened the division.',
          'Containment shaped policy from the Truman Doctrine in 1947 through the Korean War, 1950–1953, and the Vietnam War, which escalated in the 1960s and ended in 1975. The Cuban Missile Crisis of 1962 brought the superpowers closest to nuclear war, and the arms race and space race defined the following decade.',
        ],
      },
      {
        heading: 'Civil rights and recent decades',
        paragraphs: [
          'Brown v. Board of Education in 1954 overturned Plessy and ordered school desegregation. The Montgomery bus boycott of 1955–56 brought Martin Luther King Jr. to national attention, and the Civil Rights Act of 1964 outlawed segregation in public accommodations and employment, followed by the Voting Rights Act of 1965.',
          'The movement’s victories were legal and incomplete. Redlining, suburbanization, and persistent inequality shaped the decades that followed, and the Immigration and Nationality Act of 1965 reopened immigration from Asia and Latin America, changing the country’s demographics.',
          'Recent decades include the end of the Cold War in 1991, the terrorist attacks of September 11, 2001, the wars in Afghanistan and Iraq, the financial crisis of 2008, and the Affordable Care Act of 2010. Studying them requires distinguishing evidence from interpretation, since recent sources are plentiful but unsettled. Students should practice comparing a contemporary news report with a later scholarly account of the same event, noting what each emphasizes and what neither could know at the time. That exercise builds the habit of asking when a source was written and what its author could reasonably have known. That habit is also the best defense against presentism, the error of judging past actors by information they did not have, and that discipline matters most when the period is still unfolding.',
        ],
      },
    ],
    examples: [
      {
        prompt: 'Explain how Brown v. Board changed the legal basis for segregation.',
        steps: [
          'It rejected the “separate but equal” standard from Plessy.',
          'It held that segregated schools are inherently unequal.',
          'It required desegregation with all deliberate speed.',
        ],
        answer: 'Brown removed the constitutional justification for segregation and required desegregation, though enforcement remained contested.',
      },
    ],
    terms: [
      ['internment', 'forced confinement of a group, as with Japanese Americans in 1942'],
      ['containment', 'the policy of limiting Soviet expansion'],
      ['desegregation', 'ending the separation of races in institutions'],
      ['redlining', 'discriminatory denial of loans and services by neighborhood'],
      ['affirmative action', 'policies considering race to remedy past discrimination'],
      ['détente', 'a period of relaxed Cold War tension'],
    ],
    practice: [
      num('In what year was Pearl Harbor attacked?', 1941, 'December 7, 1941.'),
      num('In what year did Brown v. Board of Education decide?', 1954, '1954.'),
      mc('The Voting Rights Act passed in', ['1954', '1964', '1965', '1968'], 2, '1965.'),
    ],
    review: [
      {
        prompt: 'What did the Civil Rights Act of 1964 accomplish?',
        answer: 'It outlawed segregation in public accommodations and discrimination in employment, creating federal enforcement mechanisms.',
      },
      {
        prompt: 'Why is recent history harder to assess than earlier periods?',
        answer: 'Because evidence is abundant but incomplete, interpretations are unsettled, and long-term consequences are not yet visible.',
      },
    ],
    exercises: [
      'Analyze a civil rights primary source and identify its claim and audience.',
      'Build a timeline from 1941 to 2001 with ten dates and their significance.',
    ],
  },
};
