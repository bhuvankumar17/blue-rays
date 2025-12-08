"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter();
  return (
    <section id="home" className="relative pt-20 pb-32 min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/70 to-blue-900/50 z-10"></div>
        <Image
          src="/images/hero-background.jpg"
          alt="Solar Panels Installation"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20 w-full">
        <div className="max-w-3xl mx-auto mb-5 text-center lg:text-left lg:mx-0">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-4 sm:mb-6">
            <span className="text-blue-400">TURN YOUR </span>
            <span className="text-white">ROOF </span>
            <span className="text-lime-400">INTO A </span>
            <span className="text-lime-400">POWER PLANT</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-3 sm:mb-4 text-white leading-tight px-2">
            BLUE RAYS GREEN ENERGY
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 leading-relaxed px-2 sm:px-0">
            Transform your property with sustainable solar energy solutions. 
            Save on electricity costs while contributing to a cleaner environment.
          </p>
          
          <div className="bg-yellow-400/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 mb-6 sm:mb-8 mx-2 sm:mx-0">
            <p className="text-blue-900 font-bold text-xs sm:text-sm md:text-base lg:text-lg">
              🌟 Serving All of Tamil Nadu | Chennai • Coimbatore • Madurai • Trichy • Salem • Namakkal
            </p>
            <p className="text-blue-800 text-[10px] sm:text-xs md:text-sm mt-1">
              ✓ Free Site Survey • ✓ Govt Subsidy up to ₹78,000 • ✓ Same Day Response
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-2 sm:px-0 mb-32 lg:mb-0">
            <a href="#contact" className="w-full sm:w-auto">
              <button suppressHydrationWarning className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 font-semibold shadow-xl text-base sm:text-lg">
                Get Free Quote
              </button>
            </a>
            <a href="#about" className="w-full sm:w-auto">
              <button suppressHydrationWarning className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white/20 transition-all font-semibold text-base sm:text-lg">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Our Solutions Section - Right Side Vertical */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="flex flex-col items-center space-y-6">
          <p className="text-lime-400 text-xl mb-4 uppercase tracking-wider font-bold text-center">Our Solutions</p>
          <div className="flex flex-col space-y-5 items-center">
            <a href="/residential" className="group">
              <button suppressHydrationWarning className="px-12 py-6 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-2xl hover:bg-white/20 hover:border-lime-400 transition-all text-xl font-bold shadow-xl group-hover:transform group-hover:scale-110 w-[220px] text-center">
                Residential
              </button>
            </a>
            <a href="/commercial" className="group">
              <button suppressHydrationWarning className="px-12 py-6 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-2xl hover:bg-white/20 hover:border-lime-400 transition-all text-xl font-bold shadow-xl group-hover:transform group-hover:scale-110 w-[220px] text-center">
                Commercial
              </button>
            </a>
            <a href="/products" className="group">
              <button suppressHydrationWarning className="px-12 py-6 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-2xl hover:bg-white/20 hover:border-lime-400 transition-all text-xl font-bold shadow-xl group-hover:transform group-hover:scale-110 w-[220px] text-center">
                Industrial
              </button>
            </a>
            <a href="/products" className="group">
              <button suppressHydrationWarning className="px-12 py-6 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-2xl hover:bg-white/20 hover:border-lime-400 transition-all text-xl font-bold shadow-xl group-hover:transform group-hover:scale-110 w-[220px] text-center">
                Agricultural
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Our Solutions - Bottom for small screens */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-20 px-4 lg:hidden">
        <div className="max-w-sm mx-auto">
          <div className="text-center bg-blue-900/85 backdrop-blur-md rounded-xl py-3 px-3 shadow-2xl border border-white/20">
            <p className="text-lime-400 text-xs sm:text-sm mb-2 uppercase tracking-wider font-bold">Our Solutions</p>
            <div className="grid grid-cols-2 gap-2">
              <a href="/residential" className="group">
                <button suppressHydrationWarning className="w-full px-2 py-2.5 bg-white/25 backdrop-blur-sm border border-white/40 text-white rounded-lg hover:bg-lime-400 hover:text-blue-900 hover:border-lime-400 transition-all text-[11px] sm:text-xs font-bold shadow-md group-hover:transform group-hover:scale-105 text-center">
                  Residential
                </button>
              </a>
              <a href="/commercial" className="group">
                <button suppressHydrationWarning className="w-full px-2 py-2.5 bg-white/25 backdrop-blur-sm border border-white/40 text-white rounded-lg hover:bg-lime-400 hover:text-blue-900 hover:border-lime-400 transition-all text-[11px] sm:text-xs font-bold shadow-md group-hover:transform group-hover:scale-105 text-center">
                  Commercial
                </button>
              </a>
              <a href="/products" className="group">
                <button suppressHydrationWarning className="w-full px-2 py-2.5 bg-white/25 backdrop-blur-sm border border-white/40 text-white rounded-lg hover:bg-lime-400 hover:text-blue-900 hover:border-lime-400 transition-all text-[11px] sm:text-xs font-bold shadow-md group-hover:transform group-hover:scale-105 text-center">
                  Industrial
                </button>
              </a>
              <a href="/products" className="group">
                <button suppressHydrationWarning className="w-full px-2 py-2.5 bg-white/25 backdrop-blur-sm border border-white/40 text-white rounded-lg hover:bg-lime-400 hover:text-blue-900 hover:border-lime-400 transition-all text-[11px] sm:text-xs font-bold shadow-md group-hover:transform group-hover:scale-105 text-center">
                  Agricultural
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
