import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyChoose from "./components/WhyChoose";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-white">
      {/* ── Fixed Sticky Navigation ────────────────────── */}
      <Navbar />

      {/* ── Main Layout (6 Sections) ───────────────────── */}
      <main className="flex-1">
        {/* SECTION 01: HERO */}
        <Hero
          onExploreWork={() => scrollTo("portfolio")}
          onConsultation={() => scrollTo("contact")}
        />

        {/* SECTION 02: SERVICES */}
        <Services />

        {/* SECTION 03: DEMO WORKS / PORTOFOLIO */}
        <Portfolio />

        {/* SECTION 04: WHY CHOOSE SITEWORTHY */}
        <WhyChoose />

        {/* SECTION 05: OUR PROCESS */}
        <Process />

        {/* SECTION 06: CONTACT */}
        <Contact />
      </main>

      {/* ── Footer ─────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
