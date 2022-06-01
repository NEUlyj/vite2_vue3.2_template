import {setInfo,getInfo,removeInfo} from "@/util/userInfo.js";
import {resetRouter} from '@/router'
const state = {
    userInfo:getInfo()
}
const actions = {
    login({commit},value){
        // console.log(JSON.stringify(value))
        setInfo(JSON.stringify(value))
        commit('LOGIN',JSON.stringify(value))
    },
    exitSystem({commit}){
        removeInfo()
        resetRouter()
        commit('REMOVEINFO')
    }
}
const mutations = {
    LOGIN(state,value){
        state.userInfo=value
    },
    REMOVEINFO(state){
        state.userInfo=''
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}
