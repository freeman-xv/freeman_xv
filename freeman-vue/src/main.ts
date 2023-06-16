// 全局样式
import '@/style/main.scss'

import { createApp } from 'vue'

// pinia持久化
import pinia from '@/config/pinia.config'

// vue-ls
import WebStorage from '@/config/vue-ls.config'

// elementPlus样式
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/style/element/dark.css'
import '@/style/var.css'

// 入口组件
import App from '@/App.vue'

// router
import router from '@/router'

// 创建vue实例
const app = createApp(App)
app.config.globalProperties.$ls = WebStorage.ls
app.use(pinia).use(router).mount('#app')