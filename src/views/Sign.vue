<template>
  <div class="login-panel position-fixed w-25 border bg-white shadow-sm p-4">    
    <validate-form @form-submit="onSubmitForm">
      <validate-input type="text" :rules="emailRules" v-model="email" placeholder="请输入邮箱" />
      <validate-input type="text" :rules="nickNameRules" v-model="nickName" placeholder="请输入昵称" />
      <validate-input type="password" :rules="userPwdRules" v-model="password" placeholder="请输入密码" />
      <validate-input type="password" :rules="affirmPwdRules" v-model="affirmPassword" placeholder="请输入确认密码" />
      <template #submit>
        <a class="btn btn-danger">注册</a>
      </template>
    </validate-form>
    <router-link class="float-right text-primary" to="/login">已有账号，立即登录</router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateForm from '../components/ValidateForm/index.vue'
import ValidateInput, { RulesProps } from '../components/ValidateForm/ValidateInput.vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
const emailRules: RulesProps = [
  {
    type: 'requied',
    message: '邮箱地址不能为空'
  }
]
const nickNameRules:RulesProps = [
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
    const nickName = ref('')
    const password = ref('')
    const affirmPassword = ref('')
    const email = ref('')
    const router = useRouter()
    const affirmPwdRules: RulesProps = [
      {
        type: 'requied',
        message: '确认密码不能为空'
      },
      {
        type: 'custom',
        validator: () =>{
          return password.value === affirmPassword.value
        },
        message: '密码2次输入不一致'
      }
    ]
    const onSubmitForm = async (valid:boolean) =>{
      if(valid){
        const { data } = await axios.post('users',{ email:email.value, nickName:nickName.value, password:password.value })
        if(data.code === 0){
          router.push('/login')
        }else{
          alert(data.msg)
        }
        
      }
    }
    
    return {
      onSubmitForm,
      nickNameRules,
      userPwdRules,
      affirmPwdRules,
      emailRules,
      email,
      nickName,
      password,
      affirmPassword
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