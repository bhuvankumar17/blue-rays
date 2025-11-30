import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Solar Energy Blog - Tips, Guides & News | Blue Rays Green Energy",
  description: "Expert solar energy articles, Tamil Nadu solar guides, subsidy information, installation tips, and industry news. Learn everything about solar panels from Blue Rays Green Energy.",
  keywords: "solar energy blog, solar panel guide tamil nadu, solar subsidy information, solar installation tips, TANGEDCO solar news, solar panel maintenance",
  alternates: {
    canonical: "https://www.blueraysgreenenergy.com/blog",
  },
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Tamil Nadu Solar Panel Subsidy 2025: Complete Guide",
      slug: "tamil-nadu-solar-subsidy-2025",
      excerpt: "Everything you need to know about getting ₹30,000 to ₹78,000 government subsidy for solar panel installation in Tamil Nadu through TANGEDCO.",
      date: "November 2025",
      readTime: "10 min read",
      category: "Subsidy & Finance",
      image: "/images/blog/subsidy-guide.jpg",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Solar Energy Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Expert insights, guides, and news about solar energy in Tamil Nadu. Learn everything from subsidies to installation tips.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                  <div className="text-blue-600 font-bold text-xl">{post.category}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-cyan-600 font-semibold group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">More Articles Coming Soon!</h3>
              <p className="text-gray-700 mb-6">
                We&apos;re preparing comprehensive guides on solar panel costs, installation process, maintenance tips, and more Tamil Nadu-specific content.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {[
                  "Solar Panel Cost in Chennai 2025",
                  "Best Solar Panels for Tamil Nadu Climate",
                  "Net Metering Guide for TANGEDCO",
                  "Commercial Solar Installation Process",
                ].map((title, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-600">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    <span>{title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-cyan-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions About Solar?</h2>
          <p className="text-xl mb-6">
            Talk to our experts for personalized guidance on solar installation in Tamil Nadu
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}
