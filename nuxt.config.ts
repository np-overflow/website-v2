// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode',
		'@nuxt/content',
		'nuxt-icon',
	],
	content: {},
	colorMode: {
		preference: 'system', // default theme
		dataValue: 'theme', // activate data-theme in <html> tag
		classSuffix: '',
	},
	app: {
		head: {
			link: [
				{
					rel: 'preconnect',
					href: 'https://fonts.googleapis.com',
				},
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com',
					crossorigin: 'anonymous',
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap',
				},
				{
					rel: 'stylesheet',
					href: 'https://use.typekit.net/opk3ujt.css',
				},
			],
		},
	},
	nitro: {
		routeRules: {
			'/api/**': {
				cache: {
					maxAge: 3600,
				},
			},
		},
	},
})
