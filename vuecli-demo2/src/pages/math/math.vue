<template>
	<div>
		math{{ message }}
		<MyInput :value2="message2" v-model="message" v-if="dis" :dd="'dd'" @sendTofu="sendTofu"></MyInput>
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
		<chinese-worker></chinese-worker>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MyInput from '../../components/MyInput.vue'
import ChineseWorker from '../../components/ChineseWorker.vue'
@Component({
	components: {
		MyInput,
		ChineseWorker,
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
	sendTofu(payload: any) {
		console.log('----from 孙子', payload)
	}
}
</script>
