<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};
</script>

<template>
  <h1>local store</h1>
  <p>{{ count }}</p>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
</template>