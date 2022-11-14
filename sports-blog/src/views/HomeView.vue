<template>
  <div class="home">
    <h1>Home view</h1>
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    // To make variables reactive to changes, wrap them in 'ref()' method
    const name = ref('Kai');
    const age = ref(25);

    const handleClick = () => {
      // To change the variable values, access '.value' property of each variable ('.value' property is only accessed in setup() method)
      name.value = 'Doe';
      age.value = 27;
    }

    return { name, age, handleClick }
  },
}
</script>
