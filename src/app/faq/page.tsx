import { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ - Solar Panel Questions Tamil Nadu | Blue Rays Green Energy",
  description: "Common questions about solar panel installation in Tamil Nadu. Subsidy process, costs, TANGEDCO approvals, net metering, ROI calculations. Get expert answers.",
  keywords: "solar panel faq tamil nadu, solar subsidy questions, TANGEDCO solar faq, solar cost chennai, net metering tamil nadu, solar panel warranty",
  alternates: {
    canonical: "https://www.blueraysgreenenergy.com/faq",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Government Subsidy & TANGEDCO",
      questions: [
        {
          q: "How much government subsidy is available in Tamil Nadu?",
          a: "The Tamil Nadu government through TANGEDCO offers: ₹30,000 for 1 KW, ₹60,000 for 2 KW, and ₹78,000 for 3 KW or above residential solar systems. We handle all documentation and application processes for you.",
        },
        {
          q: "How long does it take to get TANGEDCO approval?",
          a: "TANGEDCO net metering approval typically takes 30-45 days. We manage the entire process including application submission, inspection coordination, and final approval to make it hassle-free for you.",
        },
        {
          q: "What documents are needed for subsidy application?",
          a: "You need: Aadhaar card, electricity bill, property documents, bank account details, and passport-size photos. Blue Rays Green Energy assists with all documentation and submission.",
        },
      ],
    },
    {
      category: "Installation & Process",
      questions: [
        {
          q: "How long does solar panel installation take in Chennai/Tamil Nadu?",
          a: "Residential installations (1-10 KW) take 1-2 days. Commercial installations (10-100 KW) take 3-7 days. We offer same-day site surveys across Chennai, Coimbatore, Madurai, and all Tamil Nadu cities.",
        },
        {
          q: "Do you provide installation in all Tamil Nadu districts?",
          a: "Yes! Blue Rays serves all 32 districts of Tamil Nadu including Chennai, Coimbatore, Madurai, Trichy, Salem, Tirunelveli, Erode, Vellore, and more. Our local teams ensure quick response times.",
        },
        {
          q: "What happens during monsoon season?",
          a: "Solar panels work efficiently even during cloudy/rainy days, producing 10-25% of capacity. Tamil Nadu receives excellent sunshine year-round (300+ sunny days), ensuring consistent energy production.",
        },
      ],
    },
    {
      category: "Cost & Savings",
      questions: [
        {
          q: "What is the cost of solar panels in Tamil Nadu?",
          a: "After subsidy: 1KW costs ₹40,000-45,000, 3KW costs ₹1,20,000-1,40,000, 5KW costs ₹2,00,000-2,30,000. Prices include panels, inverter, installation, and 5-year maintenance. Contact us for exact quotes.",
        },
        {
          q: "What are monthly savings on electricity bills?",
          a: "Average savings in Tamil Nadu: 3KW system saves ₹3,000-5,000/month, 5KW saves ₹5,000-8,000/month, 10KW saves ₹12,000-18,000/month. ROI achieved in 3-5 years.",
        },
        {
          q: "Are EMI/loan options available?",
          a: "Yes! We have partnerships with leading banks offering solar loans at 8-12% interest. Convert your electricity bill into affordable EMI payments. Many customers pay ₹2,000-3,000/month instead of ₹5,000+ bills.",
        },
      ],
    },
    {
      category: "Technical & Warranty",
      questions: [
        {
          q: "What is the warranty on solar panels and inverters?",
          a: "Solar panels: 30-year performance warranty (Waaree, Adani, Tata brands). Inverters: 7-10 years warranty. We also provide 5 years of annual maintenance and cleaning services included.",
        },
        {
          q: "How is net metering calculated in Tamil Nadu?",
          a: "Excess power generated goes to TANGEDCO grid. You receive credits at ₹3-4 per unit. These credits offset your consumption during nighttime or low-production periods, significantly reducing bills.",
        },
        {
          q: "What maintenance is required for solar panels?",
          a: "Minimal maintenance needed. We recommend cleaning every 3-6 months (included in our package). Tamil Nadu's climate is ideal for solar. We provide online monitoring and annual health checkups.",
        },
      ],
    },
    {
      category: "Chennai & City-Specific",
      questions: [
        {
          q: "Is solar profitable in Chennai's coastal climate?",
          a: "Absolutely! Chennai receives 5-6 hours of peak sunshine daily with 300+ sunny days/year. Coastal breeze keeps panels cooler, actually improving efficiency. Thousands of Chennai homes already benefit.",
        },
        {
          q: "Do I need special permissions in Chennai Corporation limits?",
          a: "For residential systems under 10KW, building permission isn't required. We handle TANGEDCO approvals. For commercial, we manage all necessary permissions from Chennai Corporation and electricity board.",
        },
        {
          q: "What about Coimbatore, Madurai, and other cities?",
          a: "We have dedicated teams in all major Tamil Nadu cities. Each location has specific solar policies that we're experts in. Contact us for city-specific information and site assessments.",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl mb-8">
            Everything you need to know about solar panel installation in Tamil Nadu
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
              <MessageCircle className="h-5 w-5 mr-2" />
              Ask Your Question
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 pb-3 border-b-2 border-blue-600">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.questions.map((faq, qIndex) => (
                  <div
                    key={qIndex}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <h3 className="font-bold text-lg text-blue-900 mb-3 flex items-start">
                      <span className="text-cyan-600 mr-3 text-2xl flex-shrink-0">Q.</span>
                      <span>{faq.q}</span>
                    </h3>
                    <div className="pl-9 text-gray-700 leading-relaxed">
                      <span className="text-lime-600 font-bold mr-2">A.</span>
                      {faq.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
            Still Have Questions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-blue-900 mb-2">Call Us</h3>
              <a
                href="tel:+919600970313"
                className="text-cyan-600 font-semibold hover:underline"
              >
                +91 9600970313
              </a>
              <p className="text-sm text-gray-600 mt-2">Mon-Sat: 9 AM - 6 PM</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center">
              <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-blue-900 mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/919600970313"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 font-semibold hover:underline"
              >
                Chat with us
              </a>
              <p className="text-sm text-gray-600 mt-2">Quick response</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-blue-900 mb-2">Email Us</h3>
              <a
                href="mailto:info@blueraysgreenenergy.com"
                className="text-cyan-600 font-semibold hover:underline text-sm"
              >
                info@blueraysgreenenergy.com
              </a>
              <p className="text-sm text-gray-600 mt-2">24-hour response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-900 to-cyan-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <MapPin className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
          <h3 className="text-2xl font-bold mb-4">Serving All of Tamil Nadu</h3>
          <p className="text-lg mb-4">
            Chennai • Coimbatore • Madurai • Trichy • Salem • Namakkal • Tirunelveli • Erode • Vellore • Thoothukudi • Dindigul • Thanjavur • Tiruppur • and all 32 districts
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-xl mt-4"
          >
            Schedule Free Site Survey
          </Link>
        </div>
      </section>
    </main>
  );
}
