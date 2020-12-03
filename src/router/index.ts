import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../views/Layout/index.vue'
import store from '../store/index'

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
        path: '/createPost',
        name: 'CreatePost',
        component: () => import(/* webpackChunkName: "column" */ '@/views/SpecialColumn/create-post.vue'),
        meta: {
          requiredLogin: true
        }
      }
    ]
  },
  {
    path: '/column/:id',
    name: 'ColumnDetail',
    component: () => import(/* webpackChunkName: "column" */ '@/views/SpecialColumn/detail.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "user" */ '@/views/Login.vue'),
    meta:{
      title: '用户登录',
      redirectAlreadyLogin: true
    }
  },
  {
    path: '/sign',
    name: 'Sign',
    meta: {
      title: '用户注册'
    },
    component: () => import(/* webpackChunkName: "user" */ '@/views/Sign.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => (({ top: 0, left: 0 })),
})
router.beforeEach((to, from, next)=>{
  if(!store.state.user.isLogin && to.meta.requiredLogin){
    next({ name: 'Login' })
  }else if(to.meta.redirectAlreadyLogin && store.state.user.isLogin){
    next({ name: '/' })
  }else{
    next()
  }
  document.title = to.meta?.title || '无乎'
})
export default router
