export const setInfo=(value)=>{
    return sessionStorage.setItem('userInfo',value)
}
export const getInfo=()=>{
    return sessionStorage.getItem('userInfo')
}
export const removeInfo = ()=>{
    return sessionStorage.removeItem('userInfo')
}
