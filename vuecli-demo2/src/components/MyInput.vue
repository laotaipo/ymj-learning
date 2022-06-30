<template>
	<div>
		<input type="text" name="" id="" :value="value1" @input="handleInput" />
		<button @click="changeA">路由跳转</button>{{ b }}
		<a-son data1="'data111'" data2="'222'" v-bind="$attrs" v-on="$listeners" />
	</div>
</template>

<script>
import ASon from './ASon.vue'

export default {
	components: { ASon },
	data() {
		return {
			a: 1,
		}
	},
	computed: {
		b() {
			return this.a + 1
		},
	},
	model: {
		prop: 'value1',
		event: 'change',
	},
	props: ['value1', 'value2'],
	methods: {
		handleInput(e) {
			this.$emit('change', e.target.value)
		},
		changeA() {
			this.a = this.a + 1
			this.$router.push('/about')
		},
	},
	beforeUpdate() {
		// this.a = this.a + 1
		console.log('beforeUpdate*****', this.a)
	},
	updated() {
		// this.a = this.a + 1
		console.log('updated*****', this.a)
	},
	beforeCreate() {
		console.log('beforeCreate')
	},
	created() {
		console.log('created')
	},
	beforeMount() {
		console.log('beforeMount')
	},
	mounted() {
		console.log(888, this.$listeners.sendTofu(999))
	},
}
</script>
