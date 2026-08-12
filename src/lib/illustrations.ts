/** Visuels illustratifs HD — thématiques SNR (hors photos officielles / DG). */

export const illustrations = {
  institution: "/images/illustrations/institution-moderne.jpg",
  recouvrement: "/images/illustrations/recouvrement-finance.jpg",
  patrimoine: "/images/illustrations/patrimoine-immeubles.jpg",
  vente: "/images/illustrations/patrimoine-vente.jpg",
  location: "/images/illustrations/patrimoine-location.jpg",
  eservices: "/images/illustrations/eservices-digital.jpg",
} as const;

export type IllustrationKey = keyof typeof illustrations;
