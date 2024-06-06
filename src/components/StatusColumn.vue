<template>
  <div class="status-column">
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="card in cardsList" :key="card.id">
        <TaskCard :title="card.title" :description="card.description" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import TaskCard from './TaskCard.vue'
defineProps<{
  title: String
  cardsList: Array<{ id: number; title: string; description: string }>
}>()
</script>

<style scoped>
.status-column {
  border: 1px solid #ccc;
  padding: 20px;
  background-color: #f9f9f9;
  width: 250px;
  margin-right: 20px;
}

.status-column h2 {
  margin-bottom: 20px;
  text-align: center;
}

.status-column ul {
  list-style-type: none;
  padding: 0;
}
</style>
