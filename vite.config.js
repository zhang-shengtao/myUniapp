import {
	defineConfig
} from "vite"
import uni from "@dcloudio/vite-plugin-uni"
// 加上下面这一行
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
	plugins: [uni(),
		AutoImport({
			include: [
				/\.[tj]sx?$/,
				/\.vue$/,
				/\.vue\?vue/,
			],
			imports: ["pinia", 'vue', 'uni-app'],
			dts: false,
		}),
	],
	build: {
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
			},
		},
	},
});