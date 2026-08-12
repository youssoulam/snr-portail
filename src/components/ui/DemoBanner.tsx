"use client";

/**
 * Bandeau discret pour indiquer qu'il s'agit d'un prototype de démonstration.
 * Retirer ce composant lors du déploiement officiel.
 */
export function DemoBanner() {
  return (
    <div className="bg-snr-gold-500 px-4 py-2 text-center text-sm font-medium text-snr-blue-900">
      Prototype de refonte — Version démonstration pour présentation DG
    </div>
  );
}
