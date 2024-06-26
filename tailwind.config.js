/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', "./node_modules/svhighlight/**/*.svelte"],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1000px',
      'xl': '1200px',
      '2xl': '1536px',
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
}

