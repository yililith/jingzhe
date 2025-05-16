

// login form rules

import type { FormInstance } from '@arco-design/web-vue'

export const loginFormRules = (): FormInstance['rules'] => {
  return {
    username: [{ required: true, message: '请输入账号' }],
    password: [
      { required: true, message: '请输入密码' },
      { min: 6, message: '密码最短6位' },
      { max: 16, message: '密码最长16位' },
      { match: /^[a-zA-Z0-9.]+$/, message: '输入密码格式不正确' }
    ]
  }
}
