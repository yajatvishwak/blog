/** @type {import('tailwindcss').Config}*/
/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/svhighlight/**/*.svelte",
  ],

  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],
};

module.exports = config;
