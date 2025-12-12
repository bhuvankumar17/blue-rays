"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
          
          {/* Desktop Navigation */}
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
            <Link href="/contact" className="hidden sm:block">
              <button suppressHydrationWarning className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md hover:from-cyan-600 hover:to-blue-700 transition-all font-medium shadow-lg text-sm sm:text-base">
                Contact Us
              </button>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-700 hover:text-cyan-500 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="/#home"
                onClick={closeMenu}
                className="text-left text-gray-700 hover:text-cyan-500 transition-colors font-medium py-2"
              >
                Home
              </a>
              <a
                href="/#about"
                onClick={closeMenu}
                className="text-left text-gray-700 hover:text-cyan-500 transition-colors font-medium py-2"
              >
                About Us
              </a>
              <a
                href="/#products"
                onClick={closeMenu}
                className="text-left text-gray-700 hover:text-cyan-500 transition-colors font-medium py-2"
              >
                Products
              </a>
              <a
                href="/#gallery"
                onClick={closeMenu}
                className="text-left text-gray-700 hover:text-cyan-500 transition-colors font-medium py-2"
              >
                Gallery
              </a>
              <a
                href="/#contact"
                onClick={closeMenu}
                className="text-left text-gray-700 hover:text-cyan-500 transition-colors font-medium py-2"
              >
                Contact
              </a>
              <div className="pt-2 border-t border-gray-200">
                <span className="text-xs text-gray-500">Phone Number</span>
                <a href="tel:+919600970313" className="block text-lg font-semibold text-cyan-600 mt-1">
                  +91 9600970313
                </a>
              </div>
              <a 
                href="/#contact"
                onClick={closeMenu}
                className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md hover:from-cyan-600 hover:to-blue-700 transition-all font-medium shadow-lg text-center block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
