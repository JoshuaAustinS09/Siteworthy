import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Placeholder: konten section akan ditambahkan di M3 & M4 ── */}
      <main className="flex-1 flex flex-col items-center justify-center section text-center">
        <div className="section-inner space-y-6">
          {/* Label */}
          <span className="section-label inline-block bg-brand-gray px-4 py-1.5 rounded-full">
            Siteworthy Studio
          </span>

          {/* Headline */}
          <h1 className="max-w-3xl mx-auto">
            Your Business Deserves a Better Website.
          </h1>

          {/* Deskripsi */}
          <p className="section-desc">
            Kami membuat website modern, profesional, dan mudah diakses untuk membantu pertumbuhan bisnis Anda.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary" type="button">
              Konsultasi Gratis
            </button>
            <button className="btn-secondary" type="button">
              Lihat Portofolio
            </button>
          </div>
        </div>
      </main>

      {/* Footer placeholder */}
      <footer className="py-6 text-center text-small text-gray-400">
        © 2026 Siteworthy. All rights reserved.
      </footer>
    </div>
  );
}
