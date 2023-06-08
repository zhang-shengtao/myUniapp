<template>
	<scroll-view scroll-y :scroll-into-view="scroll_id" style="height: 100%">
		<view class="user_list" :id="index" v-for="(item,index) in user_list" :key="item.name + index">
			<view class="tag item_tag" v-if="index != 'al'">{{filter(index)}}</view>
			<view class="flex list_top" v-for="(items,index) in item" :key="item.name">
				<image class="image" :src="items.user_icon" mode="" />
				<text class="text">{{items.user_name}}</text>
			</view>
		</view>
		<view class="footer">{{userTotal}}个朋友</view>
	</scroll-view>
	<view class="fixed_right" @touchstart="touchStart" @touchend="touchEnd" @touchmove.stop.prevent="touchMove">
		<view :class="['tag',scroll_id==item?'back':'']" :data-id="item" v-for="item in tagTotal" :key="item">
			{{filter(item)}}
			<view class="tagabs" v-if="scroll_id==item">{{filter(scroll_id)}}</view>
		</view>
	</view>
	<!-- #ifndef MP-WEIXIN -->
	<Model v-model="is_show_model" />
	<!-- #endif -->
</template>

<script setup>
	import Model from '@/components/Index_model/index.vue'
	import {
		onMounted
	} from "vue";
	const scroll_id = ref('')
	const fixed_right = {
		winOffsetY: 0,
		winHeight: 0,
		itemHeight: 0,
	}
	const user_list = ref({
		'al': [{
				user_icon: '../../static/test.png',
				user_name: '新的朋友',
				url: ''
			},
			{
				user_icon: '../../static/test.png',
				user_name: '群聊',
				url: ''
			}
		],
		A: [{
				user_icon: '../../static/test.png',
				user_name: 'A备注的名字'
			},
			{
				user_icon: '../../static/test.png',
				user_name: 'A备注的名字2'
			},
			{
				user_icon: '../../static/test.png',
				user_name: 'A备注的名字3'
			}
		],
		B: [{
				user_icon: '../../static/test.png',
				user_name: 'B备注的名字'
			},
			{
				user_icon: '../../static/test.png',
				user_name: 'b备注的名字2'
			},
			{
				user_icon: '../../static/test.png',
				user_name: 'b备注的名字3'
			},
			{
				user_icon: '../../static/test.png',
				user_name: 'b备注的名字4'
			},
			{
				user_icon: '../../static/test.png',
				user_name: 'b备注的名字5'
			},
		],
		C: [{
				user_icon: '../../static/test.png',
				user_name: 'C备注的名字'
			},
			{
				user_icon: '../../static/test.png',
				user_name: 'c备注的名字2'
			},
			{
				user_icon: '../../static/test.png',
				user_name: 'c备注的名字3'
			},
		],
		'in': [{
				user_icon: '../../static/test.png',
				user_name: '#备注的名字2'
			},
			{
				user_icon: '../../static/test.png',
				user_name: '#备注的名字3'
			},
		]
	})
	const is_show_model = ref(false)
	const tagTotal = computed(() => {
		let arr = Object.keys(user_list.value)
		return arr
	})
	const userTotal = computed(() => {
		let arr = [...tagTotal.value]
		arr.shift()
		let total = 0
		arr.forEach(item => {
			total += user_list.value[item].length
		})
		return total
	})

	function filter(item) {
		if (item == 'al') item = '⬆'
		if (item == 'in') item = '#'
		return item
	}

	function touchStart(e) {
		scroll_id.value = e.target.id
	}

	function touchEnd() {
		scroll_id.value = ''
	}

	function touchMove(e) {
		let pageY = e.touches[0].pageY
		let index = Math.floor((pageY - fixed_right.winOffsetY) / fixed_right.itemHeight)
		if (index > tagTotal.value.length || index < 0) return
		let scrollId = tagTotal.value[index]
		if (scrollId) scroll_id.value = scrollId
	}
	onNavigationBarButtonTap((obj) => {
		is_show_model.value = !is_show_model.value
	})
	// onload(() => {

	// })
	onHide(() => {
		is_show_model.value = false
	})


	onMounted(() => {
		uni.createSelectorQuery()
			.in(this)
			.select('.fixed_right')
			.boundingClientRect()
			.exec(ret => {
				fixed_right.winOffsetY = ret[0].top
				fixed_right.winHeight = ret[0].height
				fixed_right.itemHeight = fixed_right.winHeight / tagTotal.value.length
			})
	})
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.list_top {
		padding: 10rpx 0 0rpx 30rpx;
		box-sizing: border-box;
	}

	.image {
		width: 90rpx;
		height: 90rpx;
		flex-shrink: 0;
		border-radius: 10rpx;
	}

	.text {
		padding: 30rpx 30rpx 30rpx 0;
		box-sizing: border-box;
		margin-left: 30rpx;
		width: calc(100% - 120rpx);
		border-bottom: 1rpx solid #f3eded;
		font-size: 30rpx;
		font-weight: 400;
	}

	.tag {
		color: #919191;
		font-size: 26rpx;
		position: relative;
	}

	.fixed_right {
		position: fixed;
		right: 16rpx;
		top: 30%;
		transform: translateY(-50%);
		z-index: 10;

		.tag {
			padding: 0 8rpx;
		}

		.tag.back {
			background-color: #18b46a;
			border-radius: 50%;
			color: white;
		}

		.tagabs {
			--num: 90rpx;
			width: var(--num);
			height: var(--num);
			line-height: var(--num);
			text-align: center;
			position: absolute;
			left: -130rpx;
			top: calc(50% - 44rpx);
			background-color: #cccccc;
			z-index: 11;
			color: white;
			font-size: 40rpx;
			border-radius: 50%;
		}

		.tagabs::after {
			--num: 30rpx;
			content: '';
			width: 0;
			height: 0;
			position: absolute;
			right: -18rpx;
			top: calc(50% - var(--num));
			z-index: 10;
			border-left: var(--num) solid #cccccc;
			border-top: var(--num) solid transparent;
			border-bottom: var(--num) solid transparent;
		}
	}


	.footer {
		height: 112rpx;
		text-align: center;
		line-height: 112rpx;


	}

	.user_list {
		width: 100%;

		.item_tag {
			width: 100%;
			padding: 10rpx 30rpx;
			box-sizing: border-box;
			background-color: #ededed;
		}

	}
</style>