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
} from "lucide-react";
import { heroSlides, stats } from "@/data/content";
import { QuickAccessBar } from "@/components/sections/QuickAccess";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 6000;

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  const total = heroSlides.length;

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent((index + total) % total);
    },
    [current, total]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [isPlaying, next]);

  const slide = heroSlides[current];

  return (
    <section className="relative">
      <div
        className="relative h-[88vh] min-h-[580px] overflow-hidden bg-snr-blue-900"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {/* Background avec effet Ken Burns */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={slide.id}
            custom={direction}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0"
          >
            <motion.div
              animate={{ scale: [1, 1.06] }}
              transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
              className="relative h-full w-full"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={current === 0}
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-snr-blue-900/95 via-snr-blue-800/80 to-snr-blue-700/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-snr-blue-900/70 via-transparent to-snr-blue-900/20" />
          </motion.div>
        </AnimatePresence>

        {/* Numéro de slide */}
        <div className="absolute right-6 top-28 z-10 hidden font-display text-6xl font-bold text-white/10 lg:block">
          {String(current + 1).padStart(2, "0")}
          <span className="text-2xl text-white/20">/{String(total).padStart(2, "0")}</span>
        </div>

        {/* Contenu */}
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
              className="max-w-2xl"
            >
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
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/20 sm:left-6"
          aria-label="Slide précédent"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/20 sm:right-6"
          aria-label="Slide suivant"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="absolute bottom-10 left-0 right-0 z-10 flex items-center justify-center gap-4 px-6">
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
              className="ml-2 flex h-7 w-7 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white"
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
            animate={{
              width: isPlaying ? "100%" : `${((current + 1) / total) * 100}%`,
            }}
            transition={
              isPlaying
                ? { duration: AUTOPLAY_MS / 1000, ease: "linear" }
                : { duration: 0 }
            }
          />
        </div>
      </div>

      {/* Stats premium */}
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
                className="group px-6 py-7 text-center transition hover:bg-snr-blue-50/50"
              >
                <p className="font-display text-3xl font-bold text-snr-blue-500 transition group-hover:text-snr-gold-600 sm:text-4xl">
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
