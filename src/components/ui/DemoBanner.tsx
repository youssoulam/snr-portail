"use client";

/**
 * Bandeau discret pour indiquer qu'il s'agit d'un prototype de démonstration.
 * Retirer ce composant lors du déploiement officiel.
 */
export function DemoBanner() {
  return (
    <div className="border-b border-snr-gold-500/20 bg-snr-blue-700/95 px-4 py-1.5 text-center text-xs text-white/80 backdrop-blur-sm">
      <span className="inline-flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-snr-gold-400 animate-pulse" />
        Prototype de refonte — Version démonstration pour présentation DG
      </span>
    </div>
  );
}
