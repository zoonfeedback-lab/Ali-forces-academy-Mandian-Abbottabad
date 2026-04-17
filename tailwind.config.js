/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a2e1f',
          mid:     '#133d28',
          light:   '#1a5236',
        },
        gold: {
          DEFAULT: '#c5a059',
          bright:  '#f0c060',
          pale:    '#f5dfa0',
          dark:    '#a07d3a',
        },
        cream: {
          DEFAULT: '#f8f5ef',
          dark:    '#ede9e1',
        },
      },
      fontFamily: {
        sans:  ['Outfit', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'fade-up':     'fadeUp 0.8s ease both',
        'hero-zoom':   'heroZoom 14s ease-in-out infinite alternate',
        'shimmer':     'shimmer 4s linear infinite',
        'float':       'float 6s ease-in-out infinite',
        'marquee':     'marquee 22s linear infinite',
        'scroll-dot':  'scrollDot 1.8s ease-in-out infinite',
        'pulse-soft':  'pulseSoft 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        heroZoom: {
          '0%':   { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1.14)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollDot: {
          '0%':   { opacity: '1',  transform: 'translateX(-50%) translateY(0)' },
          '100%': { opacity: '0',  transform: 'translateX(-50%) translateY(14px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.6' },
        },
      },
      backgroundSize: {
        '200': '200% auto',
      },
      boxShadow: {
        gold:   '0 4px 24px rgba(197,160,89,0.25)',
        'gold-lg': '0 8px 40px rgba(197,160,89,0.4)',
        card:   '0 8px 40px rgba(10,46,31,0.08)',
        hero:   '0 20px 80px rgba(10,46,31,0.4)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4,0,0.2,1)',
      },
    },
  },
  plugins: [],
}
