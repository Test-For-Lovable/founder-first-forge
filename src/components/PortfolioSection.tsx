
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Briefcase, FileCheck, Zap } from "lucide-react";

const portfolioItems = [
  {
    title: "HealthTech Startup Transformation",
    category: "Strategy Consulting",
    description: "Guided a healthcare tech startup from concept to $2M seed funding by defining a clear technical roadmap and MVP strategy.",
    outcome: "Successful funding round and market launch 2 months ahead of schedule.",
    icon: Award,
    color: "from-futuristic-purple to-futuristic-pink"
  },
  {
    title: "E-Commerce Platform Modernization",
    category: "Technical Due Diligence",
    description: "Led the technical assessment and modernization strategy for a legacy e-commerce platform facing scalability issues.",
    outcome: "70% reduction in page load time and 35% increase in conversion rates within 3 months.",
    icon: Briefcase,
    color: "from-futuristic-cyan to-futuristic-blue"
  },
  {
    title: "FinTech Product Scoping",
    category: "MVP Development",
    description: "Defined the optimal scope for a financial analytics platform, balancing technical constraints with ambitious business goals.",
    outcome: "MVP delivered under budget with core features that attracted 3 major clients within first month.",
    icon: FileCheck,
    color: "from-futuristic-neonGreen to-futuristic-cyan"
  }
];

const PortfolioSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  return (
    <section id="portfolio" className="py-24 relative bg-futuristic-dark overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-40 right-10 w-96 h-96 rounded-full bg-futuristic-blue/10 filter blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-futuristic-purple/10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Zap className="h-4 w-4 text-futuristic-neonGreen" />
            <span className="text-sm text-white/90">Client Success Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Proven Track Record of <span className="text-gradient">Delivering Results</span>
          </h2>
          
          <p className="text-lg text-white/70 max-w-2xl">
            A showcase of strategic partnerships that have led to transformative outcomes
            for startups and established companies alike.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index}
              className={`bg-gradient-to-br from-futuristic-midnight/90 to-futuristic-dark border border-futuristic-purple/30 overflow-hidden h-full transition-all duration-500 hover:transform hover:scale-105 hover:shadow-neon group`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <CardContent className="p-8 relative h-full flex flex-col">
                <div className={`absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br ${item.color} rounded-full blur-xl opacity-50`}></div>
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center mb-5">
                    <item.icon className={`h-7 w-7 bg-gradient-to-br ${item.color} bg-clip-text text-transparent`} />
                  </div>
                  
                  <div className="mb-2 text-white/80 text-sm font-medium">{item.category}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/90 mb-5">{item.description}</p>
                  
                  <div className="mt-auto">
                    <div className="p-3 bg-gradient-to-br from-futuristic-midnight/90 to-futuristic-dark border border-futuristic-purple/30 rounded-md flex items-center gap-2 mb-3">
                      <span className="text-futuristic-neonGreen font-medium">Outcome:</span> 
                      <span className="text-white">{item.outcome}</span>
                    </div>
                    
                    {activeIndex === index && (
                      <Button variant="ghost" className="mt-2 w-full justify-between group/btn bg-gradient-to-r from-transparent to-white/5 border border-white/10 hover:bg-white/10 text-white">
                        View Case Study
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
