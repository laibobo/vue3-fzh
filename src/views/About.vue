<template>
  <div class="about">
    <h1>This is an about page</h1>
    <dropdown title="打开我">
      <dropdown-item>
        <a class="dropdown-item">Action</a>
      </dropdown-item>
      <dropdown-item disabled>
        <a class="dropdown-item">Another action</a>
      </dropdown-item>
      <dropdown-item>
        <a class="dropdown-item">Something else here</a>
      </dropdown-item>
    </dropdown>
  </div>
</template>
<script lang="ts">
import Dropdown from '../components/Dropdown/index.vue'
import DropdownItem from '../components/Dropdown/dropdownItem.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Dropdown,
    DropdownItem
  },
  setup() {
    return {}
  }
})
</script>
