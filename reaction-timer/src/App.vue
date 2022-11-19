<template>
  <div>
    <h1>Reaction Timer</h1>
    <button @click="start" :disabled="isPlaying" class="play-btn">play</button>
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
.play-btn {
  background: #0faf87;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
.play-btn[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
