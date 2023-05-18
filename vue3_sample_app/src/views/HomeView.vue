<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Counter from '../components/Counter.vue'

import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()

</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <Counter />
</main>
</template>
