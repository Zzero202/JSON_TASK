import { createRouter, createWebHistory } from 'vue-router'
import Posts from '../views/Posts.vue'
import PostDetails from '../views/PostDetails.vue'
import notfound from '../views/notfound.vue'

const routes = [
  {
    redirect: '/',
    path: '/posts',
    component:Posts
     
  },
  {
    path: '/',
    name: 'Posts',
    component:Posts
     
  },
  {
    path: '/posts/:id',
    name: 'PostDetails',
    component:PostDetails,
    props:true
    },
  {
    path:'/:catchAll(.*)',
    name: 'notfound',
    component: notfound
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
