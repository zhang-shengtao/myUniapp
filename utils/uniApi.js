	import user_pinia from "@/pinia/user.js"

	export default {
		getNetworkType(option = {}) {
			uni.getNetworkType({
				success: (res) => {
					const newUser = user_pinia()
					newUser.isConnected = res.networkType !== 'none'
				}
			});
		},
		networkStatusChange() {
			uni.onNetworkStatusChange(this.getNetworkType)
			this.getNetworkType()
		}
	}