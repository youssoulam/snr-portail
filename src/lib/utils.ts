import clsx, { type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("fr-SN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    vente: "Vente",
    location: "Location",
    institutionnel: "Institutionnel",
    social: "Social",
  };
  return labels[category] ?? category;
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    vente: "bg-snr-gold-500/20 text-snr-gold-600",
    location: "bg-blue-100 text-blue-700",
    institutionnel: "bg-snr-blue-100 text-snr-blue-700",
    social: "bg-purple-100 text-purple-700",
  };
  return colors[category] ?? "bg-gray-100 text-gray-700";
}
