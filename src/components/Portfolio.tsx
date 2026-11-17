import { ExternalLink, Layers, Sparkles } from "lucide-react";
import { portfolioData, PortfolioProject } from "../data/portfolio";
import { contactConfig } from "../data/contact";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section bg-white border-b border-slate-200/80"
      aria-labelledby="portfolio-heading"
    >
      <div className="section-inner">
        {/* ── Section Header ─────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="section-label">Selected Works</span>
          <h2 id="portfolio-heading" className="section-title">
            Studi Kasus & Demonstrasi Website
          </h2>
          <p className="section-desc">
            Contoh struktur dan tata letak website yang dirancang untuk memberikan pengalaman
            terbaik bagi pengunjung dan memaksimalkan kepercayaan pelanggan.
          </p>
        </div>

        {/* ── Portfolio Grid ─────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project: PortfolioProject) => (
            <article
              key={project.id}
              className="bg-white rounded-card border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-200 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Preview / Browser Mockup Placeholder */}
                <div className="relative bg-brand-gray border-b border-slate-200 aspect-[16/10] flex flex-col justify-between p-4 group-hover:bg-slate-100 transition-colors">
                  {/* Browser Window Header Dots */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    </div>
                    {/* Status Badge */}
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white text-brand-navy/70 border border-slate-200 shadow-sm">
                      {project.status === "placeholder" ? "Preview Demonstrasi" : "Live Website"}
                    </span>
                  </div>

                  {/* Visual Center Placeholder Graphic */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-3">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200/70 flex items-center justify-center text-brand-blue mb-2 group-hover:scale-105 transition-transform">
                      <Layers className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold text-brand-navy">{project.name}</span>
                    <span className="text-[11px] text-slate-500">Mockup Konsep Visual</span>
                  </div>

                  {/* Browser Footer Line */}
                  <div className="w-full bg-slate-200/70 h-1.5 rounded-full" />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Category Pill */}
                  <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider block mb-2">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-heading font-bold text-brand-navy mb-2.5 group-hover:text-brand-blue transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-small text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-[11px] font-medium bg-brand-gray text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/60"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Action Button */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 mt-2">
                {project.demoUrl !== "#" ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-small font-semibold text-brand-blue hover:text-blue-700 transition-colors"
                  >
                    <span>Buka Live Demo</span>
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
                    Tersedia saat konsultasi proyek
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* ── Custom Demo Consultation Note ──────────────── */}
        <div className="mt-14 bg-brand-gray rounded-card p-6 md:p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="font-heading font-bold text-lg text-brand-navy">
              Punya konsep atau bidang usaha yang spesifik?
            </h4>
            <p className="text-small text-slate-600 max-w-xl">
              Kami dapat mendiskusikan rancangan tata letak website yang paling cocok untuk model
              bisnis Anda di Semarang.
            </p>
          </div>
          <a
            href={contactConfig.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-small shrink-0 whitespace-nowrap"
          >
            Diskusikan Ide Website
          </a>
        </div>
      </div>
    </section>
  );
}
