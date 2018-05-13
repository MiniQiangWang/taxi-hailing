import axios from 'axios'

const state = {
    user:true,
    userMsg:{
        userId:'',
        userName:'',
        personName:'',
        sex:'',
        age:'',
        address:'',
        phone:'',
        occupation:'',
        discription:''
    },
    editExitTip:false
}

const mutations = {
    initUserInfo(state, userMsg) {
        state.userMsg = userMsg;
    },
    changeUserInfo(state, valueMsg) {
        for(let item in valueMsg) {
            state.userMsg[item] = valueMsg[item];
        }
        let userName = state.userMsg.userName

        axios.post('/users/update', {
            userName:userName,
            valueMsg:valueMsg
        }).then((response)=>{
            let res = response.data;
            if(res.status == '0'){
                state.editExitTip = true;
            }else{
                console.log('更改失败')
            }
          })
    },
    changeEditExitTip(state, tip) {
        state.editExitTip = tip;
    }
}

export default {
    state,
    mutations
}