import {
  Briefcase,
  Target,
  Building2,
  RefreshCw,
  Check,
  ArrowRight,
} from "lucide-react";
import { contactConfig } from "../data/contact";

interface ServiceItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  badge: string;
  badgeColor: string;
  iconBg: string;
  iconColor: string;
  description: string;
  clientBenefit: string;
  points: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: "business-website",
    icon: Briefcase,
    title: "Business Website",
    badge: "UMKM & Operasional",
    badgeColor: "bg-blue-50 text-brand-blue border-blue-200/80",
    iconBg: "bg-blue-50 text-brand-blue group-hover:bg-brand-blue group-hover:text-white",
    iconColor: "text-brand-blue",
    description:
      "Website multifungsi untuk menampilkan katalog produk, info cabang, jam operasional, hingga integrasi kontak pemesanan langsung.",
    clientBenefit:
      "Membuat usaha Anda lebih mudah ditemukan di Google dan memberi kenyamanan bagi pembeli lokal.",
    points: [
      "Katalog produk / daftar menu interaktif",
      "Tombol pesanan langsung via WhatsApp",
      "Peta lokasi Google Maps terintegrasi",
    ],
  },
  {
    id: "landing-page",
    icon: Target,
    title: "Landing Page",
    badge: "Fokus Konversi",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    iconBg: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
    iconColor: "text-emerald-600",
    description:
      "Halaman tunggal terarah yang dirancang khusus untuk mempromosikan produk unggulan, promo musiman, atau penawaran khusus.",
    clientBenefit:
      "Mengarahkan calon pembeli langsung ke tindakan pembelian tanpa distraksi yang membingungkan.",
    points: [
      "Struktur penawaran yang meyakinkan",
      "Call-to-Action (CTA) yang jelas & strategis",
      "Kecepatan muat halaman ekstra cepat",
    ],
  },
  {
    id: "company-profile",
    icon: Building2,
    title: "Company Profile Website",
    badge: "Kredibilitas Bisnis",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
    iconBg: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
    iconColor: "text-indigo-600",
    description:
      "Website representatif untuk badan usaha, studio, atau agensi yang ingin membangun citra kredibel di mata rekanan dan investor.",
    clientBenefit:
      "Membangun rasa percaya mitra kerja dan memperkuat reputasi profesional perusahaan Anda.",
    points: [
      "Profil bisnis & visi perusahaan yang solid",
      "Daftar portofolio & layanan utama terstruktur",
      "Legalitas & informasi kontak resmi lengkap",
    ],
  },
  {
    id: "website-redesign",
    icon: RefreshCw,
    title: "Website Redesign",
    badge: "Penyegaran Tampilan",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200/80",
    iconBg: "bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white",
    iconColor: "text-amber-600",
    description:
      "Memperbarui website lama Anda yang lambat atau sulit dibuka di HP menjadi website yang modern, ringan, dan mudah dikelola.",
    clientBenefit:
      "Mengembalikan kepercayaan pelanggan dan memastikan website tampil sempurna di semua perangkat mobile.",
    points: [
      "Tampilan baru yang lebih modern & segar",
      "Optimasi navigasi khusus smartphone",
      "Peningkatan kecepatan loading website drastis",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section bg-brand-gray border-b border-slate-200/80 relative"
      aria-labelledby="services-heading"
    >
      <div className="section-inner">
        {/* ── Section Header ─────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="section-label">Layanan Kami</span>
          <h2 id="services-heading" className="section-title">
            Solusi Website Sesuai Kebutuhan Bisnis
          </h2>
          <p className="section-desc">
            Kami fokus pada pembuatan website yang memberi dampak nyata bagi bisnis Anda—mudah
            diakses pelanggan, informatif, dan mempercepat proses penjualan.
          </p>
        </div>

        {/* ── Services Grid ──────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <a
                key={service.id}
                href={contactConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-card p-7 md:p-8 border border-slate-200/90 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Border Accent Bar (Animates on Hover) */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />

                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${service.iconBg}`}
                    >
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110" aria-hidden="true" />
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border shadow-2xs ${service.badgeColor}`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-body text-slate-600 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-2.5 text-small text-slate-700"
                      >
                        <span className="w-5 h-5 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                          <Check
                            className="w-3.5 h-3.5 stroke-[2.5]"
                            aria-hidden="true"
                          />
                        </span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Business Benefit Box */}
                  <div className="bg-slate-50/90 group-hover:bg-blue-50/40 rounded-xl p-4 border border-slate-200/70 group-hover:border-brand-blue/30 transition-colors duration-300">
                    <p className="text-xs text-brand-navy/80 font-medium leading-relaxed">
                      <strong className="text-brand-blue font-bold tracking-wide uppercase text-[11px] block mb-0.5">
                        Manfaat Bisnis:
                      </strong>
                      {service.clientBenefit}
                    </p>
                  </div>

                  {/* Interactive Consultation CTA Link */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-brand-blue transition-colors">
                    <span>Konsultasikan Kebutuhan Ini</span>
                    <ArrowRight
                      className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
