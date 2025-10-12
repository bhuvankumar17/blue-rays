"use client";

import { Zap, Shield, Users, Wrench } from "lucide-react";
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
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Solar Panels Product */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/cover-image-3.jpg"
                alt="Solar Panels"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="w-12 h-12 bg-lime-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Solar Panels</h3>
                <p className="text-sm opacity-90">High-efficiency solar panel systems for residential and commercial use</p>
              </div>
            </div>
          </div>

          {/* Solar Installation Product */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/cover-image-1.jpg"
                alt="Solar Installation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-cyan-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="w-12 h-12 bg-lime-500 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Solar Installation</h3>
                <p className="text-sm opacity-90">Professional installation services for all types of solar systems</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Product Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-xl border-2 border-cyan-100 hover:border-cyan-300 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-bold text-lg text-blue-900 mb-2">High Efficiency</h4>
            <p className="text-gray-600 text-sm">Premium solar panels with maximum energy conversion rates for optimal performance</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl border-2 border-cyan-100 hover:border-cyan-300 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-bold text-lg text-blue-900 mb-2">Warranty</h4>
            <p className="text-gray-600 text-sm">30 years warranty on solar panels & 7-10 years warranty on inverters</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl border-2 border-cyan-100 hover:border-cyan-300 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-bold text-lg text-blue-900 mb-2">Expert Support</h4>
            <p className="text-gray-600 text-sm">Dedicated customer service and technical support team available 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
}
