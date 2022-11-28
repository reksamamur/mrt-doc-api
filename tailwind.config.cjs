/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "source-code-pro": ['"Source Code Pro"', "cursive"],
      },
    },
  },
  plugins: [],
};
