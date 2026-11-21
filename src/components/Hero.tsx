import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Smartphone,
  Search,
  MessageSquare,
} from "lucide-react";
import { contactConfig } from "../data/contact";

interface HeroProps {
  onExploreWork: () => void;
  onConsultation: () => void;
}

export default function Hero({ onExploreWork, onConsultation }: HeroProps) {
  const trustHighlights = [
    "Khusus Bisnis & UMKM",
    "Desain Responsif & Cepat",
    "Komunikasi Langsung Tanpa Perantara",
  ];

  const featurePills = [
    { icon: Zap, label: "Performa Cepat (90+)" },
    { icon: Smartphone, label: "100% Mobile Ready" },
    { icon: Search, label: "Struktur SEO Friendly" },
    { icon: MessageSquare, label: "WhatsApp Direct Order" },
  ];

  return (
    <section
      id="hero"
      className="relative pt-14 pb-20 md:pt-24 md:pb-32 bg-white overflow-hidden border-b border-brand-gray"
      aria-labelledby="hero-heading"
    >
      {/* ── Subtle Background Architectural Dot Pattern (Radial Fade) ── */}
      <div className="absolute inset-0 pointer-events-none opacity-40 select-none overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="hero-grid-pattern"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.2" fill="#0755E8" fillOpacity="0.25" />
            </pattern>
            <radialGradient id="hero-radial-mask" cx="50%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#fff" stopOpacity="1" />
              <stop offset="65%" stopColor="#fff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
            <mask id="hero-mask">
              <rect width="100%" height="100%" fill="url(#hero-radial-mask)" />
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#hero-grid-pattern)"
            mask="url(#hero-mask)"
          />
        </svg>
      </div>

      {/* ── Soft Ambient Background Glow (Sparing, Non-distracting) ── */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-site mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6 md:space-y-8">
          {/* ── Subtitle / Studio Badge with Pulsing Live Status ── */}
          <div className="inline-flex items-center gap-2.5 bg-slate-50 hover:bg-slate-100/80 px-4 py-2 rounded-full border border-slate-200/90 shadow-sm transition-all duration-200">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs md:text-small font-semibold tracking-wide text-brand-navy">
              Freelance Web Development Studio • Berbasis Online
            </span>
            <span className="hidden sm:inline-block text-[11px] font-bold px-2 py-0.5 rounded-full bg-brand-blue/10 text-brand-blue">
              Siap Menerima Proyek
            </span>
          </div>

          {/* ── Headline Utama ────────────────────────────── */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-brand-navy tracking-tight leading-[1.15]"
          >
            Your Business Deserves a{" "}
            <span className="text-brand-blue relative inline-block">
              Better Website.
              <span
                className="absolute bottom-1.5 left-0 w-full h-[6px] bg-brand-blue/15 -z-10 rounded-full"
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* ── Deskripsi Pendukung ───────────────────────── */}
          <p className="text-body-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Siteworthy membantu pelaku usaha dan UMKM membangun kehadiran digital yang profesional,
            modern, dan meyakinkan bagi calon pelanggan di mana saja.
          </p>

          {/* ── CTA Buttons ───────────────────────────────── */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={contactConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onConsultation}
              className="btn-primary w-full sm:w-auto text-body px-8 py-3.5 shadow-md hover:shadow-brand-blue/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={onExploreWork}
              className="btn-secondary w-full sm:w-auto text-body px-8 py-3.5 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Explore Our Work
            </button>
          </div>

          {/* ── Feature Pills (Eye-catching Proof Points) ─── */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5">
            {featurePills.map((pill) => {
              const Icon = pill.icon;
              return (
                <div
                  key={pill.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-700 shadow-sm hover:border-brand-blue/40 hover:bg-blue-50/50 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-brand-blue" aria-hidden="true" />
                  <span>{pill.label}</span>
                </div>
              );
            })}
          </div>

          {/* ── Trust Points ──────────────────────────────── */}
          <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-small text-slate-600">
            {trustHighlights.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" aria-hidden="true" />
                <span className="font-medium text-slate-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
