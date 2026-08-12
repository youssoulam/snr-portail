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
        snr: {
          /* Bleu marine — couleur principale du nouveau logo SNR */
          blue: {
            50: "#EEF1F7",
            100: "#D5DCE8",
            200: "#A8B8D0",
            300: "#7A94B8",
            400: "#4D70A0",
            500: "#1A2B48",
            600: "#152238",
            700: "#101A2A",
            800: "#0B121C",
            900: "#060A10",
          },
          /* Or / ambre — accent du logo (R stylisé, séparateur, baseline) */
          gold: {
            400: "#D4A84B",
            500: "#C59325",
            600: "#A67A1E",
          },
          red: {
            500: "#DA001A",
            600: "#B00015",
          },
          senegal: {
            green: "#00853F",
            yellow: "#FDEF42",
            red: "#E31B23",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
