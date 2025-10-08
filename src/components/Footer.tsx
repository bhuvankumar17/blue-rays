"use client";

import Link from "next/link";
import { Sun, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sun className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">Blue Rays</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading provider of sustainable solar energy solutions for over 25 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Residential Solar</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Commercial Solar</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Industrial Solar</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Maintenance & Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Our Team</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#contact" className="hover:text-blue-500 transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Blue Rays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
