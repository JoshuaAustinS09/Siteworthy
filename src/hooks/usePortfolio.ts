import { useMemo } from "react";
import portfolioDataRaw from "../data/portfolio.json";

export interface PortfolioProject {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  demoUrl: string;
  status: "placeholder" | "live";
}

/**
 * Custom Hook untuk memuat dan mengelola data portofolio Siteworthy.
 * Memisahkan data JSON dari komponen visual UI agar penambahan
 * proyek baru di kemudian hari sangat mudah tanpa mengubah markup komponen.
 */
export function usePortfolio(): {
  projects: PortfolioProject[];
  totalProjects: number;
} {
  const projects = useMemo(() => {
    return portfolioDataRaw as PortfolioProject[];
  }, []);

  return {
    projects,
    totalProjects: projects.length,
  };
}
