
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, Zap } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    const adminAuth = localStorage.getItem('adminAuthenticated');
    setIsAdmin(adminAuth === 'true');
    
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navigationLinks = [
    { name: 'Services', path: '/#services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/#about' },
    { name: 'Testimonials', path: '/#testimonials' },
    { name: 'Contact', path: '/#contact' },
  ];
  
  if (isAdmin) {
    navigationLinks.push({ name: 'Admin', path: '/admin' });
  }

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-futuristic-dark/80 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-2xl flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-futuristic-purple flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-futuristic-purple">Usama</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 items-center">
            {navigationLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className={`text-white hover:text-futuristic-cyan transition-colors ${
                  location.pathname === link.path || 
                  (link.path.startsWith('/#') && location.pathname === '/' && location.hash === link.path.substring(1)) 
                    ? 'text-futuristic-cyan' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-futuristic-purple hover:bg-futuristic-purple/90 text-white rounded-md ml-4">
              <a href="http://meetings-eu1.hubspot.com/usama-ahmed" target="_blank" rel="noopener noreferrer">
                Book a Consultation
              </a>
            </Button>
          </nav>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <MenuIcon className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-futuristic-dark text-white border-white/10">
                <nav className="flex flex-col space-y-6 pt-10">
                  {navigationLinks.map((link) => (
                    <Link 
                      key={link.name}
                      to={link.path}
                      className={`text-lg ${
                        location.pathname === link.path ? 'text-futuristic-cyan' : 'text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button asChild className="bg-futuristic-purple hover:bg-futuristic-purple/90 text-white w-full">
                    <a href="http://meetings-eu1.hubspot.com/usama-ahmed" target="_blank" rel="noopener noreferrer">
                      Book a Consultation
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
