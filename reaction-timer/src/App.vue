<template>
  <div>
    <h1>Reaction Timer</h1>
    <button @click="start" :disabled="isPlaying">play</button>
    <Block :delay="delay" />
  </div>
</template>

<script>
import Block from './components/Block.vue';

export default {
  name: 'App',
  data() {
    return {
      isPlaying: false,
      delay: null,
    }
  },
  components: { Block },
  methods: {
    start() {
      // The most it could be is 7s (7000ms) and the least it could be is 2s (2000ms)
      this.delay = 2000 + Math.random() * 5000; // Math.random() gives a value between 0 and 1
      console.log('this.delay : ', (this.delay / 1000).toFixed(3), 'seconds');

      this.isPlaying = true;
    }
  }
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
