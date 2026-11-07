import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const SITE_URL = 'https://sessea.com'

function fileNameFor(url) {
  if (url === '/') return 'index.html'
  return `${url.replace(/^\//, '')}.html`
}

function sitemap(pages, lastmodByUrl) {
  const entries = pages.map((url) => {
    const loc = `${SITE_URL}${url === '/' ? '/' : url}`
    const lastmod = lastmodByUrl[url] ? `\n    <lastmod>${lastmodByUrl[url]}</lastmod>` : ''
    return `  <url>\n    <loc>${loc}</loc>${lastmod}\n  </url>`
  })
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`
}

/**
 * Renders every route to its own HTML file during the client build.
 * Runs in generateBundle so the PWA plugin (closeBundle) precaches the output.
 * Needs `vite build --ssr src/entry-server.js --outDir dist-ssr` to run first.
 */
export function prerender({ ssrEntry = 'dist-ssr/entry-server.js' } = {}) {
  return {
    name: 'sessea-prerender',
    apply: 'build',
    enforce: 'post',
    async generateBundle(_options, bundle) {
      const indexAsset = bundle['index.html']
      if (!indexAsset) return
      const template = String(indexAsset.source)
      if (!template.includes('<!--app-html-->') || !template.includes('<!--app-head-->')) {
        this.error('index.html must contain <!--app-head--> and <!--app-html--> placeholders')
      }

      const server = await import(pathToFileURL(resolve(ssrEntry)).href)
      const fill = ({ html, head }) =>
        template.replace('<!--app-head-->', head).replace('<!--app-html-->', html)

      for (const url of server.PAGES) {
        const result = await server.render(url)
        if (result.routeName === 'not-found') this.error(`Prerender: ${url} resolved to the 404 page`)
        const fileName = fileNameFor(url)
        if (fileName === 'index.html') {
          indexAsset.source = fill(result)
        } else {
          this.emitFile({ type: 'asset', fileName, source: fill(result) })
        }
      }

      const missing = await server.render('/__sessea-not-found__')
      this.emitFile({ type: 'asset', fileName: '404.html', source: fill(missing) })

      const lastmod = {}
      for (const guide of server.GUIDES) lastmod[`/guides/${guide.slug}`] = guide.updated
      for (const tool of server.TOOLS) lastmod[`/tools/${tool.id}`] = tool.updated
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap(server.PAGES, lastmod) })
    },
  }
}
