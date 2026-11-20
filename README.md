# Siteworthy – Portfolio Website

[![Deploy to GitHub Pages](https://github.com/USERNAME/siteworthy/actions/workflows/deploy.yml/badge.svg)](https://github.com/USERNAME/siteworthy/actions/workflows/deploy.yml)

> **"Your Business Deserves a Better Website."**  
> Siteworthy adalah freelance web development studio berbasis di Semarang, Indonesia yang berfokus membantu pelaku UMKM membangun kehadiran digital yang profesional, modern, dan mudah diakses.

---

## 📌 Ringkasan Proyek

Website ini adalah **Single Page Website** profesional yang dirancang untuk:
- Membangun kredibilitas studio Siteworthy
- Memamerkan portofolio layanan kepada calon klien UMKM lokal
- Memudahkan calon klien menghubungi studio melalui jalur komunikasi langsung

| Item | Detail |
|------|--------|
| **Target Klien** | Pelaku UMKM di Semarang & sekitarnya |
| **Hosting** | GitHub Pages – `https://<USERNAME>.github.io/siteworthy/` |
| **Arsitektur** | Static SPA – Vite + React + TypeScript + Tailwind CSS |
| **Bahasa Konten** | Bahasa Indonesia |

📄 Dokumentasi terkait:
- [PROJECT_BRIEF.md](PROJECT_BRIEF.md) – Brief lengkap proyek
- [ARCHITECTURE.md](ARCHITECTURE.md) – Gambaran arsitektur sistem
- [TASKS.md](TASKS.md) – Rincian milestone & tugas implementasi

---

## 🛠️ Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| Framework | React 19 (TypeScript) |
| Bundler | Vite 6 |
| Styling | Tailwind CSS 3 |
| Icons | Lucide React |
| Testing | Vitest + React Testing Library |
| Linting | ESLint + eslint-plugin-jsx-a11y |
| Formatting | Prettier |
| CI/CD | GitHub Actions → GitHub Pages |

---

## 🚀 Pengembangan Lokal

### Prasyarat
- Node.js **v22+** (sesuai CI pipeline)
- npm v10+

### Langkah-langkah

```bash
# 1. Clone repository
git clone https://github.com/USERNAME/siteworthy.git
cd siteworthy

# 2. Install dependensi
npm install

# 3. Jalankan development server (http://localhost:5173)
npm run dev

# 4. Lint & format kode
npm run lint
npm run format

# 5. Jalankan unit tests
npm run test
npm run test:watch   # mode watch untuk development

# 6. Build untuk produksi
npm run build

# 7. Preview hasil build secara lokal
npx serve dist
```

---

## 🏗️ Struktur Proyek

```
siteworthy/
├── .github/
│   └── workflows/
│       └── deploy.yml       # CI/CD – lint → test → build → deploy
├── public/
│   ├── logo.png             # Logo utama (480px wide, optimized)
│   ├── favicon.png          # Favicon (128×128)
│   ├── robots.txt           # Crawl rules
│   └── sitemap.xml          # Sitemap (1 URL)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky nav + hamburger mobile
│   │   ├── Hero.tsx         # Section hero + CTA
│   │   ├── Services.tsx     # 4 kartu layanan
│   │   ├── Portfolio.tsx    # Grid portofolio (data dari JSON)
│   │   ├── WhyChoose.tsx    # 4 value proposition
│   │   ├── Process.tsx      # 5-step timeline
│   │   ├── Contact.tsx      # Kontak channels
│   │   └── Footer.tsx       # Footer + copyright
│   ├── data/
│   │   ├── portfolio.json   # Data proyek portofolio (3 entries)
│   │   └── contact.ts       # Konfigurasi kontak (WA, email, IG)
│   ├── hooks/
│   │   ├── usePortfolio.ts  # Hook pemuat data portfolio.json
│   │   └── useActiveSection.ts  # IntersectionObserver untuk nav aktif
│   ├── test/
│   │   ├── setup.ts         # Konfigurasi Vitest + mock browser APIs
│   │   ├── Navbar.test.tsx
│   │   ├── Hero.test.tsx
│   │   └── Sections.test.tsx
│   ├── App.tsx              # Root component – layout 6 section
│   ├── main.tsx             # Entry point
│   └── index.css            # Tailwind base + component classes
├── index.html               # Template HTML + SEO meta + JSON-LD
├── tailwind.config.js       # Palet warna brand + font kustom
├── vite.config.ts           # Vite + Vitest config
├── tsconfig.json            # TypeScript root config
├── .prettierrc              # Prettier config
└── eslint.config.js         # ESLint config + jsx-a11y
```

---

## ➕ Cara Menambah Item Portofolio

Edit file [`src/data/portfolio.json`](src/data/portfolio.json). Tambahkan objek baru ke dalam array dengan format berikut:

```jsonc
{
  "id": "nama-unik-slug",          // string unik, lowercase, gunakan dash
  "name": "Nama Proyek",           // nama tampilan
  "category": "Business Website",  // kategori layanan
  "description": "Deskripsi singkat proyek (1-2 kalimat).",
  "features": [                    // daftar fitur utama (3-5 item)
    "Fitur 1",
    "Fitur 2",
    "Fitur 3"
  ],
  "image": "/path/to/screenshot.png",  // relatif ke public/
  "demoUrl": "https://link-demo.com",  // kosongkan string jika belum ada
  "status": "live"                     // "live" | "placeholder"
}
```

Simpan file → komponen `Portfolio.tsx` akan otomatis merender kartu baru.

---

## 📞 Cara Memperbarui Kontak

Edit file [`src/data/contact.ts`](src/data/contact.ts):

```ts
export const contact = {
  whatsapp: {
    number: "6281225005978",   // format internasional, tanpa +
    display: "+62 812-2500-5978",
    url: "https://wa.me/6281225005978",
  },
  email: {
    address: "josh.app76@gmail.com",
    url: "mailto:josh.app76@gmail.com",
  },
  instagram: {
    handle: "@joshua.as_",
    url: "https://instagram.com/joshua.as_",
  },
};
```

---

## 🔄 CI/CD Pipeline

Pipeline otomatis berjalan setiap kali ada **push ke branch `main`**:

```
push to main
     │
     ▼
┌──────────────────────────────────────────────────────┐
│  GitHub Actions: build-and-deploy                    │
│                                                      │
│  1. checkout@v4        → ambil source code           │
│  2. setup-node@v4      → Node.js 22 + npm cache      │
│  3. npm ci             → install dependensi bersih   │
│  4. npm run lint       → ESLint (gagal = stop)       │
│  5. npm run test       → Vitest 17 unit tests        │
│  6. npm run build      → hasilkan dist/              │
│  7. peaceiris/gh-pages → push dist/ ke gh-pages      │
└──────────────────────────────────────────────────────┘
```

> **Catatan:** Deploy ke `gh-pages` hanya terjadi saat event `push` ke `main`, **bukan** saat Pull Request.

---

## 🔧 Placeholder yang Perlu Diperbarui

Sebelum deploy final, perbarui item-item berikut:

| File | Lokasi | Yang Perlu Diubah |
|------|--------|--------------------|
| `README.md` | Badge URL + Clone URL | Ganti `USERNAME` dengan GitHub username aktual |
| `public/sitemap.xml` | `<loc>` URL | Ganti `YOUR_USERNAME` dan `siteworthy` dengan nilai aktual |
| `public/robots.txt` | `Sitemap:` URL | Sama seperti sitemap.xml |
| `index.html` | `og:url` meta tag | URL website aktual |
| `index.html` | JSON-LD `url` field | URL website aktual |

---

## 📄 Lisensi

Hak Cipta © 2026 Siteworthy. All rights reserved.
