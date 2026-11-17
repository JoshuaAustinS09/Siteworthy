/**
 * Konfigurasi kontak bisnis Siteworthy.
 *
 * Ganti placeholder di bawah dengan informasi sebenarnya
 * saat sudah tersedia. Seluruh komponen Contact & CTA
 * merujuk ke file ini sebagai satu-satunya sumber kontak.
 */

export const contactConfig = {
  whatsapp: {
    number: "6281234567890", // ganti dengan nomor WhatsApp bisnis
    message: "Halo Siteworthy, saya tertarik untuk konsultasi pembuatan website.",
    get url() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    },
  },
  email: {
    address: "hello@siteworthy.id", // ganti dengan email bisnis
    get url() {
      return `mailto:${this.address}`;
    },
  },
  instagram: {
    handle: "siteworthy.id", // ganti dengan username Instagram
    get url() {
      return `https://instagram.com/${this.handle}`;
    },
  },
} as const;
