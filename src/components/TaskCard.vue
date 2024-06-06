<template>
  <v-card class="border pa-4 mb-2 brand-purple white-bg" outlined>
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
.brand-purple {
  color: rgb(56, 16, 16);
}

.white-bg {
  background-color: white !important;
}
</style>
