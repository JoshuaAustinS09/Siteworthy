import {
  MessagesSquare,
  FileText,
  Code2,
  CheckSquare,
  Rocket,
  CheckCircle2,
} from "lucide-react";

interface ProcessStep {
  step: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
  accentBg: string;
}

const STEPS: ProcessStep[] = [
  {
    step: "01",
    icon: MessagesSquare,
    title: "Consultation",
    subtitle: "Konsultasi Kebutuhan",
    description:
      "Kita mendiskusikan bidang usaha Anda, target pelanggan, fitur yang dibutuhkan, serta tujuan yang ingin dicapai melalui website.",
    deliverable: "Brief Proyek & Estimasi",
    accentBg: "bg-brand-blue text-white group-hover:bg-blue-600",
  },
  {
    step: "02",
    icon: FileText,
    title: "Planning",
    subtitle: "Perencanaan & Struktur",
    description:
      "Menyusun struktur halaman (sitemap), alur navigasi, dan materi konten agar penyampaian pesan bisnis berjalan efektif.",
    deliverable: "Sitemap & Struktur Halaman",
    accentBg: "bg-blue-600 text-white group-hover:bg-blue-700",
  },
  {
    step: "03",
    icon: Code2,
    title: "Design & Development",
    subtitle: "Pengerjaan Website",
    description:
      "Merancang visual antarmuka dan mengimplementasikannya ke dalam kode yang bersih, responsif, dan ringan dibuka di semua perangkat.",
    deliverable: "Prototype Responsif & Kode Bersih",
    accentBg: "bg-indigo-600 text-white group-hover:bg-indigo-700",
  },
  {
    step: "04",
    icon: CheckSquare,
    title: "Review & Revision",
    subtitle: "Uji Coba Bersama",
    description:
      "Anda memeriksa preview website secara langsung. Kami melakukan penyesuaian detail dan memastikan semua link dan form berfungsi lancar.",
    deliverable: "Penyesuaian Detail & QA",
    accentBg: "bg-violet-600 text-white group-hover:bg-violet-700",
  },
  {
    step: "05",
    icon: Rocket,
    title: "Launch",
    subtitle: "Peluncuran Online",
    description:
      "Website resmi dipublikasikan dan siap diakses publik. Kami memberikan panduan singkat agar Anda dapat langsung memanfaatkannya.",
    deliverable: "Website Live & Handover Aset",
    accentBg: "bg-emerald-600 text-white group-hover:bg-emerald-700",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section bg-white border-b border-slate-200/80 relative"
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
          {/* Desktop Connecting Rail */}
          <div
            className="hidden lg:block absolute top-9 left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-brand-blue via-indigo-500 to-emerald-500 opacity-20 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {STEPS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="group relative bg-white hover:bg-slate-50/50 rounded-card p-6 border border-slate-200/90 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Hover Accent Bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  />

                  {/* Watermark Step Number in Background */}
                  <span
                    className="absolute top-3 right-4 font-heading font-black text-4xl text-slate-100 group-hover:text-blue-100/70 group-hover:scale-105 transition-all duration-300 select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {item.step}
                  </span>

                  <div>
                    {/* Step Icon Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center font-heading font-extrabold text-sm shadow-md transition-all duration-300 group-hover:scale-110 ${item.accentBg}`}
                      >
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Step Title & Subtitle */}
                    <h3 className="text-lg font-heading font-bold text-brand-navy mb-1 group-hover:text-brand-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-blue mb-3">{item.subtitle}</p>

                    {/* Step Description */}
                    <p className="text-small text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Step Deliverable Badge */}
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-500 group-hover:text-brand-navy flex items-center gap-1.5 transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" aria-hidden="true" />
                      <span>{item.deliverable}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Assurance Banner ────────────────────────────── */}
        <div className="mt-12 max-w-2xl mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong className="text-brand-blue font-bold">💡 Transparansi Terjamin: </strong>
            Anda mendapatkan laporan progres berkala di setiap tahap dan revisi dilakukan secara
            langsung hingga website siap dipublikasikan.
          </p>
        </div>
      </div>
    </section>
  );
}
