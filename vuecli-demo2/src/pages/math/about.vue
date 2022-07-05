<template>
	<div>
		about
		<!-- <my-swiper /> -->
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import MySwiper from '../../components/MySwiper.vue'
@Component({
	components: {
		// MySwiper,
	},
})
export default class About extends Vue {
	public created() {
		console.log('about')
	}
}
</script>
