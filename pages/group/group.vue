<template>
	<view class="group">
		<view class="list" v-for="item in list" :key="item.id">
			<image class="image" :src="item.img" mode=""></image>
			<view class="item-text">
				<view class="group-name">{{item.group}}</view>
				<view class="group-niceName">{{item.group_niceName}}</view>
			</view>
		</view>
	</view>

</template>

<script setup>
	const list = [{
			img: "../../static/test.png",
			group: '群组的名字',
			group_niceName: '备注的名字',
			id: 1
		},
		{
			img: "../../static/test.png",
			group: '群组的名字',
			group_niceName: '备注的名字',
			id: 2
		},
		{
			img: "../../static/test.png",
			group: '群组的名字',
			group_niceName: '备注的名字',
			id: 3
		},
	]
</script>

<style lang="scss">
	.group {
		padding: 0 30rpx;
	}

	.list {
		display: flex;
		align-items: center;
		margin-top: 20rpx;
		background-color: white;
		padding: 20rpx;
		border-radius: 10rpx;

		.group-name {
			font-size: 30rpx;
			font-weight: 600;
		}

		.group-niceName {
			font-size: 28rpx;
			color: #a59e9e;
			margin-top: 10rpx;
		}

		.image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 10rpx;
			margin-right: 20rpx;
		}
	}
</style>