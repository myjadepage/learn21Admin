import { getMenuItemList } from '@/api'

const sideMenu = {
  namespaced: true,
  state: {
    rowData: [],
    items: {} // 메뉴들
  },
  getters: {
    getBigTitle: state => idNum => {
      let aa = state.rowData.filter(el => el.mnCode === idNum)
      let temp = {}
      for (let i = 0; i < aa.length; i++) {
        temp = aa[i].mnName
      }
      return temp
    }
  },
  mutations: {
    menuRowData: (state, payload) => {
      state.rowData = payload
    }, // 전체 data
    setBaseMenu: (state, payload) => {
      state.items.base = payload
    }, // 기초
    setBuyMenu: (state, payload) => {
      state.items.buy = payload
    }, // 구매
    setSalesMenu: (state, payload) => {
      state.items.sales = payload
    }, // 영업
    setOrderMenu: (state, payload) => {
      state.items.order = payload
    }, // 주문
    setStockMenu: (state, payload) => {
      state.items.stock = payload
    }, // 물류
    setGoodsMenu: (state, payload) => {
      state.items.goods = payload
    }, // 상품
    setCsMenu: (state, payload) => {
      state.items.cs = payload
    }, // 상담
    setManageMenu: (state, payload) => {
      state.items.manage = payload
    }, // 운영
    setMemberMenu: (state, payload) => {
      state.items.member = payload
    }, // 직원
    setStatisticsMenu: (state, payload) => {
      state.items.statistics = payload
    } // 통계
  },
  actions: {
    // 대메뉴 api
    setMenuList: ({ commit }) => {
      getMenuItemList()
        .then(res => {
          commit('menuRowData', res.data)
          commit(
            'setBaseMenu',
            res.data.filter(el => el.mnRefcode === 8 && el.mnStep !== 1)
          )
          commit(
            'setBuyMenu',
            res.data.filter(el => el.mnRefcode === 0 && el.mnStep !== 1)
          )
          commit(
            'setSalesMenu',
            res.data.filter(el => el.mnRefcode === 6 && el.mnStep !== 1)
          )
          commit(
            'setOrderMenu',
            res.data.filter(
              el => el.mnRefcode === 1 && el.mnCode !== 19 && el.mnCode !== 20
            )
          )
          commit(
            'setStockMenu',
            res.data.filter(
              el => el.mnRefcode === 2 && el.mnStep !== 1 && el.mnCode !== 25
            )
          )
          commit(
            'setGoodsMenu',
            res.data.filter(el => el.mnRefcode === 3)
          )
          commit(
            'setCsMenu',
            res.data.filter(
              el => el.mnRefcode === 4 && el.mnStep !== 1 && el.mnCode !== 34
            )
          )
          commit(
            'setManageMenu',
            res.data.filter(el => el.mnRefcode === 5 && el.mnStep !== 1)
          )
          commit(
            'setMemberMenu',
            res.data.filter(
              el => el.mnRefcode === 7 && el.mnStep !== 1 && el.mnCode !== 42
            )
          )
          commit(
            'setStatisticsMenu',
            res.data.filter(el => el.mnRefcode === 9 && el.mnStep !== 1)
          )
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}

export default sideMenu
