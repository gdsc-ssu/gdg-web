import type { Config } from "tailwindcss";
import { COLORS } from "./src/app/constants/styles";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          yellow: COLORS.primary.yellow,
          green: COLORS.primary.green,
          blue: COLORS.primary.blue,
          red: COLORS.primary.red,
        },
        secondary: {
          halftone: {
            red: COLORS.secondary.halftone.red,
            blue: COLORS.secondary.halftone.blue,
            yellow: COLORS.secondary.halftone.yellow,
            green: COLORS.secondary.halftone.green,
          },
          pastel: {
            red: COLORS.secondary.pastel.red,
            blue: COLORS.secondary.pastel.blue,
            yellow: COLORS.secondary.pastel.yellow,
            green: COLORS.secondary.pastel.green,
          },
        },
        neutral: {
          black: COLORS.neutral.black,
          grey: COLORS.neutral.grey,
          "light-grey": COLORS.neutral.lightGrey,
          "off-white": COLORS.neutral.offWhite,
          "black-02": COLORS.neutral.black02,
          background: COLORS.neutral.background,
          white: COLORS.neutral.white,
        },
      },
      keyframes: {
        "slide-90": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "slide-90": "slide-90 180s linear infinite",
        "slide-40": "slide-40 80s linear infinite",
        "slide-20": "slide-20 40s linear infinite",
        "fade-in": "fade-in 1s ease-out forwards",
      },
      transitionProperty: {
        opacity: "opacity",
      },
      transitionDuration: {
        "500": "500ms",
      },
      transitionTimingFunction: {
        "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
