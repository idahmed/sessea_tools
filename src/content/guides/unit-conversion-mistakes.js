export default {
  slug: 'unit-conversion-mistakes',
  topic: 'Conversions',
  title: 'US and UK cups, kilobytes and other unit conversion traps',
  description:
    'The unit mix-ups behind most wrong conversions: US and UK volumes, kilobytes and kibibytes, temperature differences, food calories and tons, with the exact values to use.',
  published: '2026-11-07',
  updated: '2026-11-07',
  tools: ['unit-converter', 'calculator'],
  sections: [
    {
      heading: 'The number is right, the unit is wrong',
      blocks: [
        { p: 'Most wrong conversions are not arithmetic errors. The multiplication is correct, but it was done with the wrong unit: a US pint instead of a UK pint, a decimal gigabyte instead of a binary one, or a temperature formula applied to a temperature difference. It is like following a map of the right city with the wrong scale.' },
        { p: 'This guide covers the traps that come up most often, with the exact values defined by standards bodies. You can check every figure with the sessea unit converter, which lists the confusing units separately instead of picking one for you.' },
      ],
    },
    {
      heading: 'US and UK volumes are different sizes',
      blocks: [
        { p: 'The United States and the United Kingdom both use pints, gallons and fluid ounces, but the units have different sizes. A British recipe or fuel figure converted with US units can be off by 20%.' },
        {
          table: {
            caption: 'US and UK volume units in millilitres',
            head: ['Unit', 'US', 'UK (imperial)'],
            rows: [
              ['Fluid ounce', '29.57 ml', '28.41 ml'],
              ['Pint', '473.2 ml (16 US fl oz)', '568.3 ml (20 UK fl oz)'],
              ['Gallon', '3.785 litres', '4.546 litres'],
            ],
          },
        },
        { p: 'Notice that the UK fluid ounce is slightly smaller, while the UK pint is larger. The imperial pint simply holds more ounces. So a "pint" of beer in a London pub is about 95 ml more than one in New York.' },
        { p: 'Cups add another layer. A US cup is 236.6 ml. Australian, Canadian and many modern recipes use a metric cup of 250 ml, and older British recipes rarely use cups at all. If a recipe does not say which cup, check where it was written. For baking, converting to grams is more reliable than any cup, because a cup of flour can weigh anywhere from about 120 to 150 g depending on how it is packed.' },
      ],
    },
    {
      heading: 'Kilobytes and kibibytes',
      blocks: [
        { p: 'Storage makers use decimal prefixes: a kilobyte is 1000 bytes and a gigabyte is 1,000,000,000 bytes. Computers count memory in powers of two, so a second set of units exists: a kibibyte (KiB) is 1024 bytes and a gibibyte (GiB) is 1024³ bytes, about 7.4% more than a gigabyte.' },
        { p: 'Windows shows sizes in binary units but labels them KB, MB and GB. That is why a new 500 GB drive appears as about 465 GB in Windows. Nothing is missing: 500,000,000,000 bytes is 465.66 GiB. macOS and iOS show decimal units, so the same drive shows as 500 GB there.' },
        { p: 'Internet speeds add one more trap: they are measured in bits, not bytes. One byte is eight bits, so a 100 Mbit/s connection downloads at most 12.5 megabytes per second, before any overhead.' },
      ],
    },
    {
      heading: 'Temperature readings and temperature differences',
      blocks: [
        { p: 'Converting a temperature reading uses a formula with an offset, because Celsius and Fahrenheit put zero in different places: °F = °C × 9/5 + 32. So 20 °C is 68 °F, and 37 °C is 98.6 °F.' },
        { p: 'A temperature change is different. If the forecast says it will be 10 °C warmer tomorrow, that is 18 °F warmer, not 50 °F. For a difference, multiply by 9/5 and do not add 32. A converter converts readings, so for a difference convert both readings and subtract, or multiply the difference by 1.8 yourself.' },
        { p: 'Kelvin has the same step size as Celsius, shifted so zero is absolute zero: K = °C + 273.15. Kelvin is written without a degree sign, so it is 300 K, not 300 °K.' },
      ],
    },
    {
      heading: 'Calories, tons and stones',
      blocks: [
        {
          ul: [
            'A food Calorie, written with a capital C on many labels, is a kilocalorie: 4184 joules, or 4.184 kJ. A 2000 kcal daily intake is about 8370 kJ. European labels show both kJ and kcal.',
            'A tonne (metric ton) is 1000 kg. A US short ton is 2000 pounds, about 907 kg. A UK long ton is 2240 pounds, about 1016 kg. If a shipping document says "ton", find out which.',
            'A stone, still used in the UK for body weight, is 14 pounds, or 6.35 kg. 11 stone is about 69.9 kg.',
            'A nautical mile is 1852 metres, and a knot is one nautical mile per hour, or 1.852 km/h. A statute mile is 1609.344 metres.',
          ],
        },
      ],
    },
    {
      heading: 'Do not keep more digits than you measured',
      blocks: [
        { p: 'A converter can show 12 significant digits, but a result is only as precise as the value you started with. If a room is "about 4 metres" long, 13.1233595801 feet suggests a precision you do not have. Round the result to roughly as many digits as the original: 4 m is about 13 ft.' },
        { p: 'Exact definitions are the reason the digits are trustworthy in the first place. Since 1959 an inch is exactly 25.4 mm and a pound exactly 0.45359237 kg, so conversions built on those values carry no hidden error.' },
      ],
    },
    {
      heading: 'A quick sanity check',
      blocks: [
        {
          ol: [
            'Before converting, estimate the answer roughly. A kilogram is a bit over 2 pounds, a mile a bit over 1.5 km, a litre a bit over a US quart.',
            'Convert, then compare with your estimate. A result ten times too big or too small usually means a wrong unit or a misplaced prefix.',
            'For volumes, data sizes and tons, check which version of the unit your source uses before trusting the result.',
          ],
        },
      ],
    },
  ],
}
