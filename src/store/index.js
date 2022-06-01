import {createStore} from "vuex";
import layout from "@/store/Layout";
import Login from '@/store/Login'
export default createStore({
    modules: {
        layout,
        Login
    }
})

