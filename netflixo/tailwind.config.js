/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      //height
      height: {
        header: '560px',
        rate: '400px',
      },
      //font size
      fontSize: {
        h1: '2.6rem',
      },
      //screens
      screens: {
        xs: '475px',
      },
      //colors
      colors: {
        main: '#080A1A',
        subMain: '#F20000',
        dry: '#0B0F29',
        star: '#FBB000',
        text: '#C0C0C0',
        border: '#4b5563',
        dryGray: '#E0D5D5',
      },
    },
  },
  plugins: [],
}