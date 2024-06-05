/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      grayscale: {
        100: '100%',
      },
      fontFamily: {
        normalidad: ['Montserrat', 'sans-serif'],
      },
      transitionDuration: {
        'DEFAULT': '300ms',
      },
      screens: {
        'lgs': '1025px',
        '3xl': '1770px',
      },
      container: {
        center: true,
        padding: "30px",
        screens: {
          'sm': 'none',
          'md': 'none',
          'lg': 'none',
          'xl': 'none',
          '2xl': '1340px',
        },
        maxWidth: {
          'none': 'none',
          'sm': 'none',
          'md': 'none',
          'lg': 'none',
          'xl': 'none',
          '2xl': 'none',
        }
      },
      colors: {
        blue: {
          '400': '#ECF7FF',
          '500': '#10517B',
          '600': '#023761',  
        },
        black: {
          '500': '#090222',
        },
      }
    },
  },
  plugins: [],
}
