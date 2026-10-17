<script setup>
import { GUIDES } from '@/lib/guides'
</script>

<template>
  <article class="prose">
    <header class="prose-head">
      <p class="eyebrow">Guides</p>
      <h1>Guides for private browser tools</h1>
      <p class="lede">
        Practical articles on local image and audio edits, hardware checks, and
        why sessea keeps everyday work on your device.
      </p>
    </header>

    <div class="prose-body">
      <ul class="guide-index">
        <li v-for="guide in GUIDES" :key="guide.slug">
          <RouterLink :to="`/guides/${guide.slug}`">
            <strong>{{ guide.title }}</strong>
            <span>{{ guide.description }}</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </article>
</template>
