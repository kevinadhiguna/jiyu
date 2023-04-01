<template>
  <div>
    <p>Product ID: {{ id }}</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat repellendus dicta deserunt? Neque eaque asperiores temporibus, hic animi sit eius!</p>
  </div>
</template>

<script setup>
  // The param inside the '{}' should be equal with the filename ('[].vue')
  const { id } = useRoute().params;

  definePageMeta({
    layout: 'products'
  });
</script>

<style scoped>

</style>