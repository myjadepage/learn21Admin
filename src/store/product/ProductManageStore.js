
import {productManageApi} from '@/api'
const productManageStore = {
  namespaced: true,
  state: {
    rowData: [],
    detailRowData: [],
    categoryCodeList: [], /* 품목코드목록 */
    bigCodeList: [], /* 대분류 */
    midCodeList: [], /* 중분류 */
    smallCodeList: [], /* 소분류 */
    venProviderList: [] /* 공급처 */
  },
  getters: {
    getRowData: state => state.rowData,
    getDetailRowData: state => state.detailRowData,
    getCategoryCodeList: state => state.categoryCodeList,
    getBigCodeList: state => state.bigCodeList,
    getMidCodeList: state => state.midCodeList,
    getSmallCodeList: state => state.smallCodeList,
    getVenProviderList: state => state.venProviderList
  },
  mutations: {
    SET_ROW_DATA: (state, data) => { state.rowData = data },
    SET_DETAIL_ROW_DATE: (state, data) => { state.detailRowData = data },
    SET_CATEGORY_CODE_LIST: (state, data) => { state.categoryCodeList = data },
    SET_BIG_CODE_LIST: (state, data) => { state.bigCodeList = data },
    SET_MID_CODE_LIST: (state, data) => { state.midCodeList = data },
    SET_SMALL_CODE_LIST: (state, data) => { state.smallCodeList = data },
    SET_VEN_PROVIDER_LIST: (state, data) => { state.venProviderList = data }
  },
  actions: {
    // 상품리스트 조회
    actionFindProductList: ({commit}, data) => {
      return new Promise(function (resolve, reject) {
        productManageApi.findProductList(data)
          .then(res => {
            commit('SET_ROW_DATA', res)
            resolve(res)
          })
          .catch(err => { reject(err) })
      })
    },
    // 상품분류코드 조회
    actionFindCategoryCode: ({commit}, data) => {
      return new Promise(function (resolve, reject) {
        productManageApi.findCategoryCodeList(data)
          .then(res => {
            commit('SET_CATEGORY_CODE_LIST', res)
            resolve(res)
          })
          .catch(err => { reject(err) })
      })
    },
    // 대분류코드 리스트 SET
    actionSetBigCodeList: ({commit}, data) => { commit('SET_BIG_CODE_LIST', data) },
    // 중분류코드 리스트 SET
    actionSetMidCodeList: ({commit}, data) => { commit('SET_MID_CODE_LIST', data) },
    // 소분류코드 리스트 SET
    actionSetSmallCodeList: ({commit}, data) => { commit('SET_SMALL_CODE_LIST', data) },
    // 공급처 조회
    actionFindProvider: ({commit}, data) => {
      return new Promise(function (resolve, reject) {
        productManageApi.findProvider(data)
          .then(res => {
            commit('SET_VEN_PROVIDER_LIST', res)
            resolve(res)
          })
          .catch(err => { reject(err) })
      })
    },
    // 품목별 상품목록 조회
    actionFindProductDetail: ({commit}, data) => {
      return new Promise(function (resolve, reject) {
        productManageApi.findProductDetail(data)
          .then(res => {
            commit('SET_DETAIL_ROW_DATE', res)
            resolve(res)
          })
          .catch(err => { reject(err) })
      })
    },
    // 품목별 상품목록 저장
    actionSaveProductByItem: ({commit}, data) => {
      return new Promise(function (resolve, reject) {
        productManageApi.saveProductByItem(data)
          .then(res => { resolve(res) })
          .catch(err => { reject(err) })
      })
    },
    // 상품정보 일괄변경
    actionSaveBatch: ({commit}, data) => {
      return new Promise(function (resolve, reject) {
        productManageApi.saveBatch(data)
          .then(res => { resolve(res) })
          .catch(err => { reject(err) })
      })
    }
  }
}

export default productManageStore
