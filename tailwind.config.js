/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {}
  },

  plugins: [require("daisyui")],

  daisyui:{
    themes: [
      {
        mytheme: {
          "primary": "#ffffff",
          "secondary": "#ffffff",
          "accent": "#ffffff",
          "neutral": "#ffffff",
          "base-100": "#000000",
          "info": "#ff00ff",
          "success": "#00ff00",
          "warning": "#00ff00",
          "error": "#ffff00",
        },
        mytheme2: {
          "primary": "#00b0ff", 
          "secondary": "#0093ff",
          "accent": "#84a900",
          "neutral": "#242424",
          "base-100": "#effffa",
          "info": "#0073d5",
          "success": "#00b211",
          "warning": "#ff9900",
          "error": "#ff7292",
        }
      },
      "light"]
  }
};
