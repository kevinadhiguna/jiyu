<template>
  <div class="home">
    <h1>Home view</h1>
    <h2>Computed</h2>
    <!-- :key = "name" since all names are unique (no same name) -->
    <div v-for="name in names" :key="name">
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    const names = ref(['Dasha', 'Zhenya', 'Alina', 'Anastasia', 'Jessica', 'Medlyn', 'Kate']);

    return { names }
  },
}
</script>
