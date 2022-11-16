import { ref } from 'vue';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const postBaseUrl = `http://localhost:3000/posts/${id}`;

  const load = async() => {
    try {
      let res = await fetch(postBaseUrl);
      if (!res.ok) {
        throw Error('The post does not exist...');
      }

      post.value = await res.json();
    } catch (err) {
      error.value = err.message;
      console.error('Something went wrong : ', error.value);
    }
  }

  return { post, error, load }
}

export default getPost;
