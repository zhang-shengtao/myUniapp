<template>
	<view class="header flex">
		<image class="image" src="../../static/test.png" mode="" />
		<view class="right">
			<view class="name">自定义姓名</view>
			<view class="flex icon">
				<view>小微号：121231saasda</view>
				<text class="my-icon my-shop my-rights"></text>
			</view>
		</view>
	</view>
	<navigator :url="item.url" :class="['flex','list_item',i+1==list.length&&'top20']" v-for="(item,i) in list"
		:key="item.icon">
		<view class="flex item"> <text :class="['my-icon',item.icon,'item_icon']" /> {{item.text}}</view>
		<text class="my-icon my-right" />
	</navigator>
</template>

<script setup>
	const list = [{
			icon: 'my-gift',
			url: '',
			text: '收藏'
		},
		{
			icon: 'my-pyq',
			url: '',
			text: '朋友圈'
		},
		{
			icon: "my-navigate-filled",
			url: '',
			text: '添加地址'
		},
		{
			icon: "my-gear",
			url: '/pages/setting/index',
			text: '设置'
		}
	]
</script>

<style lang="scss">
	.header {
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		background-color: white;
		margin-bottom: 20rpx;

		.right {
			width: calc(100% - 100rpx);
			padding-left: 30rpx;
		}

		.icon {
			width: 100%;
			justify-content: space-between;
			font-size: 26rpx;
			color: #b3b3b3;
			margin-top: 16rpx;
		}

		.name {
			font-weight: bold;
		}

		.image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 10rpx;
		}
	}

	.list_item {
		padding: 30rpx;
		box-sizing: border-box;
		justify-content: space-between;
		background-color: white;
		border-bottom: 1rpx solid #ededed;

		.item {
			font-size: 28rpx;
		}

		.item_icon {
			margin-right: 20rpx;
			font-size: 40rpx;
		}
	}

	.top20 {
		margin-top: 20rpx;
		border-bottom: none
	}
</style>