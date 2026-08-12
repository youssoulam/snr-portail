"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { heroSlides, stats } from "@/data/content";
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

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const textVariants = {
    enter: { opacity: 0, y: 30 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section className="relative">
      {/* Slider */}
      <div
        className="relative h-[85vh] min-h-[560px] overflow-hidden bg-snr-blue-900"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {/* Background images */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={slide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={current === 0}
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-snr-blue-900/95 via-snr-blue-900/75 to-snr-blue-900/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-snr-blue-900/60 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide.id}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, delay: 0.15 }}
              className="max-w-2xl"
            >
              <span className="inline-flex items-center rounded-full border border-snr-gold-500/40 bg-snr-gold-500/15 px-4 py-1.5 text-sm font-medium text-snr-gold-400 backdrop-blur-sm">
                {slide.badge}
              </span>

              <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                {slide.title}{" "}
                {slide.highlight && (
                  <span className="text-snr-gold-400">{slide.highlight}</span>
                )}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
                {slide.description}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={slide.cta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-snr-gold-500 px-8 py-4 font-semibold text-snr-blue-900 shadow-lg transition hover:bg-snr-gold-400"
                >
                  {slide.cta.label}
                  <ArrowRight className="h-5 w-5" />
                </Link>
                {slide.ctaSecondary && (
                  <Link
                    href={slide.ctaSecondary.href}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/10"
                  >
                    {slide.ctaSecondary.label}
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25 sm:left-6"
          aria-label="Slide précédent"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25 sm:right-6"
          aria-label="Slide suivant"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Bottom controls */}
        <div className="absolute bottom-8 left-0 right-0 z-10 flex items-center justify-center gap-4 px-6">
          {/* Dots */}
          <div className="flex items-center gap-2">
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
          </div>

          {/* Play / Pause */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25"
            aria-label={isPlaying ? "Mettre en pause" : "Reprendre le défilement"}
          >
            {isPlaying ? (
              <Pause className="h-3.5 w-3.5" />
            ) : (
              <Play className="h-3.5 w-3.5" />
            )}
          </button>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
          <motion.div
            key={`${current}-${isPlaying}`}
            className="h-full bg-snr-gold-500"
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

      {/* Stats bar */}
      <div className="relative z-10 -mt-12 mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-snr-blue-600 sm:text-3xl">
                {stat.value}
                <span className="text-base sm:text-lg">{stat.suffix}</span>
              </p>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
