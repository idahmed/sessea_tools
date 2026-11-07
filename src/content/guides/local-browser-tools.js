export default {
  slug: 'local-browser-tools',
  topic: 'Privacy',
  title: 'How browser-only tools keep your files private, and how to check',
  description:
    'What "processed in your browser" means technically, which browser features make it possible, and a two-minute test to verify that a tool does not upload your files.',
  published: '2026-10-17',
  updated: '2026-11-07',
  tools: ['image', 'audio', 'hardware', 'calculator'],
  sections: [
    {
      heading: 'Upload tools and local tools',
      blocks: [
        { p: 'Most free online converters work by upload. Your file travels to the company server, a program there converts it, and you download the result. It works, but a copy of your file now sits on a machine you do not control, for a time you do not know, under a policy you probably did not read.' },
        { p: 'A local tool reverses that. The web page delivers the program to your browser, and the program runs on your own device. Your file is opened from your disk into the tab, changed there, and saved back to your disk. It is the difference between posting a letter to someone so they can proofread it, and having them hand you a red pen.' },
      ],
    },
    {
      heading: 'The browser features that make it possible',
      blocks: [
        { p: 'Browsers used to be too limited for this kind of work. Several standard features changed that, and the sessea tools are built on them:' },
        {
          table: {
            caption: 'Browser features used by each sessea tool',
            head: ['Tool', 'Browser feature', 'What it does'],
            rows: [
              ['Image tools', 'Canvas', 'Decodes your image, draws it with your edits and encodes a new JPEG, PNG, WebP or AVIF file'],
              ['Audio tools', 'Web Audio API', 'Decodes audio into raw samples that can be cut, mixed, faded and resampled in memory'],
              ['Audio tools', 'MP3 and WAV encoders in JavaScript, MediaRecorder', 'Turn the edited samples back into a file you can download'],
              ['Hardware tests', 'getUserMedia, Web Audio', 'Show your microphone and camera streams in the page and generate test tones'],
              ['Calculator', 'Plain JavaScript', 'Parses and evaluates expressions without sending them anywhere'],
            ],
          },
        },
        { p: 'Files you pick are read with the File API, which gives the page access to that file only, and only because you chose it. Results are offered as a download generated in the page.' },
      ],
    },
    {
      heading: 'Check it yourself in two minutes',
      blocks: [
        { p: 'You do not have to take any website at its word, including this one. Two simple tests show whether a tool uploads your files.' },
        {
          ol: [
            'Open the tool, then open the developer tools (F12 on Windows and Linux, Cmd+Option+I on Mac) and select the Network tab.',
            'Clear the list, then drop a file into the tool and run the conversion.',
            'Watch the list. A tool that uploads will show a request whose size is close to your file size. A local tool shows no such request. You may see small requests for ads or fonts, but none carrying your file.',
          ],
        },
        { p: 'The second test is even simpler: load the tool, then disconnect from the internet (turn off Wi-Fi or use airplane mode) and use it. If the conversion still works offline, the file cannot have been sent anywhere.' },
      ],
    },
    {
      heading: 'What stays on your device',
      blocks: [
        {
          ul: [
            'Your files and their edited versions, which live in the tab memory until you close it or download them.',
            'Camera and microphone streams, which are displayed in the page and discarded when you stop the test.',
            'A few preferences saved in your browser storage: theme, last output format and quality, calculator history and memory. Clearing the site data in your browser removes them.',
          ],
        },
      ],
    },
    {
      heading: 'What local processing does not cover',
      blocks: [
        { p: 'Local processing protects your files. It does not make a website invisible. The pages load the Google AdSense script to show ads, and Google and its partners can use cookies to select and measure those ads, as explained in the privacy policy. That data concerns your visit, not the content of your files, which never leave the tab.' },
        { p: 'If you prefer not to see personalised ads, you can turn them off in your Google ad settings or block third-party cookies in your browser. The tools keep working either way.' },
      ],
    },
    {
      heading: 'When an upload tool is the better choice',
      blocks: [
        { p: 'Local tools are limited by your device. Very large videos, long audio files on an old phone, or formats your browser cannot decode (camera RAW files, or HEIC photos outside Safari) may be too much for a browser tab. For those, a desktop application is usually better than either kind of website, because it is both local and powerful.' },
      ],
    },
  ],
}
