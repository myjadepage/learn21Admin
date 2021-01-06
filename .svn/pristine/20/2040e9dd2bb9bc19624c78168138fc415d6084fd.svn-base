
import {productGroupApi} from '@/api'
const productGroupStore = {
  namespaced: true,
  state: {
    columnDef: [
      { label: '대분류', name: 'bigCategoryName', sort: false, row_classes: 'table-text-left' },
      { label: '중분류', name: 'midCategoryName', sort: false, row_classes: 'table-text-left' },
      { label: '소분류', name: 'smallCategoryName', sort: false, row_classes: 'table-text-left' },
      { label: '분류코드', name: 'categoryCode', sort: false },
      { label: '사용', name: 'isUsed', sort: false },
      { label: '상품수', name: 'productCnt', sort: false },
      { label: '관리', name: 'edit', sort: false }
    ],
    rowData: [],
    productByCategoryColumnDef: [
      { label: '상품코드', name: 'productCode', sort: false },
      { label: '상품명', name: 'productName', sort: false, row_classes: 'table-text-left' },
      { label: '품목ID', name: 'itemId', sort: false },
      { label: '상품구분', name: 'isStbTxt', sort: false },
      { label: '판매', name: 'statusCd', sort: false },
      { label: '브랜드', name: 'brandName', sort: false },
      { label: '공급처', name: 'providerName', sort: false },
      { label: '등록일자', name: 'dateSystemRegister', sort: false, type: 'Date' }
    ],
    productByCategoryRowData: [], // 상품분류별 상품목록
    productCategoryDetail: {}, // 상품분류 상세
    categoryCodeList: [], /* 상품분류 코드목록 */
    bigCodeList: [], /* 대분류 */
    midCodeList: [], /* 중분류 */
    smallCodeList: [] /* 소분류 */
  },
  getters: {
    getColumnDef: state => state.columnDef,
    getRowData: state => state.rowData,
    getProductByCategoryColumnDef: state => state.productByCategoryColumnDef,
    getProductByCategoryRowData: state => state.productByCategoryRowData,
    getProductCategoryDetail: state => state.productCategoryDetail,
    getCategoryCodeList: state => state.categoryCodeList,
    getBigCodeList: state => state.bigCodeList,
    getMidCodeList: state => state.midCodeList,
    getSmallCodeList: state => state.smallCodeList
  },
  mutations: {
    SET_CATEGORY_CODE_LIST: (state, data) => { state.categoryCodeList = data },
    SET_ROW_DATA: (state, data) => { state.rowData = data },
    SET_PRODUCT_BY_CATEGORY_ROW_DATA: (state, data) => { state.productByCategoryRowData = data },
    SET_PRODUCT_CATEGORY_DETAIL: (state, data) => { state.productCategoryDetail = data },
    SET_BIG_CODE_LIST: (state, data) => { state.bigCodeList = data },
    SET_MID_CODE_LIST: (state, data) => { state.midCodeList = data },
    SET_SMALL_CODE_LIST: (state, data) => { state.smallCodeList = data }
  },
  actions: {
    // 상품분류코드 조회
    actionFindCategoryCodeList: ({commit}, data) => {
      return new Promise(function (resolve, reject) {
        productGroupApi.findCategoryCodeList(data)
          .then(res => {
            commit('SET_CATEGORY_CODE_LIST', res)
            resolve(res)
          })
          .catch(err => { reject(err) })
      })
    },
    // 상품분류 메인그리드 조회
    actionFindCategoryCodeMainList: ({commit}, data) => {
      return new Promise(function (resolve, reject) {
        productGroupApi.findCategoryCodeMainList(data)
          .then(res => {
            commit('SET_ROW_DATA', res)
            resolve(res)
          })
          .catch(err => { reject(err) })
      })
    },
    // 상품분류별 상품목록 조회
    actionFindCategoryByProductList: ({commit}, data) => {
      return new Promise(function (resolve, reject) {
        productGroupApi.findCategoryByProductList(data)
          .then(res => {
            commit('SET_PRODUCT_BY_CATEGORY_ROW_DATA', res)
            resolve(res)
          })
          .catch(err => { reject(err) })
      })
    },
    // 상품분류 상세
    actionFindProductCategoryDetail: ({commit}, data) => {
      return new Promise(function (resolve, reject) {
        productGroupApi.findProductCategoryDetail(data)
          .then(res => {
            commit('SET_PRODUCT_CATEGORY_DETAIL', res)
            resolve(res)
          })
          .catch(err => { reject(err) })
      })
    },
    // 상품분류코드 저장/삭제
    actionSaveCategoryCodeList: ({commit}, data) => {
      return new Promise(function (resolve, reject) {
        productGroupApi.saveCategoryCodeList(data)
          .then(res => resolve(res))
          .catch(err => reject(err))
      })
    },
    // 대분류코드 리스트 SET
    actionSetBigCodeList: ({commit}, data) => {
      commit('SET_BIG_CODE_LIST', data)
    },
    // 중분류코드 리스트 SET
    actionSetMidCodeList: ({commit}, data) => {
      commit('SET_MID_CODE_LIST', data)
    },
    // 소분류코드 리스트 SET
    actionSetSmallCodeList: ({commit}, data) => {
      commit('SET_SMALL_CODE_LIST', data)
    }
  }
}

export default productGroupStore
