module.exports = {
    theme: {
        extend: {
            fontFamily: {
                cubano: ['Cubano']
            },
            colors: {
                "primary-100": "#14171A",
                "base": "hsl(0 0% 80%)"
            },
            boxShadow: {
                'glass': 'inset 0 -1px 0 0 hsla(0, 0%, 100%, 0.1)'
            },
            backdropBlur: {
                'glass': '12px'
            },
            content: {
                'default': '""'
            }
        }
    },
    daisyui: {
        themes: [
        {
            mytheme: {
                "primary": "#292E34",

                "secondary": "#FF6600",

                "accent": "#09BB6F",

                "neutral": "#12171B",

                "base-100": "#222",

                "info": "#0ea5e9",

                "success": "#22c55e",

                "warning": "#f59e0b",

                "error": "#be123c",
            },
        },
        ],
    },
    plugins: [require('daisyui')]
}
