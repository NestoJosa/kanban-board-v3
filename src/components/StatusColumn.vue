<template>
  <div class="brand-bg-yellow border fill-height rounded pa-4">
    <h2 class="color-purple text-center my-2 my-md-4">{{ title }}</h2>
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

<style scoped></style>
