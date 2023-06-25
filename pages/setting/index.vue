<template>
	<view class="list flex" v-for="item in list" :key="item.text">
		<view>{{item.text}}</view>
		<text class="my-icon my-right"></text>
	</view>
</template>

<script setup>
	const list = [{
			text: '深色模式',
			isShow: false
		},
		{
			text: '账号与安全',
			isShow: false
		},
	]
</script>

<style lang="scss">
	.list {
		justify-content: space-between;
		padding: 10rpx 30rpx;
		box-sizing: border-box;
	}
</style>