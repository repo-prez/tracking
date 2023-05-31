/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1280px) { ... }

      'xl': '1640px',
      // => @media (min-width: 1280px) { ... }
      
    },
  },
  plugins: [],
  
    
}