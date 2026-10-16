<script setup>
import { computed, ref, watch } from 'vue'
import AdUnit from '@/components/AdUnit.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import SiteNav from '@/components/SiteNav.vue'
import { loadTheme, saveTheme } from '@/lib/prefs'

const theme = ref(loadTheme())
const isDark = computed(() => theme.value === 'dark')

watch(theme, (value) => {
  saveTheme(value)
  document.documentElement.dataset.theme = value
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.content = value === 'dark' ? '#121614' : '#1a5c4a'
}, { immediate: true })

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="shell">
    <SiteNav :is-dark="isDark" @toggle-theme="toggleTheme" />
    <main class="main">
      <RouterView />
    </main>
    <div class="ad-band" aria-label="Advertisement">
      <AdUnit />
    </div>
    <SiteFooter />
  </div>
</template>
