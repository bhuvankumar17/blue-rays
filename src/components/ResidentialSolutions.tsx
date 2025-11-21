"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import Image from "next/image";

export function ResidentialSolutions() {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Residential Solar Solutions</h1>
          <p className="text-xl text-gray-600 mb-4">Invest ₹20,000 for your 3kW home solar system with Govt. subsidy - repay with bank loan ₹2,000/Month instead of electrical bill and get free electric bill after 5 years.</p>
          <p className="text-lg text-cyan-700 font-semibold">✓ A to Z documents services for subsidy claiming</p>
        </div>

        {/* Main Content */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Key Features */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-blue-900 mb-6 bg-orange-500 text-white px-4 py-2 rounded-lg inline-block">Key Features</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Net metering
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Environment friendly
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Carbon footprint reduction
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Increase the value of your home
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Flexible financing options
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Low maintenance
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Investment returns in 5 years
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Govt. subsidy
                </li>
              </ul>
            </div>

            {/* Benefits of Solar Energy */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-white mb-6 bg-blue-600 px-4 py-2 rounded-lg inline-block">Benefits of Solar Energy</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                  95% reduction in Electricity Bill
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                  Offset against electricity price hikes
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                  30 years performance warranty on panel
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                  7 to 10 years warranty on solar inverters
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                  5 years of annual maintenance
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                  Online/app monitoring system
                </li>
              </ul>
            </div>

            {/* Offering Services & Pricing */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-white mb-6 bg-red-600 px-4 py-2 rounded-lg inline-block">Offering Services</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Feasibility study
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Design Evaluation
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Installation and Commissioning
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Operation and Maintenance
                </li>
              </ul>

              {/* Pricing */}
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-4 text-white">
                <h5 className="font-bold mb-4 text-center">Govt. Subsidy</h5>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-sm opacity-90">1 KWP</div>
                    <div className="text-lg font-bold">₹ 30,000</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-sm opacity-90">2 KWP</div>
                    <div className="text-lg font-bold">₹ 60,000</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-sm opacity-90">3 KWP or Above</div>
                    <div className="text-lg font-bold">₹ 78,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <button
              suppressHydrationWarning
              onClick={() => setShowGallery(!showGallery)}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 font-semibold shadow-xl text-lg flex items-center space-x-2 mx-auto"
            >
              <ImageIcon className="h-6 w-6" />
              <span>{showGallery ? "Hide" : "View"} Residential Photo Gallery</span>
            </button>
          </div>

          {showGallery && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in slide-in-from-top duration-500">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-2xl font-bold mb-2">Residential Installation</h4>
                  <p className="text-sm">Premium solar panel installation for homes</p>
                </div>
                <Image
                  src="/images/residential-solar-1.jpg"
                  alt="Residential Solar Installation 1"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-2xl font-bold mb-2">Modern Solar System</h4>
                  <p className="text-sm">Efficient and reliable energy solutions</p>
                </div>
                <Image
                  src="/images/residential-solar-2.jpg"
                  alt="Residential Solar Installation 2"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
