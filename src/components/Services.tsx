"use client";

export function Services() {
  return (
    <section id="products" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-teal-700 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600">
            We adopt an individual approach with each and every client and our business model is built on the following key promises.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Solar Panels Product */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 to-blue-600">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl">☀️</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Solar Panels</h3>
                <p className="text-sm opacity-90">High-efficiency solar panel systems for residential and commercial use</p>
              </div>
            </div>
          </div>

          {/* Solar Installation Product */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="aspect-[4/3] bg-gradient-to-br from-teal-400 to-green-600">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl">🏭</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Solar Installation</h3>
                <p className="text-sm opacity-90">Professional installation services for all types of solar systems</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Product Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="font-bold text-lg text-teal-700 mb-2">High Efficiency</h4>
            <p className="text-gray-600 text-sm">Premium solar panels with maximum energy conversion rates</p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <div className="text-3xl mb-3">🛡️</div>
            <h4 className="font-bold text-lg text-teal-700 mb-2">25-Year Warranty</h4>
            <p className="text-gray-600 text-sm">Industry-leading warranty on all our products and installations</p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <div className="text-3xl mb-3">👥</div>
            <h4 className="font-bold text-lg text-teal-700 mb-2">Expert Support</h4>
            <p className="text-gray-600 text-sm">Dedicated customer service and technical support team</p>
          </div>
        </div>
      </div>
    </section>
  );
}
