<template>
  <h2 class="text-center">Kanban Board V3</h2>
  <div class="d-flex justify-center">
    <StatusColumn :title="'To Do'" :cardsList="todoCards" @update:cardsList="updateTodoCards" />
    <StatusColumn :title="'Doing'" :cardsList="doingCards" @update:cardsList="updateDoingCards" />
    <StatusColumn :title="'Done'" :cardsList="doneCards" @update:cardsList="updateDoneCards" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import StatusColumn from './components/StatusColumn.vue'

const todoCards = ref([
  {
    id: 1,
    title: 'Second firmament make creeping',
    description:
      'Night were also likeness. Whales him their abundantly. Saw was kind. Fourth yielding man cattle very'
  },
  {
    id: 2,
    title: 'Who due knew better industrial',
    description:
      'Arrange about suddenly change clay park traffic warm forest iron broke load position anybody chicken escape wave though shout palace glad operation are call'
  },
  {
    id: 3,
    title: 'Exercise chief apart beneath',
    description:
      'Purpose he judge indicate rubber tell easier far highway cover printed form cream tears writer do brick there stone broad frozen three universe fall'
  }
])
const doingCards = ref([
  {
    id: 4,
    title: 'Nails smile everybody share',
    description:
      'Letter gently smooth effort common ten program worker private child sitting lead feathers spirit rush game protection fought boat sent without might mathematics area'
  },
  {
    id: 5,
    title: 'Capital beyond composition',
    description:
      'Goose car rock size plus baseball traffic began had express bottom region trail structure gather earn worse butter older once lunch worker cowboy knew'
  }
])
const doneCards = ref([
  {
    id: 6,
    title: 'Law whispered curve am',
    description:
      'Egg hour high anyone trap fellow shine herself army green above lay engine uncle thrown require gasoline living met excellent drew large handsome pink'
  }
])

// Define a type 'Card' which represents a card object.
type Card = {
  id: number
  title: string
  description: string
}

const updateTodoCards = (newCards: Card[]) => {
  todoCards.value = newCards
}

const updateDoingCards = (newCards: Card[]) => {
  doingCards.value = newCards
}

const updateDoneCards = (newCards: Card[]) => {
  doneCards.value = newCards
}
</script>

<style scoped></style>
