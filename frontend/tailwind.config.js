/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    // if you have personal styles just add it to the extend eg:
    /* 
      extend: {
        color-text: {
          "primary-color: #fffff",
          "secondery-color: "black",
        }
      }
    */
    extend: {
      fontFamily: {
        "primary-font-family": [
          "Montserrat", "serif"
        ],
        "secondery-font-family" : [
          "Poppins", "sans-serif"
        ]
      }
    },
  },
  plugins: [],
}

