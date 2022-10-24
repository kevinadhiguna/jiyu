<template>
  <div>
    <h1 class="main-title">{{ framework }} App</h1>
    <input type="text" ref="inputfield" />
    <button @click="handleClick">Click</button>
    <Modal 
      :header="header"
      :content="content"
      :theme="theme"
    />
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  data() {
    return {
      framework: "Vue.js v3",
      header: "Sign up for MLB All-star tickets!",
      content: "Watch Trout and Ohtani",
      theme: "sale",
    };
  },
  components: {
    Modal,
  },
  methods: {
    handleClick() {
      console.log("Ref element : ", this.$refs.inputfield); // <- Log the component
      this.$refs.inputfield.classList.add("active"); // <- Add a class named "active"
      this.$refs.inputfield.focus(); // <- Focus to input field
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main-title {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
