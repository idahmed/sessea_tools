export default {
  slug: 'typing-speed-wpm',
  topic: 'Typing',
  title: 'How typing speed is measured, and how to improve yours',
  description:
    'What words per minute really counts, how accuracy is scored, why results differ between typing tests, what speeds are typical, and a practice routine that works.',
  published: '2026-11-07',
  updated: '2026-11-07',
  tools: ['typing-test'],
  sections: [
    {
      heading: 'A word is five characters',
      blocks: [
        { p: 'Words per minute sounds simple, but real words have very different lengths. "a" and "information" would count the same if typing tests counted actual words. So typing tests use a fixed definition: one word is five characters, including spaces. Typing 300 characters in one minute is 60 WPM, whatever the words were.' },
        { p: 'This convention makes results comparable between texts, the way measuring fuel use per 100 km makes cars comparable regardless of the route.' },
      ],
    },
    {
      heading: 'Gross speed, net speed and accuracy',
      blocks: [
        { p: 'Typing tests differ in how they treat mistakes, which is the main reason the same person gets different scores on different sites.' },
        {
          table: {
            caption: 'Common ways to score a typing test',
            head: ['Measure', 'What it counts', 'Effect of mistakes'],
            rows: [
              ['Gross WPM', 'Every character typed, divided by 5, per minute', 'None. Fast, careless typing scores high'],
              ['Net WPM', 'Gross WPM minus uncorrected errors per minute', 'Each error left in the text lowers the score'],
              ['Correct-character WPM', 'Only characters that match the text, divided by 5, per minute', 'Wrong characters add nothing'],
              ['Accuracy', 'Share of keystrokes that were right', 'Fixed mistakes may or may not still count, depending on the test'],
            ],
          },
        },
        { p: 'The sessea typing test counts correct characters in your final text, so an uncorrected mistake simply does not count. Its accuracy counts every wrong key press, even one you fixed with Backspace. A score of 100% means you never pressed a wrong key.' },
      ],
    },
    {
      heading: 'What speeds are typical',
      blocks: [
        { p: 'A large study by researchers at Aalto University analysed 136 million keystrokes from about 168,000 volunteers who took an online typing test. The average speed was about 52 WPM, with a wide spread between participants, and the fastest typists above 120 WPM.' },
        { p: 'Those volunteers chose to take a typing test, so they probably type more than average. As a rough guide (this is an estimate, not a measured standard):' },
        {
          ul: [
            'Below 30 WPM: usually typing with a few fingers while looking at the keys.',
            '30 to 50 WPM: a common speed for people who type regularly.',
            '50 to 80 WPM: fast. Typing is no longer the bottleneck for most writing.',
            'Above 80 WPM: very fast, typical of touch typists who practise.',
          ],
        },
        { p: 'Accuracy matters as much as speed. Below about 95%, the time spent noticing and fixing errors usually costs more than the extra speed gains.' },
      ],
    },
    {
      heading: 'How to get a fair measurement',
      blocks: [
        {
          ul: [
            'Use the same text length each time. One pause weighs much more in a 100-character test than in a 500-character one. 300 or 500 characters gives a stable result.',
            'Warm up with one test and count the next ones.',
            'Take three tests and look at the middle score rather than the best one.',
            'Use the same keyboard. A laptop keyboard, an external one and a phone give very different results.',
            'To compare attempts directly, repeat the same text with Retry same text.',
          ],
        },
      ],
    },
    {
      heading: 'How to type faster',
      blocks: [
        { p: 'Speed comes from not having to think about where the keys are. The most reliable route there is touch typing: each finger is responsible for a fixed set of keys, and your eyes stay on the screen.' },
        {
          ol: [
            'Place your fingers on the home row: left hand on A S D F, right hand on J K L ;. Most keyboards have small bumps on F and J so you can find them without looking.',
            'Learn which finger presses each key. Every key above and below the home row belongs to the finger directly under it, shifting slightly to the left as you go up.',
            'Type slowly enough to reach high accuracy without looking at the keyboard. If you must look, you are going too fast.',
            'Practise for 10 to 15 minutes a day. Short regular sessions build the habit better than one long session a week.',
            'Raise your speed only when your accuracy stays above 95%.',
          ],
        },
        { p: 'Expect your speed to drop for the first week or two after switching from looking at the keys. That is normal: you are replacing an old habit with a faster one, like learning to ride without stabilisers.' },
      ],
    },
    {
      heading: 'Comfort matters too',
      blocks: [
        { p: 'Tense hands type slower and tire quickly. Keep your wrists straight and floating rather than bent up on the desk edge, your shoulders relaxed, and the top of the screen at roughly eye level. Press keys lightly: most keyboards register a key long before it reaches the bottom.' },
        { p: 'If typing causes pain, tingling or numbness that does not go away with rest, stop and see a health professional rather than pushing through it.' },
      ],
    },
  ],
}
