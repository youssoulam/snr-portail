"use client";

import { motion } from "framer-motion";
import { MapPin, Maximize2, Tag } from "lucide-react";
import { properties } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ThemeIllustration } from "@/components/ui/ThemeIllustration";

const focalByType = {
  vente: "center 40%",
  location: "center center",
} as const;

export function PropertiesSection() {
  return (
    <section id="immeubles" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center">
          <SectionHeader
            label="Patrimoine immobilier"
            title="Immeubles proposés à la vente ou en location"
            description="Retrouvez tous les biens immobiliers du patrimoine de l'État actuellement disponibles, avec transparence et procédures conformes."
          />
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-snr-blue-500/5"
            >
              <div className="relative h-52 overflow-hidden">
                <ThemeIllustration
                  src={property.image}
                  alt={property.title}
                  fill
                  className="h-full w-full transition duration-700 group-hover:scale-105"
                  imageClassName="transition duration-700 group-hover:scale-105"
                  focal={focalByType[property.type]}
                  overlay="dark"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <span
                  className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-xs font-bold uppercase ${
                    property.type === "vente"
                      ? "bg-snr-gold-500 text-snr-blue-900"
                      : "bg-snr-blue-500 text-white"
                  }`}
                >
                  {property.type}
                </span>
                {property.featured && (
                  <span className="absolute right-3 top-3 z-10 rounded-full bg-snr-red-500 px-2.5 py-1 text-xs font-bold text-white">
                    À la une
                  </span>
                )}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <p className="font-semibold text-white drop-shadow-md">
                    {property.title}
                  </p>
                </div>
              </div>

              <div className="space-y-3 p-5">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4 shrink-0 text-snr-gold-500" />
                  {property.location}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-gray-500">
                    <Maximize2 className="h-4 w-4" />
                    {property.surface}
                  </span>
                  {property.price && (
                    <span className="flex items-center gap-1 font-semibold text-snr-blue-500">
                      <Tag className="h-4 w-4" />
                      {property.price}
                    </span>
                  )}
                </div>
                <button className="w-full rounded-xl bg-snr-blue-500 py-3 text-sm font-semibold text-white transition hover:bg-snr-gold-500 hover:text-snr-blue-900">
                  Voir les détails
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
