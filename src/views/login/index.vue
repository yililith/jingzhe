<script setup lang="ts">
import login_svg from '@/assets/login_page_logo.svg'
import { Message } from '@arco-design/web-vue'
import { ref } from 'vue'
import { isMobile } from '@/utils/utils_menus'

import {
  IconUser,
  IconLock,
} from '@arco-design/web-vue/es/icon'
import { useRouter } from "vue-router";
import { storeToken } from "@/stores/store_token.ts";
import type { menuListModel } from '@/model/model_menu.ts'
import { storeMenu } from '@/stores/store_menu.ts'
import { loginFormRules } from '@/utils/utils_form_rules.ts'
import { api_login } from '@/api/api_user'
import { api_get_user_menu } from '@/api/api_menu'
import type { loginModel } from '@/model/model_user'

// 路由控制器
const router = useRouter()

// pinia缓存
const tokenStore = storeToken()
const menuStore = storeMenu()

const loginFormRef = ref()
// 表单规则
const rules = loginFormRules()
// 表单数据
const formData = ref({
  username: '',
  password: '',
})

// 登录事件
const loginBtn = () => {
  loginFormRef.value.validate().then(async () => {
    await api_login(formData.value.username, formData.value.password).then(async (data: loginModel) => {
      tokenStore.setToken(data.token!)
      await api_get_user_menu(data.uid).then((menus: menuListModel[]) => {
        menuStore.addMenu(menus)
        tokenStore.setUserInfo({
          uid: data.uid,
          nickname: data.nickname,
          image: data.image,
        })
        router.push('/')
      }).catch((error) => {
        Message.error(error.message || '获取菜单失败')
      })
    }).catch((error) => {
      Message.error(error.message || '登录失败')
    })
  }).finally(() => {
    formData.value = {
      username: '',
      password: '',
    }
  })
}

</script>

<template>
  <div class="login">
    <a-row align="stretch" class="login-box custom-login">
      <a-col :xs="0" :sm="12" :md="15">
        <div class="login-left">
          <a-image width="380px" height="380px" fit="contain" :src="login_svg" style="border: none;"></a-image>
        </div>
      </a-col>
      <a-col :xs="24" :sm="12" :md="9">
        <div class="login-right">
          <span class="login-right-font">Login</span>
          <a-form
            ref="loginFormRef"
            :size="isMobile() ? 'large' : 'medium'"
            :model="formData"
            :rules="rules"
            :style="{ width: '84%' }"
            :label-col-style="{ display: 'none' }"
            :wrapper-col-style="{ flex: 1 }"
          >
            <a-form-item field="username">
              <a-input v-model="formData.username" placeholder="请输入用户名" allow-clear>
                <template #prefix>
                  <icon-user :stroke-width="1" :style="{ fontSize: '20px' }" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item field="password">
              <a-input-password v-model="formData.password" placeholder="请输入密码" allow-clear>
                <template #prefix>
                  <icon-lock :stroke-width="1" :style="{ fontSize: '20px' }" />
                </template>
              </a-input-password>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" size="large" long @click="loginBtn">登录</a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="scss" scoped>
.login {
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
  &-box {
    width: 86%;
    max-width: 720px;
    height: 380px;
    display: flex;
    // background-color: rgb(251, 251, 251);
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.08);
  }
}
.login-left {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.login-right {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  box-sizing: border-box;
}

.login-right-font {
  font-size: 35px;
  margin-bottom: 16px;
  font-weight: bold;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
body[arco-theme='dark'] .custom-login {
  background-color: rgb(35, 35, 36);
}

body:not([arco-theme='dark']) .custom-login {
  background-color: rgb(251, 251, 251);
}
</style>
