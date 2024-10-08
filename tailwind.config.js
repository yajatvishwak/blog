/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        darkasstheme: {
          primary: "#f5f5f4",
          secondary: "#1E1E1E",
          accent: "#3b82f6",
          neutral: "#1c1c22",
          "base-100": "#000000",
          info: "#7dd3fc",
          success: "#86bf00",
          warning: "#ffb500",
          error: "#ff8481",
        },

        lightasstheme: {
          primary: "#00b0ff",
          secondary: "#0093ff",
          accent: "#84a900",
          neutral: "#242424",
          "base-100": "#effffa",
          info: "#0073d5",
          success: "#00b211",
          warning: "#ff9900",
          error: "#ff7292",
        },
      },
      "light",
    ],
  },
};
