<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
</script>

<template>
  <h1>Pinia setup store</h1>
  <p>store.count</p>
  <p>Count:{{ store.count }}</p>
  <p>store.doubleCount</p>
  <p>Count:{{ store.doubleCount }}</p>
  <button @click="store.increment">Up</button>
  <button @click="store.decrement">Down</button>
</template>