<template>
  <!-- Only triggers a click event if event target is the element itself -->
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ 'sale-theme' : theme === 'sale' }">
      <h1>{{ header }}</h1>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header', 'content', 'theme'],
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style>
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: #fff;
  border-radius: 10px;
}
.modal h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}
.modal p {
  font-style: normal;
}

.modal.sale-theme {
  background-color: coral;
  color: #fff;
}
.modal.sale-theme h1 {
  color: #fff;
}
</style>
