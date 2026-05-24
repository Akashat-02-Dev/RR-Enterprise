import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        eco: {
          100: '#f4f0e6', // Softest beige derived for readable backgrounds
          200: '#c7ac67', // Light Gold
          300: '#93835e', // Dark Gold/Bronze
          400: '#344838', // Medium Green
          500: '#0d1a12', // Dark Green
        },
        accent: {
          orange: '#ec6917',
          navy: '#063c60'
        }
      },
      fontFamily: {
        gelasio: ['var(--font-gelasio)', 'serif'],
        nunito: ['var(--font-nunito)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      boxShadow: {
        'apple': '0 8px 32px 0 rgba(43, 63, 50, 0.12)',
        'apple-hover': '0 12px 48px 0 rgba(43, 63, 50, 0.20)',
      }
    },
  },
  plugins: [],
};
export default config;