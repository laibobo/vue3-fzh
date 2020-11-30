<template>
  <div class="home mt-4">
    <SpecialColumn :list="rawData"></SpecialColumn>
  </div>
</template>

<script lang="ts">
import SpecialColumn, { ColumnProps } from './SpecialColumn/index.vue'
import { defineComponent } from 'vue'

const rawData:ColumnProps[] = [
  {
    id: '1',
    title: '简七理财',
    author: 'https://pic1.zhimg.com/v2-4003180359c22768877b60193c064c79_xl.jpg',
    description: '理财更简单 人生更自由',
    followCount: 9691,
    articleCount: 518
  },
  {
    id: '2',
    title: '交易法门',
    author: 'https://pic4.zhimg.com/v2-e11f6dd8eeee14d452cf4129eaf7ce36_xl.jpg',
    description: '公众号：交易法门',
    followCount: 11664,
    articleCount: 357
  },
  {
    id: '3',
    title: 'Alter聊科技',
    author: 'https://pic2.zhimg.com/v2-609b850564f24f03d7d1bc159d11455a_xl.jpg',
    description: '通俗易懂，不是砖家！',
    followCount: 392,
    articleCount: 550
  },
  {
    id: '4',
    title: '在职研究生',
    author: 'https://pic4.zhimg.com/v2-c974454f8f054c67a0b938356b4142dc_xl.jpg',
    description: '十年树木 百年树人',
    followCount: 1578,
    articleCount: 584
  }
]
export default defineComponent({
  name: 'Home',
  components: {
    SpecialColumn
  },
  setup() {
    return {
      rawData
    }
  }
});
</script>
