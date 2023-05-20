import { defineStore } from 'pinia'

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const usePostStore = defineStore('post' ,{
  state: () => ({
    posts: [] as Post[],
    post: null as Post | null,
    loading: false,
    error: null,
  }),
  getters: {
    getPostsPerAuthor: (state) => {
      return (authorId: number) => state.posts.filter((post: Post) => post.userId === authorId)
    }
  }, 
  actions: {
    async fetchPosts() {
      this.posts = []
      this.loading = true
      try {
        this.posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json()) 
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false
      }
    },
    async fetchPost(id: String) {
      this.post = null
      this.loading = true
      try {
        this.post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false
      }
    }
  }
})