<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Job from '../types/Job';

export default defineComponent({
  props: {
    jobs: {
      required: true,
      type: Array as PropType<Job[]>
    },
  },
})
</script>

<style scoped>
</style>
