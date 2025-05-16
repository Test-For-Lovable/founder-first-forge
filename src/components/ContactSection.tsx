
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Zap, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactInfo = [
  {
    icon: Mail,
    title: "Email",
    detail: "usama@techvision.com",
    link: "mailto:usama@techvision.com"
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
      title: "Message Sent",
      description: "Thank you for reaching out. Usama will get back to you shortly.",
    });
  };

  return (
    <section id="contact" className="py-24 relative bg-futuristic-midnight overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-futuristic-purple/10 to-transparent opacity-30"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-futuristic-cyan/10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Zap className="h-4 w-4 text-futuristic-neonGreen" />
            <span className="text-sm text-white/90">Let's Connect</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-gradient">Transform</span> Your Digital Vision?
          </h2>
          
          <p className="text-lg text-white/70 max-w-2xl">
            Reach out to discuss how Usama can help bring your technical vision to life with strategic guidance and expert implementation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-xl border border-white/20 hover:shadow-glow transition-all duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-futuristic-purple focus-visible:border-futuristic-purple"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-futuristic-purple focus-visible:border-futuristic-purple"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="How can Usama help you?"
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-futuristic-purple focus-visible:border-futuristic-purple"
                  required
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or technical challenge..."
                  className="w-full min-h-[150px] bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-futuristic-purple focus-visible:border-futuristic-purple"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-futuristic-purple to-futuristic-blue hover:shadow-neon text-white w-full md:w-auto px-8 py-6 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-xl border border-white/20 h-full hover:shadow-glow transition-all duration-500 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                {ContactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-futuristic-purple/20 to-futuristic-purple/5 flex items-center justify-center mr-4 border border-white/10">
                      <item.icon className="h-5 w-5 text-futuristic-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <a
                        href={item.link}
                        className="text-white/80 hover:text-futuristic-purple transition-colors"
                      >
                        {item.detail}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 pt-8 border-t border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Availability</h3>
                <p className="text-white/80">
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
