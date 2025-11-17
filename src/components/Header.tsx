"use client";

import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20">
              <Image
                src="/images/logo.jpg"
                alt="BR Green Energy"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-cyan-500 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-cyan-500 transition-colors font-medium">
              About Us
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-cyan-500 transition-colors font-medium">
              Products
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-cyan-500 transition-colors font-medium">
              Gallery
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-cyan-500 transition-colors font-medium">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-xs text-gray-500">Phone Number</span>
              <span className="text-sm font-semibold text-cyan-600">+91 9600970313</span>
            </div>
            <Link href="/contact">
              <button suppressHydrationWarning className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md hover:from-cyan-600 hover:to-blue-700 transition-all font-medium shadow-lg text-sm sm:text-base">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
