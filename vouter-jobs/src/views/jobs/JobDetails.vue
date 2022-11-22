<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>The job id of {{ job.title }} is {{ id }}</p>
    <p>{{ job.detail }}</p>
  </div>
  <!-- Only show the template below if it's loading... -->
  <div v-else>
    <p>Loading job detail...</p>
  </div>
</template>

<script>
export default {
  props: ['id'], // accepts id as props, thus one does not have to do something like 'id: this.$route.params.id'
  data() {
    return {
      // id: this.$route.params.id,
      job: null,
      detail: null,
    }
  },
  async mounted() {
    try {
      const res = await fetch('http://localhost:3000/jobs/' + this.id);
      this.job = await res.json();
    } catch (error) {
      console.log('Error getting a job : ', error.message);
    }
  }
}
</script>

<style>

</style>