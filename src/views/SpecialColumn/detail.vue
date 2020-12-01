<template>
  <pre>{{ route }}</pre>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  setup(props,context){
    const route = useRoute()
    return { route }
  }
})
</script>
<style lang="scss">

</style>