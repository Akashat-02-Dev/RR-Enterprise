import type { Config } from "tailwindcss";

const config: Config = {
  // This bulletproof content array ensures Tailwind finds your files 
  // whether you are using a 'src' directory or not.
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        eco: {
          100: '#e8fccf', // Lightest
          200: '#96e072', // Light 
          300: '#3da35d', // Primary
          400: '#3e8914', // Dark 
          500: '#134611', // Darkest
        }
      },
      fontFamily: {
        alegreya: ['var(--font-alegreya)', 'serif'],
        nunito: ['var(--font-nunito)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      boxShadow: {
        'apple': '0 8px 32px 0 rgba(19, 70, 17, 0.08)',
        'apple-hover': '0 12px 48px 0 rgba(19, 70, 17, 0.12)',
      }
    },
  },
  plugins: [],
};
export default config;