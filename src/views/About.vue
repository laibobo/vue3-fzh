<template>
  <div class="about">
    <h1>This is an about page</h1>
    <dropdown title="打开我"></dropdown>
  </div>
</template>
<script lang="ts">
import Dropdown from '../components/Dropdown/index.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Dropdown
  },
  setup() {
    return {}
  }
})
</script>
