<template>
  <div>
    <p>Reaction time : {{ score }}  ms</p>
    <p>{{ rank }}</p>
  </div>
</template>

<script>
export default {
  props: ['score'],
  data() {
    return{
      rank: null,
    }
  },
  mounted() {
    if (this.score < 250) {
      this.rank = 'Ninja fingers';
    } else if (this.score < 400) {
      this.rank = 'Rapid reflexes';
    } else {
      this.rank = 'Snail pace...';
    }
  },
}
</script>

<style>
</style>
