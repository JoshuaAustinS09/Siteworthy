import { MessageSquare, Mail, Instagram, ArrowRight, Clock } from "lucide-react";
import { contactConfig } from "../data/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section bg-brand-gray border-b border-slate-200/80 relative"
      aria-labelledby="contact-heading"
    >
      <div className="section-inner relative z-10">
        {/* ── Section Header ─────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="section-label uppercase tracking-wider">
            Hubungi Kami
          </span>
          <h2 id="contact-heading" className="section-title text-3xl md:text-5xl">
            Let's Build Your Website.
          </h2>
          <p className="section-desc">
            Setiap bisnis memiliki kebutuhan dan skala yang unik. Hubungi kami untuk konsultasi
            gratis dan dapatkan rekomendasi solusi serta penawaran (quote) yang sesuai.
          </p>
        </div>

        {/* ── 3 Direct Communication Channels ─────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {/* Channel 1: WhatsApp (Primary) */}
          <a
            href={contactConfig.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-card p-6 md:p-8 shadow-card hover:shadow-card-hover border-2 border-emerald-500/30 hover:border-emerald-500 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Respon Tercepat
                </span>
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-navy mb-2">WhatsApp</h3>
              <p className="text-small text-slate-600 leading-relaxed mb-4">
                Diskusikan langsung kebutuhan website bisnis Anda via WhatsApp di{" "}
                <span className="text-brand-navy font-semibold">{contactConfig.whatsapp.display}</span>.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-small font-semibold text-emerald-700 group-hover:text-emerald-800 pt-4 border-t border-slate-100">
              <span>Mulai Chat Sekarang</span>
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </div>
          </a>

          {/* Channel 2: Email */}
          <a
            href={contactConfig.email.url}
            className="group bg-white rounded-card p-6 md:p-8 shadow-card hover:shadow-card-hover border border-slate-200/80 hover:border-brand-blue/50 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 block w-fit mb-2">
                Korespondensi
              </span>
              <h3 className="text-xl font-heading font-bold text-brand-navy mb-2">Email Resmi</h3>
              <p className="text-small text-slate-600 leading-relaxed mb-4">
                Kirimkan brief proyek atau detail dokumen kebutuhan website bisnis Anda.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-small font-semibold text-brand-blue group-hover:text-blue-700 pt-4 border-t border-slate-100">
              <span className="truncate">{contactConfig.email.address}</span>
              <ArrowRight
                className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </div>
          </a>

          {/* Channel 3: Instagram */}
          <a
            href={contactConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-card p-6 md:p-8 shadow-card hover:shadow-card-hover border border-slate-200/80 hover:border-pink-500/50 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Instagram className="w-6 h-6" aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 block w-fit mb-2">
                Media Sosial
              </span>
              <h3 className="text-xl font-heading font-bold text-brand-navy mb-2">Instagram</h3>
              <p className="text-small text-slate-600 leading-relaxed mb-4">
                Ikuti pembaruan karya, tips website bisnis, dan kabar portofolio terbaru Siteworthy.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-small font-semibold text-pink-600 group-hover:text-pink-700 pt-4 border-t border-slate-100">
              <span>@{contactConfig.instagram.handle}</span>
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </div>
          </a>
        </div>

        {/* ── Request a Quote Note (No Fake Pricing) ──────── */}
        <div className="max-w-2xl mx-auto text-center bg-white rounded-card p-6 border border-slate-200 shadow-sm">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 mb-2">
            <Clock className="w-4 h-4 text-brand-blue" aria-hidden="true" />
            <span>Pendekatan Berbasis Kebutuhan (Request a Quote)</span>
          </div>
          <p className="text-small text-slate-600 leading-relaxed">
            Kami tidak menggunakan paket kaku dengan harga fiktif. Biaya dan waktu pengerjaan
            disesuaikan sepenuhnya dengan ruang lingkup proyek bisnis Anda, sehingga investasi
            tetap efisien dan transparan sejak awal.
          </p>
        </div>
      </div>
    </section>
  );
}
