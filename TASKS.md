# Tugas Implementasi untuk Website Portofolio Siteworthy

Dokumen ini memecah milestone tingkat tinggi dari **Rencana Implementasi** menjadi tugas‑tugas konkret yang dapat ditindaklanjuti. Setiap tugas dapat dilacak secara terpisah (misalnya melalui GitHub Issues atau papan proyek).

---

## 🎯 Ikhtisar Milestone
| Milestone | Deskripsi | Perkiraan Waktu |
|-----------|-----------|-----------------|
| **M1 – Penyiapan Repo** | Inisialisasi proyek, instal Vite, Tailwind, TypeScript, linting, dan formatting. | 2 jam |
| **M2 – Brand & Gaya Global** | Konfigurasi palet warna, tipografi, ekstensi tema Tailwind. | 3 jam |
| **M3 – Layout & Navigasi** | Bangun navbar sticky, scroll‑smooth, dan anchor section. | 4 jam |
| **M4 – Komponen Section** | Implementasi komponen Hero, Services, Portfolio, Why Choose, Process, Contact dengan desain responsif. | 12 jam |
| **M5 – Sistem Data Portofolio** | Buat `portfolio.json`, hook pemuat data, dan map ke UI card. | 3 jam |
| **M6 – SEO & Metadata** | Tambahkan tag SEO statis, Open Graph, JSON‑LD untuk Organization. | 2 jam |
| **M7 – Optimasi Performa** | Pemrosesan gambar, lazy‑loading, code‑splitting, audit Lighthouse. | 3 jam |
| **M8 – Suite Pengujian** | Unit test (Jest/RTL) + E2E test (Cypress) untuk navigasi, responsivitas, aksesibilitas. | 5 jam |
| **M9 – Pipeline CI/CD** | Workflow GitHub Actions untuk lint, test, build, dan deployment ke `gh-pages`. | 2 jam |
| **M10 – Dokumentasi & Penyerahan** | README, panduan kontribusi, daftar placeholder, catatan developer. | 2 jam |
| **M11 – Validasi Akhir** | Jalankan lokal, build produksi, deploy ke branch percobaan, checklist aksesibilitas & performa. | 3 jam |

---

## 📋 Daftar Tugas Rinci

### **M1 – Penyiapan Repository**
1. `git init` dan buat `README.md` berisi judul proyek.
2. Jalankan `npm create vite@latest siteworthy -- --template react-ts`.
3. Tambahkan Tailwind, PostCSS, Autoprefixer (`npm i -D tailwindcss postcss autoprefixer`).
4. Inisialisasi konfigurasi TypeScript (`tsconfig.json`).
5. Instal ESLint, Prettier, `eslint-plugin-jsx-a11y`.
6. Tambahkan script npm dasar: `dev`, `build`, `lint`, `format`, `test`.
7. Commit scaffold awal.

### **M2 – Brand & Gaya Global**
1. Buat `tailwind.config.cjs` dengan warna khusus (`#0755E8`, `#101F38`, `#FFFFFF`, `#F1F5F9`).
2. Perluas `fontFamily` dengan **Manrope** (extra‑bold) untuk heading dan **Inter** untuk body/button.
3. Tambahkan `src/styles/global.css` – Tailwind base, components, utilities; set `html { scroll-behavior: smooth; }`.
4. Verifikasi font ter‑load via Google Fonts (opsional self‑host).
5. Commit perubahan gaya.

### **M3 – Layout & Navigasi**
1. Buat `components/Navbar.tsx` – sticky, responsif (hamburger pada mobile).
2. Implementasikan smooth scroll ke tiap section menggunakan ID anchor (`#hero`, `#services`, …).
3. Pastikan link aktif memiliki style highlight.
4. Tambahkan atribut ARIA untuk aksesibilitas (`aria-label`, `role="navigation"`).
5. Tulis unit test untuk interaksi Navbar.

### **M4 – Komponen Section**
#### Hero
- Logo, navigasi, headline, sub‑headline, tombol CTA utama & sekunder.
- Gambar hero responsif (opsional) dengan lazy‑load.
#### Services
- Empat kartu layanan, masing‑masing dengan ikon, judul, deskripsi singkat, dan daftar manfaat.
- Gunakan CSS Grid, adaptif ke mobile.
#### Portfolio
- Map `portfolio.json` untuk menghasilkan kartu dengan placeholder gambar, nama proyek, kategori, deskripsi, fitur utama, dan tautan Live Demo.
- Sertakan CTA placeholder "Add Project".
#### Why Choose
- Empat kartu value‑prop dengan ikon dan copy singkat.
#### Process
- Timeline / langkah (5 tahapan) dengan ikon dan deskripsi.
#### Contact
- Ikon WhatsApp, email, Instagram yang mengarah ke URL placeholder.
- Tombol CTA utama "Let's Build Your Website".
- Footer dengan logo dan copyright.

