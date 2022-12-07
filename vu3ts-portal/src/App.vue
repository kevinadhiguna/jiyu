<template>
  <div class="app">
    <header>
      <div class="order">
        <button @click="handleClick('title')">order by title</button>
        <button @click="handleClick('salary')">order by salary</button>
        <button @click="handleClick('location')">order by location</button>
      </div>
    </header>
    <JobsList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Job from './types/Job';
import OrderTerm from './types/OrderTerm';

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

    const order = ref<OrderTerm>('title');
    const handleClick = (term: OrderTerm) => {
      order.value = term;
    }

    return { jobs, handleClick, order }
  },
  methods: {},
});
</script>

<style>
</style>
