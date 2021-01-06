import { vendorApi } from '@/api'
const vendorStore = {
  namespaced: true,
  state: {
    columnDef: [
      { label: 'No', name: 'cuCode', sort: true },
      { label: '구분', name: 'cuType', sort: true },
      {
        label: '거래처명',
        name: 'cuName',
        sort: true,
        row_classes: 'table-text-left'
      },
      { label: '사업자번호', name: 'cuOfiiceNumber', sort: true },
      { label: '대표자', name: 'cuCeoName', sort: true },
      { label: '전화', name: 'cuTel', sort: true },
      { label: 'FAX', name: 'cuFax', sort: true },
      { label: '지역', name: 'cuArea', sort: true },
      { label: '거래처 그룹', name: 'dcuCode', sort: true },
      { label: '관리', name: 'buttons', sort: true }
    ],
    columnDefPopup: [
      { label: 'No', name: 'cuCode', sort: true, row_classes: 'w100' },
      { label: '구분', name: 'cuType', sort: true, row_classes: 'w100' },
      {
        label: '거래처명',
        name: 'cuName',
        sort: true,
        row_classes: 'table-text-left'
      },
      { label: '선택', name: 'buttons', sort: false, row_classes: 'w100' }
    ],
    vendorInfo: []
  },
  getters: {
    getColumnDef: state => state.columnDef,
    getcolumnDefPopup: state => state.columnDefPopup, // popup용
    getVendorInfo: state => state.vendorInfo
  },
  mutations: {
    SET_VENDOR_INFO: (state, data) => {
      state.vendorInfo = data
    }
  },
  actions: {
    actionFindVendorList: ({ commit }, data) => {
      return new Promise(function (resolve, reject) {
        vendorApi
          .getAcList(data)
          .then(res => {
            commit('SET_VENDOR_INFO', res)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    actionSaveVendor: ({ commit }, data) => {
      return new Promise(function (resolve, reject) {
        vendorApi.updateAc(data).catch(err => {
          reject(err)
        })
      })
    }
  }
}

export default vendorStore
