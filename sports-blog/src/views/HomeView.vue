<template>
  <div class="home">
    <h1>Home view</h1>
    <h2>Computed</h2>
    <input type="text" v-model="search">
    <p>search for : {{ search }}</p>
    <!-- :key = "name" since all names are unique (no same name) -->
    <div v-for="name in matchingNames" :key="name">
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    const search = ref('');
    const names = ref(['Dasha', 'Zhenya', 'Alina', 'Anastasia', 'Jessica', 'Medlyn', 'Kate']);

    const matchingNames = computed(() => {
      return names.value.filter(name => name.toLowerCase().includes(search.value.toLowerCase()));
    });

    return { names, search, matchingNames }
  },
}
</script>
