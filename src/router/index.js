import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '',
    name: 'index',
    component: () => import('../views/IndexHome.vue')
  },
  {
    path: '/inde',
    name: 'indexHome',
    redirect: '/',
    component: () => import('../views/IndexHome.vue')
  },
  {
    path: '/itemMusic/:id',
    name: 'itemmusic',
    component: () => import('@/views/ItemMusic.vue')
    // path: '/about',
    // name: 'about',
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
