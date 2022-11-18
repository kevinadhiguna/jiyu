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
}
</script>

<style>
</style>
