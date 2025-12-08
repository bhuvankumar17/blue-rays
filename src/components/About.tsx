"use client";

import { Award, Users, Target, CheckCircle } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          <div className="relative px-4 sm:px-0">
            <div className="aspect-[4/3] bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/residential-solar-1.jpg"
                alt="Beautiful Home with Solar Panels"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wide">
                ABOUT US
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
              Solar Company in Namakkal
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Bluerays Green Energy is a trusted solar company in Namakkal, offering efficient, affordable, and long-lasting solar power solutions for homes and offices.
            </p>
            
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                At Blue Rays Green Energy, we are Tamil Nadu&apos;s leading solar energy company, dedicated to powering a sustainable future. Since our establishment in Chennai, we&apos;ve expanded across all 32 districts of Tamil Nadu, delivering quality solar installations to homes and businesses.
              </p>
              
              <p>
                Through innovative solar solutions and expert engineering, we help homes, businesses, and communities across Chennai, Coimbatore, Madurai, Trichy, Salem, Namakkal, and beyond switch to clean, renewable energy. As a TANGEDCO-approved vendor, we provide complete subsidy support and seamless net metering connections.
              </p>
              
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-lg border-l-4 border-cyan-600">
                <p className="text-gray-800 font-semibold mb-2">
                  🌟 Why Tamil Nadu Chooses Blue Rays:
                </p>
                <p className="text-gray-700 text-base">
                  Trusted Solar Company • ISO Certified • 30-Year Warranty • Same-Day Site Survey • Complete Subsidy Assistance • Local Tamil Nadu Team
                </p>
              </div>
              
              <p className="text-gray-600">
                Start saving today! Call{" "}
                <a href="tel:+919600970313" className="font-bold text-cyan-600 hover:underline">
                  +91 9600970313
                </a>
                {" "}for your free consultation across Tamil Nadu
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-lime-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-blue-900">Certified Experts</div>
                  <div className="text-gray-600 text-sm">Licensed & insured professionals</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-lime-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-blue-900">Premium Quality</div>
                  <div className="text-gray-600 text-sm">Top-tier solar equipment</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-lime-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-blue-900">Extended Warranty</div>
                  <div className="text-gray-600 text-sm">30yr panels, 7-10yr inverters</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-lime-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-blue-900">Local Service</div>
                  <div className="text-gray-600 text-sm">Fast, reliable support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
