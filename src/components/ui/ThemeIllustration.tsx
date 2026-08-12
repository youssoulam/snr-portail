import Image from "next/image";
import { cn } from "@/lib/utils";

interface ThemeIllustrationProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  /** Point focal pour le cadrage (ex: "center 30%") */
  focal?: string;
  overlay?: "dark" | "brand" | "light" | "none";
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
}

export function ThemeIllustration({
  src,
  alt,
  className,
  imageClassName,
  focal = "center",
  overlay = "brand",
  priority,
  fill,
  width,
  height,
  sizes,
}: ThemeIllustrationProps) {
  const overlayClass = {
    dark: "bg-gradient-to-t from-black/75 via-black/20 to-black/10",
    brand:
      "bg-gradient-to-t from-snr-blue-900/80 via-snr-blue-800/30 to-snr-blue-700/10",
    light: "bg-gradient-to-t from-white/20 via-transparent to-transparent",
    none: "",
  }[overlay];

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-snr-blue-100",
        fill && "h-full w-full",
        className
      )}
    >
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={90}
          sizes={sizes ?? "100vw"}
          className={cn("object-cover", imageClassName)}
          style={{ objectPosition: focal }}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width ?? 800}
          height={height ?? 600}
          priority={priority}
          quality={90}
          sizes={sizes}
          className={cn("h-full w-full object-cover", imageClassName)}
          style={{ objectPosition: focal }}
        />
      )}
      {overlay !== "none" && (
        <div className={cn("absolute inset-0", overlayClass)} aria-hidden="true" />
      )}
    </div>
  );
}
