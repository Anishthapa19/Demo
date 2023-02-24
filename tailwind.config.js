/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        normal: ["Urbanist-Regular"],
        medium: ["Urbanist-Medium"],
        semibold: ["Urbanist-SemiBold"],
        bold: ["Urbanist-Bold"],
        extrabold: ["Urbanist-Black"],
      },
      colors: {
      },
    },
  },
  plugins: [],
}
