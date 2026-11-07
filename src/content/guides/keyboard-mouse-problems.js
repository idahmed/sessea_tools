export default {
  slug: 'keyboard-mouse-problems',
  topic: 'Devices',
  title: 'Keyboard keys not registering or mouse double-clicking: how to diagnose it',
  description:
    'How to tell a software setting from a worn switch: test for dead keys, chattering keys, ghosting and mouse double-click faults.',
  published: '2026-11-07',
  updated: '2026-11-07',
  tools: ['hardware'],
  sections: [
    {
      heading: 'Hardware or software?',
      blocks: [
        { p: 'A key that types twice or a mouse that double-clicks on its own can be a failing switch, a dirty contact, a wireless signal problem or a system setting. The quickest way to separate them is a test page that shows exactly what the computer receives. If the raw events are wrong, the problem is below the app you were using.' },
        { p: 'Open the Keyboard or Mouse test on hw.sessea.com. Both show each event as it arrives, without any app logic in between.' },
      ],
    },
    {
      heading: 'Dead keys',
      blocks: [
        { p: 'Press the suspect key slowly. If no event appears in the log at all, the key is not reaching the computer.' },
        {
          ul: [
            'Try the key at different spots: the edge and the centre. A key that works only when pressed in the middle often has a broken stabiliser or debris under it.',
            'On laptops, a key that stopped after a spill usually needs a repair. Turn the laptop off before cleaning.',
            'If several keys in a row or column stop together, the problem is the keyboard circuit or its cable, not the individual switches.',
            'If the key works in the test but not in one app, check that app for a shortcut using that key, or a keyboard layout setting.',
          ],
        },
      ],
    },
    {
      heading: 'Keys that type twice (chattering)',
      blocks: [
        { p: 'Press the key once, slowly and firmly. Watch the log: a healthy key shows one press and one release. A chattering key shows two presses for one physical press. This is common on mechanical keyboards as switches wear or collect dust.' },
        {
          ul: [
            'Blow compressed air under the keycap, or remove the keycap and clean around the switch.',
            'Many mechanical keyboards let you change the debounce time in their software. A slightly longer debounce hides chatter.',
            'On hot-swap keyboards, you can replace the single faulty switch.',
          ],
        },
        { note: 'Holding a key down normally produces repeated press events after a short delay. That is key repeat, set by your operating system, and is not a fault.' },
      ],
    },
    {
      heading: 'Several keys at once (ghosting and rollover)',
      blocks: [
        { p: 'Gamers and fast typists sometimes find that a third or fourth key held at the same time does not register. Many cheaper keyboards wire keys in a grid and can only detect certain combinations reliably. When a key press is lost, it is called blocking. When a key press appears that you did not make, it is called ghosting.' },
        { p: 'To test, hold two keys and add a third and a fourth while watching the log. Note which combinations fail. Keyboards sold as "N-key rollover" or "NKRO" should register every key you hold. If the combinations you need fail, the only fix is a different keyboard.' },
      ],
    },
    {
      heading: 'Mouse double-clicking on its own',
      blocks: [
        { p: 'Click the left button ten times, slowly, and watch the click counter. If it shows eleven or more, the switch is sending extra clicks. This is one of the most common mouse faults and comes from wear in the small switch under the button.' },
        {
          ul: [
            'First, check the double-click speed setting in your operating system. A very slow setting can turn two separate clicks into a double click, but it does not create extra clicks in the counter.',
            'Wireless mice with weak batteries can behave erratically. Replace the batteries or charge the mouse and test again.',
            'If the counter still jumps, the switch is worn. Some mice have replaceable switches. Otherwise use the warranty, as this fault is common enough that many manufacturers replace the mouse.',
          ],
        },
      ],
    },
    {
      heading: 'Scroll wheel jumping',
      blocks: [
        { p: 'Scroll slowly in one direction and watch the scroll counter. If it occasionally moves the opposite way, the wheel encoder is dirty or worn. Blowing compressed air into the gap around the wheel fixes it surprisingly often.' },
      ],
    },
    {
      heading: 'Wireless devices',
      blocks: [
        {
          ul: [
            'Move the USB receiver closer, ideally to a front port or an extension cable on the desk. USB 3 ports and cables can interfere with 2.4 GHz receivers nearby.',
            'For Bluetooth, remove the device from the system list and pair it again.',
            'Lag that comes and goes, rather than missing clicks, almost always points to the wireless link, not the switches.',
          ],
        },
      ],
    },
  ],
}
