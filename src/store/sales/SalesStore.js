import { salesApi } from '@/api'

const salesStore = {
  namespaced: true,
  state: {
    columnDef: [
      { label: '매출일자', name: 'dssRegdate', sort: true, type: 'Date' },
      { label: '일련번호', name: 'dssNumber', sort: true },
      { label: '거래처', name: 'cuName', sort: true, row_classes: 'table-text-left cs-ellipsis' },
      { label: '상태구분', name: 'dssStatus', sort: true },
      { label: '공급가', name: 'supplyPrice', sort: true, type: 'Number' },
      { label: '부가세', name: 'tax', sort: true, type: 'Number' },
      { label: '합계금액', name: 'totalPrice', sort: true, type: 'Number' },
      { label: '작성자', name: 'dssName', sort: true },
      { label: '변경자', name: 'chargeName', sort: true },
      { label: '메모', name: 'dssMemo', sort: true },
      {label: '관리', name: 'button', sort: false}
    ],
    businessInvoice: []
  },
  getters: {
    getColumnDef: state => state.columnDef
  },
  mutations: {
    SET_BUSINESSINVOICE_INFO: (state, data) => {
      state.businessInvoice = data
    }
  },
  actions: {
    actionFindBusinessInvoicelList: ({ commit }, data) => {
      return new Promise(function (resolve, reject) {
        salesApi
          .getBusinessInvoice(data)
          .then(res => {
            commit('SET_BUSINESSINVOICE_INFO', res)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    actionSaveBusinessInvoice: ({ commit }, data) => {
      return new Promise(function (resolve, reject) {
        salesApi.saveBusinessInvoice(data)
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}

export default salesStore
