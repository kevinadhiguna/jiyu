<template>
  <div class="home">
    <h1>Home view</h1>
    <div v-if="error">{{ error }}</div>
    <PostList v-if="showPosts" :posts="posts" />

    <div v-if="!error">
      <button @click="handleClick">Show posts</button>
      <button @click="deletePost">Delete a post</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import PostList from '../components/PostList.vue';

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    const posts = ref([]);
    const error = ref(null);

    const postBaseUrl = 'http://localhost:3000/posts';

    const load = async() => {
      try {
        let res = await fetch(postBaseUrl);
        if (!res.ok) {
          throw Error('no data available');
        }

        posts.value = await res.json();
      } catch (err) {
        error.value = err.message;
        console.error('Something went wrong : ', error.value);
      }
    }

    load();

    let showPosts = ref(true);

    const handleClick = () => {
      showPosts.value = !showPosts.value;
    }

    const deletePost = () => {
      posts.value.pop();
    }

    return { posts, showPosts, handleClick, deletePost, error }
  },
}
</script>
