import { portfolioItems } from "@/data/portfolio";
import PortfolioGrid from "@/components/PortfolioGrid";
import SectionHeading from "@/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — The Chungaimna",
  description: "Browse the visual portfolio of The Chungaimna — photography, videography, and creative direction.",
};

export default function PortfolioPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Portfolio"
          subtitle="Photography &bull; Videography &bull; Creative Direction"
        />
        <PortfolioGrid items={portfolioItems} />
      </div>
    </section>
  );
}
