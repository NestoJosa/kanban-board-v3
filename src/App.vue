<template>
  <h1>Kanban Board v3</h1>
  <div class="kanban-board">
    <StatusColumn :title="'To Do'" :cardsList="todoCards" />
    <StatusColumn :title="'Doing'" :cardsList="doingCards" />
    <StatusColumn :title="'Done'" :cardsList="doneCards" />
  </div>
</template>

<script setup lang="ts">
import StatusColumn from './components/StatusColumn.vue'

const todoCards = [
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
]
const doingCards = [
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
]
const doneCards = [
  {
    id: 6,
    title: 'Law whispered curve am',
    description:
      'Egg hour high anyone trap fellow shine herself army green above lay engine uncle thrown require gasoline living met excellent drew large handsome pink'
  }
]
</script>

<style scoped>
.kanban-board {
  display: flex;
  align-items: top;
  justify-content: center;
}
</style>
