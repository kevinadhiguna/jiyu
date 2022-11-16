<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core';
import SinglePost from './SinglePost.vue';

export default {
  components: { SinglePost },
  props: ['posts'],
  setup(props) {
    console.log('props.posts : ', props.posts);

    // Lifecycle hooks in Composition API
    onMounted(() => {
      console.log('Component mounted!');
    });

    onUnmounted(() => {
      console.log('Component unmounted!');
    });

    onUpdated(() => {
      console.log('Component updated!');
    });
  },
}
</script>

<style></style>
