interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      <div
        className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="h-px w-8 bg-snr-gold-500" aria-hidden="true" />
        <span
          className={`text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-snr-gold-400" : "text-snr-gold-600"}`}
        >
          {label}
        </span>
        <span className="h-px w-8 bg-snr-gold-500" aria-hidden="true" />
      </div>
      <h2
        className={`mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] ${light ? "text-white" : "text-snr-blue-500"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${light ? "text-white/75" : "text-gray-600"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
