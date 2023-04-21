import { createStore } from "vuex";
import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'

const store = createStore({
    actions,
    mutations,
    state
})

export default store;