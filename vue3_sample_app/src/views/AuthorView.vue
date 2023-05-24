<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useAuthorStore } from '../stores/author'
  import { usePostStore } from '../stores/post'
  import Author from '../components/Author.vue'

  const route = useRoute();
  const { authors } = storeToRefs(useAuthorStore());
  const { getPostsPerAuthor } = storeToRefs(usePostStore());
  const { fetchPosts } = usePostStore();

  const getAuthorByUserName = computed(() => {
    return authors.value.find((author) => author.username === route.params.username)
  });

  const id = typeof getAuthorByUserName.value?.id === 'number' ? getAuthorByUserName.value?.id : 0;


  fetchPosts();
</script>

<template>
  <div>
    <author 
    :author="getAuthorByUserName" 
    :posts="getPostsPerAuthor(id)">
    </author>
  </div> 
</template>