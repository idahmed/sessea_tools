import { createApp as createClientApp, createSSRApp } from 'vue'
import App from '@/App.vue'
import { createAppRouter } from '@/router'

/**
 * Shared factory for the browser and the build-time prerender.
 * `hydrate` reuses prerendered HTML instead of rendering from scratch.
 */
export function createApp({ history, hydrate = true }) {
  const app = hydrate ? createSSRApp(App) : createClientApp(App)
  const router = createAppRouter(history)
  app.use(router)
  return { app, router }
}
