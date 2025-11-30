import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Star, CheckCircle, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Solar Panel Installation Madurai | Best Solar Company - Blue Rays Green Energy",
  description: "Leading solar panel installation in Madurai. Serving Anna Nagar, KK Nagar, Villapuram. ₹30k-₹78k govt subsidy. Expert installations. Free site survey. Call +91 9600970313",
  keywords: "solar panels madurai, solar installation madurai, solar company madurai, rooftop solar madurai, residential solar madurai, commercial solar madurai, solar panel dealers madurai, TANGEDCO subsidy madurai",
  alternates: {
    canonical: "https://www.blueraysgreenenergy.com/madurai",
  },
  openGraph: {
    title: "Solar Panel Installation Madurai - Blue Rays Green Energy",
    description: "Madurai&apos;s trusted solar company. Expert installations. Government subsidy support. Free consultation.",
    url: "https://www.blueraysgreenenergy.com/madurai",
  },
};

export default function MaduraiPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Serving Madurai</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Solar Panel Installation in Madurai
            </h1>
            <p className="text-lg sm:text-xl mb-8 leading-relaxed">
              Madurai&apos;s Trusted Solar Company | Expert Installations | Government Subsidy Support
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

      {/* Why Choose Us for Madurai */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Why Madurai Trusts Blue Rays Green Energy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Expert Installations", desc: "In Madurai & nearby areas" },
              { icon: Star, title: "4.9/5 Rating", desc: "From Madurai customers" },
              { icon: CheckCircle, title: "Same Day Visit", desc: "Free site survey in Madurai" },
              { icon: Phone, title: "Local Support", desc: "Quick response for Madurai" },
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

      {/* Areas We Serve in Madurai */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Areas We Serve in Madurai
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Anna Nagar",
              "KK Nagar",
              "Villapuram",
              "Goripalayam",
              "Sellur",
              "Thirunagar",
              "SS Colony",
              "Pasumalai",
              "Avaniyapuram",
              "Samayanallur",
              "Kappalur",
              "Madurai East",
              "Madurai West",
              "TVS Nagar",
              "Bibikulam",
              "Uthangudi",
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
            Don&apos;t see your area? <Link href="/contact" className="text-blue-600 font-semibold hover:underline">Contact us</Link> - We serve all of Madurai district!
          </p>
        </div>
      </section>

      {/* Madurai Solar Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Solar Power Perfect for Madurai&apos;s Climate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Excellent Solar Conditions</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">High Solar Irradiation:</strong>
                    <p className="text-gray-600">Madurai receives 310+ sunny days with excellent peak sun hours</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Hot Climate Benefits:</strong>
                    <p className="text-gray-600">High temperatures make solar ROI even better for Madurai homes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Temple City Going Green:</strong>
                    <p className="text-gray-600">Join hundreds of Madurai residents reducing electricity costs</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Typical Savings for Madurai</h3>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-semibold">Residential (3kW)</span>
                    <span className="text-green-600 font-bold">₹2,800-4,500/month</span>
                  </div>
                  <p className="text-sm text-gray-600">Average household savings on electricity bills</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-semibold">Commercial (10kW)</span>
                    <span className="text-green-600 font-bold">₹10,000-15,000/month</span>
                  </div>
                  <p className="text-sm text-gray-600">Small business savings</p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-semibold">Industrial (50kW+)</span>
                    <span className="text-green-600 font-bold">₹70,000+/month</span>
                  </div>
                  <p className="text-sm text-gray-600">Large facility savings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Subsidy for Madurai */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-900 to-cyan-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Government Subsidy Available for Madurai Residents
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
            ✓ We handle all documentation and TANGEDCO coordination for Madurai residents
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
            What Madurai Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Murugesan K",
                location: "Anna Nagar, Madurai",
                rating: 5,
                text: "Installed 4kW system for my home. Excellent service and very professional team. My electricity bill is now almost zero!",
              },
              {
                name: "Lakshmi Stores",
                location: "KK Nagar, Madurai",
                rating: 5,
                text: "Blue Rays installed 15kW for our retail shop. Saving ₹15,000 monthly. Best investment we made!",
              },
              {
                name: "Ramesh V",
                location: "Villapuram, Madurai",
                rating: 5,
                text: "Got full ₹78,000 subsidy with their help. They handled all TANGEDCO paperwork. Highly recommend!",
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
            Common Questions from Madurai Customers
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How long does solar installation take in Madurai?",
                a: "Residential systems (1-5 KW) take 1-2 days. We complete site survey within 24 hours of your call in Madurai.",
              },
              {
                q: "What about warranty and maintenance in Madurai?",
                a: "30-year panel warranty, 7-10 years inverter warranty. We provide annual maintenance with quick service in Madurai.",
              },
              {
                q: "Is net metering available in Madurai?",
                a: "Yes! TANGEDCO provides net metering across Madurai district. We handle all approvals and connections.",
              },
              {
                q: "How does solar work in Madurai&apos;s hot summers?",
                a: "Solar panels work excellently in hot weather. Madurai&apos;s high temperatures actually increase your electricity savings!",
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
            Ready to Go Solar in Madurai?
          </h2>
          <p className="text-xl mb-8">
            Join hundreds of happy customers in Madurai. Get your free site survey today!
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
            <strong>Service Coverage:</strong> We serve entire Madurai district and surrounding areas (Dindigul, Theni, Sivaganga) |{" "}
            <strong>Distance from Chennai office:</strong> 460km | <strong>Response Time:</strong> Same-day site visit available
          </p>
        </div>
      </section>
    </main>
  );
}
