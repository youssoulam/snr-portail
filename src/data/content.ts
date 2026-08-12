import type {
  Announcement,
  Director,
  Document,
  NavItem,
  Property,
  Service,
  Stat,
} from "@/types";

export const siteConfig = {
  name: "Société Nationale de Recouvrement",
  shortName: "SNR",
  tagline: "Un instrument efficace de recouvrement au service de l'État",
  baseline: "RIGUEUR • CONFIANCE • PERFORMANCE",
  description:
    "La SNR assure le recouvrement des créances de l'État du Sénégal et la gestion du patrimoine immobilier public.",
  url: "https://snr.gouv.sn",
  email: "contact@snr.gouv.sn",
  phone: "+221 33 849 50 00",
  address: "Avenue Léopold Sédar Senghor, Dakar, Sénégal",
  social: {
    facebook: "https://facebook.com/snr.sn",
    twitter: "https://twitter.com/snr_sn",
    linkedin: "https://linkedin.com/company/snr-sn",
  },
};

export const navigation: NavItem[] = [
  { label: "Accueil", href: "/" },
  {
    label: "La SNR",
    href: "/#apropos",
    children: [
      { label: "Présentation", href: "/#apropos" },
      { label: "Mot du DG", href: "/#mot-dg" },
      { label: "Organigramme", href: "/#organigramme" },
      { label: "Anciens DG", href: "/#anciens-dg" },
    ],
  },
  {
    label: "Services",
    href: "/#services",
    children: [
      { label: "Recouvrement", href: "/#services" },
      { label: "Attestations", href: "/#services" },
      { label: "Immeubles", href: "/#immeubles" },
    ],
  },
  { label: "Actualités", href: "/#actualites" },
  { label: "Documenthèque", href: "/#documents" },
  { label: "Médiathèque", href: "/#mediatheque" },
  { label: "Contact", href: "/#contact" },
];

export const services: Service[] = [
  {
    id: "recouvrement",
    title: "Recouvrement des créances",
    description:
      "Recouvrement efficace des créances de l'État auprès des débiteurs publics et privés, conformément à la réglementation en vigueur.",
    icon: "Scale",
    href: "#services",
  },
  {
    id: "attestations",
    title: "Délivrance d'attestations",
    description:
      "Service en ligne de délivrance d'attestations de non-opposition et de certificats de recouvrement pour les usagers.",
    icon: "FileCheck",
    href: "#services",
  },
  {
    id: "immeubles",
    title: "Gestion immobilière",
    description:
      "Mise en vente et en location des immeubles du patrimoine de l'État, avec transparence et procédures conformes.",
    icon: "Building2",
    href: "#immeubles",
  },
  {
    id: "patrimoine",
    title: "Gestion du patrimoine",
    description:
      "Inventaire, valorisation et gestion optimale du patrimoine immobilier et mobilier de l'État sénégalais.",
    icon: "Landmark",
    href: "#services",
  },
  {
    id: "contentieux",
    title: "Contentieux & procédures",
    description:
      "Accompagnement juridique et suivi des procédures contentieuses pour garantir le recouvrement des créances.",
    icon: "Gavel",
    href: "#services",
  },
  {
    id: "e-services",
    title: "E-Services citoyens",
    description:
      "Portail numérique permettant aux usagers de consulter leurs dossiers, soumettre des demandes et suivre leur traitement.",
    icon: "MonitorSmartphone",
    href: "#services",
  },
];

export const stats: Stat[] = [
  { label: "Années d'expérience", value: "35", suffix: "+" },
  { label: "Créances recouvrées", value: "850", suffix: " Mds FCFA" },
  { label: "Immeubles gérés", value: "120", suffix: "+" },
  { label: "Agents mobilisés", value: "450", suffix: "+" },
];

export const quickAccessLinks = [
  {
    label: "Attestations",
    desc: "Demande en ligne",
    href: "#contact",
    icon: "FileCheck",
  },
  {
    label: "Immeubles",
    desc: "Vente & location",
    href: "#immeubles",
    icon: "Building2",
  },
  {
    label: "Documents",
    desc: "Téléchargements",
    href: "#documents",
    icon: "FolderOpen",
  },
  {
    label: "Contact",
    desc: "Nous joindre",
    href: "#contact",
    icon: "Phone",
  },
];

