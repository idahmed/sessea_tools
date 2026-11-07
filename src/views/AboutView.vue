<script setup>
import { formatDate } from '@/lib/guides'
import { TOOLS } from '@/lib/tools'

/** Dated log of meaningful site changes. Add an entry when something ships. */
const UPDATES = [
  {
    date: '2026-11-07',
    text: 'Added a documentation page for each tool, including the new unit converter and typing test, and eleven new guides on image formats, file size, photo metadata, audio bitrate, device troubleshooting, unit conversions, typing speed and calculator use. Fixed the calculator so function keys no longer discard the rest of an expression.',
  },
  {
    date: '2026-11-01',
    text: 'Released the unit converter and the typing speed test.',
  },
  {
    date: '2026-10-17',
    text: 'Launched the sessea.com hub with the first four guides, the privacy policy and the terms of service.',
  },
  {
    date: '2026-10-15',
    text: 'Released the calculator, image tools, audio tools and hardware tests on their own subdomains.',
  },
]
</script>

<template>
  <article class="prose">
    <header class="prose-head">
      <p class="eyebrow">About</p>
      <h1>About sessea tools</h1>
      <p class="lede">
        Small, focused browser tools for calculating, editing images and audio,
        checking devices, converting units and practising typing, built so your
        files stay on your machine.
      </p>
    </header>

    <div class="prose-body">
      <section>
        <h2>Who builds sessea</h2>
        <p>
          sessea is built and maintained by Yassine, an independent software
          developer who wanted everyday utilities without the usual trade-off:
          upload your file to a stranger's server, or install yet another app.
          Every tool, guide and page on this site is written, tested and fixed by
          Yassine, and every message sent through the
          <RouterLink to="/contact">contact page</RouterLink>
          is read by Yassine personally.
        </p>
      </section>

      <section>
        <h2>What the tools are</h2>
        <ul>
          <li v-for="tool in TOOLS" :key="tool.id">
            <RouterLink :to="`/tools/${tool.id}`">{{ tool.title }}</RouterLink>:
            {{ tool.blurb }}, at <a :href="tool.href">{{ tool.host }}</a>.
          </li>
        </ul>
        <p>
          Each tool lives on its own subdomain so it loads fast and does one job.
          This site, sessea.com, documents them: what each one does, its limits,
          and guides for the tasks people use them for.
        </p>
      </section>

      <section>
        <h2>How the tools work</h2>
        <p>
          The tools use standard browser features (canvas for images, the Web Audio
          API for sound, and the media devices API for cameras and microphones) to
          do the work in your browser tab. Files you open are never uploaded.
          The guide
          <RouterLink to="/guides/local-browser-tools">How browser-only tools keep your files private</RouterLink>
          explains the technique and shows how to verify it yourself in two minutes.
        </p>
      </section>

      <section>
        <h2>How the guides are written</h2>
        <p>
          Guides are written around real tasks and checked against the tools as
          they behave today: option ranges, defaults and limits come from the
          tools themselves. Each guide shows when it was published and last
          updated. When a tool changes, the guides that describe it are updated
          in the same release. If you find a mistake,
          <RouterLink to="/contact">report it</RouterLink>
          and it will be corrected.
        </p>
      </section>

      <section>
        <h2>How sessea is funded</h2>
        <p>
          The tools are free and have no paid tier. Pages show ads from Google
          AdSense, which pay for the domains and hosting. Ads never have access to
          the files you process. The
          <RouterLink to="/privacy">privacy policy</RouterLink>
          explains how advertising cookies work and how to opt out of personalised
          ads.
        </p>
      </section>

      <section>
        <h2>Recent updates</h2>
        <ul class="updates">
          <li v-for="item in UPDATES" :key="item.date">
            <time :datetime="item.date">{{ formatDate(item.date) }}</time>
            <span>{{ item.text }}</span>
          </li>
        </ul>
      </section>
    </div>
  </article>
</template>
