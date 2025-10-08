"use client";

import { ArrowRight, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="h-4 w-4" />
              <span>Leading Solar Energy Provider</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Power Your Future with{" "}
              <span className="text-blue-600">Clean Energy</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Transform your home or business with our premium solar panel solutions. 
              Save money, reduce your carbon footprint, and embrace sustainable energy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 text-lg font-semibold shadow-lg shadow-blue-600/30">
                <span>Get Free Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all text-lg font-semibold">
                Learn More
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-blue-600">10K+</div>
                <div className="text-gray-600">Installations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">25+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl font-bold mb-4">☀️</div>
                  <p className="text-xl font-semibold">Solar Energy Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
