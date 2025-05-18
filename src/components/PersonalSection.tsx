
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Star, Camera, Compass, Heart, Smile, Ship, Tent, Beach } from "lucide-react";

const funFacts = [
  {
    icon: <Ship className="h-5 w-5 text-futuristic-cyan" />,
    fact: "I once spent a month sailing around the Mediterranean, making friends in each port."
  },
  {
    icon: <Camera className="h-5 w-5 text-futuristic-purple" />,
    fact: "My camera has captured over 50,000 moments from around the world."
  },
  {
    icon: <Tent className="h-5 w-5 text-futuristic-neonGreen" />,
    fact: "I've camped under the Northern Lights in Iceland - a life-changing experience!"
  },
  {
    icon: <Beach className="h-5 w-5 text-futuristic-pink" />,
    fact: "I've tried surfing in four different oceans (and failed spectacularly in all of them)."
  },
  {
    icon: <Smile className="h-5 w-5 text-futuristic-cyan" />,
    fact: "I speak enough words in 7 languages to order food, find bathrooms, and make locals laugh."
  },
  {
    icon: <Heart className="h-5 w-5 text-futuristic-purple" />,
    fact: "I collect handmade crafts from local artisans in every country I visit."
  },
];

const PersonalSection = () => {
  return (
    <section className="py-24 relative bg-futuristic-midnight overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-futuristic-cyan/10 to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Personal Photos Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-futuristic-dark to-futuristic-purple/20 overflow-hidden p-1">
                    <div className="h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1501555088652-021faa106b9b')] bg-cover bg-center"></div>
                  </div>
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-futuristic-dark to-futuristic-cyan/20 overflow-hidden p-1">
                    <div className="h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1530521954074-e64f6810b32d')] bg-cover bg-center"></div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-futuristic-dark to-futuristic-neonGreen/20 overflow-hidden p-1">
                    <div className="h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1527631746610-bca00a040d60')] bg-cover bg-center"></div>
                  </div>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-futuristic-dark to-futuristic-pink/20 overflow-hidden p-1">
                    <div className="h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1488085061387-422e29b40080')] bg-cover bg-center"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -inset-10 bg-gradient-to-r from-futuristic-purple/10 to-futuristic-cyan/10 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -right-10 -bottom-10 w-20 h-20 border border-futuristic-purple/30 rounded-full"></div>
              <div className="absolute -left-5 -top-5 w-10 h-10 border border-futuristic-cyan/30 rounded-full"></div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Smile className="h-4 w-4 text-futuristic-neonGreen" />
              <span className="text-sm text-white/90">Life Beyond Work</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The Person Behind <span className="text-gradient">The Professional</span>
            </h2>
            
            <p className="text-lg text-white/70">
              When I'm not helping clients transform their ideas into digital reality, you'll find me seeking 
              new adventures around the globe. I believe that travel broadens the mind and enriches the spirit.
            </p>
            
            <p className="text-lg text-white/70">
              My experiences across different cultures have shaped my approach to problem-solving and innovation. 
              I bring this global perspective and adaptability to every project I undertake.
            </p>
            
            <div className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Star className="h-5 w-5 text-futuristic-purple" />
                <span>My Hobbies & Passions</span>
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {["Photography", "Hiking", "Cooking", "Language Learning", "Reading", "Scuba Diving"].map((hobby) => (
                  <span key={hobby} className="py-1.5 px-3 bg-white/10 rounded-full text-white/80 border border-white/5">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-futuristic-purple to-futuristic-blue text-white hover:shadow-neon transition-all gap-2">
                <FileText className="h-5 w-5" />
                Download My Travel Journal
              </Button>
              
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Compass className="h-5 w-5 mr-2" />
                Travel Gallery
              </Button>
            </div>
          </div>
        </div>
        
        {/* Fun Facts Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Fun Facts <span className="text-futuristic-neonGreen">About Me</span>
            </h3>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">
              Some interesting tidbits from my adventures around the world that might surprise you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funFacts.map((item, index) => (
              <Card key={index} className="bg-gradient-to-br from-futuristic-dark/90 to-futuristic-dark/70 backdrop-blur-sm border border-white/10 hover:border-futuristic-cyan/30 transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-white/80">{item.fact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
