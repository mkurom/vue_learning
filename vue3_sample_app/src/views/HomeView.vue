<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Counter from '../components/Counter.vue'
import LocalCounter from '../components/LocalCounter.vue'

import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()

</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <Counter />
    <br><br>
    <Counter />
    <br><br>
    <br><br>
    <LocalCounter />
    <br><br>
    <LocalCounter />
</main>
</template>
