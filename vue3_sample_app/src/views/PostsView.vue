<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { usePostStore } from '../stores/post'

  const { posts, loading } = storeToRefs(usePostStore())
  const { fetchPosts } = usePostStore()

  setTimeout(async () => {
    fetchPosts()
  },3000)

</script>

<template>
  <main>
    <p v-if="loading">Loading posts...</p>
    <p v-if="posts" v-for="post in posts" :key="post.id">
      <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
      <p>{{ post.body }}</p>
    </p>
  </main>
</template>
