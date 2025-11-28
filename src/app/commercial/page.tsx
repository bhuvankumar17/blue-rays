import { CommercialSolutions } from "@/components/CommercialSolutions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Solar Solutions Chennai | Industrial Solar Panel Installation",
  description: "Complete commercial solar solutions for businesses in Chennai. On-grid, off-grid systems. Reduce energy costs by 90%. End-to-end project management. Free consultation.",
};

export default function CommercialPage() {
  return (
    <main className="min-h-screen pt-20">
      <CommercialSolutions />
    </main>
  );
}
