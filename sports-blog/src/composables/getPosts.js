import { ref } from 'vue';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const postBaseUrl = 'http://localhost:3000/posts';

  // load function is actually not executed here
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

  return { posts, error, load }
}

export default getPosts;
