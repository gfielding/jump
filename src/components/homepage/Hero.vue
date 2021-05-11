<template>
	<div class="hero">
		<video playsinline autoplay muted loop id="bgvid">
		  <source src="https://firebasestorage.googleapis.com/v0/b/crewbrightweb.appspot.com/o/webFiles%2FVideos%2FSpringFestivalsVideo2.webm?alt=media&token=3f01ac3c-3ebe-4d53-89bc-b85fbd1ea6a6" type="video/webm">
		  <source src="https://firebasestorage.googleapis.com/v0/b/crewbrightweb.appspot.com/o/webFiles%2FVideos%2FSpringFestivalsVideo2.mp4?alt=media&token=20583cce-55a4-4af3-b0a6-f564d43064c6" type="video/mp4">
		</video>
		<div class="hero__text">
			<h1>We Staff<br>Music Festivals,</h1>
			<h3>Concerts, Sports, & other Large Events.</h3>
			
		</div>
		<div class="hero__buttons">
			<div style="display: flex;align-items: center;">
				<button class="btn btn__icon">
					<i class="fab fa-instagram"></i>
				</button>
				<button class="btn btn__icon">
					<i class="fab fa-twitter"></i>
				</button>
				<button class="btn btn__icon">
					<i class="fab fa-facebook-square"></i>
				</button>
			</div>
			<div style="display: flex;align-items: center;">
				<SVG_Wavy /><SVG_Wavy /><SVG_Wavy /><SVG_Wavy /><SVG_Wavy /><SVG_Wavy />
				<button class="btn btn__text">About Us</button><SVG_Wavy /><SVG_Wavy /><SVG_Wavy /><SVG_Wavy /><SVG_Wavy /><SVG_Wavy />
				<button class="btn btn__text">Business Inquiries</button><SVG_Wavy /><SVG_Wavy /><SVG_Wavy /><SVG_Wavy /><SVG_Wavy /><SVG_Wavy />
				<button class="btn btn__text">Contact Us</button>
			</div>
		</div>		
	</div>

</template>

<script>
import SVG_Wavy from '@/components/svg/SVG_Wavy.vue'

export default {
	components: {
		SVG_Wavy
	}
}
</script>