/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {},
    },
    plugins: [],
}
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
}