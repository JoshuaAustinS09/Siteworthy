# Panduan Kontribusi – Siteworthy

Dokumen ini menjelaskan standar kode dan alur kerja yang harus diikuti ketika berkontribusi pada proyek ini.

---

## 🧑‍💻 Prasyarat

| Tool | Versi Minimum |
|------|---------------|
| Node.js | 22.x |
| npm | 10.x |
| Git | 2.x |

---

## 📐 Standar Kode

### TypeScript
- Gunakan **strict mode** (sudah diaktifkan di `tsconfig.json`).
- Selalu definisikan tipe eksplisit untuk props dan return value fungsi.
- Hindari penggunaan `any`; gunakan `unknown` jika tipe tidak diketahui.

### React
- Gunakan **functional components** saja (bukan class component).
- Pisahkan logika ke custom hooks di `src/hooks/`.
- Data statis (kontak, portofolio) di `src/data/`.

### Styling (Tailwind CSS)
- Gunakan utility class Tailwind secara langsung.
- Gunakan class komponen yang telah didefinisikan di `src/index.css` (`.btn-primary`, `.card`, `.section`, dll.) bila tersedia.
- Hindari inline `style` kecuali untuk nilai dinamis yang tidak bisa dilakukan dengan Tailwind.

### Aksesibilitas
- Setiap elemen interaktif harus memiliki `aria-label` atau teks yang terlihat.
- Gunakan elemen HTML semantik (`<nav>`, `<section>`, `<article>`, `<main>`, `<footer>`).
- Pastikan semua gambar memiliki atribut `alt` yang deskriptif.
- Target kontras warna minimal WCAG AA (rasio 4.5:1 untuk teks normal).

---

## 🔧 Perintah Pengembangan

```bash
# Development server
npm run dev

# Linting (wajib lulus sebelum commit)
npm run lint

# Format kode
npm run format

# Jalankan semua unit tests
npm run test

# Unit test mode watch (untuk development aktif)
npm run test:watch

# Build produksi
npm run build
```

---

## ✅ ESLint

Konfigurasi ESLint tersimpan di [`eslint.config.js`](eslint.config.js).

Plugin aktif:
- `eslint` (rules standar)
- `eslint-plugin-jsx-a11y` (aksesibilitas)
- `@typescript-eslint` (TypeScript-specific rules)

Jalankan sebelum commit:
```bash
npm run lint
```

Pastikan **0 error dan 0 warning** sebelum membuat PR.

---

## 🎨 Prettier

Konfigurasi Prettier tersimpan di [`.prettierrc`](.prettierrc).

Format kode:
```bash
npm run format
```

---

## 🔀 Alur Kerja Git

### Branch
- `main` → branch utama, dilindungi oleh CI
- `feature/<nama>` → fitur baru
- `fix/<nama>` → perbaikan bug
- `docs/<nama>` → perubahan dokumentasi

### Commit Message

Gunakan format **Conventional Commits**:

```
<type>: <deskripsi singkat>

[body opsional]
```

Tipe yang valid:
| Tipe | Kapan Digunakan |
|------|-----------------|
| `feat` | Fitur baru |
| `fix` | Perbaikan bug |
| `perf` | Peningkatan performa |
| `style` | Perubahan styling/CSS |
| `test` | Menambah/mengubah test |
| `docs` | Perubahan dokumentasi |
| `ci` | Perubahan konfigurasi CI/CD |
| `chore` | Maintenance, dependensi, dsb. |
| `refactor` | Refactoring tanpa perubahan fungsional |

Contoh:
```
feat: tambahkan animasi fade-in pada section Hero
fix: perbaiki hamburger menu tidak tertutup saat klik link
docs: perbarui README dengan panduan deployment
```

---

## 🧪 Pengujian

Semua kontribusi harus disertai atau memperbarui unit test yang relevan.

- File test berada di `src/test/*.test.tsx`
- Gunakan **Vitest** + **React Testing Library**
- Pastikan `npm run test` lulus **100%** sebelum membuat PR

---

## 🚀 Pull Request

1. Fork repository dan buat branch dari `main`.
2. Pastikan `npm run lint` → 0 error.
3. Pastikan `npm run test` → semua test lulus.
4. Pastikan `npm run build` → berhasil tanpa error.
5. Buat PR dengan deskripsi perubahan yang jelas.
6. CI pipeline akan berjalan otomatis untuk memvalidasi perubahan.
