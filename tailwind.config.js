/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        alpine: '#F7F8F5',
        slate: '#1D1D1F',
        titanium: '#86868B',
        forest: {
          DEFAULT: '#1A4027',
          mid: '#2D6040',
          light: '#EBF2EC',
        },
        bled: {
          DEFAULT: '#1A7272',
          light: '#E6F4F4',
        },
        amber: {
          DEFAULT: '#B86B28',
          light: '#FDF0E4',
        },
        meadow: '#4A7C3F',
      },
      borderRadius: {
        squircle: '28px',
        squircle2: '20px',
      },
      backdropBlur: {
        xl: '24px',
        '2xl': '40px',
      },
    },
  },
  plugins: [],
}
