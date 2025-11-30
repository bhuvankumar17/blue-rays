import { About } from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Blue Rays Green Energy | Leading Solar Company in Tamil Nadu",
  description: "Learn about Tamil Nadu's most trusted solar company. 5000+ installations across Chennai, Coimbatore, Madurai. ISO certified. Expert team. 30-year warranty. Government subsidy support.",
  keywords: "about blue rays, solar company tamil nadu, best solar company chennai, solar installation experts, TANGEDCO approved solar, ISO certified solar company",
  alternates: {
    canonical: "https://www.blueraysgreenenergy.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <About />
    </main>
  );
}
