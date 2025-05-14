
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const skillsList = [
  "Technical strategy development",
  "Product scoping and roadmapping",
  "Tech stack selection",
  "Vendor and team selection",
  "Cost estimation and budgeting",
  "Legacy system modernization"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-consulting-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-consulting-navy mb-6">About Me</h2>
            <p className="text-lg text-consulting-gray mb-6">
              With over a decade of experience bridging the gap between business needs and technical execution, I help 
              non-technical founders transform their ideas into successful digital products.
            </p>
            <p className="text-lg text-consulting-gray mb-6">
              My approach combines deep technical knowledge with business acumen, allowing me to communicate complex 
              concepts in terms you'll understand and appreciate. I'm passionate about empowering business leaders to 
              make informed technology decisions with confidence.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {skillsList.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-consulting-purple" />
                  <span className="text-consulting-gray">{skill}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-consulting-purple hover:bg-consulting-navy text-white">
              Download CV
            </Button>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-consulting-navy mb-6">My Consulting Approach</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-consulting-navy mb-2">Understand</h4>
                <p className="text-consulting-gray">
                  I take the time to deeply understand your business, goals, and challenges before proposing any technical solutions.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-consulting-navy mb-2">Strategize</h4>
                <p className="text-consulting-gray">
                  Working together, we develop a tailored strategy that addresses your specific needs while optimizing for cost, time, and quality.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-consulting-navy mb-2">Execute</h4>
                <p className="text-consulting-gray">
                  Whether you need hands-on guidance or oversight of your technical teams, I ensure your vision is executed with precision.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-consulting-navy mb-2">Scale</h4>
                <p className="text-consulting-gray">
                  As your business grows, I help you scale your technical infrastructure and processes to meet increasing demands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
