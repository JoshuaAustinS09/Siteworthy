import { Briefcase, Target, Building2, RefreshCw, Check } from "lucide-react";

interface ServiceItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  badge: string;
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
    description:
      "Website multifungsi untuk menampilkan katalog produk, info cabang, jam operasional, hingga integrasi kontak pemesanan langsung.",
    clientBenefit:
      "Membuat usaha Anda lebih mudah ditemukan di Google dan memberi kenyamanan bagi pembeli lokal.",
    points: [
      "Katalog produk / daftar menu",
      "Tombol pesanan langsung via WhatsApp",
      "Peta lokasi Google Maps terintegrasi",
    ],
  },
  {
    id: "landing-page",
    icon: Target,
    title: "Landing Page",
    badge: "Fokus Konversi",
    description:
      "Halaman tunggal terarah yang dirancang khusus untuk mempromosikan produk unggulan, promo musiman, atau penawaran khusus.",
    clientBenefit:
      "Mengarahkan calon pembeli langsung ke tindakan pembelian tanpa distraksi yang membingungkan.",
    points: [
      "Struktur penawaran yang meyakinkan",
      "Call-to-Action (CTA) yang jelas",
      "Kecepatan muat halaman ekstra cepat",
    ],
  },
  {
    id: "company-profile",
    icon: Building2,
    title: "Company Profile Website",
    badge: "Kredibilitas Bisnis",
    description:
      "Website representatif untuk badan usaha, studio, atau agensi yang ingin membangun citra kredibel di mata rekanan dan investor.",
    clientBenefit:
      "Membangun rasa percaya mitra kerja dan memperkuat reputasi profesional perusahaan Anda.",
    points: [
      "Profil bisnis & visi perusahaan",
      "Daftar portofolio & layanan utama",
      "Legalitas & informasi kontak resmi",
    ],
  },
  {
    id: "website-redesign",
    icon: RefreshCw,
    title: "Website Redesign",
    badge: "Penyegaran Tampilan",
    description:
      "Memperbarui website lama Anda yang lambat atau sulit dibuka di HP menjadi website yang modern, ringan, dan mudah dikelola.",
    clientBenefit:
      "Mengembalikan kepercayaan pelanggan dan memastikan website tampil sempurna di semua perangkat mobile.",
    points: [
      "Tampilan baru yang lebih modern",
      "Optimasi navigasi di smartphone",
      "Peningkatan kecepatan loading website",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section bg-brand-gray border-b border-slate-200/80"
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
              <div
                key={service.id}
                className="bg-white rounded-card p-7 md:p-8 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-brand-navy/70">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-navy mb-3">
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
                        <Check
                          className="w-4 h-4 text-brand-blue shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Benefit Box */}
                <div className="bg-brand-gray/80 rounded-lg p-3.5 border border-slate-200/60 mt-2">
                  <p className="text-xs text-brand-navy/80 font-medium">
                    <strong className="text-brand-blue font-semibold">Manfaat Bisnis: </strong>
                    {service.clientBenefit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
