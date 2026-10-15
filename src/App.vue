<script setup>
import { computed, ref, watch } from 'vue'
import { loadTheme, saveTheme } from '@/lib/prefs'
import { SITES } from '@/lib/sites'

const theme = ref(loadTheme())
const isDark = computed(() => theme.value === 'dark')

watch(theme, (value) => {
  saveTheme(value)
  document.documentElement.dataset.theme = value
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.content = value === 'dark' ? '#141414' : '#1c1c1c'
}, { immediate: true })

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="page">
    <header class="brand">
      <button
        type="button"
        class="theme-toggle"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        @click="toggleTheme"
      >
        <svg v-if="isDark" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4" fill="currentColor" />
          <path
            d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            fill="none"
          />
        </svg>
        <svg v-else viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 7 7 0 1 0 20.5 14.5Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <h1>sessea</h1>
      <p>Browser tools. Nothing uploaded.</p>
    </header>

    <section class="grid" aria-label="Tools">
      <a
        v-for="site in SITES"
        :key="site.id"
        class="tool"
        :href="site.href"
      >
        <strong>{{ site.title }}</strong>
        <span>{{ site.blurb }}</span>
      </a>
    </section>
  </div>
</template>
