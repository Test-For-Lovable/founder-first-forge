
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-futuristic-dark text-white">
      <NavBar />
      <div className="pt-24">
        <div className="container mx-auto px-4 flex justify-end mb-8">
          <Button 
            className="flex items-center gap-2 bg-gradient-to-r from-futuristic-purple to-futuristic-blue text-white"
            onClick={() => window.location.href = '/portfolio-management'}
          >
            <PlusCircle className="h-5 w-5" />
            Manage Portfolio
          </Button>
        </div>
        <PortfolioShowcase />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
