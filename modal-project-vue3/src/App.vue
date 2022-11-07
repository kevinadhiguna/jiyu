<template>
  <div>
    <h1 class="main-title">{{ framework }} App</h1>
    <p>Welcome</p>
    <div v-if="isModalShown">
      <Modal :theme="theme" @close="handleModalShown">
        <!-- Template that will be rendered in <slot name="links"></slot> tags in Modal component -->
        <template v-slot:links>
          <a href="#">Sign up now</a>
          <a href="#">More info</a>
        </template>
        
        <!-- Template that will be rendered in <slot></slot> tags in Modal component -->
        <h1>{{ header }}</h1>
        <p>{{ content }}</p>
      </Modal>
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