export const heroSlides = [
  {
    id: "1",
    badge: siteConfig.baseline,
    title: "Société Nationale de",
    highlight: "Recouvrement",
    description:
      "Un instrument efficace de recouvrement au service de l'État. Rigueur, confiance et performance au service des citoyens sénégalais.",
    image: "/images/snr-accueil-officiel.jpg",
    cta: { label: "Nos services", href: "#services" },
    ctaSecondary: { label: "Mot du DG", href: "#mot-dg" },
  },
  {
    id: "2",
    badge: "Patrimoine immobilier",
    title: "Immeubles proposés à la",
    highlight: "Vente & Location",
    description:
      "Retrouvez tous les biens du patrimoine de l'État actuellement disponibles, conformément aux avis publiés sur snr.gouv.sn.",
    image: "/images/avis-vente-immeubles.jpg",
    cta: { label: "Consulter les immeubles", href: "#immeubles" },
    ctaSecondary: { label: "Voir les annonces", href: "#actualites" },
  },
  {
    id: "3",
    badge: "Nomination — Conseil des ministres",
    title: "Pape Ibrahima",
    highlight: "SENGHOR, DG de la SNR",
    description:
      "Banquier et juriste, le nouveau Directeur général insuffle une dynamique de modernisation et de recouvrement efficace des créances publiques.",
    image: "/images/dg-pape-ibrahima-senghor.png",
    cta: { label: "Lire le mot du DG", href: "#mot-dg" },
    ctaSecondary: { label: "La SNR", href: "#apropos" },
  },
  {
    id: "4",
    badge: "E-Services citoyens",
    title: "Vos démarches",
    highlight: "100% en ligne",
    description:
      "Demandez vos attestations, suivez vos dossiers de recouvrement et accédez à nos services numériques en toute simplicité.",
    image: "/images/passation-service-snr.jpg",
    cta: { label: "Accéder aux E-Services", href: "#contact" },
    ctaSecondary: { label: "Documenthèque", href: "#documents" },
  },
];

export const announcements: Announcement[] = [
  {
    id: "1",
    title: "Nomination de Papa Ibrahima SENGHOR — Directeur Général de la SNR",
    excerpt:
      "Nommé par le Président Bassirou Diomaye Faye lors du Conseil des ministres du 29 juillet 2026, il succède à Babacar NDIAYE.",
    date: "2026-07-29",
    category: "institutionnel",
    image: "/images/dg-pape-ibrahima-senghor.png",
  },
  {
    id: "2",
    title: "Avis de vente — Immeubles proposés à la vente",
    excerpt:
      "Consultez la liste des immeubles du patrimoine de l'État actuellement proposés à la vente aux enchères publiques.",
    date: "2026-03-01",
    category: "vente",
    image: "/images/avis-vente-immeubles.jpg",
  },
  {
    id: "3",
    title: "Passation de service entre Directeurs Généraux",
    excerpt:
      "Cérémonie officielle de passation de service marquant une nouvelle étape dans la modernisation de la SNR.",
    date: "2026-02-15",
    category: "institutionnel",
    image: "/images/passation-service-snr.jpg",
  },
  {
    id: "4",
    title: "Contribution de la SNR à la lutte contre le COVID-19",
    excerpt:
      "La SNR a apporté sa contribution à l'effort national de lutte contre la pandémie de COVID-19.",
    date: "2020-06-01",
    category: "social",
    image: "/images/snr-covid19.jpg",
  },
];

export const properties: Property[] = [
  {
    id: "1",
    title: "Immeubles proposés à la vente",
    location: "Dakar, Sénégal",
    type: "vente",
    price: "Sur enchères",
    surface: "Voir avis de vente",
    image: "/images/avis-vente-immeubles.jpg",
    featured: true,
  },
  {
    id: "2",
    title: "Patrimoine immobilier de l'État",
    location: "Plateau & Almadies, Dakar",
    type: "location",
    price: "Sur demande",
    surface: "Variable",
    image: "/images/snr-accueil-officiel.jpg",
    featured: true,
  },
  {
    id: "3",
    title: "Biens immobiliers — Avis officiels SNR",
    location: "Sénégal",
    type: "vente",
    price: "Sur enchères",
    surface: "Voir documenthèque",
    image: "/images/passation-service-snr.jpg",
  },
  {
    id: "4",
    title: "Locaux disponibles à la location",
    location: "Dakar",
    type: "location",
    price: "Sur demande",
    surface: "Variable",
    image: "/images/avis-vente-immeubles.jpg",
  },
];

