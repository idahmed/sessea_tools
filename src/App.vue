<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import SiteFooter from '@/components/SiteFooter.vue'
import SiteNav from '@/components/SiteNav.vue'
import { loadTheme, saveTheme } from '@/lib/prefs'

// The prerendered HTML is built with the light theme. The inline script in
// index.html sets the real theme before paint, and we pick it up after hydration.
const theme = ref('light')
const isDark = computed(() => theme.value === 'dark')

onMounted(() => {
  theme.value = document.documentElement.dataset.theme || loadTheme()
  watch(theme, (value) => {
    saveTheme(value)
    document.documentElement.dataset.theme = value
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.content = value === 'dark' ? '#121614' : '#1a5c4a'
  }, { immediate: true })
})

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="shell">
    <a class="skip-link" href="#main">Skip to content</a>
    <SiteNav :is-dark="isDark" @toggle-theme="toggleTheme" />
    <main id="main" class="main">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>
