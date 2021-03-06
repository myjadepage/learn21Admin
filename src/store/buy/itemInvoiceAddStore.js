import Vue from 'vue'

import { getPurchaseDetail, inputPurchaseInvoice } from '@/api'
import { zeroNumberFormat } from './../../assets/script'

const itemInvoiceAddStore = {
  namespaced: true,
  state: {
    buyItems: [], // 구매발주성 info
    buyInfo: {
      dpoOrderName: '',
      dpoMemo: ''
    }
  },
  getters: {
    totalSupplyPrice (state) {
      return state.buyItems.reduce((sum, el) => {
        sum = zeroNumberFormat(sum + Number(el.dpiSupplyPrice))
        return (state.buyInfo.totalSupplyPrice = Number(sum))
      }, 0)
    },
    totalTax (state) {
      return state.buyItems.reduce((sum, el) => {
        sum = zeroNumberFormat(sum + Number(el.dpiTax))
        return (state.buyInfo.totalTax = Number(sum))
      }, 0)
    },
    totalCount (state) {
      return state.buyItems.reduce((sum, el) => {
        sum = zeroNumberFormat(sum + Number(el.dpiCount))
        return (state.buyInfo.totalCount = Number(sum))
      }, 0)
    },
    totalPrice (state) {
      return state.buyItems.reduce((sum, el) => {
        sum = zeroNumberFormat(sum + Number(el.dpiTotalPrice))
        return (state.buyInfo.totalPrice = Number(sum))
      }, 0)
    }
  },
  mutations: {
    SET_VENDOR_NAME: (state, payload) => {
      state.buyInfo.dcuName = payload
    },
    SET_VENDOR_CODE: (state, payload) => {
      state.buyInfo.dcuCode = payload
    },
    addBuyItem: (state, payload) => {
      state.buyItems.push(payload)
    },
    VIEW_ITEMS: (state, payload) => {
      payload.map(el => {
        state.buyItems.push({
          dpiCode: el.dpiCode,
          dpiCount: el.dpiCount,
          dpiEa: el.dpiEa,
          dpiLastdate: el.dpiLastdate,
          dpiMemo: el.dpiMemo,
          dpiRegdate: el.dpiRegdate,
          dpiStock: el.dpiStock,
          dpiSupplyPrice: el.dpiSupplyPrice,
          dpiTax: el.dpiTax,
          dpiTotalPrice: el.dpiTotalPrice,
          dpiUnitPrice: el.dpiUnitPrice,
          dpoCode: el.dpoCode,
          itemId: el.itemId,
          itemIsbnNum: el.itemIsbnNum,
          itemName: el.itemName,
          itemStandard: el.itemStandard
        })
      })
    },
    VIEW_INFO: (state, payload) => {
      state.buyInfo = payload
    },
    CLOSE: (state, paylod) => {
      state.buyInfo = {}
      state.buyItems = []
    },
    CLEAR: (state, paylod) => {
      state.buyInfo = {}
      state.buyItems = []
    }
  },
  actions: {
    setVendorName: ({ commit }, data) => {
      commit('SET_VENDOR_NAME', data)
    },
    setVendorCode: ({ commit }, data) => {
      commit('SET_VENDOR_CODE', data)
    },
    viewItems: ({ commit }, data) => {
      commit('VIEW_ITEMS', data)
    },
    viewInfo: ({ commit }, data) => {
      commit('VIEW_INFO', data)
    },
    // 저장 클릭시
    saveInvoice ({ dispatch, state }) {
      const container = {}
      container.rctCode = state.buyInfo.dcuCode
      container.dcuCode = state.buyInfo.dcuCode
      container.dpoIncome = '내수'
      container.dpoState = '진행'
      container.dpoMemo = state.buyInfo.dpoMemo
      container.dpoSerialNo = ''
      container.dpoOrderName = state.buyInfo.dpoOrderName
      container.dpoOrderRegdate = Vue.moment(
        state.buyInfo.dpoOrderRegdate
      ).format('YYYY-MM-DD')
      container.dpoWarehousingRegdate = Vue.moment(
        state.buyInfo.dpoWarehousingRegdate
      ).format('YYYY-MM-DD')
      container.dpoRegdate = ''
      container.dpoLastdate = ''
      let params = {}
      params.porderList = container
      params.porderItems = state.buyItems
      dispatch('inputPurchaseInvoiceAdd', params)
    },
    inputPurchaseInvoiceAdd: ({ commit }, payload) => {
      return new Promise(function (resolve, reject) {
        inputPurchaseInvoice(payload)
          .then(res => {
            console.log(res)
            resolve(res)
            alert('저장되었습니다.')
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getDetail: ({ commit }, data) => {
      return new Promise(function (resolve, reject) {
        getPurchaseDetail(data)
          .then(res => {
            console.log(res)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}

export default itemInvoiceAddStore
