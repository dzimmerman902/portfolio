const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    ppurge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            primary: {
                DEFAULT: '#73956F'
            },
            secondary: {
                DEFAULT: '#95D7AE'
            }
        },
        fontFamily: {
            sans: ["'Ubuntu', sans-serif", ...defaultTheme.fontFamily.sans]
        },
        extend: {
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
