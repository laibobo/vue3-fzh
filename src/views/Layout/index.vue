<template>
  <div class="container">
    <h-header :user="currentUser" />
    <main>
      <router-view />
    </main>
  </div>
</template>
<script lang="ts">
import HHeader, { UserProps } from './header.vue'
import { defineComponent } from 'vue'
const currentUser: UserProps = {
  isLogin: false,
  userName: 'laibobo'
}
export default defineComponent({
  components:{
    HHeader
  },
  setup(props,context){
    currentUser.isLogin = false
    return {
      currentUser
    }
  }
})
</script>
<style lang="scss">

</style>