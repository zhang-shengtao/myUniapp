<script setup>
	import uniApi from '@/utils/uniApi.js'
	import user_pinia from "@/pinia/user.js"
	const navHeader = uni.getSystemInfoSync().statusBarHeight + 'px'
	onLaunch((options) => {
		uniApi.networkStatusChange()
		// const newUser = user_pinia()
		// if (!newUser.token) {
		// 	uni.reLaunch({
		// 		url: '/pages/login/login'
		// 	})
		// }
		// uni.addInterceptor('')
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

	page {
		background-color: "#ededed";
	}

	.flex {
		display: flex;
		align-items: center;
	}
</style>