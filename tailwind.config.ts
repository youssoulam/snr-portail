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
          /* Bleu institutionnel SNR — couleur principale (logo, texte SNR) */
          blue: {
            50: "#E8F4FC",
            100: "#C5E4F7",
            200: "#8FC9EF",
            300: "#59ADE4",
            400: "#2E91D4",
            500: "#0072B9",
            600: "#005A94",
            700: "#004470",
            800: "#003057",
            900: "#001D33",
          },
          /* Orange/Doré — carte du Sénégal dans le logo SNR */
          gold: {
            400: "#F5A623",
            500: "#ED8B1C",
            600: "#C9740F",
          },
          /* Rouge — accent (drapeau national, éléments d'alerte) */
          red: {
            500: "#DA001A",
            600: "#B00015",
          },
          /* Vert sénégalais — accent institutionnel secondaire */
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
