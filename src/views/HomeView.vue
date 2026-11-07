<script setup>
import HeroSignal from '@/components/HeroSignal.vue'
import { GUIDES } from '@/lib/guides'
import { HOME_FAQ } from '@/lib/sites'
import { TOOLS } from '@/lib/tools'

const latestGuides = [...GUIDES]
  .sort((a, b) => b.published.localeCompare(a.published))
  .slice(0, 6)
</script>

<template>
  <div class="home">
    <section class="hero">
      <HeroSignal />

      <div class="hero-copy">
        <p class="brand-mark">sessea</p>
        <h1>Free private browser tools that stay on your machine.</h1>
        <p class="lede">
          Scientific calculator, unit converter, image and audio editors,
          hardware tests and a typing test. No uploads, no accounts.
        </p>
        <div class="hero-cta">
          <a class="cta" href="#tools">Browse tools</a>
          <RouterLink class="cta ghost" to="/about">Why local</RouterLink>
        </div>
      </div>
    </section>

    <section id="tools" class="tools" aria-labelledby="tools-title">
      <div class="tools-head">
        <h2 id="tools-title">Six free utilities. One privacy promise.</h2>
        <p>
          Open a tool below. Files and media stay in your browser, and we never
          host your uploads. Prefer reading first?
          <RouterLink to="/guides">Start with a guide</RouterLink>.
        </p>
      </div>

      <ol class="tool-index">
        <li v-for="(tool, index) in TOOLS" :key="tool.id">
          <RouterLink class="tool-row" :to="`/tools/${tool.id}`">
            <span class="tool-num">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="tool-main">
              <strong>{{ tool.title }}</strong>
              <em>{{ tool.seoDescription }}</em>
            </span>
            <span class="tool-host">{{ tool.host }}</span>
            <span class="tool-go" aria-hidden="true">→</span>
          </RouterLink>
        </li>
      </ol>
    </section>

    <section class="seo-block" aria-labelledby="how-title">
      <h2 id="how-title">Built for everyday work, not cloud lock-in</h2>
      <p>
        sessea is a small set of browser utilities for students, makers, and anyone
        who wants a fast edit without creating an account. Convert or resize a photo,
        trim a voice note, run a scientific calculation, convert a recipe from cups
        to millilitres, check a mic before a call, or time your typing, then close
        the tab. In-memory media is discarded; only downloads you choose
        remain on your device.
      </p>
      <p>
        The hub at sessea.com points to focused apps on their own subdomains so each
        tool stays fast and clear. They share one idea: useful software that respects
        the machine it runs on. Advertising may appear to keep the tools free, but
        file processing itself is designed to stay local. Read the
        <RouterLink to="/privacy">privacy policy</RouterLink>
        and
        <RouterLink to="/terms">terms</RouterLink>
        for the full picture.
      </p>
    </section>

    <section class="seo-block" aria-labelledby="guides-title">
      <h2 id="guides-title">Latest guides</h2>
      <p>
        Practical articles on image and audio formats, device troubleshooting,
        unit conversions, typing speed and calculator use. <RouterLink to="/guides">See all guides</RouterLink>.
      </p>
      <ul class="home-guides">
        <li v-for="guide in latestGuides" :key="guide.slug">
          <RouterLink :to="`/guides/${guide.slug}`">{{ guide.title }}</RouterLink>
        </li>
      </ul>
    </section>

    <section class="seo-block" aria-labelledby="faq-title">
      <h2 id="faq-title">Common questions</h2>
      <dl class="faq">
        <template v-for="item in HOME_FAQ" :key="item.q">
          <dt>{{ item.q }}</dt>
          <dd>{{ item.a }}</dd>
        </template>
      </dl>
    </section>

    <section class="strip" aria-label="Trust links">
      <p>
        No accounts. No uploads to our servers.
        <RouterLink to="/about">About</RouterLink>
        ·
        <RouterLink to="/privacy">Privacy</RouterLink>
        ·
        <RouterLink to="/terms">Terms</RouterLink>
        ·
        <RouterLink to="/contact">Contact</RouterLink>
      </p>
    </section>
  </div>
</template>
