import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
      
      {/* Desktop: Show brief sections with links to full pages */}
      <div className="hidden md:block">
        <AboutPreview />
        <ServicesPreview />
        <GalleryPreview />
        <ContactPreview />
      </div>
      
      {/* Mobile: Keep single page scroll experience */}
      <div className="md:hidden">
        <About />
        <Services />
        <GallerySection />
        <ContactForm />
      </div>
    </main>
  );
}

function AboutPreview() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl text-center">
        <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wide">ABOUT US</span>
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 mt-2">
          Tamil Nadu&apos;s Trusted Solar Partner
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Blue Rays Green Energy is a leading solar solutions provider in Tamil Nadu, delivering high-quality residential and commercial solar installations with government subsidy support.
        </p>
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-cyan-600 mb-2">500+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-cyan-600 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-cyan-600 mb-2">32</div>
            <div className="text-gray-600">Districts Covered</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-cyan-600 mb-2">25yr</div>
            <div className="text-gray-600">Warranty</div>
          </div>
        </div>
        <Link href="/about">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all font-semibold shadow-xl text-lg">
            Learn More About Us →
          </button>
        </Link>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section id="products" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl text-center">
        <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wide">OUR SERVICES</span>
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 mt-2">
          Complete Solar Solutions
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          From residential rooftops to large-scale commercial installations, we provide end-to-end solar solutions tailored to your needs.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏠</span>
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Residential Solar</h3>
            <p className="text-gray-600 mb-4">1KW to 10KW systems for homes with govt subsidy up to ₹78,000</p>
            <Link href="/residential" className="text-cyan-600 font-semibold hover:text-cyan-700">
              Learn More →
            </Link>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏢</span>
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Commercial Solar</h3>
            <p className="text-gray-600 mb-4">Large-scale installations for businesses with accelerated depreciation benefits</p>
            <Link href="/commercial" className="text-cyan-600 font-semibold hover:text-cyan-700">
              Learn More →
            </Link>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏭</span>
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Industrial Solar</h3>
            <p className="text-gray-600 mb-4">High-capacity solar plants for industries with maximum power generation</p>
            <Link href="/products" className="text-cyan-600 font-semibold hover:text-cyan-700">
              Learn More →
            </Link>
          </div>
        </div>
        <Link href="/products">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all font-semibold shadow-xl text-lg">
            View All Products →
          </button>
        </Link>
      </div>
    </section>
  );
}

function GalleryPreview() {
  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl text-center">
        <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wide">GALLERY</span>
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 mt-2">
          Our Recent Projects
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Explore our solar installation projects across Tamil Nadu - from residential rooftops to commercial buildings.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
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
        <Link href="/gallery">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all font-semibold shadow-xl text-lg">
            View Full Gallery →
          </button>
        </Link>
      </div>
    </section>
  );
}

function ContactPreview() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-blue-900">
      <div className="container mx-auto max-w-4xl text-center">
        <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">GET IN TOUCH</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-2">
          Ready to Go Solar?
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          Get a free site survey and consultation. Our team will help you find the perfect solar solution for your needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="/contact">
            <button className="px-8 py-4 bg-gradient-to-r from-lime-400 to-lime-500 text-blue-900 rounded-lg hover:from-lime-500 hover:to-lime-600 transition-all font-bold shadow-xl text-lg">
              Get Free Quote →
            </button>
          </Link>
          <a href="tel:+919600970313">
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white/20 transition-all font-semibold text-lg">
              📞 Call: +91 9600970313
            </button>
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/80">
          <div className="flex items-center justify-center gap-2">
            <span>✓</span> Free Site Survey
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>✓</span> Govt Subsidy Support
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>✓</span> Same Day Response
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
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
        <div className="max-w-6xl mx-auto mb-16 px-4 sm:px-0">
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

      </div>
    </section>
  );
}
