"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { dgMessage, formerDirectors } from "@/data/content";

export function DirectorSection() {
  return (
    <section id="mot-dg" className="bg-snr-blue-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* DG Message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-snr-gold-400">
              Mot du Directeur Général
            </span>
            <div className="relative mt-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <Quote className="absolute -top-4 left-6 h-10 w-10 text-snr-gold-500/30" />
              <p className="text-lg font-medium italic text-white/90">
                &ldquo;{dgMessage.excerpt}&rdquo;
              </p>
              <div className="mt-8 whitespace-pre-line text-sm leading-relaxed text-white/70">
                {dgMessage.content}
              </div>
              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-snr-gold-500 text-lg font-bold text-snr-blue-900">
                  DG
                </div>
                <div>
                  <p className="font-semibold text-white">{dgMessage.name}</p>
                  <p className="text-sm text-white/60">{dgMessage.title}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Former directors */}
          <motion.div
            id="anciens-dg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-snr-gold-400">
              Historique
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-white">
              Les Anciens Directeurs Généraux
            </h2>

            <div className="mt-8 space-y-4">
              {formerDirectors.map((director, index) => (
                <motion.div
                  key={director.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-snr-blue-700 text-sm font-bold text-snr-gold-400">
                    {director.name
                      .split(" ")
                      .slice(-1)[0]
                      .charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-white">{director.name}</p>
                    <p className="text-sm text-white/60">{director.title}</p>
                  </div>
                  <p className="shrink-0 text-xs text-snr-gold-400">
                    {director.period}
                  </p>
                </motion.div>
              ))}
            </div>

            <button className="mt-6 text-sm font-semibold text-snr-gold-400 transition hover:text-snr-gold-500">
              Voir plus d&apos;anciens DG →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
