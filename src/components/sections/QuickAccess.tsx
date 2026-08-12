"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileCheck,
  Building2,
  FolderOpen,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { quickAccessLinks } from "@/data/content";

const iconMap = {
  FileCheck,
  Building2,
  FolderOpen,
  Phone,
};

export function QuickAccessBar() {
  return (
    <div className="relative z-20 -mt-6 mx-auto max-w-6xl px-6 pb-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 gap-3 sm:grid-cols-4"
      >
        {quickAccessLinks.map((link, i) => {
          const Icon = iconMap[link.icon as keyof typeof iconMap];
          return (
            <Link
              key={link.label}
              href={link.href}
              className="group relative overflow-hidden rounded-2xl border border-white/80 bg-white p-5 shadow-lg shadow-snr-blue-500/5 transition hover:-translate-y-1 hover:border-snr-gold-400/50 hover:shadow-xl hover:shadow-snr-gold-500/10"
            >
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-snr-gold-500/10 transition group-hover:scale-150" />
              <div className="relative flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-snr-blue-500 text-white transition group-hover:bg-snr-gold-500 group-hover:text-snr-blue-900">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-snr-blue-500 group-hover:text-snr-blue-600">
                    {link.label}
                  </p>
                  <p className="text-xs text-gray-500">{link.desc}</p>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-gray-300 transition group-hover:text-snr-gold-500" />
              </div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
