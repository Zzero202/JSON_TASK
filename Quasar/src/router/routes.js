import IndexPage from '../pages/IndexPage.vue'
import DetailsPage from '../pages/DetailsPage.vue'
const routes = [
  {
    path: '/',
    // name:'IndexPage',
    component: IndexPage
  },
  {
    redirect: '/',
    path: '/products',
    // name:'IndexPage',
    component: IndexPage

  },
  {
    path: '/products/:id',
    component: DetailsPage,
    name:'DetailsPage',
    props: true
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
