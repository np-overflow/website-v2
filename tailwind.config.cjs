/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				cubano: ['Inter', 'sans-serif'],
				poppins: ['Inter', 'sans-serif'],
			},
			colors: {
				'primary-100': '#14171A',
				'base': 'hsl(0 0% 80%)',
				'salmon': '#ef646d',
				'goldenrod': '#f4972a',
			},
			boxShadow: {
				'glass': 'inset 0 -1px 0 0 hsla(0, 0%, 50%, 0.1)',
				'glass-dark': 'inset 0 -1px 0 0 hsla(0, 0%, 100%, 0.1)',
			},
			backdropBlur: {
				glass: '12px',
			},
			content: {
				default: '""',
			},
			inset: {
				'card-offset': 'calc(50% - 8px)',
				'0.25': '1px',
			},
		},
	},
	daisyui: {
		themes: [
			{
				dark: {
					'primary': '#292E34',
					'secondary': '#FF6600',
					'accent': '#09BB6F',
					'neutral': '#12171B',
					'base-100': '#000212', // #1c2324
					'base-content': '#f8fafc',
					'info': '#0ea5e9',
					'success': '#22c55e',
					'warning': '#f59e0b',
					'error': '#be123c',
				},
			},
			{
				light: {
					'primary': '#d6d1cb',
					'secondary': '#FF6600',
					'accent': '#09BB6F',
					'neutral': '#ede8e4',
					'accent-content': '#ede8e4',
					'base-100': '#F6F7FC',
					'info': '#0ea5e9',
					'success': '#22c55e',
					'warning': '#f59e0b',
					'error': '#be123c',
				},
			},
		],
	},
	plugins: [require('daisyui')],
}
