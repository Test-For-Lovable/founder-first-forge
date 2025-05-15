
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BarChart2, Code, Users, Zap } from "lucide-react";

const services = [
  {
    icon: BarChart2,
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 relative bg-futuristic-dark overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-futuristic-purple/10 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Zap className="h-4 w-4 text-futuristic-neonGreen" />
            <span className="text-sm text-white/90">Tailored Solutions</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Services Designed for <span className="text-gradient">Your Success</span>
          </h2>
          
          <p className="text-lg text-white/70 max-w-2xl">
            Specialized consulting services helping non-technical founders navigate the tech landscape with confidence and clarity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-none bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:shadow-glow transition-all duration-500 h-full`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-futuristic-purple/20 to-futuristic-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-futuristic-purple/50 to-futuristic-cyan/50 rounded-xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity"></div>
              
              <CardHeader className="pb-2 relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-futuristic-purple/20 to-futuristic-purple/5 flex items-center justify-center mb-4 group-hover:animate-pulse-slow border border-white/10 backdrop-blur-sm">
                  <service.icon className="h-7 w-7 text-futuristic-purple" />
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-white/90 mb-4">{service.description}</p>
                <p className="text-sm text-white/80 group-hover:text-white transition-colors">{service.details}</p>
                
                {hoveredIndex === index && (
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-futuristic-purple/20 border border-futuristic-purple/30 flex items-center justify-center animate-fade-in">
                    <ArrowIcon className="h-5 w-5 text-futuristic-purple" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Custom arrow icon component
const ArrowIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default ServicesSection;
