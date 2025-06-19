import React from 'react';
import HeroSection from './herosection/herosection';
import About from './about/about';
import ServicesSection from './services/services';
import WhyChooseUs from './whychooseus/whychooseus';
import FAQ from './FAQ/faq';
import Contact from './contact/contact';
import Footer from './footer/footer';
import Navbar from './navbar/Navbar';


const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Navbar />
      <HeroSection />
      <About />
      <ServicesSection />
      <WhyChooseUs />
      <FAQ />
      <Contact/>
      <Footer/>

      {/* Add other sections here */}
    </div>
  );
};

export default Home;
