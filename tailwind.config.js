/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/image-hero.jpg')",
      },
      fontFamily: {
        alata: ['Alata', 'sans-serif'],
        josefin: ['"Josefin Sans"'],
      },
    },
    colors: {
      primaryWhite: 'hsl(0, 0%, 100%)',
      primaryBlack: 'hsl(0, 0%, 0%)',
      darkGray: 'hsl(0, 0%, 55%)',
      veryDarkGray: 'hsl(0, 0%, 41%)',
    },
  },
  plugins: [],
};
