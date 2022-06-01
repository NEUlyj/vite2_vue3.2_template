import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as http from './api'
import './permission'
import 'element-plus/theme-chalk/el-message.css'

const app = createApp(App)
app.use(router)
app.use(store)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.config.globalProperties.$http = http
app.mount('#app')
