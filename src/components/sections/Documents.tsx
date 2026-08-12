"use client";

import { motion } from "framer-motion";
import {
  FileText,
  FileVideo,
  BookOpen,
  Download,
  ArrowRight,
} from "lucide-react";
import { documents, mediaGallery } from "@/data/content";
import { formatDate } from "@/lib/utils";
import { GalleryImage } from "@/components/ui/GalleryImage";

const docIcons = {
  pdf: FileText,
  video: FileVideo,
  rapport: BookOpen,
};

export function DocumentsSection() {
  return (
    <section id="documents" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-snr-blue-600">
            Ressources
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-gray-900 sm:text-4xl">
            Documenthèque
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc, index) => {
            const Icon = docIcons[doc.type];
            return (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-snr-blue-100 text-snr-blue-600">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-semibold text-gray-900">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {formatDate(doc.date)}
                    {doc.size && ` · ${doc.size}`}
                  </p>
                </div>
                <button
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-500 transition group-hover:bg-snr-blue-500 group-hover:text-white"
                  aria-label={`Télécharger ${doc.title}`}
                >
                  <Download className="h-4 w-4" />
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 font-semibold text-snr-blue-600 transition hover:gap-3">
            Voir tous les documents
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function MediaSection() {
  return (
    <section id="mediatheque" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-snr-blue-600">
            Galerie
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-gray-900 sm:text-4xl">
            Médiathèque
          </h2>
        </div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {mediaGallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl"
            >
              <GalleryImage
                src={item.image}
                alt={item.title}
                width={600}
                height={index % 3 === 0 ? 400 : index % 3 === 1 ? 300 : 350}
                className="w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100">
                <p className="p-4 text-sm font-medium text-white">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
