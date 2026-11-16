# Gambaran Arsitektur

Dokumen ini menjelaskan arsitektur tingkat tinggi dari **website portofolio Siteworthy**, disusun berdasarkan project brief dan rencana implementasi.

---

## 1. Teknologi yang Digunakan
| Lapisan | Teknologi | Alasan |
|---------|-----------|--------|
| **Build / Bundler** | **Vite** (React + TypeScript) atau **Astro** (framework‑agnostic) | Server pengembangan cepat, output statis tanpa konfigurasi, mudah dipasang ke GitHub Pages. |
| **UI / Styling** | **Tailwind CSS** (utility‑first) | Kontrol tepat atas spasi, warna, dan menghindari pola UI yang tidak diinginkan (gradient, glassmorphism, dll.). |
| **Model Komponen** | **React** (functional components) | Reusabilitas, ekosistem luas, dukungan TypeScript, bantuan aksesibilitas. |
| **Routing / Navigasi** | Scroll‑single‑page tanpa hash (`scroll-behavior: smooth`) | Tidak memakai router sisi‑klien → menghindari 404 saat reload di GitHub Pages. |
| **Pemrosesan Gambar** | **vite-imagetools** (WebP, ukuran responsif) + lazy‑loading | Mengoptimalkan ukuran aset, meningkatkan performa pada koneksi terbatas. |
| **SEO / Metadata** | **react-helmet-async** (atau Astro `head`) | Menyisipkan tag SEO statis, Open Graph, serta JSON‑LD untuk Organization. |
| **Pengujian** | **Jest** + **React Testing Library** (unit) <br> **Cypress** (end‑to‑end) | Memastikan komponen berfungsi, alur navigasi, serta kepatuhan aksesibilitas. |
| **Lint / Formatting** | **ESLint** (termasuk `eslint-plugin-jsx-a11y`) + **Prettier** | Menegakkan kualitas kode dan standar aksesibilitas. |
| **CI / CD** | **GitHub Actions** yang menjalankan lint, test, build, lalu mengirim folder `dist/` ke branch `gh-pages`. | Deploy otomatis ke GitHub Pages (project site). |
| **Version Control** | **Git** | Alur kerja kolaborasi standar. |

---

## 2. Struktur Proyek
```
siteworthy/                     # akar repository
├─ public/                     # file statis (favicon, logo, placeholder images)
│   ├─ favicon.ico
│   └─ logo.svg
├─ src/                        # kode sumber
│   ├─ assets/                 # gambar yang diproses (hasil vite-imagetools)
│   ├─ components/             # komponen UI React, satu per section
│   │   ├─ Navbar.tsx
│   │   ├─ Hero.tsx
│   │   ├─ Services.tsx
│   │   ├─ Portfolio.tsx
│   │   ├─ WhyChoose.tsx
│   │   ├─ Process.tsx
│   │   └─ Contact.tsx
│   ├─ data/                   # sumber data JSON/YAML (portofolio, placeholder kontak)
│   │   └─ portfolio.json
│   ├─ hooks/                  # hook UI yang dapat dipakai ulang (mis. useScrollReveal)
│   ├─ styles/                 # konfigurasi Tailwind, CSS global
│   └─ App.tsx                 # komponen root yang merangkai enam section
├─ .github/                    # konfigurasi GitHub Actions
│   └─ workflows/
│       └─ deploy.yml
├─ index.html                  # entry point (Vite akan menyuntikkan script)
├─ package.json                # dependensi & script npm
├─ tsconfig.json               # konfigurasi TypeScript
├─ vite.config.ts              # kustomisasi Vite (base path, plugin gambar)
└─ README.md                   # overview proyek & panduan developer
```

---

## 3. Alur Data
1. **Aset Statis** – Gambar yang diletakkan di `public/` atau diproses lewat `vite-imagetools` akan dikeluarkan ke folder `dist/` pada saat build.
2. **Data Portofolio** – `src/data/portfolio.json` di‑import oleh `Portfolio.tsx`. Menambah proyek baru cukup menambahkan entri JSON; tidak perlu mengubah komponen.
3. **Link Kontak** – `Contact.tsx` menggunakan konfigurasi kecil `contactConfig.js` (dibuat nanti) yang menyimpan URL WhatsApp, email, dan Instagram.
4. **Hasil Build** – Vite menghasilkan bundle statis (`index.html`, CSS, JS) yang dapat langsung disajikan oleh GitHub Pages.

---

## 4. Pertimbangan Deploy
* **Base Path** – Karena situs akan diakses lewat `https://<USERNAME>.github.io/siteworthy/`, opsi `base` pada Vite diatur menjadi `/siteworthy/`. Semua URL aset dibuat relatif terhadap base tersebut.
* **GitHub Actions** – Workflow akan meng‑checkout repo, menginstal dependensi, menjalankan lint & test, membangun situs, lalu mem‑push folder `dist/` ke branch `gh-pages`. Branch `gh-pages` dikonfigurasi sebagai *project site* pada pengaturan repository.
* **Tanpa Backend** – Semua interaksi kontak berupa tautan `mailto:` atau tautan eksternal; tidak ada pemrosesan sisi‑server, sehingga memenuhi persyaratan “hanya statis”.

---

## 5. Jaminan Aksesibilitas & Performa
* Elemen HTML semantik (`header`, `nav`, `section`, `footer`).
* Navigasi dapat diakses lewat keyboard dengan state fokus yang jelas.
* Kontras warna memenuhi WCAG AA untuk palet yang ditetapkan.
* Gambar di‑lazy‑load dan disajikan dalam format modern (WebP) bila didukung.
* Bundle JavaScript tetap di bawah 150 KB setelah gzip (karena tidak memakai library UI yang berat).

---

*Arsitektur ini sepenuhnya mengikuti batasan dan tujuan yang didefinisikan dalam PROJECT_BRIEF.md.*