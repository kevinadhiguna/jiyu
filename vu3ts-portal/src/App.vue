<template>
  <div class="app">
    <p>Hi, my name is {{ name }} and I am {{ age }}</p>
    <div v-if="isStudent">
      I am currently a student
    </div>
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
      age: 15,
      isStudent: true,
    }
  },
  methods: {
    changeName(name: string) {
      this.name = name;
    },
  },
});
</script>

<style>
</style>
