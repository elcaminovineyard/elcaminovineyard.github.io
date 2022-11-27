/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./*.{html,js}"],
    extend: {
        colors: {
            'warm-gray': colors.warmGray,
            teal: colors.teal,
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
    theme: {
        container: {
            center: true,
        },
        fontFamily: {
            'mono': ['Roboto Mono', ...defaultTheme.fontFamily.mono],
        },
    }
}
