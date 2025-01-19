/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'custom-sm': '0.875rem', // 14px
        'custom-md': '1rem',    // 16px
        'custom-lg': '1.25rem', // 20px
      },
    },
  },
  plugins: [],
}