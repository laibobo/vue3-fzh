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
  }
})
</script>
<style lang="scss">
  .dropdown-item.is-disabled,.dropdown-item.is-disabled *{
    color: #6c757d;
    pointer-events: none !important;
    background-color: transparent;
  }
</style>