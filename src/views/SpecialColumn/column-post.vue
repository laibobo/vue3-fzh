<template>
  <article class="article p-4 text-left">
    <h5 class="title text-truncate">{{ data.title }}</h5>
    <div class="content">
      <img class="mr-3" v-if="data.image.url" :src="data.image.url" />
      <p class="text-break">{{ data.excerpt }}</p>
    </div>
  </article>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
interface ColumnArticleProps {
  _id: string;
  title: string;
  image: object;
  excerpt: string;
  author: object;
  column: string;
  createdAt: string;
}
export default defineComponent({
  props: {
    data: {
      type: Object as PropType<ColumnArticleProps>,
      requird: true
    }
  }
})
</script>
<style lang="scss" scoped>
  .article{
    border-bottom: 1px solid rgb(246, 246, 246);
    .title{
      font-weight: 600;
    }
    .content{
      display: flex;
      img{
        width: 190px;
        height: 105px;
      }
    }
  }
</style>