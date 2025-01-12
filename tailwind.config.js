import daisyui from "daisyui";
import tailwindcssMotion from "tailwindcss-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Raleway"],
    },
    extend: {},
  },
  plugins: [daisyui, tailwindcssMotion],
  daisyui: {
    themes: ["business"],
  },
};
