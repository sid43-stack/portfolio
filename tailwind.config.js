/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
      },
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb', // primary corporate electric sapphire
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a', // deep navy
          950: '#0f172a',
        },
        tech: {
          canvas: '#f8fafc',
          surface: '#ffffff',
          darkCanvas: '#070b14', // deep midnight titanium
          darkSurface: '#0d1322', // elevated dark surface
          darkBorder: '#1e293b',
          cyan: '#06b6d4',
          emerald: '#10b981',
          indigo: '#6366f1',
          violet: '#8b5cf6',
        }
      },
      boxShadow: {
        'tech-glow': '0 0 25px -5px rgba(37, 99, 235, 0.25)',
        'tech-glow-dark': '0 0 30px -5px rgba(59, 130, 246, 0.2)',
        'tech-card': '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.02)',
      }
    },
  },
  plugins: [],
}
