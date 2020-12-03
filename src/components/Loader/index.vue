<template>
  <teleport to="#back">
    <div 
      class="loader-container position-fixed d-flex justify-content-center align-items-center w-100 h-100" 
      :style="{backgroundColor:background || ''}"
      >
      <div class="loading-content text-center">  
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">{{ text || 'loading' }}</span>
        </div>
        <p class="text-primary small mt-2 fs-6">{{ text }}</p>
      </div>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import useUniDOMCreate from '../../hooks/useUniDOMCreate'
export default defineComponent({
  props: {
    text: { type: String },
    background: { type: String }
  },
  setup(props,context){
    useUniDOMCreate('back')
  }
})
</script>
<style lang="scss">
  .loader-container{
    left: 0;
    top: 0;
    z-index: 100;
    background:rgba(1,1,1,.8);
  }
</style>