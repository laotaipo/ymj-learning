<template>
	<div @click="sendToFu">一个字组件{{ $attrs.dd }}</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	// props: ['dd'],
	methods: {
		sendToFu() {
			this.$listeners.sendTofu('hhh 来自于孙子')
			// this.$emit('sendTofu', 1)
		},
	},
	mounted() {
		console.log(99977, this.$attrs, this.$listeners.sendTofu, this.$listeners)
	},
}
</script>
