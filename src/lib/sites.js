/** Public hub origin. */
export const SITE_URL = 'https://tools.sessea.com'

export const SITE_NAME = 'sessea tools'

export const CONTACT_EMAIL = 'idahmed.yassine@gmail.com'

/** Update these when you deploy each app. */
export const SITES = [
  {
    id: 'calc',
    label: 'Calculator',
    title: 'Scientific calculator',
    host: 'calc.sessea.com',
    blurb: 'Sin, cos, log, memory, and history — offline-ready.',
    href: 'https://calc.sessea.com',
    seoTitle: 'Free scientific calculator online',
    seoDescription:
      'Browser scientific calculator with trigonometry, logs, memory, and history. Works offline. No account.',
  },
  {
    id: 'img',
    label: 'Image tools',
    title: 'Image tools',
    host: 'img.sessea.com',
    blurb: 'Convert, resize, crop, rotate, enhance, watermark.',
    href: 'https://img.sessea.com',
    seoTitle: 'Free online image tools',
    seoDescription:
      'Convert, resize, crop, rotate, enhance, and watermark images in your browser. No upload required.',
  },
  {
    id: 'audio',
    label: 'Audio tools',
    title: 'Audio tools',
    host: 'audio.sessea.com',
    blurb: 'Convert, trim, merge, fade, loop — no upload.',
    href: 'https://audio.sessea.com',
    seoTitle: 'Free online audio tools',
    seoDescription:
      'Convert, compress, trim, merge, and edit audio locally in your browser. Private and free.',
  },
  {
    id: 'hw',
    label: 'Hardware test',
    title: 'Hardware test',
    host: 'hw.sessea.com',
    blurb: 'Mic, camera, speakers, keyboard, mouse checks.',
    href: 'https://hw.sessea.com',
    seoTitle: 'Free hardware test online',
    seoDescription:
      'Test microphone, camera, speakers, keyboard, and mouse in your browser. Private device checks.',
  },
]

export const HOME_FAQ = [
  {
    q: 'Are sessea tools free?',
    a: 'Yes. The calculator, image tools, audio tools, and hardware tests are free to use with no account.',
  },
  {
    q: 'Do you upload my files?',
    a: 'No. Image and audio processing, plus mic/camera streams, stay in your browser. We do not host your uploads.',
  },
  {
    q: 'Do I need to create an account?',
    a: 'No. Every tool works without signing in. Optional preferences may be saved in localStorage on your device.',
  },
  {
    q: 'Where are the tools hosted?',
    a: 'The hub is tools.sessea.com. Apps live on calc.sessea.com, img.sessea.com, audio.sessea.com, and hw.sessea.com.',
  },
]
