/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
     
    },
  },
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
  ],
};



