import { GUIDES, getGuide } from '@/lib/guides'
import { HOME_FAQ, SITE_NAME, SITE_URL } from '@/lib/sites'
import { TOOLS, getTool } from '@/lib/tools'

const ORGANIZATION = {
  '@type': 'Organization',
  name: 'sessea',
  url: `${SITE_URL}/`,
  founder: { '@type': 'Person', name: 'Yassine' },
  sameAs: TOOLS.map((tool) => tool.href),
}

const STATIC_PAGES = {
  home: {
    title: 'sessea tools: free private browser utilities',
    description:
      'Free browser tools by sessea: scientific calculator, unit converter, image and audio editors, hardware tests and a typing test. Files stay on your device, with no account.',
  },
  about: {
    title: 'About sessea tools',
    description:
      'sessea is built by Yassine, an independent developer. How the tools process files on your device, how guides are written, and how the site is funded.',
  },
  guides: {
    title: 'Guides: images, audio, devices, units, typing and calculations',
    description:
      'Practical guides on image formats, audio editing, device troubleshooting, unit conversions, typing speed and calculator use, written around the sessea browser tools.',
  },
  privacy: {
    title: 'Privacy policy | sessea tools',
    description:
      'What sessea collects (nothing tied to an account), how local processing works, and how Google AdSense uses cookies on this site.',
  },
  terms: {
    title: 'Terms of service | sessea tools',
    description: 'Terms of service for sessea.com and the related calculator, unit converter, image, audio, hardware test and typing test apps.',
  },
  contact: {
    title: 'Contact sessea tools',
    description: 'Send feedback, bug reports or privacy questions about the sessea browser tools.',
  },
  'not-found': {
    title: 'Page not found | sessea tools',
    description: 'This page does not exist on sessea.com.',
  },
}

function canonicalPath(path) {
  if (path === '/' || !path) return '/'
  return path.replace(/\/+$/, '')
}

function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

/** Head data for a resolved route: used by the prerender and by client navigation. */
export function pageHead(route) {
  const path = canonicalPath(route.path)

  if (route.name === 'guide') {
    const guide = getGuide(route.params.slug)
    return {
      title: `${guide.title} | sessea`,
      description: guide.description,
      path,
      type: 'article',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: guide.title,
          description: guide.description,
          datePublished: guide.published,
          dateModified: guide.updated,
          mainEntityOfPage: `${SITE_URL}${path}`,
          author: ORGANIZATION,
          publisher: ORGANIZATION,
          inLanguage: 'en',
        },
        breadcrumb([
          { name: 'Home', path: '/' },
          { name: 'Guides', path: '/guides' },
          { name: guide.title, path },
        ]),
      ],
    }
  }

  if (route.name === 'tool') {
    const tool = getTool(route.params.id)
    return {
      title: `${tool.seoTitle} | sessea`,
      description: tool.seoDescription,
      path,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: tool.title,
          url: tool.href,
          description: tool.seoDescription,
          applicationCategory: tool.category,
          operatingSystem: 'Any (modern web browser)',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          publisher: ORGANIZATION,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: tool.faq.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        },
        breadcrumb([
          { name: 'Home', path: '/' },
          { name: tool.title, path },
        ]),
      ],
    }
  }

  const page = STATIC_PAGES[route.name] || STATIC_PAGES['not-found']
  const head = { ...page, path }

  if (route.name === 'not-found') {
    head.robots = 'noindex, follow'
    head.path = null
  }

  if (route.name === 'home') {
    head.jsonLd = [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        inLanguage: 'en',
        publisher: ORGANIZATION,
      },
      { '@context': 'https://schema.org', ...ORGANIZATION },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: HOME_FAQ.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ]
  }

  if (route.name === 'guides') {
    head.jsonLd = [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: page.title,
        url: `${SITE_URL}/guides`,
        hasPart: GUIDES.map((guide) => ({
          '@type': 'Article',
          headline: guide.title,
          url: `${SITE_URL}/guides/${guide.slug}`,
        })),
      },
    ]
  }

  return head
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/** JSON inside <script> must not be able to close the tag. */
function safeJson(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}

/** Tag list shared by the HTML string renderer and the DOM updater. */
export function headTags(head) {
  const url = head.path ? `${SITE_URL}${head.path}` : null
  const tags = [
    { tag: 'meta', attrs: { name: 'description', content: head.description } },
    { tag: 'meta', attrs: { name: 'robots', content: head.robots || 'index, follow, max-image-preview:large' } },
    { tag: 'meta', attrs: { property: 'og:type', content: head.type || 'website' } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: SITE_NAME } },
    { tag: 'meta', attrs: { property: 'og:title', content: head.title } },
    { tag: 'meta', attrs: { property: 'og:description', content: head.description } },
    { tag: 'meta', attrs: { property: 'og:locale', content: 'en_US' } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary' } },
    { tag: 'meta', attrs: { name: 'twitter:title', content: head.title } },
    { tag: 'meta', attrs: { name: 'twitter:description', content: head.description } },
  ]
  if (url) {
    tags.push({ tag: 'link', attrs: { rel: 'canonical', href: url } })
    tags.push({ tag: 'meta', attrs: { property: 'og:url', content: url } })
  }
  for (const data of head.jsonLd || []) {
    tags.push({ tag: 'script', attrs: { type: 'application/ld+json' }, json: data })
  }
  return tags
}

export function renderHead(head) {
  const lines = [`<title>${escapeHtml(head.title)}</title>`]
  for (const { tag, attrs, json } of headTags(head)) {
    const attrText = Object.entries(attrs)
      .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
      .join(' ')
    if (tag === 'script') {
      lines.push(`<script ${attrText} data-head>${safeJson(json)}</script>`)
    } else {
      lines.push(`<${tag} ${attrText} data-head>`)
    }
  }
  return lines.join('\n    ')
}

/** Replace the head tags written by the prerender (or a previous navigation). */
export function applyHead(head) {
  document.title = head.title
  for (const el of document.head.querySelectorAll('[data-head]')) el.remove()
  for (const { tag, attrs, json } of headTags(head)) {
    const el = document.createElement(tag)
    for (const [key, value] of Object.entries(attrs)) el.setAttribute(key, value)
    if (json) el.textContent = JSON.stringify(json)
    el.setAttribute('data-head', '')
    document.head.appendChild(el)
  }
}
