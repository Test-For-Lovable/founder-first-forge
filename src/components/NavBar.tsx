
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-consulting-navy">
          <span className="text-consulting-purple">Tech</span>Consult
        </a>
        
        {isMobile ? (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>
        ) : (
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-consulting-navy hover:text-consulting-purple transition-colors">Services</a>
            <a href="#about" className="text-consulting-navy hover:text-consulting-purple transition-colors">About</a>
            <a href="#testimonials" className="text-consulting-navy hover:text-consulting-purple transition-colors">Testimonials</a>
            <a href="#contact" className="text-consulting-navy hover:text-consulting-purple transition-colors">Contact</a>
            <Button className="bg-consulting-purple hover:bg-consulting-navy text-white">
              Book a Consultation
            </Button>
          </div>
        )}

        {menuOpen && isMobile && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 flex flex-col space-y-3 animate-fade-in">
            <a href="#services" className="text-consulting-navy hover:text-consulting-purple transition-colors" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#about" className="text-consulting-navy hover:text-consulting-purple transition-colors" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#testimonials" className="text-consulting-navy hover:text-consulting-purple transition-colors" onClick={() => setMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="text-consulting-navy hover:text-consulting-purple transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
            <Button className="bg-consulting-purple hover:bg-consulting-navy text-white w-full" onClick={() => setMenuOpen(false)}>
              Book a Consultation
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
