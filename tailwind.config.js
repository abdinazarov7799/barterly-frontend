module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#E3E3E3',
        'gray-light': '#F0F0F0',
        'gray-extra-light': '#FBFBFB',
        'text-gray': '#A5A4A3',
      },
      fontFamily: {
        sans: ['Jeko', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
