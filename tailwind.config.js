/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'cat': "url('asset-a3/cat-big.png')",
      }
    }
  }
}