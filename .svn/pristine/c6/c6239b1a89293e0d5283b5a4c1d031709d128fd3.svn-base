// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vueMoment from 'vue-moment'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import VueHtmlToPaper from 'vue-html-to-paper'

import 'line-awesome/dist/line-awesome/css/line-awesome.min.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/learn21.css'
import 'jquery.nicescroll'

import RouterTab from 'vue-router-tab'
import 'vue-router-tab/dist/lib/vue-router-tab.css'

// VueHtmlToPaper option
const options = {
  name: '_blank',
  specs: ['fullscreen=yes', 'titlebar=yes', 'scrollbars=yes'],
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
  ]
}
// --------------------
// 테스트용
window._ = lodash
// --------------------

Vue.config.productionTip = false
Vue.use(RouterTab)
Vue.use(vueMoment)
Vue.use(VueHtmlToPaper, options)
Vue.use(VueLodash, { lodash: lodash })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
