<template>
  <div class="container">
    <h-header :user="currentUser" />
    <main>
      <router-view />
    </main>
  </div>
</template>
<script lang="ts">
import HHeader from './header.vue'
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  components:{
    HHeader
  },
  setup(props,context){
    const store = useStore()
    const currentUser = computed(() => store.state.user)
    return {
      currentUser
    }
  }
})
</script>
<style lang="scss">

</style>