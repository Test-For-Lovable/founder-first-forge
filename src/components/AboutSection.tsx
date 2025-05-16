
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, FileText, Zap } from "lucide-react";

const skillsList = [
  "Full-stack development expertise",
  "Product strategy and roadmapping",
  "Tech stack optimization",
  "Team building and leadership",
  "Cost-efficient scalable solutions",
  "Legacy system modernization"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative bg-futuristic-midnight overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-futuristic-cyan/10 to-transparent opacity-50"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-futuristic-purple/10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Zap className="h-4 w-4 text-futuristic-neonGreen" />
              <span className="text-sm text-white/90">About Usama</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Technical Partnership for <span className="text-gradient">Visionary Entrepreneurs</span>
            </h2>
            
            <p className="text-lg text-white/70">
              With over a decade of experience bridging the gap between business vision and technical execution, Usama helps 
              founders and executives transform their ideas into successful digital products.
            </p>
            
            <p className="text-lg text-white/70">
              Usama's approach combines deep technical knowledge with business acumen, allowing him to communicate complex 
              concepts in terms you'll understand and make informed decisions with confidence.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {skillsList.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-futuristic-neonGreen/20 border border-futuristic-neonGreen/30 flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 text-futuristic-neonGreen" />
                  </div>
                  <span className="text-white/80">{skill}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-gradient-to-r from-futuristic-purple to-futuristic-blue text-white hover:shadow-neon transition-all gap-2">
              <FileText className="h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          <div className="relative">
            {/* Decorative shapes */}
            <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-futuristic-purple/20 to-futuristic-cyan/20 rounded-xl blur-2xl"></div>
            
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/20 p-8 shadow-lg hover:shadow-glow transition-shadow duration-500">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-futuristic-purple/20 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-futuristic-purple" />
                </div>
                <span>Usama's Consulting Approach</span>
              </h3>
              
              <div className="space-y-8">
                {[
                  { title: "Discovery", description: "Usama takes the time to deeply understand your business, goals, and challenges before proposing any technical solutions." },
                  { title: "Strategy", description: "Working collaboratively, Usama develops a tailored tech strategy that addresses your specific needs while optimizing for cost, time, and quality." },
                  { title: "Implementation", description: "Whether you need hands-on guidance or oversight of your technical teams, Usama ensures your vision is executed with precision." },
                  { title: "Scale", description: "As your business grows, Usama helps you scale your technical infrastructure and processes to meet increasing demands and evolving market needs." }
                ].map((step, index) => (
                  <div key={index} className="relative">
                    {index < 3 && (
                      <div className="absolute left-3.5 top-12 w-0.5 h-12 bg-gradient-to-b from-futuristic-purple/50 to-futuristic-purple/0"></div>
                    )}
                    <div className="flex gap-6">
                      <div className="w-7 h-7 rounded-full bg-futuristic-purple flex items-center justify-center text-white shrink-0 shadow-neon">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                        <p className="text-white/70">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
