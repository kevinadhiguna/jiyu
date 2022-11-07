<template>
  <!-- Only triggers a click event if event target is the element itself -->
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ 'sale-theme' : theme === 'sale' }">
      <!-- The 'Default content' text is only displayed if there's no elements to be rendered -->
      <slot>Default content</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['theme'],
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

.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}
.modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}

.modal.sale-theme {
  background-color: coral;
  color: #fff;
}
.modal.sale-theme h1 {
  color: #fff;
}
.modal.sale-theme .actions {
  color: #fff;
}
.modal.sale-theme .actions a {
  color: #fff;
}
</style>
