import { useState, useEffect } from "react";

/**
 * Hook yang mendeteksi section mana yang sedang aktif
 * berdasarkan posisi scroll. Digunakan untuk highlight
 * link navigasi yang sesuai.
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");

  useEffect(() => {
    // Handler khusus untuk ujung atas dan bawah halaman
    const handleScrollEdges = () => {
      if (window.scrollY < 80) {
        setActiveSection(sectionIds[0] || "");
      } else if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        setActiveSection(sectionIds[sectionIds.length - 1] || "");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        // Jika sedang di ujung atas/bawah, biarkan edge handler yang bekerja
        if (window.scrollY < 80) {
          setActiveSection(sectionIds[0] || "");
          return;
        }
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
          setActiveSection(sectionIds[sectionIds.length - 1] || "");
          return;
        }

        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((prev, curr) =>
            curr.intersectionRatio > prev.intersectionRatio ? curr : prev
          );
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        rootMargin: "-15% 0px -50% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScrollEdges, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollEdges);
    };
  }, [sectionIds]);

  return activeSection;
}
