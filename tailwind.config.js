/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0052CC',
          dark: '#003D9B',
          light: '#DAE2FF',
          container: '#dae2ff',
        },
        surface: {
          DEFAULT: '#F9F9F9',
          white: '#FFFFFF',
          low: '#F3F3F4',
          mid: '#EEEEEE',
          high: '#E8E8E8',
        },
        ink: {
          DEFAULT: '#1A1C1C',
          muted: '#434654',
          subtle: '#737685',
        },
        border: {
          DEFAULT: '#C3C6D6',
          light: '#E2E2E2',
        },
      },
      fontFamily: {
        display: ['"Hanken Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['4.5rem', { lineHeight: '5rem', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-xl': ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-lg': ['2rem', { lineHeight: '2.5rem', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'body-md': ['1rem', { lineHeight: '1.5rem' }],
        'label-md': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '600', letterSpacing: '0.05em' }],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        card: '0px 4px 20px rgba(0, 0, 0, 0.04)',
        'card-hover': '0px 12px 30px rgba(0, 0, 0, 0.08)',
        nav: '0px 1px 0px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
      },
    },
  },
  plugins: [],
}
