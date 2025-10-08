import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BR Green Energy - Solar Panel Solutions",
  description: "Leading provider of sustainable solar energy solutions. Professional solar panel installation for residential and commercial properties.",
  keywords: ["solar panels", "renewable energy", "solar installation", "solar power", "clean energy", "BR green energy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
