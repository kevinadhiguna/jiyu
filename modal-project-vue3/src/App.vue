<template>
  <div>
    <h1 class="main-title">{{ framework }} App</h1>
    <p>Welcome</p>
    
    <!-- teleport brings an element to a destination which can be a class (e.g.: .modals) or an id (e.g.: #modals) -->
    <teleport to=".modals" v-if="isModalShown">
      <Modal theme="sale" @close="handleModalShown">
        <!-- Template that will be rendered in <slot name="links"></slot> tags in Modal component -->
        <template v-slot:links>
          <a href="#">Sign up now</a>
          <a href="#">More info</a>
        </template>
        
        <!-- Template that will be rendered in <slot></slot> tags in Modal component -->
        <h1>{{ header }}</h1>
        <p>{{ content }}</p>
      </Modal>
    </teleport>

    <teleport to="#modals" v-if="isModalTwoShown">
      <Modal theme="" @close="handleModalTwoShown">
        <h1>Modal 2 header</h1>
        <p>Modal 2 text</p>

        <template v-slot:links>
          <a href="#">Click here!</a>
          <a href="#">Open for more</a>
        </template>
      </Modal>
    </teleport>

    <!-- Will react only if shift key is held down -->
    <button @click.shift="handleModalShown">Show Modal (shift)</button>
    <!-- Will react only if alt key is held down -->
    <button @click.alt="handleModalTwoShown">Show Modal 2 (alt)</button>
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
      // theme: "sale",
      isModalShown: false,
      isModalTwoShown: false,
    };
  },
  components: {
    Modal,
  },
  methods: {
    handleModalShown() {
      this.isModalShown = !this.isModalShown;
    },
    handleModalTwoShown() {
      this.isModalTwoShown = !this.isModalTwoShown;
    }
  },
};
</script>

<style>
#app, .modals, #modals {
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
