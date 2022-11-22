<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'jobDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <!-- Only show the template below if it's loading... -->
  <div v-else>
    <p>Loading available jobs for you...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    }
  },
  async mounted() {
    try {
      const res = await fetch('http://localhost:3000/jobs');
      this.jobs = await res.json();
      console.log('this.jobs : ', this.jobs);
    } catch (error) {
      console.log('Error getting jobs : ', error.message);
    } 
  },
}
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>