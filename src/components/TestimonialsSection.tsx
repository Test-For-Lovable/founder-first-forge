
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Zap, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStartup Inc.",
    content: "Usama understood our problem even better than we did. Within weeks, he delivered a clear technical roadmap that aligned perfectly with our business goals and vision.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Michael Chen",
    position: "Founder, GrowthApp",
    content: "Working with Usama was transformative for our business. He took our complex idea and brought it to life, navigating technical decisions with exceptional expertise.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Rebecca Torres",
    position: "COO, Enterprise Solutions",
    content: "Usama's ability to translate technical concepts into business language saved us from making costly mistakes. His MVP scoping process was invaluable to our success.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-futuristic-dark overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-futuristic-purple/10 filter blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-futuristic-cyan/10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Zap className="h-4 w-4 text-futuristic-neonGreen" />
            <span className="text-sm text-white/90">Client Testimonials</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            What <span className="text-gradient">Clients Say</span> About Usama
          </h2>
          
          <p className="text-lg text-white/70 max-w-2xl">
            Discover how Usama has helped businesses overcome technical challenges and achieve remarkable results through strategic partnership.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-futuristic-midnight/90 to-futuristic-dark border border-futuristic-purple/30 overflow-hidden h-full hover:shadow-glow transition-all duration-500"
            >
              <CardContent className="p-8 relative">
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-futuristic-purple/30 to-futuristic-cyan/30 rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-futuristic-pink text-futuristic-pink" />
                    ))}
                  </div>
                  
                  <div className="mb-6 relative">
                    <Quote className="absolute -top-2 -left-2 h-6 w-6 text-futuristic-purple/50" />
                    <p className="text-white pl-6 italic">"{testimonial.content}"</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-futuristic-purple/30">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-white/80">{testimonial.position}</p>
                    </div>
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

export default TestimonialsSection;
