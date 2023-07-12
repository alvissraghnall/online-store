const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        "red-primary": "hsl(0, 100%, 74%)",
        "red-primary-translucent": "hsl(0, 100%, 74%, .7)",
        "green-primary": "hsl(154, 59%, 51%)",
        "blue-accent": "hsl(248, 32%, 49%)",
        "dark-blue-neutral": "hsl(249, 10%, 26%)",
        "grayish-blue-neutral": "hsl(246, 25%, 77%)",
      },
      fontFamily: {
        "poppins": ["Poppins", ...defaultTheme.fontFamily.sans],
        "dm_sans": ['"DM Sans"', ...defaultTheme.fontFamily.sans],
        "inter": ['Inter', ...defaultTheme.fontFamily.serif],
        "lato": ['Lato'],
      },
      backgroundImage: {
        'glass': 'linear-gradient(-45deg, transparent, #ffffff40)',
        'load': 'linear-gradient(90deg, #121214, transparent 90%)',
        'card-glass': 'linear-gradient(200deg, rgb(59 130 246), rgb(37 99 235))',
      }
    },
    
  },
  plugins: [
    require('@tailwindcss/forms'),

  ],
  darkMode: "class",

}
