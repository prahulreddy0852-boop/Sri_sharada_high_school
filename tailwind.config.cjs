/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bcd7ff',
          300: '#8ebeff',
          400: '#5998ff',
          500: '#2f72f5',
          600: '#1a55db',
          700: '#1542b0',
          800: '#16388c',
          900: '#163270',
          950: '#0d1d4a',
        },
        gold: {
          50: '#fffbf0',
          100: '#fff7e6',
          200: '#ffead4',
          300: '#ffd89b',
          400: '#ffbc59',
          500: '#fa8c16',
          600: '#d4610d',
          700: '#ad4e0f',
          800: '#8b3a0f',
          900: '#73300d',
          950: '#442106',
        },
      },
    },
  },
  plugins: [],
};
