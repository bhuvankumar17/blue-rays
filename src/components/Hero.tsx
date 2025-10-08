"use client";

export function Hero() {
  return (
    <section className="pt-24 pb-8 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-teal-600 uppercase tracking-wide">
                ABOUT US
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-teal-700 leading-tight">
              Why Choose Our Solar Energy Platform
            </h1>
            
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                When you choose Positive Energy Solar you are choosing the{" "}
                <span className="font-bold text-teal-700">
                  most qualified solar professionals in Salem, award-winning customer service
                </span>
                , the{" "}
                <span className="font-bold text-teal-700">
                  highest efficiency solar panels available
                </span>
                , 100% customer satisfaction, you can trust that your solar system will be safe, 
                reliable, and provide you with decades of clean solar energy.
              </p>
              
              <p className="text-gray-600">
                Start saving today! Call{" "}
                <a href="tel:+919600970313" className="font-bold text-teal-600 hover:underline">
                  +91 9600970313
                </a>
                {" "}to schedule your free consultation
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-600/20 to-blue-600/20">
                <div className="text-center text-teal-700 p-8">
                  <div className="text-7xl mb-4">🏭</div>
                  <p className="text-xl font-semibold">Commercial Solar Installation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
