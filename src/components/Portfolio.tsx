import {
  ExternalLink,
  Sparkles,
  Lock,
  ArrowRight,
  Store,
  Stethoscope,
  Code2,
} from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";
import { contactConfig } from "../data/contact";

export default function Portfolio() {
  const { projects } = usePortfolio();

  return (
    <section
      id="portfolio"
      className="section bg-white border-b border-slate-200/80 relative"
      aria-labelledby="portfolio-heading"
    >
      <div className="section-inner">
        {/* ── Section Header ─────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="section-label">Demo Works</span>
          <h2 id="portfolio-heading" className="section-title">
            Studi Kasus & Demonstrasi Website
          </h2>
          <p className="section-desc">
            Koleksi demonstrasi website interaktif dan konsep desain yang dirancang khusus untuk memperlihatkan standar kualitas, kecepatan, dan kenyamanan pengguna.
          </p>
        </div>

        {/* ── Portfolio Grid ─────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-card border border-slate-200/90 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* ── Visual Preview / Realistic Browser Window Mockup ── */}
                <div className="relative bg-slate-100 border-b border-slate-200 aspect-[16/11] flex flex-col justify-between overflow-hidden">
                  {/* Browser Window Header Chrome */}
                  <div className="bg-slate-200/80 px-3.5 py-2.5 border-b border-slate-200 flex items-center justify-between gap-2 z-10">
                    {/* Traffic Light Window Controls */}
                    <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                    </div>

                    {/* Simulated URL Bar */}
                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/90 border border-slate-200 text-[10px] text-slate-500 font-mono truncate max-w-[170px] shadow-sm">
                      <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" aria-hidden="true" />
                      <span className="truncate">siteworthy.demo/{project.id}</span>
                    </div>

                    {/* Status Badge */}
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border shadow-sm shrink-0 ${
                        project.status === "live"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : "bg-white text-brand-navy/70 border-slate-200"
                      }`}
                    >
                      {project.status === "live" ? "Live Demo" : "Preview Demonstrasi"}
                    </span>
                  </div>

                  {/* Browser Body: Real Screenshot Preview or Realistic Wireframe Canvas */}
                  {project.image && !project.image.endsWith(".svg") ? (
                    <div className="relative flex-1 overflow-hidden bg-slate-100 flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={`Tangkapan layar demo website ${project.name}`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="p-3.5 flex-1 flex flex-col justify-between bg-slate-50/70 select-none">
                      {/* Simulated Mini Nav */}
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-4 rounded bg-brand-blue flex items-center justify-center text-white text-[8px] font-bold">
                            {project.id === "project-2" && <Store className="w-2.5 h-2.5" />}
                            {project.id === "project-3" && <Stethoscope className="w-2.5 h-2.5" />}
                          </div>
                          <span className="text-[10px] font-bold text-slate-700 truncate max-w-[120px]">
                            {project.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-6 h-1.5 rounded-full bg-slate-200" />
                          <span className="w-6 h-1.5 rounded-full bg-slate-200" />
                        </div>
                      </div>

                      {/* Simulated Hero Banner Area */}
                      <div className="my-2 p-2.5 rounded-md bg-white border border-slate-200/70 shadow-sm">
                        <div className="w-3/4 h-2 rounded bg-slate-700 mb-1.5" />
                        <div className="w-1/2 h-1.5 rounded bg-slate-300 mb-2" />
                        <div className="flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded text-[8px] font-bold bg-brand-blue text-white">
                            Lihat Profil
                          </span>
                          <span className="px-2 py-0.5 rounded text-[8px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
                            Detail Info
                          </span>
                        </div>
                      </div>

                      {/* Simulated Content Grid Cards */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2 rounded bg-white border border-slate-200/60 shadow-sm">
                          <div className="w-full h-8 rounded bg-slate-100 mb-1 flex items-center justify-center text-[9px] text-slate-400">
                            {project.id === "project-2" ? "🎨 Motif 01" : "👨‍⚕️ Layanan 01"}
                          </div>
                          <div className="w-2/3 h-1.5 rounded bg-slate-300" />
                        </div>
                        <div className="p-2 rounded bg-white border border-slate-200/60 shadow-sm">
                          <div className="w-full h-8 rounded bg-slate-100 mb-1 flex items-center justify-center text-[9px] text-slate-400">
                            {project.id === "project-2" ? "🎨 Motif 02" : "👨‍⚕️ Layanan 02"}
                          </div>
                          <div className="w-2/3 h-1.5 rounded bg-slate-300" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── Hover Reveal Overlay (Smooth Blur & Quick Action) ── */}
                  <a
                    href={
                      project.demoUrl && project.demoUrl !== "#"
                        ? project.demoUrl
                        : `${contactConfig.whatsapp.url}?text=Halo%20Siteworthy,%20saya%20tertarik%20dengan%20konsep%20demo%20${encodeURIComponent(project.name)}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-brand-navy/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 z-20 text-center"
                    aria-label={
                      project.demoUrl && project.demoUrl !== "#"
                        ? `Buka demo live ${project.name}`
                        : `Konsultasikan rancangan website mirip ${project.name}`
                    }
                  >
                    <span className="inline-flex items-center gap-2 bg-white text-brand-navy px-4 py-2 rounded-full font-semibold text-xs shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 hover:bg-brand-blue hover:text-white">
                      <span>
                        {project.demoUrl && project.demoUrl !== "#"
                          ? "Buka Demo Website"
                          : "Konsultasi Konsep Serupa"}
                      </span>
                      {project.demoUrl && project.demoUrl !== "#" ? (
                        <ExternalLink className="w-3.5 h-3.5 text-current" aria-hidden="true" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5 text-current" aria-hidden="true" />
                      )}
                    </span>
                    <span className="text-[11px] text-slate-300 mt-2 font-medium">
                      {project.demoUrl && project.demoUrl !== "#"
                        ? "Kunjungi website demo interaktif"
                        : "Bahas arsitektur & fitur via WhatsApp"}
                    </span>
                  </a>
                </div>

                {/* ── Content Section ───────────────────────────── */}
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
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-[11px] font-medium bg-brand-gray text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/70"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack Pills (Interactive Polish) */}
                  {project.techStack && (
                    <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 mr-1">
                        <Code2 className="w-3 h-3 text-brand-blue" aria-hidden="true" />
                        Stack:
                      </span>
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-brand-blue border border-blue-200/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* ── Card Footer: Action Button ─────────────────── */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                {project.demoUrl && project.demoUrl !== "#" ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-small font-semibold text-brand-blue hover:text-blue-700 transition-colors group/link"
                  >
                    <span>Buka Demo Website</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
                    <span>Tersedia saat konsultasi</span>
                  </span>
                )}

                <a
                  href={`${contactConfig.whatsapp.url}?text=Halo%20Siteworthy,%20saya%20ingin%20tanya%20mengenai%20${encodeURIComponent(project.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-brand-blue hover:text-blue-700 inline-flex items-center gap-1 transition-colors"
                >
                  <span>Tanya Proyek</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ── Custom Demo Consultation Note ──────────────── */}
        <div className="mt-14 bg-brand-gray rounded-card p-6 md:p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-sm">
          <div className="space-y-1">
            <h4 className="font-heading font-bold text-lg text-brand-navy">
              Punya konsep atau bidang usaha yang spesifik?
            </h4>
            <p className="text-small text-slate-600 max-w-xl">
              Kami dapat mendiskusikan rancangan tata letak website yang paling cocok untuk model
              bisnis Anda.
            </p>
          </div>
          <a
            href={contactConfig.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-small shrink-0 whitespace-nowrap shadow-md hover:shadow-lg transition-all"
          >
            Diskusikan Ide Website
          </a>
        </div>
      </div>
    </section>
  );
}
