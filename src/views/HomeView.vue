<script setup>
import { computed } from 'vue'
import HeroSignal from '@/components/HeroSignal.vue'
import JsonLd from '@/components/JsonLd.vue'
import { GUIDES } from '@/lib/guides'
import { HOME_FAQ, SITE_URL, SITES } from '@/lib/sites'

const faqSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOME_FAQ.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
}))

const hubSchema = computed(() => ([
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'sessea tools',
    url: `${SITE_URL}/`,
    description:
      'Private-by-default browser utilities: calculator, image tools, audio tools, and hardware tests.',
    publisher: {
      '@type': 'Organization',
      name: 'sessea',
      url: `${SITE_URL}/`,
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'sessea browser tools',
    itemListElement: SITES.map((site, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: site.seoTitle,
      url: site.href,
      description: site.seoDescription,
      item: {
        '@type': 'SoftwareApplication',
        name: site.title,
        url: site.href,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
    })),
  },
]))
</script>

<template>
  <div class="home">
    <JsonLd :data="hubSchema" />
    <JsonLd :data="faqSchema" />

    <section class="hero">
      <HeroSignal />

      <div class="hero-copy">
        <p class="brand-mark">sessea</p>
        <h1>Free private browser tools that stay on your machine.</h1>
        <p class="lede">
          Scientific calculator, image editor, audio editor, and hardware tests —
          no uploads, no accounts.
        </p>
        <div class="hero-cta">
          <a class="cta" href="#tools">Browse tools</a>
          <RouterLink class="cta ghost" to="/about">Why local</RouterLink>
        </div>
      </div>
    </section>

    <section id="tools" class="tools" aria-labelledby="tools-title">
      <div class="tools-head">
        <h2 id="tools-title">Four free utilities. One privacy promise.</h2>
        <p>
          Open a tool below. Files and media stay in your browser — we never host
          your uploads. Prefer reading first?
          <RouterLink to="/guides">Start with a guide</RouterLink>.
        </p>
      </div>

      <ol class="tool-index">
        <li v-for="(site, index) in SITES" :key="site.id">
          <a class="tool-row" :href="site.href" :title="site.seoTitle">
            <span class="tool-num">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="tool-main">
              <strong>{{ site.title }}</strong>
              <em>{{ site.seoDescription }}</em>
            </span>
            <span class="tool-host">{{ site.host }}</span>
            <span class="tool-go" aria-hidden="true">→</span>
          </a>
        </li>
      </ol>
    </section>

    <section class="seo-block" aria-labelledby="how-title">
      <h2 id="how-title">Built for everyday work, not cloud lock-in</h2>
      <p>
        sessea is a small set of browser utilities for students, makers, and anyone
        who wants a fast edit without creating an account. Convert or resize a photo,
        trim a voice note, run a scientific calculation, or check a mic before a call —
        then close the tab. In-memory media is discarded; only downloads you choose
        remain on your device.
      </p>
      <p>
        The hub at sessea.com points to focused apps on their own subdomains so each
        tool stays fast and clear. They share one idea: useful software that respects
        the machine it runs on. Advertising may appear to keep the tools free; file
        processing itself is designed to stay local. Read the
        <RouterLink to="/privacy">privacy policy</RouterLink>
        and
        <RouterLink to="/terms">terms</RouterLink>
        for the full picture.
      </p>
    </section>

    <section class="seo-block" aria-labelledby="guides-title">
      <h2 id="guides-title">Guides</h2>
      <p>Short articles if you want context before you open a tool.</p>
      <ul class="home-guides">
        <li v-for="guide in GUIDES" :key="guide.slug">
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
