/**
 * Konfigurasi kontak bisnis Siteworthy.
 * Sumber resmi dari PROJECT_BRIEF.md Section 9:
 * - WhatsApp: 081225005978 (format internasional: 6281225005978)
 * - Email: josh.app76@gmail.com
 * - Instagram: joshua.as_
 */

export const contactConfig = {
  whatsapp: {
    number: "6281225005978",
    display: "+62 812-2500-5978",
    message:
      "Halo Siteworthy, saya ingin berkonsultasi mengenai pembuatan website untuk bisnis saya.",
    get url() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    },
  },
  email: {
    address: "josh.app76@gmail.com",
    get url() {
      return `mailto:${this.address}?subject=${encodeURIComponent("Konsultasi Website Siteworthy")}`;
    },
  },
  instagram: {
    handle: "joshua.as_",
    get url() {
      return `https://instagram.com/${this.handle}`;
    },
  },
} as const;
