/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  safelist: [{
    pattern: /(bg|text)-(primary|secondary)-(100|900)/,
    variants: ['responsive', 'hover', 'focus'],
  }
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f0f4ff',
          200: '#d9e6ff',
          300: '#a6c1ff',
          400: '#598bff',
          500: '#3366ff',
          600: '#274bdb',
          700: '#1a34b8',
          800: '#102693',
          900: '#091a7a',
        },
        secondary: {
          100: '#f0fff4',
          200: '#c6f6d5',
          300: '#9ae6b4',
          400: '#68d391',
          500: '#48bb78',
          600: '#38a169',
          700: '#2f855a',
          800: '#276749',
          900: '#22543d',
        },
      }
    },
  },
  plugins: [],
}

