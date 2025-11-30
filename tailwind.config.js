/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    'src/components/**/*.{js,ts,jsx,tsx,mdx}',
    'src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'src/*.{js,ts,jsx,tsx,mdx}',
    'src/layouts/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/preline/dist/*.js',
  ],
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '10rem',
      },
    },

    fontFamily: {
      nunito: ['"Nunito"', 'sans-serif'],
      maven: ['"Maven Pro"', 'sans-serif'],
    },

    extend: {
      colors: {
        primary: '#007bff',
      },
    },
  },

  plugins: [require('preline/plugin'), require('@tailwindcss/forms')],
}
