<template>
  <h1>Hola</h1>
  <StatusColumn :title="'To Do'" :cardsList="cardsList" />
</template>

<script setup lang="ts">
import StatusColumn from './components/StatusColumn.vue'

const cardsList = [
  { id: 1, title: 'Task 1', description: 'This is task 1' },
  { id: 2, title: 'Task 2', description: 'This is task 2' },
  { id: 3, title: 'Task 3', description: 'This is task 3' }
]
</script>

<style scoped></style>
