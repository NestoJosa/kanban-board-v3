<template>
  <div class="status-column">
    <h2>{{ title }}</h2>
    <VueDraggableNext
      class="drag-area"
      :list="props.cardsList"
      group="cards"
      itemKey="id"
      @change="handleDragEnd"
    >
      <div class="" v-for="element in props.cardsList" :key="element.id">
        <TaskCard :title="element.title" :description="element.description" />
      </div>
    </VueDraggableNext>
  </div>
</template>

<script setup lang="ts">
import TaskCard from './TaskCard.vue'
import { VueDraggableNext } from 'vue-draggable-next'
const props = defineProps<{
  title: String
  cardsList: Array<{ id: number; title: string; description: string }>
}>()
const emit = defineEmits(['update:cardsList'])

const handleDragEnd = () => {
  emit('update:cardsList', props.cardsList)
}
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

.drag-area {
  height: 100%;
}
</style>
