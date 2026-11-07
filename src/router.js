import { createRouter } from 'vue-router'
import { getGuide } from '@/lib/guides'
import { getTool } from '@/lib/tools'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import GuideView from '@/views/GuideView.vue'
import GuidesView from '@/views/GuidesView.vue'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import TermsView from '@/views/TermsView.vue'
import ToolView from '@/views/ToolView.vue'

/** Unknown slugs go to the 404 view instead of rendering an empty page. */
function notFound(to) {
  return {
    name: 'not-found',
    params: { pathMatch: to.path.substring(1).split('/') },
    query: to.query,
    hash: to.hash,
  }
}

export const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/guides', name: 'guides', component: GuidesView },
  {
    path: '/guides/:slug',
    name: 'guide',
    component: GuideView,
    beforeEnter: (to) => (getGuide(to.params.slug) ? true : notFound(to)),
  },
  {
    path: '/tools/:id',
    name: 'tool',
    component: ToolView,
    beforeEnter: (to) => (getTool(to.params.id) ? true : notFound(to)),
  },
  { path: '/privacy', name: 'privacy', component: PrivacyView },
  { path: '/terms', name: 'terms', component: TermsView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView },
]

export function createAppRouter(history) {
  return createRouter({
    history,
    routes,
    scrollBehavior(to) {
      if (to.hash) return { el: to.hash }
      return { top: 0 }
    },
  })
}
