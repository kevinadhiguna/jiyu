<template>
  <div class="home">
    <h1>Home view</h1>
    <p>My name is {{ name }} and my age is {{ age }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  setup() {
    console.log('setup');

    let name = 'Kai';
    let age = 25;

    return { name, age }
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  },
}
</script>
