import { createMemoryHistory } from 'vue-router'
import { renderToString } from 'vue/server-renderer'
import { createApp } from '@/app'
import { GUIDES } from '@/lib/guides'
import { renderHead, pageHead } from '@/lib/head'
import { TOOLS } from '@/lib/tools'

/** Every URL written to disk at build time. */
export const PAGES = [
  '/',
  '/guides',
  ...GUIDES.map((guide) => `/guides/${guide.slug}`),
  ...TOOLS.map((tool) => `/tools/${tool.id}`),
  '/about',
  '/privacy',
  '/terms',
  '/contact',
]

export { GUIDES, TOOLS }

export async function render(url) {
  const { app, router } = createApp({ history: createMemoryHistory() })
  await router.push(url)
  await router.isReady()
  const route = router.currentRoute.value
  const html = await renderToString(app)
  return { html, head: renderHead(pageHead(route)), routeName: route.name }
}
