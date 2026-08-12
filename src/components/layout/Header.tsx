"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { navigation, siteConfig } from "@/data/content";
import { cn } from "@/lib/utils";
import { SnrLogo } from "@/components/ui/SnrLogo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="senegal-stripe" aria-hidden="true" />

      {/* Top bar */}
      <div className="hidden bg-snr-blue-800 text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 transition hover:text-snr-gold-400"
            >
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 transition hover:text-snr-gold-400"
            >
              <Mail className="h-3.5 w-3.5" />
              {siteConfig.email}
            </a>
          </div>
          <p className="text-white/80">
            République du Sénégal — Un Peuple, Un But, Une Foi
          </p>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 shadow-lg backdrop-blur-md"
            : "bg-white shadow-sm"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <SnrLogo height={48} className="transition group-hover:opacity-90" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-snr-blue-50 hover:text-snr-blue-700"
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>

                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full z-50 min-w-[200px] rounded-xl border border-gray-100 bg-white py-2 shadow-xl"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 transition hover:bg-snr-blue-50 hover:text-snr-blue-700"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <Link
            href="#contact"
            className="hidden rounded-xl bg-snr-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-snr-blue-600 lg:block"
          >
            E-Services
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-gray-100 lg:hidden"
            >
              <nav className="space-y-1 px-6 py-4">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-snr-blue-50 hover:text-snr-blue-700"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 block rounded-xl bg-snr-blue-500 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  E-Services
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
