<template>
	<div>
		<button @click="scroll">滚动</button>
		<div class="chinese-worker">
			<div class="container" ref="worker">
				<p v-for="(content, i) in text" :key="i">
					{{ content }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
// import * as P from 'preloadjs'

export default {
	data: () => {
		return {
			text: [
				'春眠不觉晓',
				'处处闻啼鸟',
				'夜来风雨声',
				'花落知多少',
				'春眠不觉晓',
				'处处闻啼鸟',
				'夜来风雨声',
				'花落知多少',
				'春眠不觉晓',
				'处处闻啼鸟',
				'夜来风雨声',
				'花落知多少',
			],
		}
	},
	methods: {
		scroll() {
			this.$refs.worker.style.transform = 'translateY(-22px)'
			console.log(999, this.$refs.worker)
		},
	},
	mounted() {
		const queue = new createjs.LoadQueue(false)
	},
}
</script>

<style>
.chinese-worker {
	width: 200px;
	height: 300px;
	border: 1px solid #f00;
	overflow-y: hidden;
	text-align: center;
}
.container {
	transform: translateY(0);
	transition: transform 0.2s ease;
}
</style>
