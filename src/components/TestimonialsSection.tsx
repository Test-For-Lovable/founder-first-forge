
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStartup Inc.",
    content: "He understood our problem even better than we did. Within weeks, we had a clear technical roadmap that aligned perfectly with our business goals.",
    rating: 5
  },
  {
    name: "Michael Chen",
    position: "Founder, GrowthApp",
    content: "Working with him was transformative for our business. He took our idea and made it real, navigating complex technical decisions with ease.",
    rating: 5
  },
  {
    name: "Rebecca Torres",
    position: "COO, Enterprise Solutions",
    content: "His ability to translate technical concepts into business language saved us from making costly mistakes. The MVP scoping process was invaluable.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-consulting-navy mb-4">What Clients Say</h2>
          <p className="text-lg text-consulting-gray max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients have to say about their experience working with me.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg h-full">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-consulting-purple text-consulting-purple" />
                  ))}
                </div>
                <p className="text-consulting-gray mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-consulting-navy">{testimonial.name}</h4>
                  <p className="text-sm text-consulting-gray">{testimonial.position}</p>
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
