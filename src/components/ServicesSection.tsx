
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Strategy, Code, Users } from "lucide-react";

const services = [
  {
    icon: Strategy,
    title: "Strategy Consulting",
    description: "Develop a clear roadmap for your technical journey, from market analysis to technology selection.",
    details: "I help non-technical founders navigate the complex tech landscape with confidence, creating actionable strategies that align with your business goals."
  },
  {
    icon: Code,
    title: "MVP Scoping",
    description: "Define the perfect scope for your Minimum Viable Product to validate your concept without overspending.",
    details: "Balance feature richness with development costs to create a compelling product that addresses core user needs while conserving your resources."
  },
  {
    icon: Users,
    title: "Discovery Workshops",
    description: "Collaborative sessions to extract, refine, and document your vision into implementable requirements.",
    details: "Structured workshops that bridge the gap between your business vision and technical implementation, ensuring everyone is aligned on the path forward."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-consulting-navy mb-4">Services Tailored for Your Success</h2>
          <p className="text-lg text-consulting-gray max-w-2xl mx-auto">
            Specialized consulting services designed to help non-technical founders and businesses navigate the tech landscape with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-consulting-purple/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-consulting-purple" />
                </div>
                <CardTitle className="text-xl font-semibold text-consulting-navy">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-consulting-gray mb-4">{service.description}</CardDescription>
                <p className="text-sm text-consulting-gray">{service.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
