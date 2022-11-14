<template>
  <div class="home">
    <h1>Home view</h1>
    <h2>Refs</h2>
    <p>{{ bloggerOne.name }} - {{ bloggerOne.age }}</p>
    <button @click="updateBloggerOne">Update Blogger one</button>
    <h2>Reactive</h2>
    <p>{{ bloggerTwo.name }} - {{ bloggerTwo.age }} - {{ bloggerThreeName }}</p>
    <button @click="updateBloggerTwo">Update Blogger two</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    const bloggerOne = ref({ name: 'Kyle', age: 17 });
    const bloggerTwo = reactive({ name: 'Anastasia', age: 15 });

    // One of the drawbacks of reactive is it can not be used to a primitive variable
    let bloggerThreeName = reactive('Emma');

    const updateBloggerOne = () => {
      bloggerOne.value.name = 'Wright';
      bloggerOne.value.age = 20;
    }

    const updateBloggerTwo = () => {
      // With reactive, one does not have to access value property to access the variable's value
      bloggerTwo.name = 'Alina';
      bloggerTwo.age = 18;

      // None of these work
      bloggerThreeName = 'Jessica';
      // bloggerThreeName.value = 'Jessica';
    }

    return { bloggerOne, bloggerTwo, updateBloggerOne, updateBloggerTwo, bloggerThreeName }
  },
}
</script>
