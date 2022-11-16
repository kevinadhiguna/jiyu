<template>
  <div class="post">
    <h3>{{ post.title }}</h3>
    <!-- <p>{{ post.body }}</p> -->
    <p>{{ snippet }}</p>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
  props: ['post'],
  setup(props) {
    // If post content exceeds 100 chars, then it will add '...' instead of full content of the post
    const snippet = computed(() => {
      if (props.post.body.length > 100) {
        return props.post.body.substring(0, 100) + '...';
      } else {
        return props.post.body;
      }
    });

    return { snippet }
  },
}
</script>

<style></style>
