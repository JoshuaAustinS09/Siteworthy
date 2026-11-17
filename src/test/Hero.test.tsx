import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Hero from "../components/Hero";

describe("Hero Component", () => {
  it("merender headline utama brand dengan benar", () => {
    render(<Hero onExploreWork={() => {}} onConsultation={() => {}} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(/Your Business Deserves a/i);
    expect(heading).toHaveTextContent(/Better Website/i);
  });

  it("memanggil callback onExploreWork saat tombol Explore Our Work diklik", () => {
    const handleExplore = vi.fn();
    render(<Hero onExploreWork={handleExplore} onConsultation={() => {}} />);
    const button = screen.getByRole("button", { name: /Explore Our Work/i });
    fireEvent.click(button);
    expect(handleExplore).toHaveBeenCalledTimes(1);
  });

  it("memanggil callback onConsultation saat tombol konsultasi diklik", () => {
    const handleConsultation = vi.fn();
    render(<Hero onExploreWork={() => {}} onConsultation={handleConsultation} />);
    const ctaLink = screen.getByText(/Get a Free Consultation/i);
    fireEvent.click(ctaLink);
    expect(handleConsultation).toHaveBeenCalledTimes(1);
  });

  it("menampilkan trust highlights khusus UMKM", () => {
    render(<Hero onExploreWork={() => {}} onConsultation={() => {}} />);
    expect(screen.getByText(/Khusus Bisnis & UMKM/i)).toBeInTheDocument();
    expect(screen.getByText(/Desain Responsif & Cepat/i)).toBeInTheDocument();
    expect(screen.getByText(/Komunikasi Langsung Tanpa Perantara/i)).toBeInTheDocument();
  });
});
