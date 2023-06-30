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
        "poppins": ["Poppins"],
        "dm_sans": ['"DM Sans"'],
        "inter": ['Inter'],
        "lato": ['Lato'],
      }
    },
    
  },
  plugins: [
    require('@tailwindcss/forms'),

  ],
  darkMode: "class",

}
