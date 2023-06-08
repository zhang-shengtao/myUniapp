<script setup>
	import uniApi from '@/utils/uniApi.js'
	import user_pinia from "@/pinia/user.js"
	onLaunch((options) => {
		uniApi.networkStatusChange()
		// const newUser = user_pinia()
		// if (!newUser.token) {
		// 	uni.reLaunch({
		// 		url: '/pages/login/login'
		// 	})
		// }

	})

	onShow((options) => {
		// const newUser = user_pinia()
		// if (!newUser.token) {
		// 	uni.reLaunch({
		// 		url: '/pages/login/login'
		// 	})
		// }
	})


	onHide(() => {
		// console.log('onHide');
	})

	onThemeChange((options) => {
		// console.log('onThemeChange', options);
	})
</script>

<style lang="scss">
	@import './static/my_icon.scss';

	.flex {
		display: flex;
		align-items: center;
	}
</style>