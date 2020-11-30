<template>
<div class="dropdown" @click="onClick">
  <a class="dropdown-toggle" href="javascript:;">{{title}}</a>
  <!-- <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <slot></slot>
  </ul> -->
  <div class="dropdown-menu" style="display: block;" v-if="isOpen">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  props: {
    title: {
      type: String,
      requird: true
    }
  },
  setup(props,context){
    const isOpen = ref(false)
    const onClick = () =>{
      isOpen.value = !isOpen.value
      console.log(isOpen.value)
    }
    return { 
      isOpen,
      onClick
    }
  }
})
</script>
<style lang="scss">

</style>