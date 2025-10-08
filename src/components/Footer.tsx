"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white">Blueray Solar</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading provider of sustainable solar energy solutions for residential and commercial needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="hover:text-teal-500 transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-teal-500 transition-colors">About Us</Link></li>
              <li><Link href="#products" className="hover:text-teal-500 transition-colors">Products</Link></li>
              <li><Link href="#gallery" className="hover:text-teal-500 transition-colors">Gallery</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-teal-500 transition-colors">Solar Panel Installation</Link></li>
              <li><Link href="#" className="hover:text-teal-500 transition-colors">Commercial Solutions</Link></li>
              <li><Link href="#" className="hover:text-teal-500 transition-colors">Residential Solutions</Link></li>
              <li><Link href="#" className="hover:text-teal-500 transition-colors">Maintenance & Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="text-white">Phone:</span><br/>
                <a href="tel:+919600970313" className="hover:text-teal-500 transition-colors">+91 9600970313</a>
              </li>
              <li className="text-gray-400">
                <span className="text-white">Email:</span><br/>
                <a href="mailto:info@blueraysolar.com" className="hover:text-teal-500 transition-colors">info@blueraysolar.com</a>
              </li>
              <li><Link href="#contact" className="hover:text-teal-500 transition-colors">Contact Form</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Blueray Solar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
