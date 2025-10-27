import React from 'react';
import Button from '../../components/Button';

interface HeroSectionProps {
  onExploreClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-gradient-to-b from-white to-[#fcfaf8] overflow-hidden">
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-green-900 leading-tight">
          Unlock Oregon's Business Network.
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
          An interactive directory and analysis of Oregon's Chambers of Commerce. Discover the organizations driving local economies, compare their effectiveness, and connect.
        </p>
        <div className="mt-12">
          <Button onClick={onExploreClick}>
            Explore the Directory
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
