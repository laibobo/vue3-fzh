<template>
  <div class="login-panel position-fixed w-25 border bg-white shadow-sm p-4">    
    <validate-form @form-submit="onSubmitForm">
      <validate-input type="text" :rules="userNameRules" v-model="userName" placeholder="请输入账号" />
      <validate-input type="password" :rules="userPwdRules" v-model="password" placeholder="请输入密码" />     
      <template #submit>
        <a class="btn btn-danger">登录</a>
      </template>
    </validate-form>
    <router-link class="float-right text-primary" to="/sign">还没有账号，立即注册</router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateForm from '../components/ValidateForm/index.vue'
import ValidateInput, { RulesProps } from '../components/ValidateForm/ValidateInput.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import message from '../components/Message/message'

const userNameRules:RulesProps = [
  {
    type: 'requied',
    message: '账号不能为空'
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
    const password = ref('')
    const store = useStore()
    const router = useRouter()
    const type = ref('sign')
    const onSubmitForm = (valid:boolean) =>{
      if(valid){
        const payload = { 
          email: userName.value,
          password: password.value 
        }
        store.dispatch('loginAndFetchUser', payload).then(()=>{
          message('登录成功~', 'success')
          setTimeout(()=> {
            router.push('/')
          },1000)
        })
      }
    }
    
    return {
      onSubmitForm,
      userNameRules,
      userPwdRules,
      userName,
      password,
      type
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