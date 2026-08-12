import Image from "next/image";

interface SnrLogoProps {
  variant?: "full" | "compact";
  className?: string;
  height?: number;
}

export function SnrLogo({
  variant = "full",
  className = "",
  height = 52,
}: SnrLogoProps) {
  const width = variant === "full" ? Math.round(height * 3.2) : height;

  return (
    <Image
      src="/images/logo-snr-nouveau.png"
      alt="SNR — Société Nationale de Recouvrement"
      width={width}
      height={height}
      className={`object-contain object-left ${className}`}
      priority
    />
  );
}
