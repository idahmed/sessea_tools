export default {
  slug: 'resize-convert-images',
  topic: 'Images',
  title: 'How to resize and convert images without uploading them',
  description:
    'A step-by-step walkthrough of converting and resizing photos in the browser with sessea image tools, including batch ZIP export, target file size and aspect ratio.',
  published: '2026-10-17',
  updated: '2026-11-07',
  tools: ['image'],
  sections: [
    {
      heading: 'What you need',
      blocks: [
        { p: 'A current version of Chrome, Edge, Firefox or Safari, and the images you want to change. There is nothing to install and no account. The images are decoded and re-encoded by your browser on your own device, so they are never sent to a server.' },
        { p: 'The tools accept anything your browser can display as an image. In practice that means JPG, PNG, WebP and GIF everywhere, and AVIF in current browsers. You can drop several files at once.' },
      ],
    },
    {
      heading: 'Convert an image to another format',
      blocks: [
        {
          ol: [
            'Open img.sessea.com. It starts on the Convert tool.',
            'Drop your images on the drop zone, or click it and choose files. Press O to open the file picker from the keyboard.',
            'Choose the output format: JPEG, PNG or WebP. AVIF appears in the list only if your browser can encode it, because the tool tests this before offering it.',
            'For JPEG, WebP and AVIF, set the quality slider. It runs from 0.40 to 1.00 and starts at 0.90.',
            'Drag the before and after slider over the preview to compare the result with the original.',
            'Download the file, or use "Download all as ZIP" when you loaded several images.',
          ],
        },
        { note: 'PNG is lossless, so the quality slider is hidden for it. If the PNG comes out larger than the original JPG, that is expected for photos. See the format guide for why.' },
      ],
    },
    {
      heading: 'Hit a target file size',
      blocks: [
        { p: 'Upload forms often reject files above a limit like 200 KB or 1 MB. Instead of guessing the quality, tick "Aim for target file size" and set the target between 50 and 2000 KB.' },
        { p: 'The tool then searches for the highest quality that fits. It encodes the image, checks the size, and moves the quality up or down, repeating this a few times. If even the lowest quality is too big, reduce the pixel dimensions with Resize first, then convert again.' },
        { p: 'A target size only works with lossy formats. PNG ignores it, because lossless files cannot trade quality for size.' },
      ],
    },
    {
      heading: 'Resize to exact dimensions',
      blocks: [
        {
          ol: [
            'Switch to Resize with the tab bar or by pressing 2.',
            'Type a new width or height in pixels. With "Keep aspect ratio" on (the default), the other value follows so the picture is not stretched.',
            'Or click a preset: 75%, 50% or 25% of the original size.',
            'Check the preview, then download.',
          ],
        },
        { p: 'Resize keeps PNG files as PNG and saves everything else as JPEG, with a quality slider for the JPEG output. Resize also has its own target size option. In that mode it keeps the quality fixed and scales the image down step by step until the file fits.' },
      ],
    },
    {
      heading: 'Chain several edits',
      blocks: [
        { p: 'Each tool hands its result to the next one. You can crop a photo, resize the crop, brighten it in Enhance, then convert it to WebP, without downloading and reopening it in between. The "Continue with this image" links under the preview jump straight to the next tool.' },
        { p: 'If a step goes wrong, press Z to undo. The tools keep the last 20 steps. Esc clears the current image.' },
      ],
    },
    {
      heading: 'Which size should you pick?',
      blocks: [
        {
          ul: [
            'Email or chat: 1600 to 2000 pixels on the long side is plenty for viewing on a screen.',
            'Website content image: around twice the width it is displayed at, so it stays sharp on high-density screens. An image shown 800 pixels wide works well at 1600 pixels.',
            'Profile picture or avatar: crop to 1:1 first, then resize to 400 to 800 pixels.',
            'Printing: keep the original. Downsizing throws away pixels a printer can use.',
          ],
        },
        { p: 'Halving both width and height leaves a quarter of the pixels, so the file usually shrinks by much more than half. That makes resizing the most effective way to reduce file size, before any quality setting.' },
      ],
    },
    {
      heading: 'Limits to know about',
      blocks: [
        {
          ul: [
            'There is no fixed size limit, but very large images (tens of megapixels) need a lot of memory and can fail or slow down on phones and older laptops.',
            'Camera RAW files and HEIC iPhone photos only open if your browser can display them. Chrome and Firefox cannot open HEIC.',
            'Re-encoding removes EXIF metadata such as GPS location and camera model. That is usually what you want for privacy, but it also removes the date the photo was taken.',
            'Animated GIF and animated WebP files are exported as a single still frame.',
          ],
        },
        { p: 'Always keep your original file and treat the download as an export copy.' },
      ],
    },
  ],
}
