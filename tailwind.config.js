/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Poppins"', 'sans-serif'],
        'heading': ['"Sacramento"', 'cursive'],
        'lavishly': ['"Lavishly Yours"', 'cursive'],
      },
      colors: {
        'theme': {
          'main': '#F00050',
          'light': '#F5C3CF',
          'deep': '#841C41'
        }
      }
    },  
  },
  plugins: [],
}

