<template>
	<view>
		<view class="message">
			<image class="uesr-img" src="../../../static/test.png" mode=""></image>
		</view>
		<view class="list" v-for="item in list" :key="item.text">
			<view class="">{{item.text}}</view>
			<switch v-if="item.icon==1" color="greenyellow" style="transform:scale(0.8)" />
			<text v-else class="my-icon my-right"></text>
		</view>
	</view>
</template>

<script setup>
	const list = [{
			text: '置顶聊天',
			icon: '1'
		},
		{
			text: '设置当前聊天背景',
			icon: '2'
		},
		{
			text: '清空聊天记录',
			icon: '2'
		}
	]
	onLoad((option) => {
		console.log(option);
	})
</script>

<style lang="scss">
	page {
		background: #ededed;
	}

	.message {
		padding: 30rpx;
		background-color: white;
		margin-bottom: 20rpx;

		.uesr-img {
			width: 100rpx;
			height: 100rpx;
			border-radius: 10rpx;
		}
	}

	.list {
		padding: 30rpx;
		background-color: white;
		border-bottom: 1rpx solid #ededed;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>