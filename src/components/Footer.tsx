"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

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
                  sizes="48px"
                  loading="lazy"
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Leading provider of sustainable solar energy solutions for residential and commercial needs.
            </p>
            <div className="flex space-x-3">
              <a href="https://wa.me/919600970313" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-lime-500 transition-colors group">
                <svg className="h-5 w-5 group-hover:text-blue-900" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
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
              <li><Link href="/" className="hover:text-lime-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-lime-400 transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-lime-400 transition-colors">Products</Link></li>
              <li><Link href="/gallery" className="hover:text-lime-400 transition-colors">Gallery</Link></li>
              <li><Link href="/faq" className="hover:text-lime-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/residential" className="hover:text-lime-400 transition-colors">Residential Solar</Link></li>
              <li><Link href="/commercial" className="hover:text-lime-400 transition-colors">Commercial Solar</Link></li>
              <li><Link href="/products" className="hover:text-lime-400 transition-colors">Industrial Solar</Link></li>
              <li><Link href="/contact" className="hover:text-lime-400 transition-colors">Maintenance & Support</Link></li>
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
                <a href="mailto:blueraysenergy@gmail.com" className="hover:text-lime-400 transition-colors">blueraysenergy@gmail.com</a>
              </li>
              <li><Link href="#contact" className="hover:text-lime-400 transition-colors">Contact Form</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="text-center mb-6">
            <h3 className="text-white font-semibold mb-3">Service Areas in Tamil Nadu</h3>
            <p className="text-gray-400 text-sm max-w-4xl mx-auto">
              <Link href="/coimbatore" className="hover:text-lime-400 transition-colors">Coimbatore</Link> • 
              Chennai • Madurai • Tiruchirappalli • Salem • Namakkal • Tirunelveli • Erode • Vellore • Thoothukudi • 
              Dindigul • Thanjavur • Tiruppur • Kanchipuram • Karur • Cuddalore • Nagercoil • Hosur • 
              Pollachi • Ambur • Kumbakonam • and all 32 districts of Tamil Nadu
            </p>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Blue Rays Green Energy. All rights reserved. | Tamil Nadu&apos;s Leading Solar Company</p>
            <p className="text-xs mt-2">Solar Panel Installation | Residential & Commercial Solar Solutions | Government Subsidy Support</p>
          </div>
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
        <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
      </a>
    </footer>
  );
}
