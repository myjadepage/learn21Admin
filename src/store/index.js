import Vue from 'vue'
import Vuex from 'vuex'

import navToggle from './modules/NavToggle'
import sideMenu from './modules/SideMenu.js'
import codeStore from './base/CodeStore'
import itemStore from './base/ItemStore'
import itemGroupStore from './base/ItemGroupStore'
import itemInvoiceAddStore from './buy/itemInvoiceAddStore'
import itemSpecAddStore from './buy/itemSpecAddStore'
import productGroupStore from './product/ProductGroupStore'
import productManageStore from './product/ProductManageStore'
import shopStore from './base/shopStore'
import vendorStore from './base/vendorStore'
import orderStore from './order/OrderStore'
import orderCancelStore from './order/OrderCancelStore'
import orderRefundStore from './order/OrderRefundStore'
import manToManStore from './cs/manToManStore'
import customerCounselStore from './cs/customerCounselStore'
import salesStore from './sales/SalesStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    navToggle,
    sideMenu,
    codeStore,
    itemGroupStore,
    itemStore,
    itemInvoiceAddStore,
    itemSpecAddStore,
    productGroupStore,
    productManageStore,
    shopStore,
    vendorStore,
    orderStore,
    orderCancelStore,
    orderRefundStore,
    manToManStore,
    customerCounselStore,
    salesStore
  }
})
