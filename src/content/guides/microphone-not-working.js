export default {
  slug: 'microphone-not-working',
  topic: 'Devices',
  title: 'Microphone not working in the browser? Check these in order',
  description:
    'A step-by-step fix for a mic that is not detected or not picking up sound in Chrome, Edge, Firefox or Safari, on Windows and macOS.',
  published: '2026-11-07',
  updated: '2026-11-07',
  tools: ['hardware'],
  sections: [
    {
      heading: 'Four layers, one at a time',
      blocks: [
        { p: 'Sound from your microphone passes through four layers before a website hears it: the device itself, the operating system, the browser, and the website permission. A block at any layer gives the same result, silence. Checking them in order is faster than trying random fixes.' },
        { p: 'Use the Mic test on hw.sessea.com while you work through this list. The level meter tells you the moment a fix works.' },
      ],
    },
    {
      heading: '1. The website permission',
      blocks: [
        { p: 'If you once clicked Block when a site asked for the microphone, the browser remembers and stops asking. The page then fails with a permission error.' },
        {
          ul: [
            'Chrome and Edge: click the icon to the left of the address bar, find Microphone and set it to Allow. Reload the page.',
            'Firefox: click the permissions icon in the address bar and remove the block on the microphone, then reload.',
            'Safari on Mac: open Safari, Settings, Websites, Microphone, and set the site to Allow or Ask.',
          ],
        },
        { p: 'Browsers only allow microphone access on secure pages (addresses starting with https). On an http page, the request fails no matter what you allow.' },
      ],
    },
    {
      heading: '2. The operating system permission',
      blocks: [
        { p: 'Both Windows and macOS can block the microphone for a whole app, including your browser. This is the most common cause when the browser permission is already set to Allow.' },
        {
          ul: [
            'macOS: open System Settings, Privacy & Security, Microphone, and switch on your browser. Quit and reopen the browser afterwards.',
            'Windows 11: open Settings, Privacy & security, Microphone. Turn on "Microphone access", "Let apps access your microphone" and "Let desktop apps access your microphone". Browsers count as desktop apps.',
            'Windows 10: the same switches are under Settings, Privacy, Microphone.',
          ],
        },
      ],
    },
    {
      heading: '3. The right device is selected',
      blocks: [
        { p: 'A laptop with a headset and a webcam plugged in has three microphones. The browser may be using one you are not speaking into.' },
        {
          ul: [
            'In the Mic test, pick each microphone from the list in turn and watch the meter.',
            'Windows: Settings, System, Sound, Input shows the default input and a live level bar. Check that the input volume is not at zero.',
            'macOS: System Settings, Sound, Input lists microphones and shows the input level.',
            'In the call app itself, check its own microphone setting, which can differ from the system default.',
          ],
        },
      ],
    },
    {
      heading: '4. The device itself',
      blocks: [
        {
          ul: [
            'Headsets often have a mute switch on the cable or a mute button on the ear cup. Many laptops have a mute key with a small light.',
            'Wired headsets with a single 3.5 mm plug need a combined headset jack. Plugged into a headphone-only jack, the mic will not work.',
            'Bluetooth headsets switch to a lower-quality call mode when the mic is in use, so music on the same headset will sound worse during a call. That is normal.',
            'Try the microphone on another device. If it fails there too, the problem is the hardware.',
          ],
        },
      ],
    },
    {
      heading: 'Another app is holding the microphone',
      blocks: [
        { p: 'On Windows, some apps can take exclusive control of a microphone, which blocks everything else. If the mic works in one app but not the browser, close the other call or recording apps, including ones running in the system tray. You can also turn this off: open the Sound control panel, go to the Recording tab, open your microphone Properties, then Advanced, and untick "Allow applications to take exclusive control of this device".' },
      ],
    },
    {
      heading: 'What the error means',
      blocks: [
        { p: 'If you use developer tools, the browser error name points to the layer that failed:' },
        {
          table: {
            caption: 'Browser microphone errors',
            head: ['Error name', 'Likely cause'],
            rows: [
              ['NotAllowedError', 'The website or operating system permission is blocked'],
              ['NotFoundError', 'No microphone is connected or enabled'],
              ['NotReadableError', 'The device exists but the system could not open it, often because another app is using it or a driver failed'],
              ['OverconstrainedError', 'The site asked for a specific device that is no longer connected'],
            ],
          },
        },
      ],
    },
    {
      heading: 'If nothing works',
      blocks: [
        {
          ol: [
            'Restart the browser completely, not just the tab.',
            'Try a different browser. If the mic works there, reset the site permissions in the first browser.',
            'Restart the computer. Audio drivers occasionally get stuck after sleep.',
            'On Windows, update or reinstall the audio driver from Device Manager or the laptop maker website.',
          ],
        },
      ],
    },
  ],
}
