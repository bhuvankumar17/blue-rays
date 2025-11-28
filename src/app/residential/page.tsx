import { ResidentialSolutions } from "@/components/ResidentialSolutions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Solar Solutions Chennai | Home Solar Panels with Subsidy",
  description: "Install rooftop solar panels for your home in Chennai. Get govt subsidy ₹30k-₹78k. 1KW to 10KW systems. Reduce electricity bills by 90%. Free site survey.",
};

export default function ResidentialPage() {
  return (
    <main className="min-h-screen pt-20">
      <ResidentialSolutions />
    </main>
  );
}
