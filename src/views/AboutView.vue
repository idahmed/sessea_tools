<script setup>
import { SITES } from '@/lib/sites'
</script>

<template>
  <article class="prose">
    <header class="prose-head">
      <p class="eyebrow">About</p>
      <h1>About sessea — private browser tools, built to stay local.</h1>
      <p class="lede">
        A small toolkit for calculating, editing media, and checking devices —
        without accounts or mandatory uploads.
      </p>
    </header>

    <div class="prose-body">
      <section>
        <h2>Who we are</h2>
        <p>
          sessea builds focused browser utilities for everyday tasks. The hub at
          <a href="https://sessea.com">sessea.com</a>
          links four apps: a scientific calculator, image tools, audio tools, and
          hardware tests. Each app is meant to open quickly, do one job well, and
          leave your files on your machine whenever the browser APIs allow it.
        </p>
        <p>
          We are not a social network and we do not sell user accounts. The product
          is the tools themselves — quiet software for students, creators, and
          anyone who wants a fast edit or device check without signing up.
        </p>
      </section>

      <section>
        <h2>How the tools work</h2>
        <p>
          Most processing happens in your tab with standard web platform features.
          Images and audio you select are read locally. Microphone and camera tests
          use permissions you grant in the browser, then preview streams in the page.
          Calculator history and light preferences may be stored in localStorage on
          your device so the next visit feels familiar.
        </p>
        <p>
          Close a tab and in-memory media goes with it. Downloads only appear where
          you choose to save them. That model is the core of the sessea privacy
          promise; details live in the
          <RouterLink to="/privacy">Privacy Policy</RouterLink>.
        </p>
      </section>

      <section>
        <h2>What’s included</h2>
        <ul>
          <li v-for="site in SITES" :key="site.id">
            <a :href="site.href">{{ site.title }}</a>
            — {{ site.blurb }}
          </li>
        </ul>
        <p>
          Prefer step-by-step reading first?
          <RouterLink to="/guides">Browse the guides</RouterLink>
          for local editing and hardware checklists.
        </p>
      </section>

      <section>
        <h2>What we don’t do</h2>
        <p>
          We don’t require registration. We don’t host your project uploads as a
          cloud drive. We don’t build an editing profile from your files. Pages may
          still show third-party ads; advertising cookies are explained on the
          privacy page and are separate from local file processing.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Feedback and support:
          <RouterLink to="/contact">contact sessea</RouterLink>.
          Legal pages:
          <RouterLink to="/privacy">Privacy</RouterLink>
          ·
          <RouterLink to="/terms">Terms</RouterLink>.
        </p>
      </section>
    </div>
  </article>
</template>
