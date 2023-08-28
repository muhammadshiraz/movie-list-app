/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',     // HTML templates
    './src/**/*.ts',       // TypeScript files (Angular components)
    // Add any other file types or paths as needed
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans'],
      },
      colors: {
        'orange': 'rgb(213, 147, 34)',
        'gray': '#1C1C1C',
        'lg-gray': 'rgb(149, 149, 149)',
        'lg-dark': 'rgb(22, 22, 22)',        
        'dark': '#212529',
      },
      screens: {
        'sm': '640px',     // Small screens like smartphones
        'md': '768px',     // Medium screens like tablets
        'lg': '1024px',    // Large screens like laptops
        'xl': '1280px',    // Extra-large screens like desktops
        '2xl': '1536px',   // 2x extra-large screens
      },
      fontSize: {
        'xs': '0.75rem',   // Extra small
        'sm': '0.875rem',  // Small
        'base': '1rem',    // Base (usually 16px)
        'lg': '1.125rem',  // Large
        'xl': '1.25rem',   // Extra-large
        '2xl': '1.5rem',   // 2x extra-large
        '3xl': '1.875rem', // 3x extra-large
        '4xl': '2.25rem',  // 4x extra-large
        '5xl': '3rem',     // 5x extra-large
      },
      spacing: {
        'px': '1px',
        '0': '0',
        '1': '0.25rem',    // 4px
        '2': '0.5rem',     // 8px
        '3': '0.75rem',    // 12px
        '4': '1rem',       // 16px
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px
        '8': '2rem',       // 32px
        '10': '2.5rem',    // 40px
        '12': '3rem',      // 48px
        '16': '4rem',      // 64px
        '20': '5rem',      // 80px
        '24': '6rem',      // 96px
        '32': '8rem',      // 128px
      },
    },
  },
  plugins: [],
}
