<template>
  <div class="post">
    <router-link :to="{ name: 'details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
    <!-- <p>{{ post.body }}</p> -->
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
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
