<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getGuide, GUIDES } from '@/lib/guides'

const route = useRoute()
const guide = computed(() => getGuide(route.params.slug))
const others = computed(() =>
  GUIDES.filter((item) => item.slug !== route.params.slug).slice(0, 3),
)
</script>

<template>
  <article v-if="guide" class="prose">
    <header class="prose-head">
      <p class="eyebrow">Guide</p>
      <h1>{{ guide.title }}</h1>
      <p class="lede">Updated {{ guide.updated }}</p>
    </header>

    <div class="prose-body">
      <section v-for="section in guide.sections" :key="section.heading">
        <h2>{{ section.heading }}</h2>
        <p v-for="(paragraph, index) in section.paragraphs" :key="index">
          {{ paragraph }}
        </p>
      </section>

      <section>
        <h2>More guides</h2>
        <ul>
          <li v-for="item in others" :key="item.slug">
            <RouterLink :to="`/guides/${item.slug}`">{{ item.title }}</RouterLink>
          </li>
        </ul>
        <p>
          <RouterLink to="/guides">All guides</RouterLink>
          ·
          <RouterLink to="/privacy">Privacy</RouterLink>
          ·
          <RouterLink to="/contact">Contact</RouterLink>
        </p>
      </section>
    </div>
  </article>

  <article v-else class="prose">
    <header class="prose-head">
      <h1>Guide not found</h1>
    </header>
    <div class="prose-body">
      <p>
        That article does not exist.
        <RouterLink to="/guides">Back to guides</RouterLink>.
      </p>
    </div>
  </article>
</template>
