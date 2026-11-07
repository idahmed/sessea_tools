<script setup>
import { GUIDES } from '@/lib/guides'
import { TOOLS } from '@/lib/tools'
</script>

<template>
  <article class="prose">
    <header class="prose-head">
      <p class="eyebrow">404</p>
      <h1>This page does not exist</h1>
      <p class="lede">
        The link may be old or mistyped. Here is what you can find on sessea.com.
      </p>
    </header>

    <div class="prose-body">
      <section>
        <h2>Tools</h2>
        <ul>
          <li v-for="tool in TOOLS" :key="tool.id">
            <RouterLink :to="`/tools/${tool.id}`">{{ tool.title }}</RouterLink>
          </li>
        </ul>
      </section>
      <section>
        <h2>Recent guides</h2>
        <ul>
          <li v-for="guide in GUIDES.slice(0, 5)" :key="guide.slug">
            <RouterLink :to="`/guides/${guide.slug}`">{{ guide.title }}</RouterLink>
          </li>
        </ul>
        <p><RouterLink to="/">Back to the home page</RouterLink></p>
      </section>
    </div>
  </article>
</template>
