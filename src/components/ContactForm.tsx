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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your interest! We\'ll contact you soon.'
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit form. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wide">CONTACT US</span>
          <h2 className="text-4xl font-bold text-blue-900 mb-4 mt-2">
            Solar Panel Services Near Me
          </h2>
          <p className="text-xl text-gray-600">
            If you&apos;re searching for solar panel services near me, Bluerays Green Energy delivers quick, affordable, and expert installation, repair, and maintenance.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">Phone</div>
                    <a href="tel:+919600970313" className="text-cyan-600 hover:underline">+91 9600970313</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">Email</div>
                    <a href="mailto:blueraysenergy@gmail.com" className="text-cyan-600 hover:underline">blueraysenergy@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">Address</div>
                    <div className="text-gray-600">Namakkal, Tamil Nadu</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl text-white shadow-xl">
              <h4 className="text-xl font-bold mb-3">Why Choose BR Green Energy?</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-lime-400 rounded-full mr-3"></span>
                  Free consultation & site assessment
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-lime-400 rounded-full mr-3"></span>
                  Competitive pricing & financing options
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-lime-400 rounded-full mr-3"></span>
                  Expert installation & ongoing support
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-lime-400 rounded-full mr-3"></span>
                  30-year panel & 7-10 year inverter warranty
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition-all"
                  suppressHydrationWarning
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition-all"
                  suppressHydrationWarning
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition-all"
                  placeholder="+91 9600970313"
                  suppressHydrationWarning
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
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your solar energy needs..."
                  suppressHydrationWarning
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                suppressHydrationWarning
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && <Send className="h-5 w-5" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
