// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode',
		'@nuxtjs/google-fonts',
		'@nuxt/content',
		'nuxt-icon',
	],
	googleFonts: {
		families: {
			Poppins: [400, 700],
		},
	},
	content: {},
	colorMode: {
		preference: 'system', // default theme
		dataValue: 'theme', // activate data-theme in <html> tag
		classSuffix: '',
	},
	app: {
		head: {
			htmlAttrs: {
				lang: 'en-US',
			},
			meta: [
				{ name: 'description', content: 'NP Overflow' },
				{ property: 'twitter:card', content: 'summary_large_image' },
			],
		},
	},
	nitro: {
		routeRules: {
			'/api/**': {
				swr: true,
			},
			'/**': {
				static: true,
			},
		},
	},
})
