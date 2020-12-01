<template>
  <form class="validate-form-container">
    <slot></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'
import { emitter } from './ValidateInput.vue'
type validateFunc = () => boolean
export default defineComponent({
  emits: ['form-submit'],
  setup(props,context){
    let validateFuncArr:validateFunc[] = []
    const submitForm = () =>{
      const result = validateFuncArr.map(func => func()).every(result=>result)
      context.emit('form-submit', result)
    }
    const callback = (func?:validateFunc) => {
      if(func){
        validateFuncArr.push(func)
      }
    }
    emitter.on('form-item-create',callback)
    onUnmounted(() => {
      emitter.off('form-item-create', callback)
      validateFuncArr = []
    })
    return {
      submitForm
    }
  }
})
</script>
<style lang="scss">

</style>