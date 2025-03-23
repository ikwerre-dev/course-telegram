/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#FFD700',
          DEFAULT: '#CFB53B',
          dark: '#B8860B',
        },
        dark: {
          light: '#2D2D2D',
          DEFAULT: '#1A1A1A',
          darker: '#121212',
        }
      }
    },
  },
  plugins: [],
}