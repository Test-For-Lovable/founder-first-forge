
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactInfo = [
  {
    icon: Mail,
    title: "Email",
    detail: "contact@techconsult.com",
    link: "mailto:contact@techconsult.com"
  },
  {
    icon: Phone,
    title: "Phone",
    detail: "+1 (555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "San Francisco, CA",
    link: "#"
  }
];

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted",
      description: "Thank you for reaching out. I'll get back to you shortly.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-consulting-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-consulting-navy mb-4">Get In Touch</h2>
          <p className="text-lg text-consulting-gray max-w-2xl mx-auto">
            Ready to transform your technical vision into reality? Let's discuss how I can help you achieve your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-consulting-navy mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-consulting-navy mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-consulting-navy mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="How can I help you?"
                  className="w-full"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-consulting-navy mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  className="w-full min-h-[150px]"
                  required
                />
              </div>
              
              <Button type="submit" className="bg-consulting-purple hover:bg-consulting-navy text-white w-full md:w-auto px-8">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-xl font-bold text-consulting-navy mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {ContactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-consulting-purple/10 flex items-center justify-center mr-4">
                      <item.icon className="h-5 w-5 text-consulting-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-consulting-navy">{item.title}</h4>
                      <a
                        href={item.link}
                        className="text-consulting-gray hover:text-consulting-purple transition-colors"
                      >
                        {item.detail}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-consulting-navy mb-4">Office Hours</h3>
                <p className="text-consulting-gray">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Weekend: By appointment only
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
