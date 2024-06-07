<template>
  <v-container class="pa-4 pa-lg-8">
    <h1 class="text-center py-4 brand-color-purple">Kanban Board v3</h1>
    <v-row>
      <v-col cols="12" md="4">
        <StatusColumn :title="'To Do'" :cardsList="todoCards" @update:cardsList="updateTodoCards" />
      </v-col>
      <v-col cols="12" md="4">
        <StatusColumn
          :title="'Doing'"
          :cardsList="doingCards"
          @update:cardsList="updateDoingCards"
        />
      </v-col>
      <v-col cols="12" md="4">
        <StatusColumn :title="'Done'" :cardsList="doneCards" @update:cardsList="updateDoneCards" />
      </v-col>
    </v-row>
  </v-container>
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

<style></style>
