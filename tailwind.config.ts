import type { Config } from "tailwindcss";
import { COLORS } from "./src/app/constants/styles";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary-blue': COLORS.primary.blue,
        'primary-red': COLORS.primary.red,
      },
      keyframes: {
        'slide-90': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'slide-90': 'slide-90 180s linear infinite',
        'slide-40': 'slide-40 80s linear infinite',
        'slide-20': 'slide-20 40s linear infinite',
        'fade-in': 'fade-in 1s ease-out forwards'
      },
      transitionProperty: {
        'opacity': 'opacity',
      },
      transitionDuration: {
        '500': '500ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
