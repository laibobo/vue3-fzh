<template>
<div class="dropdown" ref="dropdownRef">
  <a class="btn btn-outline-light my-2 dropdown-toggle" href="javascript:;"  @click="toggleOpen">{{title}}</a>
  <ul class="dropdown-menu" style="display: block;" v-if="isOpen">
    <slot></slot>
  </ul>
</div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOutside from '../../hooks/useClickOutside'

export default defineComponent({
  props: {
    title: {
      type: String,
      requird: true
    }
  },
  setup(props,context){
    const isOpen = ref(false)
    const dropdownRef = ref<null | HTMLElement>(null)
    const isClickOutsite = useClickOutside(dropdownRef)
    const toggleOpen = () =>{
      isOpen.value = !isOpen.value
    }
    watch(isClickOutsite, ()=>{
      if(isOpen.value && isClickOutsite.value){
        isOpen.value = false
      }
    })
    return { 
      isOpen,
      toggleOpen,
      dropdownRef
    }
  }  
})
</script>
<style lang="scss">
  .dropdown-toggle{
    color: #565656;
  }
</style>