/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* ── Palet Warna Brand ───────────────────────────── */
      colors: {
        brand: {
          blue:  "#0755E8",   // Electric Blue  – CTA & elemen interaktif
          navy:  "#101F38",   // Deep Navy      – heading & teks utama
          white: "#FFFFFF",   // Pure White     – background dominan
          gray:  "#F1F5F9",   // Soft Gray      – background sekunder
        },
      },

      /* ── Tipografi ───────────────────────────────────── */
      fontFamily: {
        heading: ["Manrope", "system-ui", "sans-serif"],
        body:    ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display":  ["3.5rem",  { lineHeight: "1.1",  letterSpacing: "-0.02em", fontWeight: "800" }],
        "headline": ["2.25rem", { lineHeight: "1.2",  letterSpacing: "-0.01em", fontWeight: "800" }],
        "title":    ["1.5rem",  { lineHeight: "1.3",  letterSpacing: "-0.005em", fontWeight: "700" }],
        "subtitle": ["1.125rem",{ lineHeight: "1.5",  fontWeight: "600" }],
        "body-lg":  ["1.125rem",{ lineHeight: "1.7" }],
        "body":     ["1rem",    { lineHeight: "1.7" }],
        "small":    ["0.875rem",{ lineHeight: "1.5" }],
        "xs":       ["0.75rem", { lineHeight: "1.5" }],
      },

      /* ── Spacing & Layout ────────────────────────────── */
      spacing: {
        "section":  "5rem",     // padding vertikal antar section (80px)
        "section-sm": "3rem",   // padding vertikal section mobile (48px)
      },
      maxWidth: {
        "site": "1200px",       // lebar konten maksimal
      },
      borderRadius: {
        "btn": "0.5rem",        // rounded button (8px)
        "card": "0.75rem",      // rounded card (12px)
      },

      /* ── Shadow ──────────────────────────────────────── */
      boxShadow: {
        "card":  "0 1px 3px rgba(16,31,56,0.06), 0 4px 12px rgba(16,31,56,0.04)",
        "card-hover": "0 4px 16px rgba(16,31,56,0.10), 0 1px 4px rgba(16,31,56,0.06)",
        "nav":   "0 1px 2px rgba(16,31,56,0.05)",
      },

      /* ── Transisi ────────────────────────────────────── */
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
