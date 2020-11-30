<template>
  <li class="dropdown-item" :class="{'is-disabled': disabled}">
    <slot></slot>
  </li>
</template>
<script lang="ts">
import { defineComponent, registerRuntimeCompiler } from 'vue'
export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props,context){    
    return {
    }
  }
})
</script>
<style lang="scss">
  .dropdown-item.is-disabled *{
    color: #6c757d;
    pointer-events: none;
    background-color: transparent;
  }
</style>