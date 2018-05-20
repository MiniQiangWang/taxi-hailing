import axios from 'axios'

const state = {
    driverMsg:{
        d_id: '',
        d_userName: '',
        d_name: '',
        d_sex: '',
        d_address: '',
        d_phone: '',
        d_age: '',
        d_license: '',
        ID_number: '',
        car_model:'',
        car_plate:'',
        d_company:''
    },
    // editExitTip:false
}

const mutations = {
    initDriverInfo(state, driverMsg) {
        state.driverMsg = driverMsg;
        console.log("nihao",state.driverMsg)
    },
    changeDriverInfo(state, valueMsg) {
        for(let item in valueMsg) {
            state.driverMsg[item] = valueMsg[item];
        }
        let d_userName = state.driverMsg.d_userName
        axios.post('/drivers/update', {
            d_userName:d_userName,
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