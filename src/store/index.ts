import { createStore } from 'vuex'
import { testData, postData, ColumnProps, PostProps } from '../test/testData'
interface UserProps{
  isLogin: boolean,
  name?: string,
  id?: string | number
}
export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}
export default createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: postData,
    user: { isLogin: false}
  },
  mutations: {
    login(state){
      state.user = { ...state.user, isLogin: true, name: 'laibobo' }
    }
  },
  actions: {
  },
  modules: {
  }
})
