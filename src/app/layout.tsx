import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blue Rays Green Energy - Solar Panel Installation in Chennai | Residential & Commercial Solar Solutions",
  description: "Top solar panel installation company in Chennai. Get ₹30,000-₹78,000 govt subsidy. Expert residential & commercial solar solutions. Free consultation. Call +91 9600970313",
  keywords: ["solar panels Chennai", "solar installation Chennai", "solar panel company Chennai", "residential solar Chennai", "commercial solar Chennai", "solar energy Tamil Nadu", "Blue Rays Green Energy", "solar subsidy Chennai", "rooftop solar Chennai"],
  authors: [{ name: "Blue Rays Green Energy" }],
  openGraph: {
    title: "Blue Rays Green Energy - Solar Panel Installation Chennai",
    description: "Leading solar panel installation company in Chennai. Residential & commercial solar solutions with government subsidy.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
