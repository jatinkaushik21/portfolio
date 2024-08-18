/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'animate-before': {
          '0%': { transform: 'translateX(-450px) translateY(-300px)', opacity: '0.1' },
          '50%': { transform: 'translateX(-100px) translateY(-100px)', opacity: '0.5' },
          '100%': { transform: 'translateX(-450px) translateY(-250px)', opacity: '1' },
          '100%': { transform: 'translateX(-450px) translateY(-250px)', opacity: '0.5' },
          '100%': { transform: 'translateX(-450px) translateY(-250px)', opacity: '0.1' },
          '100%': { transform: 'translateX(-450px) translateY(-250px)', opacity: '0' },
        },
        'animate-after': {
          '0%': { transform: 'translateX(450px) translateY(50px)', opacity: '0.1' },
          '50%': { transform: 'translateX(100px) translateY(30px)', opacity: '0.5' },
          '100%': { transform: 'translateX(450px) translateY(50px)', opacity: '1' },
          '100%': { transform: 'translateX(450px) translateY(50px)', opacity: '0.5' },
          '100%': { transform: 'translateX(450px) translateY(50px)', opacity: '0.1' },
          '100%': { transform: 'translateX(450px) translateY(50px)', opacity: '0' },
        },
      },
      animation: {
        'animate-before': 'animate-before 10s ease-in-out infinite',
        'animate-after': 'animate-after 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

