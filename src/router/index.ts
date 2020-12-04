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
  const { requiredLogin ,redirectAlreadyLogin } = to.meta
  const isLogin = store.state.user.isLogin
  const token = localStorage.getItem('token')
  /**
   * 1,没有登录：
   *   a: 如有token，去获取用户信息。如token过期 清空token信息，并跳转登录页
   *   b: 没有token，并且该路由需要登录，则跳转到登录页
   * 2，已登录，并且redirectAlreadyLogin 为true，跳转首页
  */
  if(!isLogin){
    if(token){
      store.dispatch('fetchCurrentUser').then(()=>{
        next()
      }).catch(e=>{
        console.error(e)
        store.commit('logout')
        next('login')
      })
    }else if(requiredLogin){
      next('login')
    }else{
      next()
    }
  }else if(isLogin && redirectAlreadyLogin){
    next('/')
  }else{
    next()
  }
  document.title = to.meta?.title || '无乎'
})
export default router
