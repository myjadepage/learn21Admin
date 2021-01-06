import { zeroNumberFormat } from './../../assets/script'

const itemSpecAddStore = {
  namespaced: true,
  state: {
    buySpecInfo: {
      dpoOrderName: '',
      dpoMemo: ''
    },
    buySpecInfoItems: []
  },
  getters: {
    totalSupplyPrice (state) {
      return state.buySpecInfoItems.reduce((sum, el) => {
        sum = zeroNumberFormat(sum + el.dpiSupplyPrice)
        return (state.buySpecInfo.totalSupplyPrice = sum)
      }, 0)
    },
    totalTax (state) {
      return state.buySpecInfoItems.reduce((sum, el) => {
        sum = zeroNumberFormat(sum + el.dpiTax)
        return (state.buySpecInfo.totalTax = sum)
      }, 0)
    },
    totalCount (state) {
      return state.buySpecInfoItems.reduce((sum, el) => {
        sum = zeroNumberFormat(sum + el.dpiCount)
        return (state.buySpecInfo.totalCount = sum)
      }, 0)
    },
    totalPrice (state) {
      return state.buySpecInfoItems.reduce((sum, el) => {
        sum = zeroNumberFormat(sum + el.dpiTotalPrice)
        return (state.buySpecInfo.totalPrice = sum)
      }, 0)
    }
  },
  mutations: {
    addBuyItem: (state, payload) => {
      state.buySpecInfoItems.push(payload)
    }
  },
  actions: {}
}

export default itemSpecAddStore
