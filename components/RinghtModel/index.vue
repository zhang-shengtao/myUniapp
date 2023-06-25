<template>
	<view class="fixed_model" v-if="modelValue">
		<view class="flex model_item" @click="navigator('/pages/group/group')">
			<view class="model_icon my-icon my-staff"></view>
			<view class="model_text">发起群聊</view>
		</view>
		<view class="flex model_item" @click="navigator('/pages/add_user/add_user')">
			<view class="model_icon my-icon my-personadd" />
			<view class="model_text">添加朋友</view>
		</view>
		<view class="flex model_item" @click="scanCode">
			<view class="my-icon my-scan" style="padding-left: 30rpx;color: white;" />
			<view class="model_text">扫一扫</view>
		</view>
	</view>
	<view class="fixed_models" @click="emit('update:modelValue', false)" v-if="modelValue"></view>
</template>

<script setup>
	defineProps({
		modelValue: {
			type: Boolean,
			require: true,
			default: false
		}
	})
	const emit = defineEmits(['update:modelValue'])

	function navigator(url) {
		emit('update:modelValue', false)
		uni.navigateTo({
			url
		})
	}

	function scanCode() {
		emit('update:modelValue', false)
		uni.scanCode({
			scanType: ['qrCode', 'barCode'],
			autoDecodeCharset: true,
			autoZoom: true,
			success(res) {
				console.log(res);
			}
		})
	}
</script>

<style lang="scss" scoped>
	.fixed_models {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 10;
	}

	.fixed_model {
		position: fixed;
		top: 20rpx;
		/* #ifdef H5 */
		top: calc(var(--window-top) + 20rpx);
		/* #endif */
		right: 10rpx;
		z-index: 12;
		background-color: #4c4c4c;
		border-radius: 10rpx;
		color: white;

		&::after {
			--num: 20rpx;
			content: '';
			position: absolute;
			top: -10rpx;
			right: 10rpx;
			z-index: 11;
			border-left: var(--num) solid transparent;
			border-right: var(--num) solid transparent;
			border-bottom: var(--num) solid #4c4c4c;
		}

		.model_item {
			.model_icon {
				font-size: 44rpx;
				margin-left: 30rpx;
				color: white;
			}

			.model_text {
				margin-left: 20rpx;
				padding: 30rpx 50rpx 30rpx 0;
				border-bottom: 1rpx solid #5d5b5b;
			}
		}
	}
</style>