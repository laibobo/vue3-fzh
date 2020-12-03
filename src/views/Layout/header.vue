<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">无乎</router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-4 mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">首页</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="#">会员</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="#" tabindex="-1">发现</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="#" tabindex="-1">等你来答</router-link>
          </li>
        </ul>
        <form class="d-flex mr-auto">
          <input class="form-control mr-2" type="search" placeholder="search" aria-label="search" icon>
        </form>
        <div class="d-flex">
          <div v-if="!user.isLogin">
            <router-link class="btn btn-outline-primary mr-3" to="/login">登录</router-link>
            <router-link class="btn btn-primary" to="/sign">加入无乎</router-link>
          </div>
          <a v-else class="nav-link" href="#" tabindex="-1">欢迎您，{{user.nickName}}</a>
        </div>
      </div>
  </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

export interface UserProps {
  isLogin: boolean,
  userName?: string,
  portrait?: string,
  id?:string
}
export default defineComponent({
  name: 'Header',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
})
</script>