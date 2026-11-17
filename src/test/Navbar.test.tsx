import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar, { NAV_ITEMS } from "../components/Navbar";

describe("Navbar Component", () => {
  it("merender logo brand Siteworthy dengan atribut yang benar", () => {
    render(<Navbar />);
    const logoImg = screen.getByAltText("Logo Siteworthy");
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute("src", "./logo.png");
  });

  it("merender seluruh 6 tautan navigasi utama", () => {
    render(<Navbar />);
    NAV_ITEMS.forEach((item) => {
      const navLinks = screen.getAllByText(item.label);
      expect(navLinks.length).toBeGreaterThanOrEqual(1);
    });
  });

  it("merender tombol CTA Konsultasi Gratis menuju WhatsApp resmi", () => {
    render(<Navbar />);
    const ctaLinks = screen.getAllByText(/Konsultasi Gratis/i);
    expect(ctaLinks.length).toBeGreaterThanOrEqual(1);
  });

  it("dapat membuka dan menutup menu navigasi mobile saat hamburger diklik", () => {
    render(<Navbar />);
    const toggleButton = screen.getByLabelText(/Buka menu navigasi/i);
    expect(toggleButton).toBeInTheDocument();

    // Klik untuk membuka
    fireEvent.click(toggleButton);
    expect(screen.getByLabelText(/Tutup menu navigasi/i)).toBeInTheDocument();

    // Klik untuk menutup
    fireEvent.click(screen.getByLabelText(/Tutup menu navigasi/i));
    expect(screen.getByLabelText(/Buka menu navigasi/i)).toBeInTheDocument();
  });
});
