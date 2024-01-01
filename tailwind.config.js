/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#fc5360',
        darkPrimary:'#ED4E5A'
      }
    },
  },
  plugins: [],
  mode: "jit",
}

