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
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ]
}
