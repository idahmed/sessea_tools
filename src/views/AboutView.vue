<script setup>
import { SITES } from '@/lib/sites'
</script>

<template>
  <article class="prose">
    <header class="prose-head">
      <p class="eyebrow">About</p>
      <h1>About sessea — private browser tools, built to stay local.</h1>
    </header>

    <div class="prose-body">
      <p>
        sessea is a small set of browser utilities for everyday tasks —
        calculating, editing images, shaping audio, and checking hardware —
        without creating an account or sending your files to a remote server.
      </p>
      <p>
        Each tool runs in the tab. Preferences may be saved in your browser’s
        local storage. Close the tab and the media is gone with it.
      </p>
      <p>
        The hub at tools.sessea.com points to four focused apps. They share the
        same idea: useful, quiet software that respects the machine it runs on.
      </p>

      <h2>What’s included</h2>
      <ul>
        <li v-for="site in SITES" :key="site.id">
          <a :href="site.href">{{ site.title }}</a>
          — {{ site.blurb }}
        </li>
      </ul>

      <h2>What we don’t do</h2>
      <p>
        We don’t ask you to sign up. We don’t host your uploads. We don’t build
        a profile from your edits. Advertising on the pages may still use
        third-party cookies — details live on the privacy page.
      </p>
    </div>
  </article>
</template>
