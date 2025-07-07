import React from 'react';
import HeroSection from './herosection/herosection';
import About from './about/about';
import ServicesSection from './services/services';
import WhyChooseUs from './whychooseus/whychooseus';
import FAQ from './FAQ/faq';
import Contact from './contact/contact';




const Home: React.FC = () => {
  return (
    <div className="home-page">
      
      <HeroSection />
      <About />
      <ServicesSection />
      <WhyChooseUs />
      <FAQ />
      <Contact/>


      {/* Add other sections here */}
    </div>
  );
};

export default Home;
