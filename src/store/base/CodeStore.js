
import {codeApi} from '@/api'
const codeStore = {
  namespaced: true,
  state: {
    codeGroupList: [], /* 코드그룹 */
    bigCodeList: [], /* 대분류 */
    midCodeList: [], /* 중분류 */
    smallCodeList: [] /* 소분류 */
  },
  getters: {
    getCodeGroupList: state => state.codeGroupList,
    getBigCodeList: state => state.bigCodeList,
    getMidCodeList: state => state.midCodeList,
    getSmallCodeList: state => state.smallCodeList
  },
  mutations: {
    SET_CODE_GROUP_LIST: (state, data) => { state.codeGroupList = data },
    SET_BIG_CODE_LIST: (state, data) => { state.bigCodeList = data },
    SET_MID_CODE_LIST: (state, data) => { state.midCodeList = data },
    SET_SMALL_CODE_LIST: (state, data) => { state.smallCodeList = data }
  },
  actions: {
    // 코드그룹 조회
    actionFindCodeGroup: ({commit}, data) => {
      return new Promise(function (resolve, reject) {
        codeApi.findCodeGroup(data)
          .then(res => {
            commit('SET_CODE_GROUP_LIST', res)
            resolve(res)
          })
          .catch(err => { reject(err) })
      })
    },
    // 코드상세
    actionFindCodeGroupDetail: ({commit}, data) => {
      return new Promise(function (resolve, reject) {
        codeApi.findCodeGroupDetail(data)
          .then(res => {
            commit('SET_BIG_CODE_LIST', res.data.bigCodeDetail)
            commit('SET_MID_CODE_LIST', res.data.middleCodeDetail)
            commit('SET_SMALL_CODE_LIST', res.data.smallCodeDetail)
            resolve(res.data)
          })
          .catch(err => { reject(err) })
      })
    },
    // 저장
    actionSaveCodeDetail: async ({commit}, payload) => {
      return codeApi.saveCodeDetail(payload)
    }
  }
}

export default codeStore
