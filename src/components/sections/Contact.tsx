"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/content";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-snr-blue-600">
            Contact
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-gray-900 sm:text-4xl">
            Nous joindre
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Prenez contact avec la Société Nationale de Recouvrement. Notre
            équipe vous répondra dans les meilleurs délais.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Info */}
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
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-snr-blue-100 text-snr-blue-600">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-gray-600 transition hover:text-snr-blue-600"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-600">{item.content}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="mt-8 overflow-hidden rounded-2xl bg-snr-blue-100">
              <div className="flex h-48 items-center justify-center text-snr-blue-600">
                <div className="text-center">
                  <MapPin className="mx-auto h-8 w-8" />
                  <p className="mt-2 text-sm font-medium">Carte interactive</p>
                  <p className="text-xs text-snr-blue-500">Dakar, Sénégal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-8 shadow-sm lg:col-span-3"
          >
            <h3 className="text-xl font-bold text-gray-900">
              Envoyez-nous un message
            </h3>
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
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-snr-blue-500 py-4 font-semibold text-white transition hover:bg-snr-blue-600 disabled:bg-snr-blue-400 sm:w-auto sm:px-8"
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
