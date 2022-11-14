<template>
  <div class="home">
    <h1>Home view</h1>
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'HomeView',
  setup() {

    // In Composition API, 'this' will get undefined in setup function
    // console.log(this); // undefined

    // Template refs
    const p = ref(null);
    
    // 'p.value' will be null since Vue has not returned 'p' yet
    console.log('p.value : ', p.value); // p.value :  null

    let name = 'Kai';
    let age = 25;

    const handleClick = () => {
      console.log('p : ', p);
      console.log('p.value : ', p.value); // <p>My name is Kai and my age is 25</p>

      // Add a class named 'test' to the HTML element (<p></p>)
      p.value.classList.add('test'); // <p class="test">My name is Kai and my age is 25</p>

      // Replace the content of <p></p> to 'Hello, sports bloggers!'
      p.value.textContent = 'Hello, sports bloggers!';
    }

    return { name, age, handleClick, p }
  },
}
</script>
