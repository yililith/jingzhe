import './assets/main.css'

import { createApp } from 'vue'
import pinia from '@/stores/index'

import App from './App.vue'
import router from './router'

import '@/conf/conf_router_interception.ts'

import { Message } from '@arco-design/web-vue';

import '@arco-design/web-vue/es/message/style/index.less';
import '@arco-design/web-vue/es/notification/style/index.less';
import '@arco-design/web-vue/es/modal/style/index.less';

const app = createApp(App)

Message._context = app._context

app.use(pinia)
app.use(router)
app.use(Message)
app.mount('#app')
