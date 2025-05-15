
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import PortfolioShowcase from '@/components/PortfolioShowcase';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-futuristic-dark text-white">
      <NavBar />
      <div className="pt-24">
        <PortfolioShowcase />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
