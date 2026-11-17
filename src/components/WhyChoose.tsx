import { Smartphone, MousePointerClick, BadgePercent, MessageCircle } from "lucide-react";

interface ValueProp {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
}

const VALUE_PROPOSITIONS: ValueProp[] = [
  {
    id: "modern-responsive",
    icon: Smartphone,
    title: "Modern and Responsive Design",
    subtitle: "Tampil Rapi di HP, Tablet, & Komputer",
    description:
      "Sebagian besar pelanggan lokal mengakses internet lewat ponsel. Kami memastikan website Anda tampil proporsional, cepat dibuka, dan mudah dibaca di segala ukuran layar tanpa distorsi.",
  },
  {
    id: "user-friendly",
    icon: MousePointerClick,
    title: "User-Friendly Experience",
    subtitle: "Navigasi Jelas, Tanpa Membingungkan Pengunjung",
    description:
      "Struktur halaman dirancang agar calon pelanggan menemukan informasi produk, harga, dan kontak pemesanan hanya dalam hitungan detik tanpa tersesat.",
  },
  {
    id: "affordable-umkm",
    icon: BadgePercent,
    title: "Affordable Solutions for UMKM",
    subtitle: "Investasi Terukur Sesuai Skala Usaha",
    description:
      "Kami memahami kebutuhan UMKM yang mengutamakan efisiensi biaya. Anda mendapatkan website fungsional tanpa harus membayar fitur rumit yang sebenarnya tidak Anda butuhkan.",
  },
  {
    id: "direct-communication",
    icon: MessageCircle,
    title: "Direct Communication",
    subtitle: "Komunikasi Langsung dengan Developer",
    description:
      "Anda berdiskusi langsung dengan pihak yang mengerjakan website Anda tanpa birokrasi berbelit. Diskusi lebih cepat, revisi lebih tepat, dan progres selalu terpantau.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="section bg-brand-gray border-b border-slate-200/80"
      aria-labelledby="why-choose-heading"
    >
      <div className="section-inner">
        {/* ── Section Header ─────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="section-label">Kenapa Siteworthy</span>
          <h2 id="why-choose-heading" className="section-title">
            Fokus Pada Kebutuhan Nyata Bisnis Anda
          </h2>
          <p className="section-desc">
            Bukan sekadar menulis baris kode, kami hadir sebagai mitra pengembangan web yang
            membantu bisnis lokal Anda tampil lebih kredibel di era digital.
          </p>
        </div>

        {/* ── 4 Value Propositions Grid ───────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {VALUE_PROPOSITIONS.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div
                key={prop.id}
                className="bg-white rounded-card p-7 md:p-8 border border-slate-200/80 shadow-card hover:border-brand-blue/30 transition-all duration-200 relative overflow-hidden"
              >
                {/* Visual Step Number Accent */}
                <span className="absolute top-6 right-7 text-4xl font-heading font-extrabold text-slate-100 select-none pointer-events-none">
                  0{idx + 1}
                </span>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-heading font-bold text-brand-navy">{prop.title}</h3>
                    <p className="text-xs font-semibold text-brand-blue tracking-wide uppercase">
                      {prop.subtitle}
                    </p>
                    <p className="text-body text-slate-600 leading-relaxed pt-1">
                      {prop.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
