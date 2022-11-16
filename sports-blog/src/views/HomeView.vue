<template>
  <div class="home">
    <h1>Home view</h1>
    <div v-if="error">{{ error }}</div>

    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import getPosts from '../composables/getPosts';

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts();

    // Get the posts data
    load();

    return { posts, error }
  },
}
</script>
