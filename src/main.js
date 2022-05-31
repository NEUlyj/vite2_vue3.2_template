import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as http from './api'


const app = createApp(App)
app.use(router)
app.use(store)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.config.globalProperties.$http = http
app.use(ElementPlus, {locale: zhCn})
app.mount('#app')
