
import React from 'react';
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Code } from "lucide-react";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-futuristic-dark to-futuristic-midnight overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-futuristic-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-futuristic-cyan/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-7/12 space-y-8">
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-fade-in" style={{animationDelay: "200ms"}}>
              <Zap className="h-4 w-4 text-futuristic-neonGreen" />
              <span className="text-sm text-white/90">Technical Vision • Strategic Execution</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in" style={{animationDelay: "400ms"}}>
              Usama's <span className="text-gradient">Technical Expertise</span> for Ambitious <span className="text-gradient">Founders</span>
            </h1>
            
            <p className="text-xl text-white/70 max-w-xl animate-fade-in" style={{animationDelay: "600ms"}}>
              Transforming business visions into technological reality with strategic consulting for ambitious founders, startups, and established enterprises.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 animate-fade-in" style={{animationDelay: "800ms"}}>
              <Button className="group bg-futuristic-purple hover:bg-futuristic-purple/90 text-white px-6 py-6 text-lg rounded-xl flex items-center gap-2 transition-all duration-300 hover:shadow-neon">
                Schedule a Consultation
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-6 py-6 text-lg rounded-xl flex items-center gap-2" asChild>
                <Link to="/portfolio">
                  <Code className="h-5 w-5" />
                  View Portfolio
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-5/12 flex justify-center md:justify-end animate-fade-in" style={{animationDelay: "1000ms"}}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -z-10 w-full h-full rounded-full bg-gradient-to-r from-futuristic-purple/30 to-futuristic-cyan/30 blur-3xl animate-pulse-slow"></div>
              
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl hover:shadow-glow transition-shadow duration-500 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-conic from-futuristic-purple/20 via-transparent to-futuristic-cyan/20 opacity-30"></div>
                <img 
                  src="/lovable-uploads/a2ed87e9-43bb-4bd0-8b31-6eba008b9cd2.png" 
                  alt="Usama - Tech Consultant" 
                  className="w-64 md:w-80 lg:w-96 object-cover relative z-10"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 rounded-xl border border-futuristic-purple/30 bg-gradient-to-br from-futuristic-purple/10 to-transparent backdrop-blur-sm animate-float" style={{animationDelay: "1s"}}></div>
              <div className="absolute -bottom-10 -left-10 w-16 h-16 rounded-full border border-futuristic-cyan/30 bg-gradient-to-br from-futuristic-cyan/10 to-transparent backdrop-blur-sm animate-float" style={{animationDelay: "1.5s"}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
