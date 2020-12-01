<template>
  <div class="login-panel position-fixed w-50 border bg-white shadow-sm p-4">    
    <validate-form @form-submit="onSubmitForm">
      <validate-input type="text" :rules="userNameRules" v-model="userName" placeholder="请输入用户名" />
      <validate-input type="password" :rules="userPwdRules" v-model="userPwd" placeholder="请输入密码" />
      <template #submit>
        <a class="btn btn-danger btn-lg">登录</a>
      </template>
    </validate-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateForm from '../components/ValidateForm/index.vue'
import ValidateInput, { RulesProps } from '../components/ValidateForm/ValidateInput.vue'
const userNameRules:RulesProps = [
  {
    type: 'requied',
    message: '用户名不能为空'
  }
]
const userPwdRules:RulesProps = [
  {
    type: 'requied',
    message: '密码不能为空'
  }
]
export default defineComponent({
  components: {
    ValidateForm,
    ValidateInput
  },
  setup(props,context){
    const userName = ref('')
    const userPwd = ref('')
    const onSubmitForm = (valid:boolean) =>{
      if(valid){

      }
    }
    
    return {
      onSubmitForm,
      userNameRules,
      userPwdRules,
      userName,
      userPwd
    }
  }
})
</script>
<style lang="scss">
  .login-panel{
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    
  }
</style>