/**
 * Charte graphique officielle SNR — Société Nationale de Recouvrement
 * Couleurs extraites du logo officiel (snr.gouv.sn) et du site institutionnel.
 *
 * Identité SNR : Bleu + Orange/Doré (carte du Sénégal dans le logo)
 * Couleurs nationales (accent) : Vert, Jaune, Rouge du drapeau sénégalais
 */
export const snrColors = {
  blue: {
    50: { hex: "#E8F4FC", rgb: "0, 114, 185", cmyk: "100, 38, 0, 0" },
    100: { hex: "#C5E4F7", rgb: "197, 228, 247", cmyk: "20, 8, 0, 0" },
    500: { hex: "#0072B9", rgb: "0, 114, 185", cmyk: "100, 38, 0, 0" },
    600: { hex: "#005A94", rgb: "0, 90, 148", cmyk: "100, 39, 0, 42" },
    700: { hex: "#004470", rgb: "0, 68, 112", cmyk: "100, 39, 0, 56" },
    800: { hex: "#003057", rgb: "0, 48, 87", cmyk: "100, 45, 0, 66" },
    900: { hex: "#001D33", rgb: "0, 29, 51", cmyk: "100, 43, 0, 80" },
  },
  gold: {
    400: { hex: "#F5A623", rgb: "245, 166, 35", cmyk: "0, 32, 86, 4" },
    500: { hex: "#ED8B1C", rgb: "237, 139, 28", cmyk: "0, 41, 88, 7" },
    600: { hex: "#C9740F", rgb: "201, 116, 15", cmyk: "0, 42, 93, 21" },
  },
  red: {
    500: { hex: "#DA001A", rgb: "218, 0, 26", cmyk: "0, 100, 88, 15" },
    600: { hex: "#B00015", rgb: "176, 0, 21", cmyk: "0, 100, 88, 31" },
  },
  senegal: {
    green: { hex: "#00853F", rgb: "0, 133, 63", cmyk: "100, 0, 53, 48" },
    yellow: { hex: "#FDEF42", rgb: "253, 239, 66", cmyk: "0, 6, 74, 1" },
    red: { hex: "#E31B23", rgb: "227, 27, 35", cmyk: "0, 88, 85, 11" },
  },
  neutral: {
    white: { hex: "#FFFFFF", rgb: "255, 255, 255", cmyk: "0, 0, 0, 0" },
    gray: { hex: "#666666", rgb: "102, 102, 102", cmyk: "0, 0, 0, 60" },
    dark: { hex: "#333333", rgb: "51, 51, 51", cmyk: "0, 0, 0, 80" },
    black: { hex: "#000000", rgb: "0, 0, 0", cmyk: "0, 0, 0, 100" },
  },
} as const;
