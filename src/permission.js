import router from "@/router";
import store from "@/store";


router.beforeEach((to, from, next) => {
    const hasInfo = store.state.Login.userInfo
    if (hasInfo) {
        if(to.path==='/login'){
            next({path:'/'})
        }else {
            next()
        }

    }else {
       if(to.path==='/login'){
           next()
       }else {
           next({path:'/login'})
       }
    }

})
