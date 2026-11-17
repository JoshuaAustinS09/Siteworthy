import { MessagesSquare, FileText, Code2, CheckSquare, Rocket } from "lucide-react";

interface ProcessStep {
  step: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
}

const STEPS: ProcessStep[] = [
  {
    step: "01",
    icon: MessagesSquare,
    title: "Consultation",
    subtitle: "Konsultasi Kebutuhan",
    description:
      "Kita mendiskusikan bidang usaha Anda, target pelanggan, fitur yang dibutuhkan, serta tujuan yang ingin dicapai melalui website.",
  },
  {
    step: "02",
    icon: FileText,
    title: "Planning",
    subtitle: "Perencanaan & Struktur",
    description:
      "Menyusun struktur halaman (sitemap), alur navigasi, dan materi konten agar penyampaian pesan bisnis berjalan efektif.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Design & Development",
    subtitle: "Pengerjaan Website",
    description:
      "Merancang visual antarmuka dan mengimplementasikannya ke dalam kode yang bersih, responsif, dan ringan dibuka di semua perangkat.",
  },
  {
    step: "04",
    icon: CheckSquare,
    title: "Review & Revision",
    subtitle: "Uji Coba Bersama",
    description:
      "Anda memeriksa preview website secara langsung. Kami melakukan penyesuaian detail dan memastikan semua link dan form berfungsi lancar.",
  },
  {
    step: "05",
    icon: Rocket,
    title: "Launch",
    subtitle: "Peluncuran Online",
    description:
      "Website resmi dipublikasikan dan siap diakses publik. Kami memberikan panduan singkat agar Anda dapat langsung memanfaatkannya.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section bg-white border-b border-slate-200/80"
      aria-labelledby="process-heading"
    >
      <div className="section-inner">
        {/* ── Section Header ─────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="section-label">Alur Kerja</span>
          <h2 id="process-heading" className="section-title">
            Proses Pengerjaan yang Terstruktur
          </h2>
          <p className="section-desc">
            Lima tahapan jelas dan transparan dari awal diskusi hingga website Anda resmi online.
            Anda selalu mengetahui progres setiap langkahnya.
          </p>
        </div>

        {/* ── Timeline / Steps Container ──────────────────── */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-8 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {STEPS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-brand-gray/60 hover:bg-white rounded-card p-6 border border-slate-200 shadow-sm hover:shadow-card transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Step Badge & Icon Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-full bg-brand-blue text-white flex items-center justify-center font-heading font-extrabold text-small shadow-sm">
                        {item.step}
                      </div>
                      <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-brand-navy/70">
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Step Title & Subtitle */}
                    <h3 className="text-lg font-heading font-bold text-brand-navy mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-blue mb-3">{item.subtitle}</p>

                    {/* Step Description */}
                    <p className="text-small text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
