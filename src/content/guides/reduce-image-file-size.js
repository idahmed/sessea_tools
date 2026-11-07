export default {
  slug: 'reduce-image-file-size',
  topic: 'Images',
  title: 'How to reduce image file size without making it look bad',
  description:
    'The four levers that shrink an image (dimensions, format, quality, cropping), in the order that saves the most, with examples for upload limits and email.',
  published: '2026-11-07',
  updated: '2026-11-07',
  tools: ['image'],
  sections: [
    {
      heading: 'Start with the biggest lever',
      blocks: [
        { p: 'When a form says "file too large", most people reach for a quality slider. That works, but it is usually the third-best option. The order below starts with the change that saves the most bytes for the least visible damage.' },
        {
          ol: [
            'Reduce the pixel dimensions.',
            'Crop away what you do not need.',
            'Pick a better format.',
            'Lower the quality setting.',
          ],
        },
      ],
    },
    {
      heading: '1. Reduce the pixel dimensions',
      blocks: [
        { p: 'A modern phone photo is often 4000 × 3000 pixels, 12 million in total. Most screens show far fewer. A full HD monitor is 1920 × 1080, about 2 million pixels. Sending the full photo to be viewed on a screen means sending pixels nobody will see.' },
        { p: 'File size grows with the number of pixels, and the number of pixels grows with the square of the width. Halve the width and height and you keep a quarter of the pixels. Going from 4000 pixels wide to 2000 pixels wide typically cuts a JPG to between a quarter and a third of its size, with no visible change on a phone or laptop screen.' },
        {
          table: {
            caption: 'Pixel count at common sizes (4:3 photo)',
            head: ['Width × height', 'Megapixels', 'Share of a 12 MP original'],
            rows: [
              ['4000 × 3000', '12.0', '100%'],
              ['2000 × 1500', '3.0', '25%'],
              ['1600 × 1200', '1.9', '16%'],
              ['1200 × 900', '1.1', '9%'],
              ['800 × 600', '0.5', '4%'],
            ],
          },
        },
      ],
    },
    {
      heading: '2. Crop away what you do not need',
      blocks: [
        { p: 'Cropping removes pixels too, and it often improves the picture. A photo of a document with a table edge around it, or a screenshot of a whole desktop when you only need one window, wastes space on content nobody needs. Crop first, then resize what is left.' },
      ],
    },
    {
      heading: '3. Pick a better format',
      blocks: [
        { p: 'The same photo saved as PNG can be four or five times the size of a good JPG, because PNG keeps every pixel exactly. Converting photos from PNG to JPG or WebP is often the single biggest saving for images that came from screenshots of photos or from design tools.' },
        { p: 'The reverse is also true. A screenshot of text saved as JPG gets blurry edges and is not always smaller than a PNG. For screenshots, try PNG first and WebP second.' },
        { p: 'If the image goes on a website, WebP and AVIF usually beat JPG at the same visual quality. If it goes to another person or an older system, JPG is the safest choice.' },
      ],
    },
    {
      heading: '4. Lower the quality setting',
      blocks: [
        { p: 'For JPG and WebP, quality settings between 0.75 and 0.90 (75 to 90 on a 100 scale) are a good range. Above 0.90, files grow quickly for differences that are hard to see. Below about 0.60, blocky areas appear in skies, skin and smooth gradients.' },
        { p: 'Always check the result at 100% zoom on the parts that matter: faces, text, fine patterns. A before and after slider makes this quick.' },
        { note: 'Quality numbers are not comparable between programs. Quality 0.80 in one encoder can look like 0.70 in another. Judge by eye and file size, not by the number.' },
      ],
    },
    {
      heading: 'Worked example: a 6 MB photo and a 1 MB limit',
      blocks: [
        {
          ol: [
            'Open the photo in the Resize tool and set the width to 2000 pixels with aspect ratio locked.',
            'Download and check the size. For most photos this alone lands between 0.5 and 1.5 MB.',
            'If it is still over the limit, open Convert, pick JPEG, tick "Aim for target file size" and set 950 KB to leave some margin.',
            'Compare before and after. If the quality looks poor, go back and resize to 1600 pixels instead, which lets the encoder use a higher quality.',
          ],
        },
        { p: 'These numbers are typical for phone photos. Very detailed images, like foliage or crowds, compress less well than portraits or skies, so your results will vary.' },
      ],
    },
    {
      heading: 'Common limits you will meet',
      blocks: [
        {
          ul: [
            'Many email providers cap a message, attachments included, at 20 to 25 MB.',
            'Job portals, government forms and school platforms often limit uploads to between 100 KB and 2 MB per image, and sometimes ask for exact pixel sizes for ID photos.',
            'Website images are best kept well under 500 KB each so pages load quickly on mobile data.',
          ],
        },
        { p: 'Check the exact limit on the form you are using, and leave a 5 to 10% margin under it.' },
      ],
    },
  ],
}
