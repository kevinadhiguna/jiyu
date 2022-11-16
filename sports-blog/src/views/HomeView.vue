<template>
  <div class="home">
    <h1>Home view</h1>
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="handleClick">Show posts</button>
    <button @click="deletePost">Delete a post</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import PostList from '../components/PostList.vue';

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    const posts = ref([
      { id: 1, title: 'Portugal to win World Cup 2022', body: 'CR7 aims to win World Cup 2022 with Portugal' }, 
      { id: 2, title: 'Prince of ice quits', body: 'Japanese figure skater, Yuzuru Hanyu, retires from competitive ice skating' }, 
      { id: 3, title: 'Angels eyes FA market', body: 'Los Angeles Angels targets some players in FA market to strengthen squad in order to make playoffs in 2023' }
    ]);

    let showPosts = ref(true);

    const handleClick = () => {
      showPosts.value = !showPosts.value;
    }

    const deletePost = () => {
      posts.value.pop();
    }

    return { posts, showPosts, handleClick, deletePost }
  },
}
</script>
