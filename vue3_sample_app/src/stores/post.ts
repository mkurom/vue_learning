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
    async fetchPost(id: String | String[]) {
      this.post = null
      this.loading = true
      try {

        if (typeof id === 'string') {
          // 文字列型の処理
          const convertedString: String = String(id);
          // ...
        } else if (Array.isArray(id)) {
          // 文字列の配列の処理
          // 配列の要素を結合して文字列に変換するなど、適切な処理を行う
          const convertedString: String = id.join('');
          // ...
        }

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