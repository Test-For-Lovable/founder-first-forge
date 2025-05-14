
import React from 'react';
import { Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-futuristic-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#" className="text-2xl font-bold text-white flex items-center gap-2 group mb-6">
              <div className="w-8 h-8 rounded-md bg-futuristic-purple flex items-center justify-center shadow-neon group-hover:animate-pulse-slow transition-all">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-gradient">Tech</span>
              <span className="text-white">Vision</span>
            </a>
            
            <p className="text-white/60 mb-6">
              Helping non-tech founders navigate the complex world of technology with confidence and strategic clarity.
            </p>
            
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'github', 'medium'].map((platform) => (
                <a 
                  key={platform}
                  href={`#${platform}`} 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-futuristic-purple/20 hover:border-futuristic-purple/30 border border-white/10 transition-all"
                >
                  <SocialIcon platform={platform} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Services', 'Portfolio', 'About', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/60 hover:text-futuristic-purple transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-futuristic-purple"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                'Strategy Consulting',
                'MVP Scoping',
                'Discovery Workshops',
                'Technical Due Diligence'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-white/60 hover:text-futuristic-purple transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-futuristic-purple"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/40">
          <p>&copy; {currentYear} TechVision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Simple social icons component
const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case 'twitter':
      return (
        <svg className="h-5 w-5 text-white/60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 4C22 4 21.3 6.1 20 7.4C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.6 3 5C5.2 7.6 8.6 9.1 12 9C11.1 4.8 16 2.4 19 5.2C20.1 5.2 22 4 22 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="h-5 w-5 text-white/60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'github':
      return (
        <svg className="h-5 w-5 text-white/60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18 15.17 21 14.1 21 8.52C20.9991 7.12383 20.5118 5.78043 19.64 4.72C20.0545 3.4373 20.03 2.03606 19.57 0.770001C19.57 0.770001 18.36 0.420001 16 2.22C14.0397 1.60052 12.0103 1.60052 10.05 2.22C7.68 0.420001 6.47 0.770001 6.47 0.770001C5.99998 2.04293 5.98295 3.45184 6.40998 4.74C5.53356 5.81375 5.04558 7.17215 5.04998 8.58C5.04998 14.02 8.04998 15.17 10.99 15.52C10.6618 15.8615 10.4098 16.2691 10.2495 16.7155C10.0892 17.1618 10.0234 17.6367 10.06 18.11V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'medium':
      return (
        <svg className="h-5 w-5 text-white/60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 6H12L16 18H12L8 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 6H20L18 18H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 6H6L4 18H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
};

export default Footer;
