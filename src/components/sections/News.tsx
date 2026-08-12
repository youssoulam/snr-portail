"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, MapPin } from "lucide-react";
import { announcements } from "@/data/content";
import { formatDate, getCategoryLabel, getCategoryColor } from "@/lib/utils";

export function NewsSection() {
  const featured = announcements[0];
  const others = announcements.slice(1);

  return (
    <section id="actualites" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-snr-blue-600">
              Actualités
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-gray-900 sm:text-4xl">
              Annonces & insertions
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 font-semibold text-snr-blue-600 transition hover:gap-3"
          >
            Toutes les actualités
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Featured */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={featured.image!}
                alt={featured.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span
                className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${getCategoryColor(featured.category)}`}
              >
                {getCategoryLabel(featured.category)}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                {formatDate(featured.date)}
              </div>
              <h3 className="mt-3 text-xl font-bold text-gray-900 transition group-hover:text-snr-blue-600">
                {featured.title}
              </h3>
              <p className="mt-3 text-gray-600">{featured.excerpt}</p>
            </div>
          </motion.article>

          {/* List */}
          <div className="space-y-4">
            {others.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md"
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={item.image!}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-semibold ${getCategoryColor(item.category)}`}
                    >
                      {getCategoryLabel(item.category)}
                    </span>
                    <span className="text-xs text-gray-400">
                      {formatDate(item.date)}
                    </span>
                  </div>
                  <h3 className="mt-2 line-clamp-2 text-sm font-semibold text-gray-900 transition group-hover:text-snr-blue-600">
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
