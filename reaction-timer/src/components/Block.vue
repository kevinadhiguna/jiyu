<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    Click me
  </div>
</template>

<script>
export default {
  props: ['delay'],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    }
  },
  mounted() { // Lifecycle hooks
    console.log('component mounted');

    // Display Block component after some delay
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  updated() { // Lifecycle hooks
    console.log('component updated');
  },
  unmounted() { // Lifecycle hooks
    console.log('component unmounted');
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer); // Stop reactionTime from being increased
      console.log('reaction time : ', this.reactionTime, 'ms');

      // Emit a custom event
      this.$emit('end', this.reactionTime); // Passing 'this.reactionTime' so one can access it as a parameter in a custom function in another file 
    },
  }
}
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: #fff;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
