<template>
	<div class="footer">
		<div class="footer__buttons">
			<div style="display: flex;align-items: center;" class="social">
				<button class="btn btn__icon">
					<i class="fab fa-instagram"></i>
				</button>
				<button class="btn btn__icon">
					<i class="fab fa-twitter"></i>
				</button>
				<button class="btn btn__icon">
					<i class="fab fa-facebook-square"></i>
				</button>
				<span class="caption ml-5">© Jump Staffing, 2021</span>
			</div>
			<div style="display: flex;align-items: center;">
				<div class="waves">
					<SVG_Wavy /><SVG_Wavy /><SVG_Wavy /><SVG_Wavy /><SVG_Wavy /><SVG_Wavy />
				</div>
				<router-link :to="{name: 'about'}">
					<button class="btn btn__text">About</button>
				</router-link>
				<div class="waves">
					<SVG_Wavy /><SVG_Wavy /><SVG_Wavy /><SVG_Wavy /><SVG_Wavy /><SVG_Wavy />
				</div>
				<button class="btn btn__text">Inquiries</button>
				<div class="waves">
					<SVG_Wavy /><SVG_Wavy /><SVG_Wavy /><SVG_Wavy /><SVG_Wavy /><SVG_Wavy />
				</div>
				<button class="btn btn__text">Contact</span></button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import SVG_Wavy from '@/components/svg/SVG_Wavy.vue'

export default {
	computed: {
    ...mapState(['currentUser', 'userProfile']),
  },
  components: {
		SVG_Wavy
	},
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
}
</script>