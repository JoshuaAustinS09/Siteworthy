import React, { useState, useEffect, useCallback } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { contactConfig } from "../data/contact";

/* ── Data Navigasi ───────────────────────────────────── */
export const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Layanan" },
  { id: "portfolio", label: "Portofolio" },
  { id: "why-choose", label: "Keunggulan" },
  { id: "process", label: "Proses" },
  { id: "contact", label: "Kontak" },
] as const;

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  /* ── Deteksi scroll untuk shadow & border navbar ───────── */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Tutup menu saat resize ke desktop ─────────────────── */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ── Kunci scroll body & Escape key saat menu mobile terbuka */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  /* ── Smooth scroll helper ──────────────────────────────── */
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      setIsOpen(false);
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${id}`);
      }
    },
    []
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-nav border-b border-brand-gray"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="max-w-site mx-auto px-6 md:px-8 lg:px-12">
        <nav
          className="flex items-center justify-between h-[72px]"
          role="navigation"
          aria-label="Navigasi Utama Siteworthy"
        >
          {/* ── Brand Logo ─────────────────────────────────── */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue rounded-md group"
            aria-label="Siteworthy - Kembali ke atas"
          >
            <img
              src="./logo.png"
              alt="Logo Siteworthy"
              className="h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              width="160"
              height="40"
            />
          </a>

          {/* ── Desktop Navigation Links ───────────────────── */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    aria-current={isActive ? "page" : undefined}
                    className={`px-3 py-2 rounded-btn text-small font-medium transition-all ${
                      isActive
                        ? "text-brand-blue bg-brand-blue/10 font-semibold"
                        : "text-brand-navy/80 hover:text-brand-navy hover:bg-brand-gray"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ── Desktop CTA Button ─────────────────────────── */}
          <div className="hidden md:flex items-center">
            <a
              href={contactConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-small !py-2.5 !px-5 shadow-sm hover:shadow"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* ── Mobile Hamburger Toggle Button ────────────── */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            type="button"
            className="md:hidden p-2 rounded-btn text-brand-navy hover:bg-brand-gray focus-visible:outline-2 focus-visible:outline-brand-blue transition-colors"
            aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-menu"
          >
            <svg
              className="w-6 h-6 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* ── Mobile Navigation Drawer ─────────────────────── */}
      {isOpen && (
        <div
          id="mobile-navigation-menu"
          className="md:hidden fixed inset-x-0 top-[72px] bottom-0 bg-white/98 backdrop-blur-lg border-t border-brand-gray z-40 overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="max-w-site mx-auto px-6 py-6 flex flex-col min-h-[calc(100vh-72px)] justify-between">
            <nav aria-label="Navigasi Menu Mobile">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleNavClick(e, item.id)}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-card text-body font-medium transition-colors ${
                          isActive
                            ? "text-brand-blue bg-brand-blue/10 font-semibold"
                            : "text-brand-navy/80 hover:text-brand-navy hover:bg-brand-gray"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-brand-blue" />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Mobile CTA Contact Section */}
            <div className="pt-6 pb-8 border-t border-brand-gray space-y-3">
              <a
                href={contactConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full text-center py-3.5"
              >
                Konsultasi Gratis via WhatsApp
              </a>
              <p className="text-xs text-center text-gray-500">
                Respon cepat • Diskusi kebutuhan UMKM tanpa biaya
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
