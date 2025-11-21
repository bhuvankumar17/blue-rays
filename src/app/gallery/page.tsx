"use client";

import Image from "next/image";

export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Project Gallery
          </h1>
          <p className="text-lg text-gray-600">
            Explore our solar installation projects and success stories
          </p>
        </div>

        {/* Video Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Featured Project Videos
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video
                controls
                className="w-full h-auto"
                poster="/images/commercial-hero.jpg"
              >
                <source src="/images/v1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50">
                <h3 className="text-lg font-bold text-blue-900 text-center">Solar Installation Project 1</h3>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video
                controls
                className="w-full h-auto"
                poster="/images/hero-background.jpg"
              >
                <source src="/images/v2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50">
                <h3 className="text-lg font-bold text-blue-900 text-center">Solar Installation Project 2</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Images Grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Installation Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <Image
                src="/images/commercial-hero.jpg"
                alt="Commercial Installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <Image
                src="/images/technician-installation.jpg"
                alt="Technician at Work"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <Image
                src="/images/hero-background.jpg"
                alt="Solar Panel Field"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
