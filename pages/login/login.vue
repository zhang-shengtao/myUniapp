<template>
	<view class="navHeader">登录</view>
	<view class="login">
		<view class="item flex">
			<text class="my-icon my-person"></text>
			<input type="text" placeholder="请输入账号" v-model="fromData.account">
		</view>
		<view class="item flex">
			<text class="my-icon my-locked"></text>
			<input type="text" placeholder="请输入密码" v-model="fromData.account">
		</view>
		<button class="submit">登录</button>
	</view>
</template>

<script setup>
	const navHeader = uni.getSystemInfoSync().statusBarHeight + 'px'
	const fromData = reactive({
		account: '',
		password: ''
	})

	function onSubmit(e) {
		console.log(e)
	}
</script>

<style lang="scss">
	.navHeader {
		text-align: center;
		padding: calc(v-bind(navHeader) + 20rpx) 0rpx 20rpx 0rpx;
		/* #ifdef H5 */
		height: 44px;
		/* #endif */
		box-sizing: border-box;
		font-size: 28rpx;
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.login {
		width: 90%;
		margin: 300rpx auto 0;
		padding: 30rpx;
		box-sizing: border-box;
		background-color: $uni-text-color-inverse;
		border-radius: 20rpx;
		box-shadow: $uni-bg-color-grey;

		.submit {
			background-color: $uni-color-warning;
			box-sizing: border-box;
			text-align: center;
			color: $uni-bg-color;
			margin-top: 30rpx;
			border-radius: 100rpx;
		}

		.item {
			border-bottom: 1rpx solid $uni-text-color-disable;
			margin-top: 30rpx;
			padding: 20rpx;

			.my-icon {
				margin-right: 10rpx;
			}
		}
	}
</style>