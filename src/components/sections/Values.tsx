"use client";

import { motion } from "framer-motion";
import { Shield, Handshake, TrendingUp } from "lucide-react";
import { siteConfig } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

const pillars = [
  {
    icon: Shield,
    title: "Rigueur",
    desc: "Discipline budgétaire et respect strict des procédures de recouvrement public.",
  },
  {
    icon: Handshake,
    title: "Confiance",
    desc: "Transparence envers l'État, les usagers et les partenaires institutionnels.",
  },
  {
    icon: TrendingUp,
    title: "Performance",
    desc: "Résultats concrets dans la mobilisation des ressources et la gestion du patrimoine.",
  },
];

export function ValuesSection() {
  return (
    <section className="relative overflow-hidden bg-snr-blue-500 py-20">
      {/* Pattern décoratif */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-snr-gold-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Notre engagement"
          title={siteConfig.baseline}
          description="Les valeurs qui guident la SNR dans sa mission au service de l'État et des citoyens sénégalais."
          light
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:border-snr-gold-500/40 hover:bg-white/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-snr-gold-500/20 text-snr-gold-400 transition group-hover:bg-snr-gold-500 group-hover:text-snr-blue-900">
                <pillar.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {pillar.desc}
              </p>
              <div className="mt-6 h-1 w-12 rounded-full bg-snr-gold-500 transition group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
