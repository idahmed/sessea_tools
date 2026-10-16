<template>
  <div class="signal" aria-hidden="true">
    <svg class="signal-svg" viewBox="0 0 1200 720" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="grain" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.6" fill="currentColor" opacity="0.18" />
        </pattern>
      </defs>

      <rect class="signal-field" width="1200" height="720" />
      <rect width="1200" height="720" fill="url(#grain)" />

      <!-- aperture -->
      <g class="mark mark-a">
        <circle cx="220" cy="360" r="118" fill="none" stroke="currentColor" stroke-width="2" />
        <circle cx="220" cy="360" r="72" fill="none" stroke="currentColor" stroke-width="1.5" />
        <circle cx="220" cy="360" r="18" fill="currentColor" />
      </g>

      <!-- waveform -->
      <path
        class="mark mark-b"
        d="M420 360 C460 260, 500 460, 540 360 S620 260, 660 360 S740 460, 780 360"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
      />

      <!-- keys -->
      <g class="mark mark-c" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="860" y="250" width="52" height="52" rx="6" />
        <rect x="928" y="250" width="52" height="52" rx="6" />
        <rect x="996" y="250" width="52" height="52" rx="6" />
        <rect x="860" y="318" width="52" height="52" rx="6" />
        <rect x="928" y="318" width="188" height="52" rx="6" />
        <rect x="860" y="386" width="188" height="52" rx="6" />
      </g>

      <!-- digits -->
      <text class="mark mark-d" x="980" y="520" text-anchor="end">3.1415</text>
    </svg>
  </div>
</template>
