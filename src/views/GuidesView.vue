<script setup>
import { computed } from 'vue'
import { GUIDES, formatDate } from '@/lib/guides'

const topics = computed(() => {
  const groups = new Map()
  for (const guide of GUIDES) {
    if (!groups.has(guide.topic)) groups.set(guide.topic, [])
    groups.get(guide.topic).push(guide)
  }
  return [...groups.entries()].map(([topic, guides]) => ({ topic, guides }))
})
</script>

<template>
  <article class="prose">
    <header class="prose-head">
      <p class="eyebrow">Guides</p>
      <h1>Guides for images, audio, devices and calculations</h1>
      <p class="lede">
        Practical articles written around the sessea tools: how image and audio
        formats behave, how to fix common device problems, and how to get correct
        answers out of a scientific calculator.
      </p>
    </header>

    <div class="prose-body">
      <section v-for="group in topics" :key="group.topic">
        <h2>{{ group.topic }}</h2>
        <ul class="guide-index">
          <li v-for="guide in group.guides" :key="guide.slug">
            <RouterLink :to="`/guides/${guide.slug}`">
              <strong>{{ guide.title }}</strong>
              <span>{{ guide.description }}</span>
              <small>{{ formatDate(guide.updated) }} · {{ guide.readMinutes }} min read</small>
            </RouterLink>
          </li>
        </ul>
      </section>
    </div>
  </article>
</template>
