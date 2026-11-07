export default {
  slug: 'webcam-not-working',
  topic: 'Devices',
  title: 'Webcam not working or showing a black screen: how to fix it',
  description:
    'Fixes for a camera that is not detected, shows a black image, or is "in use by another app", in the browser on Windows and macOS.',
  published: '2026-11-07',
  updated: '2026-11-07',
  tools: ['hardware'],
  sections: [
    {
      heading: 'First, name the symptom',
      blocks: [
        { p: 'Camera problems fall into three groups, and each has different causes. Open the Camera test on hw.sessea.com and note which one you see.' },
        {
          ul: [
            'An error saying the camera could not be accessed: usually a permission problem or another app holding the camera.',
            'A black or frozen preview: usually a privacy shutter, a disabled camera, or a driver problem.',
            'A working but dark, blurry or choppy picture: usually lighting, focus or bandwidth.',
          ],
        },
      ],
    },
    {
      heading: 'Permissions: website and system',
      blocks: [
        { p: 'Like the microphone, the camera needs permission twice: from the browser for the website, and from the operating system for the browser.' },
        {
          ul: [
            'Browser: click the icon to the left of the address bar, set Camera to Allow, and reload the page.',
            'macOS: System Settings, Privacy & Security, Camera. Switch on your browser, then quit and reopen it.',
            'Windows 11: Settings, Privacy & security, Camera. Turn on "Camera access", "Let apps access your camera" and "Let desktop apps access your camera".',
          ],
        },
      ],
    },
    {
      heading: 'Another app is using the camera',
      blocks: [
        { p: 'On Windows, a webcam is often locked by the first app that opens it. If a video call app, a camera app or another browser tab is running, the next one gets an error. Close the other apps, including ones in the system tray, and close other tabs that used the camera. Then reload the test.' },
        { p: 'macOS usually lets several apps share the camera, but a stuck app can still block it. Quitting the app that used the camera last, or restarting the computer, clears it.' },
      ],
    },
    {
      heading: 'Black screen with no error',
      blocks: [
        {
          ul: [
            'Many laptops now have a sliding privacy shutter over the lens, or a keyboard key that cuts power to the camera. Look for a camera icon on a function key.',
            'On Windows, the camera can be disabled in Device Manager under Cameras or Imaging devices. Right-click it and choose Enable.',
            'External webcams on a USB hub may not get enough power. Plug them directly into the computer.',
            'If the camera light turns on but the image stays black, try a different browser. If it fails everywhere, update or reinstall the camera driver.',
          ],
        },
      ],
    },
    {
      heading: 'Wrong camera selected',
      blocks: [
        { p: 'Laptops with an external webcam, virtual cameras installed by streaming or meeting software, and phones with several lenses all show more than one camera. Pick each one from the device list in the test. On phones, the Flip button switches between front and rear cameras.' },
        { p: 'Virtual cameras from screen recording or video effects apps show a black frame when their app is closed. If a camera name looks unfamiliar, it is probably one of these.' },
      ],
    },
    {
      heading: 'Poor picture quality',
      blocks: [
        { p: 'The test shows the resolution and frame rate the camera actually delivers. Use them to separate camera limits from lighting and network problems.' },
        {
          ul: [
            'Low frame rate, often 15 frames per second or less, in a dim room: the camera is using longer exposures to collect light. Face a window or add a lamp in front of you, not behind you.',
            'Low resolution: some cameras deliver less than their maximum over USB 2 ports or through hubs. Try another port.',
            'Picture fine in the test but bad in the call: the call app reduces quality to fit your upload speed. That is a network issue, not a camera issue.',
            'Blurry: clean the lens. Fingerprints on laptop cameras are very common.',
          ],
        },
      ],
    },
    {
      heading: 'Last resort checklist',
      blocks: [
        {
          ol: [
            'Restart the browser, then the computer.',
            'Try a second browser to rule out a browser setting.',
            'Try the camera on another computer to rule out the hardware.',
            'Update the operating system and the camera driver.',
          ],
        },
      ],
    },
  ],
}
