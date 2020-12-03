<template>
  <teleport to="#message">
    <div class="alert message-info fixed-top w-50 mx-auto d-flex justify-content-between mt-2"
      :class="classObject" v-if="visible">
      <span>{{message}}</span>
      <button type="button" class="btn-close"  @click.prevent="hide" aria-label="Close"></button>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import useUniDOMCreate from '../../hooks/useUniDOMCreate'
export type MessageType = 'success' | 'danger' | 'warning' | 'default'

export default defineComponent({
  props: {
    message: String,
    type: {
      type: String as PropType<MessageType>,
      default: 'default'
    }
  },
  emits: ['close'],
  setup(props,context){
    useUniDOMCreate('message')
    const visible = ref(true)
    const classObject = {
      'alert-primary' : props.type === 'default',
      'alert-success' : props.type === 'success',
      'alert-danger' : props.type === 'danger',
      'alert-warning' : props.type === 'warning'
    }
    const hide = () => {
      visible.value = false
      context.emit('close')
    }
    return {
      visible,
      hide,
      classObject
    }
  }
})
</script>