import IndexPage from '../pages/IndexPage.vue'
const routes = [
  {
    path: '/',
    component: IndexPage,
    name: IndexPage

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
