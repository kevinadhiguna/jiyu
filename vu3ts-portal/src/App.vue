<template>
  <div class="app">
    <header>
      <div class="title">
        <img src="./assets/images/heart.svg" alt="Vu3ts site logo">
        <h1>Vu3ts Portal</h1>
      </div>
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
  header {
    text-align: center;
  }
  header .order {
    margin-top: 20px;
  }
  button {
    margin: 0 10px;
    color: #1195c9;
    border: 3px solid #1195c9;
    background: #d5f0ff;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
  header .title {
    display: flex;
    justify-content: center;
  }
  header img {
    width: 60px;
    margin-right: 20px;
  }
  header h1 {
    font-size: 3em;
  }
</style>
