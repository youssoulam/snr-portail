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
import { PremiumImage } from "@/components/ui/PremiumImage";
import { SectionHeader } from "@/components/ui/SectionHeader";

const docIcons = {
  pdf: FileText,
  video: FileVideo,
  rapport: BookOpen,
};

export function DocumentsSection() {
  return (
    <section id="documents" className="bg-gray-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center">
          <SectionHeader
            label="Ressources"
            title="Documenthèque"
            description="Consultez et téléchargez les documents officiels, rapports et publications de la SNR."
          />
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc, index) => {
            const Icon = docIcons[doc.type];
            return (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:border-snr-gold-400/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-snr-blue-50 text-snr-blue-500 transition group-hover:bg-snr-blue-500 group-hover:text-white">
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
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-500 transition group-hover:bg-snr-gold-500 group-hover:text-snr-blue-900"
                  aria-label={`Télécharger ${doc.title}`}
                >
                  <Download className="h-4 w-4" />
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <button className="inline-flex items-center gap-2 rounded-xl border-2 border-snr-blue-500/20 px-6 py-3 font-semibold text-snr-blue-500 transition hover:border-snr-blue-500 hover:bg-white">
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
    <section id="mediatheque" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center">
          <SectionHeader
            label="Galerie"
            title="Médiathèque"
            description="Découvrez en images les actions, événements et engagements de la SNR au service du Sénégal."
          />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {mediaGallery.map((item, index) => (
            <motion.figure
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-snr-blue-50">
                <PremiumImage
                  src={item.image}
                  alt={item.title}
                  fill
                  fit="cover"
                  focal="center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-snr-blue-900/70 via-transparent to-transparent opacity-80" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-sm font-medium text-white">
                  {item.title}
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
