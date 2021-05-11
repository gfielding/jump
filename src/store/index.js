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
  	currentUser: null,
    userProfile: {},
  },
  actions: {
  	/*AUTH & LOGIN*/
    fetchUserProfile({ commit, state }) {
      fb.usersCollection.doc(state.currentUser.uid)
      .onSnapshot(function (doc) {
        if (doc.exists) {
          commit('setUserProfile', doc.data())
        } else {
        }
      })
    },
    async logout({ commit, dispatch }) {
      await fb.auth.signOut()
      dispatch('clearData')
      router.push('/')
    },
  },
  mutations: {
  	setCurrentUser(state, val) {
      state.currentUser = val
    },
    setUserProfile(state, val) {
      state.userProfile = val
    },
  },
})
