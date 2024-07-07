/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dark': '#202C36',
                'secondary': '#2B3844',
                'textColor': '#FFFFFF',
                'textPrimary': '#DCDCDC',
            },
            fontFamily: {
                'nunito': ['Nunito Sans', 'sans-serif'],
            }
        },
    },
    plugins: [],
}