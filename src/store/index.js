import {Store} from 'vuex'

const store = new Store({
    state() {
        return {
            id: '',
            authToken: '',
        }
    },
    mutations: {
        setId(state, val) {
            state.id = val
        },
        setToken(state, val) {
            state.authToken = val
            sessionStorage.setItem('token', val)
        },
        clearToken(state) {
            state.authToken = ''
            sessionStorage.setItem('token', '')
        }
    },
    actions:{

    },
    modules: {

    }
})

export default store
