<template>
  <div class="task-card">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<style scoped>
.task-card {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
}
</style>
