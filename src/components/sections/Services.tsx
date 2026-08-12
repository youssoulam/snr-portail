"use client";

import {
  Scale,
  FileCheck,
  Building2,
  Landmark,
  Gavel,
  MonitorSmartphone,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

const iconMap = {
  Scale,
  FileCheck,
  Building2,
  Landmark,
  Gavel,
  MonitorSmartphone,
};

export function ServicesSection() {
  const [featured, ...rest] = services;

  return (
    <section id="services" className="relative py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center">
          <SectionHeader
            label="Nos services"
            title="Des services modernes au service des citoyens"
            description="Digitalisation progressive de nos démarches pour faciliter l'accès aux usagers et renforcer la transparence institutionnelle."
          />
        </div>

        {/* Bento grid */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          {/* Featured service — large card */}
          {(() => {
            const Icon = iconMap[featured.icon as keyof typeof iconMap];
            return (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl bg-snr-blue-500 p-10 text-white lg:row-span-2"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-snr-gold-500/20 blur-2xl transition group-hover:scale-125" />
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-snr-gold-500 text-snr-blue-900">
                    <Icon className="h-8 w-8" />
                  </div>
                  <span className="mt-6 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-snr-gold-400">
                    Service phare
                  </span>
                  <h3 className="mt-4 text-2xl font-bold">{featured.title}</h3>
                  <p className="mt-4 leading-relaxed text-white/80">
                    {featured.description}
                  </p>
                  <Link
                    href={featured.href}
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-snr-gold-500 px-6 py-3 font-semibold text-snr-blue-900 transition hover:bg-snr-gold-400"
                  >
                    En savoir plus
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })()}

          {/* Other services */}
          {rest.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-snr-gold-400/30 hover:shadow-xl hover:shadow-snr-blue-500/5"
              >
                <div className="absolute left-0 top-0 h-full w-1 scale-y-0 bg-snr-gold-500 transition group-hover:scale-y-100" />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-snr-blue-50 text-snr-blue-500 transition group-hover:bg-snr-blue-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-snr-blue-500">
                  {service.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-snr-gold-600 transition group-hover:gap-2"
                >
                  En savoir plus
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
