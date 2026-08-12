"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80";

interface GalleryImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function GalleryImage({
  src,
  alt,
  width,
  height,
  className,
}: GalleryImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 ${className ?? ""}`}
        style={{ minHeight: height }}
      >
        <div className="text-center text-gray-400">
          <ImageOff className="mx-auto h-8 w-8" />
          <p className="mt-2 px-4 text-xs">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => {
        if (currentSrc !== FALLBACK_IMAGE) {
          setCurrentSrc(FALLBACK_IMAGE);
        } else {
          setHasError(true);
        }
      }}
    />
  );
}
