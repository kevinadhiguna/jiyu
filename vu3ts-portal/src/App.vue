<template>
  <div class="app">
    <p>Hi, my name is {{ name }} and I am {{ age }}</p>
    <div v-if="isStudent">
      I am currently a student
    </div>
    <button @click="changeName('zelda')">change name</button>
    <button @click="changeAge(17)">change age 17 (number)</button>
    <button @click="changeAge('21')">change age 21 (string)</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {},
  data() {
    return {
      name: 'vu3ts',
      age: 15 as number | string, // This means age can be changed to string
      isStudent: true,
    }
  },
  methods: {
    changeName(name: string): string {
      this.name = name;
      return name;
    },
    changeAge(age: number | string): number | string { // Allowed Parameter: [1] (age: number | string), [2] (age: number), [3] (age: string)
      this.age = age;
      return age;
    }, 
  },
});
</script>

<style>
</style>
