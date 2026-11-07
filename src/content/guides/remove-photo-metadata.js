export default {
  slug: 'remove-photo-metadata',
  topic: 'Images',
  title: 'Remove location and camera data from a photo before sharing it',
  description:
    'What EXIF metadata is, why a photo can reveal where you live, how to check a file for GPS data, and how to strip it in your browser.',
  published: '2026-11-07',
  updated: '2026-11-07',
  tools: ['image'],
  sections: [
    {
      heading: 'What is hidden in a photo file',
      blocks: [
        { p: 'Along with the pixels, most photos from phones and cameras carry a block of text data called EXIF. You do not see it in the picture, but any program that reads the file can. Depending on the device and its settings, EXIF can include:' },
        {
          ul: [
            'GPS coordinates of where the photo was taken, often accurate to a few metres.',
            'The date and time, down to the second.',
            'The make and model of the phone or camera, and sometimes the lens and software version.',
            'Exposure settings, and in some cases a camera serial number.',
            'A small thumbnail of the original image, which can survive some edits.',
          ],
        },
        { p: 'It is a bit like a parcel that carries a sticker with the sender address. The contents are what you meant to send, but the sticker tells the receiver more than you might want.' },
      ],
    },
    {
      heading: 'When it matters',
      blocks: [
        { p: 'A photo taken at home and posted on a marketplace listing, a forum or a personal website can give away your address. Photos of children taken at school or at home carry the same risk. Journalists, activists and anyone dealing with a stalker or an abusive ex-partner have good reasons to strip location data every time.' },
        { p: 'Many large social networks remove EXIF data when you upload a photo, but you should not rely on that. Files sent as email attachments, shared through cloud storage links, uploaded to small websites, or sent as a "document" in messaging apps usually keep their metadata intact.' },
      ],
    },
    {
      heading: 'How to check a photo for location data',
      blocks: [
        {
          ul: [
            'Windows: right-click the file, choose Properties, then the Details tab. Look for a GPS section with latitude and longitude.',
            'macOS: open the photo in Preview, choose Tools, then Show Inspector. A GPS tab appears if location data is present.',
            'iPhone: open the photo in Photos and swipe up. If a map appears, the photo has a location.',
            'Android: in most gallery apps, open the photo and look for an info or details button, which lists location when present.',
          ],
        },
      ],
    },
    {
      heading: 'Strip metadata in the browser',
      blocks: [
        { p: 'The Convert tool in sessea image tools has a "Strip metadata" option that is on by default. It works by drawing the image onto a canvas and encoding a brand new file from the pixels. The new file contains the picture and nothing else, so EXIF, GPS data and the embedded thumbnail are gone.' },
        {
          ol: [
            'Open img.sessea.com and drop in the photos.',
            'Leave "Strip metadata (recommended)" ticked.',
            'Pick the output format. JPEG at quality 0.90 or above keeps the photo looking the same.',
            'Download the new files and share those instead of the originals.',
          ],
        },
        { p: 'Because this happens in your browser tab, the original photos with their location data are never uploaded anywhere in the process. That matters: sending a photo to an online service to remove the location would hand that same location to the service.' },
        { note: 'If you untick the option and keep the same format, the tool returns your original file unchanged, metadata included. Every other tool (resize, crop, rotate, enhance, watermark) also creates a new file from the pixels, so its output carries no EXIF data either.' },
      ],
    },
    {
      heading: 'What you lose',
      blocks: [
        {
          ul: [
            'The capture date. Photo libraries that sort by EXIF date will sort the new file by its download date instead.',
            'Colour profile details. Photos shot in a wide colour space may look very slightly different after conversion.',
            'A little quality for lossy formats, because the image is encoded again. At a high quality setting this is not visible.',
          ],
        },
        { p: 'Keep the originals in your private photo library and only share the stripped copies.' },
      ],
    },
    {
      heading: 'Stop adding location in the first place',
      blocks: [
        { p: 'If you rarely need location on your photos, turn it off in the camera. On iPhone, go to Settings, Privacy & Security, Location Services, Camera, and choose Never. On Android, open the camera app settings and turn off the location or geotag option. On iPhone you can also remove location for a single share: tap Options at the top of the share sheet and turn off Location.' },
      ],
    },
  ],
}
