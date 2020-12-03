<template>
  <!-- 专栏信息 -->
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid w-75">
        <router-link class="navbar-brand" to="/">无乎</router-link>
        <i class="ColumnPageHeader-Line"></i>
        <div class="ColumnPageHeader-Title mr-auto">
          <div class="ColumnPageHeader-TitleName">
            <span class="ColumnPageHeader-TitleMeta">专栏</span>
            <router-link class="ColumnLink ColumnPageHeader-TitleColumn" :to="`/column/${columnId}`">{{column.title}}</router-link>
          </div>
        </div>
        <div class="d-flex">
          <button class="btn btn-outline-primary mr-3">写文章</button>
        </div>
      </div>
    </nav>
    <!-- 基本描述 -->
    <div class="w-100 h-25 bg-white">
      <div class="w-50 m-auto post p-4">
        <h4>{{ column.title }}</h4>
        <h6>{{ column.description }}</h6>
        <div class="author-info">
          <img class="avatar" :src="column.avatar?.url" />
          <label>{{ column.author }}</label>
          <strong class="mr-2 ml-2">·</strong><span>{{ columnArticlesCount }}</span> 篇内容
        </div>
      </div>
    </div>
    <!-- 专栏文章 -->
    <div class="w-50 m-auto mt-4 bg-white">
      <ul>
        <li v-for="item in list" :key="item.id">
          <column-post :data="item"></column-post>
        </li>
      </ul>
    </div>
  </div> 
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import ColumnPost from './column-post.vue'
export default defineComponent({
  components: {
    ColumnPost
  },
  setup(props,context){
    const route = useRoute()
    const store = useStore()
    const columnId = route.params.id
    const column = store.state.column
    const list = store.state.posts
    const columnArticlesCount = list.length

    onMounted(() => {
      store.dispatch('fetchColumn', columnId)
      store.dispatch('fetchColumnArticle', { columnId, currentPage: 1, pageSize: 10 })
    })
    return { 
      route,
      column,
      columnId,
      columnArticlesCount,
      list
    }
  }
})
</script>
<style lang="scss" scoped>
.ColumnPageHeader-Line {
  margin-left: 17px;
  height: 29px;
  width: 1px;
  background-color: #ebebeb;
}
.ColumnPageHeader-Title {
  justify-content: center;
  margin-left: 16px;
  display: flex;
  height: 52px;
  align-items: center;
  .ColumnPageHeader-TitleName{
    display: flex;
    flex-flow: column;
    text-align: left;
    .ColumnPageHeader-TitleMeta{
      color: #8590a6;
      font-size: 12px;
    }
    .ColumnPageHeader-TitleColumn {
      font-size: 14px;
      font-weight: 600;
      color: inherit;
      text-decoration: none;
    }
  }
}
.post{
  flex-direction: column;
  display: flex;
  text-align: left;
  h4{
    font-size: 26px;
    font-weight: 600;
    color: #000;
  }
  h6{
    color: #444444;
    font-size: 18px;
  }
  .author-info{
    display: flex;
    align-items: center;
    color: #8590A6;
    img{
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
    label{
      color: #444;
    }
  }  
}
ul{
  padding: 0;
  margin: 0;
  li{
    list-style-type: none;
  }
}

</style>