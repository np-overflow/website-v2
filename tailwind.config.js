module.exports = {
	plugins: [require('daisyui')],
	theme: {
		extend: {
			fontFamily: {
				cubano: ['Cubano', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				'primary-100': '#14171A',
				'base': 'hsl(0 0% 80%)',
			},
			boxShadow: {
				glass: 'inset 0 -1px 0 0 hsla(0, 0%, 100%, 0.1)',
			},
			backdropBlur: {
				glass: '12px',
			},
			content: {
				default: '""',
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
					'base-100': '#1c2324',
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
}
