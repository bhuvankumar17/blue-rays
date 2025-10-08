"use client";

import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">Blueray Solar</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              About Us
            </Link>
            <Link href="#products" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Products
            </Link>
            <Link href="#gallery" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Gallery
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-xs text-gray-500">Phone Number</span>
              <span className="text-sm font-semibold text-teal-600">+91 9600970313</span>
            </div>
            <Link href="#contact">
              <button className="px-6 py-2.5 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors font-medium">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
