import type { Course } from '../../types';
import { HIGH_WEIGHTS } from '../weights';
import { exam, lesson, mc, num, project, quiz, rubricRow, section, short, teks, unit } from '../builders';

export const ipc: Course = {
  id: 'hs-ipc',
  title: 'Integrated Physics and Chemistry',
  subject: 'science',
  grade: 9,
  credits: 1,
  semesters: 2,
  description:
    'A lab-based survey of motion, forces, energy, waves, electricity, matter, and chemical change. IPC satisfies the second science credit option in the Foundation High School Program when paired with Biology and an advanced science course (19 TAC §74.12(b)(3)).',
  essentialQuestions: [
    'How do physicists and chemists describe the same material world differently?',
    'How do measurements and units make claims testable?',
  ],
  teks: [
    teks('19 TAC ch. 112, Integrated Physics and Chemistry', 'Motion and forces; energy and waves; electricity; matter and chemical reactions; scientific investigation and safety.'),
  ],
  weights: HIGH_WEIGHTS,
  units: [
    unit('u1', 'Motion, forces, and measurement', 'A measurement without units is not a measurement.', [
      lesson({
        id: 'ipc-u1-l1',
        title: 'SI units, speed, and balanced forces',
        minutes: 50,
        objectives: ['Use SI units and convert within them.', 'Distinguish balanced from unbalanced forces.'],
        sections: [
          section('Units first', [
            'Science uses SI units: meter (length), kilogram (mass), second (time), kelvin (temperature), ampere (current), mole (amount). Derived units combine them: speed in m/s, force in newtons (kg·m/s²), energy in joules (N·m).',
            'Conversions are multiplication by a ratio equal to one: 1 km = 1,000 m, so 3 km × (1,000 m / 1 km) = 3,000 m. Keeping units in the calculation catches many errors before they reach the answer.',
          ]),
          section('Forces', [
            'A net force changes motion. If forces balance, velocity stays constant — which includes staying at rest. A book on a table has gravity downward and a normal force upward; they balance, so it does not accelerate. Push it and friction opposes the motion; if your push exceeds friction, it accelerates.',
            'F = ma ties force, mass, and acceleration together. Doubling the mass halves the acceleration for the same force.',
          ]),
        ],
        example: {
          prompt: 'A 500 g cart is pushed with a net force of 2 N. What is its acceleration?',
          steps: ['Convert mass: 500 g = 0.5 kg.', 'a = F/m = 2/0.5.', 'a = 4 m/s².'],
          answer: '4 m/s².',
        },
        practice: [
          num('A 2 kg object experiences a net force of 6 N. What is its acceleration in m/s²?', 3, 'a = 6/2 = 3.'),
          mc('A book resting on a table has', ['unbalanced forces', 'balanced forces', 'no forces', 'only gravity'], 1, 'Gravity and the normal force balance.'),
        ],
      }),
    ], quiz('Unit 1 quiz: motion and forces', [
      num('Convert 2.5 km to meters.', 2500, '2.5 × 1,000 = 2,500 m.'),
      mc('Newton’s first law describes', ['inertia', 'chemical change', 'electric charge', 'density'], 0, 'An object maintains its velocity unless a net force acts.'),
      num('A 10 N net force acts on a 5 kg mass. What is the acceleration?', 2, 'a = 10/5 = 2 m/s².'),
    ]), project({
      title: 'Measurement and friction lab',
      prompt: 'Measure the force needed to pull a block across three surfaces. Record data in SI units, compute averages, and explain the pattern.',
      deliverable: 'Data table, averages, and a written explanation.',
      guidance: ['Use a spring scale or calibrated force sensor.', 'Repeat each trial three times.', 'Identify the independent and dependent variables.'],
      rubric: [
        rubricRow('Procedure and safety', 25, [['Excellent', 'Clear, repeatable, safe.', 25], ['Proficient', 'Adequate.', 20], ['Developing', 'Unclear.', 12], ['Beginning', 'Unsafe.', 5]]),
        rubricRow('Data and units', 35, [['Excellent', 'Accurate, SI units, repeated.', 35], ['Proficient', 'Minor gaps.', 28], ['Developing', 'Missing units.', 18], ['Beginning', 'Unreliable.', 7]]),
        rubricRow('Explanation', 30, [['Excellent', 'Relates friction to surfaces.', 30], ['Proficient', 'Basic.', 24], ['Developing', 'Vague.', 15], ['Beginning', 'None.', 6]]),
        rubricRow('Report', 10, [['Excellent', 'Organized.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Disorganized.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
    unit('u2', 'Energy, waves, and electricity', 'Energy transfers; it does not vanish.', [
      lesson({
        id: 'ipc-u2-l1',
        title: 'Energy forms, waves, and simple circuits',
        minutes: 50,
        objectives: ['Identify energy transformations.', 'Compute wave speed and circuit current.'],
        sections: [
          section('Energy transformations', [
            'Energy appears as motion (kinetic), position (potential), thermal, chemical, electrical, and light energy. A falling ball converts gravitational potential energy to kinetic; a battery converts chemical to electrical; a lamp converts electrical to light and heat. In every case the total energy is conserved, though some becomes less useful.',
            'Efficiency = useful output / total input × 100%. An incandescent bulb converting 5 W of 60 W into light is about 8% efficient; the rest becomes heat.',
          ]),
          section('Waves and circuits', [
            'Wave speed v = fλ. Sound at 50 Hz with wavelength 2 m travels at 100 m/s. Light and radio waves travel at about 3.0 × 10⁸ m/s in a vacuum.',
            'Ohm’s law V = IR. A 9 V battery across 3 Ω gives 3 A. Power P = IV, so that circuit uses 27 W. In series, current is shared equally; in parallel, voltage is equal across branches.',
          ]),
        ],
        example: {
          prompt: 'A 9 V battery is connected to a 3 Ω resistor. Find current and power.',
          steps: ['I = V/R = 9/3 = 3 A.', 'P = IV = 3 × 9 = 27 W.'],
          answer: '3 A and 27 W.',
        },
        practice: [
          num('A wave has frequency 60 Hz and wavelength 5 m. What is its speed?', 300, 'v = 60 × 5 = 300 m/s.'),
          num('A 12 V battery across 4 Ω produces what current?', 3, '12/4 = 3 A.'),
        ],
      }),
    ], quiz('Unit 2 quiz: energy and electricity', [
      mc('A battery converts', ['chemical energy to electrical energy', 'light to heat', 'kinetic to potential', 'sound to light'], 0, 'Chemical reactions in the cell produce electrical energy.'),
      num('What is the speed of a wave with f = 20 Hz and λ = 3 m?', 60, 'v = 60 m/s.'),
      num('A 100 W device runs for 5 hours. How many kWh does it use?', 0.5, '0.1 kW × 5 h = 0.5 kWh.'),
    ]), project({
      title: 'Energy transformation chain',
      prompt: 'Trace the energy transformations from sunlight to a light in your home. Identify at least four transformations and one loss at each stage.',
      deliverable: 'A labeled chain diagram with a one-page explanation.',
      guidance: ['Name the form at each stage.', 'Quantify a loss where data is available.', 'Distinguish energy from power.'],
      rubric: [
        rubricRow('Chain accuracy', 40, [['Excellent', 'Four or more accurate transformations.', 40], ['Proficient', 'Three accurate.', 32], ['Developing', 'Errors.', 20], ['Beginning', 'Incomplete.', 8]]),
        rubricRow('Losses', 30, [['Excellent', 'Specific and plausible losses.', 30], ['Proficient', 'General.', 24], ['Developing', 'Vague.', 15], ['Beginning', 'None.', 6]]),
        rubricRow('Explanation', 20, [['Excellent', 'Energy vs power clear.', 20], ['Proficient', 'Basic.', 16], ['Developing', 'Confused.', 10], ['Beginning', 'None.', 4]]),
        rubricRow('Diagram', 10, [['Excellent', 'Clear and labeled.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Unlabeled.', 5], ['Beginning', 'Missing.', 2]]),
      ],
    })),
    unit('u3', 'Matter and chemical change', 'Atoms rearrange; they do not disappear.', [
      lesson({
        id: 'ipc-u3-l1',
        title: 'Physical and chemical changes; conservation of mass',
        minutes: 50,
        objectives: ['Distinguish physical from chemical changes.', 'Apply conservation of mass to a reaction.'],
        sections: [
          section('Telling changes apart', [
            'A physical change alters form or state without creating a new substance: ice melting, sugar dissolving, glass breaking. A chemical change produces a new substance, often signaled by gas production, precipitate, color change, or heat release: iron rusting, baking soda reacting with vinegar, wood burning.',
            'Density is mass per volume, d = m/V. A 20 g sample with volume 4 cm³ has density 5 g/cm³. Density is an intensive property: it does not change with sample size.',
          ]),
          section('Conservation of mass', [
            'In a closed system, mass before a reaction equals mass after. In an open container, a gas can escape and the measured mass falls; the missing mass is in the air. Balancing an equation is the accounting system for atoms.',
          ]),
        ],
        example: {
          prompt: 'Baking soda and vinegar react in an open cup and the mass drops. Explain.',
          steps: ['The reaction produces carbon dioxide gas.', 'The gas escapes into the room.', 'In a sealed bag the mass would be unchanged.'],
          answer: 'Mass appears to drop because CO₂ leaves the system; total mass is conserved.',
        },
        practice: [
          mc('Which is a chemical change?', ['ice melting', 'iron rusting', 'sugar dissolving', 'glass breaking'], 1, 'Rusting produces a new substance, iron oxide.'),
          num('A 15 g sample has volume 5 cm³. What is its density in g/cm³?', 3, '15/5 = 3.'),
        ],
      }),
    ], quiz('Unit 3 quiz: matter', [
      mc('Density is', ['mass per volume', 'volume per mass', 'weight per area', 'force per area'], 0, 'd = m/V.'),
      mc('A precipitate indicates', ['a physical change', 'a chemical change', 'a change of state', 'no change'], 1, 'An insoluble solid forming signals a reaction.'),
      num('A 40 g object occupies 8 cm³. What is its density?', 5, '40/8 = 5 g/cm³.'),
    ]), project({
      title: 'Matter investigation',
      prompt: 'Classify ten household changes as physical or chemical and justify each with an observable criterion. Include one measurement of density.',
      deliverable: 'A table with classification, evidence, and one density calculation.',
      guidance: ['Distinguish evidence from assumption.', 'Measure mass and volume carefully.', 'Cite any outside information.'],
      rubric: [
        rubricRow('Classification', 40, [['Excellent', 'All ten correct with evidence.', 40], ['Proficient', 'Minor errors.', 32], ['Developing', 'Unsupported labels.', 20], ['Beginning', 'Mostly wrong.', 8]]),
        rubricRow('Evidence', 30, [['Excellent', 'Specific observations.', 30], ['Proficient', 'General.', 24], ['Developing', 'Vague.', 15], ['Beginning', 'None.', 6]]),
        rubricRow('Density calculation', 20, [['Excellent', 'Correct with units.', 20], ['Proficient', 'Minor error.', 16], ['Developing', 'Formula error.', 10], ['Beginning', 'Missing.', 4]]),
        rubricRow('Organization', 10, [['Excellent', 'Clear table.', 10], ['Proficient', 'Readable.', 8], ['Developing', 'Messy.', 5], ['Beginning', 'Unclear.', 2]]),
      ],
    })),
  ],
  finalExam: exam('IPC final examination', [
    num('A 6 kg object experiences a net force of 18 N. What is its acceleration?', 3, 'a = 18/6 = 3 m/s².'),
    num('A wave has frequency 30 Hz and wavelength 2 m. What is its speed?', 60, 'v = 60 m/s.'),
    num('A 12 V battery across 6 Ω produces what current?', 2, 'I = 12/6 = 2 A.'),
    mc('Ice melting is a', ['chemical change', 'physical change', 'combustion reaction', 'precipitation'], 1, 'Change of state does not create a new substance.'),
    num('A 50 g sample has volume 10 cm³. What is its density?', 5, '50/10 = 5 g/cm³.'),
    short('Explain why the mass of an open container can decrease after a chemical reaction even though mass is conserved.', 'Model: Conservation applies to a closed system. In an open container, a gaseous product such as carbon dioxide escapes and is no longer measured. The mass still exists in the room; the system boundary excluded it.', ['Names the gas.', 'Explains system boundaries.', 'States conservation correctly.'], 10),
  ]),
};
