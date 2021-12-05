import {addSign} from '@/api/index'

const state={
    list:[],
    current: {
      name: '',//学员姓名
      phone: '',//学员手机号
      song: undefined,//演出曲目
      // InvitationCode: ''//邀请码
    }
}
const mutations = {
    updateState(state, payload){
      state.current = {...state.current, ...payload};
    }
  }
const actions={
  async submit(state, {...payload}){
    return new Promise(async (resolve, reject)=>{
       // 填充经纬度
      payload.latitude = payload.address.location.lat;
      payload.longitude = payload.address.location.lng;
      // 序列号地址
      payload.address = JSON.stringify(payload.address);
      let result = await addSign(payload);
      // console.log("地址",payload.address)
      resolve(result);
    })
  }
}
  export default {
    namespaced: true,
    state,
    actions,
    mutations
  }