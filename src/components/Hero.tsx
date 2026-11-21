import { ArrowRight, CheckCircle2 } from "lucide-react";
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

  return (
    <section
      id="hero"
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-white overflow-hidden border-b border-brand-gray"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-site mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto space-y-6 md:space-y-8">
          {/* ── Subtitle / Studio Badge ───────────────────── */}
          <div className="inline-flex items-center gap-2 bg-brand-gray px-4 py-2 rounded-full border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            <span className="text-xs md:text-small font-semibold tracking-wide text-brand-navy">
              Freelance Web Development Studio • Berbasis Online
            </span>
          </div>

          {/* ── Headline Utama ────────────────────────────── */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-brand-navy tracking-tight leading-[1.15]"
          >
            Your Business Deserves a <span className="text-brand-blue">Better Website.</span>
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
              className="btn-primary w-full sm:w-auto text-body px-8 py-3.5 shadow-md hover:shadow-lg transition-all"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={onExploreWork}
              className="btn-secondary w-full sm:w-auto text-body px-8 py-3.5"
            >
              Explore Our Work
            </button>
          </div>

          {/* ── Trust Points ──────────────────────────────── */}
          <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-small text-slate-500">
            {trustHighlights.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" aria-hidden="true" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
