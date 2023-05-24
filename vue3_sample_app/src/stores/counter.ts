import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/// setup storeの書き方
export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref<number>(0)

  // getter
  const doubleCount = computed(() => count.value * 2)

  // action
  function increment() {
    count.value++;
  }

  function decrement() {

    if (count.value <= 0){
      return;
    }

    count.value--;
  }

  function $reset() {
    count.value = 0
  }

  return { count, doubleCount, increment, decrement, $reset }
})

/// option storeの書き方
// export const useCounterStore = defineStore('counter', {
//   // state
//   state: () => ({ count: 0, name: 'Eduardo' }),

//   // getter
//   getters: {
//     doubleCount: (state) => state.count * 2,
//   },

//   // action
//   actions: {
//     increment() {
//       this.count++
//     },
//   },
// })