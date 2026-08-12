"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { announcements } from "@/data/content";
import { formatDate, getCategoryLabel, getCategoryColor } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PremiumImage } from "@/components/ui/PremiumImage";

export function NewsSection() {
  const featured = announcements[0];
  const others = announcements.slice(1);

  return (
    <section id="actualites" className="bg-gray-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            label="Actualités"
            title="Annonces & insertions"
            description="Restez informé des dernières nouvelles, avis de vente et communiqués officiels de la SNR."
            align="left"
          />
          <Link
            href="#"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-snr-blue-500 shadow-sm transition hover:gap-3 hover:shadow-md"
          >
            Toutes les actualités
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-xl"
          >
            <div className="relative h-80 overflow-hidden bg-gradient-to-br from-snr-blue-100 to-snr-blue-50">
              {featured.image && (
                <PremiumImage
                  src={featured.image}
                  alt={featured.title}
                  fill
                  fit={featured.imageFit === "portrait" ? "contain" : "cover"}
                  focal={featured.imageFit === "portrait" ? "top center" : "center"}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="transition duration-700 group-hover:scale-[1.02]"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-snr-blue-900/50 via-transparent to-transparent" />
              <span
                className={`absolute left-5 top-5 rounded-full px-3 py-1 text-xs font-semibold ${getCategoryColor(featured.category)}`}
              >
                {getCategoryLabel(featured.category)}
              </span>
            </div>
            <div className="p-7">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4 text-snr-gold-500" />
                {formatDate(featured.date)}
              </div>
              <h3 className="mt-3 text-2xl font-bold text-snr-blue-500 transition group-hover:text-snr-gold-600">
                {featured.title}
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                {featured.excerpt}
              </p>
              <Link
                href="#"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-snr-gold-600 transition hover:gap-3"
              >
                Lire la suite
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.article>

          <div className="space-y-4">
            {others.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group flex gap-5 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:border-snr-gold-400/30 hover:shadow-md"
              >
                <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-xl bg-snr-blue-50">
                  {item.image && (
                    <PremiumImage
                      src={item.image}
                      alt={item.title}
                      fill
                      fit="cover"
                      focal="center"
                      sizes="128px"
                      className="transition duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="min-w-0 flex-1 py-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${getCategoryColor(item.category)}`}
                    >
                      {getCategoryLabel(item.category)}
                    </span>
                    <span className="text-xs text-gray-400">
                      {formatDate(item.date)}
                    </span>
                  </div>
                  <h3 className="mt-2 line-clamp-2 font-semibold text-gray-900 transition group-hover:text-snr-blue-500">
                    {item.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
