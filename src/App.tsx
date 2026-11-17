import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-white">
      {/* ── Fixed Sticky Navigation ────────────────────── */}
      <Navbar />

      {/* ── Main Layout (6 Section Konten) ─────────────── */}
      <main className="flex-1">
        {/* SECTION 01: HERO */}
        <section
          id="hero"
          className="section min-h-[calc(100vh-72px)] flex items-center justify-center bg-white"
        >
          <div className="section-inner text-center space-y-6 max-w-3xl">
            <span className="section-label inline-block bg-brand-gray px-4 py-1.5 rounded-full text-xs md:text-sm">
              Freelance Web Development Studio • Semarang
            </span>
            <h1 className="text-display font-heading font-extrabold text-brand-navy leading-tight">
              Your Business Deserves a Better Website.
            </h1>
            <p className="section-desc">
              Kami membuat website modern, profesional, dan mudah diakses yang
              dirancang khusus untuk membantu pelaku UMKM bertumbuh dan dipercaya calon pelanggan.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="btn-primary w-full sm:w-auto"
              >
                Konsultasi Gratis
              </button>
              <button
                type="button"
                onClick={() => scrollTo("portfolio")}
                className="btn-secondary w-full sm:w-auto"
              >
                Lihat Portofolio
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 02: SERVICES */}
        <section id="services" className="section bg-brand-gray border-y border-slate-200/60">
          <div className="section-inner text-center py-8">
            <span className="section-label">Layanan Kami</span>
            <h2 className="section-title">Solusi Website Sesuai Kebutuhan Bisnis</h2>
            <p className="section-desc mb-10">
              Layanan web development terarah yang berfokus pada hasil nyata bagi UMKM,
              bukan sekadar tampilan visual.
            </p>
            <div className="p-8 rounded-card border border-dashed border-slate-300 bg-white/60 text-small text-slate-500 max-w-md mx-auto">
              🏗️ Komponen 4 Layanan Utama akan diimplementasikan di Milestone 4
            </div>
          </div>
        </section>

        {/* SECTION 03: SELECTED WORKS / PORTFOLIO */}
        <section id="portfolio" className="section bg-white">
          <div className="section-inner text-center py-8">
            <span className="section-label">Portofolio Pilihan</span>
            <h2 className="section-title">Karya & Demonstrasi Website</h2>
            <p className="section-desc mb-10">
              Contoh website yang kami kembangkan untuk berbagai sektor usaha lokal.
            </p>
            <div className="p-8 rounded-card border border-dashed border-slate-300 bg-brand-gray/50 text-small text-slate-500 max-w-md mx-auto">
              💻 Komponen Showcase Portofolio akan diimplementasikan di Milestone 4
            </div>
          </div>
        </section>

        {/* SECTION 04: WHY CHOOSE SITEWORTHY */}
        <section id="why-choose" className="section bg-brand-gray border-y border-slate-200/60">
          <div className="section-inner text-center py-8">
            <span className="section-label">Mengapa Siteworthy</span>
            <h2 className="section-title">Nilai Lebih untuk Bisnis Anda</h2>
            <p className="section-desc mb-10">
              Kombinasi desain profesional, kemudahan penggunaan, dan komunikasi langsung tanpa birokrasi.
            </p>
            <div className="p-8 rounded-card border border-dashed border-slate-300 bg-white/60 text-small text-slate-500 max-w-md mx-auto">
              ⭐ Komponen 4 Value Proposition akan diimplementasikan di Milestone 4
            </div>
          </div>
        </section>

        {/* SECTION 05: OUR PROCESS */}
        <section id="process" className="section bg-white">
          <div className="section-inner text-center py-8">
            <span className="section-label">Alur Kerja</span>
            <h2 className="section-title">5 Langkah Praktis Menuju Website Siap Pakai</h2>
            <p className="section-desc mb-10">
              Proses pengerjaan yang terstruktur dan transparan, mulai dari konsultasi hingga peluncuran.
            </p>
            <div className="p-8 rounded-card border border-dashed border-slate-300 bg-brand-gray/50 text-small text-slate-500 max-w-md mx-auto">
              🗺️ Komponen Timeline Alur Kerja akan diimplementasikan di Milestone 4
            </div>
          </div>
        </section>

        {/* SECTION 06: CONTACT */}
        <section id="contact" className="section bg-brand-navy text-white">
          <div className="section-inner text-center py-12">
            <span className="section-label !text-brand-blue uppercase">Mulai Sekarang</span>
            <h2 className="section-title !text-white">
              Siap Menghadirkan Website yang Lebih Baik?
            </h2>
            <p className="section-desc !text-slate-300 mb-8 max-w-xl mx-auto">
              Konsultasikan ide dan kebutuhan bisnis Anda secara langsung.
              Kami siap membantu menemukan solusi website yang tepat untuk UMKM Anda.
            </p>
            <div className="p-8 rounded-card border border-dashed border-white/20 bg-white/5 text-small text-slate-300 max-w-md mx-auto">
              💬 Komponen Direct Channel Kontak akan diimplementasikan di Milestone 4
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
