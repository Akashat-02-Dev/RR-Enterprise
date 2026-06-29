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
          100: '#d3ffad', // Softest green (Replaces beige for backgrounds)
          200: '#84b45b', // Light organic green
          300: '#396f3d', // Vibrant medium green
          400: '#405e40', // Muted slate green
          500: '#014108', // Darkest forest green (Replaces dark green/black)
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
        // Redesigned shadow to match the new #014108 (RGB: 1, 65, 8) dark green base
        'apple': '0 8px 32px 0 rgba(1, 65, 8, 0.12)',
        'apple-hover': '0 12px 48px 0 rgba(1, 65, 8, 0.20)',
      }
    },
  },
  plugins: [],
};
export default config;