/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E8001D',
          navy: '#0A0E1A',
          gold: '#C9A84C',
          surface: '#F4F5F7',
          muted: '#94A3B8',
        },
        primary: {
          dark: "#0A0E1A",
        },
        accent: {
          red: "#E8001D",
        },
        surface: {
          light: "#F4F5F7",
          white: "#FFFFFF",
        },
        text: {
          primary: "#1A1A2E",
        }
      },
      fontFamily: {
        barlow: ["'Barlow Condensed'", "sans-serif"],
        display: ['"Barlow Condensed"', 'sans-serif'],
        inter: ["Inter", "sans-serif"],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 8px 32px rgba(0,0,0,0.08)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.14)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'hub-pulse': 'hubPulse 2s ease-out infinite',
        'draw-route': 'drawRoute 3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        hubPulse: {
          '0%': { r: '4', opacity: '0.7' },
          '100%': { r: '12', opacity: '0' },
        },
        drawRoute: {
          '0%': { strokeDashoffset: '200' },
          '100%': { strokeDashoffset: '0' },
        },
      }
    },
  },
  plugins: [],
}
