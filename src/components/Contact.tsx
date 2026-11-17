import { MessageSquare, Mail, Instagram, ArrowRight, Clock } from "lucide-react";
import { contactConfig } from "../data/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section bg-brand-navy text-white relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="section-inner relative z-10">
        {/* ── Section Header ─────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="section-label !text-brand-blue uppercase tracking-wider">
            Hubungi Kami
          </span>
          <h2 id="contact-heading" className="section-title !text-white text-3xl md:text-5xl">
            Let's Build Your Website.
          </h2>
          <p className="section-desc !text-slate-300">
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
            className="group bg-white/10 hover:bg-white/15 border border-white/15 hover:border-brand-blue rounded-card p-6 md:p-8 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                  Respon Tercepat
                </span>
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-small text-slate-300 leading-relaxed mb-4">
                Diskusikan langsung kebutuhan website bisnis Anda via WhatsApp di{" "}
                <span className="text-white font-medium">{contactConfig.whatsapp.display}</span>.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-small font-semibold text-emerald-300 group-hover:text-emerald-200 pt-2 border-t border-white/10">
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
            className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-card p-6 md:p-8 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-brand-blue/20 text-brand-blue flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/10 text-slate-300 block w-fit mb-2">
                Korespondensi
              </span>
              <h3 className="text-xl font-heading font-bold text-white mb-2">Email Resmi</h3>
              <p className="text-small text-slate-300 leading-relaxed mb-4">
                Kirimkan brief proyek atau detail dokumen kebutuhan website Anda.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-small font-semibold text-white/90 group-hover:text-white pt-2 border-t border-white/10">
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
            className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-card p-6 md:p-8 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Instagram className="w-6 h-6" aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/10 text-slate-300 block w-fit mb-2">
                Media Sosial
              </span>
              <h3 className="text-xl font-heading font-bold text-white mb-2">Instagram</h3>
              <p className="text-small text-slate-300 leading-relaxed mb-4">
                Ikuti pembaruan karya, tips website bisnis, dan kabar terbaru Siteworthy.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-small font-semibold text-pink-300 group-hover:text-pink-200 pt-2 border-t border-white/10">
              <span>@{contactConfig.instagram.handle}</span>
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </div>
          </a>
        </div>

        {/* ── Request a Quote Note (No Fake Pricing) ──────── */}
        <div className="max-w-2xl mx-auto text-center bg-white/5 rounded-card p-6 border border-white/10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 mb-2">
            <Clock className="w-4 h-4 text-brand-blue" aria-hidden="true" />
            <span>Pendekatan Berbasis Kebutuhan (Request a Quote)</span>
          </div>
          <p className="text-small text-slate-300 leading-relaxed">
            Kami tidak menggunakan paket kaku dengan harga fiktif. Biaya dan waktu pengerjaan
            disesuaikan sepenuhnya dengan ruang lingkup proyek Anda di Semarang, sehingga investasi
            tetap efisien dan transparan sejak awal.
          </p>
        </div>
      </div>
    </section>
  );
}
