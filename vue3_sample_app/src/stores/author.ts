import { defineStore } from 'pinia'
import { usePostStore } from './post'

type GeoLocation = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoLocation;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export const useAuthorStore = defineStore({
  id: 'author',
  state: () => ({
    authors: [] as User[],
  }),
  getters: {
    getPostAuthor: (state) => {
      const postStore = usePostStore()

      return state.authors.find((author : User) => author.id === postStore.post?.userId)
    }
  },
  actions: {
    async fetchAuthors() {
      this.authors = await fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
    }
  }
})