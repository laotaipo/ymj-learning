<template>
	<router-view></router-view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MyInput from '../../components/MyInput.vue'
@Component({
	components: {
		MyInput,
	},
})
export default class Index extends Vue {}
</script>
