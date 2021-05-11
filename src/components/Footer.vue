<template>
	<div class="footer">
		<div class="footer__container pb-0 pt-5">
		<router-link :to="{name: 'login'}" v-if="!currentUser">
			<button class="btn btn__flat btn__small">
				login
			</button>
		</router-link>
		<router-link :to="{name: 'dashHome'}" v-if="currentUser">
			<button class="btn btn__flat btn__small">
				admin
			</button>
		</router-link>
		<button @click="logout" class="btn btn__flat btn__small">logout</button>
		</div>
		<div class="footer__container text-center">
			<p class="caption">© Avatier, 2021</p>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
    ...mapState(['currentUser', 'userProfile']),
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
}
</script>