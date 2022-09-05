/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
         container:{
      center:true,
    },
    backgroundColor:{
      "container": "#7978787a",
      "characterAlive":"#86b95c",
      "characterDead": "rgb(252, 107, 107)",
      "characterUnknown": "rgb(252, 184, 107)"
    },
    
  
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
    maxWidth: {
      'sm': '15rem',
    },
      borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    }
    },
  },
  plugins: [],
}
