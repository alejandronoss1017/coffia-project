/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      // Colores primarios
      green: '#15443D',
      blue: '#9fa8da',
      yellow: '#fff3e0',

      // Colores secundarios
      'secundario-1': '#66462F',
      'secundario-2': '#8D6E63',
      'secundario-3': '#A1887F',

      background: '#FCF9F4',
      black: '#000000',
      white: '#FFFFFF',
      gray: '#212F3D'
    },
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },
    extend: {
      backgroundImage: {
        'coffee-wallpaper': "url('/images/coffee-wallpaper.jpg')"
      },
      screens: {
        // => @media (min-width: 640px) {...}
        sm: '640px',

        // => @media (min-width: 768px) {...}
        md: '768px',

        // => @media (min-width: 1024px) {...}
        lg: '1024px',

        // => @media (min-width: 1280px) {...}
        xl: '1280px',

        // => @media (min-width: 1536px) {...}
        '2xl': '1536px'
      }
    }
  },
  plugins: []
};
