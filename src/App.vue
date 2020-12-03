<template>
  <div>
    <loader v-if="isLoader" text="努力加载中..." />
    <router-view  />
  </div>
</template>
<script lang="ts">
import Loader from './components/Loader/index.vue'
import { computed, defineComponent, onMounted, watch }  from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from './store/index'
import { useRouter } from 'vue-router'
import showMessage from './components/Message/message'

export default defineComponent({
  components: { Loader },
  setup(){
    const store = useStore<GlobalDataProps>()
    const isLoader = computed(() => store.state.loader)
    const error = computed(() => store.state.error)
    watch(() => error.value.status,()=>{
      const { status, message } = error.value
      if(status && message){
        showMessage(message, 'danger')
      }
    })
    onMounted(() => {
      const token = localStorage.getItem('token')
      if(token){
        store.commit('setToken',token)
        store.dispatch('fetchCurrentUser')
      }
    })
    return {
      isLoader
    }
  }
})
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
