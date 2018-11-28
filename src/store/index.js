import Vuex from "vuex"
import Vue from "vue"
import axios from "axios"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: '123'
  },
  actions: {
    getNavList_A({commit}){
      return new Promise((resolve,reject)=>{
        axios.get("/api/data").then((data)=>{   
           commit("getNavList_M",data.data.data)
           resolve()
         })
      })
      
    },
  },
  mutations: {
    dataList_M(state, data) {
      state.list = data
    },
  }
})
