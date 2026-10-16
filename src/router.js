import { createRouter, createWebHistory } from 'vue-router'
import { useSeo } from '@/composables/useSeo'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import HomeView from '@/views/HomeView.vue'
import PrivacyView from '@/views/PrivacyView.vue'

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
  setPageSeo({
    title: to.meta.title || 'sessea tools',
    description:
      to.meta.description ||
      'Free private browser tools by sessea — calculator, image, audio, hardware.',
    path: to.path,
  })
})

export default router
