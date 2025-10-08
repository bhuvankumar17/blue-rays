"use client";

import { DollarSign, Shield, Leaf, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Save Money",
    description: "Reduce your electricity bills by up to 70% and enjoy long-term savings with our efficient solar solutions.",
    stat: "70%",
    statLabel: "Average Savings"
  },
  {
    icon: Shield,
    title: "Energy Independence",
    description: "Generate your own clean energy and protect yourself from rising utility costs and power outages.",
    stat: "24/7",
    statLabel: "Power Security"
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    description: "Reduce your carbon footprint and contribute to a cleaner, more sustainable future for generations.",
    stat: "100%",
    statLabel: "Clean Energy"
  },
  {
    icon: TrendingUp,
    title: "Increase Property Value",
    description: "Solar panels can increase your property value by an average of 4% and make it more attractive to buyers.",
    stat: "+4%",
    statLabel: "Property Value"
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose Solar Energy?
          </h2>
          <p className="text-xl text-blue-100">
            Experience the multiple benefits of switching to clean, renewable solar power
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="h-14 w-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-blue-600 transition-all">
                  <Icon className="h-7 w-7" />
                </div>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold">{benefit.stat}</div>
                  <div className="text-blue-100 text-sm">{benefit.statLabel}</div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-blue-100 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
