<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ContentBlocks from '@/components/ContentBlocks.vue'
import { GUIDES } from '@/lib/guides'
import { getTool } from '@/lib/tools'

const route = useRoute()
const tool = computed(() => getTool(route.params.id))
const guides = computed(() => GUIDES.filter((guide) => (guide.tools || []).includes(tool.value.id)))
</script>

<template>
  <article class="prose">
    <header class="prose-head">
      <p class="eyebrow">Tool · {{ tool.host }}</p>
      <h1>{{ tool.headline }}</h1>
      <p class="lede">{{ tool.lede }}</p>
      <p class="tool-open">
        <a class="cta" :href="tool.href">Open {{ tool.title.toLowerCase() }}</a>
        <span>Free, no account, runs in your browser.</span>
      </p>
    </header>

    <div class="prose-body">
      <section v-for="section in tool.sections" :id="section.id" :key="section.id">
        <h2>{{ section.heading }}</h2>
        <ContentBlocks :blocks="section.blocks" />
      </section>

      <section id="faq">
        <h2>Questions about the {{ tool.title.toLowerCase() }}</h2>
        <dl class="faq">
          <template v-for="item in tool.faq" :key="item.q">
            <dt>{{ item.q }}</dt>
            <dd>{{ item.a }}</dd>
          </template>
        </dl>
      </section>

      <section v-if="guides.length">
        <h2>Guides for this tool</h2>
        <ul>
          <li v-for="guide in guides" :key="guide.slug">
            <RouterLink :to="`/guides/${guide.slug}`">{{ guide.title }}</RouterLink>
          </li>
        </ul>
      </section>
    </div>
  </article>
</template>
