
const state = {
    isCollapse: false
}
const actions = {

}
const mutations = {
    'CHANGECOLLAPSE'(state) {
        state.isCollapse = !state.isCollapse
    }

}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}
