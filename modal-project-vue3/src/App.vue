<template>
  <div>
    <h1>{{ framework }} App</h1>
    <input type="text" ref="inputfield" />
    <button @click="handleClick">Click</button>
    <Modal />
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  data() {
    return {
      framework: "Vue.js v3",
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
</style>
