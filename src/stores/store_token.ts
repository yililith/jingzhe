import { defineStore } from 'pinia'
import { ref } from 'vue'


export const storeToken = defineStore("token", () => {
  const token = ref<string>('')

  const setToken = (value: string) => {
    token.value = value
  }

  const removeToken = () => {
    token.value = ''
  }

  return {
    token,
    setToken,
    removeToken
  }
})
