<script setup lang="ts">
import login_svg from  '@/assets/login_page.svg'
// 登录表单相关
import { FormInstance } from '@arco-design/web-vue'
import { ref } from 'vue'

import {
  IconUser,
  IconLock,
} from '@arco-design/web-vue/es/icon'

const loginFormRef = ref()
// 表单规则
const rules: FormInstance['rules'] = {
  username: [{ required: true, message: '请输入账号' }],
  password: [
    { required: true, message: '请输入密码' },
    { match: '/^\\d{6}$/', message: '输入密码格式不正确' }
  ]
}
// 表单数据
const formData = ref({
  username: '',
  password: '',
})
</script>

<template>
  <div class="login">
    <a-row align="stretch" class="login-box">
      <a-col :xs="0" :sm="12" :md="15">
        <div class="login-left">
          <a-image width="380px" height="380px" fit="contain" :src="login_svg"></a-image>
        </div>
      </a-col>
      <a-col :xs="24" :sm="12" :md="9">
        <div class="login-right">
          <a-form :ref="loginFormRef" :rules="rules" layout="inline">
            <a-form-item field="username">
              <a-input v-model="formData.username" placeholder="请输入用户名">
                <template #prefix>
                  <icon-user />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item field="password">
              <a-input v-model="formData.password" placeholder="请输入密码">
                <template #prefix>
                  <icon-lock />
                </template>
              </a-input>
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
  background-image: linear-gradient(to right,#fbc2eb,#a6c1ee);
  overflow: hidden;
  &-box {
    width: 86%;
    max-width: 720px;
    height: 380px;
    display: flex;
    z-index: 999;
    background-color: #fff;
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
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>
