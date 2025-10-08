"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-teal-700 mb-4">
            Get Your Free Consultation
          </h2>
          <p className="text-xl text-gray-600">
            Ready to make the switch to solar? Contact us today for a free assessment and quote
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-teal-700 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <a href="tel:+919600970313" className="text-teal-600 hover:underline">+91 9600970313</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <a href="mailto:info@blueraysolar.com" className="text-teal-600 hover:underline">info@blueraysolar.com</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Address</div>
                    <div className="text-gray-600">Salem, Tamil Nadu</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-3">Why Choose Blueray Solar?</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-white rounded-full mr-3"></span>
                  Free consultation & site assessment
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-white rounded-full mr-3"></span>
                  Competitive pricing & financing options
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-white rounded-full mr-3"></span>
                  Expert installation & ongoing support
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-white rounded-full mr-3"></span>
                  25-year warranty on all installations
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-all"
                  placeholder="+91 9600970313"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your solar energy needs..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold shadow-lg shadow-teal-600/30"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
