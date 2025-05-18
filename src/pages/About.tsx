
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import TravelMapSection from '@/components/TravelMapSection';
import PersonalSection from '@/components/PersonalSection';

const About = () => {
  return (
    <div className="min-h-screen bg-futuristic-dark text-white">
      <NavBar />
      <div className="pt-20">
        <AboutSection />
        <TravelMapSection />
        <PersonalSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;
