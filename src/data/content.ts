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

export const heroSlides = [
  {
    id: "1",
    badge: "Institution publique — République du Sénégal",
    title: "Société Nationale de",
    highlight: "Recouvrement",
    description:
      "Un instrument efficace de recouvrement au service de l'État. Modernisation, transparence et excellence au service des citoyens.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    cta: { label: "Nos services", href: "#services" },
    ctaSecondary: { label: "Nous contacter", href: "#contact" },
  },
  {
    id: "2",
    badge: "Patrimoine immobilier",
    title: "Immeubles proposés à la",
    highlight: "Vente & Location",
    description:
      "Retrouvez tous les biens du patrimoine de l'État actuellement disponibles, avec transparence et procédures conformes.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80",
    cta: { label: "Consulter les immeubles", href: "#immeubles" },
    ctaSecondary: { label: "Voir les annonces", href: "#actualites" },
  },
  {
    id: "3",
    badge: "E-Services citoyens",
    title: "Vos démarches",
    highlight: "100% en ligne",
    description:
      "Demandez vos attestations, suivez vos dossiers de recouvrement et accédez à nos services numériques en toute simplicité.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80",
    cta: { label: "Accéder aux E-Services", href: "#contact" },
    ctaSecondary: { label: "Documenthèque", href: "#documents" },
  },
  {
    id: "4",
    badge: "Transformation digitale",
    title: "La SNR vers",
    highlight: "l'avenir numérique",
    description:
      "Digitalisation des processus, renforcement des compétences et modernisation des outils au service de l'État sénégalais.",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80",
    cta: { label: "Découvrir la SNR", href: "#apropos" },
    ctaSecondary: { label: "Mot du DG", href: "#mot-dg" },
  },
];

export const announcements: Announcement[] = [
  {
    id: "1",
    title: "Avis de vente — Immeubles proposés à la vente Mars 2026",
    excerpt:
      "Consultez la liste des immeubles du patrimoine de l'État actuellement proposés à la vente aux enchères publiques.",
    date: "2026-03-01",
    category: "vente",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    id: "2",
    title: "Passation de service entre Directeurs Généraux",
    excerpt:
      "Cérémonie officielle de passation de service marquant une nouvelle étape dans la modernisation de la SNR.",
    date: "2026-02-15",
    category: "institutionnel",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
  },
  {
    id: "3",
    title: "Locations disponibles — Plateau & Almadies",
    excerpt:
      "Plusieurs locaux commerciaux et bureaux sont disponibles à la location dans les quartiers d'affaires de Dakar.",
    date: "2026-02-01",
    category: "location",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: "4",
    title: "Journée internationale des femmes — SNR célèbre ses collaboratrices",
    excerpt:
      "La SNR a organisé une cérémonie en l'honneur de ses collaboratrices à l'occasion du 8 mars.",
    date: "2026-03-08",
    category: "social",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
  },
];

export const properties: Property[] = [
  {
    id: "1",
    title: "Immeuble administratif — Plateau",
    location: "Plateau, Dakar",
    type: "vente",
    price: "Sur enchères",
    surface: "2 400 m²",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    featured: true,
  },
  {
    id: "2",
    title: "Local commercial — Almadies",
    location: "Almadies, Dakar",
    type: "location",
    price: "1 500 000 FCFA/mois",
    surface: "180 m²",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    featured: true,
  },
  {
    id: "3",
    title: "Villa de fonction — Mermoz",
    location: "Mermoz, Dakar",
    type: "vente",
    price: "Sur enchères",
    surface: "450 m²",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
  {
    id: "4",
    title: "Bureau — Sicap Liberté",
    location: "Sicap Liberté, Dakar",
    type: "location",
    price: "850 000 FCFA/mois",
    surface: "95 m²",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
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
  {
    id: "4",
    name: "Monsieur François Lat COLLIN",
    title: "Inspecteur Général d'État",
    period: "Juil. 1999 — Avr. 2002",
  },
];

export const mediaGallery = [
  {
    id: "1",
    title: "Cérémonie de remise de chèque — Hôpital Diamniadio",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
  },
  {
    id: "2",
    title: "Randonnée pédestre 2025 — SNR",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80",
  },
  {
    id: "3",
    title: "Colonie de vacances — Enfants des agents SNR",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80",
  },
  {
    id: "4",
    title: "Formation continue des agents",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
  },
  {
    id: "5",
    title: "Team building SNR 2025",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
  },
  {
    id: "6",
    title: "Visite institutionnelle",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80",
  },
];

export const dgMessage = {
  name: "Directeur Général",
  title: "Société Nationale de Recouvrement",
  excerpt:
    "Chers collaborateurs et amis internautes, la SNR s'engage dans une transformation numérique ambitieuse pour mieux servir l'État et les citoyens.",
  content: `Chers collaborateurs et amis internautes,

La Société Nationale de Recouvrement poursuit sa mission essentielle au service de l'État du Sénégal. Dans un contexte de transformation digitale accélérée, nous renouvelons notre engagement envers l'excellence, la transparence et l'innovation.

Notre vision pour les années à venir repose sur trois piliers fondamentaux : la modernisation de nos outils de recouvrement, la digitalisation de nos services aux usagers, et le renforcement des compétences de nos équipes.

Ce nouveau portail web s'inscrit dans cette dynamique. Il reflète notre volonté de vous offrir un accès simplifié à l'information, à nos services en ligne et à la gestion transparente du patrimoine de l'État.

Ensemble, construisons une SNR plus performante, plus proche des citoyens et pleinement tournée vers l'avenir numérique du Sénégal.`,
};
