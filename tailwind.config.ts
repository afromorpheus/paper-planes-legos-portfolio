import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Color Palette
        'brand-yellow': '#F0BC06',
        'brand-green': '#59B569',
        'brand-maroon': '#991552',
        'brand-brown': '#934C4C',
        'brand-light-blue': '#A8D4FF',
        'brand-cream': '#FFFEF9',
        'brand-dark-grey': '#2A2A2A',
      },
      fontFamily: {
        'league-spartan': ['var(--font-league-spartan)', 'sans-serif'],
        'ysabeau-sc': ['var(--font-ysabeau-sc)', 'serif'],
        'ysabeau-infant': ['var(--font-ysabeau-infant)', 'serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      borderRadius: {
        'speech': '50px',
        'motif': '30px',
        'category': '16px',
        'nav': '50%',
      },
      boxShadow: {
        'speech': '0 10px 25px rgba(240, 188, 6, 0.15)',
        'category': '0 4px 12px rgba(89, 181, 105, 0.2)',
        'nav': '0 2px 8px rgba(240, 188, 6, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
