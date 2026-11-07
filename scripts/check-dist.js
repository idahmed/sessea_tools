// Sanity checks on the prerendered build. Run after `npm run build`: `npm run check`.
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const DIST = 'dist'
const SITE = 'https://sessea.com'
const MIN_WORDS = 250

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return htmlFiles(path)
    return name.endsWith('.html') ? [path] : []
  })
}

function urlFor(file) {
  const rel = relative(DIST, file).replace(/\\/g, '/')
  if (rel === 'index.html') return `${SITE}/`
  return `${SITE}/${rel.replace(/\.html$/, '')}`
}

function visibleWords(html) {
  const body = html.split('<div id="app">')[1] || ''
  return body
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ')
    .split(/\s+/)
    .filter((word) => /[a-z0-9]/i.test(word)).length
}

const errors = []
const titles = new Map()
const descriptions = new Map()
const sitemap = readFileSync(join(DIST, 'sitemap.xml'), 'utf8')
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
const rows = []

for (const file of htmlFiles(DIST)) {
  const html = readFileSync(file, 'utf8')
  const url = urlFor(file)
  const is404 = file.endsWith('404.html')
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1]
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]
  const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1]
  const robots = html.match(/<meta name="robots" content="([^"]*)"/)?.[1]
  const words = visibleWords(html)
  const h1s = (html.match(/<h1[\s>]/g) || []).length
  rows.push({ url: url.replace(SITE, '') || '/', words, title })

  if (!title) errors.push(`${file}: missing <title>`)
  if (!description) errors.push(`${file}: missing meta description`)
  if (h1s !== 1) errors.push(`${file}: expected 1 <h1>, found ${h1s}`)
  if (!html.includes('data-server-rendered') && !html.includes('<div id="app"><')) {
    errors.push(`${file}: app HTML is empty`)
  }
  if ((html.match(/<link rel="canonical"/g) || []).length > 1) errors.push(`${file}: several canonical tags`)

  if (is404) {
    if (canonical) errors.push(`${file}: 404 page must not have a canonical`)
    if (!robots?.includes('noindex')) errors.push(`${file}: 404 page must be noindex`)
    continue
  }

  if (canonical !== url) errors.push(`${file}: canonical ${canonical} should be ${url}`)
  if (!sitemapUrls.includes(url)) errors.push(`${file}: ${url} missing from sitemap.xml`)
  if (titles.has(title)) errors.push(`${file}: duplicate title with ${titles.get(title)}`)
  if (descriptions.has(description)) errors.push(`${file}: duplicate description with ${descriptions.get(description)}`)
  titles.set(title, file)
  descriptions.set(description, file)

  const legal = /\/(privacy|terms|contact)$/.test(url)
  if (!legal && words < MIN_WORDS) errors.push(`${file}: only ${words} words of content`)

  for (const match of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(match[1])
    } catch {
      errors.push(`${file}: invalid JSON-LD`)
    }
  }
}

for (const url of sitemapUrls) {
  if (!rows.some((row) => `${SITE}${row.url === '/' ? '/' : row.url}` === url)) {
    errors.push(`sitemap.xml lists ${url} but no file exists`)
  }
}

console.table(rows.sort((a, b) => a.url.localeCompare(b.url)))
console.log(`Total words across pages: ${rows.reduce((sum, row) => sum + row.words, 0)}`)

if (errors.length) {
  console.error(`\n${errors.length} problem(s):\n- ${errors.join('\n- ')}`)
  process.exit(1)
}
console.log('All prerender checks passed.')
