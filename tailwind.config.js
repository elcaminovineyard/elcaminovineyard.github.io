/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
    content: ["./*.{html,js}"],
    extend: {
        colors: {
            stone: colors.stone,
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
                'sans': ['raleway'],
            },
        },
    }
}
