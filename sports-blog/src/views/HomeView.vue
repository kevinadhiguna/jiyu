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

    // These are not reacting values, hence the values do not change just like :
    // data() {
    //   return {
    //     name: 'Kai',
    //     age: 25
    //   }
    // }
    // in Options API
    let name = 'Kai';
    let age = 25;

    return { name, age }
  },
}
</script>
