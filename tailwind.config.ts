import type { Config } from "tailwindcss";
import { COLORS } from "./src/app/constants/styles";

const MEDIA_QUERY = {
  mobile: '(max-width: 768px)',
  tablet: '(max-width: 1024px)',
  desktop: '(max-width: 1280px)',
};

const TEXT_STYLES = {
  title: {
    fontSize: '80px',
    fontWeight: 600,
    lineHeight: '140%',
    letterSpacing: '-0.025em',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '40px',
      fontWeight: 600,
      lineHeight: '140%',
    },
  },
  subTitle: {
    fontSize: '40px',
    fontWeight: 600,
    lineHeight: '140%',
    letterSpacing: '-0.025em',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '140%',
    },
  },
  subTitle32: {
    fontSize: '32px',
    fontWeight: 600,
    lineHeight: '140%',
    letterSpacing: '-0.025em',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: '140%',
    },
  },
  subTitle20: {
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '140%',
    letterSpacing: '-0.025em',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '140%',
    },
  },
  navList: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '140%',
    letterSpacing: '-0.025em',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '140%',
    },
  },
  body14: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '140%',
    letterSpacing: '-0.025em',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '140%',
    },
  },
};

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
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = Object.entries(TEXT_STYLES).reduce(
        (acc, [key, style]) => {
          const className = `.text-style-${key}`;
          const { fontSize, fontWeight, lineHeight, letterSpacing } = style;

          acc[className] = {
            fontSize,
            fontWeight: String(fontWeight),
            lineHeight,
            ...(letterSpacing && { letterSpacing }),
          };

          Object.keys(style).forEach((prop) => {
            if (prop.startsWith('@media')) {
              acc[className][prop] = style[prop as keyof typeof style];
            }
          });

          return acc;
        },
        {} as Record<string, any>
      );

      addUtilities(newUtilities, ['responsive']);
    },
  ],
} satisfies Config;
