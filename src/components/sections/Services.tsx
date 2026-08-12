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

const iconMap = {
  Scale,
  FileCheck,
  Building2,
  Landmark,
  Gavel,
  MonitorSmartphone,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-snr-blue-600">
            Nos services
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-gray-900 sm:text-4xl">
            Des services modernes au service des citoyens
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Découvrez l&apos;ensemble des services proposés par la SNR, avec
            une démarche de digitalisation progressive pour faciliter vos
            démarches.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:border-snr-blue-200 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-snr-blue-100 text-snr-blue-600 transition group-hover:bg-snr-blue-500 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-snr-blue-600 transition group-hover:gap-2"
                >
                  En savoir plus
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-snr-blue-50 opacity-0 transition group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