Untuk setiap komponen:
- Gunakan HTML semantik (`section`, `article`).
- Tambahkan `tabIndex`, style fokus, dan `aria-label` bila diperlukan.
- Tulis tes Jest + React Testing Library yang merender komponen dan memeriksa keberadaan elemen penting.

### **M5 – Sistem Data Portofolio**
1. Buat `src/data/portfolio.json` dengan tiga entri placeholder (sesuai brief).
2. Tulis hook `usePortfolio` yang mengembalikan JSON ter‑parse (import statis sudah cukup).
3. Perbarui `Portfolio.tsx` untuk memakai hook tersebut dan merender kartu.
4. (Opsional) Tambahkan skrip validasi skema JSON.

### **M6 – SEO & Metadata**
1. Instal `react-helmet-async`.
2. Bungkus aplikasi di `App.tsx` dengan `<HelmetProvider>`.
3. Atur `<title>Siteworthy – Portfolio</title>`, meta description, viewport, dan bahasa (`lang="id"`).
4. Tambahkan tag Open Graph (title, description, image, url).
5. Sisipkan skrip JSON‑LD untuk Organization (nama, URL, logo).

### **M7 – Optimasi Performa**
1. Instal `vite-imagetools` dan konfigurasi di `vite.config.ts`.
2. Konversi gambar placeholder ke WebP, hasilkan `srcset`.
3. Aktifkan lazy‑loading via `loading="lazy"` pada elemen `<img>`.
4. Jalankan audit Lighthouse; perbaiki potensi pekerjaan utama >90 ms.
5. Verifikasi ukuran bundle (`npm run build && grep -i "gzip" dist/*.js`).

### **M8 – Suite Pengujian**
1. Instal Jest, React Testing Library, Cypress.
2. Tulis unit test untuk tiap komponen (render dasar & props).
3. Scenario Cypress: muat homepage, navigasi antar section lewat navbar, pastikan smooth scroll dan urutan fokus.
4. Integrasikan axe‑core dalam Cypress untuk audit aksesibilitas.
5. Tambahkan langkah CI untuk menjalankan `npm test` dan `cypress run`.

### **M9 – Pipeline CI/CD**
1. Buat `.github/workflows/deploy.yml`:
   - checkout, setup Node, instal dependensi.
   - `npm run lint && npm test`.
   - `npm run build`.
   - Deploy folder `dist/` ke branch `gh-pages` menggunakan `peaceiris/actions-gh-pages`.
2. Pastikan pengaturan repository mengaktifkan **GitHub Pages** untuk branch `gh-pages` dengan tipe **Project site**.
3. Tambahkan badge status ke README.

### **M10 – Dokumentasi & Penyerahan**
1. Perluas `README.md` dengan bagian:
   - Overview proyek.
   - Pengembangan lokal (`npm install`, `npm run dev`).
   - Build & deployment (`npm run build`, detail CI).
   - Cara menambah item portofolio baru (edit `portfolio.json`).
   - Cara mengganti placeholder kontak.
2. Tambahkan `CONTRIBUTING.md` dengan panduan gaya kode (eslint + prettier).
3. Daftar semua placeholder yang masih memerlukan data akhir.

### **M11 – Validasi Akhir**
1. Jalankan `npm run dev` secara lokal, verifikasi setiap section tampil baik di mobile, tablet, dan desktop.
2. Eksekusi `npm run build` dan layani folder `dist/` (`npx serve dist`).
3. Periksa apakah link dengan base‑path `/siteworthy/` berfungsi.
4. Jalankan Lighthouse (Performance, Accessibility, Best Practices, SEO) – target nilai >90 untuk semua.
5. Deploy ke **branch percobaan** (`gh-pages-test`) dan pastikan situs live dapat diakses.
6. Perbarui checklist penyerahan akhir di README.

---

## ✅ Checklist Penyelesaian (untuk tim)
- [x] Repo di‑inisialisasi dan dipush ke GitHub (Scaffold M1 selesai).
- [x] Gaya brand telah diterapkan (M2 selesai).
- [x] Layout & Navigasi responsif telah diterapkan (M3 selesai).
- [x] Semua enam section selesai dan responsif (M4 selesai).
- [x] Sumber data portofolio terpisah & berfungsi (M5 selesai).
- [x] Tag meta SEO & metadata tersedia (M6 selesai).
- [x] Gambar telah dioptimasi dan lazy‑load (M7 selesai).
- [x] Unit test lulus 100% (M8 selesai).
- [x] Pipeline CI berhasil dan auto‑deploy. (M9 selesai)
- [x] Dokumentasi lengkap. (M10 selesai)
- [x] Validasi akhir selesai serta URL deployment dibagikan. (M11 selesai)

---

*Silakan menyalin tugas‑tugas ini ke papan proyek Anda atau membuat issue GitHub secara langsung dari daftar.*