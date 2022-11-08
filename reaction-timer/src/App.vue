<template>
  <div>
    <h1>Reaction Timer</h1>
    <button :disabled="isPlaying">play</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isPlaying: false,
      delay: null,
    }
  },
  components: {},
  methods: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
