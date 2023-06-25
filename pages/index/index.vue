<template>
	<view class="noNet flex" v-if="!newUser.isConnected"><text class="noNet_red">!</text> 当前无法连接网络,可检查网络设置是否正常</view>
	<navigator url="/pages/chat/chat" class="message_item flex" v-for="(item,i) in user_list" :key="i">
		<view style="position: relative;">
			<image class="image" :src="item.user_icon" mode="" />
			<text class="message_num" :style="{padding:!item.is_group&&'4rpx'}">{{!item.is_group?item.num:''}}</text>
		</view>
		<view class="message_con flex">
			<view class="message_user_name">
				<view class="user_name ellipsis">{{item.user_name}}</view>
				<view class="user_message ellipsis"><text v-if="item.is_group">[{{item.num}}条]</text>{{item.message}}
				</view>
			</view>
			<view class="time">
				<view style="margin-bottom: 10rpx;">{{item.time}}</view>
				<view class="notification my-icon my-notification" v-if="!item.is_disturb"></view>
			</view>
		</view>
	</navigator>

	<Model v-model="is_show_model" />
</template>

<script setup>
	import Model from '@/components/RinghtModel/index.vue'
	import user_pinia from "@/pinia/user.js"
	const newUser = user_pinia()
	const user_list = ref([{
			user_icon: "../../static/test.png",
			user_name: '用户的备注名字',
			message: "这是最后一条消息息这是最这是最后一条消息息这是最",
			num: '3',
			time: '17:00',
			is_disturb: true,
			is_group: true
		},
		{
			user_icon: "../../static/test.png",
			user_name: '用户的备注名字',
			message: "这是最后一条消",
			num: '1',
			time: '17:00',
			is_disturb: false,
			is_group: true
		},
		{
			user_icon: "../../static/test.png",
			user_name: '用户的备注名字',
			message: "这是最后一条消息",
			num: '2',
			time: '17:00',
			is_disturb: true,
			is_group: true
		},
		{
			user_icon: "../../static/test.png",
			user_name: '用户的备注名字',
			message: "这是最后一条消息息这是最这是最后一条消息息这是最",
			num: '2',
			time: '17:00',
			is_disturb: false,
			is_group: false
		},
		{
			user_icon: "../../static/test.png",
			user_name: '用户的备注名字',
			message: "这是最后一条消息",
			num: '2',
			time: '17:00',
			is_disturb: false,
			is_group: false
		},
		{
			user_icon: "../../static/test.png",
			user_name: '用户的备注名字',
			message: "这是最后一条消息",
			num: '2',
			time: '17:00',
			is_disturb: false,
			is_group: true
		},
		{
			user_icon: "../../static/test.png",
			user_name: '用户的备注名字',
			message: "这是最后一条消息",
			num: '2',
			time: '17:00',
			is_disturb: false,
			is_group: false
		},
		{
			user_icon: "../../static/test.png",
			user_name: '用户的备注名字',
			message: "这是最后一条消息",
			num: '2',
			time: '17:00',
			is_disturb: false,
			is_group: true
		},
		{
			user_icon: "../../static/test.png",
			user_name: '用户的备注名字',
			message: "这是最后一条消息",
			num: '2',
			time: '17:00',
			is_disturb: false,
			is_group: false
		},
		{
			user_icon: "../../static/test.png",
			user_name: '用户的备注名字',
			message: "这是最后一条消息",
			num: '2',
			time: '17:00',
			is_disturb: false,
			is_group: false
		},
		{
			user_icon: "../../static/test.png",
			user_name: '用户的备注名字',
			message: "这是最后一条消息",
			num: '2',
			time: '17:00',
			is_disturb: false,
			is_group: false
		},
		{
			user_icon: "../../static/test.png",
			user_name: '用户的备注名字',
			message: "这是最后一条消息",
			num: '2',
			time: '17:00',
			is_disturb: false,
			is_group: false
		},
	])
	const is_show_model = ref(false)
	const total = computed(() => {
		const total = user_list.value.reduce((a, b) => {
			return a + b.num * 1
		}, 0)
		uni.setNavigationBarTitle({
			title: `消息(${total})`
		})
		uni.setTabBarBadge({
			index: 0,
			text: `${total}`
		})
		return total
	})


	onPullDownRefresh(() => {
		uni.showToast({
			title: '刷新了',
			success() {
				setTimeout(uni.stopPullDownRefresh, 1500)
			}
		})
	})

	onNavigationBarButtonTap((obj) => {
		is_show_model.value = !is_show_model.value
	})
	onHide(() => {
		is_show_model.value = false
	})
	onReady(() => {
		// #ifdef APP
		uni.setNavigationBarTitle({
			title: `消息(${total.value})`
		})
		uni.setTabBarBadge({
			index: 0,
			text: `${total.value}`
		})
		// #endif
	})
</script>

<style lang="scss" scoped>
	.noNet {
		padding: 20rpx 50rpx;
		box-sizing: border-box;
		background-color: #fdedee;
		color: #a49497;
		font-size: 28rpx;

		.noNet_red {
			width: 30rpx;
			height: 30rpx;
			line-height: 30rpx;
			color: white;
			background-color: orangered;
			display: inline-block;
			text-align: center;
			font-size: 28rpx;
			border-radius: 50%;
			margin-right: 20rpx;
			padding: 6rpx;
		}
	}

	.message_item {
		padding-left: 30rpx;
		box-sizing: border-box;

		.message_con {
			padding: 30rpx 30rpx 30rpx 0;
			box-sizing: border-box;
			border-bottom: 1rpx solid #f3eded;
			width: calc(100% - 90rpx);
			justify-content: space-between;

			.message_user_name {
				padding: 0 30rpx;
				box-sizing: border-box;

				.ellipsis {
					overflow: hidden;
					text-overflow: ellipsis;
					word-break: break-all;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
				}

				.user_name {
					font-size: 30rpx;
					font-weight: 400;
				}

				.user_message {
					color: #88858547;
					font-size: 26rpx;
					margin-top: 10rpx;
				}
			}

			.time {
				text-align: right;
				font-size: 20rpx;
				color: #88858547;

				.notification {
					color: #88858547;
				}
			}
		}

		.image {
			width: 90rpx;
			height: 90rpx;
			border-radius: 10rpx;
		}

		.message_num {
			position: absolute;
			top: -10rpx;
			right: -10rpx;
			width: 20rpx;
			height: 20rpx;
			background-color: orangered;
			font-size: 20rpx;
			color: #fff;
			border-radius: 50%;
			text-align: center;
			line-height: 20rpx;
			z-index: 10;
		}
	}
</style>