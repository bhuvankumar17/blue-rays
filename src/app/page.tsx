import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Solar Panel Services in Namakkal | Bluerays Green Energy",
  description: "Bluerays Green Energy provides reliable solar panel services in Namakkal, ensuring smart, cost-saving installation and maintenance for every customer.",
  keywords: "solar panels Namakkal, solar installation Salem, solar company Tamil Nadu, solar panels Coimbatore, rooftop solar installation, residential solar panels",
  alternates: {
    canonical: "https://www.blueraysgreenenergy.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <GallerySection />
      <ContactForm />
    </main>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wide">GALLERY</span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 mt-2">
            Rooftop Solar Panel Installation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bluerays Green Energy specializes in rooftop solar panel installation, providing durable, high-quality systems designed for long-term performance and savings.
          </p>
        </div>

        {/* Video Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Featured Project Videos
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video
                controls
                className="w-full h-auto"
                poster="/images/commercial-hero.jpg"
              >
                <source src="/images/v1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50">
                <h4 className="text-lg font-bold text-blue-900 text-center">Solar Installation Project 1</h4>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video
                controls
                className="w-full h-auto"
                poster="/images/hero-background.jpg"
              >
                <source src="/images/v2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50">
                <h4 className="text-lg font-bold text-blue-900 text-center">Solar Installation Project 2</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Images Grid */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Installation Gallery
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <Image
                src="/images/commercial-hero.jpg"
                alt="Commercial Installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <Image
                src="/images/technician-installation.jpg"
                alt="Technician at Work"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <Image
                src="/images/hero-background.jpg"
                alt="Solar Panel Field"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
