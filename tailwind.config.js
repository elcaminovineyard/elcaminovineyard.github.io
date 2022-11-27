/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

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
        extend: {
            fontFamily: {
                'mono': ['roboto-mono'],
            },
        },
    }
}
