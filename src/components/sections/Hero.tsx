"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, TrendingUp, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

export { HeroSlider } from "./HeroSlider";

export function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Mission publique",
      desc: "Au service de l'État et des citoyens sénégalais depuis 1991.",
    },
    {
      icon: TrendingUp,
      title: "Performance",
      desc: "Des résultats concrets dans le recouvrement des créances publiques.",
    },
    {
      icon: Users,
      title: "Proximité",
      desc: "450 agents mobilisés pour un service de qualité aux usagers.",
    },
  ];

  return (
    <section id="apropos" className="relative pb-28 pt-36">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="À propos"
              title="La SNR, pilier du recouvrement public au Sénégal"
              description="Créée en 1991, la Société Nationale de Recouvrement est une société d'État chargée du recouvrement des créances de l'État et de la gestion de son patrimoine immobilier."
              align="left"
            />
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-snr-gold-600">
              {siteConfig.baseline}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Dans le cadre de la transformation digitale du Sénégal, la SNR
              s&apos;engage à moderniser ses processus, digitaliser ses services
              et renforcer la transparence de ses actions.
            </p>
            <Link
              href="#services"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border-2 border-snr-blue-500/20 px-6 py-3 font-semibold text-snr-blue-500 transition hover:border-snr-blue-500 hover:bg-snr-blue-50"
            >
              Découvrir nos missions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-snr-blue-500/10">
              <Image
                src="/images/snr-accueil-officiel.jpg"
                alt="Siège de la SNR — Société Nationale de Recouvrement"
                width={640}
                height={480}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-snr-blue-900/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-snr-gold-500/30 bg-white p-5 shadow-xl lg:block">
              <p className="font-display text-3xl font-bold text-snr-blue-500">
                35<span className="text-snr-gold-500">+</span>
              </p>
              <p className="text-sm text-gray-500">Années au service de l&apos;État</p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-snr-gold-400/30 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-snr-blue-50 text-snr-blue-500 transition group-hover:bg-snr-blue-500 group-hover:text-white">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-snr-blue-500">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
