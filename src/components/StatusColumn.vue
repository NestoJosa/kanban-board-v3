<template>
  <div class="status-column">
    <h2>{{ title }}</h2>
    <VueDraggableNext
      class="dragArea"
      :list="cardsList"
      group="cards"
      itemKey="id"
      @start="
        () => {
          console.log('at-start-fired')
        }
      "
      @end="
        () => {
          console.log('at-end-fired')
        }
      "
      @change="
        () => {
          console.log('at-change-fired')
        }
      "
    >
      <div
        class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
        v-for="element in cardsList"
        :key="element.id"
      >
        <TaskCard :title="element.title" :description="element.description" />
      </div>
    </VueDraggableNext>
  </div>
</template>

<script setup lang="ts">
import TaskCard from './TaskCard.vue'
import { VueDraggableNext } from 'vue-draggable-next'
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
