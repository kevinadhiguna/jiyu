<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
</template>

<script>
import getPost from '../composables/getPost';

export default {
  props: ['id'],
  setup(props) {
    const { post, error, load } = getPost(props.id);

    load();

    return { post, error }
  },
}
</script>

<style>

</style>