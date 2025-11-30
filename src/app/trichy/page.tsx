import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Star, CheckCircle, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Solar Panel Installation Trichy | Top Solar Company - Blue Rays Green Energy",
  description: "Expert solar panel installation in Tiruchirappalli (Trichy). Serving Thillai Nagar, Cantonment, Srirangam. ₹30k-₹78k govt subsidy. Free site survey. Call +91 9600970313",
  keywords: "solar panels trichy, solar installation tiruchirappalli, solar company trichy, rooftop solar trichy, residential solar trichy, commercial solar trichy, solar panel dealers trichy, TANGEDCO subsidy trichy",
  alternates: {
    canonical: "https://www.blueraysgreenenergy.com/trichy",
  },
  openGraph: {
    title: "Solar Panel Installation Trichy - Blue Rays Green Energy",
    description: "Trichy&apos;s trusted solar company. Expert installations. Government subsidy support. Free consultation.",
    url: "https://www.blueraysgreenenergy.com/trichy",
  },
};

export default function TrichyPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Serving Tiruchirappalli (Trichy)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Solar Panel Installation in Trichy
            </h1>
            <p className="text-lg sm:text-xl mb-8 leading-relaxed">
              Tiruchirappalli&apos;s Leading Solar Company | Expert Installations | Government Subsidy Support
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

      {/* Why Choose Us for Trichy */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Why Trichy Trusts Blue Rays Green Energy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Expert Installations", desc: "In Trichy & nearby areas" },
              { icon: Star, title: "4.9/5 Rating", desc: "From Trichy customers" },
              { icon: CheckCircle, title: "Same Day Visit", desc: "Free site survey in Trichy" },
              { icon: Phone, title: "Local Support", desc: "Quick response for Trichy" },
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

      {/* Areas We Serve in Trichy */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Areas We Serve in Trichy
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Thillai Nagar",
              "Cantonment",
              "Srirangam",
              "K K Nagar",
              "Puthur",
              "Tennur",
              "Crawford",
              "Woraiyur",
              "Thiruverumbur",
              "Ariyamangalam",
              "Navalpattu",
              "Ponmalai",
              "Golden Rock",
              "Manachanallur",
              "Lalgudi Road",
              "Karumandapam",
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
            Don&apos;t see your area? <Link href="/contact" className="text-blue-600 font-semibold hover:underline">Contact us</Link> - We serve all of Trichy district!
          </p>
        </div>
      </section>

      {/* Trichy Solar Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Solar Power for Trichy&apos;s Industrial Hub
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Perfect for Industrial Trichy</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Industrial Power Needs:</strong>
                    <p className="text-gray-600">Trichy&apos;s manufacturing units save 60-80% on electricity costs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Year-Round Sunshine:</strong>
                    <p className="text-gray-600">Trichy receives excellent solar radiation with minimal rain disruption</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">BHEL & Industrial Area:</strong>
                    <p className="text-gray-600">Serving major industrial zones with reliable solar solutions</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Typical Savings for Trichy</h3>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-semibold">Residential (3kW)</span>
                    <span className="text-green-600 font-bold">₹3,000-5,000/month</span>
                  </div>
                  <p className="text-sm text-gray-600">Average household savings</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-semibold">Commercial (15kW)</span>
                    <span className="text-green-600 font-bold">₹15,000-22,000/month</span>
                  </div>
                  <p className="text-sm text-gray-600">Small business & shops</p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-semibold">Industrial (100kW+)</span>
                    <span className="text-green-600 font-bold">₹1,50,000+/month</span>
                  </div>
                  <p className="text-sm text-gray-600">Manufacturing units</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Subsidy for Trichy */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-900 to-cyan-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Government Subsidy Available for Trichy Residents
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
            ✓ We handle all documentation and TANGEDCO coordination for Trichy residents
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
            What Trichy Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sundar Engineering",
                location: "BHEL Trichy",
                rating: 5,
                text: "Installed 80kW system for our workshop. Blue Rays completed the project in 5 days. Saving over ₹1 lakh monthly!",
              },
              {
                name: "Priya Textiles",
                location: "Puthur, Trichy",
                rating: 5,
                text: "20kW installation for our textile unit. Professional service, excellent post-installation support. Highly recommended!",
              },
              {
                name: "Kumar R",
                location: "Thillai Nagar, Trichy",
                rating: 5,
                text: "Got 5kW system with full subsidy support. Blue Rays team was very helpful with all TANGEDCO paperwork.",
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
            Common Questions from Trichy Customers
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do you handle industrial solar installations in Trichy?",
                a: "Yes! We specialize in large-scale industrial installations from 25kW to 500kW+. Serving BHEL area, Ponmalai industrial zone, and other manufacturing hubs.",
              },
              {
                q: "How long does installation take in Trichy?",
                a: "Residential: 1-2 days. Commercial (10-25kW): 3-5 days. Industrial (50kW+): 7-14 days. Free site survey within 24 hours.",
              },
              {
                q: "Is net metering available in Trichy?",
                a: "Yes! TANGEDCO provides net metering across Tiruchirappalli district. We handle all applications and meter installation coordination.",
              },
              {
                q: "What about maintenance for large systems in Trichy?",
                a: "We provide AMC packages for commercial and industrial systems. Quarterly maintenance, online monitoring, and 24/7 support available.",
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
            Ready to Go Solar in Trichy?
          </h2>
          <p className="text-xl mb-8">
            Join the solar revolution in Tiruchirappalli. Get your free site survey today!
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
            <strong>Service Coverage:</strong> We serve entire Trichy district and surrounding areas (Ariyalur, Perambalur, Karur) |{" "}
            <strong>Distance from Chennai office:</strong> 320km | <strong>Response Time:</strong> Same-day site visit available
          </p>
        </div>
      </section>
    </main>
  );
}
