import { Hero } from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Panel Installation Tamil Nadu | Chennai, Coimbatore, Madurai - Blue Rays Green Energy",
  description: "Transform your roof into a power plant. #1 solar company in Tamil Nadu. Serving 32+ districts. Govt subsidy up to ₹78,000. Waaree, Adani, Tata panels. Free site survey. Call +91 9600970313",
  keywords: "solar panels Tamil Nadu, solar installation Chennai, best solar company Tamil Nadu, solar panels Coimbatore, solar Madurai, TANGEDCO solar, Tamil Nadu solar subsidy",
  alternates: {
    canonical: "https://www.blueraysgreenenergy.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
    </main>
  );
}
