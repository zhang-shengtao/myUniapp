<template>
	<view v-for="(item,i) in list" :class="['chat','flex',item.user?'right':'']">
		<template v-if="item.user">
			<view class="con-text">{{item.text}}{{i}}</view>
			<image class="img" src="../../static/test.png" mode="" />
		</template>
		<template v-else>
			<image class="img" src="../../static/test.png" mode="" />
			<view class="con-text">{{item.text}}{{i}}</view>
		</template>
	</view>
	<ChatFooter v-model="text" />
</template>

<script setup>
	import ChatFooter from '@/components/ChatFooter/ChatFooter.vue'
	const text = ref('')
	const list = reactive([{
			type: 1,
			text: '文本吖',
			user: '',
		},
		{
			type: 1,
			text: '文本吖文本文本文本文本文本本文本文本文本文文本',
			user: '11',
		},
		{
			type: 1,
			text: 'Triggered when the input box loses focus',
			user: '',
		},
		{
			type: 1,
			text: '文本吖文本文本文本文本文本本文本文本文本文文本',
			user: '11',
		},
		{
			type: 1,
			text: 'Triggered when the input box loses focus',
			user: '',
		},
		{
			type: 1,
			text: '文本吖文本文本文本文本文本本文本文本文本文文本',
			user: '11',
		},
		{
			type: 1,
			text: 'Triggered when the input box loses focus',
			user: '',
		},
		{
			type: 1,
			text: '文本吖文本文本文本文本文本本文本文本文本文文本',
			user: '11',
		},
		{
			type: 1,
			text: 'Triggered when the input box loses focus',
			user: '',
		},
		{
			type: 1,
			text: '文本吖文本文本文本文本文本本文本文本文本文文本',
			user: '11',
		},
		{
			type: 1,
			text: 'Triggered when the input box loses focus',
			user: '',
		},
		{
			type: 1,
			text: '文本吖文本文本文本文本文本本文本文本文本文文本',
			user: '11',
		},
		{
			type: 1,
			text: 'Triggered when the input box loses focus',
			user: '',
		},
		{
			type: 1,
			text: '文本吖文本文本文本文本文本本文本文本文本文文本',
			user: '11',
		},
		{
			type: 1,
			text: 'Triggered when the input box loses focus',
			user: '',
		},
		{
			type: 1,
			text: '文本吖文本文本文本文本文本本文本文本文本文文本',
			user: '11',
		},
		{
			type: 1,
			text: 'Triggered when the input box loses focus 文本吖文本文本文本文本文本本文本文本文本文文本',
			user: '',
		},
	])

	onNavigationBarButtonTap(() => {
		uni.navigateTo({
			url: '/pages/chat/message/message?id=2'
		})
	})
</script>

<style lang="scss">
	page {
		background: #ededed;
	}

	.chat {
		padding: 8rpx 0rpx;
		margin-bottom: 4rpx;
		align-items: flex-start;

		.img {
			width: 80rpx;
			height: 80rpx;
			border-radius: 10rpx;
			flex-shrink: 0;
			margin: 0 20rpx;
		}

		.con-text {
			padding: 10rpx 16rpx;
			border-radius: 10rpx;
			max-width: calc(100% - 270rpx);
			word-wrap: break-word;
			word-break: break-all;
			position: relative;
			background-color: white;
		}

		.con-text::before {
			$unm: 16rpx;
			content: '';
			display: block;
			border-top: $unm solid transparent;
			border-right: $unm solid #fff;
			border-bottom: $unm solid transparent;
			position: absolute;
			left: -10rpx;
			top: 16rpx;
		}
	}

	.chat.right {
		justify-content: flex-end;

		.con-text {
			background-color: greenyellow;
		}

		.con-text::before {
			$unm: 16rpx;
			left: auto;
			right: -10rpx;
			border-top: $unm solid transparent;
			border-right: none;
			border-left: $unm solid greenyellow;
			border-bottom: $unm solid transparent;
		}
	}
</style>