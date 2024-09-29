/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-teal': '#244855',
        'red': '#E64833',
        'brown': '#874F41',
        'light-teal': '#90AEAD',
        'cream': '#FBE9D0',
      },
    },
  },
  plugins: [],
}