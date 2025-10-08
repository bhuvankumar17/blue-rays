"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative pt-20 pb-0 min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/60 to-transparent z-10"></div>
        <Image
          src="/images/solar-panels.jpg"
          alt="Solar Panels Installation"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            TURN YOUR ROOF INTO A{" "}
            <span className="text-lime-400">POWER PLANT</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Transform your property with sustainable solar energy solutions. 
            Save on electricity costs while contributing to a cleaner environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 font-semibold shadow-xl text-lg">
                Get Free Quote
              </button>
            </a>
            <a href="#about">
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white/20 transition-all font-semibold text-lg">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
