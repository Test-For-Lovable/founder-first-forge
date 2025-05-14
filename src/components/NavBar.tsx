
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-4 backdrop-blur-lg bg-futuristic-dark/80 border-b border-white/10' : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-white flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-md bg-futuristic-purple flex items-center justify-center shadow-neon group-hover:animate-pulse-slow transition-all">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-gradient">Tech</span>
          <span>Vision</span>
        </a>
        
        {isMobile ? (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden bg-white/5 border border-white/10 text-white hover:bg-white/10"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        ) : (
          <div className="hidden md:flex items-center space-x-1">
            {["Services", "About", "Testimonials", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="mx-2 px-4 py-2 text-white/80 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {item}
              </a>
            ))}
            <Button className="ml-4 bg-gradient-to-r from-futuristic-purple to-futuristic-blue text-white hover:shadow-neon transition-all">
              Book a Consultation
            </Button>
          </div>
        )}

        {menuOpen && isMobile && (
          <div className="absolute top-full left-0 right-0 bg-futuristic-dark/95 backdrop-blur-xl border-b border-white/10 py-6 px-4 flex flex-col space-y-4 animate-fade-in">
            {["Services", "About", "Testimonials", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="py-3 px-4 text-white/80 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button 
              className="bg-gradient-to-r from-futuristic-purple to-futuristic-blue text-white w-full mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Book a Consultation
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
