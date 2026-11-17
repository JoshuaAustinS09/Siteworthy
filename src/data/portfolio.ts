/**
 * Data portofolio Siteworthy.
 *
 * Setiap proyek baru cukup ditambahkan sebagai entri baru
 * di array ini. Komponen Portfolio akan otomatis merender‑nya.
 *
 * Status: "placeholder" | "live"
 */

export interface PortfolioProject {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string; // path relatif ke gambar preview
  demoUrl: string;
  status: "placeholder" | "live";
}

export const portfolioData: PortfolioProject[] = [
  {
    id: "project-1",
    name: "Warung Makan Sejahtera",
    category: "Business Website",
    description:
      "Website profesional untuk restoran lokal yang menampilkan menu, lokasi, dan sistem reservasi sederhana.",
    features: ["Desain Responsif", "Menu Digital", "Integrasi Google Maps", "WhatsApp Order"],
    image: "/placeholder-project.svg",
    demoUrl: "#",
    status: "placeholder",
  },
  {
    id: "project-2",
    name: "Batik Nusantara",
    category: "Company Profile",
    description:
      "Company profile modern untuk bisnis batik yang menampilkan koleksi produk dan cerita di balik brand.",
    features: ["Galeri Produk", "Brand Story", "Katalog Online", "Kontak Langsung"],
    image: "/placeholder-project.svg",
    demoUrl: "#",
    status: "placeholder",
  },
  {
    id: "project-3",
    name: "Klinik Sehat Bersama",
    category: "Landing Page",
    description:
      "Landing page informatif untuk klinik kesehatan yang memudahkan pasien menemukan layanan dan jadwal dokter.",
    features: ["Jadwal Praktik", "Daftar Layanan", "Profil Dokter", "Tombol WhatsApp"],
    image: "/placeholder-project.svg",
    demoUrl: "#",
    status: "placeholder",
  },
];
