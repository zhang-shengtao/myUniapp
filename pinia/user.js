import {
	defineStore
} from 'pinia';


const {
	VITE_TOKEN_NAME
} = import.meta.env

export default defineStore('user', {
	state: () => ({
		isConnected: true,
		get token() {
			return uni.getStorageSync(VITE_TOKEN_NAME)
		}
	}),
	actions: {

	},
});