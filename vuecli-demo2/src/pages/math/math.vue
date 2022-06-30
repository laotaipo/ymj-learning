<template>
	<div>
		math{{ message }}
		<MyInput :value2="message2" v-model="message" v-if="dis"></MyInput>
		<button
			@click="
				() => {
					dis = !dis
				}
			"
		>
			点击
		</button>
		<button @click="goAbout">路由</button>
		<router-link to="/about">kkkk</router-link>
		<router-view :key="'about'"></router-view>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MyInput from '../../components/MyInput.vue'
@Component({
	components: {
		MyInput,
	},
})
export default class Index extends Vue {
	public message = ''
	public message2 = '!yyy'
	public dis = false
	public created() {
		console.log('math')
	}
	goAbout() {
		this.$router.push('/about')
	}
}
</script>
