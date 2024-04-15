/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html, js,vue}',
    './index.html',
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
        height: 'height',
        spacing: 'margin, padding',
      },
    },
  },
  plugins: [],
};
