/** Long-form guides for AdSense-ready content + education. */
export const GUIDES = [
  {
    slug: 'local-browser-tools',
    title: 'Why local browser tools matter for everyday privacy',
    description:
      'How sessea keeps calculator history, images, audio, and hardware tests on your device — and when ads still use third-party cookies.',
    updated: 'October 2026',
    sections: [
      {
        heading: 'The problem with “free” upload tools',
        paragraphs: [
          'Many online converters ask you to upload a photo, a song, or a document to a remote server. That can be convenient, but it also means a copy of your file leaves your machine. Even when a site promises deletion later, you still had to trust the upload path, the storage layer, and whoever operates the service.',
          'sessea takes a different approach. The calculator, image tools, audio tools, and hardware tests are built to run inside your browser tab. Your files and media streams are processed with web APIs on the device you already own.',
        ],
      },
      {
        heading: 'What “local” means in practice',
        paragraphs: [
          'When you resize an image on img.sessea.com, the pixels are decoded and rewritten in memory in your browser. When you trim audio on audio.sessea.com, the samples are handled locally. When you test a microphone on hw.sessea.com, the stream is previewed in the page after you grant permission — it is not uploaded to sessea servers.',
          'Preferences such as theme or last-used format may be saved in localStorage so the next visit feels familiar. That data stays on your device and is not part of a sessea user account, because these tools do not require accounts at all.',
        ],
      },
      {
        heading: 'What local processing does not change',
        paragraphs: [
          'Pages may still load advertising from Google AdSense. Ad partners can use cookies or similar technologies on their side. That is separate from your project files: an ad cookie is not the same as uploading your photo library. You can manage personalized ads in Google Ads Settings and control cookies in your browser.',
          'If you need a printable summary for yourself or a classroom, start from the privacy policy on sessea.com/privacy and the contact page if something is unclear.',
        ],
      },
      {
        heading: 'When a local tool is the right choice',
        paragraphs: [
          'Choose browser-local tools when you want a quick edit without creating an account, when a file is personal or work-in-progress, or when you are on a shared computer and prefer not to leave uploads behind. For huge batch jobs or formats your browser cannot decode, a dedicated desktop app may still be better — sessea aims at everyday tasks, not every edge case.',
        ],
      },
    ],
  },
  {
    slug: 'resize-convert-images',
    title: 'How to resize and convert images without uploading',
    description:
      'Step-by-step guide to converting PNG, JPG, WebP, and AVIF and resizing photos in the browser with sessea image tools.',
    updated: 'October 2026',
    sections: [
      {
        heading: 'Open the image tools',
        paragraphs: [
          'Go to img.sessea.com. Pick Convert when you need a different format, or Resize when you need new dimensions. You can also crop, rotate, enhance, or watermark from the same app. Each action runs in the tab after you choose a file from your device.',
        ],
      },
      {
        heading: 'Convert formats safely',
        paragraphs: [
          'On Convert, drop or select an image. Choose an output format such as PNG, JPG, WebP, or AVIF (availability depends on your browser). Adjust quality if you want a smaller file, then download the result. Because decoding and encoding happen locally, the original never needs to travel to a sessea server.',
          'JPG is useful for photos when you can accept compression. PNG keeps sharp edges and transparency. WebP and AVIF often shrink file size further when the browser supports them.',
        ],
      },
      {
        heading: 'Resize with intent',
        paragraphs: [
          'On Resize, set exact pixel width and height or scale by percentage. Keep aspect ratio locked when you want to avoid stretching. Preview the result, then download. This is enough for social thumbnails, email attachments, or lighter pages without installing desktop software.',
          'If you only need a region of the photo, use Crop first, then Resize. For a quick brightness fix before export, Enhance is available in the same toolkit.',
        ],
      },
      {
        heading: 'Limits to keep in mind',
        paragraphs: [
          'Very large images are limited by your device memory and browser. Exotic camera RAW formats may not decode in every browser. Always keep your original file; treat the download as an export. For a deeper privacy overview, read the local-tools guide and the privacy policy.',
        ],
      },
    ],
  },
  {
    slug: 'trim-convert-audio',
    title: 'Trim and convert audio in your browser',
    description:
      'Learn how to convert MP3/WAV, trim clips, and merge tracks locally with sessea audio tools — no upload required.',
    updated: 'October 2026',
    sections: [
      {
        heading: 'Start on audio.sessea.com',
        paragraphs: [
          'The audio app covers everyday edits: convert, compress, trim, merge, volume, speed, fade, loop, reverse, split, and channel tweaks. Choose a tool from the tabs, add a file from your computer, and work in the preview before you download.',
        ],
      },
      {
        heading: 'Convert and compress',
        paragraphs: [
          'Use Convert when you need another container or codec your player accepts (for example MP3, WAV, OGG, or WebM depending on support). Use Compress when the goal is a smaller file with a target bitrate or size. Listen to the preview so you catch quality drops before you save.',
        ],
      },
      {
        heading: 'Trim, merge, and polish',
        paragraphs: [
          'Trim sets start and end points for a cleaner clip. Merge stitches multiple files when you want a single download. Fade, volume, and speed help with podcasts, voice notes, and simple music edits without a full DAW.',
          'Because processing is local, drafts and private voice memos do not need to sit on a third-party upload queue. Close the tab and in-memory audio is discarded; only downloads you choose remain on disk.',
        ],
      },
      {
        heading: 'Practical tips',
        paragraphs: [
          'Keep a copy of the source file. Long high-resolution recordings can stress older devices — shorter clips are faster. If a format fails to decode, try exporting to WAV from another app first, then finish the edit in sessea. Questions about data use are covered in the privacy policy on sessea.com.',
        ],
      },
    ],
  },
  {
    slug: 'hardware-tests',
    title: 'How to test mic, camera, speakers, keyboard, and mouse online',
    description:
      'A practical checklist for browser hardware tests on hw.sessea.com before meetings, classes, or device troubleshooting.',
    updated: 'October 2026',
    sections: [
      {
        heading: 'Why browser hardware tests help',
        paragraphs: [
          'Before a video call or class, you want to know the mic levels, which camera is active, and whether left and right speakers play correctly. hw.sessea.com gives you quick checks without installing diagnostic software. Permission prompts are normal: the browser must ask before the page can see mic or camera input.',
        ],
      },
      {
        heading: 'Microphone and camera',
        paragraphs: [
          'On Mic, allow access, watch the level meter, and optionally record a short local sample to confirm what others might hear. On Camera, allow access and confirm the preview; switch facing cameras when your device supports it. Streams stay in the page for the test — they are not uploaded to sessea.',
        ],
      },
      {
        heading: 'Speakers, keyboard, and mouse',
        paragraphs: [
          'Speaker test plays left, right, and both channels so you can hear imbalance or a muted side. Keyboard test logs presses and releases so sticky or dead keys show up quickly. Mouse test covers move, clicks, and scroll on trackpads or mice.',
          'Use these pages when setting up a new headset, checking a spare laptop, or proving a peripheral works before you blame an app.',
        ],
      },
      {
        heading: 'Privacy and good habits',
        paragraphs: [
          'Grant permissions only while you are testing, and revoke them in site settings afterward if you share the machine. Samples you download are yours to delete. For how advertising cookies relate to these pages, see the privacy policy. For product background, see About on sessea.com.',
        ],
      },
    ],
  },
]

export function getGuide(slug) {
  return GUIDES.find((guide) => guide.slug === slug)
}
