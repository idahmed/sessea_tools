import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { prerender } from './scripts/prerender-plugin.js'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    vue(),
    !isSsrBuild && prerender(),
    !isSsrBuild &&
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'ads.txt', 'robots.txt'],
        manifest: {
          name: 'sessea tools',
          short_name: 'sessea',
          description: 'Private browser utilities: calculator, image, audio and hardware tests.',
          theme_color: '#1a5c4a',
          background_color: '#eef2f0',
          display: 'standalone',
          start_url: '/',
          lang: 'en',
          icons: [
            {
              src: '/favicon.svg',
              sizes: 'any',
              type: 'image/svg+xml',
              purpose: 'any maskable',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,svg,woff,woff2,ico,txt,xml}'],
          // Each page is its own prerendered file, so never answer a navigation
          // with index.html (that would show the home page for every URL).
          navigateFallback: null,
        },
      }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
