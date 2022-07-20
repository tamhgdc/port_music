import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { // 主页
    path: '',
    name: 'Index',
    component: () => import('../views/IndexHome.vue')
  },
  { // 主页发现
    path: '/index',
    name: 'IndexHome',
    redirect: '/',
    component: () => import('../views/IndexHome.vue')
  },
  {
    path: '/itemMusic/:id',
    name: 'Itemmusic',
    component: () => import('@/views/ItemMusic.vue')
    // path: '/about',
    // name: 'about',
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/SearchMusic.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/UserIndex.vue')

  },
  {
    path: '/recmdmusic',
    name: 'Recmdmusic',
    component: () => import('@/views/RecmdMc')

  },
  {
    path: '/privfm',
    name: 'Privatefm',
    component: () => import('@/components/home/privFM/PrivateFM')

  },
  {
    path: '/groundlist',
    name: 'Groundlist',
    component: () => import('@/views/GroundList.vue')

  },
  {
    path: '/toplist',
    name: 'Toplist',
    component: () => import('@/views/TopList.vue')

  },
  {
    path: '/singer/:id',
    name: 'Singer',
    component: () => import('@/views/SingerIndex')

  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
