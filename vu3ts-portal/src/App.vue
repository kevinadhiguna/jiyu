<template>
  <div class="app" v-for="job in jobs" :key="job.id">
    <p>ID : {{ job.id }}</p>
    <p>Title : {{ job.title }}</p>
    <p>Location : {{ job.location }}</p>
    <p>Salary : {{ job.salary }}</p>
  </div>
  <JobsList :jobs="jobs" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Job from './types/Job';

import JobsList from './components/JobsList.vue'; // <- When using TypeScript, one should add '.vue' extension at the end

export default defineComponent({
  name: 'App',
  components: { JobsList },
  setup() {
    const jobs = ref<Job[]>([
      { id: 1, title: 'Footballer', location: 'Brazil', salary: 170000 },
      { id: 2, title: 'Baseballer', location: 'Japan', salary: 150000 },
      { id: 3, title: 'Figure Skater', location: 'Russia', salary: 130000 },
      { id: 4, title: 'Interpreter', location: 'US', salary: 103000 },
      { id: 5, title: 'Fitness Coach', location: 'London', salary: 105000 },
    ]);

    return { jobs }
  },
  methods: {},
});
</script>

<style>
</style>
