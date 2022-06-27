/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      // import a imagem de fundo sempre do src
      backgroundImage: {
        blur: "url(/src/assets/blur_background.png)"
      },
      animation: {
        waintingCharge: "5s ease-in-out 0s infinite normal none running loading",
        alert: "alert 2s ease-in-out 0s 1 normal"
      },
      keyframes: {
        loading: {
          "0%, 100%": {
            backgroundPosition: "-500px"
          },
          "100%": {
            backgroundPosition: "0px"
          }
        },
        alert: {
          "0%": { transform: "translateX(0)" },
          "5%": { transform: " translateX(-10px)" },
          "10%": { transform: "translateX(10px)" },
          "15%": { transform: "translateX(-10px)" },
          "20%": { transform: "translateX(10px)" },
          "25%": { transform: "translateX(-10px)" },
          "30%": { transform: "translateX(10px)" },
          "35%": { transform: "translateX(-10px)" },
          "40%": { transform: "translateX(10px)" },
          "45%": { transform: "translateX(-10px)" },
          "50%": { transform: "translateX(0)" },
        }
      },
      fontFamily: {
        sans: "Roboto, sans-serif"
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
