import { customerCounselApi } from '@/api'

const customerCounselStore = {
  namespaced: true,
  state: {
    columnDef: [
      { label: 'NO', name: 'counselNo', sort: true },
      { label: '주문번호', name: 'orderNo', sort: true },
      {
        label: '상담내용',
        name: 'counselContents',
        sort: true,
        row_classes: 'table-text-left cs-ellipsis'
      },
      { label: '주문자명', name: 'customerName', sort: true },
      { label: '접수자', name: 'receiveName', sort: true },
      { label: '접수일자', name: 'dateReceived', sort: true },
      { label: '상담유형1', name: 'counselTypeCd', sort: true },
      { label: '상담유형2', name: 'childCounselTypeCd', sort: true },
      { label: '처리자', name: 'chargeName', sort: true },
      { label: '처리일자', name: 'dateCompleted', sort: true },
      { label: '상태', name: 'statusCd', sort: true }
    ],
    customCounselInfo: []
  },
  getters: {
    getColumnDef: state => state.columnDef
  },
  mutations: {
    SET_COUSTOMRCOUNSEL_INFO: (state, data) => {
      state.customCounselInfo = data
    }
  },
  actions: {
    actionFindCustomerCounselList: ({ commit }, data) => {
      return new Promise(function (resolve, reject) {
        customerCounselApi
          .customCounsel(data)
          .then(res => {
            commit('SET_COUSTOMRCOUNSEL_INFO', res)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    actionSaveCustomerCounsel: ({ commit }, data) => {
      return new Promise(function (resolve, reject) {
        customerCounselApi.SaveCustomCounselDetail(data).catch(err => {
          reject(err)
        })
      })
    }
  }
}

export default customerCounselStore
