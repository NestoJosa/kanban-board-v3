<template>
  <v-card class="task-card" outlined>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ description }}</v-card-text>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<style scoped>
.task-card {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
}
</style>
