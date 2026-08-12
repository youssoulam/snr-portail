export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface Announcement {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: "vente" | "location" | "institutionnel" | "social";
  image?: string;
}

export interface Document {
  id: string;
  title: string;
  type: "pdf" | "video" | "rapport";
  date: string;
  size?: string;
}

export interface Property {
  id: string;
  title: string;
  location: string;
  type: "vente" | "location";
  price?: string;
  surface: string;
  image: string;
  featured?: boolean;
}

export interface Director {
  id: string;
  name: string;
  title: string;
  period: string;
  photo?: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface HeroSlide {
  id: string;
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  image: string;
  cta: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
}
