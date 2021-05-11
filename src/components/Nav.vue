<template>
	<div class="nav">
		<div class="nav__container">
			<div class="nav__logo">
        <img src="https://firebasestorage.googleapis.com/v0/b/jump-staffing.appspot.com/o/band1.svg?alt=media&token=9a130393-444e-4a77-888f-a12a4a982b3a" alt="">
				<router-link to="/">
					JUMP Staffing
				</router-link>
			</div>
			<div class="nav__items">
        <div class="nav__items--item">
          <router-link :to="{name: 'home'}">
            <span class="hiddenSmAndDown pa-0">Work For Us</span>
            <span class="hiddenMdAndUp pa-0">Sign Up</span>

          </router-link>/
          <router-link :to="{name: 'home'}">
            Login
          </router-link>
        </div>
				<!-- <div class="nav__items--item">
          <a @click="switchTheme"><i class="fas" v-bind:class="[isDark ? 'fa-moon' : 'fa-sun', '']"></i></a>
        </div> -->
				<!-- <router-link :to="{name: 'home'}" tag="button">Catalog</router-link>
				<router-link :to="{name: 'howToOrder'}" tag="button" class="hiddenSmAndDown">How To Order</router-link>
				<router-link :to="{name: 'contact'}" tag="button">Contact<span class="hiddenSmAndDown"> Us</span></router-link>
  			<router-link :to="{name: 'login'}" tag="button" v-if="!currentUser">Login</router-link>
				<router-link :to="{name: 'dashHome'}" tag="button" v-if="currentUser">Dashboard</router-link>
				<router-link :to="{name: 'register'}" tag="button" v-if="!currentUser" class="hiddenSmAndDown">Register</router-link> -->
				<!-- <router-link :to="{name: 'dashProducts'}" tag="button" v-if="userProfile && userProfile.access === 'admin'">Products</router-link> -->
				
				<!-- <button @click="logout()" v-if="currentUser">Logout</button> -->
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data: () => ({
    currentTheme: localStorage.getItem('theme')
  }),
	computed: {
    ...mapState(['currentUser', 'userProfile']),
    isHome() {
      return this.$route.name === 'home'
    },
    isDark() {
      return this.currentTheme === 'dark'
    }
  },
	methods: {
		switchTheme() {
      const storedTheme = localStorage.getItem('theme')
      if (storedTheme === 'dark') {
        localStorage.setItem('theme', 'light')
        this.currentTheme = localStorage.getItem('theme')
        this.$emit('clicked', 'light')
      } else {
        localStorage.setItem('theme', 'dark')
        this.currentTheme = localStorage.getItem('theme')
        this.$emit('clicked', 'dark')
      }
    },
    logout() {
      this.$store.dispatch('logout')
    }
  },
}
</script>