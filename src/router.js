import { createRouter, createWebHistory } from 'vue-router'
import { useSeo } from '@/composables/useSeo'
import { getGuide } from '@/lib/guides'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import GuideView from '@/views/GuideView.vue'
import GuidesView from '@/views/GuidesView.vue'
import HomeView from '@/views/HomeView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import TermsView from '@/views/TermsView.vue'

const { setPageSeo } = useSeo()

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'sessea tools — free private browser utilities',
      description:
        'Free private browser tools by sessea: scientific calculator, image editor, audio editor, and hardware tests. No uploads, no accounts.',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'About sessea tools — private-by-default utilities',
      description:
        'Learn why sessea builds private-by-default browser tools with local processing, no uploads, and no accounts.',
    },
  },
  {
    path: '/guides',
    name: 'guides',
    component: GuidesView,
    meta: {
      title: 'Guides — sessea private browser tools',
      description:
        'Guides for local image and audio edits, hardware tests, and privacy-minded browser tools from sessea.',
    },
  },
  {
    path: '/guides/:slug',
    name: 'guide',
    component: GuideView,
    meta: {
      title: 'Guide — sessea tools',
      description: 'Practical guide from sessea tools.',
    },
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyView,
    meta: {
      title: 'Privacy Policy — sessea tools',
      description:
        'Privacy policy for sessea tools. Local browser processing, no user accounts, and how Google AdSense partners may use cookies.',
    },
  },
  {
    path: '/terms',
    name: 'terms',
    component: TermsView,
    meta: {
      title: 'Terms of Service — sessea tools',
      description:
        'Terms of Service for sessea.com and related calculator, image, audio, and hardware tools.',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      title: 'Contact sessea tools — feedback & support',
      description:
        'Contact sessea or send feedback about the calculator, image tools, audio tools, or hardware tests.',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  if (to.name === 'guide') {
    const guide = getGuide(to.params.slug)
    setPageSeo({
      title: guide ? `${guide.title} — sessea` : 'Guide not found — sessea',
      description: guide?.description || 'Guide from sessea tools.',
      path: to.path,
    })
    return
  }

  setPageSeo({
    title: to.meta.title || 'sessea tools',
    description:
      to.meta.description ||
      'Free private browser tools by sessea — calculator, image, audio, hardware.',
    path: to.path,
  })
})

export default router
