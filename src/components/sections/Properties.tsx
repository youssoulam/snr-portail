"use client";

import { motion } from "framer-motion";
import { MapPin, Maximize2, Tag, Building2, KeyRound } from "lucide-react";
import { properties } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

const typeStyles = {
  vente: {
    gradient: "from-snr-gold-500/20 via-snr-blue-500 to-snr-blue-700",
    icon: Building2,
    accent: "text-snr-gold-400",
  },
  location: {
    gradient: "from-snr-blue-400/30 via-snr-blue-600 to-snr-blue-800",
    icon: KeyRound,
    accent: "text-snr-blue-200",
  },
};

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

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {properties.map((property, index) => {
            const style = typeStyles[property.type];
            const Icon = style.icon;

            return (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${style.gradient}`}
                >
                  <div className="absolute inset-0 opacity-20">
                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    />
                  </div>
                  <Icon className={`relative h-16 w-16 ${style.accent} opacity-80`} strokeWidth={1.25} />
                  <span
                    className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold uppercase ${
                      property.type === "vente"
                        ? "bg-snr-gold-500 text-snr-blue-900"
                        : "bg-white/20 text-white backdrop-blur-sm"
                    }`}
                  >
                    {property.type}
                  </span>
                  {property.featured && (
                    <span className="absolute right-3 top-3 rounded-full bg-snr-red-500 px-2.5 py-1 text-xs font-bold text-white">
                      À la une
                    </span>
                  )}
                </div>

                <div className="space-y-3 p-5">
                  <h3 className="font-bold text-snr-blue-500">{property.title}</h3>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
