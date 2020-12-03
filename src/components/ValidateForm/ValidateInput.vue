<template>
  <div class="validate-input-container pb-3">
    <input class="form-control" :class="{'is-invalid':inputRef.error}" v-bind="$attrs" :value="inputRef.value" @blur="validateInput" @input="updateValue" />
    <div class="invalid-feedback text-left" :style="{display:'block'}" v-show="inputRef.error">{{ inputRef.message }}</div>
  </div>
</template>
<script lang="ts">
//is-valid 校验通过  is-invalid 校验失败
import { defineComponent, onMounted, PropType, reactive, ref } from 'vue'
interface RuleProps {
  type: 'requied' | 'custom';
  message: string;
  validator?: () => boolean;
}
export type RulesProps = RuleProps[]
import mitt from 'mitt'
import message from '../Message/message'
export const emitter = mitt()
export default defineComponent({
  props: {
    rules: {
      type: Array as PropType<RulesProps>
    },
    modelValue: String
  },
  inheritAttrs: false,
  setup(props,context){
    const inputRef = reactive({
      value: props.modelValue || '',
      error: false,
      message: ''
    })
    const updateValue = (event: KeyboardEvent) =>{
      const targetValue = (event.target as HTMLInputElement).value
      inputRef.value = targetValue
      context.emit('update:modelValue', targetValue)
    }

    const validateInput = () =>{
      if(props.rules){
        inputRef.error = props.rules.every(rule => {
          let nopassed = false
          inputRef.message = rule.message
          console.log('message:',inputRef.message)
          switch(rule.type){
            case 'requied':
              nopassed = inputRef.value.trim() === ''
            break;
            case 'custom':
              nopassed = rule.validator ? rule.validator() : false
            default:
              break;
          }
          return nopassed
        })
      }
      return !inputRef.error
    }
    onMounted(() => {
      emitter.emit('form-item-create', validateInput)
    })
    return {
      validateInput,
      inputRef,
      updateValue
    }
  }
})
</script>
<style lang="scss">

</style>
