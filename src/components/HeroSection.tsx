
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-consulting-light min-h-screen flex items-center pt-20">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-consulting-purple/5 to-transparent opacity-70"></div>
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-consulting-navy mb-6 leading-tight">
              Technical Expertise for <span className="text-consulting-purple">Non-Tech Founders</span>
            </h1>
            <p className="text-xl text-consulting-gray mb-8 max-w-lg">
              Transforming your vision into reality with strategic technical consulting for SMEs and funded startups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-consulting-purple hover:bg-consulting-navy text-white px-6 py-3 text-lg">
                Book a Consultation
              </Button>
              <Button variant="outline" className="border-consulting-purple text-consulting-navy hover:bg-consulting-purple hover:text-white px-6 py-3 text-lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative rounded-xl overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src="/lovable-uploads/a2ed87e9-43bb-4bd0-8b31-6eba008b9cd2.png" 
                alt="Tech Consultant" 
                className="w-64 md:w-80 lg:w-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
