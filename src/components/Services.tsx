"use client";

import Link from "next/link";
import Image from "next/image";

export function Services() {
  return (
    <section id="products" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600">
            We adopt an individual approach with each and every client and our business model is built on the following key promises.
          </p>
        </div>
        
        {/* Solar Panel Brands Section */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Premium Solar Panel Brands</h3>
            <p className="text-gray-600">We partner with India&apos;s leading solar panel manufacturers</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center border-2 border-gray-100 hover:border-cyan-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900 mb-1">Waaree</div>
                <div className="text-xs text-gray-500">Solar Panels</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center border-2 border-gray-100 hover:border-cyan-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900 mb-1">Adani</div>
                <div className="text-xs text-gray-500">Solar Panels</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center border-2 border-gray-100 hover:border-cyan-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900 mb-1">Tata</div>
                <div className="text-xs text-gray-500">Solar Panels</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center border-2 border-gray-100 hover:border-cyan-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900 mb-1">ReNew</div>
                <div className="text-xs text-gray-500">Solar Panels</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center border-2 border-gray-100 hover:border-cyan-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900 mb-1">Rayzon</div>
                <div className="text-xs text-gray-500">Solar Panels</div>
              </div>
            </div>
          </div>
        </div>

        {/* Inverter Brands Section */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Premium Inverter Brands</h3>
            <p className="text-gray-600">Reliable inverters from trusted manufacturers</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center border-2 border-gray-100 hover:border-orange-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900 mb-1">Waaree</div>
                <div className="text-xs text-gray-500">Solar Inverters</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center border-2 border-gray-100 hover:border-orange-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900 mb-1">Growatt</div>
                <div className="text-xs text-gray-500">Solar Inverters</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center border-2 border-gray-100 hover:border-orange-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900 mb-1">Eastman</div>
                <div className="text-xs text-gray-500">Solar Inverters</div>
              </div>
            </div>
          </div>
        </div>

        {/* Solar Installation Section */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Solar Installation</h3>
            <p className="text-gray-600">Professional installation components and services</p>
          </div>

          {/* Installation Image */}
          <div className="mb-10">
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-cyan-100">
              <Image
                src="/images/technician-installation.jpg"
                alt="Blue Rays Green Energy Technician Installing Solar System"
                fill
                className="object-cover"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8">
                  <h4 className="text-2xl md:text-3xl font-bold mb-2 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">Expert Installation Team</h4>
                  <p className="text-lg text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">Certified technicians ensuring quality installation and maintenance</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Module Mounting Structure */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8">
            <h4 className="text-xl font-bold text-blue-900 mb-6 text-center">Module Mounting Structure</h4>
            
            <div className="flex justify-center">
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-gray-100 hover:border-lime-400 max-w-md w-full">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-3">Hot Dip Galvanized</div>
                  <div className="text-sm text-gray-600 mb-4">Premium Mounting Structure</div>
                  <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-lg p-4">
                    <ul className="text-left space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-lime-500 rounded-full mr-3 mt-1.5"></span>
                        <span>Superior corrosion resistance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-lime-500 rounded-full mr-3 mt-1.5"></span>
                        <span>Long-lasting durability (25+ years)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-lime-500 rounded-full mr-3 mt-1.5"></span>
                        <span>Weather and rust resistant</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-lime-500 rounded-full mr-3 mt-1.5"></span>
                        <span>Engineered for wind and load bearing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
