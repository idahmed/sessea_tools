export default {
  slug: 'jpg-png-webp-avif',
  topic: 'Images',
  title: 'JPG, PNG, WebP or AVIF: which image format should you use?',
  description:
    'What each image format is good at, where it fails, and a simple way to pick the right one for photos, screenshots, logos and web pages.',
  published: '2026-11-07',
  updated: '2026-11-07',
  tools: ['image'],
  sections: [
    {
      heading: 'The short answer',
      blocks: [
        { p: 'If you only remember one rule, make it this one: use JPG for photos you need to share anywhere, PNG for screenshots and graphics with sharp edges or transparency, and WebP when the file goes on a web page you control. AVIF gives the smallest files of the four, but it is slower to create and older software cannot open it.' },
        { p: 'The rest of this guide explains why, so you can make the call yourself when a case does not fit the rule.' },
      ],
    },
    {
      heading: 'Lossy and lossless compression',
      blocks: [
        { p: 'Every format on this page compresses pixels. The difference that matters most is whether that compression throws information away.' },
        { p: 'Lossless compression (PNG, and WebP in lossless mode) works like zipping a document. When you open the file you get back exactly the pixels you saved. It shrinks images with large areas of flat colour very well, and photos very badly.' },
        { p: 'Lossy compression (JPG, WebP lossy, AVIF) works more like summarising a long text. The encoder keeps what your eye notices and discards fine detail it decides you will not miss. Photos shrink a lot. Sharp edges, small text and flat colours suffer first, which is why a screenshot saved as JPG often shows grey smudges around letters.' },
        { note: 'Every time you open a lossy file, edit it and save it again as lossy, it loses a little more detail. Keep your original and export copies from it instead of editing the copy of a copy.' },
      ],
    },
    {
      heading: 'The four formats side by side',
      blocks: [
        {
          table: {
            caption: 'Main capabilities of common image formats',
            head: ['Format', 'Compression', 'Transparency', 'Animation', 'Best for'],
            rows: [
              ['JPG (JPEG)', 'Lossy', 'No', 'No', 'Photos you share by email, chat or print'],
              ['PNG', 'Lossless', 'Yes', 'No (APNG exists but is rare)', 'Screenshots, logos, diagrams, anything with text'],
              ['WebP', 'Lossy or lossless', 'Yes', 'Yes', 'Images on web pages'],
              ['AVIF', 'Lossy or lossless', 'Yes', 'Yes', 'Web images where file size matters most'],
            ],
          },
        },
        { p: 'Google reports that lossy WebP files are 25 to 34% smaller than JPG files of similar quality, and lossless WebP files are about 26% smaller than PNG. Real savings depend on the picture, so treat these as averages, not promises.' },
      ],
    },
    {
      heading: 'JPG: the format everything can open',
      blocks: [
        { p: 'JPG dates from 1992 and every camera, phone, printer, email client and operating system reads it. That is its main strength. It handles photos well at moderate quality settings and produces small files.' },
        { p: 'Its weaknesses are just as clear. It has no transparency, so a logo on a transparent background gets a white or black box around it. It blurs text and thin lines. And quality numbers are not standard between programs: quality 80 in one app is not the same as quality 80 in another.' },
        { p: 'Use JPG when you do not know what software the recipient has, when you send photos by email, or when a print shop asks for it.' },
      ],
    },
    {
      heading: 'PNG: exact pixels, larger files',
      blocks: [
        { p: 'PNG keeps every pixel exactly as it was, and supports a full alpha channel for soft transparent edges. That makes it the right choice for screenshots, user interface mockups, charts, logos and any image that mixes text with graphics.' },
        { p: 'Saving a photo as PNG is usually a mistake. A 12 megapixel phone photo that is 3 to 4 MB as a JPG can easily become 15 MB or more as a PNG, with no visible improvement, because there is no flat colour for lossless compression to exploit.' },
      ],
    },
    {
      heading: 'WebP: a good default for the web',
      blocks: [
        { p: 'WebP was released by Google in 2010 and is now supported by all current major browsers, including Safari since version 14. It can be lossy or lossless, supports transparency, and supports animation, so one format covers what used to need JPG, PNG and GIF.' },
        { p: 'Support outside browsers is less complete. Some older image viewers, email clients and upload forms still reject WebP. If a website refuses your WebP file, convert it to JPG or PNG and try again.' },
      ],
    },
    {
      heading: 'AVIF: smallest files, slowest to make',
      blocks: [
        { p: 'AVIF is based on the AV1 video codec and appeared in 2019. At the same visual quality it usually beats WebP on file size, especially for photos, and it supports higher bit depths and HDR.' },
        { p: 'The trade-offs are encoding speed and support. Creating an AVIF file takes noticeably more processing than a JPG. Chrome, Firefox, Edge and Safari 16 or later can display AVIF, but many desktop apps cannot open it yet, and not every browser can create AVIF files from inside a web page. A browser tool can only offer the output formats your browser knows how to encode.' },
      ],
    },
    {
      heading: 'What about GIF and HEIC?',
      blocks: [
        { p: 'GIF is limited to 256 colours per frame, which makes photos look grainy, and its animations are large. For new animations, WebP or a short video file is almost always smaller and better looking.' },
        { p: 'HEIC is the default photo format on iPhones. It compresses well, but most browsers outside Safari cannot display it, and many websites reject it. If you need to share iPhone photos widely, set the camera to "Most Compatible" in the iPhone camera settings, or export them as JPG first.' },
      ],
    },
    {
      heading: 'A decision checklist',
      blocks: [
        {
          ol: [
            'Does the image need a transparent background? Use PNG, or WebP if it is for a website.',
            'Is it a screenshot, diagram or image with text? Use PNG.',
            'Is it a photo going to someone else or to a print shop? Use JPG at quality 80 to 90.',
            'Is it a photo on your own website? Use WebP, or AVIF if your build process or browser supports it, with a JPG fallback for very old browsers if you need it.',
            'Are you unsure? Keep the original, export a JPG, and compare the file size and look before deciding.',
          ],
        },
      ],
    },
    {
      heading: 'Converting without uploading',
      blocks: [
        { p: 'The sessea image tools convert between these formats inside your browser, so the photo is never sent to a server. Pick the output format, adjust quality for lossy formats, compare the result, and download it. If your browser cannot encode a format, the tool will not be able to produce it, which is a limit of the browser rather than the file.' },
      ],
    },
  ],
}
