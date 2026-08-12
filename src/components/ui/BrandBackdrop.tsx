import { cn } from "@/lib/utils";

type BackdropVariant = "institutional" | "patrimoine" | "digital" | "leadership";

interface BrandBackdropProps {
  variant?: BackdropVariant;
  className?: string;
  /** Photo d'ambiance très atténuée (optionnelle, HD uniquement) */
  ambientImage?: string;
}

const variantStyles: Record<BackdropVariant, string> = {
  institutional:
    "bg-gradient-to-br from-snr-blue-900 via-snr-blue-700 to-snr-blue-500",
  patrimoine:
    "bg-gradient-to-br from-snr-blue-800 via-[#1e3454] to-snr-blue-600",
  digital:
    "bg-gradient-to-br from-snr-blue-900 via-snr-blue-700 to-[#243b5c]",
  leadership:
    "bg-gradient-to-br from-snr-blue-900 via-snr-blue-800 to-snr-blue-700",
};

export function BrandBackdrop({
  variant = "institutional",
  className,
  ambientImage,
}: BrandBackdropProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {ambientImage && (
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center opacity-[0.12] blur-sm"
          style={{ backgroundImage: `url(${ambientImage})` }}
          aria-hidden="true"
        />
      )}

      <div
        className={cn("absolute inset-0", variantStyles[variant])}
        aria-hidden="true"
      />

      {/* Grille institutionnelle */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* Halo doré */}
      <div
        className="absolute -right-1/4 top-0 h-[70%] w-[70%] rounded-full bg-snr-gold-500/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-1/4 -left-1/4 h-1/2 w-1/2 rounded-full bg-white/5 blur-3xl"
        aria-hidden="true"
      />

      {/* Ligne d'accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-snr-gold-500/60 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
