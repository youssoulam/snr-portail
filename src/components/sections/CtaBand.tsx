"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-snr-blue-600 via-snr-blue-500 to-snr-blue-700" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,147,37,0.25)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-snr-gold-500/30 bg-snr-gold-500/10 px-4 py-1.5 text-sm text-snr-gold-400">
              <Sparkles className="h-4 w-4" />
              Portail numérique SNR
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
              Simplifiez vos démarches avec nos{" "}
              <span className="text-snr-gold-400">E-Services</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              Attestations, consultation d&apos;immeubles, téléchargement de
              documents — accédez à tous nos services en quelques clics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-snr-gold-500 px-8 py-4 font-semibold text-snr-blue-900 shadow-lg shadow-snr-gold-500/25 transition hover:bg-snr-gold-400 hover:shadow-xl"
            >
              Accéder aux E-Services
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/25 px-8 py-4 font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
            >
              Découvrir nos services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
