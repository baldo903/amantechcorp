/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        // Light Theme inspired by Marley design
        // White/light backgrounds, dark grey text, red accent
        primary: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280', // Medium grey
          600: '#5a5a59', // Darker grey
          700: '#4d4d4c', // Dark grey (matches footer)
          800: '#3d3d3c', // Darker
          900: '#2a2a29', // Darkest
          950: '#1a1a19',
        },
        secondary: {
          50: '#fef8f7',
          100: '#fde8e1',
          200: '#fac9bf',
          300: '#f5a396',
          400: '#f08b75',
          500: '#BA3316', // Deep red (supporting)
          600: '#a82d13',
          700: '#962811',
          800: '#7d220e',
          900: '#641c0a',
          950: '#3d1107',
        },
        accent: {
          50: '#fef8f7',
          100: '#fdecea',
          200: '#fad4d0',
          300: '#f7bcb5',
          400: '#f5a49a',
          500: '#c73e1d', // Red-orange (main accent/CTA)
          600: '#b83819',
          700: '#a93214',
          800: '#8f2910',
          900: '#75220c',
          950: '#4a1408',
        },
        tertiary: {
          50: '#f0f4f7',
          100: '#d4e0eb',
          200: '#b8cce0',
          300: '#7fa8d1',
          400: '#5590c1',
          500: '#2e8b9e', // Teal (supporting)
          600: '#28788a',
          700: '#226675',
          800: '#1c5460',
          900: '#1b4965',
          950: '#0f2a38',
        },
        neutral: {
          50: '#fafbfc',
          100: '#f3f6f9',
          200: '#e5ecf1',
          300: '#d1dce8',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        'footer-dark': '#4d4d4c',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        heading: ['Trebuchet MS', 'Segoe UI', 'Tahoma', 'sans-serif'],
      },
      // Extended utilities for enterprise styling
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #637bb7 0%, #3c496e 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #BA3316 0%, #8b2710 100%)',
        'gradient-accent': 'linear-gradient(135deg, #BA3316 0%, #8b2710 100%)',
      },
      boxShadow: {
        'elevation-1': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        'elevation-2': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'elevation-3': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'elevation-4': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
