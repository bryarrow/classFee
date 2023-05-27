import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
	data() {
		return {balances:400}
	}
}
).mount('#balances')

createApp({
	data() {
		return {budget}
	}
}).mount('#budget')