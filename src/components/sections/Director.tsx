"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { dgMessage, formerDirectors, siteConfig } from "@/data/content";

export function DirectorSection() {
  return (
    <section id="mot-dg" className="bg-snr-blue-800 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Photo + bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-snr-gold-400">
              Direction Générale
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white">
              Mot du Directeur Général
            </h2>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative aspect-[3/4] w-full bg-snr-blue-700">
                <Image
                  src={dgMessage.photo}
                  alt={`Portrait officiel de ${dgMessage.name}, Directeur Général de la SNR`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="p-6">
                <p className="text-xl font-bold text-white">{dgMessage.name}</p>
                <p className="text-snr-gold-400">{dgMessage.title}</p>
                <p className="mt-1 text-sm text-white/60">{dgMessage.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/75">
                  {dgMessage.bio}
                </p>
                <p className="mt-3 text-xs text-snr-gold-400">
                  Nommé le {dgMessage.appointedDate}
                </p>
              </div>
            </div>

            <p className="mt-6 text-center text-sm font-semibold tracking-widest text-snr-gold-400">
              {siteConfig.baseline}
            </p>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <Quote className="absolute -top-4 left-6 h-10 w-10 text-snr-gold-500/30" />
              <p className="text-lg font-medium italic text-white/90">
                &ldquo;{dgMessage.excerpt}&rdquo;
              </p>
              <div className="mt-8 whitespace-pre-line text-sm leading-relaxed text-white/75">
                {dgMessage.content}
              </div>
            </div>

            {/* Anciens DG */}
            <div id="anciens-dg" className="mt-12">
              <h3 className="font-display text-xl font-bold text-white">
                Les Anciens Directeurs Généraux
              </h3>
              <div className="mt-6 space-y-3">
                {formerDirectors.map((director, index) => (
                  <motion.div
                    key={director.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-snr-blue-600 text-sm font-bold text-snr-gold-400">
                      {director.name.split(" ").slice(-1)[0].charAt(0)}
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
