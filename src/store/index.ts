import { createStore, Commit } from 'vuex'
import axios, { AxiosRequestConfig } from 'axios'
interface ColumnsProps{
  id: string;
  title: string;
  avatar?: string;
  description: string;
  followCount: number;
  articleCount: number;
}
interface ColumnProps {
  _id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  columnId: number;
}
interface PostProps {
  _id: string;
  title: string;
  image: object;
  excerpt: string;
  author: object;
  column: string;
  createdAt: string;
}
interface UserProps{
  isLogin: boolean;
  nickName?: string;
  column?: string;
  _id?: string;
}
interface GlobalRrrorProps {
  status: boolean;
  message: string;
}
export interface GlobalDataProps {
  columns: ColumnsProps[];
  column: ColumnProps | {};
  posts: PostProps[];
  user: UserProps;
  loader: boolean;
  token: string;
  error: GlobalRrrorProps;
}

const asyncAndCommit = async(
  url: string, mutationName: string,
  commit: Commit, config: AxiosRequestConfig = { method: 'get' }, extraData?: any) => {
  const { data } = await axios(url, config)
  if (extraData) {
    commit(mutationName, { data, extraData })
  } else {
    commit(mutationName, data)
  }
  return data
}
export default createStore<GlobalDataProps>({
  state: {
    columns: [],
    column: {},
    posts: [],
    user: { isLogin: false},
    loader: false,
    token: localStorage.getItem('token') || '',
    error: {
      status: false,
      message: ''
    }
  },
  mutations: {
    setCurrentUser(state, rawData) {
      state.user = { isLogin: true, ...rawData.data }
    },
    setColumns(state, payload) {
      state.columns = payload.data.list
    },
    setColumn(state, payload) {
      state.column = payload.data
    },
    setPosts(state, payload) {
      state.posts = payload.data.list
    },
    setLoding(state, status) {
      state.loader = status
    },
    setError(state, payload){
      state.error = payload
    },
    setToken(state, token) {
      state.token = token
    },
    login(state, rawData) {
      const { token } = rawData
      state.token = token
      localStorage.setItem('token', token)
    },
    logout(state) {
      state.token = ''
      state.user = { isLogin: false }
      localStorage.removeItem('token')
    }
  },
  actions: {
    fetchColumns({ commit }, { currentPage, pageSize }) {
      return asyncAndCommit(`columns?currentPage=${currentPage}&pageSize=${pageSize}`, 'setColumns', commit)
    },
    fetchColumn({ commit }, columnId) {
      return asyncAndCommit(`columns/${columnId}`, 'setColumn', commit)
    },
    fetchColumnArticle({ commit }, { currentPage, pageSize, columnId }) {
      return asyncAndCommit(`columns/${columnId}/posts?currentPage=${currentPage}&pageSize=${pageSize}`, 'setPosts', commit)
    },
    loginAndFetchUser({ dispatch }, payload) {
      return dispatch('login', payload).then(() => {
        return dispatch('fetchCurrentUser')
      })
    },
    fetchCurrentUser({ commit }) {
      return asyncAndCommit('user/current', 'setCurrentUser', commit)
    },
    login({ commit }, data){
      return asyncAndCommit('user/login', 'login',commit, { method:'post', data })
    }
  },
  modules: {
  },
  getters: {
  }
})
