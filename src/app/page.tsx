import { Hero } from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Solar Panel Installation Chennai | Blue Rays Green Energy",
  description: "Transform your roof into a power plant. Best solar panel installation in Chennai with govt subsidy up to ₹78,000. Waaree, Adani, Tata panels. Free quote.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
    </main>
  );
}
