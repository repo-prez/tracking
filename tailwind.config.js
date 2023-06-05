/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Playfair Display', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['Playfair Display', 'monospace'],
      },
      colors: {
        background: '#CCECFF',

        primary: '#02a8ab',
        secondary: '#056061',

        bannerColor: '#056061',
        bannerColor2: '#02a8ab',
        //colunmas
        colunma1: '#00605F',
        colunma2: '#0EB3B1',
        colunma3: '#149595',
        colunma4: '#00605F',
        //Titulos
        title1: '#38aada',
        title2: '#4bacc6',
        //fila
        fila1: '#d2efef',
        fila2: '#d2e0e0',
        fila3: '#cce9ea',
        fila4: '#d2efef',
        fila5: '#d2e0e0',

      },
    },

    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1640px',

    },
  },
  plugins: [],


}