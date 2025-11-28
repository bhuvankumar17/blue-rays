import { Services } from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Products Chennai | Waaree, Adani, Tata Solar Panels & Inverters",
  description: "Premium solar panels & inverters in Chennai. Waaree, Adani, Tata, ReNew, Rayzon panels. Growatt, Eastman inverters. Hot dip galvanized mounting structures.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Services />
    </main>
  );
}
