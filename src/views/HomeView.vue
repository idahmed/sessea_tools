<script setup>
import { computed } from 'vue'
import HeroSignal from '@/components/HeroSignal.vue'
import JsonLd from '@/components/JsonLd.vue'
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
          your uploads.
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

    <section class="seo-block" aria-labelledby="faq-title">
      <h2 id="faq-title">Common questions</h2>
      <dl class="faq">
        <template v-for="item in HOME_FAQ" :key="item.q">
          <dt>{{ item.q }}</dt>
          <dd>{{ item.a }}</dd>
        </template>
      </dl>
    </section>

    <section class="strip" aria-label="Privacy note">
      <p>
        No accounts. No uploads to our servers.
        <RouterLink to="/privacy">Read the privacy policy</RouterLink>
        ·
        <RouterLink to="/contact">Contact</RouterLink>
      </p>
    </section>
  </div>
</template>
