/** Chemins et métadonnées des visuels — évite d'étirer des images basse résolution. */

export const images = {
  logo: "/images/logo-snr-nouveau.png",
  dgPortrait: "/images/dg-pape-ibrahima-senghor.jpg",
  /** Paysages HD utilisables en grand format */
  randonnee: "/images/randonnee-2018-hd.jpg",
  randonneeSuite: "/images/randonnee-2018-suite-hd.jpg",
  donHopital: "/images/don-hopital-diamniadio-hd.jpg",
  femmesSnr: "/images/femmes-snr-2018-hd.jpg",
} as const;

/** Images trop petites ou scans — ne pas utiliser en hero / plein écran */
export const lowResImages = [
  "/images/snr-accueil-officiel.jpg", // 1200×350 bannière
  "/images/avis-vente-immeubles.jpg", // 541×734 scan
  "/images/passation-service-snr.jpg", // 811×604
  "/images/snr-covid19.jpg",
] as const;
