/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2563eb',
          primaryHover: '#1d4ed8',
          secondary: '#0f172a',
          accent: '#3b82f6',
          bgLight: '#f8fafc',
          bgDark: '#080c14',
          surfaceLight: '#ffffff',
          surfaceDark: '#101726',
          borderLight: '#e2e8f0',
          borderDark: '#1c263c',
        },
        midnight: {
          DEFAULT: '#080c14',
          pure: '#080c14',
          card: '#101726',
          cardHover: '#101726',
          border: '#1c263c',
          subtle: '#1c263c',
        },
        shop: {
          red: '#2563eb',
          redHover: '#1d4ed8',
          dark: '#080c14',
          charcoal: '#101726',
          body: '#4a4a4a',
          muted: '#717171',
          light: '#f8fafc',
          border: '#e2e8f0',
        }
      },
      fontFamily: {
        heading: ['"Montserrat"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
