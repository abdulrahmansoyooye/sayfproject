/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],

        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "podcast-image": "url('/public/assets/podcast.png')",
      },
      colors: {
        "primary-color": "#F6F6F6",
      },
    },
  },
  plugins: [],
};
