"use client";

import { Shield, TrendingUp, Users } from "lucide-react";
import { siteConfig } from "@/data/content";

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
    <section id="apropos" className="pb-24 pt-36 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-snr-blue-600">
              À propos
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-gray-900 sm:text-4xl">
              La SNR, pilier du recouvrement public au Sénégal
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Créée en 1991, la Société Nationale de Recouvrement est une
              société d&apos;État chargée du recouvrement des créances de
              l&apos;État et de la gestion de son patrimoine immobilier.
            </p>
            <p className="mt-3 text-sm font-semibold tracking-widest text-snr-gold-600">
              {siteConfig.baseline}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Dans le cadre de la transformation digitale du Sénégal, la SNR
              s&apos;engage à moderniser ses processus, digitaliser ses services
              et renforcer la transparence de ses actions.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-snr-blue-100 text-snr-blue-600">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
