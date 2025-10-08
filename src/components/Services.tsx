"use client";

import { Home, Building2, Factory, Wrench } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Solar",
    description: "Custom solar solutions for your home. Reduce electricity bills and increase property value with our premium residential installations.",
    features: ["Free Site Assessment", "25-Year Warranty", "Monitoring System"]
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    description: "Scalable solar systems for businesses. Cut operational costs and demonstrate your commitment to sustainability.",
    features: ["ROI Analysis", "Tax Incentives", "Bulk Pricing"]
  },
  {
    icon: Factory,
    title: "Industrial Solar",
    description: "Large-scale solar installations for industrial facilities. Maximize energy independence and minimize overhead costs.",
    features: ["Custom Engineering", "24/7 Support", "Performance Guarantee"]
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Comprehensive maintenance services to keep your solar panels performing at peak efficiency year-round.",
    features: ["Regular Inspections", "Cleaning Services", "Emergency Repairs"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Solar Solutions
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive solar energy services tailored to your specific needs and goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-14 w-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
