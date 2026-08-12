import Link from "next/link";
import { SnrLogo } from "@/components/ui/SnrLogo";
import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { siteConfig, navigation } from "@/data/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-snr-blue-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <SnrLogo height={44} />
              <div>
                <p className="font-display text-lg font-bold">SNR</p>
                <p className="text-xs text-white/60">snr.gouv.sn</p>
              </div>
            </div>
            <p className="mt-4 text-xs font-semibold tracking-widest text-snr-gold-400">
              {siteConfig.baseline}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {siteConfig.tagline}
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: siteConfig.social.facebook },
                { icon: Twitter, href: siteConfig.social.twitter },
                { icon: Linkedin, href: siteConfig.social.linkedin },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition hover:bg-snr-gold-500 hover:text-snr-blue-900"
                  aria-label="Réseau social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 font-semibold text-snr-gold-400">Navigation</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-snr-gold-400">
              Services en ligne
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="#services" className="transition hover:text-white">
                  Demande d&apos;attestation
                </Link>
              </li>
              <li>
                <Link href="#immeubles" className="transition hover:text-white">
                  Consulter les immeubles
                </Link>
              </li>
              <li>
                <Link href="#documents" className="transition hover:text-white">
                  Télécharger un document
                </Link>
              </li>
              <li>
                <Link href="#contact" className="transition hover:text-white">
                  Suivre un dossier
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-snr-gold-400">Contact</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-snr-gold-400" />
                {siteConfig.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-snr-gold-400" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-snr-gold-400" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            © {currentYear} {siteConfig.name}. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="#" className="transition hover:text-white">
              Mentions légales
            </Link>
            <Link href="#" className="transition hover:text-white">
              Politique de confidentialité
            </Link>
            <Link href="#" className="transition hover:text-white">
              Accessibilité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
