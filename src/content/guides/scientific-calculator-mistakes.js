export default {
  slug: 'scientific-calculator-mistakes',
  topic: 'Calculations',
  title: 'Seven scientific calculator mistakes that give wrong answers',
  description:
    'Order of operations, negative powers, percent, log versus ln, tan(90°), rounding and errors: what calculators actually do and how to get the answer you meant.',
  published: '2026-11-07',
  updated: '2026-11-07',
  tools: ['calculator'],
  sections: [
    {
      heading: 'Why the same keys give different answers',
      blocks: [
        { p: 'Two calculators can show different results for the same key presses, and both can be "right" by their own rules. Most wrong answers come from a handful of rules that people assume rather than check. This guide covers the common ones, with examples you can try on calc.sessea.com.' },
      ],
    },
    {
      heading: '1. Order of operations',
      blocks: [
        { p: 'Type 2 + 3 × 4 =. A scientific calculator, including the sessea one, follows the standard order of operations and gives 14: multiplication before addition. Many basic four-function calculators compute each step as you go and give 20.' },
        { p: 'The full order on a scientific calculator is: brackets first, then powers, then multiplication and division from left to right, then addition and subtraction from left to right. When in doubt, add brackets. They never hurt and they make your intention explicit.' },
        { p: 'Pressing an opening bracket straight after a number multiplies, so 2 ( 3 + 4 ) = gives 14.' },
      ],
    },
    {
      heading: '2. Negative numbers and powers',
      blocks: [
        { p: 'In algebra, -2² means -(2²) = -4: the power applies before the minus sign. On a calculator, it depends on how you enter the minus.' },
        { p: 'On the sessea calculator, the ± key makes the number on screen negative. So 2 ± xʸ 2 = squares -2 and gives 4, because the whole number -2 is the base. To get the textbook -4, compute 2 xʸ 2 = first and then press ±, or type 0 − 2 xʸ 2 =.' },
        { note: 'Exam calculators often treat a leading minus the textbook way. If you move between calculators, check this case once on each.' },
      ],
    },
    {
      heading: '3. The percent key',
      blocks: [
        { p: 'The % key on the sessea calculator divides the number on screen by 100. So 200 + 10 % = gives 200.1, not 220, because 10 % becomes 0.1.' },
        { p: 'To add 10% to 200, either multiply by 1.1 (200 × 1.1 = 220) or compute the 10% explicitly: 200 + 200 × 10 % = 220. To take 15% off a price, multiply by 0.85.' },
        { p: 'Some phone and desktop calculators have a special rule where 200 + 10 % means "200 plus 10% of 200". That rule is convenient for shopping but not consistent, which is why scientific calculators usually avoid it.' },
      ],
    },
    {
      heading: '4. log and ln are different',
      blocks: [
        { p: 'log is the logarithm in base 10: log(100) = 2, because 10² = 100. ln is the natural logarithm, in base e (about 2.71828): ln(100) ≈ 4.605.' },
        {
          table: {
            caption: 'When to use which logarithm',
            head: ['Key', 'Base', 'Typical use'],
            rows: [
              ['log', '10', 'Decibels, pH, Richter scale, orders of magnitude'],
              ['ln', 'e', 'Growth and decay, compound interest, calculus'],
            ],
          },
        },
        { p: 'For any other base, divide: the logarithm of x in base 2 is log(x) ÷ log(2). For example log(8) ÷ log(2) = 3.' },
      ],
    },
    {
      heading: '5. tan(90°) shows a huge number',
      blocks: [
        { p: 'Mathematically, tan(90°) is undefined. A calculator working with decimal approximations cannot represent 90° exactly in radians, so it computes the tangent of an angle a tiny fraction away from 90° and returns an enormous number, about 1.633124e+16 on the sessea calculator. Treat any result like this as "undefined".' },
        { p: 'The same effect explains why sin(180°) shows a tiny number, 1.224647e-16, instead of exactly 0. Read it as zero.' },
      ],
    },
    {
      heading: '6. Rounding and display limits',
      blocks: [
        { p: 'Computers store most decimals in binary, which cannot represent numbers like 0.1 exactly. The raw result of 0.1 + 0.2 is 0.30000000000000004. The sessea calculator rounds results to 12 significant digits for display, so you see 0.3, which is the answer you expect.' },
        { p: 'Very large or very small results switch to scientific notation. 1.234568e+15 means 1.234568 × 10¹⁵. The display shows seven significant digits in that format. If you need more digits, break the calculation into smaller steps.' },
        { p: 'Rounding in the middle of a long calculation adds up. Reuse results from memory (M+ and MR) or from the history, which keep 12 significant digits, instead of retyping a value you rounded to two or three decimals.' },
      ],
    },
    {
      heading: '7. When you see "Error"',
      blocks: [
        {
          ul: [
            'Division by zero.',
            'Square root of a negative number (the calculator works with real numbers only).',
            'log or ln of zero or a negative number.',
            'asin or acos of a value above 1 or below -1, since sine and cosine never leave that range.',
            'Unbalanced brackets or an incomplete expression.',
          ],
        },
        { p: 'Press C to clear everything, or CE to clear just the current entry and keep the rest of the calculation.' },
      ],
    },
    {
      heading: 'A habit that catches most mistakes',
      blocks: [
        { p: 'Before you calculate, estimate. If you are computing 48 × 21, expect something near 1000. If the calculator says 69 or 10080, a key was missed or added. Combined with a quick check of the DEG/RAD indicator, this catches the large majority of calculator errors.' },
      ],
    },
  ],
}
