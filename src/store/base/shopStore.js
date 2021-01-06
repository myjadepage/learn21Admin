import {shopApi} from '@/api'
const shopStore = {
  namespaced: true,
  state: {
    columnDef: [
      {label: 'No', name: 'fuCode', sort: true},
      {label: '그룹', name: 'fgCode', sort: true},
      {label: '가맹점명', name: 'fuName', sort: true, row_classes: 'table-text-left'},
      {label: '사업자번호', name: 'fuoFiiceNumber', sort: true},
      {label: '대표자', name: 'fuCeoName', sort: true},
      {label: '전화', name: 'fuTel', sort: true},
      {label: 'FAX', name: 'fuFax', sort: true},
      {label: '지역', name: 'fuArea', sort: true},
      {label: '외부연결코드', name: 'fuOutCode', sort: true},
      {label: '그룹코드', name: 'fuType', sort: true},
      {label: '관리', name: 'button', sort: false}],
    shopInfo: []
  },
  getters: {
    getColumnDef: state => state.columnDef,
    getShopInfo: state => state.shopInfo
  },
  mutations: {
    SET_SHOP_INFO: (state, data) => { state.shopInfo = data }
  },
  actions: {
    actionFindShopList: ({commit}, data) => {
      return new Promise(function (resolve, reject) {
        shopApi.getFcList(data)
          .then(res => {
            commit('SET_SHOP_INFO', res)
            resolve(res)
          })
          .catch(err => { reject(err) })
      })
    },
    actionUpdateShop: ({commit}, data) => {
      return new Promise(function (resolve, reject) {
        shopApi.updateFc(data)
          .catch(err => { reject(err) })
      })
    }
  }
}

export default shopStore
