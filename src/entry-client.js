import '@fontsource/syne/600.css'
import '@fontsource/syne/700.css'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import { createWebHistory } from 'vue-router'
import { createApp } from '@/app'
import { applyHead, pageHead } from '@/lib/head'
import '@/style.css'

const root = document.getElementById('app')
// Production pages are prerendered, so hydrate them. The dev server serves an empty shell.
const hydrate = root.firstElementChild !== null
const { app, router } = createApp({ history: createWebHistory(), hydrate })

let firstNavigation = true
router.afterEach((to) => {
  // The prerendered HTML already carries the right head for the first page.
  if (firstNavigation && hydrate) {
    firstNavigation = false
    return
  }
  firstNavigation = false
  applyHead(pageHead(to))
})

router.isReady().then(() => app.mount(root))
