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
    <button @click="handleClick">Stop watching search</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    const search = ref('');
    const names = ref(['Dasha', 'Zhenya', 'Alina', 'Anastasia', 'Jessica', 'Medlyn', 'Kate']);
    
    const matchingNames = computed(() => {
      return names.value.filter(name => name.toLowerCase().includes(search.value.toLowerCase()));
    });

    // Triggered :
    // - everytime the variables (dependency) changes. In this case, it is 'search'.
    const stopWatch = watch(search, () => {
      console.log('triggered by watch function !');
    });

    // Triggered :
    // - at first (component mounted)
    // - when a variable inside the watchEffect function changes/is affected
    // In addition, watchEffect() is preferred to watch() since one does not have to list watch list (list of variables that will be the dependency of this function)
    const stopWatchEffect = watchEffect(() => {
      console.log('search keyword (watchEffect) : ', search.value);
    });

    const handleClick = () => {
      stopWatch();
      stopWatchEffect();
    }

    return { names, search, matchingNames, handleClick }
  },
}
</script>
