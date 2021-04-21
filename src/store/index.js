import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
const fb = require('../firebaseConfig.js')
Vue.use(Vuex)

fb.auth.onAuthStateChanged(user => {
  if (user) {
    store.commit('setCurrentUser', user)
    store.dispatch('fetchUserProfile')
    store.dispatch('fetchCustomerProfile')
    } else {
    store.commit('setCurrentUser', null)
  }
})

export const store = new Vuex.Store({
  state: {
  },
  actions: {
  },
  mutations: {
  },
})
