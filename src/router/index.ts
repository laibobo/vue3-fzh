import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../views/Layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/column/:id',
        name: 'ColumnDetail',
        component: () => import(/* webpackChunkName: "column" */ '@/views/SpecialColumn/detail.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
    meta:{
      title: '用户登录'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to,from,next)=>{
  document.title = to.meta?.title || '无乎'
  next()
})
export default router
