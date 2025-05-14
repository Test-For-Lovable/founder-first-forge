
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-consulting-navy text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-consulting-purple">Tech</span>Consult
            </h3>
            <p className="text-gray-400 mb-4">
              Helping non-tech founders navigate the complex world of technology with confidence.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-consulting-purple transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-consulting-purple transition-colors">About</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-consulting-purple transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-consulting-purple transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-consulting-purple transition-colors">Strategy Consulting</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-consulting-purple transition-colors">MVP Scoping</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-consulting-purple transition-colors">Discovery Workshops</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-consulting-purple transition-colors">Technical Due Diligence</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} TechConsult. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
