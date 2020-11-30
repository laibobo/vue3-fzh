<template>
  <!-- 专栏 -->
  <div class="row">
    <div class="col card mr-4" v-for="item in list" :key="item.id">
      <img :src="item.author" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{item.title}}</h5>
        <p class="card-text" v-if="item.description">{{item.description}}</p>
        <a href="#" class="btn btn btn-outline-primary">进入专栏</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, Prop, PropType } from 'vue'
export interface ColumnProps {
  id: string | number,
  author: string,
  title: string,
  description?: string,
  followCount: number,
  articleCount: number
}
export default defineComponent({
  name: 'SpecialColumn',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      requird: true
    },

  },
  setup(props,context){
  }
})
</script>
<style lang="scss">

</style>