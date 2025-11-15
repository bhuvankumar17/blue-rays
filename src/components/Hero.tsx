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
          src="/images/cover-image-1.jpg"
          alt="Solar Panels Installation"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          {/* Animated Title with Enhanced Gradient */}
          <div className="relative mb-6">
            <h2 className="text-7xl lg:text-8xl font-black text-center mb-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-lime-300 bg-clip-text text-transparent leading-tight drop-shadow-2xl animate-pulse">
              BLUE RAYS
            </h2>
            <h2 className="text-6xl lg:text-7xl font-black text-center bg-gradient-to-r from-lime-300 via-green-400 to-cyan-300 bg-clip-text text-transparent leading-tight drop-shadow-2xl">
              GREEN ENERGY
            </h2>
            {/* Glow Effect */}
            <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-cyan-400 via-blue-500 to-lime-400 -z-10"></div>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-8 drop-shadow-2xl">
            TURN YOUR ROOF INTO A{" "}
            <span className="relative inline-block">
              <span className="text-lime-400 animate-pulse">POWER PLANT</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-cyan-400"></span>
            </span>
          </h1>
          
          <p className="text-2xl text-white/95 mb-10 leading-relaxed font-medium drop-shadow-lg max-w-2xl">
            Transform your property with sustainable solar energy solutions. 
            <span className="block mt-2 text-lime-300 font-semibold">Save on electricity costs while contributing to a cleaner environment.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/contact">
              <button suppressHydrationWarning className="px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 text-white rounded-xl hover:from-cyan-600 hover:via-blue-700 hover:to-blue-800 transition-all transform hover:scale-110 hover:-translate-y-1 font-bold shadow-2xl text-xl border-2 border-white/20 hover:border-white/40 relative overflow-hidden group">
                <span className="relative z-10">Get Free Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>
            </Link>
            <Link href="/about">
              <button suppressHydrationWarning className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/50 text-white rounded-xl hover:bg-white/25 hover:border-lime-400 transition-all transform hover:scale-110 hover:-translate-y-1 font-bold text-xl shadow-2xl relative overflow-hidden group">
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-lime-400 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </button>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl">
            <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-black text-lime-400 mb-1">500+</div>
              <div className="text-sm text-white/80 font-semibold">Happy Clients</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-black text-cyan-400 mb-1">25+</div>
              <div className="text-sm text-white/80 font-semibold">Years Experience</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-black text-lime-400 mb-1">99%</div>
              <div className="text-sm text-white/80 font-semibold">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Solutions Section - Right Side Vertical */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <p className="text-lime-400 text-2xl mb-4 uppercase tracking-widest font-black text-center drop-shadow-lg">Our Solutions</p>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 to-lime-400 rounded-full"></div>
          </div>
          <div className="flex flex-col space-y-5 items-center">
            <Link href="/residential" className="group">
              <button suppressHydrationWarning className="px-12 py-6 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg border-2 border-white/40 text-white rounded-2xl hover:bg-gradient-to-br hover:from-lime-500/30 hover:to-cyan-500/30 hover:border-lime-400 transition-all text-xl font-black shadow-2xl group-hover:transform group-hover:scale-110 w-[240px] text-center relative overflow-hidden">
                <span className="relative z-10">Residential</span>
                <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>
            </Link>
            <Link href="/commercial" className="group">
              <button suppressHydrationWarning className="px-12 py-6 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg border-2 border-white/40 text-white rounded-2xl hover:bg-gradient-to-br hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400 transition-all text-xl font-black shadow-2xl group-hover:transform group-hover:scale-110 w-[240px] text-center relative overflow-hidden">
                <span className="relative z-10">Commercial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>
            </Link>
            <Link href="/products" className="group">
              <button suppressHydrationWarning className="px-12 py-6 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg border-2 border-white/40 text-white rounded-2xl hover:bg-gradient-to-br hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-400 transition-all text-xl font-black shadow-2xl group-hover:transform group-hover:scale-110 w-[240px] text-center relative overflow-hidden">
                <span className="relative z-10">Industrial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>
            </Link>
            <Link href="/products" className="group">
              <button suppressHydrationWarning className="px-12 py-6 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg border-2 border-white/40 text-white rounded-2xl hover:bg-gradient-to-br hover:from-green-500/30 hover:to-lime-500/30 hover:border-green-400 transition-all text-xl font-black shadow-2xl group-hover:transform group-hover:scale-110 w-[240px] text-center relative overflow-hidden">
                <span className="relative z-10">Agricultural</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-lime-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Our Solutions - Bottom for small screens */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-lg px-6 lg:hidden">
        <div className="text-center">
          <p className="text-lime-400 text-lg mb-6 uppercase tracking-wider font-bold">Our Solutions</p>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/residential" className="group">
              <button suppressHydrationWarning className="w-full px-6 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl hover:bg-white/20 hover:border-lime-400 transition-all text-lg font-bold shadow-xl group-hover:transform group-hover:scale-105 text-center">
                Residential
              </button>
            </Link>
            <Link href="/commercial" className="group">
              <button suppressHydrationWarning className="w-full px-6 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl hover:bg-white/20 hover:border-lime-400 transition-all text-lg font-bold shadow-xl group-hover:transform group-hover:scale-105 text-center">
                Commercial
              </button>
            </Link>
            <Link href="/products" className="group">
              <button suppressHydrationWarning className="w-full px-6 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl hover:bg-white/20 hover:border-lime-400 transition-all text-lg font-bold shadow-xl group-hover:transform group-hover:scale-105 text-center">
                Industrial
              </button>
            </Link>
            <Link href="/products" className="group">
              <button suppressHydrationWarning className="w-full px-6 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl hover:bg-white/20 hover:border-lime-400 transition-all text-lg font-bold shadow-xl group-hover:transform group-hover:scale-105 text-center">
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
