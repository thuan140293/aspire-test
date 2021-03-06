import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createStore } from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
  .use(createStore())
  .use(router)
  .use(ElementPlus)
  .mount('#app')

