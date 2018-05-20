import axios from 'axios'
import { Socket } from 'dgram';

const state = {
    initPoint: '',
    orderList:[],
    curPMsg:{},
    gottenOrder:{}
}

const mutations = {
    setInitPoint(state, point) {
        state.initPoint = point;
    },
    setOrderList(state, orderList) {
        state.orderList = orderList;
    },
    setPMsg(state, passagerMsg) {
        state.curPMsg = passagerMsg;
    },
    setGottenOrder(state, order) {
        state.gottenOrder = order;
    }
    
}

export default {
    state,
    mutations
}