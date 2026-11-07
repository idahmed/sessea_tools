export default {
  slug: 'trim-convert-audio',
  topic: 'Audio',
  title: 'Trim, convert and clean up audio in your browser',
  description:
    'Step by step: cut a clip, fix its volume, add fades and export MP3 or WAV with sessea audio tools, without uploading the recording.',
  published: '2026-10-17',
  updated: '2026-11-07',
  tools: ['audio'],
  sections: [
    {
      heading: 'Before you start',
      blocks: [
        { p: 'Open audio.sessea.com in a current browser. The tools read MP3, WAV, M4A and OGG files, plus FLAC and any other format your browser can decode. The file is decoded by your browser and edited in memory on your device. It is not uploaded.' },
        { p: 'Every tool passes its result to the next one, so you can trim, then normalise, then fade, then export, without saving files in between. Undo keeps your last 15 steps.' },
      ],
    },
    {
      heading: 'Trim a clip',
      blocks: [
        {
          ol: [
            'Choose Trim from the tab bar, or press 3.',
            'Drop your file in. A waveform shows where the loud and quiet parts are, which makes it easier to find the start of speech or music.',
            'Move the start and end sliders. They move in steps of 0.1 seconds.',
            'Leave "Normalize volume" on if you want the clip brought to a consistent level. It raises or lowers the whole clip so the loudest peak sits just below the maximum.',
            'Play the preview, then download the MP3.',
          ],
        },
        { note: 'If you see "End must be after start", the end slider is at or before the start slider. Move one of them.' },
      ],
    },
    {
      heading: 'Fix a recording that is too quiet or too loud',
      blocks: [
        { p: 'The Volume tool has two modes. Normalize, the default, measures the loudest point and scales the whole file so that point reaches 90% of full scale. This is the safe choice: it makes quiet recordings louder without distorting them.' },
        { p: 'Volume mode applies a fixed gain from 10% to 300%. Above 100%, any peak that would go past the maximum is clipped, which sounds like crackling. If you need a quiet recording much louder, normalise first and only then add a small boost.' },
      ],
    },
    {
      heading: 'Add fades',
      blocks: [
        { p: 'A clip that starts or stops abruptly can click. The Fade tool adds a fade-in at the start and a fade-out at the end, each up to half the length of the clip. Half a second, the default, removes clicks without being noticeable. For music endings, two to five seconds sounds more natural.' },
      ],
    },
    {
      heading: 'Convert to another format',
      blocks: [
        { p: 'Convert always offers MP3 and WAV. MP3 uses a bitrate slider from 64 to 320 kbps. WAV is uncompressed 16-bit audio, which is ideal if you will edit the file again in another program.' },
        { p: 'Depending on your browser, Convert also offers WebM, OGG and M4A. These are recorded by playing the audio through the browser recording system, so they take as long as the audio itself: a three-minute song takes three minutes to export. Keep the tab open until it finishes.' },
        { p: 'For many files at once, load them together and use the ZIP download. Batch export works for MP3 and WAV.' },
      ],
    },
    {
      heading: 'Make a file smaller',
      blocks: [
        { p: 'The Compress tool always outputs MP3. Pick a bitrate from 320 down to 64 kbps, or switch to target size mode and enter a size between 100 KB and 10 MB. In target mode the tool tries bitrates from high to low and keeps the first one that fits.' },
        { p: 'For speech, the result usually sounds fine down to 64 kbps. For music, go below 128 kbps only if you must. The audio formats guide has a table of sizes per minute.' },
      ],
    },
    {
      heading: 'Other edits',
      blocks: [
        {
          ul: [
            'Merge joins two or more clips in the order you choose. Clips are converted to the sample rate of the first clip.',
            'Speed changes playback from 0.5× to 2×. Pitch changes with speed, like a tape player, so voices sound higher when sped up.',
            'Split cuts a file into two parts at one point. Download each part or both in a ZIP.',
            'Channels converts stereo to mono (useful for voice, and halves the data) or mono to stereo.',
            'Loop repeats the whole clip 2 to 12 times.',
            'Reverse plays the clip backwards.',
          ],
        },
      ],
    },
    {
      heading: 'Tips',
      blocks: [
        {
          ul: [
            'Keep your original file. Every MP3 export loses a little detail, so export once at the end of your edits.',
            'Long recordings need memory. Decoded audio takes far more space than the MP3 it came from (browsers store it as 32-bit samples, about 21 MB per minute of 44.1 kHz stereo), so a long recording can be slow or fail on older phones.',
            'If a file will not open, your browser cannot decode it. Convert it to WAV in another app and try again.',
          ],
        },
      ],
    },
  ],
}
