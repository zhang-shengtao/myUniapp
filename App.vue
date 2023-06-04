<script>
	import user_pinia from "@/pinia/user.js"
	export default {
		onLaunch: function(options) {
			uni.onNetworkStatusChange(function(res) {
				console.log(res);
				user_pinia().$patch({
					isConnected: res.isConnected
				})
			});
		},
		onShow: function(options) {

		},
		onHide: function(options) {

		}
	}
</script>

<style lang="scss">
	.flex {
		display: flex;
		align-items: center;
	}
</style>