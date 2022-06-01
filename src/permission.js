import router from "@/router";
import store from "@/store";
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
Nprogress.configure({ showSpinner: false })
router.beforeEach((to, from, next) => {
    const hasInfo = store.state.Login.userInfo
    Nprogress.start()
    if (hasInfo) {
        if(to.path==='/login'){
            next({path:'/'})
            Nprogress.done()
        }else {
            next()
            Nprogress.done()
        }

    }else {
       if(to.path==='/login'){
           next()
           Nprogress.done()
       }else {
           next({path:'/login'})
           Nprogress.done()
       }
    }

})
