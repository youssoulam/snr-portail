"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Building2,
  MonitorSmartphone,
} from "lucide-react";
import { heroSlides, stats } from "@/data/content";
import { QuickAccessBar } from "@/components/sections/QuickAccess";
import { BrandBackdrop } from "@/components/ui/BrandBackdrop";
import { SnrLogo } from "@/components/ui/SnrLogo";
import { PremiumImage } from "@/components/ui/PremiumImage";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 6000;

function SlideVisual({ slide }: { slide: (typeof heroSlides)[number] }) {
  if (slide.layout === "portrait" && slide.image) {
    return (
      <div className="absolute inset-0">
        <BrandBackdrop variant={slide.backdrop} />
        <div className="absolute inset-0 bg-gradient-to-r from-snr-blue-900/90 via-snr-blue-800/60 to-transparent" />
        <div className="absolute bottom-0 right-0 top-0 hidden w-[42%] items-end justify-center p-10 lg:flex">
          <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-b from-white to-snr-blue-50">
              <PremiumImage
                src={slide.image}
                alt={slide.highlight ?? slide.title}
                fill
                fit="contain"
                focal="top center"
                sizes="400px"
                className="p-2"
              />
            </div>
            <div className="mt-3 border-t border-white/10 pt-3 text-center">
              <p className="text-sm font-semibold text-white">Pape Ibrahima SENGHOR</p>
              <p className="text-xs text-snr-gold-400">Directeur Général — SNR</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (slide.layout === "photo" && slide.image) {
    return (
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.04] }}
          transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority
            quality={90}
            className="object-cover"
            style={{ objectPosition: slide.imageFocal ?? "center" }}
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-snr-blue-900/92 via-snr-blue-800/75 to-snr-blue-700/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-snr-blue-900/60 via-transparent to-snr-blue-900/15" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      <BrandBackdrop variant={slide.backdrop} />
      <div className="absolute inset-0 bg-gradient-to-r from-snr-blue-900/85 via-snr-blue-800/50 to-transparent" />

      {/* Logo watermark — slides institutionnels */}
      <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 pr-16 opacity-[0.07] lg:block">
        <SnrLogo height={220} className="brightness-0 invert" />
      </div>

      {/* Icône thématique slide digital */}
      {slide.backdrop === "digital" && (
        <div className="absolute bottom-24 right-16 hidden text-white/10 lg:block">
          <MonitorSmartphone className="h-48 w-48" strokeWidth={0.75} />
        </div>
      )}
      {slide.backdrop === "institutional" && (
        <div className="absolute bottom-24 right-16 hidden text-white/10 lg:block">
          <Building2 className="h-48 w-48" strokeWidth={0.75} />
        </div>
      )}
    </div>
  );
}

function SlideContent({ slide }: { slide: (typeof heroSlides)[number] }) {
  return (
    <>
      <span className="inline-flex items-center gap-2 rounded-full border border-snr-gold-500/40 bg-snr-gold-500/15 px-4 py-1.5 text-sm font-medium text-snr-gold-400 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-snr-gold-400 animate-pulse" />
        {slide.badge}
      </span>

      <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
        {slide.title}{" "}
        {slide.highlight && (
          <span className="bg-gradient-to-r from-snr-gold-400 to-snr-gold-500 bg-clip-text text-transparent">
            {slide.highlight}
          </span>
        )}
      </h1>

      <div className="mt-4 h-1 w-16 rounded-full bg-snr-gold-500" />

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
        {slide.description}
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href={slide.cta.href}
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-snr-gold-500 px-8 py-4 font-semibold text-snr-blue-900 shadow-lg shadow-snr-gold-500/25 transition hover:bg-snr-gold-400 hover:shadow-xl"
        >
          {slide.cta.label}
          <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
        </Link>
        {slide.ctaSecondary && (
          <Link
            href={slide.ctaSecondary.href}
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/25 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-white/10"
          >
            {slide.ctaSecondary.label}
          </Link>
        )}
      </div>
    </>
  );
}

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const total = heroSlides.length;
  const slide = heroSlides[current];

  const goTo = useCallback(
    (index: number) => setCurrent((index + total) % total),
    [total]
  );

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % total),
    [total]
  );

  const prev = useCallback(
    () => setCurrent((prev) => (prev - 1 + total) % total),
    [total]
  );

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [isPlaying, next]);

  return (
    <section className="relative">
      <div
        className="relative h-[88vh] min-h-[580px] overflow-hidden bg-snr-blue-900"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <SlideVisual slide={slide} />
          </motion.div>
        </AnimatePresence>

        <div className="absolute right-6 top-28 z-10 hidden font-display text-6xl font-bold text-white/10 lg:block">
          {String(current + 1).padStart(2, "0")}
          <span className="text-2xl text-white/20">
            /{String(total).padStart(2, "0")}
          </span>
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className={cn(
                "max-w-2xl",
                slide.layout === "portrait" && "lg:max-w-xl"
              )}
            >
              <SlideContent slide={slide} />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:left-6"
          aria-label="Slide précédent"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-6"
          aria-label="Slide suivant"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center px-6">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-md">
            {heroSlides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                aria-label={`Aller au slide ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === current
                    ? "w-8 bg-snr-gold-500"
                    : "w-2 bg-white/40 hover:bg-white/70"
                )}
              />
            ))}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="ml-2 flex h-7 w-7 items-center justify-center rounded-full text-white/80 hover:bg-white/10"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="h-3.5 w-3.5" />
              ) : (
                <Play className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
          <motion.div
            key={`${current}-${isPlaying}`}
            className="h-full bg-gradient-to-r from-snr-gold-500 to-snr-gold-400"
            initial={{ width: "0%" }}
            animate={{ width: isPlaying ? "100%" : `${((current + 1) / total) * 100}%` }}
            transition={
              isPlaying
                ? { duration: AUTOPLAY_MS / 1000, ease: "linear" }
                : { duration: 0 }
            }
          />
        </div>
      </div>

      <div className="relative z-10 -mt-16 mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-2xl border border-gray-100/80 bg-white shadow-2xl shadow-snr-blue-500/10">
          <div className="grid grid-cols-2 divide-x divide-gray-100 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="px-6 py-7 text-center"
              >
                <p className="font-display text-3xl font-bold text-snr-blue-500 sm:text-4xl">
                  {stat.value}
                  <span className="text-lg text-snr-gold-500">{stat.suffix}</span>
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <QuickAccessBar />
    </section>
  );
}
