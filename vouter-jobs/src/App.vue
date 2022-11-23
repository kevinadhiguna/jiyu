<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'jobs' }">Jobs</router-link>
    <!-- 
      One of the benefits of using ':to="{ name: 'about' }"' is that 
      even though the link ('/about' or '/about-us' or etc.) changes, the name does not.
    -->
  </nav>

  <button class="history-btn" @click="redirect">Redirect to Jobs</button>
  <button class="history-btn" @click="back">Go Back</button>
  <button class="history-btn" @click="forward">Go Forward</button>
  
  <router-view/>
</template>

<script>
export default {
  methods: {
    redirect() {
      // Go to jobs page (change route name to redirect to another page)
      this.$router.push({ name: 'jobs' });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: #fff;
  background: #42b983;
}

.history-btn {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
.history-btn:hover {
  cursor: pointer;
  color: #fff;
  background: #42b983;
}
</style>
