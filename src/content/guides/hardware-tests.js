export default {
  slug: 'hardware-tests',
  topic: 'Devices',
  title: 'Check your mic, camera, speakers, keyboard and mouse before a call',
  description:
    'A five-minute checklist using browser hardware tests, what each reading means, and what to do when a test fails.',
  published: '2026-10-17',
  updated: '2026-11-07',
  tools: ['hardware'],
  sections: [
    {
      heading: 'Why test in the browser',
      blocks: [
        { p: 'Most video calls, online classes and interviews now happen in a browser or in apps built on the same technology. Testing your devices in a browser checks the same path the call will use: the operating system, the browser permissions and the device itself. If the test works, the call usually will too.' },
        { p: 'Everything on hw.sessea.com runs in the page. The microphone and camera streams are shown to you and never uploaded.' },
      ],
    },
    {
      heading: 'Microphone',
      blocks: [
        {
          ol: [
            'Open the Mic test and allow microphone access when the browser asks.',
            'If you have several microphones (laptop, headset, webcam), pick the one you will use from the device list. The list updates when you plug a device in.',
            'Speak at normal volume. The level meter should move clearly with your voice. Peak is the loudest level reached since the test started.',
            'Press Record to capture up to 8 seconds, then play it back. This is the best way to hear what others will hear: echo, hiss, a muffled sound or a distant voice.',
          ],
        },
        {
          table: {
            caption: 'Reading the level meter while speaking normally',
            head: ['What you see', 'What it usually means'],
            rows: [
              ['No movement at all', 'Wrong device selected, mic muted, or permission blocked'],
              ['Barely moves', 'Input gain too low or mic too far away'],
              ['Moves well, peak stays below 100%', 'Good'],
              ['Peak reaches 100% at normal speech', 'Gain too high. Your voice may distort on the call'],
            ],
          },
        },
        { p: 'If the meter does not move, follow the microphone troubleshooting guide linked below.' },
      ],
    },
    {
      heading: 'Camera',
      blocks: [
        { p: 'Allow camera access and check the preview. The page shows the resolution and frame rate the camera is delivering. For video calls, 1280 × 720 at 30 frames per second is a common and comfortable target. A low frame rate often means poor lighting: many webcams slow down to collect more light.' },
        { p: 'On phones and tablets, use Flip to switch between the front and rear cameras. On computers with several webcams, pick one from the list.' },
      ],
    },
    {
      heading: 'Speakers and headphones',
      blocks: [
        { p: 'The Speakers test plays a short tone on the left channel, on both, or on the right. Each side uses a different pitch (380 Hz left, 440 Hz both, 520 Hz right), so you can tell them apart even if the balance is off.' },
        {
          ul: [
            'If the left tone comes from the right, your headphones are on backwards or the channels are swapped in your sound settings.',
            'If one side is silent, check the cable and plug, then the balance setting in your operating system.',
            'If nothing plays, check that the system volume is up and that the right output is selected.',
          ],
        },
        { p: 'Some browsers, mainly Chrome and Edge, let you choose the output device from the page. Others always use the system default output.' },
      ],
    },
    {
      heading: 'Keyboard',
      blocks: [
        { p: 'Press keys one by one. The test shows the key name, its physical code and which modifiers (Ctrl, Alt, Shift, Cmd or Windows) are held, plus a log of the last 12 presses and releases.' },
        { p: 'A key that registers twice for one press, a key that never shows a release, or a key that does nothing all point to hardware problems. The keyboard and mouse guide explains how to tell a software issue from a worn switch.' },
      ],
    },
    {
      heading: 'Mouse and trackpad',
      blocks: [
        { p: 'Move the pointer over the test pad and click each button. The page shows the position, which buttons are pressed, a click counter and a scroll counter. Single-click slowly ten times and watch the counter: if it jumps by more than ten, the button is double-clicking on its own.' },
      ],
    },
    {
      heading: 'Good habits',
      blocks: [
        {
          ul: [
            'Run the tests five minutes before an important call, not one minute before.',
            'Test with the exact setup you will use: same headset, same dock, same browser.',
            'On a shared computer, remove camera and microphone permission for the site afterwards. Click the icon to the left of the address bar to manage site permissions.',
          ],
        },
      ],
    },
  ],
}
