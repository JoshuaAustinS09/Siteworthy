import React from "react";
import { contactConfig } from "../data/contact";
import { NAV_ITEMS } from "./Navbar";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <footer className="bg-brand-navy text-white border-t border-brand-navy/30">
      <div className="max-w-site mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          {/* ── Kolom 1: Brand & Keterangan ───────────────── */}
          <div className="space-y-4">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "hero")}
              className="inline-block focus-visible:outline-2 focus-visible:outline-brand-blue rounded-md"
              aria-label="Siteworthy - Kembali ke awal"
            >
              <img
                src="./logo.png"
                alt="Logo Siteworthy"
                className="h-10 w-auto object-contain brightness-0 invert"
                width="160"
                height="40"
              />
            </a>
            <p className="text-small text-slate-300 max-w-sm leading-relaxed">
              Freelance Web Development Studio yang berbasis di Semarang. Membantu pelaku UMKM
              menghadirkan website yang profesional, cepat, dan mudah diakses.
            </p>
            <div className="text-xs text-slate-400 font-medium">
              📍 Semarang, Jawa Tengah, Indonesia
            </div>
          </div>

          {/* ── Kolom 2: Navigasi Cepat ───────────────────── */}
          <div className="space-y-3">
            <h4 className="text-small font-semibold tracking-wider uppercase text-white/90">
              Navigasi
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-small">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Kolom 3: Saluran Komunikasi ───────────────── */}
          <div className="space-y-3">
            <h4 className="text-small font-semibold tracking-wider uppercase text-white/90">
              Hubungi Kami
            </h4>
            <ul className="space-y-2 text-small">
              <li>
                <a
                  href={contactConfig.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  WhatsApp Konsultasi
                </a>
              </li>
              <li>
                <a
                  href={contactConfig.email.url}
                  className="text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-blue" />
                  {contactConfig.email.address}
                </a>
              </li>
              <li>
                <a
                  href={contactConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-pink-400" />@
                  {contactConfig.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Copyright & Bottom bar ─────────────────────── */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="!text-slate-400">© {currentYear} Siteworthy. All rights reserved.</p>
          <p className="!text-slate-400">Your Business Deserves a Better Website.</p>
        </div>
      </div>
    </footer>
  );
}
