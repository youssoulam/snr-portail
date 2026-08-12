interface SnrLogoProps {
  size?: number;
  className?: string;
}

export function SnrLogo({ size = 48, className = "" }: SnrLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Logo SNR"
    >
      {/* Cercle bleu avec rayures */}
      <circle cx="50" cy="50" r="48" fill="#0072B9" />
      {[18, 26, 34, 42, 50, 58, 66, 74, 82].map((y) => (
        <rect
          key={y}
          x="4"
          y={y - 3}
          width="92"
          height="6"
          fill={y % 16 === 2 ? "#FFFFFF" : "#005A94"}
          opacity={y % 16 === 2 ? 0.9 : 0.5}
        />
      ))}
      {/* Carte du Sénégal — orange/doré */}
      <ellipse cx="50" cy="54" rx="22" ry="26" fill="#ED8B1C" />
      {/* Texte SNR */}
      <text
        x="50"
        y="44"
        textAnchor="middle"
        fill="#003057"
        fontSize="14"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        S
      </text>
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fill="#003057"
        fontSize="18"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        NR
      </text>
    </svg>
  );
}
