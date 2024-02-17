/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './ui/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          10: '#df80f7',
          20: '#cd34f2',
          30: '#c001ef',
          40: '#9a01bf',
          50: '#600179',
        },
        secondary: {
          10: '#80eee1',
          20: '#33e4ce',
          30: '#00ddc2',
          40: '#02b19c',
          50: '#016f61',
        },
      },
    },
  },
  plugins: [],
}
