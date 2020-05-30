export default {
    state:{
        toolbarTransparent: true,
        processing:false,
        error: false,
    },
    mutations:{
        set_processing(state,payload){
            state.processing = payload
        },
        set_error(state,payload){
            state.error = payload
        },
        clean_error(state){
            state.error = null
        },
        toolbarTransparentTrue(state, payload){
            state.toolbarTransparent = payload
        },
    },
    actions:{
        SetToolbarTransparent({commit},payload){
            commit("toolbarTransparentTrue",payload)
        }
    },
    getters:{
        get_processing:(state) => state.processing,
        get_error:(state) => state.error,
        get_toolbarTransparent:(state) => state.toolbarTransparent,
    }
}
