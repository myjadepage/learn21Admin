
import {orderRefundApi} from '@/api'
const orderRefundStore = {
  namespaced: true,
  state: {
    rowData: [], // 환불관리 Main 목록
    summary: {} // 환불관리 Main Summary
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
    // 환불관리 Main 목록
    actionFindOrderRefundList: ({commit}, data) => {
      return new Promise(function (resolve, reject) {
        orderRefundApi.findOrderRefundList(data)
          .then(res => {
            commit('SET_ROW_DATA', res)
            resolve(res)
          })
          .catch(err => { reject(err) })
      })
    },
    // 환불관리 Main Summary
    actionFindOrderRefundSummary: ({commit}, data) => {
      return new Promise(function (resolve, reject) {
        orderRefundApi.findOrderRefundSummary(data)
          .then(res => {
            commit('SET_SUMMARY', res)
            resolve(res)
          })
          .catch(err => { reject(err) })
      })
    }
  }
}

export default orderRefundStore
