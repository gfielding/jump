<template>
  <div id="app" v-bind:class="currentTheme">
    <Nav @clicked="onClickChild" />
    <router-view :key="$route.fullPath"></router-view>
    <Cookies />
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Cookies from '@/components/Cookies.vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  data: () => ({
    currentTheme:'',
  }),
  computed: {
    ...mapState(['currentUser', 'userProfile']),
  },
  components: {
    Cookies,
    Footer,
    Nav
  },
  methods: {
    onClickChild (value) {
      console.log(value)
      this.currentTheme = value
    },
  },
  mounted() {
    if (localStorage.theme) {
      this.currentTheme = localStorage.theme
    }
  },
  metaInfo: () => ({
    title: 'Jump Staffing',
    titleTemplate: '%s | We Staff Music Festivals',
    htmlAttrs: {
      lang: 'en',
      amp: undefined
    },
    headAttrs: {
      test: true
    },
    bodyAttrs: {
      tabIndex: 0
    },
    meta: [
      { name: 'description', content: "Food and Beverage Staffing for Music Festivals, Concerts, and large Sporting Events" }
    ],
  })
};
</script>