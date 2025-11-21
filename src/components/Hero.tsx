"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter();
  return (
    <section id="home" className="relative pt-20 pb-0 min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/60 to-transparent z-10"></div>
        <Image
          src="/images/hero-background.jpg"
          alt="Solar Panels Installation"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-3 sm:mb-4 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] leading-tight">
            BLUE RAYS GREEN ENERGY
          </h2>
          
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6">
            <span className="text-blue-400">TURN YOUR </span>
            <span className="text-white">ROOF </span>
            <span className="text-lime-400">INTO A </span>
            <span className="text-lime-400">POWER PLANT</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
            Transform your property with sustainable solar energy solutions. 
            Save on electricity costs while contributing to a cleaner environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <button suppressHydrationWarning className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 font-semibold shadow-xl text-lg">
                Get Free Quote
              </button>
            </Link>
            <Link href="/about">
              <button suppressHydrationWarning className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white/20 transition-all font-semibold text-lg">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Our Solutions Section - Right Side Vertical */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="flex flex-col items-center space-y-6">
          <p className="text-lime-400 text-xl mb-4 uppercase tracking-wider font-bold text-center">Our Solutions</p>
          <div className="flex flex-col space-y-5 items-center">
            <Link href="/residential" className="group">
              <button suppressHydrationWarning className="px-12 py-6 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-2xl hover:bg-white/20 hover:border-lime-400 transition-all text-xl font-bold shadow-xl group-hover:transform group-hover:scale-110 w-[220px] text-center">
                Residential
              </button>
            </Link>
            <Link href="/commercial" className="group">
              <button suppressHydrationWarning className="px-12 py-6 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-2xl hover:bg-white/20 hover:border-lime-400 transition-all text-xl font-bold shadow-xl group-hover:transform group-hover:scale-110 w-[220px] text-center">
                Commercial
              </button>
            </Link>
            <Link href="/products" className="group">
              <button suppressHydrationWarning className="px-12 py-6 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-2xl hover:bg-white/20 hover:border-lime-400 transition-all text-xl font-bold shadow-xl group-hover:transform group-hover:scale-110 w-[220px] text-center">
                Industrial
              </button>
            </Link>
            <Link href="/products" className="group">
              <button suppressHydrationWarning className="px-12 py-6 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-2xl hover:bg-white/20 hover:border-lime-400 transition-all text-xl font-bold shadow-xl group-hover:transform group-hover:scale-110 w-[220px] text-center">
                Agricultural
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Our Solutions - Bottom for small screens */}
      <div className="absolute bottom-16 sm:bottom-24 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-lg px-4 sm:px-6 lg:hidden">
        <div className="text-center">
          <p className="text-lime-400 text-sm sm:text-base mb-3 sm:mb-4 uppercase tracking-wider font-bold">Our Solutions</p>
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <Link href="/residential" className="group">
              <button suppressHydrationWarning className="w-full px-3 sm:px-6 py-3 sm:py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl hover:bg-white/20 hover:border-lime-400 transition-all text-sm sm:text-base md:text-lg font-bold shadow-xl group-hover:transform group-hover:scale-105 text-center">
                Residential
              </button>
            </Link>
            <Link href="/commercial" className="group">
              <button suppressHydrationWarning className="w-full px-3 sm:px-6 py-3 sm:py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl hover:bg-white/20 hover:border-lime-400 transition-all text-sm sm:text-base md:text-lg font-bold shadow-xl group-hover:transform group-hover:scale-105 text-center">
                Commercial
              </button>
            </Link>
            <Link href="/products" className="group">
              <button suppressHydrationWarning className="w-full px-3 sm:px-6 py-3 sm:py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl hover:bg-white/20 hover:border-lime-400 transition-all text-sm sm:text-base md:text-lg font-bold shadow-xl group-hover:transform group-hover:scale-105 text-center">
                Industrial
              </button>
            </Link>
            <Link href="/products" className="group">
              <button suppressHydrationWarning className="w-full px-3 sm:px-6 py-3 sm:py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl hover:bg-white/20 hover:border-lime-400 transition-all text-sm sm:text-base md:text-lg font-bold shadow-xl group-hover:transform group-hover:scale-105 text-center">
                Agricultural
              </button>
            </Link>
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
