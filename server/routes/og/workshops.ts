import satori from 'satori'
import { $fetch } from 'ohmyfetch'

export default defineEventHandler(async () => {
	const interV = await $fetch('https://unpkg.com/@fontsource/inter@4.5.14/files/inter-all-500-normal.woff').then(r => r.arrayBuffer())

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
})
