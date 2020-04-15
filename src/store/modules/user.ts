const state = {
    token:window.localStorage.getItem('token') ? window.localStorage.getItem('token') : '',
    username:''
}

const getters = {
    token:state.token,
    username:state.username
}

const mutations = {
    setToken (state:any, val:string):void {
        state.token = val 
        window.localStorage.setItem('token', val)
    },
    removeToken (state:any):void {
        state.token = ''
        window.localStorage.removeItem('token')
    }
}

export default {
    state,
    getters,
    mutations
}