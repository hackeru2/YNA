// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import locale from 'element-ui/lib/locale/lang/en'
import ElementUI from 'element-ui';
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false

Vue.use(ElementUI, { locale })

const store = new Vuex.Store({
  state: {
    count: 0,
    editRow: {},
    products:[],
  },
  mutations: {
    setEditRow (state, editRow) { state. editRow = editRow },
    setProducts(state , products) {
        state.products =  products
    },
    increment (state) {
      state.count++
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
