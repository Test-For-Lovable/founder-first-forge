
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Briefcase, FileCheck, Zap, ChartBar, Users, Clock } from "lucide-react";
import usePortfolioItems from '@/hooks/usePortfolioItems';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const iconMap: Record<string, React.ElementType> = {
  "Award": Award,
  "Briefcase": Briefcase,
  "FileCheck": FileCheck,
  "ChartBar": ChartBar,
  "Users": Users,
  "Clock": Clock
};

const PortfolioShowcase = () => {
  const { portfolioItems } = usePortfolioItems();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  return (
    <section className="py-24 relative bg-futuristic-dark overflow-hidden">
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
            Usama's Proven Track Record of <span className="text-gradient">Delivering Results</span>
          </h2>
          
          <p className="text-lg text-white/70 max-w-2xl">
            A showcase of strategic partnerships that have led to transformative outcomes
            for startups, enterprises, and innovative tech companies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => {
            const Icon = iconMap[item.icon] || Award;
            
            return (
              <Card 
                key={item.id}
                className={`bg-gradient-to-br from-futuristic-midnight/90 to-futuristic-dark border border-futuristic-purple/30 overflow-hidden h-full transition-all duration-500 hover:transform hover:scale-105 hover:shadow-neon group`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <CardContent className="p-8 relative h-full flex flex-col">
                  <div className={`absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br ${item.color} rounded-full blur-xl opacity-50`}></div>
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                    {/* Visual Icon Area */}
                    <AspectRatio ratio={16/9} className="mb-6 overflow-hidden rounded-xl border border-white/10">
                      <div className={`w-full h-full bg-gradient-to-br ${item.color} flex items-center justify-center p-6`}>
                        <Icon className="h-16 w-16 text-white/90" strokeWidth={1.5} />
                      </div>
                    </AspectRatio>
                    
                    {/* Category Tag */}
                    <div className="mb-3">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/80">{item.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-white/90 mb-5">{item.description}</p>
                    
                    <div className="mt-auto">
                      {/* Stats/Metrics Section */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="p-3 bg-white/5 border border-futuristic-purple/20 rounded-md flex flex-col items-center">
                          <ChartBar className="h-5 w-5 mb-1 text-futuristic-neonGreen" />
                          <span className="text-xs text-white/70">Impact</span>
                          <span className="text-sm font-bold text-white">High</span>
                        </div>
                        <div className="p-3 bg-white/5 border border-futuristic-purple/20 rounded-md flex flex-col items-center">
                          <Clock className="h-5 w-5 mb-1 text-futuristic-cyan" />
                          <span className="text-xs text-white/70">Duration</span>
                          <span className="text-sm font-bold text-white">3 Months</span>
                        </div>
                      </div>
                    
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
