import satori, { init } from 'satori/wasm'
import { $fetch } from 'ohmyfetch'

import initYoga from 'yoga-wasm-web'

export default defineEventHandler(async () => {
	try {
		const interV = await $fetch('https://unpkg.com/@fontsource/inter@4.5.14/files/inter-all-500-normal.woff').then(r => r.arrayBuffer())
		const wasm = await $fetch('https://unpkg.com/yoga-wasm-web@0.1.2/dist/yoga.wasm').then(r => r.arrayBuffer())

		const yoga = await initYoga(wasm)
		await init(yoga)

		return await satori({
			type: 'div',
			props: {
				children: 'hello, world',
				style: { color: 'black' },
			},
		}, {
			height: 300,
			fonts: [{
				data: interV as ArrayBuffer,
				name: 'Inter',
			}],
		})
	}
	catch (e) {
		return e.message || JSON.stringify(e)
	}
})
