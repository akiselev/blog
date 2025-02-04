module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts,md}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif']
            }
        }
    },
    plugins: [require('@tailwindcss/typography')]
};
