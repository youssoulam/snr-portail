"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface PremiumImageProps extends Omit<ImageProps, "quality"> {
  wrapperClassName?: string;
  fit?: "cover" | "contain";
  focal?: string;
  fallbackLabel?: string;
}

export function PremiumImage({
  wrapperClassName,
  fit = "cover",
  focal = "center",
  fallbackLabel,
  className,
  alt,
  fill,
  ...props
}: PremiumImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-snr-blue-50 to-snr-blue-100",
          fill && "absolute inset-0",
          wrapperClassName
        )}
      >
        <div className="text-center text-snr-blue-400">
          <ImageOff className="mx-auto h-8 w-8" />
          {fallbackLabel && (
            <p className="mt-2 px-4 text-xs font-medium">{fallbackLabel}</p>
          )}
        </div>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        {...props}
        alt={alt}
        fill
        quality={90}
        className={cn(
          fit === "contain" ? "object-contain" : "object-cover",
          className
        )}
        style={{ objectPosition: focal }}
        onError={() => setError(true)}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-snr-blue-50",
        wrapperClassName
      )}
    >
      <Image
        {...props}
        alt={alt}
        quality={90}
        className={cn(
          fit === "contain" ? "object-contain" : "object-cover",
          className
        )}
        style={{ objectPosition: focal }}
        onError={() => setError(true)}
      />
    </div>
  );
}
