
import {orderCancelApi} from '@/api'
const orderCancelStore = {
  namespaced: true,
  state: {
    rowData: [], // 주문취소/반품 Main 목록
    summary: {} // 주문취소/반품 Main Summary
  },
  getters: {
    getRowData: state => state.rowData,
    getSummary: state => state.summary
  },
  mutations: {
    SET_ROW_DATA: (state, data) => { state.rowData = data },
    SET_SUMMARY: (state, data) => { state.summary = data }
  },
  actions: {
    // 주문취소/반품정보 조회
    actionFindOrderCancelList: ({commit}, data) => {
      return new Promise(function (resolve, reject) {
        orderCancelApi.findOrderCancelList(data)
          .then(res => {
            commit('SET_ROW_DATA', res)
            resolve(res)
          })
          .catch(err => { reject(err) })
      })
    },
    // 주문취소/반품정보 Summary조회
    actionFindOrderCancelSummary: ({commit}, data) => {
      return new Promise(function (resolve, reject) {
        orderCancelApi.findOrderCancelSummary(data)
          .then(res => {
            commit('SET_SUMMARY', res)
            resolve(res)
          })
          .catch(err => { reject(err) })
      })
    }
  }
}

export default orderCancelStore
