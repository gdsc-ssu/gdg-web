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
      sm: { max: "640px" },
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
          ssuLightBlue: COLORS.primary.ssuLightBlue,
        },
        grayscale: {
          white: COLORS.grayscale.white,
          gray1: COLORS.grayscale.gray1,
          gray100: COLORS.grayscale.gray100,
          gray2: COLORS.grayscale.gray2,
          gray3: COLORS.grayscale.gray3,
          gray4: COLORS.grayscale.gray4,
          gray5: COLORS.grayscale.gray5,
          gray6: COLORS.grayscale.gray6,
          gray7: COLORS.grayscale.gray7,
          gray8: COLORS.grayscale.gray8,
          gray9: COLORS.grayscale.gray9,
          black: COLORS.grayscale.black,
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
