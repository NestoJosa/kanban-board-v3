<template>
  <div class="brand-yellow border fill-height pa-3">
    <h2 class="brand-purple text-center ma-3">{{ title }}</h2>
    <VueDraggableNext
      class="fill-height"
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
.brand-purple {
  color: rgb(56, 16, 16);
}

.brand-yellow {
  background-color: #ffecbe50;
}
</style>
