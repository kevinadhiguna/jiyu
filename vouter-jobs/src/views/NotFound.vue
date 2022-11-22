<template>
  <h2>404</h2>
  <h3>Oops... page nout found</h3>
  <router-link :to="{ name: 'home' }">
    <h4 class="back-btn">Back to home</h4>
  </router-link>
</template>

<script>
export default {}
</script>

<style>
.back-btn {
  color: #42b983;
}
</style>
