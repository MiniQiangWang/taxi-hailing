import axios from 'axios'

const state = {
    initOrderList:{}
}

const mutations = {
    setInitOrder(state, orderMsg) {
        state.initOrderList = orderMsg;
    }
}

export default {
    state,
    mutations
}