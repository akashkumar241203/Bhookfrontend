/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#1a1a2e',
        'brand-orange': '#FF4500',
      }
    },
  },
  plugins: [],
}