<template>
  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
  }),
  computed: {
    ...mapState(['currentUser', 'userProfile']),
  },
  components: {
    
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