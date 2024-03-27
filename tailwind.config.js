/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      boxShadow:{
        'glow': '0 0 10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [
    flowbitePlugin
  ],
  
}