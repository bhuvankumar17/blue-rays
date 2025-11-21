"use client";

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function CommercialSolutions() {
  const scopeOfServices = [
    {
      title: "Site survey & data collection",
      description: "Comprehensive on-site assessment and data gathering"
    },
    {
      title: "Load analysis & system sizing",
      description: "Detailed energy consumption analysis and optimal system design"
    },
    {
      title: "PV layout & mechanical design",
      description: "Professional photovoltaic panel layout and structural planning"
    },
    {
      title: "Electrical design",
      description: "Complete electrical system design and specifications"
    },
    {
      title: "Performance modelling & financial analysis",
      description: "ROI calculations and energy production forecasting"
    },
    {
      title: "Permitting & utility interconnection",
      description: "Complete handling of permits and grid connection approvals"
    },
    {
      title: "Procurement & contracting",
      description: "Equipment sourcing and contract management"
    },
    {
      title: "Construction and installation",
      description: "Professional installation by certified technicians"
    },
    {
      title: "Commissioning & testing",
      description: "System testing and performance verification"
    },
    {
      title: "Operations & maintenance (O&M)",
      description: "Ongoing maintenance and monitoring services"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Commercial Solar Solutions</h1>
          <p className="text-xl text-gray-600 mb-4">
            Comprehensive solar energy solutions for businesses, offices, and commercial establishments
          </p>
          <p className="text-lg text-cyan-700 font-semibold">
            ✓ End-to-end project management from design to maintenance
          </p>
        </div>

        {/* Commercial Installation Image */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-cyan-100">
            <Image
              src="/images/commercial-hero.jpg"
              alt="Commercial Solar Panel Installation"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">Professional Commercial Installation</h3>
                <p className="text-lg text-lime-400 drop-shadow-[0_0_10px_rgba(163,230,53,0.6)]">High-efficiency solar systems designed for maximum ROI</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scope of Services */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Scope of Service
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {scopeOfServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-cyan-600 mt-1" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Commercial Solar System Diagrams */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Solar System Architecture
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Commercial Image 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
              <div className="relative h-[300px] md:h-[350px]">
                <Image
                  src="/images/commercial-1.png"
                  alt="Stand-Alone Solar PV System Architecture"
                  fill
                  className="object-contain p-4"
                  quality={90}
                />
              </div>
              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50">
                <h3 className="text-lg font-bold text-blue-900 text-center">Stand-Alone Solar PV System</h3>
              </div>
            </div>

            {/* Commercial Image 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
              <div className="relative h-[300px] md:h-[350px]">
                <Image
                  src="/images/commercial-2.png"
                  alt="On-Grid Solar Structure"
                  fill
                  className="object-contain p-4"
                  quality={90}
                />
              </div>
              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50">
                <h3 className="text-lg font-bold text-blue-900 text-center">On-Grid Structure</h3>
              </div>
            </div>

            {/* Off-Grid Structure */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
              <div className="relative h-[300px] md:h-[350px]">
                <Image
                  src="/images/off-grid.png"
                  alt="Off-Grid Solar Electricity Production System"
                  fill
                  className="object-contain p-4"
                  quality={90}
                />
              </div>
              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50">
                <h3 className="text-lg font-bold text-blue-900 text-center">Off-Grid Structure</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Why Choose Commercial Solar?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">
                Cost Savings
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Reduce electricity bills by up to 90%
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Quick ROI within 3-5 years
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Protection against rising energy costs
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">
                Environmental Impact
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                  Reduce carbon footprint significantly
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                  Demonstrate corporate sustainability
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                  Meet green building certifications
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">
                Energy Independence
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Reliable and consistent power supply
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Reduced dependence on grid
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Business continuity assurance
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-4xl mx-auto bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Power Your Business with Solar?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free consultation and customized solar solution for your commercial property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button suppressHydrationWarning className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold shadow-xl text-lg">
                Request Free Quote
              </button>
            </Link>
            <a href="tel:+919600970313">
              <button suppressHydrationWarning className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-xl hover:bg-white/20 transition-all font-semibold text-lg">
                Call: +91 9600970313
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
