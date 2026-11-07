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
]

export const TOOLS = RAW_TOOLS.map((tool) => ({
  ...tool,
  sections: tool.sections.map((section) => ({ id: slugify(section.heading), ...section })),
}))

export function getTool(id) {
  return TOOLS.find((tool) => tool.id === id)
}
