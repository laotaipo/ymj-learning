<template>
	<div>math</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class Index extends Vue {
	public created() {
		console.log('math')
	}
}
</script>
