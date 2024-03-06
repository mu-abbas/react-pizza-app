/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto mono', 'monospace'],
    },
    extend: {
      keyframes: {
        loading: {
          '20%': {
            backgroundPosition: '0% 0%, 50% 50%, 100% 50%',
          },
          '40%': {
            backgroundPosition: '0% 100%, 50% 0%, 100% 50%',
          },
          '60%': {
            backgroundPosition: '0% 50%, 50% 100%, 100% 0%',
          },
          '80%': {
            backgroundPosition: '0% 50%, 50% 50%, 100% 100%',
          },
        },
      },
      animation: {
        loading: 'loading 1s infinite ease-in-out',
      },
      // height: {
      //   screen: '100dvh',
      // },
    },
  },
  plugins: [],
};
