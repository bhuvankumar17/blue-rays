import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Star, CheckCircle, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Solar Panel Installation Coimbatore | #1 Solar Company - Blue Rays Green Energy",
  description: "Top solar panel installation in Coimbatore. Serving RS Puram, Saibaba Colony, Gandhipuram. ₹30k-₹78k govt subsidy. 500+ installations. Free site survey. Call +91 9600970313",
  keywords: "solar panels coimbatore, solar installation coimbatore, solar company coimbatore, rooftop solar coimbatore, residential solar coimbatore, commercial solar coimbatore, solar panel dealers coimbatore, TANGEDCO subsidy coimbatore",
  alternates: {
    canonical: "https://www.blueraysgreenenergy.com/coimbatore",
  },
  openGraph: {
    title: "Solar Panel Installation Coimbatore - Blue Rays Green Energy",
    description: "Coimbatore&apos;s trusted solar company. 500+ installations. Government subsidy support. Free consultation.",
    url: "https://www.blueraysgreenenergy.com/coimbatore",
  },
};

export default function CoimbatorePage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Serving Coimbatore</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Solar Panel Installation in Coimbatore
            </h1>
            <p className="text-lg sm:text-xl mb-8 leading-relaxed">
              Coimbatore&apos;s #1 Solar Company | 500+ Successful Installations | Government Subsidy Support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919600970313"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-xl"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call +91 9600970313
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Coimbatore */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Why Coimbatore Trusts Blue Rays Green Energy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "500+ Installations", desc: "In Coimbatore & nearby areas" },
              { icon: Star, title: "4.9/5 Rating", desc: "From Coimbatore customers" },
              { icon: CheckCircle, title: "Same Day Visit", desc: "Free site survey in Coimbatore" },
              { icon: Phone, title: "Local Support", desc: "Quick response for Coimbatore" },
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve in Coimbatore */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Areas We Serve in Coimbatore
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "RS Puram",
              "Saibaba Colony",
              "Gandhipuram",
              "Peelamedu",
              "Singanallur",
              "Vadavalli",
              "Kuniyamuthur",
              "Ganapathy",
              "Saravanampatti",
              "Thudiyalur",
              "Kalapatti",
              "Kovaipudur",
              "Podanur",
              "Vilankurichi",
              "Mettupalayam Road",
              "Avinashi Road",
            ].map((area) => (
              <div key={area} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{area}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-600">
            Don&apos;t see your area? <Link href="/contact" className="text-blue-600 font-semibold hover:underline">Contact us</Link> - We serve all of Coimbatore district!
          </p>
        </div>
      </section>

      {/* Coimbatore Solar Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Solar Power for Coimbatore&apos;s Climate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Perfect Weather Conditions</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Excellent Sunlight:</strong>
                    <p className="text-gray-600">Coimbatore receives 300+ sunny days annually</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Moderate Climate:</strong>
                    <p className="text-gray-600">Ideal temperature range for solar panel efficiency</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Industrial Hub:</strong>
                    <p className="text-gray-600">High electricity costs make solar ROI excellent</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Typical Savings for Coimbatore</h3>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-semibold">Residential (3kW)</span>
                    <span className="text-green-600 font-bold">₹3,000-5,000/month</span>
                  </div>
                  <p className="text-sm text-gray-600">Average household savings on electricity bills</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-semibold">Commercial (10kW)</span>
                    <span className="text-green-600 font-bold">₹12,000-18,000/month</span>
                  </div>
                  <p className="text-sm text-gray-600">Small business savings</p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-semibold">Industrial (50kW+)</span>
                    <span className="text-green-600 font-bold">₹80,000+/month</span>
                  </div>
                  <p className="text-sm text-gray-600">Large factory savings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Subsidy for Coimbatore */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-900 to-cyan-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Government Subsidy Available for Coimbatore Residents
          </h2>
          <p className="text-xl mb-8">
            Get up to ₹78,000 subsidy from Tamil Nadu Government through TANGEDCO
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="text-4xl font-bold text-yellow-400 mb-2">₹30,000</div>
              <div className="text-lg">1 KW System</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="text-4xl font-bold text-yellow-400 mb-2">₹60,000</div>
              <div className="text-lg">2 KW System</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="text-4xl font-bold text-yellow-400 mb-2">₹78,000</div>
              <div className="text-lg">3 KW or Above</div>
            </div>
          </div>
          <p className="text-lg mb-6">
            ✓ We handle all documentation and TANGEDCO coordination for Coimbatore residents
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-xl"
          >
            Apply for Subsidy Now
          </Link>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            What Coimbatore Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                location: "RS Puram, Coimbatore",
                rating: 5,
                text: "Installed 5kW system for my home. Professional service and excellent support. My electricity bill reduced by 90%!",
              },
              {
                name: "Priya Textiles",
                location: "Gandhipuram, Coimbatore",
                rating: 5,
                text: "Blue Rays installed 50kW for our textile unit. Saving ₹1.2 lakh monthly. ROI in just 3 years!",
              },
              {
                name: "Venkatesh M",
                location: "Saravanampatti, Coimbatore",
                rating: 5,
                text: "Got ₹78,000 subsidy without any hassle. They handled everything from documentation to TANGEDCO approval.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-blue-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Common Questions from Coimbatore Customers
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How long does solar installation take in Coimbatore?",
                a: "Typically 1-2 days for residential systems. We complete site survey within 24 hours of your call.",
              },
              {
                q: "What about warranty and maintenance in Coimbatore?",
                a: "30-year panel warranty, 5-10 years inverter warranty. We provide annual maintenance with our Coimbatore service team.",
              },
              {
                q: "Is net metering available in Coimbatore?",
                a: "Yes! TANGEDCO provides net metering across Coimbatore. We handle all the paperwork and approvals.",
              },
              {
                q: "What happens during monsoon season?",
                a: "Solar panels work even on cloudy days. Coimbatore gets excellent sunshine year-round, ensuring consistent energy production.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-blue-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Go Solar in Coimbatore?
          </h2>
          <p className="text-xl mb-8">
            Join 500+ happy customers in Coimbatore. Get your free site survey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919600970313"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-xl"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call +91 9600970313
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              Schedule Free Survey
            </Link>
          </div>
        </div>
      </section>

      {/* Distance Info */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="container mx-auto max-w-4xl text-center text-gray-600">
          <p>
            <strong>Service Coverage:</strong> We serve entire Coimbatore district and surrounding areas (Pollachi, Tirupur, Erode) |{" "}
            <strong>Distance from Chennai office:</strong> 500km | <strong>Response Time:</strong> Same-day site visit available
          </p>
        </div>
      </section>
    </main>
  );
}
