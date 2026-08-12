"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Maximize2, Tag } from "lucide-react";
import { properties } from "@/data/content";

export function PropertiesSection() {
  return (
    <section id="immeubles" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-snr-blue-600">
            Patrimoine immobilier
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-gray-900 sm:text-4xl">
            Immeubles proposés à la vente ou en location
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Retrouvez tous les biens immobiliers du patrimoine de l&apos;État
            actuellement disponibles, avec transparence et procédures conformes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span
                  className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold uppercase ${
                    property.type === "vente"
                      ? "bg-snr-gold-500 text-snr-blue-900"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  {property.type}
                </span>
                {property.featured && (
                  <span className="absolute right-3 top-3 rounded-full bg-snr-red-500 px-2 py-1 text-xs font-bold text-white">
                    À la une
                  </span>
                )}
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-semibold text-white">{property.title}</p>
                </div>
              </div>

              <div className="space-y-3 p-5">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4 text-snr-blue-500" />
                  {property.location}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-gray-500">
                    <Maximize2 className="h-4 w-4" />
                    {property.surface}
                  </span>
                  {property.price && (
                    <span className="flex items-center gap-1 font-semibold text-snr-blue-600">
                      <Tag className="h-4 w-4" />
                      {property.price}
                    </span>
                  )}
                </div>
                <button className="w-full rounded-xl bg-snr-blue-50 py-2.5 text-sm font-semibold text-snr-blue-700 transition hover:bg-snr-blue-500 hover:text-white">
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
