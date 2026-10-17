<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

defineProps({
  isDark: { type: Boolean, default: false },
})

defineEmits(['toggle-theme'])

const route = useRoute()

const links = [
  { to: '/', label: 'Tools', exact: true },
  { to: '/guides', label: 'Guides' },
  { to: '/about', label: 'About' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
  { to: '/contact', label: 'Contact' },
]

function isActive(link) {
  if (link.exact) return route.path === link.to
  return route.path.startsWith(link.to)
}

const onHome = computed(() => route.path === '/')
</script>

<template>
  <header class="nav" :class="{ 'nav-home': onHome }">
    <RouterLink class="nav-brand" to="/">sessea</RouterLink>

    <nav class="nav-links" aria-label="Site">
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="nav-link"
        :class="{ active: isActive(link) }"
      >
        {{ link.label }}
      </RouterLink>
    </nav>

    <button
      type="button"
      class="theme-toggle"
      :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      @click="$emit('toggle-theme')"
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
  </header>
</template>
