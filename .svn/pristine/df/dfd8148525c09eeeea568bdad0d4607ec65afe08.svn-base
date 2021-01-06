import {manToManApi} from '@/api'

const manToManStore = {
  namespaced: true,
  state: {
    columnDef: [
      {label: 'No', name: 'counselNo', sort: true},
      {label: '제목', name: 'title', sort: true, row_classes: 'table-text-left'},
      {label: '작성자명', name: 'userNameCreatedBy', sort: true},
      {label: '상담구분', name: 'counselCategoryCd', sort: true, row_classes: 'table-text-left'},
      {label: '상담유형1', name: 'counselTypeCd', sort: true},
      {label: '상담유형2', name: 'childCounselTypeCd', sort: true, row_classes: 'table-text-left'},
      {label: '담당자', name: 'chargeName', sort: true},
      {label: '상태', name: 'statusCd', sort: true},
      {label: '작성일자', name: 'dateCreated', sort: true, type: 'Date'}],
    manToManList: [],
    manToManInfo: [],
    manToManCode: {}
  },
  getters: {
    getColumnDef: state => state.columnDef,
    getManToManList: state => state.manToManList,
    getManToManCode: state => state.manToManCode
  },
  mutations: {
    SET_MANTOMAN_LIST: (state, data) => { state.manToManList = data },
    SET_MANTOMAN_INFO: (state, data) => { state.manToManInfo = data },
    SET_MANTOMAN_CODE_LIST: (state, data) => { state.manToManCode = data }
  },
  actions: {
    actionFindManToManList: ({commit}, data) => {
      return new Promise(function (resolve, reject) {
        manToManApi.getManToManList(data)
          .then(res => {
            commit('SET_MANTOMAN_LIST', res)
            // console.log(res)
            resolve(res)
          })
          .catch(err => { reject(err) })
      })
    },
    actionManToManDetail: ({commit}, data) => {
      return new Promise(function (resolve, reject) {
        manToManApi.getManToManDetail(data)
          .then(res => {
            commit('SET_MANTOMAN_INFO', res)
            // console.log(res)
            resolve(res)
          })
          .catch(err => { reject(err) })
      })
    },
    actionManToManCounseCode: ({commit}, data) => {
      return new Promise(function (resolve, reject) {
        manToManApi.getManToManCode()
          .then(res => {
            commit('SET_MANTOMAN_CODE_LIST', res)
            console.log(res)
            resolve(res)
          })
          .catch(err => { reject(err) })
      })
    },
    actionInsertManToManReply: ({commit}, data) => {
      return new Promise(function (resolve, reject) {
        manToManApi.inertManToManReply(data)
          .catch(err => { reject(err) })
      })
    }
  }
}

export default manToManStore
