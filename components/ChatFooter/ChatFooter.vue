<template>
	<div id="bot" :style="{height:footerH}"></div>
	<view class="footer" :style="{bottom:bottom+'px'}">
		<view class="sendMessage flex">
			<text class="wx" @click="onkeyboardheightchange">😀</text>
			<textarea class="textarea" @focus="focus" @blur="blur" @confirm="confirm" @linechange="linechange"
				:adjust-position="false" :show-confirm-bar="false" focus confirm-type="send" confirm-hold auto-height fixed
				hold-keyboard v-model="text" placeholder="请输入" />
			<view class="btn" @click="sendMessage">发送</view>
		</view>
		<swiper class="swiper" indicator-dots :style="{height:isEmoji&&!isFocus? '550rpx':'0rpx'}" v-if="isEmoji&&!isFocus">
			<swiper-item class="emoji">
				<text class="emoji-item" v-for="(item,index) in emoji.emojiList" @click="text+=item"
					:key="index">{{item}}</text>
			</swiper-item>
			<swiper-item class="emoji">
				<text class="emoji-item" v-for="(item,index) in emoji.weixin" :key="index">
					<image :src="`https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif`" mode="" />
				</text>
			</swiper-item>
		</swiper>
	</view>
	<view class="model" v-if="isEmoji" @click="touchstart"></view>
</template>

<script setup>
	import emoji from '@/static/emjio.js'
	import {
		onBeforeUnmount
	} from "vue";
	defineProps(['modelValue'])
	const emits = defineEmits(['update:modelValue'])
	const text = ref('')
	const bottom = ref(0)
	const isEmoji = ref(false) // 是否显示表情包
	const isFocus = ref(false) // 是否聚焦
	const footerH = computed(() => {
		let hei = '120rpx'
		if (isEmoji.value) {
			hei = `calc(${hei} + 550rpx)`
		}
		if (isFocus.value) {
			hei = `calc(${hei} + ${bottom.value}px)`
		}
		return hei
	})

	function onkeyboardheightchange() {
		if (isFocus.value) {
			uni.hideKeyboard()
			isFocus.value = false
		}
		isEmoji.value = !isEmoji.value
		nextTick(scrollBottom)
	}

	// #ifdef APP
	function h(e) {
		bottom.value = e.height
		nextTick(scrollBottom)
	}
	uni.onKeyboardHeightChange(h)
	onBeforeUnmount(() => {
		uni.offKeyboardHeightChange(h)
	})
	// #endif

	function sendMessage() {
		console.log(1231321);
	}

	function touchstart() {
		uni.hideKeyboard()
		isFocus.value = false
		isEmoji.value = false
	}

	function confirm(e) {
		console.log(e, 'confirm');
	}
	// 行数变化
	function linechange(e) {
		console.log(e.detail);
	}

	function focus(e) {
		isFocus.value = true
		isEmoji.value = false
	}

	function blur() {
		bottom.value = 0
		isFocus.value = false
	}

	function scrollBottom() {
		uni.pageScrollTo({
			selector: "#bot",
			duration: 0,
		})
	}
</script>

<style lang="scss">
	.model {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: 1;
	}

	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 2;
		border-top: 1rpx solid #dcdcdc;

		.sendMessage {
			width: 100%;
			padding: 20rpx;
			box-sizing: border-box;
			background-color: #f7f7f7;
			justify-content: space-between;

			.btn {
				background-color: #05c160;
				color: white;
				padding: 6rpx 10rpx;
				border-radius: 10rpx;
			}

			.textarea {
				width: calc(100% - 160rpx);
				padding: 18rpx 15rpx;
				max-height: 164rpx;
				overflow-y: scroll;
				/* #ifdef MP-WEIXIN */
				min-height: 70rpx;
				/* #endif */
				box-sizing: border-box;
				border-radius: 10rpx;
				background-color: white;

			}
		}

		.swiper {
			width: 100%;
			background: #ededed;

			.emoji {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
				padding: 30rpx 0rpx;
				box-sizing: border-box;
				font-size: 40rpx;
				overflow-y: scroll;
				overscroll-behavior: contain;

				.emoji-item {
					text-align: center;
					margin-bottom: 30rpx;

					image {
						width: 48rpx;
						height: 48rpx;
						display: block;
						margin: 0 auto;
					}
				}
			}
		}
	}
</style>