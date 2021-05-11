import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/index.js'
import AOS from "aos"
import "aos/dist/aos.css"
import VueMask from 'v-mask'
import VueMeta from 'vue-meta'
import VueAgile from 'vue-agile'
import Croppa from 'vue-croppa'
import VueGoodTablePlugin from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'
import VueScrollTo from 'vue-scrollto'
import './assets/sass/_main.scss'
const fb = require('./firebaseConfig.js')

Vue.use(VueAgile);
Vue.use(VueGoodTablePlugin);
Vue.use(Croppa);
Vue.use(VueMask);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})
Vue.use(require('vue-moment'))

Vue.use(VueScrollTo, {
   duration: 750,
   easing: "ease-in",
   offset: 0,
 })

Vue.config.productionTip = false
Vue.config.devtools = true

let app
fb.auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      created() {
    		AOS.init({ 
    			easing: 'ease-in-out',
    			offset: 0,
      		duration: 400,
          once: true,
          delay: 0,
    		});
    	},
      render: h => h(App)
    })
  }
})