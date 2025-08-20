import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette from design mockup
        'brand-maroon': '#991552',
        'brand-yellow': '#F0BC06',
        'brand-cream': '#FFFEF9',
        'brand-blue': '#A8D4FF',
        'brand-brown': '#934C4C',
        'brand-green': '#59B569',
        'brand-dark': '#2A2A2A',
        'brand-white': '#FFFFFF',
      },
      fontFamily: {
        'league-spartan': ['League Spartan', 'sans-serif'],
        'ysabeau-sc': ['Ysabeau SC', 'serif'],
        'ysabeau-infant': ['Ysabeau Infant', 'serif'],
      },
      borderRadius: {
        'speech-bubble': '50px',
        'category-icon': '16px',
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'nav-button': '0 2px 8px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}

export default config
