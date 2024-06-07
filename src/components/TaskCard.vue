<template>
  <v-card class="border brand-color-purple brand-bg-white mb-2" outlined>
    <v-card-title class="pt-5">{{ title }}</v-card-title>
    <v-card-text>{{ description }}</v-card-text>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<style scoped></style>
