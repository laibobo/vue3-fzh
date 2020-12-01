<template>
  <div class="home mt-4">
    <SpecialColumn :list="list"></SpecialColumn>
  </div>
</template>

<script lang="ts">
import SpecialColumn, { ColumnProps } from './SpecialColumn/index.vue'
import { computed, defineComponent } from 'vue'
import { GlobalDataProps } from '../store/index'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  components: {
    SpecialColumn
  },
  setup() {
    const store = useStore<GlobalDataProps>()
    const list = computed(()=> store.state.columns)
    return {
      list
    }
  }
});
</script>
