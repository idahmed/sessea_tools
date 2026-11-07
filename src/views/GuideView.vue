<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ContentBlocks from '@/components/ContentBlocks.vue'
import { formatDate, getGuide, relatedGuides } from '@/lib/guides'
import { getTool } from '@/lib/tools'

const route = useRoute()
const guide = computed(() => getGuide(route.params.slug))
const tools = computed(() => (guide.value.tools || []).map(getTool).filter(Boolean))
const others = computed(() => relatedGuides(guide.value, 4))
</script>

<template>
  <article class="prose">
    <header class="prose-head">
      <p class="eyebrow">
        <RouterLink to="/guides">Guides</RouterLink> · {{ guide.topic }}
      </p>
      <h1>{{ guide.title }}</h1>
      <p class="lede">{{ guide.description }}</p>
      <p class="byline">
        Published <time :datetime="guide.published">{{ formatDate(guide.published) }}</time>
        <template v-if="guide.updated !== guide.published">
          · updated <time :datetime="guide.updated">{{ formatDate(guide.updated) }}</time>
        </template>
        · {{ guide.readMinutes }} min read
      </p>
    </header>

    <div class="prose-body">
      <nav v-if="guide.sections.length > 3" class="toc" aria-label="On this page">
        <p class="toc-title">On this page</p>
        <ol>
          <li v-for="section in guide.sections" :key="section.id">
            <a :href="`#${section.id}`">{{ section.heading }}</a>
          </li>
        </ol>
      </nav>

      <section v-for="section in guide.sections" :id="section.id" :key="section.id">
        <h2>{{ section.heading }}</h2>
        <ContentBlocks :blocks="section.blocks" />
      </section>

      <section v-if="tools.length">
        <h2>Tools used in this guide</h2>
        <ul>
          <li v-for="tool in tools" :key="tool.id">
            <RouterLink :to="`/tools/${tool.id}`">{{ tool.title }}</RouterLink>
            ({{ tool.blurb }}) · open it at
            <a :href="tool.href">{{ tool.host }}</a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Related guides</h2>
        <ul>
          <li v-for="item in others" :key="item.slug">
            <RouterLink :to="`/guides/${item.slug}`">{{ item.title }}</RouterLink>
          </li>
        </ul>
        <p>
          Found a mistake in this guide?
          <RouterLink to="/contact">Tell us</RouterLink> and we will correct it.
        </p>
      </section>
    </div>
  </article>
</template>
