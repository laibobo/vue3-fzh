<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">无乎</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-4 mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">首页</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">会员</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" tabindex="-1">发现</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" tabindex="-1">等你来答</a>
          </li>
        </ul>
        <form class="d-flex mr-auto">
          <input class="form-control mr-2" type="search" placeholder="search" aria-label="search" icon>
        </form>
        <div class="d-flex">
          <div v-if="!user.isLogin">
            <button class="btn btn-outline-primary mr-3">登录</button>
            <button class="btn btn-primary">加入无乎</button>
          </div>
          <a v-else class="nav-link" href="#" tabindex="-1">欢迎您，{{user.userName}}</a>
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
<style lang="scss">
</style>