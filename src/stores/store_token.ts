import type { loginModel } from '@/model/model_user'
import { defineStore } from 'pinia'
import { ref } from 'vue'


export const storeToken = defineStore("token", () => {
  const token = ref<string>('')

  const userInfo = ref<loginModel>({
    image: '',
    nickname: '',
    uid: ''
  })

  const setToken = (value: string) => {
    token.value = value
  }

  const setUserInfo = (value: loginModel) => {
    userInfo.value = value
  }
  
  const removeToken = () => {
    token.value = ''
  }

  const removeUserInfo = () => {
    userInfo.value = {
      image: '',
      nickname: '',
      uid: ''
    }
  }

  return {
    token,
    userInfo,
    setUserInfo,
    setToken,
    removeToken,
    removeUserInfo
  }
},{
  persist: true,
})
