import { defineStore } from 'pinia'
import { ref } from 'vue'


export const storeRouter = defineStore("router", () => {
  const isAddRouter = ref<boolean>(false)

  const changeIsAddRouter = (value: boolean) => {
    isAddRouter.value = value
  }

  return {
    isAddRouter,
    changeIsAddRouter
  }
})
