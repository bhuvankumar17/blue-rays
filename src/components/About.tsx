"use client";

import { Award, Users, Target, CheckCircle } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
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
            
            <h2 className="text-4xl font-bold text-blue-900 leading-tight">
              Powering a Greener Tomorrow
            </h2>
            
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                At Blue Rays Green Energy, we believe in creating a sustainable world powered by clean, renewable energy. Through innovative solar solutions and expert engineering, we help homes, businesses, and communities switch to a brighter, eco-friendly future.
              </p>
              
              <p className="text-gray-600">
                Start saving today! Call{" "}
                <a href="tel:+919600970313" className="font-bold text-cyan-600 hover:underline">
                  +91 9600970313
                </a>
                {" "}to schedule your free consultation
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
