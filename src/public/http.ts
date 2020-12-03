import axios from 'axios'

const icode:string = '87E2947D8B58720D'
axios.defaults.baseURL = 'http://apis.imooc.com/api/'

import store from '../store/index'

axios.interceptors.request.use(config => {
  config.params = { ...config.params, icode }
  store.commit('setError', {
    status: false,
    message: ''
  })
  if(store.state.token){
    config.headers['Authorization']  = `Bearer ${store.state.token}`
  }
  if(config.data instanceof FormData){
    config.data.append('icode', icode)
  }else {
    config.data = { ...config.data, icode }
  }
  store.commit('setLoding', true)
  return config
})

axios.interceptors.response.use(response =>{
  setTimeout(()=>{
    store.commit('setLoding', false)
  },1500)  
  return response
},e=>{
  const result = e.response.data
  store.commit('setLoding', false)
  store.commit('setError', {
    status: true,
    message: result.error
  })
  return Promise.reject(result)
})