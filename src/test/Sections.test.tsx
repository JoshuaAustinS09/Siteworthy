import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import WhyChoose from "../components/WhyChoose";
import Process from "../components/Process";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

describe("Services Component", () => {
  it("merender 4 layanan bisnis yang ditawarkan Siteworthy", () => {
    render(<Services />);
    expect(screen.getByText("Business Website")).toBeInTheDocument();
    expect(screen.getByText("Landing Page")).toBeInTheDocument();
    expect(screen.getByText("Company Profile Website")).toBeInTheDocument();
    expect(screen.getByText("Website Redesign")).toBeInTheDocument();
  });

  it("menampilkan penjelasan manfaat bisnis bagi klien", () => {
    render(<Services />);
    const benefits = screen.getAllByText(/Manfaat Bisnis:/i);
    expect(benefits.length).toBe(4);
  });
});

describe("Portfolio Component", () => {
  it("memuat dan merender proyek portofolio dari data JSON", () => {
    render(<Portfolio />);
    expect(screen.getAllByText("Maison Kitchen").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Batik Tradisi Semarang").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Klinik Pratama Sehat Bersama").length).toBeGreaterThanOrEqual(1);
  });

  it("menampilkan label preview demonstrasi secara transparan", () => {
    render(<Portfolio />);
    const badges = screen.getAllByText(/Preview Demonstrasi/i);
    expect(badges.length).toBeGreaterThanOrEqual(1);
  });
});

describe("WhyChoose Component", () => {
  it("merender 4 value proposition utama", () => {
    render(<WhyChoose />);
    expect(screen.getByText("Modern and Responsive Design")).toBeInTheDocument();
    expect(screen.getByText("User-Friendly Experience")).toBeInTheDocument();
    expect(screen.getByText("Affordable Solutions for UMKM")).toBeInTheDocument();
    expect(screen.getByText("Direct Communication")).toBeInTheDocument();
  });
});

describe("Process Component", () => {
  it("merender seluruh 5 tahapan alur kerja", () => {
    render(<Process />);
    expect(screen.getByText("Consultation")).toBeInTheDocument();
    expect(screen.getByText("Planning")).toBeInTheDocument();
    expect(screen.getByText("Design & Development")).toBeInTheDocument();
    expect(screen.getByText("Review & Revision")).toBeInTheDocument();
    expect(screen.getByText("Launch")).toBeInTheDocument();
  });
});

describe("Contact Component", () => {
  it("merender 3 saluran kontak resmi (WhatsApp, Email, Instagram)", () => {
    render(<Contact />);
    expect(screen.getByText("WhatsApp")).toBeInTheDocument();
    expect(screen.getByText("Email Resmi")).toBeInTheDocument();
    expect(screen.getByText("Instagram")).toBeInTheDocument();
    expect(screen.getByText(/2500-5978/)).toBeInTheDocument();
    expect(screen.getByText(/josh\.app76@gmail\.com/i)).toBeInTheDocument();
    expect(screen.getByText(/joshua\.as_/i)).toBeInTheDocument();
  });

  it("menjelaskan pendekatan fleksibel Request a Quote tanpa harga fiktif", () => {
    render(<Contact />);
    expect(
      screen.getByText(/Pendekatan Berbasis Kebutuhan \(Request a Quote\)/i)
    ).toBeInTheDocument();
  });
});

describe("Footer Component", () => {
  it("merender logo Siteworthy, informasi layanan online, dan copyright", () => {
    render(<Footer />);
    expect(screen.getByText(/Layanan Berbasis Online/i)).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });
});
