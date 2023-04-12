/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  plugins: [

  ],
  theme: {
    borderRadius: {
      "8px": "8px",
      "full": "999px"
    },
    screens: {
      'pc': "1416px",
      // => @media (max-width: 1535px) { ... }
      'max1440': { 'max': '1440px' },
      'max1280': { 'max': '1280px' },
      'max1199': { 'max': '1199px' },
      // => @media (max-width: 1279px) { ... }
      'max1024': { 'max': '1024px' },
      // => @media (max-width: 1023px) { ... }
      'max991': { 'max': '991px' },
      // => @media (max-width: 991px) { ... }
      'max767': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }
      'max667': { 'max': '667px' },
      // => @media (max-width: 667px) { ... }
      'max639': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
      'max320': { 'max': '320px' },
      // => @media (max-width: 320px) { ... }
      "min640": { "min": '640px' },
      // => @media (min-width: 640) { ... }

      ...defaultTheme.screens,
    },
    colors: {
      transparent: 'transparent',
      primary: "#FE8C00",
      gray: "#E6E6E6",
      border: "#828282",
      white: "#ffffff",
      black: "#000000"
    },
    fontFamily: {
      primary: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.7rem', { lineHeight: '1rem' }],//14/20
      sm: ['0.77rem', { lineHeight: '1.17' }],//16/24
      base: ['1rem', { lineHeight: '1.25' }],//20/25
      18: ['18px', { lineHeight: '23px' }, { fontWeight: "600" }],
      24: ['24px', { lineHeight: '30px' }, { fontWeight: "700" }],
      md: ['1.5rem', { lineHeight: '1.25' }],//20/28
      lg: ['2rem', { lineHeight: '1.25' },],//40/50
    },
    extend: {
      spacing: {
        "4": "4px",
        "6": "6px",
        "8": "8px",
        "10": "10px",
        "12": "12px",
        "16": "16px",
        "20": "20px",
        "24": "24px",
        "30": "30px",
        "40": "40px",
      },
      borderRadius: {
        'base': '6px',
        '10': '10px',
        '4': '4px',
        '20': '20px',
        '12': '12px',
      },
      gridTemplateColumns: {
        'edit': '200px minmax(200px, 1fr)',
        'edit-mobile': '100px minmax(200px, 1fr)',
      }
    },
    minWidth: {
      "160px": "160px",
      "100px": "100px",
      "200px": "200px",
      "376": "376px",
      88: "88px"
    },
    maxWidth: {
      '50%': '50%',
      '60%': '60%',
      '70%': '70%',
      '80%': '80%',
      '90%': '90%',
      'full': '100%',
      "160px": "160px",
      "100px": "100px",
      "200px": "200px",
      "376": "376px",
      88: "88px"
    },
    minHeight: {
      28: "28px",
      40: "40px",
      88: "88px",
    },
    height: {
      100: "100%"
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  }
}