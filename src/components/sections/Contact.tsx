"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative bg-gray-50 py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-snr-gold-500/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center">
          <SectionHeader
            label="Contact"
            title="Nous joindre"
            description="Prenez contact avec la Société Nationale de Recouvrement. Notre équipe vous répondra dans les meilleurs délais."
          />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            {[
              {
                icon: MapPin,
                title: "Adresse",
                content: siteConfig.address,
              },
              {
                icon: Phone,
                title: "Téléphone",
                content: siteConfig.phone,
                href: `tel:${siteConfig.phone}`,
              },
              {
                icon: Mail,
                title: "Email",
                content: siteConfig.email,
                href: `mailto:${siteConfig.email}`,
              },
              {
                icon: Clock,
                title: "Horaires",
                content: "Lun — Ven : 8h00 — 17h00",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-snr-blue-500 text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-snr-blue-500">{item.title}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-gray-600 transition hover:text-snr-gold-600"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-600">{item.content}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="overflow-hidden rounded-2xl border border-snr-blue-100 bg-snr-blue-500">
              <div className="flex h-44 items-center justify-center text-white">
                <div className="text-center">
                  <MapPin className="mx-auto h-8 w-8 text-snr-gold-400" />
                  <p className="mt-2 text-sm font-medium">Carte interactive</p>
                  <p className="text-xs text-white/70">Dakar, Sénégal</p>
                </div>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg lg:col-span-3"
          >
            <h3 className="text-xl font-bold text-snr-blue-500">
              Envoyez-nous un message
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Formulaire de contact — démonstration prototype
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Nom complet
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition focus:border-snr-blue-500 focus:outline-none focus:ring-2 focus:ring-snr-blue-500/20"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition focus:border-snr-blue-500 focus:outline-none focus:ring-2 focus:ring-snr-blue-500/20"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition focus:border-snr-blue-500 focus:outline-none focus:ring-2 focus:ring-snr-blue-500/20"
                  placeholder="+221 XX XXX XX XX"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Objet
                </label>
                <select className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition focus:border-snr-blue-500 focus:outline-none focus:ring-2 focus:ring-snr-blue-500/20">
                  <option>Demande d&apos;attestation</option>
                  <option>Information sur un immeuble</option>
                  <option>Recouvrement de créance</option>
                  <option>Autre demande</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm transition focus:border-snr-blue-500 focus:outline-none focus:ring-2 focus:ring-snr-blue-500/20"
                  placeholder="Décrivez votre demande..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-snr-gold-500 py-4 font-semibold text-snr-blue-900 transition hover:bg-snr-gold-400 disabled:opacity-70 sm:w-auto sm:px-8"
            >
              {submitted ? (
                <>
                  <CheckCircle className="h-5 w-5" />
                  Message envoyé !
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Envoyer le message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
