<template>
  <h1>{{ framework }} App</h1>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      framework: "Vue.js v3",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
