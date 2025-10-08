"use client";

import { Award, Users, Target, CheckCircle } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              About Blue Rays
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900">
              Leading the Solar Revolution Since 1998
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Blue Rays has been at the forefront of solar energy innovation for over 25 years. 
              We&apos;ve installed over 10,000 solar systems across the country, helping families and 
              businesses transition to clean, sustainable energy.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of certified professionals is dedicated to providing top-quality solar 
              solutions tailored to your unique needs. From initial consultation to installation 
              and ongoing maintenance, we&apos;re with you every step of the way.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Certified Experts</div>
                  <div className="text-gray-600 text-sm">Licensed & insured professionals</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Premium Quality</div>
                  <div className="text-gray-600 text-sm">Top-tier solar equipment</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">25-Year Warranty</div>
                  <div className="text-gray-600 text-sm">Industry-leading coverage</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Local Service</div>
                  <div className="text-gray-600 text-sm">Fast, reliable support</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Industry Awards</div>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg mt-8">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg mt-8">
              <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
