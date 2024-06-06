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

<style scoped></style>
