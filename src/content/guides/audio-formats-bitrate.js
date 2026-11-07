export default {
  slug: 'audio-formats-bitrate',
  topic: 'Audio',
  title: 'Audio formats and bitrate explained: MP3, WAV, AAC, OGG and FLAC',
  description:
    'How bitrate, sample rate and channels decide audio file size and quality, with a size table and settings for voice notes, podcasts and music.',
  published: '2026-11-07',
  updated: '2026-11-07',
  tools: ['audio'],
  sections: [
    {
      heading: 'Why the same song can be 3 MB or 40 MB',
      blocks: [
        { p: 'A four-minute song can be a 4 MB MP3, a 25 MB FLAC or a 42 MB WAV. All three can sound the same to most listeners. The difference comes from three settings: the format, the bitrate, and how many channels and samples per second are stored. Once you understand those, you can pick settings on purpose instead of guessing.' },
      ],
    },
    {
      heading: 'Bitrate is a budget per second',
      blocks: [
        { p: 'Bitrate is the amount of data used for each second of audio, measured in kilobits per second (kbps). Think of it as a budget: the encoder has that many bits to describe each second of sound. A higher budget keeps more detail. A lower budget forces the encoder to drop more.' },
        { p: 'Because bitrate is data per second, file size is easy to estimate: multiply the bitrate by the duration and divide by 8 to get bytes. One minute at 128 kbps is 128 × 60 / 8 = 960 kilobytes, so just under 1 MB.' },
        {
          table: {
            caption: 'Approximate size of one minute of audio',
            head: ['Setting', 'Size per minute', 'Typical use'],
            rows: [
              ['MP3 64 kbps mono', '0.48 MB', 'Speech, voice notes, lectures'],
              ['MP3 128 kbps stereo', '0.96 MB', 'Background music, casual listening'],
              ['MP3 192 kbps stereo', '1.44 MB', 'Good quality music'],
              ['MP3 320 kbps stereo', '2.4 MB', 'Highest MP3 setting'],
              ['WAV 44.1 kHz, 16-bit, stereo', '10.6 MB', 'Editing, archiving, CD quality'],
              ['WAV 48 kHz, 24-bit, stereo', '17.3 MB', 'Video and studio recording'],
            ],
          },
        },
        { p: 'Many encoders also offer variable bitrate (VBR). Instead of a fixed budget every second, VBR spends more bits on complex passages and fewer on silence or simple sounds. For the same average size it usually sounds better than constant bitrate (CBR).' },
      ],
    },
    {
      heading: 'Sample rate, bit depth and channels',
      blocks: [
        { p: 'Uncompressed audio is a list of measurements of the sound wave. Three numbers decide how much data that list takes.' },
        {
          ul: [
            'Sample rate is how many measurements are taken each second. 44.1 kHz is the CD standard and 48 kHz is standard for video. A sample rate can describe frequencies up to half its value, so 44.1 kHz covers up to about 22 kHz, which is beyond the roughly 20 kHz upper limit of human hearing.',
            'Bit depth is how precise each measurement is. 16-bit is CD quality. 24-bit gives more headroom while recording and editing, but the extra precision is rarely audible in a finished file.',
            'Channels: stereo stores two channels, mono stores one. For a single voice, mono halves the data with no loss in usefulness.',
          ],
        },
        { p: 'Multiply them together and you get the raw bitrate: 44,100 samples × 16 bits × 2 channels = 1,411 kbps. That is why WAV files are so large, and why compressed formats exist.' },
      ],
    },
    {
      heading: 'The formats you will meet',
      blocks: [
        {
          table: {
            caption: 'Common audio formats',
            head: ['Format', 'Type', 'Notes'],
            rows: [
              ['WAV', 'Uncompressed', 'Exact samples. Huge files. Best as an editing or archive copy.'],
              ['FLAC', 'Lossless compressed', 'Same sound as WAV, usually around half the size. Not supported everywhere.'],
              ['MP3', 'Lossy', 'Plays on almost every device made in the last 25 years.'],
              ['AAC / M4A', 'Lossy', 'Usually better than MP3 at the same bitrate. Default for Apple devices and many streaming services.'],
              ['OGG Vorbis', 'Lossy', 'Open format, good quality. Weaker support on Apple devices.'],
              ['Opus', 'Lossy', 'Very efficient, especially for speech at low bitrates. Used by many voice and video chat apps.'],
            ],
          },
        },
      ],
    },
    {
      heading: 'Converting does not add quality back',
      blocks: [
        { p: 'Converting an MP3 to WAV makes the file ten times larger but does not restore anything the MP3 encoder threw away. The WAV is an exact copy of the MP3 sound, not of the original recording.' },
        { p: 'Converting from one lossy format to another, like MP3 to OGG, loses a little more each time, because the second encoder discards detail again on top of the first. When you can, convert from the original or a WAV/FLAC copy.' },
      ],
    },
    {
      heading: 'Settings that work',
      blocks: [
        {
          ul: [
            'Voice note or interview to send: MP3 at 64 kbps mono. Clear speech, under half a megabyte per minute.',
            'Podcast episode: MP3 at 96 to 128 kbps mono, or stereo if there is music.',
            'Music to listen to: MP3 at 192 to 256 kbps, or AAC at 160 to 192 kbps.',
            'Audio you will edit later: keep WAV or FLAC, and only export a compressed copy at the end.',
            'Ringtone or short sound effect: almost anything works. Trim it first, then pick MP3 for compatibility.',
          ],
        },
      ],
    },
    {
      heading: 'Doing it in the browser',
      blocks: [
        { p: 'The sessea audio tools convert, compress and edit audio inside your browser tab, so recordings stay on your device. Load the file, choose the output format and settings, listen to the preview, then download. If an input file will not open, your browser probably cannot decode that format. Converting it to WAV in another app first usually solves it.' },
      ],
    },
  ],
}
