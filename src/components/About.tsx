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
                src="/images/solar-panels.jpg"
                alt="Commercial Solar Installation"
                fill
                className="object-cover"
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
              Why Choose Our Solar Energy Platform
            </h2>
            
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                When you choose BR Green Energy you are choosing the{" "}
                <span className="font-bold text-blue-900">
                  most qualified solar professionals in Salem, award-winning customer service
                </span>
                , the{" "}
                <span className="font-bold text-blue-900">
                  highest efficiency solar panels available
                </span>
                , 100% customer satisfaction. You can trust that your solar system will be safe, 
                reliable, and provide you with decades of clean solar energy.
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
                  <div className="font-semibold text-blue-900">25-Year Warranty</div>
                  <div className="text-gray-600 text-sm">Industry-leading coverage</div>
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

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl text-center">
            <Award className="h-12 w-12 text-cyan-600 mb-4 mx-auto" />
            <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
            <div className="text-gray-600">Industry Awards</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl text-center">
            <Users className="h-12 w-12 text-cyan-600 mb-4 mx-auto" />
            <div className="text-3xl font-bold text-blue-900 mb-2">200+</div>
            <div className="text-gray-600">Team Members</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl text-center">
            <Target className="h-12 w-12 text-cyan-600 mb-4 mx-auto" />
            <div className="text-3xl font-bold text-blue-900 mb-2">10K+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl text-center">
            <CheckCircle className="h-12 w-12 text-cyan-600 mb-4 mx-auto" />
            <div className="text-3xl font-bold text-blue-900 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
