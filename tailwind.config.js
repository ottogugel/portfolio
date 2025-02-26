/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('/images/hero-bg.png')",
      },
      fontFamily: {
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      boxShadow: {
        button: "0px 0px 68px 7px rgba(0, 100, 255, 0.4)",
      },
      gridTemplateColumns: {
        "auto-fit-264": "repeat(auto-fit, minmax(264px, 1fr))",
        "auto-fit-350": "repeat(auto-fit, minmax(350px, 1fr))",
      },
    },
  },
  plugins: [],
};
