/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "yellow-primary": "#ffdd00",
        "purple-primary": "#842a80",
        "blue-primary": "#009eff",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
