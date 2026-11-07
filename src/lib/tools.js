import { slugify } from '@/lib/slug'

/**
 * One entry per deployed app. Each gets a documentation page at /tools/<id>
 * on sessea.com and links out to its own subdomain.
 * Keep the feature descriptions in sync with the apps: only describe what the code does.
 */
const RAW_TOOLS = [
  {
    id: 'calculator',
    title: 'Scientific calculator',
    host: 'calc.sessea.com',
    href: 'https://calc.sessea.com',
    blurb: 'trigonometry, logarithms, powers, memory and history',
    seoTitle: 'Free scientific calculator online',
    seoDescription:
      'Scientific calculator with sin, cos, tan and their inverses, log, ln, powers, roots, memory and a 40-entry history. Works offline, no account.',
    category: 'UtilitiesApplication',
    updated: '2026-11-07',
    headline: 'Scientific calculator',
    lede: 'A keyboard-friendly scientific calculator that follows the standard order of operations, switches between degrees and radians, and keeps your history on your device.',
    sections: [
      {
        heading: 'What it does',
        blocks: [
          {
            ul: [
              'Trigonometry: sin, cos and tan, and their inverses asin, acos and atan, in degrees or radians.',
              'Logarithms: log (base 10) and ln (natural log), plus square root, powers (xʸ) and percent.',
              'Constants π and e, brackets, and the ± sign key.',
              'Memory keys MC, MR, M+ and M−, with an M indicator when memory holds a value.',
              'A history of the last 40 results. Click one to reuse it, or remove entries one by one.',
            ],
          },
          { p: 'Expressions are evaluated with the standard order of operations: brackets, then powers, then multiplication and division, then addition and subtraction. 2 + 3 × 4 gives 14. Results are shown with up to 12 significant digits and switch to scientific notation when they are too long for the display.' },
        ],
      },
      {
        heading: 'Keyboard shortcuts',
        blocks: [
          {
            table: {
              caption: 'Keys you can use instead of clicking',
              head: ['Key', 'Action'],
              rows: [
                ['0 to 9, . or ,', 'Enter digits and the decimal point'],
                ['+ - * / ^', 'Add, subtract, multiply, divide, power'],
                ['( )', 'Brackets'],
                ['%', 'Divide the current number by 100'],
                ['Enter or =', 'Calculate'],
                ['Backspace', 'Delete the last digit'],
                ['Delete', 'Clear the current entry (CE)'],
                ['Escape', 'Clear everything (C)'],
              ],
            },
          },
          { p: 'Click the display to copy the current result to your clipboard.' },
        ],
      },
      {
        heading: 'Degrees and radians',
        blocks: [
          { p: 'The calculator starts in degrees and shows DEG or RAD on its mode key. The mode applies to sin, cos and tan inputs and to the angles returned by asin, acos and atan. If sin(90) does not give 1, you are in radian mode. The guide on degrees and radians explains when to use each.' },
        ],
      },
      {
        heading: 'Privacy and offline use',
        blocks: [
          { p: 'Calculations run in your browser with no server involved. History, memory, angle mode and theme are saved in your browser storage on your device, so they are still there next time. Clear the site data in your browser to remove them. After the first visit the calculator also works offline.' },
        ],
      },
    ],
    faq: [
      { q: 'Does the calculator follow the order of operations?', a: 'Yes. It evaluates brackets first, then powers, then multiplication and division, then addition and subtraction, so 2 + 3 × 4 = 14.' },
      { q: 'Why does sin(90) not equal 1?', a: 'The calculator is in radian mode. Press the DEG/RAD key so it shows DEG and try again.' },
      { q: 'What does the % key do?', a: 'It divides the number on screen by 100. To add 10% to a value, multiply it by 1.1.' },
      { q: 'Is my calculation history uploaded?', a: 'No. The history is stored in your browser on your device and never sent to a server.' },
      { q: 'Why does it show "Error"?', a: 'The operation has no real-number result, such as dividing by zero, the square root of a negative number, or the log of zero.' },
    ],
  },
  {
    id: 'unit-converter',
    title: 'Unit converter',
    host: 'unitconverter.sessea.com',
    href: 'https://unitconverter.sessea.com',
    blurb: 'length, weight, temperature, volume, data and seven more categories',
    seoTitle: 'Free unit converter: metric, imperial, US and UK units',
    seoDescription:
      'Convert 120 units in 12 categories, from length and temperature to data, pressure and energy, using exact official factors. US and UK volumes listed separately.',
    category: 'UtilitiesApplication',
    updated: '2026-11-07',
    headline: 'Unit converter',
    lede: 'A converter for everyday and technical units that uses the exact defined factors, shows your value in every unit of the category at once, and remembers your recent conversions on your device.',
    sections: [
      {
        heading: 'Categories and units',
        blocks: [
          {
            table: {
              caption: 'The 12 categories and the units in each',
              head: ['Category', 'Units'],
              rows: [
                ['Length', 'nanometre to light-year, including inch, foot, yard, mile and nautical mile (13 units)'],
                ['Mass', 'microgram to long ton, including carat, ounce, pound and stone (11 units)'],
                ['Temperature', 'Celsius, Fahrenheit, Kelvin and Rankine'],
                ['Volume', 'millilitre, litre, cubic metre, cubic inch and foot, US teaspoon to US gallon, UK fluid ounce, pint and gallon (17 units)'],
                ['Area', 'square millimetre to square kilometre, hectare, acre and the imperial squares (10 units)'],
                ['Speed', 'm/s, km/h, ft/s, mph, knot and the speed of light'],
                ['Time', 'nanosecond to century, with an average month and a 365.25-day year (12 units)'],
                ['Data', 'bit to petabyte in decimal steps, plus kibibyte to tebibyte in binary steps (14 units)'],
                ['Pressure', 'pascal to megapascal, millibar, bar, atmosphere, PSI, mmHg, torr and inHg (11 units)'],
                ['Energy', 'joule, kilojoule, megajoule, calorie, kilocalorie, Wh, kWh, BTU, foot-pound and electronvolt'],
                ['Power', 'watt, kilowatt, megawatt, horsepower, metric horsepower and BTU per hour'],
                ['Angle', 'degree, radian, gradian, arcminute, arcsecond and turn'],
              ],
            },
          },
          { p: 'Each category has its own address, such as unitconverter.sessea.com/length or /temperature, so you can bookmark the one you use most.' },
        ],
      },
      {
        heading: 'How to use it',
        blocks: [
          {
            ol: [
              'Pick a category.',
              'Type a value. Commas are ignored, so 1,500 works, and so does scientific notation like 2.5e6.',
              'Choose the From and To units, or press the ⇄ button to swap them.',
              'Read the result. Click it to copy the number to your clipboard.',
              'Below the result, a list shows your value in every other unit of the category. Click a row to make it the target unit.',
            ],
          },
          { p: 'Press / to jump to the value field and Esc to clear it. After you stop typing for a moment, the conversion is added to Recent, which keeps the last 20. Click a recent entry to restore it, or remove it with ×.' },
        ],
      },
      {
        heading: 'Precision',
        blocks: [
          { p: 'The factors are the exact definitions used by standards bodies like NIST and the SI. An inch is exactly 25.4 mm, a pound exactly 0.45359237 kg, and a US gallon exactly 3.785411784 litres. Temperatures use formulas instead of a single factor, because the scales have different zero points.' },
          { p: 'Results show up to 12 significant digits. Very large values (from 10¹⁵) and very small ones (below 0.000001) switch to scientific notation, so 1 light-year in millimetres reads 9.46073047258e+18, meaning 9.46 × 10¹⁸.' },
        ],
      },
      {
        heading: 'Units that are easy to mix up',
        blocks: [
          {
            ul: [
              'US and UK volumes differ. A US gallon is about 3.79 litres, a UK gallon 4.55 litres. A US pint is 473 ml, a UK pint 568 ml. The converter lists them as separate units.',
              'Kilobyte (KB) here means 1000 bytes and kibibyte (KiB) 1024 bytes. Operating systems do not agree on this, which is why a "500 GB" drive can show as 465 GB.',
              'A food Calorie is a kilocalorie (4184 joules). The Calorie unit in the list is the small calorie of 4.184 joules.',
              'Horsepower (mechanical, about 745.7 W) and metric horsepower (PS, 735.5 W) are about 1.4% apart.',
            ],
          },
        ],
      },
      {
        heading: 'Privacy and offline use',
        blocks: [
          { p: 'Conversions are calculated in your browser. Your recent conversions, last category, units and theme are kept in your browser storage on your device. Clear the site data in your browser to remove them. After the first visit the converter works offline.' },
        ],
      },
    ],
    faq: [
      { q: 'How do I convert Celsius to Fahrenheit?', a: 'Multiply by 9/5 and add 32. 100 °C is 212 °F, and 37 °C is 98.6 °F.' },
      { q: 'Why do my cup or pint conversions not match a British recipe?', a: 'British recipes use UK units, which are larger than US ones. Pick the units marked (UK).' },
      { q: 'Is a kilobyte 1000 or 1024 bytes?', a: 'In this converter a kilobyte is 1000 bytes, following the SI prefix. Use kibibyte for 1024 bytes.' },
      { q: 'How many digits are shown?', a: 'Up to 12 significant digits, which is far more than any measurement you can make at home.' },
      { q: 'Are my conversions saved anywhere?', a: 'Only in your browser on your device, as the Recent list. They are never sent to a server.' },
    ],
  },
  {
    id: 'image',
    title: 'Image tools',
    host: 'img.sessea.com',
    href: 'https://img.sessea.com',
    blurb: 'convert, resize, enhance, rotate, crop and watermark',
    seoTitle: 'Free online image converter and resizer',
    seoDescription:
      'Convert images to JPEG, PNG, WebP or AVIF, resize, crop, rotate, adjust and watermark them in your browser. Batch ZIP export, no upload.',
    category: 'MultimediaApplication',
    updated: '2026-11-07',
    headline: 'Image tools: convert, resize and edit without uploading',
    lede: 'Six image tools that run in your browser tab. Load one photo or a batch, chain edits from tool to tool, and download the results or a ZIP.',
    sections: [
      {
        heading: 'The six tools',
        blocks: [
          {
            table: {
              caption: 'What each image tool does',
              head: ['Tool', 'What it does', 'Main options'],
              rows: [
                ['Convert', 'Changes the file format', 'JPEG, PNG, WebP, and AVIF when your browser can encode it. Quality 0.40 to 1.00. Target file size from 50 to 2000 KB. Strip metadata.'],
                ['Resize', 'Changes the pixel dimensions', 'Exact width and height, aspect ratio lock, 75%, 50% and 25% presets, target file size'],
                ['Enhance', 'Adjusts the look', 'Brightness and contrast 50 to 150%, saturation 0 to 200%, sharpen 0 to 100'],
                ['Rotate', 'Turns or mirrors the image', 'Rotate by 90° steps, flip horizontally or vertically'],
                ['Crop', 'Trims the edges', 'Free, 1:1, 4:3 or 16:9 ratio, with sliders for each edge'],
                ['Mark', 'Adds a text watermark', 'Up to 48 characters, five positions, opacity and size'],
              ],
            },
          },
        ],
      },
      {
        heading: 'How it works',
        blocks: [
          { p: 'Drop images on the page or press O to choose files. Each tool shows a before and after slider so you can compare the result with the original. When you move to another tool, the edited image goes with you, so you can crop, resize and convert in one pass. Press Z to undo (up to 20 steps) and Esc to start over. Keys 1 to 6 switch between tools.' },
          { p: 'Load several images to process them as a batch, then download them all in one ZIP file.' },
        ],
      },
      {
        heading: 'Formats',
        blocks: [
          { p: 'The tools open any image your browser can display: JPG, PNG, WebP and GIF in every current browser, and AVIF in most. Output is JPEG, PNG or WebP everywhere, plus AVIF in browsers that can encode it. Convert lets you choose. The other tools keep PNG files as PNG and save everything else as JPEG.' },
        ],
      },
      {
        heading: 'Privacy',
        blocks: [
          { p: 'Images are decoded and re-encoded by your browser using the canvas feature. They are never uploaded. Because each export is a new file built from the pixels, it does not carry the original EXIF metadata, so GPS location and camera details are removed. Your last Convert settings are remembered in your browser storage.' },
        ],
      },
      {
        heading: 'Limits',
        blocks: [
          {
            ul: [
              'Very large images need a lot of memory and can be slow or fail on phones and older computers.',
              'Formats the browser cannot open, like camera RAW files or HEIC outside Safari, cannot be loaded.',
              'Animated images are exported as a single frame.',
              'The capture date and colour profile stored in the original file are not kept.',
            ],
          },
        ],
      },
    ],
    faq: [
      { q: 'Are my images uploaded?', a: 'No. All processing happens in your browser tab. The images are never sent to a server.' },
      { q: 'Can I convert several images at once?', a: 'Yes. Load several files and use "Download all as ZIP".' },
      { q: 'Why is AVIF missing from the format list?', a: 'Your browser cannot encode AVIF images. The tool tests this and only offers formats your browser can produce.' },
      { q: 'How do I get an image under a size limit?', a: 'Tick "Aim for target file size" in Convert or Resize and enter the limit in KB. The tool searches for settings that fit.' },
      { q: 'Does converting remove location data?', a: 'Yes, as long as "Strip metadata" is on, which is the default. The exported file contains only the image.' },
    ],
  },
  {
    id: 'audio',
    title: 'Audio tools',
    host: 'audio.sessea.com',
    href: 'https://audio.sessea.com',
    blurb: 'convert, compress, trim, merge, fade, speed and more',
    seoTitle: 'Free online audio converter and editor',
    seoDescription:
      'Convert audio to MP3 or WAV, compress to a target size, trim, merge, fade, change speed, split and loop, all in your browser with no upload.',
    category: 'MultimediaApplication',
    updated: '2026-11-07',
    headline: 'Audio tools: convert, trim and edit in your browser',
    lede: 'Eleven everyday audio edits that run on your device. Load a file, chain edits from tool to tool, preview the result and download it.',
    sections: [
      {
        heading: 'The eleven tools',
        blocks: [
          {
            table: {
              caption: 'What each audio tool does',
              head: ['Tool', 'What it does'],
              rows: [
                ['Convert', 'MP3 (64 to 320 kbps) or 16-bit WAV, plus WebM, OGG or M4A when your browser supports them'],
                ['Compress', 'MP3 at a chosen bitrate, or the best bitrate that fits a target size from 100 KB to 10 MB'],
                ['Trim', 'Cut to a start and end point with a waveform view, with optional volume normalisation'],
                ['Volume', 'Normalise the peak level, or apply a fixed gain from 10% to 300%'],
                ['Merge', 'Join two or more clips in the order you choose'],
                ['Speed', 'Play back from 0.5× to 2× (pitch changes with speed)'],
                ['Fade', 'Fade in and fade out, each up to half the clip length'],
                ['Reverse', 'Play the clip backwards'],
                ['Split', 'Cut into two parts at one point'],
                ['Channels', 'Convert stereo to mono or mono to stereo'],
                ['Loop', 'Repeat the whole clip 2 to 12 times'],
              ],
            },
          },
        ],
      },
      {
        heading: 'How it works',
        blocks: [
          { p: 'Your browser decodes the file into raw audio with the Web Audio API. The tools change those samples in memory, then encode the result as MP3 or WAV in the page. WebM, OGG and M4A use the browser built-in recorder, which encodes in real time, so a three-minute file takes three minutes to export.' },
          { p: 'Each tool passes its result to the next, so you can trim, normalise and fade before a single export. Undo keeps the last 15 steps. Keys 1 to 9, 0 and L switch between tools.' },
        ],
      },
      {
        heading: 'Formats',
        blocks: [
          { p: 'Input: MP3, WAV, M4A, OGG and FLAC in most browsers, and any other format your browser can decode. Output: MP3 and WAV everywhere. Batch ZIP export is available for MP3 and WAV.' },
        ],
      },
      {
        heading: 'Privacy',
        blocks: [
          { p: 'Recordings never leave your device. Nothing is uploaded, and closing the tab discards the audio from memory. Your preferred format and bitrate are remembered in your browser storage.' },
        ],
      },
      {
        heading: 'Limits',
        blocks: [
          {
            ul: [
              'Decoded audio uses about 21 MB of memory per minute of 44.1 kHz stereo, so long files can be slow or fail on older phones.',
              'MP3 output supports up to two channels.',
              'Files your browser cannot decode will not open. Converting them to WAV elsewhere first usually helps.',
            ],
          },
        ],
      },
    ],
    faq: [
      { q: 'Are my audio files uploaded?', a: 'No. Decoding, editing and encoding all happen in your browser on your device.' },
      { q: 'Which bitrate should I choose for MP3?', a: 'Around 64 kbps mono is enough for speech. Use 192 kbps or more for music.' },
      { q: 'Why does OGG or M4A export take so long?', a: 'These formats use the browser recorder, which works in real time. MP3 and WAV export almost instantly.' },
      { q: 'Does changing speed change the pitch?', a: 'Yes. The Speed tool works like a tape player, so faster playback sounds higher.' },
      { q: 'Can I convert many files at once?', a: 'Yes, load several files in Convert and download them as a ZIP in MP3 or WAV.' },
    ],
  },
  {
    id: 'hardware',
    title: 'Hardware test',
    host: 'hw.sessea.com',
    href: 'https://hw.sessea.com',
    blurb: 'microphone, camera, speakers, keyboard and mouse checks',
    seoTitle: 'Online mic, webcam, speaker, keyboard and mouse test',
    seoDescription:
      'Test your microphone level, record a sample, check your webcam resolution, play left and right speaker tones, and test every keyboard key and mouse button.',
    category: 'UtilitiesApplication',
    updated: '2026-11-07',
    headline: 'Hardware test: mic, camera, speakers, keyboard and mouse',
    lede: 'Five quick device checks in your browser, for before a call, after buying a new headset, or when something stops working.',
    sections: [
      {
        heading: 'The five tests',
        blocks: [
          {
            table: {
              caption: 'What each test checks',
              head: ['Test', 'What you see'],
              rows: [
                ['Microphone', 'Live level and peak meter, device picker, and an 8-second recording you can play back or download'],
                ['Camera', 'Live preview with the resolution and frame rate the camera delivers, device picker, front and rear switch on phones'],
                ['Speakers', 'Short tones on the left channel (380 Hz), both (440 Hz) and the right channel (520 Hz), with output selection in supporting browsers'],
                ['Keyboard', 'Key name, physical key code, modifier keys held, and a log of the last 12 presses and releases'],
                ['Mouse', 'Pointer position, left, middle and right button state, click counter and scroll counter'],
              ],
            },
          },
        ],
      },
      {
        heading: 'Permissions',
        blocks: [
          { p: 'The microphone and camera tests need your permission. Your browser asks the first time. If you blocked it before, click the icon to the left of the address bar to allow it again. Your operating system can also block the browser from the camera or microphone. The troubleshooting guides below walk through each setting.' },
        ],
      },
      {
        heading: 'Privacy',
        blocks: [
          { p: 'Camera and microphone streams are shown only in your page. They are not recorded unless you press Record on the microphone test, and that recording stays in your browser until you download or clear it. Nothing is uploaded. When you leave the page, the browser releases the devices.' },
        ],
      },
      {
        heading: 'Browser support',
        blocks: [
          { p: 'All tests work in current versions of Chrome, Edge, Firefox and Safari. Choosing a specific speaker output from the page works mainly in Chrome and Edge. Other browsers play the tones on the default output.' },
        ],
      },
    ],
    faq: [
      { q: 'Is my camera or microphone recorded?', a: 'No. The preview is local. Only the microphone test records, when you press Record, and that sample stays in your browser.' },
      { q: 'Why does the mic meter not move?', a: 'The wrong microphone may be selected, the device may be muted, or the browser or operating system permission may be blocked.' },
      { q: 'How do I know which speaker is which?', a: 'Each side uses a different pitch: the left tone is lower, the right tone is higher, and both play a middle tone.' },
      { q: 'Can I test for a mouse double-click fault?', a: 'Yes. Click slowly ten times and check that the click counter shows exactly ten.' },
      { q: 'Does it work on phones?', a: 'The microphone, camera and speaker tests work on phones. The keyboard and mouse tests need a physical keyboard or mouse.' },
    ],
  },
  {
    id: 'typing-test',
    title: 'Typing speed test',
    host: 'typingspeedtest.sessea.com',
    href: 'https://typingspeedtest.sessea.com',
    blurb: 'words per minute and accuracy, with your last 20 scores',
    seoTitle: 'Free typing speed test: WPM and accuracy',
    seoDescription:
      'Measure your typing speed in words per minute and your accuracy on a text of 20 to 2000 characters. Live stats, best score and your last 20 results, saved on your device.',
    category: 'EducationalApplication',
    updated: '2026-11-07',
    headline: 'Typing speed test',
    lede: 'A short, no-signup typing test that measures your words per minute and accuracy while you type, and keeps a history of your scores in your browser so you can see yourself improve.',
    sections: [
      {
        heading: 'How the test works',
        blocks: [
          {
            ol: [
              'Choose the length of the text: 100, 200, 300 or 500 characters, or type your own number between 20 and 2000. The default is 200.',
              'Click the text and start typing. The timer starts with your first character, so you can read the text first without losing time.',
              'Type until you reach the end of the text. The test stops by itself on the last character.',
              'Your result appears with WPM, accuracy and time, and is saved to the Scores table.',
            ],
          },
          { p: 'The text is a random sequence of common English words in lower case, with no punctuation, so the test measures typing rather than reading difficult words. Each new test generates a new text. Press Esc or the Cancel button at any time to stop and load a new one. After a result, Retry same text lets you repeat the same words, which is the fairest way to measure progress over a few attempts.' },
        ],
      },
      {
        heading: 'Reading the text as you type',
        blocks: [
          {
            table: {
              caption: 'What the colours in the text mean',
              head: ['Look', 'Meaning'],
              rows: [
                ['Grey', 'Not typed yet'],
                ['Dark', 'Typed correctly'],
                ['Red', 'A mistake. Press Backspace to go back and fix it'],
                ['Underlined', 'The next character to type'],
              ],
            },
          },
          { p: 'Above the text, four live counters show your current WPM, accuracy, elapsed time and progress through the text.' },
        ],
      },
      {
        heading: 'How WPM and accuracy are calculated',
        blocks: [
          { p: 'WPM (words per minute) uses the standard typing convention that one word is five characters, spaces included. The test counts only the characters that are correct in your final text, divides by five, and divides by the minutes elapsed. 250 correct characters in one minute is 50 WPM. Uncorrected mistakes therefore lower your speed.' },
          { p: 'Accuracy counts every wrong keystroke as an error, even if you fix it afterwards with Backspace. A run with no wrong key presses scores 100%. This makes accuracy a measure of how cleanly you typed, while WPM measures the result.' },
          { note: 'Speed and accuracy pull against each other. If your accuracy is below about 95%, slowing down a little usually raises your WPM, because fixing mistakes costs more time than it saves.' },
        ],
      },
      {
        heading: 'Scores and progress',
        blocks: [
          { p: 'Each finished test is added to the Scores table with its WPM, accuracy, text length, time and date. The table keeps your last 20 results and shows your best WPM in the heading. When you beat your best, the result says "New best!". Use Clear to start over.' },
          { p: 'For a fair comparison between days, use the same text length each time. Short texts give more variable results, because one hesitation weighs more in 100 characters than in 500.' },
        ],
      },
      {
        heading: 'Privacy and offline use',
        blocks: [
          { p: 'What you type is checked in the page and never sent anywhere. Your scores, chosen text length and theme are stored in your browser on your device. Clear the site data in your browser to remove them. After the first visit the test also works offline.' },
        ],
      },
    ],
    faq: [
      { q: 'What is a good typing speed?', a: '30 to 50 WPM is common for people who type regularly, 50 to 80 WPM is fast, and practised touch typists go beyond 80. Accuracy matters as much as speed.' },
      { q: 'Why is my WPM lower than on other tests?', a: 'This test counts only correct characters, and some tests count every character typed. Text length and word choice also change results.' },
      { q: 'Do I have to fix my mistakes?', a: 'No. The test ends when you reach the end of the text, but uncorrected mistakes are not counted as correct characters, which lowers your WPM.' },
      { q: 'Does fixing a mistake restore my accuracy?', a: 'No. Accuracy counts every wrong key press, so a fixed mistake still counts. It shows how cleanly you typed.' },
      { q: 'Are my scores uploaded?', a: 'No. They are saved in your browser on your device only.' },
    ],
  },
]

export const TOOLS = RAW_TOOLS.map((tool) => ({
  ...tool,
  sections: tool.sections.map((section) => ({ id: slugify(section.heading), ...section })),
}))

export function getTool(id) {
  return TOOLS.find((tool) => tool.id === id)
}
