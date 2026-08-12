/**
 * Charte graphique SNR — Nouveau logo (2026)
 * Baseline : RIGUEUR • CONFIANCE • PERFORMANCE
 */
export const snrColors = {
  blue: {
    500: { hex: "#1A2B48", rgb: "26, 43, 72", cmyk: "100, 85, 35, 45" },
    600: { hex: "#152238", rgb: "21, 34, 56", cmyk: "100, 85, 35, 55" },
    700: { hex: "#101A2A", rgb: "16, 26, 42", cmyk: "100, 85, 35, 65" },
  },
  gold: {
    500: { hex: "#C59325", rgb: "197, 147, 37", cmyk: "0, 25, 81, 23" },
    600: { hex: "#A67A1E", rgb: "166, 122, 30", cmyk: "0, 26, 82, 35" },
  },
  red: {
    500: { hex: "#DA001A", rgb: "218, 0, 26", cmyk: "0, 100, 88, 15" },
  },
  neutral: {
    white: { hex: "#FFFFFF", rgb: "255, 255, 255" },
    gray: { hex: "#666666", rgb: "102, 102, 102" },
    dark: { hex: "#333333", rgb: "51, 51, 51" },
  },
} as const;

export const snrBaseline = "RIGUEUR • CONFIANCE • PERFORMANCE";
