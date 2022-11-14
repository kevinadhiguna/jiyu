<template>
  <div class="home">
    <h1>Home view</h1>
    <h2>Computed</h2>
    <p>Name : {{ name }}</p>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    const name = computed(() => {
      return 'Kai';
    });

    return { name }
  },
}
</script>
