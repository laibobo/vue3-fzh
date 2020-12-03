<template>
  <!-- 专栏列表 -->
  <div class="row row-cols-2">
    <div class="card col-3 mb-3" v-for="item in list" :key="item.id">
      <img :src="item.avatar.url" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <p class="card-text text-left" v-if="item.description">{{item.description}}</p>
        <router-link :to="`/column/${item._id}`" class="btn btn btn-outline-primary">进入专栏</router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, Prop, PropType } from 'vue'
export interface ColumnProps {
  _id: string;
  avatar: object;
  title: string;
  description?: string
}
export default defineComponent({
  name: 'SpecialColumn',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      requird: true
    }
  }
})
</script>
<style lang="scss">

</style>