export const documents: Document[] = [
  {
    id: "1",
    title: "Rapport d'activités 2025",
    type: "rapport",
    date: "2026-01-15",
    size: "4.2 Mo",
  },
  {
    id: "2",
    title: "Avis de vente — Immeubles Mars 2026",
    type: "pdf",
    date: "2026-03-01",
    size: "1.8 Mo",
  },
  {
    id: "3",
    title: "La SNR : un instrument efficace de recouvrement",
    type: "video",
    date: "2025-06-20",
  },
  {
    id: "4",
    title: "Résumé Rapport d'activités 2024",
    type: "pdf",
    date: "2025-02-10",
    size: "2.1 Mo",
  },
  {
    id: "5",
    title: "Guide des procédures de recouvrement",
    type: "pdf",
    date: "2025-09-01",
    size: "3.5 Mo",
  },
];

export const formerDirectors: Director[] = [
  {
    id: "0",
    name: "Monsieur Babacar NDIAYE",
    title: "Directeur Général",
    period: "2019 — Juil. 2026",
  },
  {
    id: "1",
    name: "Maître Babacar DIALLO",
    title: "Avocat",
    period: "Oct. 2013 — Nov. 2019",
  },
  {
    id: "2",
    name: "Maître El Hadji Omar YOUM",
    title: "Avocat",
    period: "Août 2012 — Oct. 2013",
  },
  {
    id: "3",
    name: "Monsieur Assane MBAYE",
    title: "Directeur Général",
    period: "Avr. 2002 — Août 2012",
  },
];

export const mediaGallery = [
  {
    id: "1",
    title: "Cérémonie de remise de chèque — Hôpital Diamniadio",
    image: "/images/don-hopital-diamniadio-hd.jpg",
  },
  {
    id: "2",
    title: "Randonnée pédestre 2018 — SNR",
    image: "/images/randonnee-2018-hd.jpg",
  },
  {
    id: "3",
    title: "Randonnée pédestre 2018 — SNR (suite)",
    image: "/images/randonnee-2018-suite-hd.jpg",
  },
  {
    id: "4",
    title: "La SNR fête ses femmes — 8 mars 2018",
    image: "/images/femmes-snr-2018-hd.jpg",
  },
  {
    id: "5",
    title: "Passation de service — SNR",
    image: "/images/passation-service-snr.jpg",
  },
  {
    id: "6",
    title: "Contribution SNR — Lutte contre le COVID-19",
    image: "/images/snr-covid19.jpg",
  },
];

export const dgMessage = {
  name: "Pape Ibrahima SENGHOR",
  title: "Directeur Général",
  role: "Société Nationale de Recouvrement",
  photo: "/images/dg-pape-ibrahima-senghor.png",
  appointedDate: "29 juillet 2026",
  bio: "Banquier de formation et titulaire d'une Maîtrise en droit des affaires. Nommé Directeur général de la SNR par le Président Bassirou Diomaye Faye lors du Conseil des ministres du 29 juillet 2026.",
  excerpt:
    "Chers collaborateurs et amis internautes, la SNR s'engage dans une nouvelle dynamique fondée sur la rigueur, la confiance et la performance.",
  content: `Chers collaborateurs et amis internautes,

C'est avec un profond sens des responsabilités que j'assume la direction générale de la Société Nationale de Recouvrement, institution stratégique au service de l'État du Sénégal.

Fort de mon expérience bancaire et juridique, je m'engage à conduire la SNR vers une performance accrue dans le recouvrement des créances publiques, la transparence de nos actions et la modernisation de nos outils au bénéfice des citoyens.

Notre devise — Rigueur, Confiance, Performance — guide notre action quotidienne. Ce nouveau portail web s'inscrit dans notre volonté de rapprocher la SNR des usagers et de faciliter l'accès à nos services.

Ensemble, construisons une SNR plus efficace, plus proche des citoyens et pleinement tournée vers l'avenir.`,
};
