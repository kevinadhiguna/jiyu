<template>
  <div>
    <h1 class="main-title">{{ framework }} App</h1>
    <input type="text" ref="inputfield" />
    <button @click="handleClick">Click</button> 
    <p>Welcome</p>
    <div v-if="isModalShown">
      <Modal 
        :header="header"
        :content="content"
        :theme="theme"
        @close="handleModalShown"
      />
    </div>
    <!-- Will react only if shift key is held down -->
    <button @click.shift="handleModalShown">Show Modal (shift)</button>
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
      isModalShown: false,
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
    handleModalShown() {
      this.isModalShown = !this.isModalShown;
    }
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
