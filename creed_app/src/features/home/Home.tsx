import React from 'react';
import HeroSection from './herosection/herosection';
import About from './about/about';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <About />
      {/* Add other sections here */}
    </div>
  );
};

export default Home;
