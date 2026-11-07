export default {
  slug: 'degrees-vs-radians',
  topic: 'Calculations',
  title: 'Degrees or radians: why your calculator says sin(90) = 0.894',
  description:
    'What the DEG and RAD modes do, how to tell which one a calculator is in, how to convert between them, and when to use each.',
  published: '2026-11-07',
  updated: '2026-11-07',
  tools: ['calculator'],
  sections: [
    {
      heading: 'The symptom',
      blocks: [
        { p: 'You type sin(90), expecting 1, and get 0.893996663600558. Or cos(60) gives -0.952 instead of 0.5. Your calculator is not broken. It is reading your angle in radians while you meant degrees.' },
        { p: 'Every scientific calculator has an angle mode, usually labelled DEG and RAD (some also have GRAD). It decides how the numbers you give to sin, cos and tan, and the numbers you get back from their inverses, are interpreted.' },
      ],
    },
    {
      heading: 'Two units for the same thing',
      blocks: [
        { p: 'Degrees and radians both measure angles, the way centimetres and inches both measure length. A full turn is 360 degrees, or 2π radians (about 6.283). So one radian is about 57.3 degrees.' },
        { p: 'Degrees come from ancient astronomy and are convenient for everyday angles. Radians come from the circle itself: one radian is the angle where the arc along the circle is as long as the radius. That makes radians the natural unit in calculus and physics, where many formulas only work in radians.' },
        {
          table: {
            caption: 'Common angles in both units',
            head: ['Degrees', 'Radians (exact)', 'Radians (decimal)'],
            rows: [
              ['30°', 'π/6', '0.5236'],
              ['45°', 'π/4', '0.7854'],
              ['60°', 'π/3', '1.0472'],
              ['90°', 'π/2', '1.5708'],
              ['180°', 'π', '3.1416'],
              ['360°', '2π', '6.2832'],
            ],
          },
        },
      ],
    },
    {
      heading: 'Converting between them',
      blocks: [
        { p: 'To go from degrees to radians, multiply by π and divide by 180. To go from radians to degrees, multiply by 180 and divide by π.' },
        {
          ul: [
            '90° in radians: 90 × π ÷ 180 = π/2 ≈ 1.5708.',
            '2 radians in degrees: 2 × 180 ÷ π ≈ 114.59°.',
          ],
        },
        { p: 'On the sessea calculator you can type these directly, for example 90×π÷180, using the π key.' },
      ],
    },
    {
      heading: 'Which mode to use',
      blocks: [
        {
          ul: [
            'Degrees: school geometry, triangles, construction, navigation, slopes, roof pitches, and anything where the angle was measured with a protractor or given with the ° symbol.',
            'Radians: calculus, physics (angular velocity, oscillations, waves), programming (almost every programming language uses radians in its math functions), and any formula where the angle appears without a ° symbol next to π.',
          ],
        },
        { p: 'A quick check works in any calculator: compute sin(90). If you get 1, you are in degrees. If you get 0.894, you are in radians.' },
      ],
    },
    {
      heading: 'Inverse functions follow the mode too',
      blocks: [
        { p: 'asin, acos and atan return an angle, and the mode decides its unit. In degree mode, asin(0.5) returns 30. In radian mode it returns 0.5236, which is the same angle. If an answer from atan looks oddly small, check the mode before checking your working.' },
      ],
    },
    {
      heading: 'On the sessea calculator',
      blocks: [
        { p: 'The DEG/RAD key sits at the top left of the scientific keys and shows the current mode. The calculator starts in degrees, and remembers your choice on your device for the next visit. Results in the history are stored as numbers, so switching mode later does not change past results.' },
      ],
    },
  ],
}
