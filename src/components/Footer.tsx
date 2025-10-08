"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-gray-300 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.jpg"
                  alt="BR Green Energy"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Leading provider of sustainable solar energy solutions for residential and commercial needs.
            </p>
            <div className="flex space-x-3">
              <a href="https://wa.me/919600970313" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-lime-500 transition-colors group">
                <MessageCircle className="h-5 w-5 group-hover:text-blue-900" />
              </a>
              <a href="#" className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors group">
                <Facebook className="h-5 w-5 group-hover:text-blue-900" />
              </a>
              <a href="#" className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors group">
                <Twitter className="h-5 w-5 group-hover:text-blue-900" />
              </a>
              <a href="#" className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors group">
                <Instagram className="h-5 w-5 group-hover:text-blue-900" />
              </a>
              <a href="#" className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors group">
                <Linkedin className="h-5 w-5 group-hover:text-blue-900" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="hover:text-lime-400 transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-lime-400 transition-colors">About Us</Link></li>
              <li><Link href="#products" className="hover:text-lime-400 transition-colors">Products</Link></li>
              <li><Link href="#gallery" className="hover:text-lime-400 transition-colors">Gallery</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-lime-400 transition-colors">Solar Panel Installation</Link></li>
              <li><Link href="#" className="hover:text-lime-400 transition-colors">Commercial Solutions</Link></li>
              <li><Link href="#" className="hover:text-lime-400 transition-colors">Residential Solutions</Link></li>
              <li><Link href="#" className="hover:text-lime-400 transition-colors">Maintenance & Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="text-white">Phone:</span><br/>
                <a href="tel:+919600970313" className="hover:text-lime-400 transition-colors">+91 9600970313</a>
              </li>
              <li className="text-gray-400">
                <span className="text-white">WhatsApp:</span><br/>
                <a href="https://wa.me/919600970313" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition-colors">Chat with us</a>
              </li>
              <li className="text-gray-400">
                <span className="text-white">Email:</span><br/>
                <a href="mailto:info@brgreenenergy.com" className="hover:text-lime-400 transition-colors">info@brgreenenergy.com</a>
              </li>
              <li><Link href="#contact" className="hover:text-lime-400 transition-colors">Contact Form</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BR Green Energy. All rights reserved.</p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919600970313"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-lime-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-lime-400 transition-all transform hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-blue-900" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
      </a>
    </footer>
  );
}
